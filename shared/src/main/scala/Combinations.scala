package main

import scala.collection.mutable

object Combinations {
    val emptyDiceGroup = Array(0, 0, 0, 0, 0, 0)

    /**
      * Calculate all possible ways to choose k from n,
      * represented as an array of Ints
      * 
      * e.g., choose(3, 2) = [[0, 1], [0, 2], [1,2]]
      *
      * @param n
      * @param k
      * @param startIdx
      */
    def choose(n: Int, k: Int, startIdx: Int = 0): List[List[Int]] = {
        if (k == 0) List.empty
        else if (k == 1) (0 to n - 1).toList.map(i => List(i + startIdx))
        else (0 to n - k).toList.flatMap((i: Int) =>  
            choose(n - i - 1, k - 1, i + startIdx + 1).map(i + startIdx :: _)
        )
    }

    /**
      * All possible unique roll combinations starting from some initial
      * set of dice. A DiceGroup here is acutally a list of counts.
      * 
      * e.g., two 3's and three 5's looks like [0, 0, 2, 0, 3, 0]
      *
      * @param n
      * @param initial
      * @param startIdx
      */
    def allRolls(n: Int, initial: Array[Int] = emptyDiceGroup, startIdx: Int = 0): mutable.ArrayBuffer[Array[Int]] = {
        val result = mutable.ArrayBuffer[Array[Int]]()
        def putValues(n: Int, initial: Array[Int], startIdx: Int): Unit = {
            val current = initial(startIdx);
            if (startIdx == initial.length - 1) {
               result += initial.updated(startIdx, n + current)
            }
            else {
                for (count <- (0 to n)) {
                    putValues(n - count, initial.updated(startIdx, count + current), startIdx + 1)
                }
            }
        }
        putValues(n, initial, startIdx)
        result
    }

    /**
      * All possible ways to choose dice to keep given some roll.
      *
      * @param initial
      * @param startIdx
      * @return
      */
    def allKeeps(initial: Array[Int], startIdx: Int = 0): mutable.ArrayBuffer[Array[Int]] = {
        val result = mutable.ArrayBuffer[Array[Int]]()
        def putValues(initial: Array[Int], startIdx: Int): Unit = {
            val current = initial(startIdx);
            if (startIdx == initial.length - 1) {
                for (count <- 0 to current) {
                    result += initial.updated(startIdx, current - count)
                }
            }
            else {
                for ( count <- 0 to current) {
                    putValues(initial.updated(startIdx, current - count), startIdx + 1)
                }
            }
        }
        putValues(initial, startIdx)
        result
    }
}