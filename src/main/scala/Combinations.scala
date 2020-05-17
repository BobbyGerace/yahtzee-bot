package main

import scala.collection.mutable

object Combinations {
    val emptyDiceGroup = Array(0, 0, 0, 0, 0, 0)

    def choose(n: Int, k: Int, startIdx: Int = 0): List[List[Int]] = {
        if (k == 0) List.empty
        else if (k == 1) (0 to n - 1).toList.map(i => List(i + startIdx))
        else (0 to n - k).toList.flatMap((i: Int) =>  
            choose(n - i - 1, k - 1, i + startIdx + 1).map(i + startIdx :: _)
        )
    }

    def allRolls(n: Int, initial: Array[Int] = emptyDiceGroup, startIdx: Int = 0): mutable.ArrayBuffer[Array[Int]] = {
        val result = mutable.ArrayBuffer[Array[Int]]()
        def helper(n: Int, initial: Array[Int], startIdx: Int): Unit = {
            val current = initial(startIdx);
            if (startIdx == initial.length - 1) {
               result += initial.updated(startIdx, n + current)
            }
            else {
                for (count <- (0 to n)) {
                    helper(n - count, initial.updated(startIdx, count + current), startIdx + 1)
                }
            }
        }
        helper(n, initial, startIdx)
        result
    }

    def allKeeps(initial: Array[Int], startIdx: Int = 0): mutable.ArrayBuffer[Array[Int]] = {
        val result = mutable.ArrayBuffer[Array[Int]]()
        def helper(initial: Array[Int], startIdx: Int): Unit = {
            val current = initial(startIdx);
            if (startIdx == initial.length - 1) {
                for (count <- 0 to current) {
                    result += initial.updated(startIdx, current - count)
                }
            }
            else {
                for ( count <- 0 to current) {
                    helper(initial.updated(startIdx, current - count), startIdx + 1)
                }
            }
        }
        helper(initial, startIdx)
        result
    }
}