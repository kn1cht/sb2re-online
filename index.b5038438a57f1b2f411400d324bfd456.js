(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // deno:https://cdn.skypack.dev/-/object-assign@v4.1.1-LbCnB3r2y2yFmhmiCfPn/dist=es2019,mode=imports/optimized/object-assign.js
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s2 = 1; s2 < arguments.length; s2++) {
      from = Object(arguments[s2]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  var object_assign_default = objectAssign;

  // deno:https://cdn.skypack.dev/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js
  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var react_production_min = createCommonjsModule(function(module, exports) {
    var n = 60103, p = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var q2 = 60109, r = 60110, t = 60112;
    exports.Suspense = 60113;
    var u = 60115, v2 = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      var w2 = Symbol.for;
      n = w2("react.element");
      p = w2("react.portal");
      exports.Fragment = w2("react.fragment");
      exports.StrictMode = w2("react.strict_mode");
      exports.Profiler = w2("react.profiler");
      q2 = w2("react.provider");
      r = w2("react.context");
      t = w2("react.forward_ref");
      exports.Suspense = w2("react.suspense");
      u = w2("react.memo");
      v2 = w2("react.lazy");
    }
    var x2 = typeof Symbol === "function" && Symbol.iterator;
    function y3(a2) {
      if (a2 === null || typeof a2 !== "object")
        return null;
      a2 = x2 && a2[x2] || a2["@@iterator"];
      return typeof a2 === "function" ? a2 : null;
    }
    function z2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, B3 = {};
    function C2(a2, b2, c) {
      this.props = a2;
      this.context = b2;
      this.refs = B3;
      this.updater = c || A;
    }
    C2.prototype.isReactComponent = {};
    C2.prototype.setState = function(a2, b2) {
      if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
        throw Error(z2(85));
      this.updater.enqueueSetState(this, a2, b2, "setState");
    };
    C2.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function D3() {
    }
    D3.prototype = C2.prototype;
    function E2(a2, b2, c) {
      this.props = a2;
      this.context = b2;
      this.refs = B3;
      this.updater = c || A;
    }
    var F3 = E2.prototype = new D3();
    F3.constructor = E2;
    object_assign_default(F3, C2.prototype);
    F3.isPureReactComponent = true;
    var G3 = { current: null }, H3 = Object.prototype.hasOwnProperty, I3 = { key: true, ref: true, __self: true, __source: true };
    function J(a2, b2, c) {
      var e, d2 = {}, k2 = null, h2 = null;
      if (b2 != null)
        for (e in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
          H3.call(b2, e) && !I3.hasOwnProperty(e) && (d2[e] = b2[e]);
      var g = arguments.length - 2;
      if (g === 1)
        d2.children = c;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        d2.children = f;
      }
      if (a2 && a2.defaultProps)
        for (e in g = a2.defaultProps, g)
          d2[e] === void 0 && (d2[e] = g[e]);
      return { $$typeof: n, type: a2, key: k2, ref: h2, props: d2, _owner: G3.current };
    }
    function K(a2, b2) {
      return { $$typeof: n, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function L2(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === n;
    }
    function escape(a2) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a22) {
        return b2[a22];
      });
    }
    var M3 = /\/+/g;
    function N2(a2, b2) {
      return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
    }
    function O3(a2, b2, c, e, d2) {
      var k2 = typeof a2;
      if (k2 === "undefined" || k2 === "boolean")
        a2 = null;
      var h2 = false;
      if (a2 === null)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case n:
              case p:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a2, d2 = d2(h2), a2 = e === "" ? "." + N2(h2, 0) : e, Array.isArray(d2) ? (c = "", a2 != null && (c = a2.replace(M3, "$&/") + "/"), O3(d2, b2, c, "", function(a22) {
          return a22;
        })) : d2 != null && (L2(d2) && (d2 = K(d2, c + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M3, "$&/") + "/") + a2)), b2.push(d2)), 1;
      h2 = 0;
      e = e === "" ? "." : e + ":";
      if (Array.isArray(a2))
        for (var g = 0; g < a2.length; g++) {
          k2 = a2[g];
          var f = e + N2(k2, g);
          h2 += O3(k2, b2, c, f, d2);
        }
      else if (f = y3(a2), typeof f === "function")
        for (a2 = f.call(a2), g = 0; !(k2 = a2.next()).done; )
          k2 = k2.value, f = e + N2(k2, g++), h2 += O3(k2, b2, c, f, d2);
      else if (k2 === "object")
        throw b2 = "" + a2, Error(z2(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
      return h2;
    }
    function P3(a2, b2, c) {
      if (a2 == null)
        return a2;
      var e = [], d2 = 0;
      O3(a2, e, "", "", function(a22) {
        return b2.call(c, a22, d2++);
      });
      return e;
    }
    function Q2(a2) {
      if (a2._status === -1) {
        var b2 = a2._result;
        b2 = b2();
        a2._status = 0;
        a2._result = b2;
        b2.then(function(b22) {
          a2._status === 0 && (b22 = b22.default, a2._status = 1, a2._result = b22);
        }, function(b22) {
          a2._status === 0 && (a2._status = 2, a2._result = b22);
        });
      }
      if (a2._status === 1)
        return a2._result;
      throw a2._result;
    }
    var R3 = { current: null };
    function S3() {
      var a2 = R3.current;
      if (a2 === null)
        throw Error(z2(321));
      return a2;
    }
    var T3 = { ReactCurrentDispatcher: R3, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G3, IsSomeRendererActing: { current: false }, assign: object_assign_default };
    exports.Children = { map: P3, forEach: function(a2, b2, c) {
      P3(a2, function() {
        b2.apply(this, arguments);
      }, c);
    }, count: function(a2) {
      var b2 = 0;
      P3(a2, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a2) {
      return P3(a2, function(a22) {
        return a22;
      }) || [];
    }, only: function(a2) {
      if (!L2(a2))
        throw Error(z2(143));
      return a2;
    } };
    exports.Component = C2;
    exports.PureComponent = E2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
    exports.cloneElement = function(a2, b2, c) {
      if (a2 === null || a2 === void 0)
        throw Error(z2(267, a2));
      var e = object_assign_default({}, a2.props), d2 = a2.key, k2 = a2.ref, h2 = a2._owner;
      if (b2 != null) {
        b2.ref !== void 0 && (k2 = b2.ref, h2 = G3.current);
        b2.key !== void 0 && (d2 = "" + b2.key);
        if (a2.type && a2.type.defaultProps)
          var g = a2.type.defaultProps;
        for (f in b2)
          H3.call(b2, f) && !I3.hasOwnProperty(f) && (e[f] = b2[f] === void 0 && g !== void 0 ? g[f] : b2[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e.children = c;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: n,
        type: a2.type,
        key: d2,
        ref: k2,
        props: e,
        _owner: h2
      };
    };
    exports.createContext = function(a2, b2) {
      b2 === void 0 && (b2 = null);
      a2 = { $$typeof: r, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
      a2.Provider = { $$typeof: q2, _context: a2 };
      return a2.Consumer = a2;
    };
    exports.createElement = J;
    exports.createFactory = function(a2) {
      var b2 = J.bind(null, a2);
      b2.type = a2;
      return b2;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a2) {
      return { $$typeof: t, render: a2 };
    };
    exports.isValidElement = L2;
    exports.lazy = function(a2) {
      return { $$typeof: v2, _payload: { _status: -1, _result: a2 }, _init: Q2 };
    };
    exports.memo = function(a2, b2) {
      return { $$typeof: u, type: a2, compare: b2 === void 0 ? null : b2 };
    };
    exports.useCallback = function(a2, b2) {
      return S3().useCallback(a2, b2);
    };
    exports.useContext = function(a2, b2) {
      return S3().useContext(a2, b2);
    };
    exports.useDebugValue = function() {
    };
    exports.useEffect = function(a2, b2) {
      return S3().useEffect(a2, b2);
    };
    exports.useImperativeHandle = function(a2, b2, c) {
      return S3().useImperativeHandle(a2, b2, c);
    };
    exports.useLayoutEffect = function(a2, b2) {
      return S3().useLayoutEffect(a2, b2);
    };
    exports.useMemo = function(a2, b2) {
      return S3().useMemo(a2, b2);
    };
    exports.useReducer = function(a2, b2, c) {
      return S3().useReducer(a2, b2, c);
    };
    exports.useRef = function(a2) {
      return S3().useRef(a2);
    };
    exports.useState = function(a2) {
      return S3().useState(a2);
    };
    exports.version = "17.0.1";
  });
  var react = createCommonjsModule(function(module) {
    {
      module.exports = react_production_min;
    }
  });
  var Children = react.Children;
  var Component = react.Component;
  var Fragment = react.Fragment;
  var Profiler = react.Profiler;
  var PureComponent = react.PureComponent;
  var StrictMode = react.StrictMode;
  var Suspense = react.Suspense;
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var cloneElement = react.cloneElement;
  var createContext = react.createContext;
  var createElement = react.createElement;
  var createFactory = react.createFactory;
  var createRef = react.createRef;
  var react_default = react;
  var forwardRef = react.forwardRef;
  var isValidElement = react.isValidElement;
  var lazy = react.lazy;
  var memo = react.memo;
  var useCallback = react.useCallback;
  var useContext = react.useContext;
  var useDebugValue = react.useDebugValue;
  var useEffect = react.useEffect;
  var useImperativeHandle = react.useImperativeHandle;
  var useLayoutEffect = react.useLayoutEffect;
  var useMemo = react.useMemo;
  var useReducer = react.useReducer;
  var useRef = react.useRef;
  var useState = react.useState;
  var version = react.version;

  // deno:https://cdn.skypack.dev/-/scheduler@v0.20.2-PAU9F1YosUNPKr7V4s0j/dist=es2019,mode=imports/optimized/scheduler.js
  function createCommonjsModule2(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire2(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire2() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var scheduler_production_min = createCommonjsModule2(function(module, exports) {
    var f, g, h2, k2;
    if (typeof performance === "object" && typeof performance.now === "function") {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q2 = p.now();
      exports.unstable_now = function() {
        return p.now() - q2;
      };
    }
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      var t = null, u = null, w2 = function() {
        if (t !== null)
          try {
            var a2 = exports.unstable_now();
            t(true, a2);
            t = null;
          } catch (b2) {
            throw setTimeout(w2, 0), b2;
          }
      };
      f = function(a2) {
        t !== null ? setTimeout(f, 0, a2) : (t = a2, setTimeout(w2, 0));
      };
      g = function(a2, b2) {
        u = setTimeout(a2, b2);
      };
      h2 = function() {
        clearTimeout(u);
      };
      exports.unstable_shouldYield = function() {
        return false;
      };
      k2 = exports.unstable_forceFrameRate = function() {
      };
    } else {
      var x2 = window.setTimeout, y3 = window.clearTimeout;
      if (typeof console !== "undefined") {
        var z2 = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var A = false, B3 = null, C2 = -1, D3 = 5, E2 = 0;
      exports.unstable_shouldYield = function() {
        return exports.unstable_now() >= E2;
      };
      k2 = function() {
      };
      exports.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      var F3 = new MessageChannel(), G3 = F3.port2;
      F3.port1.onmessage = function() {
        if (B3 !== null) {
          var a2 = exports.unstable_now();
          E2 = a2 + D3;
          try {
            B3(true, a2) ? G3.postMessage(null) : (A = false, B3 = null);
          } catch (b2) {
            throw G3.postMessage(null), b2;
          }
        } else
          A = false;
      };
      f = function(a2) {
        B3 = a2;
        A || (A = true, G3.postMessage(null));
      };
      g = function(a2, b2) {
        C2 = x2(function() {
          a2(exports.unstable_now());
        }, b2);
      };
      h2 = function() {
        y3(C2);
        C2 = -1;
      };
    }
    function H3(a2, b2) {
      var c = a2.length;
      a2.push(b2);
      a:
        for (; ; ) {
          var d2 = c - 1 >>> 1, e = a2[d2];
          if (e !== void 0 && 0 < I3(e, b2))
            a2[d2] = b2, a2[c] = e, c = d2;
          else
            break a;
        }
    }
    function J(a2) {
      a2 = a2[0];
      return a2 === void 0 ? null : a2;
    }
    function K(a2) {
      var b2 = a2[0];
      if (b2 !== void 0) {
        var c = a2.pop();
        if (c !== b2) {
          a2[0] = c;
          a:
            for (var d2 = 0, e = a2.length; d2 < e; ) {
              var m = 2 * (d2 + 1) - 1, n = a2[m], v2 = m + 1, r = a2[v2];
              if (n !== void 0 && 0 > I3(n, c))
                r !== void 0 && 0 > I3(r, n) ? (a2[d2] = r, a2[v2] = c, d2 = v2) : (a2[d2] = n, a2[m] = c, d2 = m);
              else if (r !== void 0 && 0 > I3(r, c))
                a2[d2] = r, a2[v2] = c, d2 = v2;
              else
                break a;
            }
        }
        return b2;
      }
      return null;
    }
    function I3(a2, b2) {
      var c = a2.sortIndex - b2.sortIndex;
      return c !== 0 ? c : a2.id - b2.id;
    }
    var L2 = [], M3 = [], N2 = 1, O3 = null, P3 = 3, Q2 = false, R3 = false, S3 = false;
    function T3(a2) {
      for (var b2 = J(M3); b2 !== null; ) {
        if (b2.callback === null)
          K(M3);
        else if (b2.startTime <= a2)
          K(M3), b2.sortIndex = b2.expirationTime, H3(L2, b2);
        else
          break;
        b2 = J(M3);
      }
    }
    function U3(a2) {
      S3 = false;
      T3(a2);
      if (!R3)
        if (J(L2) !== null)
          R3 = true, f(V3);
        else {
          var b2 = J(M3);
          b2 !== null && g(U3, b2.startTime - a2);
        }
    }
    function V3(a2, b2) {
      R3 = false;
      S3 && (S3 = false, h2());
      Q2 = true;
      var c = P3;
      try {
        T3(b2);
        for (O3 = J(L2); O3 !== null && (!(O3.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
          var d2 = O3.callback;
          if (typeof d2 === "function") {
            O3.callback = null;
            P3 = O3.priorityLevel;
            var e = d2(O3.expirationTime <= b2);
            b2 = exports.unstable_now();
            typeof e === "function" ? O3.callback = e : O3 === J(L2) && K(L2);
            T3(b2);
          } else
            K(L2);
          O3 = J(L2);
        }
        if (O3 !== null)
          var m = true;
        else {
          var n = J(M3);
          n !== null && g(U3, n.startTime - b2);
          m = false;
        }
        return m;
      } finally {
        O3 = null, P3 = c, Q2 = false;
      }
    }
    var W3 = k2;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      R3 || Q2 || (R3 = true, f(V3));
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return P3;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return J(L2);
    };
    exports.unstable_next = function(a2) {
      switch (P3) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = P3;
      }
      var c = P3;
      P3 = b2;
      try {
        return a2();
      } finally {
        P3 = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = W3;
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c = P3;
      P3 = a2;
      try {
        return b2();
      } finally {
        P3 = c;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c) {
      var d2 = exports.unstable_now();
      typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d2 + c : d2) : c = d2;
      switch (a2) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d2 ? (a2.sortIndex = c, H3(M3, a2), J(L2) === null && a2 === J(M3) && (S3 ? h2() : S3 = true, g(U3, c - d2))) : (a2.sortIndex = e, H3(L2, a2), R3 || Q2 || (R3 = true, f(V3)));
      return a2;
    };
    exports.unstable_wrapCallback = function(a2) {
      var b2 = P3;
      return function() {
        var c = P3;
        P3 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          P3 = c;
        }
      };
    };
  });
  var scheduler = createCommonjsModule2(function(module) {
    {
      module.exports = scheduler_production_min;
    }
  });
  var scheduler_default = scheduler;
  var unstable_IdlePriority = scheduler.unstable_IdlePriority;
  var unstable_ImmediatePriority = scheduler.unstable_ImmediatePriority;
  var unstable_LowPriority = scheduler.unstable_LowPriority;
  var unstable_NormalPriority = scheduler.unstable_NormalPriority;
  var unstable_Profiling = scheduler.unstable_Profiling;
  var unstable_UserBlockingPriority = scheduler.unstable_UserBlockingPriority;
  var unstable_cancelCallback = scheduler.unstable_cancelCallback;
  var unstable_continueExecution = scheduler.unstable_continueExecution;
  var unstable_forceFrameRate = scheduler.unstable_forceFrameRate;
  var unstable_getCurrentPriorityLevel = scheduler.unstable_getCurrentPriorityLevel;
  var unstable_getFirstCallbackNode = scheduler.unstable_getFirstCallbackNode;
  var unstable_next = scheduler.unstable_next;
  var unstable_now = scheduler.unstable_now;
  var unstable_pauseExecution = scheduler.unstable_pauseExecution;
  var unstable_requestPaint = scheduler.unstable_requestPaint;
  var unstable_runWithPriority = scheduler.unstable_runWithPriority;
  var unstable_scheduleCallback = scheduler.unstable_scheduleCallback;
  var unstable_shouldYield = scheduler.unstable_shouldYield;
  var unstable_wrapCallback = scheduler.unstable_wrapCallback;

  // deno:https://cdn.skypack.dev/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2019,mode=imports/optimized/react-dom.js
  function createCommonjsModule3(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire3(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire3() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  function y(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!react_default)
    throw Error(y(227));
  var ba = new Set();
  var ca = {};
  function da(a2, b2) {
    ea(a2, b2);
    ea(a2 + "Capture", b2);
  }
  function ea(a2, b2) {
    ca[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++)
      ba.add(b2[a2]);
  }
  var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
  var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var ia = Object.prototype.hasOwnProperty;
  var ja = {};
  var ka = {};
  function la(a2) {
    if (ia.call(ka, a2))
      return true;
    if (ia.call(ja, a2))
      return false;
    if (ha.test(a2))
      return ka[a2] = true;
    ja[a2] = true;
    return false;
  }
  function ma(a2, b2, c, d2) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return a2 !== "data-" && a2 !== "aria-";
      default:
        return false;
    }
  }
  function na(a2, b2, c, d2) {
    if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c, d2))
      return true;
    if (d2)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b2;
        case 4:
          return b2 === false;
        case 5:
          return isNaN(b2);
        case 6:
          return isNaN(b2) || 1 > b2;
      }
    return false;
  }
  function B(a2, b2, c, d2, e, f, g) {
    this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
    this.attributeName = d2;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    D[a2] = new B(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    D[b2] = new B(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    D[a2] = new B(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    D[a2] = new B(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    D[a2] = new B(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    D[a2] = new B(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var oa = /[\-:]([a-z])/g;
  function pa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(oa, pa);
    D[b2] = new B(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(oa, pa);
    D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(oa, pa);
    D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function qa(a2, b2, c, d2) {
    var e = D.hasOwnProperty(b2) ? D[b2] : null;
    var f = e !== null ? e.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
    f || (na(b2, c, e, d2) && (c = null), d2 || e === null ? la(b2) && (c === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c)) : e.mustUseProperty ? a2[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b2 = e.attributeName, d2 = e.attributeNamespace, c === null ? a2.removeAttribute(b2) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d2 ? a2.setAttributeNS(d2, b2, c) : a2.setAttribute(b2, c))));
  }
  var ra = react_default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var sa = 60103;
  var ta = 60106;
  var ua = 60107;
  var wa = 60108;
  var xa = 60114;
  var ya = 60109;
  var za = 60110;
  var Aa = 60112;
  var Ba = 60113;
  var Ca = 60120;
  var Da = 60115;
  var Ea = 60116;
  var Fa = 60121;
  var Ga = 60128;
  var Ha = 60129;
  var Ia = 60130;
  var Ja = 60131;
  if (typeof Symbol === "function" && Symbol.for) {
    E2 = Symbol.for;
    sa = E2("react.element");
    ta = E2("react.portal");
    ua = E2("react.fragment");
    wa = E2("react.strict_mode");
    xa = E2("react.profiler");
    ya = E2("react.provider");
    za = E2("react.context");
    Aa = E2("react.forward_ref");
    Ba = E2("react.suspense");
    Ca = E2("react.suspense_list");
    Da = E2("react.memo");
    Ea = E2("react.lazy");
    Fa = E2("react.block");
    E2("react.scope");
    Ga = E2("react.opaque.id");
    Ha = E2("react.debug_trace_mode");
    Ia = E2("react.offscreen");
    Ja = E2("react.legacy_hidden");
  }
  var E2;
  var Ka = typeof Symbol === "function" && Symbol.iterator;
  function La(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = Ka && a2[Ka] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  var Ma;
  function Na(a2) {
    if (Ma === void 0)
      try {
        throw Error();
      } catch (c) {
        var b2 = c.stack.trim().match(/\n( *(at )?)/);
        Ma = b2 && b2[1] || "";
      }
    return "\n" + Ma + a2;
  }
  var Oa = false;
  function Pa(a2, b2) {
    if (!a2 || Oa)
      return "";
    Oa = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2)
        if (b2 = function() {
          throw Error();
        }, Object.defineProperty(b2.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect === "object" && Reflect.construct) {
          try {
            Reflect.construct(b2, []);
          } catch (k2) {
            var d2 = k2;
          }
          Reflect.construct(a2, [], b2);
        } else {
          try {
            b2.call();
          } catch (k2) {
            d2 = k2;
          }
          a2.call(b2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k2) {
          d2 = k2;
        }
        a2();
      }
    } catch (k2) {
      if (k2 && d2 && typeof k2.stack === "string") {
        for (var e = k2.stack.split("\n"), f = d2.stack.split("\n"), g = e.length - 1, h2 = f.length - 1; 1 <= g && 0 <= h2 && e[g] !== f[h2]; )
          h2--;
        for (; 1 <= g && 0 <= h2; g--, h2--)
          if (e[g] !== f[h2]) {
            if (g !== 1 || h2 !== 1) {
              do
                if (g--, h2--, 0 > h2 || e[g] !== f[h2])
                  return "\n" + e[g].replace(" at new ", " at ");
              while (1 <= g && 0 <= h2);
            }
            break;
          }
      }
    } finally {
      Oa = false, Error.prepareStackTrace = c;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
  }
  function Qa(a2) {
    switch (a2.tag) {
      case 5:
        return Na(a2.type);
      case 16:
        return Na("Lazy");
      case 13:
        return Na("Suspense");
      case 19:
        return Na("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Pa(a2.type, false), a2;
      case 11:
        return a2 = Pa(a2.type.render, false), a2;
      case 22:
        return a2 = Pa(a2.type._render, false), a2;
      case 1:
        return a2 = Pa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Ra(a2) {
    if (a2 == null)
      return null;
    if (typeof a2 === "function")
      return a2.displayName || a2.name || null;
    if (typeof a2 === "string")
      return a2;
    switch (a2) {
      case ua:
        return "Fragment";
      case ta:
        return "Portal";
      case xa:
        return "Profiler";
      case wa:
        return "StrictMode";
      case Ba:
        return "Suspense";
      case Ca:
        return "SuspenseList";
    }
    if (typeof a2 === "object")
      switch (a2.$$typeof) {
        case za:
          return (a2.displayName || "Context") + ".Consumer";
        case ya:
          return (a2._context.displayName || "Context") + ".Provider";
        case Aa:
          var b2 = a2.render;
          b2 = b2.displayName || b2.name || "";
          return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
        case Da:
          return Ra(a2.type);
        case Fa:
          return Ra(a2._render);
        case Ea:
          b2 = a2._payload;
          a2 = a2._init;
          try {
            return Ra(a2(b2));
          } catch (c) {
          }
      }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
      var e = c.get, f = c.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a22) {
        d2 = "" + a22;
        f.call(this, a22);
      } });
      Object.defineProperty(a2, b2, { enumerable: c.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a22) {
        d2 = "" + a22;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2)
      return false;
    var b2 = a2._valueTracker;
    if (!b2)
      return true;
    var c = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || (typeof document !== "undefined" ? document : void 0);
    if (typeof a2 === "undefined")
      return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c = b2.checked;
    return object_assign_default({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
    c = Sa(b2.value != null ? b2.value : c);
    a2._wrapperState = { initialChecked: d2, initialValue: c, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
  }
  function $a(a2, b2) {
    b2 = b2.checked;
    b2 != null && qa(a2, "checked", b2, false);
  }
  function ab(a2, b2) {
    $a(a2, b2);
    var c = Sa(b2.value), d2 = b2.type;
    if (c != null)
      if (d2 === "number") {
        if (c === 0 && a2.value === "" || a2.value != c)
          a2.value = "" + c;
      } else
        a2.value !== "" + c && (a2.value = "" + c);
    else if (d2 === "submit" || d2 === "reset") {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? bb(a2, b2.type, c) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
    b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function cb(a2, b2, c) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
        return;
      b2 = "" + a2._wrapperState.initialValue;
      c || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c = a2.name;
    c !== "" && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    c !== "" && (a2.name = c);
  }
  function bb(a2, b2, c) {
    if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
      c == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c && (a2.defaultValue = "" + c);
  }
  function db(a2) {
    var b2 = "";
    react_default.Children.forEach(a2, function(a22) {
      a22 != null && (b2 += a22);
    });
    return b2;
  }
  function eb(a2, b2) {
    a2 = object_assign_default({ children: void 0 }, b2);
    if (b2 = db(b2.children))
      a2.children = b2;
    return a2;
  }
  function fb(a2, b2, c, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e = 0; e < c.length; e++)
        b2["$" + c[e]] = true;
      for (c = 0; c < a2.length; c++)
        e = b2.hasOwnProperty("$" + a2[c].value), a2[c].selected !== e && (a2[c].selected = e), e && d2 && (a2[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b2 = null;
      for (e = 0; e < a2.length; e++) {
        if (a2[e].value === c) {
          a2[e].selected = true;
          d2 && (a2[e].defaultSelected = true);
          return;
        }
        b2 !== null || a2[e].disabled || (b2 = a2[e]);
      }
      b2 !== null && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (b2.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return object_assign_default({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c = b2.value;
    if (c == null) {
      c = b2.children;
      b2 = b2.defaultValue;
      if (c != null) {
        if (b2 != null)
          throw Error(y(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length))
            throw Error(y(93));
          c = c[0];
        }
        b2 = c;
      }
      b2 == null && (b2 = "");
      c = b2;
    }
    a2._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a2, b2) {
    var c = Sa(b2.value), d2 = Sa(b2.defaultValue);
    c != null && (c = "" + c, c !== a2.value && (a2.value = c), b2.defaultValue == null && a2.defaultValue !== c && (a2.defaultValue = c));
    d2 != null && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
  }
  var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function lb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function mb(a2, b2) {
    return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var nb;
  var ob = function(a2) {
    return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c, d2, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c, d2, e);
      });
    } : a2;
  }(function(a2, b2) {
    if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
      a2.innerHTML = b2;
    else {
      nb = nb || document.createElement("div");
      nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = nb.firstChild; a2.firstChild; )
        a2.removeChild(a2.firstChild);
      for (; b2.firstChild; )
        a2.appendChild(b2.firstChild);
    }
  });
  function pb(a2, b2) {
    if (b2) {
      var c = a2.firstChild;
      if (c && c === a2.lastChild && c.nodeType === 3) {
        c.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var qb = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var rb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qb).forEach(function(a2) {
    rb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      qb[b2] = qb[a2];
    });
  });
  function sb(a2, b2, c) {
    return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function tb(a2, b2) {
    a2 = a2.style;
    for (var c in b2)
      if (b2.hasOwnProperty(c)) {
        var d2 = c.indexOf("--") === 0, e = sb(c, b2[c], d2);
        c === "float" && (c = "cssFloat");
        d2 ? a2.setProperty(c, e) : a2[c] = e;
      }
  }
  var ub = object_assign_default({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function vb(a2, b2) {
    if (b2) {
      if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
        throw Error(y(137, a2));
      if (b2.dangerouslySetInnerHTML != null) {
        if (b2.children != null)
          throw Error(y(60));
        if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (b2.style != null && typeof b2.style !== "object")
        throw Error(y(62));
    }
  }
  function wb(a2, b2) {
    if (a2.indexOf("-") === -1)
      return typeof b2.is === "string";
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return a2.nodeType === 3 ? a2.parentNode : a2;
  }
  var yb = null;
  var zb = null;
  var Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if (typeof yb !== "function")
        throw Error(y(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2)
        for (a2 = 0; a2 < b2.length; a2++)
          Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb(a2, b2, c, d2, e) {
    return a2(b2, c, d2, e);
  }
  function Ib() {
  }
  var Jb = Gb;
  var Kb = false;
  var Lb = false;
  function Mb() {
    if (zb !== null || Ab !== null)
      Ib(), Fb();
  }
  function Nb(a2, b2, c) {
    if (Lb)
      return a2(b2, c);
    Lb = true;
    try {
      return Jb(a2, b2, c);
    } finally {
      Lb = false, Mb();
    }
  }
  function Ob(a2, b2) {
    var c = a2.stateNode;
    if (c === null)
      return null;
    var d2 = Db(c);
    if (d2 === null)
      return null;
    c = d2[b2];
    a:
      switch (b2) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
          a2 = !d2;
          break a;
        default:
          a2 = false;
      }
    if (a2)
      return null;
    if (c && typeof c !== "function")
      throw Error(y(231, b2, typeof c));
    return c;
  }
  var Pb = false;
  if (fa)
    try {
      Qb = {};
      Object.defineProperty(Qb, "passive", { get: function() {
        Pb = true;
      } });
      window.addEventListener("test", Qb, Qb);
      window.removeEventListener("test", Qb, Qb);
    } catch (a2) {
      Pb = false;
    }
  var Qb;
  function Rb(a2, b2, c, d2, e, f, g, h2, k2) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c, l);
    } catch (n) {
      this.onError(n);
    }
  }
  var Sb = false;
  var Tb = null;
  var Ub = false;
  var Vb = null;
  var Wb = { onError: function(a2) {
    Sb = true;
    Tb = a2;
  } };
  function Xb(a2, b2, c, d2, e, f, g, h2, k2) {
    Sb = false;
    Tb = null;
    Rb.apply(Wb, arguments);
  }
  function Yb(a2, b2, c, d2, e, f, g, h2, k2) {
    Xb.apply(this, arguments);
    if (Sb) {
      if (Sb) {
        var l = Tb;
        Sb = false;
        Tb = null;
      } else
        throw Error(y(198));
      Ub || (Ub = true, Vb = l);
    }
  }
  function Zb(a2) {
    var b2 = a2, c = a2;
    if (a2.alternate)
      for (; b2.return; )
        b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, (b2.flags & 1026) !== 0 && (c = b2.return), a2 = b2.return;
      while (a2);
    }
    return b2.tag === 3 ? c : null;
  }
  function $b(a2) {
    if (a2.tag === 13) {
      var b2 = a2.memoizedState;
      b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
      if (b2 !== null)
        return b2.dehydrated;
    }
    return null;
  }
  function ac(a2) {
    if (Zb(a2) !== a2)
      throw Error(y(188));
  }
  function bc(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Zb(a2);
      if (b2 === null)
        throw Error(y(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c = a2, d2 = b2; ; ) {
      var e = c.return;
      if (e === null)
        break;
      var f = e.alternate;
      if (f === null) {
        d2 = e.return;
        if (d2 !== null) {
          c = d2;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c)
            return ac(e), a2;
          if (f === d2)
            return ac(e), b2;
          f = f.sibling;
        }
        throw Error(y(188));
      }
      if (c.return !== d2.return)
        c = e, d2 = f;
      else {
        for (var g = false, h2 = e.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = e;
            d2 = f;
            break;
          }
          if (h2 === d2) {
            g = true;
            d2 = e;
            c = f;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g) {
          for (h2 = f.child; h2; ) {
            if (h2 === c) {
              g = true;
              c = f;
              d2 = e;
              break;
            }
            if (h2 === d2) {
              g = true;
              d2 = f;
              c = e;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g)
            throw Error(y(189));
        }
      }
      if (c.alternate !== d2)
        throw Error(y(190));
    }
    if (c.tag !== 3)
      throw Error(y(188));
    return c.stateNode.current === c ? a2 : b2;
  }
  function cc(a2) {
    a2 = bc(a2);
    if (!a2)
      return null;
    for (var b2 = a2; ; ) {
      if (b2.tag === 5 || b2.tag === 6)
        return b2;
      if (b2.child)
        b2.child.return = b2, b2 = b2.child;
      else {
        if (b2 === a2)
          break;
        for (; !b2.sibling; ) {
          if (!b2.return || b2.return === a2)
            return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return null;
  }
  function dc(a2, b2) {
    for (var c = a2.alternate; b2 !== null; ) {
      if (b2 === a2 || b2 === c)
        return true;
      b2 = b2.return;
    }
    return false;
  }
  var ec;
  var fc;
  var gc;
  var hc;
  var ic = false;
  var jc = [];
  var kc = null;
  var lc = null;
  var mc = null;
  var nc = new Map();
  var oc = new Map();
  var pc = [];
  var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rc(a2, b2, c, d2, e) {
    return { blockedOn: a2, domEventName: b2, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d2] };
  }
  function sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        kc = null;
        break;
      case "dragenter":
      case "dragleave":
        lc = null;
        break;
      case "mouseover":
      case "mouseout":
        mc = null;
        break;
      case "pointerover":
      case "pointerout":
        nc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oc.delete(b2.pointerId);
    }
  }
  function tc(a2, b2, c, d2, e, f) {
    if (a2 === null || a2.nativeEvent !== f)
      return a2 = rc(b2, c, d2, e, f), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    e !== null && b2.indexOf(e) === -1 && b2.push(e);
    return a2;
  }
  function uc(a2, b2, c, d2, e) {
    switch (b2) {
      case "focusin":
        return kc = tc(kc, a2, b2, c, d2, e), true;
      case "dragenter":
        return lc = tc(lc, a2, b2, c, d2, e), true;
      case "mouseover":
        return mc = tc(mc, a2, b2, c, d2, e), true;
      case "pointerover":
        var f = e.pointerId;
        nc.set(f, tc(nc.get(f) || null, a2, b2, c, d2, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a2, b2, c, d2, e)), true;
    }
    return false;
  }
  function vc(a2) {
    var b2 = wc(a2.target);
    if (b2 !== null) {
      var c = Zb(b2);
      if (c !== null) {
        if (b2 = c.tag, b2 === 13) {
          if (b2 = $b(c), b2 !== null) {
            a2.blockedOn = b2;
            hc(a2.lanePriority, function() {
              scheduler_default.unstable_runWithPriority(a2.priority, function() {
                gc(c);
              });
            });
            return;
          }
        } else if (b2 === 3 && c.stateNode.hydrate) {
          a2.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function xc(a2) {
    if (a2.blockedOn !== null)
      return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c !== null)
        return b2 = Cb(c), b2 !== null && fc(b2), a2.blockedOn = c, false;
      b2.shift();
    }
    return true;
  }
  function zc(a2, b2, c) {
    xc(a2) && c.delete(b2);
  }
  function Ac() {
    for (ic = false; 0 < jc.length; ) {
      var a2 = jc[0];
      if (a2.blockedOn !== null) {
        a2 = Cb(a2.blockedOn);
        a2 !== null && ec(a2);
        break;
      }
      for (var b2 = a2.targetContainers; 0 < b2.length; ) {
        var c = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
        if (c !== null) {
          a2.blockedOn = c;
          break;
        }
        b2.shift();
      }
      a2.blockedOn === null && jc.shift();
    }
    kc !== null && xc(kc) && (kc = null);
    lc !== null && xc(lc) && (lc = null);
    mc !== null && xc(mc) && (mc = null);
    nc.forEach(zc);
    oc.forEach(zc);
  }
  function Bc(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, scheduler_default.unstable_scheduleCallback(scheduler_default.unstable_NormalPriority, Ac)));
  }
  function Cc(a2) {
    function b2(b22) {
      return Bc(b22, a2);
    }
    if (0 < jc.length) {
      Bc(jc[0], a2);
      for (var c = 1; c < jc.length; c++) {
        var d2 = jc[c];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    kc !== null && Bc(kc, a2);
    lc !== null && Bc(lc, a2);
    mc !== null && Bc(mc, a2);
    nc.forEach(b2);
    oc.forEach(b2);
    for (c = 0; c < pc.length; c++)
      d2 = pc[c], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
      vc(c), c.blockedOn === null && pc.shift();
  }
  function Dc(a2, b2) {
    var c = {};
    c[a2.toLowerCase()] = b2.toLowerCase();
    c["Webkit" + a2] = "webkit" + b2;
    c["Moz" + a2] = "moz" + b2;
    return c;
  }
  var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
  var Fc = {};
  var Gc = {};
  fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
  function Hc(a2) {
    if (Fc[a2])
      return Fc[a2];
    if (!Ec[a2])
      return a2;
    var b2 = Ec[a2], c;
    for (c in b2)
      if (b2.hasOwnProperty(c) && c in Gc)
        return Fc[a2] = b2[c];
    return a2;
  }
  var Ic = Hc("animationend");
  var Jc = Hc("animationiteration");
  var Kc = Hc("animationstart");
  var Lc = Hc("transitionend");
  var Mc = new Map();
  var Nc = new Map();
  var Oc = [
    "abort",
    "abort",
    Ic,
    "animationEnd",
    Jc,
    "animationIteration",
    Kc,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Lc,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function Pc(a2, b2) {
    for (var c = 0; c < a2.length; c += 2) {
      var d2 = a2[c], e = a2[c + 1];
      e = "on" + (e[0].toUpperCase() + e.slice(1));
      Nc.set(d2, b2);
      Mc.set(d2, e);
      da(e, [d2]);
    }
  }
  var Qc = scheduler_default.unstable_now;
  Qc();
  var F = 8;
  function Rc(a2) {
    if ((1 & a2) !== 0)
      return F = 15, 1;
    if ((2 & a2) !== 0)
      return F = 14, 2;
    if ((4 & a2) !== 0)
      return F = 13, 4;
    var b2 = 24 & a2;
    if (b2 !== 0)
      return F = 12, b2;
    if ((a2 & 32) !== 0)
      return F = 11, 32;
    b2 = 192 & a2;
    if (b2 !== 0)
      return F = 10, b2;
    if ((a2 & 256) !== 0)
      return F = 9, 256;
    b2 = 3584 & a2;
    if (b2 !== 0)
      return F = 8, b2;
    if ((a2 & 4096) !== 0)
      return F = 7, 4096;
    b2 = 4186112 & a2;
    if (b2 !== 0)
      return F = 6, b2;
    b2 = 62914560 & a2;
    if (b2 !== 0)
      return F = 5, b2;
    if (a2 & 67108864)
      return F = 4, 67108864;
    if ((a2 & 134217728) !== 0)
      return F = 3, 134217728;
    b2 = 805306368 & a2;
    if (b2 !== 0)
      return F = 2, b2;
    if ((1073741824 & a2) !== 0)
      return F = 1, 1073741824;
    F = 8;
    return a2;
  }
  function Sc(a2) {
    switch (a2) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Tc(a2) {
    switch (a2) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(y(358, a2));
    }
  }
  function Uc(a2, b2) {
    var c = a2.pendingLanes;
    if (c === 0)
      return F = 0;
    var d2 = 0, e = 0, f = a2.expiredLanes, g = a2.suspendedLanes, h2 = a2.pingedLanes;
    if (f !== 0)
      d2 = f, e = F = 15;
    else if (f = c & 134217727, f !== 0) {
      var k2 = f & ~g;
      k2 !== 0 ? (d2 = Rc(k2), e = F) : (h2 &= f, h2 !== 0 && (d2 = Rc(h2), e = F));
    } else
      f = c & ~g, f !== 0 ? (d2 = Rc(f), e = F) : h2 !== 0 && (d2 = Rc(h2), e = F);
    if (d2 === 0)
      return 0;
    d2 = 31 - Vc(d2);
    d2 = c & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
    if (b2 !== 0 && b2 !== d2 && (b2 & g) === 0) {
      Rc(b2);
      if (e <= F)
        return b2;
      F = e;
    }
    b2 = a2.entangledLanes;
    if (b2 !== 0)
      for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
        c = 31 - Vc(b2), e = 1 << c, d2 |= a2[c], b2 &= ~e;
    return d2;
  }
  function Wc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function Xc(a2, b2) {
    switch (a2) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
      case 10:
        return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
      case 8:
        return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
      case 2:
        return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
    }
    throw Error(y(358, a2));
  }
  function Yc(a2) {
    return a2 & -a2;
  }
  function Zc(a2) {
    for (var b2 = [], c = 0; 31 > c; c++)
      b2.push(a2);
    return b2;
  }
  function $c(a2, b2, c) {
    a2.pendingLanes |= b2;
    var d2 = b2 - 1;
    a2.suspendedLanes &= d2;
    a2.pingedLanes &= d2;
    a2 = a2.eventTimes;
    b2 = 31 - Vc(b2);
    a2[b2] = c;
  }
  var Vc = Math.clz32 ? Math.clz32 : ad;
  var bd = Math.log;
  var cd = Math.LN2;
  function ad(a2) {
    return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
  }
  var dd = scheduler_default.unstable_UserBlockingPriority;
  var ed = scheduler_default.unstable_runWithPriority;
  var fd = true;
  function gd(a2, b2, c, d2) {
    Kb || Ib();
    var e = hd, f = Kb;
    Kb = true;
    try {
      Hb(e, a2, b2, c, d2);
    } finally {
      (Kb = f) || Mb();
    }
  }
  function id(a2, b2, c, d2) {
    ed(dd, hd.bind(null, a2, b2, c, d2));
  }
  function hd(a2, b2, c, d2) {
    if (fd) {
      var e;
      if ((e = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
        a2 = rc(null, a2, b2, c, d2), jc.push(a2);
      else {
        var f = yc(a2, b2, c, d2);
        if (f === null)
          e && sc(a2, d2);
        else {
          if (e) {
            if (-1 < qc.indexOf(a2)) {
              a2 = rc(f, a2, b2, c, d2);
              jc.push(a2);
              return;
            }
            if (uc(f, a2, b2, c, d2))
              return;
            sc(a2, d2);
          }
          jd(a2, b2, d2, null, c);
        }
      }
    }
  }
  function yc(a2, b2, c, d2) {
    var e = xb(d2);
    e = wc(e);
    if (e !== null) {
      var f = Zb(e);
      if (f === null)
        e = null;
      else {
        var g = f.tag;
        if (g === 13) {
          e = $b(f);
          if (e !== null)
            return e;
          e = null;
        } else if (g === 3) {
          if (f.stateNode.hydrate)
            return f.tag === 3 ? f.stateNode.containerInfo : null;
          e = null;
        } else
          f !== e && (e = null);
      }
    }
    jd(a2, b2, d2, e, c);
    return null;
  }
  var kd = null;
  var ld = null;
  var md = null;
  function nd() {
    if (md)
      return md;
    var a2, b2 = ld, c = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a2 = 0; a2 < c && b2[a2] === e[a2]; a2++)
      ;
    var g = c - a2;
    for (d2 = 1; d2 <= g && b2[c - d2] === e[f - d2]; d2++)
      ;
    return md = e.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
    a2 === 10 && (a2 = 13);
    return 32 <= a2 || a2 === 13 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b22, d2, e, f, g) {
      this._reactName = b22;
      this._targetInst = e;
      this.type = d2;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a2)
        a2.hasOwnProperty(c) && (b22 = a2[c], this[c] = b22 ? b22(f) : f[c]);
      this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    object_assign_default(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a22 = this.nativeEvent;
      a22 && (a22.preventDefault ? a22.preventDefault() : typeof a22.returnValue !== "unknown" && (a22.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a22 = this.nativeEvent;
      a22 && (a22.stopPropagation ? a22.stopPropagation() : typeof a22.cancelBubble !== "unknown" && (a22.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 };
  var td = rd(sd);
  var ud = object_assign_default({}, sd, { view: 0, detail: 0 });
  var vd = rd(ud);
  var wd;
  var xd;
  var yd;
  var Ad = object_assign_default({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2)
      return a2.movementX;
    a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } });
  var Bd = rd(Ad);
  var Cd = object_assign_default({}, Ad, { dataTransfer: 0 });
  var Dd = rd(Cd);
  var Ed = object_assign_default({}, ud, { relatedTarget: 0 });
  var Fd = rd(Ed);
  var Gd = object_assign_default({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Hd = rd(Gd);
  var Id = object_assign_default({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } });
  var Jd = rd(Id);
  var Kd = object_assign_default({}, sd, { data: 0 });
  var Ld = rd(Kd);
  var Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  };
  var Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = object_assign_default({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if (b2 !== "Unidentified")
        return b2;
    }
    return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return a2.type === "keypress" ? od(a2) : 0;
  }, keyCode: function(a2) {
    return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  }, which: function(a2) {
    return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  } });
  var Rd = rd(Qd);
  var Sd = object_assign_default({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  var Td = rd(Sd);
  var Ud = object_assign_default({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
  var Vd = rd(Ud);
  var Wd = object_assign_default({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Xd = rd(Wd);
  var Yd = object_assign_default({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Zd = rd(Yd);
  var $d = [9, 13, 27, 32];
  var ae = fa && "CompositionEvent" in window;
  var be = null;
  fa && "documentMode" in document && (be = document.documentMode);
  var ce = fa && "TextEvent" in window && !be;
  var de = fa && (!ae || be && 8 < be && 11 >= be);
  var ee = String.fromCharCode(32);
  var fe = false;
  function ge(a2, b2) {
    switch (a2) {
      case "keyup":
        return $d.indexOf(b2.keyCode) !== -1;
      case "keydown":
        return b2.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a2) {
    a2 = a2.detail;
    return typeof a2 === "object" && "data" in a2 ? a2.data : null;
  }
  var ie = false;
  function je(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he(b2);
      case "keypress":
        if (b2.which !== 32)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a2 = b2.data, a2 === ee && fe ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b2) {
    if (ie)
      return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length)
            return b2.char;
          if (b2.which)
            return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de && b2.locale !== "ko" ? null : b2.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
  }
  function ne(a2, b2, c, d2) {
    Eb(d2);
    b2 = oe(b2, "onChange");
    0 < b2.length && (c = new td("onChange", "change", null, c, d2), a2.push({ event: c, listeners: b2 }));
  }
  var pe = null;
  var qe = null;
  function re(a2) {
    se(a2, 0);
  }
  function te(a2) {
    var b2 = ue(a2);
    if (Wa(b2))
      return a2;
  }
  function ve(a2, b2) {
    if (a2 === "change")
      return b2;
  }
  var we = false;
  if (fa) {
    if (fa) {
      ye2 = "oninput" in document;
      if (!ye2) {
        ze2 = document.createElement("div");
        ze2.setAttribute("oninput", "return;");
        ye2 = typeof ze2.oninput === "function";
      }
      xe2 = ye2;
    } else
      xe2 = false;
    we = xe2 && (!document.documentMode || 9 < document.documentMode);
  }
  var xe2;
  var ye2;
  var ze2;
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a2) {
    if (a2.propertyName === "value" && te(qe)) {
      var b2 = [];
      ne(b2, qe, a2, xb(a2));
      a2 = re;
      if (Kb)
        a2(b2);
      else {
        Kb = true;
        try {
          Gb(a2, b2);
        } finally {
          Kb = false, Mb();
        }
      }
    }
  }
  function Ce(a2, b2, c) {
    a2 === "focusin" ? (Ae(), pe = b2, qe = c, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
  }
  function De(a2) {
    if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
      return te(qe);
  }
  function Ee(a2, b2) {
    if (a2 === "click")
      return te(b2);
  }
  function Fe(a2, b2) {
    if (a2 === "input" || a2 === "change")
      return te(b2);
  }
  function Ge(a2, b2) {
    return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He = typeof Object.is === "function" ? Object.is : Ge;
  var Ie = Object.prototype.hasOwnProperty;
  function Je(a2, b2) {
    if (He(a2, b2))
      return true;
    if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
      return false;
    var c = Object.keys(a2), d2 = Object.keys(b2);
    if (c.length !== d2.length)
      return false;
    for (d2 = 0; d2 < c.length; d2++)
      if (!Ie.call(b2, c[d2]) || !He(a2[c[d2]], b2[c[d2]]))
        return false;
    return true;
  }
  function Ke(a2) {
    for (; a2 && a2.firstChild; )
      a2 = a2.firstChild;
    return a2;
  }
  function Le(a2, b2) {
    var c = Ke(a2);
    a2 = 0;
    for (var d2; c; ) {
      if (c.nodeType === 3) {
        d2 = a2 + c.textContent.length;
        if (a2 <= b2 && d2 >= b2)
          return { node: c, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Ke(c);
    }
  }
  function Me(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Ne() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c = typeof b2.contentWindow.location.href === "string";
      } catch (d2) {
        c = false;
      }
      if (c)
        a2 = b2.contentWindow;
      else
        break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Oe(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
  }
  var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
  var Qe = null;
  var Re = null;
  var Se = null;
  var Te = false;
  function Ue(a2, b2, c) {
    var d2 = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  Pc(Oc, 2);
  for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We2 = 0; We2 < Ve.length; We2++)
    Nc.set(Ve[We2], 0);
  ea("onMouseEnter", ["mouseout", "mouseover"]);
  ea("onMouseLeave", ["mouseout", "mouseover"]);
  ea("onPointerEnter", ["pointerout", "pointerover"]);
  ea("onPointerLeave", ["pointerout", "pointerover"]);
  da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
  function Ze(a2, b2, c) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c;
    Yb(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se(a2, b2) {
    b2 = (b2 & 4) !== 0;
    for (var c = 0; c < a2.length; c++) {
      var d2 = a2[c], e = d2.event;
      d2 = d2.listeners;
      a: {
        var f = void 0;
        if (b2)
          for (var g = d2.length - 1; 0 <= g; g--) {
            var h2 = d2[g], k2 = h2.instance, l = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f && e.isPropagationStopped())
              break a;
            Ze(e, h2, l);
            f = k2;
          }
        else
          for (g = 0; g < d2.length; g++) {
            h2 = d2[g];
            k2 = h2.instance;
            l = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f && e.isPropagationStopped())
              break a;
            Ze(e, h2, l);
            f = k2;
          }
      }
    }
    if (Ub)
      throw a2 = Vb, Ub = false, Vb = null, a2;
  }
  function G(a2, b2) {
    var c = $e(b2), d2 = a2 + "__bubble";
    c.has(d2) || (af(b2, a2, 2, false), c.add(d2));
  }
  var bf = "_reactListening" + Math.random().toString(36).slice(2);
  function cf(a2) {
    a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
      Ye.has(b2) || df(b2, false, a2, null);
      df(b2, true, a2, null);
    }));
  }
  function df(a2, b2, c, d2) {
    var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
    a2 === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
    if (d2 !== null && !b2 && Ye.has(a2)) {
      if (a2 !== "scroll")
        return;
      e |= 2;
      f = d2;
    }
    var g = $e(f), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
    g.has(h2) || (b2 && (e |= 4), af(f, a2, e, b2), g.add(h2));
  }
  function af(a2, b2, c, d2) {
    var e = Nc.get(b2);
    switch (e === void 0 ? 2 : e) {
      case 0:
        e = gd;
        break;
      case 1:
        e = id;
        break;
      default:
        e = hd;
    }
    c = e.bind(null, b2, c, a2);
    e = void 0;
    !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e = true);
    d2 ? e !== void 0 ? a2.addEventListener(b2, c, { capture: true, passive: e }) : a2.addEventListener(b2, c, true) : e !== void 0 ? a2.addEventListener(b2, c, { passive: e }) : a2.addEventListener(b2, c, false);
  }
  function jd(a2, b2, c, d2, e) {
    var f = d2;
    if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
      a:
        for (; ; ) {
          if (d2 === null)
            return;
          var g = d2.tag;
          if (g === 3 || g === 4) {
            var h2 = d2.stateNode.containerInfo;
            if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
              break;
            if (g === 4)
              for (g = d2.return; g !== null; ) {
                var k2 = g.tag;
                if (k2 === 3 || k2 === 4) {
                  if (k2 = g.stateNode.containerInfo, k2 === e || k2.nodeType === 8 && k2.parentNode === e)
                    return;
                }
                g = g.return;
              }
            for (; h2 !== null; ) {
              g = wc(h2);
              if (g === null)
                return;
              k2 = g.tag;
              if (k2 === 5 || k2 === 6) {
                d2 = f = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d2 = d2.return;
        }
    Nb(function() {
      var d22 = f, e2 = xb(c), g2 = [];
      a: {
        var h22 = Mc.get(a2);
        if (h22 !== void 0) {
          var k22 = td, x2 = a2;
          switch (a2) {
            case "keypress":
              if (od(c) === 0)
                break a;
            case "keydown":
            case "keyup":
              k22 = Rd;
              break;
            case "focusin":
              x2 = "focus";
              k22 = Fd;
              break;
            case "focusout":
              x2 = "blur";
              k22 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k22 = Fd;
              break;
            case "click":
              if (c.button === 2)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k22 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k22 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k22 = Vd;
              break;
            case Ic:
            case Jc:
            case Kc:
              k22 = Hd;
              break;
            case Lc:
              k22 = Xd;
              break;
            case "scroll":
              k22 = vd;
              break;
            case "wheel":
              k22 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k22 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k22 = Td;
          }
          var w2 = (b2 & 4) !== 0, z2 = !w2 && a2 === "scroll", u = w2 ? h22 !== null ? h22 + "Capture" : null : h22;
          w2 = [];
          for (var t = d22, q2; t !== null; ) {
            q2 = t;
            var v2 = q2.stateNode;
            q2.tag === 5 && v2 !== null && (q2 = v2, u !== null && (v2 = Ob(t, u), v2 != null && w2.push(ef(t, v2, q2))));
            if (z2)
              break;
            t = t.return;
          }
          0 < w2.length && (h22 = new k22(h22, x2, null, c, e2), g2.push({ event: h22, listeners: w2 }));
        }
      }
      if ((b2 & 7) === 0) {
        a: {
          h22 = a2 === "mouseover" || a2 === "pointerover";
          k22 = a2 === "mouseout" || a2 === "pointerout";
          if (h22 && (b2 & 16) === 0 && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
            break a;
          if (k22 || h22) {
            h22 = e2.window === e2 ? e2 : (h22 = e2.ownerDocument) ? h22.defaultView || h22.parentWindow : window;
            if (k22) {
              if (x2 = c.relatedTarget || c.toElement, k22 = d22, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
                x2 = null;
            } else
              k22 = null, x2 = d22;
            if (k22 !== x2) {
              w2 = Bd;
              v2 = "onMouseLeave";
              u = "onMouseEnter";
              t = "mouse";
              if (a2 === "pointerout" || a2 === "pointerover")
                w2 = Td, v2 = "onPointerLeave", u = "onPointerEnter", t = "pointer";
              z2 = k22 == null ? h22 : ue(k22);
              q2 = x2 == null ? h22 : ue(x2);
              h22 = new w2(v2, t + "leave", k22, c, e2);
              h22.target = z2;
              h22.relatedTarget = q2;
              v2 = null;
              wc(e2) === d22 && (w2 = new w2(u, t + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
              z2 = v2;
              if (k22 && x2)
                b: {
                  w2 = k22;
                  u = x2;
                  t = 0;
                  for (q2 = w2; q2; q2 = gf(q2))
                    t++;
                  q2 = 0;
                  for (v2 = u; v2; v2 = gf(v2))
                    q2++;
                  for (; 0 < t - q2; )
                    w2 = gf(w2), t--;
                  for (; 0 < q2 - t; )
                    u = gf(u), q2--;
                  for (; t--; ) {
                    if (w2 === u || u !== null && w2 === u.alternate)
                      break b;
                    w2 = gf(w2);
                    u = gf(u);
                  }
                  w2 = null;
                }
              else
                w2 = null;
              k22 !== null && hf(g2, h22, k22, w2, false);
              x2 !== null && z2 !== null && hf(g2, z2, x2, w2, true);
            }
          }
        }
        a: {
          h22 = d22 ? ue(d22) : window;
          k22 = h22.nodeName && h22.nodeName.toLowerCase();
          if (k22 === "select" || k22 === "input" && h22.type === "file")
            var J = ve;
          else if (me(h22))
            if (we)
              J = Fe;
            else {
              J = De;
              var K = Ce;
            }
          else
            (k22 = h22.nodeName) && k22.toLowerCase() === "input" && (h22.type === "checkbox" || h22.type === "radio") && (J = Ee);
          if (J && (J = J(a2, d22))) {
            ne(g2, J, c, e2);
            break a;
          }
          K && K(a2, h22, d22);
          a2 === "focusout" && (K = h22._wrapperState) && K.controlled && h22.type === "number" && bb(h22, "number", h22.value);
        }
        K = d22 ? ue(d22) : window;
        switch (a2) {
          case "focusin":
            if (me(K) || K.contentEditable === "true")
              Qe = K, Re = d22, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var Q2;
        if (ae)
          b: {
            switch (a2) {
              case "compositionstart":
                var L2 = "onCompositionStart";
                break b;
              case "compositionend":
                L2 = "onCompositionEnd";
                break b;
              case "compositionupdate":
                L2 = "onCompositionUpdate";
                break b;
            }
            L2 = void 0;
          }
        else
          ie ? ge(a2, c) && (L2 = "onCompositionEnd") : a2 === "keydown" && c.keyCode === 229 && (L2 = "onCompositionStart");
        L2 && (de && c.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d22, L2), 0 < K.length && (L2 = new Ld(L2, a2, null, c, e2), g2.push({ event: L2, listeners: K }), Q2 ? L2.data = Q2 : (Q2 = he(c), Q2 !== null && (L2.data = Q2))));
        if (Q2 = ce ? je(a2, c) : ke(a2, c))
          d22 = oe(d22, "onBeforeInput"), 0 < d22.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d22 }), e2.data = Q2);
      }
      se(g2, b2);
    });
  }
  function ef(a2, b2, c) {
    return { instance: a2, listener: b2, currentTarget: c };
  }
  function oe(a2, b2) {
    for (var c = b2 + "Capture", d2 = []; a2 !== null; ) {
      var e = a2, f = e.stateNode;
      e.tag === 5 && f !== null && (e = f, f = Ob(a2, c), f != null && d2.unshift(ef(a2, f, e)), f = Ob(a2, b2), f != null && d2.push(ef(a2, f, e)));
      a2 = a2.return;
    }
    return d2;
  }
  function gf(a2) {
    if (a2 === null)
      return null;
    do
      a2 = a2.return;
    while (a2 && a2.tag !== 5);
    return a2 ? a2 : null;
  }
  function hf(a2, b2, c, d2, e) {
    for (var f = b2._reactName, g = []; c !== null && c !== d2; ) {
      var h2 = c, k2 = h2.alternate, l = h2.stateNode;
      if (k2 !== null && k2 === d2)
        break;
      h2.tag === 5 && l !== null && (h2 = l, e ? (k2 = Ob(c, f), k2 != null && g.unshift(ef(c, k2, h2))) : e || (k2 = Ob(c, f), k2 != null && g.push(ef(c, k2, h2))));
      c = c.return;
    }
    g.length !== 0 && a2.push({ event: b2, listeners: g });
  }
  function jf() {
  }
  var kf = null;
  var lf = null;
  function mf(a2, b2) {
    switch (a2) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b2.autoFocus;
    }
    return false;
  }
  function nf(a2, b2) {
    return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
  }
  var of = typeof setTimeout === "function" ? setTimeout : void 0;
  var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
  function qf(a2) {
    a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
  }
  function rf(a2) {
    for (; a2 != null; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (b2 === 1 || b2 === 3)
        break;
    }
    return a2;
  }
  function sf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (a2.nodeType === 8) {
        var c = a2.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (b2 === 0)
            return a2;
          b2--;
        } else
          c === "/$" && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var tf = 0;
  function uf(a2) {
    return { $$typeof: Ga, toString: a2, valueOf: a2 };
  }
  var vf = Math.random().toString(36).slice(2);
  var wf = "__reactFiber$" + vf;
  var xf = "__reactProps$" + vf;
  var ff = "__reactContainer$" + vf;
  var yf = "__reactEvents$" + vf;
  function wc(a2) {
    var b2 = a2[wf];
    if (b2)
      return b2;
    for (var c = a2.parentNode; c; ) {
      if (b2 = c[ff] || c[wf]) {
        c = b2.alternate;
        if (b2.child !== null || c !== null && c.child !== null)
          for (a2 = sf(a2); a2 !== null; ) {
            if (c = a2[wf])
              return c;
            a2 = sf(a2);
          }
        return b2;
      }
      a2 = c;
      c = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[wf] || a2[ff];
    return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
  }
  function ue(a2) {
    if (a2.tag === 5 || a2.tag === 6)
      return a2.stateNode;
    throw Error(y(33));
  }
  function Db(a2) {
    return a2[xf] || null;
  }
  function $e(a2) {
    var b2 = a2[yf];
    b2 === void 0 && (b2 = a2[yf] = new Set());
    return b2;
  }
  var zf = [];
  var Af = -1;
  function Bf(a2) {
    return { current: a2 };
  }
  function H(a2) {
    0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
  }
  function I(a2, b2) {
    Af++;
    zf[Af] = a2.current;
    a2.current = b2;
  }
  var Cf = {};
  var M = Bf(Cf);
  var N = Bf(false);
  var Df = Cf;
  function Ef(a2, b2) {
    var c = a2.type.contextTypes;
    if (!c)
      return Cf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
      return d2.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c)
      e[f] = b2[f];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Ff(a2) {
    a2 = a2.childContextTypes;
    return a2 !== null && a2 !== void 0;
  }
  function Gf() {
    H(N);
    H(M);
  }
  function Hf(a2, b2, c) {
    if (M.current !== Cf)
      throw Error(y(168));
    I(M, b2);
    I(N, c);
  }
  function If(a2, b2, c) {
    var d2 = a2.stateNode;
    a2 = b2.childContextTypes;
    if (typeof d2.getChildContext !== "function")
      return c;
    d2 = d2.getChildContext();
    for (var e in d2)
      if (!(e in a2))
        throw Error(y(108, Ra(b2) || "Unknown", e));
    return object_assign_default({}, c, d2);
  }
  function Jf(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
    Df = M.current;
    I(M, a2);
    I(N, N.current);
    return true;
  }
  function Kf(a2, b2, c) {
    var d2 = a2.stateNode;
    if (!d2)
      throw Error(y(169));
    c ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
    I(N, c);
  }
  var Lf = null;
  var Mf = null;
  var Nf = scheduler_default.unstable_runWithPriority;
  var Of = scheduler_default.unstable_scheduleCallback;
  var Pf = scheduler_default.unstable_cancelCallback;
  var Qf = scheduler_default.unstable_shouldYield;
  var Rf = scheduler_default.unstable_requestPaint;
  var Sf = scheduler_default.unstable_now;
  var Tf = scheduler_default.unstable_getCurrentPriorityLevel;
  var Uf = scheduler_default.unstable_ImmediatePriority;
  var Vf = scheduler_default.unstable_UserBlockingPriority;
  var Wf = scheduler_default.unstable_NormalPriority;
  var Xf = scheduler_default.unstable_LowPriority;
  var Yf = scheduler_default.unstable_IdlePriority;
  var Zf = {};
  var $f = Rf !== void 0 ? Rf : function() {
  };
  var ag = null;
  var bg = null;
  var cg = false;
  var dg = Sf();
  var O = 1e4 > dg ? Sf : function() {
    return Sf() - dg;
  };
  function eg() {
    switch (Tf()) {
      case Uf:
        return 99;
      case Vf:
        return 98;
      case Wf:
        return 97;
      case Xf:
        return 96;
      case Yf:
        return 95;
      default:
        throw Error(y(332));
    }
  }
  function fg(a2) {
    switch (a2) {
      case 99:
        return Uf;
      case 98:
        return Vf;
      case 97:
        return Wf;
      case 96:
        return Xf;
      case 95:
        return Yf;
      default:
        throw Error(y(332));
    }
  }
  function gg(a2, b2) {
    a2 = fg(a2);
    return Nf(a2, b2);
  }
  function hg(a2, b2, c) {
    a2 = fg(a2);
    return Of(a2, b2, c);
  }
  function ig() {
    if (bg !== null) {
      var a2 = bg;
      bg = null;
      Pf(a2);
    }
    jg();
  }
  function jg() {
    if (!cg && ag !== null) {
      cg = true;
      var a2 = 0;
      try {
        var b2 = ag;
        gg(99, function() {
          for (; a2 < b2.length; a2++) {
            var c = b2[a2];
            do
              c = c(true);
            while (c !== null);
          }
        });
        ag = null;
      } catch (c) {
        throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c;
      } finally {
        cg = false;
      }
    }
  }
  var kg = ra.ReactCurrentBatchConfig;
  function lg(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = object_assign_default({}, b2);
      a2 = a2.defaultProps;
      for (var c in a2)
        b2[c] === void 0 && (b2[c] = a2[c]);
      return b2;
    }
    return b2;
  }
  var mg = Bf(null);
  var ng = null;
  var og = null;
  var pg = null;
  function qg() {
    pg = og = ng = null;
  }
  function rg(a2) {
    var b2 = mg.current;
    H(mg);
    a2.type._context._currentValue = b2;
  }
  function sg(a2, b2) {
    for (; a2 !== null; ) {
      var c = a2.alternate;
      if ((a2.childLanes & b2) === b2)
        if (c === null || (c.childLanes & b2) === b2)
          break;
        else
          c.childLanes |= b2;
      else
        a2.childLanes |= b2, c !== null && (c.childLanes |= b2);
      a2 = a2.return;
    }
  }
  function tg(a2, b2) {
    ng = a2;
    pg = og = null;
    a2 = a2.dependencies;
    a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
  }
  function vg(a2, b2) {
    if (pg !== a2 && b2 !== false && b2 !== 0) {
      if (typeof b2 !== "number" || b2 === 1073741823)
        pg = a2, b2 = 1073741823;
      b2 = { context: a2, observedBits: b2, next: null };
      if (og === null) {
        if (ng === null)
          throw Error(y(308));
        og = b2;
        ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
      } else
        og = og.next = b2;
    }
    return a2._currentValue;
  }
  var wg = false;
  function xg(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function yg(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function zg(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function Ag(a2, b2) {
    a2 = a2.updateQueue;
    if (a2 !== null) {
      a2 = a2.shared;
      var c = a2.pending;
      c === null ? b2.next = b2 : (b2.next = c.next, c.next = b2);
      a2.pending = b2;
    }
  }
  function Bg(a2, b2) {
    var c = a2.updateQueue, d2 = a2.alternate;
    if (d2 !== null && (d2 = d2.updateQueue, c === d2)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (c !== null) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          f === null ? e = f = g : f = f.next = g;
          c = c.next;
        } while (c !== null);
        f === null ? e = f = b2 : f = f.next = b2;
      } else
        e = f = b2;
      c = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c;
      return;
    }
    a2 = c.lastBaseUpdate;
    a2 === null ? c.firstBaseUpdate = b2 : a2.next = b2;
    c.lastBaseUpdate = b2;
  }
  function Cg(a2, b2, c, d2) {
    var e = a2.updateQueue;
    wg = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h2 = e.shared.pending;
    if (h2 !== null) {
      e.shared.pending = null;
      var k2 = h2, l = k2.next;
      k2.next = null;
      g === null ? f = l : g.next = l;
      g = k2;
      var n = a2.alternate;
      if (n !== null) {
        n = n.updateQueue;
        var A = n.lastBaseUpdate;
        A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k2);
      }
    }
    if (f !== null) {
      A = e.baseState;
      g = 0;
      n = l = k2 = null;
      do {
        h2 = f.lane;
        var p = f.eventTime;
        if ((d2 & h2) === h2) {
          n !== null && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          a: {
            var C2 = a2, x2 = f;
            h2 = b2;
            p = c;
            switch (x2.tag) {
              case 1:
                C2 = x2.payload;
                if (typeof C2 === "function") {
                  A = C2.call(p, A, h2);
                  break a;
                }
                A = C2;
                break a;
              case 3:
                C2.flags = C2.flags & -4097 | 64;
              case 0:
                C2 = x2.payload;
                h2 = typeof C2 === "function" ? C2.call(p, A, h2) : C2;
                if (h2 === null || h2 === void 0)
                  break a;
                A = object_assign_default({}, A, h2);
                break a;
              case 2:
                wg = true;
            }
          }
          f.callback !== null && (a2.flags |= 32, h2 = e.effects, h2 === null ? e.effects = [f] : h2.push(f));
        } else
          p = { eventTime: p, lane: h2, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n === null ? (l = n = p, k2 = A) : n = n.next = p, g |= h2;
        f = f.next;
        if (f === null)
          if (h2 = e.shared.pending, h2 === null)
            break;
          else
            f = h2.next, h2.next = null, e.lastBaseUpdate = h2, e.shared.pending = null;
      } while (1);
      n === null && (k2 = A);
      e.baseState = k2;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      Dg |= g;
      a2.lanes = g;
      a2.memoizedState = A;
    }
  }
  function Eg(a2, b2, c) {
    a2 = b2.effects;
    b2.effects = null;
    if (a2 !== null)
      for (b2 = 0; b2 < a2.length; b2++) {
        var d2 = a2[b2], e = d2.callback;
        if (e !== null) {
          d2.callback = null;
          d2 = c;
          if (typeof e !== "function")
            throw Error(y(191, e));
          e.call(d2);
        }
      }
  }
  var Fg = new react_default.Component().refs;
  function Gg(a2, b2, c, d2) {
    b2 = a2.memoizedState;
    c = c(d2, b2);
    c = c === null || c === void 0 ? b2 : object_assign_default({}, b2, c);
    a2.memoizedState = c;
    a2.lanes === 0 && (a2.updateQueue.baseState = c);
  }
  var Kg = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c) {
    a2 = a2._reactInternals;
    var d2 = Hg(), e = Ig(a2), f = zg(d2, e);
    f.payload = b2;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a2, f);
    Jg(a2, e, d2);
  }, enqueueReplaceState: function(a2, b2, c) {
    a2 = a2._reactInternals;
    var d2 = Hg(), e = Ig(a2), f = zg(d2, e);
    f.tag = 1;
    f.payload = b2;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a2, f);
    Jg(a2, e, d2);
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c = Hg(), d2 = Ig(a2), e = zg(c, d2);
    e.tag = 2;
    b2 !== void 0 && b2 !== null && (e.callback = b2);
    Ag(a2, e);
    Jg(a2, d2, c);
  } };
  function Lg(a2, b2, c, d2, e, f, g) {
    a2 = a2.stateNode;
    return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c, d2) || !Je(e, f) : true;
  }
  function Mg(a2, b2, c) {
    var d2 = false, e = Cf;
    var f = b2.contextType;
    typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f = (d2 = d2 !== null && d2 !== void 0) ? Ef(a2, e) : Cf);
    b2 = new b2(c, f);
    a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
    b2.updater = Kg;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f);
    return b2;
  }
  function Ng(a2, b2, c, d2) {
    a2 = b2.state;
    typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c, d2);
    typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c, d2);
    b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
  }
  function Og(a2, b2, c, d2) {
    var e = a2.stateNode;
    e.props = c;
    e.state = a2.memoizedState;
    e.refs = Fg;
    xg(a2);
    var f = b2.contextType;
    typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b2) ? Df : M.current, e.context = Ef(a2, f));
    Cg(a2, c, e, d2);
    e.state = a2.memoizedState;
    f = b2.getDerivedStateFromProps;
    typeof f === "function" && (Gg(a2, b2, f, c), e.state = a2.memoizedState);
    typeof b2.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b2 = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b2 !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a2, c, e, d2), e.state = a2.memoizedState);
    typeof e.componentDidMount === "function" && (a2.flags |= 4);
  }
  var Pg = Array.isArray;
  function Qg(a2, b2, c) {
    a2 = c.ref;
    if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (c.tag !== 1)
            throw Error(y(309));
          var d2 = c.stateNode;
        }
        if (!d2)
          throw Error(y(147, a2));
        var e = "" + a2;
        if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e)
          return b2.ref;
        b2 = function(a22) {
          var b22 = d2.refs;
          b22 === Fg && (b22 = d2.refs = {});
          a22 === null ? delete b22[e] : b22[e] = a22;
        };
        b2._stringRef = e;
        return b2;
      }
      if (typeof a2 !== "string")
        throw Error(y(284));
      if (!c._owner)
        throw Error(y(290, a2));
    }
    return a2;
  }
  function Rg(a2, b2) {
    if (a2.type !== "textarea")
      throw Error(y(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
  }
  function Sg(a2) {
    function b2(b22, c2) {
      if (a2) {
        var d22 = b22.lastEffect;
        d22 !== null ? (d22.nextEffect = c2, b22.lastEffect = c2) : b22.firstEffect = b22.lastEffect = c2;
        c2.nextEffect = null;
        c2.flags = 8;
      }
    }
    function c(c2, d22) {
      if (!a2)
        return null;
      for (; d22 !== null; )
        b2(c2, d22), d22 = d22.sibling;
      return null;
    }
    function d2(a22, b22) {
      for (a22 = new Map(); b22 !== null; )
        b22.key !== null ? a22.set(b22.key, b22) : a22.set(b22.index, b22), b22 = b22.sibling;
      return a22;
    }
    function e(a22, b22) {
      a22 = Tg(a22, b22);
      a22.index = 0;
      a22.sibling = null;
      return a22;
    }
    function f(b22, c2, d22) {
      b22.index = d22;
      if (!a2)
        return c2;
      d22 = b22.alternate;
      if (d22 !== null)
        return d22 = d22.index, d22 < c2 ? (b22.flags = 2, c2) : d22;
      b22.flags = 2;
      return c2;
    }
    function g(b22) {
      a2 && b22.alternate === null && (b22.flags = 2);
      return b22;
    }
    function h2(a22, b22, c2, d22) {
      if (b22 === null || b22.tag !== 6)
        return b22 = Ug(c2, a22.mode, d22), b22.return = a22, b22;
      b22 = e(b22, c2);
      b22.return = a22;
      return b22;
    }
    function k2(a22, b22, c2, d22) {
      if (b22 !== null && b22.elementType === c2.type)
        return d22 = e(b22, c2.props), d22.ref = Qg(a22, b22, c2), d22.return = a22, d22;
      d22 = Vg(c2.type, c2.key, c2.props, null, a22.mode, d22);
      d22.ref = Qg(a22, b22, c2);
      d22.return = a22;
      return d22;
    }
    function l(a22, b22, c2, d22) {
      if (b22 === null || b22.tag !== 4 || b22.stateNode.containerInfo !== c2.containerInfo || b22.stateNode.implementation !== c2.implementation)
        return b22 = Wg(c2, a22.mode, d22), b22.return = a22, b22;
      b22 = e(b22, c2.children || []);
      b22.return = a22;
      return b22;
    }
    function n(a22, b22, c2, d22, f2) {
      if (b22 === null || b22.tag !== 7)
        return b22 = Xg(c2, a22.mode, d22, f2), b22.return = a22, b22;
      b22 = e(b22, c2);
      b22.return = a22;
      return b22;
    }
    function A(a22, b22, c2) {
      if (typeof b22 === "string" || typeof b22 === "number")
        return b22 = Ug("" + b22, a22.mode, c2), b22.return = a22, b22;
      if (typeof b22 === "object" && b22 !== null) {
        switch (b22.$$typeof) {
          case sa:
            return c2 = Vg(b22.type, b22.key, b22.props, null, a22.mode, c2), c2.ref = Qg(a22, null, b22), c2.return = a22, c2;
          case ta:
            return b22 = Wg(b22, a22.mode, c2), b22.return = a22, b22;
        }
        if (Pg(b22) || La(b22))
          return b22 = Xg(b22, a22.mode, c2, null), b22.return = a22, b22;
        Rg(a22, b22);
      }
      return null;
    }
    function p(a22, b22, c2, d22) {
      var e2 = b22 !== null ? b22.key : null;
      if (typeof c2 === "string" || typeof c2 === "number")
        return e2 !== null ? null : h2(a22, b22, "" + c2, d22);
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case sa:
            return c2.key === e2 ? c2.type === ua ? n(a22, b22, c2.props.children, d22, e2) : k2(a22, b22, c2, d22) : null;
          case ta:
            return c2.key === e2 ? l(a22, b22, c2, d22) : null;
        }
        if (Pg(c2) || La(c2))
          return e2 !== null ? null : n(a22, b22, c2, d22, null);
        Rg(a22, c2);
      }
      return null;
    }
    function C2(a22, b22, c2, d22, e2) {
      if (typeof d22 === "string" || typeof d22 === "number")
        return a22 = a22.get(c2) || null, h2(b22, a22, "" + d22, e2);
      if (typeof d22 === "object" && d22 !== null) {
        switch (d22.$$typeof) {
          case sa:
            return a22 = a22.get(d22.key === null ? c2 : d22.key) || null, d22.type === ua ? n(b22, a22, d22.props.children, e2, d22.key) : k2(b22, a22, d22, e2);
          case ta:
            return a22 = a22.get(d22.key === null ? c2 : d22.key) || null, l(b22, a22, d22, e2);
        }
        if (Pg(d22) || La(d22))
          return a22 = a22.get(c2) || null, n(b22, a22, d22, e2, null);
        Rg(b22, d22);
      }
      return null;
    }
    function x2(e2, g2, h22, k22) {
      for (var l2 = null, t = null, u = g2, z2 = g2 = 0, q2 = null; u !== null && z2 < h22.length; z2++) {
        u.index > z2 ? (q2 = u, u = null) : q2 = u.sibling;
        var n2 = p(e2, u, h22[z2], k22);
        if (n2 === null) {
          u === null && (u = q2);
          break;
        }
        a2 && u && n2.alternate === null && b2(e2, u);
        g2 = f(n2, g2, z2);
        t === null ? l2 = n2 : t.sibling = n2;
        t = n2;
        u = q2;
      }
      if (z2 === h22.length)
        return c(e2, u), l2;
      if (u === null) {
        for (; z2 < h22.length; z2++)
          u = A(e2, h22[z2], k22), u !== null && (g2 = f(u, g2, z2), t === null ? l2 = u : t.sibling = u, t = u);
        return l2;
      }
      for (u = d2(e2, u); z2 < h22.length; z2++)
        q2 = C2(u, e2, z2, h22[z2], k22), q2 !== null && (a2 && q2.alternate !== null && u.delete(q2.key === null ? z2 : q2.key), g2 = f(q2, g2, z2), t === null ? l2 = q2 : t.sibling = q2, t = q2);
      a2 && u.forEach(function(a22) {
        return b2(e2, a22);
      });
      return l2;
    }
    function w2(e2, g2, h22, k22) {
      var l2 = La(h22);
      if (typeof l2 !== "function")
        throw Error(y(150));
      h22 = l2.call(h22);
      if (h22 == null)
        throw Error(y(151));
      for (var t = l2 = null, u = g2, z2 = g2 = 0, q2 = null, n2 = h22.next(); u !== null && !n2.done; z2++, n2 = h22.next()) {
        u.index > z2 ? (q2 = u, u = null) : q2 = u.sibling;
        var w22 = p(e2, u, n2.value, k22);
        if (w22 === null) {
          u === null && (u = q2);
          break;
        }
        a2 && u && w22.alternate === null && b2(e2, u);
        g2 = f(w22, g2, z2);
        t === null ? l2 = w22 : t.sibling = w22;
        t = w22;
        u = q2;
      }
      if (n2.done)
        return c(e2, u), l2;
      if (u === null) {
        for (; !n2.done; z2++, n2 = h22.next())
          n2 = A(e2, n2.value, k22), n2 !== null && (g2 = f(n2, g2, z2), t === null ? l2 = n2 : t.sibling = n2, t = n2);
        return l2;
      }
      for (u = d2(e2, u); !n2.done; z2++, n2 = h22.next())
        n2 = C2(u, e2, z2, n2.value, k22), n2 !== null && (a2 && n2.alternate !== null && u.delete(n2.key === null ? z2 : n2.key), g2 = f(n2, g2, z2), t === null ? l2 = n2 : t.sibling = n2, t = n2);
      a2 && u.forEach(function(a22) {
        return b2(e2, a22);
      });
      return l2;
    }
    return function(a22, d22, f2, h22) {
      var k22 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
      k22 && (f2 = f2.props.children);
      var l2 = typeof f2 === "object" && f2 !== null;
      if (l2)
        switch (f2.$$typeof) {
          case sa:
            a: {
              l2 = f2.key;
              for (k22 = d22; k22 !== null; ) {
                if (k22.key === l2) {
                  switch (k22.tag) {
                    case 7:
                      if (f2.type === ua) {
                        c(a22, k22.sibling);
                        d22 = e(k22, f2.props.children);
                        d22.return = a22;
                        a22 = d22;
                        break a;
                      }
                      break;
                    default:
                      if (k22.elementType === f2.type) {
                        c(a22, k22.sibling);
                        d22 = e(k22, f2.props);
                        d22.ref = Qg(a22, k22, f2);
                        d22.return = a22;
                        a22 = d22;
                        break a;
                      }
                  }
                  c(a22, k22);
                  break;
                } else
                  b2(a22, k22);
                k22 = k22.sibling;
              }
              f2.type === ua ? (d22 = Xg(f2.props.children, a22.mode, h22, f2.key), d22.return = a22, a22 = d22) : (h22 = Vg(f2.type, f2.key, f2.props, null, a22.mode, h22), h22.ref = Qg(a22, d22, f2), h22.return = a22, a22 = h22);
            }
            return g(a22);
          case ta:
            a: {
              for (k22 = f2.key; d22 !== null; ) {
                if (d22.key === k22)
                  if (d22.tag === 4 && d22.stateNode.containerInfo === f2.containerInfo && d22.stateNode.implementation === f2.implementation) {
                    c(a22, d22.sibling);
                    d22 = e(d22, f2.children || []);
                    d22.return = a22;
                    a22 = d22;
                    break a;
                  } else {
                    c(a22, d22);
                    break;
                  }
                else
                  b2(a22, d22);
                d22 = d22.sibling;
              }
              d22 = Wg(f2, a22.mode, h22);
              d22.return = a22;
              a22 = d22;
            }
            return g(a22);
        }
      if (typeof f2 === "string" || typeof f2 === "number")
        return f2 = "" + f2, d22 !== null && d22.tag === 6 ? (c(a22, d22.sibling), d22 = e(d22, f2), d22.return = a22, a22 = d22) : (c(a22, d22), d22 = Ug(f2, a22.mode, h22), d22.return = a22, a22 = d22), g(a22);
      if (Pg(f2))
        return x2(a22, d22, f2, h22);
      if (La(f2))
        return w2(a22, d22, f2, h22);
      l2 && Rg(a22, f2);
      if (typeof f2 === "undefined" && !k22)
        switch (a22.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(y(152, Ra(a22.type) || "Component"));
        }
      return c(a22, d22);
    };
  }
  var Yg = Sg(true);
  var Zg = Sg(false);
  var $g = {};
  var ah = Bf($g);
  var bh = Bf($g);
  var ch = Bf($g);
  function dh(a2) {
    if (a2 === $g)
      throw Error(y(174));
    return a2;
  }
  function eh(a2, b2) {
    I(ch, b2);
    I(bh, a2);
    I(ah, $g);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
        break;
      default:
        a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
    }
    H(ah);
    I(ah, b2);
  }
  function fh() {
    H(ah);
    H(bh);
    H(ch);
  }
  function gh(a2) {
    dh(ch.current);
    var b2 = dh(ah.current);
    var c = mb(b2, a2.type);
    b2 !== c && (I(bh, a2), I(ah, c));
  }
  function hh(a2) {
    bh.current === a2 && (H(ah), H(bh));
  }
  var P = Bf(0);
  function ih(a2) {
    for (var b2 = a2; b2 !== null; ) {
      if (b2.tag === 13) {
        var c = b2.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
          return b2;
      } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
        if ((b2.flags & 64) !== 0)
          return b2;
      } else if (b2.child !== null) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var jh = null;
  var kh = null;
  var lh = false;
  function mh(a2, b2) {
    var c = nh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b2;
    c.return = a2;
    c.flags = 8;
    a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c, a2.lastEffect = c) : a2.firstEffect = a2.lastEffect = c;
  }
  function oh(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c = a2.type;
        b2 = b2.nodeType !== 1 || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return b2 !== null ? (a2.stateNode = b2, true) : false;
      case 6:
        return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
      case 13:
        return false;
      default:
        return false;
    }
  }
  function ph(a2) {
    if (lh) {
      var b2 = kh;
      if (b2) {
        var c = b2;
        if (!oh(a2, b2)) {
          b2 = rf(c.nextSibling);
          if (!b2 || !oh(a2, b2)) {
            a2.flags = a2.flags & -1025 | 2;
            lh = false;
            jh = a2;
            return;
          }
          mh(jh, c);
        }
        jh = a2;
        kh = rf(b2.firstChild);
      } else
        a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
    }
  }
  function qh(a2) {
    for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
      a2 = a2.return;
    jh = a2;
  }
  function rh(a2) {
    if (a2 !== jh)
      return false;
    if (!lh)
      return qh(a2), lh = true, false;
    var b2 = a2.type;
    if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
      for (b2 = kh; b2; )
        mh(a2, b2), b2 = rf(b2.nextSibling);
    qh(a2);
    if (a2.tag === 13) {
      a2 = a2.memoizedState;
      a2 = a2 !== null ? a2.dehydrated : null;
      if (!a2)
        throw Error(y(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (a2.nodeType === 8) {
            var c = a2.data;
            if (c === "/$") {
              if (b2 === 0) {
                kh = rf(a2.nextSibling);
                break a;
              }
              b2--;
            } else
              c !== "$" && c !== "$!" && c !== "$?" || b2++;
          }
          a2 = a2.nextSibling;
        }
        kh = null;
      }
    } else
      kh = jh ? rf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function sh() {
    kh = jh = null;
    lh = false;
  }
  var th = [];
  function uh() {
    for (var a2 = 0; a2 < th.length; a2++)
      th[a2]._workInProgressVersionPrimary = null;
    th.length = 0;
  }
  var vh = ra.ReactCurrentDispatcher;
  var wh = ra.ReactCurrentBatchConfig;
  var xh = 0;
  var R = null;
  var S = null;
  var T = null;
  var yh = false;
  var zh = false;
  function Ah() {
    throw Error(y(321));
  }
  function Bh(a2, b2) {
    if (b2 === null)
      return false;
    for (var c = 0; c < b2.length && c < a2.length; c++)
      if (!He(a2[c], b2[c]))
        return false;
    return true;
  }
  function Ch(a2, b2, c, d2, e, f) {
    xh = f;
    R = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
    a2 = c(d2, e);
    if (zh) {
      f = 0;
      do {
        zh = false;
        if (!(25 > f))
          throw Error(y(301));
        f += 1;
        T = S = null;
        b2.updateQueue = null;
        vh.current = Fh;
        a2 = c(d2, e);
      } while (zh);
    }
    vh.current = Gh;
    b2 = S !== null && S.next !== null;
    xh = 0;
    T = S = R = null;
    yh = false;
    if (b2)
      throw Error(y(300));
    return a2;
  }
  function Hh() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
    return T;
  }
  function Ih() {
    if (S === null) {
      var a2 = R.alternate;
      a2 = a2 !== null ? a2.memoizedState : null;
    } else
      a2 = S.next;
    var b2 = T === null ? R.memoizedState : T.next;
    if (b2 !== null)
      T = b2, S = a2;
    else {
      if (a2 === null)
        throw Error(y(310));
      S = a2;
      a2 = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
      T === null ? R.memoizedState = T = a2 : T = T.next = a2;
    }
    return T;
  }
  function Jh(a2, b2) {
    return typeof b2 === "function" ? b2(a2) : b2;
  }
  function Kh(a2) {
    var b2 = Ih(), c = b2.queue;
    if (c === null)
      throw Error(y(311));
    c.lastRenderedReducer = a2;
    var d2 = S, e = d2.baseQueue, f = c.pending;
    if (f !== null) {
      if (e !== null) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d2.baseQueue = e = f;
      c.pending = null;
    }
    if (e !== null) {
      e = e.next;
      d2 = d2.baseState;
      var h2 = g = f = null, k2 = e;
      do {
        var l = k2.lane;
        if ((xh & l) === l)
          h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
        else {
          var n = {
            lane: l,
            action: k2.action,
            eagerReducer: k2.eagerReducer,
            eagerState: k2.eagerState,
            next: null
          };
          h2 === null ? (g = h2 = n, f = d2) : h2 = h2.next = n;
          R.lanes |= l;
          Dg |= l;
        }
        k2 = k2.next;
      } while (k2 !== null && k2 !== e);
      h2 === null ? f = d2 : h2.next = g;
      He(d2, b2.memoizedState) || (ug = true);
      b2.memoizedState = d2;
      b2.baseState = f;
      b2.baseQueue = h2;
      c.lastRenderedState = d2;
    }
    return [b2.memoizedState, c.dispatch];
  }
  function Lh(a2) {
    var b2 = Ih(), c = b2.queue;
    if (c === null)
      throw Error(y(311));
    c.lastRenderedReducer = a2;
    var d2 = c.dispatch, e = c.pending, f = b2.memoizedState;
    if (e !== null) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a2(f, g.action), g = g.next;
      while (g !== e);
      He(f, b2.memoizedState) || (ug = true);
      b2.memoizedState = f;
      b2.baseQueue === null && (b2.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d2];
  }
  function Mh(a2, b2, c) {
    var d2 = b2._getVersion;
    d2 = d2(b2._source);
    var e = b2._workInProgressVersionPrimary;
    if (e !== null)
      a2 = e === d2;
    else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
      b2._workInProgressVersionPrimary = d2, th.push(b2);
    if (a2)
      return c(b2._source);
    th.push(b2);
    throw Error(y(350));
  }
  function Nh(a2, b2, c, d2) {
    var e = U;
    if (e === null)
      throw Error(y(349));
    var f = b2._getVersion, g = f(b2._source), h2 = vh.current, k2 = h2.useState(function() {
      return Mh(e, b2, c);
    }), l = k2[1], n = k2[0];
    k2 = T;
    var A = a2.memoizedState, p = A.refs, C2 = p.getSnapshot, x2 = A.source;
    A = A.subscribe;
    var w2 = R;
    a2.memoizedState = { refs: p, source: b2, subscribe: d2 };
    h2.useEffect(function() {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a22 = f(b2._source);
      if (!He(g, a22)) {
        a22 = c(b2._source);
        He(n, a22) || (l(a22), a22 = Ig(w2), e.mutableReadLanes |= a22 & e.pendingLanes);
        a22 = e.mutableReadLanes;
        e.entangledLanes |= a22;
        for (var d22 = e.entanglements, h22 = a22; 0 < h22; ) {
          var k22 = 31 - Vc(h22), v2 = 1 << k22;
          d22[k22] |= a22;
          h22 &= ~v2;
        }
      }
    }, [c, b2, d2]);
    h2.useEffect(function() {
      return d2(b2._source, function() {
        var a22 = p.getSnapshot, c2 = p.setSnapshot;
        try {
          c2(a22(b2._source));
          var d22 = Ig(w2);
          e.mutableReadLanes |= d22 & e.pendingLanes;
        } catch (q2) {
          c2(function() {
            throw q2;
          });
        }
      });
    }, [b2, d2]);
    He(C2, c) && He(x2, b2) && He(A, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n }, a2.dispatch = l = Oh.bind(null, R, a2), k2.queue = a2, k2.baseQueue = null, n = Mh(e, b2, c), k2.memoizedState = k2.baseState = n);
    return n;
  }
  function Ph(a2, b2, c) {
    var d2 = Ih();
    return Nh(d2, a2, b2, c);
  }
  function Qh(a2) {
    var b2 = Hh();
    typeof a2 === "function" && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
    a2 = a2.dispatch = Oh.bind(null, R, a2);
    return [b2.memoizedState, a2];
  }
  function Rh(a2, b2, c, d2) {
    a2 = { tag: a2, create: b2, destroy: c, deps: d2, next: null };
    b2 = R.updateQueue;
    b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c = b2.lastEffect, c === null ? b2.lastEffect = a2.next = a2 : (d2 = c.next, c.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function Sh(a2) {
    var b2 = Hh();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }
  function Th() {
    return Ih().memoizedState;
  }
  function Uh(a2, b2, c, d2) {
    var e = Hh();
    R.flags |= a2;
    e.memoizedState = Rh(1 | b2, c, void 0, d2 === void 0 ? null : d2);
  }
  function Vh(a2, b2, c, d2) {
    var e = Ih();
    d2 = d2 === void 0 ? null : d2;
    var f = void 0;
    if (S !== null) {
      var g = S.memoizedState;
      f = g.destroy;
      if (d2 !== null && Bh(d2, g.deps)) {
        Rh(b2, c, f, d2);
        return;
      }
    }
    R.flags |= a2;
    e.memoizedState = Rh(1 | b2, c, f, d2);
  }
  function Wh(a2, b2) {
    return Uh(516, 4, a2, b2);
  }
  function Xh(a2, b2) {
    return Vh(516, 4, a2, b2);
  }
  function Yh(a2, b2) {
    return Vh(4, 2, a2, b2);
  }
  function Zh(a2, b2) {
    if (typeof b2 === "function")
      return a2 = a2(), b2(a2), function() {
        b2(null);
      };
    if (b2 !== null && b2 !== void 0)
      return a2 = a2(), b2.current = a2, function() {
        b2.current = null;
      };
  }
  function $h(a2, b2, c) {
    c = c !== null && c !== void 0 ? c.concat([a2]) : null;
    return Vh(4, 2, Zh.bind(null, b2, a2), c);
  }
  function ai() {
  }
  function bi(a2, b2) {
    var c = Ih();
    b2 = b2 === void 0 ? null : b2;
    var d2 = c.memoizedState;
    if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
      return d2[0];
    c.memoizedState = [a2, b2];
    return a2;
  }
  function ci(a2, b2) {
    var c = Ih();
    b2 = b2 === void 0 ? null : b2;
    var d2 = c.memoizedState;
    if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
      return d2[0];
    a2 = a2();
    c.memoizedState = [a2, b2];
    return a2;
  }
  function di(a2, b2) {
    var c = eg();
    gg(98 > c ? 98 : c, function() {
      a2(true);
    });
    gg(97 < c ? 97 : c, function() {
      var c2 = wh.transition;
      wh.transition = 1;
      try {
        a2(false), b2();
      } finally {
        wh.transition = c2;
      }
    });
  }
  function Oh(a2, b2, c) {
    var d2 = Hg(), e = Ig(a2), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b2.pending;
    g === null ? f.next = f : (f.next = g.next, g.next = f);
    b2.pending = f;
    g = a2.alternate;
    if (a2 === R || g !== null && g === R)
      zh = yh = true;
    else {
      if (a2.lanes === 0 && (g === null || g.lanes === 0) && (g = b2.lastRenderedReducer, g !== null))
        try {
          var h2 = b2.lastRenderedState, k2 = g(h2, c);
          f.eagerReducer = g;
          f.eagerState = k2;
          if (He(k2, h2))
            return;
        } catch (l) {
        } finally {
        }
      Jg(a2, e, d2);
    }
  }
  var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
  var Dh = { readContext: vg, useCallback: function(a2, b2) {
    Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
    return a2;
  }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c) {
    c = c !== null && c !== void 0 ? c.concat([a2]) : null;
    return Uh(4, 2, Zh.bind(null, b2, a2), c);
  }, useLayoutEffect: function(a2, b2) {
    return Uh(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c = Hh();
    b2 = b2 === void 0 ? null : b2;
    a2 = a2();
    c.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c) {
    var d2 = Hh();
    b2 = c !== void 0 ? c(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    a2 = a2.dispatch = Oh.bind(null, R, a2);
    return [d2.memoizedState, a2];
  }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
    var b2 = Qh(a2), c = b2[0], d2 = b2[1];
    Wh(function() {
      var b22 = wh.transition;
      wh.transition = 1;
      try {
        d2(a2);
      } finally {
        wh.transition = b22;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Qh(false), b2 = a2[0];
    a2 = di.bind(null, a2[1]);
    Sh(a2);
    return [a2, b2];
  }, useMutableSource: function(a2, b2, c) {
    var d2 = Hh();
    d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c };
    return Nh(d2, a2, b2, c);
  }, useOpaqueIdentifier: function() {
    if (lh) {
      var a2 = false, b2 = uf(function() {
        a2 || (a2 = true, c("r:" + (tf++).toString(36)));
        throw Error(y(355));
      }), c = Qh(b2)[1];
      (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
        c("r:" + (tf++).toString(36));
      }, void 0, null));
      return b2;
    }
    b2 = "r:" + (tf++).toString(36);
    Qh(b2);
    return b2;
  }, unstable_isNewReconciler: false };
  var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
    return Kh(Jh);
  }, useDebugValue: ai, useDeferredValue: function(a2) {
    var b2 = Kh(Jh), c = b2[0], d2 = b2[1];
    Xh(function() {
      var b22 = wh.transition;
      wh.transition = 1;
      try {
        d2(a2);
      } finally {
        wh.transition = b22;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Kh(Jh)[0];
    return [
      Th().current,
      a2
    ];
  }, useMutableSource: Ph, useOpaqueIdentifier: function() {
    return Kh(Jh)[0];
  }, unstable_isNewReconciler: false };
  var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
    return Lh(Jh);
  }, useDebugValue: ai, useDeferredValue: function(a2) {
    var b2 = Lh(Jh), c = b2[0], d2 = b2[1];
    Xh(function() {
      var b22 = wh.transition;
      wh.transition = 1;
      try {
        d2(a2);
      } finally {
        wh.transition = b22;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Lh(Jh)[0];
    return [
      Th().current,
      a2
    ];
  }, useMutableSource: Ph, useOpaqueIdentifier: function() {
    return Lh(Jh)[0];
  }, unstable_isNewReconciler: false };
  var ei = ra.ReactCurrentOwner;
  var ug = false;
  function fi(a2, b2, c, d2) {
    b2.child = a2 === null ? Zg(b2, null, c, d2) : Yg(b2, a2.child, c, d2);
  }
  function gi(a2, b2, c, d2, e) {
    c = c.render;
    var f = b2.ref;
    tg(b2, e);
    d2 = Ch(a2, b2, c, d2, f, e);
    if (a2 !== null && !ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e, hi(a2, b2, e);
    b2.flags |= 1;
    fi(a2, b2, d2, e);
    return b2.child;
  }
  function ii(a2, b2, c, d2, e, f) {
    if (a2 === null) {
      var g = c.type;
      if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
        return b2.tag = 15, b2.type = g, ki(a2, b2, g, d2, e, f);
      a2 = Vg(c.type, null, d2, b2, b2.mode, f);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    g = a2.child;
    if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d2) && a2.ref === b2.ref))
      return hi(a2, b2, f);
    b2.flags |= 1;
    a2 = Tg(g, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function ki(a2, b2, c, d2, e, f) {
    if (a2 !== null && Je(a2.memoizedProps, d2) && a2.ref === b2.ref)
      if (ug = false, (f & e) !== 0)
        (a2.flags & 16384) !== 0 && (ug = true);
      else
        return b2.lanes = a2.lanes, hi(a2, b2, f);
    return li(a2, b2, c, d2, f);
  }
  function mi(a2, b2, c) {
    var d2 = b2.pendingProps, e = d2.children, f = a2 !== null ? a2.memoizedState : null;
    if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
      if ((b2.mode & 4) === 0)
        b2.memoizedState = { baseLanes: 0 }, ni(b2, c);
      else if ((c & 1073741824) !== 0)
        b2.memoizedState = { baseLanes: 0 }, ni(b2, f !== null ? f.baseLanes : c);
      else
        return a2 = f !== null ? f.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
    else
      f !== null ? (d2 = f.baseLanes | c, b2.memoizedState = null) : d2 = c, ni(b2, d2);
    fi(a2, b2, e, c);
    return b2.child;
  }
  function oi(a2, b2) {
    var c = b2.ref;
    if (a2 === null && c !== null || a2 !== null && a2.ref !== c)
      b2.flags |= 128;
  }
  function li(a2, b2, c, d2, e) {
    var f = Ff(c) ? Df : M.current;
    f = Ef(b2, f);
    tg(b2, e);
    c = Ch(a2, b2, c, d2, f, e);
    if (a2 !== null && !ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e, hi(a2, b2, e);
    b2.flags |= 1;
    fi(a2, b2, c, e);
    return b2.child;
  }
  function pi(a2, b2, c, d2, e) {
    if (Ff(c)) {
      var f = true;
      Jf(b2);
    } else
      f = false;
    tg(b2, e);
    if (b2.stateNode === null)
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c, d2), Og(b2, c, d2, e), d2 = true;
    else if (a2 === null) {
      var g = b2.stateNode, h2 = b2.memoizedProps;
      g.props = h2;
      var k2 = g.context, l = c.contextType;
      typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b2, l));
      var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
      A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l) && Ng(b2, g, d2, l);
      wg = false;
      var p = b2.memoizedState;
      g.state = p;
      Cg(b2, d2, g, e);
      k2 = b2.memoizedState;
      h2 !== d2 || p !== k2 || N.current || wg ? (typeof n === "function" && (Gg(b2, c, n, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c, h2, d2, p, k2, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g.props = d2, g.state = k2, g.context = l, d2 = h2) : (typeof g.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
    } else {
      g = b2.stateNode;
      yg(a2, b2);
      h2 = b2.memoizedProps;
      l = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
      g.props = l;
      A = b2.pendingProps;
      p = g.context;
      k2 = c.contextType;
      typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c) ? Df : M.current, k2 = Ef(b2, k2));
      var C2 = c.getDerivedStateFromProps;
      (n = typeof C2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== A || p !== k2) && Ng(b2, g, d2, k2);
      wg = false;
      p = b2.memoizedState;
      g.state = p;
      Cg(b2, d2, g, e);
      var x2 = b2.memoizedState;
      h2 !== A || p !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c, C2, d2), x2 = b2.memoizedState), (l = wg || Lg(b2, c, l, d2, p, x2, k2)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d2, x2, k2), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g.componentDidUpdate === "function" && (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g.props = d2, g.state = x2, g.context = k2, d2 = l) : (typeof g.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), d2 = false);
    }
    return qi(a2, b2, c, d2, f, e);
  }
  function qi(a2, b2, c, d2, e, f) {
    oi(a2, b2);
    var g = (b2.flags & 64) !== 0;
    if (!d2 && !g)
      return e && Kf(b2, c, false), hi(a2, b2, f);
    d2 = b2.stateNode;
    ei.current = b2;
    var h2 = g && typeof c.getDerivedStateFromError !== "function" ? null : d2.render();
    b2.flags |= 1;
    a2 !== null && g ? (b2.child = Yg(b2, a2.child, null, f), b2.child = Yg(b2, null, h2, f)) : fi(a2, b2, h2, f);
    b2.memoizedState = d2.state;
    e && Kf(b2, c, true);
    return b2.child;
  }
  function ri(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
    eh(a2, b2.containerInfo);
  }
  var si = { dehydrated: null, retryLane: 0 };
  function ti(a2, b2, c) {
    var d2 = b2.pendingProps, e = P.current, f = false, g;
    (g = (b2.flags & 64) !== 0) || (g = a2 !== null && a2.memoizedState === null ? false : (e & 2) !== 0);
    g ? (f = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e |= 1);
    I(P, e & 1);
    if (a2 === null) {
      d2.fallback !== void 0 && ph(b2);
      a2 = d2.children;
      e = d2.fallback;
      if (f)
        return a2 = ui(b2, a2, e, c), b2.child.memoizedState = { baseLanes: c }, b2.memoizedState = si, a2;
      if (typeof d2.unstable_expectedLoadTime === "number")
        return a2 = ui(b2, a2, e, c), b2.child.memoizedState = { baseLanes: c }, b2.memoizedState = si, b2.lanes = 33554432, a2;
      c = vi({ mode: "visible", children: a2 }, b2.mode, c, null);
      c.return = b2;
      return b2.child = c;
    }
    if (a2.memoizedState !== null) {
      if (f)
        return d2 = wi(a2, b2, d2.children, d2.fallback, c), f = b2.child, e = a2.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a2.childLanes & ~c, b2.memoizedState = si, d2;
      c = xi(a2, b2, d2.children, c);
      b2.memoizedState = null;
      return c;
    }
    if (f)
      return d2 = wi(a2, b2, d2.children, d2.fallback, c), f = b2.child, e = a2.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a2.childLanes & ~c, b2.memoizedState = si, d2;
    c = xi(a2, b2, d2.children, c);
    b2.memoizedState = null;
    return c;
  }
  function ui(a2, b2, c, d2) {
    var e = a2.mode, f = a2.child;
    b2 = { mode: "hidden", children: b2 };
    (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b2) : f = vi(b2, e, 0, null);
    c = Xg(c, e, d2, null);
    f.return = a2;
    c.return = a2;
    f.sibling = c;
    a2.child = f;
    return c;
  }
  function xi(a2, b2, c, d2) {
    var e = a2.child;
    a2 = e.sibling;
    c = Tg(e, { mode: "visible", children: c });
    (b2.mode & 2) === 0 && (c.lanes = d2);
    c.return = b2;
    c.sibling = null;
    a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
    return b2.child = c;
  }
  function wi(a2, b2, c, d2, e) {
    var f = b2.mode, g = a2.child;
    a2 = g.sibling;
    var h2 = { mode: "hidden", children: c };
    (f & 2) === 0 && b2.child !== g ? (c = b2.child, c.childLanes = 0, c.pendingProps = h2, g = c.lastEffect, g !== null ? (b2.firstEffect = c.firstEffect, b2.lastEffect = g, g.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c = Tg(g, h2);
    a2 !== null ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f, e, null), d2.flags |= 2);
    d2.return = b2;
    c.return = b2;
    c.sibling = d2;
    b2.child = c;
    return d2;
  }
  function yi(a2, b2) {
    a2.lanes |= b2;
    var c = a2.alternate;
    c !== null && (c.lanes |= b2);
    sg(a2.return, b2);
  }
  function zi(a2, b2, c, d2, e, f) {
    var g = a2.memoizedState;
    g === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b2, g.rendering = null, g.renderingStartTime = 0, g.last = d2, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }
  function Ai(a2, b2, c) {
    var d2 = b2.pendingProps, e = d2.revealOrder, f = d2.tail;
    fi(a2, b2, d2.children, c);
    d2 = P.current;
    if ((d2 & 2) !== 0)
      d2 = d2 & 1 | 2, b2.flags |= 64;
    else {
      if (a2 !== null && (a2.flags & 64) !== 0)
        a:
          for (a2 = b2.child; a2 !== null; ) {
            if (a2.tag === 13)
              a2.memoizedState !== null && yi(a2, c);
            else if (a2.tag === 19)
              yi(a2, c);
            else if (a2.child !== null) {
              a2.child.return = a2;
              a2 = a2.child;
              continue;
            }
            if (a2 === b2)
              break a;
            for (; a2.sibling === null; ) {
              if (a2.return === null || a2.return === b2)
                break a;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            a2 = a2.sibling;
          }
      d2 &= 1;
    }
    I(P, d2);
    if ((b2.mode & 2) === 0)
      b2.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b2.child;
          for (e = null; c !== null; )
            a2 = c.alternate, a2 !== null && ih(a2) === null && (e = c), c = c.sibling;
          c = e;
          c === null ? (e = b2.child, b2.child = null) : (e = c.sibling, c.sibling = null);
          zi(b2, false, e, c, f, b2.lastEffect);
          break;
        case "backwards":
          c = null;
          e = b2.child;
          for (b2.child = null; e !== null; ) {
            a2 = e.alternate;
            if (a2 !== null && ih(a2) === null) {
              b2.child = e;
              break;
            }
            a2 = e.sibling;
            e.sibling = c;
            c = e;
            e = a2;
          }
          zi(b2, true, c, null, f, b2.lastEffect);
          break;
        case "together":
          zi(b2, false, null, null, void 0, b2.lastEffect);
          break;
        default:
          b2.memoizedState = null;
      }
    return b2.child;
  }
  function hi(a2, b2, c) {
    a2 !== null && (b2.dependencies = a2.dependencies);
    Dg |= b2.lanes;
    if ((c & b2.childLanes) !== 0) {
      if (a2 !== null && b2.child !== a2.child)
        throw Error(y(153));
      if (b2.child !== null) {
        a2 = b2.child;
        c = Tg(a2, a2.pendingProps);
        b2.child = c;
        for (c.return = b2; a2.sibling !== null; )
          a2 = a2.sibling, c = c.sibling = Tg(a2, a2.pendingProps), c.return = b2;
        c.sibling = null;
      }
      return b2.child;
    }
    return null;
  }
  var Bi;
  var Ci;
  var Di;
  var Ei;
  Bi = function(a2, b2) {
    for (var c = b2.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6)
        a2.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b2)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === b2)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Ci = function() {
  };
  Di = function(a2, b2, c, d2) {
    var e = a2.memoizedProps;
    if (e !== d2) {
      a2 = b2.stateNode;
      dh(ah.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a2, e);
          d2 = Ya(a2, d2);
          f = [];
          break;
        case "option":
          e = eb(a2, e);
          d2 = eb(a2, d2);
          f = [];
          break;
        case "select":
          e = object_assign_default({}, e, { value: void 0 });
          d2 = object_assign_default({}, d2, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a2, e);
          d2 = gb(a2, d2);
          f = [];
          break;
        default:
          typeof e.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = jf);
      }
      vb(c, d2);
      var g;
      c = null;
      for (l in e)
        if (!d2.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
          if (l === "style") {
            var h2 = e[l];
            for (g in h2)
              h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else
            l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d2) {
        var k2 = d2[l];
        h2 = e != null ? e[l] : void 0;
        if (d2.hasOwnProperty(l) && k2 !== h2 && (k2 != null || h2 != null))
          if (l === "style")
            if (h2) {
              for (g in h2)
                !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2)
                k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else
              c || (f || (f = []), f.push(l, c)), c = k2;
          else
            l === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f = f || []).push(l, k2)) : l === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f = f || []).push(l, "" + k2) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k2 != null && l === "onScroll" && G("scroll", a2), f || h2 === k2 || (f = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f = f || []).push(l, k2));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b2.updateQueue = l)
        b2.flags |= 4;
    }
  };
  Ei = function(a2, b2, c, d2) {
    c !== d2 && (b2.flags |= 4);
  };
  function Fi(a2, b2) {
    if (!lh)
      switch (a2.tailMode) {
        case "hidden":
          b2 = a2.tail;
          for (var c = null; b2 !== null; )
            b2.alternate !== null && (c = b2), b2 = b2.sibling;
          c === null ? a2.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a2.tail;
          for (var d2 = null; c !== null; )
            c.alternate !== null && (d2 = c), c = c.sibling;
          d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
      }
  }
  function Gi(a2, b2, c) {
    var d2 = b2.pendingProps;
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Ff(b2.type) && Gf(), null;
      case 3:
        fh();
        H(N);
        H(M);
        uh();
        d2 = b2.stateNode;
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (a2 === null || a2.child === null)
          rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
        Ci(b2);
        return null;
      case 5:
        hh(b2);
        var e = dh(ch.current);
        c = b2.type;
        if (a2 !== null && b2.stateNode != null)
          Di(a2, b2, c, d2, e), a2.ref !== b2.ref && (b2.flags |= 128);
        else {
          if (!d2) {
            if (b2.stateNode === null)
              throw Error(y(166));
            return null;
          }
          a2 = dh(ah.current);
          if (rh(b2)) {
            d2 = b2.stateNode;
            c = b2.type;
            var f = b2.memoizedProps;
            d2[wf] = b2;
            d2[xf] = f;
            switch (c) {
              case "dialog":
                G("cancel", d2);
                G("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", d2);
                break;
              case "video":
              case "audio":
                for (a2 = 0; a2 < Xe.length; a2++)
                  G(Xe[a2], d2);
                break;
              case "source":
                G("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                G("error", d2);
                G("load", d2);
                break;
              case "details":
                G("toggle", d2);
                break;
              case "input":
                Za(d2, f);
                G("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f.multiple };
                G("invalid", d2);
                break;
              case "textarea":
                hb(d2, f), G("invalid", d2);
            }
            vb(c, f);
            a2 = null;
            for (var g in f)
              f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d2.textContent !== e && (a2 = ["children", e]) : typeof e === "number" && d2.textContent !== "" + e && (a2 = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d2));
            switch (c) {
              case "input":
                Va(d2);
                cb(d2, f, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick === "function" && (d2.onclick = jf);
            }
            d2 = a2;
            b2.updateQueue = d2;
            d2 !== null && (b2.flags |= 4);
          } else {
            g = e.nodeType === 9 ? e : e.ownerDocument;
            a2 === kb.html && (a2 = lb(c));
            a2 === kb.html ? c === "script" ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g.createElement(c, { is: d2.is }) : (a2 = g.createElement(c), c === "select" && (g = a2, d2.multiple ? g.multiple = true : d2.size && (g.size = d2.size))) : a2 = g.createElementNS(a2, c);
            a2[wf] = b2;
            a2[xf] = d2;
            Bi(a2, b2, false, false);
            b2.stateNode = a2;
            g = wb(c, d2);
            switch (c) {
              case "dialog":
                G("cancel", a2);
                G("close", a2);
                e = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", a2);
                e = d2;
                break;
              case "video":
              case "audio":
                for (e = 0; e < Xe.length; e++)
                  G(Xe[e], a2);
                e = d2;
                break;
              case "source":
                G("error", a2);
                e = d2;
                break;
              case "img":
              case "image":
              case "link":
                G("error", a2);
                G("load", a2);
                e = d2;
                break;
              case "details":
                G("toggle", a2);
                e = d2;
                break;
              case "input":
                Za(a2, d2);
                e = Ya(a2, d2);
                G("invalid", a2);
                break;
              case "option":
                e = eb(a2, d2);
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e = object_assign_default({}, d2, { value: void 0 });
                G("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e = gb(a2, d2);
                G("invalid", a2);
                break;
              default:
                e = d2;
            }
            vb(c, e);
            var h2 = e;
            for (f in h2)
              if (h2.hasOwnProperty(f)) {
                var k2 = h2[f];
                f === "style" ? tb(a2, k2) : f === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f === "children" ? typeof k2 === "string" ? (c !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k2 != null && f === "onScroll" && G("scroll", a2) : k2 != null && qa(a2, f, k2, g));
              }
            switch (c) {
              case "input":
                Va(a2);
                cb(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                d2.value != null && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f = d2.value;
                f != null ? fb(a2, !!d2.multiple, f, false) : d2.defaultValue != null && fb(a2, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e.onClick === "function" && (a2.onclick = jf);
            }
            mf(c, d2) && (b2.flags |= 4);
          }
          b2.ref !== null && (b2.flags |= 128);
        }
        return null;
      case 6:
        if (a2 && b2.stateNode != null)
          Ei(a2, b2, a2.memoizedProps, d2);
        else {
          if (typeof d2 !== "string" && b2.stateNode === null)
            throw Error(y(166));
          c = dh(ch.current);
          dh(ah.current);
          rh(b2) ? (d2 = b2.stateNode, c = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c && (b2.flags |= 4)) : (d2 = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
        }
        return null;
      case 13:
        H(P);
        d2 = b2.memoizedState;
        if ((b2.flags & 64) !== 0)
          return b2.lanes = c, b2;
        d2 = d2 !== null;
        c = false;
        a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c = a2.memoizedState !== null;
        if (d2 && !c && (b2.mode & 2) !== 0)
          if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
            V === 0 && (V = 3);
          else {
            if (V === 0 || V === 3)
              V = 4;
            U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
          }
        if (d2 || c)
          b2.flags |= 4;
        return null;
      case 4:
        return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
      case 10:
        return rg(b2), null;
      case 17:
        return Ff(b2.type) && Gf(), null;
      case 19:
        H(P);
        d2 = b2.memoizedState;
        if (d2 === null)
          return null;
        f = (b2.flags & 64) !== 0;
        g = d2.rendering;
        if (g === null)
          if (f)
            Fi(d2, false);
          else {
            if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
              for (a2 = b2.child; a2 !== null; ) {
                g = ih(a2);
                if (g !== null) {
                  b2.flags |= 64;
                  Fi(d2, false);
                  f = g.updateQueue;
                  f !== null && (b2.updateQueue = f, b2.flags |= 4);
                  d2.lastEffect === null && (b2.firstEffect = null);
                  b2.lastEffect = d2.lastEffect;
                  d2 = c;
                  for (c = b2.child; c !== null; )
                    f = c, a2 = d2, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a2, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a2 = g.dependencies, f.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c = c.sibling;
                  I(P, P.current & 1 | 2);
                  return b2.child;
                }
                a2 = a2.sibling;
              }
            d2.tail !== null && O() > Ji && (b2.flags |= 64, f = true, Fi(d2, false), b2.lanes = 33554432);
          }
        else {
          if (!f)
            if (a2 = ih(g), a2 !== null) {
              if (b2.flags |= 64, f = true, c = a2.updateQueue, c !== null && (b2.updateQueue = c, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g.alternate && !lh)
                return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
            } else
              2 * O() - d2.renderingStartTime > Ji && c !== 1073741824 && (b2.flags |= 64, f = true, Fi(d2, false), b2.lanes = 33554432);
          d2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = d2.last, c !== null ? c.sibling = g : b2.child = g, d2.last = g);
        }
        return d2.tail !== null ? (c = d2.tail, d2.rendering = c, d2.tail = c.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c.sibling = null, b2 = P.current, I(P, f ? b2 & 1 | 2 : b2 & 1), c) : null;
      case 23:
      case 24:
        return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
    }
    throw Error(y(156, b2.tag));
  }
  function Li(a2) {
    switch (a2.tag) {
      case 1:
        Ff(a2.type) && Gf();
        var b2 = a2.flags;
        return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
      case 3:
        fh();
        H(N);
        H(M);
        uh();
        b2 = a2.flags;
        if ((b2 & 64) !== 0)
          throw Error(y(285));
        a2.flags = b2 & -4097 | 64;
        return a2;
      case 5:
        return hh(a2), null;
      case 13:
        return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
      case 19:
        return H(P), null;
      case 4:
        return fh(), null;
      case 10:
        return rg(a2), null;
      case 23:
      case 24:
        return Ki(), null;
      default:
        return null;
    }
  }
  function Mi(a2, b2) {
    try {
      var c = "", d2 = b2;
      do
        c += Qa(d2), d2 = d2.return;
      while (d2);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a2, source: b2, stack: e };
  }
  function Ni(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Oi = typeof WeakMap === "function" ? WeakMap : Map;
  function Pi(a2, b2, c) {
    c = zg(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d2 = b2.value;
    c.callback = function() {
      Qi || (Qi = true, Ri = d2);
      Ni(a2, b2);
    };
    return c;
  }
  function Si(a2, b2, c) {
    c = zg(-1, c);
    c.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if (typeof d2 === "function") {
      var e = b2.value;
      c.payload = function() {
        Ni(a2, b2);
        return d2(e);
      };
    }
    var f = a2.stateNode;
    f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
      typeof d2 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
      var c2 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: c2 !== null ? c2 : "" });
    });
    return c;
  }
  var Ui = typeof WeakSet === "function" ? WeakSet : Set;
  function Vi(a2) {
    var b2 = a2.ref;
    if (b2 !== null)
      if (typeof b2 === "function")
        try {
          b2(null);
        } catch (c) {
          Wi(a2, c);
        }
      else
        b2.current = null;
  }
  function Xi(a2, b2) {
    switch (b2.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b2.flags & 256 && a2 !== null) {
          var c = a2.memoizedProps, d2 = a2.memoizedState;
          a2 = b2.stateNode;
          b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c : lg(b2.type, c), d2);
          a2.__reactInternalSnapshotBeforeUpdate = b2;
        }
        return;
      case 3:
        b2.flags & 256 && qf(b2.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(y(163));
  }
  function Yi(a2, b2, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b2 = c.updateQueue;
        b2 = b2 !== null ? b2.lastEffect : null;
        if (b2 !== null) {
          a2 = b2 = b2.next;
          do {
            if ((a2.tag & 3) === 3) {
              var d2 = a2.create;
              a2.destroy = d2();
            }
            a2 = a2.next;
          } while (a2 !== b2);
        }
        b2 = c.updateQueue;
        b2 = b2 !== null ? b2.lastEffect : null;
        if (b2 !== null) {
          a2 = b2 = b2.next;
          do {
            var e = a2;
            d2 = e.next;
            e = e.tag;
            (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a2), $i(c, a2));
            a2 = d2;
          } while (a2 !== b2);
        }
        return;
      case 1:
        a2 = c.stateNode;
        c.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c.elementType === c.type ? b2.memoizedProps : lg(c.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
        b2 = c.updateQueue;
        b2 !== null && Eg(c, b2, a2);
        return;
      case 3:
        b2 = c.updateQueue;
        if (b2 !== null) {
          a2 = null;
          if (c.child !== null)
            switch (c.child.tag) {
              case 5:
                a2 = c.child.stateNode;
                break;
              case 1:
                a2 = c.child.stateNode;
            }
          Eg(c, b2, a2);
        }
        return;
      case 5:
        a2 = c.stateNode;
        b2 === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a2.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(y(163));
  }
  function aj(a2, b2) {
    for (var c = a2; ; ) {
      if (c.tag === 5) {
        var d2 = c.stateNode;
        if (b2)
          d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
        else {
          d2 = c.stateNode;
          var e = c.memoizedProps.style;
          e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
          d2.style.display = sb("display", e);
        }
      } else if (c.tag === 6)
        c.stateNode.nodeValue = b2 ? "" : c.memoizedProps;
      else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a2) && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a2)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === a2)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function bj(a2, b2) {
    if (Mf && typeof Mf.onCommitFiberUnmount === "function")
      try {
        Mf.onCommitFiberUnmount(Lf, b2);
      } catch (f) {
      }
    switch (b2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a2 = b2.updateQueue;
        if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
          var c = a2 = a2.next;
          do {
            var d2 = c, e = d2.destroy;
            d2 = d2.tag;
            if (e !== void 0)
              if ((d2 & 4) !== 0)
                Zi(b2, c);
              else {
                d2 = b2;
                try {
                  e();
                } catch (f) {
                  Wi(d2, f);
                }
              }
            c = c.next;
          } while (c !== a2);
        }
        break;
      case 1:
        Vi(b2);
        a2 = b2.stateNode;
        if (typeof a2.componentWillUnmount === "function")
          try {
            a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
          } catch (f) {
            Wi(b2, f);
          }
        break;
      case 5:
        Vi(b2);
        break;
      case 4:
        cj(a2, b2);
    }
  }
  function dj(a2) {
    a2.alternate = null;
    a2.child = null;
    a2.dependencies = null;
    a2.firstEffect = null;
    a2.lastEffect = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.return = null;
    a2.updateQueue = null;
  }
  function ej(a2) {
    return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
  }
  function fj(a2) {
    a: {
      for (var b2 = a2.return; b2 !== null; ) {
        if (ej(b2))
          break a;
        b2 = b2.return;
      }
      throw Error(y(160));
    }
    var c = b2;
    b2 = c.stateNode;
    switch (c.tag) {
      case 5:
        var d2 = false;
        break;
      case 3:
        b2 = b2.containerInfo;
        d2 = true;
        break;
      case 4:
        b2 = b2.containerInfo;
        d2 = true;
        break;
      default:
        throw Error(y(161));
    }
    c.flags & 16 && (pb(b2, ""), c.flags &= -17);
    a:
      b:
        for (c = a2; ; ) {
          for (; c.sibling === null; ) {
            if (c.return === null || ej(c.return)) {
              c = null;
              break a;
            }
            c = c.return;
          }
          c.sibling.return = c.return;
          for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
            if (c.flags & 2)
              continue b;
            if (c.child === null || c.tag === 4)
              continue b;
            else
              c.child.return = c, c = c.child;
          }
          if (!(c.flags & 2)) {
            c = c.stateNode;
            break a;
          }
        }
    d2 ? gj(a2, c, b2) : hj(a2, c, b2);
  }
  function gj(a2, b2, c) {
    var d2 = a2.tag, e = d2 === 5 || d2 === 6;
    if (e)
      a2 = e ? a2.stateNode : a2.stateNode.instance, b2 ? c.nodeType === 8 ? c.parentNode.insertBefore(a2, b2) : c.insertBefore(a2, b2) : (c.nodeType === 8 ? (b2 = c.parentNode, b2.insertBefore(a2, c)) : (b2 = c, b2.appendChild(a2)), c = c._reactRootContainer, c !== null && c !== void 0 || b2.onclick !== null || (b2.onclick = jf));
    else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
      for (gj(a2, b2, c), a2 = a2.sibling; a2 !== null; )
        gj(a2, b2, c), a2 = a2.sibling;
  }
  function hj(a2, b2, c) {
    var d2 = a2.tag, e = d2 === 5 || d2 === 6;
    if (e)
      a2 = e ? a2.stateNode : a2.stateNode.instance, b2 ? c.insertBefore(a2, b2) : c.appendChild(a2);
    else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
      for (hj(a2, b2, c), a2 = a2.sibling; a2 !== null; )
        hj(a2, b2, c), a2 = a2.sibling;
  }
  function cj(a2, b2) {
    for (var c = b2, d2 = false, e, f; ; ) {
      if (!d2) {
        d2 = c.return;
        a:
          for (; ; ) {
            if (d2 === null)
              throw Error(y(160));
            e = d2.stateNode;
            switch (d2.tag) {
              case 5:
                f = false;
                break a;
              case 3:
                e = e.containerInfo;
                f = true;
                break a;
              case 4:
                e = e.containerInfo;
                f = true;
                break a;
            }
            d2 = d2.return;
          }
        d2 = true;
      }
      if (c.tag === 5 || c.tag === 6) {
        a:
          for (var g = a2, h2 = c, k2 = h2; ; )
            if (bj(g, k2), k2.child !== null && k2.tag !== 4)
              k2.child.return = k2, k2 = k2.child;
            else {
              if (k2 === h2)
                break a;
              for (; k2.sibling === null; ) {
                if (k2.return === null || k2.return === h2)
                  break a;
                k2 = k2.return;
              }
              k2.sibling.return = k2.return;
              k2 = k2.sibling;
            }
        f ? (g = e, h2 = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h2) : g.removeChild(h2)) : e.removeChild(c.stateNode);
      } else if (c.tag === 4) {
        if (c.child !== null) {
          e = c.stateNode.containerInfo;
          f = true;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (bj(a2, c), c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b2)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === b2)
          return;
        c = c.return;
        c.tag === 4 && (d2 = false);
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function ij(a2, b2) {
    switch (b2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var c = b2.updateQueue;
        c = c !== null ? c.lastEffect : null;
        if (c !== null) {
          var d2 = c = c.next;
          do
            (d2.tag & 3) === 3 && (a2 = d2.destroy, d2.destroy = void 0, a2 !== void 0 && a2()), d2 = d2.next;
          while (d2 !== c);
        }
        return;
      case 1:
        return;
      case 5:
        c = b2.stateNode;
        if (c != null) {
          d2 = b2.memoizedProps;
          var e = a2 !== null ? a2.memoizedProps : d2;
          a2 = b2.type;
          var f = b2.updateQueue;
          b2.updateQueue = null;
          if (f !== null) {
            c[xf] = d2;
            a2 === "input" && d2.type === "radio" && d2.name != null && $a(c, d2);
            wb(a2, e);
            b2 = wb(a2, d2);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e], h2 = f[e + 1];
              g === "style" ? tb(c, h2) : g === "dangerouslySetInnerHTML" ? ob(c, h2) : g === "children" ? pb(c, h2) : qa(c, g, h2, b2);
            }
            switch (a2) {
              case "input":
                ab(c, d2);
                break;
              case "textarea":
                ib(c, d2);
                break;
              case "select":
                a2 = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d2.multiple, f = d2.value, f != null ? fb(c, !!d2.multiple, f, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? fb(c, !!d2.multiple, d2.defaultValue, true) : fb(c, !!d2.multiple, d2.multiple ? [] : "", false));
            }
          }
        }
        return;
      case 6:
        if (b2.stateNode === null)
          throw Error(y(162));
        b2.stateNode.nodeValue = b2.memoizedProps;
        return;
      case 3:
        c = b2.stateNode;
        c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
        return;
      case 12:
        return;
      case 13:
        b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
        kj(b2);
        return;
      case 19:
        kj(b2);
        return;
      case 17:
        return;
      case 23:
      case 24:
        aj(b2, b2.memoizedState !== null);
        return;
    }
    throw Error(y(163));
  }
  function kj(a2) {
    var b2 = a2.updateQueue;
    if (b2 !== null) {
      a2.updateQueue = null;
      var c = a2.stateNode;
      c === null && (c = a2.stateNode = new Ui());
      b2.forEach(function(b22) {
        var d2 = lj.bind(null, a2, b22);
        c.has(b22) || (c.add(b22), b22.then(d2, d2));
      });
    }
  }
  function mj(a2, b2) {
    return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
  }
  var nj = Math.ceil;
  var oj = ra.ReactCurrentDispatcher;
  var pj = ra.ReactCurrentOwner;
  var X = 0;
  var U = null;
  var Y = null;
  var W = 0;
  var qj = 0;
  var rj = Bf(0);
  var V = 0;
  var sj = null;
  var tj = 0;
  var Dg = 0;
  var Hi = 0;
  var uj = 0;
  var vj = null;
  var jj = 0;
  var Ji = Infinity;
  function wj() {
    Ji = O() + 500;
  }
  var Z = null;
  var Qi = false;
  var Ri = null;
  var Ti = null;
  var xj = false;
  var yj = null;
  var zj = 90;
  var Aj = [];
  var Bj = [];
  var Cj = null;
  var Dj = 0;
  var Ej = null;
  var Fj = -1;
  var Gj = 0;
  var Hj = 0;
  var Ij = null;
  var Jj = false;
  function Hg() {
    return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
  }
  function Ig(a2) {
    a2 = a2.mode;
    if ((a2 & 2) === 0)
      return 1;
    if ((a2 & 4) === 0)
      return eg() === 99 ? 1 : 2;
    Gj === 0 && (Gj = tj);
    if (kg.transition !== 0) {
      Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
      a2 = Gj;
      var b2 = 4186112 & ~Hj;
      b2 &= -b2;
      b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
      return b2;
    }
    a2 = eg();
    (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
    return a2;
  }
  function Jg(a2, b2, c) {
    if (50 < Dj)
      throw Dj = 0, Ej = null, Error(y(185));
    a2 = Kj(a2, b2);
    if (a2 === null)
      return null;
    $c(a2, b2, c);
    a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
    var d2 = eg();
    b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c));
    vj = a2;
  }
  function Kj(a2, b2) {
    a2.lanes |= b2;
    var c = a2.alternate;
    c !== null && (c.lanes |= b2);
    c = a2;
    for (a2 = a2.return; a2 !== null; )
      a2.childLanes |= b2, c = a2.alternate, c !== null && (c.childLanes |= b2), c = a2, a2 = a2.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  function Mj(a2, b2) {
    for (var c = a2.callbackNode, d2 = a2.suspendedLanes, e = a2.pingedLanes, f = a2.expirationTimes, g = a2.pendingLanes; 0 < g; ) {
      var h2 = 31 - Vc(g), k2 = 1 << h2, l = f[h2];
      if (l === -1) {
        if ((k2 & d2) === 0 || (k2 & e) !== 0) {
          l = b2;
          Rc(k2);
          var n = F;
          f[h2] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
        }
      } else
        l <= b2 && (a2.expiredLanes |= k2);
      g &= ~k2;
    }
    d2 = Uc(a2, a2 === U ? W : 0);
    b2 = F;
    if (d2 === 0)
      c !== null && (c !== Zf && Pf(c), a2.callbackNode = null, a2.callbackPriority = 0);
    else {
      if (c !== null) {
        if (a2.callbackPriority === b2)
          return;
        c !== Zf && Pf(c);
      }
      b2 === 15 ? (c = Lj.bind(null, a2), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b2 === 14 ? c = hg(99, Lj.bind(null, a2)) : (c = Tc(b2), c = hg(c, Nj.bind(null, a2)));
      a2.callbackPriority = b2;
      a2.callbackNode = c;
    }
  }
  function Nj(a2) {
    Fj = -1;
    Hj = Gj = 0;
    if ((X & 48) !== 0)
      throw Error(y(327));
    var b2 = a2.callbackNode;
    if (Oj() && a2.callbackNode !== b2)
      return null;
    var c = Uc(a2, a2 === U ? W : 0);
    if (c === 0)
      return null;
    var d2 = c;
    var e = X;
    X |= 16;
    var f = Pj();
    if (U !== a2 || W !== d2)
      wj(), Qj(a2, d2);
    do
      try {
        Rj();
        break;
      } catch (h2) {
        Sj(a2, h2);
      }
    while (1);
    qg();
    oj.current = f;
    X = e;
    Y !== null ? d2 = 0 : (U = null, W = 0, d2 = V);
    if ((tj & Hi) !== 0)
      Qj(a2, 0);
    else if (d2 !== 0) {
      d2 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c = Wc(a2), c !== 0 && (d2 = Tj(a2, c)));
      if (d2 === 1)
        throw b2 = sj, Qj(a2, 0), Ii(a2, c), Mj(a2, O()), b2;
      a2.finishedWork = a2.current.alternate;
      a2.finishedLanes = c;
      switch (d2) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Uj(a2);
          break;
        case 3:
          Ii(a2, c);
          if ((c & 62914560) === c && (d2 = jj + 500 - O(), 10 < d2)) {
            if (Uc(a2, 0) !== 0)
              break;
            e = a2.suspendedLanes;
            if ((e & c) !== c) {
              Hg();
              a2.pingedLanes |= a2.suspendedLanes & e;
              break;
            }
            a2.timeoutHandle = of(Uj.bind(null, a2), d2);
            break;
          }
          Uj(a2);
          break;
        case 4:
          Ii(a2, c);
          if ((c & 4186112) === c)
            break;
          d2 = a2.eventTimes;
          for (e = -1; 0 < c; ) {
            var g = 31 - Vc(c);
            f = 1 << g;
            g = d2[g];
            g > e && (e = g);
            c &= ~f;
          }
          c = e;
          c = O() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
          if (10 < c) {
            a2.timeoutHandle = of(Uj.bind(null, a2), c);
            break;
          }
          Uj(a2);
          break;
        case 5:
          Uj(a2);
          break;
        default:
          throw Error(y(329));
      }
    }
    Mj(a2, O());
    return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
  }
  function Ii(a2, b2) {
    b2 &= ~uj;
    b2 &= ~Hi;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c = 31 - Vc(b2), d2 = 1 << c;
      a2[c] = -1;
      b2 &= ~d2;
    }
  }
  function Lj(a2) {
    if ((X & 48) !== 0)
      throw Error(y(327));
    Oj();
    if (a2 === U && (a2.expiredLanes & W) !== 0) {
      var b2 = W;
      var c = Tj(a2, b2);
      (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c = Tj(a2, b2));
    } else
      b2 = Uc(a2, 0), c = Tj(a2, b2);
    a2.tag !== 0 && c === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c = Tj(a2, b2)));
    if (c === 1)
      throw c = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Uj(a2);
    Mj(a2, O());
    return null;
  }
  function Vj() {
    if (Cj !== null) {
      var a2 = Cj;
      Cj = null;
      a2.forEach(function(a22) {
        a22.expiredLanes |= 24 & a22.pendingLanes;
        Mj(a22, O());
      });
    }
    ig();
  }
  function Wj(a2, b2) {
    var c = X;
    X |= 1;
    try {
      return a2(b2);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  }
  function Xj(a2, b2) {
    var c = X;
    X &= -2;
    X |= 8;
    try {
      return a2(b2);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  }
  function ni(a2, b2) {
    I(rj, qj);
    qj |= b2;
    tj |= b2;
  }
  function Ki() {
    qj = rj.current;
    H(rj);
  }
  function Qj(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c = a2.timeoutHandle;
    c !== -1 && (a2.timeoutHandle = -1, pf(c));
    if (Y !== null)
      for (c = Y.return; c !== null; ) {
        var d2 = c;
        switch (d2.tag) {
          case 1:
            d2 = d2.type.childContextTypes;
            d2 !== null && d2 !== void 0 && Gf();
            break;
          case 3:
            fh();
            H(N);
            H(M);
            uh();
            break;
          case 5:
            hh(d2);
            break;
          case 4:
            fh();
            break;
          case 13:
            H(P);
            break;
          case 19:
            H(P);
            break;
          case 10:
            rg(d2);
            break;
          case 23:
          case 24:
            Ki();
        }
        c = c.return;
      }
    U = a2;
    Y = Tg(a2.current, null);
    W = qj = tj = b2;
    V = 0;
    sj = null;
    uj = Hi = Dg = 0;
  }
  function Sj(a2, b2) {
    do {
      var c = Y;
      try {
        qg();
        vh.current = Gh;
        if (yh) {
          for (var d2 = R.memoizedState; d2 !== null; ) {
            var e = d2.queue;
            e !== null && (e.pending = null);
            d2 = d2.next;
          }
          yh = false;
        }
        xh = 0;
        T = S = R = null;
        zh = false;
        pj.current = null;
        if (c === null || c.return === null) {
          V = 1;
          sj = b2;
          Y = null;
          break;
        }
        a: {
          var f = a2, g = c.return, h2 = c, k2 = b2;
          b2 = W;
          h2.flags |= 2048;
          h2.firstEffect = h2.lastEffect = null;
          if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
            var l = k2;
            if ((h2.mode & 2) === 0) {
              var n = h2.alternate;
              n ? (h2.updateQueue = n.updateQueue, h2.memoizedState = n.memoizedState, h2.lanes = n.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
            }
            var A = (P.current & 1) !== 0, p = g;
            do {
              var C2;
              if (C2 = p.tag === 13) {
                var x2 = p.memoizedState;
                if (x2 !== null)
                  C2 = x2.dehydrated !== null ? true : false;
                else {
                  var w2 = p.memoizedProps;
                  C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A ? false : true;
                }
              }
              if (C2) {
                var z2 = p.updateQueue;
                if (z2 === null) {
                  var u = new Set();
                  u.add(l);
                  p.updateQueue = u;
                } else
                  z2.add(l);
                if ((p.mode & 2) === 0) {
                  p.flags |= 64;
                  h2.flags |= 16384;
                  h2.flags &= -2981;
                  if (h2.tag === 1)
                    if (h2.alternate === null)
                      h2.tag = 17;
                    else {
                      var t = zg(-1, 1);
                      t.tag = 2;
                      Ag(h2, t);
                    }
                  h2.lanes |= 1;
                  break a;
                }
                k2 = void 0;
                h2 = b2;
                var q2 = f.pingCache;
                q2 === null ? (q2 = f.pingCache = new Oi(), k2 = new Set(), q2.set(l, k2)) : (k2 = q2.get(l), k2 === void 0 && (k2 = new Set(), q2.set(l, k2)));
                if (!k2.has(h2)) {
                  k2.add(h2);
                  var v2 = Yj.bind(null, f, l, h2);
                  l.then(v2, v2);
                }
                p.flags |= 4096;
                p.lanes = b2;
                break a;
              }
              p = p.return;
            } while (p !== null);
            k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }
          V !== 5 && (V = 2);
          k2 = Mi(k2, h2);
          p = g;
          do {
            switch (p.tag) {
              case 3:
                f = k2;
                p.flags |= 4096;
                b2 &= -b2;
                p.lanes |= b2;
                var J = Pi(p, f, b2);
                Bg(p, J);
                break a;
              case 1:
                f = k2;
                var K = p.type, Q2 = p.stateNode;
                if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                  p.flags |= 4096;
                  b2 &= -b2;
                  p.lanes |= b2;
                  var L2 = Si(p, f, b2);
                  Bg(p, L2);
                  break a;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Zj(c);
      } catch (va) {
        b2 = va;
        Y === c && c !== null && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Pj() {
    var a2 = oj.current;
    oj.current = Gh;
    return a2 === null ? Gh : a2;
  }
  function Tj(a2, b2) {
    var c = X;
    X |= 16;
    var d2 = Pj();
    U === a2 && W === b2 || Qj(a2, b2);
    do
      try {
        ak();
        break;
      } catch (e) {
        Sj(a2, e);
      }
    while (1);
    qg();
    X = c;
    oj.current = d2;
    if (Y !== null)
      throw Error(y(261));
    U = null;
    W = 0;
    return V;
  }
  function ak() {
    for (; Y !== null; )
      bk(Y);
  }
  function Rj() {
    for (; Y !== null && !Qf(); )
      bk(Y);
  }
  function bk(a2) {
    var b2 = ck(a2.alternate, a2, qj);
    a2.memoizedProps = a2.pendingProps;
    b2 === null ? Zj(a2) : Y = b2;
    pj.current = null;
  }
  function Zj(a2) {
    var b2 = a2;
    do {
      var c = b2.alternate;
      a2 = b2.return;
      if ((b2.flags & 2048) === 0) {
        c = Gi(c, b2, qj);
        if (c !== null) {
          Y = c;
          return;
        }
        c = b2;
        if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
          for (var d2 = 0, e = c.child; e !== null; )
            d2 |= e.lanes | e.childLanes, e = e.sibling;
          c.childLanes = d2;
        }
        a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
      } else {
        c = Li(b2);
        if (c !== null) {
          c.flags &= 2047;
          Y = c;
          return;
        }
        a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
      }
      b2 = b2.sibling;
      if (b2 !== null) {
        Y = b2;
        return;
      }
      Y = b2 = a2;
    } while (b2 !== null);
    V === 0 && (V = 5);
  }
  function Uj(a2) {
    var b2 = eg();
    gg(99, dk.bind(null, a2, b2));
    return null;
  }
  function dk(a2, b2) {
    do
      Oj();
    while (yj !== null);
    if ((X & 48) !== 0)
      throw Error(y(327));
    var c = a2.finishedWork;
    if (c === null)
      return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c === a2.current)
      throw Error(y(177));
    a2.callbackNode = null;
    var d2 = c.lanes | c.childLanes, e = d2, f = a2.pendingLanes & ~e;
    a2.pendingLanes = e;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= e;
    a2.mutableReadLanes &= e;
    a2.entangledLanes &= e;
    e = a2.entanglements;
    for (var g = a2.eventTimes, h2 = a2.expirationTimes; 0 < f; ) {
      var k2 = 31 - Vc(f), l = 1 << k2;
      e[k2] = 0;
      g[k2] = -1;
      h2[k2] = -1;
      f &= ~l;
    }
    Cj !== null && (d2 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
    a2 === U && (Y = U = null, W = 0);
    1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d2 = c.firstEffect) : d2 = c : d2 = c.firstEffect;
    if (d2 !== null) {
      e = X;
      X |= 32;
      pj.current = null;
      kf = fd;
      g = Ne();
      if (Oe(g)) {
        if ("selectionStart" in g)
          h2 = { start: g.selectionStart, end: g.selectionEnd };
        else
          a:
            if (h2 = (h2 = g.ownerDocument) && h2.defaultView || window, (l = h2.getSelection && h2.getSelection()) && l.rangeCount !== 0) {
              h2 = l.anchorNode;
              f = l.anchorOffset;
              k2 = l.focusNode;
              l = l.focusOffset;
              try {
                h2.nodeType, k2.nodeType;
              } catch (va) {
                h2 = null;
                break a;
              }
              var n = 0, A = -1, p = -1, C2 = 0, x2 = 0, w2 = g, z2 = null;
              b:
                for (; ; ) {
                  for (var u; ; ) {
                    w2 !== h2 || f !== 0 && w2.nodeType !== 3 || (A = n + f);
                    w2 !== k2 || l !== 0 && w2.nodeType !== 3 || (p = n + l);
                    w2.nodeType === 3 && (n += w2.nodeValue.length);
                    if ((u = w2.firstChild) === null)
                      break;
                    z2 = w2;
                    w2 = u;
                  }
                  for (; ; ) {
                    if (w2 === g)
                      break b;
                    z2 === h2 && ++C2 === f && (A = n);
                    z2 === k2 && ++x2 === l && (p = n);
                    if ((u = w2.nextSibling) !== null)
                      break;
                    w2 = z2;
                    z2 = w2.parentNode;
                  }
                  w2 = u;
                }
              h2 = A === -1 || p === -1 ? null : { start: A, end: p };
            } else
              h2 = null;
        h2 = h2 || { start: 0, end: 0 };
      } else
        h2 = null;
      lf = { focusedElem: g, selectionRange: h2 };
      fd = false;
      Ij = null;
      Jj = false;
      Z = d2;
      do
        try {
          ek();
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      Ij = null;
      Z = d2;
      do
        try {
          for (g = a2; Z !== null; ) {
            var t = Z.flags;
            t & 16 && pb(Z.stateNode, "");
            if (t & 128) {
              var q2 = Z.alternate;
              if (q2 !== null) {
                var v2 = q2.ref;
                v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
              }
            }
            switch (t & 1038) {
              case 2:
                fj(Z);
                Z.flags &= -3;
                break;
              case 6:
                fj(Z);
                Z.flags &= -3;
                ij(Z.alternate, Z);
                break;
              case 1024:
                Z.flags &= -1025;
                break;
              case 1028:
                Z.flags &= -1025;
                ij(Z.alternate, Z);
                break;
              case 4:
                ij(Z.alternate, Z);
                break;
              case 8:
                h2 = Z;
                cj(g, h2);
                var J = h2.alternate;
                dj(h2);
                J !== null && dj(J);
            }
            Z = Z.nextEffect;
          }
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      v2 = lf;
      q2 = Ne();
      t = v2.focusedElem;
      g = v2.selectionRange;
      if (q2 !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
        g !== null && Oe(t) && (q2 = g.start, v2 = g.end, v2 === void 0 && (v2 = q2), "selectionStart" in t ? (t.selectionStart = q2, t.selectionEnd = Math.min(v2, t.value.length)) : (v2 = (q2 = t.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t.textContent.length, J = Math.min(g.start, h2), g = g.end === void 0 ? J : Math.min(g.end, h2), !v2.extend && J > g && (h2 = g, g = J, J = h2), h2 = Le(t, J), f = Le(t, g), h2 && f && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f.node || v2.focusOffset !== f.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J > g ? (v2.addRange(q2), v2.extend(f.node, f.offset)) : (q2.setEnd(f.node, f.offset), v2.addRange(q2))))));
        q2 = [];
        for (v2 = t; v2 = v2.parentNode; )
          v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
        typeof t.focus === "function" && t.focus();
        for (t = 0; t < q2.length; t++)
          v2 = q2[t], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
      }
      fd = !!kf;
      lf = kf = null;
      a2.current = c;
      Z = d2;
      do
        try {
          for (t = a2; Z !== null; ) {
            var K = Z.flags;
            K & 36 && Yi(t, Z.alternate, Z);
            if (K & 128) {
              q2 = void 0;
              var Q2 = Z.ref;
              if (Q2 !== null) {
                var L2 = Z.stateNode;
                switch (Z.tag) {
                  case 5:
                    q2 = L2;
                    break;
                  default:
                    q2 = L2;
                }
                typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
              }
            }
            Z = Z.nextEffect;
          }
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      Z = null;
      $f();
      X = e;
    } else
      a2.current = c;
    if (xj)
      xj = false, yj = a2, zj = b2;
    else
      for (Z = d2; Z !== null; )
        b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b2;
    d2 = a2.pendingLanes;
    d2 === 0 && (Ti = null);
    d2 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
    c = c.stateNode;
    if (Mf && typeof Mf.onCommitFiberRoot === "function")
      try {
        Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
      } catch (va) {
      }
    Mj(a2, O());
    if (Qi)
      throw Qi = false, a2 = Ri, Ri = null, a2;
    if ((X & 8) !== 0)
      return null;
    ig();
    return null;
  }
  function ek() {
    for (; Z !== null; ) {
      var a2 = Z.alternate;
      Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
      var b2 = Z.flags;
      (b2 & 256) !== 0 && Xi(a2, Z);
      (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
      Z = Z.nextEffect;
    }
  }
  function Oj() {
    if (zj !== 90) {
      var a2 = 97 < zj ? 97 : zj;
      zj = 90;
      return gg(a2, fk);
    }
    return false;
  }
  function $i(a2, b2) {
    Aj.push(b2, a2);
    xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
  }
  function Zi(a2, b2) {
    Bj.push(b2, a2);
    xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
  }
  function fk() {
    if (yj === null)
      return false;
    var a2 = yj;
    yj = null;
    if ((X & 48) !== 0)
      throw Error(y(331));
    var b2 = X;
    X |= 32;
    var c = Bj;
    Bj = [];
    for (var d2 = 0; d2 < c.length; d2 += 2) {
      var e = c[d2], f = c[d2 + 1], g = e.destroy;
      e.destroy = void 0;
      if (typeof g === "function")
        try {
          g();
        } catch (k2) {
          if (f === null)
            throw Error(y(330));
          Wi(f, k2);
        }
    }
    c = Aj;
    Aj = [];
    for (d2 = 0; d2 < c.length; d2 += 2) {
      e = c[d2];
      f = c[d2 + 1];
      try {
        var h2 = e.create;
        e.destroy = h2();
      } catch (k2) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k2);
      }
    }
    for (h2 = a2.current.firstEffect; h2 !== null; )
      a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
    X = b2;
    ig();
    return true;
  }
  function gk(a2, b2, c) {
    b2 = Mi(c, b2);
    b2 = Pi(a2, b2, 1);
    Ag(a2, b2);
    b2 = Hg();
    a2 = Kj(a2, 1);
    a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
  }
  function Wi(a2, b2) {
    if (a2.tag === 3)
      gk(a2, a2, b2);
    else
      for (var c = a2.return; c !== null; ) {
        if (c.tag === 3) {
          gk(c, a2, b2);
          break;
        } else if (c.tag === 1) {
          var d2 = c.stateNode;
          if (typeof c.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
            a2 = Mi(b2, a2);
            var e = Si(c, a2, 1);
            Ag(c, e);
            e = Hg();
            c = Kj(c, 1);
            if (c !== null)
              $c(c, 1, e), Mj(c, e);
            else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
              try {
                d2.componentDidCatch(b2, a2);
              } catch (f) {
              }
            break;
          }
        }
        c = c.return;
      }
  }
  function Yj(a2, b2, c) {
    var d2 = a2.pingCache;
    d2 !== null && d2.delete(b2);
    b2 = Hg();
    a2.pingedLanes |= a2.suspendedLanes & c;
    U === a2 && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c);
    Mj(a2, b2);
  }
  function lj(a2, b2) {
    var c = a2.stateNode;
    c !== null && c.delete(b2);
    b2 = 0;
    b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
    c = Hg();
    a2 = Kj(a2, b2);
    a2 !== null && ($c(a2, b2, c), Mj(a2, c));
  }
  var ck;
  ck = function(a2, b2, c) {
    var d2 = b2.lanes;
    if (a2 !== null)
      if (a2.memoizedProps !== b2.pendingProps || N.current)
        ug = true;
      else if ((c & d2) !== 0)
        ug = (a2.flags & 16384) !== 0 ? true : false;
      else {
        ug = false;
        switch (b2.tag) {
          case 3:
            ri(b2);
            sh();
            break;
          case 5:
            gh(b2);
            break;
          case 1:
            Ff(b2.type) && Jf(b2);
            break;
          case 4:
            eh(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            d2 = b2.memoizedProps.value;
            var e = b2.type._context;
            I(mg, e._currentValue);
            e._currentValue = d2;
            break;
          case 13:
            if (b2.memoizedState !== null) {
              if ((c & b2.child.childLanes) !== 0)
                return ti(a2, b2, c);
              I(P, P.current & 1);
              b2 = hi(a2, b2, c);
              return b2 !== null ? b2.sibling : null;
            }
            I(P, P.current & 1);
            break;
          case 19:
            d2 = (c & b2.childLanes) !== 0;
            if ((a2.flags & 64) !== 0) {
              if (d2)
                return Ai(a2, b2, c);
              b2.flags |= 64;
            }
            e = b2.memoizedState;
            e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
            I(P, P.current);
            if (d2)
              break;
            else
              return null;
          case 23:
          case 24:
            return b2.lanes = 0, mi(a2, b2, c);
        }
        return hi(a2, b2, c);
      }
    else
      ug = false;
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        d2 = b2.type;
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e = Ef(b2, M.current);
        tg(b2, c);
        e = Ch(null, b2, d2, a2, e, c);
        b2.flags |= 1;
        if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
          b2.tag = 1;
          b2.memoizedState = null;
          b2.updateQueue = null;
          if (Ff(d2)) {
            var f = true;
            Jf(b2);
          } else
            f = false;
          b2.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
          xg(b2);
          var g = d2.getDerivedStateFromProps;
          typeof g === "function" && Gg(b2, d2, g, a2);
          e.updater = Kg;
          b2.stateNode = e;
          e._reactInternals = b2;
          Og(b2, d2, a2, c);
          b2 = qi(null, b2, d2, true, f, c);
        } else
          b2.tag = 0, fi(null, b2, e, c), b2 = b2.child;
        return b2;
      case 16:
        e = b2.elementType;
        a: {
          a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
          a2 = b2.pendingProps;
          f = e._init;
          e = f(e._payload);
          b2.type = e;
          f = b2.tag = hk(e);
          a2 = lg(e, a2);
          switch (f) {
            case 0:
              b2 = li(null, b2, e, a2, c);
              break a;
            case 1:
              b2 = pi(null, b2, e, a2, c);
              break a;
            case 11:
              b2 = gi(null, b2, e, a2, c);
              break a;
            case 14:
              b2 = ii(null, b2, e, lg(e.type, a2), d2, c);
              break a;
          }
          throw Error(y(306, e, ""));
        }
        return b2;
      case 0:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), li(a2, b2, d2, e, c);
      case 1:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), pi(a2, b2, d2, e, c);
      case 3:
        ri(b2);
        d2 = b2.updateQueue;
        if (a2 === null || d2 === null)
          throw Error(y(282));
        d2 = b2.pendingProps;
        e = b2.memoizedState;
        e = e !== null ? e.element : null;
        yg(a2, b2);
        Cg(b2, d2, null, c);
        d2 = b2.memoizedState.element;
        if (d2 === e)
          sh(), b2 = hi(a2, b2, c);
        else {
          e = b2.stateNode;
          if (f = e.hydrate)
            kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f = lh = true;
          if (f) {
            a2 = e.mutableSourceEagerHydrationData;
            if (a2 != null)
              for (e = 0; e < a2.length; e += 2)
                f = a2[e], f._workInProgressVersionPrimary = a2[e + 1], th.push(f);
            c = Zg(b2, null, d2, c);
            for (b2.child = c; c; )
              c.flags = c.flags & -3 | 1024, c = c.sibling;
          } else
            fi(a2, b2, d2, c), sh();
          b2 = b2.child;
        }
        return b2;
      case 5:
        return gh(b2), a2 === null && ph(b2), d2 = b2.type, e = b2.pendingProps, f = a2 !== null ? a2.memoizedProps : null, g = e.children, nf(d2, e) ? g = null : f !== null && nf(d2, f) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g, c), b2.child;
      case 6:
        return a2 === null && ph(b2), null;
      case 13:
        return ti(a2, b2, c);
      case 4:
        return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d2, c) : fi(a2, b2, d2, c), b2.child;
      case 11:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), gi(a2, b2, d2, e, c);
      case 7:
        return fi(a2, b2, b2.pendingProps, c), b2.child;
      case 8:
        return fi(a2, b2, b2.pendingProps.children, c), b2.child;
      case 12:
        return fi(a2, b2, b2.pendingProps.children, c), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e = b2.pendingProps;
          g = b2.memoizedProps;
          f = e.value;
          var h2 = b2.type._context;
          I(mg, h2._currentValue);
          h2._currentValue = f;
          if (g !== null)
            if (h2 = g.value, f = He(h2, f) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f) : 1073741823) | 0, f === 0) {
              if (g.children === e.children && !N.current) {
                b2 = hi(a2, b2, c);
                break a;
              }
            } else
              for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
                var k2 = h2.dependencies;
                if (k2 !== null) {
                  g = h2.child;
                  for (var l = k2.firstContext; l !== null; ) {
                    if (l.context === d2 && (l.observedBits & f) !== 0) {
                      h2.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h2, l));
                      h2.lanes |= c;
                      l = h2.alternate;
                      l !== null && (l.lanes |= c);
                      sg(h2.return, c);
                      k2.lanes |= c;
                      break;
                    }
                    l = l.next;
                  }
                } else
                  g = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
                if (g !== null)
                  g.return = h2;
                else
                  for (g = h2; g !== null; ) {
                    if (g === b2) {
                      g = null;
                      break;
                    }
                    h2 = g.sibling;
                    if (h2 !== null) {
                      h2.return = g.return;
                      g = h2;
                      break;
                    }
                    g = g.return;
                  }
                h2 = g;
              }
          fi(a2, b2, e.children, c);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e = b2.type, f = b2.pendingProps, d2 = f.children, tg(b2, c), e = vg(e, f.unstable_observedBits), d2 = d2(e), b2.flags |= 1, fi(a2, b2, d2, c), b2.child;
      case 14:
        return e = b2.type, f = lg(e, b2.pendingProps), f = lg(e.type, f), ii(a2, b2, e, f, d2, c);
      case 15:
        return ki(a2, b2, b2.type, b2.pendingProps, d2, c);
      case 17:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : lg(d2, e), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c), Mg(b2, d2, e), Og(b2, d2, e, c), qi(null, b2, d2, true, a2, c);
      case 19:
        return Ai(a2, b2, c);
      case 23:
        return mi(a2, b2, c);
      case 24:
        return mi(a2, b2, c);
    }
    throw Error(y(156, b2.tag));
  };
  function ik(a2, b2, c, d2) {
    this.tag = a2;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function nh(a2, b2, c, d2) {
    return new ik(a2, b2, c, d2);
  }
  function ji(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function hk(a2) {
    if (typeof a2 === "function")
      return ji(a2) ? 1 : 0;
    if (a2 !== void 0 && a2 !== null) {
      a2 = a2.$$typeof;
      if (a2 === Aa)
        return 11;
      if (a2 === Da)
        return 14;
    }
    return 2;
  }
  function Tg(a2, b2) {
    var c = a2.alternate;
    c === null ? (c = nh(a2.tag, b2, a2.key, a2.mode), c.elementType = a2.elementType, c.type = a2.type, c.stateNode = a2.stateNode, c.alternate = a2, a2.alternate = c) : (c.pendingProps = b2, c.type = a2.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a2.childLanes;
    c.lanes = a2.lanes;
    c.child = a2.child;
    c.memoizedProps = a2.memoizedProps;
    c.memoizedState = a2.memoizedState;
    c.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c.sibling = a2.sibling;
    c.index = a2.index;
    c.ref = a2.ref;
    return c;
  }
  function Vg(a2, b2, c, d2, e, f) {
    var g = 2;
    d2 = a2;
    if (typeof a2 === "function")
      ji(a2) && (g = 1);
    else if (typeof a2 === "string")
      g = 5;
    else
      a:
        switch (a2) {
          case ua:
            return Xg(c.children, e, f, b2);
          case Ha:
            g = 8;
            e |= 16;
            break;
          case wa:
            g = 8;
            e |= 1;
            break;
          case xa:
            return a2 = nh(12, c, b2, e | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f, a2;
          case Ba:
            return a2 = nh(13, c, b2, e), a2.type = Ba, a2.elementType = Ba, a2.lanes = f, a2;
          case Ca:
            return a2 = nh(19, c, b2, e), a2.elementType = Ca, a2.lanes = f, a2;
          case Ia:
            return vi(c, e, f, b2);
          case Ja:
            return a2 = nh(24, c, b2, e), a2.elementType = Ja, a2.lanes = f, a2;
          default:
            if (typeof a2 === "object" && a2 !== null)
              switch (a2.$$typeof) {
                case ya:
                  g = 10;
                  break a;
                case za:
                  g = 9;
                  break a;
                case Aa:
                  g = 11;
                  break a;
                case Da:
                  g = 14;
                  break a;
                case Ea:
                  g = 16;
                  d2 = null;
                  break a;
                case Fa:
                  g = 22;
                  break a;
              }
            throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
        }
    b2 = nh(g, c, b2, e);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f;
    return b2;
  }
  function Xg(a2, b2, c, d2) {
    a2 = nh(7, a2, d2, b2);
    a2.lanes = c;
    return a2;
  }
  function vi(a2, b2, c, d2) {
    a2 = nh(23, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c;
    return a2;
  }
  function Ug(a2, b2, c) {
    a2 = nh(6, a2, null, b2);
    a2.lanes = c;
    return a2;
  }
  function Wg(a2, b2, c) {
    b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
    b2.lanes = c;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function jk(a2, b2, c) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = Zc(0);
    this.expirationTimes = Zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Zc(0);
    this.mutableSourceEagerHydrationData = null;
  }
  function kk(a2, b2, c) {
    var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c };
  }
  function lk(a2, b2, c, d2) {
    var e = b2.current, f = Hg(), g = Ig(e);
    a:
      if (c) {
        c = c._reactInternals;
        b: {
          if (Zb(c) !== c || c.tag !== 1)
            throw Error(y(170));
          var h2 = c;
          do {
            switch (h2.tag) {
              case 3:
                h2 = h2.stateNode.context;
                break b;
              case 1:
                if (Ff(h2.type)) {
                  h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }
            }
            h2 = h2.return;
          } while (h2 !== null);
          throw Error(y(171));
        }
        if (c.tag === 1) {
          var k2 = c.type;
          if (Ff(k2)) {
            c = If(c, k2, h2);
            break a;
          }
        }
        c = h2;
      } else
        c = Cf;
    b2.context === null ? b2.context = c : b2.pendingContext = c;
    b2 = zg(f, g);
    b2.payload = { element: a2 };
    d2 = d2 === void 0 ? null : d2;
    d2 !== null && (b2.callback = d2);
    Ag(e, b2);
    Jg(e, g, f);
    return g;
  }
  function mk(a2) {
    a2 = a2.current;
    if (!a2.child)
      return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function nk(a2, b2) {
    a2 = a2.memoizedState;
    if (a2 !== null && a2.dehydrated !== null) {
      var c = a2.retryLane;
      a2.retryLane = c !== 0 && c < b2 ? c : b2;
    }
  }
  function ok(a2, b2) {
    nk(a2, b2);
    (a2 = a2.alternate) && nk(a2, b2);
  }
  function pk() {
    return null;
  }
  function qk(a2, b2, c) {
    var d2 = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
    c = new jk(a2, b2, c != null && c.hydrate === true);
    b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
    c.current = b2;
    b2.stateNode = c;
    xg(b2);
    a2[ff] = c.current;
    cf(a2.nodeType === 8 ? a2.parentNode : a2);
    if (d2)
      for (a2 = 0; a2 < d2.length; a2++) {
        b2 = d2[a2];
        var e = b2._getVersion;
        e = e(b2._source);
        c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b2, e] : c.mutableSourceEagerHydrationData.push(b2, e);
      }
    this._internalRoot = c;
  }
  qk.prototype.render = function(a2) {
    lk(a2, this._internalRoot, null, null);
  };
  qk.prototype.unmount = function() {
    var a2 = this._internalRoot, b2 = a2.containerInfo;
    lk(null, a2, null, function() {
      b2[ff] = null;
    });
  };
  function rk(a2) {
    return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
  }
  function sk(a2, b2) {
    b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
    if (!b2)
      for (var c; c = a2.lastChild; )
        a2.removeChild(c);
    return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
  }
  function tk(a2, b2, c, d2, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if (typeof e === "function") {
        var h2 = e;
        e = function() {
          var a22 = mk(g);
          h2.call(a22);
        };
      }
      lk(b2, g, a2, e);
    } else {
      f = c._reactRootContainer = sk(c, d2);
      g = f._internalRoot;
      if (typeof e === "function") {
        var k2 = e;
        e = function() {
          var a22 = mk(g);
          k2.call(a22);
        };
      }
      Xj(function() {
        lk(b2, g, a2, e);
      });
    }
    return mk(g);
  }
  ec = function(a2) {
    if (a2.tag === 13) {
      var b2 = Hg();
      Jg(a2, 4, b2);
      ok(a2, 4);
    }
  };
  fc = function(a2) {
    if (a2.tag === 13) {
      var b2 = Hg();
      Jg(a2, 67108864, b2);
      ok(a2, 67108864);
    }
  };
  gc = function(a2) {
    if (a2.tag === 13) {
      var b2 = Hg(), c = Ig(a2);
      Jg(a2, c, b2);
      ok(a2, c);
    }
  };
  hc = function(a2, b2) {
    return b2();
  };
  yb = function(a2, b2, c) {
    switch (b2) {
      case "input":
        ab(a2, c);
        b2 = c.name;
        if (c.type === "radio" && b2 != null) {
          for (c = a2; c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c.length; b2++) {
            var d2 = c[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e = Db(d2);
              if (!e)
                throw Error(y(90));
              Wa(d2);
              ab(d2, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c);
        break;
      case "select":
        b2 = c.value, b2 != null && fb(a2, !!c.multiple, b2, false);
    }
  };
  Gb = Wj;
  Hb = function(a2, b2, c, d2, e) {
    var f = X;
    X |= 4;
    try {
      return gg(98, a2.bind(null, b2, c, d2, e));
    } finally {
      X = f, X === 0 && (wj(), ig());
    }
  };
  Ib = function() {
    (X & 49) === 0 && (Vj(), Oj());
  };
  Jb = function(a2, b2) {
    var c = X;
    X |= 2;
    try {
      return a2(b2);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  };
  function uk(a2, b2) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rk(b2))
      throw Error(y(200));
    return kk(a2, b2, null, c);
  }
  var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] };
  var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom" };
  var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = cc(a2);
    return a2 === null ? null : a2.stateNode;
  }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yk.isDisabled && yk.supportsFiber)
      try {
        Lf = yk.inject(xk), Mf = yk;
      } catch (a2) {
      }
  }
  var yk;
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = vk;
  var createPortal = uk;
  var findDOMNode = function(a2) {
    if (a2 == null)
      return null;
    if (a2.nodeType === 1)
      return a2;
    var b2 = a2._reactInternals;
    if (b2 === void 0) {
      if (typeof a2.render === "function")
        throw Error(y(188));
      throw Error(y(268, Object.keys(a2)));
    }
    a2 = cc(b2);
    a2 = a2 === null ? null : a2.stateNode;
    return a2;
  };
  var flushSync = function(a2, b2) {
    var c = X;
    if ((c & 48) !== 0)
      return a2(b2);
    X |= 1;
    try {
      if (a2)
        return gg(99, a2.bind(null, b2));
    } finally {
      X = c, ig();
    }
  };
  var hydrate = function(a2, b2, c) {
    if (!rk(b2))
      throw Error(y(200));
    return tk(null, a2, b2, true, c);
  };
  var render = function(a2, b2, c) {
    if (!rk(b2))
      throw Error(y(200));
    return tk(null, a2, b2, false, c);
  };
  var unmountComponentAtNode = function(a2) {
    if (!rk(a2))
      throw Error(y(40));
    return a2._reactRootContainer ? (Xj(function() {
      tk(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[ff] = null;
      });
    }), true) : false;
  };
  var unstable_batchedUpdates = Wj;
  var unstable_createPortal = function(a2, b2) {
    return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  };
  var unstable_renderSubtreeIntoContainer = function(a2, b2, c, d2) {
    if (!rk(c))
      throw Error(y(200));
    if (a2 == null || a2._reactInternals === void 0)
      throw Error(y(38));
    return tk(a2, b2, c, false, d2);
  };
  var version2 = "17.0.1";
  var reactDom_production_min = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
    createPortal,
    findDOMNode,
    flushSync,
    hydrate,
    render,
    unmountComponentAtNode,
    unstable_batchedUpdates,
    unstable_createPortal,
    unstable_renderSubtreeIntoContainer,
    version: version2
  };
  var reactDom = createCommonjsModule3(function(module) {
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      module.exports = reactDom_production_min;
    }
  });
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1 = reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var createPortal$1 = reactDom.createPortal;
  var react_dom_default = reactDom;
  var findDOMNode$1 = reactDom.findDOMNode;
  var flushSync$1 = reactDom.flushSync;
  var hydrate$1 = reactDom.hydrate;
  var render$1 = reactDom.render;
  var unmountComponentAtNode$1 = reactDom.unmountComponentAtNode;
  var unstable_batchedUpdates$1 = reactDom.unstable_batchedUpdates;
  var unstable_createPortal$1 = reactDom.unstable_createPortal;
  var unstable_renderSubtreeIntoContainer$1 = reactDom.unstable_renderSubtreeIntoContainer;
  var version$1 = reactDom.version;

  // deno:https://cdn.skypack.dev/-/react-notifications-component@v4.0.1-4YWuYRqSw0l2aaeZKHaW/dist=es2019,mode=imports/optimized/react-notifications-component.js
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule4(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire4(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire4() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var dist = createCommonjsModule4(function(module, exports) {
    !function(t, n) {
      module.exports = n(react_default);
    }(commonjsGlobal, function(t) {
      return (() => {
        var n = { 359: (n2) => {
          n2.exports = t;
        } }, e = {};
        function i(t2) {
          var o2 = e[t2];
          if (o2 !== void 0)
            return o2.exports;
          var r = e[t2] = { exports: {} };
          return n[t2](r, r.exports, i), r.exports;
        }
        i.n = (t2) => {
          var n2 = t2 && t2.__esModule ? () => t2.default : () => t2;
          return i.d(n2, { a: n2 }), n2;
        }, i.d = (t2, n2) => {
          for (var e2 in n2)
            i.o(n2, e2) && !i.o(t2, e2) && Object.defineProperty(t2, e2, { enumerable: true, get: n2[e2] });
        }, i.o = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2), i.r = (t2) => {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        };
        var o = {};
        return (() => {
          i.r(o), i.d(o, { ReactNotifications: () => D3, Store: () => k2 });
          var t2, n2, e2, r, a2 = i(359), c = i.n(a2), s2 = true, u = 768, f = 325, l = "rnc__notification-item";
          !function(t3) {
            t3.BOTTOM_LEFT = "bottom-left", t3.BOTTOM_RIGHT = "bottom-right", t3.BOTTOM_CENTER = "bottom-center", t3.TOP_LEFT = "top-left", t3.TOP_RIGHT = "top-right", t3.TOP_CENTER = "top-center", t3.CENTER = "center", t3.TOP_FULL = "top-full", t3.BOTTOM_FULL = "bottom-full";
          }(t2 || (t2 = {})), function(t3) {
            t3.TOP = "top", t3.BOTTOM = "bottom";
          }(n2 || (n2 = {})), function(t3) {
            t3.SUCCESS = "success", t3.DANGER = "danger", t3.INFO = "info", t3.DEFAULT = "default", t3.WARNING = "warning";
          }(e2 || (e2 = {})), function(t3) {
            t3.TIMEOUT = "timeout", t3.CLICK = "click", t3.TOUCH = "touch", t3.MANUAL = "manual";
          }(r || (r = {}));
          var d2 = function(t3) {
            return t3 == null;
          };
          function m(n3) {
            return n3 === t2.BOTTOM_FULL || n3 === t2.BOTTOM_LEFT || n3 === t2.BOTTOM_RIGHT || n3 === t2.BOTTOM_CENTER;
          }
          function p(n3) {
            return n3 === t2.TOP_FULL || n3 === t2.TOP_LEFT || n3 === t2.TOP_RIGHT || n3 === t2.TOP_CENTER;
          }
          function h2(t3) {
            var n3 = t3.type, i2 = t3.content, o2 = t3.userDefinedTypes, r2 = [l];
            if (i2)
              return r2;
            if (d2(o2))
              return function(t4) {
                switch (t4) {
                  case e2.DEFAULT:
                    return [l, "rnc__notification-item--default"];
                  case e2.SUCCESS:
                    return [l, "rnc__notification-item--success"];
                  case e2.DANGER:
                    return [l, "rnc__notification-item--danger"];
                  case e2.WARNING:
                    return [l, "rnc__notification-item--warning"];
                  case e2.INFO:
                    return [l, "rnc__notification-item--info"];
                  default:
                    return [l];
                }
              }(n3);
            var a22 = o2.find(function(t4) {
              return t4.name === n3;
            });
            return r2.concat(a22.htmlClasses);
          }
          function y3(t3, n3) {
            var e3 = t3.duration, i2 = t3.timingFunction, o2 = t3.delay;
            return "".concat(e3, "ms ").concat(n3, " ").concat(i2, " ").concat(o2, "ms");
          }
          function v2(t3) {
            return t3 ? (0 | 16 * Math.random()).toString(16) : "100000000000100000000000".replace(/1|0/g, v2);
          }
          function b2(t3, n3) {
            var e3 = n3.duration, i2 = n3.timingFunction, o2 = n3.delay, r2 = t3 || {};
            return d2(r2.duration) && (r2.duration = e3), d2(r2.timingFunction) && (r2.timingFunction = i2), d2(r2.delay) && (r2.delay = o2), r2;
          }
          function E2(t3, n3, i2) {
            var o2 = t3, r2 = o2.id, a22 = o2.type, c2 = o2.insert, s22 = o2.content, u2 = o2.container, f2 = o2.animationIn, l2 = o2.animationOut, m2 = o2.slidingEnter, p2 = o2.slidingExit, h22 = o2.touchRevert, y22 = o2.touchSlidingExit, E22 = o2.dismiss, g2 = o2.width, O22 = o2.onRemoval;
            o2.id = r2 || v2(), o2.type = s22 ? null : a22.toLowerCase(), n3 && !s22 && (o2.userDefinedTypes = function(t4, n4) {
              var i3 = t4.content, o3 = t4.type;
              if (!i3 && o3 !== e2.SUCCESS && o3 !== e2.DANGER && o3 !== e2.INFO && o3 !== e2.DEFAULT && o3 !== e2.WARNING && n4)
                return n4;
            }(o2, n3)), o2.width = d2(g2) ? i2 : g2, o2.container = u2.toLowerCase(), o2.insert = (c2 || "top").toLowerCase(), o2.dismiss = function(t4) {
              var n4 = t4, e3 = { duration: 0, click: true, touch: true, onScreen: false, pauseOnHover: false, waitForAnimation: false, showIcon: false };
              return n4 ? (Object.keys(e3).forEach(function(t5) {
                d2(n4[t5]) && (n4[t5] = e3[t5]);
              }), n4) : e3;
            }(E22), o2.animationIn = f2 || [], o2.animationOut = l2 || [], o2.onRemoval = O22 || function() {
            };
            var T22 = function(t4, n4, e3) {
              return { duration: t4, timingFunction: n4, delay: e3 };
            };
            o2.slidingEnter = b2(m2, T22(600, "linear", 0)), o2.slidingExit = b2(p2, T22(600, "linear", 0)), o2.touchRevert = b2(h22, T22(600, "linear", 0));
            var _22 = y22 || {}, S22 = _22.swipe || {}, N22 = _22.fade || {};
            return o2.touchSlidingExit = _22, o2.touchSlidingExit.swipe = b2(S22, T22(600, "linear", 0)), o2.touchSlidingExit.fade = b2(N22, T22(300, "linear", 0)), o2;
          }
          function g(t3, n3) {
            for (var e3 = 0; e3 < n3.length; e3++) {
              var i2 = n3[e3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
            }
          }
          var O3 = function() {
            function t3(n4, e4) {
              !function(t4, n5) {
                if (!(t4 instanceof n5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), this.callback = n4, this.remaining = e4, this.resume();
            }
            var n3, e3;
            return n3 = t3, (e3 = [{ key: "pause", value: function() {
              clearTimeout(this.timerId), this.remaining -= Date.now() - this.start;
            } }, { key: "resume", value: function() {
              this.start = Date.now(), clearTimeout(this.timerId), this.timerId = setTimeout(this.callback, this.remaining);
            } }, { key: "clear", value: function() {
              clearTimeout(this.timerId);
            } }]) && g(n3.prototype, e3), Object.defineProperty(n3, "prototype", { writable: false }), t3;
          }();
          function T3(t3) {
            return T3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, T3(t3);
          }
          function _2(t3) {
            return function(t4) {
              if (Array.isArray(t4))
                return S3(t4);
            }(t3) || function(t4) {
              if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
                return Array.from(t4);
            }(t3) || function(t4, n3) {
              if (!t4)
                return;
              if (typeof t4 == "string")
                return S3(t4, n3);
              var e3 = Object.prototype.toString.call(t4).slice(8, -1);
              e3 === "Object" && t4.constructor && (e3 = t4.constructor.name);
              if (e3 === "Map" || e3 === "Set")
                return Array.from(t4);
              if (e3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3))
                return S3(t4, n3);
            }(t3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function S3(t3, n3) {
            (n3 == null || n3 > t3.length) && (n3 = t3.length);
            for (var e3 = 0, i2 = new Array(n3); e3 < n3; e3++)
              i2[e3] = t3[e3];
            return i2;
          }
          function N2(t3, n3) {
            for (var e3 = 0; e3 < n3.length; e3++) {
              var i2 = n3[e3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
            }
          }
          function w2(t3, n3) {
            return w2 = Object.setPrototypeOf || function(t4, n4) {
              return t4.__proto__ = n4, t4;
            }, w2(t3, n3);
          }
          function R3(t3) {
            var n3 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t4) {
                return false;
              }
            }();
            return function() {
              var e3, i2 = j2(t3);
              if (n3) {
                var o2 = j2(this).constructor;
                e3 = Reflect.construct(i2, arguments, o2);
              } else
                e3 = i2.apply(this, arguments);
              return C2(this, e3);
            };
          }
          function C2(t3, n3) {
            if (n3 && (T3(n3) === "object" || typeof n3 == "function"))
              return n3;
            if (n3 !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return function(t4) {
              if (t4 === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t4;
            }(t3);
          }
          function j2(t3) {
            return j2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, j2(t3);
          }
          var M3 = function(e3) {
            !function(t3, n3) {
              if (typeof n3 != "function" && n3 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t3.prototype = Object.create(n3 && n3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), n3 && w2(t3, n3);
            }(u2, e3);
            var i2, o2, s22 = R3(u2);
            function u2(t3) {
              var n3;
              !function(t4, n4) {
                if (!(t4 instanceof n4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, u2), (n3 = s22.call(this, t3)).onClick = function() {
                var t4 = n3.props.notification.dismiss;
                (t4.click || t4.showIcon) && n3.removeNotification(r.CLICK);
              }, n3.onTouchStart = function(t4) {
                var e5 = t4.touches[0].pageX;
                n3.setState(function(t5) {
                  var n4 = t5.parentStyle;
                  return { startX: e5, currentX: e5, parentStyle: Object.assign(Object.assign({}, n4), { position: "relative" }) };
                });
              }, n3.onTouchMove = function(t4) {
                var e5 = t4.touches[0].pageX, i4 = n3.state.startX, o4 = n3.props, a3 = o4.toggleRemoval, c2 = o4.notification, s3 = c2.id, u3 = c2.onRemoval, f2 = c2.slidingExit, l2 = c2.touchSlidingExit, d22 = l2.swipe, m2 = l2.fade, p2 = e5 - i4, h22 = n3.rootElementRef.current.offsetWidth, v22 = window.innerWidth + h22, b22 = "".concat(e5 - i4 >= 0 ? v22 : -v22, "px");
                if (function(t5, n4) {
                  return Math.abs(t5) >= 0.4 * n4;
                }(p2, h22)) {
                  var E22 = y3(d22, "left"), g2 = y3(m2, "opacity"), O22 = function() {
                    a3(s3, function() {
                      return u3(s3, r.TOUCH);
                    });
                  };
                  return n3.setState(function(t5) {
                    var e6 = t5.parentStyle;
                    return { touchEnabled: false, parentStyle: Object.assign(Object.assign({}, e6), { left: b22, opacity: 0, transition: "".concat(E22, ", ").concat(g2) }), onTransitionEnd: function() {
                      n3.setState(function(t6) {
                        var n4 = t6.parentStyle;
                        return { parentStyle: Object.assign(Object.assign({}, n4), { height: "0px", overflow: "hidden", transition: y3(f2, "height") }), onTransitionEnd: O22 };
                      });
                    } };
                  });
                }
                return n3.setState(function(t5) {
                  var n4 = t5.parentStyle;
                  return { currentX: e5, parentStyle: Object.assign(Object.assign({}, n4), { left: "".concat(0 + p2, "px") }) };
                });
              }, n3.onTouchEnd = function() {
                var t4 = n3.props.notification.touchRevert;
                n3.setState(function(n4) {
                  var e5 = n4.parentStyle;
                  return { parentStyle: Object.assign(Object.assign({}, e5), { left: 0, transition: y3(t4, "left") }) };
                });
              }, n3.onMouseEnter = function() {
                n3.timer ? n3.timer.pause() : n3.setState({ animationPlayState: "paused" });
              }, n3.onMouseLeave = function() {
                n3.timer ? n3.timer.resume() : n3.setState({ animationPlayState: "running" });
              }, n3.rootElementRef = c().createRef();
              var e4 = t3.defaultNotificationWidth, i3 = t3.notification, o3 = t3.isMobile, a22 = i3.width;
              return n3.state = { parentStyle: { height: "0px", overflow: "hidden", width: "".concat(a22 || e4, "px") }, htmlClassList: h2(i3), animationPlayState: "running", touchEnabled: true }, o3 && (n3.state.parentStyle.width = "100%"), n3;
            }
            return i2 = u2, (o2 = [{ key: "componentWillUnmount", value: function() {
              this.timer && this.timer.clear();
            } }, { key: "componentDidMount", value: function() {
              var e4 = this, i3 = this.props, o3 = i3.notification, a22 = i3.notificationsCount, c2 = o3.dismiss, s3 = c2.duration, u3 = c2.onScreen, f2 = function(e5, i4) {
                return !(i4 <= 1) && i4 > 1 && (e5.insert === n2.TOP && p(e5.container) || e5.insert === n2.BOTTOM && m(e5.container) || e5.container === t2.CENTER);
              }(o3, a22), l2 = this.rootElementRef.current.scrollHeight, d22 = function() {
                !s3 || u3 || e4.timer || (e4.timer = new O3(function() {
                  return e4.removeNotification(r.TIMEOUT);
                }, s3));
              };
              this.setState(function(t3) {
                return { parentStyle: { width: t3.parentStyle.width, height: "".concat(l2, "px"), transition: f2 ? y3(o3.slidingEnter, "height") : "10ms height" }, onTransitionEnd: d22 };
              }, function() {
                requestAnimationFrame(function() {
                  e4.setState(function(t3) {
                    return { htmlClassList: [].concat(_2(o3.animationIn), _2(t3.htmlClassList)) };
                  });
                });
              });
            } }, { key: "componentDidUpdate", value: function(t3) {
              if (this.props.hasBeenRemoved && !t3.hasBeenRemoved && this.removeNotification(r.MANUAL), t3 !== this.props && !this.props.hasBeenRemoved) {
                var n3 = this.props.notification.container, e4 = this.rootElementRef.current.children[0].scrollHeight;
                this.setState(function(t4) {
                  var i3 = t4.parentStyle;
                  return { parentStyle: Object.assign(Object.assign({}, i3), { height: "".concat(e4 + (n3.endsWith("full") ? 0 : 15), "px") }) };
                });
              }
            } }, { key: "removeNotification", value: function(t3) {
              var n3 = this, e4 = this.props, i3 = e4.notification, o3 = e4.toggleRemoval, r2 = i3.id, a22 = i3.onRemoval, c2 = i3.dismiss.waitForAnimation, s3 = [].concat(_2(i3.animationOut), _2(h2(i3))), u3 = function() {
                return o3(r2, function() {
                  return a22(r2, t3);
                });
              }, f2 = { height: "0px", overflow: "hidden", transition: y3(i3.slidingExit, "height") };
              return c2 ? this.setState(function(t4) {
                var e5 = t4.parentStyle.width;
                return { htmlClassList: s3, onAnimationEnd: function() {
                  n3.setState({ parentStyle: Object.assign({ width: e5 }, f2), onTransitionEnd: u3 });
                } };
              }) : this.setState(function(t4) {
                var n4 = t4.parentStyle.width;
                return { parentStyle: Object.assign({ width: n4 }, f2), onTransitionEnd: u3, htmlClassList: s3 };
              });
            } }, { key: "renderTimer", value: function() {
              var t3 = this, n3 = this.props.notification.dismiss, e4 = n3.duration, i3 = n3.onScreen, o3 = this.state.animationPlayState;
              if (e4 && i3) {
                var a22 = { animationName: "timer", animationDuration: "".concat(e4, "ms"), animationTimingFunction: "linear", animationFillMode: "forwards", animationDelay: "0", animationPlayState: o3 };
                return c().createElement("div", { className: "rnc__notification-timer" }, c().createElement("div", { className: "rnc__notification-timer-filler", onAnimationEnd: function() {
                  return t3.removeNotification(r.TIMEOUT);
                }, style: a22 }));
              }
            } }, { key: "renderCustomContent", value: function() {
              var t3 = this.state.htmlClassList, n3 = this.props.notification, e4 = n3.id, i3 = n3.content, o3 = n3.dismiss, r2 = o3.duration, a22 = o3.pauseOnHover, s3 = r2 > 0 && a22;
              return c().createElement("div", { className: "".concat(_2(t3).join(" ")), onMouseEnter: s3 ? this.onMouseEnter : null, onMouseLeave: s3 ? this.onMouseLeave : null }, c().isValidElement(i3) ? i3 : c().createElement(i3, Object.assign({}, { id: e4, notificationConfig: Object.assign({}, this.props.notification) })));
            } }, { key: "renderNotification", value: function() {
              var t3 = this.props.notification, n3 = t3.title, e4 = t3.message, i3 = t3.dismiss, o3 = i3.showIcon, r2 = i3.duration, a22 = i3.pauseOnHover, s3 = this.state.htmlClassList, u3 = r2 > 0 && a22;
              return c().createElement("div", { className: "".concat(_2(s3).join(" ")), onMouseEnter: u3 ? this.onMouseEnter : null, onMouseLeave: u3 ? this.onMouseLeave : null }, c().createElement("div", { className: "rnc__notification-content" }, o3 && c().createElement("div", { className: "rnc__notification-close-mark", onClick: this.onClick }), n3 && c().createElement("div", { className: "rnc__notification-title" }, n3), c().createElement("div", { className: "rnc__notification-message" }, e4), this.renderTimer()));
            } }, { key: "render", value: function() {
              var t3 = this.props.notification, n3 = t3.content, e4 = t3.dismiss.click, i3 = this.state, o3 = i3.parentStyle, r2 = i3.onAnimationEnd, a22 = i3.onTransitionEnd, s3 = i3.touchEnabled;
              return c().createElement("div", { ref: this.rootElementRef, onClick: e4 ? this.onClick : null, style: o3, className: "rnc__notification", onAnimationEnd: r2, onTransitionEnd: a22, onTouchStart: s3 ? this.onTouchStart : null, onTouchMove: s3 ? this.onTouchMove : null, onTouchEnd: s3 ? this.onTouchEnd : null }, n3 ? this.renderCustomContent() : this.renderNotification());
            } }]) && N2(i2.prototype, o2), Object.defineProperty(i2, "prototype", { writable: false }), u2;
          }(c().Component);
          function L2(t3, n3) {
            for (var e3 = 0; e3 < n3.length; e3++) {
              var i2 = n3[e3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
            }
          }
          const k2 = new (function() {
            function t3() {
              var n4 = this;
              !function(t4, n5) {
                if (!(t4 instanceof n5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), this.incrementCounter = function() {
                return n4.counter += 1;
              }, this.getCounter = function() {
                return n4.counter;
              }, this.counter = 0, this.add = null;
            }
            var n3, e3;
            return n3 = t3, (e3 = [{ key: "addNotification", value: function(t4) {
              this.incrementCounter();
              var n4 = E2(t4, this.types, this.defaultNotificationWidth);
              return this.add(n4);
            } }, { key: "register", value: function(t4) {
              var n4 = t4.addNotification, e4 = t4.removeNotification, i2 = t4.removeAllNotifications, o2 = t4.types, r2 = t4.defaultNotificationWidth;
              this.add = n4, this.removeNotification = e4, this.removeAllNotifications = i2, this.defaultNotificationWidth = r2, this.types = o2;
            } }]) && L2(n3.prototype, e3), Object.defineProperty(n3, "prototype", { writable: false }), t3;
          }())();
          function P3(t3) {
            return P3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, P3(t3);
          }
          function A(t3) {
            return function(t4) {
              if (Array.isArray(t4))
                return I3(t4);
            }(t3) || function(t4) {
              if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
                return Array.from(t4);
            }(t3) || function(t4, n3) {
              if (!t4)
                return;
              if (typeof t4 == "string")
                return I3(t4, n3);
              var e3 = Object.prototype.toString.call(t4).slice(8, -1);
              e3 === "Object" && t4.constructor && (e3 = t4.constructor.name);
              if (e3 === "Map" || e3 === "Set")
                return Array.from(t4);
              if (e3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3))
                return I3(t4, n3);
            }(t3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function I3(t3, n3) {
            (n3 == null || n3 > t3.length) && (n3 = t3.length);
            for (var e3 = 0, i2 = new Array(n3); e3 < n3; e3++)
              i2[e3] = t3[e3];
            return i2;
          }
          function x2(t3, n3) {
            for (var e3 = 0; e3 < n3.length; e3++) {
              var i2 = n3[e3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
            }
          }
          function F3(t3, n3) {
            return F3 = Object.setPrototypeOf || function(t4, n4) {
              return t4.__proto__ = n4, t4;
            }, F3(t3, n3);
          }
          function B3(t3) {
            var n3 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t4) {
                return false;
              }
            }();
            return function() {
              var e3, i2 = W3(t3);
              if (n3) {
                var o2 = W3(this).constructor;
                e3 = Reflect.construct(i2, arguments, o2);
              } else
                e3 = i2.apply(this, arguments);
              return U3(this, e3);
            };
          }
          function U3(t3, n3) {
            if (n3 && (P3(n3) === "object" || typeof n3 == "function"))
              return n3;
            if (n3 !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return function(t4) {
              if (t4 === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t4;
            }(t3);
          }
          function W3(t3) {
            return W3 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, W3(t3);
          }
          var D3 = function(n3) {
            !function(t3, n4) {
              if (typeof n4 != "function" && n4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t3.prototype = Object.create(n4 && n4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), n4 && F3(t3, n4);
            }(a22, n3);
            var e3, i2, r2 = B3(a22);
            function a22(t3) {
              var n4;
              return function(t4, n5) {
                if (!(t4 instanceof n5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, a22), (n4 = r2.call(this, t3)).handleResize = function() {
                n4.setState({ windowWidth: window.innerWidth });
              }, n4.add = function(t4) {
                return n4.setState(function(n5) {
                  var e4 = A(n5.notifications), i3 = e4.findIndex(function(n6) {
                    return n6.id === t4.id;
                  });
                  return i3 > -1 ? (e4[i3] = t4, { notifications: e4 }) : { notifications: t4.insert === "top" ? [t4].concat(A(e4)) : [].concat(A(e4), [t4]) };
                }), t4.id;
              }, n4.remove = function(t4) {
                n4.setState(function(n5) {
                  return { notifications: n5.notifications.map(function(n6) {
                    return n6.id === t4 && (n6.hasBeenRemoved = true), n6;
                  }) };
                });
              }, n4.removeAllNotifications = function() {
                n4.setState({ notifications: n4.state.notifications.map(function(t4) {
                  return Object.assign(Object.assign({}, t4), { hasBeenRemoved: true });
                }) });
              }, n4.toggleRemoval = function(t4, e4) {
                n4.setState(function(n5) {
                  return { notifications: n5.notifications.filter(function(n6) {
                    return n6.id !== t4;
                  }) };
                }, e4);
              }, n4.state = { isMobile: d2(t3.isMobile) ? s2 : t3.isMobile, breakpoint: d2(t3.breakpoint) ? u : t3.breakpoint, notifications: [], windowWidth: void 0 }, n4;
            }
            return e3 = a22, (i2 = [{ key: "componentDidMount", value: function() {
              var t3 = this.props, n4 = t3.types, e4 = t3.defaultNotificationWidth;
              k2.register({ addNotification: this.add, removeNotification: this.remove, removeAllNotifications: this.removeAllNotifications, defaultNotificationWidth: e4 || f, types: n4 }), this.setState({ windowWidth: window.innerWidth }), window.addEventListener("resize", this.handleResize);
            } }, { key: "componentWillUnmount", value: function() {
              window.removeEventListener("resize", this.handleResize);
            } }, { key: "renderNotifications", value: function(t3, n4) {
              var e4 = this;
              return t3.map(function(i3) {
                return c().createElement(M3, { id: i3.id, key: i3.id, isMobile: n4, defaultNotificationWidth: e4.props.defaultNotificationWidth, notification: i3, toggleRemoval: e4.toggleRemoval, notificationsCount: t3.length, hasBeenRemoved: i3.hasBeenRemoved });
              });
            } }, { key: "renderMobileNotifications", value: function(n4) {
              var e4 = n4.className, i3 = n4.id, o2 = function(n5) {
                var e5 = [], i4 = [];
                return n5.forEach(function(n6) {
                  var o3 = n6.container, r4 = t2.CENTER;
                  p(o3) || o3 === r4 ? e5.push(n6) : m(o3) && i4.push(n6);
                }), { top: e5, bottom: i4 };
              }(this.state.notifications), r3 = this.renderNotifications(o2.top, true), a3 = this.renderNotifications(o2.bottom, true);
              return c().createElement("div", { id: i3, key: "mobile", className: "rnc__base ".concat(e4 || "") }, c().createElement("div", { className: "rnc__notification-container--mobile-top" }, r3), c().createElement("div", { className: "rnc__notification-container--mobile-bottom" }, a3));
            } }, { key: "renderScreenNotifications", value: function(n4) {
              var e4 = n4.className, i3 = n4.id, o2 = function(n5) {
                var e5 = [], i4 = [], o3 = [], r4 = [], a4 = [], c2 = [], s3 = [], u3 = [], f3 = [];
                return n5.forEach(function(n6) {
                  var l3 = n6.container;
                  l3 === t2.TOP_FULL ? u3.push(n6) : l3 === t2.BOTTOM_FULL ? f3.push(n6) : l3 === t2.TOP_LEFT ? e5.push(n6) : l3 === t2.TOP_RIGHT ? i4.push(n6) : l3 === t2.TOP_CENTER ? o3.push(n6) : l3 === t2.BOTTOM_LEFT ? r4.push(n6) : l3 === t2.BOTTOM_RIGHT ? a4.push(n6) : l3 === t2.BOTTOM_CENTER ? c2.push(n6) : l3 === t2.CENTER && s3.push(n6);
                }), { topFull: u3, bottomFull: f3, topLeft: e5, topRight: i4, topCenter: o3, bottomLeft: r4, bottomRight: a4, bottomCenter: c2, center: s3 };
              }(this.state.notifications), r3 = this.renderNotifications(o2.topFull, false), a3 = this.renderNotifications(o2.bottomFull, false), s22 = this.renderNotifications(o2.topLeft, false), u2 = this.renderNotifications(o2.topRight, false), f2 = this.renderNotifications(o2.topCenter, false), l2 = this.renderNotifications(o2.bottomLeft, false), d22 = this.renderNotifications(o2.bottomRight, false), m2 = this.renderNotifications(o2.bottomCenter, false), p2 = this.renderNotifications(o2.center, false);
              return c().createElement("div", { id: i3, key: "screen", className: "rnc__base ".concat(e4 || "") }, c().createElement("div", { className: "rnc__notification-container--top-full" }, r3), c().createElement("div", { className: "rnc__notification-container--bottom-full" }, a3), c().createElement("div", { className: "rnc__notification-container--top-left" }, s22), c().createElement("div", { className: "rnc__notification-container--top-right" }, u2), c().createElement("div", { className: "rnc__notification-container--bottom-left" }, l2), c().createElement("div", { className: "rnc__notification-container--bottom-right" }, d22), c().createElement("div", { className: "rnc__notification-container--top-center" }, f2), c().createElement("div", { className: "rnc__notification-container--center" }, c().createElement("div", { className: "rnc__util--flex-center" }, p2)), c().createElement("div", { className: "rnc__notification-container--bottom-center" }, m2));
            } }, { key: "render", value: function() {
              var t3 = this.props.isMobile, n4 = this.state, e4 = n4.windowWidth, i3 = n4.breakpoint;
              return t3 && e4 <= i3 ? this.renderMobileNotifications(this.props) : this.renderScreenNotifications(this.props);
            } }]) && x2(e3.prototype, i2), Object.defineProperty(e3, "prototype", { writable: false }), a22;
          }(c().Component);
        })(), o;
      })();
    });
  });
  var ReactNotifications = dist.ReactNotifications;
  var Store = dist.Store;

  // deno:https://cdn.skypack.dev/-/react-hook-form@v7.33.1-5ZoGKEQobMzA3wEwuhDj/dist=es2019,mode=imports/optimized/react-hook-form.js
  var isCheckBoxInput = (element) => element.type === "checkbox";
  var isDateObject = (value) => value instanceof Date;
  var isNullOrUndefined = (value) => value == null;
  var isObjectType = (value) => typeof value === "object";
  var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
  var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
  var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
  var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
  var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
  var isUndefined = (val) => val === void 0;
  var get = (obj, path, defaultValue) => {
    if (!path || !isObject(obj)) {
      return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], obj);
    return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
  };
  var EVENTS = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
  };
  var VALIDATION_MODE = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  };
  var INPUT_VALIDATION_RULES = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  };
  var HookFormContext = react_default.createContext(null);
  var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
    const result = {};
    for (const key in formState) {
      Object.defineProperty(result, key, {
        get: () => {
          const _key = key;
          if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
            _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
          }
          localProxyFormState && (localProxyFormState[_key] = true);
          return formState[_key];
        }
      });
    }
    return result;
  };
  var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
  var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
  };
  var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
  function useSubscribe(props) {
    const _props = react_default.useRef(props);
    _props.current = props;
    react_default.useEffect(() => {
      const tearDown = (subscription2) => {
        if (subscription2) {
          subscription2.unsubscribe();
        }
      };
      const subscription = !props.disabled && _props.current.subject.subscribe({
        next: _props.current.callback
      });
      return () => tearDown(subscription);
    }, [props.disabled]);
  }
  var isString = (value) => typeof value === "string";
  var generateWatchOutput = (names, _names, formValues, isGlobal) => {
    const isArray = Array.isArray(names);
    if (isString(names)) {
      isGlobal && _names.watch.add(names);
      return get(formValues, names);
    }
    if (isArray) {
      return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
  };
  var isFunction = (value) => typeof value === "function";
  var objectHasFunction = (data) => {
    for (const key in data) {
      if (isFunction(data[key])) {
        return true;
      }
    }
    return false;
  };
  var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
    ...errors[name],
    types: {
      ...errors[name] && errors[name].types ? errors[name].types : {},
      [type]: message || true
    }
  } : {};
  var isKey = (value) => /^\w*$/.test(value);
  var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
  function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
      const key = tempPath[index];
      let newValue = value;
      if (index !== lastIndex) {
        const objValue = object[key];
        newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
      }
      object[key] = newValue;
      object = object[key];
    }
    return object;
  }
  var focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
      const field = get(fields, key);
      if (field) {
        const { _f, ...currentField } = field;
        if (_f && callback(_f.name)) {
          if (_f.ref.focus && isUndefined(_f.ref.focus())) {
            break;
          } else if (_f.refs) {
            _f.refs[0].focus();
            break;
          }
        } else if (isObject(currentField)) {
          focusFieldBy(currentField, callback);
        }
      }
    }
  };
  var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
  var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
  function cloneObject(data) {
    let copy3;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
      copy3 = new Date(data);
    } else if (data instanceof Set) {
      copy3 = new Set(data);
    } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
      copy3 = isArray ? [] : {};
      for (const key in data) {
        if (isFunction(data[key])) {
          copy3 = data;
          break;
        }
        copy3[key] = cloneObject(data[key]);
      }
    } else {
      return data;
    }
    return copy3;
  }
  function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
      object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
  }
  function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
      delete childObject[key];
    }
    for (let k2 = 0; k2 < updatePath.slice(0, -1).length; k2++) {
      let index = -1;
      let objectRef;
      const currentPaths = updatePath.slice(0, -(k2 + 1));
      const currentPathsLength = currentPaths.length - 1;
      if (k2 > 0) {
        previousObjRef = object;
      }
      while (++index < currentPaths.length) {
        const item = currentPaths[index];
        objectRef = objectRef ? objectRef[item] : object[item];
        if (currentPathsLength === index && (isObject(objectRef) && isEmptyObject(objectRef) || Array.isArray(objectRef) && !objectRef.filter((data) => !isUndefined(data)).length)) {
          previousObjRef ? delete previousObjRef[item] : delete object[item];
        }
        previousObjRef = objectRef;
      }
    }
    return object;
  }
  function createSubject() {
    let _observers = [];
    const next = (value) => {
      for (const observer of _observers) {
        observer.next(value);
      }
    };
    const subscribe = (observer) => {
      _observers.push(observer);
      return {
        unsubscribe: () => {
          _observers = _observers.filter((o) => o !== observer);
        }
      };
    };
    const unsubscribe = () => {
      _observers = [];
    };
    return {
      get observers() {
        return _observers;
      },
      next,
      subscribe,
      unsubscribe
    };
  }
  var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
  function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
      return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
      return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      if (!keys2.includes(key)) {
        return false;
      }
      if (key !== "ref") {
        const val2 = object2[key];
        if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
          return false;
        }
      }
    }
    return true;
  }
  var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched
  });
  var isBoolean = (value) => typeof value === "boolean";
  var isFileInput = (element) => element.type === "file";
  var isHTMLElement = (value) => {
    const owner = value ? value.ownerDocument : 0;
    const ElementClass = owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement;
    return value instanceof ElementClass;
  };
  var isMultipleSelect = (element) => element.type === `select-multiple`;
  var isRadioInput = (element) => element.type === "radio";
  var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
  var live = (ref) => isHTMLElement(ref) && ref.isConnected;
  function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
      for (const key in data) {
        if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
          fields[key] = Array.isArray(data[key]) ? [] : {};
          markFieldsDirty(data[key], fields[key]);
        } else if (!isNullOrUndefined(data[key])) {
          fields[key] = true;
        }
      }
    }
    return fields;
  }
  function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
      for (const key in data) {
        if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
          if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
            dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
          } else {
            getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
          }
        } else {
          dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
        }
      }
    }
    return dirtyFieldsFromValues;
  }
  var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
  var defaultResult = {
    value: false,
    isValid: false
  };
  var validResult = { value: true, isValid: true };
  var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
      if (options.length > 1) {
        const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
        return { value: values, isValid: !!values.length };
      }
      return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult : defaultResult;
    }
    return defaultResult;
  };
  var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" || isNullOrUndefined(value) ? NaN : +value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
  var defaultReturn = {
    isValid: false,
    value: null
  };
  var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
    isValid: true,
    value: option.value
  } : previous, defaultReturn) : defaultReturn;
  function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
      return;
    }
    if (isFileInput(ref)) {
      return ref.files;
    }
    if (isRadioInput(ref)) {
      return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
      return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
      return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
  }
  var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
      const field = get(_fields, name);
      field && set(fields, name, field._f);
    }
    return {
      criteriaMode,
      names: [...fieldsNames],
      fields,
      shouldUseNativeValidation
    };
  };
  var isRegex = (value) => value instanceof RegExp;
  var getRuleValue = (rule) => isUndefined(rule) ? void 0 : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
  var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
  function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
      return {
        error,
        name
      };
    }
    const names = name.split(".");
    while (names.length) {
      const fieldName = names.join(".");
      const field = get(_fields, fieldName);
      const foundError = get(errors, fieldName);
      if (field && !Array.isArray(field) && name !== fieldName) {
        return { name };
      }
      if (foundError && foundError.type) {
        return {
          name: fieldName,
          error: foundError
        };
      }
      names.pop();
    }
    return {
      name
    };
  }
  var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
      return false;
    } else if (!isSubmitted && mode.isOnTouch) {
      return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
      return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
      return isBlurEvent;
    }
    return true;
  };
  var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
  var isMessage = (value) => isString(value) || react_default.isValidElement(value);
  function getValidateError(result, ref, type = "validate") {
    if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
      return {
        type,
        message: isMessage(result) ? result : "",
        ref
      };
    }
  }
  var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
    value: validationData,
    message: ""
  };
  var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
    if (!mount || disabled) {
      return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
      if (shouldUseNativeValidation && inputRef.reportValidity) {
        inputRef.setCustomValidity(isBoolean(message) ? "" : message || " ");
        inputRef.reportValidity();
      }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox2 = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && !ref.value || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
      const message = exceedMax ? maxLengthMessage : minLengthMessage;
      error[name] = {
        type: exceedMax ? maxType : minType,
        message,
        ref,
        ...appendErrorsCurry(exceedMax ? maxType : minType, message)
      };
    };
    if (required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
      const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
      if (value) {
        error[name] = {
          type: INPUT_VALIDATION_RULES.required,
          message,
          ref: inputRef,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(message);
          return error;
        }
      }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
      let exceedMax;
      let exceedMin;
      const maxOutput = getValueAndMessage(max);
      const minOutput = getValueAndMessage(min);
      if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
        const valueNumber = ref.valueAsNumber || +inputValue;
        if (!isNullOrUndefined(maxOutput.value)) {
          exceedMax = valueNumber > maxOutput.value;
        }
        if (!isNullOrUndefined(minOutput.value)) {
          exceedMin = valueNumber < minOutput.value;
        }
      } else {
        const valueDate = ref.valueAsDate || new Date(inputValue);
        if (isString(maxOutput.value)) {
          exceedMax = valueDate > new Date(maxOutput.value);
        }
        if (isString(minOutput.value)) {
          exceedMin = valueDate < new Date(minOutput.value);
        }
      }
      if (exceedMax || exceedMin) {
        getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
        if (!validateAllFieldCriteria) {
          setCustomValidity(error[name].message);
          return error;
        }
      }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
      const maxLengthOutput = getValueAndMessage(maxLength);
      const minLengthOutput = getValueAndMessage(minLength);
      const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > maxLengthOutput.value;
      const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < minLengthOutput.value;
      if (exceedMax || exceedMin) {
        getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
        if (!validateAllFieldCriteria) {
          setCustomValidity(error[name].message);
          return error;
        }
      }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
      const { value: patternValue, message } = getValueAndMessage(pattern);
      if (isRegex(patternValue) && !inputValue.match(patternValue)) {
        error[name] = {
          type: INPUT_VALIDATION_RULES.pattern,
          message,
          ref,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(message);
          return error;
        }
      }
    }
    if (validate) {
      if (isFunction(validate)) {
        const result = await validate(inputValue);
        const validateError = getValidateError(result, inputRef);
        if (validateError) {
          error[name] = {
            ...validateError,
            ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
          };
          if (!validateAllFieldCriteria) {
            setCustomValidity(validateError.message);
            return error;
          }
        }
      } else if (isObject(validate)) {
        let validationResult = {};
        for (const key in validate) {
          if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
            break;
          }
          const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
          if (validateError) {
            validationResult = {
              ...validateError,
              ...appendErrorsCurry(key, validateError.message)
            };
            setCustomValidity(validateError.message);
            if (validateAllFieldCriteria) {
              error[name] = validationResult;
            }
          }
        }
        if (!isEmptyObject(validationResult)) {
          error[name] = {
            ref: inputRef,
            ...validationResult
          };
          if (!validateAllFieldCriteria) {
            return error;
          }
        }
      }
    }
    setCustomValidity(true);
    return error;
  };
  var defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
  };
  function createFormControl(props = {}) {
    let _options = {
      ...defaultOptions,
      ...props
    };
    let _formState = {
      isDirty: false,
      isValidating: false,
      dirtyFields: {},
      isSubmitted: false,
      submitCount: 0,
      touchedFields: {},
      isSubmitting: false,
      isSubmitSuccessful: false,
      isValid: false,
      errors: {}
    };
    let _fields = {};
    let _defaultValues = cloneObject(_options.defaultValues) || {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _stateFlags = {
      action: false,
      mount: false,
      watch: false
    };
    let _names = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    let validateFields = {};
    const _proxyFormState = {
      isDirty: false,
      dirtyFields: false,
      touchedFields: false,
      isValidating: false,
      isValid: false,
      errors: false
    };
    const _subjects = {
      watch: createSubject(),
      array: createSubject(),
      state: createSubject()
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
      clearTimeout(timer);
      timer = window.setTimeout(callback, wait);
    };
    const _updateValid = async (shouldSkipRender) => {
      let isValid = false;
      if (_proxyFormState.isValid) {
        isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuildInValidation(_fields, true);
        if (!shouldSkipRender && isValid !== _formState.isValid) {
          _formState.isValid = isValid;
          _subjects.state.next({
            isValid
          });
        }
      }
      return isValid;
    };
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
      if (args && method) {
        _stateFlags.action = true;
        if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
          const fieldValues = method(get(_fields, name), args.argA, args.argB);
          shouldSetValues && set(_fields, name, fieldValues);
        }
        if (_proxyFormState.errors && shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
          const errors = method(get(_formState.errors, name), args.argA, args.argB);
          shouldSetValues && set(_formState.errors, name, errors);
          unsetEmptyArray(_formState.errors, name);
        }
        if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
          const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
          shouldSetValues && set(_formState.touchedFields, name, touchedFields);
        }
        if (_proxyFormState.dirtyFields) {
          _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
        }
        _subjects.state.next({
          isDirty: _getDirty(name, values),
          dirtyFields: _formState.dirtyFields,
          errors: _formState.errors,
          isValid: _formState.isValid
        });
      } else {
        set(_formValues, name, values);
      }
    };
    const updateErrors = (name, error) => {
      set(_formState.errors, name, error);
      _subjects.state.next({
        errors: _formState.errors
      });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
      const field = get(_fields, name);
      if (field) {
        const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
        isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
        _stateFlags.mount && _updateValid();
      }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
      let isFieldDirty = false;
      const output = {
        name
      };
      const isPreviousFieldTouched = get(_formState.touchedFields, name);
      if (_proxyFormState.isDirty) {
        const isPreviousFormDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        isFieldDirty = isPreviousFormDirty !== output.isDirty;
      }
      if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
        const isPreviousFieldDirty = get(_formState.dirtyFields, name);
        const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
        isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
        output.dirtyFields = _formState.dirtyFields;
        isFieldDirty = isFieldDirty || isPreviousFieldDirty !== get(_formState.dirtyFields, name);
      }
      if (isBlurEvent && !isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        isFieldDirty = isFieldDirty || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
      isFieldDirty && shouldRender && _subjects.state.next(output);
      return isFieldDirty ? output : {};
    };
    const shouldRenderByError = async (name, isValid, error, fieldState) => {
      const previousFieldError = get(_formState.errors, name);
      const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
      if (props.delayError && error) {
        delayErrorCallback = debounce(() => updateErrors(name, error));
        delayErrorCallback(props.delayError);
      } else {
        clearTimeout(timer);
        delayErrorCallback = null;
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
      if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
        const updatedFormState = {
          ...fieldState,
          ...shouldUpdateValid ? { isValid } : {},
          errors: _formState.errors,
          name
        };
        _formState = {
          ..._formState,
          ...updatedFormState
        };
        _subjects.state.next(updatedFormState);
      }
      validateFields[name]--;
      if (_proxyFormState.isValidating && !Object.values(validateFields).some((v2) => v2)) {
        _subjects.state.next({
          isValidating: false
        });
        validateFields = {};
      }
    };
    const _executeSchema = async (name) => _options.resolver ? await _options.resolver({ ..._formValues }, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation)) : {};
    const executeSchemaAndUpdateState = async (names) => {
      const { errors } = await _executeSchema();
      if (names) {
        for (const name of names) {
          const error = get(errors, name);
          error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
      } else {
        _formState.errors = errors;
      }
      return errors;
    };
    const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {
      valid: true
    }) => {
      for (const name in fields) {
        const field = fields[name];
        if (field) {
          const { _f: fieldReference, ...fieldValue } = field;
          if (fieldReference) {
            const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);
            if (fieldError[fieldReference.name]) {
              context.valid = false;
              if (shouldOnlyCheckValid) {
                break;
              }
            }
            if (!shouldOnlyCheckValid) {
              fieldError[fieldReference.name] ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name]) : unset(_formState.errors, fieldReference.name);
            }
          }
          fieldValue && await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context);
        }
      }
      return context.valid;
    };
    const _removeUnmounted = () => {
      for (const name of _names.unMount) {
        const field = get(_fields, name);
        field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
      }
      _names.unMount = new Set();
    };
    const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => {
      const fieldValues = {
        ..._stateFlags.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
      };
      return generateWatchOutput(names, _names, fieldValues, isGlobal);
    };
    const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
      const field = get(_fields, name);
      let fieldValue = value;
      if (field) {
        const fieldReference = field._f;
        if (fieldReference) {
          !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
          fieldValue = isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
          if (isMultipleSelect(fieldReference.ref)) {
            [...fieldReference.ref.options].forEach((selectRef) => selectRef.selected = fieldValue.includes(selectRef.value));
          } else if (fieldReference.refs) {
            if (isCheckBoxInput(fieldReference.ref)) {
              fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => !checkboxRef.disabled && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
            } else {
              fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
            }
          } else if (isFileInput(fieldReference.ref)) {
            fieldReference.ref.value = "";
          } else {
            fieldReference.ref.value = fieldValue;
            if (!fieldReference.ref.type) {
              _subjects.watch.next({
                name
              });
            }
          }
        }
      }
      (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
      options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
      for (const fieldKey in value) {
        const fieldValue = value[fieldKey];
        const fieldName = `${name}.${fieldKey}`;
        const field = get(_fields, fieldName);
        (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
      }
    };
    const setValue = (name, value, options = {}) => {
      const field = get(_fields, name);
      const isFieldArray = _names.array.has(name);
      const cloneValue = cloneObject(value);
      set(_formValues, name, cloneValue);
      if (isFieldArray) {
        _subjects.array.next({
          name,
          values: _formValues
        });
        if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
          _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
          _subjects.state.next({
            name,
            dirtyFields: _formState.dirtyFields,
            isDirty: _getDirty(name, cloneValue)
          });
        }
      } else {
        field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
      }
      isWatched(name, _names) && _subjects.state.next({});
      _subjects.watch.next({
        name
      });
    };
    const onChange = async (event) => {
      const target = event.target;
      let name = target.name;
      const field = get(_fields, name);
      if (field) {
        let error;
        let isValid;
        const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
        const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
        const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
        const watched = isWatched(name, _names, isBlurEvent);
        set(_formValues, name, fieldValue);
        if (isBlurEvent) {
          field._f.onBlur && field._f.onBlur(event);
          delayErrorCallback && delayErrorCallback(0);
        } else if (field._f.onChange) {
          field._f.onChange(event);
        }
        const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
        const shouldRender = !isEmptyObject(fieldState) || watched;
        !isBlurEvent && _subjects.watch.next({
          name,
          type: event.type
        });
        if (shouldSkipValidation) {
          return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
        }
        !isBlurEvent && watched && _subjects.state.next({});
        validateFields[name] = validateFields[name] ? 1 : 1;
        _subjects.state.next({
          isValidating: true
        });
        if (_options.resolver) {
          const { errors } = await _executeSchema([name]);
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid = isEmptyObject(errors);
        } else {
          error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
          isValid = await _updateValid(true);
        }
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    };
    const trigger = async (name, options = {}) => {
      let isValid;
      let validationResult;
      const fieldNames = convertToArrayPayload(name);
      _subjects.state.next({
        isValidating: true
      });
      if (_options.resolver) {
        const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
        isValid = isEmptyObject(errors);
        validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
      } else if (name) {
        validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
          const field = get(_fields, fieldName);
          return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);
        }))).every(Boolean);
        !(!validationResult && !_formState.isValid) && _updateValid();
      } else {
        validationResult = isValid = await executeBuildInValidation(_fields);
      }
      _subjects.state.next({
        ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name },
        ..._options.resolver ? { isValid } : {},
        errors: _formState.errors,
        isValidating: false
      });
      options.shouldFocus && !validationResult && focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
      return validationResult;
    };
    const getValues = (fieldNames) => {
      const values = {
        ..._defaultValues,
        ..._stateFlags.mount ? _formValues : {}
      };
      return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
      invalid: !!get((formState || _formState).errors, name),
      isDirty: !!get((formState || _formState).dirtyFields, name),
      isTouched: !!get((formState || _formState).touchedFields, name),
      error: get((formState || _formState).errors, name)
    });
    const clearErrors = (name) => {
      name ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName)) : _formState.errors = {};
      _subjects.state.next({
        errors: _formState.errors
      });
    };
    const setError = (name, error, options) => {
      const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
      set(_formState.errors, name, {
        ...error,
        ref
      });
      _subjects.state.next({
        name,
        errors: _formState.errors,
        isValid: false
      });
      options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name) ? _subjects.watch.subscribe({
      next: (info) => name(_getWatch(void 0, defaultValue), info)
    }) : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {}) => {
      for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
        _names.mount.delete(fieldName);
        _names.array.delete(fieldName);
        if (get(_fields, fieldName)) {
          if (!options.keepValue) {
            unset(_fields, fieldName);
            unset(_formValues, fieldName);
          }
          !options.keepError && unset(_formState.errors, fieldName);
          !options.keepDirty && unset(_formState.dirtyFields, fieldName);
          !options.keepTouched && unset(_formState.touchedFields, fieldName);
          !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
      }
      _subjects.watch.next({});
      _subjects.state.next({
        ..._formState,
        ...!options.keepDirty ? {} : { isDirty: _getDirty() }
      });
      !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {}) => {
      let field = get(_fields, name);
      const disabledIsDefined = isBoolean(options.disabled);
      set(_fields, name, {
        _f: {
          ...field && field._f ? field._f : { ref: { name } },
          name,
          mount: true,
          ...options
        }
      });
      _names.mount.add(name);
      field ? disabledIsDefined && set(_formValues, name, options.disabled ? void 0 : get(_formValues, name, getFieldValue(field._f))) : updateValidAndValue(name, true, options.value);
      return {
        ...disabledIsDefined ? { disabled: options.disabled } : {},
        ..._options.shouldUseNativeValidation ? {
          required: !!options.required,
          min: getRuleValue(options.min),
          max: getRuleValue(options.max),
          minLength: getRuleValue(options.minLength),
          maxLength: getRuleValue(options.maxLength),
          pattern: getRuleValue(options.pattern)
        } : {},
        name,
        onChange,
        onBlur: onChange,
        ref: (ref) => {
          if (ref) {
            register(name, options);
            field = get(_fields, name);
            const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
            const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
            const refs = field._f.refs || [];
            if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
              return;
            }
            set(_fields, name, {
              _f: {
                ...field._f,
                ...radioOrCheckbox ? {
                  refs: [
                    ...refs.filter(live),
                    fieldRef,
                    ...!!Array.isArray(get(_defaultValues, name)) ? [{}] : []
                  ],
                  ref: { type: fieldRef.type, name }
                } : { ref: fieldRef }
              }
            });
            updateValidAndValue(name, false, void 0, fieldRef);
          } else {
            field = get(_fields, name, {});
            if (field._f) {
              field._f.mount = false;
            }
            (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _stateFlags.action) && _names.unMount.add(name);
          }
        }
      };
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
      if (e) {
        e.preventDefault && e.preventDefault();
        e.persist && e.persist();
      }
      let hasNoPromiseError = true;
      let fieldValues = cloneObject(_formValues);
      _subjects.state.next({
        isSubmitting: true
      });
      try {
        if (_options.resolver) {
          const { errors, values } = await _executeSchema();
          _formState.errors = errors;
          fieldValues = values;
        } else {
          await executeBuildInValidation(_fields);
        }
        if (isEmptyObject(_formState.errors)) {
          _subjects.state.next({
            errors: {},
            isSubmitting: true
          });
          await onValid(fieldValues, e);
        } else {
          if (onInvalid) {
            await onInvalid({ ..._formState.errors }, e);
          }
          _options.shouldFocusError && focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
        }
      } catch (err) {
        hasNoPromiseError = false;
        throw err;
      } finally {
        _formState.isSubmitted = true;
        _subjects.state.next({
          isSubmitted: true,
          isSubmitting: false,
          isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
          submitCount: _formState.submitCount + 1,
          errors: _formState.errors
        });
      }
    };
    const resetField = (name, options = {}) => {
      if (get(_fields, name)) {
        if (isUndefined(options.defaultValue)) {
          setValue(name, get(_defaultValues, name));
        } else {
          setValue(name, options.defaultValue);
          set(_defaultValues, name, options.defaultValue);
        }
        if (!options.keepTouched) {
          unset(_formState.touchedFields, name);
        }
        if (!options.keepDirty) {
          unset(_formState.dirtyFields, name);
          _formState.isDirty = options.defaultValue ? _getDirty(name, get(_defaultValues, name)) : _getDirty();
        }
        if (!options.keepError) {
          unset(_formState.errors, name);
          _proxyFormState.isValid && _updateValid();
        }
        _subjects.state.next({ ..._formState });
      }
    };
    const reset = (formValues, keepStateOptions = {}) => {
      const updatedValues = formValues || _defaultValues;
      const cloneUpdatedValues = cloneObject(updatedValues);
      const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
      if (!keepStateOptions.keepDefaultValues) {
        _defaultValues = updatedValues;
      }
      if (!keepStateOptions.keepValues) {
        if (keepStateOptions.keepDirtyValues) {
          for (const fieldName of _names.mount) {
            get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
          }
        } else {
          if (isWeb && isUndefined(formValues)) {
            for (const name of _names.mount) {
              const field = get(_fields, name);
              if (field && field._f) {
                const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                try {
                  isHTMLElement(fieldReference) && fieldReference.closest("form").reset();
                  break;
                } catch (_a) {
                }
              }
            }
          }
          _fields = {};
        }
        _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneUpdatedValues;
        _subjects.array.next({
          values
        });
        _subjects.watch.next({
          values
        });
      }
      _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: false,
        focus: ""
      };
      _stateFlags.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
      _stateFlags.watch = !!props.shouldUnregister;
      _subjects.state.next({
        submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
        isDirty: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
        isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
        dirtyFields: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
        touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
        errors: keepStateOptions.keepErrors ? _formState.errors : {},
        isSubmitting: false,
        isSubmitSuccessful: false
      });
    };
    const setFocus = (name, options = {}) => {
      const field = get(_fields, name)._f;
      const fieldRef = field.refs ? field.refs[0] : field.ref;
      fieldRef.focus();
      options.shouldSelect && fieldRef.select();
    };
    return {
      control: {
        register,
        unregister,
        getFieldState,
        _executeSchema,
        _getWatch,
        _getDirty,
        _updateValid,
        _removeUnmounted,
        _updateFieldArray,
        _getFieldArray,
        _subjects,
        _proxyFormState,
        get _fields() {
          return _fields;
        },
        get _formValues() {
          return _formValues;
        },
        get _stateFlags() {
          return _stateFlags;
        },
        set _stateFlags(value) {
          _stateFlags = value;
        },
        get _defaultValues() {
          return _defaultValues;
        },
        get _names() {
          return _names;
        },
        set _names(value) {
          _names = value;
        },
        get _formState() {
          return _formState;
        },
        set _formState(value) {
          _formState = value;
        },
        get _options() {
          return _options;
        },
        set _options(value) {
          _options = {
            ..._options,
            ...value
          };
        }
      },
      trigger,
      register,
      handleSubmit,
      watch,
      setValue,
      getValues,
      reset,
      resetField,
      clearErrors,
      unregister,
      setError,
      setFocus,
      getFieldState
    };
  }
  function useForm(props = {}) {
    const _formControl = react_default.useRef();
    const [formState, updateFormState] = react_default.useState({
      isDirty: false,
      isValidating: false,
      dirtyFields: {},
      isSubmitted: false,
      submitCount: 0,
      touchedFields: {},
      isSubmitting: false,
      isSubmitSuccessful: false,
      isValid: false,
      errors: {}
    });
    if (_formControl.current) {
      _formControl.current.control._options = props;
    } else {
      _formControl.current = {
        ...createFormControl(props),
        formState
      };
    }
    const control = _formControl.current.control;
    const callback = react_default.useCallback((value) => {
      if (shouldRenderFormState(value, control._proxyFormState, true)) {
        control._formState = {
          ...control._formState,
          ...value
        };
        updateFormState({ ...control._formState });
      }
    }, [control]);
    useSubscribe({
      subject: control._subjects.state,
      callback
    });
    react_default.useEffect(() => {
      if (!control._stateFlags.mount) {
        control._proxyFormState.isValid && control._updateValid();
        control._stateFlags.mount = true;
      }
      if (control._stateFlags.watch) {
        control._stateFlags.watch = false;
        control._subjects.state.next({});
      }
      control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
    return _formControl.current;
  }

  // deno:https://esm.sh/@progfay/scrapbox-parser@8.0.0
  var scrapbox_parser_8_0_exports = {};
  __export(scrapbox_parser_8_0_exports, {
    convertToBlock: () => h,
    getTitle: () => je2,
    packRows: () => P2,
    parse: () => qe2,
    parseToRows: () => b
  });

  // deno:https://esm.sh/v87/@progfay/scrapbox-parser@8.0.0/deno/scrapbox-parser.js
  var v = (e) => ({ type: "title", text: e.rows[0].text });
  var y2 = (e) => {
    let { rows: [t, ...o] } = e, { indent: r = 0, text: n = "" } = t ?? {}, c = n.replace(/^\s*code:/, "");
    return { indent: r, type: "codeBlock", fileName: c, content: o.map((i) => i.text.substring(r + 1)).join(`
`) };
  };
  var s = (e, { parseOnNested: t, parseOnQuoted: o, patterns: r }) => (n, c, i) => {
    var p, l, m, u, f, N2;
    if (!t && c.nested)
      return (p = i?.()) !== null && p !== void 0 ? p : [];
    if (!o && c.quoted)
      return (l = i?.()) !== null && l !== void 0 ? l : [];
    for (let Z2 of r) {
      let g = Z2.exec(n);
      if (g === null)
        continue;
      let A = n.substring(0, g.index), J = n.substring(g.index + ((u = (m = g[0]) === null || m === void 0 ? void 0 : m.length) !== null && u !== void 0 ? u : 0)), K = e((f = g[0]) !== null && f !== void 0 ? f : "", c);
      return [...d(A, c), ...K, ...d(J, c)];
    }
    return (N2 = i?.()) !== null && N2 !== void 0 ? N2 : [];
  };
  var a = (e) => [{ type: "plain", raw: e, text: e }];
  var T2 = s(a, { parseOnNested: true, parseOnQuoted: true, patterns: [/^()(.*)()$/] });
  var V2 = /^>.*$/;
  var X2 = (e, t) => t.context === "table" ? a(e, t) : [{ type: "quote", raw: e, nodes: d(e.substring(1), { ...t, quoted: true }) }];
  var O2 = s(X2, { parseOnNested: false, parseOnQuoted: false, patterns: [V2] });
  var Y2 = /^\? .+$/;
  var w = (e, t) => t.context === "table" ? a(e, t) : [{ type: "helpfeel", raw: e, text: e.substring(2) }];
  var I2 = s(w, { parseOnNested: false, parseOnQuoted: false, patterns: [Y2] });
  var ee2 = /\[\[https?:\/\/[^\s\]]+\.(?:png|jpe?g|gif|svg)\]\]/i;
  var te2 = /\[\[https?:\/\/(?:[0-9a-z-]+\.)?gyazo\.com\/[0-9a-f]{32}\]\]/;
  var oe2 = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    let o = e.substring(2, e.length - 2), r = /^https?:\/\/([0-9a-z-]\.)?gyazo\.com\/[0-9a-f]{32}$/.test(o);
    return [{ type: "strongImage", raw: e, src: r ? `${o}/thumb/1000` : o }];
  };
  var R2 = s(oe2, { parseOnNested: false, parseOnQuoted: true, patterns: [ee2, te2] });
  var re2 = /\[[^[\]]*\.icon(?:\*[1-9]\d*)?\]/;
  function x(e) {
    return (t, o) => {
      if (e === "strongIcon" && o.context === "table")
        return a(t, o);
      let r = e === "icon" ? t.substring(1, t.length - 1) : t.substring(2, t.length - 2), n = r.lastIndexOf(".icon"), c = r.substring(0, n), i = c.startsWith("/") ? "root" : "relative", p = r.substring(n + 5, r.length), l = p.startsWith("*") ? parseInt(p.substring(1), 10) : 1;
      return new Array(l).fill({}).map(() => ({ path: c, pathType: i, type: e, raw: t }));
    };
  }
  var ne2 = x("icon");
  var E = s(ne2, { parseOnNested: false, parseOnQuoted: true, patterns: [re2] });
  var se2 = /\[\[[^[\]]*\.icon(?:\*\d+)?\]\]/;
  var ae2 = x("strongIcon");
  var k = s(ae2, { parseOnNested: false, parseOnQuoted: true, patterns: [se2] });
  var ce2 = /\[\[(?:[^[]|\[[^[]).*?\]*\]\]/;
  var ie2 = (e, t) => t.context === "table" ? a(e, t) : [{ type: "strong", raw: e, nodes: d(e.substring(2, e.length - 2), { ...t, nested: true }) }];
  var $ = s(ie2, { parseOnNested: false, parseOnQuoted: true, patterns: [ce2] });
  var de2 = /\[\$ .+? \]/;
  var pe2 = /\[\$ [^\]]+\]/;
  var le2 = (e, t) => t.context === "table" ? a(e, t) : [{ type: "formula", raw: e, formula: e.substring(3, e.length - (e.endsWith(" ]") ? 2 : 1)) }];
  var S2 = s(le2, { parseOnNested: false, parseOnQuoted: true, patterns: [de2, pe2] });
  var me2 = /\[[!"#%&'()*+,\-./{|}<>_~]+ (?:\[[^[\]]+\]|[^\]])+\]/;
  var ue2 = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    let o = e.indexOf(" "), r = e.substring(1, o), n = e.substring(o + 1, e.length - 1), c = new Set(r);
    if (c.has("*")) {
      let i = r.split("*").length - 1;
      c.delete("*"), c.add(`*-${Math.min(i, 10)}`);
    }
    return [{ type: "decoration", raw: e, rawDecos: r, decos: Array.from(c), nodes: d(n, { ...t, nested: true }) }];
  };
  var z = s(ue2, { parseOnNested: false, parseOnQuoted: true, patterns: [me2] });
  var ge2 = /`.*?`/;
  var fe2 = (e, t) => t.context === "table" ? a(e, t) : [{ type: "code", raw: e, text: e.substring(1, e.length - 1) }];
  var Q = s(fe2, { parseOnNested: false, parseOnQuoted: true, patterns: [ge2] });
  var Ne2 = /^[$%] .+$/;
  var xe = (e, t) => {
    var o;
    if (t.context === "table")
      return a(e, t);
    let r = (o = e[0]) !== null && o !== void 0 ? o : "", n = e.substring(2);
    return [{ type: "commandLine", raw: e, symbol: r, text: n }];
  };
  var L = s(xe, { parseOnNested: false, parseOnQuoted: false, patterns: [Ne2] });
  var he2 = /\[\s+\]/;
  var be2 = (e, t) => t.context === "table" ? a(e, t) : [{ type: "blank", raw: e, text: e.substring(1, e.length - 1) }];
  var _ = s(be2, { parseOnNested: false, parseOnQuoted: true, patterns: [he2] });
  var Pe2 = /\[https?:\/\/[^\s\]]+\.(?:png|jpe?g|gif|svg)(?:\?[^\]\s]+)?(?:\s+https?:\/\/[^\s\]]+)?\]/i;
  var ve2 = /\[https?:\/\/[^\s\]]+\s+https?:\/\/[^\s\]]+\.(?:png|jpe?g|gif|svg)(?:\?[^\]\s]+)?\]/i;
  var ye = /\[https?:\/\/(?:[0-9a-z-]+\.)?gyazo\.com\/[0-9a-f]{32}(?:\/raw)?(?:\s+https?:\/\/[^\s\]]+)?\]/;
  var Te2 = /\[https?:\/\/[^\s\]]+\s+https?:\/\/(?:[0-9a-z-]+\.)?gyazo\.com\/[0-9a-f]{32}(?:\/raw)?\]/;
  var Oe2 = (e) => /^https?:\/\/[^\s\]]+\.(png|jpe?g|gif|svg)(\?[^\]\s]+)?$/i.test(e) || Ie2(e);
  var Ie2 = (e) => /^https?:\/\/([0-9a-z-]\.)?gyazo\.com\/[0-9a-f]{32}(\/raw)?$/.test(e);
  var Re2 = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    let o = e.search(/\s/), r = o !== -1 ? e.substring(1, o) : e.substring(1, e.length - 1), n = o !== -1 ? e.substring(o, e.length - 1).trimLeft() : "", [c, i] = Oe2(n) ? [n, r] : [r, n];
    return [{ type: "image", raw: e, src: /^https?:\/\/([0-9a-z-]\.)?gyazo\.com\/[0-9a-f]{32}$/.test(c) ? `${c}/thumb/1000` : c, link: i }];
  };
  var F2 = s(Re2, { parseOnNested: true, parseOnQuoted: true, patterns: [Pe2, ve2, ye, Te2] });
  var Ee2 = /\[https?:\/\/[^\s\]]+\s+[^\]]*[^\s]\]/;
  var ke2 = /\[[^[\]]*[^\s]\s+https?:\/\/[^\s\]]+\]/;
  var $e2 = /\[https?:\/\/[^\s\]]+\]/;
  var Se2 = /https?:\/\/[^\s]+/;
  var ze = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    let o = e.startsWith("[") && e.endsWith("]") ? e.substring(1, e.length - 1) : e, r = /^https?:\/\/[^\s\]]/.test(o), n = (r ? /^https?:\/\/[^\s\]]+/ : /https?:\/\/[^\s\]]+$/).exec(o);
    if (n?.[0] === void 0)
      return [];
    let c = r ? o.substring(n[0].length) : o.substring(0, n.index - 1);
    return [{ type: "link", raw: e, pathType: "absolute", href: n[0], content: c.trim() }];
  };
  var C = s(ze, { parseOnNested: true, parseOnQuoted: true, patterns: [Ee2, ke2, $e2, Se2] });
  var W2 = /\[([^\]]*[^\s])\s+([NS]\d+(?:\.\d+)?,[EW]\d+(?:\.\d+)?(?:,Z\d+)?)\]/;
  var B2 = /\[([NS]\d+(?:\.\d+)?,[EW]\d+(?:\.\d+)?(?:,Z\d+)?)(?:\s+([^\]]*[^\s]))?\]/;
  var Qe2 = (e) => {
    let [t = "", o = "", r = ""] = e.split(","), n = parseFloat(t.replace(/^N/, "").replace(/^S/, "-")), c = parseFloat(o.replace(/^E/, "").replace(/^W/, "-")), i = /^Z\d+$/.test(r) ? parseInt(r.replace(/^Z/, ""), 10) : 14;
    return { latitude: n, longitude: c, zoom: i };
  };
  var Le2 = (e, t) => {
    var o;
    if (t.context === "table")
      return a(e, t);
    let r = (o = e.match(W2)) !== null && o !== void 0 ? o : e.match(B2);
    if (r === null)
      return [];
    let n = e.startsWith("[N") || e.startsWith("[S"), [, c = "", i = ""] = n ? r : [r[0], r[2], r[1]], { latitude: p, longitude: l, zoom: m } = Qe2(c), u = i !== "" ? `https://www.google.com/maps/place/${encodeURIComponent(i)}/@${p},${l},${m}z` : `https://www.google.com/maps/@${p},${l},${m}z`;
    return [{ type: "googleMap", raw: e, latitude: p, longitude: l, zoom: m, place: i, url: u }];
  };
  var G2 = s(Le2, { parseOnNested: false, parseOnQuoted: true, patterns: [W2, B2] });
  var _e = /\[\/?[^[\]]+\]/;
  var Fe2 = (e) => {
    let t = e.substring(1, e.length - 1);
    return [{ type: "link", raw: e, pathType: t.startsWith("/") ? "root" : "relative", href: t, content: "" }];
  };
  var H2 = s(Fe2, { parseOnNested: true, parseOnQuoted: true, patterns: [_e] });
  var Ce2 = /(?:^|\s)#\S+/;
  var We = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    if (e.startsWith("#"))
      return [{ type: "hashTag", raw: e, href: e.substring(1) }];
    let o = e.substring(0, 1), r = e.substring(1);
    return [...a(o, t), { type: "hashTag", raw: r, href: r.substring(1) }];
  };
  var M2 = s(We, { parseOnNested: true, parseOnQuoted: true, patterns: [Ce2] });
  var Be2 = /^[0-9]+\. .*$/;
  var Ge2 = (e, t) => {
    if (t.context === "table")
      return a(e, t);
    let o = e.indexOf(" "), r = e.substring(0, o - 1), n = parseInt(r, 10), c = e.substring(o + 1, e.length);
    return [{ type: "numberList", raw: e, rawNumber: r, number: n, nodes: d(c, { ...t, nested: true }) }];
  };
  var U2 = s(Ge2, { parseOnNested: false, parseOnQuoted: false, patterns: [Be2] });
  var He2 = (e, t, o) => {
    var r;
    return e === "" ? [] : (r = o?.()) !== null && r !== void 0 ? r : [];
  };
  var Me2 = (...e) => (t, o) => e.reduceRight((r, n) => () => n(t, o, r), () => T2(t, o))();
  var d = Me2(He2, O2, I2, Q, L, S2, _, z, R2, k, $, F2, C, E, G2, H2, M2, U2);
  var q = (e) => {
    let { rows: [t, ...o] } = e, { indent: r = 0, text: n = "" } = t ?? {}, c = n.replace(/^\s*table:/, "");
    return { indent: r, type: "table", fileName: c, cells: o.map((i) => i.text.substring(r + 1)).map((i) => i.split("	").map((p) => d(p, { nested: false, quoted: false, context: "table" }))) };
  };
  var j = (e) => {
    let { indent: t, text: o } = e.rows[0];
    return { indent: t, type: "line", nodes: d(o.substring(t), { nested: false, quoted: false, context: "line" }) };
  };
  var h = (e) => {
    switch (e.type) {
      case "title":
        return v(e);
      case "codeBlock":
        return y2(e);
      case "table":
        return q(e);
      case "line":
        return j(e);
    }
  };
  var b = (e) => e.split(`
`).map((t) => {
    var o, r, n;
    return { indent: (n = (r = (o = /^\s+/.exec(t)) === null || o === void 0 ? void 0 : o[0]) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : 0, text: t };
  });
  var Ue2 = (e, t) => {
    var o, r;
    return (e.type === "codeBlock" || e.type === "table") && t.indent > ((r = (o = e.rows[0]) === null || o === void 0 ? void 0 : o.indent) !== null && r !== void 0 ? r : 0);
  };
  var D2 = (e, t) => {
    let o = e[e.length - 1];
    return o !== void 0 && Ue2(o, t) ? (o.rows.push(t), e) : (e.push({ type: /^\s*code:/.test(t.text) ? "codeBlock" : /^\s*table:/.test(t.text) ? "table" : "line", rows: [t] }), e);
  };
  var P2 = (e, t) => {
    var o;
    if (!((o = t.hasTitle) !== null && o !== void 0) || o) {
      let [r, ...n] = e;
      return r === void 0 ? [] : [{ type: "title", rows: [r] }, ...n.reduce(D2, [])];
    }
    return e.reduce(D2, []);
  };
  var qe2 = (e, t) => {
    var o;
    let r = b(e);
    return P2(r, { hasTitle: (o = t?.hasTitle) !== null && o !== void 0 ? o : true }).map(h);
  };
  var je2 = (e) => {
    var t, o;
    let r = /^\s*\S.*$/m.exec(e);
    return (o = (t = r?.[0]) === null || t === void 0 ? void 0 : t.trim()) !== null && o !== void 0 ? o : "Untitled";
  };

  // deno:https://deno.land/std@0.140.0/_util/assert.ts
  var DenoStdInternalError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "DenoStdInternalError";
    }
  };
  function assert(expr, msg = "") {
    if (!expr) {
      throw new DenoStdInternalError(msg);
    }
  }

  // deno:https://deno.land/std@0.140.0/bytes/mod.ts
  function copy(src, dst, off = 0) {
    off = Math.max(0, Math.min(off, dst.byteLength));
    const dstBytesAvailable = dst.byteLength - off;
    if (src.byteLength > dstBytesAvailable) {
      src = src.subarray(0, dstBytesAvailable);
    }
    dst.set(src, off);
    return src.byteLength;
  }

  // deno:https://deno.land/std@0.140.0/io/buffer.ts
  var MIN_READ = 32 * 1024;
  var MAX_SIZE = 2 ** 32 - 2;
  var Buffer2 = class {
    #buf;
    #off = 0;
    constructor(ab2) {
      this.#buf = ab2 === void 0 ? new Uint8Array(0) : new Uint8Array(ab2);
    }
    bytes(options = { copy: true }) {
      if (options.copy === false)
        return this.#buf.subarray(this.#off);
      return this.#buf.slice(this.#off);
    }
    empty() {
      return this.#buf.byteLength <= this.#off;
    }
    get length() {
      return this.#buf.byteLength - this.#off;
    }
    get capacity() {
      return this.#buf.buffer.byteLength;
    }
    truncate(n) {
      if (n === 0) {
        this.reset();
        return;
      }
      if (n < 0 || n > this.length) {
        throw Error("bytes.Buffer: truncation out of range");
      }
      this.#reslice(this.#off + n);
    }
    reset() {
      this.#reslice(0);
      this.#off = 0;
    }
    #tryGrowByReslice(n) {
      const l = this.#buf.byteLength;
      if (n <= this.capacity - l) {
        this.#reslice(l + n);
        return l;
      }
      return -1;
    }
    #reslice(len) {
      assert(len <= this.#buf.buffer.byteLength);
      this.#buf = new Uint8Array(this.#buf.buffer, 0, len);
    }
    readSync(p) {
      if (this.empty()) {
        this.reset();
        if (p.byteLength === 0) {
          return 0;
        }
        return null;
      }
      const nread = copy(this.#buf.subarray(this.#off), p);
      this.#off += nread;
      return nread;
    }
    read(p) {
      const rr = this.readSync(p);
      return Promise.resolve(rr);
    }
    writeSync(p) {
      const m = this.#grow(p.byteLength);
      return copy(p, this.#buf, m);
    }
    write(p) {
      const n = this.writeSync(p);
      return Promise.resolve(n);
    }
    #grow(n) {
      const m = this.length;
      if (m === 0 && this.#off !== 0) {
        this.reset();
      }
      const i = this.#tryGrowByReslice(n);
      if (i >= 0) {
        return i;
      }
      const c = this.capacity;
      if (n <= Math.floor(c / 2) - m) {
        copy(this.#buf.subarray(this.#off), this.#buf);
      } else if (c + n > MAX_SIZE) {
        throw new Error("The buffer cannot be grown beyond the maximum size.");
      } else {
        const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
        copy(this.#buf.subarray(this.#off), buf);
        this.#buf = buf;
      }
      this.#off = 0;
      this.#reslice(Math.min(m + n, MAX_SIZE));
      return m;
    }
    grow(n) {
      if (n < 0) {
        throw Error("Buffer.grow: negative count");
      }
      const m = this.#grow(n);
      this.#reslice(m);
    }
    async readFrom(r) {
      let n = 0;
      const tmp = new Uint8Array(MIN_READ);
      while (true) {
        const shouldGrow = this.capacity - this.length < MIN_READ;
        const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
        const nread = await r.read(buf);
        if (nread === null) {
          return n;
        }
        if (shouldGrow)
          this.writeSync(buf.subarray(0, nread));
        else
          this.#reslice(this.length + nread);
        n += nread;
      }
    }
    readFromSync(r) {
      let n = 0;
      const tmp = new Uint8Array(MIN_READ);
      while (true) {
        const shouldGrow = this.capacity - this.length < MIN_READ;
        const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
        const nread = r.readSync(buf);
        if (nread === null) {
          return n;
        }
        if (shouldGrow)
          this.writeSync(buf.subarray(0, nread));
        else
          this.#reslice(this.length + nread);
        n += nread;
      }
    }
  };
  var DEFAULT_BUF_SIZE = 4096;
  var MIN_BUF_SIZE = 16;
  var MAX_CONSECUTIVE_EMPTY_READS = 100;
  var CR = "\r".charCodeAt(0);
  var LF = "\n".charCodeAt(0);
  var BufferFullError = class extends Error {
    constructor(partial) {
      super("Buffer full");
      this.partial = partial;
      this.name = "BufferFullError";
    }
  };
  var PartialReadError = class extends Error {
    constructor() {
      super("Encountered UnexpectedEof, data only partially read");
      this.name = "PartialReadError";
    }
  };
  var BufReader = class {
    #buf;
    #rd;
    #r = 0;
    #w = 0;
    #eof = false;
    static create(r, size = DEFAULT_BUF_SIZE) {
      return r instanceof BufReader ? r : new BufReader(r, size);
    }
    constructor(rd2, size = DEFAULT_BUF_SIZE) {
      if (size < MIN_BUF_SIZE) {
        size = MIN_BUF_SIZE;
      }
      this.#reset(new Uint8Array(size), rd2);
    }
    size() {
      return this.#buf.byteLength;
    }
    buffered() {
      return this.#w - this.#r;
    }
    #fill = async () => {
      if (this.#r > 0) {
        this.#buf.copyWithin(0, this.#r, this.#w);
        this.#w -= this.#r;
        this.#r = 0;
      }
      if (this.#w >= this.#buf.byteLength) {
        throw Error("bufio: tried to fill full buffer");
      }
      for (let i = MAX_CONSECUTIVE_EMPTY_READS; i > 0; i--) {
        const rr = await this.#rd.read(this.#buf.subarray(this.#w));
        if (rr === null) {
          this.#eof = true;
          return;
        }
        assert(rr >= 0, "negative read");
        this.#w += rr;
        if (rr > 0) {
          return;
        }
      }
      throw new Error(`No progress after ${MAX_CONSECUTIVE_EMPTY_READS} read() calls`);
    };
    reset(r) {
      this.#reset(this.#buf, r);
    }
    #reset = (buf, rd2) => {
      this.#buf = buf;
      this.#rd = rd2;
      this.#eof = false;
    };
    async read(p) {
      let rr = p.byteLength;
      if (p.byteLength === 0)
        return rr;
      if (this.#r === this.#w) {
        if (p.byteLength >= this.#buf.byteLength) {
          const rr2 = await this.#rd.read(p);
          const nread = rr2 ?? 0;
          assert(nread >= 0, "negative read");
          return rr2;
        }
        this.#r = 0;
        this.#w = 0;
        rr = await this.#rd.read(this.#buf);
        if (rr === 0 || rr === null)
          return rr;
        assert(rr >= 0, "negative read");
        this.#w += rr;
      }
      const copied = copy(this.#buf.subarray(this.#r, this.#w), p, 0);
      this.#r += copied;
      return copied;
    }
    async readFull(p) {
      let bytesRead = 0;
      while (bytesRead < p.length) {
        try {
          const rr = await this.read(p.subarray(bytesRead));
          if (rr === null) {
            if (bytesRead === 0) {
              return null;
            } else {
              throw new PartialReadError();
            }
          }
          bytesRead += rr;
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = p.subarray(0, bytesRead);
          } else if (err instanceof Error) {
            const e = new PartialReadError();
            e.partial = p.subarray(0, bytesRead);
            e.stack = err.stack;
            e.message = err.message;
            e.cause = err.cause;
            throw err;
          }
          throw err;
        }
      }
      return p;
    }
    async readByte() {
      while (this.#r === this.#w) {
        if (this.#eof)
          return null;
        await this.#fill();
      }
      const c = this.#buf[this.#r];
      this.#r++;
      return c;
    }
    async readString(delim) {
      if (delim.length !== 1) {
        throw new Error("Delimiter should be a single character");
      }
      const buffer = await this.readSlice(delim.charCodeAt(0));
      if (buffer === null)
        return null;
      return new TextDecoder().decode(buffer);
    }
    async readLine() {
      let line = null;
      try {
        line = await this.readSlice(LF);
      } catch (err) {
        if (err instanceof Deno.errors.BadResource) {
          throw err;
        }
        let partial;
        if (err instanceof PartialReadError) {
          partial = err.partial;
          assert(partial instanceof Uint8Array, "bufio: caught error from `readSlice()` without `partial` property");
        }
        if (!(err instanceof BufferFullError)) {
          throw err;
        }
        partial = err.partial;
        if (!this.#eof && partial && partial.byteLength > 0 && partial[partial.byteLength - 1] === CR) {
          assert(this.#r > 0, "bufio: tried to rewind past start of buffer");
          this.#r--;
          partial = partial.subarray(0, partial.byteLength - 1);
        }
        if (partial) {
          return { line: partial, more: !this.#eof };
        }
      }
      if (line === null) {
        return null;
      }
      if (line.byteLength === 0) {
        return { line, more: false };
      }
      if (line[line.byteLength - 1] == LF) {
        let drop = 1;
        if (line.byteLength > 1 && line[line.byteLength - 2] === CR) {
          drop = 2;
        }
        line = line.subarray(0, line.byteLength - drop);
      }
      return { line, more: false };
    }
    async readSlice(delim) {
      let s2 = 0;
      let slice;
      while (true) {
        let i = this.#buf.subarray(this.#r + s2, this.#w).indexOf(delim);
        if (i >= 0) {
          i += s2;
          slice = this.#buf.subarray(this.#r, this.#r + i + 1);
          this.#r += i + 1;
          break;
        }
        if (this.#eof) {
          if (this.#r === this.#w) {
            return null;
          }
          slice = this.#buf.subarray(this.#r, this.#w);
          this.#r = this.#w;
          break;
        }
        if (this.buffered() >= this.#buf.byteLength) {
          this.#r = this.#w;
          const oldbuf = this.#buf;
          const newbuf = this.#buf.slice(0);
          this.#buf = newbuf;
          throw new BufferFullError(oldbuf);
        }
        s2 = this.#w - this.#r;
        try {
          await this.#fill();
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = slice;
          } else if (err instanceof Error) {
            const e = new PartialReadError();
            e.partial = slice;
            e.stack = err.stack;
            e.message = err.message;
            e.cause = err.cause;
            throw err;
          }
          throw err;
        }
      }
      return slice;
    }
    async peek(n) {
      if (n < 0) {
        throw Error("negative count");
      }
      let avail = this.#w - this.#r;
      while (avail < n && avail < this.#buf.byteLength && !this.#eof) {
        try {
          await this.#fill();
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = this.#buf.subarray(this.#r, this.#w);
          } else if (err instanceof Error) {
            const e = new PartialReadError();
            e.partial = this.#buf.subarray(this.#r, this.#w);
            e.stack = err.stack;
            e.message = err.message;
            e.cause = err.cause;
            throw err;
          }
          throw err;
        }
        avail = this.#w - this.#r;
      }
      if (avail === 0 && this.#eof) {
        return null;
      } else if (avail < n && this.#eof) {
        return this.#buf.subarray(this.#r, this.#r + avail);
      } else if (avail < n) {
        throw new BufferFullError(this.#buf.subarray(this.#r, this.#w));
      }
      return this.#buf.subarray(this.#r, this.#r + n);
    }
  };
  var AbstractBufBase = class {
    constructor(buf) {
      this.usedBufferBytes = 0;
      this.err = null;
      this.buf = buf;
    }
    size() {
      return this.buf.byteLength;
    }
    available() {
      return this.buf.byteLength - this.usedBufferBytes;
    }
    buffered() {
      return this.usedBufferBytes;
    }
  };
  var BufWriter = class extends AbstractBufBase {
    #writer;
    static create(writer, size = DEFAULT_BUF_SIZE) {
      return writer instanceof BufWriter ? writer : new BufWriter(writer, size);
    }
    constructor(writer, size = DEFAULT_BUF_SIZE) {
      super(new Uint8Array(size <= 0 ? DEFAULT_BUF_SIZE : size));
      this.#writer = writer;
    }
    reset(w2) {
      this.err = null;
      this.usedBufferBytes = 0;
      this.#writer = w2;
    }
    async flush() {
      if (this.err !== null)
        throw this.err;
      if (this.usedBufferBytes === 0)
        return;
      try {
        const p = this.buf.subarray(0, this.usedBufferBytes);
        let nwritten = 0;
        while (nwritten < p.length) {
          nwritten += await this.#writer.write(p.subarray(nwritten));
        }
      } catch (e) {
        if (e instanceof Error) {
          this.err = e;
        }
        throw e;
      }
      this.buf = new Uint8Array(this.buf.length);
      this.usedBufferBytes = 0;
    }
    async write(data) {
      if (this.err !== null)
        throw this.err;
      if (data.length === 0)
        return 0;
      let totalBytesWritten = 0;
      let numBytesWritten = 0;
      while (data.byteLength > this.available()) {
        if (this.buffered() === 0) {
          try {
            numBytesWritten = await this.#writer.write(data);
          } catch (e) {
            if (e instanceof Error) {
              this.err = e;
            }
            throw e;
          }
        } else {
          numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
          this.usedBufferBytes += numBytesWritten;
          await this.flush();
        }
        totalBytesWritten += numBytesWritten;
        data = data.subarray(numBytesWritten);
      }
      numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
      this.usedBufferBytes += numBytesWritten;
      totalBytesWritten += numBytesWritten;
      return totalBytesWritten;
    }
  };
  var BufWriterSync = class extends AbstractBufBase {
    #writer;
    static create(writer, size = DEFAULT_BUF_SIZE) {
      return writer instanceof BufWriterSync ? writer : new BufWriterSync(writer, size);
    }
    constructor(writer, size = DEFAULT_BUF_SIZE) {
      super(new Uint8Array(size <= 0 ? DEFAULT_BUF_SIZE : size));
      this.#writer = writer;
    }
    reset(w2) {
      this.err = null;
      this.usedBufferBytes = 0;
      this.#writer = w2;
    }
    flush() {
      if (this.err !== null)
        throw this.err;
      if (this.usedBufferBytes === 0)
        return;
      try {
        const p = this.buf.subarray(0, this.usedBufferBytes);
        let nwritten = 0;
        while (nwritten < p.length) {
          nwritten += this.#writer.writeSync(p.subarray(nwritten));
        }
      } catch (e) {
        if (e instanceof Error) {
          this.err = e;
        }
        throw e;
      }
      this.buf = new Uint8Array(this.buf.length);
      this.usedBufferBytes = 0;
    }
    writeSync(data) {
      if (this.err !== null)
        throw this.err;
      if (data.length === 0)
        return 0;
      let totalBytesWritten = 0;
      let numBytesWritten = 0;
      while (data.byteLength > this.available()) {
        if (this.buffered() === 0) {
          try {
            numBytesWritten = this.#writer.writeSync(data);
          } catch (e) {
            if (e instanceof Error) {
              this.err = e;
            }
            throw e;
          }
        } else {
          numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
          this.usedBufferBytes += numBytesWritten;
          this.flush();
        }
        totalBytesWritten += numBytesWritten;
        data = data.subarray(numBytesWritten);
      }
      numBytesWritten = copy(data, this.buf, this.usedBufferBytes);
      this.usedBufferBytes += numBytesWritten;
      totalBytesWritten += numBytesWritten;
      return totalBytesWritten;
    }
  };

  // deno:https://deno.land/std@0.140.0/streams/conversion.ts
  var DEFAULT_BUFFER_SIZE = 32 * 1024;

  // deno:https://deno.land/std@0.140.0/fmt/colors.ts
  var { Deno: Deno2 } = globalThis;
  var noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : true;
  var ANSI_PATTERN = new RegExp([
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|"), "g");

  // deno:https://deno.land/std@0.140.0/testing/_diff.ts
  var DiffType;
  (function(DiffType2) {
    DiffType2["removed"] = "removed";
    DiffType2["common"] = "common";
    DiffType2["added"] = "added";
  })(DiffType || (DiffType = {}));

  // deno:https://deno.land/std@0.140.0/io/files.ts
  var DEFAULT_BUFFER_SIZE2 = 32 * 1024;

  // deno:https://deno.land/std@0.140.0/io/util.ts
  var DEFAULT_BUFFER_SIZE3 = 32 * 1024;
  var MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

  // deno:https://deno.land/std@0.140.0/io/writers.ts
  var decoder = new TextDecoder();

  // deno:https://raw.githubusercontent.com/fabon-f/sb2re/master/mod.ts
  function generateReView(ast, option = {}) {
    const baseHeadingLevel = option.baseHeadingLevel || 3;
    const logger2 = option.logger || {
      error(message) {
        console.error(message);
      },
      warn(message) {
        console.warn(message);
      }
    };
    let out = "";
    const state = {
      inItemization: false,
      inBlockQuote: false
    };
    for (const n of ast) {
      if (n.type === "title") {
        out += `= ${n.text}`;
        out += "\n\n";
      } else {
        if (n.indent === 0 && state.inItemization) {
          state.inItemization = false;
          out += "\n";
        }
        if (!(n.type === "line" && n.indent === 0 && n.nodes.length !== 0 && n.nodes[0].type === "quote") && state.inBlockQuote) {
          state.inBlockQuote = false;
          out += "//}\n\n";
        }
        if (n.type === "line" && n.indent === 0 && n.nodes.length !== 0 && n.nodes[0].type === "quote") {
          if (!state.inBlockQuote) {
            state.inBlockQuote = true;
            out += "//quote{\n";
          }
          out += `${n.nodes[0].nodes.map((n2) => nodeToReView(n2, logger2)).join("")}
`;
          continue;
        }
        if (n.indent !== 0) {
          if (!state.inItemization) {
            state.inItemization = true;
          }
          if (n.type === "line") {
            const lineContent = n.nodes.map((n2) => nodeToReView(n2, logger2)).join("");
            out += ` ${"*".repeat(n.indent)} ${lineContent}
`;
            continue;
          } else {
            if (n.type === "table") {
              logger2.error(`Table inside itemization not supported: ${n.fileName}`);
            }
            if (n.type === "codeBlock") {
              logger2.error(`Code block inside itemization not supported: ${n.fileName}`);
            }
            out += ` ${"*".repeat(n.indent)}
`;
            continue;
          }
        }
        if (n.type === "codeBlock" && n.indent === 0) {
          out += `//emlist[${escapeBlockCommandOption(n.fileName)}]{
${n.content}
//}

`;
          continue;
        }
        if (n.type === "table" && n.indent === 0) {
          out += `${generateReViewTable(n, logger2)}

`;
          continue;
        }
        if (n.type === "line" && n.indent === 0 && n.nodes.length !== 0 && n.nodes[0].type === "commandLine") {
          out += `//cmd{
${n.nodes[0].raw}
//}

`;
          continue;
        }
        if (n.type === "line" && n.indent !== 0 && n.nodes.length !== 0 && n.nodes[0].type === "quote") {
          logger2.error(`Blockquote inside itemization not supported: ${n.nodes[0].raw}`);
        }
        if (n.type === "line" && n.nodes.length === 1 && n.nodes[0].type === "decoration" && n.nodes[0].rawDecos != "*" && /^\*+$/.test(n.nodes[0].rawDecos)) {
          const boldNode = n.nodes[0];
          if (boldNode.rawDecos.length <= baseHeadingLevel) {
            const header = "=".repeat(baseHeadingLevel + 2 - boldNode.rawDecos.length);
            if (boldNode.nodes[0].type !== "plain") {
              throw new Error("inside header");
            }
            out += `${header} ${boldNode.nodes[0].text}`;
            out += "\n\n";
            continue;
          }
        }
        if (n.type === "line" && n.nodes.length === 1 && (n.nodes[0].type === "image" || n.nodes[0].type === "strongImage")) {
          out += `//indepimage[${escapeBlockCommandOption(n.nodes[0].src)}]

`;
          continue;
        }
        if (n.type === "line" && n.nodes.length === 1 && n.nodes[0].type === "formula") {
          out += `//texequation{
${n.nodes[0].formula}
//}`;
          continue;
        }
        if (n.type === "line") {
          out += n.nodes.map((n2) => nodeToReView(n2, logger2)).join("");
          out += "\n\n";
        }
      }
    }
    return out.replaceAll(/\n{2,}/g, "\n\n").replace(/\n*$/, "\n");
  }
  function generateReViewTable(node, logger2) {
    const headerColumns = node.cells[0];
    if (headerColumns === void 0) {
      return `//emtable[${escapeBlockCommandOption(node.fileName)}]{
//}`;
    }
    const headerText = generateReViewTableColumn(headerColumns, logger2);
    const borderText = "------------";
    return `//emtable[${escapeBlockCommandOption(node.fileName)}]{
${headerText}
${borderText}
${node.cells.slice(1).map((column) => generateReViewTableColumn(column, logger2)).join("\n")}
//}`;
  }
  function generateReViewTableColumn(column, logger2) {
    return column.map((cell) => cell.map((n) => nodeToReView(n, logger2)).join("")).join("	");
  }
  function nodeToReView(node, logger2) {
    if (node.type === "link") {
      if (node.pathType === "relative") {
        logger2.error(`Can't convert relative links. Please use absolute links instead: ${node.raw}`);
        return node.raw;
      }
      if (node.pathType === "root") {
        logger2.warn(`An internal link to a Scrapbox's page is used: ${node.raw}`);
        const href = new URL(node.href, "https://scrapbox.io").href;
        return `@<href>{${escapeHrefUrl(href)}}`;
      }
      return node.content === "" ? `@<href>{${escapeHrefUrl(node.href)}}` : `@<href>{${escapeHrefUrl(node.href)}, ${escapeHrefUrl(node.content)}}`;
    } else if (node.type === "hashTag") {
      logger2.error(`Can't convert relative links. Please use absolute links instead: ${node.raw}`);
      return node.raw;
    } else if (node.type === "strong") {
      return `@<strong>{${escapeInlineCommand(node.nodes.map((n) => nodeToReView(n, logger2)).join(""))}}`;
    } else if (node.type === "decoration") {
      return node.decos.reduce((inside, decoration) => {
        if (/\*-[0-9]*/.test(decoration)) {
          return `@<strong>{${inside}}`;
        } else if (decoration === "/") {
          return `@<i>{${inside}}`;
        } else if (decoration === "-") {
          return `@<del>{${inside}}`;
        }
        return inside;
      }, escapeInlineCommand(node.nodes.map((n) => nodeToReView(n, logger2)).join("")));
    } else if (node.type === "code") {
      return `@<code>{${escapeInlineCommand(node.text)}}`;
    } else if (node.type === "formula") {
      return `@<m>{${escapeInlineCommand(node.formula)}}`;
    } else if (node.type === "image") {
      return `@<icon>{${escapeInlineCommand(node.src)}}`;
    } else if (node.type === "plain") {
      return node.text;
    } else if (node.type === "icon" || node.type === "strongIcon") {
      logger2.warn(`An icon is used: ${node.raw}`);
      return `@<icon>{${node.path}.icon}`;
    } else {
      logger2.error(`Unsupported syntax: ${node.raw}`);
      return node.raw;
    }
  }
  function escapeInlineCommand(content) {
    return content.replaceAll("}", "\\}").replace(/\\$/, "\\\\");
  }
  function escapeHrefUrl(href) {
    return escapeInlineCommand(href).replaceAll(",", "\\,");
  }
  function escapeBlockCommandOption(option) {
    return option.replaceAll("]", "\\]");
  }
  function scrapboxToReView(src, option = {}) {
    const ast = scrapbox_parser_8_0_exports.parse(src + "\n", option);
    return generateReView(ast, option);
  }

  // deno:file:///home/runner/work/sb2re-online/sb2re-online/app.tsx
  var sampleTxt = `\u30B5\u30F3\u30D7\u30EB
[*** Online Scrapbox to Re:VIEW Converter]
 [* Scrapbox \u8A18\u6CD5]\u304B\u3089 [* Re:VIEW \u8A18\u6CD5]\u3078\u5909\u63DB\u3057\u307E\u3059
 \`sb2re\`\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059
  [fabon-f/sb2re https://github.com/fabon-f/sb2re]
`;
  var logger = {
    error(message) {
      throw new Error(message);
    },
    warn(message) {
      console.warn(message);
    }
  };
  function App() {
    const { register, watch } = useForm();
    const watchText = watch("text", sampleTxt);
    const watchBaseLevel = Number(watch("baselevel", 3));
    return /* @__PURE__ */ react_default.createElement("div", {
      id: "app"
    }, /* @__PURE__ */ react_default.createElement(ReactNotifications, null), /* @__PURE__ */ react_default.createElement("div", {
      class: "nav"
    }, /* @__PURE__ */ react_default.createElement("h1", null, "sb2re-online: Online Scrapbox to Re:VIEW Converter"), /* @__PURE__ */ react_default.createElement("p", {
      id: "baseheadinglevel"
    }, /* @__PURE__ */ react_default.createElement("label", {
      for: "baseheadinglevel"
    }, "Base heading level (treated as a section): "), /* @__PURE__ */ react_default.createElement("input", {
      type: "number",
      min: "1",
      defaultValue: watchBaseLevel,
      ...register("baselevel")
    })), /* @__PURE__ */ react_default.createElement("a", {
      href: "https://github.com/kn1cht/sb2re-online",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /* @__PURE__ */ react_default.createElement("img", {
      src: "https://icongr.am/fontawesome/github.svg?size=24&color=ffffff"
    }), /* @__PURE__ */ react_default.createElement("span", null, "sb2re-online"))), /* @__PURE__ */ react_default.createElement("div", {
      class: "editor"
    }, /* @__PURE__ */ react_default.createElement("div", {
      class: "editor_wrapper"
    }, /* @__PURE__ */ react_default.createElement("textarea", {
      value: watchText,
      ...register("text"),
      class: "input"
    })), /* @__PURE__ */ react_default.createElement("div", {
      class: "editor_wrapper"
    }, /* @__PURE__ */ react_default.createElement("textarea", {
      value: executeSb2re(watchText, { baseHeadingLevel: watchBaseLevel, logger }),
      class: "output"
    }))));
  }
  function executeSb2re(watchText, option) {
    let converted = "";
    try {
      converted = scrapboxToReView(watchText, option);
    } catch (e) {
      Store.addNotification({
        title: "Please fix your Scrapbox syntax",
        message: e.toString(),
        type: "danger",
        container: "bottom-left",
        dismiss: {
          duration: 6e3,
          onScreen: true,
          showIcon: true
        }
      });
    }
    return converted;
  }
  addEventListener("DOMContentLoaded", () => react_dom_default.render(/* @__PURE__ */ react_default.createElement(App, null), document.querySelector("#main")));
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
