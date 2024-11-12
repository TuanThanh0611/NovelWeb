'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var actions = require('@use-gesture/core/actions');
var core = require('@use-gesture/core');
var utils = require('@use-gesture/core/utils');
var types = require('@use-gesture/core/types');

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

class Recognizer {
  constructor(target, handlers, config, gestureKey, nativeHandlers) {
    this._target = target;
    this._gestureKey = gestureKey;
    this._ctrl = new core.Controller(handlers);
    this._ctrl.applyHandlers(handlers, nativeHandlers);
    this._ctrl.applyConfig(_objectSpread2(_objectSpread2({}, config), {}, {
      target
    }), gestureKey);
    this._ctrl.effect();
  }
  destroy() {
    this._ctrl.clean();
  }
  setConfig(config) {
    this._ctrl.clean();
    this._ctrl.applyConfig(_objectSpread2(_objectSpread2({}, config), {}, {
      target: this._target
    }), this._gestureKey);
    this._ctrl.effect();
  }
}

const DragGesture = function DragGesture(target, handler, config) {
  actions.registerAction(actions.dragAction);
  return new Recognizer(target, {
    drag: handler
  }, config || {}, 'drag');
};

const PinchGesture = function PinchGesture(target, handler, config) {
  actions.registerAction(actions.pinchAction);
  return new Recognizer(target, {
    pinch: handler
  }, config || {}, 'pinch');
};

const WheelGesture = function WheelGesture(target, handler, config) {
  actions.registerAction(actions.wheelAction);
  return new Recognizer(target, {
    wheel: handler
  }, config || {}, 'wheel');
};

const ScrollGesture = function ScrollGesture(target, handler, config) {
  actions.registerAction(actions.scrollAction);
  return new Recognizer(target, {
    scroll: handler
  }, config || {}, 'scroll');
};

const MoveGesture = function MoveGesture(target, handler, config) {
  actions.registerAction(actions.moveAction);
  return new Recognizer(target, {
    move: handler
  }, config || {}, 'move');
};

const HoverGesture = function HoverGesture(target, handler, config) {
  actions.registerAction(actions.hoverAction);
  return new Recognizer(target, {
    hover: handler
  }, config || {}, 'hover');
};

function createGesture(actions$1) {
  actions$1.forEach(actions.registerAction);
  return function (target, _handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = core.parseMergedHandlers(_handlers, _config || {});
    return new Recognizer(target, handlers, config, undefined, nativeHandlers);
  };
}

const Gesture = function Gesture(target, handlers, config) {
  const gestureFunction = createGesture([actions.dragAction, actions.pinchAction, actions.scrollAction, actions.wheelAction, actions.moveAction, actions.hoverAction]);
  return gestureFunction(target, handlers, config || {});
};

exports.DragGesture = DragGesture;
exports.Gesture = Gesture;
exports.HoverGesture = HoverGesture;
exports.MoveGesture = MoveGesture;
exports.PinchGesture = PinchGesture;
exports.ScrollGesture = ScrollGesture;
exports.WheelGesture = WheelGesture;
exports.createGesture = createGesture;
Object.keys(actions).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return actions[k]; }
  });
});
Object.keys(utils).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return utils[k]; }
  });
});
Object.keys(types).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return types[k]; }
  });
});
