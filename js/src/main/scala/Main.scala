package jsmain

import scala.scalajs.js
import scala.scalajs.js.typedarray.{DataView, ArrayBuffer}
import org.scalajs.dom
import org.scalajs.dom.experimental.{Fetch, Response}
import scala.scalajs.js.annotation._
import js.JSConverters._
import main.Expectation

import scala.concurrent.ExecutionContext.Implicits.global

/**
  * This code runs in a web worker. It loads the table file,
  * and calculates the optimal strategy for various game states.
  * It also provides a nice API so that the client doesn't have
  * to worry about calculating the cache index from state.
  */
@JSExportTopLevel("Main")
object Main {
    var cache: Option[DataViewCache] = None

    @JSExport("main")
    def main(): Unit = { 
        js.Dynamic.global.onmessage = onMessage _

        val response = Fetch.fetch("./table").toFuture

        val arrayBuffer = response flatMap { res => 
            res.arrayBuffer().toFuture
        }

        arrayBuffer foreach { buffer => 
            val dataView = new DataView(buffer)
            cache = Some(new DataViewCache(dataView))
            js.Dynamic.global.postMessage(
                js.Dynamic.literal("message" -> "cacheLoaded")
            )
        }

    }

    def onMessage(msg: dom.MessageEvent) = {
        val data = msg.data.asInstanceOf[IncomingMessage]
        val action = data.action

        action match {
            case "choose" => chooseMove(messageToState(data), data.roll.toArray, data.rollsLeft)
            case _ =>
                js.Dynamic.global.postMessage(s"Received: $action")
        }
    }

    def chooseMove(state: Int, roll: Array[Int], rollsLeft: Int): Unit = {
        val result = cache.map(makeChoice(state, roll, rollsLeft, _))
        result match {
            case Some(Left(keeps)) => 
                js.Dynamic.global.postMessage(
                    js.Dynamic.literal("message" -> "keep", "value" -> keeps.toJSArray)
                )
            case Some(Right(category)) => 
                js.Dynamic.global.postMessage(
                    js.Dynamic.literal(
                        "message" -> "category", 
                        "value" -> categoryToString(category)
                    )
                )
            case None => 
                js.Dynamic.global.postMessage(
                    js.Dynamic.literal("message" -> "cacheNotLoaded")
                )
        }
    }

    def makeChoice(
        state: Int, 
        roll: Array[Int], 
        rollsLeft: Int, 
        cache: DataViewCache
    ): Either[Array[Int], Int] = {

        val expectation = new Expectation(state, cache)

        lazy val (_, category) = expectation.endOfTurn(roll)
        if (rollsLeft == 0) return Right(category)

        val (_, keeps) = expectation.keeps(roll, 2)

        if (keeps.sum == 5) {
            Right(category)
        }
        else {
            Left(keeps)
        }
    }

    def messageToState(message: IncomingMessage): Int = {
        val yahtzeeBonus = 
            if (message.yahtzeeBonusAvailable) Expectation.YAHTZEE_BONUS
            else 0

        val categories = message.openCategories.toArray.map(stringToCategory).sum

        val upperScore = Math.min(message.upperScore, 63)

        yahtzeeBonus + categories + upperScore
    }

    def categoryToString(category: Int): String = {
        category match {
            case Expectation.UPPER_ONE => "one"
            case Expectation.UPPER_TWO => "two"
            case Expectation.UPPER_THREE => "three"
            case Expectation.UPPER_FOUR => "four"
            case Expectation.UPPER_FIVE => "five"
            case Expectation.UPPER_SIX => "six"
            case Expectation.THREE_OF_A_KIND => "threeOfAKind"
            case Expectation.FOUR_OF_A_KIND => "fourOfAKind"
            case Expectation.FULL_HOUSE => "fullHouse"
            case Expectation.SMALL_STRAIGHT => "smallStraight"
            case Expectation.LARGE_STRAIGHT => "largeStraight"
            case Expectation.YAHTZEE => "yahtzee"
            case Expectation.CHANCE => "chance"
        }
    }

    def stringToCategory(categoryName: String): Int = {
        categoryName match {
            case "one" => Expectation.UPPER_ONE 
            case "two" => Expectation.UPPER_TWO
            case "three" => Expectation.UPPER_THREE
            case "four" => Expectation.UPPER_FOUR
            case "five" => Expectation.UPPER_FIVE
            case "six" => Expectation.UPPER_SIX
            case "threeOfAKind" => Expectation.THREE_OF_A_KIND
            case "fourOfAKind" => Expectation.FOUR_OF_A_KIND
            case "fullHouse" => Expectation.FULL_HOUSE
            case "smallStraight" => Expectation.SMALL_STRAIGHT
            case "largeStraight" => Expectation.LARGE_STRAIGHT
            case "yahtzee" => Expectation.YAHTZEE
            case "chance" => Expectation.CHANCE
        }
    }
}

trait IncomingMessage extends js.Object{
    val action: String
    val roll: js.Array[Int]
    val rollsLeft: Int
    val openCategories: js.Array[String]
    val upperScore: Int
    val yahtzeeBonusAvailable: Boolean
}