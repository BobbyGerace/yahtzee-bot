package main

class ArrayCache(array: Array[Float]) extends StateCache {
    val toArray = array;
    def get(idx: Int) = array(idx)
    def put(idx: Int, value: Float) = array.update(idx, value)
}