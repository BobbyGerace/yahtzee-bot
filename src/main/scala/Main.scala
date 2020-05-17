import main.Expectation
import java.nio.ByteBuffer
import java.io.FileOutputStream

object Main {
  def main(args: Array[String]): Unit = {
    val t0 = System.currentTimeMillis()
    val cache = Expectation.calculateStatesUpToNCategories(1)
    val t1 = System.currentTimeMillis()
    println("Elapsed time: " + ((t1 - t0) / (1000d * 3600)) + "min")

    val filtered = cache.filter(_ > 0)
    println("Length: " + filtered.length)

    val startState = Expectation.categories.sum
    println("Start Expectation: " + cache(startState))


    println("Writing to file...")

    writeCacheToFile(cache)

    println("Done.")
  }

  def writeCacheToFile(cache: Array[Float]) = {
    val out = new FileOutputStream("./table")
    val buffer = ByteBuffer.allocate(cache.length * 4)
    for (flt <- cache) {
      buffer.putFloat(flt)
    }

    out.write(buffer.array())
  }
}
