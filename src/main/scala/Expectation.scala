import scala.collection.mutable
import main.Score._
import main.Combinations
import main.Probability

class Expectation(state: Int) {
    private val rollMemo = mutable.Map[(Int, Int), Double]()
    private val keepMemo = mutable.Map[(Int, Int), (Double, Array[Int])]()
    private val endMemo = mutable.Map[Int, (Double, Int)]()
    def endOfTurn(roll: Array[Int], cache: Array[Float]): (Double, Int) = {
        if (endMemo.contains(hash(roll))) return endMemo.getOrElse(hash(roll), (0d, 0))

        val yahtzeeIdx = roll.indexOf(5)
        val hasUnusableYahtzee = yahtzeeIdx != -1 && !((state & Expectation.YAHTZEE) > 0)
        val hasYahtzeeBonus = (Expectation.YAHTZEE_BONUS & state) > 0 && hasUnusableYahtzee
        val canUseJoker = hasUnusableYahtzee && (Math.pow(2, yahtzeeIdx + 6).toInt & state) == 0
        
        val currentUpperTotal = upperScoreFromState(state)
        val openCategories = Expectation.categories.filter((c: Int) => (c & state) > 0)

        val result = openCategories.map(category => {
            val catScore = score(category, roll, canUseJoker)

            val nextUpperTotal = 
                if (categoryIsUpper(category)) Math.min(currentUpperTotal + catScore, 63)
                else currentUpperTotal

            val nextState  = (state ^ category) - currentUpperTotal + nextUpperTotal

            // TODO: Set yahtzee bonus on next state

            val yahtzeeBonus = if (hasYahtzeeBonus) 100d else 0d
            val upperBonus = if (currentUpperTotal < 63 && nextUpperTotal == 63) 35d else 0d

            val addedScore = catScore.toDouble + yahtzeeBonus + upperBonus
            val nextStateExpectation = if (openCategories.length == 1) 0 else cache(nextState)

            (addedScore + nextStateExpectation, category)
        }).maxBy(_._1)
        
        endMemo += (hash(roll) -> result)

        result
    }

    def rolls(kept: Array[Int], rollsLeft: Int, cache: Array[Float]): Double = {
        if (rollMemo.contains((hash(kept), rollsLeft))) return rollMemo.getOrElse((hash(kept), rollsLeft), 0d)
        
        val keptNum = kept.sum
        val result = Combinations.allRolls(5 - keptNum, kept).map(roll => {
            val (expectation, _) = 
                if (rollsLeft == 1) endOfTurn(roll, cache)
                else keeps(roll, rollsLeft - 1, cache)
            val probability = Probability.rollProbability(roll, kept)
            expectation * probability
        }).sum

        rollMemo += ((hash(kept), rollsLeft) -> result)

        result
    }

    def keeps(roll: Array[Int], rollsLeft: Int, cache: Array[Float]): (Double, Array[Int]) = {
        if (keepMemo.contains((hash(roll), rollsLeft))) {
            return keepMemo.getOrElse((hash(roll), rollsLeft), (0d, Array(0, 0, 0, 0, 0, 0)))
        }

        val result = Combinations.allKeeps(roll).map(kept => {
            val value = 
                if (kept.sum == 5) endOfTurn(roll, cache)._1
                else rolls(kept, rollsLeft, cache)
            (value, kept)
        }).maxBy(_._1)

        keepMemo += ((hash(roll), rollsLeft) -> result)

        result
    }
    
    private def hash(arr: Array[Int]) = {
        arr(0) * 1 + arr(1) * 10 + arr(2) * 100 + arr(3) * 1000 + arr(4) * 10000 + arr(5) * 100000
    }

    private def upperScoreFromState(state: Int) = state & 63
    private def categoryIsUpper(c: Int) = c >= Expectation.UPPER_ONE && c <= Expectation.UPPER_SIX

