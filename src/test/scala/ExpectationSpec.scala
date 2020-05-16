import org.scalatest._

class ExpectationSpec extends FlatSpec with Matchers {
  "endOfTurn" should "work for last yahtzee" in {
    val state = Expectation.YAHTZEE

    val roll = Array(0, 0, 5, 0, 0, 0)

    val cache = Array[Int]()

    val (value, keepsOrCategory) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 50
    
  }
}