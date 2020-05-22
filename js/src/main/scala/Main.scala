package jsmain

import scala.scalajs.js
import scala.scalajs.js.typedarray.{DataView, ArrayBuffer}
import org.scalajs.dom.experimental.{Fetch, Response}
import scala.scalajs.js.annotation._
import main.Expectation

import scala.concurrent.ExecutionContext.Implicits.global

object Main {
    def main(args: Array[String]) { 

        val response = Fetch.fetch("./table").toFuture

        val arrayBuffer = response flatMap { res => 
            res.arrayBuffer().toFuture
        }

        val DataView = arrayBuffer map { buffer => 
            val dataView = new DataView(buffer)
            val cache = new DataViewCache(dataView)

            val state = (
                Expectation.YAHTZEE 
                + Expectation.CHANCE
                + Expectation.UPPER_FIVE
                + 58
            );

            val roll = Array(0, 0, 0, 0, 1, 4);

            val t0 = System.currentTimeMillis()
            val (value, keeps) = new Expectation(state, cache).keeps(roll, 2)
            val t1 = System.currentTimeMillis()

            println(value)
            println(keeps.mkString(", "))
            println("Elapsed time: " + (t1 - t0) + " ms")
        }
    }
}