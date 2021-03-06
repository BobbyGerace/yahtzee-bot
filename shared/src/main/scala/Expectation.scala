package main

import scala.collection.mutable
import main.Score._

/**
  * Calculates expectation values for various game states. An expectation
  * value is the average increase in points that can be expected for the
  * rest of the game, given that the optimal strategy is used. Each instance
  * of this class takes a state, which represents the state of the game at 
  * the beginning of the turn, and a cache, which contains cached expectation
  * values for other such states. The state is represented as an Int, with the
  * first bit representing whether yahtzee bonus is available, the next 13
  * bits represent whether each of the thirteen categories is open (1) or 
  * used (0). The last 6 bits represent the total score of the upper section,
  * capped at 63. This integer also serves as the index of the corresponding
  * expectation value in the cache.
  *
  * @param state
  * @param cache
  */
class Expectation(state: Int, cache: StateCache) {
    private val rollMemo = mutable.Map[(Int, Int), Double]()
    private val keepMemo = mutable.Map[(Int, Int), (Double, Array[Int])]()
    private val endMemo = mutable.Map[Int, (Double, Int)]()

    /**
      * Calculates the expectation value for a given roll at the end of a
      * turn. Returns a tuple of the value, and the chosen category.
      *
      * @param roll
      * @return
      */
    def endOfTurn(roll: Array[Int]): (Double, Int) = {
        if (endMemo.contains(hash(roll))) return endMemo.getOrElse(hash(roll), (0d, 0))

        val yahtzeeIdx = roll.indexOf(5)
        val rollIsYahtzee = yahtzeeIdx != -1
        val hasUnusableYahtzee = rollIsYahtzee && !((state & Expectation.YAHTZEE) > 0)
        val hasYahtzeeBonus = (Expectation.YAHTZEE_BONUS & state) > 0 && hasUnusableYahtzee
        val canUseJoker = hasUnusableYahtzee && (Math.pow(2, yahtzeeIdx + 6).toInt & state) == 0
        
        val currentUpperTotal = upperScoreFromState(state)
        val openCategories = Expectation.categories.filter((c: Int) => (c & state) > 0)

        val result = openCategories.map(category => {
            val catScore = score(category, roll, canUseJoker)

            val nextUpperTotal = 
                if (categoryIsUpper(category)) Math.min(currentUpperTotal + catScore, 63)
                else currentUpperTotal
            
            val newYahtzeeBonus = 
                if (rollIsYahtzee && category == Expectation.YAHTZEE) Expectation.YAHTZEE_BONUS
                else 0

            val nextState  = (
                (state ^ category) 
                - currentUpperTotal + nextUpperTotal 
                + newYahtzeeBonus
            )

            val yahtzeeBonus = if (hasYahtzeeBonus) 100d else 0d
            val upperBonus = if (currentUpperTotal < 63 && nextUpperTotal == 63) 35d else 0d

            val addedScore = catScore.toDouble + yahtzeeBonus + upperBonus
            val nextStateExpectation = if (openCategories.length == 1) 0 else cache.get(nextState)

            (addedScore + nextStateExpectation, category)
        }).maxBy(_._1)
        
        endMemo += (hash(roll) -> result)

        result
    }

    /**
      * Gets the expectation value of a given set of kept dice by calculating
      * the average of all possible rolls.
      *
      * @param kept
      * @param rollsLeft
      * @return
      */
    def rolls(kept: Array[Int], rollsLeft: Int): Double = {
        if (rollMemo.contains((hash(kept), rollsLeft))) return rollMemo.getOrElse((hash(kept), rollsLeft), 0d)
        
        val keptNum = kept.sum
        val result = Combinations.allRolls(5 - keptNum, kept).map(roll => {
            val (expectation, _) = 
                if (rollsLeft == 1) endOfTurn(roll)
                else keeps(roll, rollsLeft - 1)
            val probability = Probability.rollProbability(roll, kept)
            expectation * probability
        }).sum

        rollMemo += ((hash(kept), rollsLeft) -> result)

        result
    }

    /**
      * Gets the expectation value of the best possible set of kept dice.
      * Returns a tuple of the value, and which dice to keep
      *
      * @param roll
      * @param rollsLeft
      * @return
      */
    def keeps(roll: Array[Int], rollsLeft: Int): (Double, Array[Int]) = {
        if (keepMemo.contains((hash(roll), rollsLeft))) {
            return keepMemo.getOrElse((hash(roll), rollsLeft), (0d, Array(0, 0, 0, 0, 0, 0)))
        }

        val result = Combinations.allKeeps(roll).map(kept => {
            val value = 
                if (kept.sum == 5) endOfTurn(roll)._1
                else rolls(kept, rollsLeft)
            (value, kept)
        }).maxBy(_._1)

        keepMemo += ((hash(roll), rollsLeft) -> result)

        result
    }
    
    // Generate a unique number for a set of dice, used to memoize values
    private def hash(arr: Array[Int]) = {
        arr(0) * 1 + arr(1) * 10 + arr(2) * 100 + arr(3) * 1000 + arr(4) * 10000 + arr(5) * 100000
    }

    private def upperScoreFromState(state: Int) = state & 63
    private def categoryIsUpper(c: Int) = c >= Expectation.UPPER_ONE && c <= Expectation.UPPER_SIX

    /**
      * Get a score for a given roll, without accounting for bonuses
      *
      * @param category
      * @param roll
      * @param useJoker
      * @return
      */
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
    val CHANCE = Math.pow(2, 17).toInt;
    val YAHTZEE = Math.pow(2, 18).toInt;
    val YAHTZEE_BONUS = Math.pow(2, 19).toInt;

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

    /**
      * Calculate expectation value for all possible states,
      * starting with fewer open categories (so they're available
      * in the cache for earlier game states). Use n = 13 to calculate
      * all states
      *
      * @param n
      * @return
      */
    def calculateStatesUpToNCategories(n: Int = 13): Array[Float] = {
        val cache = new ArrayCache(Array.fill(YAHTZEE + YAHTZEE_BONUS){0f})
        
        for (i <- 1 to n) {
            allStatesForNOpenCategories(i).par.foreach(s => { 
                val value = new Expectation(s, cache).rolls(Array(0, 0, 0, 0, 0, 0), 3 )
                cache.put(s, value.toFloat)
            })
            println("Finished calculating states for " + i + " open categories")
        }

        cache.toArray
    }

    def allStatesForNOpenCategories(n: Int) = {
        val categoryList = Combinations.choose(13, n)
        
        val all = for (c <- categoryList; bonus <- 0 to 1; upperScore <- 0 to 63) yield {
            val categoryBits = c.foldLeft(0){ (prev, cat) => prev + categories(cat)}

            bonus * YAHTZEE_BONUS + categoryBits + upperScore
        }

        all.filter(stateIsPossible)
    }

    /**
      * Some states aren't possible: Yahtzee bonuses if
      * yahtzee category is open, or certain upper scores
      * in combination with certain open categories. 
      * Figure that out here so that we don't have to waste
      * time calculating them
      *
      * @param state
      * @return
      */
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

        val bonusIsPossible = state < YAHTZEE_BONUS + YAHTZEE
        
        val scorePossible = 
            if ((state & 63) == 63) true
            else scoreIsPossible(nums.toArray, state & 63)

        scorePossible && bonusIsPossible 
    }
}