let Main;
(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.1.0",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((instance << 16) >> 16) === instance)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(instance) {
  switch ((typeof instance)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return "java.lang.Byte"
        } else if ((((instance << 16) >> 16) === instance)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((instance instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return instance.getClass__jl_Class()
}
function $dp_clone__O(instance) {
  return instance.clone__O()
}
function $dp_notify__V(instance) {
  return instance.notify__V()
}
function $dp_notifyAll__V(instance) {
  return instance.notifyAll__V()
}
function $dp_finalize__V(instance) {
  return instance.finalize__V()
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(x0)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, x0)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, x0)
  } else {
    return $c_O.prototype.equals__O__Z.call(instance, x0)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  return instance.compareTo__O__I(x0)
}
function $dp_length__I(instance) {
  return instance.length__I()
}
function $dp_charAt__I__C(instance, x0) {
  return instance.charAt__I__C(x0)
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  return instance.subSequence__I__I__jl_CharSequence(x0, x1)
}
function $dp_byteValue__B(instance) {
  return instance.byteValue__B()
}
function $dp_shortValue__S(instance) {
  return instance.shortValue__S()
}
function $dp_intValue__I(instance) {
  return instance.intValue__I()
}
function $dp_longValue__J(instance) {
  return instance.longValue__J()
}
function $dp_floatValue__F(instance) {
  return instance.floatValue__F()
}
function $dp_doubleValue__D(instance) {
  return instance.doubleValue__D()
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectClassName(this);
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getComponentType__jl_Class() {
    return $as_jl_Class(this.jl_Class__f_data.getComponentType())
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $is_jl_Runnable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.jl_Runnable)))
}
function $as_jl_Runnable(obj) {
  return (($is_jl_Runnable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Runnable"))
}
function $isArrayOf_jl_Runnable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Runnable)))
}
function $asArrayOf_jl_Runnable(obj, depth) {
  return (($isArrayOf_jl_Runnable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Runnable;", depth))
}
const $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement = (function($thiz, stackdata) {
  const lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, stackdata);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines)
});
const $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement = (function($thiz, lines) {
  const NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^\\@]*)\\@(.*):([0-9]+)$");
  const NormalizedFrameLineWithColumn = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$");
  const trace = [];
  let i = 0;
  while ((i < $uI(lines.length))) {
    const line = $as_T(lines[i]);
    if ((line !== "")) {
      const mtch1 = NormalizedFrameLineWithColumn.exec(line);
      if ((mtch1 !== null)) {
        const x = mtch1[1];
        const classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        const $$x3 = $as_T(classAndMethodName[0]);
        const $$x2 = $as_T(classAndMethodName[1]);
        const x$1 = mtch1[2];
        const $$x1 = $as_T(x$1);
        const x$2 = mtch1[3];
        const s = $as_T(x$2);
        const elem = new $c_jl_StackTraceElement($$x3, $$x2, $$x1, $uI(parseInt(s)));
        const x$3 = mtch1[4];
        const s$1 = $as_T(x$3);
        elem.jl_StackTraceElement__f_columnNumber = $uI(parseInt(s$1));
        $uI(trace.push(elem))
      } else {
        const mtch2 = NormalizedFrameLine.exec(line);
        if ((mtch2 !== null)) {
          const x$4 = mtch2[1];
          const classAndMethodName$2 = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x$4));
          const $$x7 = $as_T(classAndMethodName$2[0]);
          const $$x6 = $as_T(classAndMethodName$2[1]);
          const x$5 = mtch2[2];
          const $$x5 = $as_T(x$5);
          const x$6 = mtch2[3];
          const s$2 = $as_T(x$6);
          const $$x4 = trace.push(new $c_jl_StackTraceElement($$x7, $$x6, $$x5, $uI(parseInt(s$2))));
          $uI($$x4)
        } else {
          $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1))))
        }
      }
    };
    i = ((1 + i) | 0)
  };
  const len = $uI(trace.length);
  const result = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [len]);
  i = 0;
  while ((i < len)) {
    result.set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractClassMethod__T__O = (function($thiz, functionName) {
  const PatC = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  const PatS = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  const PatCT = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  const PatN = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^new (?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)$");
  const PatM = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$m_([^\\.]+)$");
  const matchC = PatC.exec(functionName);
  const matchCOrS = ((matchC !== null) ? matchC : PatS.exec(functionName));
  if ((matchCOrS !== null)) {
    const x = matchCOrS[1];
    const $$x1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    const x$1 = matchCOrS[2];
    return [$$x1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))]
  } else {
    const matchCT = PatCT.exec(functionName);
    const matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      const x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"]
    } else {
      const matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        const x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"]
      } else {
        return ["<jscode>", functionName]
      }
    }
  }
});
const $p_jl_StackTrace$__decodeClassName__T__T = (function($thiz, encodedName) {
  const dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  let base;
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    const dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    base = $as_T(dict$1[encodedName])
  } else {
    base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName)
  };
  const this$4 = $as_T(base.split("_").join("."));
  return $as_T(this$4.split("\uff3f").join("_"))
});
const $p_jl_StackTrace$__decompressedClasses$lzycompute__O = (function($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    let index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        const key = ("T" + index);
        const value = ("scala_Tuple" + index);
        dict[key] = value
      };
      const key$1 = ("F" + index);
      const value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0)
    };
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedClasses
});
const $p_jl_StackTrace$__decompressedClasses__O = (function($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses)
});
const $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedPrefixes
});
const $p_jl_StackTrace$__decompressedPrefixes__O = (function($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes)
});
const $p_jl_StackTrace$__compressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_compressedPrefixes
});
const $p_jl_StackTrace$__compressedPrefixes__O = (function($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes)
});
const $p_jl_StackTrace$__decodeMethodName__T__T = (function($thiz, encodedName) {
  if ((($uI(encodedName.length) >= 0) && ($as_T(encodedName.substring(0, $uI("init___".length))) === "init___"))) {
    return "<init>"
  } else {
    const methodNameLen = $uI(encodedName.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)))
  }
});
const $p_jl_StackTrace$__normalizeStackTraceLines__O__O = (function($thiz, e) {
  const x = (!e);
  if ($uZ((!(!x)))) {
    return []
  } else {
    const x$1 = (e.arguments && e.stack);
    if ($uZ((!(!x$1)))) {
      return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
    } else {
      const x$2 = (e.stack && e.sourceURL);
      if ($uZ((!(!x$2)))) {
        return $p_jl_StackTrace$__extractSafari__O__O($thiz, e)
      } else {
        const x$3 = (e.stack && e.number);
        if ($uZ((!(!x$3)))) {
          return $p_jl_StackTrace$__extractIE__O__O($thiz, e)
        } else {
          const x$4 = (e.stack && e.fileName);
          if ($uZ((!(!x$4)))) {
            return $p_jl_StackTrace$__extractFirefox__O__O($thiz, e)
          } else {
            const x$5 = (e.message && e["opera#sourceloc"]);
            if ($uZ((!(!x$5)))) {
              const x$6 = (!e.stacktrace);
              if ($uZ((!(!x$6)))) {
                return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
              } else {
                const x$7 = ((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length));
                if ($uZ((!(!x$7)))) {
                  return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e)
                }
              }
            } else {
              const x$8 = ((e.message && e.stack) && e.stacktrace);
              if ($uZ((!(!x$8)))) {
                const x$9 = (e.stacktrace.indexOf("called from line") < 0.0);
                if ($uZ((!(!x$9)))) {
                  return $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)
                }
              } else {
                const x$10 = (e.stack && (!e.fileName));
                if ($uZ((!(!x$10)))) {
                  return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOther__O__O($thiz, e)
                }
              }
            }
          }
        }
      }
    }
  }
});
const $p_jl_StackTrace$__extractChrome__O__O = (function($thiz, e) {
  const x = ($as_T(e.stack) + "\n");
  const $$x6 = x.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ");
  const x$1 = $as_T($$x6);
  const $$x5 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "");
  const x$2 = $as_T($$x5);
  const $$x4 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2");
  const x$3 = $as_T($$x4);
  const $$x3 = x$3.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)");
  const x$4 = $as_T($$x3);
  const $$x2 = x$4.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2");
  const x$5 = $as_T($$x2);
  const $$x1 = x$5.split("\n");
  return $$x1.slice(0, (-1))
});
const $p_jl_StackTrace$__extractFirefox__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x2 = x.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("(?:\\n@:0)?\\s+$", "m"), "");
  const x$1 = $as_T($$x2);
  const $$x1 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@");
  const x$2 = $as_T($$x1);
  return x$2.split("\n")
});
const $p_jl_StackTrace$__extractIE__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2");
  const x$3 = $as_T($$x1);
  const qual$1 = x$3.split("\n");
  return qual$1.slice(1)
});
const $p_jl_StackTrace$__extractSafari__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("\\[native code\\]\\n", "m"), "");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^@", "gm"), "{anonymous}()@");
  const x$3 = $as_T($$x1);
  return x$3.split("\n")
});
const $p_jl_StackTrace$__extractOpera9__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  const x = $as_T(e.message);
  const lines = x.split("\n");
  const result = [];
  let i = 2;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[2];
      const x$2 = mtch[1];
      const $$x1 = result.push(((("{anonymous}()@" + x$1) + ":") + x$2));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10a__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[3];
      const fnName = $as_T(((x$1 !== (void 0)) ? x$1 : "{anonymous}"));
      const x$2 = mtch[2];
      const x$3 = mtch[1];
      const $$x1 = result.push(((((fnName + "()@") + x$2) + ":") + x$3));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10b__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(.*)@(.+):(\\d+)$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[1];
      let $$x1;
      if ((x$1 !== (void 0))) {
        const arg1 = $as_T(x$1);
        $$x1 = $m_jl_StackTrace$().java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(arg1)
      } else {
        $$x1 = "global code"
      };
      const fnName = $as_T($$x1);
      const x$2 = mtch[2];
      const x$3 = mtch[3];
      const $$x2 = result.push(((((fnName + "@") + x$2) + ":") + x$3));
      $uI($$x2)
    };
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera11__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[4];
      const $$x1 = $as_T(x$1);
      const x$2 = mtch[1];
      const x$3 = mtch[2];
      const location = (((($$x1 + ":") + x$2) + ":") + x$3);
      const x$4 = mtch[2];
      const fnName0 = $as_T(((x$4 !== (void 0)) ? x$4 : "global code"));
      const x$5 = $as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function: (\\S+)>"), "$1"));
      const $$x2 = x$5.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function>"), "{anonymous}");
      const fnName = $as_T($$x2);
      $uI(result.push(((fnName + "@") + location)))
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOther__O__O = (function($thiz, e) {
  return []
});
const $p_jl_StackTrace$__loop$1__I__T__T = (function($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      const prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      if ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI(prefix.length))) === prefix))) {
        const dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        const $$x1 = $as_T(dict[prefix]);
        const beginIndex = $uI(prefix.length);
        return (("" + $$x1) + $as_T(encodedName$1.substring(beginIndex)))
      } else {
        i = ((1 + i) | 0)
      }
    } else {
      return ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI("L".length))) === "L")) ? $as_T(encodedName$1.substring(1)) : encodedName$1)
    }
  }
});
class $c_jl_StackTrace$ extends $c_O {
  constructor() {
    super();
    this.jl_StackTrace$__f_decompressedClasses = null;
    this.jl_StackTrace$__f_decompressedPrefixes = null;
    this.jl_StackTrace$__f_compressedPrefixes = null;
    this.jl_StackTrace$__f_bitmap$0 = 0
  };
  java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(x$1) {
    return (x$1 + "()")
  };
}
const $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
let $n_jl_StackTrace$ = (void 0);
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
class $c_jl_StackTrace$StringRE$ extends $c_O {
  re$extension0__T__O(this$) {
    return new RegExp(this$)
  };
  re$extension1__T__T__O(this$, mods) {
    return new RegExp(this$, mods)
  };
}
const $d_jl_StackTrace$StringRE$ = new $TypeData().initClass({
  jl_StackTrace$StringRE$: 0
}, false, "java.lang.StackTrace$StringRE$", {
  jl_StackTrace$StringRE$: 1,
  O: 1
});
$c_jl_StackTrace$StringRE$.prototype.$classData = $d_jl_StackTrace$StringRE$;
let $n_jl_StackTrace$StringRE$ = (void 0);
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$()
  };
  return $n_jl_StackTrace$StringRE$
}
class $c_jl_System$Streams$ extends $c_O {
  constructor() {
    super();
    this.jl_System$Streams$__f_out = null;
    this.jl_System$Streams$__f_err = null;
    this.jl_System$Streams$__f_in = null;
    $n_jl_System$Streams$ = this;
    this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
    this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    this.jl_System$Streams$__f_in = null
  };
}
const $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
let $n_jl_System$Streams$ = (void 0);
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
class $c_jl_Thread$ extends $c_O {
  constructor() {
    super();
    this.jl_Thread$__f_SingleThread = null;
    $n_jl_Thread$ = this;
    this.jl_Thread$__f_SingleThread = new $c_jl_Thread((void 0))
  };
}
const $d_jl_Thread$ = new $TypeData().initClass({
  jl_Thread$: 0
}, false, "java.lang.Thread$", {
  jl_Thread$: 1,
  O: 1
});
$c_jl_Thread$.prototype.$classData = $d_jl_Thread$;
let $n_jl_Thread$ = (void 0);
function $m_jl_Thread$() {
  if ((!$n_jl_Thread$)) {
    $n_jl_Thread$ = new $c_jl_Thread$()
  };
  return $n_jl_Thread$
}
class $c_jl_ThreadLocal extends $c_O {
  constructor() {
    super();
    this.jl_ThreadLocal__f_hasValue = false;
    this.jl_ThreadLocal__f_v = null;
    this.jl_ThreadLocal__f_hasValue = false
  };
  get__O() {
    if ((!this.jl_ThreadLocal__f_hasValue)) {
      this.set__O__V(null)
    };
    return this.jl_ThreadLocal__f_v
  };
  set__O__V(o) {
    this.jl_ThreadLocal__f_v = o;
    this.jl_ThreadLocal__f_hasValue = true
  };
  remove__V() {
    this.jl_ThreadLocal__f_hasValue = false;
    this.jl_ThreadLocal__f_v = null
  };
}
const $d_jl_ThreadLocal = new $TypeData().initClass({
  jl_ThreadLocal: 0
}, false, "java.lang.ThreadLocal", {
  jl_ThreadLocal: 1,
  O: 1
});
$c_jl_ThreadLocal.prototype.$classData = $d_jl_ThreadLocal;
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  equals__AJ__AJ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const t = a.get(i);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const t$1 = b.get(i);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AI__AI__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AS__AS__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AC__AC__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($bC(x), $bC(y)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AB__AB__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AZ__AZ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AD__AD__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AF__AF__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AO__AO__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  fill__AI__I__V(a, value) {
    const toIndex = a.u.length;
    let i = 0;
    while ((i !== toIndex)) {
      a.set(i, value);
      i = ((1 + i) | 0)
    }
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
const $p_Ljsmain_Main$__category$lzycompute$1__sr_LazyInt__Lmain_Expectation__AI__I = (function($thiz, category$lzy$1, expectation$1, roll$2) {
  if ((category$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  if (category$lzy$1.sr_LazyInt__f__initialized) {
    return category$lzy$1.sr_LazyInt__f__value
  } else {
    const x1 = expectation$1.endOfTurn__AI__T2(roll$2);
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const category = x1._2$mcI$sp__I();
    return category$lzy$1.initialize__I__I(category)
  }
});
const $p_Ljsmain_Main$__category$1__sr_LazyInt__Lmain_Expectation__AI__I = (function($thiz, category$lzy$1, expectation$1, roll$2) {
  return (category$lzy$1.sr_LazyInt__f__initialized ? category$lzy$1.sr_LazyInt__f__value : $p_Ljsmain_Main$__category$lzycompute$1__sr_LazyInt__Lmain_Expectation__AI__I($thiz, category$lzy$1, expectation$1, roll$2))
});
class $c_Ljsmain_Main$ extends $c_O {
  constructor() {
    super();
    this.Ljsmain_Main$__f_cache = null;
    $n_Ljsmain_Main$ = this;
    this.Ljsmain_Main$__f_cache = $m_s_None$()
  };
  main__V() {
    onmessage = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((this$1) => ((msg$2) => $m_Ljsmain_Main$().onMessage__Lorg_scalajs_dom_raw_MessageEvent__O(msg$2)))(this)));
    const $$x1 = $m_sjs_js_Thenable$ThenableOps$();
    const p = fetch("/table");
    const response = $$x1.toFuture$extension__sjs_js_Thenable__s_concurrent_Future(p);
    const f = new $c_sjsr_AnonFunction1(((this$2$1) => ((res$2) => {
      const $$x2 = $m_sjs_js_Thenable$ThenableOps$();
      const p$1 = res$2.arrayBuffer();
      return $$x2.toFuture$extension__sjs_js_Thenable__s_concurrent_Future(p$1)
    }))(this));
    const executor = $m_s_concurrent_ExecutionContext$Implicits$().global__s_concurrent_ExecutionContext();
    const arrayBuffer = $f_s_concurrent_Future__flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(response, f, executor);
    const f$1 = new $c_sjsr_AnonFunction1(((this$3$1) => ((buffer$2) => {
      const dataView = new DataView(buffer$2);
      $m_Ljsmain_Main$().Ljsmain_Main$__f_cache = new $c_s_Some(new $c_Ljsmain_DataViewCache(dataView));
      return postMessage({
        "message": "cacheLoaded"
      })
    }))(this));
    const executor$1 = $m_s_concurrent_ExecutionContext$Implicits$().global__s_concurrent_ExecutionContext();
    $f_s_concurrent_Future__foreach__F1__s_concurrent_ExecutionContext__V(arrayBuffer, f$1, executor$1)
  };
  onMessage__Lorg_scalajs_dom_raw_MessageEvent__O(msg) {
    const data = msg.data;
    const action = $as_T(data.action);
    if ((action === "choose")) {
      const $$x2 = this.messageToState__Ljsmain_IncomingMessage__I(data);
      const array = data.roll;
      const len = $uI(array.length);
      const result = $newArrayObject($d_I.getArrayOf(), [len]);
      const len$1 = result.u.length;
      let i = 0;
      let j = 0;
      const x = $uI(array.length);
      const x$1 = ((x < len$1) ? x : len$1);
      const that = result.u.length;
      const end = ((x$1 < that) ? x$1 : that);
      while ((i < end)) {
        const $$x1 = j;
        const index = i;
        result.set($$x1, $uI(array[index]));
        i = ((1 + i) | 0);
        j = ((1 + j) | 0)
      };
      this.chooseMove__I__AI__I__I__V($$x2, result, $uI(data.rollsLeft), $uI(data.gameId));
      return (void 0)
    } else {
      const $$x3 = postMessage;
      const s = ("Received: " + action);
      return $$x3(s)
    }
  };
  chooseMove__I__AI__I__I__V(state, roll, rollsLeft, gameId) {
    const this$1 = this.Ljsmain_Main$__f_cache;
    let result;
    if (this$1.isEmpty__Z()) {
      result = $m_s_None$()
    } else {
      const arg1 = this$1.get__O();
      const x$1 = $as_Ljsmain_DataViewCache(arg1);
      result = new $c_s_Some($m_Ljsmain_Main$().makeChoice__I__AI__I__Ljsmain_DataViewCache__s_util_Either(state, roll, rollsLeft, x$1))
    };
    let rc10 = false;
    let x2 = null;
    matchEnd11: {
      if ((result instanceof $c_s_Some)) {
        rc10 = true;
        x2 = $as_s_Some(result);
        const p3 = $as_s_util_Either(x2.s_Some__f_value);
        if ((p3 instanceof $c_s_util_Left)) {
          const x4 = $as_s_util_Left(p3);
          const keeps = $asArrayOf_I(x4.s_util_Left__f_value, 1);
          const $$x1 = postMessage;
          const result$1 = [];
          let i = 0;
          const len = keeps.u.length;
          while ((i < len)) {
            const idx = i;
            const arg1$1 = keeps.get(idx);
            $uI(result$1.push(arg1$1));
            i = ((1 + i) | 0)
          };
          $$x1({
            "message": "keep",
            "value": result$1,
            "gameId": gameId
          });
          break matchEnd11
        }
      };
      if (rc10) {
        const p6 = $as_s_util_Either(x2.s_Some__f_value);
        if ((p6 instanceof $c_s_util_Right)) {
          const x7 = $as_s_util_Right(p6);
          const category = $uI(x7.s_util_Right__f_value);
          const $$x2 = postMessage;
          const s = this.categoryToString__I__T(category);
          $$x2({
            "message": "category",
            "value": s,
            "gameId": gameId
          });
          break matchEnd11
        }
      };
      const x = $m_s_None$();
      if ((x === result)) {
        postMessage({
          "message": "cacheNotLoaded"
        });
        break matchEnd11
      };
      throw new $c_s_MatchError(result)
    }
  };
  makeChoice__I__AI__I__Ljsmain_DataViewCache__s_util_Either(state, roll, rollsLeft, cache) {
    const category$lzy = new $c_sr_LazyInt();
    const expectation = new $c_Lmain_Expectation(state, cache);
    if ((rollsLeft === 0)) {
      $m_s_package$();
      const value = $p_Ljsmain_Main$__category$1__sr_LazyInt__Lmain_Expectation__AI__I(this, category$lzy, expectation, roll);
      return new $c_s_util_Right(value)
    };
    const x1 = expectation.keeps__AI__I__T2(roll, rollsLeft);
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const keeps = $asArrayOf_I(x1._2__O(), 1);
    const num = $m_s_math_Numeric$IntIsIntegral$();
    let start = 0;
    const end = keeps.u.length;
    let z = 0;
    let $$x1;
    while (true) {
      if ((start !== end)) {
        const temp$start = ((1 + start) | 0);
        const arg1 = z;
        const idx = start;
        const arg2 = keeps.get(idx);
        const x = $uI(arg1);
        const temp$z = $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, x, arg2);
        start = temp$start;
        z = temp$z;
        continue
      };
      $$x1 = z;
      break
    };
    if (($uI($$x1) === 5)) {
      $m_s_package$();
      const value$1 = $p_Ljsmain_Main$__category$1__sr_LazyInt__Lmain_Expectation__AI__I(this, category$lzy, expectation, roll);
      return new $c_s_util_Right(value$1)
    } else {
      $m_s_package$();
      return new $c_s_util_Left(keeps)
    }
  };
  messageToState__Ljsmain_IncomingMessage__I(message) {
    const yahtzeeBonus = ($uZ(message.yahtzeeBonusAvailable) ? $m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE_BONUS : 0);
    const array = message.openCategories;
    const len = $uI(array.length);
    const result = $newArrayObject($d_T.getArrayOf(), [len]);
    const len$1 = result.u.length;
    let i = 0;
    let j = 0;
    const x = $uI(array.length);
    const x$1 = ((x < len$1) ? x : len$1);
    const that = result.u.length;
    const end = ((x$1 < that) ? x$1 : that);
    while ((i < end)) {
      const $$x1 = j;
      const index = i;
      result.set($$x1, array[index]);
      i = ((1 + i) | 0);
      j = ((1 + j) | 0)
    };
    let elems = null;
    elems = [];
    let i$1 = 0;
    const len$2 = result.u.length;
    while ((i$1 < len$2)) {
      const index$1 = i$1;
      const arg1 = result.get(index$1);
      const categoryName = $as_T(arg1);
      const elem = $m_Ljsmain_Main$().stringToCategory__T__I(categoryName);
      elems.push(elem);
      i$1 = ((1 + i$1) | 0)
    };
    const xs = $makeNativeArrayWrapper($d_I.getArrayOf(), elems);
    const num = $m_s_math_Numeric$IntIsIntegral$();
    let start = 0;
    const end$1 = xs.u.length;
    let z = 0;
    let $$x2;
    while (true) {
      if ((start !== end$1)) {
        const temp$start = ((1 + start) | 0);
        const arg1$1 = z;
        const idx = start;
        const arg2 = xs.get(idx);
        const x$2 = $uI(arg1$1);
        const temp$z = $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, x$2, arg2);
        start = temp$start;
        z = temp$z;
        continue
      };
      $$x2 = z;
      break
    };
    const categories = $uI($$x2);
    const a = $uI(message.upperScore);
    const upperScore = ((a < 63) ? a : 63);
    return ((((yahtzeeBonus + categories) | 0) + upperScore) | 0)
  };
  categoryToString__I__T(category) {
    if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_ONE === category)) {
      return "1"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_TWO === category)) {
      return "2"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_THREE === category)) {
      return "3"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FOUR === category)) {
      return "4"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FIVE === category)) {
      return "5"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_SIX === category)) {
      return "6"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_THREE_OF_A_KIND === category)) {
      return "threeOfAKind"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_FOUR_OF_A_KIND === category)) {
      return "fourOfAKind"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_FULL_HOUSE === category)) {
      return "fullHouse"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_SMALL_STRAIGHT === category)) {
      return "smallStraight"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_LARGE_STRAIGHT === category)) {
      return "largeStraight"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE === category)) {
      return "yahtzee"
    } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_CHANCE === category)) {
      return "chance"
    } else {
      throw new $c_s_MatchError(category)
    }
  };
  stringToCategory__T__I(categoryName) {
    if ((categoryName === "1")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_ONE
    } else if ((categoryName === "2")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_TWO
    } else if ((categoryName === "3")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_THREE
    } else if ((categoryName === "4")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FOUR
    } else if ((categoryName === "5")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FIVE
    } else if ((categoryName === "6")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_SIX
    } else if ((categoryName === "threeOfAKind")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_THREE_OF_A_KIND
    } else if ((categoryName === "fourOfAKind")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_FOUR_OF_A_KIND
    } else if ((categoryName === "fullHouse")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_FULL_HOUSE
    } else if ((categoryName === "smallStraight")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_SMALL_STRAIGHT
    } else if ((categoryName === "largeStraight")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_LARGE_STRAIGHT
    } else if ((categoryName === "yahtzee")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE
    } else if ((categoryName === "chance")) {
      return $m_Lmain_Expectation$().Lmain_Expectation$__f_CHANCE
    } else {
      throw new $c_s_MatchError(categoryName)
    }
  };
  $js$exported$meth$main__O() {
    this.main__V()
  };
  "main"() {
    return this.$js$exported$meth$main__O()
  };
}
const $d_Ljsmain_Main$ = new $TypeData().initClass({
  Ljsmain_Main$: 0
}, false, "jsmain.Main$", {
  Ljsmain_Main$: 1,
  O: 1
});
$c_Ljsmain_Main$.prototype.$classData = $d_Ljsmain_Main$;
let $n_Ljsmain_Main$ = (void 0);
function $m_Ljsmain_Main$() {
  if ((!$n_Ljsmain_Main$)) {
    $n_Ljsmain_Main$ = new $c_Ljsmain_Main$()
  };
  return $n_Ljsmain_Main$
}
const $p_Lmain_Combinations$__putValues$1__I__AI__I__scm_ArrayBuffer__V = (function($thiz, n, initial, startIdx, result$1) {
  const current = initial.get(startIdx);
  if ((startIdx === (((-1) + initial.u.length) | 0))) {
    const this$5 = new $c_scm_ArrayOps$ofInt(initial);
    const elem = ((n + current) | 0);
    if ((startIdx < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
    };
    let elems = null;
    elems = [];
    let i = 0;
    const this$ = this$5.scm_ArrayOps$ofInt__f_repr;
    const it = new $c_sc_IndexedSeqLike$Elements(this$5, 0, this$.u.length);
    while (((i < startIdx) && it.hasNext__Z())) {
      const elem$1 = it.next__O();
      const unboxedElem = ((elem$1 === null) ? 0 : elem$1);
      elems.push(unboxedElem);
      i = ((1 + i) | 0)
    };
    if ((!it.hasNext__Z())) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
    };
    elems.push(elem);
    it.next__O();
    while (it.hasNext__Z()) {
      const elem$2 = it.next__O();
      const unboxedElem$1 = ((elem$2 === null) ? 0 : elem$2);
      elems.push(unboxedElem$1)
    };
    result$1.$plus$eq__O__scm_ArrayBuffer($makeNativeArrayWrapper($d_I.getArrayOf(), elems))
  } else {
    const isEmpty = (n < 0);
    if ((!isEmpty)) {
      let i$1 = 0;
      while (true) {
        const v1 = i$1;
        const this$20 = new $c_scm_ArrayOps$ofInt(initial);
        const elem$3 = ((v1 + current) | 0);
        if ((startIdx < 0)) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        let elems$1 = null;
        elems$1 = [];
        let i$2 = 0;
        const this$$1 = this$20.scm_ArrayOps$ofInt__f_repr;
        const it$1 = new $c_sc_IndexedSeqLike$Elements(this$20, 0, this$$1.u.length);
        while (((i$2 < startIdx) && it$1.hasNext__Z())) {
          const elem$4 = it$1.next__O();
          const unboxedElem$2 = ((elem$4 === null) ? 0 : elem$4);
          elems$1.push(unboxedElem$2);
          i$2 = ((1 + i$2) | 0)
        };
        if ((!it$1.hasNext__Z())) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        elems$1.push(elem$3);
        it$1.next__O();
        while (it$1.hasNext__Z()) {
          const elem$5 = it$1.next__O();
          const unboxedElem$3 = ((elem$5 === null) ? 0 : elem$5);
          elems$1.push(unboxedElem$3)
        };
        $p_Lmain_Combinations$__putValues$1__I__AI__I__scm_ArrayBuffer__V($thiz, ((n - v1) | 0), $makeNativeArrayWrapper($d_I.getArrayOf(), elems$1), ((1 + startIdx) | 0), result$1);
        if ((i$1 === n)) {
          break
        };
        i$1 = ((1 + i$1) | 0)
      }
    }
  }
});
const $p_Lmain_Combinations$__putValues$2__AI__I__scm_ArrayBuffer__V = (function($thiz, initial, startIdx, result$2) {
  const current = initial.get(startIdx);
  if ((startIdx === (((-1) + initial.u.length) | 0))) {
    const isEmpty = (current < 0);
    if ((!isEmpty)) {
      let i = 0;
      while (true) {
        const arg1 = i;
        const this$10 = new $c_scm_ArrayOps$ofInt(initial);
        const elem = ((current - arg1) | 0);
        if ((startIdx < 0)) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        let elems = null;
        elems = [];
        let i$1 = 0;
        const this$ = this$10.scm_ArrayOps$ofInt__f_repr;
        const it = new $c_sc_IndexedSeqLike$Elements(this$10, 0, this$.u.length);
        while (((i$1 < startIdx) && it.hasNext__Z())) {
          const elem$1 = it.next__O();
          const unboxedElem = ((elem$1 === null) ? 0 : elem$1);
          elems.push(unboxedElem);
          i$1 = ((1 + i$1) | 0)
        };
        if ((!it.hasNext__Z())) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        elems.push(elem);
        it.next__O();
        while (it.hasNext__Z()) {
          const elem$2 = it.next__O();
          const unboxedElem$1 = ((elem$2 === null) ? 0 : elem$2);
          elems.push(unboxedElem$1)
        };
        result$2.$plus$eq__O__scm_ArrayBuffer($makeNativeArrayWrapper($d_I.getArrayOf(), elems));
        if ((i === current)) {
          break
        };
        i = ((1 + i) | 0)
      }
    }
  } else {
    const isEmpty$1 = (current < 0);
    if ((!isEmpty$1)) {
      let i$2 = 0;
      while (true) {
        const v1 = i$2;
        const this$25 = new $c_scm_ArrayOps$ofInt(initial);
        const elem$3 = ((current - v1) | 0);
        if ((startIdx < 0)) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        let elems$1 = null;
        elems$1 = [];
        let i$3 = 0;
        const this$$1 = this$25.scm_ArrayOps$ofInt__f_repr;
        const it$1 = new $c_sc_IndexedSeqLike$Elements(this$25, 0, this$$1.u.length);
        while (((i$3 < startIdx) && it$1.hasNext__Z())) {
          const elem$4 = it$1.next__O();
          const unboxedElem$2 = ((elem$4 === null) ? 0 : elem$4);
          elems$1.push(unboxedElem$2);
          i$3 = ((1 + i$3) | 0)
        };
        if ((!it$1.hasNext__Z())) {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + startIdx))
        };
        elems$1.push(elem$3);
        it$1.next__O();
        while (it$1.hasNext__Z()) {
          const elem$5 = it$1.next__O();
          const unboxedElem$3 = ((elem$5 === null) ? 0 : elem$5);
          elems$1.push(unboxedElem$3)
        };
        $p_Lmain_Combinations$__putValues$2__AI__I__scm_ArrayBuffer__V($thiz, $makeNativeArrayWrapper($d_I.getArrayOf(), elems$1), ((1 + startIdx) | 0), result$2);
        if ((i$2 === current)) {
          break
        };
        i$2 = ((1 + i$2) | 0)
      }
    }
  }
});
class $c_Lmain_Combinations$ extends $c_O {
  constructor() {
    super();
    this.Lmain_Combinations$__f_emptyDiceGroup = null;
    $n_Lmain_Combinations$ = this;
    this.Lmain_Combinations$__f_emptyDiceGroup = $makeNativeArrayWrapper($d_I.getArrayOf(), [0, 0, 0, 0, 0, 0])
  };
  allRolls__I__AI__I__scm_ArrayBuffer(n, initial, startIdx) {
    const result = $as_scm_ArrayBuffer($m_scm_ArrayBuffer$().apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
    $p_Lmain_Combinations$__putValues$1__I__AI__I__scm_ArrayBuffer__V(this, n, initial, startIdx, result);
    return result
  };
  allKeeps__AI__I__scm_ArrayBuffer(initial, startIdx) {
    const result = $as_scm_ArrayBuffer($m_scm_ArrayBuffer$().apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
    $p_Lmain_Combinations$__putValues$2__AI__I__scm_ArrayBuffer__V(this, initial, startIdx, result);
    return result
  };
}
const $d_Lmain_Combinations$ = new $TypeData().initClass({
  Lmain_Combinations$: 0
}, false, "main.Combinations$", {
  Lmain_Combinations$: 1,
  O: 1
});
$c_Lmain_Combinations$.prototype.$classData = $d_Lmain_Combinations$;
let $n_Lmain_Combinations$ = (void 0);
function $m_Lmain_Combinations$() {
  if ((!$n_Lmain_Combinations$)) {
    $n_Lmain_Combinations$ = new $c_Lmain_Combinations$()
  };
  return $n_Lmain_Combinations$
}
const $p_Lmain_Expectation__hash__AI__I = (function($thiz, arr) {
  return ((((((((((arr.get(0) + $imul(10, arr.get(1))) | 0) + $imul(100, arr.get(2))) | 0) + $imul(1000, arr.get(3))) | 0) + $imul(10000, arr.get(4))) | 0) + $imul(100000, arr.get(5))) | 0)
});
const $p_Lmain_Expectation__upperScoreFromState__I__I = (function($thiz, state) {
  return (63 & state)
});
const $p_Lmain_Expectation__categoryIsUpper__I__Z = (function($thiz, c) {
  return ((c >= $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_ONE) && (c <= $m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_SIX))
});
const $p_Lmain_Expectation__score__I__AI__Z__I = (function($thiz, category, roll, useJoker) {
  if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_ONE === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(1, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_TWO === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(2, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_THREE === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(3, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FOUR === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(4, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_FIVE === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(5, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_UPPER_SIX === category)) {
    return $m_Lmain_Score$().upperCategory__I__AI__I(6, roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_THREE_OF_A_KIND === category)) {
    return $m_Lmain_Score$().threeOfAKind__AI__Z__I(roll, useJoker)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_FOUR_OF_A_KIND === category)) {
    return $m_Lmain_Score$().fourOfAKind__AI__Z__I(roll, useJoker)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_FULL_HOUSE === category)) {
    return $m_Lmain_Score$().fullHouse__AI__Z__I(roll, useJoker)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_SMALL_STRAIGHT === category)) {
    return $m_Lmain_Score$().smallStraight__AI__Z__I(roll, useJoker)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_LARGE_STRAIGHT === category)) {
    return $m_Lmain_Score$().largeStraight__AI__Z__I(roll, useJoker)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE === category)) {
    return $m_Lmain_Score$().yahtzee__AI__I(roll)
  } else if (($m_Lmain_Expectation$().Lmain_Expectation$__f_CHANCE === category)) {
    return $uI($m_Lmain_Score$().chance__F1().apply__O__O(roll))
  } else {
    throw new $c_s_MatchError(category)
  }
});
class $c_Lmain_Expectation extends $c_O {
  constructor(state, cache) {
    super();
    this.Lmain_Expectation__f_state = 0;
    this.Lmain_Expectation__f_cache = null;
    this.Lmain_Expectation__f_rollMemo = null;
    this.Lmain_Expectation__f_keepMemo = null;
    this.Lmain_Expectation__f_endMemo = null;
    this.Lmain_Expectation__f_state = state;
    this.Lmain_Expectation__f_cache = cache;
    this.Lmain_Expectation__f_rollMemo = $as_scm_Map($m_scm_Map$().apply__sc_Seq__sc_GenMap($m_sci_Nil$()));
    this.Lmain_Expectation__f_keepMemo = $as_scm_Map($m_scm_Map$().apply__sc_Seq__sc_GenMap($m_sci_Nil$()));
    this.Lmain_Expectation__f_endMemo = $as_scm_Map($m_scm_Map$().apply__sc_Seq__sc_GenMap($m_sci_Nil$()))
  };
  endOfTurn__AI__T2(roll) {
    if (this.Lmain_Expectation__f_endMemo.contains__O__Z($p_Lmain_Expectation__hash__AI__I(this, roll))) {
      const this$1 = this.Lmain_Expectation__f_endMemo;
      const key = $p_Lmain_Expectation__hash__AI__I(this, roll);
      const x1 = this$1.get__O__s_Option(key);
      let $$x1;
      if ((x1 instanceof $c_s_Some)) {
        const x2 = $as_s_Some(x1);
        const v = x2.s_Some__f_value;
        $$x1 = v
      } else {
        const x = $m_s_None$();
        if ((!(x === x1))) {
          throw new $c_s_MatchError(x1)
        };
        $$x1 = new $c_T2$mcDI$sp(0.0, 0)
      };
      return $as_T2($$x1)
    };
    const len = roll.u.length;
    let i = 0;
    while (true) {
      let $$x2;
      if ((i < len)) {
        const idx = i;
        const arg1 = roll.get(idx);
        $$x2 = (!$m_sr_BoxesRunTime$().equals__O__O__Z(5, arg1))
      } else {
        $$x2 = false
      };
      if ($$x2) {
        i = ((1 + i) | 0)
      } else {
        break
      }
    };
    const n = i;
    const yahtzeeIdx = ((n >= roll.u.length) ? (-1) : n);
    const rollIsYahtzee = (yahtzeeIdx !== (-1));
    const hasUnusableYahtzee = (rollIsYahtzee && ((this.Lmain_Expectation__f_state & $m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE) <= 0));
    const hasYahtzeeBonus = ((($m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE_BONUS & this.Lmain_Expectation__f_state) > 0) && hasUnusableYahtzee);
    let canUseJoker;
    if (hasUnusableYahtzee) {
      const b = ((6 + yahtzeeIdx) | 0);
      canUseJoker = (($doubleToInt($uD(Math.pow(2.0, b))) & this.Lmain_Expectation__f_state) === 0)
    } else {
      canUseJoker = false
    };
    const currentUpperTotal = $p_Lmain_Expectation__upperScoreFromState__I__I(this, this.Lmain_Expectation__f_state);
    const xs = $m_Lmain_Expectation$().Lmain_Expectation$__f_categories;
    const b$1 = new $c_scm_ArrayBuilder$ofInt();
    let i$1 = 0;
    const len$1 = xs.u.length;
    while ((i$1 < len$1)) {
      const idx$1 = i$1;
      const arg1$1 = xs.get(idx$1);
      if ((((arg1$1 & this.Lmain_Expectation__f_state) > 0) !== false)) {
        b$1.$plus$eq__I__scm_ArrayBuilder$ofInt(arg1$1)
      };
      i$1 = ((1 + i$1) | 0)
    };
    const openCategories = b$1.result__AI();
    let elems = null;
    elems = [];
    let i$2 = 0;
    const len$2 = openCategories.u.length;
    while ((i$2 < len$2)) {
      const idx$2 = i$2;
      const arg1$2 = openCategories.get(idx$2);
      const catScore = $p_Lmain_Expectation__score__I__AI__Z__I(this, arg1$2, roll, canUseJoker);
      let nextUpperTotal;
      if ($p_Lmain_Expectation__categoryIsUpper__I__Z(this, arg1$2)) {
        const a = ((currentUpperTotal + catScore) | 0);
        nextUpperTotal = ((a < 63) ? a : 63)
      } else {
        nextUpperTotal = currentUpperTotal
      };
      const newYahtzeeBonus = ((rollIsYahtzee && (arg1$2 === $m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE)) ? $m_Lmain_Expectation$().Lmain_Expectation$__f_YAHTZEE_BONUS : 0);
      const nextState = (((((((this.Lmain_Expectation__f_state ^ arg1$2) - currentUpperTotal) | 0) + nextUpperTotal) | 0) + newYahtzeeBonus) | 0);
      const yahtzeeBonus = (hasYahtzeeBonus ? 100.0 : 0.0);
      const upperBonus = (((currentUpperTotal < 63) && (nextUpperTotal === 63)) ? 35.0 : 0.0);
      const addedScore = ((catScore + yahtzeeBonus) + upperBonus);
      const nextStateExpectation = ((openCategories.u.length === 1) ? 0.0 : this.Lmain_Expectation__f_cache.get__I__F(nextState));
      const elem = new $c_T2$mcDI$sp((addedScore + nextStateExpectation), arg1$2);
      elems.push(elem);
      i$2 = ((1 + i$2) | 0)
    };
    const xs$1 = $makeNativeArrayWrapper($d_T2.getArrayOf(), elems);
    const this$23 = new $c_scm_ArrayOps$ofRef(xs$1);
    const f = new $c_sjsr_AnonFunction1(((this$4$1) => ((x$1$2) => {
      const x$1 = $as_T2(x$1$2);
      return x$1._1$mcD$sp__D()
    }))(this));
    const cmp = $m_s_math_Ordering$Double$();
    const result = $as_T2($f_sc_TraversableOnce__maxBy__F1__s_math_Ordering__O(this$23, f, cmp));
    const this$26 = this.Lmain_Expectation__f_endMemo;
    const self = $p_Lmain_Expectation__hash__AI__I(this, roll);
    const e = $as_scm_DefaultEntry($f_scm_HashTable__findOrAddEntry__O__O__scm_HashEntry(this$26, self, result));
    if ((e !== null)) {
      e.scm_DefaultEntry__f_value = result
    };
    return result
  };
  rolls__AI__I__D(kept, rollsLeft) {
    if (this.Lmain_Expectation__f_rollMemo.contains__O__Z(new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, kept), rollsLeft))) {
      const this$1 = this.Lmain_Expectation__f_rollMemo;
      const key = new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, kept), rollsLeft);
      const x1 = this$1.get__O__s_Option(key);
      let $$x1;
      if ((x1 instanceof $c_s_Some)) {
        const x2 = $as_s_Some(x1);
        const v = x2.s_Some__f_value;
        $$x1 = v
      } else {
        const x = $m_s_None$();
        if ((!(x === x1))) {
          throw new $c_s_MatchError(x1)
        };
        $$x1 = 0.0
      };
      return $uD($$x1)
    };
    const num = $m_s_math_Numeric$IntIsIntegral$();
    let start = 0;
    const end = kept.u.length;
    let z = 0;
    let $$x2;
    while (true) {
      if ((start !== end)) {
        const temp$start = ((1 + start) | 0);
        const arg1 = z;
        const idx = start;
        const arg2 = kept.get(idx);
        const x$1 = $uI(arg1);
        const temp$z = $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, x$1, arg2);
        start = temp$start;
        z = temp$z;
        continue
      };
      $$x2 = z;
      break
    };
    const keptNum = $uI($$x2);
    const this$6 = $m_Lmain_Combinations$().allRolls__I__AI__I__scm_ArrayBuffer(((5 - keptNum) | 0), kept, ($m_Lmain_Combinations$(), 0));
    const this$5 = $m_scm_ArrayBuffer$();
    const bf = this$5.scg_GenTraversableFactory__f_ReusableCBFInstance;
    const b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$6, bf);
    let i = 0;
    const top = this$6.scm_ArrayBuffer__f_size0;
    while ((i < top)) {
      const arg1$1 = this$6.scm_ArrayBuffer__f_array.get(i);
      const roll = $asArrayOf_I(arg1$1, 1);
      const x1$1 = ((rollsLeft === 1) ? this.endOfTurn__AI__T2(roll) : this.keeps__AI__I__T2(roll, (((-1) + rollsLeft) | 0)));
      if ((x1$1 === null)) {
        throw new $c_s_MatchError(x1$1)
      };
      const expectation = x1$1._1$mcD$sp__D();
      const probability = $m_Lmain_Probability$().rollProbability__AI__AI__D(roll, kept);
      b.$plus$eq__O__scm_Builder((expectation * probability));
      i = ((1 + i) | 0)
    };
    const result = $uD($as_sc_TraversableOnce(b.result__O()).sum__s_math_Numeric__O($m_s_math_Numeric$DoubleIsFractional$()));
    const this$9 = this.Lmain_Expectation__f_rollMemo;
    const self = new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, kept), rollsLeft);
    const e = $as_scm_DefaultEntry($f_scm_HashTable__findOrAddEntry__O__O__scm_HashEntry(this$9, self, result));
    if ((e !== null)) {
      e.scm_DefaultEntry__f_value = result
    };
    return result
  };
  keeps__AI__I__T2(roll, rollsLeft) {
    if (this.Lmain_Expectation__f_keepMemo.contains__O__Z(new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, roll), rollsLeft))) {
      const this$1 = this.Lmain_Expectation__f_keepMemo;
      const key = new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, roll), rollsLeft);
      const x1 = this$1.get__O__s_Option(key);
      let $$x1;
      if ((x1 instanceof $c_s_Some)) {
        const x2 = $as_s_Some(x1);
        const v = x2.s_Some__f_value;
        $$x1 = v
      } else {
        const x = $m_s_None$();
        if ((!(x === x1))) {
          throw new $c_s_MatchError(x1)
        };
        $$x1 = $ct_T2__O__O__(new $c_T2(), 0.0, $makeNativeArrayWrapper($d_I.getArrayOf(), [0, 0, 0, 0, 0, 0]))
      };
      return $as_T2($$x1)
    };
    const this$3 = $m_Lmain_Combinations$().allKeeps__AI__I__scm_ArrayBuffer(roll, ($m_Lmain_Combinations$(), 0));
    const this$2 = $m_scm_ArrayBuffer$();
    const bf = this$2.scg_GenTraversableFactory__f_ReusableCBFInstance;
    const b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$3, bf);
    let i = 0;
    const top = this$3.scm_ArrayBuffer__f_size0;
    while ((i < top)) {
      const arg1 = this$3.scm_ArrayBuffer__f_array.get(i);
      const kept = $asArrayOf_I(arg1, 1);
      const num = $m_s_math_Numeric$IntIsIntegral$();
      let start = 0;
      const end = kept.u.length;
      let z = 0;
      let $$x2;
      while (true) {
        if ((start !== end)) {
          const temp$start = ((1 + start) | 0);
          const arg1$1 = z;
          const idx = start;
          const arg2 = kept.get(idx);
          const x$1 = $uI(arg1$1);
          const temp$z = $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, x$1, arg2);
          start = temp$start;
          z = temp$z;
          continue
        };
        $$x2 = z;
        break
      };
      let value;
      if (($uI($$x2) === 5)) {
        value = this.endOfTurn__AI__T2(roll)._1$mcD$sp__D()
      } else {
        value = this.rolls__AI__I__D(kept, rollsLeft)
      };
      b.$plus$eq__O__scm_Builder($ct_T2__O__O__(new $c_T2(), value, kept));
      i = ((1 + i) | 0)
    };
    const this$7 = $as_sc_TraversableOnce(b.result__O());
    const f = new $c_sjsr_AnonFunction1(((this$3$1) => ((x$2$2) => {
      const x$2 = $as_T2(x$2$2);
      return x$2._1$mcD$sp__D()
    }))(this));
    const cmp = $m_s_math_Ordering$Double$();
    const result = $as_T2($f_sc_TraversableOnce__maxBy__F1__s_math_Ordering__O(this$7, f, cmp));
    const this$10 = this.Lmain_Expectation__f_keepMemo;
    const self = new $c_T2$mcII$sp($p_Lmain_Expectation__hash__AI__I(this, roll), rollsLeft);
    const e = $as_scm_DefaultEntry($f_scm_HashTable__findOrAddEntry__O__O__scm_HashEntry(this$10, self, result));
    if ((e !== null)) {
      e.scm_DefaultEntry__f_value = result
    };
    return result
  };
}
const $d_Lmain_Expectation = new $TypeData().initClass({
  Lmain_Expectation: 0
}, false, "main.Expectation", {
  Lmain_Expectation: 1,
  O: 1
});
$c_Lmain_Expectation.prototype.$classData = $d_Lmain_Expectation;
class $c_Lmain_Expectation$ extends $c_O {
  constructor() {
    super();
    this.Lmain_Expectation$__f_UPPER_ONE = 0;
    this.Lmain_Expectation$__f_UPPER_TWO = 0;
    this.Lmain_Expectation$__f_UPPER_THREE = 0;
    this.Lmain_Expectation$__f_UPPER_FOUR = 0;
    this.Lmain_Expectation$__f_UPPER_FIVE = 0;
    this.Lmain_Expectation$__f_UPPER_SIX = 0;
    this.Lmain_Expectation$__f_THREE_OF_A_KIND = 0;
    this.Lmain_Expectation$__f_FOUR_OF_A_KIND = 0;
    this.Lmain_Expectation$__f_FULL_HOUSE = 0;
    this.Lmain_Expectation$__f_SMALL_STRAIGHT = 0;
    this.Lmain_Expectation$__f_LARGE_STRAIGHT = 0;
    this.Lmain_Expectation$__f_CHANCE = 0;
    this.Lmain_Expectation$__f_YAHTZEE = 0;
    this.Lmain_Expectation$__f_YAHTZEE_BONUS = 0;
    this.Lmain_Expectation$__f_categories = null;
    $n_Lmain_Expectation$ = this;
    this.Lmain_Expectation$__f_UPPER_ONE = $doubleToInt($uD(Math.pow(2.0, 6.0)));
    this.Lmain_Expectation$__f_UPPER_TWO = $doubleToInt($uD(Math.pow(2.0, 7.0)));
    this.Lmain_Expectation$__f_UPPER_THREE = $doubleToInt($uD(Math.pow(2.0, 8.0)));
    this.Lmain_Expectation$__f_UPPER_FOUR = $doubleToInt($uD(Math.pow(2.0, 9.0)));
    this.Lmain_Expectation$__f_UPPER_FIVE = $doubleToInt($uD(Math.pow(2.0, 10.0)));
    this.Lmain_Expectation$__f_UPPER_SIX = $doubleToInt($uD(Math.pow(2.0, 11.0)));
    this.Lmain_Expectation$__f_THREE_OF_A_KIND = $doubleToInt($uD(Math.pow(2.0, 12.0)));
    this.Lmain_Expectation$__f_FOUR_OF_A_KIND = $doubleToInt($uD(Math.pow(2.0, 13.0)));
    this.Lmain_Expectation$__f_FULL_HOUSE = $doubleToInt($uD(Math.pow(2.0, 14.0)));
    this.Lmain_Expectation$__f_SMALL_STRAIGHT = $doubleToInt($uD(Math.pow(2.0, 15.0)));
    this.Lmain_Expectation$__f_LARGE_STRAIGHT = $doubleToInt($uD(Math.pow(2.0, 16.0)));
    this.Lmain_Expectation$__f_CHANCE = $doubleToInt($uD(Math.pow(2.0, 17.0)));
    this.Lmain_Expectation$__f_YAHTZEE = $doubleToInt($uD(Math.pow(2.0, 18.0)));
    this.Lmain_Expectation$__f_YAHTZEE_BONUS = $doubleToInt($uD(Math.pow(2.0, 19.0)));
    this.Lmain_Expectation$__f_categories = $makeNativeArrayWrapper($d_I.getArrayOf(), [this.Lmain_Expectation$__f_UPPER_ONE, this.Lmain_Expectation$__f_UPPER_TWO, this.Lmain_Expectation$__f_UPPER_THREE, this.Lmain_Expectation$__f_UPPER_FOUR, this.Lmain_Expectation$__f_UPPER_FIVE, this.Lmain_Expectation$__f_UPPER_SIX, this.Lmain_Expectation$__f_THREE_OF_A_KIND, this.Lmain_Expectation$__f_FOUR_OF_A_KIND, this.Lmain_Expectation$__f_FULL_HOUSE, this.Lmain_Expectation$__f_SMALL_STRAIGHT, this.Lmain_Expectation$__f_LARGE_STRAIGHT, this.Lmain_Expectation$__f_CHANCE, this.Lmain_Expectation$__f_YAHTZEE])
  };
}
const $d_Lmain_Expectation$ = new $TypeData().initClass({
  Lmain_Expectation$: 0
}, false, "main.Expectation$", {
  Lmain_Expectation$: 1,
  O: 1
});
$c_Lmain_Expectation$.prototype.$classData = $d_Lmain_Expectation$;
let $n_Lmain_Expectation$ = (void 0);
function $m_Lmain_Expectation$() {
  if ((!$n_Lmain_Expectation$)) {
    $n_Lmain_Expectation$ = new $c_Lmain_Expectation$()
  };
  return $n_Lmain_Expectation$
}
const $p_Lmain_Probability$__factorial__I__I = (function($thiz, n) {
  return ((n === 1) ? 1 : $imul(n, $p_Lmain_Probability$__factorial__I__I($thiz, (((-1) + n) | 0))))
});
class $c_Lmain_Probability$ extends $c_O {
  rollProbability__AI__AI__D(diceGroup, initialGroup) {
    const this$4 = new $c_scm_ArrayOps$ofInt(diceGroup);
    const that = $m_s_Predef$().wrapIntArray__AI__scm_WrappedArray(initialGroup);
    let xs;
    if ((that !== null)) {
      let elems = null;
      elems = [];
      let i = 0;
      const this$ = this$4.scm_ArrayOps$ofInt__f_repr;
      const x = this$.u.length;
      const that$1 = that.length__I();
      const len = ((x < that$1) ? x : that$1);
      while ((i < len)) {
        const idx = i;
        const this$$1 = this$4.scm_ArrayOps$ofInt__f_repr;
        const elem = $ct_T2__O__O__(new $c_T2(), this$$1.get(idx), that.apply__I__O(i));
        elems.push(elem);
        i = ((1 + i) | 0)
      };
      xs = $makeNativeArrayWrapper($d_T2.getArrayOf(), elems)
    } else {
      let elems$1 = null;
      elems$1 = [];
      const this$$2 = this$4.scm_ArrayOps$ofInt__f_repr;
      const these = new $c_sc_IndexedSeqLike$Elements(this$4, 0, this$$2.u.length);
      const those = new $c_sc_IndexedSeqLike$Elements(that, 0, that.length__I());
      while ((these.hasNext__Z() && those.hasNext__Z())) {
        const elem$1 = $ct_T2__O__O__(new $c_T2(), these.next__O(), those.next__O());
        elems$1.push(elem$1)
      };
      xs = $makeNativeArrayWrapper($d_T2.getArrayOf(), elems$1)
    };
    let start = 0;
    const end = xs.u.length;
    let z___1 = null;
    let z___2 = null;
    let z___1$mcI$sp = 1;
    let z___2$mcI$sp = 0;
    let x1___1;
    let x1___2;
    let x1___1$mcI$sp;
    let x1___2$mcI$sp;
    while (true) {
      if ((start !== end)) {
        const temp$start = ((1 + start) | 0);
        const arg1___1 = z___1;
        const arg1___2 = z___2;
        const arg1___1$mcI$sp = z___1$mcI$sp;
        const arg1___2$mcI$sp = z___2$mcI$sp;
        const index = start;
        const arg2 = xs.get(index);
        const current = $as_T2(arg2);
        const this$19 = $m_Lmain_Probability$();
        const denom = arg1___1$mcI$sp;
        const dieCount = arg1___2$mcI$sp;
        if ((current === null)) {
          throw new $c_s_MatchError(current)
        };
        const currentDice = current._1$mcI$sp__I();
        const initialDice = current._2$mcI$sp__I();
        const addedDice = ((currentDice - initialDice) | 0);
        let temp$z___1;
        let temp$z___2;
        let temp$z___1$mcI$sp;
        let temp$z___2$mcI$sp;
        if ((addedDice > 0)) {
          const _1$mcI$sp = $imul(denom, $p_Lmain_Probability$__factorial__I__I(this$19, addedDice));
          const _2$mcI$sp = ((dieCount + addedDice) | 0);
          const $$x1___1 = null;
          const $$x1___2 = null;
          const $$x1___1$mcI$sp = _1$mcI$sp;
          const $$x1___2$mcI$sp = _2$mcI$sp;
          temp$z___1 = $$x1___1;
          temp$z___2 = $$x1___2;
          temp$z___1$mcI$sp = $$x1___1$mcI$sp;
          temp$z___2$mcI$sp = $$x1___2$mcI$sp
        } else {
          const $$x2___1 = null;
          const $$x2___2 = null;
          const $$x2___1$mcI$sp = denom;
          const $$x2___2$mcI$sp = dieCount;
          temp$z___1 = $$x2___1;
          temp$z___2 = $$x2___2;
          temp$z___1$mcI$sp = $$x2___1$mcI$sp;
          temp$z___2$mcI$sp = $$x2___2$mcI$sp
        };
        start = temp$start;
        z___1 = temp$z___1;
        z___2 = temp$z___2;
        z___1$mcI$sp = temp$z___1$mcI$sp;
        z___2$mcI$sp = temp$z___2$mcI$sp;
        continue
      };
      x1___1 = z___1;
      x1___2 = z___2;
      x1___1$mcI$sp = z___1$mcI$sp;
      x1___2$mcI$sp = z___2$mcI$sp;
      break
    };
    const denom$1 = x1___1$mcI$sp;
    const count = x1___2$mcI$sp;
    if ((count === 0)) {
      return 1.0
    } else {
      const $$x3 = $p_Lmain_Probability$__factorial__I__I(this, count);
      const b = count;
      return ($$x3 / (denom$1 * $uD(Math.pow(6.0, b))))
    }
  };
}
const $d_Lmain_Probability$ = new $TypeData().initClass({
  Lmain_Probability$: 0
}, false, "main.Probability$", {
  Lmain_Probability$: 1,
  O: 1
});
$c_Lmain_Probability$.prototype.$classData = $d_Lmain_Probability$;
let $n_Lmain_Probability$ = (void 0);
function $m_Lmain_Probability$() {
  if ((!$n_Lmain_Probability$)) {
    $n_Lmain_Probability$ = new $c_Lmain_Probability$()
  };
  return $n_Lmain_Probability$
}
const $p_Lmain_Score$__diceSum__AI__I = (function($thiz, dice) {
  let elems = null;
  elems = [];
  const len = dice.u.length;
  let i = 0;
  while ((i < len)) {
    const idx = i;
    const elem = $ct_T2__O__O__(new $c_T2(), dice.get(idx), i);
    elems.push(elem);
    i = ((1 + i) | 0)
  };
  const xs = $makeNativeArrayWrapper($d_T2.getArrayOf(), elems);
  let elems$1 = null;
  elems$1 = [];
  let i$1 = 0;
  const len$1 = xs.u.length;
  while ((i$1 < len$1)) {
    const index = i$1;
    const arg1 = xs.get(index);
    const x0$1 = $as_T2(arg1);
    if ((x0$1 === null)) {
      throw new $c_s_MatchError(x0$1)
    };
    const value = x0$1._1$mcI$sp__I();
    const idx$1 = x0$1._2$mcI$sp__I();
    const elem$1 = $imul(value, ((1 + idx$1) | 0));
    elems$1.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  const xs$1 = $makeNativeArrayWrapper($d_I.getArrayOf(), elems$1);
  const num = $m_s_math_Numeric$IntIsIntegral$();
  let start = 0;
  const end = xs$1.u.length;
  let z = 0;
  let $$x1;
  while (true) {
    if ((start !== end)) {
      const temp$start = ((1 + start) | 0);
      const arg1$1 = z;
      const idx$2 = start;
      const arg2 = xs$1.get(idx$2);
      const x = $uI(arg1$1);
      const temp$z = $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, x, arg2);
      start = temp$start;
      z = temp$z;
      continue
    };
    $$x1 = z;
    break
  };
  return $uI($$x1)
});
const $p_Lmain_Score$__countConsecutive__AI__I = (function($thiz, dice) {
  let start = 0;
  const end = dice.u.length;
  let z___1 = null;
  let z___2 = null;
  let z___1$mcI$sp = 0;
  let z___2$mcI$sp = 0;
  let $$x1___1;
  let $$x1___2;
  let $$x1___1$mcI$sp;
  let $$x1___2$mcI$sp;
  while (true) {
    if ((start !== end)) {
      const temp$start = ((1 + start) | 0);
      const arg1___1 = z___1;
      const arg1___2 = z___2;
      const arg1___1$mcI$sp = z___1$mcI$sp;
      const arg1___2$mcI$sp = z___2$mcI$sp;
      const idx = start;
      const arg2 = dice.get(idx);
      const max = arg1___1$mcI$sp;
      const currentSeq = arg1___2$mcI$sp;
      let temp$z___1;
      let temp$z___2;
      let temp$z___1$mcI$sp;
      let temp$z___2$mcI$sp;
      if ((arg2 === 0)) {
        const $$x2___1 = null;
        const $$x2___2 = null;
        const $$x2___1$mcI$sp = max;
        const $$x2___2$mcI$sp = 0;
        temp$z___1 = $$x2___1;
        temp$z___2 = $$x2___2;
        temp$z___1$mcI$sp = $$x2___1$mcI$sp;
        temp$z___2$mcI$sp = $$x2___2$mcI$sp
      } else {
        const nextSeq = ((1 + currentSeq) | 0);
        const _1$mcI$sp = ((nextSeq > max) ? nextSeq : max);
        const $$x3___1 = null;
        const $$x3___2 = null;
        const $$x3___1$mcI$sp = _1$mcI$sp;
        const $$x3___2$mcI$sp = nextSeq;
        temp$z___1 = $$x3___1;
        temp$z___2 = $$x3___2;
        temp$z___1$mcI$sp = $$x3___1$mcI$sp;
        temp$z___2$mcI$sp = $$x3___2$mcI$sp
      };
      start = temp$start;
      z___1 = temp$z___1;
      z___2 = temp$z___2;
      z___1$mcI$sp = temp$z___1$mcI$sp;
      z___2$mcI$sp = temp$z___2$mcI$sp;
      continue
    };
    $$x1___1 = z___1;
    $$x1___2 = z___2;
    $$x1___1$mcI$sp = z___1$mcI$sp;
    $$x1___2$mcI$sp = z___2$mcI$sp;
    break
  };
  return $$x1___1$mcI$sp
});
class $c_Lmain_Score$ extends $c_O {
  upperCategory__I__AI__I(n, dice) {
    return $imul(dice.get((((-1) + n) | 0)), n)
  };
  threeOfAKind__AI__Z__I(dice, useJoker) {
    let i = 0;
    while (true) {
      let $$x1;
      if ((i < dice.u.length)) {
        const idx = i;
        const arg1 = dice.get(idx);
        $$x1 = ((arg1 >= 3) === false)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        i = ((1 + i) | 0)
      } else {
        break
      }
    };
    if (((i !== dice.u.length) || useJoker)) {
      return $p_Lmain_Score$__diceSum__AI__I(this, dice)
    } else {
      return 0
    }
  };
  fourOfAKind__AI__Z__I(dice, useJoker) {
    let i = 0;
    while (true) {
      let $$x1;
      if ((i < dice.u.length)) {
        const idx = i;
        const arg1 = dice.get(idx);
        $$x1 = ((arg1 >= 4) === false)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        i = ((1 + i) | 0)
      } else {
        break
      }
    };
    if (((i !== dice.u.length) || useJoker)) {
      return $p_Lmain_Score$__diceSum__AI__I(this, dice)
    } else {
      return 0
    }
  };
  fullHouse__AI__Z__I(dice, useJoker) {
    let i = 0;
    while (true) {
      let $$x2;
      if ((i < dice.u.length)) {
        const idx = i;
        const arg1 = dice.get(idx);
        $$x2 = ((arg1 === 2) === false)
      } else {
        $$x2 = false
      };
      if ($$x2) {
        i = ((1 + i) | 0)
      } else {
        break
      }
    };
    let $$x1;
    if ((i !== dice.u.length)) {
      let i$1 = 0;
      while (true) {
        let $$x3;
        if ((i$1 < dice.u.length)) {
          const idx$1 = i$1;
          const arg1$1 = dice.get(idx$1);
          $$x3 = ((arg1$1 === 3) === false)
        } else {
          $$x3 = false
        };
        if ($$x3) {
          i$1 = ((1 + i$1) | 0)
        } else {
          break
        }
      };
      $$x1 = (i$1 !== dice.u.length)
    } else {
      $$x1 = false
    };
    if (($$x1 || useJoker)) {
      return 25
    } else {
      return 0
    }
  };
  smallStraight__AI__Z__I(dice, useJoker) {
    return ((($p_Lmain_Score$__countConsecutive__AI__I(this, dice) >= 4) || useJoker) ? 30 : 0)
  };
  largeStraight__AI__Z__I(dice, useJoker) {
    return ((($p_Lmain_Score$__countConsecutive__AI__I(this, dice) >= 5) || useJoker) ? 40 : 0)
  };
  yahtzee__AI__I(dice) {
    let i = 0;
    while (true) {
      let $$x1;
      if ((i < dice.u.length)) {
        const idx = i;
        const arg1 = dice.get(idx);
        $$x1 = ((arg1 === 5) === false)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        i = ((1 + i) | 0)
      } else {
        break
      }
    };
    if ((i !== dice.u.length)) {
      return 50
    } else {
      return 0
    }
  };
  chance__F1() {
    return new $c_sjsr_AnonFunction1(((this$1) => ((x$6$2) => {
      const x$6 = $asArrayOf_I(x$6$2, 1);
      return $p_Lmain_Score$__diceSum__AI__I($m_Lmain_Score$(), x$6)
    }))(this))
  };
}
const $d_Lmain_Score$ = new $TypeData().initClass({
  Lmain_Score$: 0
}, false, "main.Score$", {
  Lmain_Score$: 1,
  O: 1
});
$c_Lmain_Score$.prototype.$classData = $d_Lmain_Score$;
let $n_Lmain_Score$ = (void 0);
function $m_Lmain_Score$() {
  if ((!$n_Lmain_Score$)) {
    $n_Lmain_Score$ = new $c_Lmain_Score$()
  };
  return $n_Lmain_Score$
}
class $c_s_FallbackArrayBuilding extends $c_O {
}
class $c_s_LowPriorityImplicits extends $c_O {
  wrapIntArray__AI__scm_WrappedArray(xs) {
    return ((xs !== null) ? new $c_scm_WrappedArray$ofInt(xs) : null)
  };
}
class $c_s_Predef$any2stringadd$ extends $c_O {
  $plus$extension__O__T__T(this$, other) {
    return (("" + this$) + other)
  };
}
const $d_s_Predef$any2stringadd$ = new $TypeData().initClass({
  s_Predef$any2stringadd$: 0
}, false, "scala.Predef$any2stringadd$", {
  s_Predef$any2stringadd$: 1,
  O: 1
});
$c_s_Predef$any2stringadd$.prototype.$classData = $d_s_Predef$any2stringadd$;
let $n_s_Predef$any2stringadd$ = (void 0);
function $m_s_Predef$any2stringadd$() {
  if ((!$n_s_Predef$any2stringadd$)) {
    $n_s_Predef$any2stringadd$ = new $c_s_Predef$any2stringadd$()
  };
  return $n_s_Predef$any2stringadd$
}
class $c_sc_$colon$plus$ extends $c_O {
}
const $d_sc_$colon$plus$ = new $TypeData().initClass({
  sc_$colon$plus$: 0
}, false, "scala.collection.$colon$plus$", {
  sc_$colon$plus$: 1,
  O: 1
});
$c_sc_$colon$plus$.prototype.$classData = $d_sc_$colon$plus$;
let $n_sc_$colon$plus$ = (void 0);
function $m_sc_$colon$plus$() {
  if ((!$n_sc_$colon$plus$)) {
    $n_sc_$colon$plus$ = new $c_sc_$colon$plus$()
  };
  return $n_sc_$colon$plus$
}
class $c_sc_$plus$colon$ extends $c_O {
}
const $d_sc_$plus$colon$ = new $TypeData().initClass({
  sc_$plus$colon$: 0
}, false, "scala.collection.$plus$colon$", {
  sc_$plus$colon$: 1,
  O: 1
});
$c_sc_$plus$colon$.prototype.$classData = $d_sc_$plus$colon$;
let $n_sc_$plus$colon$ = (void 0);
function $m_sc_$plus$colon$() {
  if ((!$n_sc_$plus$colon$)) {
    $n_sc_$plus$colon$ = new $c_sc_$plus$colon$()
  };
  return $n_sc_$plus$colon$
}
function $is_sc_GenTraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversableOnce)))
}
function $as_sc_GenTraversableOnce(obj) {
  return (($is_sc_GenTraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversableOnce"))
}
function $isArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversableOnce)))
}
function $asArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (($isArrayOf_sc_GenTraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversableOnce;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_empty = new $c_sc_Iterator$$anon$2()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_scg_GenMapFactory extends $c_O {
  apply__sc_Seq__sc_GenMap(elems) {
    return $as_sc_GenMap($as_scm_Builder(this.newBuilder__scm_Builder().$plus$plus$eq__sc_TraversableOnce__scg_Growable(elems)).result__O())
  };
  newBuilder__scm_Builder() {
    return $ct_scm_MapBuilder__sc_GenMap__(new $c_scm_MapBuilder(), this.empty__sc_GenMap())
  };
}
class $c_scg_GenericCompanion extends $c_O {
  empty__sc_GenTraversable() {
    return $as_sc_GenTraversable(this.newBuilder__scm_Builder().result__O())
  };
  apply__sc_Seq__sc_GenTraversable(elems) {
    if (elems.isEmpty__Z()) {
      return this.empty__sc_GenTraversable()
    } else {
      const b = this.newBuilder__scm_Builder();
      b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(elems);
      return $as_sc_GenTraversable(b.result__O())
    }
  };
}
class $c_sci_HashMap$Merger extends $c_O {
  retainIdentical__Z() {
    return false
  };
}
class $c_sci_Stream$$hash$colon$colon$ extends $c_O {
}
const $d_sci_Stream$$hash$colon$colon$ = new $TypeData().initClass({
  sci_Stream$$hash$colon$colon$: 0
}, false, "scala.collection.immutable.Stream$$hash$colon$colon$", {
  sci_Stream$$hash$colon$colon$: 1,
  O: 1
});
$c_sci_Stream$$hash$colon$colon$.prototype.$classData = $d_sci_Stream$$hash$colon$colon$;
let $n_sci_Stream$$hash$colon$colon$ = (void 0);
function $m_sci_Stream$$hash$colon$colon$() {
  if ((!$n_sci_Stream$$hash$colon$colon$)) {
    $n_sci_Stream$$hash$colon$colon$ = new $c_sci_Stream$$hash$colon$colon$()
  };
  return $n_sci_Stream$$hash$colon$colon$
}
const $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream = (function($thiz) {
  if ((!$thiz.sci_StreamIterator$LazyCell__f_bitmap$0)) {
    $thiz.sci_StreamIterator$LazyCell__f_v = $as_sci_Stream($thiz.sci_StreamIterator$LazyCell__f_st.apply__O());
    $thiz.sci_StreamIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sci_StreamIterator$LazyCell__f_st = null;
  return $thiz.sci_StreamIterator$LazyCell__f_v
});
class $c_sci_StreamIterator$LazyCell extends $c_O {
  constructor(outer, st) {
    super();
    this.sci_StreamIterator$LazyCell__f_v = null;
    this.sci_StreamIterator$LazyCell__f_st = null;
    this.sci_StreamIterator$LazyCell__f_bitmap$0 = false;
    this.sci_StreamIterator$LazyCell__f_$outer = null;
    this.sci_StreamIterator$LazyCell__f_st = st;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_StreamIterator$LazyCell__f_$outer = outer
    }
  };
  v__sci_Stream() {
    return ((!this.sci_StreamIterator$LazyCell__f_bitmap$0) ? $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream(this) : this.sci_StreamIterator$LazyCell__f_v)
  };
}
const $d_sci_StreamIterator$LazyCell = new $TypeData().initClass({
  sci_StreamIterator$LazyCell: 0
}, false, "scala.collection.immutable.StreamIterator$LazyCell", {
  sci_StreamIterator$LazyCell: 1,
  O: 1
});
$c_sci_StreamIterator$LazyCell.prototype.$classData = $d_sci_StreamIterator$LazyCell;
const $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V = (function($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AO__V(that.display5__AO());
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__getElem__I__I__O = (function($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.display0__AO().get((31 & index))
  } else if ((xor < 1024)) {
    return $asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 32768)) {
    return $asArrayOf_O($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1048576)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 33554432)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1).get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoPos__I__I__V = (function($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoNextBlockStart__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get(0), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
      $thiz.display1__AO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
      $thiz.display2__AO().set(0, $thiz.display1__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
      $thiz.display3__AO().set(0, $thiz.display2__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display2_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
      $thiz.display4__AO().set(0, $thiz.display3__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display2_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display3_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
      $thiz.display5__AO().set(0, $thiz.display4__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display2_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display3_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display4_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
    $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__copyOf__AO__AO = (function($thiz, a) {
  const copy = $newArrayObject($d_O.getArrayOf(), [a.u.length]);
  const length = a.u.length;
  $systemArraycopy(a, 0, copy, 0, length);
  return copy
});
const $f_sci_VectorPointer__stabilize__I__V = (function($thiz, index) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      const a = $thiz.display5__AO();
      $thiz.display5_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a));
      const a$1 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$1));
      const a$2 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$2));
      const a$3 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$3));
      const a$4 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$4));
      $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO());
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      const a$5 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$5));
      const a$6 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$6));
      const a$7 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$7));
      const a$8 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$8));
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      const a$9 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$9));
      const a$10 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$10));
      const a$11 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$11));
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      const a$12 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$12));
      const a$13 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$13));
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      const a$14 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$14));
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
class $c_scm_ArrayOps$ofInt$ extends $c_O {
  equals$extension__AI__O__Z(this$, x$1) {
    if ((x$1 instanceof $c_scm_ArrayOps$ofInt)) {
      const ofInt$1 = ((x$1 === null) ? null : $as_scm_ArrayOps$ofInt(x$1).scm_ArrayOps$ofInt__f_repr);
      return (this$ === ofInt$1)
    } else {
      return false
    }
  };
}
const $d_scm_ArrayOps$ofInt$ = new $TypeData().initClass({
  scm_ArrayOps$ofInt$: 0
}, false, "scala.collection.mutable.ArrayOps$ofInt$", {
  scm_ArrayOps$ofInt$: 1,
  O: 1
});
$c_scm_ArrayOps$ofInt$.prototype.$classData = $d_scm_ArrayOps$ofInt$;
let $n_scm_ArrayOps$ofInt$ = (void 0);
function $m_scm_ArrayOps$ofInt$() {
  if ((!$n_scm_ArrayOps$ofInt$)) {
    $n_scm_ArrayOps$ofInt$ = new $c_scm_ArrayOps$ofInt$()
  };
  return $n_scm_ArrayOps$ofInt$
}
class $c_scm_ArrayOps$ofRef$ extends $c_O {
  equals$extension__AO__O__Z(this$, x$1) {
    if ((x$1 instanceof $c_scm_ArrayOps$ofRef)) {
      const ofRef$1 = ((x$1 === null) ? null : $as_scm_ArrayOps$ofRef(x$1).scm_ArrayOps$ofRef__f_repr);
      return (this$ === ofRef$1)
    } else {
      return false
    }
  };
}
const $d_scm_ArrayOps$ofRef$ = new $TypeData().initClass({
  scm_ArrayOps$ofRef$: 0
}, false, "scala.collection.mutable.ArrayOps$ofRef$", {
  scm_ArrayOps$ofRef$: 1,
  O: 1
});
$c_scm_ArrayOps$ofRef$.prototype.$classData = $d_scm_ArrayOps$ofRef$;
let $n_scm_ArrayOps$ofRef$ = (void 0);
function $m_scm_ArrayOps$ofRef$() {
  if ((!$n_scm_ArrayOps$ofRef$)) {
    $n_scm_ArrayOps$ofRef$ = new $c_scm_ArrayOps$ofRef$()
  };
  return $n_scm_ArrayOps$ofRef$
}
const $d_scm_HashEntry = new $TypeData().initClass({
  scm_HashEntry: 0
}, true, "scala.collection.mutable.HashEntry", {
  scm_HashEntry: 1,
  O: 1
});
class $c_scm_HashTable$ extends $c_O {
  newThreshold__I__I__I(_loadFactor, size) {
    const hi = (size >> 31);
    const hi$1 = (_loadFactor >> 31);
    const a0 = (65535 & size);
    const a1 = ((size >>> 16) | 0);
    const b0 = (65535 & _loadFactor);
    const b1 = ((_loadFactor >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi$2 = (((((((($imul(size, hi$1) + $imul(hi, _loadFactor)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    const this$3 = $m_RTLong$();
    const lo$1 = this$3.divideImpl__I__I__I__I__I(lo, hi$2, 1000, 0);
    return lo$1
  };
  nextPositivePowerOfTwo__I__I(target) {
    const i = (((-1) + target) | 0);
    return (1 << ((-$clz32(i)) | 0))
  };
}
const $d_scm_HashTable$ = new $TypeData().initClass({
  scm_HashTable$: 0
}, false, "scala.collection.mutable.HashTable$", {
  scm_HashTable$: 1,
  O: 1
});
$c_scm_HashTable$.prototype.$classData = $d_scm_HashTable$;
let $n_scm_HashTable$ = (void 0);
function $m_scm_HashTable$() {
  if ((!$n_scm_HashTable$)) {
    $n_scm_HashTable$ = new $c_scm_HashTable$()
  };
  return $n_scm_HashTable$
}
const $f_scm_HashTable$HashUtils__improve__I__I__I = (function($thiz, hcode, seed) {
  const i = $m_s_util_hashing_package$().byteswap32__I__I(hcode);
  return (((i >>> seed) | 0) | (i << ((-seed) | 0)))
});
function $is_s_concurrent_BlockContext(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_BlockContext)))
}
function $as_s_concurrent_BlockContext(obj) {
  return (($is_s_concurrent_BlockContext(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.BlockContext"))
}
function $isArrayOf_s_concurrent_BlockContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_BlockContext)))
}
function $asArrayOf_s_concurrent_BlockContext(obj, depth) {
  return (($isArrayOf_s_concurrent_BlockContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.BlockContext;", depth))
}
class $c_s_concurrent_BlockContext$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_BlockContext$__f_contextLocal = null;
    $n_s_concurrent_BlockContext$ = this;
    this.s_concurrent_BlockContext$__f_contextLocal = new $c_jl_ThreadLocal()
  };
  current__s_concurrent_BlockContext() {
    const x1 = $as_s_concurrent_BlockContext(this.s_concurrent_BlockContext$__f_contextLocal.get__O());
    if ((x1 === null)) {
      const x1$2 = $m_jl_Thread$().jl_Thread$__f_SingleThread;
      return ($is_s_concurrent_BlockContext(x1$2) ? $as_s_concurrent_BlockContext(x1$2) : $m_s_concurrent_BlockContext$DefaultBlockContext$())
    } else {
      return x1
    }
  };
}
const $d_s_concurrent_BlockContext$ = new $TypeData().initClass({
  s_concurrent_BlockContext$: 0
}, false, "scala.concurrent.BlockContext$", {
  s_concurrent_BlockContext$: 1,
  O: 1
});
$c_s_concurrent_BlockContext$.prototype.$classData = $d_s_concurrent_BlockContext$;
let $n_s_concurrent_BlockContext$ = (void 0);
function $m_s_concurrent_BlockContext$() {
  if ((!$n_s_concurrent_BlockContext$)) {
    $n_s_concurrent_BlockContext$ = new $c_s_concurrent_BlockContext$()
  };
  return $n_s_concurrent_BlockContext$
}
const $p_s_concurrent_ExecutionContext$Implicits$__global$lzycompute__s_concurrent_ExecutionContext = (function($thiz) {
  if ((!$thiz.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0)) {
    $thiz.s_concurrent_ExecutionContext$Implicits$__f_global = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
    $thiz.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0 = true
  };
  return $thiz.s_concurrent_ExecutionContext$Implicits$__f_global
});
class $c_s_concurrent_ExecutionContext$Implicits$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_ExecutionContext$Implicits$__f_global = null;
    this.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0 = false
  };
  global__s_concurrent_ExecutionContext() {
    return ((!this.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0) ? $p_s_concurrent_ExecutionContext$Implicits$__global$lzycompute__s_concurrent_ExecutionContext(this) : this.s_concurrent_ExecutionContext$Implicits$__f_global)
  };
}
const $d_s_concurrent_ExecutionContext$Implicits$ = new $TypeData().initClass({
  s_concurrent_ExecutionContext$Implicits$: 0
}, false, "scala.concurrent.ExecutionContext$Implicits$", {
  s_concurrent_ExecutionContext$Implicits$: 1,
  O: 1
});
$c_s_concurrent_ExecutionContext$Implicits$.prototype.$classData = $d_s_concurrent_ExecutionContext$Implicits$;
let $n_s_concurrent_ExecutionContext$Implicits$ = (void 0);
function $m_s_concurrent_ExecutionContext$Implicits$() {
  if ((!$n_s_concurrent_ExecutionContext$Implicits$)) {
    $n_s_concurrent_ExecutionContext$Implicits$ = new $c_s_concurrent_ExecutionContext$Implicits$()
  };
  return $n_s_concurrent_ExecutionContext$Implicits$
}
function $is_s_concurrent_OnCompleteRunnable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_OnCompleteRunnable)))
}
function $as_s_concurrent_OnCompleteRunnable(obj) {
  return (($is_s_concurrent_OnCompleteRunnable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.OnCompleteRunnable"))
}
function $isArrayOf_s_concurrent_OnCompleteRunnable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_OnCompleteRunnable)))
}
function $asArrayOf_s_concurrent_OnCompleteRunnable(obj, depth) {
  return (($isArrayOf_s_concurrent_OnCompleteRunnable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.OnCompleteRunnable;", depth))
}
const $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise = (function($thiz, result) {
  if ($thiz.tryComplete__s_util_Try__Z(result)) {
    return $thiz
  } else {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Promise already completed.")
  }
});
const $f_s_concurrent_Promise__tryCompleteWith__s_concurrent_Future__s_concurrent_Promise = (function($thiz, other) {
  if ((other !== $thiz)) {
    other.onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
      const x$1 = $as_s_util_Try(x$1$2);
      return this$1.tryComplete__s_util_Try__Z(x$1)
    }))($thiz)), $m_s_concurrent_Future$InternalCallbackExecutor$())
  };
  return $thiz
});
const $f_s_concurrent_Promise__success__O__s_concurrent_Promise = (function($thiz, value) {
  const result = new $c_s_util_Success(value);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
const $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise = (function($thiz, cause) {
  const result = new $c_s_util_Failure(cause);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
const $p_s_concurrent_impl_Promise$__resolver__jl_Throwable__s_util_Try = (function($thiz, throwable) {
  if ((throwable instanceof $c_sr_NonLocalReturnControl)) {
    const x2 = $as_sr_NonLocalReturnControl(throwable);
    return new $c_s_util_Success(x2.value__O())
  } else if ($is_s_util_control_ControlThrowable(throwable)) {
    const x3 = $as_s_util_control_ControlThrowable(throwable);
    return new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed ControlThrowable", $as_jl_Throwable(x3)))
  } else if ((throwable instanceof $c_jl_InterruptedException)) {
    const x4 = $as_jl_InterruptedException(throwable);
    return new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed InterruptedException", x4))
  } else if ((throwable instanceof $c_jl_Error)) {
    const x5 = $as_jl_Error(throwable);
    return new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Error", x5))
  } else {
    return new $c_s_util_Failure(throwable)
  }
});
class $c_s_concurrent_impl_Promise$ extends $c_O {
  scala$concurrent$impl$Promise$$resolveTry__s_util_Try__s_util_Try(source) {
    if ((source instanceof $c_s_util_Failure)) {
      const x2 = $as_s_util_Failure(source);
      const t = x2.s_util_Failure__f_exception;
      return $p_s_concurrent_impl_Promise$__resolver__jl_Throwable__s_util_Try(this, t)
    } else {
      return source
    }
  };
}
const $d_s_concurrent_impl_Promise$ = new $TypeData().initClass({
  s_concurrent_impl_Promise$: 0
}, false, "scala.concurrent.impl.Promise$", {
  s_concurrent_impl_Promise$: 1,
  O: 1
});
$c_s_concurrent_impl_Promise$.prototype.$classData = $d_s_concurrent_impl_Promise$;
let $n_s_concurrent_impl_Promise$ = (void 0);
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$()
  };
  return $n_s_concurrent_impl_Promise$
}
class $c_s_math_Ordered$ extends $c_O {
}
const $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
let $n_s_math_Ordered$ = (void 0);
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
class $c_s_package$ extends $c_O {
  constructor() {
    super();
    this.s_package$__f_BigDecimal = null;
    this.s_package$__f_BigInt = null;
    this.s_package$__f_AnyRef = null;
    this.s_package$__f_Traversable = null;
    this.s_package$__f_Iterable = null;
    this.s_package$__f_Seq = null;
    this.s_package$__f_IndexedSeq = null;
    this.s_package$__f_Iterator = null;
    this.s_package$__f_List = null;
    this.s_package$__f_Nil = null;
    this.s_package$__f_$colon$colon = null;
    this.s_package$__f_$plus$colon = null;
    this.s_package$__f_$colon$plus = null;
    this.s_package$__f_Stream = null;
    this.s_package$__f_$hash$colon$colon = null;
    this.s_package$__f_Vector = null;
    this.s_package$__f_StringBuilder = null;
    this.s_package$__f_Range = null;
    this.s_package$__f_Equiv = null;
    this.s_package$__f_Fractional = null;
    this.s_package$__f_Integral = null;
    this.s_package$__f_Numeric = null;
    this.s_package$__f_Ordered = null;
    this.s_package$__f_Ordering = null;
    this.s_package$__f_Either = null;
    this.s_package$__f_Left = null;
    this.s_package$__f_Right = null;
    this.s_package$__f_bitmap$0 = 0;
    $n_s_package$ = this;
    this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
    this.s_package$__f_Traversable = $m_sc_Traversable$();
    this.s_package$__f_Iterable = $m_sc_Iterable$();
    this.s_package$__f_Seq = $m_sc_Seq$();
    this.s_package$__f_IndexedSeq = $m_sc_IndexedSeq$();
    this.s_package$__f_Iterator = $m_sc_Iterator$();
    this.s_package$__f_List = $m_sci_List$();
    this.s_package$__f_Nil = $m_sci_Nil$();
    this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
    this.s_package$__f_$plus$colon = $m_sc_$plus$colon$();
    this.s_package$__f_$colon$plus = $m_sc_$colon$plus$();
    this.s_package$__f_Stream = $m_sci_Stream$();
    this.s_package$__f_$hash$colon$colon = $m_sci_Stream$$hash$colon$colon$();
    this.s_package$__f_Vector = $m_sci_Vector$();
    this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
    this.s_package$__f_Range = $m_sci_Range$();
    this.s_package$__f_Equiv = $m_s_math_Equiv$();
    this.s_package$__f_Fractional = $m_s_math_Fractional$();
    this.s_package$__f_Integral = $m_s_math_Integral$();
    this.s_package$__f_Numeric = $m_s_math_Numeric$();
    this.s_package$__f_Ordered = $m_s_math_Ordered$();
    this.s_package$__f_Ordering = $m_s_math_Ordering$();
    this.s_package$__f_Either = $m_s_util_Either$();
    this.s_package$__f_Left = $m_s_util_Left$();
    this.s_package$__f_Right = $m_s_util_Right$()
  };
}
const $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
let $n_s_package$ = (void 0);
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
class $c_s_reflect_ClassManifestFactory$ extends $c_O {
  constructor() {
    super();
    this.s_reflect_ClassManifestFactory$__f_Byte = null;
    this.s_reflect_ClassManifestFactory$__f_Short = null;
    this.s_reflect_ClassManifestFactory$__f_Char = null;
    this.s_reflect_ClassManifestFactory$__f_Int = null;
    this.s_reflect_ClassManifestFactory$__f_Long = null;
    this.s_reflect_ClassManifestFactory$__f_Float = null;
    this.s_reflect_ClassManifestFactory$__f_Double = null;
    this.s_reflect_ClassManifestFactory$__f_Boolean = null;
    this.s_reflect_ClassManifestFactory$__f_Unit = null;
    this.s_reflect_ClassManifestFactory$__f_Any = null;
    this.s_reflect_ClassManifestFactory$__f_Object = null;
    this.s_reflect_ClassManifestFactory$__f_AnyVal = null;
    this.s_reflect_ClassManifestFactory$__f_Nothing = null;
    this.s_reflect_ClassManifestFactory$__f_Null = null;
    $n_s_reflect_ClassManifestFactory$ = this;
    this.s_reflect_ClassManifestFactory$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
    this.s_reflect_ClassManifestFactory$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
    this.s_reflect_ClassManifestFactory$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
    this.s_reflect_ClassManifestFactory$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
    this.s_reflect_ClassManifestFactory$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
    this.s_reflect_ClassManifestFactory$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
    this.s_reflect_ClassManifestFactory$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
    this.s_reflect_ClassManifestFactory$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
    this.s_reflect_ClassManifestFactory$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
    this.s_reflect_ClassManifestFactory$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
    this.s_reflect_ClassManifestFactory$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
    this.s_reflect_ClassManifestFactory$__f_AnyVal = $m_s_reflect_ManifestFactory$AnyValManifest$();
    this.s_reflect_ClassManifestFactory$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
    this.s_reflect_ClassManifestFactory$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$()
  };
}
const $d_s_reflect_ClassManifestFactory$ = new $TypeData().initClass({
  s_reflect_ClassManifestFactory$: 0
}, false, "scala.reflect.ClassManifestFactory$", {
  s_reflect_ClassManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ClassManifestFactory$.prototype.$classData = $d_s_reflect_ClassManifestFactory$;
let $n_s_reflect_ClassManifestFactory$ = (void 0);
function $m_s_reflect_ClassManifestFactory$() {
  if ((!$n_s_reflect_ClassManifestFactory$)) {
    $n_s_reflect_ClassManifestFactory$ = new $c_s_reflect_ClassManifestFactory$()
  };
  return $n_s_reflect_ClassManifestFactory$
}
class $c_s_reflect_ManifestFactory$ extends $c_O {
}
const $d_s_reflect_ManifestFactory$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$: 0
}, false, "scala.reflect.ManifestFactory$", {
  s_reflect_ManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ManifestFactory$.prototype.$classData = $d_s_reflect_ManifestFactory$;
let $n_s_reflect_ManifestFactory$ = (void 0);
function $m_s_reflect_ManifestFactory$() {
  if ((!$n_s_reflect_ManifestFactory$)) {
    $n_s_reflect_ManifestFactory$ = new $c_s_reflect_ManifestFactory$()
  };
  return $n_s_reflect_ManifestFactory$
}
class $c_s_reflect_package$ extends $c_O {
  constructor() {
    super();
    this.s_reflect_package$__f_ClassManifest = null;
    this.s_reflect_package$__f_Manifest = null;
    $n_s_reflect_package$ = this;
    this.s_reflect_package$__f_ClassManifest = $m_s_reflect_ClassManifestFactory$();
    this.s_reflect_package$__f_Manifest = $m_s_reflect_ManifestFactory$()
  };
}
const $d_s_reflect_package$ = new $TypeData().initClass({
  s_reflect_package$: 0
}, false, "scala.reflect.package$", {
  s_reflect_package$: 1,
  O: 1
});
$c_s_reflect_package$.prototype.$classData = $d_s_reflect_package$;
let $n_s_reflect_package$ = (void 0);
function $m_s_reflect_package$() {
  if ((!$n_s_reflect_package$)) {
    $n_s_reflect_package$ = new $c_s_reflect_package$()
  };
  return $n_s_reflect_package$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.u.length
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.u.length
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.u.length
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.u.length
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.u.length
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return x7.u.length
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.u.length
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.u.length
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.u.length
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.u.length
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sjs_concurrent_JSExecutionContext$ extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_JSExecutionContext$__f_queue = null;
    $n_sjs_concurrent_JSExecutionContext$ = this;
    this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor()
  };
}
const $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_JSExecutionContext$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$", {
  sjs_concurrent_JSExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$;
let $n_sjs_concurrent_JSExecutionContext$ = (void 0);
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$()
  };
  return $n_sjs_concurrent_JSExecutionContext$
}
class $c_sjs_concurrent_QueueExecutionContext$ extends $c_O {
  apply__s_concurrent_ExecutionContextExecutor() {
    return (($as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext())
  };
}
const $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$", {
  sjs_concurrent_QueueExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_QueueExecutionContext$.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$;
let $n_sjs_concurrent_QueueExecutionContext$ = (void 0);
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$()
  };
  return $n_sjs_concurrent_QueueExecutionContext$
}
class $c_sjs_js_Thenable$ThenableOps$ extends $c_O {
  toFuture$extension__sjs_js_Thenable__s_concurrent_Future(this$) {
    const p2 = new $c_s_concurrent_impl_Promise$DefaultPromise();
    this$.then(((p2$1) => ((arg1$2) => $m_sjs_js_Thenable$ThenableOps$().scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$1__O__s_concurrent_Promise__sjs_js_$bar(arg1$2, p2$1)))(p2), $m_sjs_js_defined$().apply__O__sjs_js_$bar(((p2$1$1) => ((arg1$2$1) => $m_sjs_js_Thenable$ThenableOps$().scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$2__O__s_concurrent_Promise__sjs_js_$bar(arg1$2$1, p2$1$1)))(p2)));
    return p2
  };
  scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$1__O__s_concurrent_Promise__sjs_js_$bar(v, p2$1) {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2$1, v)
  };
  scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$2__O__s_concurrent_Promise__sjs_js_$bar(e, p2$1) {
    let cause;
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      cause = x2
    } else {
      cause = new $c_sjs_js_JavaScriptException(e)
    };
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2$1, cause)
  };
}
const $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().initClass({
  sjs_js_Thenable$ThenableOps$: 0
}, false, "scala.scalajs.js.Thenable$ThenableOps$", {
  sjs_js_Thenable$ThenableOps$: 1,
  O: 1
});
$c_sjs_js_Thenable$ThenableOps$.prototype.$classData = $d_sjs_js_Thenable$ThenableOps$;
let $n_sjs_js_Thenable$ThenableOps$ = (void 0);
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$()
  };
  return $n_sjs_js_Thenable$ThenableOps$
}
class $c_sjs_js_defined$ extends $c_O {
  apply__O__sjs_js_$bar(a) {
    return a
  };
}
const $d_sjs_js_defined$ = new $TypeData().initClass({
  sjs_js_defined$: 0
}, false, "scala.scalajs.js.defined$", {
  sjs_js_defined$: 1,
  O: 1
});
$c_sjs_js_defined$.prototype.$classData = $d_sjs_js_defined$;
let $n_sjs_js_defined$ = (void 0);
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$()
  };
  return $n_sjs_js_defined$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_sys_package$ extends $c_O {
  error__T__E(message) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), message))
  };
}
const $d_s_sys_package$ = new $TypeData().initClass({
  s_sys_package$: 0
}, false, "scala.sys.package$", {
  s_sys_package$: 1,
  O: 1
});
$c_s_sys_package$.prototype.$classData = $d_s_sys_package$;
let $n_s_sys_package$ = (void 0);
function $m_s_sys_package$() {
  if ((!$n_s_sys_package$)) {
    $n_s_sys_package$ = new $c_s_sys_package$()
  };
  return $n_s_sys_package$
}
class $c_s_util_control_Breaks extends $c_O {
  constructor() {
    super();
    this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = null;
    this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = new $c_s_util_control_BreakControl()
  };
}
const $d_s_util_control_Breaks = new $TypeData().initClass({
  s_util_control_Breaks: 0
}, false, "scala.util.control.Breaks", {
  s_util_control_Breaks: 1,
  O: 1
});
$c_s_util_control_Breaks.prototype.$classData = $d_s_util_control_Breaks;
const $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable = (function($thiz) {
  const this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz)
  } else {
    return $as_jl_Throwable($thiz)
  }
});
class $c_s_util_control_NonFatal$ extends $c_O {
  apply__jl_Throwable__Z(t) {
    return (!((t instanceof $c_jl_VirtualMachineError) || ((t instanceof $c_jl_ThreadDeath) || ((t instanceof $c_jl_InterruptedException) || ((t instanceof $c_jl_LinkageError) || $is_s_util_control_ControlThrowable(t))))))
  };
  unapply__jl_Throwable__s_Option(t) {
    return (this.apply__jl_Throwable__Z(t) ? new $c_s_Some(t) : $m_s_None$())
  };
}
const $d_s_util_control_NonFatal$ = new $TypeData().initClass({
  s_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", {
  s_util_control_NonFatal$: 1,
  O: 1
});
$c_s_util_control_NonFatal$.prototype.$classData = $d_s_util_control_NonFatal$;
let $n_s_util_control_NonFatal$ = (void 0);
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$()
  };
  return $n_s_util_control_NonFatal$
}
const $p_s_util_hashing_MurmurHash3__avalanche__I__I = (function($thiz, hash) {
  let h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
const $p_s_util_hashing_MurmurHash3__hasher$lzycompute$1__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$ = (function($thiz, hasher$module$1) {
  if ((hasher$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (hasher$module$1.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.sr_LazyRef__f__value) : $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.initialize__O__O(new $c_s_util_hashing_MurmurHash3$hasher$1$($thiz))))
});
const $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$ = (function($thiz, hasher$module$1) {
  return (hasher$module$1.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$1$(hasher$module$1.sr_LazyRef__f__value) : $p_s_util_hashing_MurmurHash3__hasher$lzycompute$1__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$($thiz, hasher$module$1))
});
const $p_s_util_hashing_MurmurHash3__hasher$lzycompute$2__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$ = (function($thiz, hasher$module$2, seed$1) {
  if ((hasher$module$2 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (hasher$module$2.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.sr_LazyRef__f__value) : $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.initialize__O__O(new $c_s_util_hashing_MurmurHash3$hasher$3$($thiz, seed$1))))
});
const $p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$ = (function($thiz, hasher$module$2, seed$1) {
  return (hasher$module$2.sr_LazyRef__f__initialized ? $as_s_util_hashing_MurmurHash3$hasher$3$(hasher$module$2.sr_LazyRef__f__value) : $p_s_util_hashing_MurmurHash3__hasher$lzycompute$2__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$($thiz, hasher$module$2, seed$1))
});
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
  };
  product2Hash__O__O__I__I(x, y, seed) {
    let h = seed;
    h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x));
    h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(y));
    return this.finalizeHash__I__I__I(h, 2)
  };
  productHash__s_Product__I__I(x, seed) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_TraversableOnce__I__I(xs, seed) {
    if (xs.isEmpty__Z()) {
      let h = seed;
      h = this.mix__I__I__I(h, 0);
      h = this.mix__I__I__I(h, 0);
      h = this.mixLast__I__I__I(h, 1);
      return this.finalizeHash__I__I__I(h, 0)
    } else {
      const hasher$module = new $c_sr_LazyRef();
      xs.foreach__F1__V($p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module));
      let h$2 = seed;
      h$2 = this.mix__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_a);
      h$2 = this.mix__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_b);
      h$2 = this.mixLast__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_c);
      return this.finalizeHash__I__I__I(h$2, $p_s_util_hashing_MurmurHash3__hasher$2__sr_LazyRef__s_util_hashing_MurmurHash3$hasher$1$(this, hasher$module).s_util_hashing_MurmurHash3$hasher$1$__f_n)
    }
  };
  orderedHash__sc_TraversableOnce__I__I(xs, seed) {
    if (xs.isEmpty__Z()) {
      return this.finalizeHash__I__I__I(seed, 0)
    } else {
      const hasher$module = new $c_sr_LazyRef();
      xs.foreach__F1__V($p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed));
      return this.finalizeHash__I__I__I($p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed).s_util_hashing_MurmurHash3$hasher$3$__f_h, $p_s_util_hashing_MurmurHash3__hasher$4__sr_LazyRef__I__s_util_hashing_MurmurHash3$hasher$3$(this, hasher$module, seed).s_util_hashing_MurmurHash3$hasher$3$__f_n)
    }
  };
  arrayHash__O__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < $m_sr_ScalaRunTime$().array_length__O__I(a))) {
      const $$x1 = h;
      const x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, $m_sr_ScalaRunTime$().array_length__O__I(a))
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const this$1 = elems;
      const tail = this$1.tail__sci_List();
      h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(head));
      n = ((1 + n) | 0);
      elems = tail
    };
    return this.finalizeHash__I__I__I(h, n)
  };
  arrayHash$mZc$sp__AZ__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, (a.get(i) ? 1231 : 1237));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mBc$sp__AB__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, a.get(i));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mCc$sp__AC__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, a.get(i));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mDc$sp__AD__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      const $$x1 = h;
      const dv = a.get(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().doubleHash__D__I(dv));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mFc$sp__AF__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      const $$x1 = h;
      const fv = a.get(i);
      const this$1 = $m_sr_Statics$();
      h = this.mix__I__I__I($$x1, this$1.doubleHash__D__I(fv));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mIc$sp__AI__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, a.get(i));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mJc$sp__AJ__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      const $$x1 = h;
      const t = a.get(i);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi)));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mSc$sp__AS__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, a.get(i));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
  arrayHash$mVc$sp__Ajl_Void__I__I(a, seed) {
    let h = seed;
    let i = 0;
    while ((i < a.u.length)) {
      h = this.mix__I__I__I(h, 0);
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, a.u.length)
  };
}
class $c_s_util_hashing_package$ extends $c_O {
  byteswap32__I__I(v) {
    let hc = $imul((-1640532531), v);
    const i = hc;
    hc = $m_jl_Integer$().reverseBytes__I__I(i);
    return $imul((-1640532531), hc)
  };
}
const $d_s_util_hashing_package$ = new $TypeData().initClass({
  s_util_hashing_package$: 0
}, false, "scala.util.hashing.package$", {
  s_util_hashing_package$: 1,
  O: 1
});
$c_s_util_hashing_package$.prototype.$classData = $d_s_util_hashing_package$;
let $n_s_util_hashing_package$ = (void 0);
function $m_s_util_hashing_package$() {
  if ((!$n_s_util_hashing_package$)) {
    $n_s_util_hashing_package$ = new $c_s_util_hashing_package$()
  };
  return $n_s_util_hashing_package$
}
class $c_jl_Double$ extends $c_O {
  constructor() {
    super();
    this.jl_Double$__f_doubleStrPat = null;
    this.jl_Double$__f_doubleStrHexPat = null;
    this.jl_Double$__f_bitmap$0 = 0
  };
  compare__D__D__I(a, b) {
    if ((a !== a)) {
      return ((b !== b) ? 0 : 1)
    } else if ((b !== b)) {
      return (-1)
    } else if ((a === b)) {
      if ((a === 0.0)) {
        const ainf = (1.0 / a);
        return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1))
      } else {
        return 0
      }
    } else {
      return ((a < b) ? (-1) : 1)
    }
  };
}
const $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
let $n_jl_Double$ = (void 0);
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$()
  };
  return $n_jl_Double$
}
class $c_jl_Integer$ extends $c_O {
  bitCount__I__I(i) {
    const t1 = ((i - (1431655765 & (i >> 1))) | 0);
    const t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
    return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
  };
  reverseBytes__I__I(i) {
    const byte3 = ((i >>> 24) | 0);
    const byte2 = (65280 & ((i >>> 8) | 0));
    const byte1 = (16711680 & (i << 8));
    const byte0 = (i << 24);
    return (((byte0 | byte1) | byte2) | byte3)
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
class $c_jl_StackTraceElement extends $c_O {
  constructor(declaringClass, methodName, fileName, lineNumber) {
    super();
    this.jl_StackTraceElement__f_declaringClass = null;
    this.jl_StackTraceElement__f_methodName = null;
    this.jl_StackTraceElement__f_fileName = null;
    this.jl_StackTraceElement__f_lineNumber = 0;
    this.jl_StackTraceElement__f_columnNumber = 0;
    this.jl_StackTraceElement__f_declaringClass = declaringClass;
    this.jl_StackTraceElement__f_methodName = methodName;
    this.jl_StackTraceElement__f_fileName = fileName;
    this.jl_StackTraceElement__f_lineNumber = lineNumber;
    this.jl_StackTraceElement__f_columnNumber = (-1)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_jl_StackTraceElement)) {
      const x2 = $as_jl_StackTraceElement(that);
      return ((((this.jl_StackTraceElement__f_fileName === x2.jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === x2.jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_declaringClass === x2.jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === x2.jl_StackTraceElement__f_methodName))
    } else {
      return false
    }
  };
  toString__T() {
    let result = "";
    if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
      result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".")
    };
    result = (("" + result) + this.jl_StackTraceElement__f_methodName);
    if ((this.jl_StackTraceElement__f_fileName === null)) {
      result = (result + "(Unknown Source)")
    } else {
      result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
      if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
        if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
          result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber)
        }
      };
      result = (result + ")")
    };
    return result
  };
  hashCode__I() {
    return ($f_T__hashCode__I(this.jl_StackTraceElement__f_declaringClass) ^ $f_T__hashCode__I(this.jl_StackTraceElement__f_methodName))
  };
}
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"))
}
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)))
}
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth))
}
const $d_jl_StackTraceElement = new $TypeData().initClass({
  jl_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", {
  jl_StackTraceElement: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackTraceElement.prototype.$classData = $d_jl_StackTraceElement;
class $c_jl_Thread extends $c_O {
  constructor(dummy) {
    super();
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = null;
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = "main"
  };
  run__V() {
    /*<skip>*/
  };
}
const $d_jl_Thread = new $TypeData().initClass({
  jl_Thread: 0
}, false, "java.lang.Thread", {
  jl_Thread: 1,
  O: 1,
  jl_Runnable: 1
});
$c_jl_Thread.prototype.$classData = $d_jl_Thread;
const $p_jl_Throwable__printStackTraceImpl__O__V = (function($thiz, sprintln) {
  $thiz.getStackTrace__Ajl_StackTraceElement();
  sprintln($thiz.toString__T());
  if (($thiz.jl_Throwable__f_stackTrace.u.length !== 0)) {
    let i = 0;
    while ((i < $thiz.jl_Throwable__f_stackTrace.u.length)) {
      sprintln(("  at " + $thiz.jl_Throwable__f_stackTrace.get(i)));
      i = ((1 + i) | 0)
    }
  } else {
    sprintln("  <no stack trace available>")
  };
  let wCause = $thiz;
  while (true) {
    const $$x3 = wCause;
    const this$1 = wCause;
    let $$x2;
    if (($$x3 !== this$1.jl_Throwable__f_e)) {
      const this$2 = wCause;
      $$x2 = (this$2.jl_Throwable__f_e !== null)
    } else {
      $$x2 = false
    };
    if ($$x2) {
      const parentTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const this$3 = wCause;
      wCause = this$3.jl_Throwable__f_e;
      const thisTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const thisLength = thisTrace.u.length;
      const parentLength = parentTrace.u.length;
      sprintln(("Caused by: " + wCause.toString__T()));
      if ((thisLength !== 0)) {
        let sameFrameCount = 0;
        while (true) {
          let $$x1;
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            const x = thisTrace.get((((-1) + ((thisLength - sameFrameCount) | 0)) | 0));
            const x$2 = parentTrace.get((((-1) + ((parentLength - sameFrameCount) | 0)) | 0));
            $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
          } else {
            $$x1 = false
          };
          if ($$x1) {
            sameFrameCount = ((1 + sameFrameCount) | 0)
          } else {
            break
          }
        };
        if ((sameFrameCount > 0)) {
          sameFrameCount = (((-1) + sameFrameCount) | 0)
        };
        const lengthToPrint = ((thisLength - sameFrameCount) | 0);
        let i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          sprintln(("  at " + thisTrace.get(i$2)));
          i$2 = ((1 + i$2) | 0)
        };
        if ((sameFrameCount > 0)) {
          sprintln((("  ... " + sameFrameCount) + " more"))
        }
      } else {
        sprintln("  <no stack trace available>")
      }
    } else {
      break
    }
  }
});
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      const e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        const this$1 = $m_jl_StackTrace$();
        this.jl_Throwable__f_stackTrace = $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement(this$1, this.jl_Throwable__f_stackTraceStateInternal)
      } else {
        this.jl_Throwable__f_stackTrace = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [0])
      }
    };
    return this.jl_Throwable__f_stackTrace
  };
  printStackTrace__Ljava_io_PrintStream__V(s) {
    $p_jl_Throwable__printStackTraceImpl__O__V(this, ((arg$outer, s$1) => ((arg1$2) => {
      const arg1 = $as_T(arg1$2);
      s$1.println__T__V(arg1)
    }))(this, s))
  };
  toString__T() {
    const className = $objectClassName(this);
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
class $c_Ljsmain_DataViewCache extends $c_O {
  constructor(dataView) {
    super();
    this.Ljsmain_DataViewCache__f_dataView = null;
    this.Ljsmain_DataViewCache__f_dataView = dataView
  };
  get__I__F(idx) {
    return $uF(this.Ljsmain_DataViewCache__f_dataView.getFloat32((idx << 2)))
  };
}
function $as_Ljsmain_DataViewCache(obj) {
  return (((obj instanceof $c_Ljsmain_DataViewCache) || (obj === null)) ? obj : $throwClassCastException(obj, "jsmain.DataViewCache"))
}
function $isArrayOf_Ljsmain_DataViewCache(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljsmain_DataViewCache)))
}
function $asArrayOf_Ljsmain_DataViewCache(obj, depth) {
  return (($isArrayOf_Ljsmain_DataViewCache(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljsmain.DataViewCache;", depth))
}
const $d_Ljsmain_DataViewCache = new $TypeData().initClass({
  Ljsmain_DataViewCache: 0
}, false, "jsmain.DataViewCache", {
  Ljsmain_DataViewCache: 1,
  O: 1,
  Lmain_StateCache: 1
});
$c_Ljsmain_DataViewCache.prototype.$classData = $d_Ljsmain_DataViewCache;
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_Predef$$anon$1 extends $c_O {
  apply__O__scm_Builder(from) {
    $as_T(from);
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
  };
}
const $d_s_Predef$$anon$1 = new $TypeData().initClass({
  s_Predef$$anon$1: 0
}, false, "scala.Predef$$anon$1", {
  s_Predef$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_s_Predef$$anon$1.prototype.$classData = $d_s_Predef$$anon$1;
const $p_sc_TraversableOnce__counter$lzycompute$1__sr_LazyRef__sc_TraversableOnce$counter$1$ = (function($thiz, counter$module$1) {
  if ((counter$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (counter$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$counter$1$(counter$module$1.sr_LazyRef__f__value) : $as_sc_TraversableOnce$counter$1$(counter$module$1.initialize__O__O(new $c_sc_TraversableOnce$counter$1$($thiz))))
});
const $p_sc_TraversableOnce__counter$2__sr_LazyRef__sc_TraversableOnce$counter$1$ = (function($thiz, counter$module$1) {
  return (counter$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$counter$1$(counter$module$1.sr_LazyRef__f__value) : $p_sc_TraversableOnce__counter$lzycompute$1__sr_LazyRef__sc_TraversableOnce$counter$1$($thiz, counter$module$1))
});
const $p_sc_TraversableOnce__folder$lzycompute$1__sr_LazyRef__O__F2__sc_TraversableOnce$folder$1$ = (function($thiz, folder$module$1, z$1, op$1) {
  if ((folder$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (folder$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$folder$1$(folder$module$1.sr_LazyRef__f__value) : $as_sc_TraversableOnce$folder$1$(folder$module$1.initialize__O__O(new $c_sc_TraversableOnce$folder$1$($thiz, z$1, op$1))))
});
const $p_sc_TraversableOnce__folder$2__sr_LazyRef__O__F2__sc_TraversableOnce$folder$1$ = (function($thiz, folder$module$1, z$1, op$1) {
  return (folder$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$folder$1$(folder$module$1.sr_LazyRef__f__value) : $p_sc_TraversableOnce__folder$lzycompute$1__sr_LazyRef__O__F2__sc_TraversableOnce$folder$1$($thiz, folder$module$1, z$1, op$1))
});
const $p_sc_TraversableOnce__maxer$lzycompute$1__sr_LazyRef__F1__s_math_Ordering__sc_TraversableOnce$maxer$1$ = (function($thiz, maxer$module$1, f$1, cmp$3) {
  if ((maxer$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (maxer$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$maxer$1$(maxer$module$1.sr_LazyRef__f__value) : $as_sc_TraversableOnce$maxer$1$(maxer$module$1.initialize__O__O(new $c_sc_TraversableOnce$maxer$1$($thiz, f$1, cmp$3))))
});
const $p_sc_TraversableOnce__maxer$2__sr_LazyRef__F1__s_math_Ordering__sc_TraversableOnce$maxer$1$ = (function($thiz, maxer$module$1, f$1, cmp$3) {
  return (maxer$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$maxer$1$(maxer$module$1.sr_LazyRef__f__value) : $p_sc_TraversableOnce__maxer$lzycompute$1__sr_LazyRef__F1__s_math_Ordering__sc_TraversableOnce$maxer$1$($thiz, maxer$module$1, f$1, cmp$3))
});
const $p_sc_TraversableOnce__appender$lzycompute$1__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$ = (function($thiz, appender$module$1, b$2, sep$1) {
  if ((appender$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (appender$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$appender$1$(appender$module$1.sr_LazyRef__f__value) : $as_sc_TraversableOnce$appender$1$(appender$module$1.initialize__O__O(new $c_sc_TraversableOnce$appender$1$($thiz, b$2, sep$1))))
});
const $p_sc_TraversableOnce__appender$2__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$ = (function($thiz, appender$module$1, b$2, sep$1) {
  return (appender$module$1.sr_LazyRef__f__initialized ? $as_sc_TraversableOnce$appender$1$(appender$module$1.sr_LazyRef__f__value) : $p_sc_TraversableOnce__appender$lzycompute$1__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$($thiz, appender$module$1, b$2, sep$1))
});
const $f_sc_TraversableOnce__size__I = (function($thiz) {
  const counter$module = new $c_sr_LazyRef();
  $thiz.foreach__F1__V($p_sc_TraversableOnce__counter$2__sr_LazyRef__sc_TraversableOnce$counter$1$($thiz, counter$module));
  return $p_sc_TraversableOnce__counter$2__sr_LazyRef__sc_TraversableOnce$counter$1$($thiz, counter$module).sc_TraversableOnce$counter$1$__f_result
});
const $f_sc_TraversableOnce__foldLeft__O__F2__O = (function($thiz, z, op) {
  const folder$module = new $c_sr_LazyRef();
  $thiz.foreach__F1__V($p_sc_TraversableOnce__folder$2__sr_LazyRef__O__F2__sc_TraversableOnce$folder$1$($thiz, folder$module, z, op));
  return $p_sc_TraversableOnce__folder$2__sr_LazyRef__O__F2__sc_TraversableOnce$folder$1$($thiz, folder$module, z, op).sc_TraversableOnce$folder$1$__f_result
});
const $f_sc_TraversableOnce__sum__s_math_Numeric__O = (function($thiz, num) {
  return $thiz.foldLeft__O__F2__O(num.fromInt__I__O(0), new $c_sjsr_AnonFunction2(((this$1, num$1) => ((x$2, y$2) => num$1.plus__O__O__O(x$2, y$2)))($thiz, num)))
});
const $f_sc_TraversableOnce__maxBy__F1__s_math_Ordering__O = (function($thiz, f, cmp) {
  const maxer$module = new $c_sr_LazyRef();
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.maxBy")
  };
  $thiz.foreach__F1__V($p_sc_TraversableOnce__maxer$2__sr_LazyRef__F1__s_math_Ordering__sc_TraversableOnce$maxer$1$($thiz, maxer$module, f, cmp));
  return $p_sc_TraversableOnce__maxer$2__sr_LazyRef__F1__s_math_Ordering__sc_TraversableOnce$maxer$1$($thiz, maxer$module, f, cmp).sc_TraversableOnce$maxer$1$__f_maxElem
});
const $f_sc_TraversableOnce__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
const $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const appender$module = new $c_sr_LazyRef();
  b.append__T__scm_StringBuilder(start);
  $thiz.foreach__F1__V($p_sc_TraversableOnce__appender$2__sr_LazyRef__scm_StringBuilder__T__sc_TraversableOnce$appender$1$($thiz, appender$module, b, sep));
  b.append__T__scm_StringBuilder(end);
  return b
});
function $is_sc_TraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableOnce)))
}
function $as_sc_TraversableOnce(obj) {
  return (($is_sc_TraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce"))
}
function $isArrayOf_sc_TraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce)))
}
function $asArrayOf_sc_TraversableOnce(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth))
}
class $c_sc_TraversableOnce$appender$1$ extends $c_O {
  constructor(outer, b$2, sep$1) {
    super();
    this.sc_TraversableOnce$appender$1$__f_first = false;
    this.sc_TraversableOnce$appender$1$__f_b$2 = null;
    this.sc_TraversableOnce$appender$1$__f_sep$1 = null;
    this.sc_TraversableOnce$appender$1$__f_b$2 = b$2;
    this.sc_TraversableOnce$appender$1$__f_sep$1 = sep$1;
    this.sc_TraversableOnce$appender$1$__f_first = true
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    if (this.sc_TraversableOnce$appender$1$__f_first) {
      this.sc_TraversableOnce$appender$1$__f_b$2.append__O__scm_StringBuilder(x);
      this.sc_TraversableOnce$appender$1$__f_first = false
    } else {
      this.sc_TraversableOnce$appender$1$__f_b$2.append__T__scm_StringBuilder(this.sc_TraversableOnce$appender$1$__f_sep$1);
      this.sc_TraversableOnce$appender$1$__f_b$2.append__O__scm_StringBuilder(x)
    }
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sc_TraversableOnce$appender$1$(obj) {
  return (((obj instanceof $c_sc_TraversableOnce$appender$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce$appender$1$"))
}
function $isArrayOf_sc_TraversableOnce$appender$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce$appender$1$)))
}
function $asArrayOf_sc_TraversableOnce$appender$1$(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce$appender$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce$appender$1$;", depth))
}
const $d_sc_TraversableOnce$appender$1$ = new $TypeData().initClass({
  sc_TraversableOnce$appender$1$: 0
}, false, "scala.collection.TraversableOnce$appender$1$", {
  sc_TraversableOnce$appender$1$: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$appender$1$.prototype.$classData = $d_sc_TraversableOnce$appender$1$;
class $c_sc_TraversableOnce$counter$1$ extends $c_O {
  constructor(outer) {
    super();
    this.sc_TraversableOnce$counter$1$__f_result = 0;
    this.sc_TraversableOnce$counter$1$__f_result = 0
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(v1) {
    this.sc_TraversableOnce$counter$1$__f_result = ((1 + this.sc_TraversableOnce$counter$1$__f_result) | 0)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sc_TraversableOnce$counter$1$(obj) {
  return (((obj instanceof $c_sc_TraversableOnce$counter$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce$counter$1$"))
}
function $isArrayOf_sc_TraversableOnce$counter$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce$counter$1$)))
}
function $asArrayOf_sc_TraversableOnce$counter$1$(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce$counter$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce$counter$1$;", depth))
}
const $d_sc_TraversableOnce$counter$1$ = new $TypeData().initClass({
  sc_TraversableOnce$counter$1$: 0
}, false, "scala.collection.TraversableOnce$counter$1$", {
  sc_TraversableOnce$counter$1$: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$counter$1$.prototype.$classData = $d_sc_TraversableOnce$counter$1$;
class $c_sc_TraversableOnce$folder$1$ extends $c_O {
  constructor(outer, z$1, op$1) {
    super();
    this.sc_TraversableOnce$folder$1$__f_result = null;
    this.sc_TraversableOnce$folder$1$__f_op$1 = null;
    this.sc_TraversableOnce$folder$1$__f_op$1 = op$1;
    this.sc_TraversableOnce$folder$1$__f_result = z$1
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(v1) {
    this.sc_TraversableOnce$folder$1$__f_result = this.sc_TraversableOnce$folder$1$__f_op$1.apply__O__O__O(this.sc_TraversableOnce$folder$1$__f_result, v1)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sc_TraversableOnce$folder$1$(obj) {
  return (((obj instanceof $c_sc_TraversableOnce$folder$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce$folder$1$"))
}
function $isArrayOf_sc_TraversableOnce$folder$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce$folder$1$)))
}
function $asArrayOf_sc_TraversableOnce$folder$1$(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce$folder$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce$folder$1$;", depth))
}
const $d_sc_TraversableOnce$folder$1$ = new $TypeData().initClass({
  sc_TraversableOnce$folder$1$: 0
}, false, "scala.collection.TraversableOnce$folder$1$", {
  sc_TraversableOnce$folder$1$: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$folder$1$.prototype.$classData = $d_sc_TraversableOnce$folder$1$;
class $c_sc_TraversableOnce$maxer$1$ extends $c_O {
  constructor(outer, f$1, cmp$3) {
    super();
    this.sc_TraversableOnce$maxer$1$__f_maxF = null;
    this.sc_TraversableOnce$maxer$1$__f_maxElem = null;
    this.sc_TraversableOnce$maxer$1$__f_first = false;
    this.sc_TraversableOnce$maxer$1$__f_f$1 = null;
    this.sc_TraversableOnce$maxer$1$__f_cmp$3 = null;
    this.sc_TraversableOnce$maxer$1$__f_f$1 = f$1;
    this.sc_TraversableOnce$maxer$1$__f_cmp$3 = cmp$3;
    this.sc_TraversableOnce$maxer$1$__f_maxF = null;
    this.sc_TraversableOnce$maxer$1$__f_maxElem = null;
    this.sc_TraversableOnce$maxer$1$__f_first = true
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(elem) {
    const fx = this.sc_TraversableOnce$maxer$1$__f_f$1.apply__O__O(elem);
    if ((this.sc_TraversableOnce$maxer$1$__f_first || this.sc_TraversableOnce$maxer$1$__f_cmp$3.gt__O__O__Z(fx, this.sc_TraversableOnce$maxer$1$__f_maxF))) {
      this.sc_TraversableOnce$maxer$1$__f_maxElem = elem;
      this.sc_TraversableOnce$maxer$1$__f_maxF = fx;
      this.sc_TraversableOnce$maxer$1$__f_first = false
    }
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sc_TraversableOnce$maxer$1$(obj) {
  return (((obj instanceof $c_sc_TraversableOnce$maxer$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce$maxer$1$"))
}
function $isArrayOf_sc_TraversableOnce$maxer$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce$maxer$1$)))
}
function $asArrayOf_sc_TraversableOnce$maxer$1$(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce$maxer$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce$maxer$1$;", depth))
}
const $d_sc_TraversableOnce$maxer$1$ = new $TypeData().initClass({
  sc_TraversableOnce$maxer$1$: 0
}, false, "scala.collection.TraversableOnce$maxer$1$", {
  sc_TraversableOnce$maxer$1$: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$maxer$1$.prototype.$classData = $d_sc_TraversableOnce$maxer$1$;
class $c_scg_GenMapFactory$MapCanBuildFrom extends $c_O {
  constructor(outer) {
    super();
    this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = outer
    }
  };
  apply__O__scm_Builder(from) {
    $as_sc_GenMap(from);
    return this.scg_GenMapFactory$MapCanBuildFrom__f_$outer.newBuilder__scm_Builder()
  };
}
const $d_scg_GenMapFactory$MapCanBuildFrom = new $TypeData().initClass({
  scg_GenMapFactory$MapCanBuildFrom: 0
}, false, "scala.collection.generic.GenMapFactory$MapCanBuildFrom", {
  scg_GenMapFactory$MapCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.$classData = $d_scg_GenMapFactory$MapCanBuildFrom;
class $c_scg_GenSetFactory extends $c_scg_GenericCompanion {
}
class $c_scg_GenSetFactory$$anon$1 extends $c_O {
  constructor(outer) {
    super();
    this.scg_GenSetFactory$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scg_GenSetFactory$$anon$1__f_$outer = outer
    }
  };
  apply__sc_GenSet__scm_Builder(from) {
    return ($is_sc_Set(from) ? from.companion__scg_GenericCompanion().newBuilder__scm_Builder() : this.scg_GenSetFactory$$anon$1__f_$outer.newBuilder__scm_Builder())
  };
  apply__O__scm_Builder(from) {
    return this.apply__sc_GenSet__scm_Builder($as_sc_GenSet(from))
  };
}
const $d_scg_GenSetFactory$$anon$1 = new $TypeData().initClass({
  scg_GenSetFactory$$anon$1: 0
}, false, "scala.collection.generic.GenSetFactory$$anon$1", {
  scg_GenSetFactory$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenSetFactory$$anon$1.prototype.$classData = $d_scg_GenSetFactory$$anon$1;
const $ct_scg_GenTraversableFactory__ = (function($thiz) {
  $thiz.scg_GenTraversableFactory__f_ReusableCBFInstance = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
});
class $c_scg_GenTraversableFactory extends $c_scg_GenericCompanion {
  constructor() {
    super();
    this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
  };
}
const $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = outer
  };
  return $thiz
});
class $c_scg_GenTraversableFactory$GenericCanBuildFrom extends $c_O {
  constructor() {
    super();
    this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null
  };
  apply__O__scm_Builder(from) {
    const from$1 = $as_sc_GenTraversable(from);
    return from$1.companion__scg_GenericCompanion().newBuilder__scm_Builder()
  };
}
const $p_scg_Growable__loop$1__sc_LinearSeq__V = (function($thiz, xs) {
  while (true) {
    const this$1 = xs;
    if ((!this$1.isEmpty__Z())) {
      $thiz.$plus$eq__O__scg_Growable(xs.head__O());
      xs = $as_sc_LinearSeq(xs.tail__O());
      continue
    };
    break
  }
});
const $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function($thiz, xs) {
  if ($is_sc_LinearSeq(xs)) {
    const x2 = $as_sc_LinearSeq(xs);
    $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, x2)
  } else {
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1) => ((elem$2) => this$1.$plus$eq__O__scg_Growable(elem$2)))($thiz)))
  };
  return $thiz
});
class $c_scg_MapFactory extends $c_scg_GenMapFactory {
}
class $c_sci_HashMap$$anon$1 extends $c_sci_HashMap$Merger {
  constructor() {
    super();
    this.sci_HashMap$$anon$1__f_invert = null;
    this.sci_HashMap$$anon$1__f_invert = new $c_sci_HashMap$$anon$1$$anon$2(this)
  };
  apply__T2__T2__T2(a, b) {
    return a
  };
  retainIdentical__Z() {
    return true
  };
  invert__sci_HashMap$Merger() {
    return this.sci_HashMap$$anon$1__f_invert
  };
}
const $d_sci_HashMap$$anon$1 = new $TypeData().initClass({
  sci_HashMap$$anon$1: 0
}, false, "scala.collection.immutable.HashMap$$anon$1", {
  sci_HashMap$$anon$1: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1.prototype.$classData = $d_sci_HashMap$$anon$1;
class $c_sci_HashMap$$anon$1$$anon$2 extends $c_sci_HashMap$Merger {
  constructor(outer) {
    super()
  };
  apply__T2__T2__T2(a, b) {
    return b
  };
  retainIdentical__Z() {
    return true
  };
  invert__sci_HashMap$Merger() {
    return $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger
  };
}
const $d_sci_HashMap$$anon$1$$anon$2 = new $TypeData().initClass({
  sci_HashMap$$anon$1$$anon$2: 0
}, false, "scala.collection.immutable.HashMap$$anon$1$$anon$2", {
  sci_HashMap$$anon$1$$anon$2: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.$classData = $d_sci_HashMap$$anon$1$$anon$2;
class $c_sci_HashMap$$anon$3 extends $c_sci_HashMap$Merger {
  constructor(mergef$1) {
    super();
    this.sci_HashMap$$anon$3__f_invert = null;
    this.sci_HashMap$$anon$3__f_mergef$1 = null;
    this.sci_HashMap$$anon$3__f_mergef$1 = mergef$1;
    this.sci_HashMap$$anon$3__f_invert = new $c_sci_HashMap$$anon$3$$anon$4(this)
  };
  apply__T2__T2__T2(kv1, kv2) {
    return $as_T2(this.sci_HashMap$$anon$3__f_mergef$1.apply__O__O__O(kv1, kv2))
  };
  invert__sci_HashMap$Merger() {
    return this.sci_HashMap$$anon$3__f_invert
  };
}
const $d_sci_HashMap$$anon$3 = new $TypeData().initClass({
  sci_HashMap$$anon$3: 0
}, false, "scala.collection.immutable.HashMap$$anon$3", {
  sci_HashMap$$anon$3: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3.prototype.$classData = $d_sci_HashMap$$anon$3;
class $c_sci_HashMap$$anon$3$$anon$4 extends $c_sci_HashMap$Merger {
  constructor(outer) {
    super();
    this.sci_HashMap$$anon$3$$anon$4__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_HashMap$$anon$3$$anon$4__f_$outer = outer
    }
  };
  apply__T2__T2__T2(kv1, kv2) {
    return $as_T2(this.sci_HashMap$$anon$3$$anon$4__f_$outer.sci_HashMap$$anon$3__f_mergef$1.apply__O__O__O(kv2, kv1))
  };
  invert__sci_HashMap$Merger() {
    return this.sci_HashMap$$anon$3$$anon$4__f_$outer
  };
}
const $d_sci_HashMap$$anon$3$$anon$4 = new $TypeData().initClass({
  sci_HashMap$$anon$3$$anon$4: 0
}, false, "scala.collection.immutable.HashMap$$anon$3$$anon$4", {
  sci_HashMap$$anon$3$$anon$4: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.$classData = $d_sci_HashMap$$anon$3$$anon$4;
class $c_sci_HashSet$acc$1$ extends $c_O {
  constructor(outer) {
    super();
    this.sci_HashSet$acc$1$__f_res = null;
    this.sci_HashSet$acc$1$__f_res = outer
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(v1) {
    this.sci_HashSet$acc$1$__f_res = this.sci_HashSet$acc$1$__f_res.$plus__O__sci_HashSet(v1)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_sci_HashSet$acc$1$(obj) {
  return (((obj instanceof $c_sci_HashSet$acc$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$acc$1$"))
}
function $isArrayOf_sci_HashSet$acc$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$acc$1$)))
}
function $asArrayOf_sci_HashSet$acc$1$(obj, depth) {
  return (($isArrayOf_sci_HashSet$acc$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$acc$1$;", depth))
}
const $d_sci_HashSet$acc$1$ = new $TypeData().initClass({
  sci_HashSet$acc$1$: 0
}, false, "scala.collection.immutable.HashSet$acc$1$", {
  sci_HashSet$acc$1$: 1,
  O: 1,
  F1: 1
});
$c_sci_HashSet$acc$1$.prototype.$classData = $d_sci_HashSet$acc$1$;
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
const $p_scm_HashTable__findEntry0__O__I__scm_HashEntry = (function($thiz, key, h) {
  let e = $thiz.scm_HashMap__f_table.get(h);
  while (true) {
    let $$x1;
    if ((e !== null)) {
      const key1 = e.scm_DefaultEntry__f_key;
      $$x1 = (!$m_sr_BoxesRunTime$().equals__O__O__Z(key1, key))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      const this$1 = e;
      e = this$1.scm_DefaultEntry__f_next
    } else {
      break
    }
  };
  return e
});
const $p_scm_HashTable__addEntry0__scm_HashEntry__I__V = (function($thiz, e, h) {
  const x$1 = $thiz.scm_HashMap__f_table.get(h);
  e.scm_DefaultEntry__f_next = $as_scm_DefaultEntry(x$1);
  $thiz.scm_HashMap__f_table.set(h, e);
  $thiz.scm_HashMap__f_tableSize = ((1 + $thiz.scm_HashMap__f_tableSize) | 0);
  $f_scm_HashTable__nnSizeMapAdd__I__V($thiz, h);
  if (($thiz.scm_HashMap__f_tableSize > $thiz.scm_HashMap__f_threshold)) {
    $p_scm_HashTable__resize__I__V($thiz, ($thiz.scm_HashMap__f_table.u.length << 1))
  }
});
const $p_scm_HashTable__resize__I__V = (function($thiz, newSize) {
  const oldTable = $thiz.scm_HashMap__f_table;
  $thiz.scm_HashMap__f_table = $newArrayObject($d_scm_HashEntry.getArrayOf(), [newSize]);
  const tableLength = $thiz.scm_HashMap__f_table.u.length;
  $f_scm_HashTable__nnSizeMapReset__I__V($thiz, tableLength);
  let i = (((-1) + oldTable.u.length) | 0);
  while ((i >= 0)) {
    let e = oldTable.get(i);
    while ((e !== null)) {
      const key = e.scm_DefaultEntry__f_key;
      const hcode = $m_sr_Statics$().anyHash__O__I(key);
      const h = $f_scm_HashTable__index__I__I($thiz, hcode);
      const this$1 = e;
      const e1 = this$1.scm_DefaultEntry__f_next;
      const this$2 = e;
      const x$1 = $thiz.scm_HashMap__f_table.get(h);
      this$2.scm_DefaultEntry__f_next = $as_scm_DefaultEntry(x$1);
      $thiz.scm_HashMap__f_table.set(h, e);
      e = e1;
      $f_scm_HashTable__nnSizeMapAdd__I__V($thiz, h)
    };
    i = (((-1) + i) | 0)
  };
  $thiz.scm_HashMap__f_threshold = $m_scm_HashTable$().newThreshold__I__I__I($thiz.scm_HashMap__f__loadFactor, newSize)
});
const $f_scm_HashTable__tableSizeSeed__I = (function($thiz) {
  const i = (((-1) + $thiz.scm_HashMap__f_table.u.length) | 0);
  return $m_jl_Integer$().bitCount__I__I(i)
});
const $f_scm_HashTable__scala$collection$mutable$HashTable$$lastPopulatedIndex__I = (function($thiz) {
  let idx = (((-1) + $thiz.scm_HashMap__f_table.u.length) | 0);
  while ((($thiz.scm_HashMap__f_table.get(idx) === null) && (idx > 0))) {
    idx = (((-1) + idx) | 0)
  };
  return idx
});
const $f_scm_HashTable__findEntry__O__scm_HashEntry = (function($thiz, key) {
  const hcode = $m_sr_Statics$().anyHash__O__I(key);
  return $p_scm_HashTable__findEntry0__O__I__scm_HashEntry($thiz, key, $f_scm_HashTable__index__I__I($thiz, hcode))
});
const $f_scm_HashTable__findOrAddEntry__O__O__scm_HashEntry = (function($thiz, key, value) {
  const hcode = $m_sr_Statics$().anyHash__O__I(key);
  const h = $f_scm_HashTable__index__I__I($thiz, hcode);
  const e = $p_scm_HashTable__findEntry0__O__I__scm_HashEntry($thiz, key, h);
  return ((e !== null) ? e : ($p_scm_HashTable__addEntry0__scm_HashEntry__I__V($thiz, new $c_scm_DefaultEntry(key, value), h), null))
});
const $f_scm_HashTable__nnSizeMapAdd__I__V = (function($thiz, h) {
  if (($thiz.scm_HashMap__f_sizemap !== null)) {
    const ev$1 = $thiz.scm_HashMap__f_sizemap;
    const ev$2 = (h >> 5);
    ev$1.set(ev$2, ((1 + ev$1.get(ev$2)) | 0))
  }
});
const $f_scm_HashTable__nnSizeMapReset__I__V = (function($thiz, tableLength) {
  if (($thiz.scm_HashMap__f_sizemap !== null)) {
    const nsize = $f_scm_HashTable__calcSizeMapSize__I__I($thiz, tableLength);
    if (($thiz.scm_HashMap__f_sizemap.u.length !== nsize)) {
      $thiz.scm_HashMap__f_sizemap = $newArrayObject($d_I.getArrayOf(), [nsize])
    } else {
      const a = $thiz.scm_HashMap__f_sizemap;
      $m_ju_Arrays$().fill__AI__I__V(a, 0)
    }
  }
});
const $f_scm_HashTable__calcSizeMapSize__I__I = (function($thiz, tableLength) {
  return ((1 + (tableLength >> 5)) | 0)
});
const $f_scm_HashTable__index__I__I = (function($thiz, hcode) {
  const ones = (((-1) + $thiz.scm_HashMap__f_table.u.length) | 0);
  const exponent = $clz32(ones);
  const seed = $thiz.scm_HashMap__f_seedvalue;
  return ((($f_scm_HashTable$HashUtils__improve__I__I__I($thiz, hcode, seed) >>> exponent) | 0) & ones)
});
const $f_scm_HashTable__initWithContents__scm_HashTable$Contents__V = (function($thiz, c) {
  if ((c !== null)) {
    $thiz.scm_HashMap__f__loadFactor = c.loadFactor__I();
    $thiz.scm_HashMap__f_table = c.table__Ascm_HashEntry();
    $thiz.scm_HashMap__f_tableSize = c.tableSize__I();
    $thiz.scm_HashMap__f_threshold = c.threshold__I();
    $thiz.scm_HashMap__f_seedvalue = c.seedvalue__I();
    $thiz.scm_HashMap__f_sizemap = c.sizemap__AI()
  }
});
const $f_scm_HashTable__$init$__V = (function($thiz) {
  $thiz.scm_HashMap__f__loadFactor = 750;
  const this$1 = $m_scm_HashTable$();
  $thiz.scm_HashMap__f_table = $newArrayObject($d_scm_HashEntry.getArrayOf(), [this$1.nextPositivePowerOfTwo__I__I(16)]);
  $thiz.scm_HashMap__f_tableSize = 0;
  const _loadFactor = $thiz.scm_HashMap__f__loadFactor;
  const $$x1 = $m_scm_HashTable$();
  const this$2 = $m_scm_HashTable$();
  $thiz.scm_HashMap__f_threshold = $$x1.newThreshold__I__I__I(_loadFactor, this$2.nextPositivePowerOfTwo__I__I(16));
  $thiz.scm_HashMap__f_sizemap = null;
  $thiz.scm_HashMap__f_seedvalue = $f_scm_HashTable__tableSizeSeed__I($thiz)
});
class $c_sc_package$WrappedCanBuildFrom {
}
function $as_sc_package$WrappedCanBuildFrom(obj) {
  return (((obj instanceof $c_sc_package$WrappedCanBuildFrom) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.package$WrappedCanBuildFrom"))
}
function $isArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_package$WrappedCanBuildFrom)))
}
function $asArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) {
  return (($isArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.package$WrappedCanBuildFrom;", depth))
}
const $f_s_concurrent_BatchingExecutor__execute__jl_Runnable__V = (function($thiz, runnable) {
  if ($f_s_concurrent_BatchingExecutor__batchable__jl_Runnable__Z($thiz, runnable)) {
    const x1 = $as_sci_List($thiz.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.get__O());
    if ((x1 === null)) {
      const this$1 = $m_sci_Nil$();
      const r = new $c_s_concurrent_BatchingExecutor$Batch($thiz, new $c_sci_$colon$colon(runnable, this$1));
      r.run__V()
    } else {
      $thiz.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.set__O__V(new $c_sci_$colon$colon(runnable, x1))
    }
  } else {
    runnable.run__V()
  }
});
const $f_s_concurrent_BatchingExecutor__batchable__jl_Runnable__Z = (function($thiz, runnable) {
  return $is_s_concurrent_OnCompleteRunnable(runnable)
});
class $c_s_concurrent_BlockContext$DefaultBlockContext$ extends $c_O {
}
const $d_s_concurrent_BlockContext$DefaultBlockContext$ = new $TypeData().initClass({
  s_concurrent_BlockContext$DefaultBlockContext$: 0
}, false, "scala.concurrent.BlockContext$DefaultBlockContext$", {
  s_concurrent_BlockContext$DefaultBlockContext$: 1,
  O: 1,
  s_concurrent_BlockContext: 1
});
$c_s_concurrent_BlockContext$DefaultBlockContext$.prototype.$classData = $d_s_concurrent_BlockContext$DefaultBlockContext$;
let $n_s_concurrent_BlockContext$DefaultBlockContext$ = (void 0);
function $m_s_concurrent_BlockContext$DefaultBlockContext$() {
  if ((!$n_s_concurrent_BlockContext$DefaultBlockContext$)) {
    $n_s_concurrent_BlockContext$DefaultBlockContext$ = new $c_s_concurrent_BlockContext$DefaultBlockContext$()
  };
  return $n_s_concurrent_BlockContext$DefaultBlockContext$
}
const $f_s_concurrent_Future__foreach__F1__s_concurrent_ExecutionContext__V = (function($thiz, f, executor) {
  $thiz.onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$1, f$1) => ((x$1$2) => {
    const x$1 = $as_s_util_Try(x$1$2);
    x$1.foreach__F1__V(f$1)
  }))($thiz, f)), executor)
});
const $f_s_concurrent_Future__flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future = (function($thiz, f, executor) {
  const f$2 = new $c_sjsr_AnonFunction1(((this$1, f$1) => ((x0$1$2) => {
    const x0$1 = $as_s_util_Try(x0$1$2);
    if ((x0$1 instanceof $c_s_util_Success)) {
      const x2 = $as_s_util_Success(x0$1);
      const s = x2.s_util_Success__f_value;
      return $as_s_concurrent_Future(f$1.apply__O__O(s))
    } else if ((x0$1 instanceof $c_s_util_Failure)) {
      return this$1
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz, f));
  return $f_s_concurrent_impl_Promise__transformWith__F1__s_concurrent_ExecutionContext__s_concurrent_Future($thiz, f$2, executor)
});
function $is_s_concurrent_Future(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_Future)))
}
function $as_s_concurrent_Future(obj) {
  return (($is_s_concurrent_Future(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.Future"))
}
function $isArrayOf_s_concurrent_Future(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_Future)))
}
function $asArrayOf_s_concurrent_Future(obj, depth) {
  return (($isArrayOf_s_concurrent_Future(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.Future;", depth))
}
class $c_s_package$$anon$1 extends $c_O {
  toString__T() {
    return "object AnyRef"
  };
}
const $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction2 extends $c_O {
  toString__T() {
    return "<function2>"
  };
}
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
function $is_s_util_control_ControlThrowable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_util_control_ControlThrowable)))
}
function $as_s_util_control_ControlThrowable(obj) {
  return (($is_s_util_control_ControlThrowable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"))
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)))
}
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth))
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
    this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_TraversableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  seqHash__sc_Seq__I(xs) {
    if ((xs instanceof $c_sci_List)) {
      const x2 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_TraversableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_s_util_hashing_MurmurHash3$hasher$1$ extends $c_O {
  constructor(outer) {
    super();
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_c = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$1$__f_c = 1
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    const h = $m_sr_Statics$().anyHash__O__I(x);
    this.s_util_hashing_MurmurHash3$hasher$1$__f_a = ((this.s_util_hashing_MurmurHash3$hasher$1$__f_a + h) | 0);
    this.s_util_hashing_MurmurHash3$hasher$1$__f_b = (this.s_util_hashing_MurmurHash3$hasher$1$__f_b ^ h);
    if ((h !== 0)) {
      this.s_util_hashing_MurmurHash3$hasher$1$__f_c = $imul(this.s_util_hashing_MurmurHash3$hasher$1$__f_c, h)
    };
    this.s_util_hashing_MurmurHash3$hasher$1$__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$1$__f_n) | 0)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_s_util_hashing_MurmurHash3$hasher$1$(obj) {
  return (((obj instanceof $c_s_util_hashing_MurmurHash3$hasher$1$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.hashing.MurmurHash3$hasher$1$"))
}
function $isArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_hashing_MurmurHash3$hasher$1$)))
}
function $asArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) {
  return (($isArrayOf_s_util_hashing_MurmurHash3$hasher$1$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$hasher$1$;", depth))
}
const $d_s_util_hashing_MurmurHash3$hasher$1$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$1$: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$1$", {
  s_util_hashing_MurmurHash3$hasher$1$: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$1$.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$1$;
class $c_s_util_hashing_MurmurHash3$hasher$3$ extends $c_O {
  constructor(outer, seed$1) {
    super();
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer = outer
    };
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = 0;
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = seed$1
  };
  toString__T() {
    return "<function1>"
  };
  apply__O__V(x) {
    this.s_util_hashing_MurmurHash3$hasher$3$__f_h = this.s_util_hashing_MurmurHash3$hasher$3$__f_$outer.mix__I__I__I(this.s_util_hashing_MurmurHash3$hasher$3$__f_h, $m_sr_Statics$().anyHash__O__I(x));
    this.s_util_hashing_MurmurHash3$hasher$3$__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$3$__f_n) | 0)
  };
  apply__O__O(v1) {
    this.apply__O__V(v1)
  };
}
function $as_s_util_hashing_MurmurHash3$hasher$3$(obj) {
  return (((obj instanceof $c_s_util_hashing_MurmurHash3$hasher$3$) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.hashing.MurmurHash3$hasher$3$"))
}
function $isArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_hashing_MurmurHash3$hasher$3$)))
}
function $asArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) {
  return (($isArrayOf_s_util_hashing_MurmurHash3$hasher$3$(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.hashing.MurmurHash3$hasher$3$;", depth))
}
const $d_s_util_hashing_MurmurHash3$hasher$3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$3$: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$3$", {
  s_util_hashing_MurmurHash3$hasher$3$: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$3$;
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
function $as_jl_Error(obj) {
  return (((obj instanceof $c_jl_Error) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Error"))
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Error)))
}
function $asArrayOf_jl_Error(obj, depth) {
  return (($isArrayOf_jl_Error(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Error;", depth))
}
class $c_jl_Exception extends $c_jl_Throwable {
}
const $ct_ju_concurrent_atomic_AtomicReference__O__ = (function($thiz, value) {
  $thiz.ju_concurrent_atomic_AtomicReference__f_value = value;
  return $thiz
});
class $c_ju_concurrent_atomic_AtomicReference extends $c_O {
  constructor() {
    super();
    this.ju_concurrent_atomic_AtomicReference__f_value = null
  };
  compareAndSet__O__O__Z(expect, update) {
    if (Object.is(expect, this.ju_concurrent_atomic_AtomicReference__f_value)) {
      this.ju_concurrent_atomic_AtomicReference__f_value = update;
      return true
    } else {
      return false
    }
  };
}
class $c_s_Predef$ extends $c_s_LowPriorityImplicits {
  constructor() {
    super();
    this.s_Predef$__f_Map = null;
    this.s_Predef$__f_Set = null;
    this.s_Predef$__f_ClassManifest = null;
    this.s_Predef$__f_Manifest = null;
    this.s_Predef$__f_NoManifest = null;
    this.s_Predef$__f_StringCanBuildFrom = null;
    this.s_Predef$__f_singleton_$less$colon$less = null;
    this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = null;
    $n_s_Predef$ = this;
    $m_s_package$();
    $m_sci_List$();
    this.s_Predef$__f_Map = $m_sci_Map$();
    this.s_Predef$__f_Set = $m_sci_Set$();
    this.s_Predef$__f_ClassManifest = $m_s_reflect_package$().s_reflect_package$__f_ClassManifest;
    this.s_Predef$__f_Manifest = $m_s_reflect_package$().s_reflect_package$__f_Manifest;
    this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$();
    this.s_Predef$__f_StringCanBuildFrom = new $c_s_Predef$$anon$1();
    this.s_Predef$__f_singleton_$less$colon$less = new $c_s_Predef$$anon$2();
    this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = new $c_s_Predef$$anon$3()
  };
  require__Z__V(requirement) {
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
    }
  };
}
const $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  O: 1,
  s_DeprecatedPredef: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
let $n_s_Predef$ = (void 0);
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
class $c_sc_IndexedSeq$$anon$1 extends $c_scg_GenTraversableFactory$GenericCanBuildFrom {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sc_IndexedSeq$())
  };
}
const $d_sc_IndexedSeq$$anon$1 = new $TypeData().initClass({
  sc_IndexedSeq$$anon$1: 0
}, false, "scala.collection.IndexedSeq$$anon$1", {
  sc_IndexedSeq$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sc_IndexedSeq$$anon$1.prototype.$classData = $d_sc_IndexedSeq$$anon$1;
const $f_sc_Iterator__foreach__F1__V = (function($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
});
const $f_sc_Iterator__forall__F1__Z = (function($thiz, p) {
  let res = true;
  while ((res && $thiz.hasNext__Z())) {
    res = $uZ(p.apply__O__O($thiz.next__O()))
  };
  return res
});
const $f_sc_Iterator__toStream__sci_Stream = (function($thiz) {
  if ($thiz.hasNext__Z()) {
    const hd = $thiz.next__O();
    const tl = new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.toStream__sci_Stream()))($thiz));
    return new $c_sci_Stream$Cons(hd, tl)
  } else {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }
});
class $c_scg_GenSeqFactory extends $c_scg_GenTraversableFactory {
}
class $c_scg_GenTraversableFactory$$anon$1 extends $c_scg_GenTraversableFactory$GenericCanBuildFrom {
  constructor(outer) {
    super();
    this.scg_GenTraversableFactory$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scg_GenTraversableFactory$$anon$1__f_$outer = outer
    };
    $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, outer)
  };
}
const $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
class $c_scg_ImmutableMapFactory extends $c_scg_MapFactory {
}
class $c_scg_MutableMapFactory extends $c_scg_MapFactory {
  newBuilder__scm_Builder() {
    return $as_scm_Builder(this.empty__sc_Map())
  };
}
class $c_sci_$colon$colon$ extends $c_O {
  toString__T() {
    return "::"
  };
}
const $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
let $n_sci_$colon$colon$ = (void 0);
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
class $c_sci_Map$HashCodeAccumulator extends $c_sr_AbstractFunction2 {
  constructor() {
    super();
    this.sci_Map$HashCodeAccumulator__f_a = 0;
    this.sci_Map$HashCodeAccumulator__f_b = 0;
    this.sci_Map$HashCodeAccumulator__f_n = 0;
    this.sci_Map$HashCodeAccumulator__f_c = 0;
    this.sci_Map$HashCodeAccumulator__f_a = 0;
    this.sci_Map$HashCodeAccumulator__f_b = 0;
    this.sci_Map$HashCodeAccumulator__f_n = 0;
    this.sci_Map$HashCodeAccumulator__f_c = 1
  };
  apply__O__O__V(key, value) {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const h = this$1.product2Hash__O__O__I__I(key, value, (-889275714));
    this.sci_Map$HashCodeAccumulator__f_a = ((this.sci_Map$HashCodeAccumulator__f_a + h) | 0);
    this.sci_Map$HashCodeAccumulator__f_b = (this.sci_Map$HashCodeAccumulator__f_b ^ h);
    if ((h !== 0)) {
      this.sci_Map$HashCodeAccumulator__f_c = $imul(this.sci_Map$HashCodeAccumulator__f_c, h)
    };
    this.sci_Map$HashCodeAccumulator__f_n = ((1 + this.sci_Map$HashCodeAccumulator__f_n) | 0)
  };
  finalizeHash__I() {
    let h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_n)
  };
  apply__O__O__O(v1, v2) {
    this.apply__O__O__V(v1, v2)
  };
}
const $d_sci_Map$HashCodeAccumulator = new $TypeData().initClass({
  sci_Map$HashCodeAccumulator: 0
}, false, "scala.collection.immutable.Map$HashCodeAccumulator", {
  sci_Map$HashCodeAccumulator: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sci_Map$HashCodeAccumulator.prototype.$classData = $d_sci_Map$HashCodeAccumulator;
class $c_sci_Range$ extends $c_O {
  constructor() {
    super();
    this.sci_Range$__f_MAX_PRINT = 0;
    this.sci_Range$__f_MAX_PRINT = 512
  };
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sci_Stream$StreamCanBuildFrom extends $c_scg_GenTraversableFactory$GenericCanBuildFrom {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sci_Stream$())
  };
}
const $d_sci_Stream$StreamCanBuildFrom = new $TypeData().initClass({
  sci_Stream$StreamCanBuildFrom: 0
}, false, "scala.collection.immutable.Stream$StreamCanBuildFrom", {
  sci_Stream$StreamCanBuildFrom: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_Stream$StreamCanBuildFrom.prototype.$classData = $d_sci_Stream$StreamCanBuildFrom;
const $f_scm_Builder__sizeHint__sc_TraversableLike__V = (function($thiz, coll) {
  const x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(x1)
  }
});
const $f_scm_Builder__sizeHint__sc_TraversableLike__I__V = (function($thiz, coll, delta) {
  const x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((x1 + delta) | 0))
  }
});
const $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V = (function($thiz, size, boundingColl) {
  const x1 = boundingColl.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((size < x1) ? size : x1))
  }
});
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
class $c_scm_StringBuilder$ extends $c_O {
}
const $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
let $n_scm_StringBuilder$ = (void 0);
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
const $p_s_concurrent_BatchingExecutor$Batch__processBatch$1__sci_List__V = (function($thiz, batch) {
  while (true) {
    const x1 = batch;
    const x = $m_sci_Nil$();
    if ((!x.equals__O__Z(x1))) {
      if ((x1 instanceof $c_sci_$colon$colon)) {
        const x2 = $as_sci_$colon$colon(x1);
        const head = $as_jl_Runnable(x2.sci_$colon$colon__f_head);
        const tail = x2.sci_$colon$colon__f_tl;
        $thiz.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.set__O__V(tail);
        try {
          head.run__V()
        } catch (e) {
          const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
          if ((e$2 !== null)) {
            const remaining = $as_sci_List($thiz.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.get__O());
            $thiz.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.set__O__V($m_sci_Nil$());
            const r = new $c_s_concurrent_BatchingExecutor$Batch($thiz.s_concurrent_BatchingExecutor$Batch__f_$outer, remaining);
            r.run__V();
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          } else {
            throw e
          }
        };
        batch = $as_sci_List($thiz.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.get__O());
        continue
      };
      throw new $c_s_MatchError(x1)
    };
    break
  }
});
class $c_s_concurrent_BatchingExecutor$Batch extends $c_O {
  constructor(outer, initial) {
    super();
    this.s_concurrent_BatchingExecutor$Batch__f_initial = null;
    this.s_concurrent_BatchingExecutor$Batch__f_parentBlockContext = null;
    this.s_concurrent_BatchingExecutor$Batch__f_$outer = null;
    this.s_concurrent_BatchingExecutor$Batch__f_initial = initial;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.s_concurrent_BatchingExecutor$Batch__f_$outer = outer
    }
  };
  run__V() {
    $m_s_Predef$().require__Z__V((this.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.get__O() === null));
    const prevBlockContext = $m_s_concurrent_BlockContext$().current__s_concurrent_BlockContext();
    const this$1 = $m_s_concurrent_BlockContext$();
    const old = $as_s_concurrent_BlockContext(this$1.s_concurrent_BlockContext$__f_contextLocal.get__O());
    try {
      this$1.s_concurrent_BlockContext$__f_contextLocal.set__O__V(this);
      try {
        this.s_concurrent_BatchingExecutor$Batch__f_parentBlockContext = prevBlockContext;
        $p_s_concurrent_BatchingExecutor$Batch__processBatch$1__sci_List__V(this, this.s_concurrent_BatchingExecutor$Batch__f_initial)
      } finally {
        this.s_concurrent_BatchingExecutor$Batch__f_$outer.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal.remove__V();
        this.s_concurrent_BatchingExecutor$Batch__f_parentBlockContext = null
      }
    } finally {
      this$1.s_concurrent_BlockContext$__f_contextLocal.set__O__V(old)
    }
  };
}
const $d_s_concurrent_BatchingExecutor$Batch = new $TypeData().initClass({
  s_concurrent_BatchingExecutor$Batch: 0
}, false, "scala.concurrent.BatchingExecutor$Batch", {
  s_concurrent_BatchingExecutor$Batch: 1,
  O: 1,
  jl_Runnable: 1,
  s_concurrent_BlockContext: 1
});
$c_s_concurrent_BatchingExecutor$Batch.prototype.$classData = $d_s_concurrent_BatchingExecutor$Batch;
class $c_s_concurrent_impl_CallbackRunnable extends $c_O {
  constructor(executor, onComplete) {
    super();
    this.s_concurrent_impl_CallbackRunnable__f_executor = null;
    this.s_concurrent_impl_CallbackRunnable__f_onComplete = null;
    this.s_concurrent_impl_CallbackRunnable__f_value = null;
    this.s_concurrent_impl_CallbackRunnable__f_executor = executor;
    this.s_concurrent_impl_CallbackRunnable__f_onComplete = onComplete;
    this.s_concurrent_impl_CallbackRunnable__f_value = null
  };
  run__V() {
    $m_s_Predef$().require__Z__V((this.s_concurrent_impl_CallbackRunnable__f_value !== null));
    try {
      this.s_concurrent_impl_CallbackRunnable__f_onComplete.apply__O__O(this.s_concurrent_impl_CallbackRunnable__f_value)
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        matchEnd8: {
          const o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
          if ((!o11.isEmpty__Z())) {
            const e$3 = $as_jl_Throwable(o11.get__O());
            this.s_concurrent_impl_CallbackRunnable__f_executor.reportFailure__jl_Throwable__V(e$3);
            break matchEnd8
          };
          throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
        }
      } else {
        throw e
      }
    }
  };
  executeWithValue__s_util_Try__V(v) {
    $m_s_Predef$().require__Z__V((this.s_concurrent_impl_CallbackRunnable__f_value === null));
    this.s_concurrent_impl_CallbackRunnable__f_value = v;
    try {
      this.s_concurrent_impl_CallbackRunnable__f_executor.execute__jl_Runnable__V(this)
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        matchEnd8: {
          const o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
          if ((!o11.isEmpty__Z())) {
            const t = $as_jl_Throwable(o11.get__O());
            this.s_concurrent_impl_CallbackRunnable__f_executor.reportFailure__jl_Throwable__V(t);
            break matchEnd8
          };
          throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
        }
      } else {
        throw e
      }
    }
  };
}
function $as_s_concurrent_impl_CallbackRunnable(obj) {
  return (((obj instanceof $c_s_concurrent_impl_CallbackRunnable) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.CallbackRunnable"))
}
function $isArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_CallbackRunnable)))
}
function $asArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.CallbackRunnable;", depth))
}
const $d_s_concurrent_impl_CallbackRunnable = new $TypeData().initClass({
  s_concurrent_impl_CallbackRunnable: 0
}, false, "scala.concurrent.impl.CallbackRunnable", {
  s_concurrent_impl_CallbackRunnable: 1,
  O: 1,
  jl_Runnable: 1,
  s_concurrent_OnCompleteRunnable: 1
});
$c_s_concurrent_impl_CallbackRunnable.prototype.$classData = $d_s_concurrent_impl_CallbackRunnable;
class $c_s_math_Fractional$ extends $c_O {
}
const $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
let $n_s_math_Fractional$ = (void 0);
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
class $c_s_math_Integral$ extends $c_O {
}
const $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
let $n_s_math_Integral$ = (void 0);
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
class $c_s_math_Numeric$ extends $c_O {
}
const $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
let $n_s_math_Numeric$ = (void 0);
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_sr_LazyInt extends $c_O {
  constructor() {
    super();
    this.sr_LazyInt__f__initialized = false;
    this.sr_LazyInt__f__value = 0
  };
  initialize__I__I(value) {
    this.sr_LazyInt__f__value = value;
    this.sr_LazyInt__f__initialized = true;
    return value
  };
  toString__T() {
    return ("LazyInt " + (this.sr_LazyInt__f__initialized ? ("of: " + this.sr_LazyInt__f__value) : "thunk"))
  };
}
const $d_sr_LazyInt = new $TypeData().initClass({
  sr_LazyInt: 0
}, false, "scala.runtime.LazyInt", {
  sr_LazyInt: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyInt.prototype.$classData = $d_sr_LazyInt;
class $c_sr_LazyRef extends $c_O {
  constructor() {
    super();
    this.sr_LazyRef__f__initialized = false;
    this.sr_LazyRef__f__value = null
  };
  initialize__O__O(value) {
    this.sr_LazyRef__f__value = value;
    this.sr_LazyRef__f__initialized = true;
    return value
  };
  toString__T() {
    return ("LazyRef " + (this.sr_LazyRef__f__initialized ? ("of: " + this.sr_LazyRef__f__value) : "thunk"))
  };
}
const $d_sr_LazyRef = new $TypeData().initClass({
  sr_LazyRef: 0
}, false, "scala.runtime.LazyRef", {
  sr_LazyRef: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyRef.prototype.$classData = $d_sr_LazyRef;
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjs_js_Any$ extends $c_O {
  fromFunction0__F0__sjs_js_Function0(f) {
    return ((f$1) => (() => f$1.apply__O()))(f)
  };
  fromFunction1__F1__sjs_js_Function1(f) {
    return ((f$2) => ((arg1$2) => f$2.apply__O__O(arg1$2)))(f)
  };
}
const $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
let $n_sjs_js_Any$ = (void 0);
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction2 extends $c_sr_AbstractFunction2 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction2__f_f = null;
    this.sjsr_AnonFunction2__f_f = f
  };
  apply__O__O__O(arg1, arg2) {
    return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
  };
}
const $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
class $c_s_util_Either$ extends $c_O {
}
const $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
let $n_s_util_Either$ = (void 0);
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
class $c_s_util_Left$ extends $c_O {
  toString__T() {
    return "Left"
  };
}
const $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
let $n_s_util_Left$ = (void 0);
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
class $c_s_util_Right$ extends $c_O {
  toString__T() {
    return "Right"
  };
}
const $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
let $n_s_util_Right$ = (void 0);
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
class $c_s_util_control_NoStackTrace$ extends $c_O {
  constructor() {
    super();
    this.s_util_control_NoStackTrace$__f__noSuppression = false;
    this.s_util_control_NoStackTrace$__f__noSuppression = false
  };
}
const $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
let $n_s_util_control_NoStackTrace$ = (void 0);
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
class $c_Ljava_io_OutputStream extends $c_O {
}
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
class $c_jl_InterruptedException {
}
function $as_jl_InterruptedException(obj) {
  return (((obj instanceof $c_jl_InterruptedException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"))
}
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)))
}
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth))
}
class $c_jl_LinkageError {
}
function $as_jl_LinkageError(obj) {
  return (((obj instanceof $c_jl_LinkageError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"))
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)))
}
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth))
}
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
const $ct_jl_RuntimeException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__I__ = (function($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_ThreadDeath {
}
function $as_jl_ThreadDeath(obj) {
  return (((obj instanceof $c_jl_ThreadDeath) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"))
}
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)))
}
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth))
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"))
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)))
}
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth))
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_ju_concurrent_ExecutionException = new $TypeData().initClass({
  ju_concurrent_ExecutionException: 0
}, false, "java.util.concurrent.ExecutionException", {
  ju_concurrent_ExecutionException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ExecutionException.prototype.$classData = $d_ju_concurrent_ExecutionException;
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_s_FallbackArrayBuilding {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  s_FallbackArrayBuilding: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_Predef$$eq$colon$eq extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_s_Predef$$less$colon$less extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sc_AbstractIterator extends $c_O {
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  foreach__F1__V(f) {
    $f_sc_Iterator__foreach__F1__V(this, f)
  };
  toStream__sci_Stream() {
    return $f_sc_Iterator__toStream__sci_Stream(this)
  };
  toString__T() {
    return "<iterator>"
  };
  size__I() {
    return $f_sc_TraversableOnce__size__I(this)
  };
  $div$colon__O__F2__O(z, op) {
    return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
  };
  foldLeft__O__F2__O(z, op) {
    return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
  };
  sum__s_math_Numeric__O(num) {
    return $f_sc_TraversableOnce__sum__s_math_Numeric__O(this, num)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  seq__sc_TraversableOnce() {
    return this
  };
}
class $c_scg_SetFactory extends $c_scg_GenSetFactory {
}
class $c_sci_Map$ extends $c_scg_ImmutableMapFactory {
  constructor() {
    super();
    this.sci_Map$__f_ReusableCBF = null;
    $n_sci_Map$ = this;
    this.sci_Map$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
  };
  empty__sc_GenMap() {
    return $m_sci_Map$EmptyMap$()
  };
}
const $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
let $n_sci_Map$ = (void 0);
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
class $c_scm_DefaultEntry extends $c_O {
  constructor(key, value) {
    super();
    this.scm_DefaultEntry__f_key = null;
    this.scm_DefaultEntry__f_value = null;
    this.scm_DefaultEntry__f_next = null;
    this.scm_DefaultEntry__f_key = key;
    this.scm_DefaultEntry__f_value = value
  };
  toString__T() {
    return this.chainString__T()
  };
  chainString__T() {
    const $$x3 = this.scm_DefaultEntry__f_key;
    const $$x2 = this.scm_DefaultEntry__f_value;
    let $$x1;
    if ((this.scm_DefaultEntry__f_next !== null)) {
      const this$1 = this.scm_DefaultEntry__f_next;
      $$x1 = (" -> " + this$1.chainString__T())
    } else {
      $$x1 = ""
    };
    return ((((("(kv: " + $$x3) + ", ") + $$x2) + ")") + $$x1)
  };
}
function $as_scm_DefaultEntry(obj) {
  return (((obj instanceof $c_scm_DefaultEntry) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.DefaultEntry"))
}
function $isArrayOf_scm_DefaultEntry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_DefaultEntry)))
}
function $asArrayOf_scm_DefaultEntry(obj, depth) {
  return (($isArrayOf_scm_DefaultEntry(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.DefaultEntry;", depth))
}
const $d_scm_DefaultEntry = new $TypeData().initClass({
  scm_DefaultEntry: 0
}, false, "scala.collection.mutable.DefaultEntry", {
  scm_DefaultEntry: 1,
  O: 1,
  scm_HashEntry: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_DefaultEntry.prototype.$classData = $d_scm_DefaultEntry;
class $c_scm_GrowingBuilder extends $c_O {
  constructor(empty) {
    super();
    this.scm_GrowingBuilder__f_empty = null;
    this.scm_GrowingBuilder__f_elems = null;
    this.scm_GrowingBuilder__f_empty = empty;
    this.scm_GrowingBuilder__f_elems = empty
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  $plus$eq__O__scm_GrowingBuilder(x) {
    this.scm_GrowingBuilder__f_elems.$plus$eq__O__scg_Growable(x);
    return this
  };
  result__O() {
    return this.scm_GrowingBuilder__f_elems
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_GrowingBuilder(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_GrowingBuilder(elem)
  };
}
const $d_scm_GrowingBuilder = new $TypeData().initClass({
  scm_GrowingBuilder: 0
}, false, "scala.collection.mutable.GrowingBuilder", {
  scm_GrowingBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_GrowingBuilder.prototype.$classData = $d_scm_GrowingBuilder;
class $c_scm_Map$ extends $c_scg_MutableMapFactory {
  constructor() {
    super();
    this.scm_Map$__f_ReusableCBF = null;
    $n_scm_Map$ = this;
    this.scm_Map$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
  };
  empty__sc_GenMap() {
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
  empty__sc_Map() {
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
}
const $d_scm_Map$ = new $TypeData().initClass({
  scm_Map$: 0
}, false, "scala.collection.mutable.Map$", {
  scm_Map$: 1,
  scg_MutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_scm_Map$.prototype.$classData = $d_scm_Map$;
let $n_scm_Map$ = (void 0);
function $m_scm_Map$() {
  if ((!$n_scm_Map$)) {
    $n_scm_Map$ = new $c_scm_Map$()
  };
  return $n_scm_Map$
}
class $c_s_concurrent_Future$InternalCallbackExecutor$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = null;
    $n_s_concurrent_Future$InternalCallbackExecutor$ = this;
    this.s_concurrent_Future$InternalCallbackExecutor$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = new $c_jl_ThreadLocal()
  };
  execute__jl_Runnable__V(runnable) {
    $f_s_concurrent_BatchingExecutor__execute__jl_Runnable__V(this, runnable)
  };
  reportFailure__jl_Throwable__V(t) {
    throw $ct_jl_IllegalStateException__T__jl_Throwable__(new $c_jl_IllegalStateException(), "problem in scala.concurrent internal callback", t)
  };
}
const $d_s_concurrent_Future$InternalCallbackExecutor$ = new $TypeData().initClass({
  s_concurrent_Future$InternalCallbackExecutor$: 0
}, false, "scala.concurrent.Future$InternalCallbackExecutor$", {
  s_concurrent_Future$InternalCallbackExecutor$: 1,
  O: 1,
  s_concurrent_ExecutionContext: 1,
  s_concurrent_BatchingExecutor: 1,
  ju_concurrent_Executor: 1
});
$c_s_concurrent_Future$InternalCallbackExecutor$.prototype.$classData = $d_s_concurrent_Future$InternalCallbackExecutor$;
let $n_s_concurrent_Future$InternalCallbackExecutor$ = (void 0);
function $m_s_concurrent_Future$InternalCallbackExecutor$() {
  if ((!$n_s_concurrent_Future$InternalCallbackExecutor$)) {
    $n_s_concurrent_Future$InternalCallbackExecutor$ = new $c_s_concurrent_Future$InternalCallbackExecutor$()
  };
  return $n_s_concurrent_Future$InternalCallbackExecutor$
}
const $f_s_concurrent_impl_Promise__transformWith__F1__s_concurrent_ExecutionContext__s_concurrent_Future = (function($thiz, f, executor) {
  const p = new $c_s_concurrent_impl_Promise$DefaultPromise();
  $thiz.onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$1, f$1, p$1) => ((v$2) => {
    const v = $as_s_util_Try(v$2);
    try {
      const x1 = $as_s_concurrent_Future(f$1.apply__O__O(v));
      if ((x1 === this$1)) {
        return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise(p$1, v)
      } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        const x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
        $p_s_concurrent_impl_Promise$DefaultPromise__link__s_concurrent_impl_Promise$DefaultPromise__V(x2, $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise(p$1));
        return (void 0)
      } else {
        return $f_s_concurrent_Promise__tryCompleteWith__s_concurrent_Future__s_concurrent_Promise(p$1, x1)
      }
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        const o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
        if ((!o11.isEmpty__Z())) {
          const t = $as_jl_Throwable(o11.get__O());
          return $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p$1, t)
        };
        throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
      } else {
        throw e
      }
    }
  }))($thiz, f, p)), executor);
  return p
});
const $f_s_concurrent_impl_Promise__toString__T = (function($thiz) {
  const x1 = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_Option($thiz);
  if ((x1 instanceof $c_s_Some)) {
    const x2 = $as_s_Some(x1);
    const result = $as_s_util_Try(x2.s_Some__f_value);
    return (("Future(" + result) + ")")
  } else {
    const x = $m_s_None$();
    if ((x === x1)) {
      return "Future(<not completed>)"
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
});
class $c_s_math_Equiv$ extends $c_O {
}
const $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
let $n_s_math_Equiv$ = (void 0);
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
class $c_s_math_Ordering$ extends $c_O {
}
const $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
let $n_s_math_Ordering$ = (void 0);
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
class $c_s_reflect_NoManifest$ extends $c_O {
  toString__T() {
    return "<?>"
  };
}
const $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
let $n_s_reflect_NoManifest$ = (void 0);
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
class $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = null;
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = Promise.resolve((void 0))
  };
  execute__jl_Runnable__V(runnable) {
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise.then(((arg$outer, runnable$2) => ((arg1$2) => {
      const arg1 = $as_jl_Void(arg1$2);
      return arg$outer.scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(arg1, runnable$2)
    }))(this, runnable))
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
  scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(x$1, runnable$2) {
    try {
      runnable$2.run__V()
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
      } else {
        throw e
      }
    }
  };
}
const $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", {
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
class $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext extends $c_O {
  execute__jl_Runnable__V(runnable) {
    setTimeout($m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $c_sjsr_AnonFunction0(((this$1, runnable$1) => (() => {
      try {
        runnable$1.run__V()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
        } else {
          throw e
        }
      }
    }))(this, runnable))), 0)
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
}
const $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", {
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
const $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ = (function($thiz, out) {
  $thiz.Ljava_io_FilterOutputStream__f_out = out;
  return $thiz
});
class $c_Ljava_io_FilterOutputStream extends $c_Ljava_io_OutputStream {
  constructor() {
    super();
    this.Ljava_io_FilterOutputStream__f_out = null
  };
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
const $ct_jl_IllegalStateException__T__jl_Throwable__ = (function($thiz, s, e) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, true, true);
  return $thiz
});
const $ct_jl_IllegalStateException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_JSConsoleBasedPrintStream$DummyOutputStream extends $c_Ljava_io_OutputStream {
}
const $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    const message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
}
class $c_s_Predef$$anon$2 extends $c_s_Predef$$less$colon$less {
  apply__O__O(x) {
    return x
  };
}
const $d_s_Predef$$anon$2 = new $TypeData().initClass({
  s_Predef$$anon$2: 0
}, false, "scala.Predef$$anon$2", {
  s_Predef$$anon$2: 1,
  s_Predef$$less$colon$less: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$2.prototype.$classData = $d_s_Predef$$anon$2;
class $c_s_Predef$$anon$3 extends $c_s_Predef$$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
}
const $d_s_Predef$$anon$3 = new $TypeData().initClass({
  s_Predef$$anon$3: 0
}, false, "scala.Predef$$anon$3", {
  s_Predef$$anon$3: 1,
  s_Predef$$eq$colon$eq: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$3.prototype.$classData = $d_s_Predef$$anon$3;
class $c_sc_Iterable$ extends $c_scg_GenTraversableFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    $m_sci_Iterable$();
    return new $c_scm_ListBuffer()
  };
}
const $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
let $n_sc_Iterable$ = (void 0);
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
class $c_sc_Iterator$$anon$10 extends $c_sc_AbstractIterator {
  constructor(outer, f$3) {
    super();
    this.sc_Iterator$$anon$10__f_$outer = null;
    this.sc_Iterator$$anon$10__f_f$3 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_Iterator$$anon$10__f_$outer = outer
    };
    this.sc_Iterator$$anon$10__f_f$3 = f$3
  };
  hasNext__Z() {
    return this.sc_Iterator$$anon$10__f_$outer.hasNext__Z()
  };
  next__O() {
    return this.sc_Iterator$$anon$10__f_f$3.apply__O__O(this.sc_Iterator$$anon$10__f_$outer.next__O())
  };
}
const $d_sc_Iterator$$anon$10 = new $TypeData().initClass({
  sc_Iterator$$anon$10: 0
}, false, "scala.collection.Iterator$$anon$10", {
  sc_Iterator$$anon$10: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$10.prototype.$classData = $d_sc_Iterator$$anon$10;
class $c_sc_Iterator$$anon$2 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
class $c_sc_LinearSeqLike$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_LinearSeqLike$$anon$1__f_these = null;
    this.sc_LinearSeqLike$$anon$1__f_these = outer
  };
  hasNext__Z() {
    return (!this.sc_LinearSeqLike$$anon$1__f_these.isEmpty__Z())
  };
  next__O() {
    if (this.hasNext__Z()) {
      const result = this.sc_LinearSeqLike$$anon$1__f_these.head__O();
      this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.tail__O());
      return result
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
    }
  };
}
const $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
class $c_sc_Traversable$ extends $c_scg_GenTraversableFactory {
  constructor() {
    super();
    this.sc_Traversable$__f_breaks = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sc_Traversable$ = this;
    this.sc_Traversable$__f_breaks = new $c_s_util_control_Breaks()
  };
  newBuilder__scm_Builder() {
    $m_sci_Traversable$();
    return new $c_scm_ListBuffer()
  };
}
const $d_sc_Traversable$ = new $TypeData().initClass({
  sc_Traversable$: 0
}, false, "scala.collection.Traversable$", {
  sc_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Traversable$.prototype.$classData = $d_sc_Traversable$;
let $n_sc_Traversable$ = (void 0);
function $m_sc_Traversable$() {
  if ((!$n_sc_Traversable$)) {
    $n_sc_Traversable$ = new $c_sc_Traversable$()
  };
  return $n_sc_Traversable$
}
class $c_scg_ImmutableSetFactory extends $c_scg_SetFactory {
  newBuilder__scm_Builder() {
    return $ct_scm_SetBuilder__sc_Set__(new $c_scm_SetBuilder(), this.emptyInstance__sci_Set())
  };
  empty__sc_GenTraversable() {
    return this.emptyInstance__sci_Set()
  };
}
class $c_sci_Iterable$ extends $c_scg_GenTraversableFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
}
const $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
let $n_sci_Iterable$ = (void 0);
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
class $c_sci_StreamIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sci_StreamIterator__f_these = null;
    this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, self$1) => (() => self$1))(this, self)))
  };
  hasNext__Z() {
    const this$1 = this.sci_StreamIterator__f_these.v__sci_Stream();
    return (!this$1.isEmpty__Z())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
    } else {
      const cur = this.sci_StreamIterator__f_these.v__sci_Stream();
      const result = cur.head__O();
      this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sci_Stream(cur$1.tail__O())))(this, cur)));
      return result
    }
  };
  toStream__sci_Stream() {
    const result = this.sci_StreamIterator__f_these.v__sci_Stream();
    this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => {
      $m_sci_Stream$();
      return $m_sci_Stream$Empty$()
    }))(this)));
    return result
  };
}
const $d_sci_StreamIterator = new $TypeData().initClass({
  sci_StreamIterator: 0
}, false, "scala.collection.immutable.StreamIterator", {
  sci_StreamIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_StreamIterator.prototype.$classData = $d_sci_StreamIterator;
class $c_sci_Traversable$ extends $c_scg_GenTraversableFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
}
const $d_sci_Traversable$ = new $TypeData().initClass({
  sci_Traversable$: 0
}, false, "scala.collection.immutable.Traversable$", {
  sci_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Traversable$.prototype.$classData = $d_sci_Traversable$;
let $n_sci_Traversable$ = (void 0);
function $m_sci_Traversable$() {
  if ((!$n_sci_Traversable$)) {
    $n_sci_Traversable$ = new $c_sci_Traversable$()
  };
  return $n_sci_Traversable$
}
const $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable = (function($thiz, x) {
  let $$x1;
  if ((x instanceof $c_sci_HashMap$HashTrieMap)) {
    const x2 = $as_sci_HashMap$HashTrieMap(x);
    $$x1 = x2.sci_HashMap$HashTrieMap__f_elems
  } else {
    if ((!(x instanceof $c_sci_HashSet$HashTrieSet))) {
      throw new $c_s_MatchError(x)
    };
    const x3 = $as_sci_HashSet$HashTrieSet(x);
    $$x1 = x3.sci_HashSet$HashTrieSet__f_elems
  };
  return $asArrayOf_sci_Iterable($$x1, 1)
});
const $p_sci_TrieIterator__isTrie__O__Z = (function($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashTrieMap) || (x instanceof $c_sci_HashSet$HashTrieSet))
});
const $p_sci_TrieIterator__isContainer__O__Z = (function($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashMap1) || (x instanceof $c_sci_HashSet$HashSet1))
});
const $p_sci_TrieIterator__next0__Asci_Iterable__I__O = (function($thiz, elems, i) {
  while (true) {
    if ((i === (((-1) + elems.u.length) | 0))) {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = (((-1) + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, null)
      } else {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0
      }
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD) | 0)
    };
    const m = elems.get(i);
    if ($p_sci_TrieIterator__isContainer__O__Z($thiz, m)) {
      return $thiz.getElem__O__O(m)
    } else if ($p_sci_TrieIterator__isTrie__O__Z($thiz, m)) {
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
      };
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
      const temp$elems = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      elems = temp$elems;
      i = 0
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = m.iterator__sc_Iterator();
      return $thiz.next__O()
    }
  }
});
const $ct_sci_TrieIterator__Asci_Iterable__ = (function($thiz, elems) {
  $thiz.sci_TrieIterator__f_elems = elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = $thiz.initArrayStack__AAsci_Iterable();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = $thiz.initPosStack__AI();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  return $thiz
});
class $c_sci_TrieIterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_TrieIterator__f_elems = null;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
    this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
  };
  initArrayStack__AAsci_Iterable() {
    return $newArrayObject($d_sci_Iterable.getArrayOf().getArrayOf(), [6])
  };
  initPosStack__AI() {
    return $newArrayObject($d_I.getArrayOf(), [6])
  };
  hasNext__Z() {
    return ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null) || (this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0))
  };
  next__O() {
    if ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null)) {
      const el = this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.next__O();
      if ((!this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.hasNext__Z())) {
        this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
      };
      return el
    } else {
      return $p_sci_TrieIterator__next0__Asci_Iterable__I__O(this, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
    }
  };
}
class $c_scm_HashTable$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.scm_HashTable$$anon$1__f_iterTable = null;
    this.scm_HashTable$$anon$1__f_idx = 0;
    this.scm_HashTable$$anon$1__f_es = null;
    this.scm_HashTable$$anon$1__f_iterTable = outer.scm_HashMap__f_table;
    this.scm_HashTable$$anon$1__f_idx = $f_scm_HashTable__scala$collection$mutable$HashTable$$lastPopulatedIndex__I(outer);
    this.scm_HashTable$$anon$1__f_es = this.scm_HashTable$$anon$1__f_iterTable.get(this.scm_HashTable$$anon$1__f_idx)
  };
  hasNext__Z() {
    return (this.scm_HashTable$$anon$1__f_es !== null)
  };
  next__scm_HashEntry() {
    const res = this.scm_HashTable$$anon$1__f_es;
    const this$1 = this.scm_HashTable$$anon$1__f_es;
    this.scm_HashTable$$anon$1__f_es = this$1.scm_DefaultEntry__f_next;
    while (((this.scm_HashTable$$anon$1__f_es === null) && (this.scm_HashTable$$anon$1__f_idx > 0))) {
      this.scm_HashTable$$anon$1__f_idx = (((-1) + this.scm_HashTable$$anon$1__f_idx) | 0);
      this.scm_HashTable$$anon$1__f_es = this.scm_HashTable$$anon$1__f_iterTable.get(this.scm_HashTable$$anon$1__f_idx)
    };
    return res
  };
  next__O() {
    return this.next__scm_HashEntry()
  };
}
const $d_scm_HashTable$$anon$1 = new $TypeData().initClass({
  scm_HashTable$$anon$1: 0
}, false, "scala.collection.mutable.HashTable$$anon$1", {
  scm_HashTable$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_HashTable$$anon$1.prototype.$classData = $d_scm_HashTable$$anon$1;
class $c_scm_Iterable$ extends $c_scg_GenTraversableFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
  };
}
const $d_scm_Iterable$ = new $TypeData().initClass({
  scm_Iterable$: 0
}, false, "scala.collection.mutable.Iterable$", {
  scm_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_Iterable$.prototype.$classData = $d_scm_Iterable$;
let $n_scm_Iterable$ = (void 0);
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$()
  };
  return $n_scm_Iterable$
}
const $ct_scm_LazyBuilder__ = (function($thiz) {
  $thiz.scm_LazyBuilder__f_parts = new $c_scm_ListBuffer();
  return $thiz
});
class $c_scm_LazyBuilder extends $c_O {
  constructor() {
    super();
    this.scm_LazyBuilder__f_parts = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$eq__O__scm_LazyBuilder(x) {
    const $$x1 = this.scm_LazyBuilder__f_parts;
    $m_sci_List$();
    const array = [x];
    let i = (((-1) + $uI(array.length)) | 0);
    let result = $m_sci_Nil$();
    while ((i >= 0)) {
      const this$4 = result;
      const index = i;
      const x$1 = array[index];
      result = new $c_sci_$colon$colon(x$1, this$4);
      i = (((-1) + i) | 0)
    };
    $$x1.$plus$eq__O__scm_ListBuffer(result);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder(xs) {
    this.scm_LazyBuilder__f_parts.$plus$eq__O__scm_ListBuffer(xs);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder(xs)
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_LazyBuilder(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_LazyBuilder(elem)
  };
}
class $c_scm_ListBuffer$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.scm_ListBuffer$$anon$1__f_cursor = null;
    this.scm_ListBuffer$$anon$1__f_cursor = (outer.isEmpty__Z() ? $m_sci_Nil$() : outer.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
  };
  hasNext__Z() {
    return (this.scm_ListBuffer$$anon$1__f_cursor !== $m_sci_Nil$())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty Iterator")
    } else {
      const ans = this.scm_ListBuffer$$anon$1__f_cursor.head__O();
      const this$1 = this.scm_ListBuffer$$anon$1__f_cursor;
      this.scm_ListBuffer$$anon$1__f_cursor = this$1.tail__sci_List();
      return ans
    }
  };
}
const $d_scm_ListBuffer$$anon$1 = new $TypeData().initClass({
  scm_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", {
  scm_ListBuffer$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_ListBuffer$$anon$1.prototype.$classData = $d_scm_ListBuffer$$anon$1;
const $ct_scm_MapBuilder__sc_GenMap__ = (function($thiz, empty) {
  $thiz.scm_MapBuilder__f_empty = empty;
  $thiz.scm_MapBuilder__f_elems = empty;
  return $thiz
});
class $c_scm_MapBuilder extends $c_O {
  constructor() {
    super();
    this.scm_MapBuilder__f_empty = null;
    this.scm_MapBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  $plus$eq__T2__scm_MapBuilder(x) {
    this.scm_MapBuilder__f_elems = this.scm_MapBuilder__f_elems.$plus__T2__sc_GenMap(x);
    return this
  };
  result__O() {
    return this.scm_MapBuilder__f_elems
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
  };
}
const $d_scm_MapBuilder = new $TypeData().initClass({
  scm_MapBuilder: 0
}, false, "scala.collection.mutable.MapBuilder", {
  scm_MapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_MapBuilder.prototype.$classData = $d_scm_MapBuilder;
const $ct_scm_SetBuilder__sc_Set__ = (function($thiz, empty) {
  $thiz.scm_SetBuilder__f_empty = empty;
  $thiz.scm_SetBuilder__f_elems = empty;
  return $thiz
});
class $c_scm_SetBuilder extends $c_O {
  constructor() {
    super();
    this.scm_SetBuilder__f_empty = null;
    this.scm_SetBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  $plus$eq__O__scm_SetBuilder(x) {
    this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus__O__sc_Set(x);
    return this
  };
  result__O() {
    return this.scm_SetBuilder__f_elems
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_SetBuilder(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_SetBuilder(elem)
  };
}
const $d_scm_SetBuilder = new $TypeData().initClass({
  scm_SetBuilder: 0
}, false, "scala.collection.mutable.SetBuilder", {
  scm_SetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_SetBuilder.prototype.$classData = $d_scm_SetBuilder;
const $p_scm_WrappedArrayBuilder__mkArray__I__scm_WrappedArray = (function($thiz, size) {
  const runtimeClass = $thiz.scm_WrappedArrayBuilder__f_tag.runtimeClass__jl_Class();
  let newelems;
  if (runtimeClass.isPrimitive__Z()) {
    if ((runtimeClass === $d_I.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofInt($newArrayObject($d_I.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_D.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofDouble($newArrayObject($d_D.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_J.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofLong($newArrayObject($d_J.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_F.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofFloat($newArrayObject($d_F.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_C.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofChar($newArrayObject($d_C.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_B.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofByte($newArrayObject($d_B.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_S.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofShort($newArrayObject($d_S.getArrayOf(), [size]))
    } else if ((runtimeClass === $d_Z.getClassOf())) {
      newelems = new $c_scm_WrappedArray$ofBoolean($newArrayObject($d_Z.getArrayOf(), [size]))
    } else {
      if ((runtimeClass !== $d_V.getClassOf())) {
        throw new $c_s_MatchError(runtimeClass)
      };
      newelems = new $c_scm_WrappedArray$ofUnit($newArrayObject($d_jl_Void.getArrayOf(), [size]))
    }
  } else {
    newelems = new $c_scm_WrappedArray$ofRef($asArrayOf_O($thiz.scm_WrappedArrayBuilder__f_tag.newArray__I__O(size), 1))
  };
  if (($thiz.scm_WrappedArrayBuilder__f_size > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_WrappedArrayBuilder__f_elems.array__O(), 0, newelems.array__O(), 0, $thiz.scm_WrappedArrayBuilder__f_size)
  };
  return newelems
});
const $p_scm_WrappedArrayBuilder__resize__I__V = (function($thiz, size) {
  $thiz.scm_WrappedArrayBuilder__f_elems = $p_scm_WrappedArrayBuilder__mkArray__I__scm_WrappedArray($thiz, size);
  $thiz.scm_WrappedArrayBuilder__f_capacity = size
});
const $p_scm_WrappedArrayBuilder__ensureSize__I__V = (function($thiz, size) {
  if (($thiz.scm_WrappedArrayBuilder__f_capacity < size)) {
    let newsize = (($thiz.scm_WrappedArrayBuilder__f_capacity === 0) ? 16 : ($thiz.scm_WrappedArrayBuilder__f_capacity << 1));
    while ((newsize < size)) {
      newsize = (newsize << 1)
    };
    $p_scm_WrappedArrayBuilder__resize__I__V($thiz, newsize)
  }
});
class $c_scm_WrappedArrayBuilder extends $c_O {
  constructor(tag) {
    super();
    this.scm_WrappedArrayBuilder__f_tag = null;
    this.scm_WrappedArrayBuilder__f_manifest = null;
    this.scm_WrappedArrayBuilder__f_elems = null;
    this.scm_WrappedArrayBuilder__f_capacity = 0;
    this.scm_WrappedArrayBuilder__f_size = 0;
    this.scm_WrappedArrayBuilder__f_tag = tag;
    this.scm_WrappedArrayBuilder__f_manifest = tag;
    this.scm_WrappedArrayBuilder__f_capacity = 0;
    this.scm_WrappedArrayBuilder__f_size = 0
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  sizeHint__I__V(size) {
    if ((this.scm_WrappedArrayBuilder__f_capacity < size)) {
      $p_scm_WrappedArrayBuilder__resize__I__V(this, size)
    }
  };
  $plus$eq__O__scm_WrappedArrayBuilder(elem) {
    $p_scm_WrappedArrayBuilder__ensureSize__I__V(this, ((1 + this.scm_WrappedArrayBuilder__f_size) | 0));
    this.scm_WrappedArrayBuilder__f_elems.update__I__O__V(this.scm_WrappedArrayBuilder__f_size, elem);
    this.scm_WrappedArrayBuilder__f_size = ((1 + this.scm_WrappedArrayBuilder__f_size) | 0);
    return this
  };
  result__scm_WrappedArray() {
    if (((this.scm_WrappedArrayBuilder__f_capacity !== 0) && (this.scm_WrappedArrayBuilder__f_capacity === this.scm_WrappedArrayBuilder__f_size))) {
      this.scm_WrappedArrayBuilder__f_capacity = 0;
      return this.scm_WrappedArrayBuilder__f_elems
    } else {
      return $p_scm_WrappedArrayBuilder__mkArray__I__scm_WrappedArray(this, this.scm_WrappedArrayBuilder__f_size)
    }
  };
  result__O() {
    return this.result__scm_WrappedArray()
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_WrappedArrayBuilder(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_WrappedArrayBuilder(elem)
  };
}
const $d_scm_WrappedArrayBuilder = new $TypeData().initClass({
  scm_WrappedArrayBuilder: 0
}, false, "scala.collection.mutable.WrappedArrayBuilder", {
  scm_WrappedArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_WrappedArrayBuilder.prototype.$classData = $d_scm_WrappedArrayBuilder;
class $c_sr_NonLocalReturnControl {
}
function $as_sr_NonLocalReturnControl(obj) {
  return (((obj instanceof $c_sr_NonLocalReturnControl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.runtime.NonLocalReturnControl"))
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sr_NonLocalReturnControl)))
}
function $asArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (($isArrayOf_sr_NonLocalReturnControl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl;", depth))
}
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_s_util_Either extends $c_O {
}
function $as_s_util_Either(obj) {
  return (((obj instanceof $c_s_util_Either) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Either"))
}
function $isArrayOf_s_util_Either(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Either)))
}
function $asArrayOf_s_util_Either(obj, depth) {
  return (($isArrayOf_s_util_Either(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Either;", depth))
}
class $c_s_util_Try extends $c_O {
}
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"))
}
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)))
}
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth))
}
class $c_s_util_control_BreakControl extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_util_control_BreakControl = new $TypeData().initClass({
  s_util_control_BreakControl: 0
}, false, "scala.util.control.BreakControl", {
  s_util_control_BreakControl: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_ControlThrowable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_util_control_BreakControl.prototype.$classData = $d_s_util_control_BreakControl;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  isEmpty__Z() {
    return true
  };
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  isEmpty__Z() {
    return false
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_Some__f_value
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
const $ct_T2__O__O__ = (function($thiz, _1, _2) {
  $thiz.T2__f__1 = _1;
  $thiz.T2__f__2 = _2;
  return $thiz
});
class $c_T2 extends $c_O {
  constructor() {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  _1__O() {
    return this.T2__f__1
  };
  _2__O() {
    return this.T2__f__2
  };
  toString__T() {
    return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), Tuple2$1._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), Tuple2$1._2__O()))
    } else {
      return false
    }
  };
  _1$mcD$sp__D() {
    return $uD(this._1__O())
  };
  _1$mcI$sp__I() {
    return $uI(this._1__O())
  };
  _2$mcI$sp__I() {
    return $uI(this._2__O())
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
const $p_sc_GenMapLike__liftedTree1$1__sc_GenMap__Z = (function($thiz, x2$1) {
  try {
    const this$1 = $thiz.iterator__sc_Iterator();
    let res = true;
    while ((res && this$1.hasNext__Z())) {
      const arg1 = this$1.next__O();
      const x0$1 = $as_T2(arg1);
      if ((x0$1 === null)) {
        throw new $c_s_MatchError(x0$1)
      };
      const k = x0$1._1__O();
      const v = x0$1._2__O();
      const x1$2 = x2$1.get__O__s_Option(k);
      matchEnd6: {
        if ((x1$2 instanceof $c_s_Some)) {
          const x2 = $as_s_Some(x1$2);
          const p3 = x2.s_Some__f_value;
          if ($m_sr_BoxesRunTime$().equals__O__O__Z(v, p3)) {
            res = true;
            break matchEnd6
          }
        };
        res = false
      }
    };
    return res
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
});
const $f_sc_GenMapLike__equals__O__Z = (function($thiz, that) {
  if ($is_sc_GenMap(that)) {
    const x2 = $as_sc_GenMap(that);
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $p_sc_GenMapLike__liftedTree1$1__sc_GenMap__Z($thiz, x2)))
  } else {
    return false
  }
});
const $f_sc_GenSeqLike__equals__O__Z = (function($thiz, that) {
  if ($is_sc_GenSeq(that)) {
    const x2 = $as_sc_GenSeq(that);
    return ((x2 === $thiz) || $thiz.sameElements__sc_GenIterable__Z(x2))
  } else {
    return false
  }
});
function $is_sc_GenTraversable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversable)))
}
function $as_sc_GenTraversable(obj) {
  return (($is_sc_GenTraversable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversable"))
}
function $isArrayOf_sc_GenTraversable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversable)))
}
function $asArrayOf_sc_GenTraversable(obj, depth) {
  return (($isArrayOf_sc_GenTraversable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth))
}
class $c_scg_SeqFactory extends $c_scg_GenSeqFactory {
}
class $c_sci_HashMap$HashMapBuilder extends $c_scm_MapBuilder {
  constructor() {
    super();
    $ct_scm_MapBuilder__sc_GenMap__(this, ($m_sci_HashMap$(), $m_sci_HashMap$EmptyHashMap$()))
  };
  $plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs) {
    const $$x1 = $as_sci_HashMap(this.scm_MapBuilder__f_elems);
    const this$1 = $m_sci_HashMap$();
    this.scm_MapBuilder__f_elems = $as_sc_GenMap($$x1.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(xs, this$1.sci_HashMap$__f_ReusableCBF));
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs)
  };
}
const $d_sci_HashMap$HashMapBuilder = new $TypeData().initClass({
  sci_HashMap$HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMap$HashMapBuilder", {
  sci_HashMap$HashMapBuilder: 1,
  scm_MapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashMap$HashMapBuilder.prototype.$classData = $d_sci_HashMap$HashMapBuilder;
class $c_sci_HashMap$HashTrieMap$$anon$5 extends $c_sci_TrieIterator {
  constructor(outer) {
    super();
    $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashMap$HashTrieMap__f_elems)
  };
  getElem__O__O(x) {
    return $as_sci_HashMap$HashMap1(x).ensurePair__T2()
  };
}
const $d_sci_HashMap$HashTrieMap$$anon$5 = new $TypeData().initClass({
  sci_HashMap$HashTrieMap$$anon$5: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap$$anon$5", {
  sci_HashMap$HashTrieMap$$anon$5: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashMap$HashTrieMap$$anon$5.prototype.$classData = $d_sci_HashMap$HashTrieMap$$anon$5;
class $c_sci_HashSet$$anon$1 extends $c_scm_SetBuilder {
  constructor() {
    super();
    $ct_scm_SetBuilder__sc_Set__(this, ($m_sci_HashSet$(), $m_sci_HashSet$EmptyHashSet$()))
  };
  $plus$plus$eq__sc_TraversableOnce__sci_HashSet$$anon$1(xs) {
    this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus$plus__sc_GenTraversableOnce__sc_Set(xs);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$$anon$1(xs)
  };
}
const $d_sci_HashSet$$anon$1 = new $TypeData().initClass({
  sci_HashSet$$anon$1: 0
}, false, "scala.collection.immutable.HashSet$$anon$1", {
  sci_HashSet$$anon$1: 1,
  scm_SetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashSet$$anon$1.prototype.$classData = $d_sci_HashSet$$anon$1;
class $c_sci_HashSet$HashTrieSet$$anon$2 extends $c_sci_TrieIterator {
  constructor(outer) {
    super();
    $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashSet$HashTrieSet__f_elems)
  };
  getElem__O__O(cc) {
    return $as_sci_HashSet$HashSet1(cc).sci_HashSet$HashSet1__f_key
  };
}
const $d_sci_HashSet$HashTrieSet$$anon$2 = new $TypeData().initClass({
  sci_HashSet$HashTrieSet$$anon$2: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet$$anon$2", {
  sci_HashSet$HashTrieSet$$anon$2: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashSet$HashTrieSet$$anon$2.prototype.$classData = $d_sci_HashSet$HashTrieSet$$anon$2;
class $c_sci_ListMap$ extends $c_scg_ImmutableMapFactory {
  constructor() {
    super();
    this.sci_ListMap$__f_ReusableCBF = null;
    $n_sci_ListMap$ = this;
    this.sci_ListMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
  };
  empty__sc_GenMap() {
    return $m_sci_ListMap$EmptyListMap$()
  };
}
const $d_sci_ListMap$ = new $TypeData().initClass({
  sci_ListMap$: 0
}, false, "scala.collection.immutable.ListMap$", {
  sci_ListMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListMap$.prototype.$classData = $d_sci_ListMap$;
let $n_sci_ListMap$ = (void 0);
function $m_sci_ListMap$() {
  if ((!$n_sci_ListMap$)) {
    $n_sci_ListMap$ = new $c_sci_ListMap$()
  };
  return $n_sci_ListMap$
}
class $c_sci_Set$ extends $c_scg_ImmutableSetFactory {
  constructor() {
    super();
    this.sci_Set$__f_ReusableCBF = null;
    $n_sci_Set$ = this;
    this.sci_Set$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
  };
  newBuilder__scm_Builder() {
    return new $c_sci_Set$$anon$1()
  };
  emptyInstance__sci_Set() {
    return $m_sci_Set$EmptySet$()
  };
}
const $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
let $n_sci_Set$ = (void 0);
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
class $c_sci_Set$$anon$1 extends $c_scm_SetBuilder {
  constructor() {
    super();
    $ct_scm_SetBuilder__sc_Set__(this, ($m_sci_Set$(), $m_sci_Set$EmptySet$()))
  };
  $plus$plus$eq__sc_TraversableOnce__sci_Set$$anon$1(xs) {
    this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus$plus__sc_GenTraversableOnce__sc_Set(xs);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__sci_Set$$anon$1(xs)
  };
}
const $d_sci_Set$$anon$1 = new $TypeData().initClass({
  sci_Set$$anon$1: 0
}, false, "scala.collection.immutable.Set$$anon$1", {
  sci_Set$$anon$1: 1,
  scm_SetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Set$$anon$1.prototype.$classData = $d_sci_Set$$anon$1;
class $c_sci_Stream$StreamBuilder extends $c_scm_LazyBuilder {
  constructor() {
    super();
    $ct_scm_LazyBuilder__(this)
  };
  result__sci_Stream() {
    const this$1 = this.scm_LazyBuilder__f_parts;
    return $as_sci_Stream(this$1.toList__sci_List().toStream__sci_Stream().flatMap__F1__scg_CanBuildFrom__O(new $c_sjsr_AnonFunction1(((this$2) => ((x$5$2) => {
      const x$5 = $as_sc_TraversableOnce(x$5$2);
      return x$5.toStream__sci_Stream()
    }))(this)), $m_sci_Stream$().sci_Stream$__f_ReusableCBF))
  };
  result__O() {
    return this.result__sci_Stream()
  };
}
function $as_sci_Stream$StreamBuilder(obj) {
  return (((obj instanceof $c_sci_Stream$StreamBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$StreamBuilder"))
}
function $isArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$StreamBuilder)))
}
function $asArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (($isArrayOf_sci_Stream$StreamBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamBuilder;", depth))
}
const $d_sci_Stream$StreamBuilder = new $TypeData().initClass({
  sci_Stream$StreamBuilder: 0
}, false, "scala.collection.immutable.Stream$StreamBuilder", {
  sci_Stream$StreamBuilder: 1,
  scm_LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Stream$StreamBuilder.prototype.$classData = $d_sci_Stream$StreamBuilder;
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_display0 = null;
    this.sci_VectorBuilder__f_display1 = null;
    this.sci_VectorBuilder__f_display2 = null;
    this.sci_VectorBuilder__f_display3 = null;
    this.sci_VectorBuilder__f_display4 = null;
    this.sci_VectorBuilder__f_display5 = null;
    this.sci_VectorBuilder__f_display0 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_depth = 1;
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  depth__I() {
    return this.sci_VectorBuilder__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorBuilder__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorBuilder__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display0 = x$1
  };
  display1__AO() {
    return this.sci_VectorBuilder__f_display1
  };
  display1_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display1 = x$1
  };
  display2__AO() {
    return this.sci_VectorBuilder__f_display2
  };
  display2_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display2 = x$1
  };
  display3__AO() {
    return this.sci_VectorBuilder__f_display3
  };
  display3_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display3 = x$1
  };
  display4__AO() {
    return this.sci_VectorBuilder__f_display4
  };
  display4_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display4 = x$1
  };
  display5__AO() {
    return this.sci_VectorBuilder__f_display5
  };
  display5_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display5 = x$1
  };
  $plus$eq__O__sci_VectorBuilder(elem) {
    if ((this.sci_VectorBuilder__f_lo >= this.sci_VectorBuilder__f_display0.u.length)) {
      const newBlockIndex = ((32 + this.sci_VectorBuilder__f_blockIndex) | 0);
      const xor = (this.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V(this, newBlockIndex, xor);
      this.sci_VectorBuilder__f_blockIndex = newBlockIndex;
      this.sci_VectorBuilder__f_lo = 0
    };
    this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
    this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
    return this
  };
  result__sci_Vector() {
    const size = ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0);
    if ((size === 0)) {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    };
    const s = new $c_sci_Vector(0, size, 0);
    const depth = this.sci_VectorBuilder__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if ((this.sci_VectorBuilder__f_depth > 1)) {
      const xor = (((-1) + size) | 0);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
    };
    return s
  };
  result__O() {
    return this.result__sci_Vector()
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__sci_VectorBuilder(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__sci_VectorBuilder(elem)
  };
}
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
class $c_sci_VectorIterator extends $c_sc_AbstractIterator {
  constructor(_startIndex, endIndex) {
    super();
    this.sci_VectorIterator__f_endIndex = 0;
    this.sci_VectorIterator__f_blockIndex = 0;
    this.sci_VectorIterator__f_lo = 0;
    this.sci_VectorIterator__f_endLo = 0;
    this.sci_VectorIterator__f__hasNext = false;
    this.sci_VectorIterator__f_depth = 0;
    this.sci_VectorIterator__f_display0 = null;
    this.sci_VectorIterator__f_display1 = null;
    this.sci_VectorIterator__f_display2 = null;
    this.sci_VectorIterator__f_display3 = null;
    this.sci_VectorIterator__f_display4 = null;
    this.sci_VectorIterator__f_display5 = null;
    this.sci_VectorIterator__f_endIndex = endIndex;
    this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
    this.sci_VectorIterator__f_lo = (31 & _startIndex);
    const x = ((endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
    this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
    this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < endIndex)
  };
  depth__I() {
    return this.sci_VectorIterator__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorIterator__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorIterator__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display0 = x$1
  };
  display1__AO() {
    return this.sci_VectorIterator__f_display1
  };
  display1_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display1 = x$1
  };
  display2__AO() {
    return this.sci_VectorIterator__f_display2
  };
  display2_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display2 = x$1
  };
  display3__AO() {
    return this.sci_VectorIterator__f_display3
  };
  display3_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display3 = x$1
  };
  display4__AO() {
    return this.sci_VectorIterator__f_display4
  };
  display4_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display4 = x$1
  };
  display5__AO() {
    return this.sci_VectorIterator__f_display5
  };
  display5_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display5 = x$1
  };
  hasNext__Z() {
    return this.sci_VectorIterator__f__hasNext
  };
  next__O() {
    if ((!this.sci_VectorIterator__f__hasNext)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
    };
    const res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
    this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
    if ((this.sci_VectorIterator__f_lo === this.sci_VectorIterator__f_endLo)) {
      if ((((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)) {
        const newBlockIndex = ((32 + this.sci_VectorIterator__f_blockIndex) | 0);
        const xor = (this.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
        $f_sci_VectorPointer__gotoNextBlockStart__I__I__V(this, newBlockIndex, xor);
        this.sci_VectorIterator__f_blockIndex = newBlockIndex;
        const x = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
        this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
        this.sci_VectorIterator__f_lo = 0
      } else {
        this.sci_VectorIterator__f__hasNext = false
      }
    };
    return res
  };
}
const $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
class $c_scm_HashMap$ extends $c_scg_MutableMapFactory {
  constructor() {
    super();
    this.scm_HashMap$__f_ReusableCBF = null;
    $n_scm_HashMap$ = this;
    this.scm_HashMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
  };
  empty__sc_GenMap() {
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
  empty__sc_Map() {
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
}
const $d_scm_HashMap$ = new $TypeData().initClass({
  scm_HashMap$: 0
}, false, "scala.collection.mutable.HashMap$", {
  scm_HashMap$: 1,
  scg_MutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap$.prototype.$classData = $d_scm_HashMap$;
let $n_scm_HashMap$ = (void 0);
function $m_scm_HashMap$() {
  if ((!$n_scm_HashMap$)) {
    $n_scm_HashMap$ = new $c_scm_HashMap$()
  };
  return $n_scm_HashMap$
}
const $f_s_math_Ordering__gt__O__O__Z = (function($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) > 0)
});
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
const $f_s_reflect_ClassTag__newArray__I__O = (function($thiz, len) {
  const x1 = $thiz.runtimeClass__jl_Class();
  if ((x1 === $d_B.getClassOf())) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  } else if ((x1 === $d_S.getClassOf())) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  } else if ((x1 === $d_C.getClassOf())) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  } else if ((x1 === $d_I.getClassOf())) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  } else if ((x1 === $d_J.getClassOf())) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  } else if ((x1 === $d_F.getClassOf())) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  } else if ((x1 === $d_D.getClassOf())) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  } else if ((x1 === $d_Z.getClassOf())) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  } else if ((x1 === $d_V.getClassOf())) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  } else {
    const componentType = $thiz.runtimeClass__jl_Class();
    return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
  }
});
const $f_s_reflect_ClassTag__equals__O__Z = (function($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
});
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
class $c_s_util_Failure extends $c_s_util_Try {
  constructor(exception) {
    super();
    this.s_util_Failure__f_exception = null;
    this.s_util_Failure__f_exception = exception
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  productPrefix__T() {
    return "Failure"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_util_Failure__f_exception
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Failure)) {
      const Failure$1 = $as_s_util_Failure(x$1);
      const x = this.s_util_Failure__f_exception;
      const x$2 = Failure$1.s_util_Failure__f_exception;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  };
}
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"))
}
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)))
}
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth))
}
const $d_s_util_Failure = new $TypeData().initClass({
  s_util_Failure: 0
}, false, "scala.util.Failure", {
  s_util_Failure: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Failure.prototype.$classData = $d_s_util_Failure;
class $c_s_util_Left extends $c_s_util_Either {
  constructor(value) {
    super();
    this.s_util_Left__f_value = null;
    this.s_util_Left__f_value = value
  };
  productPrefix__T() {
    return "Left"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_util_Left__f_value
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Left)) {
      const Left$1 = $as_s_util_Left(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Left__f_value, Left$1.s_util_Left__f_value)
    } else {
      return false
    }
  };
}
function $as_s_util_Left(obj) {
  return (((obj instanceof $c_s_util_Left) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Left"))
}
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Left)))
}
function $asArrayOf_s_util_Left(obj, depth) {
  return (($isArrayOf_s_util_Left(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Left;", depth))
}
const $d_s_util_Left = new $TypeData().initClass({
  s_util_Left: 0
}, false, "scala.util.Left", {
  s_util_Left: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left.prototype.$classData = $d_s_util_Left;
class $c_s_util_Right extends $c_s_util_Either {
  constructor(value) {
    super();
    this.s_util_Right__f_value = null;
    this.s_util_Right__f_value = value
  };
  productPrefix__T() {
    return "Right"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_util_Right__f_value
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Right)) {
      const Right$1 = $as_s_util_Right(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Right__f_value, Right$1.s_util_Right__f_value)
    } else {
      return false
    }
  };
}
function $as_s_util_Right(obj) {
  return (((obj instanceof $c_s_util_Right) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Right"))
}
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Right)))
}
function $asArrayOf_s_util_Right(obj, depth) {
  return (($isArrayOf_s_util_Right(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Right;", depth))
}
const $d_s_util_Right = new $TypeData().initClass({
  s_util_Right: 0
}, false, "scala.util.Right", {
  s_util_Right: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right.prototype.$classData = $d_s_util_Right;
class $c_s_util_Success extends $c_s_util_Try {
  constructor(value) {
    super();
    this.s_util_Success__f_value = null;
    this.s_util_Success__f_value = value
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.s_util_Success__f_value)
  };
  productPrefix__T() {
    return "Success"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.s_util_Success__f_value
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Success)) {
      const Success$1 = $as_s_util_Success(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, Success$1.s_util_Success__f_value)
    } else {
      return false
    }
  };
}
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"))
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)))
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth))
}
const $d_s_util_Success = new $TypeData().initClass({
  s_util_Success: 0
}, false, "scala.util.Success", {
  s_util_Success: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Success.prototype.$classData = $d_s_util_Success;
const $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ = (function($thiz, _out, autoFlush, charset) {
  $thiz.Ljava_io_PrintStream__f_autoFlush = autoFlush;
  $thiz.Ljava_io_PrintStream__f_charset = charset;
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  $thiz.Ljava_io_PrintStream__f_closing = false;
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  $thiz.Ljava_io_PrintStream__f_errorFlag = false;
  return $thiz
});
class $c_Ljava_io_PrintStream extends $c_Ljava_io_FilterOutputStream {
  constructor() {
    super();
    this.Ljava_io_PrintStream__f_encoder = null;
    this.Ljava_io_PrintStream__f_autoFlush = false;
    this.Ljava_io_PrintStream__f_charset = null;
    this.Ljava_io_PrintStream__f_closing = false;
    this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
    this.Ljava_io_PrintStream__f_errorFlag = false;
    this.Ljava_io_PrintStream__f_bitmap$0 = false
  };
  println__T__V(s) {
    this.print__T__V(s);
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n")
  };
}
const $p_sc_GenSetLike__liftedTree1$1__sc_GenSet__Z = (function($thiz, x2$1) {
  try {
    return $thiz.subsetOf__sc_GenSet__Z(x2$1)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
});
const $f_sc_GenSetLike__equals__O__Z = (function($thiz, that) {
  if ($is_sc_GenSet(that)) {
    const x2 = $as_sc_GenSet(that);
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $p_sc_GenSetLike__liftedTree1$1__sc_GenSet__Z($thiz, x2)))
  } else {
    return false
  }
});
function $is_sc_GenSetLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSetLike)))
}
function $as_sc_GenSetLike(obj) {
  return (($is_sc_GenSetLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSetLike"))
}
function $isArrayOf_sc_GenSetLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSetLike)))
}
function $asArrayOf_sc_GenSetLike(obj, depth) {
  return (($isArrayOf_sc_GenSetLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSetLike;", depth))
}
class $c_sc_Seq$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    $m_sci_Seq$();
    return new $c_scm_ListBuffer()
  };
}
const $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
let $n_sc_Seq$ = (void 0);
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
const $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O = (function($thiz, bf$1, that$1) {
  const b = bf$1.apply__O__scm_Builder($thiz.repr__O());
  if ($is_sc_IndexedSeqLike(that$1)) {
    const delta = that$1.seq__sc_TraversableOnce().size__I();
    $f_scm_Builder__sizeHint__sc_TraversableLike__I__V(b, $thiz, delta)
  };
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.thisCollection__sc_Traversable());
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(that$1.seq__sc_TraversableOnce());
  return b.result__O()
});
const $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder = (function($thiz, bf$3) {
  const b = bf$3.apply__O__scm_Builder($thiz.repr__O());
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  return b
});
const $p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z = (function($thiz, fqn$1, partStart$1) {
  const firstChar = (65535 & $uI(fqn$1.charCodeAt(partStart$1)));
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
});
const $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function($thiz, that, bf) {
  if ((bf === $m_sci_Set$().sci_Set$__f_ReusableCBF)) {
    if ($is_sci_Set($thiz)) {
      const x2 = $as_sci_Set($thiz);
      if ($is_sc_GenSet(that)) {
        return x2.union__sc_GenSet__sc_Set($as_sc_GenSet(that))
      }
    };
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  } else if ((bf === $m_sci_HashSet$().sci_HashSet$__f_ReusableCBF)) {
    if (($thiz instanceof $c_sci_HashSet)) {
      const x2$2 = $as_sci_HashSet($thiz);
      if ($is_sc_GenSet(that)) {
        return x2$2.union__sc_GenSet__sci_HashSet($as_sc_GenSet(that))
      }
    };
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  } else {
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  }
});
const $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O = (function($thiz, f, bf) {
  const b = bf.apply__O__scm_Builder($thiz.repr__O());
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, b$1, f$1) => ((x$2) => $as_scm_Builder(b$1.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(f$1.apply__O__O(x$2)).seq__sc_TraversableOnce()))))($thiz, b, f)));
  return b.result__O()
});
const $f_sc_TraversableLike__toString__T = (function($thiz) {
  return $thiz.mkString__T__T__T__T(($thiz.stringPrefix__T() + "("), ", ", ")")
});
const $f_sc_TraversableLike__stringPrefix__T = (function($thiz) {
  const this$1 = $thiz.repr__O();
  const fqn = $objectClassName(this$1);
  let pos = (((-1) + $uI(fqn.length)) | 0);
  while (true) {
    let $$x1;
    if ((pos !== (-1))) {
      const index = pos;
      $$x1 = ((65535 & $uI(fqn.charCodeAt(index))) === 36)
    } else {
      $$x1 = false
    };
    if ($$x1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  let $$x2;
  if ((pos === (-1))) {
    $$x2 = true
  } else {
    const index$1 = pos;
    $$x2 = ((65535 & $uI(fqn.charCodeAt(index$1))) === 46)
  };
  if ($$x2) {
    return ""
  };
  let result = "";
  while (true) {
    const partEnd = ((1 + pos) | 0);
    while (true) {
      let $$x4;
      if ((pos !== (-1))) {
        const index$2 = pos;
        $$x4 = ((65535 & $uI(fqn.charCodeAt(index$2))) <= 57)
      } else {
        $$x4 = false
      };
      let $$x3;
      if ($$x4) {
        const index$3 = pos;
        $$x3 = ((65535 & $uI(fqn.charCodeAt(index$3))) >= 48)
      } else {
        $$x3 = false
      };
      if ($$x3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const lastNonDigit = pos;
    while (true) {
      let $$x6;
      if ((pos !== (-1))) {
        const index$4 = pos;
        $$x6 = ((65535 & $uI(fqn.charCodeAt(index$4))) !== 36)
      } else {
        $$x6 = false
      };
      let $$x5;
      if ($$x6) {
        const index$5 = pos;
        $$x5 = ((65535 & $uI(fqn.charCodeAt(index$5))) !== 46)
      } else {
        $$x5 = false
      };
      if ($$x5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== $uI(fqn.length)))) {
      return result
    };
    while (true) {
      let $$x7;
      if ((pos !== (-1))) {
        const index$6 = pos;
        $$x7 = ((65535 & $uI(fqn.charCodeAt(index$6))) === 36)
      } else {
        $$x7 = false
      };
      if ($$x7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    let atEnd;
    if ((pos === (-1))) {
      atEnd = true
    } else {
      const index$7 = pos;
      atEnd = ((65535 & $uI(fqn.charCodeAt(index$7))) === 46)
    };
    if ((atEnd || (!$p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn, partStart)))) {
      const part = $as_T(fqn.substring(partStart, partEnd));
      const this$2 = result;
      if ((this$2 === "")) {
        result = part
      } else {
        result = ((part + ".") + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
});
class $c_scg_IndexedSeqFactory extends $c_scg_SeqFactory {
}
class $c_sci_HashMap$ extends $c_scg_ImmutableMapFactory {
  constructor() {
    super();
    this.sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger = null;
    this.sci_HashMap$__f_ReusableCBF = null;
    $n_sci_HashMap$ = this;
    this.sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger = new $c_sci_HashMap$$anon$1();
    this.sci_HashMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
  };
  scala$collection$immutable$HashMap$$liftMerger__F2__sci_HashMap$Merger(mergef) {
    return ((mergef === null) ? this.sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger : new $c_sci_HashMap$$anon$3(mergef))
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashMap$HashMapBuilder()
  };
  scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, level, size) {
    const index0 = (31 & ((hash0 >>> level) | 0));
    const index1 = (31 & ((hash1 >>> level) | 0));
    if ((index0 !== index1)) {
      const bitmap = ((1 << index0) | (1 << index1));
      const elems = $newArrayObject($d_sci_HashMap.getArrayOf(), [2]);
      if ((index0 < index1)) {
        elems.set(0, elem0);
        elems.set(1, elem1)
      } else {
        elems.set(0, elem1);
        elems.set(1, elem0)
      };
      return new $c_sci_HashMap$HashTrieMap(bitmap, elems, size)
    } else {
      const elems$2 = $newArrayObject($d_sci_HashMap.getArrayOf(), [1]);
      const bitmap$2 = (1 << index0);
      elems$2.set(0, this.scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, ((5 + level) | 0), size));
      return new $c_sci_HashMap$HashTrieMap(bitmap$2, elems$2, size)
    }
  };
  empty__sc_GenMap() {
    return $m_sci_HashMap$EmptyHashMap$()
  };
}
const $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  scg_BitOperations$Int: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
let $n_sci_HashMap$ = (void 0);
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
class $c_sci_Seq$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
}
const $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
let $n_sci_Seq$ = (void 0);
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
class $c_scm_ArrayBuilder extends $c_O {
}
class $c_scm_IndexedSeq$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
const $f_s_math_Ordering$DoubleOrdering__gt__D__D__Z = (function($thiz, x, y) {
  return (x > y)
});
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  newArray__I__O(len) {
    return $f_s_reflect_ClassTag__newArray__I__O(this, len)
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
class $c_sjs_js_WrappedArray$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
const $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V = (function($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    let $$x1;
    if ($thiz.jl_JSConsoleBasedPrintStream__f_isErr) {
      const x = console.error;
      $$x1 = $uZ((!(!x)))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
});
class $c_jl_JSConsoleBasedPrintStream extends $c_Ljava_io_PrintStream {
  constructor(isErr) {
    super();
    this.jl_JSConsoleBasedPrintStream__f_isErr = false;
    this.jl_JSConsoleBasedPrintStream__f_flushed = false;
    this.jl_JSConsoleBasedPrintStream__f_buffer = null;
    this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
    const out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
    $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
    this.jl_JSConsoleBasedPrintStream__f_flushed = true;
    this.jl_JSConsoleBasedPrintStream__f_buffer = ""
  };
  print__T__V(s) {
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s))
  };
  java$lang$JSConsoleBasedPrintStream$$printString__T__V(s) {
    let rest = s;
    while ((rest !== "")) {
      const this$1 = rest;
      const nlPos = $uI(this$1.indexOf("\n"));
      if ((nlPos < 0)) {
        this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
        this.jl_JSConsoleBasedPrintStream__f_flushed = false;
        rest = ""
      } else {
        const $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
        const this$3 = rest;
        $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$3.substring(0, nlPos))));
        this.jl_JSConsoleBasedPrintStream__f_buffer = "";
        this.jl_JSConsoleBasedPrintStream__f_flushed = true;
        const this$4 = rest;
        const beginIndex = ((1 + nlPos) | 0);
        rest = $as_T(this$4.substring(beginIndex))
      }
    }
  };
}
const $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
class $c_T2$mcDI$sp extends $c_T2 {
  constructor(_1$mcD$sp, _2$mcI$sp) {
    super();
    this.T2$mcDI$sp__f__1$mcD$sp = 0.0;
    this.T2$mcDI$sp__f__2$mcI$sp = 0;
    this.T2$mcDI$sp__f__1$mcD$sp = _1$mcD$sp;
    this.T2$mcDI$sp__f__2$mcI$sp = _2$mcI$sp;
    $ct_T2__O__O__(this, null, null)
  };
  _1$mcD$sp__D() {
    return this.T2$mcDI$sp__f__1$mcD$sp
  };
  _2$mcI$sp__I() {
    return this.T2$mcDI$sp__f__2$mcI$sp
  };
  _2__O() {
    return this.T2$mcDI$sp__f__2$mcI$sp
  };
  _1__O() {
    return this.T2$mcDI$sp__f__1$mcD$sp
  };
}
const $d_T2$mcDI$sp = new $TypeData().initClass({
  T2$mcDI$sp: 0
}, false, "scala.Tuple2$mcDI$sp", {
  T2$mcDI$sp: 1,
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Product2$mcDI$sp: 1
});
$c_T2$mcDI$sp.prototype.$classData = $d_T2$mcDI$sp;
class $c_T2$mcII$sp extends $c_T2 {
  constructor(_1$mcI$sp, _2$mcI$sp) {
    super();
    this.T2$mcII$sp__f__1$mcI$sp = 0;
    this.T2$mcII$sp__f__2$mcI$sp = 0;
    this.T2$mcII$sp__f__1$mcI$sp = _1$mcI$sp;
    this.T2$mcII$sp__f__2$mcI$sp = _2$mcI$sp;
    $ct_T2__O__O__(this, null, null)
  };
  _1$mcI$sp__I() {
    return this.T2$mcII$sp__f__1$mcI$sp
  };
  _2$mcI$sp__I() {
    return this.T2$mcII$sp__f__2$mcI$sp
  };
  _2__O() {
    return this.T2$mcII$sp__f__2$mcI$sp
  };
  _1__O() {
    return this.T2$mcII$sp__f__1$mcI$sp
  };
}
const $d_T2$mcII$sp = new $TypeData().initClass({
  T2$mcII$sp: 0
}, false, "scala.Tuple2$mcII$sp", {
  T2$mcII$sp: 1,
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Product2$mcII$sp: 1
});
$c_T2$mcII$sp.prototype.$classData = $d_T2$mcII$sp;
class $c_sc_IndexedSeq$ extends $c_scg_IndexedSeqFactory {
  constructor() {
    super();
    this.sc_IndexedSeq$__f_ReusableCBF = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sc_IndexedSeq$ = this;
    this.sc_IndexedSeq$__f_ReusableCBF = new $c_sc_IndexedSeq$$anon$1()
  };
  newBuilder__scm_Builder() {
    $m_sci_IndexedSeq$();
    $m_sci_Vector$();
    return new $c_sci_VectorBuilder()
  };
}
const $d_sc_IndexedSeq$ = new $TypeData().initClass({
  sc_IndexedSeq$: 0
}, false, "scala.collection.IndexedSeq$", {
  sc_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_IndexedSeq$.prototype.$classData = $d_sc_IndexedSeq$;
let $n_sc_IndexedSeq$ = (void 0);
function $m_sc_IndexedSeq$() {
  if ((!$n_sc_IndexedSeq$)) {
    $n_sc_IndexedSeq$ = new $c_sc_IndexedSeq$()
  };
  return $n_sc_IndexedSeq$
}
class $c_sc_IndexedSeqLike$Elements extends $c_sc_AbstractIterator {
  constructor(outer, start, end) {
    super();
    this.sc_IndexedSeqLike$Elements__f_end = 0;
    this.sc_IndexedSeqLike$Elements__f_index = 0;
    this.sc_IndexedSeqLike$Elements__f_$outer = null;
    this.sc_IndexedSeqLike$Elements__f_end = end;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_IndexedSeqLike$Elements__f_$outer = outer
    };
    this.sc_IndexedSeqLike$Elements__f_index = start
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqLike$Elements__f_index < this.sc_IndexedSeqLike$Elements__f_end)
  };
  next__O() {
    if ((this.sc_IndexedSeqLike$Elements__f_index >= this.sc_IndexedSeqLike$Elements__f_end)) {
      $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
    };
    const x = this.sc_IndexedSeqLike$Elements__f_$outer.apply__I__O(this.sc_IndexedSeqLike$Elements__f_index);
    this.sc_IndexedSeqLike$Elements__f_index = ((1 + this.sc_IndexedSeqLike$Elements__f_index) | 0);
    return x
  };
}
const $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
class $c_sci_HashSet$ extends $c_scg_ImmutableSetFactory {
  constructor() {
    super();
    this.sci_HashSet$__f_ReusableCBF = null;
    $n_sci_HashSet$ = this;
    this.sci_HashSet$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashSet$$anon$1()
  };
  scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, level, newSize) {
    const index0 = (31 & ((hash0 >>> level) | 0));
    const index1 = (31 & ((hash1 >>> level) | 0));
    if ((index0 !== index1)) {
      const bitmap = ((1 << index0) | (1 << index1));
      const elems = $newArrayObject($d_sci_HashSet.getArrayOf(), [2]);
      if ((index0 < index1)) {
        elems.set(0, elem0);
        elems.set(1, elem1)
      } else {
        elems.set(0, elem1);
        elems.set(1, elem0)
      };
      return new $c_sci_HashSet$HashTrieSet(bitmap, elems, newSize)
    } else {
      const bitmap$2 = (1 << index0);
      const child = this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, ((5 + level) | 0), newSize);
      const elems$2 = $newArrayObject($d_sci_HashSet.getArrayOf(), [1]);
      elems$2.set(0, child);
      return new $c_sci_HashSet$HashTrieSet(bitmap$2, elems$2, newSize)
    }
  };
  emptyInstance__sci_Set() {
    return $m_sci_HashSet$EmptyHashSet$()
  };
}
const $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
let $n_sci_HashSet$ = (void 0);
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
class $c_sci_IndexedSeq$ extends $c_scg_IndexedSeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    $m_sci_Vector$();
    return new $c_sci_VectorBuilder()
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_ListSet$ extends $c_scg_ImmutableSetFactory {
  constructor() {
    super();
    this.sci_ListSet$__f_ReusableCBF = null;
    $n_sci_ListSet$ = this;
    this.sci_ListSet$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
  };
  emptyInstance__sci_Set() {
    return $m_sci_ListSet$EmptyListSet$()
  };
}
const $d_sci_ListSet$ = new $TypeData().initClass({
  sci_ListSet$: 0
}, false, "scala.collection.immutable.ListSet$", {
  sci_ListSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$.prototype.$classData = $d_sci_ListSet$;
let $n_sci_ListSet$ = (void 0);
function $m_sci_ListSet$() {
  if ((!$n_sci_ListSet$)) {
    $n_sci_ListSet$ = new $c_sci_ListSet$()
  };
  return $n_sci_ListSet$
}
const $p_scm_ArrayBuilder$ofInt__mkArray__I__AI = (function($thiz, size) {
  const newelems = $newArrayObject($d_I.getArrayOf(), [size]);
  if (($thiz.scm_ArrayBuilder$ofInt__f_size > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuilder$ofInt__f_elems, 0, newelems, 0, $thiz.scm_ArrayBuilder$ofInt__f_size)
  };
  return newelems
});
const $p_scm_ArrayBuilder$ofInt__resize__I__V = (function($thiz, size) {
  $thiz.scm_ArrayBuilder$ofInt__f_elems = $p_scm_ArrayBuilder$ofInt__mkArray__I__AI($thiz, size);
  $thiz.scm_ArrayBuilder$ofInt__f_capacity = size
});
const $p_scm_ArrayBuilder$ofInt__ensureSize__I__V = (function($thiz, size) {
  if ((($thiz.scm_ArrayBuilder$ofInt__f_capacity < size) || ($thiz.scm_ArrayBuilder$ofInt__f_capacity === 0))) {
    let newsize = (($thiz.scm_ArrayBuilder$ofInt__f_capacity === 0) ? 16 : ($thiz.scm_ArrayBuilder$ofInt__f_capacity << 1));
    while ((newsize < size)) {
      newsize = (newsize << 1)
    };
    $p_scm_ArrayBuilder$ofInt__resize__I__V($thiz, newsize)
  }
});
class $c_scm_ArrayBuilder$ofInt extends $c_scm_ArrayBuilder {
  constructor() {
    super();
    this.scm_ArrayBuilder$ofInt__f_elems = null;
    this.scm_ArrayBuilder$ofInt__f_capacity = 0;
    this.scm_ArrayBuilder$ofInt__f_size = 0;
    this.scm_ArrayBuilder$ofInt__f_capacity = 0;
    this.scm_ArrayBuilder$ofInt__f_size = 0
  };
  sizeHint__I__V(size) {
    if ((this.scm_ArrayBuilder$ofInt__f_capacity < size)) {
      $p_scm_ArrayBuilder$ofInt__resize__I__V(this, size)
    }
  };
  $plus$eq__I__scm_ArrayBuilder$ofInt(elem) {
    $p_scm_ArrayBuilder$ofInt__ensureSize__I__V(this, ((1 + this.scm_ArrayBuilder$ofInt__f_size) | 0));
    this.scm_ArrayBuilder$ofInt__f_elems.set(this.scm_ArrayBuilder$ofInt__f_size, elem);
    this.scm_ArrayBuilder$ofInt__f_size = ((1 + this.scm_ArrayBuilder$ofInt__f_size) | 0);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scm_ArrayBuilder$ofInt(xs) {
    if ((xs instanceof $c_scm_WrappedArray$ofInt)) {
      const x2 = $as_scm_WrappedArray$ofInt(xs);
      $p_scm_ArrayBuilder$ofInt__ensureSize__I__V(this, ((this.scm_ArrayBuilder$ofInt__f_size + x2.length__I()) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_WrappedArray$ofInt__f_array, 0, this.scm_ArrayBuilder$ofInt__f_elems, this.scm_ArrayBuilder$ofInt__f_size, x2.length__I());
      this.scm_ArrayBuilder$ofInt__f_size = ((this.scm_ArrayBuilder$ofInt__f_size + x2.length__I()) | 0);
      return this
    } else {
      return $as_scm_ArrayBuilder$ofInt($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
    }
  };
  result__AI() {
    if (((this.scm_ArrayBuilder$ofInt__f_capacity !== 0) && (this.scm_ArrayBuilder$ofInt__f_capacity === this.scm_ArrayBuilder$ofInt__f_size))) {
      this.scm_ArrayBuilder$ofInt__f_capacity = 0;
      return this.scm_ArrayBuilder$ofInt__f_elems
    } else {
      return $p_scm_ArrayBuilder$ofInt__mkArray__I__AI(this, this.scm_ArrayBuilder$ofInt__f_size)
    }
  };
  equals__O__Z(other) {
    if ((other instanceof $c_scm_ArrayBuilder$ofInt)) {
      const x2 = $as_scm_ArrayBuilder$ofInt(other);
      return ((this.scm_ArrayBuilder$ofInt__f_size === x2.scm_ArrayBuilder$ofInt__f_size) && (this.scm_ArrayBuilder$ofInt__f_elems === x2.scm_ArrayBuilder$ofInt__f_elems))
    } else {
      return false
    }
  };
  toString__T() {
    return "ArrayBuilder.ofInt"
  };
  result__O() {
    return this.result__AI()
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuilder$ofInt(xs)
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__I__scm_ArrayBuilder$ofInt($uI(elem))
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__I__scm_ArrayBuilder$ofInt($uI(elem))
  };
}
function $as_scm_ArrayBuilder$ofInt(obj) {
  return (((obj instanceof $c_scm_ArrayBuilder$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofInt"))
}
function $isArrayOf_scm_ArrayBuilder$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuilder$ofInt)))
}
function $asArrayOf_scm_ArrayBuilder$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArrayBuilder$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofInt;", depth))
}
const $d_scm_ArrayBuilder$ofInt = new $TypeData().initClass({
  scm_ArrayBuilder$ofInt: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofInt", {
  scm_ArrayBuilder$ofInt: 1,
  scm_ArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuilder$ofInt.prototype.$classData = $d_scm_ArrayBuilder$ofInt;
const $p_scm_ArrayBuilder$ofRef__mkArray__I__AO = (function($thiz, size) {
  const newelems = $asArrayOf_O($thiz.scm_ArrayBuilder$ofRef__f_evidence$2.newArray__I__O(size), 1);
  if (($thiz.scm_ArrayBuilder$ofRef__f_size > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuilder$ofRef__f_elems, 0, newelems, 0, $thiz.scm_ArrayBuilder$ofRef__f_size)
  };
  return newelems
});
const $p_scm_ArrayBuilder$ofRef__resize__I__V = (function($thiz, size) {
  $thiz.scm_ArrayBuilder$ofRef__f_elems = $p_scm_ArrayBuilder$ofRef__mkArray__I__AO($thiz, size);
  $thiz.scm_ArrayBuilder$ofRef__f_capacity = size
});
const $p_scm_ArrayBuilder$ofRef__ensureSize__I__V = (function($thiz, size) {
  if ((($thiz.scm_ArrayBuilder$ofRef__f_capacity < size) || ($thiz.scm_ArrayBuilder$ofRef__f_capacity === 0))) {
    let newsize = (($thiz.scm_ArrayBuilder$ofRef__f_capacity === 0) ? 16 : ($thiz.scm_ArrayBuilder$ofRef__f_capacity << 1));
    while ((newsize < size)) {
      newsize = (newsize << 1)
    };
    $p_scm_ArrayBuilder$ofRef__resize__I__V($thiz, newsize)
  }
});
class $c_scm_ArrayBuilder$ofRef extends $c_scm_ArrayBuilder {
  constructor(evidence$2) {
    super();
    this.scm_ArrayBuilder$ofRef__f_evidence$2 = null;
    this.scm_ArrayBuilder$ofRef__f_elems = null;
    this.scm_ArrayBuilder$ofRef__f_capacity = 0;
    this.scm_ArrayBuilder$ofRef__f_size = 0;
    this.scm_ArrayBuilder$ofRef__f_evidence$2 = evidence$2;
    this.scm_ArrayBuilder$ofRef__f_capacity = 0;
    this.scm_ArrayBuilder$ofRef__f_size = 0
  };
  sizeHint__I__V(size) {
    if ((this.scm_ArrayBuilder$ofRef__f_capacity < size)) {
      $p_scm_ArrayBuilder$ofRef__resize__I__V(this, size)
    }
  };
  $plus$eq__O__scm_ArrayBuilder$ofRef(elem) {
    $p_scm_ArrayBuilder$ofRef__ensureSize__I__V(this, ((1 + this.scm_ArrayBuilder$ofRef__f_size) | 0));
    this.scm_ArrayBuilder$ofRef__f_elems.set(this.scm_ArrayBuilder$ofRef__f_size, elem);
    this.scm_ArrayBuilder$ofRef__f_size = ((1 + this.scm_ArrayBuilder$ofRef__f_size) | 0);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scm_ArrayBuilder$ofRef(xs) {
    if ((xs instanceof $c_scm_WrappedArray$ofRef)) {
      const x2 = $as_scm_WrappedArray$ofRef(xs);
      $p_scm_ArrayBuilder$ofRef__ensureSize__I__V(this, ((this.scm_ArrayBuilder$ofRef__f_size + x2.length__I()) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_WrappedArray$ofRef__f_array, 0, this.scm_ArrayBuilder$ofRef__f_elems, this.scm_ArrayBuilder$ofRef__f_size, x2.length__I());
      this.scm_ArrayBuilder$ofRef__f_size = ((this.scm_ArrayBuilder$ofRef__f_size + x2.length__I()) | 0);
      return this
    } else {
      return $as_scm_ArrayBuilder$ofRef($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
    }
  };
  result__AO() {
    if (((this.scm_ArrayBuilder$ofRef__f_capacity !== 0) && (this.scm_ArrayBuilder$ofRef__f_capacity === this.scm_ArrayBuilder$ofRef__f_size))) {
      this.scm_ArrayBuilder$ofRef__f_capacity = 0;
      return this.scm_ArrayBuilder$ofRef__f_elems
    } else {
      return $p_scm_ArrayBuilder$ofRef__mkArray__I__AO(this, this.scm_ArrayBuilder$ofRef__f_size)
    }
  };
  equals__O__Z(other) {
    if ((other instanceof $c_scm_ArrayBuilder$ofRef)) {
      const x2 = $as_scm_ArrayBuilder$ofRef(other);
      return ((this.scm_ArrayBuilder$ofRef__f_size === x2.scm_ArrayBuilder$ofRef__f_size) && (this.scm_ArrayBuilder$ofRef__f_elems === x2.scm_ArrayBuilder$ofRef__f_elems))
    } else {
      return false
    }
  };
  toString__T() {
    return "ArrayBuilder.ofRef"
  };
  result__O() {
    return this.result__AO()
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuilder$ofRef(xs)
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_ArrayBuilder$ofRef(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_ArrayBuilder$ofRef(elem)
  };
}
function $as_scm_ArrayBuilder$ofRef(obj) {
  return (((obj instanceof $c_scm_ArrayBuilder$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofRef"))
}
function $isArrayOf_scm_ArrayBuilder$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuilder$ofRef)))
}
function $asArrayOf_scm_ArrayBuilder$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArrayBuilder$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofRef;", depth))
}
const $d_scm_ArrayBuilder$ofRef = new $TypeData().initClass({
  scm_ArrayBuilder$ofRef: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofRef", {
  scm_ArrayBuilder$ofRef: 1,
  scm_ArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuilder$ofRef.prototype.$classData = $d_scm_ArrayBuilder$ofRef;
const $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise = (function($thiz) {
  const x1 = $thiz.ju_concurrent_atomic_AtomicReference__f_value;
  if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
    const x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
    return $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise($thiz, x2)
  } else {
    return $thiz
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise = (function($thiz, linked) {
  while (true) {
    const target = $p_s_concurrent_impl_Promise$DefaultPromise__root__s_concurrent_impl_Promise$DefaultPromise(linked);
    if ((linked === target)) {
      return target
    } else if ($thiz.compareAndSet__O__O__Z(linked, target)) {
      return target
    } else {
      const x1 = $thiz.ju_concurrent_atomic_AtomicReference__f_value;
      if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        const x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
        linked = x2
      } else {
        return $thiz
      }
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__root__s_concurrent_impl_Promise$DefaultPromise = (function($thiz) {
  let _$this = $thiz;
  while (true) {
    const x1 = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      const x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = x2
    } else {
      return _$this
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_Option = (function($thiz) {
  let _$this = $thiz;
  while (true) {
    const x1 = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $c_s_util_Try)) {
      const x2 = $as_s_util_Try(x1);
      return new $c_s_Some(x2)
    } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      const x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this, x3)
    } else {
      return $m_s_None$()
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__tryCompleteAndGetListeners__s_util_Try__sci_List = (function($thiz, v) {
  let _$this = $thiz;
  while (true) {
    const x1 = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $c_sci_List)) {
      const x2 = $as_sci_List(x1);
      if (_$this.compareAndSet__O__O__Z(x2, v)) {
        return x2
      }
    } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      const x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this, x3)
    } else {
      return null
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallback__s_concurrent_impl_CallbackRunnable__V = (function($thiz, runnable) {
  let _$this = $thiz;
  while (true) {
    const x1 = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $c_s_util_Try)) {
      const x2 = $as_s_util_Try(x1);
      runnable.executeWithValue__s_util_Try__V(x2)
    } else {
      if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        const x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
        _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this, x3);
        continue
      };
      if ((!(x1 instanceof $c_sci_List))) {
        throw new $c_s_MatchError(x1)
      };
      const x4 = $as_sci_List(x1);
      if ((!_$this.compareAndSet__O__O__Z(x4, new $c_sci_$colon$colon(runnable, x4)))) {
        continue
      }
    };
    break
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__link__s_concurrent_impl_Promise$DefaultPromise__V = (function($thiz, target) {
  let _$this = $thiz;
  while (true) {
    if ((_$this !== target)) {
      const x1 = _$this.ju_concurrent_atomic_AtomicReference__f_value;
      matchEnd6: {
        if ((x1 instanceof $c_s_util_Try)) {
          const x2 = $as_s_util_Try(x1);
          if ((!target.tryComplete__s_util_Try__Z(x2))) {
            throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Cannot link completed promises together")
          };
          break matchEnd6
        };
        if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          const x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
          _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this, x3);
          continue
        };
        if ((x1 instanceof $c_sci_List)) {
          const x4 = $as_sci_List(x1);
          if (_$this.compareAndSet__O__O__Z(x4, target)) {
            if ((!x4.isEmpty__Z())) {
              let these = x4;
              while ((!these.isEmpty__Z())) {
                const arg1 = these.head__O();
                const x$2 = $as_s_concurrent_impl_CallbackRunnable(arg1);
                $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallback__s_concurrent_impl_CallbackRunnable__V(target, x$2);
                const this$2 = these;
                these = this$2.tail__sci_List()
              };
              break matchEnd6
            } else {
              break matchEnd6
            }
          }
        };
        continue
      }
    };
    break
  }
});
class $c_s_concurrent_impl_Promise$DefaultPromise extends $c_ju_concurrent_atomic_AtomicReference {
  constructor() {
    super();
    $ct_ju_concurrent_atomic_AtomicReference__O__(this, $m_sci_Nil$())
  };
  toString__T() {
    return $f_s_concurrent_impl_Promise__toString__T(this)
  };
  tryComplete__s_util_Try__Z(value) {
    const resolved = $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolveTry__s_util_Try__s_util_Try(value);
    const x1 = $p_s_concurrent_impl_Promise$DefaultPromise__tryCompleteAndGetListeners__s_util_Try__sci_List(this, resolved);
    if ((x1 !== null)) {
      if (x1.isEmpty__Z()) {
        return true
      } else {
        let these = x1;
        while ((!these.isEmpty__Z())) {
          const arg1 = these.head__O();
          const r = $as_s_concurrent_impl_CallbackRunnable(arg1);
          r.executeWithValue__s_util_Try__V(resolved);
          const this$1 = these;
          these = this$1.tail__sci_List()
        };
        return true
      }
    } else {
      return false
    }
  };
  onComplete__F1__s_concurrent_ExecutionContext__V(func, executor) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallback__s_concurrent_impl_CallbackRunnable__V(this, new $c_s_concurrent_impl_CallbackRunnable(executor, func))
  };
}
function $as_s_concurrent_impl_Promise$DefaultPromise(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$DefaultPromise) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise"))
}
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$DefaultPromise)))
}
function $asArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$DefaultPromise;", depth))
}
const $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().initClass({
  s_concurrent_impl_Promise$DefaultPromise: 0
}, false, "scala.concurrent.impl.Promise$DefaultPromise", {
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_impl_Promise: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.$classData = $d_s_concurrent_impl_Promise$DefaultPromise;
const $f_s_math_Numeric$DoubleIsConflicted__plus__D__D__D = (function($thiz, x, y) {
  return (x + y)
});
class $c_s_math_Ordering$Double$ extends $c_O {
  gt__O__O__Z(x, y) {
    const x$1 = $uD(x);
    const y$1 = $uD(y);
    return $f_s_math_Ordering$DoubleOrdering__gt__D__D__Z(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uD(x);
    const y$1 = $uD(y);
    return $m_jl_Double$().compare__D__D__I(x$1, y$1)
  };
}
const $d_s_math_Ordering$Double$ = new $TypeData().initClass({
  s_math_Ordering$Double$: 0
}, false, "scala.math.Ordering$Double$", {
  s_math_Ordering$Double$: 1,
  O: 1,
  s_math_Ordering$DoubleOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Double$.prototype.$classData = $d_s_math_Ordering$Double$;
let $n_s_math_Ordering$Double$ = (void 0);
function $m_s_math_Ordering$Double$() {
  if ((!$n_s_math_Ordering$Double$)) {
    $n_s_math_Ordering$Double$ = new $c_s_math_Ordering$Double$()
  };
  return $n_s_math_Ordering$Double$
}
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.sjs_js_JavaScriptException__f_exception
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
class $c_sci_List$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
  empty__sc_GenTraversable() {
    return $m_sci_Nil$()
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
class $c_sci_Stream$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    this.sci_Stream$__f_ReusableCBF = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sci_Stream$ = this;
    this.sci_Stream$__f_ReusableCBF = new $c_sci_Stream$StreamCanBuildFrom()
  };
  newBuilder__scm_Builder() {
    return new $c_sci_Stream$StreamBuilder()
  };
  empty__sc_GenTraversable() {
    return $m_sci_Stream$Empty$()
  };
}
const $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
let $n_sci_Stream$ = (void 0);
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
class $c_scm_ArrayBuffer$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_ListBuffer$ extends $c_scg_SeqFactory {
  constructor() {
    super();
    $ct_scg_GenTraversableFactory__(this)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_GrowingBuilder(new $c_scm_ListBuffer())
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
const $f_s_math_Numeric$IntIsIntegral__plus__I__I__I = (function($thiz, x, y) {
  return ((x + y) | 0)
});
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean"
  };
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_Z.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte"
  };
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_B.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char"
  };
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_C.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double"
  };
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_D.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float"
  };
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_F.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int"
  };
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_I.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long"
  };
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_J.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short"
  };
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_S.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_AnyValManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit"
  };
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_jl_Void.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
const $f_sc_IterableLike__take__I__O = (function($thiz, n) {
  const b = $thiz.newBuilder__scm_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(b, n, $thiz);
    let i = 0;
    const it = $thiz.iterator__sc_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$plus$eq__O__scm_Builder(it.next__O());
      i = ((1 + i) | 0)
    };
    return b.result__O()
  }
});
const $f_sc_IterableLike__copyToArray__O__I__I__V = (function($thiz, xs, start, len) {
  let i = start;
  const x = ((start + len) | 0);
  const that = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const end = ((x < that) ? x : that);
  const it = $thiz.iterator__sc_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  }
});
const $f_sc_IterableLike__sameElements__sc_GenIterable__Z = (function($thiz, that) {
  if (($thiz === that)) {
    return true
  } else {
    if ((that instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(that);
      if (($thiz instanceof $c_sci_Vector)) {
        const thisVector = $as_sci_Vector($thiz);
        if ((thisVector === x2)) {
          return true
        } else {
          let equal = (thisVector.length__I() === x2.length__I());
          if (equal) {
            const length = x2.length__I();
            let index = 0;
            while (((index < length) && equal)) {
              equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisVector.apply__I__O(index), x2.apply__I__O(index));
              index = ((1 + index) | 0)
            }
          };
          return equal
        }
      }
    };
    if ($is_sc_GenSet(that)) {
      const x3 = $as_sc_GenSet(that);
      if ($is_sc_GenSetLike($thiz)) {
        const thisSet = $as_sc_GenSetLike($thiz);
        return ((thisSet.size__I() === x3.size__I()) && thisSet.subsetOf__sc_GenSet__Z(x3))
      }
    };
    const these = $thiz.iterator__sc_Iterator();
    const those = that.iterator__sc_Iterator();
    while ((these.hasNext__Z() && those.hasNext__Z())) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(these.next__O(), those.next__O()))) {
        return false
      }
    };
    return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
  }
});
class $c_sci_Vector$ extends $c_scg_IndexedSeqFactory {
  constructor() {
    super();
    this.sci_Vector$__f_NIL = null;
    $ct_scg_GenTraversableFactory__(this);
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0)
  };
  newBuilder__scm_Builder() {
    return new $c_sci_VectorBuilder()
  };
  empty__sc_GenTraversable() {
    return this.sci_Vector$__f_NIL
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
class $c_s_reflect_ManifestFactory$AnyManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
let $n_s_reflect_ManifestFactory$AnyManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
class $c_s_reflect_ManifestFactory$AnyValManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "AnyVal";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$AnyValManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyValManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyValManifest$", {
  s_reflect_ManifestFactory$AnyValManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyValManifest$;
let $n_s_reflect_ManifestFactory$AnyValManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyValManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyValManifest$)) {
    $n_s_reflect_ManifestFactory$AnyValManifest$ = new $c_s_reflect_ManifestFactory$AnyValManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyValManifest$
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
  newArray__I__O(len) {
    return $newArrayObject($d_O.getArrayOf(), [len])
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_sc_AbstractTraversable extends $c_O {
  newBuilder__scm_Builder() {
    return this.companion__scg_GenericCompanion().newBuilder__scm_Builder()
  };
  repr__O() {
    return this
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
  $div$colon__O__F2__O(z, op) {
    return this.foldLeft__O__F2__O(z, op)
  };
  foldLeft__O__F2__O(z, op) {
    return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
  };
  sum__s_math_Numeric__O(num) {
    return $f_sc_TraversableOnce__sum__s_math_Numeric__O(this, num)
  };
  mkString__T__T__T__T(start, sep, end) {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  sizeHintIfCheap__I() {
    return (-1)
  };
}
function $is_sc_GenMap(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenMap)))
}
function $as_sc_GenMap(obj) {
  return (($is_sc_GenMap(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenMap"))
}
function $isArrayOf_sc_GenMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenMap)))
}
function $asArrayOf_sc_GenMap(obj, depth) {
  return (($isArrayOf_sc_GenMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenMap;", depth))
}
function $is_sc_GenSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSeq)))
}
function $as_sc_GenSeq(obj) {
  return (($is_sc_GenSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSeq"))
}
function $isArrayOf_sc_GenSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSeq)))
}
function $asArrayOf_sc_GenSeq(obj, depth) {
  return (($isArrayOf_sc_GenSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth))
}
class $c_s_math_Numeric$IntIsIntegral$ extends $c_O {
  gt__O__O__Z(x, y) {
    return $f_s_math_Ordering__gt__O__O__Z(this, x, y)
  };
  fromInt__I__O(x) {
    return x
  };
  plus__O__O__O(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1))
  };
}
const $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$IntIsIntegral$: 0
}, false, "scala.math.Numeric$IntIsIntegral$", {
  s_math_Numeric$IntIsIntegral$: 1,
  O: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
});
$c_s_math_Numeric$IntIsIntegral$.prototype.$classData = $d_s_math_Numeric$IntIsIntegral$;
let $n_s_math_Numeric$IntIsIntegral$ = (void 0);
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$()
  };
  return $n_s_math_Numeric$IntIsIntegral$
}
const $f_sc_SeqLike__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
class $c_s_math_Numeric$DoubleIsFractional$ extends $c_O {
  fromInt__I__O(x) {
    return x
  };
  plus__O__O__O(x, y) {
    const x$1 = $uD(x);
    const y$1 = $uD(y);
    return $f_s_math_Numeric$DoubleIsConflicted__plus__D__D__D(this, x$1, y$1)
  };
  gt__O__O__Z(x, y) {
    const x$1 = $uD(x);
    const y$1 = $uD(y);
    return $f_s_math_Ordering$DoubleOrdering__gt__D__D__Z(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uD(x);
    const y$1 = $uD(y);
    return $m_jl_Double$().compare__D__D__I(x$1, y$1)
  };
}
const $d_s_math_Numeric$DoubleIsFractional$ = new $TypeData().initClass({
  s_math_Numeric$DoubleIsFractional$: 0
}, false, "scala.math.Numeric$DoubleIsFractional$", {
  s_math_Numeric$DoubleIsFractional$: 1,
  O: 1,
  s_math_Numeric$DoubleIsFractional: 1,
  s_math_Numeric$DoubleIsConflicted: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_math_Fractional: 1,
  s_math_Ordering$DoubleOrdering: 1
});
$c_s_math_Numeric$DoubleIsFractional$.prototype.$classData = $d_s_math_Numeric$DoubleIsFractional$;
let $n_s_math_Numeric$DoubleIsFractional$ = (void 0);
function $m_s_math_Numeric$DoubleIsFractional$() {
  if ((!$n_s_math_Numeric$DoubleIsFractional$)) {
    $n_s_math_Numeric$DoubleIsFractional$ = new $c_s_math_Numeric$DoubleIsFractional$()
  };
  return $n_s_math_Numeric$DoubleIsFractional$
}
function $is_sc_GenSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSet)))
}
function $as_sc_GenSet(obj) {
  return (($is_sc_GenSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSet"))
}
function $isArrayOf_sc_GenSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSet)))
}
function $asArrayOf_sc_GenSet(obj, depth) {
  return (($isArrayOf_sc_GenSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSet;", depth))
}
function $is_sc_IndexedSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeqLike)))
}
function $as_sc_IndexedSeqLike(obj) {
  return (($is_sc_IndexedSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeqLike"))
}
function $isArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeqLike)))
}
function $asArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (($isArrayOf_sc_IndexedSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike;", depth))
}
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
const $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O = (function($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z
    } else {
      const temp$start = ((1 + start) | 0);
      const temp$z = op.apply__O__O__O(z, $thiz.apply__I__O(start));
      start = temp$start;
      z = temp$z
    }
  }
});
const $f_sc_IndexedSeqOptimized__isEmpty__Z = (function($thiz) {
  return ($thiz.length__I() === 0)
});
const $f_sc_IndexedSeqOptimized__foreach__F1__V = (function($thiz, f) {
  let i = 0;
  const len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
});
const $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z = (function($thiz, that) {
  if ($is_sc_IndexedSeq(that)) {
    const x2 = $as_sc_IndexedSeq(that);
    const len = $thiz.length__I();
    if ((len === x2.length__I())) {
      let i = 0;
      while (((i < len) && $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(i), x2.apply__I__O(i)))) {
        i = ((1 + i) | 0)
      };
      return (i === len)
    } else {
      return false
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
});
const $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V = (function($thiz, xs, start, len) {
  let i = 0;
  let j = start;
  const x = $thiz.length__I();
  const x$1 = ((x < len) ? x : len);
  const that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, j, $thiz.apply__I__O(i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
const $f_sc_IndexedSeqOptimized__lengthCompare__I__I = (function($thiz, len) {
  return (($thiz.length__I() - len) | 0)
});
const $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeqOptimized(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $f_sc_LinearSeqOptimized__length__I = (function($thiz) {
  let these = $thiz;
  let len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
});
const $f_sc_LinearSeqOptimized__apply__I__O = (function($thiz, n) {
  const rest = $thiz.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
});
const $f_sc_LinearSeqOptimized__foldLeft__O__F2__O = (function($thiz, z, op) {
  let acc = z;
  let these = $thiz;
  while ((!these.isEmpty__Z())) {
    acc = op.apply__O__O__O(acc, these.head__O());
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return acc
});
const $f_sc_LinearSeqOptimized__last__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  let these = $thiz;
  let nx = $as_sc_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = $as_sc_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
});
const $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    if (($thiz === x2)) {
      return true
    } else {
      let these = $thiz;
      let those = x2;
      while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && $m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), those.head__O()))) {
        these = $as_sc_LinearSeqOptimized(these.tail__O());
        those = $as_sc_LinearSeq(those.tail__O())
      };
      return (these.isEmpty__Z() && those.isEmpty__Z())
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
});
const $f_sc_LinearSeqOptimized__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I($thiz, 0, $thiz, len))
});
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
const $f_sc_SetLike__$plus$plus__sc_GenTraversableOnce__sc_Set = (function($thiz, elems) {
  if (($thiz === ($m_sci_Set$(), $m_sci_Set$EmptySet$()))) {
    if ((elems instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(elems);
      if ((x2.size__I() > 4)) {
        return x2
      }
    };
    if ((elems instanceof $c_sci_Set$Set1)) {
      const x3 = $as_sci_Set$Set1(elems);
      return x3
    };
    if ((elems instanceof $c_sci_Set$Set2)) {
      const x4 = $as_sci_Set$Set2(elems);
      return x4
    };
    if ((elems instanceof $c_sci_Set$Set3)) {
      const x5 = $as_sci_Set$Set3(elems);
      return x5
    };
    if ((elems instanceof $c_sci_Set$Set4)) {
      const x6 = $as_sci_Set$Set4(elems);
      return x6
    };
    if (elems.isEmpty__Z()) {
      return $as_sc_Set($thiz)
    } else {
      const x$3 = $as_sc_Set($thiz);
      return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$3, new $c_sjsr_AnonFunction2(((this$2) => ((x$4$2, x$5$2) => {
        const x$4 = $as_sc_Set(x$4$2);
        return x$4.$plus__O__sc_Set(x$5$2)
      }))($thiz))))
    }
  } else if (($thiz instanceof $c_sci_HashSet)) {
    const x2$2 = $as_sci_HashSet($thiz);
    if ($is_sc_GenSet(elems)) {
      const x2$3 = $as_sc_GenSet(elems);
      return x2$2.union__sc_GenSet__sci_HashSet(x2$3)
    } else {
      const x$6 = $as_sc_Set($thiz);
      return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$6, new $c_sjsr_AnonFunction2(((this$2$1) => ((x$7$2, x$8$2) => {
        const x$7 = $as_sc_Set(x$7$2);
        return x$7.$plus__O__sc_Set(x$8$2)
      }))($thiz))))
    }
  } else {
    const x$9 = $as_sc_Set($thiz);
    return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$9, new $c_sjsr_AnonFunction2(((this$3) => ((x$10$2, x$11$2) => {
      const x$10 = $as_sc_Set(x$10$2);
      return x$10.$plus__O__sc_Set(x$11$2)
    }))($thiz))))
  }
});
const $f_sc_SetLike__isEmpty__Z = (function($thiz) {
  return ($thiz.size__I() === 0)
});
const $f_sc_MapLike__isEmpty__Z = (function($thiz) {
  return ($thiz.size__I() === 0)
});
const $f_sc_MapLike__apply__O__O = (function($thiz, key) {
  const x1 = $thiz.get__O__s_Option(key);
  const x = $m_s_None$();
  if ((x === x1)) {
    return $f_sc_MapLike__default__O__O($thiz, key)
  } else if ((x1 instanceof $c_s_Some)) {
    const x2 = $as_s_Some(x1);
    const value = x2.s_Some__f_value;
    return value
  } else {
    throw new $c_s_MatchError(x1)
  }
});
const $f_sc_MapLike__contains__O__Z = (function($thiz, key) {
  const this$1 = $thiz.get__O__s_Option(key);
  return (!this$1.isEmpty__Z())
});
const $f_sc_MapLike__default__O__O = (function($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
});
const $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const this$3 = $thiz.iterator__sc_Iterator();
  const f = new $c_sjsr_AnonFunction1(((this$1) => ((x0$1$2) => {
    const x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      const k = x0$1._1__O();
      const v = x0$1._2__O();
      return (("" + $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(k, " -> ")) + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz));
  const this$4 = new $c_sc_Iterator$$anon$10(this$3, f);
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$4, b, start, sep, end)
});
class $c_sc_AbstractIterable extends $c_sc_AbstractTraversable {
  foreach__F1__V(f) {
    const this$1 = this.iterator__sc_Iterator();
    $f_sc_Iterator__foreach__F1__V(this$1, f)
  };
  forall__F1__Z(p) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__forall__F1__Z(this$1, p)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IterableLike__copyToArray__O__I__I__V(this, xs, start, len)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z(this, that)
  };
  toStream__sci_Stream() {
    return this.iterator__sc_Iterator().toStream__sci_Stream()
  };
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
const $d_sci_Iterable = new $TypeData().initClass({
  sci_Iterable: 0
}, true, "scala.collection.immutable.Iterable", {
  sci_Iterable: 1,
  O: 1,
  sci_Traversable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  s_Immutable: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1
});
const $f_scm_ArrayOps__copyToArray__O__I__I__V = (function($thiz, xs, start, len) {
  const that = $m_sr_ScalaRunTime$().array_length__O__I($thiz.repr__O());
  const x = ((len < that) ? len : that);
  const that$1 = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const l = ((x < that$1) ? x : that$1);
  if ((l > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.repr__O(), 0, xs, start, l)
  }
});
class $c_scm_ArrayOps$ofInt extends $c_O {
  constructor(repr) {
    super();
    this.scm_ArrayOps$ofInt__f_repr = null;
    this.scm_ArrayOps$ofInt__f_repr = repr
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_scm_ArrayOps__copyToArray__O__I__I__V(this, xs, start, len)
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  foldLeft__O__F2__O(z, op) {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.u.length, z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  iterator__sc_Iterator() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this$.u.length)
  };
  sizeHintIfCheap__I() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return this$.u.length
  };
  size__I() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return this$.u.length
  };
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  toStream__sci_Stream() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    const this$2 = new $c_sc_IndexedSeqLike$Elements(this, 0, this$.u.length);
    return $f_sc_Iterator__toStream__sci_Stream(this$2)
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
  $div$colon__O__F2__O(z, op) {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.u.length, z, op)
  };
  sum__s_math_Numeric__O(num) {
    return $f_sc_TraversableOnce__sum__s_math_Numeric__O(this, num)
  };
  mkString__T__T__T__T(start, sep, end) {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return this$.u.length
  };
  hashCode__I() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return this$.hashCode__I()
  };
  equals__O__Z(x$1) {
    return $m_scm_ArrayOps$ofInt$().equals$extension__AI__O__Z(this.scm_ArrayOps$ofInt__f_repr, x$1)
  };
  seq__sc_TraversableOnce() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return new $c_scm_WrappedArray$ofInt(this$)
  };
  apply__I__O(idx) {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return this$.get(idx)
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ArrayBuilder$ofInt()
  };
  thisCollection__sc_Traversable() {
    const this$ = this.scm_ArrayOps$ofInt__f_repr;
    return new $c_scm_WrappedArray$ofInt(this$)
  };
  repr__O() {
    return this.scm_ArrayOps$ofInt__f_repr
  };
}
function $as_scm_ArrayOps$ofInt(obj) {
  return (((obj instanceof $c_scm_ArrayOps$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofInt"))
}
function $isArrayOf_scm_ArrayOps$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayOps$ofInt)))
}
function $asArrayOf_scm_ArrayOps$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArrayOps$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofInt;", depth))
}
const $d_scm_ArrayOps$ofInt = new $TypeData().initClass({
  scm_ArrayOps$ofInt: 0
}, false, "scala.collection.mutable.ArrayOps$ofInt", {
  scm_ArrayOps$ofInt: 1,
  O: 1,
  scm_ArrayOps: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_SeqLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenIterableLike: 1,
  sc_GenSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1
});
$c_scm_ArrayOps$ofInt.prototype.$classData = $d_scm_ArrayOps$ofInt;
class $c_scm_ArrayOps$ofRef extends $c_O {
  constructor(repr) {
    super();
    this.scm_ArrayOps$ofRef__f_repr = null;
    this.scm_ArrayOps$ofRef__f_repr = repr
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_scm_ArrayOps__copyToArray__O__I__I__V(this, xs, start, len)
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  foldLeft__O__F2__O(z, op) {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.u.length, z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  iterator__sc_Iterator() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this$.u.length)
  };
  sizeHintIfCheap__I() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return this$.u.length
  };
  size__I() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return this$.u.length
  };
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  toStream__sci_Stream() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    const this$2 = new $c_sc_IndexedSeqLike$Elements(this, 0, this$.u.length);
    return $f_sc_Iterator__toStream__sci_Stream(this$2)
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
  $div$colon__O__F2__O(z, op) {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.u.length, z, op)
  };
  sum__s_math_Numeric__O(num) {
    return $f_sc_TraversableOnce__sum__s_math_Numeric__O(this, num)
  };
  mkString__T__T__T__T(start, sep, end) {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return this$.u.length
  };
  apply__I__O(index) {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return this$.get(index)
  };
  hashCode__I() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return this$.hashCode__I()
  };
  equals__O__Z(x$1) {
    return $m_scm_ArrayOps$ofRef$().equals$extension__AO__O__Z(this.scm_ArrayOps$ofRef__f_repr, x$1)
  };
  seq__sc_TraversableOnce() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return new $c_scm_WrappedArray$ofRef(this$)
  };
  newBuilder__scm_Builder() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return new $c_scm_ArrayBuilder$ofRef($m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$).getComponentType__jl_Class()))
  };
  thisCollection__sc_Traversable() {
    const this$ = this.scm_ArrayOps$ofRef__f_repr;
    return new $c_scm_WrappedArray$ofRef(this$)
  };
  repr__O() {
    return this.scm_ArrayOps$ofRef__f_repr
  };
}
function $as_scm_ArrayOps$ofRef(obj) {
  return (((obj instanceof $c_scm_ArrayOps$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofRef"))
}
function $isArrayOf_scm_ArrayOps$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayOps$ofRef)))
}
function $asArrayOf_scm_ArrayOps$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArrayOps$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofRef;", depth))
}
const $d_scm_ArrayOps$ofRef = new $TypeData().initClass({
  scm_ArrayOps$ofRef: 0
}, false, "scala.collection.mutable.ArrayOps$ofRef", {
  scm_ArrayOps$ofRef: 1,
  O: 1,
  scm_ArrayOps: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_SeqLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenIterableLike: 1,
  sc_GenSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1
});
$c_scm_ArrayOps$ofRef.prototype.$classData = $d_scm_ArrayOps$ofRef;
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  isEmpty__Z() {
    return $f_sc_SeqLike__isEmpty__Z(this)
  };
  size__I() {
    return this.length__I()
  };
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this.seq__sc_Seq())
  };
  equals__O__Z(that) {
    return $f_sc_GenSeqLike__equals__O__Z(this, that)
  };
}
class $c_sc_AbstractMap extends $c_sc_AbstractIterable {
  newBuilder__scm_Builder() {
    return $ct_scm_MapBuilder__sc_GenMap__(new $c_scm_MapBuilder(), this.empty__sc_Map())
  };
  isEmpty__Z() {
    return $f_sc_MapLike__isEmpty__Z(this)
  };
  apply__O__O(key) {
    return $f_sc_MapLike__apply__O__O(this, key)
  };
  contains__O__Z(key) {
    return $f_sc_MapLike__contains__O__Z(this, key)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  stringPrefix__T() {
    return "Map"
  };
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const xs = this.seq__sc_Map();
    return this$1.unorderedHash__sc_TraversableOnce__I__I(xs, this$1.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  equals__O__Z(that) {
    return $f_sc_GenMapLike__equals__O__Z(this, that)
  };
}
class $c_sc_AbstractSet extends $c_sc_AbstractIterable {
  newBuilder__scm_Builder() {
    return $ct_scm_SetBuilder__sc_Set__(new $c_scm_SetBuilder(), this.empty__sc_Set())
  };
  $plus$plus__sc_GenTraversableOnce__sc_Set(elems) {
    return $f_sc_SetLike__$plus$plus__sc_GenTraversableOnce__sc_Set(this, elems)
  };
  isEmpty__Z() {
    return $f_sc_SetLike__isEmpty__Z(this)
  };
  union__sc_GenSet__sc_Set(that) {
    return this.$plus$plus__sc_GenTraversableOnce__sc_Set(that)
  };
  stringPrefix__T() {
    return "Set"
  };
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
  subsetOf__sc_GenSet__Z(that) {
    return this.forall__F1__Z(that)
  };
  equals__O__Z(that) {
    return $f_sc_GenSetLike__equals__O__Z(this, that)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
  };
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
class $c_sci_AbstractMap extends $c_sc_AbstractMap {
  empty__sci_Map() {
    $m_sci_Map$();
    return $m_sci_Map$EmptyMap$()
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Iterable$()
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Map() {
    return this
  };
  empty__sc_Map() {
    return this.empty__sci_Map()
  };
}
const $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet = (function($thiz, ls, count) {
  while (true) {
    if ((count === 0)) {
      return ls
    } else {
      const temp$ls = ls.next__sci_ListSet();
      const temp$count = (((-1) + count) | 0);
      ls = temp$ls;
      count = temp$count
    }
  }
});
const $p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z = (function($thiz, n, e, end) {
  while (true) {
    if ((n !== end)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(e, n.elem__O())) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
});
const $p_sci_ListSet__reverseList$1__sci_List = (function($thiz) {
  let curr = $thiz;
  let res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    const x$4 = curr.elem__O();
    const this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListSet()
  };
  return res
});
class $c_sci_ListSet extends $c_sc_AbstractSet {
  companion__scg_GenericCompanion() {
    return $m_sci_ListSet$()
  };
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  contains__O__Z(elem) {
    return false
  };
  $plus__O__sci_ListSet(elem) {
    return new $c_sci_ListSet$Node(this, elem)
  };
  $plus$plus__sc_GenTraversableOnce__sci_ListSet(xs) {
    if ((xs instanceof $c_sci_ListSet)) {
      const x2 = $as_sci_ListSet(xs);
      if ((x2 === this)) {
        return this
      } else {
        const lsSize = x2.size__I();
        if ((lsSize === 0)) {
          return this
        } else {
          const thisSize = this.size__I();
          const remaining = ((thisSize < lsSize) ? thisSize : lsSize);
          let thisTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, this, ((thisSize - remaining) | 0));
          let lsTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, x2, ((lsSize - remaining) | 0));
          while (((thisTail !== lsTail) && (!lsTail.isEmpty__Z()))) {
            thisTail = thisTail.next__sci_ListSet();
            lsTail = lsTail.next__sci_ListSet()
          };
          let toAdd = x2;
          let result = this;
          while ((toAdd !== lsTail)) {
            const elem = toAdd.elem__O();
            if ((!$p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z(this, result, elem, lsTail))) {
              const r = result;
              result = new $c_sci_ListSet$Node(r, elem)
            };
            toAdd = toAdd.next__sci_ListSet()
          };
          return result
        }
      }
    } else {
      return (xs.isEmpty__Z() ? this : $as_sci_ListSet(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((this$2) => ((x$2$2, x$3$2) => {
        const x$2 = $as_sci_ListSet(x$2$2);
        return x$2.$plus__O__sci_ListSet(x$3$2)
      }))(this)))))
    }
  };
  iterator__sc_Iterator() {
    const this$1 = $p_sci_ListSet__reverseList$1__sci_List(this);
    return new $c_sc_LinearSeqLike$$anon$1(this$1)
  };
  elem__O() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "elem of empty set")
  };
  next__sci_ListSet() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty set")
  };
  stringPrefix__T() {
    return "ListSet"
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  empty__sc_Set() {
    $m_sci_ListSet$();
    return $m_sci_ListSet$EmptyListSet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus$plus__sc_GenTraversableOnce__sc_Set(elems) {
    return this.$plus$plus__sc_GenTraversableOnce__sci_ListSet(elems)
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_ListSet(elem)
  };
}
function $as_sci_ListSet(obj) {
  return (((obj instanceof $c_sci_ListSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListSet"))
}
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListSet)))
}
function $asArrayOf_sci_ListSet(obj, depth) {
  return (($isArrayOf_sci_ListSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth))
}
class $c_sci_Set$EmptySet$ extends $c_sc_AbstractSet {
  companion__scg_GenericCompanion() {
    return $m_sci_Set$()
  };
  size__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_empty
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return false
  };
  empty__sc_Set() {
    $m_sci_Set$();
    return $m_sci_Set$EmptySet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus__O__sc_Set(elem) {
    return new $c_sci_Set$Set1(elem)
  };
}
const $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
let $n_sci_Set$EmptySet$ = (void 0);
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
class $c_sci_Set$Set1 extends $c_sc_AbstractSet {
  constructor(elem1) {
    super();
    this.sci_Set$Set1__f_elem1 = null;
    this.sci_Set$Set1__f_elem1 = elem1
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Set$()
  };
  size__I() {
    return 1
  };
  contains__O__Z(elem) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
  };
  $plus__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.sci_Set$Set1__f_elem1];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set1__f_elem1)
  };
  forall__F1__Z(p) {
    return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  empty__sc_Set() {
    $m_sci_Set$();
    return $m_sci_Set$EmptySet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set1(obj) {
  return (((obj instanceof $c_sci_Set$Set1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set1"))
}
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set1)))
}
function $asArrayOf_sci_Set$Set1(obj, depth) {
  return (($isArrayOf_sci_Set$Set1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set1;", depth))
}
const $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
class $c_sci_Set$Set2 extends $c_sc_AbstractSet {
  constructor(elem1, elem2) {
    super();
    this.sci_Set$Set2__f_elem1 = null;
    this.sci_Set$Set2__f_elem2 = null;
    this.sci_Set$Set2__f_elem1 = elem1;
    this.sci_Set$Set2__f_elem2 = elem2
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Set$()
  };
  size__I() {
    return 2
  };
  contains__O__Z(elem) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
  };
  $plus__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set2__f_elem1);
    f.apply__O__O(this.sci_Set$Set2__f_elem2)
  };
  forall__F1__Z(p) {
    return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  empty__sc_Set() {
    $m_sci_Set$();
    return $m_sci_Set$EmptySet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set2(obj) {
  return (((obj instanceof $c_sci_Set$Set2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set2"))
}
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set2)))
}
function $asArrayOf_sci_Set$Set2(obj, depth) {
  return (($isArrayOf_sci_Set$Set2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set2;", depth))
}
const $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
class $c_sci_Set$Set3 extends $c_sc_AbstractSet {
  constructor(elem1, elem2, elem3) {
    super();
    this.sci_Set$Set3__f_elem1 = null;
    this.sci_Set$Set3__f_elem2 = null;
    this.sci_Set$Set3__f_elem3 = null;
    this.sci_Set$Set3__f_elem1 = elem1;
    this.sci_Set$Set3__f_elem2 = elem2;
    this.sci_Set$Set3__f_elem3 = elem3
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Set$()
  };
  size__I() {
    return 3
  };
  contains__O__Z(elem) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
  };
  $plus__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set3__f_elem1);
    f.apply__O__O(this.sci_Set$Set3__f_elem2);
    f.apply__O__O(this.sci_Set$Set3__f_elem3)
  };
  forall__F1__Z(p) {
    return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  empty__sc_Set() {
    $m_sci_Set$();
    return $m_sci_Set$EmptySet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set3(obj) {
  return (((obj instanceof $c_sci_Set$Set3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set3"))
}
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set3)))
}
function $asArrayOf_sci_Set$Set3(obj, depth) {
  return (($isArrayOf_sci_Set$Set3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set3;", depth))
}
const $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
class $c_sci_Set$Set4 extends $c_sc_AbstractSet {
  constructor(elem1, elem2, elem3, elem4) {
    super();
    this.sci_Set$Set4__f_elem1 = null;
    this.sci_Set$Set4__f_elem2 = null;
    this.sci_Set$Set4__f_elem3 = null;
    this.sci_Set$Set4__f_elem4 = null;
    this.sci_Set$Set4__f_elem1 = elem1;
    this.sci_Set$Set4__f_elem2 = elem2;
    this.sci_Set$Set4__f_elem3 = elem3;
    this.sci_Set$Set4__f_elem4 = elem4
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Set$()
  };
  size__I() {
    return 4
  };
  contains__O__Z(elem) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
  };
  $plus__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : $ct_sci_HashSet__(new $c_sci_HashSet()).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem1).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem2).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem3).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem4).$plus__O__sci_HashSet(elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.sci_Set$Set4__f_elem1, this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_Set$Set4__f_elem1);
    f.apply__O__O(this.sci_Set$Set4__f_elem2);
    f.apply__O__O(this.sci_Set$Set4__f_elem3);
    f.apply__O__O(this.sci_Set$Set4__f_elem4)
  };
  forall__F1__Z(p) {
    return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  empty__sc_Set() {
    $m_sci_Set$();
    return $m_sci_Set$EmptySet$()
  };
  seq__sc_TraversableOnce() {
    return this
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set4(obj) {
  return (((obj instanceof $c_sci_Set$Set4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set4"))
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
function $asArrayOf_sci_Set$Set4(obj, depth) {
  return (($isArrayOf_sci_Set$Set4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set4;", depth))
}
const $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
const $p_sci_HashSet__acc$lzycompute$1__sr_LazyRef__sci_HashSet$acc$1$ = (function($thiz, acc$module$1) {
  if ((acc$module$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (acc$module$1.sr_LazyRef__f__initialized ? $as_sci_HashSet$acc$1$(acc$module$1.sr_LazyRef__f__value) : $as_sci_HashSet$acc$1$(acc$module$1.initialize__O__O(new $c_sci_HashSet$acc$1$($thiz))))
});
const $p_sci_HashSet__acc$2__sr_LazyRef__sci_HashSet$acc$1$ = (function($thiz, acc$module$1) {
  return (acc$module$1.sr_LazyRef__f__initialized ? $as_sci_HashSet$acc$1$(acc$module$1.sr_LazyRef__f__value) : $p_sci_HashSet__acc$lzycompute$1__sr_LazyRef__sci_HashSet$acc$1$($thiz, acc$module$1))
});
const $ct_sci_HashSet__ = (function($thiz) {
  return $thiz
});
class $c_sci_HashSet extends $c_sc_AbstractSet {
  companion__scg_GenericCompanion() {
    return $m_sci_HashSet$()
  };
  size__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_empty
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  contains__O__Z(e) {
    return this.get0__O__I__I__Z(e, this.computeHash__O__I(e), 0)
  };
  subsetOf__sc_GenSet__Z(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(that);
      return this.subsetOf0__sci_HashSet__I__Z(x2, 0)
    } else {
      const this$1 = this.iterator__sc_Iterator();
      return $f_sc_Iterator__forall__F1__Z(this$1, that)
    }
  };
  subsetOf0__sci_HashSet__I__Z(that, level) {
    return true
  };
  $plus__O__sci_HashSet(e) {
    return this.updated0__O__I__I__sci_HashSet(e, this.computeHash__O__I(e), 0)
  };
  union__sc_GenSet__sci_HashSet(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(that);
      if ((this === x2)) {
        return this
      } else {
        $m_sci_HashSet$();
        const s = this.union0__sci_HashSet__I__sci_HashSet(x2, 0);
        return ((s === null) ? $m_sci_HashSet$EmptyHashSet$() : s)
      }
    } else if (that.isEmpty__Z()) {
      return this
    } else {
      const acc$module = new $c_sr_LazyRef();
      if ($is_sci_Set(that)) {
        that.foreach__F1__V($p_sci_HashSet__acc$2__sr_LazyRef__sci_HashSet$acc$1$(this, acc$module))
      } else {
        const this$2 = that.iterator__sc_Iterator();
        const f = $p_sci_HashSet__acc$2__sr_LazyRef__sci_HashSet$acc$1$(this, acc$module);
        $f_sc_Iterator__foreach__F1__V(this$2, f)
      };
      return $p_sci_HashSet__acc$2__sr_LazyRef__sci_HashSet$acc$1$(this, acc$module).sci_HashSet$acc$1$__f_res
    }
  };
  union0__sci_HashSet__I__sci_HashSet(that, level) {
    return that
  };
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
  computeHash__O__I(key) {
    return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
  };
  get0__O__I__I__Z(key, hash, level) {
    return false
  };
  updated0__O__I__I__sci_HashSet(key, hash, level) {
    return new $c_sci_HashSet$HashSet1(key, hash)
  };
  thisCollection__sc_Traversable() {
    return this
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
  seq__sc_TraversableOnce() {
    return this
  };
  union__sc_GenSet__sc_Set(that) {
    return this.union__sc_GenSet__sci_HashSet(that)
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_HashSet(elem)
  };
  empty__sc_Set() {
    $m_sci_HashSet$();
    return $m_sci_HashSet$EmptyHashSet$()
  };
}
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
const $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
class $c_sci_ListSet$EmptyListSet$ extends $c_sci_ListSet {
}
const $d_sci_ListSet$EmptyListSet$ = new $TypeData().initClass({
  sci_ListSet$EmptyListSet$: 0
}, false, "scala.collection.immutable.ListSet$EmptyListSet$", {
  sci_ListSet$EmptyListSet$: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$EmptyListSet$.prototype.$classData = $d_sci_ListSet$EmptyListSet$;
let $n_sci_ListSet$EmptyListSet$ = (void 0);
function $m_sci_ListSet$EmptyListSet$() {
  if ((!$n_sci_ListSet$EmptyListSet$)) {
    $n_sci_ListSet$EmptyListSet$ = new $c_sci_ListSet$EmptyListSet$()
  };
  return $n_sci_ListSet$EmptyListSet$
}
const $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I = (function($thiz, n, acc) {
  while (true) {
    if (n.isEmpty__Z()) {
      return acc
    } else {
      const temp$n = n.next__sci_ListSet();
      const temp$acc = ((1 + acc) | 0);
      n = temp$n;
      acc = temp$acc
    }
  }
});
const $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z = (function($thiz, n, e) {
  while (true) {
    if ((!n.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(n.elem__O(), e)) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
});
class $c_sci_ListSet$Node extends $c_sci_ListSet {
  constructor(outer, elem) {
    super();
    this.sci_ListSet$Node__f_elem = null;
    this.sci_ListSet$Node__f_$outer = null;
    this.sci_ListSet$Node__f_elem = elem;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_ListSet$Node__f_$outer = outer
    }
  };
  elem__O() {
    return this.sci_ListSet$Node__f_elem
  };
  size__I() {
    return $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I(this, this, 0)
  };
  isEmpty__Z() {
    return false
  };
  contains__O__Z(e) {
    return $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e)
  };
  $plus__O__sci_ListSet(e) {
    return ($p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e) ? this : new $c_sci_ListSet$Node(this, e))
  };
  next__sci_ListSet() {
    return this.sci_ListSet$Node__f_$outer
  };
  $plus__O__sc_Set(elem) {
    return this.$plus__O__sci_ListSet(elem)
  };
}
const $d_sci_ListSet$Node = new $TypeData().initClass({
  sci_ListSet$Node: 0
}, false, "scala.collection.immutable.ListSet$Node", {
  sci_ListSet$Node: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$Node.prototype.$classData = $d_sci_ListSet$Node;
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
  seq__scm_Seq() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this.seq__scm_Seq()
  };
}
class $c_sci_HashSet$EmptyHashSet$ extends $c_sci_HashSet {
}
const $d_sci_HashSet$EmptyHashSet$ = new $TypeData().initClass({
  sci_HashSet$EmptyHashSet$: 0
}, false, "scala.collection.immutable.HashSet$EmptyHashSet$", {
  sci_HashSet$EmptyHashSet$: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$EmptyHashSet$.prototype.$classData = $d_sci_HashSet$EmptyHashSet$;
let $n_sci_HashSet$EmptyHashSet$ = (void 0);
function $m_sci_HashSet$EmptyHashSet$() {
  if ((!$n_sci_HashSet$EmptyHashSet$)) {
    $n_sci_HashSet$EmptyHashSet$ = new $c_sci_HashSet$EmptyHashSet$()
  };
  return $n_sci_HashSet$EmptyHashSet$
}
const $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet = (function($thiz, larger, smaller, level$4) {
  let resultElems = null;
  let ai = 0;
  let bi = 0;
  let abm = larger.sci_HashSet$HashTrieSet__f_bitmap;
  let bbm = smaller.sci_HashSet$HashTrieSet__f_bitmap;
  const a = larger.sci_HashSet$HashTrieSet__f_elems;
  const b = smaller.sci_HashSet$HashTrieSet__f_elems;
  let additionalSize = 0;
  let bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    const skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    const aai = a.get(ai);
    const bbi = b.get(bi);
    const result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = $asArrayOf_sci_HashSet(a.clone__O(), 1)
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashSet$HashTrieSet(larger.sci_HashSet$HashTrieSet__f_bitmap, resultElems, ((larger.sci_HashSet$HashTrieSet__f_size + additionalSize) | 0)))
});
const $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet = (function($thiz, that) {
  let ai = 0;
  let bi = 0;
  let offset = 0;
  const abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  const bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  const a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  const b = that.sci_HashSet$HashTrieSet__f_elems;
  let allBits = (abm | bbm);
  const i = allBits;
  const resultElems = $newArrayObject($d_sci_HashSet.getArrayOf(), [$m_jl_Integer$().bitCount__I__I(i)]);
  let lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, (($thiz.sci_HashSet$HashTrieSet__f_size + that.sci_HashSet$HashTrieSet__f_size) | 0))
});
const $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet = (function($thiz, that, level$4) {
  let ai = 0;
  let bi = 0;
  const abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  const bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  const a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  const b = that.sci_HashSet$HashTrieSet__f_elems;
  let allBits = (abm | bbm);
  const i = allBits;
  const resultElems = $newArrayObject($d_sci_HashSet.getArrayOf(), [$m_jl_Integer$().bitCount__I__I(i)]);
  let offset = 0;
  let rs = 0;
  let lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  let result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        const aai = a.get(ai);
        const bbi = b.get(bi);
        result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, rs)
});
class $c_sci_HashSet$HashTrieSet extends $c_sci_HashSet {
  constructor(bitmap, elems, size) {
    super();
    this.sci_HashSet$HashTrieSet__f_bitmap = 0;
    this.sci_HashSet$HashTrieSet__f_elems = null;
    this.sci_HashSet$HashTrieSet__f_size = 0;
    this.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
    this.sci_HashSet$HashTrieSet__f_elems = elems;
    this.sci_HashSet$HashTrieSet__f_size = size
  };
  size__I() {
    return this.sci_HashSet$HashTrieSet__f_size
  };
  get0__O__I__I__Z(key, hash, level) {
    const index = (31 & ((hash >>> level) | 0));
    const mask = (1 << index);
    if ((this.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
      return this.sci_HashSet$HashTrieSet__f_elems.get((31 & index)).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
    } else if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
      const i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
      const offset = $m_jl_Integer$().bitCount__I__I(i);
      return this.sci_HashSet$HashTrieSet__f_elems.get(offset).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
    } else {
      return false
    }
  };
  updated0__O__I__I__sci_HashSet(key, hash, level) {
    const index = (31 & ((hash >>> level) | 0));
    const mask = (1 << index);
    const i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    const offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
      const sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
      const subNew = sub.updated0__O__I__I__sci_HashSet(key, hash, ((5 + level) | 0));
      if ((sub === subNew)) {
        return this
      } else {
        const elemsNew = $newArrayObject($d_sci_HashSet.getArrayOf(), [this.sci_HashSet$HashTrieSet__f_elems.u.length]);
        const src = this.sci_HashSet$HashTrieSet__f_elems;
        const length = this.sci_HashSet$HashTrieSet__f_elems.u.length;
        $systemArraycopy(src, 0, elemsNew, 0, length);
        elemsNew.set(offset, subNew);
        return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elemsNew, ((1 + this.sci_HashSet$HashTrieSet__f_size) | 0))
      }
    } else {
      const elemsNew$2 = $newArrayObject($d_sci_HashSet.getArrayOf(), [((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0)]);
      const src$1 = this.sci_HashSet$HashTrieSet__f_elems;
      $systemArraycopy(src$1, 0, elemsNew$2, 0, offset);
      elemsNew$2.set(offset, new $c_sci_HashSet$HashSet1(key, hash));
      const src$2 = this.sci_HashSet$HashTrieSet__f_elems;
      const destPos = ((1 + offset) | 0);
      const length$1 = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
      $systemArraycopy(src$2, offset, elemsNew$2, destPos, length$1);
      const bitmapNew = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
      return new $c_sci_HashSet$HashTrieSet(bitmapNew, elemsNew$2, ((1 + this.sci_HashSet$HashTrieSet__f_size) | 0))
    }
  };
  union0__sci_HashSet__I__sci_HashSet(that, level) {
    if ((that === this)) {
      return this
    } else if ((that instanceof $c_sci_HashSet$LeafHashSet)) {
      const x2 = $as_sci_HashSet$LeafHashSet(that);
      const index = (31 & ((x2.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
      const mask = (1 << index);
      const i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
      const offset = $m_jl_Integer$().bitCount__I__I(i);
      if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
        const sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
        if ((sub === x2)) {
          return this
        } else {
          const sub1 = sub.union0__sci_HashSet__I__sci_HashSet(x2, ((5 + level) | 0));
          if ((sub === sub1)) {
            return this
          } else {
            const elems1 = $asArrayOf_sci_HashSet(this.sci_HashSet$HashTrieSet__f_elems.clone__O(), 1);
            elems1.set(offset, sub1);
            return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elems1, ((this.sci_HashSet$HashTrieSet__f_size + ((sub1.size__I() - sub.size__I()) | 0)) | 0))
          }
        }
      } else {
        const elems1$2 = $newArrayObject($d_sci_HashSet.getArrayOf(), [((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0)]);
        const src = this.sci_HashSet$HashTrieSet__f_elems;
        $systemArraycopy(src, 0, elems1$2, 0, offset);
        elems1$2.set(offset, x2);
        const src$1 = this.sci_HashSet$HashTrieSet__f_elems;
        const destPos = ((1 + offset) | 0);
        const length = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
        $systemArraycopy(src$1, offset, elems1$2, destPos, length);
        const bitmap1 = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
        return new $c_sci_HashSet$HashTrieSet(bitmap1, elems1$2, ((this.sci_HashSet$HashTrieSet__f_size + x2.size__I()) | 0))
      }
    } else if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
      const x3 = $as_sci_HashSet$HashTrieSet(that);
      const abm = this.sci_HashSet$HashTrieSet__f_bitmap;
      const bbm = x3.sci_HashSet$HashTrieSet__f_bitmap;
      const allBits = (abm | bbm);
      return (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashSet$HashTrieSet__f_size >= x3.sci_HashSet$HashTrieSet__f_size))) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, this, x3, level) : ((allBits === bbm) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, this, level) : (((abm & bbm) === 0) ? $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet(this, x3) : $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, level))))
    } else {
      return this
    }
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_HashSet$HashTrieSet)) {
      const x2 = $as_sci_HashSet$HashTrieSet(other);
      if ((this === x2)) {
        return true
      } else if (((this.sci_HashSet$HashTrieSet__f_bitmap === x2.sci_HashSet$HashTrieSet__f_bitmap) && (this.sci_HashSet$HashTrieSet__f_size === x2.sci_HashSet$HashTrieSet__f_size))) {
        const a = this.sci_HashSet$HashTrieSet__f_elems;
        const b = x2.sci_HashSet$HashTrieSet__f_elems;
        return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
      } else {
        return false
      }
    } else {
      return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
    }
  };
  subsetOf0__sci_HashSet__I__Z(that, level) {
    if ((that === this)) {
      return true
    } else {
      if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
        const x2 = $as_sci_HashSet$HashTrieSet(that);
        if ((((this.sci_HashSet$HashTrieSet__f_bitmap & (~x2.sci_HashSet$HashTrieSet__f_bitmap)) === 0) && (this.sci_HashSet$HashTrieSet__f_size <= x2.sci_HashSet$HashTrieSet__f_size))) {
          let abm = this.sci_HashSet$HashTrieSet__f_bitmap;
          const a = this.sci_HashSet$HashTrieSet__f_elems;
          let ai = 0;
          const b = x2.sci_HashSet$HashTrieSet__f_elems;
          let bbm = x2.sci_HashSet$HashTrieSet__f_bitmap;
          let bi = 0;
          if (((abm & bbm) === abm)) {
            while ((abm !== 0)) {
              const alsb = (abm ^ (abm & (((-1) + abm) | 0)));
              const blsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
              if ((alsb === blsb)) {
                if ((!a.get(ai).subsetOf0__sci_HashSet__I__Z(b.get(bi), ((5 + level) | 0)))) {
                  return false
                };
                abm = (abm & (~alsb));
                ai = ((1 + ai) | 0)
              };
              bbm = (bbm & (~blsb));
              bi = ((1 + bi) | 0)
            };
            return true
          } else {
            return false
          }
        }
      };
      return false
    }
  };
  foreach__F1__V(f) {
    let i = 0;
    while ((i < this.sci_HashSet$HashTrieSet__f_elems.u.length)) {
      this.sci_HashSet$HashTrieSet__f_elems.get(i).foreach__F1__V(f);
      i = ((1 + i) | 0)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sci_HashSet$HashTrieSet$$anon$2(this)
  };
}
function $as_sci_HashSet$HashTrieSet(obj) {
  return (((obj instanceof $c_sci_HashSet$HashTrieSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashTrieSet"))
}
function $isArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashTrieSet)))
}
function $asArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashTrieSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashTrieSet;", depth))
}
const $d_sci_HashSet$HashTrieSet = new $TypeData().initClass({
  sci_HashSet$HashTrieSet: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet", {
  sci_HashSet$HashTrieSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashTrieSet.prototype.$classData = $d_sci_HashSet$HashTrieSet;
const $ct_sci_HashSet$LeafHashSet__I__ = (function($thiz, hash) {
  $thiz.sci_HashSet$LeafHashSet__f_hash = hash;
  return $thiz
});
class $c_sci_HashSet$LeafHashSet extends $c_sci_HashSet {
  constructor() {
    super();
    this.sci_HashSet$LeafHashSet__f_hash = 0
  };
}
function $as_sci_HashSet$LeafHashSet(obj) {
  return (((obj instanceof $c_sci_HashSet$LeafHashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$LeafHashSet"))
}
function $isArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$LeafHashSet)))
}
function $asArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$LeafHashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$LeafHashSet;", depth))
}
function $is_scm_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Map)))
}
function $as_scm_Map(obj) {
  return (($is_scm_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Map"))
}
function $isArrayOf_scm_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Map)))
}
function $asArrayOf_scm_Map(obj, depth) {
  return (($isArrayOf_scm_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Map;", depth))
}
class $c_sci_HashSet$HashSet1 extends $c_sci_HashSet$LeafHashSet {
  constructor(key, hash) {
    super();
    this.sci_HashSet$HashSet1__f_key = null;
    this.sci_HashSet$HashSet1__f_key = key;
    $ct_sci_HashSet$LeafHashSet__I__(this, hash)
  };
  size__I() {
    return 1
  };
  get0__O__I__I__Z(key, hash, level) {
    return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key))
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_HashSet$HashSet1)) {
      const x2 = $as_sci_HashSet$HashSet1(other);
      return ((this === x2) || ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)))
    } else {
      return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
    }
  };
  subsetOf0__sci_HashSet__I__Z(that, level) {
    return ((this === that) || that.get0__O__I__I__Z(this.sci_HashSet$HashSet1__f_key, this.sci_HashSet$LeafHashSet__f_hash, level))
  };
  updated0__O__I__I__sci_HashSet(key, hash, level) {
    if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key)) {
        return this
      } else {
        $m_sci_ListSet$();
        const this$2 = $m_sci_ListSet$EmptyListSet$();
        const elem = this.sci_HashSet$HashSet1__f_key;
        return new $c_sci_HashSet$HashSetCollision1(hash, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(key), 2)
      }
    } else {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, 2)
    }
  };
  union0__sci_HashSet__I__sci_HashSet(that, level) {
    if ((that instanceof $c_sci_HashSet$HashSet1)) {
      const x2 = $as_sci_HashSet$HashSet1(that);
      if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
        if ($m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)) {
          return this
        } else {
          const $$x1 = this.sci_HashSet$LeafHashSet__f_hash;
          $m_sci_ListSet$();
          const this$2 = $m_sci_ListSet$EmptyListSet$();
          const elem = this.sci_HashSet$HashSet1__f_key;
          return new $c_sci_HashSet$HashSetCollision1($$x1, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key), 2)
        }
      } else {
        return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, 2)
      }
    } else {
      return that.union0__sci_HashSet__I__sci_HashSet(this, level)
    }
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.sci_HashSet$HashSet1__f_key];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.sci_HashSet$HashSet1__f_key)
  };
}
function $as_sci_HashSet$HashSet1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSet1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSet1"))
}
function $isArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSet1)))
}
function $asArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSet1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSet1;", depth))
}
const $d_sci_HashSet$HashSet1 = new $TypeData().initClass({
  sci_HashSet$HashSet1: 0
}, false, "scala.collection.immutable.HashSet$HashSet1", {
  sci_HashSet$HashSet1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSet1.prototype.$classData = $d_sci_HashSet$HashSet1;
class $c_sci_HashSet$HashSetCollision1 extends $c_sci_HashSet$LeafHashSet {
  constructor(hash, ks, size) {
    super();
    this.sci_HashSet$HashSetCollision1__f_ks = null;
    this.sci_HashSet$HashSetCollision1__f_size = 0;
    this.sci_HashSet$HashSetCollision1__f_ks = ks;
    this.sci_HashSet$HashSetCollision1__f_size = size;
    $ct_sci_HashSet$LeafHashSet__I__(this, hash)
  };
  size__I() {
    return this.sci_HashSet$HashSetCollision1__f_size
  };
  get0__O__I__I__Z(key, hash, level) {
    return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && this.sci_HashSet$HashSetCollision1__f_ks.contains__O__Z(key))
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_HashSet$HashSetCollision1)) {
      const x2 = $as_sci_HashSet$HashSetCollision1(other);
      if ((this === x2)) {
        return true
      } else if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
        const x = this.sci_HashSet$HashSetCollision1__f_ks;
        const x$2 = x2.sci_HashSet$HashSetCollision1__f_ks;
        return ((x === null) ? (x$2 === null) : $f_sc_GenSetLike__equals__O__Z(x, x$2))
      } else {
        return false
      }
    } else {
      return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
    }
  };
  subsetOf0__sci_HashSet__I__Z(that, level) {
    if ((this === that)) {
      return true
    } else {
      const this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
      const this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
      const this$3 = new $c_sc_LinearSeqLike$$anon$1(this$2);
      let res = true;
      while ((res && this$3.hasNext__Z())) {
        const arg1 = this$3.next__O();
        res = that.get0__O__I__I__Z(arg1, this.sci_HashSet$LeafHashSet__f_hash, level)
      };
      return res
    }
  };
  updated0__O__I__I__sci_HashSet(key, hash, level) {
    if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
      const ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(key);
      return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
    } else {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
    }
  };
  union0__sci_HashSet__I__sci_HashSet(that, level) {
    if ((that instanceof $c_sci_HashSet$HashSet1)) {
      const x2 = $as_sci_HashSet$HashSet1(that);
      if ((x2.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
        return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
      } else {
        const ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key);
        return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
      }
    } else if ((that instanceof $c_sci_HashSet$HashSetCollision1)) {
      const x3 = $as_sci_HashSet$HashSetCollision1(that);
      if ((x3.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
        return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x3.sci_HashSet$LeafHashSet__f_hash, x3, level, ((this.sci_HashSet$HashSetCollision1__f_size + x3.sci_HashSet$HashSetCollision1__f_size) | 0))
      } else if ((this === x3)) {
        return this
      } else {
        const ks1$2 = this.sci_HashSet$HashSetCollision1__f_ks.$plus$plus__sc_GenTraversableOnce__sci_ListSet(x3.sci_HashSet$HashSetCollision1__f_ks);
        if ((ks1$2 === this.sci_HashSet$HashSetCollision1__f_ks)) {
          return this
        } else {
          const newSize = ks1$2.size__I();
          return ((newSize === x3.sci_HashSet$HashSetCollision1__f_size) ? x3 : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1$2, newSize))
        }
      }
    } else {
      return that.union0__sci_HashSet__I__sci_HashSet(this, level)
    }
  };
  iterator__sc_Iterator() {
    const this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
    const this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
    return new $c_sc_LinearSeqLike$$anon$1(this$2)
  };
  foreach__F1__V(f) {
    const this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
    const this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
    const this$3 = new $c_sc_LinearSeqLike$$anon$1(this$2);
    $f_sc_Iterator__foreach__F1__V(this$3, f)
  };
}
function $as_sci_HashSet$HashSetCollision1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSetCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetCollision1"))
}
function $isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSetCollision1)))
}
function $asArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetCollision1;", depth))
}
const $d_sci_HashSet$HashSetCollision1 = new $TypeData().initClass({
  sci_HashSet$HashSetCollision1: 0
}, false, "scala.collection.immutable.HashSet$HashSetCollision1", {
  sci_HashSet$HashSetCollision1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSetCollision1.prototype.$classData = $d_sci_HashSet$HashSetCollision1;
const $p_sci_ListMap__reverseList$1__sci_List = (function($thiz) {
  let curr = $thiz;
  let res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    const x$4 = $ct_T2__O__O__(new $c_T2(), curr.key__O(), curr.value__O());
    const this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListMap()
  };
  return res
});
class $c_sci_ListMap extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  get__O__s_Option(key) {
    return $m_s_None$()
  };
  foreachEntry__F2__V(f) {
    let current = this;
    while ((!current.isEmpty__Z())) {
      f.apply__O__O__O(current.key__O(), current.value__O());
      current = current.next__sci_ListMap()
    }
  };
  hashCode__I() {
    if (this.isEmpty__Z()) {
      return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
    } else {
      const hasher = new $c_sci_Map$HashCodeAccumulator();
      this.foreachEntry__F2__V(hasher);
      return hasher.finalizeHash__I()
    }
  };
  updated__O__O__sci_ListMap(key, value) {
    return new $c_sci_ListMap$Node(this, key, value)
  };
  $plus__T2__sci_ListMap(kv) {
    return new $c_sci_ListMap$Node(this, kv._1__O(), kv._2__O())
  };
  $plus$plus__sc_GenTraversableOnce__sci_ListMap(xs) {
    return (xs.isEmpty__Z() ? this : $as_sci_ListMap(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((this$1) => ((x$2$2, x$3$2) => {
      const x$2 = $as_sci_ListMap(x$2$2);
      const x$3 = $as_T2(x$3$2);
      return x$2.$plus__T2__sci_ListMap(x$3)
    }))(this)))))
  };
  iterator__sc_Iterator() {
    const this$1 = $p_sci_ListMap__reverseList$1__sci_List(this);
    return new $c_sc_LinearSeqLike$$anon$1(this$1)
  };
  key__O() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "key of empty map")
  };
  value__O() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "value of empty map")
  };
  next__sci_ListMap() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty map")
  };
  stringPrefix__T() {
    return "ListMap"
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_Map() {
    return this
  };
  $plus__T2__sc_GenMap(kv) {
    return this.$plus__T2__sci_ListMap(kv)
  };
  empty__sc_Map() {
    $m_sci_ListMap$();
    return $m_sci_ListMap$EmptyListMap$()
  };
  empty__sci_Map() {
    $m_sci_ListMap$();
    return $m_sci_ListMap$EmptyListMap$()
  };
}
function $as_sci_ListMap(obj) {
  return (((obj instanceof $c_sci_ListMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListMap"))
}
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListMap)))
}
function $asArrayOf_sci_ListMap(obj, depth) {
  return (($isArrayOf_sci_ListMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth))
}
class $c_sci_Map$EmptyMap$ extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  apply__O__E(key) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  };
  get__O__s_Option(key) {
    return $m_s_None$()
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_empty
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  };
  $plus__T2__sc_GenMap(kv) {
    const key = kv._1__O();
    const value = kv._2__O();
    return new $c_sci_Map$Map1(key, value)
  };
  apply__O__O(key) {
    this.apply__O__E(key)
  };
}
const $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
let $n_sci_Map$EmptyMap$ = (void 0);
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
class $c_sci_Map$Map1 extends $c_sci_AbstractMap {
  constructor(key1, value1) {
    super();
    this.sci_Map$Map1__f_key1 = null;
    this.sci_Map$Map1__f_value1 = null;
    this.sci_Map$Map1__f_key1 = key1;
    this.sci_Map$Map1__f_value1 = value1
  };
  size__I() {
    return 1
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
      return this.sci_Map$Map1__f_value1
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$())
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [$ct_T2__O__O__(new $c_T2(), this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
  };
  foreach__F1__V(f) {
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const x = this.sci_Map$Map1__f_key1;
    const y = this.sci_Map$Map1__f_value1;
    let h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1)
  };
  $plus__T2__sc_GenMap(kv) {
    return this.updated__O__O__sci_Map(kv._1__O(), kv._2__O())
  };
}
const $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
class $c_sci_Map$Map2 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2) {
    super();
    this.sci_Map$Map2__f_key1 = null;
    this.sci_Map$Map2__f_value1 = null;
    this.sci_Map$Map2__f_key2 = null;
    this.sci_Map$Map2__f_value2 = null;
    this.sci_Map$Map2__f_key1 = key1;
    this.sci_Map$Map2__f_value1 = value1;
    this.sci_Map$Map2__f_key2 = key2;
    this.sci_Map$Map2__f_value2 = value2
  };
  size__I() {
    return 2
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1)) {
      return this.sci_Map$Map2__f_value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2)) {
      return this.sci_Map$Map2__f_value2
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_s_Some(this.sci_Map$Map2__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_s_Some(this.sci_Map$Map2__f_value2) : $m_s_None$()))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [$ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2)];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, value, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2, key, value)))
  };
  foreach__F1__V(f) {
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const x = this.sci_Map$Map2__f_key1;
    const y = this.sci_Map$Map2__f_value1;
    let h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    const x$1 = this.sci_Map$Map2__f_key2;
    const y$1 = this.sci_Map$Map2__f_value2;
    h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2)
  };
  $plus__T2__sc_GenMap(kv) {
    return this.updated__O__O__sci_Map(kv._1__O(), kv._2__O())
  };
}
const $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
class $c_sci_Map$Map3 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3) {
    super();
    this.sci_Map$Map3__f_key1 = null;
    this.sci_Map$Map3__f_value1 = null;
    this.sci_Map$Map3__f_key2 = null;
    this.sci_Map$Map3__f_value2 = null;
    this.sci_Map$Map3__f_key3 = null;
    this.sci_Map$Map3__f_value3 = null;
    this.sci_Map$Map3__f_key1 = key1;
    this.sci_Map$Map3__f_value1 = value1;
    this.sci_Map$Map3__f_key2 = key2;
    this.sci_Map$Map3__f_value2 = value2;
    this.sci_Map$Map3__f_key3 = key3;
    this.sci_Map$Map3__f_value3 = value3
  };
  size__I() {
    return 3
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1)) {
      return this.sci_Map$Map3__f_value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2)) {
      return this.sci_Map$Map3__f_value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3)) {
      return this.sci_Map$Map3__f_value3
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_s_Some(this.sci_Map$Map3__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_s_Some(this.sci_Map$Map3__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_s_Some(this.sci_Map$Map3__f_value3) : $m_s_None$())))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [$ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3)];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, value, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, value, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3, key, value))))
  };
  foreach__F1__V(f) {
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const x = this.sci_Map$Map3__f_key1;
    const y = this.sci_Map$Map3__f_value1;
    let h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    const x$1 = this.sci_Map$Map3__f_key2;
    const y$1 = this.sci_Map$Map3__f_value2;
    h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$3 = $m_s_util_hashing_MurmurHash3$();
    const x$2 = this.sci_Map$Map3__f_key3;
    const y$2 = this.sci_Map$Map3__f_value3;
    h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3)
  };
  $plus__T2__sc_GenMap(kv) {
    return this.updated__O__O__sci_Map(kv._1__O(), kv._2__O())
  };
}
const $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
class $c_sci_Map$Map4 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3, key4, value4) {
    super();
    this.sci_Map$Map4__f_key1 = null;
    this.sci_Map$Map4__f_value1 = null;
    this.sci_Map$Map4__f_key2 = null;
    this.sci_Map$Map4__f_value2 = null;
    this.sci_Map$Map4__f_key3 = null;
    this.sci_Map$Map4__f_value3 = null;
    this.sci_Map$Map4__f_key4 = null;
    this.sci_Map$Map4__f_value4 = null;
    this.sci_Map$Map4__f_key1 = key1;
    this.sci_Map$Map4__f_value1 = value1;
    this.sci_Map$Map4__f_key2 = key2;
    this.sci_Map$Map4__f_value2 = value2;
    this.sci_Map$Map4__f_key3 = key3;
    this.sci_Map$Map4__f_value3 = value3;
    this.sci_Map$Map4__f_key4 = key4;
    this.sci_Map$Map4__f_value4 = value4
  };
  size__I() {
    return 4
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1)) {
      return this.sci_Map$Map4__f_value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2)) {
      return this.sci_Map$Map4__f_value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3)) {
      return this.sci_Map$Map4__f_value3
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4)) {
      return this.sci_Map$Map4__f_value4
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  get__O__s_Option(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_s_Some(this.sci_Map$Map4__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_s_Some(this.sci_Map$Map4__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_s_Some(this.sci_Map$Map4__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_s_Some(this.sci_Map$Map4__f_value4) : $m_s_None$()))))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [$ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3), $ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4)];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, value, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, value, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, value, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, value) : $ct_sci_HashMap__(new $c_sci_HashMap()).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4).updated__O__O__sci_HashMap(key, value)))))
  };
  foreach__F1__V(f) {
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3));
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4))
  };
  hashCode__I() {
    let a = 0;
    let b = 0;
    let c = 1;
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const x = this.sci_Map$Map4__f_key1;
    const y = this.sci_Map$Map4__f_value1;
    let h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    const x$1 = this.sci_Map$Map4__f_key2;
    const y$1 = this.sci_Map$Map4__f_value2;
    h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$3 = $m_s_util_hashing_MurmurHash3$();
    const x$2 = this.sci_Map$Map4__f_key3;
    const y$2 = this.sci_Map$Map4__f_value3;
    h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    const this$4 = $m_s_util_hashing_MurmurHash3$();
    const x$3 = this.sci_Map$Map4__f_key4;
    const y$3 = this.sci_Map$Map4__f_value4;
    h = this$4.product2Hash__O__O__I__I(x$3, y$3, (-889275714));
    a = ((a + h) | 0);
    b = (b ^ h);
    if ((h !== 0)) {
      c = $imul(c, h)
    };
    h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
    h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
    h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
    return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4)
  };
  $plus__T2__sc_GenMap(kv) {
    return this.updated__O__O__sci_Map(kv._1__O(), kv._2__O())
  };
}
const $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
class $c_sci_Stream extends $c_sc_AbstractSeq {
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Stream$()
  };
  append__F0__sci_Stream(rest) {
    if (this.isEmpty__Z()) {
      return $as_sc_GenTraversableOnce(rest.apply__O()).toStream__sci_Stream()
    } else {
      const hd = this.head__O();
      const tl = new $c_sjsr_AnonFunction0(((this$1, rest$1) => (() => $as_sci_Stream(this$1.tail__O()).append__F0__sci_Stream(rest$1)))(this, rest));
      return new $c_sci_Stream$Cons(hd, tl)
    }
  };
  force__sci_Stream() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      these = $as_sci_Stream(these.tail__O())
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if ((these === those)) {
        return this
      };
      those = $as_sci_Stream(those.tail__O())
    };
    return this
  };
  length__I() {
    let len = 0;
    let left = this;
    while ((!left.isEmpty__Z())) {
      len = ((1 + len) | 0);
      left = $as_sci_Stream(left.tail__O())
    };
    return len
  };
  toStream__sci_Stream() {
    return this
  };
  flatMap__F1__scg_CanBuildFrom__O(f, bf) {
    if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
      let x$1;
      if (this.isEmpty__Z()) {
        x$1 = $m_sci_Stream$Empty$()
      } else {
        const nonEmptyPrefix = new $c_sr_ObjectRef(this);
        let prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream();
        while (((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z()) && prefix.isEmpty__Z())) {
          nonEmptyPrefix.sr_ObjectRef__f_elem = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).tail__O());
          if ((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z())) {
            prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream()
          }
        };
        x$1 = ($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z() ? ($m_sci_Stream$(), $m_sci_Stream$Empty$()) : prefix.append__F0__sci_Stream(new $c_sjsr_AnonFunction0(((this$3, nonEmptyPrefix$1, f$1) => (() => {
          const x = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix$1.sr_ObjectRef__f_elem).tail__O()).flatMap__F1__scg_CanBuildFrom__O(f$1, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
          return $as_sci_Stream(x)
        }))(this, nonEmptyPrefix, f))))
      };
      return x$1
    } else {
      return $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O(this, f, bf)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sci_StreamIterator(this)
  };
  foreach__F1__V(f) {
    let _$this = this;
    while (true) {
      if ((!_$this.isEmpty__Z())) {
        f.apply__O__O(_$this.head__O());
        _$this = $as_sci_Stream(_$this.tail__O());
        continue
      };
      break
    }
  };
  foldLeft__O__F2__O(z, op) {
    let _$this = this;
    while (true) {
      if (_$this.isEmpty__Z()) {
        return z
      } else {
        const temp$_$this = $as_sci_Stream(_$this.tail__O());
        const temp$z = op.apply__O__O__O(z, _$this.head__O());
        _$this = temp$_$this;
        z = temp$z
      }
    }
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    b.append__T__scm_StringBuilder(start);
    if ((!this.isEmpty__Z())) {
      b.append__O__scm_StringBuilder(this.head__O());
      let cursor = this;
      let n = 1;
      if (cursor.tailDefined__Z()) {
        let scout = $as_sci_Stream(this.tail__O());
        if (scout.isEmpty__Z()) {
          b.append__T__scm_StringBuilder(end);
          return b
        };
        if ((cursor !== scout)) {
          cursor = scout;
          if (scout.tailDefined__Z()) {
            scout = $as_sci_Stream(scout.tail__O());
            while (((cursor !== scout) && scout.tailDefined__Z())) {
              b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
              n = ((1 + n) | 0);
              cursor = $as_sci_Stream(cursor.tail__O());
              scout = $as_sci_Stream(scout.tail__O());
              if (scout.tailDefined__Z()) {
                scout = $as_sci_Stream(scout.tail__O())
              }
            }
          }
        };
        if ((!scout.tailDefined__Z())) {
          while ((cursor !== scout)) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O())
          };
          const this$1 = cursor;
          if ((!this$1.isEmpty__Z())) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O())
          }
        } else {
          let runner = this;
          let k = 0;
          while ((runner !== scout)) {
            runner = $as_sci_Stream(runner.tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            k = ((1 + k) | 0)
          };
          if (((cursor === scout) && (k > 0))) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O())
          };
          while ((cursor !== scout)) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O())
          };
          n = ((n - k) | 0)
        }
      };
      if ((!cursor.isEmpty__Z())) {
        if ((!cursor.tailDefined__Z())) {
          b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("?")
        } else {
          b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("...")
        }
      }
    };
    b.append__T__scm_StringBuilder(end);
    return b
  };
  mkString__T__T__T__T(start, sep, end) {
    this.force__sci_Stream();
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
  };
  toString__T() {
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this, "Stream(", ", ", ")")
  };
  drop__I__sci_Stream(n) {
    let _$this = this;
    while (true) {
      if (((n <= 0) || _$this.isEmpty__Z())) {
        return _$this
      } else {
        const temp$_$this = $as_sci_Stream(_$this.tail__O());
        const temp$n = (((-1) + n) | 0);
        _$this = temp$_$this;
        n = temp$n
      }
    }
  };
  stringPrefix__T() {
    return "Stream"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_GenSeqLike__equals__O__Z(this, that))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
  };
  drop__I__sc_LinearSeqOptimized(n) {
    return this.drop__I__sci_Stream(n)
  };
}
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
const $p_sci_HashMap__isCompatibleCBF__scg_CanBuildFrom__Z = (function($thiz, cbf) {
  while (true) {
    const x1 = cbf;
    if ((x1 instanceof $c_sc_package$WrappedCanBuildFrom)) {
      const x2 = $as_sc_package$WrappedCanBuildFrom(x1);
      cbf = x2.wrapped__scg_CanBuildFrom()
    } else {
      const $$x1 = cbf;
      const this$1 = $m_sci_HashMap$();
      if (($$x1 === this$1.sci_HashMap$__f_ReusableCBF)) {
        return true
      } else {
        return (cbf === $m_sci_Map$().sci_Map$__f_ReusableCBF)
      }
    }
  }
});
const $ct_sci_HashMap__ = (function($thiz) {
  return $thiz
});
class $c_sci_HashMap extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_empty
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  foreachEntry__F2__V(f) {
    /*<skip>*/
  };
  hashCode__I() {
    if ($f_sc_MapLike__isEmpty__Z(this)) {
      return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
    } else {
      const hasher = new $c_sci_Map$HashCodeAccumulator();
      this.foreachEntry__F2__V(hasher);
      return hasher.finalizeHash__I()
    }
  };
  get__O__s_Option(key) {
    return this.get0__O__I__I__s_Option(key, this.computeHash__O__I(key), 0)
  };
  updated__O__O__sci_HashMap(key, value) {
    return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, this.computeHash__O__I(key), 0, value, null, null)
  };
  $plus__T2__sci_HashMap(kv) {
    return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv._1__O(), this.computeHash__O__I(kv._1__O()), 0, kv._2__O(), kv, null)
  };
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
  computeHash__O__I(key) {
    return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
  };
  get0__O__I__I__s_Option(key, hash, level) {
    return $m_s_None$()
  };
  updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, level, value, kv, merger) {
    return new $c_sci_HashMap$HashMap1(key, hash, value, kv)
  };
  merged__sci_HashMap__F2__sci_HashMap(that, mergef) {
    return this.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(that, 0, $m_sci_HashMap$().scala$collection$immutable$HashMap$$liftMerger__F2__sci_HashMap$Merger(mergef))
  };
  merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(that, level, merger) {
    return that
  };
  $plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(that, bf) {
    if ($p_sci_HashMap__isCompatibleCBF__scg_CanBuildFrom__Z(this, bf)) {
      if ((this === that)) {
        return that
      } else if (that.isEmpty__Z()) {
        return this
      } else if ((that instanceof $c_sci_HashMap)) {
        const x2 = $as_sci_HashMap(that);
        return x2.merged__sci_HashMap__F2__sci_HashMap(this, null)
      } else {
        const result = new $c_sr_ObjectRef(this);
        that.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, result$1) => ((x0$1$2) => {
          if ((x0$1$2 instanceof $c_T2)) {
            const x2$1 = $as_T2(x0$1$2);
            result$1.sr_ObjectRef__f_elem = $as_sci_HashMap(result$1.sr_ObjectRef__f_elem).$plus__T2__sci_HashMap(x2$1)
          } else {
            throw new $c_s_MatchError(x0$1$2)
          }
        }))(this, result)));
        return $as_sci_HashMap(result.sr_ObjectRef__f_elem)
      }
    } else {
      return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
    }
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Map() {
    return this
  };
  $plus__T2__sc_GenMap(kv) {
    return this.$plus__T2__sci_HashMap(kv)
  };
  empty__sc_Map() {
    $m_sci_HashMap$();
    return $m_sci_HashMap$EmptyHashMap$()
  };
  empty__sci_Map() {
    $m_sci_HashMap$();
    return $m_sci_HashMap$EmptyHashMap$()
  };
}
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
const $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
class $c_sci_List extends $c_sc_AbstractSeq {
  length__I() {
    return $f_sc_LinearSeqOptimized__length__I(this)
  };
  foldLeft__O__F2__O(z, op) {
    return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this, z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_LinearSeqLike$$anon$1(this)
  };
  companion__scg_GenericCompanion() {
    return $m_sci_List$()
  };
  drop__I__sci_List(n) {
    let these = this;
    let count = n;
    while (((!these.isEmpty__Z()) && (count > 0))) {
      const this$1 = these;
      these = this$1.tail__sci_List();
      count = (((-1) + count) | 0)
    };
    return these
  };
  foreach__F1__V(f) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      f.apply__O__O(these.head__O());
      const this$1 = these;
      these = this$1.tail__sci_List()
    }
  };
  stringPrefix__T() {
    return "List"
  };
  toStream__sci_Stream() {
    return (this.isEmpty__Z() ? $m_sci_Stream$Empty$() : new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.tail__sci_List().toStream__sci_Stream()))(this))))
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
  };
  drop__I__sc_LinearSeqOptimized(n) {
    return this.drop__I__sci_List(n)
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
class $c_sci_ListMap$EmptyListMap$ extends $c_sci_ListMap {
}
const $d_sci_ListMap$EmptyListMap$ = new $TypeData().initClass({
  sci_ListMap$EmptyListMap$: 0
}, false, "scala.collection.immutable.ListMap$EmptyListMap$", {
  sci_ListMap$EmptyListMap$: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$EmptyListMap$.prototype.$classData = $d_sci_ListMap$EmptyListMap$;
let $n_sci_ListMap$EmptyListMap$ = (void 0);
function $m_sci_ListMap$EmptyListMap$() {
  if ((!$n_sci_ListMap$EmptyListMap$)) {
    $n_sci_ListMap$EmptyListMap$ = new $c_sci_ListMap$EmptyListMap$()
  };
  return $n_sci_ListMap$EmptyListMap$
}
const $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I = (function($thiz, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return acc
    } else {
      const temp$cur = cur.next__sci_ListMap();
      const temp$acc = ((1 + acc) | 0);
      cur = temp$cur;
      acc = temp$acc
    }
  }
});
const $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O = (function($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + k))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return cur.value__O()
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
});
const $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option = (function($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return $m_s_None$()
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return new $c_s_Some(cur.value__O())
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
});
const $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z = (function($thiz, cur, k) {
  while (true) {
    if ((!cur.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
        return true
      } else {
        cur = cur.next__sci_ListMap()
      }
    } else {
      return false
    }
  }
});
const $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap = (function($thiz, k, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      const this$1 = acc;
      return $as_sci_ListMap($f_sc_LinearSeqOptimized__last__O(this$1))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      const x$5 = cur.next__sci_ListMap();
      const this$2 = acc;
      let acc$1 = x$5;
      let these = this$2;
      while ((!these.isEmpty__Z())) {
        const arg1 = acc$1;
        const arg2 = these.head__O();
        const x0$1 = $as_sci_ListMap(arg1);
        const x1$1 = $as_sci_ListMap(arg2);
        acc$1 = new $c_sci_ListMap$Node(x0$1, x1$1.key__O(), x1$1.value__O());
        these = $as_sc_LinearSeqOptimized(these.tail__O())
      };
      return $as_sci_ListMap(acc$1)
    } else {
      const temp$cur = cur.next__sci_ListMap();
      const x$6 = cur;
      const this$3 = acc;
      const temp$acc = new $c_sci_$colon$colon(x$6, this$3);
      cur = temp$cur;
      acc = temp$acc
    }
  }
});
class $c_sci_ListMap$Node extends $c_sci_ListMap {
  constructor(outer, key, value) {
    super();
    this.sci_ListMap$Node__f_key = null;
    this.sci_ListMap$Node__f_value = null;
    this.sci_ListMap$Node__f_$outer = null;
    this.sci_ListMap$Node__f_key = key;
    this.sci_ListMap$Node__f_value = value;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_ListMap$Node__f_$outer = outer
    }
  };
  key__O() {
    return this.sci_ListMap$Node__f_key
  };
  value__O() {
    return this.sci_ListMap$Node__f_value
  };
  size__I() {
    return $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I(this, this, 0)
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(k) {
    return $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O(this, this, k)
  };
  get__O__s_Option(k) {
    return $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option(this, this, k)
  };
  contains__O__Z(k) {
    return $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z(this, this, k)
  };
  updated__O__O__sci_ListMap(k, v) {
    const m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
    return new $c_sci_ListMap$Node(m, k, v)
  };
  $plus__T2__sci_ListMap(kv) {
    const k = kv._1__O();
    const m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
    return new $c_sci_ListMap$Node(m, kv._1__O(), kv._2__O())
  };
  next__sci_ListMap() {
    return this.sci_ListMap$Node__f_$outer
  };
  $plus__T2__sc_GenMap(kv) {
    return this.$plus__T2__sci_ListMap(kv)
  };
}
const $d_sci_ListMap$Node = new $TypeData().initClass({
  sci_ListMap$Node: 0
}, false, "scala.collection.immutable.ListMap$Node", {
  sci_ListMap$Node: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$Node.prototype.$classData = $d_sci_ListMap$Node;
const $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z = (function($thiz, a, b) {
  while (true) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(a.sci_Stream$Cons__f_hd, b.sci_Stream$Cons__f_hd)) {
      const x1 = a.tail__sci_Stream();
      if ((x1 instanceof $c_sci_Stream$Cons)) {
        const x2 = $as_sci_Stream$Cons(x1);
        const x1$2 = b.tail__sci_Stream();
        if ((x1$2 instanceof $c_sci_Stream$Cons)) {
          const x2$2 = $as_sci_Stream$Cons(x1$2);
          if ((x2 === x2$2)) {
            return true
          } else {
            a = x2;
            b = x2$2
          }
        } else {
          return false
        }
      } else {
        return b.tail__sci_Stream().isEmpty__Z()
      }
    } else {
      return false
    }
  }
});
class $c_sci_Stream$Cons extends $c_sci_Stream {
  constructor(hd, tl) {
    super();
    this.sci_Stream$Cons__f_hd = null;
    this.sci_Stream$Cons__f_tlVal = null;
    this.sci_Stream$Cons__f_tlGen = null;
    this.sci_Stream$Cons__f_hd = hd;
    this.sci_Stream$Cons__f_tlGen = tl
  };
  isEmpty__Z() {
    return false
  };
  head__O() {
    return this.sci_Stream$Cons__f_hd
  };
  tailDefined__Z() {
    return (this.sci_Stream$Cons__f_tlGen === null)
  };
  tail__sci_Stream() {
    if ((!this.tailDefined__Z())) {
      if ((!this.tailDefined__Z())) {
        this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
        this.sci_Stream$Cons__f_tlGen = null
      }
    };
    return this.sci_Stream$Cons__f_tlVal
  };
  sameElements__sc_GenIterable__Z(that) {
    if ((that instanceof $c_sci_Stream$Cons)) {
      const x2 = $as_sci_Stream$Cons(that);
      return $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z(this, this, x2)
    } else {
      return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
    }
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
}
function $as_sci_Stream$Cons(obj) {
  return (((obj instanceof $c_sci_Stream$Cons) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$Cons"))
}
function $isArrayOf_sci_Stream$Cons(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$Cons)))
}
function $asArrayOf_sci_Stream$Cons(obj, depth) {
  return (($isArrayOf_sci_Stream$Cons(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$Cons;", depth))
}
const $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
class $c_sci_Stream$Empty$ extends $c_sci_Stream {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
  };
  tail__E() {
    throw new $c_jl_UnsupportedOperationException("tail of empty stream")
  };
  tailDefined__Z() {
    return false
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
let $n_sci_Stream$Empty$ = (void 0);
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
const $p_sci_Vector__checkRangeConvert__I__I = (function($thiz, index) {
  const idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + index))
  }
});
class $c_sci_Vector extends $c_sc_AbstractSeq {
  constructor(startIndex, endIndex, focus) {
    super();
    this.sci_Vector__f_startIndex = 0;
    this.sci_Vector__f_endIndex = 0;
    this.sci_Vector__f_focus = 0;
    this.sci_Vector__f_dirty = false;
    this.sci_Vector__f_depth = 0;
    this.sci_Vector__f_display0 = null;
    this.sci_Vector__f_display1 = null;
    this.sci_Vector__f_display2 = null;
    this.sci_Vector__f_display3 = null;
    this.sci_Vector__f_display4 = null;
    this.sci_Vector__f_display5 = null;
    this.sci_Vector__f_startIndex = startIndex;
    this.sci_Vector__f_endIndex = endIndex;
    this.sci_Vector__f_focus = focus;
    this.sci_Vector__f_dirty = false
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  sizeHintIfCheap__I() {
    return this.length__I()
  };
  depth__I() {
    return this.sci_Vector__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_Vector__f_depth = x$1
  };
  display0__AO() {
    return this.sci_Vector__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_Vector__f_display0 = x$1
  };
  display1__AO() {
    return this.sci_Vector__f_display1
  };
  display1_$eq__AO__V(x$1) {
    this.sci_Vector__f_display1 = x$1
  };
  display2__AO() {
    return this.sci_Vector__f_display2
  };
  display2_$eq__AO__V(x$1) {
    this.sci_Vector__f_display2 = x$1
  };
  display3__AO() {
    return this.sci_Vector__f_display3
  };
  display3_$eq__AO__V(x$1) {
    this.sci_Vector__f_display3 = x$1
  };
  display4__AO() {
    return this.sci_Vector__f_display4
  };
  display4_$eq__AO__V(x$1) {
    this.sci_Vector__f_display4 = x$1
  };
  display5__AO() {
    return this.sci_Vector__f_display5
  };
  display5_$eq__AO__V(x$1) {
    this.sci_Vector__f_display5 = x$1
  };
  companion__scg_GenericCompanion() {
    return $m_sci_Vector$()
  };
  length__I() {
    return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
  };
  lengthCompare__I__I(len) {
    return ((this.length__I() - len) | 0)
  };
  initIterator__sci_VectorIterator__V(s) {
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if (this.sci_Vector__f_dirty) {
      const index = this.sci_Vector__f_focus;
      $f_sci_VectorPointer__stabilize__I__V(s, index)
    };
    if ((s.sci_VectorIterator__f_depth > 1)) {
      const index$1 = this.sci_Vector__f_startIndex;
      const xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
    }
  };
  iterator__sci_VectorIterator() {
    const s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
    this.initIterator__sci_VectorIterator__V(s);
    return s
  };
  apply__I__O(index) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    const xor = (idx ^ this.sci_Vector__f_focus);
    return $f_sci_VectorPointer__getElem__I__I__O(this, idx, xor)
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterator__sc_Iterator() {
    return this.iterator__sci_VectorIterator()
  };
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
const $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_VectorPointer: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
const $f_scm_ResizableArray__apply__I__O = (function($thiz, idx) {
  if ((idx >= $thiz.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  return $thiz.scm_ArrayBuffer__f_array.get(idx)
});
const $f_scm_ResizableArray__foreach__F1__V = (function($thiz, f) {
  let i = 0;
  const top = $thiz.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    f.apply__O__O($thiz.scm_ArrayBuffer__f_array.get(i));
    i = ((1 + i) | 0)
  }
});
const $f_scm_ResizableArray__copyToArray__O__I__I__V = (function($thiz, xs, start, len) {
  const that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const x = ((len < that) ? len : that);
  const that$1 = $thiz.scm_ArrayBuffer__f_size0;
  const len1 = ((x < that$1) ? x : that$1);
  if ((len1 > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuffer__f_array, 0, xs, start, len1)
  }
});
const $f_scm_ResizableArray__ensureSize__I__V = (function($thiz, n) {
  const value = $thiz.scm_ArrayBuffer__f_array.u.length;
  const hi = (value >> 31);
  const hi$1 = (n >> 31);
  if (((hi$1 === hi) ? (((-2147483648) ^ n) > ((-2147483648) ^ value)) : (hi$1 > hi))) {
    const lo = (value << 1);
    const hi$2 = (((value >>> 31) | 0) | (hi << 1));
    let newSize__lo = lo;
    let newSize__hi = hi$2;
    while (true) {
      const hi$3 = (n >> 31);
      const b__lo = newSize__lo;
      const b__hi = newSize__hi;
      const bhi = b__hi;
      if (((hi$3 === bhi) ? (((-2147483648) ^ n) > ((-2147483648) ^ b__lo)) : (hi$3 > bhi))) {
        const this$4__lo = newSize__lo;
        const this$4__hi = newSize__hi;
        const lo$1 = (this$4__lo << 1);
        const hi$4 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi$4;
        newSize__lo = $$x1__lo;
        newSize__hi = $$x1__hi
      } else {
        break
      }
    };
    const this$5__lo = newSize__lo;
    const this$5__hi = newSize__hi;
    const ahi = this$5__hi;
    if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
      const $$x2__lo = 2147483647;
      const $$x2__hi = 0;
      newSize__lo = $$x2__lo;
      newSize__hi = $$x2__hi
    };
    const this$6__lo = newSize__lo;
    const this$6__hi = newSize__hi;
    const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
    const src = $thiz.scm_ArrayBuffer__f_array;
    const length = $thiz.scm_ArrayBuffer__f_size0;
    $systemArraycopy(src, 0, newArray, 0, length);
    $thiz.scm_ArrayBuffer__f_array = newArray
  }
});
const $f_scm_ResizableArray__$init$__V = (function($thiz) {
  const x = $thiz.scm_ArrayBuffer__f_initialSize;
  $thiz.scm_ArrayBuffer__f_array = $newArrayObject($d_O.getArrayOf(), [((x > 1) ? x : 1)]);
  $thiz.scm_ArrayBuffer__f_size0 = 0
});
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, tl) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_tl = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_tl = tl
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  tail__sci_List() {
    return this.sci_$colon$colon__f_tl
  };
  isEmpty__Z() {
    return false
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_tl;
        break
      }
      default: {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_tl
  };
}
function $as_sci_$colon$colon(obj) {
  return (((obj instanceof $c_sci_$colon$colon) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.$colon$colon"))
}
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_$colon$colon)))
}
function $asArrayOf_sci_$colon$colon(obj, depth) {
  return (($isArrayOf_sci_$colon$colon(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth))
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_HashMap$EmptyHashMap$ extends $c_sci_HashMap {
}
const $d_sci_HashMap$EmptyHashMap$ = new $TypeData().initClass({
  sci_HashMap$EmptyHashMap$: 0
}, false, "scala.collection.immutable.HashMap$EmptyHashMap$", {
  sci_HashMap$EmptyHashMap$: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$EmptyHashMap$.prototype.$classData = $d_sci_HashMap$EmptyHashMap$;
let $n_sci_HashMap$EmptyHashMap$ = (void 0);
function $m_sci_HashMap$EmptyHashMap$() {
  if ((!$n_sci_HashMap$EmptyHashMap$)) {
    $n_sci_HashMap$EmptyHashMap$ = new $c_sci_HashMap$EmptyHashMap$()
  };
  return $n_sci_HashMap$EmptyHashMap$
}
class $c_sci_HashMap$HashMap1 extends $c_sci_HashMap {
  constructor(key, hash, value, kv) {
    super();
    this.sci_HashMap$HashMap1__f_key = null;
    this.sci_HashMap$HashMap1__f_hash = 0;
    this.sci_HashMap$HashMap1__f_value = null;
    this.sci_HashMap$HashMap1__f_kv = null;
    this.sci_HashMap$HashMap1__f_key = key;
    this.sci_HashMap$HashMap1__f_hash = hash;
    this.sci_HashMap$HashMap1__f_value = value;
    this.sci_HashMap$HashMap1__f_kv = kv
  };
  size__I() {
    return 1
  };
  get0__O__I__I__s_Option(key, hash, level) {
    return (((hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) ? new $c_s_Some(this.sci_HashMap$HashMap1__f_value) : $m_s_None$())
  };
  updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, level, value, kv, merger) {
    if ((hash === this.sci_HashMap$HashMap1__f_hash)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) {
        if ((merger === null)) {
          return (Object.is(this.sci_HashMap$HashMap1__f_value, value) ? this : new $c_sci_HashMap$HashMap1(key, hash, value, kv))
        } else if (((Object.is(key, this.sci_HashMap$HashMap1__f_key) && Object.is(value, this.sci_HashMap$HashMap1__f_value)) && merger.retainIdentical__Z())) {
          return this
        } else {
          const current = this.ensurePair__T2();
          const nkv = merger.apply__T2__T2__T2(current, ((kv !== null) ? kv : $ct_T2__O__O__(new $c_T2(), key, value)));
          return (((current === nkv) || (Object.is(this.sci_HashMap$HashMap1__f_key, nkv._1__O()) && Object.is(this.sci_HashMap$HashMap1__f_value, nkv._2__O()))) ? this : new $c_sci_HashMap$HashMap1(nkv._1__O(), hash, nkv._2__O(), nkv))
        }
      } else {
        $m_sci_ListMap$();
        const this$2 = $m_sci_ListMap$EmptyListMap$();
        const key$1 = this.sci_HashMap$HashMap1__f_key;
        const value$1 = this.sci_HashMap$HashMap1__f_value;
        return new $c_sci_HashMap$HashMapCollision1(hash, new $c_sci_ListMap$Node(this$2, key$1, value$1).updated__O__O__sci_ListMap(key, value))
      }
    } else {
      const that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
      return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMap1__f_hash, this, hash, that, level, 2)
    }
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const array = [this.ensurePair__T2()];
    const elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.ensurePair__T2())
  };
  foreachEntry__F2__V(f) {
    f.apply__O__O__O(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value)
  };
  ensurePair__T2() {
    if ((this.sci_HashMap$HashMap1__f_kv !== null)) {
      return this.sci_HashMap$HashMap1__f_kv
    } else {
      this.sci_HashMap$HashMap1__f_kv = $ct_T2__O__O__(new $c_T2(), this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value);
      return this.sci_HashMap$HashMap1__f_kv
    }
  };
  merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(that, level, merger) {
    if ((that instanceof $c_sci_HashMap$HashMap1)) {
      const x2 = $as_sci_HashMap$HashMap1(that);
      return (((this === x2) && merger.retainIdentical__Z()) ? this : (((this.sci_HashMap$HashMap1__f_hash === x2.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_key)) ? ((merger === $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger) ? this : ((merger === $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger.invert__sci_HashMap$Merger()) ? x2 : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.sci_HashMap$HashMap1__f_kv, merger))) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.sci_HashMap$HashMap1__f_kv, merger)))
    } else {
      return that.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_hash, level, this.sci_HashMap$HashMap1__f_value, this.sci_HashMap$HashMap1__f_kv, merger.invert__sci_HashMap$Merger())
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap$HashMap1)) {
      const x2 = $as_sci_HashMap$HashMap1(that);
      return ((this === x2) || (((x2.sci_HashMap$HashMap1__f_hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_key)) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_value, this.sci_HashMap$HashMap1__f_value)))
    } else {
      return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
    }
  };
}
function $as_sci_HashMap$HashMap1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMap1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMap1"))
}
function $isArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMap1)))
}
function $asArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMap1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMap1;", depth))
}
const $d_sci_HashMap$HashMap1 = new $TypeData().initClass({
  sci_HashMap$HashMap1: 0
}, false, "scala.collection.immutable.HashMap$HashMap1", {
  sci_HashMap$HashMap1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMap1.prototype.$classData = $d_sci_HashMap$HashMap1;
class $c_sci_HashMap$HashMapCollision1 extends $c_sci_HashMap {
  constructor(hash, kvs) {
    super();
    this.sci_HashMap$HashMapCollision1__f_hash = 0;
    this.sci_HashMap$HashMapCollision1__f_kvs = null;
    this.sci_HashMap$HashMapCollision1__f_hash = hash;
    this.sci_HashMap$HashMapCollision1__f_kvs = kvs
  };
  size__I() {
    return this.sci_HashMap$HashMapCollision1__f_kvs.size__I()
  };
  get0__O__I__I__s_Option(key, hash, level) {
    return ((hash === this.sci_HashMap$HashMapCollision1__f_hash) ? this.sci_HashMap$HashMapCollision1__f_kvs.get__O__s_Option(key) : $m_s_None$())
  };
  updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, level, value, kv, merger) {
    if ((hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
      return (((merger === null) || (!this.sci_HashMap$HashMapCollision1__f_kvs.contains__O__Z(key))) ? new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.updated__O__O__sci_ListMap(key, value)) : new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.$plus__T2__sci_ListMap(merger.apply__T2__T2__T2($ct_T2__O__O__(new $c_T2(), key, this.sci_HashMap$HashMapCollision1__f_kvs.apply__O__O(key)), kv))))
    } else {
      const that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
      return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, hash, that, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
    }
  };
  iterator__sc_Iterator() {
    const this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
    const this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
    return new $c_sc_LinearSeqLike$$anon$1(this$2)
  };
  foreach__F1__V(f) {
    const this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
    const this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
    const this$3 = new $c_sc_LinearSeqLike$$anon$1(this$2);
    $f_sc_Iterator__foreach__F1__V(this$3, f)
  };
  foreachEntry__F2__V(f) {
    this.sci_HashMap$HashMapCollision1__f_kvs.foreachEntry__F2__V(f)
  };
  merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(that, level, merger) {
    if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
      const x2 = $as_sci_HashMap$HashTrieMap(that);
      return x2.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(this, level, merger.invert__sci_HashMap$Merger())
    } else if ((that instanceof $c_sci_HashMap$HashMap1)) {
      const x3 = $as_sci_HashMap$HashMap1(that);
      return ((x3.sci_HashMap$HashMap1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash) ? $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x3.sci_HashMap$HashMap1__f_hash, x3, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0)) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x3.sci_HashMap$HashMap1__f_key, x3.sci_HashMap$HashMap1__f_hash, level, x3.sci_HashMap$HashMap1__f_value, x3.sci_HashMap$HashMap1__f_kv, merger))
    } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
      const x4 = $as_sci_HashMap$HashMapCollision1(that);
      if ((x4.sci_HashMap$HashMapCollision1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash)) {
        return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x4.sci_HashMap$HashMapCollision1__f_hash, x4, level, ((x4.sci_HashMap$HashMapCollision1__f_kvs.size__I() + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
      } else if ((merger.retainIdentical__Z() && (x4 === this))) {
        return this
      } else if (((merger === $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger) || (merger === $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger.invert__sci_HashMap$Merger()))) {
        const newkvs = ((merger === $m_sci_HashMap$().sci_HashMap$__f_scala$collection$immutable$HashMap$$defaultMerger) ? x4.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(this.sci_HashMap$HashMapCollision1__f_kvs) : this.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(x4.sci_HashMap$HashMapCollision1__f_kvs));
        return ((newkvs === this.sci_HashMap$HashMapCollision1__f_kvs) ? this : ((newkvs === x4.sci_HashMap$HashMapCollision1__f_kvs) ? x4 : new $c_sci_HashMap$HashMapCollision1(this.sci_HashMap$HashMapCollision1__f_hash, newkvs)))
      } else {
        let elem = null;
        elem = null;
        if ((this.sci_HashMap$HashMapCollision1__f_kvs.size__I() >= x4.sci_HashMap$HashMapCollision1__f_kvs.size__I())) {
          elem = this;
          const this$2 = x4.sci_HashMap$HashMapCollision1__f_kvs;
          const this$3 = $p_sci_ListMap__reverseList$1__sci_List(this$2);
          const this$4 = new $c_sc_LinearSeqLike$$anon$1(this$3);
          while (this$4.hasNext__Z()) {
            const arg1 = this$4.next__O();
            const p = $as_T2(arg1);
            elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p._1__O(), this.sci_HashMap$HashMapCollision1__f_hash, level, p._2__O(), p, merger)
          }
        } else {
          elem = x4;
          const this$5 = this.sci_HashMap$HashMapCollision1__f_kvs;
          const this$6 = $p_sci_ListMap__reverseList$1__sci_List(this$5);
          const this$7 = new $c_sc_LinearSeqLike$$anon$1(this$6);
          while (this$7.hasNext__Z()) {
            const arg1$1 = this$7.next__O();
            const p$3 = $as_T2(arg1$1);
            elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p$3._1__O(), this.sci_HashMap$HashMapCollision1__f_hash, level, p$3._2__O(), p$3, merger.invert__sci_HashMap$Merger())
          }
        };
        return $as_sci_HashMap(elem)
      }
    } else if ((that === $m_sci_HashMap$EmptyHashMap$())) {
      return this
    } else {
      throw new $c_s_MatchError(that)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
      const x2 = $as_sci_HashMap$HashMapCollision1(that);
      if ((this === x2)) {
        return true
      } else if ((x2.sci_HashMap$HashMapCollision1__f_hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
        const x = x2.sci_HashMap$HashMapCollision1__f_kvs;
        const x$2 = this.sci_HashMap$HashMapCollision1__f_kvs;
        return ((x === null) ? (x$2 === null) : $f_sc_GenMapLike__equals__O__Z(x, x$2))
      } else {
        return false
      }
    } else {
      return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
    }
  };
}
function $as_sci_HashMap$HashMapCollision1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMapCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapCollision1"))
}
function $isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMapCollision1)))
}
function $asArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapCollision1;", depth))
}
const $d_sci_HashMap$HashMapCollision1 = new $TypeData().initClass({
  sci_HashMap$HashMapCollision1: 0
}, false, "scala.collection.immutable.HashMap$HashMapCollision1", {
  sci_HashMap$HashMapCollision1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMapCollision1.prototype.$classData = $d_sci_HashMap$HashMapCollision1;
const $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap = (function($thiz, larger, smaller, merger, level$2) {
  let resultElems = null;
  let ai = 0;
  let bi = 0;
  let abm = larger.sci_HashMap$HashTrieMap__f_bitmap;
  let bbm = smaller.sci_HashMap$HashTrieMap__f_bitmap;
  const a = larger.sci_HashMap$HashTrieMap__f_elems;
  const b = smaller.sci_HashMap$HashTrieMap__f_elems;
  let additionalSize = 0;
  let bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    const skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    const aai = a.get(ai);
    const bbi = b.get(bi);
    const result = (((aai === bbi) && merger.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = $asArrayOf_sci_HashMap(a.clone__O(), 1)
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashMap$HashTrieMap(larger.sci_HashMap$HashTrieMap__f_bitmap, resultElems, ((larger.sci_HashMap$HashTrieMap__f_size + additionalSize) | 0)))
});
const $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap = (function($thiz, x3$1) {
  let ai = 0;
  let bi = 0;
  let offset = 0;
  const abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap;
  const bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap;
  const a = $thiz.sci_HashMap$HashTrieMap__f_elems;
  const b = x3$1.sci_HashMap$HashTrieMap__f_elems;
  let allBits = (abm | bbm);
  const i = allBits;
  const resultElems = $newArrayObject($d_sci_HashMap.getArrayOf(), [$m_jl_Integer$().bitCount__I__I(i)]);
  let lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, (($thiz.sci_HashMap$HashTrieMap__f_size + x3$1.sci_HashMap$HashTrieMap__f_size) | 0))
});
const $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap = (function($thiz, x3$1, merger$2, level$2) {
  let ai = 0;
  let bi = 0;
  const abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap;
  const bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap;
  const a = $thiz.sci_HashMap$HashTrieMap__f_elems;
  const b = x3$1.sci_HashMap$HashTrieMap__f_elems;
  let allBits = (abm | bbm);
  const i = allBits;
  const resultElems = $newArrayObject($d_sci_HashMap.getArrayOf(), [$m_jl_Integer$().bitCount__I__I(i)]);
  let offset = 0;
  let rs = 0;
  let lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  let result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        const aai = a.get(ai);
        const bbi = b.get(bi);
        result = (((aai === bbi) && merger$2.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger$2));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, rs)
});
class $c_sci_HashMap$HashTrieMap extends $c_sci_HashMap {
  constructor(bitmap, elems, size) {
    super();
    this.sci_HashMap$HashTrieMap__f_bitmap = 0;
    this.sci_HashMap$HashTrieMap__f_elems = null;
    this.sci_HashMap$HashTrieMap__f_size = 0;
    this.sci_HashMap$HashTrieMap__f_bitmap = bitmap;
    this.sci_HashMap$HashTrieMap__f_elems = elems;
    this.sci_HashMap$HashTrieMap__f_size = size
  };
  size__I() {
    return this.sci_HashMap$HashTrieMap__f_size
  };
  get0__O__I__I__s_Option(key, hash, level) {
    const index = (31 & ((hash >>> level) | 0));
    if ((this.sci_HashMap$HashTrieMap__f_bitmap === (-1))) {
      return this.sci_HashMap$HashTrieMap__f_elems.get(index).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
    } else {
      const mask = (1 << index);
      if (((this.sci_HashMap$HashTrieMap__f_bitmap & mask) !== 0)) {
        const i = (this.sci_HashMap$HashTrieMap__f_bitmap & (((-1) + mask) | 0));
        const offset = $m_jl_Integer$().bitCount__I__I(i);
        return this.sci_HashMap$HashTrieMap__f_elems.get(offset).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
      } else {
        return $m_s_None$()
      }
    }
  };
  updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, level, value, kv, merger) {
    const index = (31 & ((hash >>> level) | 0));
    const mask = (1 << index);
    const i = (this.sci_HashMap$HashTrieMap__f_bitmap & (((-1) + mask) | 0));
    const offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap & mask) !== 0)) {
      const sub = this.sci_HashMap$HashTrieMap__f_elems.get(offset);
      const subNew = sub.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, ((5 + level) | 0), value, kv, merger);
      if ((subNew === sub)) {
        return this
      } else {
        const elemsNew = $asArrayOf_sci_HashMap(this.sci_HashMap$HashTrieMap__f_elems.clone__O(), 1);
        elemsNew.set(offset, subNew);
        return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
      }
    } else {
      const elemsNew$2 = $newArrayObject($d_sci_HashMap.getArrayOf(), [((1 + this.sci_HashMap$HashTrieMap__f_elems.u.length) | 0)]);
      const src = this.sci_HashMap$HashTrieMap__f_elems;
      $systemArraycopy(src, 0, elemsNew$2, 0, offset);
      elemsNew$2.set(offset, new $c_sci_HashMap$HashMap1(key, hash, value, kv));
      const src$1 = this.sci_HashMap$HashTrieMap__f_elems;
      const destPos = ((1 + offset) | 0);
      const length = ((this.sci_HashMap$HashTrieMap__f_elems.u.length - offset) | 0);
      $systemArraycopy(src$1, offset, elemsNew$2, destPos, length);
      return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap | mask), elemsNew$2, ((1 + this.sci_HashMap$HashTrieMap__f_size) | 0))
    }
  };
  iterator__sc_Iterator() {
    return new $c_sci_HashMap$HashTrieMap$$anon$5(this)
  };
  foreach__F1__V(f) {
    let i = 0;
    while ((i < this.sci_HashMap$HashTrieMap__f_elems.u.length)) {
      this.sci_HashMap$HashTrieMap__f_elems.get(i).foreach__F1__V(f);
      i = ((1 + i) | 0)
    }
  };
  foreachEntry__F2__V(f) {
    let i = 0;
    while ((i < this.sci_HashMap$HashTrieMap__f_elems.u.length)) {
      this.sci_HashMap$HashTrieMap__f_elems.get(i).foreachEntry__F2__V(f);
      i = ((1 + i) | 0)
    }
  };
  merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(that, level, merger) {
    if ((that instanceof $c_sci_HashMap$HashMap1)) {
      const x2 = $as_sci_HashMap$HashMap1(that);
      return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.sci_HashMap$HashMap1__f_kv, merger)
    } else if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
      const x3 = $as_sci_HashMap$HashTrieMap(that);
      const abm = this.sci_HashMap$HashTrieMap__f_bitmap;
      const bbm = x3.sci_HashMap$HashTrieMap__f_bitmap;
      const allBits = (abm | bbm);
      return (((this === x3) && merger.retainIdentical__Z()) ? this : (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashMap$HashTrieMap__f_size >= x3.sci_HashMap$HashTrieMap__f_size))) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, this, x3, merger, level) : ((allBits === bbm) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, this, merger.invert__sci_HashMap$Merger(), level) : (((abm & bbm) === 0) ? $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap(this, x3) : $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, merger, level)))))
    } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
      const x4 = $as_sci_HashMap$HashMapCollision1(that);
      const index = (31 & ((x4.sci_HashMap$HashMapCollision1__f_hash >>> level) | 0));
      const mask = (1 << index);
      const i = (this.sci_HashMap$HashTrieMap__f_bitmap & (((-1) + mask) | 0));
      const offset = $m_jl_Integer$().bitCount__I__I(i);
      if (((this.sci_HashMap$HashTrieMap__f_bitmap & mask) !== 0)) {
        const sub = this.sci_HashMap$HashTrieMap__f_elems.get(offset);
        const subNew = sub.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x4, ((5 + level) | 0), merger);
        if ((subNew === sub)) {
          return this
        } else {
          const elemsNew = $asArrayOf_sci_HashMap(this.sci_HashMap$HashTrieMap__f_elems.clone__O(), 1);
          elemsNew.set(offset, subNew);
          return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
        }
      } else {
        const elemsNew$2 = $newArrayObject($d_sci_HashMap.getArrayOf(), [((1 + this.sci_HashMap$HashTrieMap__f_elems.u.length) | 0)]);
        const src = this.sci_HashMap$HashTrieMap__f_elems;
        $systemArraycopy(src, 0, elemsNew$2, 0, offset);
        elemsNew$2.set(offset, x4);
        const src$1 = this.sci_HashMap$HashTrieMap__f_elems;
        const destPos = ((1 + offset) | 0);
        const length = ((this.sci_HashMap$HashTrieMap__f_elems.u.length - offset) | 0);
        $systemArraycopy(src$1, offset, elemsNew$2, destPos, length);
        return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap | mask), elemsNew$2, ((this.sci_HashMap$HashTrieMap__f_size + x4.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
      }
    } else {
      return ((that === $m_sci_HashMap$EmptyHashMap$()) ? this : $m_s_sys_package$().error__T__E("section supposed to be unreachable."))
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
      const x2 = $as_sci_HashMap$HashTrieMap(that);
      if ((this === x2)) {
        return true
      } else if (((this.sci_HashMap$HashTrieMap__f_bitmap === x2.sci_HashMap$HashTrieMap__f_bitmap) && (this.sci_HashMap$HashTrieMap__f_size === x2.sci_HashMap$HashTrieMap__f_size))) {
        const a = this.sci_HashMap$HashTrieMap__f_elems;
        const b = x2.sci_HashMap$HashTrieMap__f_elems;
        return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
      } else {
        return false
      }
    } else {
      return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
    }
  };
}
function $as_sci_HashMap$HashTrieMap(obj) {
  return (((obj instanceof $c_sci_HashMap$HashTrieMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashTrieMap"))
}
function $isArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashTrieMap)))
}
function $asArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashTrieMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashTrieMap;", depth))
}
const $d_sci_HashMap$HashTrieMap = new $TypeData().initClass({
  sci_HashMap$HashTrieMap: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap", {
  sci_HashMap$HashTrieMap: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashTrieMap.prototype.$classData = $d_sci_HashMap$HashTrieMap;
class $c_sci_Nil$ extends $c_sci_List {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__sci_List() {
    throw new $c_jl_UnsupportedOperationException("tail of empty list")
  };
  equals__O__Z(that) {
    if ($is_sc_GenSeq(that)) {
      const x2 = $as_sc_GenSeq(that);
      return x2.isEmpty__Z()
    } else {
      return false
    }
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.tail__sci_List()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
class $c_scm_AbstractMap extends $c_sc_AbstractMap {
  newBuilder__scm_Builder() {
    $m_scm_HashMap$();
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  companion__scg_GenericCompanion() {
    return $m_scm_Iterable$()
  };
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
}
class $c_scm_WrappedArray extends $c_scm_AbstractSeq {
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  foldLeft__O__F2__O(z, op) {
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.length__I(), z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  companion__scg_GenericCompanion() {
    return $m_scm_IndexedSeq$()
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this.length__I())
  };
  sizeHintIfCheap__I() {
    return this.length__I()
  };
  stringPrefix__T() {
    return "WrappedArray"
  };
  newBuilder__scm_Builder() {
    return new $c_scm_WrappedArrayBuilder(this.elemTag__s_reflect_ClassTag())
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  seq__scm_Seq() {
    return this
  };
  thisCollection__sc_Traversable() {
    return this
  };
}
const $ct_scm_HashMap__scm_HashTable$Contents__ = (function($thiz, contents) {
  $f_scm_HashTable__$init$__V($thiz);
  $f_scm_HashTable__initWithContents__scm_HashTable$Contents__V($thiz, contents);
  return $thiz
});
const $ct_scm_HashMap__ = (function($thiz) {
  $ct_scm_HashMap__scm_HashTable$Contents__($thiz, null);
  return $thiz
});
class $c_scm_HashMap extends $c_scm_AbstractMap {
  constructor() {
    super();
    this.scm_HashMap__f__loadFactor = 0;
    this.scm_HashMap__f_table = null;
    this.scm_HashMap__f_tableSize = 0;
    this.scm_HashMap__f_threshold = 0;
    this.scm_HashMap__f_sizemap = null;
    this.scm_HashMap__f_seedvalue = 0
  };
  size__I() {
    return this.scm_HashMap__f_tableSize
  };
  contains__O__Z(key) {
    return ($f_scm_HashTable__findEntry__O__scm_HashEntry(this, key) !== null)
  };
  apply__O__O(key) {
    const result = $as_scm_DefaultEntry($f_scm_HashTable__findEntry__O__scm_HashEntry(this, key));
    return ((result === null) ? $f_sc_MapLike__default__O__O(this, key) : result.scm_DefaultEntry__f_value)
  };
  get__O__s_Option(key) {
    const e = $as_scm_DefaultEntry($f_scm_HashTable__findEntry__O__scm_HashEntry(this, key));
    return ((e === null) ? $m_s_None$() : new $c_s_Some(e.scm_DefaultEntry__f_value))
  };
  $plus$eq__T2__scm_HashMap(kv) {
    const key = kv._1__O();
    const value = kv._2__O();
    const e = $as_scm_DefaultEntry($f_scm_HashTable__findOrAddEntry__O__O__scm_HashEntry(this, key, value));
    if ((e !== null)) {
      e.scm_DefaultEntry__f_value = kv._2__O()
    };
    return this
  };
  iterator__sc_Iterator() {
    const this$2 = new $c_scm_HashTable$$anon$1(this);
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((e$2) => {
      const e = $as_scm_DefaultEntry(e$2);
      return $ct_T2__O__O__(new $c_T2(), e.scm_DefaultEntry__f_key, e.scm_DefaultEntry__f_value)
    }))(this));
    return new $c_sc_Iterator$$anon$10(this$2, f)
  };
  foreach__F1__V(f) {
    const iterTable = this.scm_HashMap__f_table;
    let idx = $f_scm_HashTable__scala$collection$mutable$HashTable$$lastPopulatedIndex__I(this);
    let es = iterTable.get(idx);
    while ((es !== null)) {
      const this$1 = es;
      const next = this$1.scm_DefaultEntry__f_next;
      const arg1 = es;
      const e = $as_scm_DefaultEntry(arg1);
      f.apply__O__O($ct_T2__O__O__(new $c_T2(), e.scm_DefaultEntry__f_key, e.scm_DefaultEntry__f_value));
      es = next;
      while (((es === null) && (idx > 0))) {
        idx = (((-1) + idx) | 0);
        es = iterTable.get(idx)
      }
    }
  };
  thisCollection__sc_Traversable() {
    return this
  };
  result__O() {
    return this
  };
  $plus__T2__sc_GenMap(kv) {
    $m_scm_HashMap$();
    const this$2 = $ct_scm_HashMap__(new $c_scm_HashMap());
    const this$3 = $as_scm_Map($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this$2, this));
    return this$3.$plus$eq__T2__scm_HashMap(kv)
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Map() {
    return this
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__T2__scm_HashMap($as_T2(elem))
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__T2__scm_HashMap($as_T2(elem))
  };
  empty__sc_Map() {
    $m_scm_HashMap$();
    return $ct_scm_HashMap__(new $c_scm_HashMap())
  };
}
const $d_scm_HashMap = new $TypeData().initClass({
  scm_HashMap: 0
}, false, "scala.collection.mutable.HashMap", {
  scm_HashMap: 1,
  scm_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  scm_Map: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_MapLike: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_HashTable: 1,
  scm_HashTable$HashUtils: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap.prototype.$classData = $d_scm_HashMap;
class $c_scm_WrappedArray$ofBoolean extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofBoolean__f_array = null;
    this.scm_WrappedArray$ofBoolean__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$BooleanManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofBoolean__f_array.u.length
  };
  update__I__Z__V(index, elem) {
    this.scm_WrappedArray$ofBoolean__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofBoolean__f_array;
    return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofBoolean)) {
      const x2 = $as_scm_WrappedArray$ofBoolean(that);
      const a = this.scm_WrappedArray$ofBoolean__f_array;
      const b = x2.scm_WrappedArray$ofBoolean__f_array;
      return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcZI$sp__I__Z(index) {
    return this.scm_WrappedArray$ofBoolean__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__Z__V(index, $uZ(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcZI$sp__I__Z(index)
  };
  apply__I__O(index) {
    return this.apply$mcZI$sp__I__Z(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofBoolean__f_array
  };
}
function $as_scm_WrappedArray$ofBoolean(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofBoolean"))
}
function $isArrayOf_scm_WrappedArray$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofBoolean)))
}
function $asArrayOf_scm_WrappedArray$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofBoolean;", depth))
}
const $d_scm_WrappedArray$ofBoolean = new $TypeData().initClass({
  scm_WrappedArray$ofBoolean: 0
}, false, "scala.collection.mutable.WrappedArray$ofBoolean", {
  scm_WrappedArray$ofBoolean: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofBoolean.prototype.$classData = $d_scm_WrappedArray$ofBoolean;
class $c_scm_WrappedArray$ofByte extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofByte__f_array = null;
    this.scm_WrappedArray$ofByte__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ByteManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofByte__f_array.u.length
  };
  apply__I__B(index) {
    return this.scm_WrappedArray$ofByte__f_array.get(index)
  };
  update__I__B__V(index, elem) {
    this.scm_WrappedArray$ofByte__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const data = this.scm_WrappedArray$ofByte__f_array;
    return this$1.arrayHash$mBc$sp__AB__I__I(data, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofByte)) {
      const x2 = $as_scm_WrappedArray$ofByte(that);
      const a = this.scm_WrappedArray$ofByte__f_array;
      const b = x2.scm_WrappedArray$ofByte__f_array;
      return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  update__I__O__V(index, elem) {
    this.update__I__B__V(index, $uB(elem))
  };
  apply__O__O(v1) {
    return this.apply__I__B($uI(v1))
  };
  apply__I__O(index) {
    return this.apply__I__B(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofByte__f_array
  };
}
function $as_scm_WrappedArray$ofByte(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofByte"))
}
function $isArrayOf_scm_WrappedArray$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofByte)))
}
function $asArrayOf_scm_WrappedArray$ofByte(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofByte;", depth))
}
const $d_scm_WrappedArray$ofByte = new $TypeData().initClass({
  scm_WrappedArray$ofByte: 0
}, false, "scala.collection.mutable.WrappedArray$ofByte", {
  scm_WrappedArray$ofByte: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofByte.prototype.$classData = $d_scm_WrappedArray$ofByte;
class $c_scm_WrappedArray$ofChar extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofChar__f_array = null;
    this.scm_WrappedArray$ofChar__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$CharManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofChar__f_array.u.length
  };
  apply__I__C(index) {
    return this.scm_WrappedArray$ofChar__f_array.get(index)
  };
  update__I__C__V(index, elem) {
    this.scm_WrappedArray$ofChar__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofChar__f_array;
    return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofChar)) {
      const x2 = $as_scm_WrappedArray$ofChar(that);
      const a = this.scm_WrappedArray$ofChar__f_array;
      const b = x2.scm_WrappedArray$ofChar__f_array;
      return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  update__I__O__V(index, elem) {
    this.update__I__C__V(index, $uC(elem))
  };
  apply__O__O(v1) {
    return $bC(this.apply__I__C($uI(v1)))
  };
  apply__I__O(index) {
    return $bC(this.apply__I__C(index))
  };
  array__O() {
    return this.scm_WrappedArray$ofChar__f_array
  };
}
function $as_scm_WrappedArray$ofChar(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofChar"))
}
function $isArrayOf_scm_WrappedArray$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofChar)))
}
function $asArrayOf_scm_WrappedArray$ofChar(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofChar;", depth))
}
const $d_scm_WrappedArray$ofChar = new $TypeData().initClass({
  scm_WrappedArray$ofChar: 0
}, false, "scala.collection.mutable.WrappedArray$ofChar", {
  scm_WrappedArray$ofChar: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofChar.prototype.$classData = $d_scm_WrappedArray$ofChar;
class $c_scm_WrappedArray$ofDouble extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofDouble__f_array = null;
    this.scm_WrappedArray$ofDouble__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$DoubleManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofDouble__f_array.u.length
  };
  update__I__D__V(index, elem) {
    this.scm_WrappedArray$ofDouble__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofDouble__f_array;
    return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofDouble)) {
      const x2 = $as_scm_WrappedArray$ofDouble(that);
      const a = this.scm_WrappedArray$ofDouble__f_array;
      const b = x2.scm_WrappedArray$ofDouble__f_array;
      return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcDI$sp__I__D(index) {
    return this.scm_WrappedArray$ofDouble__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__D__V(index, $uD(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcDI$sp__I__D(index)
  };
  apply__I__O(index) {
    return this.apply$mcDI$sp__I__D(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofDouble__f_array
  };
}
function $as_scm_WrappedArray$ofDouble(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofDouble"))
}
function $isArrayOf_scm_WrappedArray$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofDouble)))
}
function $asArrayOf_scm_WrappedArray$ofDouble(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofDouble;", depth))
}
const $d_scm_WrappedArray$ofDouble = new $TypeData().initClass({
  scm_WrappedArray$ofDouble: 0
}, false, "scala.collection.mutable.WrappedArray$ofDouble", {
  scm_WrappedArray$ofDouble: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofDouble.prototype.$classData = $d_scm_WrappedArray$ofDouble;
class $c_scm_WrappedArray$ofFloat extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofFloat__f_array = null;
    this.scm_WrappedArray$ofFloat__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$FloatManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofFloat__f_array.u.length
  };
  update__I__F__V(index, elem) {
    this.scm_WrappedArray$ofFloat__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofFloat__f_array;
    return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofFloat)) {
      const x2 = $as_scm_WrappedArray$ofFloat(that);
      const a = this.scm_WrappedArray$ofFloat__f_array;
      const b = x2.scm_WrappedArray$ofFloat__f_array;
      return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcFI$sp__I__F(index) {
    return this.scm_WrappedArray$ofFloat__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__F__V(index, $uF(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcFI$sp__I__F(index)
  };
  apply__I__O(index) {
    return this.apply$mcFI$sp__I__F(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofFloat__f_array
  };
}
function $as_scm_WrappedArray$ofFloat(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofFloat"))
}
function $isArrayOf_scm_WrappedArray$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofFloat)))
}
function $asArrayOf_scm_WrappedArray$ofFloat(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofFloat;", depth))
}
const $d_scm_WrappedArray$ofFloat = new $TypeData().initClass({
  scm_WrappedArray$ofFloat: 0
}, false, "scala.collection.mutable.WrappedArray$ofFloat", {
  scm_WrappedArray$ofFloat: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofFloat.prototype.$classData = $d_scm_WrappedArray$ofFloat;
class $c_scm_WrappedArray$ofInt extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofInt__f_array = null;
    this.scm_WrappedArray$ofInt__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$IntManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofInt__f_array.u.length
  };
  update__I__I__V(index, elem) {
    this.scm_WrappedArray$ofInt__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofInt__f_array;
    return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofInt)) {
      const x2 = $as_scm_WrappedArray$ofInt(that);
      const a = this.scm_WrappedArray$ofInt__f_array;
      const b = x2.scm_WrappedArray$ofInt__f_array;
      return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcII$sp__I__I(index) {
    return this.scm_WrappedArray$ofInt__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__I__V(index, $uI(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcII$sp__I__I(index)
  };
  apply__I__O(index) {
    return this.apply$mcII$sp__I__I(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofInt__f_array
  };
}
function $as_scm_WrappedArray$ofInt(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofInt"))
}
function $isArrayOf_scm_WrappedArray$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofInt)))
}
function $asArrayOf_scm_WrappedArray$ofInt(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofInt;", depth))
}
const $d_scm_WrappedArray$ofInt = new $TypeData().initClass({
  scm_WrappedArray$ofInt: 0
}, false, "scala.collection.mutable.WrappedArray$ofInt", {
  scm_WrappedArray$ofInt: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofInt.prototype.$classData = $d_scm_WrappedArray$ofInt;
class $c_scm_WrappedArray$ofLong extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofLong__f_array = null;
    this.scm_WrappedArray$ofLong__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$LongManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofLong__f_array.u.length
  };
  update__I__J__V(index, elem) {
    this.scm_WrappedArray$ofLong__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofLong__f_array;
    return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofLong)) {
      const x2 = $as_scm_WrappedArray$ofLong(that);
      const a = this.scm_WrappedArray$ofLong__f_array;
      const b = x2.scm_WrappedArray$ofLong__f_array;
      return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcJI$sp__I__J(index) {
    return this.scm_WrappedArray$ofLong__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__J__V(index, $uJ(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcJI$sp__I__J(index)
  };
  apply__I__O(index) {
    return this.apply$mcJI$sp__I__J(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofLong__f_array
  };
}
function $as_scm_WrappedArray$ofLong(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofLong"))
}
function $isArrayOf_scm_WrappedArray$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofLong)))
}
function $asArrayOf_scm_WrappedArray$ofLong(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofLong;", depth))
}
const $d_scm_WrappedArray$ofLong = new $TypeData().initClass({
  scm_WrappedArray$ofLong: 0
}, false, "scala.collection.mutable.WrappedArray$ofLong", {
  scm_WrappedArray$ofLong: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofLong.prototype.$classData = $d_scm_WrappedArray$ofLong;
const $p_scm_WrappedArray$ofRef__elemTag$lzycompute__s_reflect_ClassTag = (function($thiz) {
  if ((!$thiz.scm_WrappedArray$ofRef__f_bitmap$0)) {
    const $$x1 = $m_s_reflect_ClassTag$();
    const this$1 = $thiz.scm_WrappedArray$ofRef__f_array;
    $thiz.scm_WrappedArray$ofRef__f_elemTag = $$x1.apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$1).getComponentType__jl_Class());
    $thiz.scm_WrappedArray$ofRef__f_bitmap$0 = true
  };
  return $thiz.scm_WrappedArray$ofRef__f_elemTag
});
class $c_scm_WrappedArray$ofRef extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofRef__f_elemTag = null;
    this.scm_WrappedArray$ofRef__f_array = null;
    this.scm_WrappedArray$ofRef__f_bitmap$0 = false;
    this.scm_WrappedArray$ofRef__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return ((!this.scm_WrappedArray$ofRef__f_bitmap$0) ? $p_scm_WrappedArray$ofRef__elemTag$lzycompute__s_reflect_ClassTag(this) : this.scm_WrappedArray$ofRef__f_elemTag)
  };
  length__I() {
    return this.scm_WrappedArray$ofRef__f_array.u.length
  };
  apply__I__O(index) {
    return this.scm_WrappedArray$ofRef__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.scm_WrappedArray$ofRef__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofRef__f_array;
    return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  array__O() {
    return this.scm_WrappedArray$ofRef__f_array
  };
}
function $as_scm_WrappedArray$ofRef(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofRef"))
}
function $isArrayOf_scm_WrappedArray$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofRef)))
}
function $asArrayOf_scm_WrappedArray$ofRef(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofRef;", depth))
}
const $d_scm_WrappedArray$ofRef = new $TypeData().initClass({
  scm_WrappedArray$ofRef: 0
}, false, "scala.collection.mutable.WrappedArray$ofRef", {
  scm_WrappedArray$ofRef: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofRef.prototype.$classData = $d_scm_WrappedArray$ofRef;
class $c_scm_WrappedArray$ofShort extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofShort__f_array = null;
    this.scm_WrappedArray$ofShort__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ShortManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofShort__f_array.u.length
  };
  apply__I__S(index) {
    return this.scm_WrappedArray$ofShort__f_array.get(index)
  };
  update__I__S__V(index, elem) {
    this.scm_WrappedArray$ofShort__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofShort__f_array;
    return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofShort)) {
      const x2 = $as_scm_WrappedArray$ofShort(that);
      const a = this.scm_WrappedArray$ofShort__f_array;
      const b = x2.scm_WrappedArray$ofShort__f_array;
      return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  update__I__O__V(index, elem) {
    this.update__I__S__V(index, $uS(elem))
  };
  apply__O__O(v1) {
    return this.apply__I__S($uI(v1))
  };
  apply__I__O(index) {
    return this.apply__I__S(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofShort__f_array
  };
}
function $as_scm_WrappedArray$ofShort(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofShort"))
}
function $isArrayOf_scm_WrappedArray$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofShort)))
}
function $asArrayOf_scm_WrappedArray$ofShort(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofShort;", depth))
}
const $d_scm_WrappedArray$ofShort = new $TypeData().initClass({
  scm_WrappedArray$ofShort: 0
}, false, "scala.collection.mutable.WrappedArray$ofShort", {
  scm_WrappedArray$ofShort: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofShort.prototype.$classData = $d_scm_WrappedArray$ofShort;
class $c_scm_WrappedArray$ofUnit extends $c_scm_WrappedArray {
  constructor(array) {
    super();
    this.scm_WrappedArray$ofUnit__f_array = null;
    this.scm_WrappedArray$ofUnit__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$UnitManifest$()
  };
  length__I() {
    return this.scm_WrappedArray$ofUnit__f_array.u.length
  };
  update__I__jl_Void__V(index, elem) {
    this.scm_WrappedArray$ofUnit__f_array.set(index, elem)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_WrappedArray$ofUnit__f_array;
    return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_WrappedArray$ofUnit)) {
      const x2 = $as_scm_WrappedArray$ofUnit(that);
      return (this.scm_WrappedArray$ofUnit__f_array.u.length === x2.scm_WrappedArray$ofUnit__f_array.u.length)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  apply$mcVI$sp__I__V(index) {
    this.scm_WrappedArray$ofUnit__f_array.get(index)
  };
  update__I__O__V(index, elem) {
    this.update__I__jl_Void__V(index, $as_jl_Void(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    this.apply$mcVI$sp__I__V(index)
  };
  apply__I__O(index) {
    this.apply$mcVI$sp__I__V(index)
  };
  array__O() {
    return this.scm_WrappedArray$ofUnit__f_array
  };
}
function $as_scm_WrappedArray$ofUnit(obj) {
  return (((obj instanceof $c_scm_WrappedArray$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.WrappedArray$ofUnit"))
}
function $isArrayOf_scm_WrappedArray$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_WrappedArray$ofUnit)))
}
function $asArrayOf_scm_WrappedArray$ofUnit(obj, depth) {
  return (($isArrayOf_scm_WrappedArray$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray$ofUnit;", depth))
}
const $d_scm_WrappedArray$ofUnit = new $TypeData().initClass({
  scm_WrappedArray$ofUnit: 0
}, false, "scala.collection.mutable.WrappedArray$ofUnit", {
  scm_WrappedArray$ofUnit: 1,
  scm_WrappedArray: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_WrappedArray$ofUnit.prototype.$classData = $d_scm_WrappedArray$ofUnit;
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_exported) {
    $p_scm_ListBuffer__copy__V($thiz)
  }
});
const $p_scm_ListBuffer__copy__V = (function($thiz) {
  _return: {
    if ($thiz.isEmpty__Z()) {
      break _return
    };
    let cursor = $thiz.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    const this$1 = $thiz.scm_ListBuffer__f_last0;
    const limit = this$1.sci_$colon$colon__f_tl;
    $thiz.clear__V();
    while ((cursor !== limit)) {
      $thiz.$plus$eq__O__scm_ListBuffer(cursor.head__O());
      const this$2 = cursor;
      cursor = this$2.tail__sci_List()
    }
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_exported = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
    this.scm_ListBuffer__f_exported = false;
    this.scm_ListBuffer__f_len = 0
  };
  lengthCompare__I__I(len) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this$1, len)
  };
  sameElements__sc_GenIterable__Z(that) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this$1, that)
  };
  foreach__F1__V(f) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    let these = this$1;
    while ((!these.isEmpty__Z())) {
      f.apply__O__O(these.head__O());
      const this$2 = these;
      these = this$2.tail__sci_List()
    }
  };
  foldLeft__O__F2__O(z, op) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
  };
  $div$colon__O__F2__O(z, op) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
  };
  sum__s_math_Numeric__O(num) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_TraversableOnce__sum__s_math_Numeric__O(this$1, num)
  };
  mkString__T__T__T__T(start, sep, end) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, sep, end)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    const this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$1, b, start, sep, end)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  companion__scg_GenericCompanion() {
    return $m_scm_ListBuffer$()
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  size__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  apply__I__O(n) {
    if (((n < 0) || (n >= this.scm_ListBuffer__f_len))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    } else {
      const this$2 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
      return $f_sc_LinearSeqOptimized__apply__I__O(this$2, n)
    }
  };
  $plus$eq__O__scm_ListBuffer(x) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_tl = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(xs) {
    while (true) {
      const x1 = xs;
      if ((x1 !== null)) {
        if ((x1 === this)) {
          const n = this.scm_ListBuffer__f_len;
          xs = $as_sc_TraversableOnce($f_sc_IterableLike__take__I__O(this, n));
          continue
        }
      };
      return $as_scm_ListBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
    }
  };
  clear__V() {
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_exported = false;
    this.scm_ListBuffer__f_len = 0
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_exported = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start
  };
  toStream__sci_Stream() {
    return this.toList__sci_List().toStream__sci_Stream()
  };
  iterator__sc_Iterator() {
    return new $c_scm_ListBuffer$$anon$1(this)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ListBuffer)) {
      const x2 = $as_scm_ListBuffer(that);
      return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.equals__O__Z(x2.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
    } else {
      return $f_sc_GenSeqLike__equals__O__Z(this, that)
    }
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  result__O() {
    return this.toList__sci_List()
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(xs)
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_ListBuffer(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_ListBuffer(elem)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_SeqForwarder: 1,
  scg_IterableForwarder: 1,
  scg_TraversableForwarder: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__I__T__ = (function($thiz, initCapacity, initValue) {
  const this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), (($uI(initValue.length) + initCapacity) | 0));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + initValue);
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, this$1);
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__I__T__($thiz, 16, "");
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  foldLeft__O__F2__O(z, op) {
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_StringBuilder__f_underlying.length__I(), z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  companion__scg_GenericCompanion() {
    return $m_scm_IndexedSeq$()
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this.scm_StringBuilder__f_underlying.length__I())
  };
  sizeHintIfCheap__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  $plus$eq__C__scm_StringBuilder(x) {
    this.append__C__scm_StringBuilder(x);
    return this
  };
  append__O__scm_StringBuilder(x) {
    const this$2 = this.scm_StringBuilder__f_underlying;
    const str = ("" + x);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
    return this
  };
  append__T__scm_StringBuilder(s) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
    return this
  };
  append__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  seq__scm_Seq() {
    return this
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__C__scm_StringBuilder($uC(elem))
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__C__scm_StringBuilder($uC(elem))
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(index))
  };
  apply__I__O(idx) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(idx))
  };
  newBuilder__scm_Builder() {
    return new $c_scm_GrowingBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()))
  };
  thisCollection__sc_Traversable() {
    return this
  };
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  foldLeft__O__F2__O(z, op) {
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length), z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
  };
  sizeHintIfCheap__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  companion__scg_GenericCompanion() {
    return $m_sjs_js_WrappedArray$()
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  stringPrefix__T() {
    return "WrappedArray"
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  seq__scm_Seq() {
    return this
  };
  result__O() {
    return this
  };
  $plus$eq__O__scg_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  $plus$eq__O__scm_Builder(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
const $ct_scm_ArrayBuffer__I__ = (function($thiz, initialSize) {
  $thiz.scm_ArrayBuffer__f_initialSize = initialSize;
  $f_scm_ResizableArray__$init$__V($thiz);
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__I__($thiz, 16);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_initialSize = 0;
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  apply__I__O(idx) {
    return $f_scm_ResizableArray__apply__I__O(this, idx)
  };
  foreach__F1__V(f) {
    $f_scm_ResizableArray__foreach__F1__V(this, f)
  };
  copyToArray__O__I__I__V(xs, start, len) {
    $f_scm_ResizableArray__copyToArray__O__I__I__V(this, xs, start, len)
  };
  isEmpty__Z() {
    return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
  };
  foldLeft__O__F2__O(z, op) {
    return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_ArrayBuffer__f_size0, z, op)
  };
  sameElements__sc_GenIterable__Z(that) {
    return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqLike$Elements(this, 0, this.scm_ArrayBuffer__f_size0)
  };
  sizeHintIfCheap__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  companion__scg_GenericCompanion() {
    return $m_scm_ArrayBuffer$()
  };
  sizeHint__I__V(len) {
    if (((len > this.scm_ArrayBuffer__f_size0) && (len >= 1))) {
      const newarray = $newArrayObject($d_O.getArrayOf(), [len]);
      const src = this.scm_ArrayBuffer__f_array;
      const length = this.scm_ArrayBuffer__f_size0;
      $systemArraycopy(src, 0, newarray, 0, length);
      this.scm_ArrayBuffer__f_array = newarray
    }
  };
  $plus$eq__O__scm_ArrayBuffer(elem) {
    const n = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    $f_scm_ResizableArray__ensureSize__I__V(this, n);
    this.scm_ArrayBuffer__f_array.set(this.scm_ArrayBuffer__f_size0, elem);
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(xs) {
    if ($is_sc_IndexedSeqLike(xs)) {
      const x2 = $as_sc_IndexedSeqLike(xs);
      const n = x2.length__I();
      const n$1 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
      $f_scm_ResizableArray__ensureSize__I__V(this, n$1);
      x2.copyToArray__O__I__I__V(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
      return this
    } else {
      return $as_scm_ArrayBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
    }
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  thisCollection__sc_Traversable() {
    return this
  };
  seq__sc_TraversableOnce() {
    return this
  };
  seq__sc_Seq() {
    return this
  };
  seq__scm_Seq() {
    return this
  };
  apply__O__O(v1) {
    const idx = $uI(v1);
    return $f_scm_ResizableArray__apply__I__O(this, idx)
  };
  result__O() {
    return this
  };
  $plus$plus$eq__sc_TraversableOnce__scg_Growable(xs) {
    return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(xs)
  };
  $plus$eq__O__scg_Growable(elem) {
    return this.$plus$eq__O__scm_ArrayBuffer(elem)
  };
  $plus$eq__O__scm_Builder(elem) {
    return this.$plus$eq__O__scm_ArrayBuffer(elem)
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1,
  scm_ResizableArray: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
$L0 = new $c_RTLong(0, 0);
Main = $m_Ljsmain_Main$();
}).call(this);
//# sourceMappingURL=yahtzee-bot.js.map
