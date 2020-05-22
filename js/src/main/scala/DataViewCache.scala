package jsmain
import main.StateCache
import scala.scalajs.js.typedarray.DataView

class DataViewCache(dataView: DataView) extends StateCache{
    def get(idx: Int) = dataView.getFloat32(idx * 4)
    def put(idx: Int, value: Float) = dataView.setFloat32(idx * 4, value)
}