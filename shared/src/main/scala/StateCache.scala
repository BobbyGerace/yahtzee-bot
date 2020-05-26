package main

/**
  * On the JVM an Array is used for the cache,
  * in JS we have to use a DataView (converting
  * to array more than doubles the memory usage).
  * So to make the shared code work, we have to 
  * wrap those structures in something that 
  * extends this trait.
  */
trait StateCache {
    def get(idx: Int): Float
    def put(idx: Int, value: Float): Unit
}