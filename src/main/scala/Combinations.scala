
object Combinations {
    val emptyDiceGroup = Array(0, 0, 0, 0, 0, 0)

    def choose(n: Int, k: Int, startIdx: Int = 0): List[List[Int]] = {
        if (k == 0) List.empty
        else if (k == 1) (0 to n - 1).toList.map(i => List(i + startIdx))
        else (0 to n - k).toList.flatMap((i: Int) =>  
            choose(n - i - 1, k - 1, i + startIdx + 1).map(i + startIdx :: _)
        )
    }

    def allRolls(n: Int, initial: Array[Int] = emptyDiceGroup, startIdx: Int = 0): Vector[Array[Int]] = {
        val current = initial(startIdx);
        if (startIdx == initial.length - 1) {
            Vector(initial.updated(startIdx, n + current));
        }
        else {
            (0 to n).toVector.flatMap((count: Int) => {
                allRolls(n - count, initial.updated(startIdx, count + current), startIdx + 1)
            })
        }
    }
}