import scala.collection.mutable
import main.Combinations
import org.scalatest._

class CombinationSpec extends FlatSpec with Matchers {
  "The combo function" should "work for (3, 2)" in {
    val result = Combinations.choose(3, 2)

    result shouldEqual List(List(0, 1), List(0, 2), List(1, 2))
  }

  "The combo function" should "work for (13, 5)" in {
    val result = Combinations.choose(13, 5)

    result.length shouldEqual 1287

  }

  "The combo function" should "work for (6, 6)" in {
    val result = Combinations.choose(6, 6)
    
    result shouldEqual List(List(0, 1, 2, 3, 4, 5))
  }

  "The combo function" should "work for (n, 0)" in {
    val result = Combinations.choose(6, 0)
    
    result shouldEqual List()
  }

  "The allRolls function" should "work for happy path" in {
    val result = Combinations.allRolls(5)

    result.length shouldEqual 252
  }

  "The allRolls function" should "work with initial" in {
    val initial = Array(0, 0, 0, 2, 0, 1)
    val result = Combinations.allRolls(3, initial)

    result.length shouldEqual 56
  }

  "The allRolls function" should "work for one dice" in {
    val initial = Array(0, 0, 0, 0, 0, 4)
    val result = Combinations.allRolls(1, initial)

    result should contain theSameElementsAs mutable.ArrayBuffer(
      Array(1, 0, 0, 0, 0, 4),
      Array(0, 1, 0, 0, 0, 4),
      Array(0, 0, 1, 0, 0, 4),
      Array(0, 0, 0, 1, 0, 4),
      Array(0, 0, 0, 0, 1, 4),
      Array(0, 0, 0, 0, 0, 5),
    )
  }

  "The allKeeps function" should "work for large straight" in {
    val result = Combinations.allKeeps(Array(1, 1, 1, 1, 1, 0))

    result.length shouldEqual 32
  }

  "The allKeeps function" should "work for full house" in {
    val result = Combinations.allKeeps(Array(0, 2, 0, 0, 3, 0))

    result.length shouldEqual 12
  }

  "The allKeeps function" should "work for two pairs" in {
    val result = Combinations.allKeeps(Array(0, 2, 0, 0, 1, 2))

    result.length shouldEqual 18
  }

  "The allKeeps function" should "work for one pair" in {
    val result = Combinations.allKeeps(Array(0, 2, 0, 1, 1, 1))

    result.length shouldEqual 24
  }

  "The allKeeps function" should "work for yahtzee" in {
    val result = Combinations.allKeeps(Array(0, 0, 0, 0, 0, 5))

    result.length shouldEqual 6
  }
}
