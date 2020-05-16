import org.scalatest._

class ExpectationSpec extends FlatSpec with Matchers {
  "endOfTurn" should "work for last yahtzee" in {
    val state = Expectation.YAHTZEE

    val roll = Array(0, 0, 5, 0, 0, 0)

    val cache = Array[Float]()

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 50
    category shouldEqual Expectation.YAHTZEE
  }

  "endOfTurn" should "work for upper bonus" in {
    val state = Expectation.UPPER_FIVE + 50

    val roll = Array(0, 1, 0, 0, 4, 0)

    val cache = Array[Float]()

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 55
    category shouldEqual Expectation.UPPER_FIVE
  }

  "endOfTurn" should "work for yahtzee bonus/joker" in {
    val state = Expectation.YAHTZEE_BONUS + Expectation.FULL_HOUSE + 50

    val roll = Array(0, 0, 0, 0, 5, 0)

    val cache = Array[Float]()

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 125
    category shouldEqual Expectation.FULL_HOUSE
  }

  "endOfTurn" should "work for joker without bonus" in {
    val state = Expectation.FULL_HOUSE + 50

    val roll = Array(0, 0, 0, 0, 5, 0)

    val cache = Array[Float]()

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 25
    category shouldEqual Expectation.FULL_HOUSE
  }

  "endOfTurn" should "work if already has bonus" in {
    val state = Expectation.UPPER_TWO + 63

    val roll = Array(0, 4, 0, 0, 1, 0)

    val cache = Array[Float]()

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 8
    category shouldEqual Expectation.UPPER_TWO
  }

  "endOfTurn" should "work for two categories" in {
    val state = Expectation.LARGE_STRAIGHT + Expectation.SMALL_STRAIGHT

    val roll = Array(1, 1, 1, 1, 1, 0)

    // Not the real numbers, just want to make sure it
    // actually uses the cache. In this case it should 
    // pick the small straight because it's next state
    // expectation is larger, even if the score is smaller.
    val cache = Array.fill(100000){0f}
    cache.update(Expectation.SMALL_STRAIGHT, 20f)
    cache.update(Expectation.LARGE_STRAIGHT, 40f)

    val (value, category) = Expectation.endOfTurn(state, roll, cache)

    value shouldEqual 70
    category shouldEqual Expectation.SMALL_STRAIGHT
  }
}