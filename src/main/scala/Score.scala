object Score {
    type Dice = Array[Int]
    def upperCategory(n: Int)(dice: Dice) = dice(n - 1) * n

    def threeOfAKind(dice: Dice) = {
        if (dice.exists(_ >= 3)) diceSum(dice)
        else 0
    }

    def fourOfAKind(dice: Dice) = {
        if (dice.exists(_ >= 4)) diceSum(dice)
        else 0
    }

    def fullHouse(dice: Dice) = {
        if (dice.exists(_ == 2) && dice.exists(_ == 3)) 25
        else 0
    }

    def smallStraight(dice: Dice) = {
        if (countConsecutive(dice) >= 4) 30
        else 0
    }

    def largeStraight(dice: Dice) = {
        if (countConsecutive(dice) >= 5) 40
        else 0
    }

    def yahtzee(dice: Dice) = {
        if (dice.exists(_ == 5)) 50
        else 0
    }

    def chance = diceSum(_)

    private def diceSum(dice: Dice) = dice.zipWithIndex.map { 
        case (value, idx) => value * (idx + 1) 
    }.sum

    private def countConsecutive(dice: Dice) = {
        dice.foldLeft((0, 0)) {
            case ((max, currentSeq), n) => 
                if (n == 0) (max, 0)
                else {
                    val nextSeq = currentSeq + 1
                    (Math.max(nextSeq, max), nextSeq)
                }
        }._1
    }

}