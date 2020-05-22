package main

trait StateCache {
    def get(idx: Int): Float
    def put(idx: Int, value: Float): Unit
}