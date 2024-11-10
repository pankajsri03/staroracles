// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/astrochart.js":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, s) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = s() : "function" == typeof define && define.amd ? define([], s) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.astrochart = s() : t.astrochart = s();
}(self, function () {
  return function () {
    "use strict";

    var t = {
        d: function d(s, e) {
          for (var i in e) t.o(e, i) && !t.o(s, i) && Object.defineProperty(s, i, {
            enumerable: !0,
            get: e[i]
          });
        },
        o: function o(t, s) {
          return Object.prototype.hasOwnProperty.call(t, s);
        },
        r: function r(t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }
      },
      s = {};
    t.r(s), t.d(s, {
      AspectCalculator: function AspectCalculator() {
        return _;
      },
      Chart: function Chart() {
        return m;
      },
      default: function _default() {
        return R;
      }
    });
    var e = {
      SYMBOL_SCALE: 1.3,
      COLOR_BACKGROUND: "#fff",
      POINTS_COLOR: "#000",
      POINTS_TEXT_SIZE: 8,
      POINTS_STROKE: 1.8,
      SIGNS_COLOR: "#000",
      SIGNS_STROKE: 1.5,
      MARGIN: 50,
      PADDING: 18,
      ID_CHART: "astrology",
      ID_RADIX: "radix",
      ID_TRANSIT: "transit",
      ID_ASPECTS: "aspects",
      ID_POINTS: "planets",
      ID_SIGNS: "signs",
      ID_CIRCLES: "circles",
      ID_AXIS: "axis",
      ID_CUSPS: "cusps",
      ID_RULER: "ruler",
      ID_BG: "bg",
      CIRCLE_COLOR: "#333",
      CIRCLE_STRONG: 2,
      LINE_COLOR: "#333",
      INDOOR_CIRCLE_RADIUS_RATIO: 2,
      INNER_CIRCLE_RADIUS_RATIO: 8,
      RULER_RADIUS: 4,
      SYMBOL_SUN: "Sun",
      SYMBOL_MOON: "Moon",
      SYMBOL_MERCURY: "Mercury",
      SYMBOL_VENUS: "Venus",
      SYMBOL_MARS: "Mars",
      SYMBOL_JUPITER: "Jupiter",
      SYMBOL_SATURN: "Saturn",
      SYMBOL_URANUS: "Uranus",
      SYMBOL_NEPTUNE: "Neptune",
      SYMBOL_PLUTO: "Pluto",
      SYMBOL_CHIRON: "Chiron",
      SYMBOL_LILITH: "Lilith",
      SYMBOL_NNODE: "NNode",
      SYMBOL_SNODE: "SNode",
      SYMBOL_FORTUNE: "Fortune",
      SYMBOL_AS: "As",
      SYMBOL_DS: "Ds",
      SYMBOL_MC: "Mc",
      SYMBOL_IC: "Ic",
      SYMBOL_AXIS_FONT_COLOR: "#333",
      SYMBOL_AXIS_STROKE: 1.6,
      SYMBOL_CUSP_1: "1",
      SYMBOL_CUSP_2: "2",
      SYMBOL_CUSP_3: "3",
      SYMBOL_CUSP_4: "4",
      SYMBOL_CUSP_5: "5",
      SYMBOL_CUSP_6: "6",
      SYMBOL_CUSP_7: "7",
      SYMBOL_CUSP_8: "8",
      SYMBOL_CUSP_9: "9",
      SYMBOL_CUSP_10: "10",
      SYMBOL_CUSP_11: "11",
      SYMBOL_CUSP_12: "12",
      CUSPS_STROKE: 1,
      CUSPS_FONT_COLOR: "#000",
      SYMBOL_ARIES: "Aries",
      SYMBOL_TAURUS: "Taurus",
      SYMBOL_GEMINI: "Gemini",
      SYMBOL_CANCER: "Cancer",
      SYMBOL_LEO: "Leo",
      SYMBOL_VIRGO: "Virgo",
      SYMBOL_LIBRA: "Libra",
      SYMBOL_SCORPIO: "Scorpio",
      SYMBOL_SAGITTARIUS: "Sagittarius",
      SYMBOL_CAPRICORN: "Capricorn",
      SYMBOL_AQUARIUS: "Aquarius",
      SYMBOL_PISCES: "Pisces",
      SYMBOL_SIGNS: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
      COLOR_ARIES: "#FF4500",
      COLOR_TAURUS: "#8B4513",
      COLOR_GEMINI: "#87CEEB",
      COLOR_CANCER: "#27AE60",
      COLOR_LEO: "#FF4500",
      COLOR_VIRGO: "#8B4513",
      COLOR_LIBRA: "#87CEEB",
      COLOR_SCORPIO: "#27AE60",
      COLOR_SAGITTARIUS: "#FF4500",
      COLOR_CAPRICORN: "#8B4513",
      COLOR_AQUARIUS: "#87CEEB",
      COLOR_PISCES: "#27AE60",
      COLORS_SIGNS: ["#FF4500", "#8B4513", "#87CEEB", "#27AE60", "#FF4500", "#8B4513", "#87CEEB", "#27AE60", "#FF4500", "#8B4513", "#87CEEB", "#27AE60"],
      CUSTOM_SYMBOL_FN: null,
      SHIFT_IN_DEGREES: 180,
      STROKE_ONLY: !1,
      ADD_CLICK_AREA: !1,
      COLLISION_RADIUS: 10,
      ASPECTS: {
        conjunction: {
          degree: 0,
          orbit: 10,
          color: "transparent"
        },
        square: {
          degree: 90,
          orbit: 8,
          color: "#FF4500"
        },
        trine: {
          degree: 120,
          orbit: 8,
          color: "#27AE60"
        },
        opposition: {
          degree: 180,
          orbit: 10,
          color: "#27AE60"
        }
      },
      SHOW_DIGNITIES_TEXT: !0,
      DIGNITIES_RULERSHIP: "r",
      DIGNITIES_DETRIMENT: "d",
      DIGNITIES_EXALTATION: "e",
      DIGNITIES_EXACT_EXALTATION: "E",
      DIGNITIES_FALL: "f",
      DIGNITIES_EXACT_EXALTATION_DEFAULT: [{
        name: "Sun",
        position: 19,
        orbit: 2
      }, {
        name: "Moon",
        position: 33,
        orbit: 2
      }, {
        name: "Mercury",
        position: 155,
        orbit: 2
      }, {
        name: "Venus",
        position: 357,
        orbit: 2
      }, {
        name: "Mars",
        position: 298,
        orbit: 2
      }, {
        name: "Jupiter",
        position: 105,
        orbit: 2
      }, {
        name: "Saturn",
        position: 201,
        orbit: 2
      }, {
        name: "NNode",
        position: 63,
        orbit: 2
      }],
      ANIMATION_CUSPS_ROTATION_SPEED: 2,
      DEBUG: !1
    };
    var i = function i(t, s, e, _i, n) {
        var r = (n.SHIFT_IN_DEGREES - _i) * Math.PI / 180;
        return {
          x: t + e * Math.cos(r),
          y: s + e * Math.sin(r)
        };
      },
      n = function n(t) {
        return 180 * t / Math.PI;
      },
      r = function r(t, s, e) {
        var i = [],
          n = t.x + e.COLLISION_RADIUS / 1.4 * e.SYMBOL_SCALE,
          r = t.y - e.COLLISION_RADIUS * e.SYMBOL_SCALE;
        return s.forEach(function (t, s) {
          i.push({
            text: t,
            x: n,
            y: r + e.COLLISION_RADIUS / 1.4 * e.SYMBOL_SCALE * s
          });
        }, this), i;
      },
      h = function h(t) {
        var s = {
          hasError: !1,
          messages: []
        };
        if (null == t) return s.messages.push("Data is not set."), s.hasError = !0, s;
        for (var e in null == t.planets && (s.messages.push("There is not property 'planets'."), s.hasError = !0), t.planets) t.planets.hasOwnProperty(e) && (Array.isArray(t.planets[e]) || (s.messages.push("The planets property '" + e + "' has to be Array."), s.hasError = !0));
        return null == t.cusps || Array.isArray(t.cusps) || (s.messages.push("Property 'cusps' has to be Array."), s.hasError = !0), null != t.cusps && 12 !== t.cusps.length && (s.messages.push("Count of 'cusps' values has to be 12."), s.hasError = !0), s;
      },
      a = function a(t, s, e) {
        var i = document.getElementById(s);
        if (null != i) return o(i), i;
        var n = document.getElementById(e);
        if (null == n) throw new Error("Paper element should exist");
        var r = document.createElementNS(n.namespaceURI, "g");
        return r.setAttribute("id", s), t.appendChild(r), r;
      },
      o = function o(t) {
        if (null != t) for (var s; null != (s = t.lastChild);) t.removeChild(s);
      },
      _S = function S(t, s, e, n) {
        if (0 === t.length) return t.push(s), t;
        if (2 * Math.PI * e.r - n.COLLISION_RADIUS * n.SYMBOL_SCALE * 2 * (t.length + 2) <= 0) throw n.DEBUG && console.log("Universe circumference: " + 2 * Math.PI * e.r + ", Planets circumference: " + n.COLLISION_RADIUS * n.SYMBOL_SCALE * 2 * (t.length + 2)), new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
        var r,
          h,
          a,
          o,
          p,
          g = !1;
        t.sort(c);
        for (var A = 0, L = t.length; A < L; A++) if (a = s, void 0, void 0, o = (h = t[A]).x - a.x, p = h.y - a.y, Math.sqrt(o * o + p * p) <= h.r + a.r) {
          g = !0, (r = t[A]).index = A, n.DEBUG && console.log("Resolve collision: " + r.name + " X " + s.name);
          break;
        }
        if (g && null != r && null != r.index) {
          u(r, s);
          var _ = i(e.cx, e.cy, e.r, r.angle, n);
          r.x = _.x, r.y = _.y, _ = i(e.cx, e.cy, e.r, s.angle, n), s.x = _.x, s.y = _.y, t.splice(r.index, 1), t = _S(t, r, e, n), t = _S(t, s, e, n);
        } else t.push(s);
        return t.sort(c), t;
      },
      u = function u(t, s) {
        var e = void 0 === t.pointer ? t.angle : t.pointer,
          i = void 0 === s.pointer ? s.angle : s.pointer;
        Math.abs(e - i) > 180 && (e = (e + 180) % 360, i = (i + 180) % 360), e <= i ? (t.angle = t.angle - 1, s.angle = s.angle + 1) : e >= i && (t.angle = t.angle + 1, s.angle = s.angle - 1), t.angle = (t.angle + 360) % 360, s.angle = (s.angle + 360) % 360;
      },
      p = function p(t, s, e, n, r, h) {
        for (var a = [], o = n, S = e <= n ? o - Math.abs(n - e) / 2 : o + Math.abs(n - e) / 2, u = 0; u < 360; u++) {
          var p = r + u,
            c = i(t, s, e, p, h),
            g = i(t, s, u % 10 == 0 ? o : S, p, h);
          a.push({
            startX: c.x,
            startY: c.y,
            endX: g.x,
            endY: g.y
          });
        }
        return a;
      },
      c = function c(t, s) {
        return t.angle - s.angle;
      };
    var g = function () {
      function t(t, s) {
        if (null === t) throw new Error("Param 'cusps' must not be empty.");
        if (!Array.isArray(t) || 12 !== t.length) throw new Error("Param 'cusps' is not 12 length Array.");
        this.cusps = t, this.settings = null != s ? s : e;
      }
      return t.prototype.getSign = function (t) {
        var s = t % n(2 * Math.PI);
        return Math.floor(s / 30 + 1);
      }, t.prototype.isRetrograde = function (t) {
        return t < 0;
      }, t.prototype.getHouseNumber = function (t) {
        for (var s = t % n(2 * Math.PI), e = 0, i = this.cusps.length; e < i; e++) if (s >= this.cusps[e] && s < this.cusps[e % (i - 1) + 1]) return e + 1;
        for (e = 0, i = this.cusps.length; e < i; e++) if (this.cusps[e] > this.cusps[e % (i - 1) + 1]) return e + 1;
        throw new Error("Oops, serious error in the method: 'astrology.Zodiac.getHouseNumber'.");
      }, t.prototype.getDignities = function (t, s) {
        if (!t || !t.name || null == t.position) return [];
        var e = [],
          i = this.getSign(t.position);
        switch (t.position, n(2 * Math.PI), t.name) {
          case this.settings.SYMBOL_SUN:
            5 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 11 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 1 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 6 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_MOON:
            4 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 10 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 2 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 8 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_MERCURY:
            3 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 9 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 6 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 12 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_VENUS:
            2 === i || 7 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 1 !== i && 8 !== i || e.push(this.settings.DIGNITIES_DETRIMENT), 12 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 6 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_MARS:
            1 === i || 8 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 2 !== i && 7 !== i || e.push(this.settings.DIGNITIES_DETRIMENT), 10 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 4 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_JUPITER:
            9 === i || 12 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 3 !== i && 6 !== i || e.push(this.settings.DIGNITIES_DETRIMENT), 4 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 10 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_SATURN:
            10 === i || 11 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 4 !== i && 5 !== i || e.push(this.settings.DIGNITIES_DETRIMENT), 7 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 1 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_URANUS:
            11 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 5 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 8 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 2 === i && e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_NEPTUNE:
            12 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 6 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 5 === i || 9 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 11 !== i && 3 !== i || e.push(this.settings.DIGNITIES_FALL);
            break;
          case this.settings.SYMBOL_PLUTO:
            8 === i ? e.push(this.settings.DIGNITIES_RULERSHIP) : 2 === i && e.push(this.settings.DIGNITIES_DETRIMENT), 1 === i ? e.push(this.settings.DIGNITIES_EXALTATION) : 7 === i && e.push(this.settings.DIGNITIES_FALL);
        }
        if (null != s && Array.isArray(s)) for (var r = 0, h = s.length; r < h; r++) t.name === s[r].name && this.hasConjunction(t.position, s[r].position, s[r].orbit) && e.push(this.settings.DIGNITIES_EXACT_EXALTATION);
        return e;
      }, t.prototype.toDMS = function (t) {
        t += .5 / 3600 / 1e4;
        var s = parseInt(t.toString(), 10);
        t = 60 * (t - s);
        var e = parseInt(t.toString(), 10);
        return s + "° " + e + "' " + parseInt((60 * (t - e)).toString(), 10);
      }, t.prototype.hasConjunction = function (t, s, e) {
        var i = !1,
          r = s - e / 2 < 0 ? n(2 * Math.PI) - (s - e / 2) : s - e / 2,
          h = s + e / 2 >= n(2 * Math.PI) ? s + e / 2 - n(2 * Math.PI) : s + e / 2;
        return r > h ? r >= t && t <= r && (i = !0) : r <= t && t <= h && (i = !0), i;
      }, t;
    }();
    var A = {
        conjunction: {
          degree: 0,
          orbit: 10,
          color: "transparent"
        },
        square: {
          degree: 90,
          orbit: 8,
          color: "#FF4500"
        },
        trine: {
          degree: 120,
          orbit: 8,
          color: "#27AE60"
        },
        opposition: {
          degree: 180,
          orbit: 10,
          color: "#27AE60"
        }
      },
      L = function () {
        function t(t, s) {
          var e;
          if (null == t) throw new Error("Param 'toPoint' must not be empty.");
          this.settings = null != s ? s : {}, this.settings.ASPECTS = null !== (e = null == s ? void 0 : s.ASPECTS) && void 0 !== e ? e : A, this.toPoints = t, this.context = this;
        }
        return t.prototype.getToPoints = function () {
          return this.toPoints;
        }, t.prototype.radix = function (t) {
          if (null == t) return [];
          var s = [];
          for (var e in t) if (t.hasOwnProperty(e)) for (var i in this.toPoints) if (this.toPoints.hasOwnProperty(i) && e !== i) for (var n in this.settings.ASPECTS) this.hasAspect(t[e][0], this.toPoints[i][0], this.settings.ASPECTS[n]) && s.push({
            aspect: {
              name: n,
              degree: this.settings.ASPECTS[n].degree,
              orbit: this.settings.ASPECTS[n].orbit,
              color: this.settings.ASPECTS[n].color
            },
            point: {
              name: e,
              position: t[e][0]
            },
            toPoint: {
              name: i,
              position: this.toPoints[i][0]
            },
            precision: this.calcPrecision(t[e][0], this.toPoints[i][0], this.settings.ASPECTS[n].degree).toFixed(4)
          });
          return s.sort(this.compareAspectsByPrecision);
        }, t.prototype.transit = function (t) {
          if (null == t) return [];
          var s = [];
          for (var e in t) if (t.hasOwnProperty(e)) for (var i in this.toPoints) if (this.toPoints.hasOwnProperty(i)) for (var n in this.settings.ASPECTS) if (this.hasAspect(t[e][0], this.toPoints[i][0], this.settings.ASPECTS[n])) {
            var r = this.calcPrecision(t[e][0], this.toPoints[i][0], this.settings.ASPECTS[n].degree);
            this.isTransitPointApproachingToAspect(this.settings.ASPECTS[n].degree, this.toPoints[i][0], t[e][0]) && (r *= -1), t[e][1] && t[e][1] < 0 && (r *= -1), s.push({
              aspect: {
                name: n,
                degree: this.settings.ASPECTS[n].degree,
                orbit: this.settings.ASPECTS[n].orbit,
                color: this.settings.ASPECTS[n].color
              },
              point: {
                name: e,
                position: t[e][0]
              },
              toPoint: {
                name: i,
                position: this.toPoints[i][0]
              },
              precision: r.toFixed(4)
            });
          }
          return s.sort(this.compareAspectsByPrecision);
        }, t.prototype.hasAspect = function (t, s, e) {
          var i = !1,
            r = Math.abs(t - s);
          r > n(Math.PI) && (r = n(2 * Math.PI) - r);
          var h = e.degree - e.orbit / 2,
            a = e.degree + e.orbit / 2;
          return h <= r && r <= a && (i = !0), i;
        }, t.prototype.calcPrecision = function (t, s, e) {
          var i = Math.abs(t - s);
          return i > n(Math.PI) && (i = n(2 * Math.PI) - i), Math.abs(i - e);
        }, t.prototype.isTransitPointApproachingToAspect = function (t, s, e) {
          e - s > 0 ? e - s > n(Math.PI) ? e = (e + t) % n(2 * Math.PI) : s = (s + t) % n(2 * Math.PI) : s - e > n(Math.PI) ? s = (s + t) % n(2 * Math.PI) : e = (e + t) % n(2 * Math.PI);
          var i = e,
            r = s,
            h = i - r;
          return Math.abs(h) > n(Math.PI) && (i = s, r = e), i - r < 0;
        }, t.prototype.compareAspectsByPrecision = function (t, s) {
          return parseFloat(t.precision) - parseFloat(s.precision);
        }, t;
      }();
    var _ = L,
      O = function () {
        function t(t, s) {
          if ("function" != typeof t) throw new Error("param 'callback' has to be a function.");
          this.debug = s, this.callback = t, this.boundTick_ = this.tick.bind(this);
        }
        return t.prototype.start = function () {
          this.requestID_ || (this.lastGameLoopFrame = new Date().getTime(), this.tick(), this.debug && console.log("[astrology.Timer] start"));
        }, t.prototype.stop = function () {
          this.requestID_ && (window.cancelAnimationFrame(this.requestID_), this.requestID_ = void 0, this.debug && console.log("[astrology.Timer] stop"));
        }, t.prototype.isRunning = function () {
          return !!this.requestID_;
        }, t.prototype.tick = function () {
          var t = new Date().getTime();
          this.requestID_ = window.requestAnimationFrame(this.boundTick_), this.callback(t - this.lastGameLoopFrame), this.lastGameLoopFrame = t;
        }, t;
      }();
    var d = function () {
      function t(t, s) {
        for (var e in this.transit = t, this.isReverse = !1, this.rotation = 0, this.settings = s, this.actualPlanetPos = {}, this.transit.data.planets) this.transit.data.planets.hasOwnProperty(e) && (this.actualPlanetPos[e] = this.transit.data.planets[e]);
        this.timer = new O(this.update.bind(this), this.settings.DEBUG), this.timeSinceLoopStart = 0, this.context = this, this.cuspsElement = null;
      }
      return t.prototype.animate = function (t, s, e, i) {
        this.data = t, this.duration = 1e3 * s, this.isReverse = e || !1, this.callback = i, this.rotation = 0, this.cuspsElement = document.getElementById(this.transit.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CUSPS), this.timer.start();
      }, t.prototype.update = function (t) {
        if (t = null != t ? t : 1, this.timeSinceLoopStart += t, this.timeSinceLoopStart >= this.duration) return this.timer.stop(), void ("function" == typeof this.callback && this.callback());
        var s = this.duration - this.timeSinceLoopStart < t ? 1 : Math.round((this.duration - this.timeSinceLoopStart) / t);
        this.updatePlanets(s), this.updateCusps(s);
      }, t.prototype.updateCusps = function (t) {
        var s = n(2 * Math.PI),
          e = this.transit.data.cusps[0] - this.data.cusps[0];
        e < 0 && (e += s), this.settings.ANIMATION_CUSPS_ROTATION_SPEED > 0 && (e += this.isReverse ? -1 * (this.settings.ANIMATION_CUSPS_ROTATION_SPEED * s + s) : this.settings.ANIMATION_CUSPS_ROTATION_SPEED * s);
        var i = this.isReverse ? this.rotation - e : e - this.rotation;
        i < 0 && (i += s);
        var r = i / t;
        this.isReverse && (r *= -1), this.rotation += r, this.cuspsElement.setAttribute("transform", "rotate(" + this.rotation + " " + this.transit.cx + " " + this.transit.cy + ")"), 1 === t && this.cuspsElement.removeAttribute("transform");
      }, t.prototype.updatePlanets = function (t) {
        for (var s in this.data.planets) if (this.data.planets.hasOwnProperty(s)) {
          var e = this.actualPlanetPos[s][0],
            i = this.data.planets[s][0],
            r = null != this.actualPlanetPos[s][1] && this.actualPlanetPos[s][1] < 0,
            h = void 0;
          (h = this.isReverse && r ? i - e : this.isReverse || r ? e - i : i - e) < 0 && (h += n(2 * Math.PI));
          var a = h / t;
          this.isReverse && (a *= -1), r && (a *= -1);
          var o = e + a;
          o < 0 && (o += n(2 * Math.PI)), this.actualPlanetPos[s][0] = o;
        }
        this.transit.drawPoints(this.actualPlanetPos);
      }, t;
    }();
    var l = function () {
      function t(t, s, e) {
        var i = h(s);
        if (i.hasError) throw new Error(i.messages.join(" | "));
        this.data = s, this.paper = t.paper, this.cx = t.cx, this.cy = t.cy, this.toPoints = t.toPoints, this.radius = t.radius, this.settings = e, this.rulerRadius = this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO / this.settings.RULER_RADIUS, this.pointRadius = this.radius + (this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO + this.settings.PADDING * this.settings.SYMBOL_SCALE), this.shift = t.shift, this.universe = document.createElementNS(this.paper.root.namespaceURI, "g"), this.universe.setAttribute("id", this.paper._paperElementId + "-" + this.settings.ID_TRANSIT), this.paper.root.appendChild(this.universe), this.context = this;
      }
      return t.prototype.drawBg = function () {
        var t = this.universe,
          s = a(t, this.paper._paperElementId + "-" + this.settings.ID_BG, this.paper._paperElementId),
          e = this.paper.segment(this.cx, this.cy, this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO, 0, 359.99, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, 1);
        e.setAttribute("fill", this.settings.STROKE_ONLY ? "none" : this.settings.COLOR_BACKGROUND), s.appendChild(e);
      }, t.prototype.drawPoints = function (t) {
        var s = null == t ? this.data.planets : t;
        if (null != s) {
          var e,
            n,
            h = this.universe,
            o = a(h, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_POINTS, this.paper._paperElementId),
            u = (this.radius, this.radius, this.settings.INNER_CIRCLE_RADIUS_RATIO, this.radius, this.settings.INDOOR_CIRCLE_RADIUS_RATIO, this.settings.PADDING, this.settings.SYMBOL_SCALE, Object.keys(s).length, this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO);
          for (var p in this.locatedPoints = [], s) if (s.hasOwnProperty(p)) {
            var c = i(this.cx, this.cy, this.pointRadius, s[p][0] + this.shift, this.settings),
              A = {
                name: p,
                x: c.x,
                y: c.y,
                r: this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE,
                angle: s[p][0] + this.shift,
                pointer: s[p][0] + this.shift
              };
            this.locatedPoints = _S(this.locatedPoints, A, {
              cx: this.cx,
              cy: this.cy,
              r: this.pointRadius
            }, this.settings);
          }
          this.settings.DEBUG && console.log("Transit count of points: " + this.locatedPoints.length), this.settings.DEBUG && console.log("Transit located points:\n" + JSON.stringify(this.locatedPoints)), this.locatedPoints.forEach(function (t) {
            e = i(this.cx, this.cy, u, s[t.name][0] + this.shift, this.settings), n = i(this.cx, this.cy, u + this.rulerRadius / 2, s[t.name][0] + this.shift, this.settings);
            var h = this.paper.line(e.x, e.y, n.x, n.y);
            if (h.setAttribute("stroke", this.settings.CIRCLE_COLOR), h.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE), o.appendChild(h), !this.settings.STROKE_ONLY && s[t.name][0] + this.shift !== t.angle) {
              e = n, n = i(this.cx, this.cy, this.pointRadius - this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE, t.angle, this.settings);
              var a = this.paper.line(e.x, e.y, n.x, n.y);
              a.setAttribute("stroke", this.settings.LINE_COLOR), a.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE * .5), o.appendChild(a);
            }
            var S = this.paper.getSymbol(t.name, t.x, t.y);
            S.setAttribute("id", this.paper.root.id + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_POINTS + "-" + t.name), o.appendChild(S);
            var p = [(Math.floor(s[t.name][0]) % 30).toString()],
              c = new g(this.data.cusps, this.settings);
            s[t.name][1] && c.isRetrograde(s[t.name][1]) ? p.push("R") : p.push(""), p = p.concat(c.getDignities({
              name: t.name,
              position: s[t.name][0]
            }, this.settings.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(",")), r(t, p, this.settings).forEach(function (t) {
              o.appendChild(this.paper.text(t.text, t.x, t.y, this.settings.POINTS_TEXT_SIZE, this.settings.SIGNS_COLOR));
            }, this);
          }, this);
        }
      }, t.prototype.drawCircles = function () {
        var t = this.universe,
          s = a(t, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CIRCLES, this.paper._paperElementId),
          e = this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO,
          i = this.paper.circle(this.cx, this.cy, e);
        i.setAttribute("stroke", this.settings.CIRCLE_COLOR), i.setAttribute("stroke-width", (this.settings.CIRCLE_STRONG * this.settings.SYMBOL_SCALE).toString()), s.appendChild(i);
      }, t.prototype.drawCusps = function (t) {
        var s = null == t ? this.data.cusps : t;
        if (null != s) for (var e = this.universe, r = a(e, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CUSPS, this.paper._paperElementId), h = this.radius + (this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius) / 2, o = 0, S = s.length; o < S; o++) {
          var u = i(this.cx, this.cy, this.radius, s[o] + this.shift, this.settings),
            p = i(this.cx, this.cy, this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius, s[o] + this.shift, this.settings),
            c = this.paper.line(u.x, u.y, p.x, p.y);
          c.setAttribute("stroke", this.settings.LINE_COLOR), c.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), r.appendChild(c);
          var g = n(2 * Math.PI),
            A = s[o],
            L = s[(o + 1) % 12],
            _ = L - A > 0 ? L - A : L - A + g,
            O = i(this.cx, this.cy, h, (A + _ / 2) % g + this.shift, this.settings);
          r.appendChild(this.paper.getSymbol((o + 1).toString(), O.x, O.y));
        }
      }, t.prototype.drawRuler = function () {
        var t = this.universe,
          s = a(t, this.paper.root.id + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_RULER, this.paper._paperElementId),
          e = this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO;
        p(this.cx, this.cy, e, e - this.rulerRadius, this.shift, this.settings).forEach(function (t) {
          var e = this.paper.line(t.startX, t.startY, t.endX, t.endY);
          e.setAttribute("stroke", this.settings.CIRCLE_COLOR), e.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE), s.appendChild(e);
        }, this);
        var i = this.paper.circle(this.cx, this.cy, e - this.rulerRadius);
        i.setAttribute("stroke", this.settings.CIRCLE_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), s.appendChild(i);
      }, t.prototype.aspects = function (t) {
        for (var s = null != t && Array.isArray(t) ? t : new _(this.toPoints, this.settings).transit(this.data.planets), e = this.universe, n = a(e, this.paper.root.id + "-" + this.settings.ID_ASPECTS, this.paper._paperElementId), r = 0, h = s.length; r < h; r++) {
          var o = i(this.cx, this.cy, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, s[r].toPoint.position + this.shift, this.settings),
            S = i(this.cx, this.cy, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, s[r].point.position + this.shift, this.settings),
            u = this.paper.line(o.x, o.y, S.x, S.y);
          u.setAttribute("stroke", this.settings.STROKE_ONLY ? this.settings.LINE_COLOR : s[r].aspect.color), u.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), u.setAttribute("data-name", s[r].aspect.name), u.setAttribute("data-degree", s[r].aspect.degree.toString()), u.setAttribute("data-point", s[r].point.name), u.setAttribute("data-toPoint", s[r].toPoint.name), u.setAttribute("data-precision", s[r].precision.toString()), n.appendChild(u);
        }
        return this.context;
      }, t.prototype.animate = function (t, s, e, i) {
        var n = h(t);
        if (n.hasError) throw new Error(n.messages.join(" | "));
        return a(this.universe, this.paper._paperElementId + "-" + this.settings.ID_ASPECTS, this.paper._paperElementId), new d(this.context, this.settings).animate(t, s, e, function () {
          this.data = t, this.drawPoints(), this.drawCusps(), this.aspects(), "function" == typeof i && i();
        }.bind(this)), this.context;
      }, t;
    }();
    var C = function () {
      function t(t, s, e, i, r, a) {
        this.settings = a;
        var o = h(r);
        if (o.hasError) throw new Error(o.messages.join(" | "));
        if (this.data = r, this.paper = t, this.cx = s, this.cy = e, this.radius = i, this.locatedPoints = [], this.rulerRadius = this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO / this.settings.RULER_RADIUS, this.pointRadius = this.radius - (this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO + 2 * this.rulerRadius + this.settings.PADDING * this.settings.SYMBOL_SCALE), this.toPoints = JSON.parse(JSON.stringify(this.data.planets)), this.shift = 0, this.data.cusps && this.data.cusps[0]) {
          var S = n(2 * Math.PI);
          this.shift = S - this.data.cusps[0];
        }
        var u = document.createElementNS(this.paper.root.namespaceURI, "g");
        u.setAttribute("id", this.paper.root.id + "-" + this.settings.ID_ASPECTS), this.paper.root.appendChild(u), this.universe = document.createElementNS(this.paper.root.namespaceURI, "g"), this.universe.setAttribute("id", this.paper.root.id + "-" + this.settings.ID_RADIX), this.paper.root.appendChild(this.universe), this.context = this;
      }
      return t.prototype.drawBg = function () {
        var t = this.universe,
          s = a(t, this.paper.root.id + "-" + this.settings.ID_BG, this.paper.root.id),
          e = this.paper.segment(this.cx, this.cy, this.radius - this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO, 0, 359.99, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, 1);
        e.setAttribute("fill", this.settings.STROKE_ONLY ? "none" : this.settings.COLOR_BACKGROUND), s.appendChild(e);
      }, t.prototype.drawUniverse = function () {
        for (var t = this.universe, s = a(t, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_SIGNS, this.paper.root.id), e = 0, n = 30, r = this.shift, h = this.settings.COLORS_SIGNS.length; e < h; e++) {
          var o = this.paper.segment(this.cx, this.cy, this.radius, r, r + n, this.radius - this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO);
          o.setAttribute("fill", this.settings.STROKE_ONLY ? "none" : this.settings.COLORS_SIGNS[e]), o.setAttribute("id", this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_SIGNS + "-" + e), o.setAttribute("stroke", this.settings.STROKE_ONLY ? this.settings.CIRCLE_COLOR : "none"), o.setAttribute("stroke-width", this.settings.STROKE_ONLY ? "1" : "0"), s.appendChild(o), r += n;
        }
        for (e = 0, n = 30, r = 15 + this.shift, h = this.settings.SYMBOL_SIGNS.length; e < h; e++) {
          var S = i(this.cx, this.cy, this.radius - this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO / 2, r, this.settings);
          s.appendChild(this.paper.getSymbol(this.settings.SYMBOL_SIGNS[e], S.x, S.y)), r += n;
        }
      }, t.prototype.drawPoints = function () {
        if (null != this.data.planets) {
          var t,
            s,
            e = this.universe,
            n = a(e, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_POINTS, this.paper.root.id),
            h = (this.radius, this.radius, this.settings.INNER_CIRCLE_RADIUS_RATIO, this.radius, this.settings.INDOOR_CIRCLE_RADIUS_RATIO, this.settings.PADDING, this.settings.SYMBOL_SCALE, Object.keys(this.data.planets).length, this.radius - (this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius));
          for (var o in this.data.planets) if (this.data.planets.hasOwnProperty(o)) {
            var u = i(this.cx, this.cy, this.pointRadius, this.data.planets[o][0] + this.shift, this.settings),
              p = {
                name: o,
                x: u.x,
                y: u.y,
                r: this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE,
                angle: this.data.planets[o][0] + this.shift,
                pointer: this.data.planets[o][0] + this.shift
              };
            this.locatedPoints = _S(this.locatedPoints, p, {
              cx: this.cx,
              cy: this.cy,
              r: this.pointRadius
            }, this.settings);
          }
          this.settings.DEBUG && console.log("Radix count of points: " + this.locatedPoints.length), this.settings.DEBUG && console.log("Radix located points:\n" + JSON.stringify(this.locatedPoints)), this.locatedPoints.forEach(function (e) {
            t = i(this.cx, this.cy, h, this.data.planets[e.name][0] + this.shift, this.settings), s = i(this.cx, this.cy, h - this.rulerRadius / 2, this.data.planets[e.name][0] + this.shift, this.settings);
            var a = this.paper.line(t.x, t.y, s.x, s.y);
            if (a.setAttribute("stroke", this.settings.CIRCLE_COLOR), a.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE), n.appendChild(a), !this.settings.STROKE_ONLY && this.data.planets[e.name][0] + this.shift !== e.angle) {
              t = s, s = i(this.cx, this.cy, this.pointRadius + this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE, e.angle, this.settings);
              var o = this.paper.line(t.x, t.y, s.x, s.y);
              o.setAttribute("stroke", this.settings.LINE_COLOR), o.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE * .5), n.appendChild(o);
            }
            var S = this.paper.getSymbol(e.name, e.x, e.y);
            S.setAttribute("id", this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_POINTS + "-" + e.name), n.appendChild(S);
            var u = [(Math.floor(this.data.planets[e.name][0]) % 30).toString()],
              p = new g(this.data.cusps, this.settings);
            this.data.planets[e.name][1] && p.isRetrograde(this.data.planets[e.name][1]) ? u.push("R") : u.push(""), this.settings.SHOW_DIGNITIES_TEXT && (u = u.concat(p.getDignities({
              name: e.name,
              position: this.data.planets[e.name][0]
            }, this.settings.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","))), r(e, u, this.settings).forEach(function (t) {
              n.appendChild(this.paper.text(t.text, t.x, t.y, this.settings.POINTS_TEXT_SIZE, this.settings.SIGNS_COLOR));
            }, this);
          }, this);
        }
      }, t.prototype.drawAxis = function () {
        if (null != this.data.cusps) {
          var t,
            s,
            e,
            n = this.universe,
            r = a(n, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_AXIS, this.paper.root.id),
            h = this.radius + this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO / 4,
            o = 0,
            S = 3,
            u = 6,
            p = 9;
          [o, S, u, p].forEach(function (n) {
            var a;
            s = i(this.cx, this.cy, this.radius, this.data.cusps[n] + this.shift, this.settings), e = i(this.cx, this.cy, h, this.data.cusps[n] + this.shift, this.settings), (t = this.paper.line(s.x, s.y, e.x, e.y)).setAttribute("stroke", this.settings.LINE_COLOR), t.setAttribute("stroke-width", this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE), r.appendChild(t), n === o && (a = i(this.cx, this.cy, h + 20 * this.settings.SYMBOL_SCALE, this.data.cusps[n] + this.shift, this.settings), r.appendChild(this.paper.getSymbol(this.settings.SYMBOL_AS, a.x, a.y))), n === u && (a = i(this.cx, this.cy, h + 2 * this.settings.SYMBOL_SCALE, this.data.cusps[n] + this.shift, this.settings), r.appendChild(this.paper.getSymbol(this.settings.SYMBOL_DS, a.x, a.y))), n === S && (a = i(this.cx, this.cy, h + 10 * this.settings.SYMBOL_SCALE, this.data.cusps[n] - 2 + this.shift, this.settings), r.appendChild(this.paper.getSymbol(this.settings.SYMBOL_IC, a.x, a.y))), n === p && (a = i(this.cx, this.cy, h + 10 * this.settings.SYMBOL_SCALE, this.data.cusps[n] + 2 + this.shift, this.settings), r.appendChild(this.paper.getSymbol(this.settings.SYMBOL_MC, a.x, a.y)));
          }, this);
        }
      }, t.prototype.drawCusps = function () {
        if (null != this.data.cusps) for (var t = this.universe, s = a(t, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_CUSPS, this.paper.root.id), e = this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO + this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE, r = [0, 3, 6, 9], h = function h(t, _h) {
            var a, S, u, p, c, g, A, L, _, O, d;
            (a = o.cx, S = o.cy, u = o.data.cusps[t] + o.shift, p = o.radius / o.settings.INDOOR_CIRCLE_RADIUS_RATIO, c = o.radius - (o.radius / o.settings.INNER_CIRCLE_RADIUS_RATIO + o.rulerRadius), g = o.pointRadius, A = o.locatedPoints, L = o.settings, d = [], function (t, s, e) {
              for (var i = n(2 * Math.PI), r = e.COLLISION_RADIUS * e.SYMBOL_SCALE / 2, h = !1, a = 0, o = s.length; a < o; a++) if (Math.abs(s[a].angle - t) <= r || i - Math.abs(s[a].angle - t) <= r) {
                h = !0;
                break;
              }
              return h;
            }(u, A, L) ? (_ = i(a, S, p, u, L), O = i(a, S, g - L.COLLISION_RADIUS * L.SYMBOL_SCALE, u, L), d.push({
              startX: _.x,
              startY: _.y,
              endX: O.x,
              endY: O.y
            }), g + L.COLLISION_RADIUS * L.SYMBOL_SCALE * 2 < c && (_ = i(a, S, g + L.COLLISION_RADIUS * L.SYMBOL_SCALE * 2, u, L), O = i(a, S, c, u, L), d.push({
              startX: _.x,
              startY: _.y,
              endX: O.x,
              endY: O.y
            }))) : (_ = i(a, S, p, u, L), O = i(a, S, c, u, L), d.push({
              startX: _.x,
              startY: _.y,
              endX: O.x,
              endY: O.y
            })), d).forEach(function (e) {
              var i = this.paper.line(e.startX, e.startY, e.endX, e.endY);
              i.setAttribute("stroke", this.settings.LINE_COLOR), r.includes(t) ? i.setAttribute("stroke-width", this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE) : i.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE), s.appendChild(i);
            }, o);
            var l = n(2 * Math.PI),
              C = o.data.cusps[t],
              I = o.data.cusps[(t + 1) % 12],
              E = I - C > 0 ? I - C : I - C + l,
              m = i(o.cx, o.cy, e, (C + E / 2) % l + o.shift, o.settings);
            s.appendChild(o.paper.getSymbol((t + 1).toString(), m.x, m.y));
          }, o = this, S = 0, u = this.data.cusps.length; S < u; S++) h(S);
      }, t.prototype.aspects = function (t) {
        for (var s = null != t && Array.isArray(t) ? t : new _(this.toPoints, this.settings).radix(this.data.planets), e = this.universe, n = a(e, this.paper.root.id + "-" + this.settings.ID_ASPECTS, this.paper.root.id), r = [], h = 0, o = s.length; h < o; h++) {
          var S = s[h].aspect.name + "-" + s[h].point.name + "-" + s[h].toPoint.name,
            u = s[h].aspect.name + "-" + s[h].toPoint.name + "-" + s[h].point.name;
          if (!r.includes(u)) {
            r.push(S);
            var p = i(this.cx, this.cy, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, s[h].toPoint.position + this.shift, this.settings),
              c = i(this.cx, this.cy, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO, s[h].point.position + this.shift, this.settings),
              g = this.paper.line(p.x, p.y, c.x, c.y);
            g.setAttribute("stroke", this.settings.STROKE_ONLY ? this.settings.LINE_COLOR : s[h].aspect.color), g.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), g.setAttribute("data-name", s[h].aspect.name), g.setAttribute("data-degree", s[h].aspect.degree.toString()), g.setAttribute("data-point", s[h].point.name), g.setAttribute("data-toPoint", s[h].toPoint.name), g.setAttribute("data-precision", s[h].precision.toString()), n.appendChild(g);
          }
        }
        return this.context;
      }, t.prototype.addPointsOfInterest = function (t) {
        for (var s in t) t.hasOwnProperty(s) && (this.toPoints[s] = t[s]);
        return this.context;
      }, t.prototype.drawRuler = function () {
        var t = this.universe,
          s = a(t, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_RULER, this.paper.root.id),
          e = this.radius - (this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius);
        p(this.cx, this.cy, e, e + this.rulerRadius, this.shift, this.settings).forEach(function (t) {
          var e = this.paper.line(t.startX, t.startY, t.endX, t.endY);
          e.setAttribute("stroke", this.settings.CIRCLE_COLOR), e.setAttribute("stroke-width", this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE), s.appendChild(e);
        }, this);
        var i = this.paper.circle(this.cx, this.cy, e);
        i.setAttribute("stroke", this.settings.CIRCLE_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), s.appendChild(i);
      }, t.prototype.drawCircles = function () {
        var t = this.universe,
          s = a(t, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_CIRCLES, this.paper.root.id),
          e = this.paper.circle(this.cx, this.cy, this.radius / this.settings.INDOOR_CIRCLE_RADIUS_RATIO);
        e.setAttribute("stroke", this.settings.CIRCLE_COLOR), e.setAttribute("stroke-width", (this.settings.CIRCLE_STRONG * this.settings.SYMBOL_SCALE).toString()), s.appendChild(e), (e = this.paper.circle(this.cx, this.cy, this.radius)).setAttribute("stroke", this.settings.CIRCLE_COLOR), e.setAttribute("stroke-width", (this.settings.CIRCLE_STRONG * this.settings.SYMBOL_SCALE).toString()), s.appendChild(e), (e = this.paper.circle(this.cx, this.cy, this.radius - this.radius / this.settings.INNER_CIRCLE_RADIUS_RATIO)).setAttribute("stroke", this.settings.CIRCLE_COLOR), e.setAttribute("stroke-width", (this.settings.CIRCLE_STRONG * this.settings.SYMBOL_SCALE).toString()), s.appendChild(e);
      }, t.prototype.transit = function (t) {
        a(this.universe, this.paper.root.id + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_AXIS, this.paper.root.id);
        var s = new l(this.context, t, this.settings);
        return s.drawBg(), s.drawPoints(), s.drawCusps(), s.drawRuler(), s.drawCircles(), s;
      }, t;
    }();
    var I = function () {
      function t(t, s, e, i) {
        this.settings = i;
        var n = document.getElementById(t);
        if (null == n) throw new Error("Root element not found");
        var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.setAttribute("style", "position: relative; overflow: hidden;"), r.setAttribute("version", "1.1"), r.setAttribute("width", s.toString()), r.setAttribute("height", e.toString()), r.setAttribute("viewBox", "0 0 " + s + " " + e), n.appendChild(r), this._paperElementId = t + "-" + this.settings.ID_CHART;
        var h = document.createElementNS(r.namespaceURI, "g");
        h.setAttribute("id", this._paperElementId), r.appendChild(h), this.DOMElement = r, this.root = h, this.width = s, this.height = e, this.context = this;
      }
      return t.prototype._getSymbol = function (t, s, e) {
        switch (t) {
          case this.settings.SYMBOL_SUN:
            return this.sun(s, e);
          case this.settings.SYMBOL_MOON:
            return this.moon(s, e);
          case this.settings.SYMBOL_MERCURY:
            return this.mercury(s, e);
          case this.settings.SYMBOL_VENUS:
            return this.venus(s, e);
          case this.settings.SYMBOL_MARS:
            return this.mars(s, e);
          case this.settings.SYMBOL_JUPITER:
            return this.jupiter(s, e);
          case this.settings.SYMBOL_SATURN:
            return this.saturn(s, e);
          case this.settings.SYMBOL_URANUS:
            return this.uranus(s, e);
          case this.settings.SYMBOL_NEPTUNE:
            return this.neptune(s, e);
          case this.settings.SYMBOL_PLUTO:
            return this.pluto(s, e);
          case this.settings.SYMBOL_CHIRON:
            return this.chiron(s, e);
          case this.settings.SYMBOL_LILITH:
            return this.lilith(s, e);
          case this.settings.SYMBOL_NNODE:
            return this.nnode(s, e);
          case this.settings.SYMBOL_SNODE:
            return this.snode(s, e);
          case this.settings.SYMBOL_FORTUNE:
            return this.fortune(s, e);
          case this.settings.SYMBOL_ARIES:
            return this.aries(s, e);
          case this.settings.SYMBOL_TAURUS:
            return this.taurus(s, e);
          case this.settings.SYMBOL_GEMINI:
            return this.gemini(s, e);
          case this.settings.SYMBOL_CANCER:
            return this.cancer(s, e);
          case this.settings.SYMBOL_LEO:
            return this.leo(s, e);
          case this.settings.SYMBOL_VIRGO:
            return this.virgo(s, e);
          case this.settings.SYMBOL_LIBRA:
            return this.libra(s, e);
          case this.settings.SYMBOL_SCORPIO:
            return this.scorpio(s, e);
          case this.settings.SYMBOL_SAGITTARIUS:
            return this.sagittarius(s, e);
          case this.settings.SYMBOL_CAPRICORN:
            return this.capricorn(s, e);
          case this.settings.SYMBOL_AQUARIUS:
            return this.aquarius(s, e);
          case this.settings.SYMBOL_PISCES:
            return this.pisces(s, e);
          case this.settings.SYMBOL_AS:
            return this.ascendant(s, e);
          case this.settings.SYMBOL_DS:
            return this.descendant(s, e);
          case this.settings.SYMBOL_MC:
            return this.mediumCoeli(s, e);
          case this.settings.SYMBOL_IC:
            return this.immumCoeli(s, e);
          case this.settings.SYMBOL_CUSP_1:
            return this.number1(s, e);
          case this.settings.SYMBOL_CUSP_2:
            return this.number2(s, e);
          case this.settings.SYMBOL_CUSP_3:
            return this.number3(s, e);
          case this.settings.SYMBOL_CUSP_4:
            return this.number4(s, e);
          case this.settings.SYMBOL_CUSP_5:
            return this.number5(s, e);
          case this.settings.SYMBOL_CUSP_6:
            return this.number6(s, e);
          case this.settings.SYMBOL_CUSP_7:
            return this.number7(s, e);
          case this.settings.SYMBOL_CUSP_8:
            return this.number8(s, e);
          case this.settings.SYMBOL_CUSP_9:
            return this.number9(s, e);
          case this.settings.SYMBOL_CUSP_10:
            return this.number10(s, e);
          case this.settings.SYMBOL_CUSP_11:
            return this.number11(s, e);
          case this.settings.SYMBOL_CUSP_12:
            return this.number12(s, e);
          default:
            var i = this.circle(s, e, 8);
            return i.setAttribute("stroke", "#ffff00"), i.setAttribute("stroke-width", "1"), i.setAttribute("fill", "#ff0000"), i;
        }
      }, t.prototype.getSymbol = function (t, s, e) {
        if (null == this.settings.CUSTOM_SYMBOL_FN) return this._getSymbol(t, s, e);
        var i = this.settings.CUSTOM_SYMBOL_FN(t, s, e, this.context);
        return null == i || void 0 === i ? this._getSymbol(t, s, e) : i;
      }, t.prototype.createRectForClick = function (t, s) {
        var e = document.createElementNS(this.context.root.namespaceURI, "rect");
        return e.setAttribute("x", (t - this.settings.SIGNS_STROKE).toString()), e.setAttribute("y", (s - this.settings.SIGNS_STROKE).toString()), e.setAttribute("width", "20px"), e.setAttribute("height", "20px"), e.setAttribute("fill", "transparent"), e;
      }, t.prototype.getSignWrapperId = function (t) {
        return this._paperElementId + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_SIGNS + "-" + t;
      }, t.prototype.getHouseIdWrapper = function (t) {
        return this._paperElementId + "-" + this.settings.ID_RADIX + "-" + this.settings.ID_CUSPS + "-" + t;
      }, t.prototype.sun = function (t, s) {
        t = Math.round(t + -1 * this.settings.SYMBOL_SCALE), s = Math.round(s + -8 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.moon = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -7 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.mercury = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + 7 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 6) + ", " + (s + -16) + " a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445"), n.setAttribute("stroke", this.settings.POINTS_COLOR), n.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), n.setAttribute("fill", "none"), e.appendChild(n), e;
      }, t.prototype.venus = function (t, s) {
        t = Math.round(t + 2 * this.settings.SYMBOL_SCALE), s = Math.round(s + 7 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.mars = function (t, s) {
        t = Math.round(t + 2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.jupiter = function (t, s) {
        t = Math.round(t + -5 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s - 3)), e;
      }, t.prototype.saturn = function (t, s) {
        t = Math.round(t + 5 * this.settings.SYMBOL_SCALE), s = Math.round(s + 10 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.uranus = function (t, s) {
        t = Math.round(t + -5 * this.settings.SYMBOL_SCALE), s = Math.round(s + -7 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + "  0,10.23824 m 10.23633,-10.32764 0,10.23824 m -10.26606,-4.6394 10.23085,0 m -5.06415,-5.51532 0,11.94985"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 7) + ", " + (s + 14.5) + " a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844 z"), n.setAttribute("stroke", this.settings.POINTS_COLOR), n.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), n.setAttribute("fill", "none"), e.appendChild(n), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.neptune = function (t, s) {
        t = Math.round(t + 3 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.pluto = function (t, s) {
        t = Math.round(t + 5 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496 m 5.76771,13.93858 0,-8.17088 m -3.84512,4.32576 7.69024,0"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + -2.3) + ", " + (s + 0) + " a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z"), n.setAttribute("stroke", this.settings.POINTS_COLOR), n.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), n.setAttribute("fill", "none"), e.appendChild(n), e;
      }, t.prototype.chiron = function (t, s) {
        t = Math.round(t + 3 * this.settings.SYMBOL_SCALE), s = Math.round(s + 5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 0) + ", " + (s + -13) + "   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251"), n.setAttribute("stroke", this.settings.POINTS_COLOR), n.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), n.setAttribute("fill", "none"), e.appendChild(n), e;
      }, t.prototype.lilith = function (t, s) {
        t = Math.round(t + 2 * this.settings.SYMBOL_SCALE), s = Math.round(s + 4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.nnode = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + 3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.snode = function (t, s) {
        t = Math.round(t + 0 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " l1.3333282470703125,0.666656494140625l0.6666717529296875,0l1.3333282470703125,-0.666656494140625l0.6666717529296875,-1.333343505859375l0,-0.666656494140625l-0.6666717529296875,-1.333343505859375l-1.3333282470703125,-0.666656494140625l-0.6666717529296875,0l-1.3333282470703125,0.666656494140625l-0.6666717529296875,1.333343505859375l0,0.666656494140625l0.6666717529296875,1.333343505859375l2,2.666656494140625l0.6666717529296875,2l0,1.333343505859375l-0.6666717529296875,2l-1.3333282470703125,1.333343505859375l-2,0.666656494140625l-2.6666717529296875,0l-2,-0.666656494140625l-1.3333282470703125,-1.333343505859375l-0.6666717529296875,-2l0,-1.333343505859375l0.6666717529296875,-2l2,-2.666656494140625l0.666656494140625,-1.333343505859375l0,-0.666656494140625l-0.666656494140625,-1.333343505859375l-1.333343505859375,-0.666656494140625l-0.666656494140625,0l-1.333343505859375,0.666656494140625l-0.666656494140625,1.333343505859375l0,0.666656494140625l0.666656494140625,1.333343505859375l1.333343505859375,0.666656494140625l0.666656494140625,0l1.333343505859375,-0.666656494140625m8,6l-0.6666717529296875,1.333343505859375l-1.3333282470703125,1.33331298828125l-2,0.66668701171875l-2.6666717529296875,0l-2,-0.66668701171875l-1.3333282470703125,-1.33331298828125l-0.6666717529296875,-1.333343505859375"), i.setAttribute("stroke", this.settings.POINTS_COLOR), i.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.fortune = function (t, s) {
        t = Math.round(t + -10 * this.settings.SYMBOL_SCALE), s = Math.round(s + -8 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "M15.971322059631348,8.000000953674316A7.971322252863855,7.971322252863855,0,0,1,8,15.97132396697998A7.971322252863855,7.971322252863855,0,0,1,0.028678132221102715,8.000000953674316A7.971322252863855,7.971322252863855,0,0,1,8,0.028677448630332947A7.971322252863855,7.971322252863855,0,0,1,15.971322059631348,8.000000953674316Z");
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        n.setAttribute("d", "M2.668839454650879,2.043858766555786C6.304587364196777,5.906839370727539,9.94033432006836,9.769822120666504,13.576082229614258,13.632804870605469");
        var r = document.createElementNS(this.context.root.namespaceURI, "path");
        r.setAttribute("d", "m2.5541272163391113,13.747519493103027c3.635746955871582,-3.8629846572875977,7.271494388580322,-7.72596549987793,10.90724229812622,-11.588947772979736");
        var h = document.createElementNS(this.context.root.namespaceURI, "g");
        return h.setAttribute("transform", "translate(" + t + "," + s + ")"), h.appendChild(i), h.appendChild(n), h.appendChild(r), e.setAttribute("stroke", this.settings.POINTS_COLOR), e.setAttribute("stroke-width", this.settings.POINTS_STROKE.toString()), e.setAttribute("fill", "none"), e.appendChild(h), e;
      }, t.prototype.aries = function (t, s) {
        t = Math.round(t + -9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_ARIES)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s - 4)), e;
      }, t.prototype.taurus = function (t, s) {
        t = Math.round(t + -9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -11 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_TAURUS)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.gemini = function (t, s) {
        t = Math.round(t + -6 * this.settings.SYMBOL_SCALE), s = Math.round(s + -6 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_GEMINI)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 0,11.546414 m 0.9622011,-10.5842129 0,9.6220117 m 7.6976097,-9.6220117 0,9.6220117 m 0.962201,-10.5842128 0,11.546414 m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402 m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.cancer = function (t, s) {
        t = Math.round(t + 9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -9 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_CANCER)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0 m -18,3 1,2 1,1 2,1 m 4,-4 -1,-2 -1,-1 -2,-1 m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0 m 18,-3 -1,-2 -1,-1 -2,-1 m -4,4 1,2 1,1 2,1"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t - 18, s)), e;
      }, t.prototype.leo = function (t, s) {
        t = Math.round(t + -3 * this.settings.SYMBOL_SCALE), s = Math.round(s + 4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_LEO)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t - 6, s - 13)), e;
      }, t.prototype.virgo = function (t, s) {
        t = Math.round(t + -9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_VIRGO)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 2.5894868,-2.5894868 1.7263245,2.5894868 0,9.4947847 m -2.5894868,-11.2211092 1.7263245,2.5894867 0,8.6316225 m 0.8631623,-9.4947847 2.5894867,-2.5894868 1.72632451,2.5894868 0,8.6316224 m -2.58948671,-10.3579469 1.72632447,2.5894867 0,7.7684602 m 0.86316224,-8.6316224 2.58948679,-2.5894868 1.7263244,2.5894868 0,13.8105959 m -2.5894867,-15.5369204 1.7263245,2.5894867 0,12.9474337 m 0.8631622,-13.8105959 2.5894868,-2.5894868 0.8631622,1.7263245 0.8631623,2.5894868 0,2.5894867 -0.8631623,2.58948673 -0.8631622,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -4.3158113,1.7263245 m 7.7684602,-15.5369204 0.8631623,0.8631622 0.8631622,2.5894868 0,2.5894867 -0.8631622,2.58948673 -0.8631623,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -3.452649,1.7263245"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.libra = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -8 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_LIBRA)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " c 0.7519,1e-5 1.3924,0.12227 1.9316,0.35156 0.6619,0.28495 1.2134,0.63854 1.666,1.0625 0.4838,0.45481 0.853,0.97255 1.1172,1.56641 0.2467,0.56612 0.3711,1.17397 0.3711,1.83789 0,0.64113 -0.1244,1.23948 -0.373,1.80859 -0.1624,0.36305 -0.3631,0.69725 -0.6055,1.00586 l -0.6367,0.8086 4.3789,0 0,0.67187 -5.4024,0 0,-0.91797 c 0.2173,-0.1385 0.4379,-0.27244 0.6367,-0.44726 0.4215,-0.36876 0.7529,-0.82784 0.9883,-1.35547 0.2215,-0.50074 0.334,-1.0358 0.334,-1.58594 0,-0.55653 -0.1122,-1.09434 -0.334,-1.5957 l -0,-0.002 0,-0.004 c -0.2292,-0.49901 -0.5581,-0.94778 -0.9746,-1.33789 l -0,-0.002 -0,-0.002 c -0.3967,-0.36155 -0.8679,-0.65723 -1.4062,-0.88476 l -0,0 c -0.4984,-0.20903 -1.0622,-0.30663 -1.6817,-0.30664 -0.5926,1e-5 -1.1526,0.10008 -1.6699,0.30273 l -0,0 c -0.5261,0.20799 -1.0032,0.5067 -1.4199,0.88867 l -0,0.002 -0,0.002 c -0.4166,0.39011 -0.7454,0.83887 -0.9746,1.33789 l 0,0.004 -0,0.002 c -0.2218,0.50136 -0.334,1.03915 -0.334,1.5957 0,0.55015 0.1125,1.08519 0.334,1.58594 l 0,0.002 0,0.004 c 0.229,0.49855 0.5574,0.94911 0.9746,1.33984 0.1876,0.17482 0.4143,0.31484 0.6367,0.45703 l 0,0.91797 -5.3906,0 0,-0.67187 4.3789,0 -0.6367,-0.8086 c -0.2428,-0.30904 -0.443,-0.64418 -0.6055,-1.00781 -0.2487,-0.56911 -0.3731,-1.16552 -0.3731,-1.80664 0,-0.66391 0.1244,-1.27178 0.3711,-1.83789 l 0,-0.002 c 3e-4,-5.8e-4 -2e-4,-10e-4 0,-0.002 0.2641,-0.59218 0.6326,-1.10871 1.1153,-1.5625 0.4847,-0.45571 1.0332,-0.80585 1.6562,-1.05859 0.5861,-0.23488 1.2294,-0.35546 1.9414,-0.35547 z m -7.8496,13.45899 15.6992,0 0,0.67187 -15.6992,0 z"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t - 6, s)), e;
      }, t.prototype.scorpio = function (t, s) {
        t = Math.round(t + -9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_SCORPIO)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404 m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404 m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068 m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.sagittarius = function (t, s) {
        t = Math.round(t + 7 * this.settings.SYMBOL_SCALE), s = Math.round(s + -9 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_SAGITTARIUS)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -17.11444,17.11444 m 17.11444,-17.11444 -3.2089575,1.0696525 -6.417915,0 m 7.4875675,1.0696525 -3.2089575,0 -4.27861,-1.0696525 m 9.6268725,-1.0696525 -1.0696525,3.2089575 0,6.41791504 m -1.0696525,-7.48756754 0,3.2089575 1.0696525,4.27861004 m -8.55722,0 -7.4875675,0 m 6.417915,1.06965246 -3.2089575,0 -3.2089575,-1.06965246 m 7.4875675,0 0,7.48756746 m -1.0696525,-6.417915 0,3.2089575 1.0696525,3.2089575"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t - 12, s)), e;
      }, t.prototype.capricorn = function (t, s) {
        t = Math.round(t + -9 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_CAPRICORN)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 1.8047633,-3.6095267 4.5119084,9.0238168 m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633 m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.aquarius = function (t, s) {
        t = Math.round(t + -8 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_AQUARIUS)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 2.8866035,-2.8866035 3.8488047,1.9244023 m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023 m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023 m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035 m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238 m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238 m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238 m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.pisces = function (t, s) {
        t = Math.round(t + -8 * this.settings.SYMBOL_SCALE), s = Math.round(s + -8 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getSignWrapperId(this.settings.SYMBOL_PISCES)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2 m 0,-17 3,1 2,1 2,2 1,3 m 0,3 -1,3 -2,2 -2,1 -3,1 m 16,-17 -3,1 -2,1 -2,2 -1,3 m 0,3 1,3 2,2 2,1 3,1 m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2 m -17,-9 18,0 m -18,1 18,0"), i.setAttribute("stroke", this.settings.SIGNS_COLOR), i.setAttribute("stroke-width", this.settings.SIGNS_STROKE.toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.ascendant = function (t, s) {
        t = Math.round(t + 12 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0"), i.setAttribute("stroke", this.settings.SYMBOL_AXIS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.descendant = function (t, s) {
        t = Math.round(t + 22 * this.settings.SYMBOL_SCALE), s = Math.round(s + -1 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0"), i.setAttribute("stroke", this.settings.SYMBOL_AXIS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.mediumCoeli = function (t, s) {
        t = Math.round(t + 19 * this.settings.SYMBOL_SCALE), s = Math.round(s + -4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881"), i.setAttribute("stroke", this.settings.SYMBOL_AXIS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.immumCoeli = function (t, s) {
        t = Math.round(t + 19 * this.settings.SYMBOL_SCALE), s = Math.round(s + 2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m " + t + ", " + s + " -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401"), i.setAttribute("stroke", this.settings.SYMBOL_AXIS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), e;
      }, t.prototype.number1 = function (t, s) {
        t = Math.round(t + 0 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_1)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number2 = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_2)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number3 = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_3)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number4 = function (t, s) {
        t = Math.round(t + 1 * this.settings.SYMBOL_SCALE), s = Math.round(s + -4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_4)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number5 = function (t, s) {
        t = Math.round(t + -2 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_5)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number6 = function (t, s) {
        t = Math.round(t + 3 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_6)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number7 = function (t, s) {
        t = Math.round(t + -4 * this.settings.SYMBOL_SCALE), s = Math.round(s + -4 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_7)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number8 = function (t, s) {
        t = Math.round(t + -1 * this.settings.SYMBOL_SCALE), s = Math.round(s + -5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_8)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number9 = function (t, s) {
        t = Math.round(t + 1 * this.settings.SYMBOL_SCALE), s = Math.round(s + -2 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_9)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        return i.setAttribute("d", "m" + t + ", " + s + " -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number10 = function (t, s) {
        t = Math.round(t + -3 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3.5 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_10)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 6.5) + ", " + (s + -1.5) + " -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454"), n.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), n.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), n.setAttribute("fill", "none"), e.appendChild(n), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number11 = function (t, s) {
        t = Math.round(t + -3 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_11)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 6) + ", " + (s + 0) + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915"), n.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), n.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), n.setAttribute("fill", "none"), e.appendChild(n), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.number12 = function (t, s) {
        t = Math.round(t + -3 * this.settings.SYMBOL_SCALE), s = Math.round(s + -3 * this.settings.SYMBOL_SCALE);
        var e = document.createElementNS(this.context.root.namespaceURI, "g");
        e.setAttribute("id", this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_12)), e.setAttribute("transform", "translate(" + -t * (this.settings.SYMBOL_SCALE - 1) + "," + -s * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")");
        var i = document.createElementNS(this.context.root.namespaceURI, "path");
        i.setAttribute("d", "m" + t + ", " + s + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915"), i.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), i.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), i.setAttribute("fill", "none"), e.appendChild(i);
        var n = document.createElementNS(this.context.root.namespaceURI, "path");
        return n.setAttribute("d", "m" + (t + 4) + ", " + (s + 1) + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455"), n.setAttribute("stroke", this.settings.CUSPS_FONT_COLOR), n.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()), n.setAttribute("fill", "none"), e.appendChild(n), this.settings.ADD_CLICK_AREA && e.appendChild(this.createRectForClick(t, s)), e;
      }, t.prototype.segment = function (t, s, e, i, n, r, h, a) {
        var o = h || 0,
          S = a || 0;
        i = (this.settings.SHIFT_IN_DEGREES - i) % 360 * Math.PI / 180, n = (this.settings.SHIFT_IN_DEGREES - n) % 360 * Math.PI / 180;
        var u = document.createElementNS(this.context.root.namespaceURI, "path");
        return u.setAttribute("d", "M " + (t + r * Math.cos(i)) + ", " + (s + r * Math.sin(i)) + " l " + (e - r) * Math.cos(i) + ", " + (e - r) * Math.sin(i) + " A " + e + ", " + e + ",0 ," + o + ", " + S + ", " + (t + e * Math.cos(n)) + ", " + (s + e * Math.sin(n)) + " l " + (e - r) * -Math.cos(n) + ", " + (e - r) * -Math.sin(n) + " A " + r + ", " + r + ",0 ," + o + ", 1, " + (t + r * Math.cos(i)) + ", " + (s + r * Math.sin(i))), u.setAttribute("fill", "none"), u;
      }, t.prototype.line = function (t, s, e, i) {
        var n = document.createElementNS(this.context.root.namespaceURI, "line");
        return n.setAttribute("x1", t.toString()), n.setAttribute("y1", s.toString()), n.setAttribute("x2", e.toString()), n.setAttribute("y2", i.toString()), n;
      }, t.prototype.circle = function (t, s, e) {
        var i = document.createElementNS(this.context.root.namespaceURI, "circle");
        return i.setAttribute("cx", t.toString()), i.setAttribute("cy", s.toString()), i.setAttribute("r", e.toString()), i.setAttribute("fill", "none"), i;
      }, t.prototype.text = function (t, s, e, i, n) {
        var r = document.createElementNS(this.context.root.namespaceURI, "text");
        return r.setAttribute("x", s.toString()), r.setAttribute("y", e.toString()), r.setAttribute("font-size", i), r.setAttribute("fill", n), r.setAttribute("font-family", "serif"), r.setAttribute("dominant-baseline", "central"), r.appendChild(document.createTextNode(t)), r.setAttribute("transform", "translate(" + -s * (this.settings.SYMBOL_SCALE - 1) + "," + -e * (this.settings.SYMBOL_SCALE - 1) + ") scale(" + this.settings.SYMBOL_SCALE + ")"), r;
      }, t;
    }();
    var E = I;
    var m = function () {
        function t(t, s, i, n) {
          var r = e;
          if (null != n && (Object.assign(r, n), "COLORS_SIGNS" in n || (r.COLORS_SIGNS = [e.COLOR_ARIES, e.COLOR_TAURUS, e.COLOR_GEMINI, e.COLOR_CANCER, e.COLOR_LEO, e.COLOR_VIRGO, e.COLOR_LIBRA, e.COLOR_SCORPIO, e.COLOR_SAGITTARIUS, e.COLOR_CAPRICORN, e.COLOR_AQUARIUS, e.COLOR_PISCES])), "" !== t && null == document.getElementById(t)) {
            var h = document.createElement("div");
            h.setAttribute("id", t), document.body.appendChild(h);
          }
          this.paper = new E(t, s, i, r), this.cx = this.paper.width / 2, this.cy = this.paper.height / 2, this.radius = this.paper.height / 2 - r.MARGIN, this.settings = r;
        }
        return t.prototype.radix = function (t) {
          var s = new C(this.paper, this.cx, this.cy, this.radius, t, this.settings);
          return s.drawBg(), s.drawUniverse(), s.drawRuler(), s.drawPoints(), s.drawCusps(), s.drawAxis(), s.drawCircles(), s;
        }, t.prototype.scale = function (t) {
          this.paper.root.setAttribute("transform", "translate(" + -this.cx * (t - 1) + "," + -this.cy * (t - 1) + ") scale(" + t + ")");
        }, t.prototype.calibrate = function () {
          for (var t, s, e, n = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "Lilith", "NNode"], r = 0; r < n.length; r++) t = i(this.cx, this.cy, 2 * this.radius, 30 * r, this.settings), (e = this.paper.line(this.cx, this.cy, t.x, t.y)).setAttribute("stroke", this.settings.LINE_COLOR), this.paper.root.appendChild(e), (s = this.paper.circle(this.cx, this.cy, 60 + 60 * r)).setAttribute("stroke", this.settings.LINE_COLOR), s.setAttribute("stroke-width", "1"), this.paper.root.appendChild(s);
          for (var h = 0, a = n.length; h < a; h++) for (var o = 60 + 60 * h, S = 0; S < 12; S++) t = i(this.cx, this.cy, o, 30 * S, this.settings), (s = this.paper.circle(t.x, t.y, this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE)).setAttribute("stroke", "red"), s.setAttribute("stroke-width", "1"), this.paper.root.appendChild(s), this.paper.root.appendChild(this.paper.getSymbol(n[h], t.x, t.y));
          return this;
        }, t;
      }(),
      R = m;
    return s;
  }();
});
},{}],"../Users/Pankaj.Srivastava2/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56649" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../Users/Pankaj.Srivastava2/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/astrochart.js"], null)
//# sourceMappingURL=/astrochart.7be459a5.js.map