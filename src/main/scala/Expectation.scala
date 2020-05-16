import main.Score._

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

    def endOfTurn(state: Int, roll: Array[Int], cache: Array[Float]): (Double, Int) = {
        val yahtzeeIdx = roll.indexOf(5)
        val hasUnusableYahtzee = yahtzeeIdx != -1 && !((state & YAHTZEE) > 0)
        val hasYahtzeeBonus = (YAHTZEE_BONUS & state) > 0 && hasUnusableYahtzee
        val canUseJoker = hasUnusableYahtzee && (Math.pow(2, yahtzeeIdx + 6).toInt & state) == 0
        
        val openCategories = categories.filter((c: Int) => (c & state) > 0)

        val currentUpperTotal = upperScoreFromState(state)

        val potentialScores = openCategories.map(category => {
            val catScore = score(category, roll, canUseJoker)

            val nextUpperTotal = 
                if (categoryIsUpper(category)) Math.min(currentUpperTotal + catScore, 63)
                else currentUpperTotal

            val nextState  = (state ^ category) - currentUpperTotal + nextUpperTotal

            val yahtzeeBonus = if (hasYahtzeeBonus) 100d else 0d
            val upperBonus = if (currentUpperTotal < 63 && nextUpperTotal == 63) 35d else 0d

            val addedScore = catScore.toDouble + yahtzeeBonus + upperBonus
            val nextStateExpectation = if (openCategories.length == 1) 0 else cache(nextState)

            (addedScore + nextStateExpectation, category)
        })

        potentialScores.maxBy(_._1)
    }

    private def upperScoreFromState(state: Int) = state & 63
    private def categoryIsUpper(c: Int) = c >= UPPER_ONE && c <= UPPER_SIX


    private def score(category: Int, roll: Array[Int], useJoker: Boolean) = {
        category match {
            case UPPER_ONE => upperCategory(1)(roll)
            case UPPER_TWO => upperCategory(2)(roll)
            case UPPER_THREE => upperCategory(3)(roll)
            case UPPER_FOUR => upperCategory(4)(roll)
            case UPPER_FIVE => upperCategory(5)(roll)
            case UPPER_SIX => upperCategory(6)(roll)
            case THREE_OF_A_KIND => threeOfAKind(roll, useJoker)
            case FOUR_OF_A_KIND => fourOfAKind(roll, useJoker)
            case FULL_HOUSE => fullHouse(roll, useJoker)
            case SMALL_STRAIGHT => smallStraight(roll, useJoker)
            case LARGE_STRAIGHT => largeStraight(roll, useJoker)
            case YAHTZEE => yahtzee(roll)
            case CHANCE => chance(roll)
        }
    }
}