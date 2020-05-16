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
        YAHTZEE_BONUS,
    );

    def endOfTurn(state: Int, roll: Array[Int], cache: Array[Int]): (Double, Either[Array[Int], Int]) = {
        println(YAHTZEE)
        println(state)
        val useJoker = canUseJoker(state, roll)
        
        val openCategories = categories.filter((c: Int) => (c & state) > 0)

        val potentialScores = openCategories.map(c => (c, score(c, roll, useJoker)))

        val (maxCategory, maxScore) = potentialScores.maxBy(_._2)

        (maxScore.toDouble, Right(maxCategory))
    }

    private def upperScoreFromState(state: Int) = state & 63

    private def canUseJoker(state: Int, roll: Array[Int]) = {
        val yahtzeeIdx = roll.indexOf(5)

        yahtzeeIdx != -1 && !((state & YAHTZEE) > 0) && ((Math.pow(2, yahtzeeIdx + 6).toInt & state) > 0)
    }

    private def score(category: Int, roll: Array[Int], useJoker: Boolean) = {
        println(category)
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