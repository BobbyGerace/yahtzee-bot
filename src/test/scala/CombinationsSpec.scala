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

    result should contain theSameElementsAs Vector(
      Array(1, 0, 0, 0, 0, 4),
      Array(0, 1, 0, 0, 0, 4),
      Array(0, 0, 1, 0, 0, 4),
      Array(0, 0, 0, 1, 0, 4),
      Array(0, 0, 0, 0, 1, 4),
      Array(0, 0, 0, 0, 0, 5),
    )
  }
}
