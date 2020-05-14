import org.scalatest._

class ProbabiltySpec extends FlatSpec with Matchers {
  val approxEq = (a: Double, b: Double) => Math.abs(a - b) < 0.0000001
  "rollProbability" should "work for yahtzee" in {
    val initial = Array(0, 0, 0, 0, 0, 0)
    val after = Array(0, 0, 0, 0, 0, 5)
    val result = Probability.rollProbability(after, initial)

    result shouldEqual 1d / 7776d
  }

  "rollProbability" should "work with initial" in {
    val initial = Array(0, 2, 1, 0, 0, 0)

    var after = Array(0, 2, 3, 0, 0, 0)
    var result = Probability.rollProbability(after, initial)
    result shouldEqual 1d / 36d

    after = Array(0, 2, 2, 0, 1, 0)
    result = Probability.rollProbability(after, initial)
    result shouldEqual 2d / 36d
  }

  "rollProbability" should "add up to 1" in {
    val withoutInitial = dice => Probability.rollProbability(dice, Array(0, 0, 0, 0, 0, 0))

    val result = Combinations.allRolls(5).map(withoutInitial).sum
    
    approxEq(result, 1d) shouldBe true
  }

  "rollProbability" should "add up to 1 with initial" in {
    val initial = Array(0, 2, 1, 0, 0, 0);
    val withInitial = dice => Probability.rollProbability(dice, initial)

    val rolls = Combinations.allRolls(3, initial)

    val result = rolls.map(withInitial).sum
    
    approxEq(result, 1d) shouldBe true
  }
}
