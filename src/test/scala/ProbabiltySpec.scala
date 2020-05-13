import org.scalatest._

class ProbabiltySpec extends FlatSpec with Matchers {
  "rollProbability" should "work for yahtzee" in {
    val initial = Array(0, 0, 0, 0, 0, 0)
    val after = Array(0, 0, 0, 0, 0, 5)
    val result = Probability.rollProbability(after, initial)

    result shouldEqual 1f / 7776f
  }

  "rollProbability" should "work with initial" in {
    val initial = Array(0, 2, 1, 0, 0, 0)

    var after = Array(0, 2, 3, 0, 0, 0)
    var result = Probability.rollProbability(after, initial)
    result shouldEqual 1f / 36f

    after = Array(0, 2, 2, 0, 1, 0)
    result = Probability.rollProbability(after, initial)
    result shouldEqual 2f / 36f
  }
}
