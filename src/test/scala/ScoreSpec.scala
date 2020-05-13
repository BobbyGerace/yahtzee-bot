
import org.scalatest._

class ScoreSpec extends FlatSpec with Matchers {
  "The upperCategory function" should "work" in {
    val dice = Array(1, 2, 0, 1, 1, 0)

    Score.upperCategory(1)(dice) shouldEqual 1
    Score.upperCategory(2)(dice) shouldEqual 4
    Score.upperCategory(3)(dice) shouldEqual 0
    Score.upperCategory(4)(dice) shouldEqual 4
    Score.upperCategory(5)(dice) shouldEqual 5
    Score.upperCategory(6)(dice) shouldEqual 0
  }

  "The threeOfAKind function" should "work" in {
    var dice = Array(0, 1, 0, 3, 0, 1)
    Score.threeOfAKind(dice) shouldEqual 20

    dice = Array(0, 1, 0, 1, 2, 1)
    Score.threeOfAKind(dice) shouldEqual 0
  }

  "The fourOfAKind function" should "work" in {
    var dice = Array(0, 1, 0, 0, 4, 0)
    Score.fourOfAKind(dice) shouldEqual 22

    dice = Array(0, 1, 0, 1, 3, 0)
    Score.fourOfAKind(dice) shouldEqual 0
  }

  "The fullHouse function" should "work" in {
    var dice = Array(0, 2, 0, 0, 3, 0)
    Score.fullHouse(dice) shouldEqual 25

    dice = Array(0, 1, 0, 1, 3, 0)
    Score.fullHouse(dice) shouldEqual 0
  }

  "The smallStraight function" should "work" in {
    var dice = Array(0, 1, 1, 2, 1, 0)
    Score.smallStraight(dice) shouldEqual 30

    dice = Array(1, 1, 1, 1, 1, 0)
    Score.smallStraight(dice) shouldEqual 30

    dice = Array(0, 1, 1, 1, 1, 1)
    Score.smallStraight(dice) shouldEqual 30

    dice = Array(1, 1, 0, 1, 1, 1)
    Score.smallStraight(dice) shouldEqual 0
  }

  "The largeStraight function" should "work" in {
    var dice = Array(1, 1, 1, 1, 1, 0)
    Score.largeStraight(dice) shouldEqual 40

    dice = Array(0, 1, 1, 1, 1, 1)
    Score.largeStraight(dice) shouldEqual 40

    dice = Array(1, 0, 1, 1, 1, 1)
    Score.largeStraight(dice) shouldEqual 0
  }

  "The yahtzee function" should "work" in {
    var dice = Array(5, 0, 0, 0, 0, 0)
    Score.yahtzee(dice) shouldEqual 50

    dice = Array(0, 0, 0, 0, 5, 0)
    Score.yahtzee(dice) shouldEqual 50

    dice = Array(0, 0, 1, 0, 4, 0)
    Score.yahtzee(dice) shouldEqual 0
  }

  "The chance function" should "work" in {
    var dice = Array(5, 0, 0, 0, 0, 0)
    Score.chance(dice) shouldEqual 5

    dice = Array(1, 3, 0, 1, 0, 0)
    Score.chance(dice) shouldEqual 11
  }
}
