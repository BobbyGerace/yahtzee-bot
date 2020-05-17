import org.scalatest._

class ExpectationSpec extends FlatSpec with Matchers {
  val approxEq = (a: Double, b: Double) => Math.abs(a - b) < 0.0000001

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

  "rolls" should "work for last yahtzee" in {

    val state = Expectation.YAHTZEE
    val keeps = Array(0, 0, 0, 0, 0, 0)
    val cache = Array[Float]()

    val value = Expectation.rolls(state, keeps, 1, cache)
    value shouldEqual 50d / Math.pow(6,4)
  }

  "rolls" should "work for initial roll" in {
    val state = Expectation.FULL_HOUSE
    val keeps = Array(0, 0, 1, 0, 2, 0)
    val cache = Array[Float]()

    val value = Expectation.rolls(state, keeps, 1, cache)
    value shouldEqual 25d * (1d / 36d + 1d / 18d)
  }

  "keeps" should "work for almost yahtzee" in {
    val state = Expectation.YAHTZEE
    val roll = Array(0, 0, 1, 0, 4, 0)
    val cache = Array[Float]()

    val (value, kept) = Expectation.keeps(state, roll, 1, cache)
    approxEq(value, 50d / 6d) shouldBe true
    kept shouldEqual Array(0, 0, 0, 0, 4, 0)
  }

  "keep" should "can start from first choice" in {
    val state = Expectation.YAHTZEE
    val roll = Array(1, 1, 1, 1, 1, 0)
    val cache = Array[Float]()

    val t0 = System.nanoTime()
    val (value, _) = Expectation.keeps(state, roll, 2, cache)
    val t1 = System.nanoTime()
    println("Elapsed time: " + ((t1 - t0) / 1000000d) + "ms")
    println("value: " + value)
    (value < 50d) shouldBe true
    (value > 0d) shouldBe true
  }

  // "rolls" should "compute a widget" in {
  //   val state = Expectation.YAHTZEE
  //   val roll = Array(1, 1, 1, 1, 1, 0)
  //   val cache = Array[Float]()

  //   val t0 = System.nanoTime()
  //   val value = Expectation.rolls(state, roll, 2, cache)
  //   val t1 = System.nanoTime()
  //   println("Elapsed time: " + ((t1 - t0) / 1000000d) + "ms")
  //   (value < 50d) shouldBe true
  //   (value > 0d) shouldBe true
  // }
}