    private def score(category: Int, roll: Array[Int], useJoker: Boolean) = {
        category match {
            case Expectation.UPPER_ONE => upperCategory(1)(roll)
            case Expectation.UPPER_TWO => upperCategory(2)(roll)
            case Expectation.UPPER_THREE => upperCategory(3)(roll)
            case Expectation.UPPER_FOUR => upperCategory(4)(roll)
            case Expectation.UPPER_FIVE => upperCategory(5)(roll)
            case Expectation.UPPER_SIX => upperCategory(6)(roll)
            case Expectation.THREE_OF_A_KIND => threeOfAKind(roll, useJoker)
            case Expectation.FOUR_OF_A_KIND => fourOfAKind(roll, useJoker)
            case Expectation.FULL_HOUSE => fullHouse(roll, useJoker)
            case Expectation.SMALL_STRAIGHT => smallStraight(roll, useJoker)
            case Expectation.LARGE_STRAIGHT => largeStraight(roll, useJoker)
            case Expectation.YAHTZEE => yahtzee(roll)
            case Expectation.CHANCE => chance(roll)
        }
    }
}

object Expectation {
    val UPPER_ONE = Math.pow(2, 6).toInt;
    val UPPER_TWO = Math.pow(2, 7).toInt;
    val UPPER_THREE = Math.pow(2, 8).toInt;
    val UPPER_FOUR = Math.pow(2, 9).toInt;
    val UPPER_FIVE = Math.pow(2, 10).toInt;
    val UPPER_SIX = Math.pow(2, 11).toInt;
    val THREE_OF_A_KIND = Math.pow(2, 12).toInt;
    val FOUR_OF_A_KIND = Math.pow(2, 13).toInt;
    val FULL_HOUSE = Math.pow(2, 14).toInt;
    val SMALL_STRAIGHT = Math.pow(2, 15).toInt;
    val LARGE_STRAIGHT = Math.pow(2, 16).toInt;
    val CHANCE = Math.pow(2, 18).toInt;
    val YAHTZEE = Math.pow(2, 19).toInt;
    val YAHTZEE_BONUS = Math.pow(2, 20).toInt;

    val categories = Array( 
        UPPER_ONE,
        UPPER_TWO,
        UPPER_THREE,
        UPPER_FOUR,
        UPPER_FIVE,
        UPPER_SIX,
        THREE_OF_A_KIND,
        FOUR_OF_A_KIND,
        FULL_HOUSE,
        SMALL_STRAIGHT,
        LARGE_STRAIGHT,
        CHANCE,
        YAHTZEE,
    );

    def allStatesForNOpenCategories(n: Int) = {
        val categories = Combinations.choose(13, n)
        
        val all = for (c <- categories; bonus <- 0 to 1; upperScore <- 0 to 63) yield {
            val categoryBits = c.foldLeft(0){ (prev, cat) => Math.pow(2, cat + 6).toInt }
            bonus * YAHTZEE_BONUS + categoryBits + upperScore
        }
        
        all filter { s => true } 
    }

    def stateIsPossible(state: Int) = {
        val nums = for (
            s <- 1 to 6 
            if (state & Math.pow(2, s + 5).toInt) == 0
        ) yield s

        def scoreIsPossible(s: Array[Int], n: Int): Boolean = {
            if (n == 0) true
            else if (s.length == 0) false
            else {
                val xks = for (x <- s; k <- 1 to 5) yield (x, k)
                
                xks.exists { case (x, k) => {
                    val kx = k * x
                    kx <= n && scoreIsPossible(s.filter(_ != x), n - kx)
                } }
            }
        }

        val bonusIsPossible = !(
            (state & YAHTZEE_BONUS) > 0 
            && (state & YAHTZEE) > 0
        )
        
        val scorePossible = 
            if ((state & 63) == 63) true
            else scoreIsPossible(nums.toArray, state & 63)

        scorePossible && bonusIsPossible 
    }
}