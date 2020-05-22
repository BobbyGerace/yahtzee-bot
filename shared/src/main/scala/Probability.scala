package main

object Probability {
    private def factorial(n: Int): Int = 
        if (n == 1) 1 else n * factorial(n - 1)

    def rollProbability(
        diceGroup: Array[Int], 
        initialGroup: Array[Int] = Combinations.emptyDiceGroup
    ): Double = {
        val (denom, count) = (diceGroup zip initialGroup).foldLeft((1, 0))(foldRolls)

        if (count == 0) 1
        else factorial(count).toDouble / (denom * Math.pow(6, count)).toDouble 
    }

    private def foldRolls(prev: (Int, Int), current: (Int, Int)) = {
        val (denom, dieCount) = prev
        val (currentDice, initialDice) = current
        val addedDice = currentDice - initialDice

        if (addedDice > 0) (denom * factorial(addedDice), dieCount + addedDice)
        else (denom, dieCount)
    }
}