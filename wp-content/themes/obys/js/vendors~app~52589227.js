(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./node_modules/three/build/three.module.js": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return Cs;
      }),
        i.d(e, "b", function () {
          return Uo;
        }),
        i.d(e, "c", function () {
          return ec;
        }),
        i.d(e, "d", function () {
          return n;
        }),
        i.d(e, "e", function () {
          return s;
        }),
        i.d(e, "f", function () {
          return Pe;
        }),
        i.d(e, "g", function () {
          return Ge;
        }),
        i.d(e, "h", function () {
          return ti;
        }),
        i.d(e, "i", function () {
          return Y;
        }),
        i.d(e, "j", function () {
          return Be;
        }),
        i.d(e, "k", function () {
          return Jo;
        }),
        i.d(e, "l", function () {
          return c;
        }),
        i.d(e, "m", function () {
          return p;
        }),
        i.d(e, "n", function () {
          return er;
        }),
        void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
        void 0 === Number.isInteger &&
          (Number.isInteger = function (t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
          }),
        void 0 === Math.sign &&
          (Math.sign = function (t) {
            return t < 0 ? -1 : t > 0 ? 1 : +t;
          }),
        "name" in Function.prototype == !1 &&
          Object.defineProperty(Function.prototype, "name", {
            get: function () {
              return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
            },
          }),
        void 0 === Object.assign &&
          (Object.assign = function (t) {
            if (null == t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
              var n = arguments[i];
              if (null != n)
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          });
      var n = 1006;
      function r() {}
      Object.assign(r.prototype, {
        addEventListener: function (t, e) {
          void 0 === this._listeners && (this._listeners = {});
          var i = this._listeners;
          void 0 === i[t] && (i[t] = []),
            -1 === i[t].indexOf(e) && i[t].push(e);
        },
        hasEventListener: function (t, e) {
          if (void 0 === this._listeners) return !1;
          var i = this._listeners;
          return void 0 !== i[t] && -1 !== i[t].indexOf(e);
        },
        removeEventListener: function (t, e) {
          if (void 0 !== this._listeners) {
            var i = this._listeners[t];
            if (void 0 !== i) {
              var n = i.indexOf(e);
              -1 !== n && i.splice(n, 1);
            }
          }
        },
        dispatchEvent: function (t) {
          if (void 0 !== this._listeners) {
            var e = this._listeners[t.type];
            if (void 0 !== e) {
              t.target = this;
              for (var i = e.slice(0), n = 0, r = i.length; n < r; n++)
                i[n].call(this, t);
            }
          }
        },
      });
      for (var a = [], o = 0; o < 256; o++)
        a[o] = (o < 16 ? "0" : "") + o.toString(16);
      var s = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function () {
          var t = (4294967295 * Math.random()) | 0,
            e = (4294967295 * Math.random()) | 0,
            i = (4294967295 * Math.random()) | 0,
            n = (4294967295 * Math.random()) | 0;
          return (
            a[255 & t] +
            a[(t >> 8) & 255] +
            a[(t >> 16) & 255] +
            a[(t >> 24) & 255] +
            "-" +
            a[255 & e] +
            a[(e >> 8) & 255] +
            "-" +
            a[((e >> 16) & 15) | 64] +
            a[(e >> 24) & 255] +
            "-" +
            a[(63 & i) | 128] +
            a[(i >> 8) & 255] +
            "-" +
            a[(i >> 16) & 255] +
            a[(i >> 24) & 255] +
            a[255 & n] +
            a[(n >> 8) & 255] +
            a[(n >> 16) & 255] +
            a[(n >> 24) & 255]
          ).toUpperCase();
        },
        clamp: function (t, e, i) {
          return Math.max(e, Math.min(i, t));
        },
        euclideanModulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        mapLinear: function (t, e, i, n, r) {
          return n + ((t - e) * (r - n)) / (i - e);
        },
        lerp: function (t, e, i) {
          return (1 - i) * t + i * e;
        },
        smoothstep: function (t, e, i) {
          return t <= e
            ? 0
            : t >= i
            ? 1
            : (t = (t - e) / (i - e)) * t * (3 - 2 * t);
        },
        smootherstep: function (t, e, i) {
          return t <= e
            ? 0
            : t >= i
            ? 1
            : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10);
        },
        randInt: function (t, e) {
          return t + Math.floor(Math.random() * (e - t + 1));
        },
        randFloat: function (t, e) {
          return t + Math.random() * (e - t);
        },
        randFloatSpread: function (t) {
          return t * (0.5 - Math.random());
        },
        degToRad: function (t) {
          return t * s.DEG2RAD;
        },
        radToDeg: function (t) {
          return t * s.RAD2DEG;
        },
        isPowerOfTwo: function (t) {
          return 0 == (t & (t - 1)) && 0 !== t;
        },
        ceilPowerOfTwo: function (t) {
          return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
        },
        floorPowerOfTwo: function (t) {
          return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
        },
      };
      function c(t, e) {
        (this.x = t || 0), (this.y = e || 0);
      }
      function h(t, e, i, n) {
        (this._x = t || 0),
          (this._y = e || 0),
          (this._z = i || 0),
          (this._w = void 0 !== n ? n : 1);
      }
      Object.defineProperties(c.prototype, {
        width: {
          get: function () {
            return this.x;
          },
          set: function (t) {
            this.x = t;
          },
        },
        height: {
          get: function () {
            return this.y;
          },
          set: function (t) {
            this.y = t;
          },
        },
      }),
        Object.assign(c.prototype, {
          isVector2: !0,
          set: function (t, e) {
            return (this.x = t), (this.y = e), this;
          },
          setScalar: function (t) {
            return (this.x = t), (this.y = t), this;
          },
          setX: function (t) {
            return (this.x = t), this;
          },
          setY: function (t) {
            return (this.y = t), this;
          },
          setComponent: function (t, e) {
            switch (t) {
              case 0:
                this.x = e;
                break;
              case 1:
                this.y = e;
                break;
              default:
                throw new Error("index is out of range: " + t);
            }
            return this;
          },
          getComponent: function (t) {
            switch (t) {
              case 0:
                return this.x;
              case 1:
                return this.y;
              default:
                throw new Error("index is out of range: " + t);
            }
          },
          clone: function () {
            return new this.constructor(this.x, this.y);
          },
          copy: function (t) {
            return (this.x = t.x), (this.y = t.y), this;
          },
          add: function (t, e) {
            return void 0 !== e
              ? this.addVectors(t, e)
              : ((this.x += t.x), (this.y += t.y), this);
          },
          addScalar: function (t) {
            return (this.x += t), (this.y += t), this;
          },
          addVectors: function (t, e) {
            return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
          },
          addScaledVector: function (t, e) {
            return (this.x += t.x * e), (this.y += t.y * e), this;
          },
          sub: function (t, e) {
            return void 0 !== e
              ? this.subVectors(t, e)
              : ((this.x -= t.x), (this.y -= t.y), this);
          },
          subScalar: function (t) {
            return (this.x -= t), (this.y -= t), this;
          },
          subVectors: function (t, e) {
            return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
          },
          multiply: function (t) {
            return (this.x *= t.x), (this.y *= t.y), this;
          },
          multiplyScalar: function (t) {
            return (this.x *= t), (this.y *= t), this;
          },
          divide: function (t) {
            return (this.x /= t.x), (this.y /= t.y), this;
          },
          divideScalar: function (t) {
            return this.multiplyScalar(1 / t);
          },
          applyMatrix3: function (t) {
            var e = this.x,
              i = this.y,
              n = t.elements;
            return (
              (this.x = n[0] * e + n[3] * i + n[6]),
              (this.y = n[1] * e + n[4] * i + n[7]),
              this
            );
          },
          min: function (t) {
            return (
              (this.x = Math.min(this.x, t.x)),
              (this.y = Math.min(this.y, t.y)),
              this
            );
          },
          max: function (t) {
            return (
              (this.x = Math.max(this.x, t.x)),
              (this.y = Math.max(this.y, t.y)),
              this
            );
          },
          clamp: function (t, e) {
            return (
              (this.x = Math.max(t.x, Math.min(e.x, this.x))),
              (this.y = Math.max(t.y, Math.min(e.y, this.y))),
              this
            );
          },
          clampScalar: function (t, e) {
            return (
              (this.x = Math.max(t, Math.min(e, this.x))),
              (this.y = Math.max(t, Math.min(e, this.y))),
              this
            );
          },
          clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(
              Math.max(t, Math.min(e, i))
            );
          },
          floor: function () {
            return (
              (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
            );
          },
          ceil: function () {
            return (
              (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
            );
          },
          round: function () {
            return (
              (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
            );
          },
          roundToZero: function () {
            return (
              (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
              (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
              this
            );
          },
          negate: function () {
            return (this.x = -this.x), (this.y = -this.y), this;
          },
          dot: function (t) {
            return this.x * t.x + this.y * t.y;
          },
          cross: function (t) {
            return this.x * t.y - this.y * t.x;
          },
          lengthSq: function () {
            return this.x * this.x + this.y * this.y;
          },
          length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          },
          manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y);
          },
          normalize: function () {
            return this.divideScalar(this.length() || 1);
          },
          angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t;
          },
          distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t));
          },
          distanceToSquared: function (t) {
            var e = this.x - t.x,
              i = this.y - t.y;
            return e * e + i * i;
          },
          manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
          },
          setLength: function (t) {
            return this.normalize().multiplyScalar(t);
          },
          lerp: function (t, e) {
            return (
              (this.x += (t.x - this.x) * e),
              (this.y += (t.y - this.y) * e),
              this
            );
          },
          lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t);
          },
          equals: function (t) {
            return t.x === this.x && t.y === this.y;
          },
          fromArray: function (t, e) {
            return (
              void 0 === e && (e = 0),
              (this.x = t[e]),
              (this.y = t[e + 1]),
              this
            );
          },
          toArray: function (t, e) {
            return (
              void 0 === t && (t = []),
              void 0 === e && (e = 0),
              (t[e] = this.x),
              (t[e + 1] = this.y),
              t
            );
          },
          fromBufferAttribute: function (t, e, i) {
            return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
          },
          rotateAround: function (t, e) {
            var i = Math.cos(e),
              n = Math.sin(e),
              r = this.x - t.x,
              a = this.y - t.y;
            return (
              (this.x = r * i - a * n + t.x),
              (this.y = r * n + a * i + t.y),
              this
            );
          },
        }),
        Object.assign(h, {
          slerp: function (t, e, i, n) {
            return i.copy(t).slerp(e, n);
          },
          slerpFlat: function (t, e, i, n, r, a, o) {
            var s = i[n + 0],
              c = i[n + 1],
              h = i[n + 2],
              l = i[n + 3],
              u = r[a + 0],
              p = r[a + 1],
              d = r[a + 2],
              f = r[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
              var m = 1 - o,
                v = s * u + c * p + h * d + l * f,
                g = v >= 0 ? 1 : -1,
                y = 1 - v * v;
              if (y > Number.EPSILON) {
                var x = Math.sqrt(y),
                  _ = Math.atan2(x, v * g);
                (m = Math.sin(m * _) / x), (o = Math.sin(o * _) / x);
              }
              var b = o * g;
              if (
                ((s = s * m + u * b),
                (c = c * m + p * b),
                (h = h * m + d * b),
                (l = l * m + f * b),
                m === 1 - o)
              ) {
                var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                (s *= w), (c *= w), (h *= w), (l *= w);
              }
            }
            (t[e] = s), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = l);
          },
        }),
        Object.defineProperties(h.prototype, {
          x: {
            get: function () {
              return this._x;
            },
            set: function (t) {
              (this._x = t), this._onChangeCallback();
            },
          },
          y: {
            get: function () {
              return this._y;
            },
            set: function (t) {
              (this._y = t), this._onChangeCallback();
            },
          },
          z: {
            get: function () {
              return this._z;
            },
            set: function (t) {
              (this._z = t), this._onChangeCallback();
            },
          },
          w: {
            get: function () {
              return this._w;
            },
            set: function (t) {
              (this._w = t), this._onChangeCallback();
            },
          },
        }),
        Object.assign(h.prototype, {
          isQuaternion: !0,
          set: function (t, e, i, n) {
            return (
              (this._x = t),
              (this._y = e),
              (this._z = i),
              (this._w = n),
              this._onChangeCallback(),
              this
            );
          },
          clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w);
          },
          copy: function (t) {
            return (
              (this._x = t.x),
              (this._y = t.y),
              (this._z = t.z),
              (this._w = t.w),
              this._onChangeCallback(),
              this
            );
          },
          setFromEuler: function (t, e) {
            if (!t || !t.isEuler)
              throw new Error(
                "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
              );
            var i = t._x,
              n = t._y,
              r = t._z,
              a = t.order,
              o = Math.cos,
              s = Math.sin,
              c = o(i / 2),
              h = o(n / 2),
              l = o(r / 2),
              u = s(i / 2),
              p = s(n / 2),
              d = s(r / 2);
            return (
              "XYZ" === a
                ? ((this._x = u * h * l + c * p * d),
                  (this._y = c * p * l - u * h * d),
                  (this._z = c * h * d + u * p * l),
                  (this._w = c * h * l - u * p * d))
                : "YXZ" === a
                ? ((this._x = u * h * l + c * p * d),
                  (this._y = c * p * l - u * h * d),
                  (this._z = c * h * d - u * p * l),
                  (this._w = c * h * l + u * p * d))
                : "ZXY" === a
                ? ((this._x = u * h * l - c * p * d),
                  (this._y = c * p * l + u * h * d),
                  (this._z = c * h * d + u * p * l),
                  (this._w = c * h * l - u * p * d))
                : "ZYX" === a
                ? ((this._x = u * h * l - c * p * d),
                  (this._y = c * p * l + u * h * d),
                  (this._z = c * h * d - u * p * l),
                  (this._w = c * h * l + u * p * d))
                : "YZX" === a
                ? ((this._x = u * h * l + c * p * d),
                  (this._y = c * p * l + u * h * d),
                  (this._z = c * h * d - u * p * l),
                  (this._w = c * h * l - u * p * d))
                : "XZY" === a &&
                  ((this._x = u * h * l - c * p * d),
                  (this._y = c * p * l - u * h * d),
                  (this._z = c * h * d + u * p * l),
                  (this._w = c * h * l + u * p * d)),
              !1 !== e && this._onChangeCallback(),
              this
            );
          },
          setFromAxisAngle: function (t, e) {
            var i = e / 2,
              n = Math.sin(i);
            return (
              (this._x = t.x * n),
              (this._y = t.y * n),
              (this._z = t.z * n),
              (this._w = Math.cos(i)),
              this._onChangeCallback(),
              this
            );
          },
          setFromRotationMatrix: function (t) {
            var e,
              i = t.elements,
              n = i[0],
              r = i[4],
              a = i[8],
              o = i[1],
              s = i[5],
              c = i[9],
              h = i[2],
              l = i[6],
              u = i[10],
              p = n + s + u;
            return (
              p > 0
                ? ((e = 0.5 / Math.sqrt(p + 1)),
                  (this._w = 0.25 / e),
                  (this._x = (l - c) * e),
                  (this._y = (a - h) * e),
                  (this._z = (o - r) * e))
                : n > s && n > u
                ? ((e = 2 * Math.sqrt(1 + n - s - u)),
                  (this._w = (l - c) / e),
                  (this._x = 0.25 * e),
                  (this._y = (r + o) / e),
                  (this._z = (a + h) / e))
                : s > u
                ? ((e = 2 * Math.sqrt(1 + s - n - u)),
                  (this._w = (a - h) / e),
                  (this._x = (r + o) / e),
                  (this._y = 0.25 * e),
                  (this._z = (c + l) / e))
                : ((e = 2 * Math.sqrt(1 + u - n - s)),
                  (this._w = (o - r) / e),
                  (this._x = (a + h) / e),
                  (this._y = (c + l) / e),
                  (this._z = 0.25 * e)),
              this._onChangeCallback(),
              this
            );
          },
          setFromUnitVectors: function (t, e) {
            var i = t.dot(e) + 1;
            return (
              i < 1e-6
                ? ((i = 0),
                  Math.abs(t.x) > Math.abs(t.z)
                    ? ((this._x = -t.y),
                      (this._y = t.x),
                      (this._z = 0),
                      (this._w = i))
                    : ((this._x = 0),
                      (this._y = -t.z),
                      (this._z = t.y),
                      (this._w = i)))
                : ((this._x = t.y * e.z - t.z * e.y),
                  (this._y = t.z * e.x - t.x * e.z),
                  (this._z = t.x * e.y - t.y * e.x),
                  (this._w = i)),
              this.normalize()
            );
          },
          angleTo: function (t) {
            return 2 * Math.acos(Math.abs(s.clamp(this.dot(t), -1, 1)));
          },
          rotateTowards: function (t, e) {
            var i = this.angleTo(t);
            if (0 === i) return this;
            var n = Math.min(1, e / i);
            return this.slerp(t, n), this;
          },
          inverse: function () {
            return this.conjugate();
          },
          conjugate: function () {
            return (
              (this._x *= -1),
              (this._y *= -1),
              (this._z *= -1),
              this._onChangeCallback(),
              this
            );
          },
          dot: function (t) {
            return (
              this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            );
          },
          lengthSq: function () {
            return (
              this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
            );
          },
          length: function () {
            return Math.sqrt(
              this._x * this._x +
                this._y * this._y +
                this._z * this._z +
                this._w * this._w
            );
          },
          normalize: function () {
            var t = this.length();
            return (
              0 === t
                ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
                : ((t = 1 / t),
                  (this._x = this._x * t),
                  (this._y = this._y * t),
                  (this._z = this._z * t),
                  (this._w = this._w * t)),
              this._onChangeCallback(),
              this
            );
          },
          multiply: function (t, e) {
            return void 0 !== e
              ? this.multiplyQuaternions(t, e)
              : this.multiplyQuaternions(this, t);
          },
          premultiply: function (t) {
            return this.multiplyQuaternions(t, this);
          },
          multiplyQuaternions: function (t, e) {
            var i = t._x,
              n = t._y,
              r = t._z,
              a = t._w,
              o = e._x,
              s = e._y,
              c = e._z,
              h = e._w;
            return (
              (this._x = i * h + a * o + n * c - r * s),
              (this._y = n * h + a * s + r * o - i * c),
              (this._z = r * h + a * c + i * s - n * o),
              (this._w = a * h - i * o - n * s - r * c),
              this._onChangeCallback(),
              this
            );
          },
          slerp: function (t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var i = this._x,
              n = this._y,
              r = this._z,
              a = this._w,
              o = a * t._w + i * t._x + n * t._y + r * t._z;
            if (
              (o < 0
                ? ((this._w = -t._w),
                  (this._x = -t._x),
                  (this._y = -t._y),
                  (this._z = -t._z),
                  (o = -o))
                : this.copy(t),
              o >= 1)
            )
              return (
                (this._w = a), (this._x = i), (this._y = n), (this._z = r), this
              );
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
              var c = 1 - e;
              return (
                (this._w = c * a + e * this._w),
                (this._x = c * i + e * this._x),
                (this._y = c * n + e * this._y),
                (this._z = c * r + e * this._z),
                this.normalize(),
                this._onChangeCallback(),
                this
              );
            }
            var h = Math.sqrt(s),
              l = Math.atan2(h, o),
              u = Math.sin((1 - e) * l) / h,
              p = Math.sin(e * l) / h;
            return (
              (this._w = a * u + this._w * p),
              (this._x = i * u + this._x * p),
              (this._y = n * u + this._y * p),
              (this._z = r * u + this._z * p),
              this._onChangeCallback(),
              this
            );
          },
          equals: function (t) {
            return (
              t._x === this._x &&
              t._y === this._y &&
              t._z === this._z &&
              t._w === this._w
            );
          },
          fromArray: function (t, e) {
            return (
              void 0 === e && (e = 0),
              (this._x = t[e]),
              (this._y = t[e + 1]),
              (this._z = t[e + 2]),
              (this._w = t[e + 3]),
              this._onChangeCallback(),
              this
            );
          },
          toArray: function (t, e) {
            return (
              void 0 === t && (t = []),
              void 0 === e && (e = 0),
              (t[e] = this._x),
              (t[e + 1] = this._y),
              (t[e + 2] = this._z),
              (t[e + 3] = this._w),
              t
            );
          },
          _onChange: function (t) {
            return (this._onChangeCallback = t), this;
          },
          _onChangeCallback: function () {},
        });
      var l = new p(),
        u = new h();
      function p(t, e, i) {
        (this.x = t || 0), (this.y = e || 0), (this.z = i || 0);
      }
      Object.assign(p.prototype, {
        isVector3: !0,
        set: function (t, e, i) {
          return (this.x = t), (this.y = e), (this.z = i), this;
        },
        setScalar: function (t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        },
        setX: function (t) {
          return (this.x = t), this;
        },
        setY: function (t) {
          return (this.y = t), this;
        },
        setZ: function (t) {
          return (this.z = t), this;
        },
        setComponent: function (t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        },
        getComponent: function (t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y, this.z);
        },
        copy: function (t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        },
        add: function (t, e) {
          return void 0 !== e
            ? this.addVectors(t, e)
            : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
        },
        addScalar: function (t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        },
        addVectors: function (t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        },
        addScaledVector: function (t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        },
        sub: function (t, e) {
          return void 0 !== e
            ? this.subVectors(t, e)
            : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
        },
        subScalar: function (t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        },
        subVectors: function (t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        },
        multiply: function (t, e) {
          return void 0 !== e
            ? this.multiplyVectors(t, e)
            : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
        },
        multiplyScalar: function (t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        },
        multiplyVectors: function (t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        },
        applyEuler: function (t) {
          return !t || t.isEuler, this.applyQuaternion(u.setFromEuler(t));
        },
        applyAxisAngle: function (t, e) {
          return this.applyQuaternion(u.setFromAxisAngle(t, e));
        },
        applyMatrix3: function (t) {
          var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[3] * i + r[6] * n),
            (this.y = r[1] * e + r[4] * i + r[7] * n),
            (this.z = r[2] * e + r[5] * i + r[8] * n),
            this
          );
        },
        applyMatrix4: function (t) {
          var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
          return (
            (this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a),
            (this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a),
            (this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a),
            this
          );
        },
        applyQuaternion: function (t) {
          var e = this.x,
            i = this.y,
            n = this.z,
            r = t.x,
            a = t.y,
            o = t.z,
            s = t.w,
            c = s * e + a * n - o * i,
            h = s * i + o * e - r * n,
            l = s * n + r * i - a * e,
            u = -r * e - a * i - o * n;
          return (
            (this.x = c * s + u * -r + h * -o - l * -a),
            (this.y = h * s + u * -a + l * -r - c * -o),
            (this.z = l * s + u * -o + c * -a - h * -r),
            this
          );
        },
        project: function (t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
            t.projectionMatrix
          );
        },
        unproject: function (t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
            t.matrixWorld
          );
        },
        transformDirection: function (t) {
          var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[4] * i + r[8] * n),
            (this.y = r[1] * e + r[5] * i + r[9] * n),
            (this.z = r[2] * e + r[6] * i + r[10] * n),
            this.normalize()
          );
        },
        divide: function (t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        },
        divideScalar: function (t) {
          return this.multiplyScalar(1 / t);
        },
        min: function (t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        },
        max: function (t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        },
        clamp: function (t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        },
        clampScalar: function (t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            this
          );
        },
        clampLength: function (t, e) {
          var i = this.length();
          return this.divideScalar(i || 1).multiplyScalar(
            Math.max(t, Math.min(e, i))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        },
        negate: function () {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        },
        dot: function (t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        manhattanLength: function () {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        setLength: function (t) {
          return this.normalize().multiplyScalar(t);
        },
        lerp: function (t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        },
        lerpVectors: function (t, e, i) {
          return this.subVectors(e, t).multiplyScalar(i).add(t);
        },
        cross: function (t, e) {
          return void 0 !== e
            ? this.crossVectors(t, e)
            : this.crossVectors(this, t);
        },
        crossVectors: function (t, e) {
          var i = t.x,
            n = t.y,
            r = t.z,
            a = e.x,
            o = e.y,
            s = e.z;
          return (
            (this.x = n * s - r * o),
            (this.y = r * a - i * s),
            (this.z = i * o - n * a),
            this
          );
        },
        projectOnVector: function (t) {
          var e = t.dot(this) / t.lengthSq();
          return this.copy(t).multiplyScalar(e);
        },
        projectOnPlane: function (t) {
          return l.copy(this).projectOnVector(t), this.sub(l);
        },
        reflect: function (t) {
          return this.sub(l.copy(t).multiplyScalar(2 * this.dot(t)));
        },
        angleTo: function (t) {
          var e = Math.sqrt(this.lengthSq() * t.lengthSq()),
            i = this.dot(t) / e;
          return Math.acos(s.clamp(i, -1, 1));
        },
        distanceTo: function (t) {
          return Math.sqrt(this.distanceToSquared(t));
        },
        distanceToSquared: function (t) {
          var e = this.x - t.x,
            i = this.y - t.y,
            n = this.z - t.z;
          return e * e + i * i + n * n;
        },
        manhattanDistanceTo: function (t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        },
        setFromSpherical: function (t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        },
        setFromSphericalCoords: function (t, e, i) {
          var n = Math.sin(e) * t;
          return (
            (this.x = n * Math.sin(i)),
            (this.y = Math.cos(e) * t),
            (this.z = n * Math.cos(i)),
            this
          );
        },
        setFromCylindrical: function (t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        },
        setFromCylindricalCoords: function (t, e, i) {
          return (
            (this.x = t * Math.sin(e)),
            (this.y = i),
            (this.z = t * Math.cos(e)),
            this
          );
        },
        setFromMatrixPosition: function (t) {
          var e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        },
        setFromMatrixScale: function (t) {
          var e = this.setFromMatrixColumn(t, 0).length(),
            i = this.setFromMatrixColumn(t, 1).length(),
            n = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = i), (this.z = n), this;
        },
        setFromMatrixColumn: function (t, e) {
          return this.fromArray(t.elements, 4 * e);
        },
        equals: function (t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            t
          );
        },
        fromBufferAttribute: function (t, e, i) {
          return (
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        },
      });
      var d,
        f = new p();
      function m() {
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length;
      }
      Object.assign(m.prototype, {
        isMatrix3: !0,
        set: function (t, e, i, n, r, a, o, s, c) {
          var h = this.elements;
          return (
            (h[0] = t),
            (h[1] = n),
            (h[2] = o),
            (h[3] = e),
            (h[4] = r),
            (h[5] = s),
            (h[6] = i),
            (h[7] = a),
            (h[8] = c),
            this
          );
        },
        identity: function () {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        },
        clone: function () {
          return new this.constructor().fromArray(this.elements);
        },
        copy: function (t) {
          var e = this.elements,
            i = t.elements;
          return (
            (e[0] = i[0]),
            (e[1] = i[1]),
            (e[2] = i[2]),
            (e[3] = i[3]),
            (e[4] = i[4]),
            (e[5] = i[5]),
            (e[6] = i[6]),
            (e[7] = i[7]),
            (e[8] = i[8]),
            this
          );
        },
        setFromMatrix4: function (t) {
          var e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        },
        applyToBufferAttribute: function (t) {
          for (var e = 0, i = t.count; e < i; e++)
            (f.x = t.getX(e)),
              (f.y = t.getY(e)),
              (f.z = t.getZ(e)),
              f.applyMatrix3(this),
              t.setXYZ(e, f.x, f.y, f.z);
          return t;
        },
        multiply: function (t) {
          return this.multiplyMatrices(this, t);
        },
        premultiply: function (t) {
          return this.multiplyMatrices(t, this);
        },
        multiplyMatrices: function (t, e) {
          var i = t.elements,
            n = e.elements,
            r = this.elements,
            a = i[0],
            o = i[3],
            s = i[6],
            c = i[1],
            h = i[4],
            l = i[7],
            u = i[2],
            p = i[5],
            d = i[8],
            f = n[0],
            m = n[3],
            v = n[6],
            g = n[1],
            y = n[4],
            x = n[7],
            _ = n[2],
            b = n[5],
            w = n[8];
          return (
            (r[0] = a * f + o * g + s * _),
            (r[3] = a * m + o * y + s * b),
            (r[6] = a * v + o * x + s * w),
            (r[1] = c * f + h * g + l * _),
            (r[4] = c * m + h * y + l * b),
            (r[7] = c * v + h * x + l * w),
            (r[2] = u * f + p * g + d * _),
            (r[5] = u * m + p * y + d * b),
            (r[8] = u * v + p * x + d * w),
            this
          );
        },
        multiplyScalar: function (t) {
          var e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        },
        determinant: function () {
          var t = this.elements,
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            s = t[6],
            c = t[7],
            h = t[8];
          return (
            e * a * h -
            e * o * c -
            i * r * h +
            i * o * s +
            n * r * c -
            n * a * s
          );
        },
        getInverse: function (t, e) {
          t && t.isMatrix4;
          var i = t.elements,
            n = this.elements,
            r = i[0],
            a = i[1],
            o = i[2],
            s = i[3],
            c = i[4],
            h = i[5],
            l = i[6],
            u = i[7],
            p = i[8],
            d = p * c - h * u,
            f = h * l - p * s,
            m = u * s - c * l,
            v = r * d + a * f + o * m;
          if (0 === v) {
            if (!0 === e)
              throw new Error(
                "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"
              );
            return this.identity();
          }
          var g = 1 / v;
          return (
            (n[0] = d * g),
            (n[1] = (o * u - p * a) * g),
            (n[2] = (h * a - o * c) * g),
            (n[3] = f * g),
            (n[4] = (p * r - o * l) * g),
            (n[5] = (o * s - h * r) * g),
            (n[6] = m * g),
            (n[7] = (a * l - u * r) * g),
            (n[8] = (c * r - a * s) * g),
            this
          );
        },
        transpose: function () {
          var t,
            e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        },
        getNormalMatrix: function (t) {
          return this.setFromMatrix4(t).getInverse(this).transpose();
        },
        transposeIntoArray: function (t) {
          var e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        },
        setUvTransform: function (t, e, i, n, r, a, o) {
          var s = Math.cos(r),
            c = Math.sin(r);
          this.set(
            i * s,
            i * c,
            -i * (s * a + c * o) + a + t,
            -n * c,
            n * s,
            -n * (-c * a + s * o) + o + e,
            0,
            0,
            1
          );
        },
        scale: function (t, e) {
          var i = this.elements;
          return (
            (i[0] *= t),
            (i[3] *= t),
            (i[6] *= t),
            (i[1] *= e),
            (i[4] *= e),
            (i[7] *= e),
            this
          );
        },
        rotate: function (t) {
          var e = Math.cos(t),
            i = Math.sin(t),
            n = this.elements,
            r = n[0],
            a = n[3],
            o = n[6],
            s = n[1],
            c = n[4],
            h = n[7];
          return (
            (n[0] = e * r + i * s),
            (n[3] = e * a + i * c),
            (n[6] = e * o + i * h),
            (n[1] = -i * r + e * s),
            (n[4] = -i * a + e * c),
            (n[7] = -i * o + e * h),
            this
          );
        },
        translate: function (t, e) {
          var i = this.elements;
          return (
            (i[0] += t * i[2]),
            (i[3] += t * i[5]),
            (i[6] += t * i[8]),
            (i[1] += e * i[2]),
            (i[4] += e * i[5]),
            (i[7] += e * i[8]),
            this
          );
        },
        equals: function (t) {
          for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
            if (e[n] !== i[n]) return !1;
          return !0;
        },
        fromArray: function (t, e) {
          void 0 === e && (e = 0);
          for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
          return this;
        },
        toArray: function (t, e) {
          void 0 === t && (t = []), void 0 === e && (e = 0);
          var i = this.elements;
          return (
            (t[e] = i[0]),
            (t[e + 1] = i[1]),
            (t[e + 2] = i[2]),
            (t[e + 3] = i[3]),
            (t[e + 4] = i[4]),
            (t[e + 5] = i[5]),
            (t[e + 6] = i[6]),
            (t[e + 7] = i[7]),
            (t[e + 8] = i[8]),
            t
          );
        },
      });
      var v = {
          getDataURL: function (t) {
            var e;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
              void 0 === d &&
                (d = document.createElementNS(
                  "http://www.w3.org/1999/xhtml",
                  "canvas"
                )),
                (d.width = t.width),
                (d.height = t.height);
              var i = d.getContext("2d");
              t instanceof ImageData
                ? i.putImageData(t, 0, 0)
                : i.drawImage(t, 0, 0, t.width, t.height),
                (e = d);
            }
            return e.width > 2048 || e.height > 2048
              ? e.toDataURL("image/jpeg", 0.6)
              : e.toDataURL("image/png");
          },
        },
        g = 0;
      function y(t, e, i, r, a, o, h, l, u, p) {
        Object.defineProperty(this, "id", { value: g++ }),
          (this.uuid = s.generateUUID()),
          (this.name = ""),
          (this.image = void 0 !== t ? t : y.DEFAULT_IMAGE),
          (this.mipmaps = []),
          (this.mapping = void 0 !== e ? e : y.DEFAULT_MAPPING),
          (this.wrapS = void 0 !== i ? i : 1001),
          (this.wrapT = void 0 !== r ? r : 1001),
          (this.magFilter = void 0 !== a ? a : n),
          (this.minFilter = void 0 !== o ? o : 1008),
          (this.anisotropy = void 0 !== u ? u : 1),
          (this.format = void 0 !== h ? h : 1023),
          (this.type = void 0 !== l ? l : 1009),
          (this.offset = new c(0, 0)),
          (this.repeat = new c(1, 1)),
          (this.center = new c(0, 0)),
          (this.rotation = 0),
          (this.matrixAutoUpdate = !0),
          (this.matrix = new m()),
          (this.generateMipmaps = !0),
          (this.premultiplyAlpha = !1),
          (this.flipY = !0),
          (this.unpackAlignment = 4),
          (this.encoding = void 0 !== p ? p : 3e3),
          (this.version = 0),
          (this.onUpdate = null);
      }
      function x(t, e, i, n) {
        (this.x = t || 0),
          (this.y = e || 0),
          (this.z = i || 0),
          (this.w = void 0 !== n ? n : 1);
      }
      function _(t, e, i) {
        (this.width = t),
          (this.height = e),
          (this.scissor = new x(0, 0, t, e)),
          (this.scissorTest = !1),
          (this.viewport = new x(0, 0, t, e)),
          (i = i || {}),
          (this.texture = new y(
            void 0,
            void 0,
            i.wrapS,
            i.wrapT,
            i.magFilter,
            i.minFilter,
            i.format,
            i.type,
            i.anisotropy,
            i.encoding
          )),
          (this.texture.image = {}),
          (this.texture.image.width = t),
          (this.texture.image.height = e),
          (this.texture.generateMipmaps =
            void 0 !== i.generateMipmaps && i.generateMipmaps),
          (this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : n),
          (this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer),
          (this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer),
          (this.depthTexture =
            void 0 !== i.depthTexture ? i.depthTexture : null);
      }
      function b(t, e, i) {
        _.call(this, t, e, i), (this.samples = 4);
      }
      (y.DEFAULT_IMAGE = void 0),
        (y.DEFAULT_MAPPING = 300),
        (y.prototype = Object.assign(Object.create(r.prototype), {
          constructor: y,
          isTexture: !0,
          updateMatrix: function () {
            this.matrix.setUvTransform(
              this.offset.x,
              this.offset.y,
              this.repeat.x,
              this.repeat.y,
              this.rotation,
              this.center.x,
              this.center.y
            );
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          copy: function (t) {
            return (
              (this.name = t.name),
              (this.image = t.image),
              (this.mipmaps = t.mipmaps.slice(0)),
              (this.mapping = t.mapping),
              (this.wrapS = t.wrapS),
              (this.wrapT = t.wrapT),
              (this.magFilter = t.magFilter),
              (this.minFilter = t.minFilter),
              (this.anisotropy = t.anisotropy),
              (this.format = t.format),
              (this.type = t.type),
              this.offset.copy(t.offset),
              this.repeat.copy(t.repeat),
              this.center.copy(t.center),
              (this.rotation = t.rotation),
              (this.matrixAutoUpdate = t.matrixAutoUpdate),
              this.matrix.copy(t.matrix),
              (this.generateMipmaps = t.generateMipmaps),
              (this.premultiplyAlpha = t.premultiplyAlpha),
              (this.flipY = t.flipY),
              (this.unpackAlignment = t.unpackAlignment),
              (this.encoding = t.encoding),
              this
            );
          },
          toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
              return t.textures[this.uuid];
            var i = {
              metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON",
              },
              uuid: this.uuid,
              name: this.name,
              mapping: this.mapping,
              repeat: [this.repeat.x, this.repeat.y],
              offset: [this.offset.x, this.offset.y],
              center: [this.center.x, this.center.y],
              rotation: this.rotation,
              wrap: [this.wrapS, this.wrapT],
              format: this.format,
              type: this.type,
              encoding: this.encoding,
              minFilter: this.minFilter,
              magFilter: this.magFilter,
              anisotropy: this.anisotropy,
              flipY: this.flipY,
              premultiplyAlpha: this.premultiplyAlpha,
              unpackAlignment: this.unpackAlignment,
            };
            if (void 0 !== this.image) {
              var n = this.image;
              if (
                (void 0 === n.uuid && (n.uuid = s.generateUUID()),
                !e && void 0 === t.images[n.uuid])
              ) {
                var r;
                if (Array.isArray(n)) {
                  r = [];
                  for (var a = 0, o = n.length; a < o; a++)
                    r.push(v.getDataURL(n[a]));
                } else r = v.getDataURL(n);
                t.images[n.uuid] = { uuid: n.uuid, url: r };
              }
              i.image = n.uuid;
            }
            return e || (t.textures[this.uuid] = i), i;
          },
          dispose: function () {
            this.dispatchEvent({ type: "dispose" });
          },
          transformUv: function (t) {
            if (300 !== this.mapping) return t;
            if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
              switch (this.wrapS) {
                case 1e3:
                  t.x = t.x - Math.floor(t.x);
                  break;
                case 1001:
                  t.x = t.x < 0 ? 0 : 1;
                  break;
                case 1002:
                  1 === Math.abs(Math.floor(t.x) % 2)
                    ? (t.x = Math.ceil(t.x) - t.x)
                    : (t.x = t.x - Math.floor(t.x));
              }
            if (t.y < 0 || t.y > 1)
              switch (this.wrapT) {
                case 1e3:
                  t.y = t.y - Math.floor(t.y);
                  break;
                case 1001:
                  t.y = t.y < 0 ? 0 : 1;
                  break;
                case 1002:
                  1 === Math.abs(Math.floor(t.y) % 2)
                    ? (t.y = Math.ceil(t.y) - t.y)
                    : (t.y = t.y - Math.floor(t.y));
              }
            return this.flipY && (t.y = 1 - t.y), t;
          },
        })),
        Object.defineProperty(y.prototype, "needsUpdate", {
          set: function (t) {
            !0 === t && this.version++;
          },
        }),
        Object.defineProperties(x.prototype, {
          width: {
            get: function () {
              return this.z;
            },
            set: function (t) {
              this.z = t;
            },
          },
          height: {
            get: function () {
              return this.w;
            },
            set: function (t) {
              this.w = t;
            },
          },
        }),
        Object.assign(x.prototype, {
          isVector4: !0,
          set: function (t, e, i, n) {
            return (this.x = t), (this.y = e), (this.z = i), (this.w = n), this;
          },
          setScalar: function (t) {
            return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
          },
          setX: function (t) {
            return (this.x = t), this;
          },
          setY: function (t) {
            return (this.y = t), this;
          },
          setZ: function (t) {
            return (this.z = t), this;
          },
          setW: function (t) {
            return (this.w = t), this;
          },
          setComponent: function (t, e) {
            switch (t) {
              case 0:
                this.x = e;
                break;
              case 1:
                this.y = e;
                break;
              case 2:
                this.z = e;
                break;
              case 3:
                this.w = e;
                break;
              default:
                throw new Error("index is out of range: " + t);
            }
            return this;
          },
          getComponent: function (t) {
            switch (t) {
              case 0:
                return this.x;
              case 1:
                return this.y;
              case 2:
                return this.z;
              case 3:
                return this.w;
              default:
                throw new Error("index is out of range: " + t);
            }
          },
          clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w);
          },
          copy: function (t) {
            return (
              (this.x = t.x),
              (this.y = t.y),
              (this.z = t.z),
              (this.w = void 0 !== t.w ? t.w : 1),
              this
            );
          },
          add: function (t, e) {
            return void 0 !== e
              ? this.addVectors(t, e)
              : ((this.x += t.x),
                (this.y += t.y),
                (this.z += t.z),
                (this.w += t.w),
                this);
          },
          addScalar: function (t) {
            return (
              (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
            );
          },
          addVectors: function (t, e) {
            return (
              (this.x = t.x + e.x),
              (this.y = t.y + e.y),
              (this.z = t.z + e.z),
              (this.w = t.w + e.w),
              this
            );
          },
          addScaledVector: function (t, e) {
            return (
              (this.x += t.x * e),
              (this.y += t.y * e),
              (this.z += t.z * e),
              (this.w += t.w * e),
              this
            );
          },
          sub: function (t, e) {
            return void 0 !== e
              ? this.subVectors(t, e)
              : ((this.x -= t.x),
                (this.y -= t.y),
                (this.z -= t.z),
                (this.w -= t.w),
                this);
          },
          subScalar: function (t) {
            return (
              (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
            );
          },
          subVectors: function (t, e) {
            return (
              (this.x = t.x - e.x),
              (this.y = t.y - e.y),
              (this.z = t.z - e.z),
              (this.w = t.w - e.w),
              this
            );
          },
          multiplyScalar: function (t) {
            return (
              (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            );
          },
          applyMatrix4: function (t) {
            var e = this.x,
              i = this.y,
              n = this.z,
              r = this.w,
              a = t.elements;
            return (
              (this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r),
              (this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r),
              (this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r),
              (this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r),
              this
            );
          },
          divideScalar: function (t) {
            return this.multiplyScalar(1 / t);
          },
          setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return (
              e < 1e-4
                ? ((this.x = 1), (this.y = 0), (this.z = 0))
                : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
              this
            );
          },
          setAxisAngleFromRotationMatrix: function (t) {
            var e,
              i,
              n,
              r,
              a = t.elements,
              o = a[0],
              s = a[4],
              c = a[8],
              h = a[1],
              l = a[5],
              u = a[9],
              p = a[2],
              d = a[6],
              f = a[10];
            if (
              Math.abs(s - h) < 0.01 &&
              Math.abs(c - p) < 0.01 &&
              Math.abs(u - d) < 0.01
            ) {
              if (
                Math.abs(s + h) < 0.1 &&
                Math.abs(c + p) < 0.1 &&
                Math.abs(u + d) < 0.1 &&
                Math.abs(o + l + f - 3) < 0.1
              )
                return this.set(1, 0, 0, 0), this;
              e = Math.PI;
              var m = (o + 1) / 2,
                v = (l + 1) / 2,
                g = (f + 1) / 2,
                y = (s + h) / 4,
                x = (c + p) / 4,
                _ = (u + d) / 4;
              return (
                m > v && m > g
                  ? m < 0.01
                    ? ((i = 0), (n = 0.707106781), (r = 0.707106781))
                    : ((n = y / (i = Math.sqrt(m))), (r = x / i))
                  : v > g
                  ? v < 0.01
                    ? ((i = 0.707106781), (n = 0), (r = 0.707106781))
                    : ((i = y / (n = Math.sqrt(v))), (r = _ / n))
                  : g < 0.01
                  ? ((i = 0.707106781), (n = 0.707106781), (r = 0))
                  : ((i = x / (r = Math.sqrt(g))), (n = _ / r)),
                this.set(i, n, r, e),
                this
              );
            }
            var b = Math.sqrt(
              (d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s)
            );
            return (
              Math.abs(b) < 0.001 && (b = 1),
              (this.x = (d - u) / b),
              (this.y = (c - p) / b),
              (this.z = (h - s) / b),
              (this.w = Math.acos((o + l + f - 1) / 2)),
              this
            );
          },
          min: function (t) {
            return (
              (this.x = Math.min(this.x, t.x)),
              (this.y = Math.min(this.y, t.y)),
              (this.z = Math.min(this.z, t.z)),
              (this.w = Math.min(this.w, t.w)),
              this
            );
          },
          max: function (t) {
            return (
              (this.x = Math.max(this.x, t.x)),
              (this.y = Math.max(this.y, t.y)),
              (this.z = Math.max(this.z, t.z)),
              (this.w = Math.max(this.w, t.w)),
              this
            );
          },
          clamp: function (t, e) {
            return (
              (this.x = Math.max(t.x, Math.min(e.x, this.x))),
              (this.y = Math.max(t.y, Math.min(e.y, this.y))),
              (this.z = Math.max(t.z, Math.min(e.z, this.z))),
              (this.w = Math.max(t.w, Math.min(e.w, this.w))),
              this
            );
          },
          clampScalar: function (t, e) {
            return (
              (this.x = Math.max(t, Math.min(e, this.x))),
              (this.y = Math.max(t, Math.min(e, this.y))),
              (this.z = Math.max(t, Math.min(e, this.z))),
              (this.w = Math.max(t, Math.min(e, this.w))),
              this
            );
          },
          clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(
              Math.max(t, Math.min(e, i))
            );
          },
          floor: function () {
            return (
              (this.x = Math.floor(this.x)),
              (this.y = Math.floor(this.y)),
              (this.z = Math.floor(this.z)),
              (this.w = Math.floor(this.w)),
              this
            );
          },
          ceil: function () {
            return (
              (this.x = Math.ceil(this.x)),
              (this.y = Math.ceil(this.y)),
              (this.z = Math.ceil(this.z)),
              (this.w = Math.ceil(this.w)),
              this
            );
          },
          round: function () {
            return (
              (this.x = Math.round(this.x)),
              (this.y = Math.round(this.y)),
              (this.z = Math.round(this.z)),
              (this.w = Math.round(this.w)),
              this
            );
          },
          roundToZero: function () {
            return (
              (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
              (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
              (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
              (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
              this
            );
          },
          negate: function () {
            return (
              (this.x = -this.x),
              (this.y = -this.y),
              (this.z = -this.z),
              (this.w = -this.w),
              this
            );
          },
          dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
          },
          lengthSq: function () {
            return (
              this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
            );
          },
          length: function () {
            return Math.sqrt(
              this.x * this.x +
                this.y * this.y +
                this.z * this.z +
                this.w * this.w
            );
          },
          manhattanLength: function () {
            return (
              Math.abs(this.x) +
              Math.abs(this.y) +
              Math.abs(this.z) +
              Math.abs(this.w)
            );
          },
          normalize: function () {
            return this.divideScalar(this.length() || 1);
          },
          setLength: function (t) {
            return this.normalize().multiplyScalar(t);
          },
          lerp: function (t, e) {
            return (
              (this.x += (t.x - this.x) * e),
              (this.y += (t.y - this.y) * e),
              (this.z += (t.z - this.z) * e),
              (this.w += (t.w - this.w) * e),
              this
            );
          },
          lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t);
          },
          equals: function (t) {
            return (
              t.x === this.x &&
              t.y === this.y &&
              t.z === this.z &&
              t.w === this.w
            );
          },
          fromArray: function (t, e) {
            return (
              void 0 === e && (e = 0),
              (this.x = t[e]),
              (this.y = t[e + 1]),
              (this.z = t[e + 2]),
              (this.w = t[e + 3]),
              this
            );
          },
          toArray: function (t, e) {
            return (
              void 0 === t && (t = []),
              void 0 === e && (e = 0),
              (t[e] = this.x),
              (t[e + 1] = this.y),
              (t[e + 2] = this.z),
              (t[e + 3] = this.w),
              t
            );
          },
          fromBufferAttribute: function (t, e, i) {
            return (
              (this.x = t.getX(e)),
              (this.y = t.getY(e)),
              (this.z = t.getZ(e)),
              (this.w = t.getW(e)),
              this
            );
          },
        }),
        (_.prototype = Object.assign(Object.create(r.prototype), {
          constructor: _,
          isWebGLRenderTarget: !0,
          setSize: function (t, e) {
            (this.width === t && this.height === e) ||
              ((this.width = t),
              (this.height = e),
              (this.texture.image.width = t),
              (this.texture.image.height = e),
              this.dispose()),
              this.viewport.set(0, 0, t, e),
              this.scissor.set(0, 0, t, e);
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          copy: function (t) {
            return (
              (this.width = t.width),
              (this.height = t.height),
              this.viewport.copy(t.viewport),
              (this.texture = t.texture.clone()),
              (this.depthBuffer = t.depthBuffer),
              (this.stencilBuffer = t.stencilBuffer),
              (this.depthTexture = t.depthTexture),
              this
            );
          },
          dispose: function () {
            this.dispatchEvent({ type: "dispose" });
          },
        })),
        (b.prototype = Object.assign(Object.create(_.prototype), {
          constructor: b,
          isWebGLMultisampleRenderTarget: !0,
          copy: function (t) {
            return (
              _.prototype.copy.call(this, t), (this.samples = t.samples), this
            );
          },
        }));
      var w = new p(),
        M = new C(),
        S = new p(0, 0, 0),
        A = new p(1, 1, 1),
        T = new p(),
        L = new p(),
        P = new p();
      function C() {
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
          arguments.length;
      }
      Object.assign(C.prototype, {
        isMatrix4: !0,
        set: function (t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
          var v = this.elements;
          return (
            (v[0] = t),
            (v[4] = e),
            (v[8] = i),
            (v[12] = n),
            (v[1] = r),
            (v[5] = a),
            (v[9] = o),
            (v[13] = s),
            (v[2] = c),
            (v[6] = h),
            (v[10] = l),
            (v[14] = u),
            (v[3] = p),
            (v[7] = d),
            (v[11] = f),
            (v[15] = m),
            this
          );
        },
        identity: function () {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        },
        clone: function () {
          return new C().fromArray(this.elements);
        },
        copy: function (t) {
          var e = this.elements,
            i = t.elements;
          return (
            (e[0] = i[0]),
            (e[1] = i[1]),
            (e[2] = i[2]),
            (e[3] = i[3]),
            (e[4] = i[4]),
            (e[5] = i[5]),
            (e[6] = i[6]),
            (e[7] = i[7]),
            (e[8] = i[8]),
            (e[9] = i[9]),
            (e[10] = i[10]),
            (e[11] = i[11]),
            (e[12] = i[12]),
            (e[13] = i[13]),
            (e[14] = i[14]),
            (e[15] = i[15]),
            this
          );
        },
        copyPosition: function (t) {
          var e = this.elements,
            i = t.elements;
          return (e[12] = i[12]), (e[13] = i[13]), (e[14] = i[14]), this;
        },
        extractBasis: function (t, e, i) {
          return (
            t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            i.setFromMatrixColumn(this, 2),
            this
          );
        },
        makeBasis: function (t, e, i) {
          return (
            this.set(
              t.x,
              e.x,
              i.x,
              0,
              t.y,
              e.y,
              i.y,
              0,
              t.z,
              e.z,
              i.z,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        },
        extractRotation: function (t) {
          var e = this.elements,
            i = t.elements,
            n = 1 / w.setFromMatrixColumn(t, 0).length(),
            r = 1 / w.setFromMatrixColumn(t, 1).length(),
            a = 1 / w.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = i[0] * n),
            (e[1] = i[1] * n),
            (e[2] = i[2] * n),
            (e[3] = 0),
            (e[4] = i[4] * r),
            (e[5] = i[5] * r),
            (e[6] = i[6] * r),
            (e[7] = 0),
            (e[8] = i[8] * a),
            (e[9] = i[9] * a),
            (e[10] = i[10] * a),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        },
        makeRotationFromEuler: function (t) {
          !t || t.isEuler;
          var e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z,
            a = Math.cos(i),
            o = Math.sin(i),
            s = Math.cos(n),
            c = Math.sin(n),
            h = Math.cos(r),
            l = Math.sin(r);
          if ("XYZ" === t.order) {
            var u = a * h,
              p = a * l,
              d = o * h,
              f = o * l;
            (e[0] = s * h),
              (e[4] = -s * l),
              (e[8] = c),
              (e[1] = p + d * c),
              (e[5] = u - f * c),
              (e[9] = -o * s),
              (e[2] = f - u * c),
              (e[6] = d + p * c),
              (e[10] = a * s);
          } else if ("YXZ" === t.order) {
            var m = s * h,
              v = s * l,
              g = c * h,
              y = c * l;
            (e[0] = m + y * o),
              (e[4] = g * o - v),
              (e[8] = a * c),
              (e[1] = a * l),
              (e[5] = a * h),
              (e[9] = -o),
              (e[2] = v * o - g),
              (e[6] = y + m * o),
              (e[10] = a * s);
          } else if ("ZXY" === t.order) {
            (m = s * h), (v = s * l), (g = c * h), (y = c * l);
            (e[0] = m - y * o),
              (e[4] = -a * l),
              (e[8] = g + v * o),
              (e[1] = v + g * o),
              (e[5] = a * h),
              (e[9] = y - m * o),
              (e[2] = -a * c),
              (e[6] = o),
              (e[10] = a * s);
          } else if ("ZYX" === t.order) {
            (u = a * h), (p = a * l), (d = o * h), (f = o * l);
            (e[0] = s * h),
              (e[4] = d * c - p),
              (e[8] = u * c + f),
              (e[1] = s * l),
              (e[5] = f * c + u),
              (e[9] = p * c - d),
              (e[2] = -c),
              (e[6] = o * s),
              (e[10] = a * s);
          } else if ("YZX" === t.order) {
            var x = a * s,
              _ = a * c,
              b = o * s,
              w = o * c;
            (e[0] = s * h),
              (e[4] = w - x * l),
              (e[8] = b * l + _),
              (e[1] = l),
              (e[5] = a * h),
              (e[9] = -o * h),
              (e[2] = -c * h),
              (e[6] = _ * l + b),
              (e[10] = x - w * l);
          } else if ("XZY" === t.order) {
            (x = a * s), (_ = a * c), (b = o * s), (w = o * c);
            (e[0] = s * h),
              (e[4] = -l),
              (e[8] = c * h),
              (e[1] = x * l + w),
              (e[5] = a * h),
              (e[9] = _ * l - b),
              (e[2] = b * l - _),
              (e[6] = o * h),
              (e[10] = w * l + x);
          }
          return (
            (e[3] = 0),
            (e[7] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        },
        makeRotationFromQuaternion: function (t) {
          return this.compose(S, t, A);
        },
        lookAt: function (t, e, i) {
          var n = this.elements;
          return (
            P.subVectors(t, e),
            0 === P.lengthSq() && (P.z = 1),
            P.normalize(),
            T.crossVectors(i, P),
            0 === T.lengthSq() &&
              (1 === Math.abs(i.z) ? (P.x += 1e-4) : (P.z += 1e-4),
              P.normalize(),
              T.crossVectors(i, P)),
            T.normalize(),
            L.crossVectors(P, T),
            (n[0] = T.x),
            (n[4] = L.x),
            (n[8] = P.x),
            (n[1] = T.y),
            (n[5] = L.y),
            (n[9] = P.y),
            (n[2] = T.z),
            (n[6] = L.z),
            (n[10] = P.z),
            this
          );
        },
        multiply: function (t, e) {
          return void 0 !== e
            ? this.multiplyMatrices(t, e)
            : this.multiplyMatrices(this, t);
        },
        premultiply: function (t) {
          return this.multiplyMatrices(t, this);
        },
        multiplyMatrices: function (t, e) {
          var i = t.elements,
            n = e.elements,
            r = this.elements,
            a = i[0],
            o = i[4],
            s = i[8],
            c = i[12],
            h = i[1],
            l = i[5],
            u = i[9],
            p = i[13],
            d = i[2],
            f = i[6],
            m = i[10],
            v = i[14],
            g = i[3],
            y = i[7],
            x = i[11],
            _ = i[15],
            b = n[0],
            w = n[4],
            M = n[8],
            S = n[12],
            A = n[1],
            T = n[5],
            L = n[9],
            P = n[13],
            C = n[2],
            E = n[6],
            O = n[10],
            N = n[14],
            I = n[3],
            D = n[7],
            z = n[11],
            R = n[15];
          return (
            (r[0] = a * b + o * A + s * C + c * I),
            (r[4] = a * w + o * T + s * E + c * D),
            (r[8] = a * M + o * L + s * O + c * z),
            (r[12] = a * S + o * P + s * N + c * R),
            (r[1] = h * b + l * A + u * C + p * I),
            (r[5] = h * w + l * T + u * E + p * D),
            (r[9] = h * M + l * L + u * O + p * z),
            (r[13] = h * S + l * P + u * N + p * R),
            (r[2] = d * b + f * A + m * C + v * I),
            (r[6] = d * w + f * T + m * E + v * D),
            (r[10] = d * M + f * L + m * O + v * z),
            (r[14] = d * S + f * P + m * N + v * R),
            (r[3] = g * b + y * A + x * C + _ * I),
            (r[7] = g * w + y * T + x * E + _ * D),
            (r[11] = g * M + y * L + x * O + _ * z),
            (r[15] = g * S + y * P + x * N + _ * R),
            this
          );
        },
        multiplyScalar: function (t) {
          var e = this.elements;
          return (
            (e[0] *= t),
            (e[4] *= t),
            (e[8] *= t),
            (e[12] *= t),
            (e[1] *= t),
            (e[5] *= t),
            (e[9] *= t),
            (e[13] *= t),
            (e[2] *= t),
            (e[6] *= t),
            (e[10] *= t),
            (e[14] *= t),
            (e[3] *= t),
            (e[7] *= t),
            (e[11] *= t),
            (e[15] *= t),
            this
          );
        },
        applyToBufferAttribute: function (t) {
          for (var e = 0, i = t.count; e < i; e++)
            (w.x = t.getX(e)),
              (w.y = t.getY(e)),
              (w.z = t.getZ(e)),
              w.applyMatrix4(this),
              t.setXYZ(e, w.x, w.y, w.z);
          return t;
        },
        determinant: function () {
          var t = this.elements,
            e = t[0],
            i = t[4],
            n = t[8],
            r = t[12],
            a = t[1],
            o = t[5],
            s = t[9],
            c = t[13],
            h = t[2],
            l = t[6],
            u = t[10],
            p = t[14];
          return (
            t[3] *
              (+r * s * l -
                n * c * l -
                r * o * u +
                i * c * u +
                n * o * p -
                i * s * p) +
            t[7] *
              (+e * s * p -
                e * c * u +
                r * a * u -
                n * a * p +
                n * c * h -
                r * s * h) +
            t[11] *
              (+e * c * l -
                e * o * p -
                r * a * l +
                i * a * p +
                r * o * h -
                i * c * h) +
            t[15] *
              (-n * o * h -
                e * s * l +
                e * o * u +
                n * a * l -
                i * a * u +
                i * s * h)
          );
        },
        transpose: function () {
          var t,
            e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[4]),
            (e[4] = t),
            (t = e[2]),
            (e[2] = e[8]),
            (e[8] = t),
            (t = e[6]),
            (e[6] = e[9]),
            (e[9] = t),
            (t = e[3]),
            (e[3] = e[12]),
            (e[12] = t),
            (t = e[7]),
            (e[7] = e[13]),
            (e[13] = t),
            (t = e[11]),
            (e[11] = e[14]),
            (e[14] = t),
            this
          );
        },
        setPosition: function (t, e, i) {
          var n = this.elements;
          return (
            t.isVector3
              ? ((n[12] = t.x), (n[13] = t.y), (n[14] = t.z))
              : ((n[12] = t), (n[13] = e), (n[14] = i)),
            this
          );
        },
        getInverse: function (t, e) {
          var i = this.elements,
            n = t.elements,
            r = n[0],
            a = n[1],
            o = n[2],
            s = n[3],
            c = n[4],
            h = n[5],
            l = n[6],
            u = n[7],
            p = n[8],
            d = n[9],
            f = n[10],
            m = n[11],
            v = n[12],
            g = n[13],
            y = n[14],
            x = n[15],
            _ =
              d * y * u -
              g * f * u +
              g * l * m -
              h * y * m -
              d * l * x +
              h * f * x,
            b =
              v * f * u -
              p * y * u -
              v * l * m +
              c * y * m +
              p * l * x -
              c * f * x,
            w =
              p * g * u -
              v * d * u +
              v * h * m -
              c * g * m -
              p * h * x +
              c * d * x,
            M =
              v * d * l -
              p * g * l -
              v * h * f +
              c * g * f +
              p * h * y -
              c * d * y,
            S = r * _ + a * b + o * w + s * M;
          if (0 === S) {
            if (!0 === e)
              throw new Error(
                "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"
              );
            return this.identity();
          }
          var A = 1 / S;
          return (
            (i[0] = _ * A),
            (i[1] =
              (g * f * s -
                d * y * s -
                g * o * m +
                a * y * m +
                d * o * x -
                a * f * x) *
              A),
            (i[2] =
              (h * y * s -
                g * l * s +
                g * o * u -
                a * y * u -
                h * o * x +
                a * l * x) *
              A),
            (i[3] =
              (d * l * s -
                h * f * s -
                d * o * u +
                a * f * u +
                h * o * m -
                a * l * m) *
              A),
            (i[4] = b * A),
            (i[5] =
              (p * y * s -
                v * f * s +
                v * o * m -
                r * y * m -
                p * o * x +
                r * f * x) *
              A),
            (i[6] =
              (v * l * s -
                c * y * s -
                v * o * u +
                r * y * u +
                c * o * x -
                r * l * x) *
              A),
            (i[7] =
              (c * f * s -
                p * l * s +
                p * o * u -
                r * f * u -
                c * o * m +
                r * l * m) *
              A),
            (i[8] = w * A),
            (i[9] =
              (v * d * s -
                p * g * s -
                v * a * m +
                r * g * m +
                p * a * x -
                r * d * x) *
              A),
            (i[10] =
              (c * g * s -
                v * h * s +
                v * a * u -
                r * g * u -
                c * a * x +
                r * h * x) *
              A),
            (i[11] =
              (p * h * s -
                c * d * s -
                p * a * u +
                r * d * u +
                c * a * m -
                r * h * m) *
              A),
            (i[12] = M * A),
            (i[13] =
              (p * g * o -
                v * d * o +
                v * a * f -
                r * g * f -
                p * a * y +
                r * d * y) *
              A),
            (i[14] =
              (v * h * o -
                c * g * o -
                v * a * l +
                r * g * l +
                c * a * y -
                r * h * y) *
              A),
            (i[15] =
              (c * d * o -
                p * h * o +
                p * a * l -
                r * d * l -
                c * a * f +
                r * h * f) *
              A),
            this
          );
        },
        scale: function (t) {
          var e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z;
          return (
            (e[0] *= i),
            (e[4] *= n),
            (e[8] *= r),
            (e[1] *= i),
            (e[5] *= n),
            (e[9] *= r),
            (e[2] *= i),
            (e[6] *= n),
            (e[10] *= r),
            (e[3] *= i),
            (e[7] *= n),
            (e[11] *= r),
            this
          );
        },
        getMaxScaleOnAxis: function () {
          var t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, i, n));
        },
        makeTranslation: function (t, e, i) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
        },
        makeRotationX: function (t) {
          var e = Math.cos(t),
            i = Math.sin(t);
          return (
            this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
          );
        },
        makeRotationY: function (t) {
          var e = Math.cos(t),
            i = Math.sin(t);
          return (
            this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
          );
        },
        makeRotationZ: function (t) {
          var e = Math.cos(t),
            i = Math.sin(t);
          return (
            this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
          );
        },
        makeRotationAxis: function (t, e) {
          var i = Math.cos(e),
            n = Math.sin(e),
            r = 1 - i,
            a = t.x,
            o = t.y,
            s = t.z,
            c = r * a,
            h = r * o;
          return (
            this.set(
              c * a + i,
              c * o - n * s,
              c * s + n * o,
              0,
              c * o + n * s,
              h * o + i,
              h * s - n * a,
              0,
              c * s - n * o,
              h * s + n * a,
              r * s * s + i,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        },
        makeScale: function (t, e, i) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        },
        makeShear: function (t, e, i) {
          return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this;
        },
        compose: function (t, e, i) {
          var n = this.elements,
            r = e._x,
            a = e._y,
            o = e._z,
            s = e._w,
            c = r + r,
            h = a + a,
            l = o + o,
            u = r * c,
            p = r * h,
            d = r * l,
            f = a * h,
            m = a * l,
            v = o * l,
            g = s * c,
            y = s * h,
            x = s * l,
            _ = i.x,
            b = i.y,
            w = i.z;
          return (
            (n[0] = (1 - (f + v)) * _),
            (n[1] = (p + x) * _),
            (n[2] = (d - y) * _),
            (n[3] = 0),
            (n[4] = (p - x) * b),
            (n[5] = (1 - (u + v)) * b),
            (n[6] = (m + g) * b),
            (n[7] = 0),
            (n[8] = (d + y) * w),
            (n[9] = (m - g) * w),
            (n[10] = (1 - (u + f)) * w),
            (n[11] = 0),
            (n[12] = t.x),
            (n[13] = t.y),
            (n[14] = t.z),
            (n[15] = 1),
            this
          );
        },
        decompose: function (t, e, i) {
          var n = this.elements,
            r = w.set(n[0], n[1], n[2]).length(),
            a = w.set(n[4], n[5], n[6]).length(),
            o = w.set(n[8], n[9], n[10]).length();
          this.determinant() < 0 && (r = -r),
            (t.x = n[12]),
            (t.y = n[13]),
            (t.z = n[14]),
            M.copy(this);
          var s = 1 / r,
            c = 1 / a,
            h = 1 / o;
          return (
            (M.elements[0] *= s),
            (M.elements[1] *= s),
            (M.elements[2] *= s),
            (M.elements[4] *= c),
            (M.elements[5] *= c),
            (M.elements[6] *= c),
            (M.elements[8] *= h),
            (M.elements[9] *= h),
            (M.elements[10] *= h),
            e.setFromRotationMatrix(M),
            (i.x = r),
            (i.y = a),
            (i.z = o),
            this
          );
        },
        makePerspective: function (t, e, i, n, r, a) {
          var o = this.elements,
            s = (2 * r) / (e - t),
            c = (2 * r) / (i - n),
            h = (e + t) / (e - t),
            l = (i + n) / (i - n),
            u = -(a + r) / (a - r),
            p = (-2 * a * r) / (a - r);
          return (
            (o[0] = s),
            (o[4] = 0),
            (o[8] = h),
            (o[12] = 0),
            (o[1] = 0),
            (o[5] = c),
            (o[9] = l),
            (o[13] = 0),
            (o[2] = 0),
            (o[6] = 0),
            (o[10] = u),
            (o[14] = p),
            (o[3] = 0),
            (o[7] = 0),
            (o[11] = -1),
            (o[15] = 0),
            this
          );
        },
        makeOrthographic: function (t, e, i, n, r, a) {
          var o = this.elements,
            s = 1 / (e - t),
            c = 1 / (i - n),
            h = 1 / (a - r),
            l = (e + t) * s,
            u = (i + n) * c,
            p = (a + r) * h;
          return (
            (o[0] = 2 * s),
            (o[4] = 0),
            (o[8] = 0),
            (o[12] = -l),
            (o[1] = 0),
            (o[5] = 2 * c),
            (o[9] = 0),
            (o[13] = -u),
            (o[2] = 0),
            (o[6] = 0),
            (o[10] = -2 * h),
            (o[14] = -p),
            (o[3] = 0),
            (o[7] = 0),
            (o[11] = 0),
            (o[15] = 1),
            this
          );
        },
        equals: function (t) {
          for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
            if (e[n] !== i[n]) return !1;
          return !0;
        },
        fromArray: function (t, e) {
          void 0 === e && (e = 0);
          for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
          return this;
        },
        toArray: function (t, e) {
          void 0 === t && (t = []), void 0 === e && (e = 0);
          var i = this.elements;
          return (
            (t[e] = i[0]),
            (t[e + 1] = i[1]),
            (t[e + 2] = i[2]),
            (t[e + 3] = i[3]),
            (t[e + 4] = i[4]),
            (t[e + 5] = i[5]),
            (t[e + 6] = i[6]),
            (t[e + 7] = i[7]),
            (t[e + 8] = i[8]),
            (t[e + 9] = i[9]),
            (t[e + 10] = i[10]),
            (t[e + 11] = i[11]),
            (t[e + 12] = i[12]),
            (t[e + 13] = i[13]),
            (t[e + 14] = i[14]),
            (t[e + 15] = i[15]),
            t
          );
        },
      });
      var E = new C(),
        O = new h();
      function N(t, e, i, n) {
        (this._x = t || 0),
          (this._y = e || 0),
          (this._z = i || 0),
          (this._order = n || N.DefaultOrder);
      }
      function I() {
        this.mask = 1;
      }
      (N.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]),
        (N.DefaultOrder = "XYZ"),
        Object.defineProperties(N.prototype, {
          x: {
            get: function () {
              return this._x;
            },
            set: function (t) {
              (this._x = t), this._onChangeCallback();
            },
          },
          y: {
            get: function () {
              return this._y;
            },
            set: function (t) {
              (this._y = t), this._onChangeCallback();
            },
          },
          z: {
            get: function () {
              return this._z;
            },
            set: function (t) {
              (this._z = t), this._onChangeCallback();
            },
          },
          order: {
            get: function () {
              return this._order;
            },
            set: function (t) {
              (this._order = t), this._onChangeCallback();
            },
          },
        }),
        Object.assign(N.prototype, {
          isEuler: !0,
          set: function (t, e, i, n) {
            return (
              (this._x = t),
              (this._y = e),
              (this._z = i),
              (this._order = n || this._order),
              this._onChangeCallback(),
              this
            );
          },
          clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order);
          },
          copy: function (t) {
            return (
              (this._x = t._x),
              (this._y = t._y),
              (this._z = t._z),
              (this._order = t._order),
              this._onChangeCallback(),
              this
            );
          },
          setFromRotationMatrix: function (t, e, i) {
            var n = s.clamp,
              r = t.elements,
              a = r[0],
              o = r[4],
              c = r[8],
              h = r[1],
              l = r[5],
              u = r[9],
              p = r[2],
              d = r[6],
              f = r[10];
            return (
              "XYZ" === (e = e || this._order)
                ? ((this._y = Math.asin(n(c, -1, 1))),
                  Math.abs(c) < 0.9999999
                    ? ((this._x = Math.atan2(-u, f)),
                      (this._z = Math.atan2(-o, a)))
                    : ((this._x = Math.atan2(d, l)), (this._z = 0)))
                : "YXZ" === e
                ? ((this._x = Math.asin(-n(u, -1, 1))),
                  Math.abs(u) < 0.9999999
                    ? ((this._y = Math.atan2(c, f)),
                      (this._z = Math.atan2(h, l)))
                    : ((this._y = Math.atan2(-p, a)), (this._z = 0)))
                : "ZXY" === e
                ? ((this._x = Math.asin(n(d, -1, 1))),
                  Math.abs(d) < 0.9999999
                    ? ((this._y = Math.atan2(-p, f)),
                      (this._z = Math.atan2(-o, l)))
                    : ((this._y = 0), (this._z = Math.atan2(h, a))))
                : "ZYX" === e
                ? ((this._y = Math.asin(-n(p, -1, 1))),
                  Math.abs(p) < 0.9999999
                    ? ((this._x = Math.atan2(d, f)),
                      (this._z = Math.atan2(h, a)))
                    : ((this._x = 0), (this._z = Math.atan2(-o, l))))
                : "YZX" === e
                ? ((this._z = Math.asin(n(h, -1, 1))),
                  Math.abs(h) < 0.9999999
                    ? ((this._x = Math.atan2(-u, l)),
                      (this._y = Math.atan2(-p, a)))
                    : ((this._x = 0), (this._y = Math.atan2(c, f))))
                : "XZY" === e &&
                  ((this._z = Math.asin(-n(o, -1, 1))),
                  Math.abs(o) < 0.9999999
                    ? ((this._x = Math.atan2(d, l)),
                      (this._y = Math.atan2(c, a)))
                    : ((this._x = Math.atan2(-u, f)), (this._y = 0))),
              (this._order = e),
              !1 !== i && this._onChangeCallback(),
              this
            );
          },
          setFromQuaternion: function (t, e, i) {
            return (
              E.makeRotationFromQuaternion(t),
              this.setFromRotationMatrix(E, e, i)
            );
          },
          setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order);
          },
          reorder: function (t) {
            return O.setFromEuler(this), this.setFromQuaternion(O, t);
          },
          equals: function (t) {
            return (
              t._x === this._x &&
              t._y === this._y &&
              t._z === this._z &&
              t._order === this._order
            );
          },
          fromArray: function (t) {
            return (
              (this._x = t[0]),
              (this._y = t[1]),
              (this._z = t[2]),
              void 0 !== t[3] && (this._order = t[3]),
              this._onChangeCallback(),
              this
            );
          },
          toArray: function (t, e) {
            return (
              void 0 === t && (t = []),
              void 0 === e && (e = 0),
              (t[e] = this._x),
              (t[e + 1] = this._y),
              (t[e + 2] = this._z),
              (t[e + 3] = this._order),
              t
            );
          },
          toVector3: function (t) {
            return t
              ? t.set(this._x, this._y, this._z)
              : new p(this._x, this._y, this._z);
          },
          _onChange: function (t) {
            return (this._onChangeCallback = t), this;
          },
          _onChangeCallback: function () {},
        }),
        Object.assign(I.prototype, {
          set: function (t) {
            this.mask = (1 << t) | 0;
          },
          enable: function (t) {
            this.mask |= (1 << t) | 0;
          },
          enableAll: function () {
            this.mask = -1;
          },
          toggle: function (t) {
            this.mask ^= (1 << t) | 0;
          },
          disable: function (t) {
            this.mask &= ~((1 << t) | 0);
          },
          disableAll: function () {
            this.mask = 0;
          },
          test: function (t) {
            return 0 != (this.mask & t.mask);
          },
        });
      var D = 0,
        z = new p(),
        R = new h(),
        F = new C(),
        U = new p(),
        B = new p(),
        V = new p(),
        G = new h(),
        j = new p(1, 0, 0),
        k = new p(0, 1, 0),
        W = new p(0, 0, 1),
        H = { type: "added" },
        q = { type: "removed" };
      function X() {
        Object.defineProperty(this, "id", { value: D++ }),
          (this.uuid = s.generateUUID()),
          (this.name = ""),
          (this.type = "Object3D"),
          (this.parent = null),
          (this.children = []),
          (this.up = X.DefaultUp.clone());
        var t = new p(),
          e = new N(),
          i = new h(),
          n = new p(1, 1, 1);
        e._onChange(function () {
          i.setFromEuler(e, !1);
        }),
          i._onChange(function () {
            e.setFromQuaternion(i, void 0, !1);
          }),
          Object.defineProperties(this, {
            position: { configurable: !0, enumerable: !0, value: t },
            rotation: { configurable: !0, enumerable: !0, value: e },
            quaternion: { configurable: !0, enumerable: !0, value: i },
            scale: { configurable: !0, enumerable: !0, value: n },
            modelViewMatrix: { value: new C() },
            normalMatrix: { value: new m() },
          }),
          (this.matrix = new C()),
          (this.matrixWorld = new C()),
          (this.matrixAutoUpdate = X.DefaultMatrixAutoUpdate),
          (this.matrixWorldNeedsUpdate = !1),
          (this.layers = new I()),
          (this.visible = !0),
          (this.castShadow = !1),
          (this.receiveShadow = !1),
          (this.frustumCulled = !0),
          (this.renderOrder = 0),
          (this.userData = {});
      }
      function Y() {
        X.call(this),
          (this.type = "Scene"),
          (this.background = null),
          (this.fog = null),
          (this.overrideMaterial = null),
          (this.autoUpdate = !0),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      (X.DefaultUp = new p(0, 1, 0)),
        (X.DefaultMatrixAutoUpdate = !0),
        (X.prototype = Object.assign(Object.create(r.prototype), {
          constructor: X,
          isObject3D: !0,
          onBeforeRender: function () {},
          onAfterRender: function () {},
          applyMatrix: function (t) {
            this.matrixAutoUpdate && this.updateMatrix(),
              this.matrix.premultiply(t),
              this.matrix.decompose(this.position, this.quaternion, this.scale);
          },
          applyQuaternion: function (t) {
            return this.quaternion.premultiply(t), this;
          },
          setRotationFromAxisAngle: function (t, e) {
            this.quaternion.setFromAxisAngle(t, e);
          },
          setRotationFromEuler: function (t) {
            this.quaternion.setFromEuler(t, !0);
          },
          setRotationFromMatrix: function (t) {
            this.quaternion.setFromRotationMatrix(t);
          },
          setRotationFromQuaternion: function (t) {
            this.quaternion.copy(t);
          },
          rotateOnAxis: function (t, e) {
            return R.setFromAxisAngle(t, e), this.quaternion.multiply(R), this;
          },
          rotateOnWorldAxis: function (t, e) {
            return (
              R.setFromAxisAngle(t, e), this.quaternion.premultiply(R), this
            );
          },
          rotateX: function (t) {
            return this.rotateOnAxis(j, t);
          },
          rotateY: function (t) {
            return this.rotateOnAxis(k, t);
          },
          rotateZ: function (t) {
            return this.rotateOnAxis(W, t);
          },
          translateOnAxis: function (t, e) {
            return (
              z.copy(t).applyQuaternion(this.quaternion),
              this.position.add(z.multiplyScalar(e)),
              this
            );
          },
          translateX: function (t) {
            return this.translateOnAxis(j, t);
          },
          translateY: function (t) {
            return this.translateOnAxis(k, t);
          },
          translateZ: function (t) {
            return this.translateOnAxis(W, t);
          },
          localToWorld: function (t) {
            return t.applyMatrix4(this.matrixWorld);
          },
          worldToLocal: function (t) {
            return t.applyMatrix4(F.getInverse(this.matrixWorld));
          },
          lookAt: function (t, e, i) {
            t.isVector3 ? U.copy(t) : U.set(t, e, i);
            var n = this.parent;
            this.updateWorldMatrix(!0, !1),
              B.setFromMatrixPosition(this.matrixWorld),
              this.isCamera || this.isLight
                ? F.lookAt(B, U, this.up)
                : F.lookAt(U, B, this.up),
              this.quaternion.setFromRotationMatrix(F),
              n &&
                (F.extractRotation(n.matrixWorld),
                R.setFromRotationMatrix(F),
                this.quaternion.premultiply(R.inverse()));
          },
          add: function (t) {
            if (arguments.length > 1) {
              for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
              return this;
            }
            return (
              t === this ||
                (t &&
                  t.isObject3D &&
                  (null !== t.parent && t.parent.remove(t),
                  (t.parent = this),
                  this.children.push(t),
                  t.dispatchEvent(H))),
              this
            );
          },
          remove: function (t) {
            if (arguments.length > 1) {
              for (var e = 0; e < arguments.length; e++)
                this.remove(arguments[e]);
              return this;
            }
            var i = this.children.indexOf(t);
            return (
              -1 !== i &&
                ((t.parent = null),
                this.children.splice(i, 1),
                t.dispatchEvent(q)),
              this
            );
          },
          attach: function (t) {
            return (
              this.updateWorldMatrix(!0, !1),
              F.getInverse(this.matrixWorld),
              null !== t.parent &&
                (t.parent.updateWorldMatrix(!0, !1),
                F.multiply(t.parent.matrixWorld)),
              t.applyMatrix(F),
              t.updateWorldMatrix(!1, !1),
              this.add(t),
              this
            );
          },
          getObjectById: function (t) {
            return this.getObjectByProperty("id", t);
          },
          getObjectByName: function (t) {
            return this.getObjectByProperty("name", t);
          },
          getObjectByProperty: function (t, e) {
            if (this[t] === e) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
              var r = this.children[i].getObjectByProperty(t, e);
              if (void 0 !== r) return r;
            }
          },
          getWorldPosition: function (t) {
            return (
              void 0 === t && (t = new p()),
              this.updateMatrixWorld(!0),
              t.setFromMatrixPosition(this.matrixWorld)
            );
          },
          getWorldQuaternion: function (t) {
            return (
              void 0 === t && (t = new h()),
              this.updateMatrixWorld(!0),
              this.matrixWorld.decompose(B, t, V),
              t
            );
          },
          getWorldScale: function (t) {
            return (
              void 0 === t && (t = new p()),
              this.updateMatrixWorld(!0),
              this.matrixWorld.decompose(B, G, t),
              t
            );
          },
          getWorldDirection: function (t) {
            void 0 === t && (t = new p()), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
          },
          raycast: function () {},
          traverse: function (t) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++)
              e[i].traverse(t);
          },
          traverseVisible: function (t) {
            if (!1 !== this.visible) {
              t(this);
              for (var e = this.children, i = 0, n = e.length; i < n; i++)
                e[i].traverseVisible(t);
            }
          },
          traverseAncestors: function (t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t));
          },
          updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale),
              (this.matrixWorldNeedsUpdate = !0);
          },
          updateMatrixWorld: function (t) {
            this.matrixAutoUpdate && this.updateMatrix(),
              (this.matrixWorldNeedsUpdate || t) &&
                (null === this.parent
                  ? this.matrixWorld.copy(this.matrix)
                  : this.matrixWorld.multiplyMatrices(
                      this.parent.matrixWorld,
                      this.matrix
                    ),
                (this.matrixWorldNeedsUpdate = !1),
                (t = !0));
            for (var e = this.children, i = 0, n = e.length; i < n; i++)
              e[i].updateMatrixWorld(t);
          },
          updateWorldMatrix: function (t, e) {
            var i = this.parent;
            if (
              (!0 === t && null !== i && i.updateWorldMatrix(!0, !1),
              this.matrixAutoUpdate && this.updateMatrix(),
              null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              !0 === e)
            )
              for (var n = this.children, r = 0, a = n.length; r < a; r++)
                n[r].updateWorldMatrix(!1, !0);
          },
          toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t,
              i = {};
            e &&
              ((t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
              }),
              (i.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON",
              }));
            var n = {};
            function r(e, i) {
              return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid;
            }
            if (
              ((n.uuid = this.uuid),
              (n.type = this.type),
              "" !== this.name && (n.name = this.name),
              !0 === this.castShadow && (n.castShadow = !0),
              !0 === this.receiveShadow && (n.receiveShadow = !0),
              !1 === this.visible && (n.visible = !1),
              !1 === this.frustumCulled && (n.frustumCulled = !1),
              0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
              "{}" !== JSON.stringify(this.userData) &&
                (n.userData = this.userData),
              (n.layers = this.layers.mask),
              (n.matrix = this.matrix.toArray()),
              !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
              this.isMesh &&
                0 !== this.drawMode &&
                (n.drawMode = this.drawMode),
              this.isInstancedMesh &&
                ((n.type = "InstancedMesh"),
                (n.count = this.count),
                (n.instanceMatrix = this.instanceMatrix.toJSON())),
              this.isMesh || this.isLine || this.isPoints)
            ) {
              n.geometry = r(t.geometries, this.geometry);
              var a = this.geometry.parameters;
              if (void 0 !== a && void 0 !== a.shapes) {
                var o = a.shapes;
                if (Array.isArray(o))
                  for (var s = 0, c = o.length; s < c; s++) {
                    var h = o[s];
                    r(t.shapes, h);
                  }
                else r(t.shapes, o);
              }
            }
            if (void 0 !== this.material)
              if (Array.isArray(this.material)) {
                var l = [];
                for (s = 0, c = this.material.length; s < c; s++)
                  l.push(r(t.materials, this.material[s]));
                n.material = l;
              } else n.material = r(t.materials, this.material);
            if (this.children.length > 0) {
              n.children = [];
              for (s = 0; s < this.children.length; s++)
                n.children.push(this.children[s].toJSON(t).object);
            }
            if (e) {
              var u = m(t.geometries),
                p = m(t.materials),
                d = m(t.textures),
                f = m(t.images);
              o = m(t.shapes);
              u.length > 0 && (i.geometries = u),
                p.length > 0 && (i.materials = p),
                d.length > 0 && (i.textures = d),
                f.length > 0 && (i.images = f),
                o.length > 0 && (i.shapes = o);
            }
            return (i.object = n), i;
            function m(t) {
              var e = [];
              for (var i in t) {
                var n = t[i];
                delete n.metadata, e.push(n);
              }
              return e;
            }
          },
          clone: function (t) {
            return new this.constructor().copy(this, t);
          },
          copy: function (t, e) {
            if (
              (void 0 === e && (e = !0),
              (this.name = t.name),
              this.up.copy(t.up),
              this.position.copy(t.position),
              this.quaternion.copy(t.quaternion),
              this.scale.copy(t.scale),
              this.matrix.copy(t.matrix),
              this.matrixWorld.copy(t.matrixWorld),
              (this.matrixAutoUpdate = t.matrixAutoUpdate),
              (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
              (this.layers.mask = t.layers.mask),
              (this.visible = t.visible),
              (this.castShadow = t.castShadow),
              (this.receiveShadow = t.receiveShadow),
              (this.frustumCulled = t.frustumCulled),
              (this.renderOrder = t.renderOrder),
              (this.userData = JSON.parse(JSON.stringify(t.userData))),
              !0 === e)
            )
              for (var i = 0; i < t.children.length; i++) {
                var n = t.children[i];
                this.add(n.clone());
              }
            return this;
          },
        })),
        (Y.prototype = Object.assign(Object.create(X.prototype), {
          constructor: Y,
          isScene: !0,
          copy: function (t, e) {
            return (
              X.prototype.copy.call(this, t, e),
              null !== t.background && (this.background = t.background.clone()),
              null !== t.fog && (this.fog = t.fog.clone()),
              null !== t.overrideMaterial &&
                (this.overrideMaterial = t.overrideMaterial.clone()),
              (this.autoUpdate = t.autoUpdate),
              (this.matrixAutoUpdate = t.matrixAutoUpdate),
              this
            );
          },
          toJSON: function (t) {
            var e = X.prototype.toJSON.call(this, t);
            return (
              null !== this.background &&
                (e.object.background = this.background.toJSON(t)),
              null !== this.fog && (e.object.fog = this.fog.toJSON()),
              e
            );
          },
          dispose: function () {
            this.dispatchEvent({ type: "dispose" });
          },
        }));
      var J = [
          new p(),
          new p(),
          new p(),
          new p(),
          new p(),
          new p(),
          new p(),
          new p(),
        ],
        Z = new p(),
        Q = new p(),
        K = new p(),
        $ = new p(),
        tt = new p(),
        et = new p(),
        it = new p(),
        nt = new p(),
        rt = new p(),
        at = new p(),
        ot = new p();
      function st(t, e) {
        (this.min = void 0 !== t ? t : new p(1 / 0, 1 / 0, 1 / 0)),
          (this.max = void 0 !== e ? e : new p(-1 / 0, -1 / 0, -1 / 0));
      }
      function ct(t, e, i, n, r) {
        var a, o;
        for (a = 0, o = t.length - 3; a <= o; a += 3) {
          ot.fromArray(t, a);
          var s =
              r.x * Math.abs(ot.x) +
              r.y * Math.abs(ot.y) +
              r.z * Math.abs(ot.z),
            c = e.dot(ot),
            h = i.dot(ot),
            l = n.dot(ot);
          if (Math.max(-Math.max(c, h, l), Math.min(c, h, l)) > s) return !1;
        }
        return !0;
      }
      Object.assign(st.prototype, {
        isBox3: !0,
        set: function (t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        },
        setFromArray: function (t) {
          for (
            var e = 1 / 0,
              i = 1 / 0,
              n = 1 / 0,
              r = -1 / 0,
              a = -1 / 0,
              o = -1 / 0,
              s = 0,
              c = t.length;
            s < c;
            s += 3
          ) {
            var h = t[s],
              l = t[s + 1],
              u = t[s + 2];
            h < e && (e = h),
              l < i && (i = l),
              u < n && (n = u),
              h > r && (r = h),
              l > a && (a = l),
              u > o && (o = u);
          }
          return this.min.set(e, i, n), this.max.set(r, a, o), this;
        },
        setFromBufferAttribute: function (t) {
          for (
            var e = 1 / 0,
              i = 1 / 0,
              n = 1 / 0,
              r = -1 / 0,
              a = -1 / 0,
              o = -1 / 0,
              s = 0,
              c = t.count;
            s < c;
            s++
          ) {
            var h = t.getX(s),
              l = t.getY(s),
              u = t.getZ(s);
            h < e && (e = h),
              l < i && (i = l),
              u < n && (n = u),
              h > r && (r = h),
              l > a && (a = l),
              u > o && (o = u);
          }
          return this.min.set(e, i, n), this.max.set(r, a, o), this;
        },
        setFromPoints: function (t) {
          this.makeEmpty();
          for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
          return this;
        },
        setFromCenterAndSize: function (t, e) {
          var i = Z.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
        },
        setFromObject: function (t) {
          return this.makeEmpty(), this.expandByObject(t);
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        },
        makeEmpty: function () {
          return (
            (this.min.x = this.min.y = this.min.z = 1 / 0),
            (this.max.x = this.max.y = this.max.z = -1 / 0),
            this
          );
        },
        isEmpty: function () {
          return (
            this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
          );
        },
        getCenter: function (t) {
          return (
            void 0 === t && (t = new p()),
            this.isEmpty()
              ? t.set(0, 0, 0)
              : t.addVectors(this.min, this.max).multiplyScalar(0.5)
          );
        },
        getSize: function (t) {
          return (
            void 0 === t && (t = new p()),
            this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
          );
        },
        expandByPoint: function (t) {
          return this.min.min(t), this.max.max(t), this;
        },
        expandByVector: function (t) {
          return this.min.sub(t), this.max.add(t), this;
        },
        expandByScalar: function (t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        },
        expandByObject: function (t) {
          var e, i;
          t.updateWorldMatrix(!1, !1);
          var n = t.geometry;
          if (void 0 !== n)
            if (n.isGeometry) {
              var r = n.vertices;
              for (e = 0, i = r.length; e < i; e++)
                Z.copy(r[e]),
                  Z.applyMatrix4(t.matrixWorld),
                  this.expandByPoint(Z);
            } else if (n.isBufferGeometry) {
              var a = n.attributes.position;
              if (void 0 !== a)
                for (e = 0, i = a.count; e < i; e++)
                  Z.fromBufferAttribute(a, e).applyMatrix4(t.matrixWorld),
                    this.expandByPoint(Z);
            }
          var o = t.children;
          for (e = 0, i = o.length; e < i; e++) this.expandByObject(o[e]);
          return this;
        },
        containsPoint: function (t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y ||
            t.z < this.min.z ||
            t.z > this.max.z
          );
        },
        containsBox: function (t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y &&
            this.min.z <= t.min.z &&
            t.max.z <= this.max.z
          );
        },
        getParameter: function (t, e) {
          return (
            void 0 === e && (e = new p()),
            e.set(
              (t.x - this.min.x) / (this.max.x - this.min.x),
              (t.y - this.min.y) / (this.max.y - this.min.y),
              (t.z - this.min.z) / (this.max.z - this.min.z)
            )
          );
        },
        intersectsBox: function (t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y ||
            t.max.z < this.min.z ||
            t.min.z > this.max.z
          );
        },
        intersectsSphere: function (t) {
          return (
            this.clampPoint(t.center, Z),
            Z.distanceToSquared(t.center) <= t.radius * t.radius
          );
        },
        intersectsPlane: function (t) {
          var e, i;
          return (
            t.normal.x > 0
              ? ((e = t.normal.x * this.min.x), (i = t.normal.x * this.max.x))
              : ((e = t.normal.x * this.max.x), (i = t.normal.x * this.min.x)),
            t.normal.y > 0
              ? ((e += t.normal.y * this.min.y), (i += t.normal.y * this.max.y))
              : ((e += t.normal.y * this.max.y),
                (i += t.normal.y * this.min.y)),
            t.normal.z > 0
              ? ((e += t.normal.z * this.min.z), (i += t.normal.z * this.max.z))
              : ((e += t.normal.z * this.max.z),
                (i += t.normal.z * this.min.z)),
            e <= -t.constant && i >= -t.constant
          );
        },
        intersectsTriangle: function (t) {
          if (this.isEmpty()) return !1;
          this.getCenter(nt),
            rt.subVectors(this.max, nt),
            Q.subVectors(t.a, nt),
            K.subVectors(t.b, nt),
            $.subVectors(t.c, nt),
            tt.subVectors(K, Q),
            et.subVectors($, K),
            it.subVectors(Q, $);
          var e = [
            0,
            -tt.z,
            tt.y,
            0,
            -et.z,
            et.y,
            0,
            -it.z,
            it.y,
            tt.z,
            0,
            -tt.x,
            et.z,
            0,
            -et.x,
            it.z,
            0,
            -it.x,
            -tt.y,
            tt.x,
            0,
            -et.y,
            et.x,
            0,
            -it.y,
            it.x,
            0,
          ];
          return (
            !!ct(e, Q, K, $, rt) &&
            !!ct((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Q, K, $, rt) &&
            (at.crossVectors(tt, et), ct((e = [at.x, at.y, at.z]), Q, K, $, rt))
          );
        },
        clampPoint: function (t, e) {
          return (
            void 0 === e && (e = new p()), e.copy(t).clamp(this.min, this.max)
          );
        },
        distanceToPoint: function (t) {
          return Z.copy(t).clamp(this.min, this.max).sub(t).length();
        },
        getBoundingSphere: function (t) {
          return (
            this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(Z).length()),
            t
          );
        },
        intersect: function (t) {
          return (
            this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
          );
        },
        union: function (t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        },
        applyMatrix4: function (t) {
          return (
            this.isEmpty() ||
              (J[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              J[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              J[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              J[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              J[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              J[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              J[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              J[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(J)),
            this
          );
        },
        translate: function (t) {
          return this.min.add(t), this.max.add(t), this;
        },
        equals: function (t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        },
      });
      var ht = new st();
      function lt(t, e) {
        (this.center = void 0 !== t ? t : new p()),
          (this.radius = void 0 !== e ? e : 0);
      }
      Object.assign(lt.prototype, {
        set: function (t, e) {
          return this.center.copy(t), (this.radius = e), this;
        },
        setFromPoints: function (t, e) {
          var i = this.center;
          void 0 !== e ? i.copy(e) : ht.setFromPoints(t).getCenter(i);
          for (var n = 0, r = 0, a = t.length; r < a; r++)
            n = Math.max(n, i.distanceToSquared(t[r]));
          return (this.radius = Math.sqrt(n)), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        },
        empty: function () {
          return this.radius <= 0;
        },
        containsPoint: function (t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        },
        distanceToPoint: function (t) {
          return t.distanceTo(this.center) - this.radius;
        },
        intersectsSphere: function (t) {
          var e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        },
        intersectsBox: function (t) {
          return t.intersectsSphere(this);
        },
        intersectsPlane: function (t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        },
        clampPoint: function (t, e) {
          var i = this.center.distanceToSquared(t);
          return (
            void 0 === e && (e = new p()),
            e.copy(t),
            i > this.radius * this.radius &&
              (e.sub(this.center).normalize(),
              e.multiplyScalar(this.radius).add(this.center)),
            e
          );
        },
        getBoundingBox: function (t) {
          return (
            void 0 === t && (t = new st()),
            t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t
          );
        },
        applyMatrix4: function (t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        },
        translate: function (t) {
          return this.center.add(t), this;
        },
        equals: function (t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        },
      });
      var ut = new p(),
        pt = new p(),
        dt = new p(),
        ft = new p(),
        mt = new p(),
        vt = new p(),
        gt = new p();
      function yt(t, e) {
        (this.origin = void 0 !== t ? t : new p()),
          (this.direction = void 0 !== e ? e : new p());
      }
      Object.assign(yt.prototype, {
        set: function (t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        },
        at: function (t, e) {
          return (
            void 0 === e && (e = new p()),
            e.copy(this.direction).multiplyScalar(t).add(this.origin)
          );
        },
        lookAt: function (t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        },
        recast: function (t) {
          return this.origin.copy(this.at(t, ut)), this;
        },
        closestPointToPoint: function (t, e) {
          void 0 === e && (e = new p()), e.subVectors(t, this.origin);
          var i = e.dot(this.direction);
          return i < 0
            ? e.copy(this.origin)
            : e.copy(this.direction).multiplyScalar(i).add(this.origin);
        },
        distanceToPoint: function (t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        },
        distanceSqToPoint: function (t) {
          var e = ut.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : (ut.copy(this.direction).multiplyScalar(e).add(this.origin),
              ut.distanceToSquared(t));
        },
        distanceSqToSegment: function (t, e, i, n) {
          pt.copy(t).add(e).multiplyScalar(0.5),
            dt.copy(e).sub(t).normalize(),
            ft.copy(this.origin).sub(pt);
          var r,
            a,
            o,
            s,
            c = 0.5 * t.distanceTo(e),
            h = -this.direction.dot(dt),
            l = ft.dot(this.direction),
            u = -ft.dot(dt),
            p = ft.lengthSq(),
            d = Math.abs(1 - h * h);
          if (d > 0)
            if (((a = h * l - u), (s = c * d), (r = h * u - l) >= 0))
              if (a >= -s)
                if (a <= s) {
                  var f = 1 / d;
                  o =
                    (r *= f) * (r + h * (a *= f) + 2 * l) +
                    a * (h * r + a + 2 * u) +
                    p;
                } else
                  (a = c),
                    (o =
                      -(r = Math.max(0, -(h * a + l))) * r +
                      a * (a + 2 * u) +
                      p);
              else
                (a = -c),
                  (o =
                    -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p);
            else
              a <= -s
                ? (o =
                    -(r = Math.max(0, -(-h * c + l))) * r +
                    (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) *
                      (a + 2 * u) +
                    p)
                : a <= s
                ? ((r = 0),
                  (o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p))
                : (o =
                    -(r = Math.max(0, -(h * c + l))) * r +
                    (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) *
                      (a + 2 * u) +
                    p);
          else
            (a = h > 0 ? -c : c),
              (o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + p);
          return (
            i && i.copy(this.direction).multiplyScalar(r).add(this.origin),
            n && n.copy(dt).multiplyScalar(a).add(pt),
            o
          );
        },
        intersectSphere: function (t, e) {
          ut.subVectors(t.center, this.origin);
          var i = ut.dot(this.direction),
            n = ut.dot(ut) - i * i,
            r = t.radius * t.radius;
          if (n > r) return null;
          var a = Math.sqrt(r - n),
            o = i - a,
            s = i + a;
          return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
        },
        intersectsSphere: function (t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        },
        distanceToPlane: function (t) {
          var e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          var i = -(this.origin.dot(t.normal) + t.constant) / e;
          return i >= 0 ? i : null;
        },
        intersectPlane: function (t, e) {
          var i = this.distanceToPlane(t);
          return null === i ? null : this.at(i, e);
        },
        intersectsPlane: function (t) {
          var e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0;
        },
        intersectBox: function (t, e) {
          var i,
            n,
            r,
            a,
            o,
            s,
            c = 1 / this.direction.x,
            h = 1 / this.direction.y,
            l = 1 / this.direction.z,
            u = this.origin;
          return (
            c >= 0
              ? ((i = (t.min.x - u.x) * c), (n = (t.max.x - u.x) * c))
              : ((i = (t.max.x - u.x) * c), (n = (t.min.x - u.x) * c)),
            h >= 0
              ? ((r = (t.min.y - u.y) * h), (a = (t.max.y - u.y) * h))
              : ((r = (t.max.y - u.y) * h), (a = (t.min.y - u.y) * h)),
            i > a || r > n
              ? null
              : ((r > i || i != i) && (i = r),
                (a < n || n != n) && (n = a),
                l >= 0
                  ? ((o = (t.min.z - u.z) * l), (s = (t.max.z - u.z) * l))
                  : ((o = (t.max.z - u.z) * l), (s = (t.min.z - u.z) * l)),
                i > s || o > n
                  ? null
                  : ((o > i || i != i) && (i = o),
                    (s < n || n != n) && (n = s),
                    n < 0 ? null : this.at(i >= 0 ? i : n, e)))
          );
        },
        intersectsBox: function (t) {
          return null !== this.intersectBox(t, ut);
        },
        intersectTriangle: function (t, e, i, n, r) {
          mt.subVectors(e, t), vt.subVectors(i, t), gt.crossVectors(mt, vt);
          var a,
            o = this.direction.dot(gt);
          if (o > 0) {
            if (n) return null;
            a = 1;
          } else {
            if (!(o < 0)) return null;
            (a = -1), (o = -o);
          }
          ft.subVectors(this.origin, t);
          var s = a * this.direction.dot(vt.crossVectors(ft, vt));
          if (s < 0) return null;
          var c = a * this.direction.dot(mt.cross(ft));
          if (c < 0) return null;
          if (s + c > o) return null;
          var h = -a * ft.dot(gt);
          return h < 0 ? null : this.at(h / o, r);
        },
        applyMatrix4: function (t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        },
        equals: function (t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        },
      });
      var xt = new p(),
        _t = new p(),
        bt = new m();
      function wt(t, e) {
        (this.normal = void 0 !== t ? t : new p(1, 0, 0)),
          (this.constant = void 0 !== e ? e : 0);
      }
      Object.assign(wt.prototype, {
        isPlane: !0,
        set: function (t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        },
        setComponents: function (t, e, i, n) {
          return this.normal.set(t, e, i), (this.constant = n), this;
        },
        setFromNormalAndCoplanarPoint: function (t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        },
        setFromCoplanarPoints: function (t, e, i) {
          var n = xt.subVectors(i, e).cross(_t.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(n, t), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        },
        normalize: function () {
          var t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        },
        negate: function () {
          return (this.constant *= -1), this.normal.negate(), this;
        },
        distanceToPoint: function (t) {
          return this.normal.dot(t) + this.constant;
        },
        distanceToSphere: function (t) {
          return this.distanceToPoint(t.center) - t.radius;
        },
        projectPoint: function (t, e) {
          return (
            void 0 === e && (e = new p()),
            e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
          );
        },
        intersectLine: function (t, e) {
          void 0 === e && (e = new p());
          var i = t.delta(xt),
            n = this.normal.dot(i);
          if (0 === n)
            return 0 === this.distanceToPoint(t.start)
              ? e.copy(t.start)
              : void 0;
          var r = -(t.start.dot(this.normal) + this.constant) / n;
          return r < 0 || r > 1
            ? void 0
            : e.copy(i).multiplyScalar(r).add(t.start);
        },
        intersectsLine: function (t) {
          var e = this.distanceToPoint(t.start),
            i = this.distanceToPoint(t.end);
          return (e < 0 && i > 0) || (i < 0 && e > 0);
        },
        intersectsBox: function (t) {
          return t.intersectsPlane(this);
        },
        intersectsSphere: function (t) {
          return t.intersectsPlane(this);
        },
        coplanarPoint: function (t) {
          return (
            void 0 === t && (t = new p()),
            t.copy(this.normal).multiplyScalar(-this.constant)
          );
        },
        applyMatrix4: function (t, e) {
          var i = e || bt.getNormalMatrix(t),
            n = this.coplanarPoint(xt).applyMatrix4(t),
            r = this.normal.applyMatrix3(i).normalize();
          return (this.constant = -n.dot(r)), this;
        },
        translate: function (t) {
          return (this.constant -= t.dot(this.normal)), this;
        },
        equals: function (t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        },
      });
      var Mt = new p(),
        St = new p(),
        At = new p(),
        Tt = new p(),
        Lt = new p(),
        Pt = new p(),
        Ct = new p(),
        Et = new p(),
        Ot = new p(),
        Nt = new p();
      function It(t, e, i) {
        (this.a = void 0 !== t ? t : new p()),
          (this.b = void 0 !== e ? e : new p()),
          (this.c = void 0 !== i ? i : new p());
      }
      Object.assign(It, {
        getNormal: function (t, e, i, n) {
          void 0 === n && (n = new p()),
            n.subVectors(i, e),
            Mt.subVectors(t, e),
            n.cross(Mt);
          var r = n.lengthSq();
          return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
        },
        getBarycoord: function (t, e, i, n, r) {
          Mt.subVectors(n, e), St.subVectors(i, e), At.subVectors(t, e);
          var a = Mt.dot(Mt),
            o = Mt.dot(St),
            s = Mt.dot(At),
            c = St.dot(St),
            h = St.dot(At),
            l = a * c - o * o;
          if ((void 0 === r && (r = new p()), 0 === l))
            return r.set(-2, -1, -1);
          var u = 1 / l,
            d = (c * s - o * h) * u,
            f = (a * h - o * s) * u;
          return r.set(1 - d - f, f, d);
        },
        containsPoint: function (t, e, i, n) {
          return (
            It.getBarycoord(t, e, i, n, Tt),
            Tt.x >= 0 && Tt.y >= 0 && Tt.x + Tt.y <= 1
          );
        },
        getUV: function (t, e, i, n, r, a, o, s) {
          return (
            this.getBarycoord(t, e, i, n, Tt),
            s.set(0, 0),
            s.addScaledVector(r, Tt.x),
            s.addScaledVector(a, Tt.y),
            s.addScaledVector(o, Tt.z),
            s
          );
        },
        isFrontFacing: function (t, e, i, n) {
          return (
            Mt.subVectors(i, e), St.subVectors(t, e), Mt.cross(St).dot(n) < 0
          );
        },
      }),
        Object.assign(It.prototype, {
          set: function (t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
          },
          setFromPointsAndIndices: function (t, e, i, n) {
            return (
              this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
            );
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
          },
          getArea: function () {
            return (
              Mt.subVectors(this.c, this.b),
              St.subVectors(this.a, this.b),
              0.5 * Mt.cross(St).length()
            );
          },
          getMidpoint: function (t) {
            return (
              void 0 === t && (t = new p()),
              t
                .addVectors(this.a, this.b)
                .add(this.c)
                .multiplyScalar(1 / 3)
            );
          },
          getNormal: function (t) {
            return It.getNormal(this.a, this.b, this.c, t);
          },
          getPlane: function (t) {
            return (
              void 0 === t && (t = new wt()),
              t.setFromCoplanarPoints(this.a, this.b, this.c)
            );
          },
          getBarycoord: function (t, e) {
            return It.getBarycoord(t, this.a, this.b, this.c, e);
          },
          getUV: function (t, e, i, n, r) {
            return It.getUV(t, this.a, this.b, this.c, e, i, n, r);
          },
          containsPoint: function (t) {
            return It.containsPoint(t, this.a, this.b, this.c);
          },
          isFrontFacing: function (t) {
            return It.isFrontFacing(this.a, this.b, this.c, t);
          },
          intersectsBox: function (t) {
            return t.intersectsTriangle(this);
          },
          closestPointToPoint: function (t, e) {
            void 0 === e && (e = new p());
            var i,
              n,
              r = this.a,
              a = this.b,
              o = this.c;
            Lt.subVectors(a, r), Pt.subVectors(o, r), Et.subVectors(t, r);
            var s = Lt.dot(Et),
              c = Pt.dot(Et);
            if (s <= 0 && c <= 0) return e.copy(r);
            Ot.subVectors(t, a);
            var h = Lt.dot(Ot),
              l = Pt.dot(Ot);
            if (h >= 0 && l <= h) return e.copy(a);
            var u = s * l - h * c;
            if (u <= 0 && s >= 0 && h <= 0)
              return (i = s / (s - h)), e.copy(r).addScaledVector(Lt, i);
            Nt.subVectors(t, o);
            var d = Lt.dot(Nt),
              f = Pt.dot(Nt);
            if (f >= 0 && d <= f) return e.copy(o);
            var m = d * c - s * f;
            if (m <= 0 && c >= 0 && f <= 0)
              return (n = c / (c - f)), e.copy(r).addScaledVector(Pt, n);
            var v = h * f - d * l;
            if (v <= 0 && l - h >= 0 && d - f >= 0)
              return (
                Ct.subVectors(o, a),
                (n = (l - h) / (l - h + (d - f))),
                e.copy(a).addScaledVector(Ct, n)
              );
            var g = 1 / (v + m + u);
            return (
              (i = m * g),
              (n = u * g),
              e.copy(r).addScaledVector(Lt, i).addScaledVector(Pt, n)
            );
          },
          equals: function (t) {
            return (
              t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            );
          },
        });
      var Dt = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        },
        zt = { h: 0, s: 0, l: 0 },
        Rt = { h: 0, s: 0, l: 0 };
      function Ft(t, e, i) {
        return void 0 === e && void 0 === i
          ? this.set(t)
          : this.setRGB(t, e, i);
      }
      function Ut(t, e, i) {
        return (
          i < 0 && (i += 1),
          i > 1 && (i -= 1),
          i < 1 / 6
            ? t + 6 * (e - t) * i
            : i < 0.5
            ? e
            : i < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - i)
            : t
        );
      }
      function Bt(t) {
        return t < 0.04045
          ? 0.0773993808 * t
          : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
      }
      function Vt(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
      }
      function Gt(t, e, i, n, r, a) {
        (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.normal = n && n.isVector3 ? n : new p()),
          (this.vertexNormals = Array.isArray(n) ? n : []),
          (this.color = r && r.isColor ? r : new Ft()),
          (this.vertexColors = Array.isArray(r) ? r : []),
          (this.materialIndex = void 0 !== a ? a : 0);
      }
      Object.assign(Ft.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function (t) {
          return (
            t && t.isColor
              ? this.copy(t)
              : "number" == typeof t
              ? this.setHex(t)
              : "string" == typeof t && this.setStyle(t),
            this
          );
        },
        setScalar: function (t) {
          return (this.r = t), (this.g = t), (this.b = t), this;
        },
        setHex: function (t) {
          return (
            (t = Math.floor(t)),
            (this.r = ((t >> 16) & 255) / 255),
            (this.g = ((t >> 8) & 255) / 255),
            (this.b = (255 & t) / 255),
            this
          );
        },
        setRGB: function (t, e, i) {
          return (this.r = t), (this.g = e), (this.b = i), this;
        },
        setHSL: function (t, e, i) {
          if (
            ((t = s.euclideanModulo(t, 1)),
            (e = s.clamp(e, 0, 1)),
            (i = s.clamp(i, 0, 1)),
            0 === e)
          )
            this.r = this.g = this.b = i;
          else {
            var n = i <= 0.5 ? i * (1 + e) : i + e - i * e,
              r = 2 * i - n;
            (this.r = Ut(r, n, t + 1 / 3)),
              (this.g = Ut(r, n, t)),
              (this.b = Ut(r, n, t - 1 / 3));
          }
          return this;
        },
        setStyle: function (t) {
          function e(t) {
            void 0 !== t && parseFloat(t);
          }
          var i;
          if ((i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
            var n,
              r = i[1],
              a = i[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (
                  (n =
                    /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                      a
                    ))
                )
                  return (
                    (this.r = Math.min(255, parseInt(n[1], 10)) / 255),
                    (this.g = Math.min(255, parseInt(n[2], 10)) / 255),
                    (this.b = Math.min(255, parseInt(n[3], 10)) / 255),
                    e(n[5]),
                    this
                  );
                if (
                  (n =
                    /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                      a
                    ))
                )
                  return (
                    (this.r = Math.min(100, parseInt(n[1], 10)) / 100),
                    (this.g = Math.min(100, parseInt(n[2], 10)) / 100),
                    (this.b = Math.min(100, parseInt(n[3], 10)) / 100),
                    e(n[5]),
                    this
                  );
                break;
              case "hsl":
              case "hsla":
                if (
                  (n =
                    /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                      a
                    ))
                ) {
                  var o = parseFloat(n[1]) / 360,
                    s = parseInt(n[2], 10) / 100,
                    c = parseInt(n[3], 10) / 100;
                  return e(n[5]), this.setHSL(o, s, c);
                }
            }
          } else if ((i = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
            var h = i[1],
              l = h.length;
            if (3 === l)
              return (
                (this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255),
                (this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255),
                (this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255),
                this
              );
            if (6 === l)
              return (
                (this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255),
                (this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255),
                (this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255),
                this
              );
          }
          return t && t.length > 0 ? this.setColorName(t) : this;
        },
        setColorName: function (t) {
          var e = Dt[t];
          return void 0 !== e && this.setHex(e), this;
        },
        clone: function () {
          return new this.constructor(this.r, this.g, this.b);
        },
        copy: function (t) {
          return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        },
        copyGammaToLinear: function (t, e) {
          return (
            void 0 === e && (e = 2),
            (this.r = Math.pow(t.r, e)),
            (this.g = Math.pow(t.g, e)),
            (this.b = Math.pow(t.b, e)),
            this
          );
        },
        copyLinearToGamma: function (t, e) {
          void 0 === e && (e = 2);
          var i = e > 0 ? 1 / e : 1;
          return (
            (this.r = Math.pow(t.r, i)),
            (this.g = Math.pow(t.g, i)),
            (this.b = Math.pow(t.b, i)),
            this
          );
        },
        convertGammaToLinear: function (t) {
          return this.copyGammaToLinear(this, t), this;
        },
        convertLinearToGamma: function (t) {
          return this.copyLinearToGamma(this, t), this;
        },
        copySRGBToLinear: function (t) {
          return (
            (this.r = Bt(t.r)), (this.g = Bt(t.g)), (this.b = Bt(t.b)), this
          );
        },
        copyLinearToSRGB: function (t) {
          return (
            (this.r = Vt(t.r)), (this.g = Vt(t.g)), (this.b = Vt(t.b)), this
          );
        },
        convertSRGBToLinear: function () {
          return this.copySRGBToLinear(this), this;
        },
        convertLinearToSRGB: function () {
          return this.copyLinearToSRGB(this), this;
        },
        getHex: function () {
          return (
            ((255 * this.r) << 16) ^
            ((255 * this.g) << 8) ^
            ((255 * this.b) << 0)
          );
        },
        getHexString: function () {
          return ("000000" + this.getHex().toString(16)).slice(-6);
        },
        getHSL: function (t) {
          void 0 === t && (t = { h: 0, s: 0, l: 0 });
          var e,
            i,
            n = this.r,
            r = this.g,
            a = this.b,
            o = Math.max(n, r, a),
            s = Math.min(n, r, a),
            c = (s + o) / 2;
          if (s === o) (e = 0), (i = 0);
          else {
            var h = o - s;
            switch (((i = c <= 0.5 ? h / (o + s) : h / (2 - o - s)), o)) {
              case n:
                e = (r - a) / h + (r < a ? 6 : 0);
                break;
              case r:
                e = (a - n) / h + 2;
                break;
              case a:
                e = (n - r) / h + 4;
            }
            e /= 6;
          }
          return (t.h = e), (t.s = i), (t.l = c), t;
        },
        getStyle: function () {
          return (
            "rgb(" +
            ((255 * this.r) | 0) +
            "," +
            ((255 * this.g) | 0) +
            "," +
            ((255 * this.b) | 0) +
            ")"
          );
        },
        offsetHSL: function (t, e, i) {
          return (
            this.getHSL(zt),
            (zt.h += t),
            (zt.s += e),
            (zt.l += i),
            this.setHSL(zt.h, zt.s, zt.l),
            this
          );
        },
        add: function (t) {
          return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        },
        addColors: function (t, e) {
          return (
            (this.r = t.r + e.r),
            (this.g = t.g + e.g),
            (this.b = t.b + e.b),
            this
          );
        },
        addScalar: function (t) {
          return (this.r += t), (this.g += t), (this.b += t), this;
        },
        sub: function (t) {
          return (
            (this.r = Math.max(0, this.r - t.r)),
            (this.g = Math.max(0, this.g - t.g)),
            (this.b = Math.max(0, this.b - t.b)),
            this
          );
        },
        multiply: function (t) {
          return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        },
        multiplyScalar: function (t) {
          return (this.r *= t), (this.g *= t), (this.b *= t), this;
        },
        lerp: function (t, e) {
          return (
            (this.r += (t.r - this.r) * e),
            (this.g += (t.g - this.g) * e),
            (this.b += (t.b - this.b) * e),
            this
          );
        },
        lerpHSL: function (t, e) {
          this.getHSL(zt), t.getHSL(Rt);
          var i = s.lerp(zt.h, Rt.h, e),
            n = s.lerp(zt.s, Rt.s, e),
            r = s.lerp(zt.l, Rt.l, e);
          return this.setHSL(i, n, r), this;
        },
        equals: function (t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        },
        fromArray: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (this.r = t[e]),
            (this.g = t[e + 1]),
            (this.b = t[e + 2]),
            this
          );
        },
        toArray: function (t, e) {
          return (
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            (t[e] = this.r),
            (t[e + 1] = this.g),
            (t[e + 2] = this.b),
            t
          );
        },
        toJSON: function () {
          return this.getHex();
        },
      }),
        (Ft.NAMES = Dt),
        Object.assign(Gt.prototype, {
          clone: function () {
            return new this.constructor().copy(this);
          },
          copy: function (t) {
            (this.a = t.a),
              (this.b = t.b),
              (this.c = t.c),
              this.normal.copy(t.normal),
              this.color.copy(t.color),
              (this.materialIndex = t.materialIndex);
            for (var e = 0, i = t.vertexNormals.length; e < i; e++)
              this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, i = t.vertexColors.length; e < i; e++)
              this.vertexColors[e] = t.vertexColors[e].clone();
            return this;
          },
        });
      var jt = 0;
      function kt() {
        Object.defineProperty(this, "id", { value: jt++ }),
          (this.uuid = s.generateUUID()),
          (this.name = ""),
          (this.type = "Material"),
          (this.fog = !0),
          (this.blending = 1),
          (this.side = 0),
          (this.flatShading = !1),
          (this.vertexTangents = !1),
          (this.vertexColors = 0),
          (this.opacity = 1),
          (this.transparent = !1),
          (this.blendSrc = 204),
          (this.blendDst = 205),
          (this.blendEquation = 100),
          (this.blendSrcAlpha = null),
          (this.blendDstAlpha = null),
          (this.blendEquationAlpha = null),
          (this.depthFunc = 3),
          (this.depthTest = !0),
          (this.depthWrite = !0),
          (this.stencilWriteMask = 255),
          (this.stencilFunc = 519),
          (this.stencilRef = 0),
          (this.stencilFuncMask = 255),
          (this.stencilFail = 7680),
          (this.stencilZFail = 7680),
          (this.stencilZPass = 7680),
          (this.stencilWrite = !1),
          (this.clippingPlanes = null),
          (this.clipIntersection = !1),
          (this.clipShadows = !1),
          (this.shadowSide = null),
          (this.colorWrite = !0),
          (this.precision = null),
          (this.polygonOffset = !1),
          (this.polygonOffsetFactor = 0),
          (this.polygonOffsetUnits = 0),
          (this.dithering = !1),
          (this.alphaTest = 0),
          (this.premultipliedAlpha = !1),
          (this.visible = !0),
          (this.toneMapped = !0),
          (this.userData = {}),
          (this.needsUpdate = !0);
      }
      function Wt(t) {
        kt.call(this),
          (this.type = "MeshBasicMaterial"),
          (this.color = new Ft(16777215)),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.specularMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.combine = 0),
          (this.reflectivity = 1),
          (this.refractionRatio = 0.98),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.skinning = !1),
          (this.morphTargets = !1),
          this.setValues(t);
      }
      function Ht(t, e, i) {
        if (Array.isArray(t))
          throw new TypeError(
            "THREE.BufferAttribute: array should be a Typed Array."
          );
        (this.name = ""),
          (this.array = t),
          (this.itemSize = e),
          (this.count = void 0 !== t ? t.length / e : 0),
          (this.normalized = !0 === i),
          (this.usage = 35044),
          (this.updateRange = { offset: 0, count: -1 }),
          (this.version = 0);
      }
      function qt(t, e, i) {
        Ht.call(this, new Int8Array(t), e, i);
      }
      function Xt(t, e, i) {
        Ht.call(this, new Uint8Array(t), e, i);
      }
      function Yt(t, e, i) {
        Ht.call(this, new Uint8ClampedArray(t), e, i);
      }
      function Jt(t, e, i) {
        Ht.call(this, new Int16Array(t), e, i);
      }
      function Zt(t, e, i) {
        Ht.call(this, new Uint16Array(t), e, i);
      }
      function Qt(t, e, i) {
        Ht.call(this, new Int32Array(t), e, i);
      }
      function Kt(t, e, i) {
        Ht.call(this, new Uint32Array(t), e, i);
      }
      function $t(t, e, i) {
        Ht.call(this, new Float32Array(t), e, i);
      }
      function te(t, e, i) {
        Ht.call(this, new Float64Array(t), e, i);
      }
      function ee() {
        (this.vertices = []),
          (this.normals = []),
          (this.colors = []),
          (this.uvs = []),
          (this.uvs2 = []),
          (this.groups = []),
          (this.morphTargets = {}),
          (this.skinWeights = []),
          (this.skinIndices = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.verticesNeedUpdate = !1),
          (this.normalsNeedUpdate = !1),
          (this.colorsNeedUpdate = !1),
          (this.uvsNeedUpdate = !1),
          (this.groupsNeedUpdate = !1);
      }
      function ie(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i)
          t[i] > e && (e = t[i]);
        return e;
      }
      (kt.prototype = Object.assign(Object.create(r.prototype), {
        constructor: kt,
        isMaterial: !0,
        onBeforeCompile: function () {},
        setValues: function (t) {
          if (void 0 !== t)
            for (var e in t) {
              var i = t[e];
              if (void 0 !== i)
                if ("shading" !== e) {
                  var n = this[e];
                  void 0 !== n &&
                    (n && n.isColor
                      ? n.set(i)
                      : n && n.isVector3 && i && i.isVector3
                      ? n.copy(i)
                      : (this[e] = i));
                } else this.flatShading = 1 === i;
            }
        },
        toJSON: function (t) {
          var e = void 0 === t || "string" == typeof t;
          e && (t = { textures: {}, images: {} });
          var i = {
            metadata: {
              version: 4.5,
              type: "Material",
              generator: "Material.toJSON",
            },
          };
          function n(t) {
            var e = [];
            for (var i in t) {
              var n = t[i];
              delete n.metadata, e.push(n);
            }
            return e;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            this.color && this.color.isColor && (i.color = this.color.getHex()),
            void 0 !== this.roughness && (i.roughness = this.roughness),
            void 0 !== this.metalness && (i.metalness = this.metalness),
            this.sheen && this.sheen.isColor && (i.sheen = this.sheen.getHex()),
            this.emissive &&
              this.emissive.isColor &&
              (i.emissive = this.emissive.getHex()),
            this.emissiveIntensity &&
              1 !== this.emissiveIntensity &&
              (i.emissiveIntensity = this.emissiveIntensity),
            this.specular &&
              this.specular.isColor &&
              (i.specular = this.specular.getHex()),
            void 0 !== this.shininess && (i.shininess = this.shininess),
            void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness &&
              (i.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatNormalMap &&
              this.clearcoatNormalMap.isTexture &&
              ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
              (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
            this.matcap &&
              this.matcap.isTexture &&
              (i.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap &&
              this.alphaMap.isTexture &&
              (i.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap &&
              this.lightMap.isTexture &&
              (i.lightMap = this.lightMap.toJSON(t).uuid),
            this.aoMap &&
              this.aoMap.isTexture &&
              ((i.aoMap = this.aoMap.toJSON(t).uuid),
              (i.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap &&
              this.bumpMap.isTexture &&
              ((i.bumpMap = this.bumpMap.toJSON(t).uuid),
              (i.bumpScale = this.bumpScale)),
            this.normalMap &&
              this.normalMap.isTexture &&
              ((i.normalMap = this.normalMap.toJSON(t).uuid),
              (i.normalMapType = this.normalMapType),
              (i.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
              this.displacementMap.isTexture &&
              ((i.displacementMap = this.displacementMap.toJSON(t).uuid),
              (i.displacementScale = this.displacementScale),
              (i.displacementBias = this.displacementBias)),
            this.roughnessMap &&
              this.roughnessMap.isTexture &&
              (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap &&
              this.metalnessMap.isTexture &&
              (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap &&
              this.emissiveMap.isTexture &&
              (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap &&
              this.specularMap.isTexture &&
              (i.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap &&
              this.envMap.isTexture &&
              ((i.envMap = this.envMap.toJSON(t).uuid),
              (i.reflectivity = this.reflectivity),
              (i.refractionRatio = this.refractionRatio),
              void 0 !== this.combine && (i.combine = this.combine),
              void 0 !== this.envMapIntensity &&
                (i.envMapIntensity = this.envMapIntensity)),
            this.gradientMap &&
              this.gradientMap.isTexture &&
              (i.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.size && (i.size = this.size),
            void 0 !== this.sizeAttenuation &&
              (i.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (i.blending = this.blending),
            !0 === this.flatShading && (i.flatShading = this.flatShading),
            0 !== this.side && (i.side = this.side),
            0 !== this.vertexColors && (i.vertexColors = this.vertexColors),
            this.opacity < 1 && (i.opacity = this.opacity),
            !0 === this.transparent && (i.transparent = this.transparent),
            (i.depthFunc = this.depthFunc),
            (i.depthTest = this.depthTest),
            (i.depthWrite = this.depthWrite),
            (i.stencilWrite = this.stencilWrite),
            (i.stencilWriteMask = this.stencilWriteMask),
            (i.stencilFunc = this.stencilFunc),
            (i.stencilRef = this.stencilRef),
            (i.stencilFuncMask = this.stencilFuncMask),
            (i.stencilFail = this.stencilFail),
            (i.stencilZFail = this.stencilZFail),
            (i.stencilZPass = this.stencilZPass),
            this.rotation &&
              0 !== this.rotation &&
              (i.rotation = this.rotation),
            !0 === this.polygonOffset && (i.polygonOffset = !0),
            0 !== this.polygonOffsetFactor &&
              (i.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits &&
              (i.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth &&
              1 !== this.linewidth &&
              (i.linewidth = this.linewidth),
            void 0 !== this.dashSize && (i.dashSize = this.dashSize),
            void 0 !== this.gapSize && (i.gapSize = this.gapSize),
            void 0 !== this.scale && (i.scale = this.scale),
            !0 === this.dithering && (i.dithering = !0),
            this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
            !0 === this.premultipliedAlpha &&
              (i.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (i.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 &&
              (i.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap &&
              (i.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin &&
              (i.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.morphTargets && (i.morphTargets = !0),
            !0 === this.morphNormals && (i.morphNormals = !0),
            !0 === this.skinning && (i.skinning = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.toneMapped && (i.toneMapped = !1),
            "{}" !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            e)
          ) {
            var r = n(t.textures),
              a = n(t.images);
            r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a);
          }
          return i;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          (this.name = t.name),
            (this.fog = t.fog),
            (this.blending = t.blending),
            (this.side = t.side),
            (this.flatShading = t.flatShading),
            (this.vertexTangents = t.vertexTangents),
            (this.vertexColors = t.vertexColors),
            (this.opacity = t.opacity),
            (this.transparent = t.transparent),
            (this.blendSrc = t.blendSrc),
            (this.blendDst = t.blendDst),
            (this.blendEquation = t.blendEquation),
            (this.blendSrcAlpha = t.blendSrcAlpha),
            (this.blendDstAlpha = t.blendDstAlpha),
            (this.blendEquationAlpha = t.blendEquationAlpha),
            (this.depthFunc = t.depthFunc),
            (this.depthTest = t.depthTest),
            (this.depthWrite = t.depthWrite),
            (this.stencilWriteMask = t.stencilWriteMask),
            (this.stencilFunc = t.stencilFunc),
            (this.stencilRef = t.stencilRef),
            (this.stencilFuncMask = t.stencilFuncMask),
            (this.stencilFail = t.stencilFail),
            (this.stencilZFail = t.stencilZFail),
            (this.stencilZPass = t.stencilZPass),
            (this.stencilWrite = t.stencilWrite);
          var e = t.clippingPlanes,
            i = null;
          if (null !== e) {
            var n = e.length;
            i = new Array(n);
            for (var r = 0; r !== n; ++r) i[r] = e[r].clone();
          }
          return (
            (this.clippingPlanes = i),
            (this.clipIntersection = t.clipIntersection),
            (this.clipShadows = t.clipShadows),
            (this.shadowSide = t.shadowSide),
            (this.colorWrite = t.colorWrite),
            (this.precision = t.precision),
            (this.polygonOffset = t.polygonOffset),
            (this.polygonOffsetFactor = t.polygonOffsetFactor),
            (this.polygonOffsetUnits = t.polygonOffsetUnits),
            (this.dithering = t.dithering),
            (this.alphaTest = t.alphaTest),
            (this.premultipliedAlpha = t.premultipliedAlpha),
            (this.visible = t.visible),
            (this.toneMapped = t.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            this
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      })),
        (Wt.prototype = Object.create(kt.prototype)),
        (Wt.prototype.constructor = Wt),
        (Wt.prototype.isMeshBasicMaterial = !0),
        (Wt.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            this
          );
        }),
        Object.defineProperty(Ht.prototype, "needsUpdate", {
          set: function (t) {
            !0 === t && this.version++;
          },
        }),
        Object.assign(Ht.prototype, {
          isBufferAttribute: !0,
          onUploadCallback: function () {},
          setUsage: function (t) {
            return (this.usage = t), this;
          },
          copy: function (t) {
            return (
              (this.name = t.name),
              (this.array = new t.array.constructor(t.array)),
              (this.itemSize = t.itemSize),
              (this.count = t.count),
              (this.normalized = t.normalized),
              (this.usage = t.usage),
              this
            );
          },
          copyAt: function (t, e, i) {
            (t *= this.itemSize), (i *= e.itemSize);
            for (var n = 0, r = this.itemSize; n < r; n++)
              this.array[t + n] = e.array[i + n];
            return this;
          },
          copyArray: function (t) {
            return this.array.set(t), this;
          },
          copyColorsArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
              var a = t[n];
              void 0 === a && (a = new Ft()),
                (e[i++] = a.r),
                (e[i++] = a.g),
                (e[i++] = a.b);
            }
            return this;
          },
          copyVector2sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
              var a = t[n];
              void 0 === a && (a = new c()), (e[i++] = a.x), (e[i++] = a.y);
            }
            return this;
          },
          copyVector3sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
              var a = t[n];
              void 0 === a && (a = new p()),
                (e[i++] = a.x),
                (e[i++] = a.y),
                (e[i++] = a.z);
            }
            return this;
          },
          copyVector4sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
              var a = t[n];
              void 0 === a && (a = new x()),
                (e[i++] = a.x),
                (e[i++] = a.y),
                (e[i++] = a.z),
                (e[i++] = a.w);
            }
            return this;
          },
          set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this;
          },
          getX: function (t) {
            return this.array[t * this.itemSize];
          },
          setX: function (t, e) {
            return (this.array[t * this.itemSize] = e), this;
          },
          getY: function (t) {
            return this.array[t * this.itemSize + 1];
          },
          setY: function (t, e) {
            return (this.array[t * this.itemSize + 1] = e), this;
          },
          getZ: function (t) {
            return this.array[t * this.itemSize + 2];
          },
          setZ: function (t, e) {
            return (this.array[t * this.itemSize + 2] = e), this;
          },
          getW: function (t) {
            return this.array[t * this.itemSize + 3];
          },
          setW: function (t, e) {
            return (this.array[t * this.itemSize + 3] = e), this;
          },
          setXY: function (t, e, i) {
            return (
              (t *= this.itemSize),
              (this.array[t + 0] = e),
              (this.array[t + 1] = i),
              this
            );
          },
          setXYZ: function (t, e, i, n) {
            return (
              (t *= this.itemSize),
              (this.array[t + 0] = e),
              (this.array[t + 1] = i),
              (this.array[t + 2] = n),
              this
            );
          },
          setXYZW: function (t, e, i, n, r) {
            return (
              (t *= this.itemSize),
              (this.array[t + 0] = e),
              (this.array[t + 1] = i),
              (this.array[t + 2] = n),
              (this.array[t + 3] = r),
              this
            );
          },
          onUpload: function (t) {
            return (this.onUploadCallback = t), this;
          },
          clone: function () {
            return new this.constructor(this.array, this.itemSize).copy(this);
          },
          toJSON: function () {
            return {
              itemSize: this.itemSize,
              type: this.array.constructor.name,
              array: Array.prototype.slice.call(this.array),
              normalized: this.normalized,
            };
          },
        }),
        (qt.prototype = Object.create(Ht.prototype)),
        (qt.prototype.constructor = qt),
        (Xt.prototype = Object.create(Ht.prototype)),
        (Xt.prototype.constructor = Xt),
        (Yt.prototype = Object.create(Ht.prototype)),
        (Yt.prototype.constructor = Yt),
        (Jt.prototype = Object.create(Ht.prototype)),
        (Jt.prototype.constructor = Jt),
        (Zt.prototype = Object.create(Ht.prototype)),
        (Zt.prototype.constructor = Zt),
        (Qt.prototype = Object.create(Ht.prototype)),
        (Qt.prototype.constructor = Qt),
        (Kt.prototype = Object.create(Ht.prototype)),
        (Kt.prototype.constructor = Kt),
        ($t.prototype = Object.create(Ht.prototype)),
        ($t.prototype.constructor = $t),
        (te.prototype = Object.create(Ht.prototype)),
        (te.prototype.constructor = te),
        Object.assign(ee.prototype, {
          computeGroups: function (t) {
            for (
              var e, i = [], n = void 0, r = t.faces, a = 0;
              a < r.length;
              a++
            ) {
              var o = r[a];
              o.materialIndex !== n &&
                ((n = o.materialIndex),
                void 0 !== e && ((e.count = 3 * a - e.start), i.push(e)),
                (e = { start: 3 * a, materialIndex: n }));
            }
            void 0 !== e && ((e.count = 3 * a - e.start), i.push(e)),
              (this.groups = i);
          },
          fromGeometry: function (t) {
            var e,
              i = t.faces,
              n = t.vertices,
              r = t.faceVertexUvs,
              a = r[0] && r[0].length > 0,
              o = r[1] && r[1].length > 0,
              s = t.morphTargets,
              h = s.length;
            if (h > 0) {
              e = [];
              for (var l = 0; l < h; l++) e[l] = { name: s[l].name, data: [] };
              this.morphTargets.position = e;
            }
            var u,
              p = t.morphNormals,
              d = p.length;
            if (d > 0) {
              u = [];
              for (l = 0; l < d; l++) u[l] = { name: p[l].name, data: [] };
              this.morphTargets.normal = u;
            }
            var f = t.skinIndices,
              m = t.skinWeights,
              v = f.length === n.length,
              g = m.length === n.length;
            n.length > 0 && i.length;
            for (l = 0; l < i.length; l++) {
              var y = i[l];
              this.vertices.push(n[y.a], n[y.b], n[y.c]);
              var x = y.vertexNormals;
              if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
              else {
                var _ = y.normal;
                this.normals.push(_, _, _);
              }
              var b,
                w = y.vertexColors;
              if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
              else {
                var M = y.color;
                this.colors.push(M, M, M);
              }
              if (!0 === a)
                void 0 !== (b = r[0][l])
                  ? this.uvs.push(b[0], b[1], b[2])
                  : this.uvs.push(new c(), new c(), new c());
              if (!0 === o)
                void 0 !== (b = r[1][l])
                  ? this.uvs2.push(b[0], b[1], b[2])
                  : this.uvs2.push(new c(), new c(), new c());
              for (var S = 0; S < h; S++) {
                var A = s[S].vertices;
                e[S].data.push(A[y.a], A[y.b], A[y.c]);
              }
              for (S = 0; S < d; S++) {
                var T = p[S].vertexNormals[l];
                u[S].data.push(T.a, T.b, T.c);
              }
              v && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
                g && this.skinWeights.push(m[y.a], m[y.b], m[y.c]);
            }
            return (
              this.computeGroups(t),
              (this.verticesNeedUpdate = t.verticesNeedUpdate),
              (this.normalsNeedUpdate = t.normalsNeedUpdate),
              (this.colorsNeedUpdate = t.colorsNeedUpdate),
              (this.uvsNeedUpdate = t.uvsNeedUpdate),
              (this.groupsNeedUpdate = t.groupsNeedUpdate),
              null !== t.boundingSphere &&
                (this.boundingSphere = t.boundingSphere.clone()),
              null !== t.boundingBox &&
                (this.boundingBox = t.boundingBox.clone()),
              this
            );
          },
        });
      var ne = 1,
        re = new C(),
        ae = new X(),
        oe = new p(),
        se = new st(),
        ce = new st(),
        he = new p();
      function le() {
        Object.defineProperty(this, "id", { value: (ne += 2) }),
          (this.uuid = s.generateUUID()),
          (this.name = ""),
          (this.type = "BufferGeometry"),
          (this.index = null),
          (this.attributes = {}),
          (this.morphAttributes = {}),
          (this.groups = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.drawRange = { start: 0, count: 1 / 0 }),
          (this.userData = {});
      }
      le.prototype = Object.assign(Object.create(r.prototype), {
        constructor: le,
        isBufferGeometry: !0,
        getIndex: function () {
          return this.index;
        },
        setIndex: function (t) {
          Array.isArray(t)
            ? (this.index = new (ie(t) > 65535 ? Kt : Zt)(t, 1))
            : (this.index = t);
        },
        getAttribute: function (t) {
          return this.attributes[t];
        },
        setAttribute: function (t, e) {
          return (this.attributes[t] = e), this;
        },
        deleteAttribute: function (t) {
          return delete this.attributes[t], this;
        },
        addGroup: function (t, e, i) {
          this.groups.push({
            start: t,
            count: e,
            materialIndex: void 0 !== i ? i : 0,
          });
        },
        clearGroups: function () {
          this.groups = [];
        },
        setDrawRange: function (t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        },
        applyMatrix: function (t) {
          var e = this.attributes.position;
          void 0 !== e && (t.applyToBufferAttribute(e), (e.needsUpdate = !0));
          var i = this.attributes.normal;
          void 0 !== i &&
            (new m().getNormalMatrix(t).applyToBufferAttribute(i),
            (i.needsUpdate = !0));
          var n = this.attributes.tangent;
          void 0 !== n &&
            (new m().getNormalMatrix(t).applyToBufferAttribute(n),
            (n.needsUpdate = !0));
          return (
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        },
        rotateX: function (t) {
          return re.makeRotationX(t), this.applyMatrix(re), this;
        },
        rotateY: function (t) {
          return re.makeRotationY(t), this.applyMatrix(re), this;
        },
        rotateZ: function (t) {
          return re.makeRotationZ(t), this.applyMatrix(re), this;
        },
        translate: function (t, e, i) {
          return re.makeTranslation(t, e, i), this.applyMatrix(re), this;
        },
        scale: function (t, e, i) {
          return re.makeScale(t, e, i), this.applyMatrix(re), this;
        },
        lookAt: function (t) {
          return (
            ae.lookAt(t), ae.updateMatrix(), this.applyMatrix(ae.matrix), this
          );
        },
        center: function () {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(oe).negate(),
            this.translate(oe.x, oe.y, oe.z),
            this
          );
        },
        setFromObject: function (t) {
          var e = t.geometry;
          if (t.isPoints || t.isLine) {
            var i = new $t(3 * e.vertices.length, 3),
              n = new $t(3 * e.colors.length, 3);
            if (
              (this.setAttribute("position", i.copyVector3sArray(e.vertices)),
              this.setAttribute("color", n.copyColorsArray(e.colors)),
              e.lineDistances && e.lineDistances.length === e.vertices.length)
            ) {
              var r = new $t(e.lineDistances.length, 1);
              this.setAttribute("lineDistance", r.copyArray(e.lineDistances));
            }
            null !== e.boundingSphere &&
              (this.boundingSphere = e.boundingSphere.clone()),
              null !== e.boundingBox &&
                (this.boundingBox = e.boundingBox.clone());
          } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
          return this;
        },
        setFromPoints: function (t) {
          for (var e = [], i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e.push(r.x, r.y, r.z || 0);
          }
          return this.setAttribute("position", new $t(e, 3)), this;
        },
        updateFromObject: function (t) {
          var e,
            i = t.geometry;
          if (t.isMesh) {
            var n = i.__directGeometry;
            if (
              (!0 === i.elementsNeedUpdate &&
                ((n = void 0), (i.elementsNeedUpdate = !1)),
              void 0 === n)
            )
              return this.fromGeometry(i);
            (n.verticesNeedUpdate = i.verticesNeedUpdate),
              (n.normalsNeedUpdate = i.normalsNeedUpdate),
              (n.colorsNeedUpdate = i.colorsNeedUpdate),
              (n.uvsNeedUpdate = i.uvsNeedUpdate),
              (n.groupsNeedUpdate = i.groupsNeedUpdate),
              (i.verticesNeedUpdate = !1),
              (i.normalsNeedUpdate = !1),
              (i.colorsNeedUpdate = !1),
              (i.uvsNeedUpdate = !1),
              (i.groupsNeedUpdate = !1),
              (i = n);
          }
          return (
            !0 === i.verticesNeedUpdate &&
              (void 0 !== (e = this.attributes.position) &&
                (e.copyVector3sArray(i.vertices), (e.needsUpdate = !0)),
              (i.verticesNeedUpdate = !1)),
            !0 === i.normalsNeedUpdate &&
              (void 0 !== (e = this.attributes.normal) &&
                (e.copyVector3sArray(i.normals), (e.needsUpdate = !0)),
              (i.normalsNeedUpdate = !1)),
            !0 === i.colorsNeedUpdate &&
              (void 0 !== (e = this.attributes.color) &&
                (e.copyColorsArray(i.colors), (e.needsUpdate = !0)),
              (i.colorsNeedUpdate = !1)),
            i.uvsNeedUpdate &&
              (void 0 !== (e = this.attributes.uv) &&
                (e.copyVector2sArray(i.uvs), (e.needsUpdate = !0)),
              (i.uvsNeedUpdate = !1)),
            i.lineDistancesNeedUpdate &&
              (void 0 !== (e = this.attributes.lineDistance) &&
                (e.copyArray(i.lineDistances), (e.needsUpdate = !0)),
              (i.lineDistancesNeedUpdate = !1)),
            i.groupsNeedUpdate &&
              (i.computeGroups(t.geometry),
              (this.groups = i.groups),
              (i.groupsNeedUpdate = !1)),
            this
          );
        },
        fromGeometry: function (t) {
          return (
            (t.__directGeometry = new ee().fromGeometry(t)),
            this.fromDirectGeometry(t.__directGeometry)
          );
        },
        fromDirectGeometry: function (t) {
          var e = new Float32Array(3 * t.vertices.length);
          if (
            (this.setAttribute(
              "position",
              new Ht(e, 3).copyVector3sArray(t.vertices)
            ),
            t.normals.length > 0)
          ) {
            var i = new Float32Array(3 * t.normals.length);
            this.setAttribute(
              "normal",
              new Ht(i, 3).copyVector3sArray(t.normals)
            );
          }
          if (t.colors.length > 0) {
            var n = new Float32Array(3 * t.colors.length);
            this.setAttribute("color", new Ht(n, 3).copyColorsArray(t.colors));
          }
          if (t.uvs.length > 0) {
            var r = new Float32Array(2 * t.uvs.length);
            this.setAttribute("uv", new Ht(r, 2).copyVector2sArray(t.uvs));
          }
          if (t.uvs2.length > 0) {
            var a = new Float32Array(2 * t.uvs2.length);
            this.setAttribute("uv2", new Ht(a, 2).copyVector2sArray(t.uvs2));
          }
          for (var o in ((this.groups = t.groups), t.morphTargets)) {
            for (
              var s = [], c = t.morphTargets[o], h = 0, l = c.length;
              h < l;
              h++
            ) {
              var u = c[h],
                p = new $t(3 * u.data.length, 3);
              (p.name = u.name), s.push(p.copyVector3sArray(u.data));
            }
            this.morphAttributes[o] = s;
          }
          if (t.skinIndices.length > 0) {
            var d = new $t(4 * t.skinIndices.length, 4);
            this.setAttribute("skinIndex", d.copyVector4sArray(t.skinIndices));
          }
          if (t.skinWeights.length > 0) {
            var f = new $t(4 * t.skinWeights.length, 4);
            this.setAttribute("skinWeight", f.copyVector4sArray(t.skinWeights));
          }
          return (
            null !== t.boundingSphere &&
              (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox &&
              (this.boundingBox = t.boundingBox.clone()),
            this
          );
        },
        computeBoundingBox: function () {
          null === this.boundingBox && (this.boundingBox = new st());
          var t = this.attributes.position,
            e = this.morphAttributes.position;
          if (void 0 !== t) {
            if ((this.boundingBox.setFromBufferAttribute(t), e))
              for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                se.setFromBufferAttribute(r),
                  this.boundingBox.expandByPoint(se.min),
                  this.boundingBox.expandByPoint(se.max);
              }
          } else this.boundingBox.makeEmpty();
          isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z);
        },
        computeBoundingSphere: function () {
          null === this.boundingSphere && (this.boundingSphere = new lt());
          var t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t) {
            var i = this.boundingSphere.center;
            if ((se.setFromBufferAttribute(t), e))
              for (var n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                ce.setFromBufferAttribute(a),
                  se.expandByPoint(ce.min),
                  se.expandByPoint(ce.max);
              }
            se.getCenter(i);
            var o = 0;
            for (n = 0, r = t.count; n < r; n++)
              he.fromBufferAttribute(t, n),
                (o = Math.max(o, i.distanceToSquared(he)));
            if (e)
              for (n = 0, r = e.length; n < r; n++)
                for (var s = 0, c = (a = e[n]).count; s < c; s++)
                  he.fromBufferAttribute(a, s),
                    (o = Math.max(o, i.distanceToSquared(he)));
            (this.boundingSphere.radius = Math.sqrt(o)),
              isNaN(this.boundingSphere.radius);
          }
        },
        computeFaceNormals: function () {},
        computeVertexNormals: function () {
          var t = this.index,
            e = this.attributes;
          if (e.position) {
            var i = e.position.array;
            if (void 0 === e.normal)
              this.setAttribute(
                "normal",
                new Ht(new Float32Array(i.length), 3)
              );
            else
              for (var n = e.normal.array, r = 0, a = n.length; r < a; r++)
                n[r] = 0;
            var o,
              s,
              c,
              h = e.normal.array,
              l = new p(),
              u = new p(),
              d = new p(),
              f = new p(),
              m = new p();
            if (t) {
              var v = t.array;
              for (r = 0, a = t.count; r < a; r += 3)
                (o = 3 * v[r + 0]),
                  (s = 3 * v[r + 1]),
                  (c = 3 * v[r + 2]),
                  l.fromArray(i, o),
                  u.fromArray(i, s),
                  d.fromArray(i, c),
                  f.subVectors(d, u),
                  m.subVectors(l, u),
                  f.cross(m),
                  (h[o] += f.x),
                  (h[o + 1] += f.y),
                  (h[o + 2] += f.z),
                  (h[s] += f.x),
                  (h[s + 1] += f.y),
                  (h[s + 2] += f.z),
                  (h[c] += f.x),
                  (h[c + 1] += f.y),
                  (h[c + 2] += f.z);
            } else
              for (r = 0, a = i.length; r < a; r += 9)
                l.fromArray(i, r),
                  u.fromArray(i, r + 3),
                  d.fromArray(i, r + 6),
                  f.subVectors(d, u),
                  m.subVectors(l, u),
                  f.cross(m),
                  (h[r] = f.x),
                  (h[r + 1] = f.y),
                  (h[r + 2] = f.z),
                  (h[r + 3] = f.x),
                  (h[r + 4] = f.y),
                  (h[r + 5] = f.z),
                  (h[r + 6] = f.x),
                  (h[r + 7] = f.y),
                  (h[r + 8] = f.z);
            this.normalizeNormals(), (e.normal.needsUpdate = !0);
          }
        },
        merge: function (t, e) {
          if (t && t.isBufferGeometry) {
            void 0 === e && (e = 0);
            var i = this.attributes;
            for (var n in i)
              if (void 0 !== t.attributes[n])
                for (
                  var r = i[n].array,
                    a = t.attributes[n],
                    o = a.array,
                    s = a.itemSize * e,
                    c = Math.min(o.length, r.length - s),
                    h = 0,
                    l = s;
                  h < c;
                  h++, l++
                )
                  r[l] = o[h];
            return this;
          }
        },
        normalizeNormals: function () {
          for (var t = this.attributes.normal, e = 0, i = t.count; e < i; e++)
            (he.x = t.getX(e)),
              (he.y = t.getY(e)),
              (he.z = t.getZ(e)),
              he.normalize(),
              t.setXYZ(e, he.x, he.y, he.z);
        },
        toNonIndexed: function () {
          function t(t, e) {
            for (
              var i = t.array,
                n = t.itemSize,
                r = new i.constructor(e.length * n),
                a = 0,
                o = 0,
                s = 0,
                c = e.length;
              s < c;
              s++
            ) {
              a = e[s] * n;
              for (var h = 0; h < n; h++) r[o++] = i[a++];
            }
            return new Ht(r, n);
          }
          if (null === this.index) return this;
          var e = new le(),
            i = this.index.array,
            n = this.attributes;
          for (var r in n) {
            var a = t(n[r], i);
            e.setAttribute(r, a);
          }
          var o = this.morphAttributes;
          for (r in o) {
            for (var s = [], c = o[r], h = 0, l = c.length; h < l; h++) {
              a = t(c[h], i);
              s.push(a);
            }
            e.morphAttributes[r] = s;
          }
          for (var u = this.groups, p = ((h = 0), u.length); h < p; h++) {
            var d = u[h];
            e.addGroup(d.start, d.count, d.materialIndex);
          }
          return e;
        },
        toJSON: function () {
          var t = {
            metadata: {
              version: 4.5,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 &&
              (t.userData = this.userData),
            void 0 !== this.parameters)
          ) {
            var e = this.parameters;
            for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
            return t;
          }
          t.data = { attributes: {} };
          var n = this.index;
          null !== n &&
            (t.data.index = {
              type: n.array.constructor.name,
              array: Array.prototype.slice.call(n.array),
            });
          var r = this.attributes;
          for (var i in r) {
            var a = (p = r[i]).toJSON();
            "" !== p.name && (a.name = p.name), (t.data.attributes[i] = a);
          }
          var o = {},
            s = !1;
          for (var i in this.morphAttributes) {
            for (
              var c = this.morphAttributes[i], h = [], l = 0, u = c.length;
              l < u;
              l++
            ) {
              var p;
              a = (p = c[l]).toJSON();
              "" !== p.name && (a.name = p.name), h.push(a);
            }
            h.length > 0 && ((o[i] = h), (s = !0));
          }
          s && (t.data.morphAttributes = o);
          var d = this.groups;
          d.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(d)));
          var f = this.boundingSphere;
          return (
            null !== f &&
              (t.data.boundingSphere = {
                center: f.center.toArray(),
                radius: f.radius,
              }),
            t
          );
        },
        clone: function () {
          return new le().copy(this);
        },
        copy: function (t) {
          var e, i, n;
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.name = t.name);
          var r = t.index;
          null !== r && this.setIndex(r.clone());
          var a = t.attributes;
          for (e in a) {
            var o = a[e];
            this.setAttribute(e, o.clone());
          }
          var s = t.morphAttributes;
          for (e in s) {
            var c = [],
              h = s[e];
            for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
            this.morphAttributes[e] = c;
          }
          var l = t.groups;
          for (i = 0, n = l.length; i < n; i++) {
            var u = l[i];
            this.addGroup(u.start, u.count, u.materialIndex);
          }
          var p = t.boundingBox;
          null !== p && (this.boundingBox = p.clone());
          var d = t.boundingSphere;
          return (
            null !== d && (this.boundingSphere = d.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            (this.userData = t.userData),
            this
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      });
      var ue = new C(),
        pe = new yt(),
        de = new lt(),
        fe = new p(),
        me = new p(),
        ve = new p(),
        ge = new p(),
        ye = new p(),
        xe = new p(),
        _e = new p(),
        be = new p(),
        we = new p(),
        Me = new c(),
        Se = new c(),
        Ae = new c(),
        Te = new p(),
        Le = new p();
      function Pe(t, e) {
        X.call(this),
          (this.type = "Mesh"),
          (this.geometry = void 0 !== t ? t : new le()),
          (this.material =
            void 0 !== e ? e : new Wt({ color: 16777215 * Math.random() })),
          (this.drawMode = 0),
          this.updateMorphTargets();
      }
      function Ce(t, e, i, n, r, a, o, s) {
        if (
          null ===
          (1 === e.side
            ? n.intersectTriangle(o, a, r, !0, s)
            : n.intersectTriangle(r, a, o, 2 !== e.side, s))
        )
          return null;
        Le.copy(s), Le.applyMatrix4(t.matrixWorld);
        var c = i.ray.origin.distanceTo(Le);
        return c < i.near || c > i.far
          ? null
          : { distance: c, point: Le.clone(), object: t };
      }
      function Ee(t, e, i, n, r, a, o, s, h, l, u) {
        fe.fromBufferAttribute(r, h),
          me.fromBufferAttribute(r, l),
          ve.fromBufferAttribute(r, u);
        var p = t.morphTargetInfluences;
        if (e.morphTargets && a && p) {
          _e.set(0, 0, 0), be.set(0, 0, 0), we.set(0, 0, 0);
          for (var d = 0, f = a.length; d < f; d++) {
            var m = p[d],
              v = a[d];
            0 !== m &&
              (ge.fromBufferAttribute(v, h),
              ye.fromBufferAttribute(v, l),
              xe.fromBufferAttribute(v, u),
              _e.addScaledVector(ge.sub(fe), m),
              be.addScaledVector(ye.sub(me), m),
              we.addScaledVector(xe.sub(ve), m));
          }
          fe.add(_e), me.add(be), ve.add(we);
        }
        var g = Ce(t, e, i, n, fe, me, ve, Te);
        if (g) {
          o &&
            (Me.fromBufferAttribute(o, h),
            Se.fromBufferAttribute(o, l),
            Ae.fromBufferAttribute(o, u),
            (g.uv = It.getUV(Te, fe, me, ve, Me, Se, Ae, new c()))),
            s &&
              (Me.fromBufferAttribute(s, h),
              Se.fromBufferAttribute(s, l),
              Ae.fromBufferAttribute(s, u),
              (g.uv2 = It.getUV(Te, fe, me, ve, Me, Se, Ae, new c())));
          var y = new Gt(h, l, u);
          It.getNormal(fe, me, ve, y.normal), (g.face = y);
        }
        return g;
      }
      Pe.prototype = Object.assign(Object.create(X.prototype), {
        constructor: Pe,
        isMesh: !0,
        setDrawMode: function (t) {
          this.drawMode = t;
        },
        copy: function (t) {
          return (
            X.prototype.copy.call(this, t),
            (this.drawMode = t.drawMode),
            void 0 !== t.morphTargetInfluences &&
              (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary &&
              (this.morphTargetDictionary = Object.assign(
                {},
                t.morphTargetDictionary
              )),
            this
          );
        },
        updateMorphTargets: function () {
          var t,
            e,
            i,
            n = this.geometry;
          if (n.isBufferGeometry) {
            var r = n.morphAttributes,
              a = Object.keys(r);
            if (a.length > 0) {
              var o = r[a[0]];
              if (void 0 !== o)
                for (
                  this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {},
                    t = 0,
                    e = o.length;
                  t < e;
                  t++
                )
                  (i = o[t].name || String(t)),
                    this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[i] = t);
            }
          } else {
            var s = n.morphTargets;
            void 0 !== s && s.length;
          }
        },
        raycast: function (t, e) {
          var i,
            n = this.geometry,
            r = this.material,
            a = this.matrixWorld;
          if (
            void 0 !== r &&
            (null === n.boundingSphere && n.computeBoundingSphere(),
            de.copy(n.boundingSphere),
            de.applyMatrix4(a),
            !1 !== t.ray.intersectsSphere(de) &&
              !(ue.getInverse(a),
              pe.copy(t.ray).applyMatrix4(ue),
              (null !== n.boundingBox &&
                !1 === pe.intersectsBox(n.boundingBox)) ||
                0 !== this.drawMode))
          )
            if (n.isBufferGeometry) {
              var o,
                s,
                h,
                l,
                u,
                p,
                d,
                f,
                m,
                v = n.index,
                g = n.attributes.position,
                y = n.morphAttributes.position,
                x = n.attributes.uv,
                _ = n.attributes.uv2,
                b = n.groups,
                w = n.drawRange;
              if (null !== v)
                if (Array.isArray(r))
                  for (l = 0, p = b.length; l < p; l++)
                    for (
                      m = r[(f = b[l]).materialIndex],
                        u = Math.max(f.start, w.start),
                        d = Math.min(f.start + f.count, w.start + w.count);
                      u < d;
                      u += 3
                    )
                      (o = v.getX(u)),
                        (s = v.getX(u + 1)),
                        (h = v.getX(u + 2)),
                        (i = Ee(this, m, t, pe, g, y, x, _, o, s, h)) &&
                          ((i.faceIndex = Math.floor(u / 3)),
                          (i.face.materialIndex = f.materialIndex),
                          e.push(i));
                else
                  for (
                    l = Math.max(0, w.start),
                      p = Math.min(v.count, w.start + w.count);
                    l < p;
                    l += 3
                  )
                    (o = v.getX(l)),
                      (s = v.getX(l + 1)),
                      (h = v.getX(l + 2)),
                      (i = Ee(this, r, t, pe, g, y, x, _, o, s, h)) &&
                        ((i.faceIndex = Math.floor(l / 3)), e.push(i));
              else if (void 0 !== g)
                if (Array.isArray(r))
                  for (l = 0, p = b.length; l < p; l++)
                    for (
                      m = r[(f = b[l]).materialIndex],
                        u = Math.max(f.start, w.start),
                        d = Math.min(f.start + f.count, w.start + w.count);
                      u < d;
                      u += 3
                    )
                      (i = Ee(
                        this,
                        m,
                        t,
                        pe,
                        g,
                        y,
                        x,
                        _,
                        (o = u),
                        (s = u + 1),
                        (h = u + 2)
                      )) &&
                        ((i.faceIndex = Math.floor(u / 3)),
                        (i.face.materialIndex = f.materialIndex),
                        e.push(i));
                else
                  for (
                    l = Math.max(0, w.start),
                      p = Math.min(g.count, w.start + w.count);
                    l < p;
                    l += 3
                  )
                    (i = Ee(
                      this,
                      r,
                      t,
                      pe,
                      g,
                      y,
                      x,
                      _,
                      (o = l),
                      (s = l + 1),
                      (h = l + 2)
                    )) && ((i.faceIndex = Math.floor(l / 3)), e.push(i));
            } else if (n.isGeometry) {
              var M,
                S,
                A,
                T,
                L = Array.isArray(r),
                P = n.vertices,
                C = n.faces,
                E = n.faceVertexUvs[0];
              E.length > 0 && (T = E);
              for (var O = 0, N = C.length; O < N; O++) {
                var I = C[O],
                  D = L ? r[I.materialIndex] : r;
                if (
                  void 0 !== D &&
                  ((M = P[I.a]),
                  (S = P[I.b]),
                  (A = P[I.c]),
                  (i = Ce(this, D, t, pe, M, S, A, Te)))
                ) {
                  if (T && T[O]) {
                    var z = T[O];
                    Me.copy(z[0]),
                      Se.copy(z[1]),
                      Ae.copy(z[2]),
                      (i.uv = It.getUV(Te, M, S, A, Me, Se, Ae, new c()));
                  }
                  (i.face = I), (i.faceIndex = O), e.push(i);
                }
              }
            }
        },
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      });
      var Oe = 0,
        Ne = new C(),
        Ie = new X(),
        De = new p();
      function ze() {
        Object.defineProperty(this, "id", { value: (Oe += 2) }),
          (this.uuid = s.generateUUID()),
          (this.name = ""),
          (this.type = "Geometry"),
          (this.vertices = []),
          (this.colors = []),
          (this.faces = []),
          (this.faceVertexUvs = [[]]),
          (this.morphTargets = []),
          (this.morphNormals = []),
          (this.skinWeights = []),
          (this.skinIndices = []),
          (this.lineDistances = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.elementsNeedUpdate = !1),
          (this.verticesNeedUpdate = !1),
          (this.uvsNeedUpdate = !1),
          (this.normalsNeedUpdate = !1),
          (this.colorsNeedUpdate = !1),
          (this.lineDistancesNeedUpdate = !1),
          (this.groupsNeedUpdate = !1);
      }
      ze.prototype = Object.assign(Object.create(r.prototype), {
        constructor: ze,
        isGeometry: !0,
        applyMatrix: function (t) {
          for (
            var e = new m().getNormalMatrix(t), i = 0, n = this.vertices.length;
            i < n;
            i++
          ) {
            this.vertices[i].applyMatrix4(t);
          }
          for (i = 0, n = this.faces.length; i < n; i++) {
            var r = this.faces[i];
            r.normal.applyMatrix3(e).normalize();
            for (var a = 0, o = r.vertexNormals.length; a < o; a++)
              r.vertexNormals[a].applyMatrix3(e).normalize();
          }
          return (
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            (this.verticesNeedUpdate = !0),
            (this.normalsNeedUpdate = !0),
            this
          );
        },
        rotateX: function (t) {
          return Ne.makeRotationX(t), this.applyMatrix(Ne), this;
        },
        rotateY: function (t) {
          return Ne.makeRotationY(t), this.applyMatrix(Ne), this;
        },
        rotateZ: function (t) {
          return Ne.makeRotationZ(t), this.applyMatrix(Ne), this;
        },
        translate: function (t, e, i) {
          return Ne.makeTranslation(t, e, i), this.applyMatrix(Ne), this;
        },
        scale: function (t, e, i) {
          return Ne.makeScale(t, e, i), this.applyMatrix(Ne), this;
        },
        lookAt: function (t) {
          return (
            Ie.lookAt(t), Ie.updateMatrix(), this.applyMatrix(Ie.matrix), this
          );
        },
        fromBufferGeometry: function (t) {
          var e = this,
            i = null !== t.index ? t.index.array : void 0,
            n = t.attributes;
          if (void 0 === n.position) return this;
          var r = n.position.array,
            a = void 0 !== n.normal ? n.normal.array : void 0,
            o = void 0 !== n.color ? n.color.array : void 0,
            s = void 0 !== n.uv ? n.uv.array : void 0,
            h = void 0 !== n.uv2 ? n.uv2.array : void 0;
          void 0 !== h && (this.faceVertexUvs[1] = []);
          for (var l = 0; l < r.length; l += 3)
            e.vertices.push(new p().fromArray(r, l)),
              void 0 !== o && e.colors.push(new Ft().fromArray(o, l));
          function u(t, i, n, r) {
            var l =
                void 0 === o
                  ? []
                  : [
                      e.colors[t].clone(),
                      e.colors[i].clone(),
                      e.colors[n].clone(),
                    ],
              u = new Gt(
                t,
                i,
                n,
                void 0 === a
                  ? []
                  : [
                      new p().fromArray(a, 3 * t),
                      new p().fromArray(a, 3 * i),
                      new p().fromArray(a, 3 * n),
                    ],
                l,
                r
              );
            e.faces.push(u),
              void 0 !== s &&
                e.faceVertexUvs[0].push([
                  new c().fromArray(s, 2 * t),
                  new c().fromArray(s, 2 * i),
                  new c().fromArray(s, 2 * n),
                ]),
              void 0 !== h &&
                e.faceVertexUvs[1].push([
                  new c().fromArray(h, 2 * t),
                  new c().fromArray(h, 2 * i),
                  new c().fromArray(h, 2 * n),
                ]);
          }
          var d = t.groups;
          if (d.length > 0)
            for (l = 0; l < d.length; l++)
              for (
                var f = d[l], m = f.start, v = m, g = m + f.count;
                v < g;
                v += 3
              )
                void 0 !== i
                  ? u(i[v], i[v + 1], i[v + 2], f.materialIndex)
                  : u(v, v + 1, v + 2, f.materialIndex);
          else if (void 0 !== i)
            for (l = 0; l < i.length; l += 3) u(i[l], i[l + 1], i[l + 2]);
          else for (l = 0; l < r.length / 3; l += 3) u(l, l + 1, l + 2);
          return (
            this.computeFaceNormals(),
            null !== t.boundingBox &&
              (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere &&
              (this.boundingSphere = t.boundingSphere.clone()),
            this
          );
        },
        center: function () {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(De).negate(),
            this.translate(De.x, De.y, De.z),
            this
          );
        },
        normalize: function () {
          this.computeBoundingSphere();
          var t = this.boundingSphere.center,
            e = this.boundingSphere.radius,
            i = 0 === e ? 1 : 1 / e,
            n = new C();
          return (
            n.set(
              i,
              0,
              0,
              -i * t.x,
              0,
              i,
              0,
              -i * t.y,
              0,
              0,
              i,
              -i * t.z,
              0,
              0,
              0,
              1
            ),
            this.applyMatrix(n),
            this
          );
        },
        computeFaceNormals: function () {
          for (
            var t = new p(), e = new p(), i = 0, n = this.faces.length;
            i < n;
            i++
          ) {
            var r = this.faces[i],
              a = this.vertices[r.a],
              o = this.vertices[r.b],
              s = this.vertices[r.c];
            t.subVectors(s, o),
              e.subVectors(a, o),
              t.cross(e),
              t.normalize(),
              r.normal.copy(t);
          }
        },
        computeVertexNormals: function (t) {
          var e, i, n, r, a, o;
          for (
            void 0 === t && (t = !0),
              o = new Array(this.vertices.length),
              e = 0,
              i = this.vertices.length;
            e < i;
            e++
          )
            o[e] = new p();
          if (t) {
            var s,
              c,
              h,
              l = new p(),
              u = new p();
            for (n = 0, r = this.faces.length; n < r; n++)
              (a = this.faces[n]),
                (s = this.vertices[a.a]),
                (c = this.vertices[a.b]),
                (h = this.vertices[a.c]),
                l.subVectors(h, c),
                u.subVectors(s, c),
                l.cross(u),
                o[a.a].add(l),
                o[a.b].add(l),
                o[a.c].add(l);
          } else
            for (
              this.computeFaceNormals(), n = 0, r = this.faces.length;
              n < r;
              n++
            )
              o[(a = this.faces[n]).a].add(a.normal),
                o[a.b].add(a.normal),
                o[a.c].add(a.normal);
          for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
          for (n = 0, r = this.faces.length; n < r; n++) {
            var d = (a = this.faces[n]).vertexNormals;
            3 === d.length
              ? (d[0].copy(o[a.a]), d[1].copy(o[a.b]), d[2].copy(o[a.c]))
              : ((d[0] = o[a.a].clone()),
                (d[1] = o[a.b].clone()),
                (d[2] = o[a.c].clone()));
          }
          this.faces.length > 0 && (this.normalsNeedUpdate = !0);
        },
        computeFlatVertexNormals: function () {
          var t, e, i;
          for (
            this.computeFaceNormals(), t = 0, e = this.faces.length;
            t < e;
            t++
          ) {
            var n = (i = this.faces[t]).vertexNormals;
            3 === n.length
              ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal))
              : ((n[0] = i.normal.clone()),
                (n[1] = i.normal.clone()),
                (n[2] = i.normal.clone()));
          }
          this.faces.length > 0 && (this.normalsNeedUpdate = !0);
        },
        computeMorphNormals: function () {
          var t, e, i, n, r;
          for (i = 0, n = this.faces.length; i < n; i++)
            for (
              (r = this.faces[i]).__originalFaceNormal
                ? r.__originalFaceNormal.copy(r.normal)
                : (r.__originalFaceNormal = r.normal.clone()),
                r.__originalVertexNormals || (r.__originalVertexNormals = []),
                t = 0,
                e = r.vertexNormals.length;
              t < e;
              t++
            )
              r.__originalVertexNormals[t]
                ? r.__originalVertexNormals[t].copy(r.vertexNormals[t])
                : (r.__originalVertexNormals[t] = r.vertexNormals[t].clone());
          var a = new ze();
          for (
            a.faces = this.faces, t = 0, e = this.morphTargets.length;
            t < e;
            t++
          ) {
            if (!this.morphNormals[t]) {
              (this.morphNormals[t] = {}),
                (this.morphNormals[t].faceNormals = []),
                (this.morphNormals[t].vertexNormals = []);
              var o = this.morphNormals[t].faceNormals,
                s = this.morphNormals[t].vertexNormals;
              for (i = 0, n = this.faces.length; i < n; i++)
                (c = new p()),
                  (h = { a: new p(), b: new p(), c: new p() }),
                  o.push(c),
                  s.push(h);
            }
            var c,
              h,
              l = this.morphNormals[t];
            for (
              a.vertices = this.morphTargets[t].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals(),
                i = 0,
                n = this.faces.length;
              i < n;
              i++
            )
              (r = this.faces[i]),
                (c = l.faceNormals[i]),
                (h = l.vertexNormals[i]),
                c.copy(r.normal),
                h.a.copy(r.vertexNormals[0]),
                h.b.copy(r.vertexNormals[1]),
                h.c.copy(r.vertexNormals[2]);
          }
          for (i = 0, n = this.faces.length; i < n; i++)
            ((r = this.faces[i]).normal = r.__originalFaceNormal),
              (r.vertexNormals = r.__originalVertexNormals);
        },
        computeBoundingBox: function () {
          null === this.boundingBox && (this.boundingBox = new st()),
            this.boundingBox.setFromPoints(this.vertices);
        },
        computeBoundingSphere: function () {
          null === this.boundingSphere && (this.boundingSphere = new lt()),
            this.boundingSphere.setFromPoints(this.vertices);
        },
        merge: function (t, e, i) {
          if (t && t.isGeometry) {
            var n,
              r = this.vertices.length,
              a = this.vertices,
              o = t.vertices,
              s = this.faces,
              c = t.faces,
              h = this.colors,
              l = t.colors;
            void 0 === i && (i = 0),
              void 0 !== e && (n = new m().getNormalMatrix(e));
            for (var u = 0, p = o.length; u < p; u++) {
              var d = o[u].clone();
              void 0 !== e && d.applyMatrix4(e), a.push(d);
            }
            for (u = 0, p = l.length; u < p; u++) h.push(l[u].clone());
            for (u = 0, p = c.length; u < p; u++) {
              var f,
                v,
                g,
                y = c[u],
                x = y.vertexNormals,
                _ = y.vertexColors;
              (f = new Gt(y.a + r, y.b + r, y.c + r)).normal.copy(y.normal),
                void 0 !== n && f.normal.applyMatrix3(n).normalize();
              for (var b = 0, w = x.length; b < w; b++)
                (v = x[b].clone()),
                  void 0 !== n && v.applyMatrix3(n).normalize(),
                  f.vertexNormals.push(v);
              f.color.copy(y.color);
              for (b = 0, w = _.length; b < w; b++)
                (g = _[b]), f.vertexColors.push(g.clone());
              (f.materialIndex = y.materialIndex + i), s.push(f);
            }
            for (u = 0, p = t.faceVertexUvs.length; u < p; u++) {
              var M = t.faceVertexUvs[u];
              void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);
              for (b = 0, w = M.length; b < w; b++) {
                for (var S = M[b], A = [], T = 0, L = S.length; T < L; T++)
                  A.push(S[T].clone());
                this.faceVertexUvs[u].push(A);
              }
            }
          }
        },
        mergeMesh: function (t) {
          t &&
            t.isMesh &&
            (t.matrixAutoUpdate && t.updateMatrix(),
            this.merge(t.geometry, t.matrix));
        },
        mergeVertices: function () {
          var t,
            e,
            i,
            n,
            r,
            a,
            o,
            s,
            c = {},
            h = [],
            l = [],
            u = Math.pow(10, 4);
          for (i = 0, n = this.vertices.length; i < n; i++)
            (t = this.vertices[i]),
              void 0 ===
              c[
                (e =
                  Math.round(t.x * u) +
                  "_" +
                  Math.round(t.y * u) +
                  "_" +
                  Math.round(t.z * u))
              ]
                ? ((c[e] = i), h.push(this.vertices[i]), (l[i] = h.length - 1))
                : (l[i] = l[c[e]]);
          var p = [];
          for (i = 0, n = this.faces.length; i < n; i++) {
            ((r = this.faces[i]).a = l[r.a]),
              (r.b = l[r.b]),
              (r.c = l[r.c]),
              (a = [r.a, r.b, r.c]);
            for (var d = 0; d < 3; d++)
              if (a[d] === a[(d + 1) % 3]) {
                p.push(i);
                break;
              }
          }
          for (i = p.length - 1; i >= 0; i--) {
            var f = p[i];
            for (
              this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length;
              o < s;
              o++
            )
              this.faceVertexUvs[o].splice(f, 1);
          }
          var m = this.vertices.length - h.length;
          return (this.vertices = h), m;
        },
        setFromPoints: function (t) {
          this.vertices = [];
          for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e];
            this.vertices.push(new p(n.x, n.y, n.z || 0));
          }
          return this;
        },
        sortFacesByMaterialIndex: function () {
          for (var t = this.faces, e = t.length, i = 0; i < e; i++)
            t[i]._id = i;
          t.sort(function (t, e) {
            return t.materialIndex - e.materialIndex;
          });
          var n,
            r,
            a = this.faceVertexUvs[0],
            o = this.faceVertexUvs[1];
          a && a.length === e && (n = []), o && o.length === e && (r = []);
          for (i = 0; i < e; i++) {
            var s = t[i]._id;
            n && n.push(a[s]), r && r.push(o[s]);
          }
          n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r);
        },
        toJSON: function () {
          var t = {
            metadata: {
              version: 4.5,
              type: "Geometry",
              generator: "Geometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters)
          ) {
            var e = this.parameters;
            for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
            return t;
          }
          for (var n = [], r = 0; r < this.vertices.length; r++) {
            var a = this.vertices[r];
            n.push(a.x, a.y, a.z);
          }
          var o = [],
            s = [],
            c = {},
            h = [],
            l = {},
            u = [],
            p = {};
          for (r = 0; r < this.faces.length; r++) {
            var d = this.faces[r],
              f = void 0 !== this.faceVertexUvs[0][r],
              m = d.normal.length() > 0,
              v = d.vertexNormals.length > 0,
              g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
              y = d.vertexColors.length > 0,
              x = 0;
            if (
              ((x = M(x, 0, 0)),
              (x = M(x, 1, !0)),
              (x = M(x, 2, !1)),
              (x = M(x, 3, f)),
              (x = M(x, 4, m)),
              (x = M(x, 5, v)),
              (x = M(x, 6, g)),
              (x = M(x, 7, y)),
              o.push(x),
              o.push(d.a, d.b, d.c),
              o.push(d.materialIndex),
              f)
            ) {
              var _ = this.faceVertexUvs[0][r];
              o.push(T(_[0]), T(_[1]), T(_[2]));
            }
            if ((m && o.push(S(d.normal)), v)) {
              var b = d.vertexNormals;
              o.push(S(b[0]), S(b[1]), S(b[2]));
            }
            if ((g && o.push(A(d.color)), y)) {
              var w = d.vertexColors;
              o.push(A(w[0]), A(w[1]), A(w[2]));
            }
          }
          function M(t, e, i) {
            return i ? t | (1 << e) : t & ~(1 << e);
          }
          function S(t) {
            var e = t.x.toString() + t.y.toString() + t.z.toString();
            return (
              void 0 !== c[e] || ((c[e] = s.length / 3), s.push(t.x, t.y, t.z)),
              c[e]
            );
          }
          function A(t) {
            var e = t.r.toString() + t.g.toString() + t.b.toString();
            return (
              void 0 !== l[e] || ((l[e] = h.length), h.push(t.getHex())), l[e]
            );
          }
          function T(t) {
            var e = t.x.toString() + t.y.toString();
            return (
              void 0 !== p[e] || ((p[e] = u.length / 2), u.push(t.x, t.y)), p[e]
            );
          }
          return (
            (t.data = {}),
            (t.data.vertices = n),
            (t.data.normals = s),
            h.length > 0 && (t.data.colors = h),
            u.length > 0 && (t.data.uvs = [u]),
            (t.data.faces = o),
            t
          );
        },
        clone: function () {
          return new ze().copy(this);
        },
        copy: function (t) {
          var e, i, n, r, a, o;
          (this.vertices = []),
            (this.colors = []),
            (this.faces = []),
            (this.faceVertexUvs = [[]]),
            (this.morphTargets = []),
            (this.morphNormals = []),
            (this.skinWeights = []),
            (this.skinIndices = []),
            (this.lineDistances = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.name = t.name);
          var s = t.vertices;
          for (e = 0, i = s.length; e < i; e++)
            this.vertices.push(s[e].clone());
          var c = t.colors;
          for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
          var h = t.faces;
          for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
          for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
            var l = t.faceVertexUvs[e];
            for (
              void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []),
                n = 0,
                r = l.length;
              n < r;
              n++
            ) {
              var u = l[n],
                p = [];
              for (a = 0, o = u.length; a < o; a++) {
                var d = u[a];
                p.push(d.clone());
              }
              this.faceVertexUvs[e].push(p);
            }
          }
          var f = t.morphTargets;
          for (e = 0, i = f.length; e < i; e++) {
            var m = {};
            if (((m.name = f[e].name), void 0 !== f[e].vertices))
              for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++)
                m.vertices.push(f[e].vertices[n].clone());
            if (void 0 !== f[e].normals)
              for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++)
                m.normals.push(f[e].normals[n].clone());
            this.morphTargets.push(m);
          }
          var v = t.morphNormals;
          for (e = 0, i = v.length; e < i; e++) {
            var g = {};
            if (void 0 !== v[e].vertexNormals)
              for (
                g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length;
                n < r;
                n++
              ) {
                var y = v[e].vertexNormals[n],
                  x = {};
                (x.a = y.a.clone()),
                  (x.b = y.b.clone()),
                  (x.c = y.c.clone()),
                  g.vertexNormals.push(x);
              }
            if (void 0 !== v[e].faceNormals)
              for (
                g.faceNormals = [], n = 0, r = v[e].faceNormals.length;
                n < r;
                n++
              )
                g.faceNormals.push(v[e].faceNormals[n].clone());
            this.morphNormals.push(g);
          }
          var _ = t.skinWeights;
          for (e = 0, i = _.length; e < i; e++)
            this.skinWeights.push(_[e].clone());
          var b = t.skinIndices;
          for (e = 0, i = b.length; e < i; e++)
            this.skinIndices.push(b[e].clone());
          var w = t.lineDistances;
          for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]);
          var M = t.boundingBox;
          null !== M && (this.boundingBox = M.clone());
          var S = t.boundingSphere;
          return (
            null !== S && (this.boundingSphere = S.clone()),
            (this.elementsNeedUpdate = t.elementsNeedUpdate),
            (this.verticesNeedUpdate = t.verticesNeedUpdate),
            (this.uvsNeedUpdate = t.uvsNeedUpdate),
            (this.normalsNeedUpdate = t.normalsNeedUpdate),
            (this.colorsNeedUpdate = t.colorsNeedUpdate),
            (this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate),
            (this.groupsNeedUpdate = t.groupsNeedUpdate),
            this
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      });
      class Re extends le {
        constructor(t, e, i, n, r, a) {
          super(),
            (this.type = "BoxBufferGeometry"),
            (this.parameters = {
              width: t,
              height: e,
              depth: i,
              widthSegments: n,
              heightSegments: r,
              depthSegments: a,
            });
          var o = this;
          (t = t || 1),
            (e = e || 1),
            (i = i || 1),
            (n = Math.floor(n) || 1),
            (r = Math.floor(r) || 1),
            (a = Math.floor(a) || 1);
          var s = [],
            c = [],
            h = [],
            l = [],
            u = 0,
            d = 0;
          function f(t, e, i, n, r, a, f, m, v, g, y) {
            var x,
              _,
              b = a / v,
              w = f / g,
              M = a / 2,
              S = f / 2,
              A = m / 2,
              T = v + 1,
              L = g + 1,
              P = 0,
              C = 0,
              E = new p();
            for (_ = 0; _ < L; _++) {
              var O = _ * w - S;
              for (x = 0; x < T; x++) {
                var N = x * b - M;
                (E[t] = N * n),
                  (E[e] = O * r),
                  (E[i] = A),
                  c.push(E.x, E.y, E.z),
                  (E[t] = 0),
                  (E[e] = 0),
                  (E[i] = m > 0 ? 1 : -1),
                  h.push(E.x, E.y, E.z),
                  l.push(x / v),
                  l.push(1 - _ / g),
                  (P += 1);
              }
            }
            for (_ = 0; _ < g; _++)
              for (x = 0; x < v; x++) {
                var I = u + x + T * _,
                  D = u + x + T * (_ + 1),
                  z = u + (x + 1) + T * (_ + 1),
                  R = u + (x + 1) + T * _;
                s.push(I, D, R), s.push(D, z, R), (C += 6);
              }
            o.addGroup(d, C, y), (d += C), (u += P);
          }
          f("z", "y", "x", -1, -1, i, e, t, a, r, 0),
            f("z", "y", "x", 1, -1, i, e, -t, a, r, 1),
            f("x", "z", "y", 1, 1, t, i, e, n, a, 2),
            f("x", "z", "y", 1, -1, t, i, -e, n, a, 3),
            f("x", "y", "z", 1, -1, t, e, i, n, r, 4),
            f("x", "y", "z", -1, -1, t, e, -i, n, r, 5),
            this.setIndex(s),
            this.setAttribute("position", new $t(c, 3)),
            this.setAttribute("normal", new $t(h, 3)),
            this.setAttribute("uv", new $t(l, 2));
        }
      }
      function Fe(t) {
        var e = {};
        for (var i in t)
          for (var n in ((e[i] = {}), t[i])) {
            var r = t[i][n];
            r &&
            (r.isColor ||
              r.isMatrix3 ||
              r.isMatrix4 ||
              r.isVector2 ||
              r.isVector3 ||
              r.isVector4 ||
              r.isTexture)
              ? (e[i][n] = r.clone())
              : Array.isArray(r)
              ? (e[i][n] = r.slice())
              : (e[i][n] = r);
          }
        return e;
      }
      function Ue(t) {
        for (var e = {}, i = 0; i < t.length; i++) {
          var n = Fe(t[i]);
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      function Be(t) {
        kt.call(this),
          (this.type = "ShaderMaterial"),
          (this.defines = {}),
          (this.uniforms = {}),
          (this.vertexShader =
            "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
          (this.fragmentShader =
            "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
          (this.linewidth = 1),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.fog = !1),
          (this.lights = !1),
          (this.clipping = !1),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          (this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1,
          }),
          (this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0],
          }),
          (this.index0AttributeName = void 0),
          (this.uniformsNeedUpdate = !1),
          void 0 !== t && (t.attributes, this.setValues(t));
      }
      function Ve() {
        X.call(this),
          (this.type = "Camera"),
          (this.matrixWorldInverse = new C()),
          (this.projectionMatrix = new C()),
          (this.projectionMatrixInverse = new C());
      }
      function Ge(t, e, i, n) {
        Ve.call(this),
          (this.type = "PerspectiveCamera"),
          (this.fov = void 0 !== t ? t : 50),
          (this.zoom = 1),
          (this.near = void 0 !== i ? i : 0.1),
          (this.far = void 0 !== n ? n : 2e3),
          (this.focus = 10),
          (this.aspect = void 0 !== e ? e : 1),
          (this.view = null),
          (this.filmGauge = 35),
          (this.filmOffset = 0),
          this.updateProjectionMatrix();
      }
      (Be.prototype = Object.create(kt.prototype)),
        (Be.prototype.constructor = Be),
        (Be.prototype.isShaderMaterial = !0),
        (Be.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            (this.fragmentShader = t.fragmentShader),
            (this.vertexShader = t.vertexShader),
            (this.uniforms = Fe(t.uniforms)),
            (this.defines = Object.assign({}, t.defines)),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.lights = t.lights),
            (this.clipping = t.clipping),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            (this.extensions = t.extensions),
            this
          );
        }),
        (Be.prototype.toJSON = function (t) {
          var e = kt.prototype.toJSON.call(this, t);
          for (var i in ((e.uniforms = {}), this.uniforms)) {
            var n = this.uniforms[i].value;
            n && n.isTexture
              ? (e.uniforms[i] = { type: "t", value: n.toJSON(t).uuid })
              : n && n.isColor
              ? (e.uniforms[i] = { type: "c", value: n.getHex() })
              : n && n.isVector2
              ? (e.uniforms[i] = { type: "v2", value: n.toArray() })
              : n && n.isVector3
              ? (e.uniforms[i] = { type: "v3", value: n.toArray() })
              : n && n.isVector4
              ? (e.uniforms[i] = { type: "v4", value: n.toArray() })
              : n && n.isMatrix3
              ? (e.uniforms[i] = { type: "m3", value: n.toArray() })
              : n && n.isMatrix4
              ? (e.uniforms[i] = { type: "m4", value: n.toArray() })
              : (e.uniforms[i] = { value: n });
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines),
            (e.vertexShader = this.vertexShader),
            (e.fragmentShader = this.fragmentShader);
          var r = {};
          for (var a in this.extensions)
            !0 === this.extensions[a] && (r[a] = !0);
          return Object.keys(r).length > 0 && (e.extensions = r), e;
        }),
        (Ve.prototype = Object.assign(Object.create(X.prototype), {
          constructor: Ve,
          isCamera: !0,
          copy: function (t, e) {
            return (
              X.prototype.copy.call(this, t, e),
              this.matrixWorldInverse.copy(t.matrixWorldInverse),
              this.projectionMatrix.copy(t.projectionMatrix),
              this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
              this
            );
          },
          getWorldDirection: function (t) {
            void 0 === t && (t = new p()), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize();
          },
          updateMatrixWorld: function (t) {
            X.prototype.updateMatrixWorld.call(this, t),
              this.matrixWorldInverse.getInverse(this.matrixWorld);
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
        })),
        (Ge.prototype = Object.assign(Object.create(Ve.prototype), {
          constructor: Ge,
          isPerspectiveCamera: !0,
          copy: function (t, e) {
            return (
              Ve.prototype.copy.call(this, t, e),
              (this.fov = t.fov),
              (this.zoom = t.zoom),
              (this.near = t.near),
              (this.far = t.far),
              (this.focus = t.focus),
              (this.aspect = t.aspect),
              (this.view = null === t.view ? null : Object.assign({}, t.view)),
              (this.filmGauge = t.filmGauge),
              (this.filmOffset = t.filmOffset),
              this
            );
          },
          setFocalLength: function (t) {
            var e = (0.5 * this.getFilmHeight()) / t;
            (this.fov = 2 * s.RAD2DEG * Math.atan(e)),
              this.updateProjectionMatrix();
          },
          getFocalLength: function () {
            var t = Math.tan(0.5 * s.DEG2RAD * this.fov);
            return (0.5 * this.getFilmHeight()) / t;
          },
          getEffectiveFOV: function () {
            return (
              2 *
              s.RAD2DEG *
              Math.atan(Math.tan(0.5 * s.DEG2RAD * this.fov) / this.zoom)
            );
          },
          getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1);
          },
          getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1);
          },
          setViewOffset: function (t, e, i, n, r, a) {
            (this.aspect = t / e),
              null === this.view &&
                (this.view = {
                  enabled: !0,
                  fullWidth: 1,
                  fullHeight: 1,
                  offsetX: 0,
                  offsetY: 0,
                  width: 1,
                  height: 1,
                }),
              (this.view.enabled = !0),
              (this.view.fullWidth = t),
              (this.view.fullHeight = e),
              (this.view.offsetX = i),
              (this.view.offsetY = n),
              (this.view.width = r),
              (this.view.height = a),
              this.updateProjectionMatrix();
          },
          clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1),
              this.updateProjectionMatrix();
          },
          updateProjectionMatrix: function () {
            var t = this.near,
              e = (t * Math.tan(0.5 * s.DEG2RAD * this.fov)) / this.zoom,
              i = 2 * e,
              n = this.aspect * i,
              r = -0.5 * n,
              a = this.view;
            if (null !== this.view && this.view.enabled) {
              var o = a.fullWidth,
                c = a.fullHeight;
              (r += (a.offsetX * n) / o),
                (e -= (a.offsetY * i) / c),
                (n *= a.width / o),
                (i *= a.height / c);
            }
            var h = this.filmOffset;
            0 !== h && (r += (t * h) / this.getFilmWidth()),
              this.projectionMatrix.makePerspective(
                r,
                r + n,
                e,
                e - i,
                t,
                this.far
              ),
              this.projectionMatrixInverse.getInverse(this.projectionMatrix);
          },
          toJSON: function (t) {
            var e = X.prototype.toJSON.call(this, t);
            return (
              (e.object.fov = this.fov),
              (e.object.zoom = this.zoom),
              (e.object.near = this.near),
              (e.object.far = this.far),
              (e.object.focus = this.focus),
              (e.object.aspect = this.aspect),
              null !== this.view &&
                (e.object.view = Object.assign({}, this.view)),
              (e.object.filmGauge = this.filmGauge),
              (e.object.filmOffset = this.filmOffset),
              e
            );
          },
        }));
      function je(t, e, i, r) {
        X.call(this), (this.type = "CubeCamera");
        var a = new Ge(90, 1, t, e);
        a.up.set(0, -1, 0), a.lookAt(new p(1, 0, 0)), this.add(a);
        var o = new Ge(90, 1, t, e);
        o.up.set(0, -1, 0), o.lookAt(new p(-1, 0, 0)), this.add(o);
        var s = new Ge(90, 1, t, e);
        s.up.set(0, 0, 1), s.lookAt(new p(0, 1, 0)), this.add(s);
        var c = new Ge(90, 1, t, e);
        c.up.set(0, 0, -1), c.lookAt(new p(0, -1, 0)), this.add(c);
        var h = new Ge(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new p(0, 0, 1)), this.add(h);
        var l = new Ge(90, 1, t, e);
        l.up.set(0, -1, 0),
          l.lookAt(new p(0, 0, -1)),
          this.add(l),
          (r = r || { format: 1022, magFilter: n, minFilter: n }),
          (this.renderTarget = new ke(i, i, r)),
          (this.renderTarget.texture.name = "CubeCamera"),
          (this.update = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = t.getRenderTarget(),
              n = this.renderTarget,
              r = n.texture.generateMipmaps;
            (n.texture.generateMipmaps = !1),
              t.setRenderTarget(n, 0),
              t.render(e, a),
              t.setRenderTarget(n, 1),
              t.render(e, o),
              t.setRenderTarget(n, 2),
              t.render(e, s),
              t.setRenderTarget(n, 3),
              t.render(e, c),
              t.setRenderTarget(n, 4),
              t.render(e, h),
              (n.texture.generateMipmaps = r),
              t.setRenderTarget(n, 5),
              t.render(e, l),
              t.setRenderTarget(i);
          }),
          (this.clear = function (t, e, i, n) {
            for (
              var r = t.getRenderTarget(), a = this.renderTarget, o = 0;
              o < 6;
              o++
            )
              t.setRenderTarget(a, o), t.clear(e, i, n);
            t.setRenderTarget(r);
          });
      }
      function ke(t, e, i) {
        _.call(this, t, e, i);
      }
      function We(t, e, i, n, r, a, o, s, c, h, l, u) {
        y.call(this, null, a, o, s, c, h, n, r, l, u),
          (this.image = { data: t || null, width: e || 1, height: i || 1 }),
          (this.magFilter = void 0 !== c ? c : 1003),
          (this.minFilter = void 0 !== h ? h : 1003),
          (this.generateMipmaps = !1),
          (this.flipY = !1),
          (this.unpackAlignment = 1),
          (this.needsUpdate = !0);
      }
      (je.prototype = Object.create(X.prototype)),
        (je.prototype.constructor = je),
        (ke.prototype = Object.create(_.prototype)),
        (ke.prototype.constructor = ke),
        (ke.prototype.isWebGLRenderTargetCube = !0),
        (ke.prototype.fromEquirectangularTexture = function (t, e) {
          (this.texture.type = e.type),
            (this.texture.format = e.format),
            (this.texture.encoding = e.encoding);
          var i = new Y(),
            n = {
              uniforms: { tEquirect: { value: null } },
              vertexShader: [
                "varying vec3 vWorldDirection;",
                "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {",
                "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );",
                "}",
                "void main() {",
                "\tvWorldDirection = transformDirection( position, modelMatrix );",
                "\t#include <begin_vertex>",
                "\t#include <project_vertex>",
                "}",
              ].join("\n"),
              fragmentShader: [
                "uniform sampler2D tEquirect;",
                "varying vec3 vWorldDirection;",
                "#define RECIPROCAL_PI 0.31830988618",
                "#define RECIPROCAL_PI2 0.15915494",
                "void main() {",
                "\tvec3 direction = normalize( vWorldDirection );",
                "\tvec2 sampleUV;",
                "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;",
                "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;",
                "\tgl_FragColor = texture2D( tEquirect, sampleUV );",
                "}",
              ].join("\n"),
            },
            r = new Be({
              type: "CubemapFromEquirect",
              uniforms: Fe(n.uniforms),
              vertexShader: n.vertexShader,
              fragmentShader: n.fragmentShader,
              side: 1,
              blending: 0,
            });
          r.uniforms.tEquirect.value = e;
          var a = new Pe(new Re(5, 5, 5), r);
          i.add(a);
          var o = new je(1, 10, 1);
          return (
            (o.renderTarget = this),
            (o.renderTarget.texture.name = "CubeCameraTexture"),
            o.update(t, i),
            a.geometry.dispose(),
            a.material.dispose(),
            this
          );
        }),
        (We.prototype = Object.create(y.prototype)),
        (We.prototype.constructor = We),
        (We.prototype.isDataTexture = !0);
      var He = new lt(),
        qe = new p();
      function Xe(t, e, i, n, r, a) {
        this.planes = [
          void 0 !== t ? t : new wt(),
          void 0 !== e ? e : new wt(),
          void 0 !== i ? i : new wt(),
          void 0 !== n ? n : new wt(),
          void 0 !== r ? r : new wt(),
          void 0 !== a ? a : new wt(),
        ];
      }
      Object.assign(Xe.prototype, {
        set: function (t, e, i, n, r, a) {
          var o = this.planes;
          return (
            o[0].copy(t),
            o[1].copy(e),
            o[2].copy(i),
            o[3].copy(n),
            o[4].copy(r),
            o[5].copy(a),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
          return this;
        },
        setFromMatrix: function (t) {
          var e = this.planes,
            i = t.elements,
            n = i[0],
            r = i[1],
            a = i[2],
            o = i[3],
            s = i[4],
            c = i[5],
            h = i[6],
            l = i[7],
            u = i[8],
            p = i[9],
            d = i[10],
            f = i[11],
            m = i[12],
            v = i[13],
            g = i[14],
            y = i[15];
          return (
            e[0].setComponents(o - n, l - s, f - u, y - m).normalize(),
            e[1].setComponents(o + n, l + s, f + u, y + m).normalize(),
            e[2].setComponents(o + r, l + c, f + p, y + v).normalize(),
            e[3].setComponents(o - r, l - c, f - p, y - v).normalize(),
            e[4].setComponents(o - a, l - h, f - d, y - g).normalize(),
            e[5].setComponents(o + a, l + h, f + d, y + g).normalize(),
            this
          );
        },
        intersectsObject: function (t) {
          var e = t.geometry;
          return (
            null === e.boundingSphere && e.computeBoundingSphere(),
            He.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(He)
          );
        },
        intersectsSprite: function (t) {
          return (
            He.center.set(0, 0, 0),
            (He.radius = 0.7071067811865476),
            He.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(He)
          );
        },
        intersectsSphere: function (t) {
          for (
            var e = this.planes, i = t.center, n = -t.radius, r = 0;
            r < 6;
            r++
          ) {
            if (e[r].distanceToPoint(i) < n) return !1;
          }
          return !0;
        },
        intersectsBox: function (t) {
          for (var e = this.planes, i = 0; i < 6; i++) {
            var n = e[i];
            if (
              ((qe.x = n.normal.x > 0 ? t.max.x : t.min.x),
              (qe.y = n.normal.y > 0 ? t.max.y : t.min.y),
              (qe.z = n.normal.z > 0 ? t.max.z : t.min.z),
              n.distanceToPoint(qe) < 0)
            )
              return !1;
          }
          return !0;
        },
        containsPoint: function (t) {
          for (var e = this.planes, i = 0; i < 6; i++)
            if (e[i].distanceToPoint(t) < 0) return !1;
          return !0;
        },
      });
      var Ye = {
          alphamap_fragment:
            "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
          alphamap_pars_fragment:
            "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          alphatest_fragment:
            "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
          aomap_fragment:
            "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
          aomap_pars_fragment:
            "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
          begin_vertex: "vec3 transformed = vec3( position );",
          beginnormal_vertex:
            "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs:
            "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
          bumpmap_pars_fragment:
            "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
          clipping_planes_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
          clipping_planes_pars_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex:
            "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
          clipping_planes_vertex:
            "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
          color_fragment:
            "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment:
            "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
          color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
          color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
          common:
            "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
          cube_uv_reflection_fragment:
            "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
          defaultnormal_vertex:
            "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
          displacementmap_pars_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
          displacementmap_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
          encodings_fragment:
            "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          encodings_pars_fragment:
            "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
          envmap_fragment:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
          envmap_common_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
          envmap_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
          envmap_pars_vertex:
            "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
          envmap_physical_pars_fragment:
            "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
          envmap_vertex:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
          fog_fragment:
            "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment:
            "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
          gradientmap_pars_fragment:
            "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
          lightmap_fragment:
            "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
          lightmap_pars_fragment:
            "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
          lights_lambert_vertex:
            "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
          lights_pars_begin:
            "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
          lights_phong_fragment:
            "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment:
            "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
          lights_physical_fragment:
            "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
          lights_physical_pars_fragment:
            "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin:
            "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps:
            "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
          lights_fragment_end:
            "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
          logdepthbuf_fragment:
            "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment:
            "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
          logdepthbuf_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
          map_fragment:
            "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
          map_particle_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment:
            "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment:
            "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
          morphnormal_vertex:
            "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
          morphtarget_pars_vertex:
            "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
          morphtarget_vertex:
            "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
          normal_fragment_begin:
            "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
          normal_fragment_maps:
            "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
          normalmap_pars_fragment:
            "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
          clearcoat_normal_fragment_begin:
            "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
          clearcoat_normal_fragment_maps:
            "#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",
          clearcoat_normalmap_pars_fragment:
            "#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
          packing:
            "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
          premultiplied_alpha_fragment:
            "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex:
            "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment:
            "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment:
            "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
          roughnessmap_fragment:
            "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment:
            "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
          shadowmap_pars_vertex:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
          shadowmap_vertex:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
          shadowmask_pars_fragment:
            "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
          skinbase_vertex:
            "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex:
            "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
          skinning_vertex:
            "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex:
            "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
          specularmap_fragment:
            "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
          specularmap_pars_fragment:
            "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
          tonemapping_fragment:
            "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment:
            "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
          uv_pars_fragment:
            "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
          uv_pars_vertex:
            "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
          uv_vertex:
            "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
          uv2_pars_fragment:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
          uv2_pars_vertex:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
          uv2_vertex:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
          worldpos_vertex:
            "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
          background_frag:
            "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          background_vert:
            "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          cube_frag:
            "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          cube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          depth_frag:
            "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
          depth_vert:
            "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
          distanceRGBA_frag:
            "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
          distanceRGBA_vert:
            "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
          equirect_frag:
            "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          equirect_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
          linedashed_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          linedashed_vert:
            "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          meshbasic_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          meshbasic_vert:
            "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
          meshlambert_frag:
            "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshlambert_vert:
            "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshmatcap_frag:
            "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          meshmatcap_vert:
            "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
          meshphong_frag:
            "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphong_vert:
            "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphysical_frag:
            "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphysical_vert:
            "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          normal_frag:
            "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
          normal_vert:
            "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
          points_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          points_vert:
            "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
          shadow_frag:
            "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
          shadow_vert:
            "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          sprite_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          sprite_vert:
            "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        },
        Je = {
          common: {
            diffuse: { value: new Ft(15658734) },
            opacity: { value: 1 },
            map: { value: null },
            uvTransform: { value: new m() },
            alphaMap: { value: null },
          },
          specularmap: { specularMap: { value: null } },
          envmap: {
            envMap: { value: null },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            refractionRatio: { value: 0.98 },
            maxMipLevel: { value: 0 },
          },
          aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
          },
          emissivemap: { emissiveMap: { value: null } },
          bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
          normalmap: {
            normalMap: { value: null },
            normalScale: { value: new c(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          roughnessmap: { roughnessMap: { value: null } },
          metalnessmap: { metalnessMap: { value: null } },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new Ft(16777215) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: {
                direction: {},
                color: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotShadowMap: { value: [] },
            spotShadowMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                decay: {},
                distance: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
          },
          points: {
            diffuse: { value: new Ft(15658734) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            uvTransform: { value: new m() },
          },
          sprite: {
            diffuse: { value: new Ft(15658734) },
            opacity: { value: 1 },
            center: { value: new c(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            alphaMap: { value: null },
            uvTransform: { value: new m() },
          },
        },
        Ze = {
          basic: {
            uniforms: Ue([
              Je.common,
              Je.specularmap,
              Je.envmap,
              Je.aomap,
              Je.lightmap,
              Je.fog,
            ]),
            vertexShader: Ye.meshbasic_vert,
            fragmentShader: Ye.meshbasic_frag,
          },
          lambert: {
            uniforms: Ue([
              Je.common,
              Je.specularmap,
              Je.envmap,
              Je.aomap,
              Je.lightmap,
              Je.emissivemap,
              Je.fog,
              Je.lights,
              { emissive: { value: new Ft(0) } },
            ]),
            vertexShader: Ye.meshlambert_vert,
            fragmentShader: Ye.meshlambert_frag,
          },
          phong: {
            uniforms: Ue([
              Je.common,
              Je.specularmap,
              Je.envmap,
              Je.aomap,
              Je.lightmap,
              Je.emissivemap,
              Je.bumpmap,
              Je.normalmap,
              Je.displacementmap,
              Je.gradientmap,
              Je.fog,
              Je.lights,
              {
                emissive: { value: new Ft(0) },
                specular: { value: new Ft(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: Ye.meshphong_vert,
            fragmentShader: Ye.meshphong_frag,
          },
          standard: {
            uniforms: Ue([
              Je.common,
              Je.envmap,
              Je.aomap,
              Je.lightmap,
              Je.emissivemap,
              Je.bumpmap,
              Je.normalmap,
              Je.displacementmap,
              Je.roughnessmap,
              Je.metalnessmap,
              Je.fog,
              Je.lights,
              {
                emissive: { value: new Ft(0) },
                roughness: { value: 0.5 },
                metalness: { value: 0.5 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: Ye.meshphysical_vert,
            fragmentShader: Ye.meshphysical_frag,
          },
          matcap: {
            uniforms: Ue([
              Je.common,
              Je.bumpmap,
              Je.normalmap,
              Je.displacementmap,
              Je.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: Ye.meshmatcap_vert,
            fragmentShader: Ye.meshmatcap_frag,
          },
          points: {
            uniforms: Ue([Je.points, Je.fog]),
            vertexShader: Ye.points_vert,
            fragmentShader: Ye.points_frag,
          },
          dashed: {
            uniforms: Ue([
              Je.common,
              Je.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: Ye.linedashed_vert,
            fragmentShader: Ye.linedashed_frag,
          },
          depth: {
            uniforms: Ue([Je.common, Je.displacementmap]),
            vertexShader: Ye.depth_vert,
            fragmentShader: Ye.depth_frag,
          },
          normal: {
            uniforms: Ue([
              Je.common,
              Je.bumpmap,
              Je.normalmap,
              Je.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: Ye.normal_vert,
            fragmentShader: Ye.normal_frag,
          },
          sprite: {
            uniforms: Ue([Je.sprite, Je.fog]),
            vertexShader: Ye.sprite_vert,
            fragmentShader: Ye.sprite_frag,
          },
          background: {
            uniforms: { uvTransform: { value: new m() }, t2D: { value: null } },
            vertexShader: Ye.background_vert,
            fragmentShader: Ye.background_frag,
          },
          cube: {
            uniforms: {
              tCube: { value: null },
              tFlip: { value: -1 },
              opacity: { value: 1 },
            },
            vertexShader: Ye.cube_vert,
            fragmentShader: Ye.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: Ye.equirect_vert,
            fragmentShader: Ye.equirect_frag,
          },
          distanceRGBA: {
            uniforms: Ue([
              Je.common,
              Je.displacementmap,
              {
                referencePosition: { value: new p() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: Ye.distanceRGBA_vert,
            fragmentShader: Ye.distanceRGBA_frag,
          },
          shadow: {
            uniforms: Ue([
              Je.lights,
              Je.fog,
              { color: { value: new Ft(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: Ye.shadow_vert,
            fragmentShader: Ye.shadow_frag,
          },
        };
      function Qe() {
        var t = null,
          e = !1,
          i = null;
        function n(r, a) {
          !1 !== e && (i(r, a), t.requestAnimationFrame(n));
        }
        return {
          start: function () {
            !0 !== e && null !== i && (t.requestAnimationFrame(n), (e = !0));
          },
          stop: function () {
            e = !1;
          },
          setAnimationLoop: function (t) {
            i = t;
          },
          setContext: function (e) {
            t = e;
          },
        };
      }
      function Ke(t) {
        var e = new WeakMap();
        return {
          get: function (t) {
            return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
          },
          remove: function (i) {
            i.isInterleavedBufferAttribute && (i = i.data);
            var n = e.get(i);
            n && (t.deleteBuffer(n.buffer), e.delete(i));
          },
          update: function (i, n) {
            i.isInterleavedBufferAttribute && (i = i.data);
            var r = e.get(i);
            void 0 === r
              ? e.set(
                  i,
                  (function (e, i) {
                    var n = e.array,
                      r = e.usage,
                      a = t.createBuffer();
                    t.bindBuffer(i, a),
                      t.bufferData(i, n, r),
                      e.onUploadCallback();
                    var o = 5126;
                    return (
                      n instanceof Float32Array
                        ? (o = 5126)
                        : n instanceof Float64Array ||
                          (n instanceof Uint16Array
                            ? (o = 5123)
                            : n instanceof Int16Array
                            ? (o = 5122)
                            : n instanceof Uint32Array
                            ? (o = 5125)
                            : n instanceof Int32Array
                            ? (o = 5124)
                            : n instanceof Int8Array
                            ? (o = 5120)
                            : n instanceof Uint8Array && (o = 5121)),
                      {
                        buffer: a,
                        type: o,
                        bytesPerElement: n.BYTES_PER_ELEMENT,
                        version: e.version,
                      }
                    );
                  })(i, n)
                )
              : r.version < i.version &&
                (!(function (e, i, n) {
                  var r = i.array,
                    a = i.updateRange;
                  t.bindBuffer(n, e),
                    -1 === a.count
                      ? t.bufferSubData(n, 0, r)
                      : (t.bufferSubData(
                          n,
                          a.offset * r.BYTES_PER_ELEMENT,
                          r.subarray(a.offset, a.offset + a.count)
                        ),
                        (a.count = -1));
                })(r.buffer, i, n),
                (r.version = i.version));
          },
        };
      }
      function $e(t, e, i, n) {
        ze.call(this),
          (this.type = "PlaneGeometry"),
          (this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n,
          }),
          this.fromBufferGeometry(new ti(t, e, i, n)),
          this.mergeVertices();
      }
      function ti(t, e, i, n) {
        le.call(this),
          (this.type = "PlaneBufferGeometry"),
          (this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n,
          });
        var r,
          a,
          o = (t = t || 1) / 2,
          s = (e = e || 1) / 2,
          c = Math.floor(i) || 1,
          h = Math.floor(n) || 1,
          l = c + 1,
          u = h + 1,
          p = t / c,
          d = e / h,
          f = [],
          m = [],
          v = [],
          g = [];
        for (a = 0; a < u; a++) {
          var y = a * d - s;
          for (r = 0; r < l; r++) {
            var x = r * p - o;
            m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - a / h);
          }
        }
        for (a = 0; a < h; a++)
          for (r = 0; r < c; r++) {
            var _ = r + l * a,
              b = r + l * (a + 1),
              w = r + 1 + l * (a + 1),
              M = r + 1 + l * a;
            f.push(_, b, M), f.push(b, w, M);
          }
        this.setIndex(f),
          this.setAttribute("position", new $t(m, 3)),
          this.setAttribute("normal", new $t(v, 3)),
          this.setAttribute("uv", new $t(g, 2));
      }
      function ei(t, e, i, n) {
        var r,
          a,
          o = new Ft(0),
          s = 0,
          c = null,
          h = 0;
        function l(t, i) {
          e.buffers.color.setClear(t.r, t.g, t.b, i, n);
        }
        return {
          getClearColor: function () {
            return o;
          },
          setClearColor: function (t, e) {
            o.set(t), l(o, (s = void 0 !== e ? e : 1));
          },
          getClearAlpha: function () {
            return s;
          },
          setClearAlpha: function (t) {
            l(o, (s = t));
          },
          render: function (e, n, u, p) {
            var d = n.background,
              f = t.vr,
              m = f.getSession && f.getSession();
            if (
              (m && "additive" === m.environmentBlendMode && (d = null),
              null === d
                ? (l(o, s), (c = null), (h = 0))
                : d && d.isColor && (l(d, 1), (p = !0), (c = null), (h = 0)),
              (t.autoClear || p) &&
                t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
              d && (d.isCubeTexture || d.isWebGLRenderTargetCube))
            ) {
              void 0 === a &&
                ((a = new Pe(
                  new Re(1, 1, 1),
                  new Be({
                    type: "BackgroundCubeMaterial",
                    uniforms: Fe(Ze.cube.uniforms),
                    vertexShader: Ze.cube.vertexShader,
                    fragmentShader: Ze.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )).geometry.deleteAttribute("normal"),
                a.geometry.deleteAttribute("uv"),
                (a.onBeforeRender = function (t, e, i) {
                  this.matrixWorld.copyPosition(i.matrixWorld);
                }),
                Object.defineProperty(a.material, "map", {
                  get: function () {
                    return this.uniforms.tCube.value;
                  },
                }),
                i.update(a));
              var v = d.isWebGLRenderTargetCube ? d.texture : d;
              (a.material.uniforms.tCube.value = v),
                (a.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube
                  ? 1
                  : -1),
                (c === d && h === v.version) ||
                  ((a.material.needsUpdate = !0), (c = d), (h = v.version)),
                e.unshift(a, a.geometry, a.material, 0, 0, null);
            } else
              d &&
                d.isTexture &&
                (void 0 === r &&
                  ((r = new Pe(
                    new ti(2, 2),
                    new Be({
                      type: "BackgroundMaterial",
                      uniforms: Fe(Ze.background.uniforms),
                      vertexShader: Ze.background.vertexShader,
                      fragmentShader: Ze.background.fragmentShader,
                      side: 0,
                      depthTest: !1,
                      depthWrite: !1,
                      fog: !1,
                    })
                  )).geometry.deleteAttribute("normal"),
                  Object.defineProperty(r.material, "map", {
                    get: function () {
                      return this.uniforms.t2D.value;
                    },
                  }),
                  i.update(r)),
                (r.material.uniforms.t2D.value = d),
                !0 === d.matrixAutoUpdate && d.updateMatrix(),
                r.material.uniforms.uvTransform.value.copy(d.matrix),
                (c === d && h === d.version) ||
                  ((r.material.needsUpdate = !0), (c = d), (h = d.version)),
                e.unshift(r, r.geometry, r.material, 0, 0, null));
          },
        };
      }
      function ii(t, e, i, n) {
        var r,
          a = n.isWebGL2;
        (this.setMode = function (t) {
          r = t;
        }),
          (this.render = function (e, n) {
            t.drawArrays(r, e, n), i.update(n, r);
          }),
          (this.renderInstances = function (n, o, s, c) {
            if (0 !== c) {
              var h, l;
              if (a) (h = t), (l = "drawArraysInstanced");
              else if (
                ((l = "drawArraysInstancedANGLE"),
                null === (h = e.get("ANGLE_instanced_arrays")))
              )
                return;
              h[l](r, o, s, c), i.update(s, r, c);
            }
          });
      }
      function ni(t, e, i) {
        var n;
        function r(e) {
          if ("highp" === e) {
            if (
              t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
              t.getShaderPrecisionFormat(35632, 36338).precision > 0
            )
              return "highp";
            e = "mediump";
          }
          return "mediump" === e &&
            t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
            t.getShaderPrecisionFormat(35632, 36337).precision > 0
            ? "mediump"
            : "lowp";
        }
        var a =
            ("undefined" != typeof WebGL2RenderingContext &&
              t instanceof WebGL2RenderingContext) ||
            ("undefined" != typeof WebGL2ComputeRenderingContext &&
              t instanceof WebGL2ComputeRenderingContext),
          o = void 0 !== i.precision ? i.precision : "highp",
          s = r(o);
        s !== o && (o = s);
        var c = !0 === i.logarithmicDepthBuffer,
          h = t.getParameter(34930),
          l = t.getParameter(35660),
          u = t.getParameter(3379),
          p = t.getParameter(34076),
          d = t.getParameter(34921),
          f = t.getParameter(36347),
          m = t.getParameter(36348),
          v = t.getParameter(36349),
          g = l > 0,
          y = a || !!e.get("OES_texture_float");
        return {
          isWebGL2: a,
          getMaxAnisotropy: function () {
            if (void 0 !== n) return n;
            var i = e.get("EXT_texture_filter_anisotropic");
            return (n =
              null !== i
                ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                : 0);
          },
          getMaxPrecision: r,
          precision: o,
          logarithmicDepthBuffer: c,
          maxTextures: h,
          maxVertexTextures: l,
          maxTextureSize: u,
          maxCubemapSize: p,
          maxAttributes: d,
          maxVertexUniforms: f,
          maxVaryings: m,
          maxFragmentUniforms: v,
          vertexTextures: g,
          floatFragmentTextures: y,
          floatVertexTextures: g && y,
          maxSamples: a ? t.getParameter(36183) : 0,
        };
      }
      function ri() {
        var t = this,
          e = null,
          i = 0,
          n = !1,
          r = !1,
          a = new wt(),
          o = new m(),
          s = { value: null, needsUpdate: !1 };
        function c() {
          s.value !== e && ((s.value = e), (s.needsUpdate = i > 0)),
            (t.numPlanes = i),
            (t.numIntersection = 0);
        }
        function h(e, i, n, r) {
          var c = null !== e ? e.length : 0,
            h = null;
          if (0 !== c) {
            if (((h = s.value), !0 !== r || null === h)) {
              var l = n + 4 * c,
                u = i.matrixWorldInverse;
              o.getNormalMatrix(u),
                (null === h || h.length < l) && (h = new Float32Array(l));
              for (var p = 0, d = n; p !== c; ++p, d += 4)
                a.copy(e[p]).applyMatrix4(u, o),
                  a.normal.toArray(h, d),
                  (h[d + 3] = a.constant);
            }
            (s.value = h), (s.needsUpdate = !0);
          }
          return (t.numPlanes = c), h;
        }
        (this.uniform = s),
          (this.numPlanes = 0),
          (this.numIntersection = 0),
          (this.init = function (t, r, a) {
            var o = 0 !== t.length || r || 0 !== i || n;
            return (n = r), (e = h(t, a, 0)), (i = t.length), o;
          }),
          (this.beginShadows = function () {
            (r = !0), h(null);
          }),
          (this.endShadows = function () {
            (r = !1), c();
          }),
          (this.setState = function (t, a, o, l, u, p) {
            if (!n || null === t || 0 === t.length || (r && !o))
              r ? h(null) : c();
            else {
              var d = r ? 0 : i,
                f = 4 * d,
                m = u.clippingState || null;
              (s.value = m), (m = h(t, l, f, p));
              for (var v = 0; v !== f; ++v) m[v] = e[v];
              (u.clippingState = m),
                (this.numIntersection = a ? this.numPlanes : 0),
                (this.numPlanes += d);
            }
          });
      }
      function ai(t) {
        var e = {};
        return {
          get: function (i) {
            if (void 0 !== e[i]) return e[i];
            var n;
            switch (i) {
              case "WEBGL_depth_texture":
                n =
                  t.getExtension("WEBGL_depth_texture") ||
                  t.getExtension("MOZ_WEBGL_depth_texture") ||
                  t.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
              case "EXT_texture_filter_anisotropic":
                n =
                  t.getExtension("EXT_texture_filter_anisotropic") ||
                  t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                  t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
              case "WEBGL_compressed_texture_s3tc":
                n =
                  t.getExtension("WEBGL_compressed_texture_s3tc") ||
                  t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                  t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
              case "WEBGL_compressed_texture_pvrtc":
                n =
                  t.getExtension("WEBGL_compressed_texture_pvrtc") ||
                  t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
              default:
                n = t.getExtension(i);
            }
            return (e[i] = n), n;
          },
        };
      }
      function oi(t, e, i) {
        var n = new WeakMap(),
          r = new WeakMap();
        function a(t) {
          var o = t.target,
            s = n.get(o);
          for (var c in (null !== s.index && e.remove(s.index), s.attributes))
            e.remove(s.attributes[c]);
          o.removeEventListener("dispose", a), n.delete(o);
          var h = r.get(s);
          h && (e.remove(h), r.delete(s)), i.memory.geometries--;
        }
        function o(t) {
          var i = [],
            n = t.index,
            a = t.attributes.position,
            o = 0;
          if (null !== n) {
            var s = n.array;
            o = n.version;
            for (var c = 0, h = s.length; c < h; c += 3) {
              var l = s[c + 0],
                u = s[c + 1],
                p = s[c + 2];
              i.push(l, u, u, p, p, l);
            }
          } else {
            s = a.array;
            o = a.version;
            for (c = 0, h = s.length / 3 - 1; c < h; c += 3) {
              (l = c + 0), (u = c + 1), (p = c + 2);
              i.push(l, u, u, p, p, l);
            }
          }
          var d = new (ie(i) > 65535 ? Kt : Zt)(i, 1);
          (d.version = o), e.update(d, 34963);
          var f = r.get(t);
          f && e.remove(f), r.set(t, d);
        }
        return {
          get: function (t, e) {
            var r = n.get(e);
            return (
              r ||
              (e.addEventListener("dispose", a),
              e.isBufferGeometry
                ? (r = e)
                : e.isGeometry &&
                  (void 0 === e._bufferGeometry &&
                    (e._bufferGeometry = new le().setFromObject(t)),
                  (r = e._bufferGeometry)),
              n.set(e, r),
              i.memory.geometries++,
              r)
            );
          },
          update: function (t) {
            var i = t.index,
              n = t.attributes;
            for (var r in (null !== i && e.update(i, 34963), n))
              e.update(n[r], 34962);
            var a = t.morphAttributes;
            for (var r in a)
              for (var o = a[r], s = 0, c = o.length; s < c; s++)
                e.update(o[s], 34962);
          },
          getWireframeAttribute: function (t) {
            var e = r.get(t);
            if (e) {
              var i = t.index;
              null !== i && e.version < i.version && o(t);
            } else o(t);
            return r.get(t);
          },
        };
      }
      function si(t, e, i, n) {
        var r,
          a,
          o,
          s = n.isWebGL2;
        (this.setMode = function (t) {
          r = t;
        }),
          (this.setIndex = function (t) {
            (a = t.type), (o = t.bytesPerElement);
          }),
          (this.render = function (e, n) {
            t.drawElements(r, n, a, e * o), i.update(n, r);
          }),
          (this.renderInstances = function (n, c, h, l) {
            if (0 !== l) {
              var u, p;
              if (s) (u = t), (p = "drawElementsInstanced");
              else if (
                ((p = "drawElementsInstancedANGLE"),
                null === (u = e.get("ANGLE_instanced_arrays")))
              )
                return;
              u[p](r, h, a, c * o, l), i.update(h, r, l);
            }
          });
      }
      function ci(t) {
        var e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
          memory: { geometries: 0, textures: 0 },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function () {
            e.frame++,
              (e.calls = 0),
              (e.triangles = 0),
              (e.points = 0),
              (e.lines = 0);
          },
          update: function (t, i, n) {
            switch (((n = n || 1), e.calls++, i)) {
              case 4:
                e.triangles += n * (t / 3);
                break;
              case 5:
              case 6:
                e.triangles += n * (t - 2);
                break;
              case 1:
                e.lines += n * (t / 2);
                break;
              case 3:
                e.lines += n * (t - 1);
                break;
              case 2:
                e.lines += n * t;
                break;
              case 0:
                e.points += n * t;
            }
          },
        };
      }
      function hi(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
      }
      function li(t) {
        var e = {},
          i = new Float32Array(8);
        return {
          update: function (n, r, a, o) {
            var s = n.morphTargetInfluences,
              c = s.length,
              h = e[r.id];
            if (void 0 === h) {
              h = [];
              for (var l = 0; l < c; l++) h[l] = [l, 0];
              e[r.id] = h;
            }
            var u = a.morphTargets && r.morphAttributes.position,
              p = a.morphNormals && r.morphAttributes.normal;
            for (l = 0; l < c; l++) {
              0 !== (d = h[l])[1] &&
                (u && r.deleteAttribute("morphTarget" + l),
                p && r.deleteAttribute("morphNormal" + l));
            }
            for (l = 0; l < c; l++) {
              ((d = h[l])[0] = l), (d[1] = s[l]);
            }
            for (h.sort(hi), l = 0; l < 8; l++) {
              var d;
              if ((d = h[l])) {
                var f = d[0],
                  m = d[1];
                if (m) {
                  u && r.setAttribute("morphTarget" + l, u[f]),
                    p && r.setAttribute("morphNormal" + l, p[f]),
                    (i[l] = m);
                  continue;
                }
              }
              i[l] = 0;
            }
            o.getUniforms().setValue(t, "morphTargetInfluences", i);
          },
        };
      }
      function ui(t, e, i, n) {
        var r = {};
        return {
          update: function (t) {
            var a = n.render.frame,
              o = t.geometry,
              s = e.get(t, o);
            return (
              r[s.id] !== a &&
                (o.isGeometry && s.updateFromObject(t),
                e.update(s),
                (r[s.id] = a)),
              t.isInstancedMesh && i.update(t.instanceMatrix, 34962),
              s
            );
          },
          dispose: function () {
            r = {};
          },
        };
      }
      function pi(t, e, i, n, r, a, o, s, c, h) {
        (t = void 0 !== t ? t : []),
          (e = void 0 !== e ? e : 301),
          (o = void 0 !== o ? o : 1022),
          y.call(this, t, e, i, n, r, a, o, s, c, h),
          (this.flipY = !1);
      }
      function di(t, e, i, n) {
        y.call(this, null),
          (this.image = {
            data: t || null,
            width: e || 1,
            height: i || 1,
            depth: n || 1,
          }),
          (this.magFilter = 1003),
          (this.minFilter = 1003),
          (this.wrapR = 1001),
          (this.generateMipmaps = !1),
          (this.flipY = !1),
          (this.needsUpdate = !0);
      }
      function fi(t, e, i, n) {
        y.call(this, null),
          (this.image = {
            data: t || null,
            width: e || 1,
            height: i || 1,
            depth: n || 1,
          }),
          (this.magFilter = 1003),
          (this.minFilter = 1003),
          (this.wrapR = 1001),
          (this.generateMipmaps = !1),
          (this.flipY = !1),
          (this.needsUpdate = !0);
      }
      (Ze.physical = {
        uniforms: Ue([
          Ze.standard.uniforms,
          {
            transparency: { value: 0 },
            clearcoat: { value: 0 },
            clearcoatRoughness: { value: 0 },
            sheen: { value: new Ft(0) },
            clearcoatNormalScale: { value: new c(1, 1) },
            clearcoatNormalMap: { value: null },
          },
        ]),
        vertexShader: Ye.meshphysical_vert,
        fragmentShader: Ye.meshphysical_frag,
      }),
        ($e.prototype = Object.create(ze.prototype)),
        ($e.prototype.constructor = $e),
        (ti.prototype = Object.create(le.prototype)),
        (ti.prototype.constructor = ti),
        (pi.prototype = Object.create(y.prototype)),
        (pi.prototype.constructor = pi),
        (pi.prototype.isCubeTexture = !0),
        Object.defineProperty(pi.prototype, "images", {
          get: function () {
            return this.image;
          },
          set: function (t) {
            this.image = t;
          },
        }),
        (di.prototype = Object.create(y.prototype)),
        (di.prototype.constructor = di),
        (di.prototype.isDataTexture2DArray = !0),
        (fi.prototype = Object.create(y.prototype)),
        (fi.prototype.constructor = fi),
        (fi.prototype.isDataTexture3D = !0);
      var mi = new y(),
        vi = new di(),
        gi = new fi(),
        yi = new pi(),
        xi = [],
        _i = [],
        bi = new Float32Array(16),
        wi = new Float32Array(9),
        Mi = new Float32Array(4);
      function Si(t, e, i) {
        var n = t[0];
        if (n <= 0 || n > 0) return t;
        var r = e * i,
          a = xi[r];
        if (
          (void 0 === a && ((a = new Float32Array(r)), (xi[r] = a)), 0 !== e)
        ) {
          n.toArray(a, 0);
          for (var o = 1, s = 0; o !== e; ++o) (s += i), t[o].toArray(a, s);
        }
        return a;
      }
      function Ai(t, e) {
        if (t.length !== e.length) return !1;
        for (var i = 0, n = t.length; i < n; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function Ti(t, e) {
        for (var i = 0, n = e.length; i < n; i++) t[i] = e[i];
      }
      function Li(t, e) {
        var i = _i[e];
        void 0 === i && ((i = new Int32Array(e)), (_i[e] = i));
        for (var n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
        return i;
      }
      function Pi(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e), (i[0] = e));
      }
      function Ci(t, e) {
        var i = this.cache;
        if (void 0 !== e.x)
          (i[0] === e.x && i[1] === e.y) ||
            (t.uniform2f(this.addr, e.x, e.y), (i[0] = e.x), (i[1] = e.y));
        else {
          if (Ai(i, e)) return;
          t.uniform2fv(this.addr, e), Ti(i, e);
        }
      }
      function Ei(t, e) {
        var i = this.cache;
        if (void 0 !== e.x)
          (i[0] === e.x && i[1] === e.y && i[2] === e.z) ||
            (t.uniform3f(this.addr, e.x, e.y, e.z),
            (i[0] = e.x),
            (i[1] = e.y),
            (i[2] = e.z));
        else if (void 0 !== e.r)
          (i[0] === e.r && i[1] === e.g && i[2] === e.b) ||
            (t.uniform3f(this.addr, e.r, e.g, e.b),
            (i[0] = e.r),
            (i[1] = e.g),
            (i[2] = e.b));
        else {
          if (Ai(i, e)) return;
          t.uniform3fv(this.addr, e), Ti(i, e);
        }
      }
      function Oi(t, e) {
        var i = this.cache;
        if (void 0 !== e.x)
          (i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w) ||
            (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            (i[0] = e.x),
            (i[1] = e.y),
            (i[2] = e.z),
            (i[3] = e.w));
        else {
          if (Ai(i, e)) return;
          t.uniform4fv(this.addr, e), Ti(i, e);
        }
      }
      function Ni(t, e) {
        var i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (Ai(i, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), Ti(i, e);
        } else {
          if (Ai(i, n)) return;
          Mi.set(n), t.uniformMatrix2fv(this.addr, !1, Mi), Ti(i, n);
        }
      }
      function Ii(t, e) {
        var i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (Ai(i, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), Ti(i, e);
        } else {
          if (Ai(i, n)) return;
          wi.set(n), t.uniformMatrix3fv(this.addr, !1, wi), Ti(i, n);
        }
      }
      function Di(t, e) {
        var i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (Ai(i, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), Ti(i, e);
        } else {
          if (Ai(i, n)) return;
          bi.set(n), t.uniformMatrix4fv(this.addr, !1, bi), Ti(i, n);
        }
      }
      function zi(t, e, i) {
        var n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), (n[0] = r)),
          i.safeSetTexture2D(e || mi, r);
      }
      function Ri(t, e, i) {
        var n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), (n[0] = r)),
          i.setTexture2DArray(e || vi, r);
      }
      function Fi(t, e, i) {
        var n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), (n[0] = r)),
          i.setTexture3D(e || gi, r);
      }
      function Ui(t, e, i) {
        var n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), (n[0] = r)),
          i.safeSetTextureCube(e || yi, r);
      }
      function Bi(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e), (i[0] = e));
      }
      function Vi(t, e) {
        var i = this.cache;
        Ai(i, e) || (t.uniform2iv(this.addr, e), Ti(i, e));
      }
      function Gi(t, e) {
        var i = this.cache;
        Ai(i, e) || (t.uniform3iv(this.addr, e), Ti(i, e));
      }
      function ji(t, e) {
        var i = this.cache;
        Ai(i, e) || (t.uniform4iv(this.addr, e), Ti(i, e));
      }
      function ki(t, e) {
        t.uniform1fv(this.addr, e);
      }
      function Wi(t, e) {
        t.uniform1iv(this.addr, e);
      }
      function Hi(t, e) {
        t.uniform2iv(this.addr, e);
      }
      function qi(t, e) {
        t.uniform3iv(this.addr, e);
      }
      function Xi(t, e) {
        t.uniform4iv(this.addr, e);
      }
      function Yi(t, e) {
        var i = Si(e, this.size, 2);
        t.uniform2fv(this.addr, i);
      }
      function Ji(t, e) {
        var i = Si(e, this.size, 3);
        t.uniform3fv(this.addr, i);
      }
      function Zi(t, e) {
        var i = Si(e, this.size, 4);
        t.uniform4fv(this.addr, i);
      }
      function Qi(t, e) {
        var i = Si(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, i);
      }
      function Ki(t, e) {
        var i = Si(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, i);
      }
      function $i(t, e) {
        var i = Si(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, i);
      }
      function tn(t, e, i) {
        var n = e.length,
          r = Li(i, n);
        t.uniform1iv(this.addr, r);
        for (var a = 0; a !== n; ++a) i.safeSetTexture2D(e[a] || mi, r[a]);
      }
      function en(t, e, i) {
        var n = e.length,
          r = Li(i, n);
        t.uniform1iv(this.addr, r);
        for (var a = 0; a !== n; ++a) i.safeSetTextureCube(e[a] || yi, r[a]);
      }
      function nn(t, e, i) {
        (this.id = t),
          (this.addr = i),
          (this.cache = []),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return Pi;
              case 35664:
                return Ci;
              case 35665:
                return Ei;
              case 35666:
                return Oi;
              case 35674:
                return Ni;
              case 35675:
                return Ii;
              case 35676:
                return Di;
              case 35678:
              case 36198:
                return zi;
              case 35679:
                return Fi;
              case 35680:
                return Ui;
              case 36289:
                return Ri;
              case 5124:
              case 35670:
                return Bi;
              case 35667:
              case 35671:
                return Vi;
              case 35668:
              case 35672:
                return Gi;
              case 35669:
              case 35673:
                return ji;
            }
          })(e.type));
      }
      function rn(t, e, i) {
        (this.id = t),
          (this.addr = i),
          (this.cache = []),
          (this.size = e.size),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return ki;
              case 35664:
                return Yi;
              case 35665:
                return Ji;
              case 35666:
                return Zi;
              case 35674:
                return Qi;
              case 35675:
                return Ki;
              case 35676:
                return $i;
              case 35678:
                return tn;
              case 35680:
                return en;
              case 5124:
              case 35670:
                return Wi;
              case 35667:
              case 35671:
                return Hi;
              case 35668:
              case 35672:
                return qi;
              case 35669:
              case 35673:
                return Xi;
            }
          })(e.type));
      }
      function an(t) {
        (this.id = t), (this.seq = []), (this.map = {});
      }
      (rn.prototype.updateCache = function (t) {
        var e = this.cache;
        t instanceof Float32Array &&
          e.length !== t.length &&
          (this.cache = new Float32Array(t.length)),
          Ti(e, t);
      }),
        (an.prototype.setValue = function (t, e, i) {
          for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
            var o = n[r];
            o.setValue(t, e[o.id], i);
          }
        });
      var on = /([\w\d_]+)(\])?(\[|\.)?/g;
      function sn(t, e) {
        t.seq.push(e), (t.map[e.id] = e);
      }
      function cn(t, e, i) {
        var n = t.name,
          r = n.length;
        for (on.lastIndex = 0; ; ) {
          var a = on.exec(n),
            o = on.lastIndex,
            s = a[1],
            c = "]" === a[2],
            h = a[3];
          if ((c && (s |= 0), void 0 === h || ("[" === h && o + 2 === r))) {
            sn(i, void 0 === h ? new nn(s, t, e) : new rn(s, t, e));
            break;
          }
          var l = i.map[s];
          void 0 === l && sn(i, (l = new an(s))), (i = l);
        }
      }
      function hn(t, e) {
        (this.seq = []), (this.map = {});
        for (var i = t.getProgramParameter(e, 35718), n = 0; n < i; ++n) {
          var r = t.getActiveUniform(e, n);
          cn(r, t.getUniformLocation(e, r.name), this);
        }
      }
      function ln(t, e, i) {
        var n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), n;
      }
      (hn.prototype.setValue = function (t, e, i, n) {
        var r = this.map[e];
        void 0 !== r && r.setValue(t, i, n);
      }),
        (hn.prototype.setOptional = function (t, e, i) {
          var n = e[i];
          void 0 !== n && this.setValue(t, i, n);
        }),
        (hn.upload = function (t, e, i, n) {
          for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r],
              s = i[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, n);
          }
        }),
        (hn.seqWithValue = function (t, e) {
          for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var a = t[n];
            a.id in e && i.push(a);
          }
          return i;
        });
      var un = 0;
      function pn(t) {
        switch (t) {
          case 3e3:
            return ["Linear", "( value )"];
          case 3001:
            return ["sRGB", "( value )"];
          case 3002:
            return ["RGBE", "( value )"];
          case 3004:
            return ["RGBM", "( value, 7.0 )"];
          case 3005:
            return ["RGBM", "( value, 16.0 )"];
          case 3006:
            return ["RGBD", "( value, 256.0 )"];
          case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
          case 3003:
            return ["LogLuv", "( value )"];
          default:
            throw new Error("unsupported encoding: " + t);
        }
      }
      function dn(t, e, i) {
        var n = t.getShaderParameter(e, 35713),
          r = t.getShaderInfoLog(e).trim();
        return n && "" === r
          ? ""
          : "THREE.WebGLShader: gl.getShaderInfoLog() " +
              i +
              "\n" +
              r +
              (function (t) {
                for (var e = t.split("\n"), i = 0; i < e.length; i++)
                  e[i] = i + 1 + ": " + e[i];
                return e.join("\n");
              })(t.getShaderSource(e));
      }
      function fn(t, e) {
        var i = pn(e);
        return (
          "vec4 " +
          t +
          "( vec4 value ) { return " +
          i[0] +
          "ToLinear" +
          i[1] +
          "; }"
        );
      }
      function mn(t, e) {
        var i;
        switch (e) {
          case 1:
            i = "Linear";
            break;
          case 2:
            i = "Reinhard";
            break;
          case 3:
            i = "Uncharted2";
            break;
          case 4:
            i = "OptimizedCineon";
            break;
          case 5:
            i = "ACESFilmic";
            break;
          default:
            throw new Error("unsupported toneMapping: " + e);
        }
        return (
          "vec3 " +
          t +
          "( vec3 color ) { return " +
          i +
          "ToneMapping( color ); }"
        );
      }
      function vn(t) {
        return "" !== t;
      }
      function gn(t, e) {
        return t
          .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
          .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
          .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
          .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
          .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
          .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
          .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
          .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
      }
      function yn(t, e) {
        return t
          .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
          .replace(
            /UNION_CLIPPING_PLANES/g,
            e.numClippingPlanes - e.numClipIntersection
          );
      }
      var xn = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function _n(t) {
        return t.replace(xn, bn);
      }
      function bn(t, e) {
        var i = Ye[e];
        if (void 0 === i)
          throw new Error("Can not resolve #include <" + e + ">");
        return _n(i);
      }
      var wn =
        /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
      function Mn(t) {
        return t.replace(wn, Sn);
      }
      function Sn(t, e, i, n) {
        for (var r = "", a = parseInt(e); a < parseInt(i); a++)
          r += n
            .replace(/\[ i \]/g, "[ " + a + " ]")
            .replace(/UNROLLED_LOOP_INDEX/g, a);
        return r;
      }
      function An(t) {
        var e =
          "precision " +
          t.precision +
          " float;\nprecision " +
          t.precision +
          " int;";
        return (
          "highp" === t.precision
            ? (e += "\n#define HIGH_PRECISION")
            : "mediump" === t.precision
            ? (e += "\n#define MEDIUM_PRECISION")
            : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
          e
        );
      }
      function Tn(t, e, i, n, r, a) {
        var o,
          s,
          c,
          h,
          l,
          u = t.getContext(),
          p = n.defines,
          d = r.vertexShader,
          f = r.fragmentShader,
          m = (function (t) {
            var e = "SHADOWMAP_TYPE_BASIC";
            return (
              1 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF")
                : 2 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
                : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
              e
            );
          })(a),
          v = (function (t) {
            var e = "ENVMAP_TYPE_CUBE";
            if (t.envMap)
              switch (t.envMapMode) {
                case 301:
                case 302:
                  e = "ENVMAP_TYPE_CUBE";
                  break;
                case 306:
                case 307:
                  e = "ENVMAP_TYPE_CUBE_UV";
                  break;
                case 303:
                case 304:
                  e = "ENVMAP_TYPE_EQUIREC";
                  break;
                case 305:
                  e = "ENVMAP_TYPE_SPHERE";
              }
            return e;
          })(a),
          g = (function (t) {
            var e = "ENVMAP_MODE_REFLECTION";
            if (t.envMap)
              switch (t.envMapMode) {
                case 302:
                case 304:
                  e = "ENVMAP_MODE_REFRACTION";
              }
            return e;
          })(a),
          y = (function (t) {
            var e = "ENVMAP_BLENDING_MULTIPLY";
            if (t.envMap)
              switch (t.combine) {
                case 0:
                  e = "ENVMAP_BLENDING_MULTIPLY";
                  break;
                case 1:
                  e = "ENVMAP_BLENDING_MIX";
                  break;
                case 2:
                  e = "ENVMAP_BLENDING_ADD";
              }
            return e;
          })(a),
          x = t.gammaFactor > 0 ? t.gammaFactor : 1,
          _ = a.isWebGL2
            ? ""
            : (function (t, e, i) {
                return [
                  (t = t || {}).derivatives ||
                  e.envMapCubeUV ||
                  e.bumpMap ||
                  e.tangentSpaceNormalMap ||
                  e.clearcoatNormalMap ||
                  e.flatShading
                    ? "#extension GL_OES_standard_derivatives : enable"
                    : "",
                  (t.fragDepth || e.logarithmicDepthBuffer) &&
                  i.get("EXT_frag_depth")
                    ? "#extension GL_EXT_frag_depth : enable"
                    : "",
                  t.drawBuffers && i.get("WEBGL_draw_buffers")
                    ? "#extension GL_EXT_draw_buffers : require"
                    : "",
                  (t.shaderTextureLOD || e.envMap) &&
                  i.get("EXT_shader_texture_lod")
                    ? "#extension GL_EXT_shader_texture_lod : enable"
                    : "",
                ]
                  .filter(vn)
                  .join("\n");
              })(n.extensions, a, e),
          b = (function (t) {
            var e = [];
            for (var i in t) {
              var n = t[i];
              !1 !== n && e.push("#define " + i + " " + n);
            }
            return e.join("\n");
          })(p),
          w = u.createProgram(),
          M = a.numMultiviewViews;
        if (
          (n.isRawShaderMaterial
            ? ((o = [b].filter(vn).join("\n")).length > 0 && (o += "\n"),
              (s = [_, b].filter(vn).join("\n")).length > 0 && (s += "\n"))
            : ((o = [
                An(a),
                "#define SHADER_NAME " + r.name,
                b,
                a.instancing ? "#define USE_INSTANCING" : "",
                a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
                "#define GAMMA_FACTOR " + x,
                "#define MAX_BONES " + a.maxBones,
                a.useFog && a.fog ? "#define USE_FOG" : "",
                a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
                a.map ? "#define USE_MAP" : "",
                a.envMap ? "#define USE_ENVMAP" : "",
                a.envMap ? "#define " + g : "",
                a.lightMap ? "#define USE_LIGHTMAP" : "",
                a.aoMap ? "#define USE_AOMAP" : "",
                a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                a.bumpMap ? "#define USE_BUMPMAP" : "",
                a.normalMap ? "#define USE_NORMALMAP" : "",
                a.normalMap && a.objectSpaceNormalMap
                  ? "#define OBJECTSPACE_NORMALMAP"
                  : "",
                a.normalMap && a.tangentSpaceNormalMap
                  ? "#define TANGENTSPACE_NORMALMAP"
                  : "",
                a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
                a.displacementMap && a.supportsVertexTextures
                  ? "#define USE_DISPLACEMENTMAP"
                  : "",
                a.specularMap ? "#define USE_SPECULARMAP" : "",
                a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                a.metalnessMap ? "#define USE_METALNESSMAP" : "",
                a.alphaMap ? "#define USE_ALPHAMAP" : "",
                a.vertexTangents ? "#define USE_TANGENT" : "",
                a.vertexColors ? "#define USE_COLOR" : "",
                a.vertexUvs ? "#define USE_UV" : "",
                a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
                a.flatShading ? "#define FLAT_SHADED" : "",
                a.skinning ? "#define USE_SKINNING" : "",
                a.useVertexTexture ? "#define BONE_TEXTURE" : "",
                a.morphTargets ? "#define USE_MORPHTARGETS" : "",
                a.morphNormals && !1 === a.flatShading
                  ? "#define USE_MORPHNORMALS"
                  : "",
                a.doubleSided ? "#define DOUBLE_SIDED" : "",
                a.flipSided ? "#define FLIP_SIDED" : "",
                a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                a.shadowMapEnabled ? "#define " + m : "",
                a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
                a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                a.logarithmicDepthBuffer &&
                (a.isWebGL2 || e.get("EXT_frag_depth"))
                  ? "#define USE_LOGDEPTHBUF_EXT"
                  : "",
                "uniform mat4 modelMatrix;",
                "uniform mat4 modelViewMatrix;",
                "uniform mat4 projectionMatrix;",
                "uniform mat4 viewMatrix;",
                "uniform mat3 normalMatrix;",
                "uniform vec3 cameraPosition;",
                "uniform bool isOrthographic;",
                "#ifdef USE_INSTANCING",
                " attribute mat4 instanceMatrix;",
                "#endif",
                "attribute vec3 position;",
                "attribute vec3 normal;",
                "attribute vec2 uv;",
                "#ifdef USE_TANGENT",
                "\tattribute vec4 tangent;",
                "#endif",
                "#ifdef USE_COLOR",
                "\tattribute vec3 color;",
                "#endif",
                "#ifdef USE_MORPHTARGETS",
                "\tattribute vec3 morphTarget0;",
                "\tattribute vec3 morphTarget1;",
                "\tattribute vec3 morphTarget2;",
                "\tattribute vec3 morphTarget3;",
                "\t#ifdef USE_MORPHNORMALS",
                "\t\tattribute vec3 morphNormal0;",
                "\t\tattribute vec3 morphNormal1;",
                "\t\tattribute vec3 morphNormal2;",
                "\t\tattribute vec3 morphNormal3;",
                "\t#else",
                "\t\tattribute vec3 morphTarget4;",
                "\t\tattribute vec3 morphTarget5;",
                "\t\tattribute vec3 morphTarget6;",
                "\t\tattribute vec3 morphTarget7;",
                "\t#endif",
                "#endif",
                "#ifdef USE_SKINNING",
                "\tattribute vec4 skinIndex;",
                "\tattribute vec4 skinWeight;",
                "#endif",
                "\n",
              ]
                .filter(vn)
                .join("\n")),
              (s = [
                _,
                An(a),
                "#define SHADER_NAME " + r.name,
                b,
                a.alphaTest
                  ? "#define ALPHATEST " +
                    a.alphaTest +
                    (a.alphaTest % 1 ? "" : ".0")
                  : "",
                "#define GAMMA_FACTOR " + x,
                a.useFog && a.fog ? "#define USE_FOG" : "",
                a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
                a.map ? "#define USE_MAP" : "",
                a.matcap ? "#define USE_MATCAP" : "",
                a.envMap ? "#define USE_ENVMAP" : "",
                a.envMap ? "#define " + v : "",
                a.envMap ? "#define " + g : "",
                a.envMap ? "#define " + y : "",
                a.lightMap ? "#define USE_LIGHTMAP" : "",
                a.aoMap ? "#define USE_AOMAP" : "",
                a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                a.bumpMap ? "#define USE_BUMPMAP" : "",
                a.normalMap ? "#define USE_NORMALMAP" : "",
                a.normalMap && a.objectSpaceNormalMap
                  ? "#define OBJECTSPACE_NORMALMAP"
                  : "",
                a.normalMap && a.tangentSpaceNormalMap
                  ? "#define TANGENTSPACE_NORMALMAP"
                  : "",
                a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
                a.specularMap ? "#define USE_SPECULARMAP" : "",
                a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                a.metalnessMap ? "#define USE_METALNESSMAP" : "",
                a.alphaMap ? "#define USE_ALPHAMAP" : "",
                a.sheen ? "#define USE_SHEEN" : "",
                a.vertexTangents ? "#define USE_TANGENT" : "",
                a.vertexColors ? "#define USE_COLOR" : "",
                a.vertexUvs ? "#define USE_UV" : "",
                a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
                a.gradientMap ? "#define USE_GRADIENTMAP" : "",
                a.flatShading ? "#define FLAT_SHADED" : "",
                a.doubleSided ? "#define DOUBLE_SIDED" : "",
                a.flipSided ? "#define FLIP_SIDED" : "",
                a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                a.shadowMapEnabled ? "#define " + m : "",
                a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
                a.physicallyCorrectLights
                  ? "#define PHYSICALLY_CORRECT_LIGHTS"
                  : "",
                a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                a.logarithmicDepthBuffer &&
                (a.isWebGL2 || e.get("EXT_frag_depth"))
                  ? "#define USE_LOGDEPTHBUF_EXT"
                  : "",
                ((n.extensions && n.extensions.shaderTextureLOD) || a.envMap) &&
                (a.isWebGL2 || e.get("EXT_shader_texture_lod"))
                  ? "#define TEXTURE_LOD_EXT"
                  : "",
                "uniform mat4 viewMatrix;",
                "uniform vec3 cameraPosition;",
                "uniform bool isOrthographic;",
                0 !== a.toneMapping ? "#define TONE_MAPPING" : "",
                0 !== a.toneMapping ? Ye.tonemapping_pars_fragment : "",
                0 !== a.toneMapping ? mn("toneMapping", a.toneMapping) : "",
                a.dithering ? "#define DITHERING" : "",
                a.outputEncoding ||
                a.mapEncoding ||
                a.matcapEncoding ||
                a.envMapEncoding ||
                a.emissiveMapEncoding
                  ? Ye.encodings_pars_fragment
                  : "",
                a.mapEncoding ? fn("mapTexelToLinear", a.mapEncoding) : "",
                a.matcapEncoding
                  ? fn("matcapTexelToLinear", a.matcapEncoding)
                  : "",
                a.envMapEncoding
                  ? fn("envMapTexelToLinear", a.envMapEncoding)
                  : "",
                a.emissiveMapEncoding
                  ? fn("emissiveMapTexelToLinear", a.emissiveMapEncoding)
                  : "",
                a.outputEncoding
                  ? ((c = "linearToOutputTexel"),
                    (h = a.outputEncoding),
                    (l = pn(h)),
                    "vec4 " +
                      c +
                      "( vec4 value ) { return LinearTo" +
                      l[0] +
                      l[1] +
                      "; }")
                  : "",
                a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
                "\n",
              ]
                .filter(vn)
                .join("\n"))),
          (d = yn((d = gn((d = _n(d)), a)), a)),
          (f = yn((f = gn((f = _n(f)), a)), a)),
          (d = Mn(d)),
          (f = Mn(f)),
          a.isWebGL2 && !n.isRawShaderMaterial)
        ) {
          var S = !1,
            A = /^\s*#version\s+300\s+es\s*\n/;
          n.isShaderMaterial &&
            null !== d.match(A) &&
            null !== f.match(A) &&
            ((S = !0), (d = d.replace(A, "")), (f = f.replace(A, ""))),
            (o =
              [
                "#version 300 es\n",
                "#define attribute in",
                "#define varying out",
                "#define texture2D texture",
              ].join("\n") +
              "\n" +
              o),
            (s =
              [
                "#version 300 es\n",
                "#define varying in",
                S ? "" : "out highp vec4 pc_fragColor;",
                S ? "" : "#define gl_FragColor pc_fragColor",
                "#define gl_FragDepthEXT gl_FragDepth",
                "#define texture2D texture",
                "#define textureCube texture",
                "#define texture2DProj textureProj",
                "#define texture2DLodEXT textureLod",
                "#define texture2DProjLodEXT textureProjLod",
                "#define textureCubeLodEXT textureLod",
                "#define texture2DGradEXT textureGrad",
                "#define texture2DProjGradEXT textureProjGrad",
                "#define textureCubeGradEXT textureGrad",
              ].join("\n") +
              "\n" +
              s),
            M > 0 &&
              ((o = (o = o.replace(
                "#version 300 es\n",
                [
                  "#version 300 es\n",
                  "#extension GL_OVR_multiview2 : require",
                  "layout(num_views = " + M + ") in;",
                  "#define VIEW_ID gl_ViewID_OVR",
                ].join("\n")
              )).replace(
                [
                  "uniform mat4 modelViewMatrix;",
                  "uniform mat4 projectionMatrix;",
                  "uniform mat4 viewMatrix;",
                  "uniform mat3 normalMatrix;",
                ].join("\n"),
                [
                  "uniform mat4 modelViewMatrices[" + M + "];",
                  "uniform mat4 projectionMatrices[" + M + "];",
                  "uniform mat4 viewMatrices[" + M + "];",
                  "uniform mat3 normalMatrices[" + M + "];",
                  "#define modelViewMatrix modelViewMatrices[VIEW_ID]",
                  "#define projectionMatrix projectionMatrices[VIEW_ID]",
                  "#define viewMatrix viewMatrices[VIEW_ID]",
                  "#define normalMatrix normalMatrices[VIEW_ID]",
                ].join("\n")
              )),
              (s = (s = s.replace(
                "#version 300 es\n",
                [
                  "#version 300 es\n",
                  "#extension GL_OVR_multiview2 : require",
                  "#define VIEW_ID gl_ViewID_OVR",
                ].join("\n")
              )).replace(
                "uniform mat4 viewMatrix;",
                [
                  "uniform mat4 viewMatrices[" + M + "];",
                  "#define viewMatrix viewMatrices[VIEW_ID]",
                ].join("\n")
              )));
        }
        var T,
          L,
          P = s + f,
          C = ln(u, 35633, o + d),
          E = ln(u, 35632, P);
        if (
          (u.attachShader(w, C),
          u.attachShader(w, E),
          void 0 !== n.index0AttributeName
            ? u.bindAttribLocation(w, 0, n.index0AttributeName)
            : !0 === a.morphTargets && u.bindAttribLocation(w, 0, "position"),
          u.linkProgram(w),
          t.debug.checkShaderErrors)
        ) {
          var O = u.getProgramInfoLog(w).trim(),
            N = u.getShaderInfoLog(C).trim(),
            I = u.getShaderInfoLog(E).trim(),
            D = !0,
            z = !0;
          if (!1 === u.getProgramParameter(w, 35714)) {
            D = !1;
            dn(u, C, "vertex"), dn(u, E, "fragment");
          } else "" !== O || ("" !== N && "" !== I) || (z = !1);
          z &&
            (this.diagnostics = {
              runnable: D,
              material: n,
              programLog: O,
              vertexShader: { log: N, prefix: o },
              fragmentShader: { log: I, prefix: s },
            });
        }
        return (
          u.deleteShader(C),
          u.deleteShader(E),
          (this.getUniforms = function () {
            return void 0 === T && (T = new hn(u, w)), T;
          }),
          (this.getAttributes = function () {
            return (
              void 0 === L &&
                (L = (function (t, e) {
                  for (
                    var i = {}, n = t.getProgramParameter(e, 35721), r = 0;
                    r < n;
                    r++
                  ) {
                    var a = t.getActiveAttrib(e, r).name;
                    i[a] = t.getAttribLocation(e, a);
                  }
                  return i;
                })(u, w)),
              L
            );
          }),
          (this.destroy = function () {
            u.deleteProgram(w), (this.program = void 0);
          }),
          (this.name = r.name),
          (this.id = un++),
          (this.cacheKey = i),
          (this.usedTimes = 1),
          (this.program = w),
          (this.vertexShader = C),
          (this.fragmentShader = E),
          (this.numMultiviewViews = M),
          this
        );
      }
      function Ln(t, e, i) {
        var n = [],
          r = i.isWebGL2,
          a = i.logarithmicDepthBuffer,
          o = i.floatVertexTextures,
          s = i.precision,
          c = i.maxVertexUniforms,
          h = i.vertexTextures,
          l = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite",
          },
          u = [
            "precision",
            "isWebGL2",
            "supportsVertexTextures",
            "outputEncoding",
            "instancing",
            "numMultiviewViews",
            "map",
            "mapEncoding",
            "matcap",
            "matcapEncoding",
            "envMap",
            "envMapMode",
            "envMapEncoding",
            "envMapCubeUV",
            "lightMap",
            "aoMap",
            "emissiveMap",
            "emissiveMapEncoding",
            "bumpMap",
            "normalMap",
            "objectSpaceNormalMap",
            "tangentSpaceNormalMap",
            "clearcoatNormalMap",
            "displacementMap",
            "specularMap",
            "roughnessMap",
            "metalnessMap",
            "gradientMap",
            "alphaMap",
            "combine",
            "vertexColors",
            "vertexTangents",
            "vertexUvs",
            "uvsVertexOnly",
            "fog",
            "useFog",
            "fogExp2",
            "flatShading",
            "sizeAttenuation",
            "logarithmicDepthBuffer",
            "skinning",
            "maxBones",
            "useVertexTexture",
            "morphTargets",
            "morphNormals",
            "maxMorphTargets",
            "maxMorphNormals",
            "premultipliedAlpha",
            "numDirLights",
            "numPointLights",
            "numSpotLights",
            "numHemiLights",
            "numRectAreaLights",
            "numDirLightShadows",
            "numPointLightShadows",
            "numSpotLightShadows",
            "shadowMapEnabled",
            "shadowMapType",
            "toneMapping",
            "physicallyCorrectLights",
            "alphaTest",
            "doubleSided",
            "flipSided",
            "numClippingPlanes",
            "numClipIntersection",
            "depthPacking",
            "dithering",
            "sheen",
          ];
        function p(t, e) {
          var i;
          return (
            t
              ? t.isTexture
                ? (i = t.encoding)
                : t.isWebGLRenderTarget && (i = t.texture.encoding)
              : (i = 3e3),
            3e3 === i && e && (i = 3007),
            i
          );
        }
        (this.getParameters = function (e, n, u, d, f, m, v) {
          var g = l[e.type],
            y = v.isSkinnedMesh
              ? (function (t) {
                  var e = t.skeleton.bones;
                  if (o) return 1024;
                  var i = c,
                    n = Math.floor((i - 20) / 4),
                    r = Math.min(n, e.length);
                  return r < e.length ? 0 : r;
                })(v)
              : 0;
          null !== e.precision &&
            ((s = i.getMaxPrecision(e.precision)), e.precision);
          var x = t.getRenderTarget(),
            _ = x && x.isWebGLMultiviewRenderTarget ? x.numViews : 0;
          return {
            isWebGL2: r,
            shaderID: g,
            precision: s,
            instancing: !0 === v.isInstancedMesh,
            supportsVertexTextures: h,
            numMultiviewViews: _,
            outputEncoding: p(x ? x.texture : null, t.gammaOutput),
            map: !!e.map,
            mapEncoding: p(e.map, t.gammaInput),
            matcap: !!e.matcap,
            matcapEncoding: p(e.matcap, t.gammaInput),
            envMap: !!e.envMap,
            envMapMode: e.envMap && e.envMap.mapping,
            envMapEncoding: p(e.envMap, t.gammaInput),
            envMapCubeUV:
              !!e.envMap &&
              (306 === e.envMap.mapping || 307 === e.envMap.mapping),
            lightMap: !!e.lightMap,
            aoMap: !!e.aoMap,
            emissiveMap: !!e.emissiveMap,
            emissiveMapEncoding: p(e.emissiveMap, t.gammaInput),
            bumpMap: !!e.bumpMap,
            normalMap: !!e.normalMap,
            objectSpaceNormalMap: 1 === e.normalMapType,
            tangentSpaceNormalMap: 0 === e.normalMapType,
            clearcoatNormalMap: !!e.clearcoatNormalMap,
            displacementMap: !!e.displacementMap,
            roughnessMap: !!e.roughnessMap,
            metalnessMap: !!e.metalnessMap,
            specularMap: !!e.specularMap,
            alphaMap: !!e.alphaMap,
            gradientMap: !!e.gradientMap,
            sheen: !!e.sheen,
            combine: e.combine,
            vertexTangents: e.normalMap && e.vertexTangents,
            vertexColors: e.vertexColors,
            vertexUvs: !!(
              e.map ||
              e.bumpMap ||
              e.normalMap ||
              e.specularMap ||
              e.alphaMap ||
              e.emissiveMap ||
              e.roughnessMap ||
              e.metalnessMap ||
              e.clearcoatNormalMap ||
              e.displacementMap
            ),
            uvsVertexOnly: !(
              e.map ||
              e.bumpMap ||
              e.normalMap ||
              e.specularMap ||
              e.alphaMap ||
              e.emissiveMap ||
              e.roughnessMap ||
              e.metalnessMap ||
              e.clearcoatNormalMap ||
              !e.displacementMap
            ),
            fog: !!d,
            useFog: e.fog,
            fogExp2: d && d.isFogExp2,
            flatShading: e.flatShading,
            sizeAttenuation: e.sizeAttenuation,
            logarithmicDepthBuffer: a,
            skinning: e.skinning && y > 0,
            maxBones: y,
            useVertexTexture: o,
            morphTargets: e.morphTargets,
            morphNormals: e.morphNormals,
            maxMorphTargets: t.maxMorphTargets,
            maxMorphNormals: t.maxMorphNormals,
            numDirLights: n.directional.length,
            numPointLights: n.point.length,
            numSpotLights: n.spot.length,
            numRectAreaLights: n.rectArea.length,
            numHemiLights: n.hemi.length,
            numDirLightShadows: n.directionalShadowMap.length,
            numPointLightShadows: n.pointShadowMap.length,
            numSpotLightShadows: n.spotShadowMap.length,
            numClippingPlanes: f,
            numClipIntersection: m,
            dithering: e.dithering,
            shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
            shadowMapType: t.shadowMap.type,
            toneMapping: e.toneMapped ? t.toneMapping : 0,
            physicallyCorrectLights: t.physicallyCorrectLights,
            premultipliedAlpha: e.premultipliedAlpha,
            alphaTest: e.alphaTest,
            doubleSided: 2 === e.side,
            flipSided: 1 === e.side,
            depthPacking: void 0 !== e.depthPacking && e.depthPacking,
          };
        }),
          (this.getProgramCacheKey = function (e, i) {
            var n = [];
            if (
              (i.shaderID
                ? n.push(i.shaderID)
                : (n.push(e.fragmentShader), n.push(e.vertexShader)),
              void 0 !== e.defines)
            )
              for (var r in e.defines) n.push(r), n.push(e.defines[r]);
            for (var a = 0; a < u.length; a++) n.push(i[u[a]]);
            return (
              n.push(e.onBeforeCompile.toString()),
              n.push(t.gammaOutput),
              n.push(t.gammaFactor),
              n.join()
            );
          }),
          (this.acquireProgram = function (i, r, a, o) {
            for (var s, c = 0, h = n.length; c < h; c++) {
              var l = n[c];
              if (l.cacheKey === o) {
                ++(s = l).usedTimes;
                break;
              }
            }
            return (
              void 0 === s && ((s = new Tn(t, e, o, i, r, a)), n.push(s)), s
            );
          }),
          (this.releaseProgram = function (t) {
            if (0 == --t.usedTimes) {
              var e = n.indexOf(t);
              (n[e] = n[n.length - 1]), n.pop(), t.destroy();
            }
          }),
          (this.programs = n);
      }
      function Pn() {
        var t = new WeakMap();
        return {
          get: function (e) {
            var i = t.get(e);
            return void 0 === i && ((i = {}), t.set(e, i)), i;
          },
          remove: function (e) {
            t.delete(e);
          },
          update: function (e, i, n) {
            t.get(e)[i] = n;
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function Cn(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.program !== e.program
          ? t.program.id - e.program.id
          : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
          ? t.z - e.z
          : t.id - e.id;
      }
      function En(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
      }
      function On() {
        var t = [],
          e = 0,
          i = [],
          n = [],
          r = { id: -1 };
        function a(i, n, a, o, s, c) {
          var h = t[e];
          return (
            void 0 === h
              ? ((h = {
                  id: i.id,
                  object: i,
                  geometry: n,
                  material: a,
                  program: a.program || r,
                  groupOrder: o,
                  renderOrder: i.renderOrder,
                  z: s,
                  group: c,
                }),
                (t[e] = h))
              : ((h.id = i.id),
                (h.object = i),
                (h.geometry = n),
                (h.material = a),
                (h.program = a.program || r),
                (h.groupOrder = o),
                (h.renderOrder = i.renderOrder),
                (h.z = s),
                (h.group = c)),
            e++,
            h
          );
        }
        return {
          opaque: i,
          transparent: n,
          init: function () {
            (e = 0), (i.length = 0), (n.length = 0);
          },
          push: function (t, e, r, o, s, c) {
            var h = a(t, e, r, o, s, c);
            (!0 === r.transparent ? n : i).push(h);
          },
          unshift: function (t, e, r, o, s, c) {
            var h = a(t, e, r, o, s, c);
            (!0 === r.transparent ? n : i).unshift(h);
          },
          sort: function () {
            i.length > 1 && i.sort(Cn), n.length > 1 && n.sort(En);
          },
        };
      }
      function Nn() {
        var t = new WeakMap();
        function e(i) {
          var n = i.target;
          n.removeEventListener("dispose", e), t.delete(n);
        }
        return {
          get: function (i, n) {
            var r,
              a = t.get(i);
            return (
              void 0 === a
                ? ((r = new On()),
                  t.set(i, new WeakMap()),
                  t.get(i).set(n, r),
                  i.addEventListener("dispose", e))
                : void 0 === (r = a.get(n)) && ((r = new On()), a.set(n, r)),
              r
            );
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function In() {
        var t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            var i;
            switch (e.type) {
              case "DirectionalLight":
                i = {
                  direction: new p(),
                  color: new Ft(),
                  shadow: !1,
                  shadowBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new c(),
                };
                break;
              case "SpotLight":
                i = {
                  position: new p(),
                  direction: new p(),
                  color: new Ft(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0,
                  shadow: !1,
                  shadowBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new c(),
                };
                break;
              case "PointLight":
                i = {
                  position: new p(),
                  color: new Ft(),
                  distance: 0,
                  decay: 0,
                  shadow: !1,
                  shadowBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new c(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
                break;
              case "HemisphereLight":
                i = {
                  direction: new p(),
                  skyColor: new Ft(),
                  groundColor: new Ft(),
                };
                break;
              case "RectAreaLight":
                i = {
                  color: new Ft(),
                  position: new p(),
                  halfWidth: new p(),
                  halfHeight: new p(),
                };
            }
            return (t[e.id] = i), i;
          },
        };
      }
      var Dn = 0;
      function zn(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
      }
      function Rn() {
        for (
          var t = new In(),
            e = {
              version: 0,
              hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
              },
              ambient: [0, 0, 0],
              probe: [],
              directional: [],
              directionalShadowMap: [],
              directionalShadowMatrix: [],
              spot: [],
              spotShadowMap: [],
              spotShadowMatrix: [],
              rectArea: [],
              point: [],
              pointShadowMap: [],
              pointShadowMatrix: [],
              hemi: [],
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
            },
            i = 0;
          i < 9;
          i++
        )
          e.probe.push(new p());
        var n = new p(),
          r = new C(),
          a = new C();
        return {
          setup: function (i, o, s) {
            for (var c = 0, h = 0, l = 0, u = 0; u < 9; u++)
              e.probe[u].set(0, 0, 0);
            var p = 0,
              d = 0,
              f = 0,
              m = 0,
              v = 0,
              g = 0,
              y = 0,
              x = 0,
              _ = s.matrixWorldInverse;
            i.sort(zn), (u = 0);
            for (var b = i.length; u < b; u++) {
              var w = i[u],
                M = w.color,
                S = w.intensity,
                A = w.distance,
                T = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
              if (w.isAmbientLight)
                (c += M.r * S), (h += M.g * S), (l += M.b * S);
              else if (w.isLightProbe)
                for (var L = 0; L < 9; L++)
                  e.probe[L].addScaledVector(w.sh.coefficients[L], S);
              else if (w.isDirectionalLight) {
                if (
                  ((C = t.get(w)).color
                    .copy(w.color)
                    .multiplyScalar(w.intensity),
                  C.direction.setFromMatrixPosition(w.matrixWorld),
                  n.setFromMatrixPosition(w.target.matrixWorld),
                  C.direction.sub(n),
                  C.direction.transformDirection(_),
                  (C.shadow = w.castShadow),
                  w.castShadow)
                ) {
                  var P = w.shadow;
                  (C.shadowBias = P.bias),
                    (C.shadowRadius = P.radius),
                    (C.shadowMapSize = P.mapSize),
                    (e.directionalShadowMap[p] = T),
                    (e.directionalShadowMatrix[p] = w.shadow.matrix),
                    g++;
                }
                (e.directional[p] = C), p++;
              } else if (w.isSpotLight) {
                if (
                  ((C = t.get(w)).position.setFromMatrixPosition(w.matrixWorld),
                  C.position.applyMatrix4(_),
                  C.color.copy(M).multiplyScalar(S),
                  (C.distance = A),
                  C.direction.setFromMatrixPosition(w.matrixWorld),
                  n.setFromMatrixPosition(w.target.matrixWorld),
                  C.direction.sub(n),
                  C.direction.transformDirection(_),
                  (C.coneCos = Math.cos(w.angle)),
                  (C.penumbraCos = Math.cos(w.angle * (1 - w.penumbra))),
                  (C.decay = w.decay),
                  (C.shadow = w.castShadow),
                  w.castShadow)
                ) {
                  P = w.shadow;
                  (C.shadowBias = P.bias),
                    (C.shadowRadius = P.radius),
                    (C.shadowMapSize = P.mapSize),
                    (e.spotShadowMap[f] = T),
                    (e.spotShadowMatrix[f] = w.shadow.matrix),
                    x++;
                }
                (e.spot[f] = C), f++;
              } else if (w.isRectAreaLight) {
                (C = t.get(w)).color.copy(M).multiplyScalar(S),
                  C.position.setFromMatrixPosition(w.matrixWorld),
                  C.position.applyMatrix4(_),
                  a.identity(),
                  r.copy(w.matrixWorld),
                  r.premultiply(_),
                  a.extractRotation(r),
                  C.halfWidth.set(0.5 * w.width, 0, 0),
                  C.halfHeight.set(0, 0.5 * w.height, 0),
                  C.halfWidth.applyMatrix4(a),
                  C.halfHeight.applyMatrix4(a),
                  (e.rectArea[m] = C),
                  m++;
              } else if (w.isPointLight) {
                if (
                  ((C = t.get(w)).position.setFromMatrixPosition(w.matrixWorld),
                  C.position.applyMatrix4(_),
                  C.color.copy(w.color).multiplyScalar(w.intensity),
                  (C.distance = w.distance),
                  (C.decay = w.decay),
                  (C.shadow = w.castShadow),
                  w.castShadow)
                ) {
                  P = w.shadow;
                  (C.shadowBias = P.bias),
                    (C.shadowRadius = P.radius),
                    (C.shadowMapSize = P.mapSize),
                    (C.shadowCameraNear = P.camera.near),
                    (C.shadowCameraFar = P.camera.far),
                    (e.pointShadowMap[d] = T),
                    (e.pointShadowMatrix[d] = w.shadow.matrix),
                    y++;
                }
                (e.point[d] = C), d++;
              } else if (w.isHemisphereLight) {
                var C;
                (C = t.get(w)).direction.setFromMatrixPosition(w.matrixWorld),
                  C.direction.transformDirection(_),
                  C.direction.normalize(),
                  C.skyColor.copy(w.color).multiplyScalar(S),
                  C.groundColor.copy(w.groundColor).multiplyScalar(S),
                  (e.hemi[v] = C),
                  v++;
              }
            }
            (e.ambient[0] = c), (e.ambient[1] = h), (e.ambient[2] = l);
            var E = e.hash;
            (E.directionalLength === p &&
              E.pointLength === d &&
              E.spotLength === f &&
              E.rectAreaLength === m &&
              E.hemiLength === v &&
              E.numDirectionalShadows === g &&
              E.numPointShadows === y &&
              E.numSpotShadows === x) ||
              ((e.directional.length = p),
              (e.spot.length = f),
              (e.rectArea.length = m),
              (e.point.length = d),
              (e.hemi.length = v),
              (e.directionalShadowMap.length = g),
              (e.pointShadowMap.length = y),
              (e.spotShadowMap.length = x),
              (e.directionalShadowMatrix.length = g),
              (e.pointShadowMatrix.length = y),
              (e.spotShadowMatrix.length = x),
              (E.directionalLength = p),
              (E.pointLength = d),
              (E.spotLength = f),
              (E.rectAreaLength = m),
              (E.hemiLength = v),
              (E.numDirectionalShadows = g),
              (E.numPointShadows = y),
              (E.numSpotShadows = x),
              (e.version = Dn++));
          },
          state: e,
        };
      }
      function Fn() {
        var t = new Rn(),
          e = [],
          i = [];
        return {
          init: function () {
            (e.length = 0), (i.length = 0);
          },
          state: { lightsArray: e, shadowsArray: i, lights: t },
          setupLights: function (n) {
            t.setup(e, i, n);
          },
          pushLight: function (t) {
            e.push(t);
          },
          pushShadow: function (t) {
            i.push(t);
          },
        };
      }
      function Un() {
        var t = new WeakMap();
        function e(i) {
          var n = i.target;
          n.removeEventListener("dispose", e), t.delete(n);
        }
        return {
          get: function (i, n) {
            var r;
            return (
              !1 === t.has(i)
                ? ((r = new Fn()),
                  t.set(i, new WeakMap()),
                  t.get(i).set(n, r),
                  i.addEventListener("dispose", e))
                : !1 === t.get(i).has(n)
                ? ((r = new Fn()), t.get(i).set(n, r))
                : (r = t.get(i).get(n)),
              r
            );
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function Bn(t) {
        kt.call(this),
          (this.type = "MeshDepthMaterial"),
          (this.depthPacking = 3200),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.map = null),
          (this.alphaMap = null),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.fog = !1),
          this.setValues(t);
      }
      function Vn(t) {
        kt.call(this),
          (this.type = "MeshDistanceMaterial"),
          (this.referencePosition = new p()),
          (this.nearDistance = 1),
          (this.farDistance = 1e3),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.map = null),
          (this.alphaMap = null),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.fog = !1),
          this.setValues(t);
      }
      (Bn.prototype = Object.create(kt.prototype)),
        (Bn.prototype.constructor = Bn),
        (Bn.prototype.isMeshDepthMaterial = !0),
        (Bn.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            (this.depthPacking = t.depthPacking),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            this
          );
        }),
        (Vn.prototype = Object.create(kt.prototype)),
        (Vn.prototype.constructor = Vn),
        (Vn.prototype.isMeshDistanceMaterial = !0),
        (Vn.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.referencePosition.copy(t.referencePosition),
            (this.nearDistance = t.nearDistance),
            (this.farDistance = t.farDistance),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            this
          );
        });
      function Gn(t, e, i) {
        var r = new Xe(),
          a = new c(),
          o = new c(),
          s = new x(),
          h = [],
          l = [],
          u = {},
          p = { 0: 1, 1: 0, 2: 2 },
          d = new Be({
            defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
            uniforms: {
              shadow_pass: { value: null },
              resolution: { value: new c() },
              radius: { value: 4 },
            },
            vertexShader:
              "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader:
              "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}",
          }),
          f = d.clone();
        f.defines.HORIZONAL_PASS = 1;
        var m = new le();
        m.setAttribute(
          "position",
          new Ht(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
        );
        var v = new Pe(m, d),
          g = this;
        function y(i, n) {
          var r = e.update(v);
          (d.uniforms.shadow_pass.value = i.map.texture),
            (d.uniforms.resolution.value = i.mapSize),
            (d.uniforms.radius.value = i.radius),
            t.setRenderTarget(i.mapPass),
            t.clear(),
            t.renderBufferDirect(n, null, r, d, v, null),
            (f.uniforms.shadow_pass.value = i.mapPass.texture),
            (f.uniforms.resolution.value = i.mapSize),
            (f.uniforms.radius.value = i.radius),
            t.setRenderTarget(i.map),
            t.clear(),
            t.renderBufferDirect(n, null, r, f, v, null);
        }
        function b(t, e, i) {
          var n = (t << 0) | (e << 1) | (i << 2),
            r = h[n];
          return (
            void 0 === r &&
              ((r = new Bn({
                depthPacking: 3201,
                morphTargets: t,
                skinning: e,
              })),
              (h[n] = r)),
            r
          );
        }
        function w(t, e, i) {
          var n = (t << 0) | (e << 1) | (i << 2),
            r = l[n];
          return (
            void 0 === r &&
              ((r = new Vn({ morphTargets: t, skinning: e })), (l[n] = r)),
            r
          );
        }
        function M(e, i, n, r, a, o) {
          var s = e.geometry,
            c = null,
            h = b,
            l = e.customDepthMaterial;
          if (
            (!0 === n.isPointLight && ((h = w), (l = e.customDistanceMaterial)),
            void 0 === l)
          ) {
            var d = !1;
            !0 === i.morphTargets &&
              (!0 === s.isBufferGeometry
                ? (d =
                    s.morphAttributes &&
                    s.morphAttributes.position &&
                    s.morphAttributes.position.length > 0)
                : !0 === s.isGeometry &&
                  (d = s.morphTargets && s.morphTargets.length > 0));
            var f = !1;
            !0 === e.isSkinnedMesh && !0 === i.skinning && (f = !0),
              (c = h(d, f, !0 === e.isInstancedMesh));
          } else c = l;
          if (
            t.localClippingEnabled &&
            !0 === i.clipShadows &&
            0 !== i.clippingPlanes.length
          ) {
            var m = c.uuid,
              v = i.uuid,
              g = u[m];
            void 0 === g && ((g = {}), (u[m] = g));
            var y = g[v];
            void 0 === y && ((y = c.clone()), (g[v] = y)), (c = y);
          }
          return (
            (c.visible = i.visible),
            (c.wireframe = i.wireframe),
            (c.side =
              3 === o
                ? null !== i.shadowSide
                  ? i.shadowSide
                  : i.side
                : null !== i.shadowSide
                ? i.shadowSide
                : p[i.side]),
            (c.clipShadows = i.clipShadows),
            (c.clippingPlanes = i.clippingPlanes),
            (c.clipIntersection = i.clipIntersection),
            (c.wireframeLinewidth = i.wireframeLinewidth),
            (c.linewidth = i.linewidth),
            !0 === n.isPointLight &&
              !0 === c.isMeshDistanceMaterial &&
              (c.referencePosition.setFromMatrixPosition(n.matrixWorld),
              (c.nearDistance = r),
              (c.farDistance = a)),
            c
          );
        }
        function S(i, n, a, o, s) {
          if (!1 !== i.visible) {
            if (
              i.layers.test(n.layers) &&
              (i.isMesh || i.isLine || i.isPoints) &&
              (i.castShadow || (i.receiveShadow && 3 === s)) &&
              (!i.frustumCulled || r.intersectsObject(i))
            ) {
              i.modelViewMatrix.multiplyMatrices(
                a.matrixWorldInverse,
                i.matrixWorld
              );
              var c = e.update(i),
                h = i.material;
              if (Array.isArray(h))
                for (var l = c.groups, u = 0, p = l.length; u < p; u++) {
                  var d = l[u],
                    f = h[d.materialIndex];
                  if (f && f.visible) {
                    var m = M(i, f, o, a.near, a.far, s);
                    t.renderBufferDirect(a, null, c, m, i, d);
                  }
                }
              else if (h.visible) {
                m = M(i, h, o, a.near, a.far, s);
                t.renderBufferDirect(a, null, c, m, i, null);
              }
            }
            for (var v = i.children, g = 0, y = v.length; g < y; g++)
              S(v[g], n, a, o, s);
          }
        }
        (this.enabled = !1),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this.type = 1),
          (this.render = function (e, c, h) {
            if (
              !1 !== g.enabled &&
              (!1 !== g.autoUpdate || !1 !== g.needsUpdate) &&
              0 !== e.length
            ) {
              var l = t.getRenderTarget(),
                u = t.getActiveCubeFace(),
                p = t.getActiveMipmapLevel(),
                d = t.state;
              d.setBlending(0),
                d.buffers.color.setClear(1, 1, 1, 1),
                d.buffers.depth.setTest(!0),
                d.setScissorTest(!1);
              for (var f = 0, m = e.length; f < m; f++) {
                var v = e[f],
                  x = v.shadow;
                if (void 0 !== x) {
                  a.copy(x.mapSize);
                  var b = x.getFrameExtents();
                  if (
                    (a.multiply(b),
                    o.copy(x.mapSize),
                    (a.x > i || a.y > i) &&
                      (a.x > i &&
                        ((o.x = Math.floor(i / b.x)),
                        (a.x = o.x * b.x),
                        (x.mapSize.x = o.x)),
                      a.y > i &&
                        ((o.y = Math.floor(i / b.y)),
                        (a.y = o.y * b.y),
                        (x.mapSize.y = o.y))),
                    null === x.map && !x.isPointLightShadow && 3 === this.type)
                  ) {
                    var w = { minFilter: n, magFilter: n, format: 1023 };
                    (x.map = new _(a.x, a.y, w)),
                      (x.map.texture.name = v.name + ".shadowMap"),
                      (x.mapPass = new _(a.x, a.y, w)),
                      x.camera.updateProjectionMatrix();
                  }
                  if (null === x.map) {
                    w = { minFilter: 1003, magFilter: 1003, format: 1023 };
                    (x.map = new _(a.x, a.y, w)),
                      (x.map.texture.name = v.name + ".shadowMap"),
                      x.camera.updateProjectionMatrix();
                  }
                  t.setRenderTarget(x.map), t.clear();
                  for (var M = x.getViewportCount(), A = 0; A < M; A++) {
                    var T = x.getViewport(A);
                    s.set(o.x * T.x, o.y * T.y, o.x * T.z, o.y * T.w),
                      d.viewport(s),
                      x.updateMatrices(v, A),
                      (r = x.getFrustum()),
                      S(c, h, x.camera, v, this.type);
                  }
                  x.isPointLightShadow || 3 !== this.type || y(x, h);
                }
              }
              (g.needsUpdate = !1), t.setRenderTarget(l, u, p);
            }
          });
      }
      function jn(t, e, i) {
        var n = i.isWebGL2;
        var r = new (function () {
            var e = !1,
              i = new x(),
              n = null,
              r = new x(0, 0, 0, 0);
            return {
              setMask: function (i) {
                n === i || e || (t.colorMask(i, i, i, i), (n = i));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e, n, a, o, s) {
                !0 === s && ((e *= o), (n *= o), (a *= o)),
                  i.set(e, n, a, o),
                  !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i));
              },
              reset: function () {
                (e = !1), (n = null), r.set(-1, 0, 0, 0);
              },
            };
          })(),
          a = new (function () {
            var e = !1,
              i = null,
              n = null,
              r = null;
            return {
              setTest: function (t) {
                t ? B(2929) : V(2929);
              },
              setMask: function (n) {
                i === n || e || (t.depthMask(n), (i = n));
              },
              setFunc: function (e) {
                if (n !== e) {
                  if (e)
                    switch (e) {
                      case 0:
                        t.depthFunc(512);
                        break;
                      case 1:
                        t.depthFunc(519);
                        break;
                      case 2:
                        t.depthFunc(513);
                        break;
                      case 3:
                        t.depthFunc(515);
                        break;
                      case 4:
                        t.depthFunc(514);
                        break;
                      case 5:
                        t.depthFunc(518);
                        break;
                      case 6:
                        t.depthFunc(516);
                        break;
                      case 7:
                        t.depthFunc(517);
                        break;
                      default:
                        t.depthFunc(515);
                    }
                  else t.depthFunc(515);
                  n = e;
                }
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                r !== e && (t.clearDepth(e), (r = e));
              },
              reset: function () {
                (e = !1), (i = null), (n = null), (r = null);
              },
            };
          })(),
          o = new (function () {
            var e = !1,
              i = null,
              n = null,
              r = null,
              a = null,
              o = null,
              s = null,
              c = null,
              h = null;
            return {
              setTest: function (t) {
                e || (t ? B(2960) : V(2960));
              },
              setMask: function (n) {
                i === n || e || (t.stencilMask(n), (i = n));
              },
              setFunc: function (e, i, o) {
                (n === e && r === i && a === o) ||
                  (t.stencilFunc(e, i, o), (n = e), (r = i), (a = o));
              },
              setOp: function (e, i, n) {
                (o === e && s === i && c === n) ||
                  (t.stencilOp(e, i, n), (o = e), (s = i), (c = n));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                h !== e && (t.clearStencil(e), (h = e));
              },
              reset: function () {
                (e = !1),
                  (i = null),
                  (n = null),
                  (r = null),
                  (a = null),
                  (o = null),
                  (s = null),
                  (c = null),
                  (h = null);
              },
            };
          })(),
          s = t.getParameter(34921),
          c = new Uint8Array(s),
          h = new Uint8Array(s),
          l = new Uint8Array(s),
          u = {},
          p = null,
          d = null,
          f = null,
          m = null,
          v = null,
          g = null,
          y = null,
          _ = null,
          b = null,
          w = !1,
          M = null,
          S = null,
          A = null,
          T = null,
          L = null,
          P = t.getParameter(35661),
          C = !1,
          E = 0,
          O = t.getParameter(7938);
        -1 !== O.indexOf("WebGL")
          ? ((E = parseFloat(/^WebGL\ ([0-9])/.exec(O)[1])), (C = E >= 1))
          : -1 !== O.indexOf("OpenGL ES") &&
            ((E = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(O)[1])), (C = E >= 2));
        var N = null,
          I = {},
          D = new x(),
          z = new x();
        function R(e, i, n) {
          var r = new Uint8Array(4),
            a = t.createTexture();
          t.bindTexture(e, a),
            t.texParameteri(e, 10241, 9728),
            t.texParameteri(e, 10240, 9728);
          for (var o = 0; o < n; o++)
            t.texImage2D(i + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
          return a;
        }
        var F = {};
        function U(i, r) {
          ((c[i] = 1),
          0 === h[i] && (t.enableVertexAttribArray(i), (h[i] = 1)),
          l[i] !== r) &&
            ((n ? t : e.get("ANGLE_instanced_arrays"))[
              n ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
            ](i, r),
            (l[i] = r));
        }
        function B(e) {
          !0 !== u[e] && (t.enable(e), (u[e] = !0));
        }
        function V(e) {
          !1 !== u[e] && (t.disable(e), (u[e] = !1));
        }
        (F[3553] = R(3553, 3553, 1)),
          (F[34067] = R(34067, 34069, 6)),
          r.setClear(0, 0, 0, 1),
          a.setClear(1),
          o.setClear(0),
          B(2929),
          a.setFunc(3),
          H(!1),
          q(1),
          B(2884),
          W(0);
        var G = { 100: 32774, 101: 32778, 102: 32779 };
        if (n) (G[103] = 32775), (G[104] = 32776);
        else {
          var j = e.get("EXT_blend_minmax");
          null !== j && ((G[103] = j.MIN_EXT), (G[104] = j.MIN_EXT));
        }
        var k = {
          200: 0,
          201: 1,
          202: 768,
          204: 770,
          210: 776,
          208: 774,
          206: 772,
          203: 769,
          205: 771,
          209: 775,
          207: 773,
        };
        function W(e, i, n, r, a, o, s, c) {
          if (0 !== e) {
            if ((d || (B(3042), (d = !0)), 5 === e))
              (a = a || i),
                (o = o || n),
                (s = s || r),
                (i === m && a === y) ||
                  (t.blendEquationSeparate(G[i], G[a]), (m = i), (y = a)),
                (n === v && r === g && o === _ && s === b) ||
                  (t.blendFuncSeparate(k[n], k[r], k[o], k[s]),
                  (v = n),
                  (g = r),
                  (_ = o),
                  (b = s)),
                (f = e),
                (w = null);
            else if (e !== f || c !== w) {
              if (
                ((100 === m && 100 === y) ||
                  (t.blendEquation(32774), (m = 100), (y = 100)),
                c)
              )
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(1, 771, 1, 771);
                    break;
                  case 2:
                    t.blendFunc(1, 1);
                    break;
                  case 3:
                    t.blendFuncSeparate(0, 0, 769, 771);
                    break;
                  case 4:
                    t.blendFuncSeparate(0, 768, 0, 770);
                }
              else
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(770, 771, 1, 771);
                    break;
                  case 2:
                    t.blendFunc(770, 1);
                    break;
                  case 3:
                    t.blendFunc(0, 769);
                    break;
                  case 4:
                    t.blendFunc(0, 768);
                }
              (v = null), (g = null), (_ = null), (b = null), (f = e), (w = c);
            }
          } else d && (V(3042), (d = !1));
        }
        function H(e) {
          M !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (M = e));
        }
        function q(e) {
          0 !== e
            ? (B(2884),
              e !== S &&
                (1 === e
                  ? t.cullFace(1029)
                  : 2 === e
                  ? t.cullFace(1028)
                  : t.cullFace(1032)))
            : V(2884),
            (S = e);
        }
        function X(e, i, n) {
          e
            ? (B(32823),
              (T === i && L === n) || (t.polygonOffset(i, n), (T = i), (L = n)))
            : V(32823);
        }
        function Y(e) {
          void 0 === e && (e = 33984 + P - 1),
            N !== e && (t.activeTexture(e), (N = e));
        }
        return {
          buffers: { color: r, depth: a, stencil: o },
          initAttributes: function () {
            for (var t = 0, e = c.length; t < e; t++) c[t] = 0;
          },
          enableAttribute: function (t) {
            U(t, 0);
          },
          enableAttributeAndDivisor: U,
          disableUnusedAttributes: function () {
            for (var e = 0, i = h.length; e !== i; ++e)
              h[e] !== c[e] && (t.disableVertexAttribArray(e), (h[e] = 0));
          },
          enable: B,
          disable: V,
          useProgram: function (e) {
            return p !== e && (t.useProgram(e), (p = e), !0);
          },
          setBlending: W,
          setMaterial: function (t, e) {
            2 === t.side ? V(2884) : B(2884);
            var i = 1 === t.side;
            e && (i = !i),
              H(i),
              1 === t.blending && !1 === t.transparent
                ? W(0)
                : W(
                    t.blending,
                    t.blendEquation,
                    t.blendSrc,
                    t.blendDst,
                    t.blendEquationAlpha,
                    t.blendSrcAlpha,
                    t.blendDstAlpha,
                    t.premultipliedAlpha
                  ),
              a.setFunc(t.depthFunc),
              a.setTest(t.depthTest),
              a.setMask(t.depthWrite),
              r.setMask(t.colorWrite);
            var n = t.stencilWrite;
            o.setTest(n),
              n &&
                (o.setMask(t.stencilWriteMask),
                o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
                o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
              X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
          },
          setFlipSided: H,
          setCullFace: q,
          setLineWidth: function (e) {
            e !== A && (C && t.lineWidth(e), (A = e));
          },
          setPolygonOffset: X,
          setScissorTest: function (t) {
            t ? B(3089) : V(3089);
          },
          activeTexture: Y,
          bindTexture: function (e, i) {
            null === N && Y();
            var n = I[N];
            void 0 === n &&
              ((n = { type: void 0, texture: void 0 }), (I[N] = n)),
              (n.type === e && n.texture === i) ||
                (t.bindTexture(e, i || F[e]), (n.type = e), (n.texture = i));
          },
          unbindTexture: function () {
            var e = I[N];
            void 0 !== e &&
              void 0 !== e.type &&
              (t.bindTexture(e.type, null),
              (e.type = void 0),
              (e.texture = void 0));
          },
          compressedTexImage2D: function () {
            try {
              t.compressedTexImage2D.apply(t, arguments);
            } catch (t) {}
          },
          texImage2D: function () {
            try {
              t.texImage2D.apply(t, arguments);
            } catch (t) {}
          },
          texImage3D: function () {
            try {
              t.texImage3D.apply(t, arguments);
            } catch (t) {}
          },
          scissor: function (e) {
            !1 === D.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), D.copy(e));
          },
          viewport: function (e) {
            !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
          },
          reset: function () {
            for (var e = 0; e < h.length; e++)
              1 === h[e] && (t.disableVertexAttribArray(e), (h[e] = 0));
            (u = {}),
              (N = null),
              (I = {}),
              (p = null),
              (f = null),
              (M = null),
              (S = null),
              r.reset(),
              a.reset(),
              o.reset();
          },
        };
      }
      function kn(t, e, i, r, a, o, c) {
        var h,
          l = a.isWebGL2,
          u = (a.maxTextures, a.maxCubemapSize),
          p = a.maxTextureSize,
          d = a.maxSamples,
          f = new WeakMap(),
          m =
            "undefined" != typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext("2d");
        function v(t, e) {
          return m
            ? new OffscreenCanvas(t, e)
            : document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              );
        }
        function g(t, e, i, n) {
          var r = 1;
          if (
            ((t.width > n || t.height > n) &&
              (r = n / Math.max(t.width, t.height)),
            r < 1 || !0 === e)
          ) {
            if (
              ("undefined" != typeof HTMLImageElement &&
                t instanceof HTMLImageElement) ||
              ("undefined" != typeof HTMLCanvasElement &&
                t instanceof HTMLCanvasElement) ||
              ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
            ) {
              var a = e ? s.floorPowerOfTwo : Math.floor,
                o = a(r * t.width),
                c = a(r * t.height);
              void 0 === h && (h = v(o, c));
              var l = i ? v(o, c) : h;
              return (
                (l.width = o),
                (l.height = c),
                l.getContext("2d").drawImage(t, 0, 0, o, c),
                l
              );
            }
            return t;
          }
          return t;
        }
        function y(t) {
          return s.isPowerOfTwo(t.width) && s.isPowerOfTwo(t.height);
        }
        function x(t, e) {
          return (
            t.generateMipmaps && e && 1003 !== t.minFilter && t.minFilter !== n
          );
        }
        function _(e, i, n, a) {
          t.generateMipmap(e),
            (r.get(i).__maxMipLevel = Math.log(Math.max(n, a)) * Math.LOG2E);
        }
        function b(t, i) {
          if (!1 === l) return t;
          var n = t;
          return (
            6403 === t &&
              (5126 === i && (n = 33326),
              5131 === i && (n = 33325),
              5121 === i && (n = 33321)),
            6407 === t &&
              (5126 === i && (n = 34837),
              5131 === i && (n = 34843),
              5121 === i && (n = 32849)),
            6408 === t &&
              (5126 === i && (n = 34836),
              5131 === i && (n = 34842),
              5121 === i && (n = 32856)),
            (33325 !== n && 33326 !== n && 34842 !== n && 34836 !== n) ||
              e.get("EXT_color_buffer_float"),
            n
          );
        }
        function w(t) {
          return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729;
        }
        function M(e) {
          var i = e.target;
          i.removeEventListener("dispose", M),
            (function (e) {
              var i = r.get(e);
              if (void 0 === i.__webglInit) return;
              t.deleteTexture(i.__webglTexture), r.remove(e);
            })(i),
            i.isVideoTexture && f.delete(i),
            c.memory.textures--;
        }
        function S(e) {
          var i = e.target;
          i.removeEventListener("dispose", S),
            (function (e) {
              var i = r.get(e),
                n = r.get(e.texture);
              if (!e) return;
              void 0 !== n.__webglTexture && t.deleteTexture(n.__webglTexture);
              e.depthTexture && e.depthTexture.dispose();
              if (e.isWebGLRenderTargetCube)
                for (var a = 0; a < 6; a++)
                  t.deleteFramebuffer(i.__webglFramebuffer[a]),
                    i.__webglDepthbuffer &&
                      t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
              else
                t.deleteFramebuffer(i.__webglFramebuffer),
                  i.__webglDepthbuffer &&
                    t.deleteRenderbuffer(i.__webglDepthbuffer);
              if (e.isWebGLMultiviewRenderTarget) {
                t.deleteTexture(i.__webglColorTexture),
                  t.deleteTexture(i.__webglDepthStencilTexture),
                  (c.memory.textures -= 2);
                a = 0;
                for (var o = i.__webglViewFramebuffers.length; a < o; a++)
                  t.deleteFramebuffer(i.__webglViewFramebuffers[a]);
              }
              r.remove(e.texture), r.remove(e);
            })(i),
            c.memory.textures--;
        }
        var A = 0;
        function T(t, e) {
          var n = r.get(t);
          if (
            (t.isVideoTexture &&
              (function (t) {
                var e = c.render.frame;
                f.get(t) !== e && (f.set(t, e), t.update());
              })(t),
            t.version > 0 && n.__version !== t.version)
          ) {
            var a = t.image;
            if (void 0 === a);
            else if (!1 !== a.complete) return void I(n, t, e);
          }
          i.activeTexture(33984 + e), i.bindTexture(3553, n.__webglTexture);
        }
        function L(e, n) {
          if (6 === e.image.length) {
            var a = r.get(e);
            if (e.version > 0 && a.__version !== e.version) {
              N(a, e),
                i.activeTexture(33984 + n),
                i.bindTexture(34067, a.__webglTexture),
                t.pixelStorei(37440, e.flipY);
              for (
                var s = e && e.isCompressedTexture,
                  c = e.image[0] && e.image[0].isDataTexture,
                  h = [],
                  p = 0;
                p < 6;
                p++
              )
                h[p] =
                  s || c
                    ? c
                      ? e.image[p].image
                      : e.image[p]
                    : g(e.image[p], !1, !0, u);
              var d,
                f = h[0],
                m = y(f) || l,
                v = o.convert(e.format),
                w = o.convert(e.type),
                M = b(v, w);
              if ((O(34067, e, m), s)) {
                for (p = 0; p < 6; p++) {
                  d = h[p].mipmaps;
                  for (var S = 0; S < d.length; S++) {
                    var A = d[S];
                    1023 !== e.format && 1022 !== e.format
                      ? null !== v &&
                        i.compressedTexImage2D(
                          34069 + p,
                          S,
                          M,
                          A.width,
                          A.height,
                          0,
                          A.data
                        )
                      : i.texImage2D(
                          34069 + p,
                          S,
                          M,
                          A.width,
                          A.height,
                          0,
                          v,
                          w,
                          A.data
                        );
                  }
                }
                a.__maxMipLevel = d.length - 1;
              } else {
                d = e.mipmaps;
                for (p = 0; p < 6; p++)
                  if (c) {
                    i.texImage2D(
                      34069 + p,
                      0,
                      M,
                      h[p].width,
                      h[p].height,
                      0,
                      v,
                      w,
                      h[p].data
                    );
                    for (S = 0; S < d.length; S++) {
                      var T = (A = d[S]).image[p].image;
                      i.texImage2D(
                        34069 + p,
                        S + 1,
                        M,
                        T.width,
                        T.height,
                        0,
                        v,
                        w,
                        T.data
                      );
                    }
                  } else {
                    i.texImage2D(34069 + p, 0, M, v, w, h[p]);
                    for (S = 0; S < d.length; S++) {
                      A = d[S];
                      i.texImage2D(34069 + p, S + 1, M, v, w, A.image[p]);
                    }
                  }
                a.__maxMipLevel = d.length;
              }
              x(e, m) && _(34067, e, f.width, f.height),
                (a.__version = e.version),
                e.onUpdate && e.onUpdate(e);
            } else
              i.activeTexture(33984 + n),
                i.bindTexture(34067, a.__webglTexture);
          }
        }
        function P(t, e) {
          i.activeTexture(33984 + e),
            i.bindTexture(34067, r.get(t).__webglTexture);
        }
        var C = { 1e3: 10497, 1001: 33071, 1002: 33648 },
          E = {
            1003: 9728,
            1004: 9984,
            1005: 9986,
            [n]: 9729,
            1007: 9985,
            1008: 9987,
          };
        function O(i, n, o) {
          o
            ? (t.texParameteri(i, 10242, C[n.wrapS]),
              t.texParameteri(i, 10243, C[n.wrapT]),
              (32879 !== i && 35866 !== i) ||
                t.texParameteri(i, 32882, C[n.wrapR]),
              t.texParameteri(i, 10240, E[n.magFilter]),
              t.texParameteri(i, 10241, E[n.minFilter]))
            : (t.texParameteri(i, 10242, 33071),
              t.texParameteri(i, 10243, 33071),
              (32879 !== i && 35866 !== i) || t.texParameteri(i, 32882, 33071),
              1001 !== n.wrapS || n.wrapT,
              t.texParameteri(i, 10240, w(n.magFilter)),
              t.texParameteri(i, 10241, w(n.minFilter)),
              1003 !== n.minFilter && n.minFilter);
          var s = e.get("EXT_texture_filter_anisotropic");
          if (s) {
            if (1015 === n.type && null === e.get("OES_texture_float_linear"))
              return;
            if (
              1016 === n.type &&
              null === (l || e.get("OES_texture_half_float_linear"))
            )
              return;
            (n.anisotropy > 1 || r.get(n).__currentAnisotropy) &&
              (t.texParameterf(
                i,
                s.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(n.anisotropy, a.getMaxAnisotropy())
              ),
              (r.get(n).__currentAnisotropy = n.anisotropy));
          }
        }
        function N(e, i) {
          void 0 === e.__webglInit &&
            ((e.__webglInit = !0),
            i.addEventListener("dispose", M),
            (e.__webglTexture = t.createTexture()),
            c.memory.textures++);
        }
        function I(e, r, a) {
          var s = 3553;
          r.isDataTexture2DArray && (s = 35866),
            r.isDataTexture3D && (s = 32879),
            N(e, r),
            i.activeTexture(33984 + a),
            i.bindTexture(s, e.__webglTexture),
            t.pixelStorei(37440, r.flipY),
            t.pixelStorei(37441, r.premultiplyAlpha),
            t.pixelStorei(3317, r.unpackAlignment);
          var c =
              (function (t) {
                return (
                  !l &&
                  (1001 !== t.wrapS ||
                    1001 !== t.wrapT ||
                    (1003 !== t.minFilter && t.minFilter !== n))
                );
              })(r) && !1 === y(r.image),
            h = g(r.image, c, !1, p),
            u = y(h) || l,
            d = o.convert(r.format),
            f = o.convert(r.type),
            m = b(d, f);
          O(s, r, u);
          var v,
            w = r.mipmaps;
          if (r.isDepthTexture) {
            if (((m = 6402), 1015 === r.type)) {
              if (!1 === l)
                throw new Error(
                  "Float Depth Texture only supported in WebGL2.0"
                );
              m = 36012;
            } else l && (m = 33189);
            1026 === r.format &&
              6402 === m &&
              1012 !== r.type &&
              1014 !== r.type &&
              ((r.type = 1012), (f = o.convert(r.type))),
              1027 === r.format &&
                ((m = 34041),
                1020 !== r.type && ((r.type = 1020), (f = o.convert(r.type)))),
              i.texImage2D(3553, 0, m, h.width, h.height, 0, d, f, null);
          } else if (r.isDataTexture)
            if (w.length > 0 && u) {
              for (var M = 0, S = w.length; M < S; M++)
                (v = w[M]),
                  i.texImage2D(3553, M, m, v.width, v.height, 0, d, f, v.data);
              (r.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
            } else
              i.texImage2D(3553, 0, m, h.width, h.height, 0, d, f, h.data),
                (e.__maxMipLevel = 0);
          else if (r.isCompressedTexture) {
            for (M = 0, S = w.length; M < S; M++)
              (v = w[M]),
                1023 !== r.format && 1022 !== r.format
                  ? null !== d &&
                    i.compressedTexImage2D(
                      3553,
                      M,
                      m,
                      v.width,
                      v.height,
                      0,
                      v.data
                    )
                  : i.texImage2D(
                      3553,
                      M,
                      m,
                      v.width,
                      v.height,
                      0,
                      d,
                      f,
                      v.data
                    );
            e.__maxMipLevel = w.length - 1;
          } else if (r.isDataTexture2DArray)
            i.texImage3D(
              35866,
              0,
              m,
              h.width,
              h.height,
              h.depth,
              0,
              d,
              f,
              h.data
            ),
              (e.__maxMipLevel = 0);
          else if (r.isDataTexture3D)
            i.texImage3D(
              32879,
              0,
              m,
              h.width,
              h.height,
              h.depth,
              0,
              d,
              f,
              h.data
            ),
              (e.__maxMipLevel = 0);
          else if (w.length > 0 && u) {
            for (M = 0, S = w.length; M < S; M++)
              (v = w[M]), i.texImage2D(3553, M, m, d, f, v);
            (r.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
          } else i.texImage2D(3553, 0, m, d, f, h), (e.__maxMipLevel = 0);
          x(r, u) && _(3553, r, h.width, h.height),
            (e.__version = r.version),
            r.onUpdate && r.onUpdate(r);
        }
        function D(e, n, a, s) {
          var c = o.convert(n.texture.format),
            h = o.convert(n.texture.type),
            l = b(c, h);
          i.texImage2D(s, 0, l, n.width, n.height, 0, c, h, null),
            t.bindFramebuffer(36160, e),
            t.framebufferTexture2D(
              36160,
              a,
              s,
              r.get(n.texture).__webglTexture,
              0
            ),
            t.bindFramebuffer(36160, null);
        }
        function z(e, i, n) {
          if (
            (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer)
          ) {
            if (n) {
              var r = F(i);
              t.renderbufferStorageMultisample(
                36161,
                r,
                33189,
                i.width,
                i.height
              );
            } else t.renderbufferStorage(36161, 33189, i.width, i.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e);
          } else if (i.depthBuffer && i.stencilBuffer) {
            if (n) {
              r = F(i);
              t.renderbufferStorageMultisample(
                36161,
                r,
                35056,
                i.width,
                i.height
              );
            } else t.renderbufferStorage(36161, 34041, i.width, i.height);
            t.framebufferRenderbuffer(36160, 33306, 36161, e);
          } else {
            var a = b(o.convert(i.texture.format), o.convert(i.texture.type));
            if (n) {
              r = F(i);
              t.renderbufferStorageMultisample(36161, r, a, i.width, i.height);
            } else t.renderbufferStorage(36161, a, i.width, i.height);
          }
          t.bindRenderbuffer(36161, null);
        }
        function R(e) {
          var i = r.get(e),
            n = !0 === e.isWebGLRenderTargetCube;
          if (e.depthTexture) {
            if (n)
              throw new Error(
                "target.depthTexture not supported in Cube render targets"
              );
            !(function (e, i) {
              if (i && i.isWebGLRenderTargetCube)
                throw new Error(
                  "Depth Texture with cube render targets is not supported"
                );
              if (
                (t.bindFramebuffer(36160, e),
                !i.depthTexture || !i.depthTexture.isDepthTexture)
              )
                throw new Error(
                  "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
                );
              (r.get(i.depthTexture).__webglTexture &&
                i.depthTexture.image.width === i.width &&
                i.depthTexture.image.height === i.height) ||
                ((i.depthTexture.image.width = i.width),
                (i.depthTexture.image.height = i.height),
                (i.depthTexture.needsUpdate = !0)),
                T(i.depthTexture, 0);
              var n = r.get(i.depthTexture).__webglTexture;
              if (1026 === i.depthTexture.format)
                t.framebufferTexture2D(36160, 36096, 3553, n, 0);
              else {
                if (1027 !== i.depthTexture.format)
                  throw new Error("Unknown depthTexture format");
                t.framebufferTexture2D(36160, 33306, 3553, n, 0);
              }
            })(i.__webglFramebuffer, e);
          } else if (n) {
            i.__webglDepthbuffer = [];
            for (var a = 0; a < 6; a++)
              t.bindFramebuffer(36160, i.__webglFramebuffer[a]),
                (i.__webglDepthbuffer[a] = t.createRenderbuffer()),
                z(i.__webglDepthbuffer[a], e);
          } else
            t.bindFramebuffer(36160, i.__webglFramebuffer),
              (i.__webglDepthbuffer = t.createRenderbuffer()),
              z(i.__webglDepthbuffer, e);
          t.bindFramebuffer(36160, null);
        }
        function F(t) {
          return l && t.isWebGLMultisampleRenderTarget
            ? Math.min(d, t.samples)
            : 0;
        }
        var U = !1,
          B = !1;
        (this.allocateTextureUnit = function () {
          var t = A;
          return (A += 1), t;
        }),
          (this.resetTextureUnits = function () {
            A = 0;
          }),
          (this.setTexture2D = T),
          (this.setTexture2DArray = function (t, e) {
            var n = r.get(t);
            t.version > 0 && n.__version !== t.version
              ? I(n, t, e)
              : (i.activeTexture(33984 + e),
                i.bindTexture(35866, n.__webglTexture));
          }),
          (this.setTexture3D = function (t, e) {
            var n = r.get(t);
            t.version > 0 && n.__version !== t.version
              ? I(n, t, e)
              : (i.activeTexture(33984 + e),
                i.bindTexture(32879, n.__webglTexture));
          }),
          (this.setTextureCube = L),
          (this.setTextureCubeDynamic = P),
          (this.setupRenderTarget = function (n) {
            var a = r.get(n),
              s = r.get(n.texture);
            n.addEventListener("dispose", S),
              (s.__webglTexture = t.createTexture()),
              c.memory.textures++;
            var h = !0 === n.isWebGLRenderTargetCube,
              u = !0 === n.isWebGLMultisampleRenderTarget,
              p = !0 === n.isWebGLMultiviewRenderTarget,
              d = y(n) || l;
            if (h) {
              a.__webglFramebuffer = [];
              for (var f = 0; f < 6; f++)
                a.__webglFramebuffer[f] = t.createFramebuffer();
            } else if (((a.__webglFramebuffer = t.createFramebuffer()), u)) {
              if (l) {
                (a.__webglMultisampledFramebuffer = t.createFramebuffer()),
                  (a.__webglColorRenderbuffer = t.createRenderbuffer()),
                  t.bindRenderbuffer(36161, a.__webglColorRenderbuffer);
                var m = b(
                    o.convert(n.texture.format),
                    o.convert(n.texture.type)
                  ),
                  v = F(n);
                t.renderbufferStorageMultisample(
                  36161,
                  v,
                  m,
                  n.width,
                  n.height
                ),
                  t.bindFramebuffer(36160, a.__webglMultisampledFramebuffer),
                  t.framebufferRenderbuffer(
                    36160,
                    36064,
                    36161,
                    a.__webglColorRenderbuffer
                  ),
                  t.bindRenderbuffer(36161, null),
                  n.depthBuffer &&
                    ((a.__webglDepthRenderbuffer = t.createRenderbuffer()),
                    z(a.__webglDepthRenderbuffer, n, !0)),
                  t.bindFramebuffer(36160, null);
              }
            } else if (p) {
              var g = n.width,
                w = n.height,
                M = n.numViews;
              t.bindFramebuffer(36160, a.__webglFramebuffer);
              var A = e.get("OVR_multiview2");
              c.memory.textures += 2;
              var T = t.createTexture();
              t.bindTexture(35866, T),
                t.texParameteri(35866, 10240, 9728),
                t.texParameteri(35866, 10241, 9728),
                t.texImage3D(35866, 0, 32856, g, w, M, 0, 6408, 5121, null),
                A.framebufferTextureMultiviewOVR(36160, 36064, T, 0, 0, M);
              var L = t.createTexture();
              t.bindTexture(35866, L),
                t.texParameteri(35866, 10240, 9728),
                t.texParameteri(35866, 10241, 9728),
                t.texImage3D(35866, 0, 35056, g, w, M, 0, 34041, 34042, null),
                A.framebufferTextureMultiviewOVR(36160, 33306, L, 0, 0, M);
              var P = new Array(M);
              for (f = 0; f < M; ++f)
                (P[f] = t.createFramebuffer()),
                  t.bindFramebuffer(36160, P[f]),
                  t.framebufferTextureLayer(36160, 36064, T, 0, f);
              (a.__webglColorTexture = T),
                (a.__webglDepthStencilTexture = L),
                (a.__webglViewFramebuffers = P),
                t.bindFramebuffer(36160, null),
                t.bindTexture(35866, null);
            }
            if (h) {
              i.bindTexture(34067, s.__webglTexture), O(34067, n.texture, d);
              for (f = 0; f < 6; f++)
                D(a.__webglFramebuffer[f], n, 36064, 34069 + f);
              x(n.texture, d) && _(34067, n.texture, n.width, n.height),
                i.bindTexture(34067, null);
            } else
              p ||
                (i.bindTexture(3553, s.__webglTexture),
                O(3553, n.texture, d),
                D(a.__webglFramebuffer, n, 36064, 3553),
                x(n.texture, d) && _(3553, n.texture, n.width, n.height),
                i.bindTexture(3553, null));
            n.depthBuffer && R(n);
          }),
          (this.updateRenderTargetMipmap = function (t) {
            var e = t.texture;
            if (x(e, y(t) || l)) {
              var n = t.isWebGLRenderTargetCube ? 34067 : 3553,
                a = r.get(e).__webglTexture;
              i.bindTexture(n, a),
                _(n, e, t.width, t.height),
                i.bindTexture(n, null);
            }
          }),
          (this.updateMultisampleRenderTarget = function (e) {
            if (e.isWebGLMultisampleRenderTarget && l) {
              var i = r.get(e);
              t.bindFramebuffer(36008, i.__webglMultisampledFramebuffer),
                t.bindFramebuffer(36009, i.__webglFramebuffer);
              var n = e.width,
                a = e.height,
                o = 16384;
              e.depthBuffer && (o |= 256),
                e.stencilBuffer && (o |= 1024),
                t.blitFramebuffer(0, 0, n, a, 0, 0, n, a, o, 9728);
            }
          }),
          (this.safeSetTexture2D = function (t, e) {
            t &&
              t.isWebGLRenderTarget &&
              (!1 === U && (U = !0), (t = t.texture)),
              T(t, e);
          }),
          (this.safeSetTextureCube = function (t, e) {
            t &&
              t.isWebGLRenderTargetCube &&
              (!1 === B && (B = !0), (t = t.texture)),
              (t && t.isCubeTexture) ||
              (Array.isArray(t.image) && 6 === t.image.length)
                ? L(t, e)
                : P(t, e);
          });
      }
      function Wn(t, e, i) {
        var n = i.isWebGL2;
        return {
          convert: function (t) {
            var i;
            if (1009 === t) return 5121;
            if (1017 === t) return 32819;
            if (1018 === t) return 32820;
            if (1019 === t) return 33635;
            if (1010 === t) return 5120;
            if (1011 === t) return 5122;
            if (1012 === t) return 5123;
            if (1013 === t) return 5124;
            if (1014 === t) return 5125;
            if (1015 === t) return 5126;
            if (1016 === t)
              return n
                ? 5131
                : null !== (i = e.get("OES_texture_half_float"))
                ? i.HALF_FLOAT_OES
                : null;
            if (1021 === t) return 6406;
            if (1022 === t) return 6407;
            if (1023 === t) return 6408;
            if (1024 === t) return 6409;
            if (1025 === t) return 6410;
            if (1026 === t) return 6402;
            if (1027 === t) return 34041;
            if (1028 === t) return 6403;
            if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
              if (null === (i = e.get("WEBGL_compressed_texture_s3tc")))
                return null;
              if (33776 === t) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
              if (33777 === t) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
              if (33778 === t) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              if (33779 === t) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
            if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
              if (null === (i = e.get("WEBGL_compressed_texture_pvrtc")))
                return null;
              if (35840 === t) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (35841 === t) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (35842 === t) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (35843 === t) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            return 36196 === t
              ? null !== (i = e.get("WEBGL_compressed_texture_etc1"))
                ? i.COMPRESSED_RGB_ETC1_WEBGL
                : null
              : 37808 === t ||
                37809 === t ||
                37810 === t ||
                37811 === t ||
                37812 === t ||
                37813 === t ||
                37814 === t ||
                37815 === t ||
                37816 === t ||
                37817 === t ||
                37818 === t ||
                37819 === t ||
                37820 === t ||
                37821 === t
              ? null !== (i = e.get("WEBGL_compressed_texture_astc"))
                ? t
                : null
              : 1020 === t
              ? n
                ? 34042
                : null !== (i = e.get("WEBGL_depth_texture"))
                ? i.UNSIGNED_INT_24_8_WEBGL
                : null
              : void 0;
          },
        };
      }
      function Hn(t, e, i, n) {
        _.call(this, t, e, n),
          (this.depthBuffer = !1),
          (this.stencilBuffer = !1),
          (this.numViews = i);
      }
      function qn(t, e) {
        var i,
          n,
          r,
          a,
          o,
          s,
          h,
          l = t.extensions,
          u = t.properties,
          p = 0;
        function d(t) {
          return t.isArrayCamera ? t.cameras : ((o[0] = t), o);
        }
        (this.isAvailable = function () {
          if (void 0 === h) {
            var t = l.get("OVR_multiview2");
            if ((h = null !== t && !1 === e.getContextAttributes().antialias)) {
              (p = e.getParameter(t.MAX_VIEWS_OVR)),
                (i = new Hn(0, 0, 2)),
                (s = new c()),
                (a = []),
                (r = []),
                (o = []);
              for (var n = 0; n < p; n++) (a[n] = new C()), (r[n] = new m());
            }
          }
          return h;
        }),
          (this.attachCamera = function (e) {
            !1 !==
              (function (t) {
                if (void 0 === t.isArrayCamera) return !0;
                var e = t.cameras;
                if (e.length > p) return !1;
                for (var i = 1, n = e.length; i < n; i++)
                  if (
                    e[0].viewport.z !== e[i].viewport.z ||
                    e[0].viewport.w !== e[i].viewport.w
                  )
                    return !1;
                return !0;
              })(e) &&
              ((n = t.getRenderTarget()),
              (function (e) {
                if (
                  (n ? s.set(n.width, n.height) : t.getDrawingBufferSize(s),
                  e.isArrayCamera)
                ) {
                  var r = e.cameras[0].viewport;
                  i.setSize(r.z, r.w), i.setNumViews(e.cameras.length);
                } else i.setSize(s.x, s.y), i.setNumViews(2);
              })(e),
              t.setRenderTarget(i));
          }),
          (this.detachCamera = function (r) {
            i === t.getRenderTarget() &&
              (t.setRenderTarget(n),
              (function (t) {
                var n = i,
                  r = n.numViews,
                  a = u.get(n).__webglViewFramebuffers,
                  o = n.width,
                  c = n.height;
                if (t.isArrayCamera)
                  for (var h = 0; h < r; h++) {
                    var l = t.cameras[h].viewport,
                      p = l.x,
                      d = l.y,
                      f = p + l.z,
                      m = d + l.w;
                    e.bindFramebuffer(36008, a[h]),
                      e.blitFramebuffer(0, 0, o, c, p, d, f, m, 16384, 9728);
                  }
                else
                  e.bindFramebuffer(36008, a[0]),
                    e.blitFramebuffer(0, 0, o, c, 0, 0, s.x, s.y, 16384, 9728);
              })(r));
          }),
          (this.updateCameraProjectionMatricesUniform = function (t, i) {
            for (var n = d(t), r = 0; r < n.length; r++)
              a[r].copy(n[r].projectionMatrix);
            i.setValue(e, "projectionMatrices", a);
          }),
          (this.updateCameraViewMatricesUniform = function (t, i) {
            for (var n = d(t), r = 0; r < n.length; r++)
              a[r].copy(n[r].matrixWorldInverse);
            i.setValue(e, "viewMatrices", a);
          }),
          (this.updateObjectMatricesUniforms = function (t, i, n) {
            for (var o = d(i), s = 0; s < o.length; s++)
              a[s].multiplyMatrices(o[s].matrixWorldInverse, t.matrixWorld),
                r[s].getNormalMatrix(a[s]);
            n.setValue(e, "modelViewMatrices", a),
              n.setValue(e, "normalMatrices", r);
          });
      }
      function Xn() {
        X.call(this), (this.type = "Group");
      }
      function Yn(t) {
        Ge.call(this), (this.cameras = t || []);
      }
      (Hn.prototype = Object.assign(Object.create(_.prototype), {
        constructor: Hn,
        isWebGLMultiviewRenderTarget: !0,
        copy: function (t) {
          return (
            _.prototype.copy.call(this, t), (this.numViews = t.numViews), this
          );
        },
        setNumViews: function (t) {
          return (
            this.numViews !== t && ((this.numViews = t), this.dispose()), this
          );
        },
      })),
        (Xn.prototype = Object.assign(Object.create(X.prototype), {
          constructor: Xn,
          isGroup: !0,
        })),
        (Yn.prototype = Object.assign(Object.create(Ge.prototype), {
          constructor: Yn,
          isArrayCamera: !0,
        }));
      var Jn,
        Zn = new p(),
        Qn = new p();
      function Kn(t, e, i) {
        Zn.setFromMatrixPosition(e.matrixWorld),
          Qn.setFromMatrixPosition(i.matrixWorld);
        var n = Zn.distanceTo(Qn),
          r = e.projectionMatrix.elements,
          a = i.projectionMatrix.elements,
          o = r[14] / (r[10] - 1),
          s = r[14] / (r[10] + 1),
          c = (r[9] + 1) / r[5],
          h = (r[9] - 1) / r[5],
          l = (r[8] - 1) / r[0],
          u = (a[8] + 1) / a[0],
          p = o * l,
          d = o * u,
          f = n / (-l + u),
          m = f * -l;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
          t.translateX(m),
          t.translateZ(f),
          t.matrixWorld.compose(t.position, t.quaternion, t.scale),
          t.matrixWorldInverse.getInverse(t.matrixWorld);
        var v = o + f,
          g = s + f,
          y = p - m,
          x = d + (n - m),
          _ = ((c * s) / g) * v,
          b = ((h * s) / g) * v;
        t.projectionMatrix.makePerspective(y, x, _, b, v, g);
      }
      function $n(t) {
        var e,
          i,
          n = this,
          r = null,
          a = null,
          o = null,
          s = [],
          l = new C(),
          u = new C(),
          d = 1,
          f = "local-floor";
        "undefined" != typeof window &&
          "VRFrameData" in window &&
          ((a = new window.VRFrameData()),
          window.addEventListener("vrdisplaypresentchange", A, !1));
        var m = new C(),
          v = new h(),
          g = new p(),
          y = new Ge();
        (y.viewport = new x()), y.layers.enable(1);
        var _ = new Ge();
        (_.viewport = new x()), _.layers.enable(2);
        var b = new Yn([y, _]);
        function w() {
          return null !== r && !0 === r.isPresenting;
        }
        b.layers.enable(1), b.layers.enable(2);
        var M,
          S = new c();
        function A() {
          if (w()) {
            var a = r.getEyeParameters("left");
            (e = 2 * a.renderWidth * d),
              (i = a.renderHeight * d),
              (M = t.getPixelRatio()),
              t.getSize(S),
              t.setDrawingBufferSize(e, i, 1),
              y.viewport.set(0, 0, e / 2, i),
              _.viewport.set(e / 2, 0, e / 2, i),
              E.start(),
              n.dispatchEvent({ type: "sessionstart" });
          } else
            n.enabled && t.setDrawingBufferSize(S.width, S.height, M),
              E.stop(),
              n.dispatchEvent({ type: "sessionend" });
        }
        var T = [];
        function L(t) {
          for (
            var e = navigator.getGamepads && navigator.getGamepads(),
              i = 0,
              n = e.length;
            i < n;
            i++
          ) {
            var r = e[i];
            if (
              r &&
              ("Daydream Controller" === r.id ||
                "Gear VR Controller" === r.id ||
                "Oculus Go Controller" === r.id ||
                "OpenVR Gamepad" === r.id ||
                r.id.startsWith("Oculus Touch") ||
                r.id.startsWith("HTC Vive Focus") ||
                r.id.startsWith("Spatial Controller"))
            ) {
              var a = r.hand;
              if (0 === t && ("" === a || "right" === a)) return r;
              if (1 === t && "left" === a) return r;
            }
          }
        }
        function P(t, n) {
          null !== n &&
            4 === n.length &&
            t.set(n[0] * e, n[1] * i, n[2] * e, n[3] * i);
        }
        (this.enabled = !1),
          (this.getController = function (t) {
            var e = s[t];
            return (
              void 0 === e &&
                (((e = new Xn()).matrixAutoUpdate = !1),
                (e.visible = !1),
                (s[t] = e)),
              e
            );
          }),
          (this.getDevice = function () {
            return r;
          }),
          (this.setDevice = function (t) {
            void 0 !== t && (r = t), E.setContext(t);
          }),
          (this.setFramebufferScaleFactor = function (t) {
            d = t;
          }),
          (this.setReferenceSpaceType = function (t) {
            f = t;
          }),
          (this.setPoseTarget = function (t) {
            void 0 !== t && (o = t);
          }),
          (this.getCamera = function (t) {
            var e = "local-floor" === f ? 1.6 : 0;
            if (!1 === w())
              return t.position.set(0, e, 0), t.rotation.set(0, 0, 0), t;
            if (
              ((r.depthNear = t.near),
              (r.depthFar = t.far),
              r.getFrameData(a),
              "local-floor" === f)
            ) {
              var i = r.stageParameters;
              i
                ? l.fromArray(i.sittingToStandingTransform)
                : l.makeTranslation(0, e, 0);
            }
            var n = a.pose,
              c = null !== o ? o : t;
            c.matrix.copy(l),
              c.matrix.decompose(c.position, c.quaternion, c.scale),
              null !== n.orientation &&
                (v.fromArray(n.orientation), c.quaternion.multiply(v)),
              null !== n.position &&
                (v.setFromRotationMatrix(l),
                g.fromArray(n.position),
                g.applyQuaternion(v),
                c.position.add(g)),
              c.updateMatrixWorld(),
              (y.near = t.near),
              (_.near = t.near),
              (y.far = t.far),
              (_.far = t.far),
              y.matrixWorldInverse.fromArray(a.leftViewMatrix),
              _.matrixWorldInverse.fromArray(a.rightViewMatrix),
              u.getInverse(l),
              "local-floor" === f &&
                (y.matrixWorldInverse.multiply(u),
                _.matrixWorldInverse.multiply(u));
            var h = c.parent;
            null !== h &&
              (m.getInverse(h.matrixWorld),
              y.matrixWorldInverse.multiply(m),
              _.matrixWorldInverse.multiply(m)),
              y.matrixWorld.getInverse(y.matrixWorldInverse),
              _.matrixWorld.getInverse(_.matrixWorldInverse),
              y.projectionMatrix.fromArray(a.leftProjectionMatrix),
              _.projectionMatrix.fromArray(a.rightProjectionMatrix),
              Kn(b, y, _);
            var p = r.getLayers();
            if (p.length) {
              var d = p[0];
              P(y.viewport, d.leftBounds), P(_.viewport, d.rightBounds);
            }
            return (
              (function () {
                for (var t = 0; t < s.length; t++) {
                  var e = s[t],
                    i = L(t);
                  if (void 0 !== i && void 0 !== i.pose) {
                    if (null === i.pose) return;
                    var n = i.pose;
                    !1 === n.hasPosition && e.position.set(0.2, -0.6, -0.05),
                      null !== n.position && e.position.fromArray(n.position),
                      null !== n.orientation &&
                        e.quaternion.fromArray(n.orientation),
                      e.matrix.compose(e.position, e.quaternion, e.scale),
                      e.matrix.premultiply(l),
                      e.matrix.decompose(e.position, e.quaternion, e.scale),
                      (e.matrixWorldNeedsUpdate = !0),
                      (e.visible = !0);
                    var r = "Daydream Controller" === i.id ? 0 : 1;
                    void 0 === T[t] && (T[t] = !1),
                      T[t] !== i.buttons[r].pressed &&
                        ((T[t] = i.buttons[r].pressed),
                        !0 === T[t]
                          ? e.dispatchEvent({ type: "selectstart" })
                          : (e.dispatchEvent({ type: "selectend" }),
                            e.dispatchEvent({ type: "select" })));
                  } else e.visible = !1;
                }
              })(),
              b
            );
          }),
          (this.getStandingMatrix = function () {
            return l;
          }),
          (this.isPresenting = w);
        var E = new Qe();
        (this.setAnimationLoop = function (t) {
          E.setAnimationLoop(t), w() && E.start();
        }),
          (this.submitFrame = function () {
            w() && r.submitFrame();
          }),
          (this.dispose = function () {
            "undefined" != typeof window &&
              window.removeEventListener("vrdisplaypresentchange", A);
          }),
          (this.setFrameOfReferenceType = function () {});
      }
      function tr(t, e) {
        var i = this,
          n = null,
          r = null,
          a = "local-floor",
          o = null,
          s = [],
          c = [];
        function h() {
          return null !== n && null !== r;
        }
        var l = new Ge();
        l.layers.enable(1), (l.viewport = new x());
        var u = new Ge();
        u.layers.enable(2), (u.viewport = new x());
        var p = new Yn([l, u]);
        function d(t) {
          for (var e = 0; e < s.length; e++)
            c[e] === t.inputSource && s[e].dispatchEvent({ type: t.type });
        }
        function f() {
          t.setFramebuffer(null),
            t.setRenderTarget(t.getRenderTarget()),
            b.stop(),
            i.dispatchEvent({ type: "sessionend" });
        }
        function m(t) {
          (r = t),
            b.setContext(n),
            b.start(),
            i.dispatchEvent({ type: "sessionstart" });
        }
        function v() {
          for (var t = 0; t < s.length; t++) c[t] = g(t);
        }
        function g(t) {
          for (var e = n.inputSources, i = 0; i < e.length; i++) {
            var r = e[i],
              a = r.handedness;
            if (0 === t && ("none" === a || "right" === a)) return r;
            if (1 === t && "left" === a) return r;
          }
        }
        function y(t, e) {
          null === e
            ? t.matrixWorld.copy(t.matrix)
            : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.getInverse(t.matrixWorld);
        }
        p.layers.enable(1),
          p.layers.enable(2),
          (this.enabled = !1),
          (this.getController = function (t) {
            var e = s[t];
            return (
              void 0 === e &&
                (((e = new Xn()).matrixAutoUpdate = !1),
                (e.visible = !1),
                (s[t] = e)),
              e
            );
          }),
          (this.setFramebufferScaleFactor = function () {}),
          (this.setReferenceSpaceType = function (t) {
            a = t;
          }),
          (this.getSession = function () {
            return n;
          }),
          (this.setSession = function (t) {
            null !== (n = t) &&
              (n.addEventListener("select", d),
              n.addEventListener("selectstart", d),
              n.addEventListener("selectend", d),
              n.addEventListener("end", f),
              n.updateRenderState({ baseLayer: new XRWebGLLayer(n, e) }),
              n.requestReferenceSpace(a).then(m),
              n.addEventListener("inputsourceschange", v),
              v());
          }),
          (this.getCamera = function (t) {
            if (h()) {
              var e = t.parent,
                i = p.cameras;
              y(p, e);
              for (var n = 0; n < i.length; n++) y(i[n], e);
              t.matrixWorld.copy(p.matrixWorld);
              for (var r = t.children, a = ((n = 0), r.length); n < a; n++)
                r[n].updateMatrixWorld(!0);
              return Kn(p, l, u), p;
            }
            return t;
          }),
          (this.isPresenting = h);
        var _ = null;
        var b = new Qe();
        b.setAnimationLoop(function (e, i) {
          if (null !== (o = i.getViewerPose(r))) {
            var a = o.views,
              h = n.renderState.baseLayer;
            t.setFramebuffer(h.framebuffer);
            for (var l = 0; l < a.length; l++) {
              var u = a[l],
                d = h.getViewport(u),
                f = u.transform.inverse.matrix,
                m = p.cameras[l];
              m.matrix.fromArray(f).getInverse(m.matrix),
                m.projectionMatrix.fromArray(u.projectionMatrix),
                m.viewport.set(d.x, d.y, d.width, d.height),
                0 === l && p.matrix.copy(m.matrix);
            }
          }
          for (l = 0; l < s.length; l++) {
            var v = s[l],
              g = c[l];
            if (g) {
              var y = i.getPose(g.targetRaySpace, r);
              if (null !== y) {
                v.matrix.fromArray(y.transform.matrix),
                  v.matrix.decompose(v.position, v.rotation, v.scale),
                  (v.visible = !0);
                continue;
              }
            }
            v.visible = !1;
          }
          _ && _(e);
        }),
          (this.setAnimationLoop = function (t) {
            _ = t;
          }),
          (this.dispose = function () {}),
          (this.getStandingMatrix = function () {
            return new C();
          }),
          (this.getDevice = function () {}),
          (this.setDevice = function () {}),
          (this.setFrameOfReferenceType = function () {}),
          (this.submitFrame = function () {});
      }
      function er(t) {
        var e =
            void 0 !== (t = t || {}).canvas
              ? t.canvas
              : document.createElementNS(
                  "http://www.w3.org/1999/xhtml",
                  "canvas"
                ),
          i = void 0 !== t.context ? t.context : null,
          n = void 0 !== t.alpha && t.alpha,
          r = void 0 === t.depth || t.depth,
          a = void 0 === t.stencil || t.stencil,
          o = void 0 !== t.antialias && t.antialias,
          h = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          u = void 0 !== t.powerPreference ? t.powerPreference : "default",
          d =
            void 0 !== t.failIfMajorPerformanceCaveat &&
            t.failIfMajorPerformanceCaveat,
          f = null,
          m = null;
        (this.domElement = e),
          (this.debug = { checkShaderErrors: !0 }),
          (this.autoClear = !0),
          (this.autoClearColor = !0),
          (this.autoClearDepth = !0),
          (this.autoClearStencil = !0),
          (this.sortObjects = !0),
          (this.clippingPlanes = []),
          (this.localClippingEnabled = !1),
          (this.gammaFactor = 2),
          (this.gammaInput = !1),
          (this.gammaOutput = !1),
          (this.physicallyCorrectLights = !1),
          (this.toneMapping = 1),
          (this.toneMappingExposure = 1),
          (this.toneMappingWhitePoint = 1),
          (this.maxMorphTargets = 8),
          (this.maxMorphNormals = 4);
        var v,
          g,
          y,
          _,
          b,
          w,
          M,
          S,
          A,
          T,
          L,
          P,
          E,
          O,
          N,
          I,
          D,
          z,
          R = this,
          F = !1,
          U = null,
          B = 0,
          V = 0,
          G = null,
          j = null,
          k = -1,
          W = { geometry: null, program: null, wireframe: !1 },
          H = null,
          q = null,
          X = new x(),
          Y = new x(),
          J = null,
          Z = e.width,
          Q = e.height,
          K = 1,
          $ = new x(0, 0, Z, Q),
          tt = new x(0, 0, Z, Q),
          et = !1,
          it = new Xe(),
          nt = new ri(),
          rt = !1,
          at = !1,
          ot = new C(),
          st = new p();
        function ct() {
          return null === G ? K : 1;
        }
        try {
          var ht = {
            alpha: n,
            depth: r,
            stencil: a,
            antialias: o,
            premultipliedAlpha: h,
            preserveDrawingBuffer: l,
            powerPreference: u,
            failIfMajorPerformanceCaveat: d,
            xrCompatible: !0,
          };
          if (
            (e.addEventListener("webglcontextlost", ft, !1),
            e.addEventListener("webglcontextrestored", mt, !1),
            null ===
              (v =
                i ||
                e.getContext("webgl", ht) ||
                e.getContext("experimental-webgl", ht)))
          )
            throw null !== e.getContext("webgl")
              ? new Error(
                  "Error creating WebGL context with your selected attributes."
                )
              : new Error("Error creating WebGL context.");
          void 0 === v.getShaderPrecisionFormat &&
            (v.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
        } catch (t) {
          throw t;
        }
        function lt() {
          (g = new ai(v)),
            !1 === (y = new ni(v, g, t)).isWebGL2 &&
              (g.get("WEBGL_depth_texture"),
              g.get("OES_texture_float"),
              g.get("OES_texture_half_float"),
              g.get("OES_texture_half_float_linear"),
              g.get("OES_standard_derivatives"),
              g.get("OES_element_index_uint"),
              g.get("ANGLE_instanced_arrays")),
            g.get("OES_texture_float_linear"),
            (z = new Wn(v, g, y)),
            (_ = new jn(v, g, y)).scissor(Y.copy(tt).multiplyScalar(K).floor()),
            _.viewport(X.copy($).multiplyScalar(K).floor()),
            (b = new ci(v)),
            (w = new Pn()),
            (M = new kn(v, g, _, w, y, z, b)),
            (S = new Ke(v)),
            (A = new oi(v, S, b)),
            (T = new ui(v, A, S, b)),
            (N = new li(v)),
            (L = new Ln(R, g, y)),
            (P = new Nn()),
            (E = new Un()),
            (O = new ei(R, _, T, h)),
            (I = new ii(v, g, b, y)),
            (D = new si(v, g, b, y)),
            (b.programs = L.programs),
            (R.capabilities = y),
            (R.extensions = g),
            (R.properties = w),
            (R.renderLists = P),
            (R.state = _),
            (R.info = b);
        }
        lt();
        var ut =
          "undefined" != typeof navigator &&
          "xr" in navigator &&
          "isSessionSupported" in navigator.xr
            ? new tr(R, v)
            : new $n(R);
        this.vr = ut;
        var pt = new qn(R, v),
          dt = new Gn(R, T, y.maxTextureSize);
        function ft(t) {
          t.preventDefault(), (F = !0);
        }
        function mt() {
          (F = !1), lt();
        }
        function vt(t) {
          var e = t.target;
          e.removeEventListener("dispose", vt),
            (function (t) {
              gt(t), w.remove(t);
            })(e);
        }
        function gt(t) {
          var e = w.get(t).program;
          (t.program = void 0), void 0 !== e && L.releaseProgram(e);
        }
        (this.shadowMap = dt),
          (this.getContext = function () {
            return v;
          }),
          (this.getContextAttributes = function () {
            return v.getContextAttributes();
          }),
          (this.forceContextLoss = function () {
            var t = g.get("WEBGL_lose_context");
            t && t.loseContext();
          }),
          (this.forceContextRestore = function () {
            var t = g.get("WEBGL_lose_context");
            t && t.restoreContext();
          }),
          (this.getPixelRatio = function () {
            return K;
          }),
          (this.setPixelRatio = function (t) {
            void 0 !== t && ((K = t), this.setSize(Z, Q, !1));
          }),
          (this.getSize = function (t) {
            return void 0 === t && (t = new c()), t.set(Z, Q);
          }),
          (this.setSize = function (t, i, n) {
            ut.isPresenting() ||
              ((Z = t),
              (Q = i),
              (e.width = Math.floor(t * K)),
              (e.height = Math.floor(i * K)),
              !1 !== n &&
                ((e.style.width = t + "px"), (e.style.height = i + "px")),
              this.setViewport(0, 0, t, i));
          }),
          (this.getDrawingBufferSize = function (t) {
            return void 0 === t && (t = new c()), t.set(Z * K, Q * K).floor();
          }),
          (this.setDrawingBufferSize = function (t, i, n) {
            (Z = t),
              (Q = i),
              (K = n),
              (e.width = Math.floor(t * n)),
              (e.height = Math.floor(i * n)),
              this.setViewport(0, 0, t, i);
          }),
          (this.getCurrentViewport = function (t) {
            return void 0 === t && (t = new x()), t.copy(X);
          }),
          (this.getViewport = function (t) {
            return t.copy($);
          }),
          (this.setViewport = function (t, e, i, n) {
            t.isVector4 ? $.set(t.x, t.y, t.z, t.w) : $.set(t, e, i, n),
              _.viewport(X.copy($).multiplyScalar(K).floor());
          }),
          (this.getScissor = function (t) {
            return t.copy(tt);
          }),
          (this.setScissor = function (t, e, i, n) {
            t.isVector4 ? tt.set(t.x, t.y, t.z, t.w) : tt.set(t, e, i, n),
              _.scissor(Y.copy(tt).multiplyScalar(K).floor());
          }),
          (this.getScissorTest = function () {
            return et;
          }),
          (this.setScissorTest = function (t) {
            _.setScissorTest((et = t));
          }),
          (this.getClearColor = function () {
            return O.getClearColor();
          }),
          (this.setClearColor = function () {
            O.setClearColor.apply(O, arguments);
          }),
          (this.getClearAlpha = function () {
            return O.getClearAlpha();
          }),
          (this.setClearAlpha = function () {
            O.setClearAlpha.apply(O, arguments);
          }),
          (this.clear = function (t, e, i) {
            var n = 0;
            (void 0 === t || t) && (n |= 16384),
              (void 0 === e || e) && (n |= 256),
              (void 0 === i || i) && (n |= 1024),
              v.clear(n);
          }),
          (this.clearColor = function () {
            this.clear(!0, !1, !1);
          }),
          (this.clearDepth = function () {
            this.clear(!1, !0, !1);
          }),
          (this.clearStencil = function () {
            this.clear(!1, !1, !0);
          }),
          (this.dispose = function () {
            e.removeEventListener("webglcontextlost", ft, !1),
              e.removeEventListener("webglcontextrestored", mt, !1),
              P.dispose(),
              E.dispose(),
              w.dispose(),
              T.dispose(),
              ut.dispose(),
              xt.stop();
          }),
          (this.renderBufferImmediate = function (t, e) {
            _.initAttributes();
            var i = w.get(t);
            t.hasPositions && !i.position && (i.position = v.createBuffer()),
              t.hasNormals && !i.normal && (i.normal = v.createBuffer()),
              t.hasUvs && !i.uv && (i.uv = v.createBuffer()),
              t.hasColors && !i.color && (i.color = v.createBuffer());
            var n = e.getAttributes();
            t.hasPositions &&
              (v.bindBuffer(34962, i.position),
              v.bufferData(34962, t.positionArray, 35048),
              _.enableAttribute(n.position),
              v.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)),
              t.hasNormals &&
                (v.bindBuffer(34962, i.normal),
                v.bufferData(34962, t.normalArray, 35048),
                _.enableAttribute(n.normal),
                v.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)),
              t.hasUvs &&
                (v.bindBuffer(34962, i.uv),
                v.bufferData(34962, t.uvArray, 35048),
                _.enableAttribute(n.uv),
                v.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)),
              t.hasColors &&
                (v.bindBuffer(34962, i.color),
                v.bufferData(34962, t.colorArray, 35048),
                _.enableAttribute(n.color),
                v.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)),
              _.disableUnusedAttributes(),
              v.drawArrays(4, 0, t.count),
              (t.count = 0);
          }),
          (this.renderBufferDirect = function (t, e, i, n, r, a) {
            var o = r.isMesh && r.matrixWorld.determinant() < 0;
            _.setMaterial(n, o);
            var s = St(t, e, n, r),
              c = !1;
            (W.geometry === i.id &&
              W.program === s.id &&
              W.wireframe === (!0 === n.wireframe)) ||
              ((W.geometry = i.id),
              (W.program = s.id),
              (W.wireframe = !0 === n.wireframe),
              (c = !0)),
              r.morphTargetInfluences && (N.update(r, i, n, s), (c = !0));
            var h,
              l = i.index,
              u = i.attributes.position,
              p = 1;
            !0 === n.wireframe && ((l = A.getWireframeAttribute(i)), (p = 2));
            var d = I;
            null !== l && ((h = S.get(l)), (d = D).setIndex(h)),
              c &&
                (!(function (t, e, i, n) {
                  if (
                    !1 === y.isWebGL2 &&
                    (t.isInstancedMesh || e.isInstancedBufferGeometry) &&
                    null === g.get("ANGLE_instanced_arrays")
                  )
                    return;
                  _.initAttributes();
                  var r = e.attributes,
                    a = n.getAttributes(),
                    o = i.defaultAttributeValues;
                  for (var s in a) {
                    var c = a[s];
                    if (c >= 0) {
                      var h = r[s];
                      if (void 0 !== h) {
                        var l = h.normalized,
                          u = h.itemSize;
                        if (void 0 === (w = S.get(h))) continue;
                        var p = w.buffer,
                          d = w.type,
                          f = w.bytesPerElement;
                        if (h.isInterleavedBufferAttribute) {
                          var m = h.data,
                            x = m.stride,
                            b = h.offset;
                          m && m.isInstancedInterleavedBuffer
                            ? (_.enableAttributeAndDivisor(
                                c,
                                m.meshPerAttribute
                              ),
                              void 0 === e.maxInstancedCount &&
                                (e.maxInstancedCount =
                                  m.meshPerAttribute * m.count))
                            : _.enableAttribute(c),
                            v.bindBuffer(34962, p),
                            v.vertexAttribPointer(c, u, d, l, x * f, b * f);
                        } else
                          h.isInstancedBufferAttribute
                            ? (_.enableAttributeAndDivisor(
                                c,
                                h.meshPerAttribute
                              ),
                              void 0 === e.maxInstancedCount &&
                                (e.maxInstancedCount =
                                  h.meshPerAttribute * h.count))
                            : _.enableAttribute(c),
                            v.bindBuffer(34962, p),
                            v.vertexAttribPointer(c, u, d, l, 0, 0);
                      } else if ("instanceMatrix" === s) {
                        var w;
                        if (void 0 === (w = S.get(t.instanceMatrix))) continue;
                        (p = w.buffer), (d = w.type);
                        _.enableAttributeAndDivisor(c + 0, 1),
                          _.enableAttributeAndDivisor(c + 1, 1),
                          _.enableAttributeAndDivisor(c + 2, 1),
                          _.enableAttributeAndDivisor(c + 3, 1),
                          v.bindBuffer(34962, p),
                          v.vertexAttribPointer(c + 0, 4, d, !1, 64, 0),
                          v.vertexAttribPointer(c + 1, 4, d, !1, 64, 16),
                          v.vertexAttribPointer(c + 2, 4, d, !1, 64, 32),
                          v.vertexAttribPointer(c + 3, 4, d, !1, 64, 48);
                      } else if (void 0 !== o) {
                        var M = o[s];
                        if (void 0 !== M)
                          switch (M.length) {
                            case 2:
                              v.vertexAttrib2fv(c, M);
                              break;
                            case 3:
                              v.vertexAttrib3fv(c, M);
                              break;
                            case 4:
                              v.vertexAttrib4fv(c, M);
                              break;
                            default:
                              v.vertexAttrib1fv(c, M);
                          }
                      }
                    }
                  }
                  _.disableUnusedAttributes();
                })(r, i, n, s),
                null !== l && v.bindBuffer(34963, h.buffer));
            var f = 1 / 0;
            null !== l ? (f = l.count) : void 0 !== u && (f = u.count);
            var m = i.drawRange.start * p,
              x = i.drawRange.count * p,
              b = null !== a ? a.start * p : 0,
              w = null !== a ? a.count * p : 1 / 0,
              M = Math.max(m, b),
              T = Math.min(f, m + x, b + w) - 1,
              L = Math.max(0, T - M + 1);
            if (0 !== L) {
              if (r.isMesh)
                if (!0 === n.wireframe)
                  _.setLineWidth(n.wireframeLinewidth * ct()), d.setMode(1);
                else
                  switch (r.drawMode) {
                    case 0:
                      d.setMode(4);
                      break;
                    case 1:
                      d.setMode(5);
                      break;
                    case 2:
                      d.setMode(6);
                  }
              else if (r.isLine) {
                var P = n.linewidth;
                void 0 === P && (P = 1),
                  _.setLineWidth(P * ct()),
                  r.isLineSegments
                    ? d.setMode(1)
                    : r.isLineLoop
                    ? d.setMode(2)
                    : d.setMode(3);
              } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
              r.isInstancedMesh
                ? d.renderInstances(i, M, L, r.count)
                : i.isInstancedBufferGeometry
                ? d.renderInstances(i, M, L, i.maxInstancedCount)
                : d.render(M, L);
            }
          }),
          (this.compile = function (t, e) {
            (m = E.get(t, e)).init(),
              t.traverse(function (t) {
                t.isLight && (m.pushLight(t), t.castShadow && m.pushShadow(t));
              }),
              m.setupLights(e),
              t.traverse(function (e) {
                if (e.material)
                  if (Array.isArray(e.material))
                    for (var i = 0; i < e.material.length; i++)
                      Mt(e.material[i], t.fog, e);
                  else Mt(e.material, t.fog, e);
              });
          });
        var yt = null;
        var xt = new Qe();
        function _t(t, e, i, n) {
          if (!1 !== t.visible) {
            if (t.layers.test(e.layers))
              if (t.isGroup) i = t.renderOrder;
              else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
              else if (t.isLight)
                m.pushLight(t), t.castShadow && m.pushShadow(t);
              else if (t.isSprite) {
                if (!t.frustumCulled || it.intersectsSprite(t)) {
                  n && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot);
                  var r = T.update(t);
                  (a = t.material).visible && f.push(t, r, a, i, st.z, null);
                }
              } else if (t.isImmediateRenderObject)
                n && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot),
                  f.push(t, null, t.material, i, st.z, null);
              else if (
                (t.isMesh || t.isLine || t.isPoints) &&
                (t.isSkinnedMesh &&
                  t.skeleton.frame !== b.render.frame &&
                  (t.skeleton.update(), (t.skeleton.frame = b.render.frame)),
                !t.frustumCulled || it.intersectsObject(t))
              ) {
                n && st.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ot);
                r = T.update(t);
                var a = t.material;
                if (Array.isArray(a))
                  for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                    var h = o[s],
                      l = a[h.materialIndex];
                    l && l.visible && f.push(t, r, l, i, st.z, h);
                  }
                else a.visible && f.push(t, r, a, i, st.z, null);
              }
            var u = t.children;
            for (s = 0, c = u.length; s < c; s++) _t(u[s], e, i, n);
          }
        }
        function bt(t, e, i, n) {
          for (var r = 0, a = t.length; r < a; r++) {
            var o = t[r],
              s = o.object,
              c = o.geometry,
              h = void 0 === n ? o.material : n,
              l = o.group;
            if (i.isArrayCamera)
              if (((q = i), ut.enabled && pt.isAvailable()))
                wt(s, e, i, c, h, l);
              else
                for (var u = i.cameras, p = 0, d = u.length; p < d; p++) {
                  var f = u[p];
                  s.layers.test(f.layers) &&
                    (_.viewport(X.copy(f.viewport)),
                    m.setupLights(f),
                    wt(s, e, f, c, h, l));
                }
            else (q = null), wt(s, e, i, c, h, l);
          }
        }
        function wt(t, e, i, n, r, a) {
          if (
            (t.onBeforeRender(R, e, i, n, r, a),
            (m = E.get(e, q || i)),
            t.modelViewMatrix.multiplyMatrices(
              i.matrixWorldInverse,
              t.matrixWorld
            ),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            t.isImmediateRenderObject)
          ) {
            _.setMaterial(r);
            var o = St(i, e.fog, r, t);
            (W.geometry = null),
              (W.program = null),
              (W.wireframe = !1),
              (function (t, e) {
                t.render(function (t) {
                  R.renderBufferImmediate(t, e);
                });
              })(t, o);
          } else R.renderBufferDirect(i, e.fog, n, r, t, a);
          t.onAfterRender(R, e, i, n, r, a), (m = E.get(e, q || i));
        }
        function Mt(t, e, i) {
          var n = w.get(t),
            r = m.state.lights,
            a = m.state.shadowsArray,
            o = r.state.version,
            s = L.getParameters(
              t,
              r.state,
              a,
              e,
              nt.numPlanes,
              nt.numIntersection,
              i
            ),
            c = L.getProgramCacheKey(t, s),
            h = n.program,
            l = !0;
          if (void 0 === h) t.addEventListener("dispose", vt);
          else if (h.cacheKey !== c) gt(t);
          else if (n.lightsStateVersion !== o)
            (n.lightsStateVersion = o), (l = !1);
          else {
            if (void 0 !== s.shaderID) return;
            l = !1;
          }
          if (l) {
            if (s.shaderID) {
              var u = Ze[s.shaderID];
              n.shader = {
                name: t.type,
                uniforms: Fe(u.uniforms),
                vertexShader: u.vertexShader,
                fragmentShader: u.fragmentShader,
              };
            } else
              n.shader = {
                name: t.type,
                uniforms: t.uniforms,
                vertexShader: t.vertexShader,
                fragmentShader: t.fragmentShader,
              };
            t.onBeforeCompile(n.shader, R),
              (c = L.getProgramCacheKey(t, s)),
              (h = L.acquireProgram(t, n.shader, s, c)),
              (n.program = h),
              (t.program = h);
          }
          var p = h.getAttributes();
          if (t.morphTargets) {
            t.numSupportedMorphTargets = 0;
            for (var d = 0; d < R.maxMorphTargets; d++)
              p["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++;
          }
          if (t.morphNormals) {
            t.numSupportedMorphNormals = 0;
            for (d = 0; d < R.maxMorphNormals; d++)
              p["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++;
          }
          var f = n.shader.uniforms;
          ((t.isShaderMaterial || t.isRawShaderMaterial) &&
            !0 !== t.clipping) ||
            ((n.numClippingPlanes = nt.numPlanes),
            (n.numIntersection = nt.numIntersection),
            (f.clippingPlanes = nt.uniform)),
            (n.fog = e),
            (n.needsLights = (function (t) {
              return (
                t.isMeshLambertMaterial ||
                t.isMeshPhongMaterial ||
                t.isMeshStandardMaterial ||
                t.isShadowMaterial ||
                (t.isShaderMaterial && !0 === t.lights)
              );
            })(t)),
            (n.lightsStateVersion = o),
            n.needsLights &&
              ((f.ambientLightColor.value = r.state.ambient),
              (f.lightProbe.value = r.state.probe),
              (f.directionalLights.value = r.state.directional),
              (f.spotLights.value = r.state.spot),
              (f.rectAreaLights.value = r.state.rectArea),
              (f.pointLights.value = r.state.point),
              (f.hemisphereLights.value = r.state.hemi),
              (f.directionalShadowMap.value = r.state.directionalShadowMap),
              (f.directionalShadowMatrix.value =
                r.state.directionalShadowMatrix),
              (f.spotShadowMap.value = r.state.spotShadowMap),
              (f.spotShadowMatrix.value = r.state.spotShadowMatrix),
              (f.pointShadowMap.value = r.state.pointShadowMap),
              (f.pointShadowMatrix.value = r.state.pointShadowMatrix));
          var v = n.program.getUniforms(),
            g = hn.seqWithValue(v.seq, f);
          n.uniformsList = g;
        }
        function St(t, e, i, n) {
          M.resetTextureUnits();
          var r = w.get(i),
            a = m.state.lights;
          if (rt && (at || t !== H)) {
            var o = t === H && i.id === k;
            nt.setState(
              i.clippingPlanes,
              i.clipIntersection,
              i.clipShadows,
              t,
              r,
              o
            );
          }
          !1 === i.needsUpdate &&
            (void 0 === r.program ||
            (i.fog && r.fog !== e) ||
            (r.needsLights && r.lightsStateVersion !== a.state.version)
              ? (i.needsUpdate = !0)
              : void 0 === r.numClippingPlanes ||
                (r.numClippingPlanes === nt.numPlanes &&
                  r.numIntersection === nt.numIntersection) ||
                (i.needsUpdate = !0)),
            i.needsUpdate && (Mt(i, e, n), (i.needsUpdate = !1));
          var c,
            h,
            l = !1,
            u = !1,
            p = !1,
            d = r.program,
            f = d.getUniforms(),
            g = r.shader.uniforms;
          if (
            (_.useProgram(d.program) && ((l = !0), (u = !0), (p = !0)),
            i.id !== k && ((k = i.id), (u = !0)),
            l || H !== t)
          ) {
            if (
              (d.numMultiviewViews > 0
                ? pt.updateCameraProjectionMatricesUniform(t, f)
                : f.setValue(v, "projectionMatrix", t.projectionMatrix),
              y.logarithmicDepthBuffer &&
                f.setValue(
                  v,
                  "logDepthBufFC",
                  2 / (Math.log(t.far + 1) / Math.LN2)
                ),
              H !== t && ((H = t), (u = !0), (p = !0)),
              i.isShaderMaterial ||
                i.isMeshPhongMaterial ||
                i.isMeshStandardMaterial ||
                i.envMap)
            ) {
              var x = f.map.cameraPosition;
              void 0 !== x &&
                x.setValue(v, st.setFromMatrixPosition(t.matrixWorld));
            }
            (i.isMeshPhongMaterial ||
              i.isMeshLambertMaterial ||
              i.isMeshBasicMaterial ||
              i.isMeshStandardMaterial ||
              i.isShaderMaterial) &&
              f.setValue(v, "isOrthographic", !0 === t.isOrthographicCamera),
              (i.isMeshPhongMaterial ||
                i.isMeshLambertMaterial ||
                i.isMeshBasicMaterial ||
                i.isMeshStandardMaterial ||
                i.isShaderMaterial ||
                i.skinning) &&
                (d.numMultiviewViews > 0
                  ? pt.updateCameraViewMatricesUniform(t, f)
                  : f.setValue(v, "viewMatrix", t.matrixWorldInverse));
          }
          if (i.skinning) {
            f.setOptional(v, n, "bindMatrix"),
              f.setOptional(v, n, "bindMatrixInverse");
            var b = n.skeleton;
            if (b) {
              var S = b.bones;
              if (y.floatVertexTextures) {
                if (void 0 === b.boneTexture) {
                  var A = Math.sqrt(4 * S.length);
                  (A = s.ceilPowerOfTwo(A)), (A = Math.max(A, 4));
                  var T = new Float32Array(A * A * 4);
                  T.set(b.boneMatrices);
                  var L = new We(T, A, A, 1023, 1015);
                  (b.boneMatrices = T),
                    (b.boneTexture = L),
                    (b.boneTextureSize = A);
                }
                f.setValue(v, "boneTexture", b.boneTexture, M),
                  f.setValue(v, "boneTextureSize", b.boneTextureSize);
              } else f.setOptional(v, b, "boneMatrices");
            }
          }
          return (
            (u || r.receiveShadow !== n.receiveShadow) &&
              ((r.receiveShadow = n.receiveShadow),
              f.setValue(v, "receiveShadow", n.receiveShadow)),
            u &&
              (f.setValue(v, "toneMappingExposure", R.toneMappingExposure),
              f.setValue(v, "toneMappingWhitePoint", R.toneMappingWhitePoint),
              r.needsLights &&
                ((h = p),
                ((c = g).ambientLightColor.needsUpdate = h),
                (c.lightProbe.needsUpdate = h),
                (c.directionalLights.needsUpdate = h),
                (c.pointLights.needsUpdate = h),
                (c.spotLights.needsUpdate = h),
                (c.rectAreaLights.needsUpdate = h),
                (c.hemisphereLights.needsUpdate = h)),
              e &&
                i.fog &&
                (function (t, e) {
                  t.fogColor.value.copy(e.color),
                    e.isFog
                      ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
                      : e.isFogExp2 && (t.fogDensity.value = e.density);
                })(g, e),
              i.isMeshBasicMaterial
                ? At(g, i)
                : i.isMeshLambertMaterial
                ? (At(g, i),
                  (function (t, e) {
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                  })(g, i))
                : i.isMeshPhongMaterial
                ? (At(g, i),
                  i.isMeshToonMaterial
                    ? (function (t, e) {
                        Tt(t, e),
                          e.gradientMap &&
                            (t.gradientMap.value = e.gradientMap);
                      })(g, i)
                    : Tt(g, i))
                : i.isMeshStandardMaterial
                ? (At(g, i),
                  i.isMeshPhysicalMaterial
                    ? (function (t, e) {
                        Lt(t, e),
                          (t.reflectivity.value = e.reflectivity),
                          (t.clearcoat.value = e.clearcoat),
                          (t.clearcoatRoughness.value = e.clearcoatRoughness),
                          e.sheen && t.sheen.value.copy(e.sheen);
                        e.clearcoatNormalMap &&
                          (t.clearcoatNormalScale.value.copy(
                            e.clearcoatNormalScale
                          ),
                          (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                          1 === e.side &&
                            t.clearcoatNormalScale.value.negate());
                        t.transparency.value = e.transparency;
                      })(g, i)
                    : Lt(g, i))
                : i.isMeshMatcapMaterial
                ? (At(g, i),
                  (function (t, e) {
                    e.matcap && (t.matcap.value = e.matcap);
                    e.bumpMap &&
                      ((t.bumpMap.value = e.bumpMap),
                      (t.bumpScale.value = e.bumpScale),
                      1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      1 === e.side && t.normalScale.value.negate());
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                  })(g, i))
                : i.isMeshDepthMaterial
                ? (At(g, i),
                  (function (t, e) {
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                  })(g, i))
                : i.isMeshDistanceMaterial
                ? (At(g, i),
                  (function (t, e) {
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                    t.referencePosition.value.copy(e.referencePosition),
                      (t.nearDistance.value = e.nearDistance),
                      (t.farDistance.value = e.farDistance);
                  })(g, i))
                : i.isMeshNormalMaterial
                ? (At(g, i),
                  (function (t, e) {
                    e.bumpMap &&
                      ((t.bumpMap.value = e.bumpMap),
                      (t.bumpScale.value = e.bumpScale),
                      1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      1 === e.side && t.normalScale.value.negate());
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                  })(g, i))
                : i.isLineBasicMaterial
                ? ((function (t, e) {
                    t.diffuse.value.copy(e.color),
                      (t.opacity.value = e.opacity);
                  })(g, i),
                  i.isLineDashedMaterial &&
                    (function (t, e) {
                      (t.dashSize.value = e.dashSize),
                        (t.totalSize.value = e.dashSize + e.gapSize),
                        (t.scale.value = e.scale);
                    })(g, i))
                : i.isPointsMaterial
                ? (function (t, e) {
                    t.diffuse.value.copy(e.color),
                      (t.opacity.value = e.opacity),
                      (t.size.value = e.size * K),
                      (t.scale.value = 0.5 * Q),
                      e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    var i;
                    e.map ? (i = e.map) : e.alphaMap && (i = e.alphaMap);
                    void 0 !== i &&
                      (!0 === i.matrixAutoUpdate && i.updateMatrix(),
                      t.uvTransform.value.copy(i.matrix));
                  })(g, i)
                : i.isSpriteMaterial
                ? (function (t, e) {
                    t.diffuse.value.copy(e.color),
                      (t.opacity.value = e.opacity),
                      (t.rotation.value = e.rotation),
                      e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    var i;
                    e.map ? (i = e.map) : e.alphaMap && (i = e.alphaMap);
                    void 0 !== i &&
                      (!0 === i.matrixAutoUpdate && i.updateMatrix(),
                      t.uvTransform.value.copy(i.matrix));
                  })(g, i)
                : i.isShadowMaterial &&
                  (g.color.value.copy(i.color), (g.opacity.value = i.opacity)),
              void 0 !== g.ltc_1 && (g.ltc_1.value = Je.LTC_1),
              void 0 !== g.ltc_2 && (g.ltc_2.value = Je.LTC_2),
              hn.upload(v, r.uniformsList, g, M),
              i.isShaderMaterial && (i.uniformsNeedUpdate = !1)),
            i.isShaderMaterial &&
              !0 === i.uniformsNeedUpdate &&
              (hn.upload(v, r.uniformsList, g, M), (i.uniformsNeedUpdate = !1)),
            i.isSpriteMaterial && f.setValue(v, "center", n.center),
            d.numMultiviewViews > 0
              ? pt.updateObjectMatricesUniforms(n, t, f)
              : (f.setValue(v, "modelViewMatrix", n.modelViewMatrix),
                f.setValue(v, "normalMatrix", n.normalMatrix)),
            f.setValue(v, "modelMatrix", n.matrixWorld),
            d
          );
        }
        function At(t, e) {
          var i;
          (t.opacity.value = e.opacity),
            e.color && t.diffuse.value.copy(e.color),
            e.emissive &&
              t.emissive.value
                .copy(e.emissive)
                .multiplyScalar(e.emissiveIntensity),
            e.map && (t.map.value = e.map),
            e.alphaMap && (t.alphaMap.value = e.alphaMap),
            e.specularMap && (t.specularMap.value = e.specularMap),
            e.envMap &&
              ((t.envMap.value = e.envMap),
              (t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1),
              (t.reflectivity.value = e.reflectivity),
              (t.refractionRatio.value = e.refractionRatio),
              (t.maxMipLevel.value = w.get(e.envMap).__maxMipLevel)),
            e.lightMap &&
              ((t.lightMap.value = e.lightMap),
              (t.lightMapIntensity.value = e.lightMapIntensity)),
            e.aoMap &&
              ((t.aoMap.value = e.aoMap),
              (t.aoMapIntensity.value = e.aoMapIntensity)),
            e.map
              ? (i = e.map)
              : e.specularMap
              ? (i = e.specularMap)
              : e.displacementMap
              ? (i = e.displacementMap)
              : e.normalMap
              ? (i = e.normalMap)
              : e.bumpMap
              ? (i = e.bumpMap)
              : e.roughnessMap
              ? (i = e.roughnessMap)
              : e.metalnessMap
              ? (i = e.metalnessMap)
              : e.alphaMap
              ? (i = e.alphaMap)
              : e.emissiveMap && (i = e.emissiveMap),
            void 0 !== i &&
              (i.isWebGLRenderTarget && (i = i.texture),
              !0 === i.matrixAutoUpdate && i.updateMatrix(),
              t.uvTransform.value.copy(i.matrix));
        }
        function Tt(t, e) {
          t.specular.value.copy(e.specular),
            (t.shininess.value = Math.max(e.shininess, 1e-4)),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap &&
              ((t.bumpMap.value = e.bumpMap),
              (t.bumpScale.value = e.bumpScale),
              1 === e.side && (t.bumpScale.value *= -1)),
            e.normalMap &&
              ((t.normalMap.value = e.normalMap),
              t.normalScale.value.copy(e.normalScale),
              1 === e.side && t.normalScale.value.negate()),
            e.displacementMap &&
              ((t.displacementMap.value = e.displacementMap),
              (t.displacementScale.value = e.displacementScale),
              (t.displacementBias.value = e.displacementBias));
        }
        function Lt(t, e) {
          (t.roughness.value = e.roughness),
            (t.metalness.value = e.metalness),
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap &&
              ((t.bumpMap.value = e.bumpMap),
              (t.bumpScale.value = e.bumpScale),
              1 === e.side && (t.bumpScale.value *= -1)),
            e.normalMap &&
              ((t.normalMap.value = e.normalMap),
              t.normalScale.value.copy(e.normalScale),
              1 === e.side && t.normalScale.value.negate()),
            e.displacementMap &&
              ((t.displacementMap.value = e.displacementMap),
              (t.displacementScale.value = e.displacementScale),
              (t.displacementBias.value = e.displacementBias)),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
        }
        xt.setAnimationLoop(function (t) {
          ut.isPresenting() || (yt && yt(t));
        }),
          "undefined" != typeof window && xt.setContext(window),
          (this.setAnimationLoop = function (t) {
            (yt = t), ut.setAnimationLoop(t), xt.start();
          }),
          (this.render = function (t, e) {
            var i, n;
            if (
              (void 0 !== arguments[2] && (i = arguments[2]),
              void 0 !== arguments[3] && (n = arguments[3]),
              e && e.isCamera && !F)
            ) {
              (W.geometry = null),
                (W.program = null),
                (W.wireframe = !1),
                (k = -1),
                (H = null),
                !0 === t.autoUpdate && t.updateMatrixWorld(),
                null === e.parent && e.updateMatrixWorld(),
                ut.enabled && (e = ut.getCamera(e)),
                (m = E.get(t, e)).init(),
                t.onBeforeRender(R, t, e, i || G),
                ot.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                it.setFromMatrix(ot),
                (at = this.localClippingEnabled),
                (rt = nt.init(this.clippingPlanes, at, e)),
                (f = P.get(t, e)).init(),
                _t(t, e, 0, R.sortObjects),
                !0 === R.sortObjects && f.sort(),
                rt && nt.beginShadows();
              var r = m.state.shadowsArray;
              dt.render(r, t, e),
                m.setupLights(e),
                rt && nt.endShadows(),
                this.info.autoReset && this.info.reset(),
                void 0 !== i && this.setRenderTarget(i),
                ut.enabled && pt.isAvailable() && pt.attachCamera(e),
                O.render(f, t, e, n);
              var a = f.opaque,
                o = f.transparent;
              if (t.overrideMaterial) {
                var s = t.overrideMaterial;
                a.length && bt(a, t, e, s), o.length && bt(o, t, e, s);
              } else a.length && bt(a, t, e), o.length && bt(o, t, e);
              t.onAfterRender(R, t, e),
                null !== G &&
                  (M.updateRenderTargetMipmap(G),
                  M.updateMultisampleRenderTarget(G)),
                _.buffers.depth.setTest(!0),
                _.buffers.depth.setMask(!0),
                _.buffers.color.setMask(!0),
                _.setPolygonOffset(!1),
                ut.enabled &&
                  (pt.isAvailable() && pt.detachCamera(e), ut.submitFrame()),
                (f = null),
                (m = null);
            }
          }),
          (this.setFramebuffer = function (t) {
            U !== t && null === G && v.bindFramebuffer(36160, t), (U = t);
          }),
          (this.getActiveCubeFace = function () {
            return B;
          }),
          (this.getActiveMipmapLevel = function () {
            return V;
          }),
          (this.getRenderTarget = function () {
            return G;
          }),
          (this.setRenderTarget = function (t, e, i) {
            (G = t),
              (B = e),
              (V = i),
              t &&
                void 0 === w.get(t).__webglFramebuffer &&
                M.setupRenderTarget(t);
            var n = U,
              r = !1;
            if (t) {
              var a = w.get(t).__webglFramebuffer;
              t.isWebGLRenderTargetCube
                ? ((n = a[e || 0]), (r = !0))
                : (n = t.isWebGLMultisampleRenderTarget
                    ? w.get(t).__webglMultisampledFramebuffer
                    : a),
                X.copy(t.viewport),
                Y.copy(t.scissor),
                (J = t.scissorTest);
            } else
              X.copy($).multiplyScalar(K).floor(),
                Y.copy(tt).multiplyScalar(K).floor(),
                (J = et);
            if (
              (j !== n && (v.bindFramebuffer(36160, n), (j = n)),
              _.viewport(X),
              _.scissor(Y),
              _.setScissorTest(J),
              r)
            ) {
              var o = w.get(t.texture);
              v.framebufferTexture2D(
                36160,
                36064,
                34069 + (e || 0),
                o.__webglTexture,
                i || 0
              );
            }
          }),
          (this.readRenderTargetPixels = function (t, e, i, n, r, a, o) {
            if (t && t.isWebGLRenderTarget) {
              var s = w.get(t).__webglFramebuffer;
              if (
                (t.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]), s)
              ) {
                var c = !1;
                s !== j && (v.bindFramebuffer(36160, s), (c = !0));
                try {
                  var h = t.texture,
                    l = h.format,
                    u = h.type;
                  if (1023 !== l && z.convert(l) !== v.getParameter(35739))
                    return;
                  if (
                    !(
                      1009 === u ||
                      z.convert(u) === v.getParameter(35738) ||
                      (1015 === u &&
                        (y.isWebGL2 ||
                          g.get("OES_texture_float") ||
                          g.get("WEBGL_color_buffer_float"))) ||
                      (1016 === u &&
                        (y.isWebGL2
                          ? g.get("EXT_color_buffer_float")
                          : g.get("EXT_color_buffer_half_float")))
                    )
                  )
                    return;
                  36053 === v.checkFramebufferStatus(36160) &&
                    e >= 0 &&
                    e <= t.width - n &&
                    i >= 0 &&
                    i <= t.height - r &&
                    v.readPixels(e, i, n, r, z.convert(l), z.convert(u), a);
                } finally {
                  c && v.bindFramebuffer(36160, j);
                }
              }
            }
          }),
          (this.copyFramebufferToTexture = function (t, e, i) {
            void 0 === i && (i = 0);
            var n = Math.pow(2, -i),
              r = Math.floor(e.image.width * n),
              a = Math.floor(e.image.height * n),
              o = z.convert(e.format);
            M.setTexture2D(e, 0),
              v.copyTexImage2D(3553, i, o, t.x, t.y, r, a, 0),
              _.unbindTexture();
          }),
          (this.copyTextureToTexture = function (t, e, i, n) {
            var r = e.image.width,
              a = e.image.height,
              o = z.convert(i.format),
              s = z.convert(i.type);
            M.setTexture2D(i, 0),
              e.isDataTexture
                ? v.texSubImage2D(
                    3553,
                    n || 0,
                    t.x,
                    t.y,
                    r,
                    a,
                    o,
                    s,
                    e.image.data
                  )
                : v.texSubImage2D(3553, n || 0, t.x, t.y, o, s, e.image),
              _.unbindTexture();
          }),
          (this.initTexture = function (t) {
            M.setTexture2D(t, 0), _.unbindTexture();
          }),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      function ir(t, e) {
        (this.name = ""),
          (this.color = new Ft(t)),
          (this.density = void 0 !== e ? e : 25e-5);
      }
      function nr(t, e, i) {
        (this.name = ""),
          (this.color = new Ft(t)),
          (this.near = void 0 !== e ? e : 1),
          (this.far = void 0 !== i ? i : 1e3);
      }
      function rr(t, e) {
        (this.array = t),
          (this.stride = e),
          (this.count = void 0 !== t ? t.length / e : 0),
          (this.usage = 35044),
          (this.updateRange = { offset: 0, count: -1 }),
          (this.version = 0);
      }
      function ar(t, e, i, n) {
        (this.data = t),
          (this.itemSize = e),
          (this.offset = i),
          (this.normalized = !0 === n);
      }
      function or(t) {
        kt.call(this),
          (this.type = "SpriteMaterial"),
          (this.color = new Ft(16777215)),
          (this.map = null),
          (this.alphaMap = null),
          (this.rotation = 0),
          (this.sizeAttenuation = !0),
          (this.transparent = !0),
          this.setValues(t);
      }
      Object.assign($n.prototype, r.prototype),
        Object.assign(tr.prototype, r.prototype),
        Object.assign(ir.prototype, {
          isFogExp2: !0,
          clone: function () {
            return new ir(this.color, this.density);
          },
          toJSON: function () {
            return {
              type: "FogExp2",
              color: this.color.getHex(),
              density: this.density,
            };
          },
        }),
        Object.assign(nr.prototype, {
          isFog: !0,
          clone: function () {
            return new nr(this.color, this.near, this.far);
          },
          toJSON: function () {
            return {
              type: "Fog",
              color: this.color.getHex(),
              near: this.near,
              far: this.far,
            };
          },
        }),
        Object.defineProperty(rr.prototype, "needsUpdate", {
          set: function (t) {
            !0 === t && this.version++;
          },
        }),
        Object.assign(rr.prototype, {
          isInterleavedBuffer: !0,
          onUploadCallback: function () {},
          setUsage: function (t) {
            return (this.usage = t), this;
          },
          copy: function (t) {
            return (
              (this.array = new t.array.constructor(t.array)),
              (this.count = t.count),
              (this.stride = t.stride),
              (this.usage = t.usage),
              this
            );
          },
          copyAt: function (t, e, i) {
            (t *= this.stride), (i *= e.stride);
            for (var n = 0, r = this.stride; n < r; n++)
              this.array[t + n] = e.array[i + n];
            return this;
          },
          set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this;
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          onUpload: function (t) {
            return (this.onUploadCallback = t), this;
          },
        }),
        Object.defineProperties(ar.prototype, {
          count: {
            get: function () {
              return this.data.count;
            },
          },
          array: {
            get: function () {
              return this.data.array;
            },
          },
        }),
        Object.assign(ar.prototype, {
          isInterleavedBufferAttribute: !0,
          setX: function (t, e) {
            return (
              (this.data.array[t * this.data.stride + this.offset] = e), this
            );
          },
          setY: function (t, e) {
            return (
              (this.data.array[t * this.data.stride + this.offset + 1] = e),
              this
            );
          },
          setZ: function (t, e) {
            return (
              (this.data.array[t * this.data.stride + this.offset + 2] = e),
              this
            );
          },
          setW: function (t, e) {
            return (
              (this.data.array[t * this.data.stride + this.offset + 3] = e),
              this
            );
          },
          getX: function (t) {
            return this.data.array[t * this.data.stride + this.offset];
          },
          getY: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 1];
          },
          getZ: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 2];
          },
          getW: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 3];
          },
          setXY: function (t, e, i) {
            return (
              (t = t * this.data.stride + this.offset),
              (this.data.array[t + 0] = e),
              (this.data.array[t + 1] = i),
              this
            );
          },
          setXYZ: function (t, e, i, n) {
            return (
              (t = t * this.data.stride + this.offset),
              (this.data.array[t + 0] = e),
              (this.data.array[t + 1] = i),
              (this.data.array[t + 2] = n),
              this
            );
          },
          setXYZW: function (t, e, i, n, r) {
            return (
              (t = t * this.data.stride + this.offset),
              (this.data.array[t + 0] = e),
              (this.data.array[t + 1] = i),
              (this.data.array[t + 2] = n),
              (this.data.array[t + 3] = r),
              this
            );
          },
        }),
        (or.prototype = Object.create(kt.prototype)),
        (or.prototype.constructor = or),
        (or.prototype.isSpriteMaterial = !0),
        (or.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.rotation = t.rotation),
            (this.sizeAttenuation = t.sizeAttenuation),
            this
          );
        });
      var sr = new p(),
        cr = new p(),
        hr = new p(),
        lr = new c(),
        ur = new c(),
        pr = new C(),
        dr = new p(),
        fr = new p(),
        mr = new p(),
        vr = new c(),
        gr = new c(),
        yr = new c();
      function xr(t) {
        if ((X.call(this), (this.type = "Sprite"), void 0 === Jn)) {
          Jn = new le();
          var e = new rr(
            new Float32Array([
              -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
              0.5, 0, 0, 1,
            ]),
            5
          );
          Jn.setIndex([0, 1, 2, 0, 2, 3]),
            Jn.setAttribute("position", new ar(e, 3, 0, !1)),
            Jn.setAttribute("uv", new ar(e, 2, 3, !1));
        }
        (this.geometry = Jn),
          (this.material = void 0 !== t ? t : new or()),
          (this.center = new c(0.5, 0.5));
      }
      function _r(t, e, i, n, r, a) {
        lr.subVectors(t, i).addScalar(0.5).multiply(n),
          void 0 !== r
            ? ((ur.x = a * lr.x - r * lr.y), (ur.y = r * lr.x + a * lr.y))
            : ur.copy(lr),
          t.copy(e),
          (t.x += ur.x),
          (t.y += ur.y),
          t.applyMatrix4(pr);
      }
      xr.prototype = Object.assign(Object.create(X.prototype), {
        constructor: xr,
        isSprite: !0,
        raycast: function (t, e) {
          t.camera,
            cr.setFromMatrixScale(this.matrixWorld),
            pr.copy(t.camera.matrixWorld),
            this.modelViewMatrix.multiplyMatrices(
              t.camera.matrixWorldInverse,
              this.matrixWorld
            ),
            hr.setFromMatrixPosition(this.modelViewMatrix),
            t.camera.isPerspectiveCamera &&
              !1 === this.material.sizeAttenuation &&
              cr.multiplyScalar(-hr.z);
          var i,
            n,
            r = this.material.rotation;
          0 !== r && ((n = Math.cos(r)), (i = Math.sin(r)));
          var a = this.center;
          _r(dr.set(-0.5, -0.5, 0), hr, a, cr, i, n),
            _r(fr.set(0.5, -0.5, 0), hr, a, cr, i, n),
            _r(mr.set(0.5, 0.5, 0), hr, a, cr, i, n),
            vr.set(0, 0),
            gr.set(1, 0),
            yr.set(1, 1);
          var o = t.ray.intersectTriangle(dr, fr, mr, !1, sr);
          if (
            null !== o ||
            (_r(fr.set(-0.5, 0.5, 0), hr, a, cr, i, n),
            gr.set(0, 1),
            null !== (o = t.ray.intersectTriangle(dr, mr, fr, !1, sr)))
          ) {
            var s = t.ray.origin.distanceTo(sr);
            s < t.near ||
              s > t.far ||
              e.push({
                distance: s,
                point: sr.clone(),
                uv: It.getUV(sr, dr, fr, mr, vr, gr, yr, new c()),
                face: null,
                object: this,
              });
          }
        },
        clone: function () {
          return new this.constructor(this.material).copy(this);
        },
        copy: function (t) {
          return (
            X.prototype.copy.call(this, t),
            void 0 !== t.center && this.center.copy(t.center),
            this
          );
        },
      });
      var br = new p(),
        wr = new p();
      function Mr() {
        X.call(this),
          (this.type = "LOD"),
          Object.defineProperties(this, {
            levels: { enumerable: !0, value: [] },
          }),
          (this.autoUpdate = !0);
      }
      function Sr(t, e) {
        t && t.isGeometry,
          Pe.call(this, t, e),
          (this.type = "SkinnedMesh"),
          (this.bindMode = "attached"),
          (this.bindMatrix = new C()),
          (this.bindMatrixInverse = new C());
      }
      (Mr.prototype = Object.assign(Object.create(X.prototype), {
        constructor: Mr,
        isLOD: !0,
        copy: function (t) {
          X.prototype.copy.call(this, t, !1);
          for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
            var r = e[i];
            this.addLevel(r.object.clone(), r.distance);
          }
          return this;
        },
        addLevel: function (t, e) {
          void 0 === e && (e = 0), (e = Math.abs(e));
          for (
            var i = this.levels, n = 0;
            n < i.length && !(e < i[n].distance);
            n++
          );
          return i.splice(n, 0, { distance: e, object: t }), this.add(t), this;
        },
        getObjectForDistance: function (t) {
          for (
            var e = this.levels, i = 1, n = e.length;
            i < n && !(t < e[i].distance);
            i++
          );
          return e[i - 1].object;
        },
        raycast: function (t, e) {
          br.setFromMatrixPosition(this.matrixWorld);
          var i = t.ray.origin.distanceTo(br);
          this.getObjectForDistance(i).raycast(t, e);
        },
        update: function (t) {
          var e = this.levels;
          if (e.length > 1) {
            br.setFromMatrixPosition(t.matrixWorld),
              wr.setFromMatrixPosition(this.matrixWorld);
            var i = br.distanceTo(wr);
            e[0].object.visible = !0;
            for (var n = 1, r = e.length; n < r && i >= e[n].distance; n++)
              (e[n - 1].object.visible = !1), (e[n].object.visible = !0);
            for (; n < r; n++) e[n].object.visible = !1;
          }
        },
        toJSON: function (t) {
          var e = X.prototype.toJSON.call(this, t);
          e.object.levels = [];
          for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
            var a = i[n];
            e.object.levels.push({
              object: a.object.uuid,
              distance: a.distance,
            });
          }
          return e;
        },
      })),
        (Sr.prototype = Object.assign(Object.create(Pe.prototype), {
          constructor: Sr,
          isSkinnedMesh: !0,
          bind: function (t, e) {
            (this.skeleton = t),
              void 0 === e &&
                (this.updateMatrixWorld(!0),
                this.skeleton.calculateInverses(),
                (e = this.matrixWorld)),
              this.bindMatrix.copy(e),
              this.bindMatrixInverse.getInverse(e);
          },
          pose: function () {
            this.skeleton.pose();
          },
          normalizeSkinWeights: function () {
            for (
              var t = new x(),
                e = this.geometry.attributes.skinWeight,
                i = 0,
                n = e.count;
              i < n;
              i++
            ) {
              (t.x = e.getX(i)),
                (t.y = e.getY(i)),
                (t.z = e.getZ(i)),
                (t.w = e.getW(i));
              var r = 1 / t.manhattanLength();
              r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0),
                e.setXYZW(i, t.x, t.y, t.z, t.w);
            }
          },
          updateMatrixWorld: function (t) {
            Pe.prototype.updateMatrixWorld.call(this, t),
              "attached" === this.bindMode
                ? this.bindMatrixInverse.getInverse(this.matrixWorld)
                : "detached" === this.bindMode &&
                  this.bindMatrixInverse.getInverse(this.bindMatrix);
          },
          clone: function () {
            return new this.constructor(this.geometry, this.material).copy(
              this
            );
          },
        }));
      var Ar = new C(),
        Tr = new C();
      function Lr(t, e) {
        if (
          ((t = t || []),
          (this.bones = t.slice(0)),
          (this.boneMatrices = new Float32Array(16 * this.bones.length)),
          (this.frame = -1),
          void 0 === e)
        )
          this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
          this.boneInverses = [];
          for (var i = 0, n = this.bones.length; i < n; i++)
            this.boneInverses.push(new C());
        }
      }
      function Pr() {
        X.call(this), (this.type = "Bone");
      }
      function Cr(t, e, i) {
        Pe.call(this, t, e),
          (this.instanceMatrix = new Ht(new Float32Array(16 * i), 16)),
          (this.count = i);
      }
      function Er(t) {
        kt.call(this),
          (this.type = "LineBasicMaterial"),
          (this.color = new Ft(16777215)),
          (this.linewidth = 1),
          (this.linecap = "round"),
          (this.linejoin = "round"),
          this.setValues(t);
      }
      Object.assign(Lr.prototype, {
        calculateInverses: function () {
          this.boneInverses = [];
          for (var t = 0, e = this.bones.length; t < e; t++) {
            var i = new C();
            this.bones[t] && i.getInverse(this.bones[t].matrixWorld),
              this.boneInverses.push(i);
          }
        },
        pose: function () {
          var t, e, i;
          for (e = 0, i = this.bones.length; e < i; e++)
            (t = this.bones[e]) &&
              t.matrixWorld.getInverse(this.boneInverses[e]);
          for (e = 0, i = this.bones.length; e < i; e++)
            (t = this.bones[e]) &&
              (t.parent && t.parent.isBone
                ? (t.matrix.getInverse(t.parent.matrixWorld),
                  t.matrix.multiply(t.matrixWorld))
                : t.matrix.copy(t.matrixWorld),
              t.matrix.decompose(t.position, t.quaternion, t.scale));
        },
        update: function () {
          for (
            var t = this.bones,
              e = this.boneInverses,
              i = this.boneMatrices,
              n = this.boneTexture,
              r = 0,
              a = t.length;
            r < a;
            r++
          ) {
            var o = t[r] ? t[r].matrixWorld : Tr;
            Ar.multiplyMatrices(o, e[r]), Ar.toArray(i, 16 * r);
          }
          void 0 !== n && (n.needsUpdate = !0);
        },
        clone: function () {
          return new Lr(this.bones, this.boneInverses);
        },
        getBoneByName: function (t) {
          for (var e = 0, i = this.bones.length; e < i; e++) {
            var n = this.bones[e];
            if (n.name === t) return n;
          }
        },
      }),
        (Pr.prototype = Object.assign(Object.create(X.prototype), {
          constructor: Pr,
          isBone: !0,
        })),
        (Cr.prototype = Object.assign(Object.create(Pe.prototype), {
          constructor: Cr,
          isInstancedMesh: !0,
          raycast: function () {},
          setMatrixAt: function (t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t);
          },
          updateMorphTargets: function () {},
        })),
        (Er.prototype = Object.create(kt.prototype)),
        (Er.prototype.constructor = Er),
        (Er.prototype.isLineBasicMaterial = !0),
        (Er.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.linewidth = t.linewidth),
            (this.linecap = t.linecap),
            (this.linejoin = t.linejoin),
            this
          );
        });
      var Or = new p(),
        Nr = new p(),
        Ir = new C(),
        Dr = new yt(),
        zr = new lt();
      function Rr(t, e, i) {
        X.call(this),
          (this.type = "Line"),
          (this.geometry = void 0 !== t ? t : new le()),
          (this.material =
            void 0 !== e ? e : new Er({ color: 16777215 * Math.random() }));
      }
      Rr.prototype = Object.assign(Object.create(X.prototype), {
        constructor: Rr,
        isLine: !0,
        computeLineDistances: function () {
          var t = this.geometry;
          if (t.isBufferGeometry) {
            if (null === t.index) {
              for (
                var e = t.attributes.position, i = [0], n = 1, r = e.count;
                n < r;
                n++
              )
                Or.fromBufferAttribute(e, n - 1),
                  Nr.fromBufferAttribute(e, n),
                  (i[n] = i[n - 1]),
                  (i[n] += Or.distanceTo(Nr));
              t.setAttribute("lineDistance", new $t(i, 1));
            }
          } else if (t.isGeometry) {
            var a = t.vertices;
            (i = t.lineDistances)[0] = 0;
            for (n = 1, r = a.length; n < r; n++)
              (i[n] = i[n - 1]), (i[n] += a[n - 1].distanceTo(a[n]));
          }
          return this;
        },
        raycast: function (t, e) {
          var i = t.linePrecision,
            n = this.geometry,
            r = this.matrixWorld;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            zr.copy(n.boundingSphere),
            zr.applyMatrix4(r),
            (zr.radius += i),
            !1 !== t.ray.intersectsSphere(zr))
          ) {
            Ir.getInverse(r), Dr.copy(t.ray).applyMatrix4(Ir);
            var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
              o = a * a,
              s = new p(),
              c = new p(),
              h = new p(),
              l = new p(),
              u = this && this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
              var d = n.index,
                f = n.attributes.position.array;
              if (null !== d)
                for (var m = d.array, v = 0, g = m.length - 1; v < g; v += u) {
                  var y = m[v],
                    x = m[v + 1];
                  if (
                    (s.fromArray(f, 3 * y),
                    c.fromArray(f, 3 * x),
                    !(Dr.distanceSqToSegment(s, c, l, h) > o))
                  )
                    l.applyMatrix4(this.matrixWorld),
                      (w = t.ray.origin.distanceTo(l)) < t.near ||
                        w > t.far ||
                        e.push({
                          distance: w,
                          point: h.clone().applyMatrix4(this.matrixWorld),
                          index: v,
                          face: null,
                          faceIndex: null,
                          object: this,
                        });
                }
              else
                for (v = 0, g = f.length / 3 - 1; v < g; v += u) {
                  if (
                    (s.fromArray(f, 3 * v),
                    c.fromArray(f, 3 * v + 3),
                    !(Dr.distanceSqToSegment(s, c, l, h) > o))
                  )
                    l.applyMatrix4(this.matrixWorld),
                      (w = t.ray.origin.distanceTo(l)) < t.near ||
                        w > t.far ||
                        e.push({
                          distance: w,
                          point: h.clone().applyMatrix4(this.matrixWorld),
                          index: v,
                          face: null,
                          faceIndex: null,
                          object: this,
                        });
                }
            } else if (n.isGeometry) {
              var _ = n.vertices,
                b = _.length;
              for (v = 0; v < b - 1; v += u) {
                var w;
                if (!(Dr.distanceSqToSegment(_[v], _[v + 1], l, h) > o))
                  l.applyMatrix4(this.matrixWorld),
                    (w = t.ray.origin.distanceTo(l)) < t.near ||
                      w > t.far ||
                      e.push({
                        distance: w,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: v,
                        face: null,
                        faceIndex: null,
                        object: this,
                      });
              }
            }
          }
        },
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      });
      var Fr = new p(),
        Ur = new p();
      function Br(t, e) {
        Rr.call(this, t, e), (this.type = "LineSegments");
      }
      function Vr(t, e) {
        Rr.call(this, t, e), (this.type = "LineLoop");
      }
      function Gr(t) {
        kt.call(this),
          (this.type = "PointsMaterial"),
          (this.color = new Ft(16777215)),
          (this.map = null),
          (this.alphaMap = null),
          (this.size = 1),
          (this.sizeAttenuation = !0),
          (this.morphTargets = !1),
          this.setValues(t);
      }
      (Br.prototype = Object.assign(Object.create(Rr.prototype), {
        constructor: Br,
        isLineSegments: !0,
        computeLineDistances: function () {
          var t = this.geometry;
          if (t.isBufferGeometry) {
            if (null === t.index) {
              for (
                var e = t.attributes.position, i = [], n = 0, r = e.count;
                n < r;
                n += 2
              )
                Fr.fromBufferAttribute(e, n),
                  Ur.fromBufferAttribute(e, n + 1),
                  (i[n] = 0 === n ? 0 : i[n - 1]),
                  (i[n + 1] = i[n] + Fr.distanceTo(Ur));
              t.setAttribute("lineDistance", new $t(i, 1));
            }
          } else if (t.isGeometry) {
            var a = t.vertices;
            for (i = t.lineDistances, n = 0, r = a.length; n < r; n += 2)
              Fr.copy(a[n]),
                Ur.copy(a[n + 1]),
                (i[n] = 0 === n ? 0 : i[n - 1]),
                (i[n + 1] = i[n] + Fr.distanceTo(Ur));
          }
          return this;
        },
      })),
        (Vr.prototype = Object.assign(Object.create(Rr.prototype), {
          constructor: Vr,
          isLineLoop: !0,
        })),
        (Gr.prototype = Object.create(kt.prototype)),
        (Gr.prototype.constructor = Gr),
        (Gr.prototype.isPointsMaterial = !0),
        (Gr.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.size = t.size),
            (this.sizeAttenuation = t.sizeAttenuation),
            (this.morphTargets = t.morphTargets),
            this
          );
        });
      var jr = new C(),
        kr = new yt(),
        Wr = new lt(),
        Hr = new p();
      function qr(t, e) {
        X.call(this),
          (this.type = "Points"),
          (this.geometry = void 0 !== t ? t : new le()),
          (this.material =
            void 0 !== e ? e : new Gr({ color: 16777215 * Math.random() })),
          this.updateMorphTargets();
      }
      function Xr(t, e, i, n, r, a, o) {
        var s = kr.distanceSqToPoint(t);
        if (s < i) {
          var c = new p();
          kr.closestPointToPoint(t, c), c.applyMatrix4(n);
          var h = r.ray.origin.distanceTo(c);
          if (h < r.near || h > r.far) return;
          a.push({
            distance: h,
            distanceToRay: Math.sqrt(s),
            point: c,
            index: e,
            face: null,
            object: o,
          });
        }
      }
      function Yr(t, e, i, r, a, o, s, c, h) {
        y.call(this, t, e, i, r, a, o, s, c, h),
          (this.format = void 0 !== s ? s : 1022),
          (this.minFilter = void 0 !== o ? o : n),
          (this.magFilter = void 0 !== a ? a : n),
          (this.generateMipmaps = !1);
      }
      function Jr(t, e, i, n, r, a, o, s, c, h, l, u) {
        y.call(this, null, a, o, s, c, h, n, r, l, u),
          (this.image = { width: e, height: i }),
          (this.mipmaps = t),
          (this.flipY = !1),
          (this.generateMipmaps = !1);
      }
      function Zr(t, e, i, n, r, a, o, s, c) {
        y.call(this, t, e, i, n, r, a, o, s, c), (this.needsUpdate = !0);
      }
      function Qr(t, e, i, n, r, a, o, s, c, h) {
        if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h)
          throw new Error(
            "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
          );
        void 0 === i && 1026 === h && (i = 1012),
          void 0 === i && 1027 === h && (i = 1020),
          y.call(this, null, n, r, a, o, s, h, i, c),
          (this.image = { width: t, height: e }),
          (this.magFilter = void 0 !== o ? o : 1003),
          (this.minFilter = void 0 !== s ? s : 1003),
          (this.flipY = !1),
          (this.generateMipmaps = !1);
      }
      function Kr(t) {
        le.call(this), (this.type = "WireframeGeometry");
        var e,
          i,
          n,
          r,
          a,
          o,
          s,
          c,
          h,
          l,
          u = [],
          d = [0, 0],
          f = {},
          m = ["a", "b", "c"];
        if (t && t.isGeometry) {
          var v = t.faces;
          for (e = 0, n = v.length; e < n; e++) {
            var g = v[e];
            for (i = 0; i < 3; i++)
              (s = g[m[i]]),
                (c = g[m[(i + 1) % 3]]),
                (d[0] = Math.min(s, c)),
                (d[1] = Math.max(s, c)),
                void 0 === f[(h = d[0] + "," + d[1])] &&
                  (f[h] = { index1: d[0], index2: d[1] });
          }
          for (h in f)
            (o = f[h]),
              (l = t.vertices[o.index1]),
              u.push(l.x, l.y, l.z),
              (l = t.vertices[o.index2]),
              u.push(l.x, l.y, l.z);
        } else if (t && t.isBufferGeometry) {
          var y, x, _, b, w, M, S;
          if (((l = new p()), null !== t.index)) {
            for (
              y = t.attributes.position,
                x = t.index,
                0 === (_ = t.groups).length &&
                  (_ = [{ start: 0, count: x.count, materialIndex: 0 }]),
                r = 0,
                a = _.length;
              r < a;
              ++r
            )
              for (e = w = (b = _[r]).start, n = w + b.count; e < n; e += 3)
                for (i = 0; i < 3; i++)
                  (s = x.getX(e + i)),
                    (c = x.getX(e + ((i + 1) % 3))),
                    (d[0] = Math.min(s, c)),
                    (d[1] = Math.max(s, c)),
                    void 0 === f[(h = d[0] + "," + d[1])] &&
                      (f[h] = { index1: d[0], index2: d[1] });
            for (h in f)
              (o = f[h]),
                l.fromBufferAttribute(y, o.index1),
                u.push(l.x, l.y, l.z),
                l.fromBufferAttribute(y, o.index2),
                u.push(l.x, l.y, l.z);
          } else
            for (e = 0, n = (y = t.attributes.position).count / 3; e < n; e++)
              for (i = 0; i < 3; i++)
                (M = 3 * e + i),
                  l.fromBufferAttribute(y, M),
                  u.push(l.x, l.y, l.z),
                  (S = 3 * e + ((i + 1) % 3)),
                  l.fromBufferAttribute(y, S),
                  u.push(l.x, l.y, l.z);
        }
        this.setAttribute("position", new $t(u, 3));
      }
      function $r(t, e, i) {
        ze.call(this),
          (this.type = "ParametricGeometry"),
          (this.parameters = { func: t, slices: e, stacks: i }),
          this.fromBufferGeometry(new ta(t, e, i)),
          this.mergeVertices();
      }
      function ta(t, e, i) {
        le.call(this),
          (this.type = "ParametricBufferGeometry"),
          (this.parameters = { func: t, slices: e, stacks: i });
        var n,
          r,
          a = [],
          o = [],
          s = [],
          c = [],
          h = 1e-5,
          l = new p(),
          u = new p(),
          d = new p(),
          f = new p(),
          m = new p();
        t.length;
        var v = e + 1;
        for (n = 0; n <= i; n++) {
          var g = n / i;
          for (r = 0; r <= e; r++) {
            var y = r / e;
            t(y, g, u),
              o.push(u.x, u.y, u.z),
              y - h >= 0
                ? (t(y - h, g, d), f.subVectors(u, d))
                : (t(y + h, g, d), f.subVectors(d, u)),
              g - h >= 0
                ? (t(y, g - h, d), m.subVectors(u, d))
                : (t(y, g + h, d), m.subVectors(d, u)),
              l.crossVectors(f, m).normalize(),
              s.push(l.x, l.y, l.z),
              c.push(y, g);
          }
        }
        for (n = 0; n < i; n++)
          for (r = 0; r < e; r++) {
            var x = n * v + r,
              _ = n * v + r + 1,
              b = (n + 1) * v + r + 1,
              w = (n + 1) * v + r;
            a.push(x, _, w), a.push(_, b, w);
          }
        this.setIndex(a),
          this.setAttribute("position", new $t(o, 3)),
          this.setAttribute("normal", new $t(s, 3)),
          this.setAttribute("uv", new $t(c, 2));
      }
      function ea(t, e, i, n) {
        ze.call(this),
          (this.type = "PolyhedronGeometry"),
          (this.parameters = { vertices: t, indices: e, radius: i, detail: n }),
          this.fromBufferGeometry(new ia(t, e, i, n)),
          this.mergeVertices();
      }
      function ia(t, e, i, n) {
        le.call(this),
          (this.type = "PolyhedronBufferGeometry"),
          (this.parameters = { vertices: t, indices: e, radius: i, detail: n }),
          (i = i || 1);
        var r = [],
          a = [];
        function o(t, e, i, n) {
          var r,
            a,
            o = Math.pow(2, n),
            c = [];
          for (r = 0; r <= o; r++) {
            c[r] = [];
            var h = t.clone().lerp(i, r / o),
              l = e.clone().lerp(i, r / o),
              u = o - r;
            for (a = 0; a <= u; a++)
              c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u);
          }
          for (r = 0; r < o; r++)
            for (a = 0; a < 2 * (o - r) - 1; a++) {
              var p = Math.floor(a / 2);
              a % 2 == 0
                ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p]))
                : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]));
            }
        }
        function s(t) {
          r.push(t.x, t.y, t.z);
        }
        function h(e, i) {
          var n = 3 * e;
          (i.x = t[n + 0]), (i.y = t[n + 1]), (i.z = t[n + 2]);
        }
        function l(t, e, i, n) {
          n < 0 && 1 === t.x && (a[e] = t.x - 1),
            0 === i.x && 0 === i.z && (a[e] = n / 2 / Math.PI + 0.5);
        }
        function u(t) {
          return Math.atan2(t.z, -t.x);
        }
        !(function (t) {
          for (
            var i = new p(), n = new p(), r = new p(), a = 0;
            a < e.length;
            a += 3
          )
            h(e[a + 0], i), h(e[a + 1], n), h(e[a + 2], r), o(i, n, r, t);
        })((n = n || 0)),
          (function (t) {
            for (var e = new p(), i = 0; i < r.length; i += 3)
              (e.x = r[i + 0]),
                (e.y = r[i + 1]),
                (e.z = r[i + 2]),
                e.normalize().multiplyScalar(t),
                (r[i + 0] = e.x),
                (r[i + 1] = e.y),
                (r[i + 2] = e.z);
          })(i),
          (function () {
            for (var t = new p(), e = 0; e < r.length; e += 3) {
              (t.x = r[e + 0]), (t.y = r[e + 1]), (t.z = r[e + 2]);
              var i = u(t) / 2 / Math.PI + 0.5,
                n =
                  ((o = t),
                  Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI +
                    0.5);
              a.push(i, 1 - n);
            }
            var o;
            (function () {
              for (
                var t = new p(),
                  e = new p(),
                  i = new p(),
                  n = new p(),
                  o = new c(),
                  s = new c(),
                  h = new c(),
                  d = 0,
                  f = 0;
                d < r.length;
                d += 9, f += 6
              ) {
                t.set(r[d + 0], r[d + 1], r[d + 2]),
                  e.set(r[d + 3], r[d + 4], r[d + 5]),
                  i.set(r[d + 6], r[d + 7], r[d + 8]),
                  o.set(a[f + 0], a[f + 1]),
                  s.set(a[f + 2], a[f + 3]),
                  h.set(a[f + 4], a[f + 5]),
                  n.copy(t).add(e).add(i).divideScalar(3);
                var m = u(n);
                l(o, f + 0, t, m), l(s, f + 2, e, m), l(h, f + 4, i, m);
              }
            })(),
              (function () {
                for (var t = 0; t < a.length; t += 6) {
                  var e = a[t + 0],
                    i = a[t + 2],
                    n = a[t + 4],
                    r = Math.max(e, i, n),
                    o = Math.min(e, i, n);
                  r > 0.9 &&
                    o < 0.1 &&
                    (e < 0.2 && (a[t + 0] += 1),
                    i < 0.2 && (a[t + 2] += 1),
                    n < 0.2 && (a[t + 4] += 1));
                }
              })();
          })(),
          this.setAttribute("position", new $t(r, 3)),
          this.setAttribute("normal", new $t(r.slice(), 3)),
          this.setAttribute("uv", new $t(a, 2)),
          0 === n ? this.computeVertexNormals() : this.normalizeNormals();
      }
      function na(t, e) {
        ze.call(this),
          (this.type = "TetrahedronGeometry"),
          (this.parameters = { radius: t, detail: e }),
          this.fromBufferGeometry(new ra(t, e)),
          this.mergeVertices();
      }
      function ra(t, e) {
        ia.call(
          this,
          [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
          [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
          t,
          e
        ),
          (this.type = "TetrahedronBufferGeometry"),
          (this.parameters = { radius: t, detail: e });
      }
      function aa(t, e) {
        ze.call(this),
          (this.type = "OctahedronGeometry"),
          (this.parameters = { radius: t, detail: e }),
          this.fromBufferGeometry(new oa(t, e)),
          this.mergeVertices();
      }
      function oa(t, e) {
        ia.call(
          this,
          [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
          [
            0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
            2,
          ],
          t,
          e
        ),
          (this.type = "OctahedronBufferGeometry"),
          (this.parameters = { radius: t, detail: e });
      }
      function sa(t, e) {
        ze.call(this),
          (this.type = "IcosahedronGeometry"),
          (this.parameters = { radius: t, detail: e }),
          this.fromBufferGeometry(new ca(t, e)),
          this.mergeVertices();
      }
      function ca(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
          n = [
            -1,
            i,
            0,
            1,
            i,
            0,
            -1,
            -i,
            0,
            1,
            -i,
            0,
            0,
            -1,
            i,
            0,
            1,
            i,
            0,
            -1,
            -i,
            0,
            1,
            -i,
            i,
            0,
            -1,
            i,
            0,
            1,
            -i,
            0,
            -1,
            -i,
            0,
            1,
          ];
        ia.call(
          this,
          n,
          [
            0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
            11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
            8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
          ],
          t,
          e
        ),
          (this.type = "IcosahedronBufferGeometry"),
          (this.parameters = { radius: t, detail: e });
      }
      function ha(t, e) {
        ze.call(this),
          (this.type = "DodecahedronGeometry"),
          (this.parameters = { radius: t, detail: e }),
          this.fromBufferGeometry(new la(t, e)),
          this.mergeVertices();
      }
      function la(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
          n = 1 / i,
          r = [
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            1,
            1,
            1,
            0,
            -n,
            -i,
            0,
            -n,
            i,
            0,
            n,
            -i,
            0,
            n,
            i,
            -n,
            -i,
            0,
            -n,
            i,
            0,
            n,
            -i,
            0,
            n,
            i,
            0,
            -i,
            0,
            -n,
            i,
            0,
            -n,
            -i,
            0,
            n,
            i,
            0,
            n,
          ];
        ia.call(
          this,
          r,
          [
            3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
            8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0,
            1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18,
            3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4,
            0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4,
            17, 1, 12, 14, 1, 14, 5, 1, 5, 9,
          ],
          t,
          e
        ),
          (this.type = "DodecahedronBufferGeometry"),
          (this.parameters = { radius: t, detail: e });
      }
      function ua(t, e, i, n, r, a) {
        ze.call(this),
          (this.type = "TubeGeometry"),
          (this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r,
          });
        var o = new pa(t, e, i, n, r);
        (this.tangents = o.tangents),
          (this.normals = o.normals),
          (this.binormals = o.binormals),
          this.fromBufferGeometry(o),
          this.mergeVertices();
      }
      function pa(t, e, i, n, r) {
        le.call(this),
          (this.type = "TubeBufferGeometry"),
          (this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r,
          }),
          (e = e || 64),
          (i = i || 1),
          (n = n || 8),
          (r = r || !1);
        var a = t.computeFrenetFrames(e, r);
        (this.tangents = a.tangents),
          (this.normals = a.normals),
          (this.binormals = a.binormals);
        var o,
          s,
          h = new p(),
          l = new p(),
          u = new c(),
          d = new p(),
          f = [],
          m = [],
          v = [],
          g = [];
        function y(r) {
          d = t.getPointAt(r / e, d);
          var o = a.normals[r],
            c = a.binormals[r];
          for (s = 0; s <= n; s++) {
            var u = (s / n) * Math.PI * 2,
              p = Math.sin(u),
              v = -Math.cos(u);
            (l.x = v * o.x + p * c.x),
              (l.y = v * o.y + p * c.y),
              (l.z = v * o.z + p * c.z),
              l.normalize(),
              m.push(l.x, l.y, l.z),
              (h.x = d.x + i * l.x),
              (h.y = d.y + i * l.y),
              (h.z = d.z + i * l.z),
              f.push(h.x, h.y, h.z);
          }
        }
        !(function () {
          for (o = 0; o < e; o++) y(o);
          y(!1 === r ? e : 0),
            (function () {
              for (o = 0; o <= e; o++)
                for (s = 0; s <= n; s++)
                  (u.x = o / e), (u.y = s / n), v.push(u.x, u.y);
            })(),
            (function () {
              for (s = 1; s <= e; s++)
                for (o = 1; o <= n; o++) {
                  var t = (n + 1) * (s - 1) + (o - 1),
                    i = (n + 1) * s + (o - 1),
                    r = (n + 1) * s + o,
                    a = (n + 1) * (s - 1) + o;
                  g.push(t, i, a), g.push(i, r, a);
                }
            })();
        })(),
          this.setIndex(g),
          this.setAttribute("position", new $t(f, 3)),
          this.setAttribute("normal", new $t(m, 3)),
          this.setAttribute("uv", new $t(v, 2));
      }
      function da(t, e, i, n, r, a, o) {
        ze.call(this),
          (this.type = "TorusKnotGeometry"),
          (this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a,
          }),
          this.fromBufferGeometry(new fa(t, e, i, n, r, a)),
          this.mergeVertices();
      }
      function fa(t, e, i, n, r, a) {
        le.call(this),
          (this.type = "TorusKnotBufferGeometry"),
          (this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a,
          }),
          (t = t || 1),
          (e = e || 0.4),
          (i = Math.floor(i) || 64),
          (n = Math.floor(n) || 8),
          (r = r || 2),
          (a = a || 3);
        var o,
          s,
          c = [],
          h = [],
          l = [],
          u = [],
          d = new p(),
          f = new p(),
          m = new p(),
          v = new p(),
          g = new p(),
          y = new p(),
          x = new p();
        for (o = 0; o <= i; ++o) {
          var _ = (o / i) * r * Math.PI * 2;
          for (
            P(_, r, a, t, m),
              P(_ + 0.01, r, a, t, v),
              y.subVectors(v, m),
              x.addVectors(v, m),
              g.crossVectors(y, x),
              x.crossVectors(g, y),
              g.normalize(),
              x.normalize(),
              s = 0;
            s <= n;
            ++s
          ) {
            var b = (s / n) * Math.PI * 2,
              w = -e * Math.cos(b),
              M = e * Math.sin(b);
            (d.x = m.x + (w * x.x + M * g.x)),
              (d.y = m.y + (w * x.y + M * g.y)),
              (d.z = m.z + (w * x.z + M * g.z)),
              h.push(d.x, d.y, d.z),
              f.subVectors(d, m).normalize(),
              l.push(f.x, f.y, f.z),
              u.push(o / i),
              u.push(s / n);
          }
        }
        for (s = 1; s <= i; s++)
          for (o = 1; o <= n; o++) {
            var S = (n + 1) * (s - 1) + (o - 1),
              A = (n + 1) * s + (o - 1),
              T = (n + 1) * s + o,
              L = (n + 1) * (s - 1) + o;
            c.push(S, A, L), c.push(A, T, L);
          }
        function P(t, e, i, n, r) {
          var a = Math.cos(t),
            o = Math.sin(t),
            s = (i / e) * t,
            c = Math.cos(s);
          (r.x = n * (2 + c) * 0.5 * a),
            (r.y = n * (2 + c) * o * 0.5),
            (r.z = n * Math.sin(s) * 0.5);
        }
        this.setIndex(c),
          this.setAttribute("position", new $t(h, 3)),
          this.setAttribute("normal", new $t(l, 3)),
          this.setAttribute("uv", new $t(u, 2));
      }
      function ma(t, e, i, n, r) {
        ze.call(this),
          (this.type = "TorusGeometry"),
          (this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r,
          }),
          this.fromBufferGeometry(new va(t, e, i, n, r)),
          this.mergeVertices();
      }
      function va(t, e, i, n, r) {
        le.call(this),
          (this.type = "TorusBufferGeometry"),
          (this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r,
          }),
          (t = t || 1),
          (e = e || 0.4),
          (i = Math.floor(i) || 8),
          (n = Math.floor(n) || 6),
          (r = r || 2 * Math.PI);
        var a,
          o,
          s = [],
          c = [],
          h = [],
          l = [],
          u = new p(),
          d = new p(),
          f = new p();
        for (a = 0; a <= i; a++)
          for (o = 0; o <= n; o++) {
            var m = (o / n) * r,
              v = (a / i) * Math.PI * 2;
            (d.x = (t + e * Math.cos(v)) * Math.cos(m)),
              (d.y = (t + e * Math.cos(v)) * Math.sin(m)),
              (d.z = e * Math.sin(v)),
              c.push(d.x, d.y, d.z),
              (u.x = t * Math.cos(m)),
              (u.y = t * Math.sin(m)),
              f.subVectors(d, u).normalize(),
              h.push(f.x, f.y, f.z),
              l.push(o / n),
              l.push(a / i);
          }
        for (a = 1; a <= i; a++)
          for (o = 1; o <= n; o++) {
            var g = (n + 1) * a + o - 1,
              y = (n + 1) * (a - 1) + o - 1,
              x = (n + 1) * (a - 1) + o,
              _ = (n + 1) * a + o;
            s.push(g, y, _), s.push(y, x, _);
          }
        this.setIndex(s),
          this.setAttribute("position", new $t(c, 3)),
          this.setAttribute("normal", new $t(h, 3)),
          this.setAttribute("uv", new $t(l, 2));
      }
      (qr.prototype = Object.assign(Object.create(X.prototype), {
        constructor: qr,
        isPoints: !0,
        raycast: function (t, e) {
          var i = this.geometry,
            n = this.matrixWorld,
            r = t.params.Points.threshold;
          if (
            (null === i.boundingSphere && i.computeBoundingSphere(),
            Wr.copy(i.boundingSphere),
            Wr.applyMatrix4(n),
            (Wr.radius += r),
            !1 !== t.ray.intersectsSphere(Wr))
          ) {
            jr.getInverse(n), kr.copy(t.ray).applyMatrix4(jr);
            var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
              o = a * a;
            if (i.isBufferGeometry) {
              var s = i.index,
                c = i.attributes.position.array;
              if (null !== s)
                for (var h = s.array, l = 0, u = h.length; l < u; l++) {
                  var p = h[l];
                  Hr.fromArray(c, 3 * p), Xr(Hr, p, o, n, t, e, this);
                }
              else {
                l = 0;
                for (var d = c.length / 3; l < d; l++)
                  Hr.fromArray(c, 3 * l), Xr(Hr, l, o, n, t, e, this);
              }
            } else {
              var f = i.vertices;
              for (l = 0, d = f.length; l < d; l++)
                Xr(f[l], l, o, n, t, e, this);
            }
          }
        },
        updateMorphTargets: function () {
          var t,
            e,
            i,
            n = this.geometry;
          if (n.isBufferGeometry) {
            var r = n.morphAttributes,
              a = Object.keys(r);
            if (a.length > 0) {
              var o = r[a[0]];
              if (void 0 !== o)
                for (
                  this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {},
                    t = 0,
                    e = o.length;
                  t < e;
                  t++
                )
                  (i = o[t].name || String(t)),
                    this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[i] = t);
            }
          } else {
            var s = n.morphTargets;
            void 0 !== s && s.length;
          }
        },
        clone: function () {
          return new this.constructor(this.geometry, this.material).copy(this);
        },
      })),
        (Yr.prototype = Object.assign(Object.create(y.prototype), {
          constructor: Yr,
          isVideoTexture: !0,
          update: function () {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
          },
        })),
        (Jr.prototype = Object.create(y.prototype)),
        (Jr.prototype.constructor = Jr),
        (Jr.prototype.isCompressedTexture = !0),
        (Zr.prototype = Object.create(y.prototype)),
        (Zr.prototype.constructor = Zr),
        (Zr.prototype.isCanvasTexture = !0),
        (Qr.prototype = Object.create(y.prototype)),
        (Qr.prototype.constructor = Qr),
        (Qr.prototype.isDepthTexture = !0),
        (Kr.prototype = Object.create(le.prototype)),
        (Kr.prototype.constructor = Kr),
        ($r.prototype = Object.create(ze.prototype)),
        ($r.prototype.constructor = $r),
        (ta.prototype = Object.create(le.prototype)),
        (ta.prototype.constructor = ta),
        (ea.prototype = Object.create(ze.prototype)),
        (ea.prototype.constructor = ea),
        (ia.prototype = Object.create(le.prototype)),
        (ia.prototype.constructor = ia),
        (na.prototype = Object.create(ze.prototype)),
        (na.prototype.constructor = na),
        (ra.prototype = Object.create(ia.prototype)),
        (ra.prototype.constructor = ra),
        (aa.prototype = Object.create(ze.prototype)),
        (aa.prototype.constructor = aa),
        (oa.prototype = Object.create(ia.prototype)),
        (oa.prototype.constructor = oa),
        (sa.prototype = Object.create(ze.prototype)),
        (sa.prototype.constructor = sa),
        (ca.prototype = Object.create(ia.prototype)),
        (ca.prototype.constructor = ca),
        (ha.prototype = Object.create(ze.prototype)),
        (ha.prototype.constructor = ha),
        (la.prototype = Object.create(ia.prototype)),
        (la.prototype.constructor = la),
        (ua.prototype = Object.create(ze.prototype)),
        (ua.prototype.constructor = ua),
        (pa.prototype = Object.create(le.prototype)),
        (pa.prototype.constructor = pa),
        (pa.prototype.toJSON = function () {
          var t = le.prototype.toJSON.call(this);
          return (t.path = this.parameters.path.toJSON()), t;
        }),
        (da.prototype = Object.create(ze.prototype)),
        (da.prototype.constructor = da),
        (fa.prototype = Object.create(le.prototype)),
        (fa.prototype.constructor = fa),
        (ma.prototype = Object.create(ze.prototype)),
        (ma.prototype.constructor = ma),
        (va.prototype = Object.create(le.prototype)),
        (va.prototype.constructor = va);
      var ga = function (t, e, i) {
        i = i || 2;
        var n,
          r,
          a,
          o,
          s,
          c,
          h,
          l = e && e.length,
          u = l ? e[0] * i : t.length,
          p = ya(t, 0, u, i, !0),
          d = [];
        if (!p || p.next === p.prev) return d;
        if (
          (l &&
            (p = (function (t, e, i, n) {
              var r,
                a,
                o,
                s,
                c,
                h = [];
              for (r = 0, a = e.length; r < a; r++)
                (o = e[r] * n),
                  (s = r < a - 1 ? e[r + 1] * n : t.length),
                  (c = ya(t, o, s, n, !1)) === c.next && (c.steiner = !0),
                  h.push(Pa(c));
              for (h.sort(Aa), r = 0; r < h.length; r++)
                Ta(h[r], i), (i = xa(i, i.next));
              return i;
            })(t, e, p, i)),
          t.length > 80 * i)
        ) {
          (n = a = t[0]), (r = o = t[1]);
          for (var f = i; f < u; f += i)
            (s = t[f]) < n && (n = s),
              (c = t[f + 1]) < r && (r = c),
              s > a && (a = s),
              c > o && (o = c);
          h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0;
        }
        return _a(p, d, i, n, r, h), d;
      };
      function ya(t, e, i, n, r) {
        var a, o;
        if (
          r ===
          (function (t, e, i, n) {
            for (var r = 0, a = e, o = i - n; a < i; a += n)
              (r += (t[o] - t[a]) * (t[a + 1] + t[o + 1])), (o = a);
            return r;
          })(t, e, i, n) >
            0
        )
          for (a = e; a < i; a += n) o = Ra(a, t[a], t[a + 1], o);
        else for (a = i - n; a >= e; a -= n) o = Ra(a, t[a], t[a + 1], o);
        return o && Na(o, o.next) && (Fa(o), (o = o.next)), o;
      }
      function xa(t, e) {
        if (!t) return t;
        e || (e = t);
        var i,
          n = t;
        do {
          if (
            ((i = !1),
            n.steiner || (!Na(n, n.next) && 0 !== Oa(n.prev, n, n.next)))
          )
            n = n.next;
          else {
            if ((Fa(n), (n = e = n.prev) === n.next)) break;
            i = !0;
          }
        } while (i || n !== e);
        return e;
      }
      function _a(t, e, i, n, r, a, o) {
        if (t) {
          !o &&
            a &&
            (function (t, e, i, n) {
              var r = t;
              do {
                null === r.z && (r.z = La(r.x, r.y, e, i, n)),
                  (r.prevZ = r.prev),
                  (r.nextZ = r.next),
                  (r = r.next);
              } while (r !== t);
              (r.prevZ.nextZ = null),
                (r.prevZ = null),
                (function (t) {
                  var e,
                    i,
                    n,
                    r,
                    a,
                    o,
                    s,
                    c,
                    h = 1;
                  do {
                    for (i = t, t = null, a = null, o = 0; i; ) {
                      for (
                        o++, n = i, s = 0, e = 0;
                        e < h && (s++, (n = n.nextZ));
                        e++
                      );
                      for (c = h; s > 0 || (c > 0 && n); )
                        0 !== s && (0 === c || !n || i.z <= n.z)
                          ? ((r = i), (i = i.nextZ), s--)
                          : ((r = n), (n = n.nextZ), c--),
                          a ? (a.nextZ = r) : (t = r),
                          (r.prevZ = a),
                          (a = r);
                      i = n;
                    }
                    (a.nextZ = null), (h *= 2);
                  } while (o > 1);
                })(r);
            })(t, n, r, a);
          for (var s, c, h = t; t.prev !== t.next; )
            if (((s = t.prev), (c = t.next), a ? wa(t, n, r, a) : ba(t)))
              e.push(s.i / i),
                e.push(t.i / i),
                e.push(c.i / i),
                Fa(t),
                (t = c.next),
                (h = c.next);
            else if ((t = c) === h) {
              o
                ? 1 === o
                  ? _a((t = Ma(t, e, i)), e, i, n, r, a, 2)
                  : 2 === o && Sa(t, e, i, n, r, a)
                : _a(xa(t), e, i, n, r, a, 1);
              break;
            }
        }
      }
      function ba(t) {
        var e = t.prev,
          i = t,
          n = t.next;
        if (Oa(e, i, n) >= 0) return !1;
        for (var r = t.next.next; r !== t.prev; ) {
          if (
            Ca(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) &&
            Oa(r.prev, r, r.next) >= 0
          )
            return !1;
          r = r.next;
        }
        return !0;
      }
      function wa(t, e, i, n) {
        var r = t.prev,
          a = t,
          o = t.next;
        if (Oa(r, a, o) >= 0) return !1;
        for (
          var s = r.x < a.x ? (r.x < o.x ? r.x : o.x) : a.x < o.x ? a.x : o.x,
            c = r.y < a.y ? (r.y < o.y ? r.y : o.y) : a.y < o.y ? a.y : o.y,
            h = r.x > a.x ? (r.x > o.x ? r.x : o.x) : a.x > o.x ? a.x : o.x,
            l = r.y > a.y ? (r.y > o.y ? r.y : o.y) : a.y > o.y ? a.y : o.y,
            u = La(s, c, e, i, n),
            p = La(h, l, e, i, n),
            d = t.prevZ,
            f = t.nextZ;
          d && d.z >= u && f && f.z <= p;

        ) {
          if (
            d !== t.prev &&
            d !== t.next &&
            Ca(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
            Oa(d.prev, d, d.next) >= 0
          )
            return !1;
          if (
            ((d = d.prevZ),
            f !== t.prev &&
              f !== t.next &&
              Ca(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
              Oa(f.prev, f, f.next) >= 0)
          )
            return !1;
          f = f.nextZ;
        }
        for (; d && d.z >= u; ) {
          if (
            d !== t.prev &&
            d !== t.next &&
            Ca(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
            Oa(d.prev, d, d.next) >= 0
          )
            return !1;
          d = d.prevZ;
        }
        for (; f && f.z <= p; ) {
          if (
            f !== t.prev &&
            f !== t.next &&
            Ca(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
            Oa(f.prev, f, f.next) >= 0
          )
            return !1;
          f = f.nextZ;
        }
        return !0;
      }
      function Ma(t, e, i) {
        var n = t;
        do {
          var r = n.prev,
            a = n.next.next;
          !Na(r, a) &&
            Ia(r, n, n.next, a) &&
            Da(r, a) &&
            Da(a, r) &&
            (e.push(r.i / i),
            e.push(n.i / i),
            e.push(a.i / i),
            Fa(n),
            Fa(n.next),
            (n = t = a)),
            (n = n.next);
        } while (n !== t);
        return n;
      }
      function Sa(t, e, i, n, r, a) {
        var o = t;
        do {
          for (var s = o.next.next; s !== o.prev; ) {
            if (o.i !== s.i && Ea(o, s)) {
              var c = za(o, s);
              return (
                (o = xa(o, o.next)),
                (c = xa(c, c.next)),
                _a(o, e, i, n, r, a),
                void _a(c, e, i, n, r, a)
              );
            }
            s = s.next;
          }
          o = o.next;
        } while (o !== t);
      }
      function Aa(t, e) {
        return t.x - e.x;
      }
      function Ta(t, e) {
        if (
          (e = (function (t, e) {
            var i,
              n = e,
              r = t.x,
              a = t.y,
              o = -1 / 0;
            do {
              if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                var s = n.x + ((a - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                if (s <= r && s > o) {
                  if (((o = s), s === r)) {
                    if (a === n.y) return n;
                    if (a === n.next.y) return n.next;
                  }
                  i = n.x < n.next.x ? n : n.next;
                }
              }
              n = n.next;
            } while (n !== e);
            if (!i) return null;
            if (r === o) return i.prev;
            var c,
              h = i,
              l = i.x,
              u = i.y,
              p = 1 / 0;
            n = i.next;
            for (; n !== h; )
              r >= n.x &&
                n.x >= l &&
                r !== n.x &&
                Ca(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) &&
                ((c = Math.abs(a - n.y) / (r - n.x)) < p ||
                  (c === p && n.x > i.x)) &&
                Da(n, t) &&
                ((i = n), (p = c)),
                (n = n.next);
            return i;
          })(t, e))
        ) {
          var i = za(e, t);
          xa(i, i.next);
        }
      }
      function La(t, e, i, n, r) {
        return (
          (t =
            1431655765 &
            ((t =
              858993459 &
              ((t =
                252645135 &
                ((t = 16711935 & ((t = 32767 * (t - i) * r) | (t << 8))) |
                  (t << 4))) |
                (t << 2))) |
              (t << 1))) |
          ((e =
            1431655765 &
            ((e =
              858993459 &
              ((e =
                252645135 &
                ((e = 16711935 & ((e = 32767 * (e - n) * r) | (e << 8))) |
                  (e << 4))) |
                (e << 2))) |
              (e << 1))) <<
            1)
        );
      }
      function Pa(t) {
        var e = t,
          i = t;
        do {
          (e.x < i.x || (e.x === i.x && e.y < i.y)) && (i = e), (e = e.next);
        } while (e !== t);
        return i;
      }
      function Ca(t, e, i, n, r, a, o, s) {
        return (
          (r - o) * (e - s) - (t - o) * (a - s) >= 0 &&
          (t - o) * (n - s) - (i - o) * (e - s) >= 0 &&
          (i - o) * (a - s) - (r - o) * (n - s) >= 0
        );
      }
      function Ea(t, e) {
        return (
          t.next.i !== e.i &&
          t.prev.i !== e.i &&
          !(function (t, e) {
            var i = t;
            do {
              if (
                i.i !== t.i &&
                i.next.i !== t.i &&
                i.i !== e.i &&
                i.next.i !== e.i &&
                Ia(i, i.next, t, e)
              )
                return !0;
              i = i.next;
            } while (i !== t);
            return !1;
          })(t, e) &&
          Da(t, e) &&
          Da(e, t) &&
          (function (t, e) {
            var i = t,
              n = !1,
              r = (t.x + e.x) / 2,
              a = (t.y + e.y) / 2;
            do {
              i.y > a != i.next.y > a &&
                i.next.y !== i.y &&
                r < ((i.next.x - i.x) * (a - i.y)) / (i.next.y - i.y) + i.x &&
                (n = !n),
                (i = i.next);
            } while (i !== t);
            return n;
          })(t, e)
        );
      }
      function Oa(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
      }
      function Na(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function Ia(t, e, i, n) {
        return (
          !!((Na(t, i) && Na(e, n)) || (Na(t, n) && Na(i, e))) ||
          (Oa(t, e, i) > 0 != Oa(t, e, n) > 0 &&
            Oa(i, n, t) > 0 != Oa(i, n, e) > 0)
        );
      }
      function Da(t, e) {
        return Oa(t.prev, t, t.next) < 0
          ? Oa(t, e, t.next) >= 0 && Oa(t, t.prev, e) >= 0
          : Oa(t, e, t.prev) < 0 || Oa(t, t.next, e) < 0;
      }
      function za(t, e) {
        var i = new Ua(t.i, t.x, t.y),
          n = new Ua(e.i, e.x, e.y),
          r = t.next,
          a = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (i.next = r),
          (r.prev = i),
          (n.next = i),
          (i.prev = n),
          (a.next = n),
          (n.prev = a),
          n
        );
      }
      function Ra(t, e, i, n) {
        var r = new Ua(t, e, i);
        return (
          n
            ? ((r.next = n.next), (r.prev = n), (n.next.prev = r), (n.next = r))
            : ((r.prev = r), (r.next = r)),
          r
        );
      }
      function Fa(t) {
        (t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }
      function Ua(t, e, i) {
        (this.i = t),
          (this.x = e),
          (this.y = i),
          (this.prev = null),
          (this.next = null),
          (this.z = null),
          (this.prevZ = null),
          (this.nextZ = null),
          (this.steiner = !1);
      }
      var Ba = {
        area: function (t) {
          for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++)
            i += t[n].x * t[r].y - t[r].x * t[n].y;
          return 0.5 * i;
        },
        isClockWise: function (t) {
          return Ba.area(t) < 0;
        },
        triangulateShape: function (t, e) {
          var i = [],
            n = [],
            r = [];
          Va(t), Ga(i, t);
          var a = t.length;
          e.forEach(Va);
          for (var o = 0; o < e.length; o++)
            n.push(a), (a += e[o].length), Ga(i, e[o]);
          var s = ga(i, n);
          for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
          return r;
        },
      };
      function Va(t) {
        var e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
      }
      function Ga(t, e) {
        for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y);
      }
      function ja(t, e) {
        ze.call(this),
          (this.type = "ExtrudeGeometry"),
          (this.parameters = { shapes: t, options: e }),
          this.fromBufferGeometry(new ka(t, e)),
          this.mergeVertices();
      }
      function ka(t, e) {
        le.call(this),
          (this.type = "ExtrudeBufferGeometry"),
          (this.parameters = { shapes: t, options: e }),
          (t = Array.isArray(t) ? t : [t]);
        for (var i = this, n = [], r = [], a = 0, o = t.length; a < o; a++) {
          s(t[a]);
        }
        function s(t) {
          var a = [],
            o = void 0 !== e.curveSegments ? e.curveSegments : 12,
            s = void 0 !== e.steps ? e.steps : 1,
            h = void 0 !== e.depth ? e.depth : 100,
            l = void 0 === e.bevelEnabled || e.bevelEnabled,
            u = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            d = void 0 !== e.bevelSize ? e.bevelSize : u - 2,
            f = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
            m = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            v = e.extrudePath,
            g = void 0 !== e.UVGenerator ? e.UVGenerator : Wa;
          void 0 !== e.amount && (h = e.amount);
          var y,
            x,
            _,
            b,
            w,
            M,
            S,
            A,
            T = !1;
          v &&
            ((y = v.getSpacedPoints(s)),
            (T = !0),
            (l = !1),
            (x = v.computeFrenetFrames(s, !1)),
            (_ = new p()),
            (b = new p()),
            (w = new p())),
            l || ((m = 0), (u = 0), (d = 0), (f = 0));
          var L = t.extractPoints(o),
            P = L.shape,
            C = L.holes;
          if (!Ba.isClockWise(P))
            for (P = P.reverse(), S = 0, A = C.length; S < A; S++)
              (M = C[S]), Ba.isClockWise(M) && (C[S] = M.reverse());
          var E = Ba.triangulateShape(P, C),
            O = P;
          for (S = 0, A = C.length; S < A; S++) (M = C[S]), (P = P.concat(M));
          function N(t, e, i) {
            return e.clone().multiplyScalar(i).add(t);
          }
          var I,
            D,
            z,
            R,
            F,
            U,
            B = P.length,
            V = E.length;
          function G(t, e, i) {
            var n,
              r,
              a,
              o = t.x - e.x,
              s = t.y - e.y,
              h = i.x - t.x,
              l = i.y - t.y,
              u = o * o + s * s,
              p = o * l - s * h;
            if (Math.abs(p) > Number.EPSILON) {
              var d = Math.sqrt(u),
                f = Math.sqrt(h * h + l * l),
                m = e.x - s / d,
                v = e.y + o / d,
                g =
                  ((i.x - l / f - m) * l - (i.y + h / f - v) * h) /
                  (o * l - s * h),
                y = (n = m + o * g - t.x) * n + (r = v + s * g - t.y) * r;
              if (y <= 2) return new c(n, r);
              a = Math.sqrt(y / 2);
            } else {
              var x = !1;
              o > Number.EPSILON
                ? h > Number.EPSILON && (x = !0)
                : o < -Number.EPSILON
                ? h < -Number.EPSILON && (x = !0)
                : Math.sign(s) === Math.sign(l) && (x = !0),
                x
                  ? ((n = -s), (r = o), (a = Math.sqrt(u)))
                  : ((n = o), (r = s), (a = Math.sqrt(u / 2)));
            }
            return new c(n / a, r / a);
          }
          for (
            var j = [], k = 0, W = O.length, H = W - 1, q = k + 1;
            k < W;
            k++, H++, q++
          )
            H === W && (H = 0),
              q === W && (q = 0),
              (j[k] = G(O[k], O[H], O[q]));
          var X,
            Y,
            J = [],
            Z = j.concat();
          for (S = 0, A = C.length; S < A; S++) {
            for (
              M = C[S], X = [], k = 0, H = (W = M.length) - 1, q = k + 1;
              k < W;
              k++, H++, q++
            )
              H === W && (H = 0),
                q === W && (q = 0),
                (X[k] = G(M[k], M[H], M[q]));
            J.push(X), (Z = Z.concat(X));
          }
          for (I = 0; I < m; I++) {
            for (
              z = I / m,
                R = u * Math.cos((z * Math.PI) / 2),
                D = d * Math.sin((z * Math.PI) / 2) + f,
                k = 0,
                W = O.length;
              k < W;
              k++
            )
              K((F = N(O[k], j[k], D)).x, F.y, -R);
            for (S = 0, A = C.length; S < A; S++)
              for (M = C[S], X = J[S], k = 0, W = M.length; k < W; k++)
                K((F = N(M[k], X[k], D)).x, F.y, -R);
          }
          for (D = d + f, k = 0; k < B; k++)
            (F = l ? N(P[k], Z[k], D) : P[k]),
              T
                ? (b.copy(x.normals[0]).multiplyScalar(F.x),
                  _.copy(x.binormals[0]).multiplyScalar(F.y),
                  w.copy(y[0]).add(b).add(_),
                  K(w.x, w.y, w.z))
                : K(F.x, F.y, 0);
          for (Y = 1; Y <= s; Y++)
            for (k = 0; k < B; k++)
              (F = l ? N(P[k], Z[k], D) : P[k]),
                T
                  ? (b.copy(x.normals[Y]).multiplyScalar(F.x),
                    _.copy(x.binormals[Y]).multiplyScalar(F.y),
                    w.copy(y[Y]).add(b).add(_),
                    K(w.x, w.y, w.z))
                  : K(F.x, F.y, (h / s) * Y);
          for (I = m - 1; I >= 0; I--) {
            for (
              z = I / m,
                R = u * Math.cos((z * Math.PI) / 2),
                D = d * Math.sin((z * Math.PI) / 2) + f,
                k = 0,
                W = O.length;
              k < W;
              k++
            )
              K((F = N(O[k], j[k], D)).x, F.y, h + R);
            for (S = 0, A = C.length; S < A; S++)
              for (M = C[S], X = J[S], k = 0, W = M.length; k < W; k++)
                (F = N(M[k], X[k], D)),
                  T
                    ? K(F.x, F.y + y[s - 1].y, y[s - 1].x + R)
                    : K(F.x, F.y, h + R);
          }
          function Q(t, e) {
            var i, n;
            for (k = t.length; --k >= 0; ) {
              (i = k), (n = k - 1) < 0 && (n = t.length - 1);
              var r = 0,
                a = s + 2 * m;
              for (r = 0; r < a; r++) {
                var o = B * r,
                  c = B * (r + 1);
                tt(e + i + o, e + n + o, e + n + c, e + i + c);
              }
            }
          }
          function K(t, e, i) {
            a.push(t), a.push(e), a.push(i);
          }
          function $(t, e, r) {
            et(t), et(e), et(r);
            var a = n.length / 3,
              o = g.generateTopUV(i, n, a - 3, a - 2, a - 1);
            it(o[0]), it(o[1]), it(o[2]);
          }
          function tt(t, e, r, a) {
            et(t), et(e), et(a), et(e), et(r), et(a);
            var o = n.length / 3,
              s = g.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
            it(s[0]), it(s[1]), it(s[3]), it(s[1]), it(s[2]), it(s[3]);
          }
          function et(t) {
            n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2]);
          }
          function it(t) {
            r.push(t.x), r.push(t.y);
          }
          !(function () {
            var t = n.length / 3;
            if (l) {
              var e = 0,
                r = B * e;
              for (k = 0; k < V; k++) $((U = E[k])[2] + r, U[1] + r, U[0] + r);
              for (r = B * (e = s + 2 * m), k = 0; k < V; k++)
                $((U = E[k])[0] + r, U[1] + r, U[2] + r);
            } else {
              for (k = 0; k < V; k++) $((U = E[k])[2], U[1], U[0]);
              for (k = 0; k < V; k++)
                $((U = E[k])[0] + B * s, U[1] + B * s, U[2] + B * s);
            }
            i.addGroup(t, n.length / 3 - t, 0);
          })(),
            (function () {
              var t = n.length / 3,
                e = 0;
              for (Q(O, e), e += O.length, S = 0, A = C.length; S < A; S++)
                Q((M = C[S]), e), (e += M.length);
              i.addGroup(t, n.length / 3 - t, 1);
            })();
        }
        this.setAttribute("position", new $t(n, 3)),
          this.setAttribute("uv", new $t(r, 2)),
          this.computeVertexNormals();
      }
      (ja.prototype = Object.create(ze.prototype)),
        (ja.prototype.constructor = ja),
        (ja.prototype.toJSON = function () {
          var t = ze.prototype.toJSON.call(this);
          return Ha(this.parameters.shapes, this.parameters.options, t);
        }),
        (ka.prototype = Object.create(le.prototype)),
        (ka.prototype.constructor = ka),
        (ka.prototype.toJSON = function () {
          var t = le.prototype.toJSON.call(this);
          return Ha(this.parameters.shapes, this.parameters.options, t);
        });
      var Wa = {
        generateTopUV: function (t, e, i, n, r) {
          var a = e[3 * i],
            o = e[3 * i + 1],
            s = e[3 * n],
            h = e[3 * n + 1],
            l = e[3 * r],
            u = e[3 * r + 1];
          return [new c(a, o), new c(s, h), new c(l, u)];
        },
        generateSideWallUV: function (t, e, i, n, r, a) {
          var o = e[3 * i],
            s = e[3 * i + 1],
            h = e[3 * i + 2],
            l = e[3 * n],
            u = e[3 * n + 1],
            p = e[3 * n + 2],
            d = e[3 * r],
            f = e[3 * r + 1],
            m = e[3 * r + 2],
            v = e[3 * a],
            g = e[3 * a + 1],
            y = e[3 * a + 2];
          return Math.abs(s - u) < 0.01
            ? [
                new c(o, 1 - h),
                new c(l, 1 - p),
                new c(d, 1 - m),
                new c(v, 1 - y),
              ]
            : [
                new c(s, 1 - h),
                new c(u, 1 - p),
                new c(f, 1 - m),
                new c(g, 1 - y),
              ];
        },
      };
      function Ha(t, e, i) {
        if (((i.shapes = []), Array.isArray(t)))
          for (var n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            i.shapes.push(a.uuid);
          }
        else i.shapes.push(t.uuid);
        return (
          void 0 !== e.extrudePath &&
            (i.options.extrudePath = e.extrudePath.toJSON()),
          i
        );
      }
      function qa(t, e) {
        ze.call(this),
          (this.type = "TextGeometry"),
          (this.parameters = { text: t, parameters: e }),
          this.fromBufferGeometry(new Xa(t, e)),
          this.mergeVertices();
      }
      function Xa(t, e) {
        var i = (e = e || {}).font;
        if (!i || !i.isFont) return new ze();
        var n = i.generateShapes(t, e.size);
        (e.depth = void 0 !== e.height ? e.height : 50),
          void 0 === e.bevelThickness && (e.bevelThickness = 10),
          void 0 === e.bevelSize && (e.bevelSize = 8),
          void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
          ka.call(this, n, e),
          (this.type = "TextBufferGeometry");
      }
      function Ya(t, e, i, n, r, a, o) {
        ze.call(this),
          (this.type = "SphereGeometry"),
          (this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o,
          }),
          this.fromBufferGeometry(new Ja(t, e, i, n, r, a, o)),
          this.mergeVertices();
      }
      function Ja(t, e, i, n, r, a, o) {
        le.call(this),
          (this.type = "SphereBufferGeometry"),
          (this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o,
          }),
          (t = t || 1),
          (e = Math.max(3, Math.floor(e) || 8)),
          (i = Math.max(2, Math.floor(i) || 6)),
          (n = void 0 !== n ? n : 0),
          (r = void 0 !== r ? r : 2 * Math.PI),
          (a = void 0 !== a ? a : 0),
          (o = void 0 !== o ? o : Math.PI);
        var s,
          c,
          h = Math.min(a + o, Math.PI),
          l = 0,
          u = [],
          d = new p(),
          f = new p(),
          m = [],
          v = [],
          g = [],
          y = [];
        for (c = 0; c <= i; c++) {
          var x = [],
            _ = c / i,
            b = 0;
          for (
            0 == c && 0 == a
              ? (b = 0.5 / e)
              : c == i && h == Math.PI && (b = -0.5 / e),
              s = 0;
            s <= e;
            s++
          ) {
            var w = s / e;
            (d.x = -t * Math.cos(n + w * r) * Math.sin(a + _ * o)),
              (d.y = t * Math.cos(a + _ * o)),
              (d.z = t * Math.sin(n + w * r) * Math.sin(a + _ * o)),
              v.push(d.x, d.y, d.z),
              f.copy(d).normalize(),
              g.push(f.x, f.y, f.z),
              y.push(w + b, 1 - _),
              x.push(l++);
          }
          u.push(x);
        }
        for (c = 0; c < i; c++)
          for (s = 0; s < e; s++) {
            var M = u[c][s + 1],
              S = u[c][s],
              A = u[c + 1][s],
              T = u[c + 1][s + 1];
            (0 !== c || a > 0) && m.push(M, S, T),
              (c !== i - 1 || h < Math.PI) && m.push(S, A, T);
          }
        this.setIndex(m),
          this.setAttribute("position", new $t(v, 3)),
          this.setAttribute("normal", new $t(g, 3)),
          this.setAttribute("uv", new $t(y, 2));
      }
      function Za(t, e, i, n, r, a) {
        ze.call(this),
          (this.type = "RingGeometry"),
          (this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a,
          }),
          this.fromBufferGeometry(new Qa(t, e, i, n, r, a)),
          this.mergeVertices();
      }
      function Qa(t, e, i, n, r, a) {
        le.call(this),
          (this.type = "RingBufferGeometry"),
          (this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a,
          }),
          (t = t || 0.5),
          (e = e || 1),
          (r = void 0 !== r ? r : 0),
          (a = void 0 !== a ? a : 2 * Math.PI),
          (i = void 0 !== i ? Math.max(3, i) : 8);
        var o,
          s,
          h,
          l = [],
          u = [],
          d = [],
          f = [],
          m = t,
          v = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
          g = new p(),
          y = new c();
        for (s = 0; s <= n; s++) {
          for (h = 0; h <= i; h++)
            (o = r + (h / i) * a),
              (g.x = m * Math.cos(o)),
              (g.y = m * Math.sin(o)),
              u.push(g.x, g.y, g.z),
              d.push(0, 0, 1),
              (y.x = (g.x / e + 1) / 2),
              (y.y = (g.y / e + 1) / 2),
              f.push(y.x, y.y);
          m += v;
        }
        for (s = 0; s < n; s++) {
          var x = s * (i + 1);
          for (h = 0; h < i; h++) {
            var _ = (o = h + x),
              b = o + i + 1,
              w = o + i + 2,
              M = o + 1;
            l.push(_, b, M), l.push(b, w, M);
          }
        }
        this.setIndex(l),
          this.setAttribute("position", new $t(u, 3)),
          this.setAttribute("normal", new $t(d, 3)),
          this.setAttribute("uv", new $t(f, 2));
      }
      function Ka(t, e, i, n) {
        ze.call(this),
          (this.type = "LatheGeometry"),
          (this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n,
          }),
          this.fromBufferGeometry(new $a(t, e, i, n)),
          this.mergeVertices();
      }
      function $a(t, e, i, n) {
        le.call(this),
          (this.type = "LatheBufferGeometry"),
          (this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n,
          }),
          (e = Math.floor(e) || 12),
          (i = i || 0),
          (n = n || 2 * Math.PI),
          (n = s.clamp(n, 0, 2 * Math.PI));
        var r,
          a,
          o,
          h = [],
          l = [],
          u = [],
          d = 1 / e,
          f = new p(),
          m = new c();
        for (a = 0; a <= e; a++) {
          var v = i + a * d * n,
            g = Math.sin(v),
            y = Math.cos(v);
          for (o = 0; o <= t.length - 1; o++)
            (f.x = t[o].x * g),
              (f.y = t[o].y),
              (f.z = t[o].x * y),
              l.push(f.x, f.y, f.z),
              (m.x = a / e),
              (m.y = o / (t.length - 1)),
              u.push(m.x, m.y);
        }
        for (a = 0; a < e; a++)
          for (o = 0; o < t.length - 1; o++) {
            var x = (r = o + a * t.length),
              _ = r + t.length,
              b = r + t.length + 1,
              w = r + 1;
            h.push(x, _, w), h.push(_, b, w);
          }
        if (
          (this.setIndex(h),
          this.setAttribute("position", new $t(l, 3)),
          this.setAttribute("uv", new $t(u, 2)),
          this.computeVertexNormals(),
          n === 2 * Math.PI)
        ) {
          var M = this.attributes.normal.array,
            S = new p(),
            A = new p(),
            T = new p();
          for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3)
            (S.x = M[o + 0]),
              (S.y = M[o + 1]),
              (S.z = M[o + 2]),
              (A.x = M[r + o + 0]),
              (A.y = M[r + o + 1]),
              (A.z = M[r + o + 2]),
              T.addVectors(S, A).normalize(),
              (M[o + 0] = M[r + o + 0] = T.x),
              (M[o + 1] = M[r + o + 1] = T.y),
              (M[o + 2] = M[r + o + 2] = T.z);
        }
      }
      function to(t, e) {
        ze.call(this),
          (this.type = "ShapeGeometry"),
          "object" == typeof e && (e = e.curveSegments),
          (this.parameters = { shapes: t, curveSegments: e }),
          this.fromBufferGeometry(new eo(t, e)),
          this.mergeVertices();
      }
      function eo(t, e) {
        le.call(this),
          (this.type = "ShapeBufferGeometry"),
          (this.parameters = { shapes: t, curveSegments: e }),
          (e = e || 12);
        var i = [],
          n = [],
          r = [],
          a = [],
          o = 0,
          s = 0;
        if (!1 === Array.isArray(t)) h(t);
        else
          for (var c = 0; c < t.length; c++)
            h(t[c]), this.addGroup(o, s, c), (o += s), (s = 0);
        function h(t) {
          var o,
            c,
            h,
            l = n.length / 3,
            u = t.extractPoints(e),
            p = u.shape,
            d = u.holes;
          for (
            !1 === Ba.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length;
            o < c;
            o++
          )
            (h = d[o]), !0 === Ba.isClockWise(h) && (d[o] = h.reverse());
          var f = Ba.triangulateShape(p, d);
          for (o = 0, c = d.length; o < c; o++) (h = d[o]), (p = p.concat(h));
          for (o = 0, c = p.length; o < c; o++) {
            var m = p[o];
            n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y);
          }
          for (o = 0, c = f.length; o < c; o++) {
            var v = f[o],
              g = v[0] + l,
              y = v[1] + l,
              x = v[2] + l;
            i.push(g, y, x), (s += 3);
          }
        }
        this.setIndex(i),
          this.setAttribute("position", new $t(n, 3)),
          this.setAttribute("normal", new $t(r, 3)),
          this.setAttribute("uv", new $t(a, 2));
      }
      function io(t, e) {
        if (((e.shapes = []), Array.isArray(t)))
          for (var i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e.shapes.push(r.uuid);
          }
        else e.shapes.push(t.uuid);
        return e;
      }
      function no(t, e) {
        le.call(this),
          (this.type = "EdgesGeometry"),
          (this.parameters = { thresholdAngle: e }),
          (e = void 0 !== e ? e : 1);
        var i,
          n,
          r,
          a,
          o = [],
          c = Math.cos(s.DEG2RAD * e),
          h = [0, 0],
          l = {},
          u = ["a", "b", "c"];
        t.isBufferGeometry
          ? (a = new ze()).fromBufferGeometry(t)
          : (a = t.clone()),
          a.mergeVertices(),
          a.computeFaceNormals();
        for (var p = a.vertices, d = a.faces, f = 0, m = d.length; f < m; f++)
          for (var v = d[f], g = 0; g < 3; g++)
            (i = v[u[g]]),
              (n = v[u[(g + 1) % 3]]),
              (h[0] = Math.min(i, n)),
              (h[1] = Math.max(i, n)),
              void 0 === l[(r = h[0] + "," + h[1])]
                ? (l[r] = {
                    index1: h[0],
                    index2: h[1],
                    face1: f,
                    face2: void 0,
                  })
                : (l[r].face2 = f);
        for (r in l) {
          var y = l[r];
          if (
            void 0 === y.face2 ||
            d[y.face1].normal.dot(d[y.face2].normal) <= c
          ) {
            var x = p[y.index1];
            o.push(x.x, x.y, x.z), (x = p[y.index2]), o.push(x.x, x.y, x.z);
          }
        }
        this.setAttribute("position", new $t(o, 3));
      }
      function ro(t, e, i, n, r, a, o, s) {
        ze.call(this),
          (this.type = "CylinderGeometry"),
          (this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s,
          }),
          this.fromBufferGeometry(new ao(t, e, i, n, r, a, o, s)),
          this.mergeVertices();
      }
      function ao(t, e, i, n, r, a, o, s) {
        le.call(this),
          (this.type = "CylinderBufferGeometry"),
          (this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s,
          });
        var h = this;
        (t = void 0 !== t ? t : 1),
          (e = void 0 !== e ? e : 1),
          (i = i || 1),
          (n = Math.floor(n) || 8),
          (r = Math.floor(r) || 1),
          (a = void 0 !== a && a),
          (o = void 0 !== o ? o : 0),
          (s = void 0 !== s ? s : 2 * Math.PI);
        var l = [],
          u = [],
          d = [],
          f = [],
          m = 0,
          v = [],
          g = i / 2,
          y = 0;
        function x(i) {
          var r,
            a,
            v,
            x = new c(),
            _ = new p(),
            b = 0,
            w = !0 === i ? t : e,
            M = !0 === i ? 1 : -1;
          for (a = m, r = 1; r <= n; r++)
            u.push(0, g * M, 0), d.push(0, M, 0), f.push(0.5, 0.5), m++;
          for (v = m, r = 0; r <= n; r++) {
            var S = (r / n) * s + o,
              A = Math.cos(S),
              T = Math.sin(S);
            (_.x = w * T),
              (_.y = g * M),
              (_.z = w * A),
              u.push(_.x, _.y, _.z),
              d.push(0, M, 0),
              (x.x = 0.5 * A + 0.5),
              (x.y = 0.5 * T * M + 0.5),
              f.push(x.x, x.y),
              m++;
          }
          for (r = 0; r < n; r++) {
            var L = a + r,
              P = v + r;
            !0 === i ? l.push(P, P + 1, L) : l.push(P + 1, P, L), (b += 3);
          }
          h.addGroup(y, b, !0 === i ? 1 : 2), (y += b);
        }
        !(function () {
          var a,
            c,
            x = new p(),
            _ = new p(),
            b = 0,
            w = (e - t) / i;
          for (c = 0; c <= r; c++) {
            var M = [],
              S = c / r,
              A = S * (e - t) + t;
            for (a = 0; a <= n; a++) {
              var T = a / n,
                L = T * s + o,
                P = Math.sin(L),
                C = Math.cos(L);
              (_.x = A * P),
                (_.y = -S * i + g),
                (_.z = A * C),
                u.push(_.x, _.y, _.z),
                x.set(P, w, C).normalize(),
                d.push(x.x, x.y, x.z),
                f.push(T, 1 - S),
                M.push(m++);
            }
            v.push(M);
          }
          for (a = 0; a < n; a++)
            for (c = 0; c < r; c++) {
              var E = v[c][a],
                O = v[c + 1][a],
                N = v[c + 1][a + 1],
                I = v[c][a + 1];
              l.push(E, O, I), l.push(O, N, I), (b += 6);
            }
          h.addGroup(y, b, 0), (y += b);
        })(),
          !1 === a && (t > 0 && x(!0), e > 0 && x(!1)),
          this.setIndex(l),
          this.setAttribute("position", new $t(u, 3)),
          this.setAttribute("normal", new $t(d, 3)),
          this.setAttribute("uv", new $t(f, 2));
      }
      function oo(t, e, i, n, r, a, o) {
        ro.call(this, 0, t, e, i, n, r, a, o),
          (this.type = "ConeGeometry"),
          (this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o,
          });
      }
      function so(t, e, i, n, r, a, o) {
        ao.call(this, 0, t, e, i, n, r, a, o),
          (this.type = "ConeBufferGeometry"),
          (this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o,
          });
      }
      function co(t, e, i, n) {
        ze.call(this),
          (this.type = "CircleGeometry"),
          (this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n,
          }),
          this.fromBufferGeometry(new ho(t, e, i, n)),
          this.mergeVertices();
      }
      function ho(t, e, i, n) {
        le.call(this),
          (this.type = "CircleBufferGeometry"),
          (this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n,
          }),
          (t = t || 1),
          (e = void 0 !== e ? Math.max(3, e) : 8),
          (i = void 0 !== i ? i : 0),
          (n = void 0 !== n ? n : 2 * Math.PI);
        var r,
          a,
          o = [],
          s = [],
          h = [],
          l = [],
          u = new p(),
          d = new c();
        for (
          s.push(0, 0, 0), h.push(0, 0, 1), l.push(0.5, 0.5), a = 0, r = 3;
          a <= e;
          a++, r += 3
        ) {
          var f = i + (a / e) * n;
          (u.x = t * Math.cos(f)),
            (u.y = t * Math.sin(f)),
            s.push(u.x, u.y, u.z),
            h.push(0, 0, 1),
            (d.x = (s[r] / t + 1) / 2),
            (d.y = (s[r + 1] / t + 1) / 2),
            l.push(d.x, d.y);
        }
        for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
        this.setIndex(o),
          this.setAttribute("position", new $t(s, 3)),
          this.setAttribute("normal", new $t(h, 3)),
          this.setAttribute("uv", new $t(l, 2));
      }
      (qa.prototype = Object.create(ze.prototype)),
        (qa.prototype.constructor = qa),
        (Xa.prototype = Object.create(ka.prototype)),
        (Xa.prototype.constructor = Xa),
        (Ya.prototype = Object.create(ze.prototype)),
        (Ya.prototype.constructor = Ya),
        (Ja.prototype = Object.create(le.prototype)),
        (Ja.prototype.constructor = Ja),
        (Za.prototype = Object.create(ze.prototype)),
        (Za.prototype.constructor = Za),
        (Qa.prototype = Object.create(le.prototype)),
        (Qa.prototype.constructor = Qa),
        (Ka.prototype = Object.create(ze.prototype)),
        (Ka.prototype.constructor = Ka),
        ($a.prototype = Object.create(le.prototype)),
        ($a.prototype.constructor = $a),
        (to.prototype = Object.create(ze.prototype)),
        (to.prototype.constructor = to),
        (to.prototype.toJSON = function () {
          var t = ze.prototype.toJSON.call(this);
          return io(this.parameters.shapes, t);
        }),
        (eo.prototype = Object.create(le.prototype)),
        (eo.prototype.constructor = eo),
        (eo.prototype.toJSON = function () {
          var t = le.prototype.toJSON.call(this);
          return io(this.parameters.shapes, t);
        }),
        (no.prototype = Object.create(le.prototype)),
        (no.prototype.constructor = no),
        (ro.prototype = Object.create(ze.prototype)),
        (ro.prototype.constructor = ro),
        (ao.prototype = Object.create(le.prototype)),
        (ao.prototype.constructor = ao),
        (oo.prototype = Object.create(ro.prototype)),
        (oo.prototype.constructor = oo),
        (so.prototype = Object.create(ao.prototype)),
        (so.prototype.constructor = so),
        (co.prototype = Object.create(ze.prototype)),
        (co.prototype.constructor = co),
        (ho.prototype = Object.create(le.prototype)),
        (ho.prototype.constructor = ho);
      var lo = Object.freeze({
        __proto__: null,
        WireframeGeometry: Kr,
        ParametricGeometry: $r,
        ParametricBufferGeometry: ta,
        TetrahedronGeometry: na,
        TetrahedronBufferGeometry: ra,
        OctahedronGeometry: aa,
        OctahedronBufferGeometry: oa,
        IcosahedronGeometry: sa,
        IcosahedronBufferGeometry: ca,
        DodecahedronGeometry: ha,
        DodecahedronBufferGeometry: la,
        PolyhedronGeometry: ea,
        PolyhedronBufferGeometry: ia,
        TubeGeometry: ua,
        TubeBufferGeometry: pa,
        TorusKnotGeometry: da,
        TorusKnotBufferGeometry: fa,
        TorusGeometry: ma,
        TorusBufferGeometry: va,
        TextGeometry: qa,
        TextBufferGeometry: Xa,
        SphereGeometry: Ya,
        SphereBufferGeometry: Ja,
        RingGeometry: Za,
        RingBufferGeometry: Qa,
        PlaneGeometry: $e,
        PlaneBufferGeometry: ti,
        LatheGeometry: Ka,
        LatheBufferGeometry: $a,
        ShapeGeometry: to,
        ShapeBufferGeometry: eo,
        ExtrudeGeometry: ja,
        ExtrudeBufferGeometry: ka,
        EdgesGeometry: no,
        ConeGeometry: oo,
        ConeBufferGeometry: so,
        CylinderGeometry: ro,
        CylinderBufferGeometry: ao,
        CircleGeometry: co,
        CircleBufferGeometry: ho,
        BoxGeometry: class extends ze {
          constructor(t, e, i, n, r, a) {
            super(),
              (this.type = "BoxGeometry"),
              (this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: a,
              }),
              this.fromBufferGeometry(new Re(t, e, i, n, r, a)),
              this.mergeVertices();
          }
        },
        BoxBufferGeometry: Re,
      });
      function uo(t) {
        kt.call(this),
          (this.type = "ShadowMaterial"),
          (this.color = new Ft(0)),
          (this.transparent = !0),
          this.setValues(t);
      }
      function po(t) {
        Be.call(this, t), (this.type = "RawShaderMaterial");
      }
      function fo(t) {
        kt.call(this),
          (this.defines = { STANDARD: "" }),
          (this.type = "MeshStandardMaterial"),
          (this.color = new Ft(16777215)),
          (this.roughness = 0.5),
          (this.metalness = 0.5),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.emissive = new Ft(0)),
          (this.emissiveIntensity = 1),
          (this.emissiveMap = null),
          (this.bumpMap = null),
          (this.bumpScale = 1),
          (this.normalMap = null),
          (this.normalMapType = 0),
          (this.normalScale = new c(1, 1)),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.roughnessMap = null),
          (this.metalnessMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.envMapIntensity = 1),
          (this.refractionRatio = 0.98),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          this.setValues(t);
      }
      function mo(t) {
        fo.call(this),
          (this.defines = { STANDARD: "", PHYSICAL: "" }),
          (this.type = "MeshPhysicalMaterial"),
          (this.reflectivity = 0.5),
          (this.clearcoat = 0),
          (this.clearcoatRoughness = 0),
          (this.sheen = null),
          (this.clearcoatNormalScale = new c(1, 1)),
          (this.clearcoatNormalMap = null),
          (this.transparency = 0),
          this.setValues(t);
      }
      function vo(t) {
        kt.call(this),
          (this.type = "MeshPhongMaterial"),
          (this.color = new Ft(16777215)),
          (this.specular = new Ft(1118481)),
          (this.shininess = 30),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.emissive = new Ft(0)),
          (this.emissiveIntensity = 1),
          (this.emissiveMap = null),
          (this.bumpMap = null),
          (this.bumpScale = 1),
          (this.normalMap = null),
          (this.normalMapType = 0),
          (this.normalScale = new c(1, 1)),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.specularMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.combine = 0),
          (this.reflectivity = 1),
          (this.refractionRatio = 0.98),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          this.setValues(t);
      }
      function go(t) {
        vo.call(this),
          (this.defines = { TOON: "" }),
          (this.type = "MeshToonMaterial"),
          (this.gradientMap = null),
          this.setValues(t);
      }
      function yo(t) {
        kt.call(this),
          (this.type = "MeshNormalMaterial"),
          (this.bumpMap = null),
          (this.bumpScale = 1),
          (this.normalMap = null),
          (this.normalMapType = 0),
          (this.normalScale = new c(1, 1)),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.fog = !1),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          this.setValues(t);
      }
      function xo(t) {
        kt.call(this),
          (this.type = "MeshLambertMaterial"),
          (this.color = new Ft(16777215)),
          (this.map = null),
          (this.lightMap = null),
          (this.lightMapIntensity = 1),
          (this.aoMap = null),
          (this.aoMapIntensity = 1),
          (this.emissive = new Ft(0)),
          (this.emissiveIntensity = 1),
          (this.emissiveMap = null),
          (this.specularMap = null),
          (this.alphaMap = null),
          (this.envMap = null),
          (this.combine = 0),
          (this.reflectivity = 1),
          (this.refractionRatio = 0.98),
          (this.wireframe = !1),
          (this.wireframeLinewidth = 1),
          (this.wireframeLinecap = "round"),
          (this.wireframeLinejoin = "round"),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          this.setValues(t);
      }
      function _o(t) {
        kt.call(this),
          (this.defines = { MATCAP: "" }),
          (this.type = "MeshMatcapMaterial"),
          (this.color = new Ft(16777215)),
          (this.matcap = null),
          (this.map = null),
          (this.bumpMap = null),
          (this.bumpScale = 1),
          (this.normalMap = null),
          (this.normalMapType = 0),
          (this.normalScale = new c(1, 1)),
          (this.displacementMap = null),
          (this.displacementScale = 1),
          (this.displacementBias = 0),
          (this.alphaMap = null),
          (this.skinning = !1),
          (this.morphTargets = !1),
          (this.morphNormals = !1),
          this.setValues(t);
      }
      function bo(t) {
        Er.call(this),
          (this.type = "LineDashedMaterial"),
          (this.scale = 1),
          (this.dashSize = 3),
          (this.gapSize = 1),
          this.setValues(t);
      }
      (uo.prototype = Object.create(kt.prototype)),
        (uo.prototype.constructor = uo),
        (uo.prototype.isShadowMaterial = !0),
        (uo.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t), this.color.copy(t.color), this
          );
        }),
        (po.prototype = Object.create(Be.prototype)),
        (po.prototype.constructor = po),
        (po.prototype.isRawShaderMaterial = !0),
        (fo.prototype = Object.create(kt.prototype)),
        (fo.prototype.constructor = fo),
        (fo.prototype.isMeshStandardMaterial = !0),
        (fo.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            (this.defines = { STANDARD: "" }),
            this.color.copy(t.color),
            (this.roughness = t.roughness),
            (this.metalness = t.metalness),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.roughnessMap = t.roughnessMap),
            (this.metalnessMap = t.metalnessMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.envMapIntensity = t.envMapIntensity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            this
          );
        }),
        (mo.prototype = Object.create(fo.prototype)),
        (mo.prototype.constructor = mo),
        (mo.prototype.isMeshPhysicalMaterial = !0),
        (mo.prototype.copy = function (t) {
          return (
            fo.prototype.copy.call(this, t),
            (this.defines = { STANDARD: "", PHYSICAL: "" }),
            (this.reflectivity = t.reflectivity),
            (this.clearcoat = t.clearcoat),
            (this.clearcoatRoughness = t.clearcoatRoughness),
            t.sheen
              ? (this.sheen = (this.sheen || new Ft()).copy(t.sheen))
              : (this.sheen = null),
            (this.clearcoatNormalMap = t.clearcoatNormalMap),
            this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
            (this.transparency = t.transparency),
            this
          );
        }),
        (vo.prototype = Object.create(kt.prototype)),
        (vo.prototype.constructor = vo),
        (vo.prototype.isMeshPhongMaterial = !0),
        (vo.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.specular.copy(t.specular),
            (this.shininess = t.shininess),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            this
          );
        }),
        (go.prototype = Object.create(vo.prototype)),
        (go.prototype.constructor = go),
        (go.prototype.isMeshToonMaterial = !0),
        (go.prototype.copy = function (t) {
          return (
            vo.prototype.copy.call(this, t),
            (this.gradientMap = t.gradientMap),
            this
          );
        }),
        (yo.prototype = Object.create(kt.prototype)),
        (yo.prototype.constructor = yo),
        (yo.prototype.isMeshNormalMaterial = !0),
        (yo.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            this
          );
        }),
        (xo.prototype = Object.create(kt.prototype)),
        (xo.prototype.constructor = xo),
        (xo.prototype.isMeshLambertMaterial = !0),
        (xo.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            this
          );
        }),
        (_o.prototype = Object.create(kt.prototype)),
        (_o.prototype.constructor = _o),
        (_o.prototype.isMeshMatcapMaterial = !0),
        (_o.prototype.copy = function (t) {
          return (
            kt.prototype.copy.call(this, t),
            (this.defines = { MATCAP: "" }),
            this.color.copy(t.color),
            (this.matcap = t.matcap),
            (this.map = t.map),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.alphaMap = t.alphaMap),
            (this.skinning = t.skinning),
            (this.morphTargets = t.morphTargets),
            (this.morphNormals = t.morphNormals),
            this
          );
        }),
        (bo.prototype = Object.create(Er.prototype)),
        (bo.prototype.constructor = bo),
        (bo.prototype.isLineDashedMaterial = !0),
        (bo.prototype.copy = function (t) {
          return (
            Er.prototype.copy.call(this, t),
            (this.scale = t.scale),
            (this.dashSize = t.dashSize),
            (this.gapSize = t.gapSize),
            this
          );
        });
      var wo = Object.freeze({
          __proto__: null,
          ShadowMaterial: uo,
          SpriteMaterial: or,
          RawShaderMaterial: po,
          ShaderMaterial: Be,
          PointsMaterial: Gr,
          MeshPhysicalMaterial: mo,
          MeshStandardMaterial: fo,
          MeshPhongMaterial: vo,
          MeshToonMaterial: go,
          MeshNormalMaterial: yo,
          MeshLambertMaterial: xo,
          MeshDepthMaterial: Bn,
          MeshDistanceMaterial: Vn,
          MeshBasicMaterial: Wt,
          MeshMatcapMaterial: _o,
          LineDashedMaterial: bo,
          LineBasicMaterial: Er,
          Material: kt,
        }),
        Mo = {
          arraySlice: function (t, e, i) {
            return Mo.isTypedArray(t)
              ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length))
              : t.slice(e, i);
          },
          convertArray: function (t, e, i) {
            return !t || (!i && t.constructor === e)
              ? t
              : "number" == typeof e.BYTES_PER_ELEMENT
              ? new e(t)
              : Array.prototype.slice.call(t);
          },
          isTypedArray: function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
          },
          getKeyframeOrder: function (t) {
            for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n)
              i[n] = n;
            return (
              i.sort(function (e, i) {
                return t[e] - t[i];
              }),
              i
            );
          },
          sortedArray: function (t, e, i) {
            for (
              var n = t.length, r = new t.constructor(n), a = 0, o = 0;
              o !== n;
              ++a
            )
              for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
            return r;
          },
          flattenJSON: function (t, e, i, n) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n]; )
              a = t[r++];
            if (void 0 !== a) {
              var o = a[n];
              if (void 0 !== o)
                if (Array.isArray(o))
                  do {
                    void 0 !== (o = a[n]) &&
                      (e.push(a.time), i.push.apply(i, o)),
                      (a = t[r++]);
                  } while (void 0 !== a);
                else if (void 0 !== o.toArray)
                  do {
                    void 0 !== (o = a[n]) &&
                      (e.push(a.time), o.toArray(i, i.length)),
                      (a = t[r++]);
                  } while (void 0 !== a);
                else
                  do {
                    void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)),
                      (a = t[r++]);
                  } while (void 0 !== a);
            }
          },
          subclip: function (t, e, i, n, r) {
            r = r || 30;
            var a = t.clone();
            a.name = e;
            for (var o = [], s = 0; s < a.tracks.length; ++s) {
              for (
                var c = a.tracks[s],
                  h = c.getValueSize(),
                  l = [],
                  u = [],
                  p = 0;
                p < c.times.length;
                ++p
              ) {
                var d = c.times[p] * r;
                if (!(d < i || d >= n)) {
                  l.push(c.times[p]);
                  for (var f = 0; f < h; ++f) u.push(c.values[p * h + f]);
                }
              }
              0 !== l.length &&
                ((c.times = Mo.convertArray(l, c.times.constructor)),
                (c.values = Mo.convertArray(u, c.values.constructor)),
                o.push(c));
            }
            a.tracks = o;
            var m = 1 / 0;
            for (s = 0; s < a.tracks.length; ++s)
              m > a.tracks[s].times[0] && (m = a.tracks[s].times[0]);
            for (s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * m);
            return a.resetDuration(), a;
          },
        };
      function So(t, e, i, n) {
        (this.parameterPositions = t),
          (this._cachedIndex = 0),
          (this.resultBuffer = void 0 !== n ? n : new e.constructor(i)),
          (this.sampleValues = e),
          (this.valueSize = i);
      }
      function Ao(t, e, i, n) {
        So.call(this, t, e, i, n),
          (this._weightPrev = -0),
          (this._offsetPrev = -0),
          (this._weightNext = -0),
          (this._offsetNext = -0);
      }
      function To(t, e, i, n) {
        So.call(this, t, e, i, n);
      }
      function Lo(t, e, i, n) {
        So.call(this, t, e, i, n);
      }
      function Po(t, e, i, n) {
        if (void 0 === t)
          throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length)
          throw new Error(
            "THREE.KeyframeTrack: no keyframes in track named " + t
          );
        (this.name = t),
          (this.times = Mo.convertArray(e, this.TimeBufferType)),
          (this.values = Mo.convertArray(i, this.ValueBufferType)),
          this.setInterpolation(n || this.DefaultInterpolation);
      }
      function Co(t, e, i) {
        Po.call(this, t, e, i);
      }
      function Eo(t, e, i, n) {
        Po.call(this, t, e, i, n);
      }
      function Oo(t, e, i, n) {
        Po.call(this, t, e, i, n);
      }
      function No(t, e, i, n) {
        So.call(this, t, e, i, n);
      }
      function Io(t, e, i, n) {
        Po.call(this, t, e, i, n);
      }
      function Do(t, e, i, n) {
        Po.call(this, t, e, i, n);
      }
      function zo(t, e, i, n) {
        Po.call(this, t, e, i, n);
      }
      function Ro(t, e, i) {
        (this.name = t),
          (this.tracks = i),
          (this.duration = void 0 !== e ? e : -1),
          (this.uuid = s.generateUUID()),
          this.duration < 0 && this.resetDuration();
      }
      function Fo(t) {
        if (void 0 === t.type)
          throw new Error(
            "THREE.KeyframeTrack: track type undefined, can not parse"
          );
        var e = (function (t) {
          switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
              return Oo;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
              return zo;
            case "color":
              return Eo;
            case "quaternion":
              return Io;
            case "bool":
            case "boolean":
              return Co;
            case "string":
              return Do;
          }
          throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        })(t.type);
        if (void 0 === t.times) {
          var i = [],
            n = [];
          Mo.flattenJSON(t.keys, i, n, "value"), (t.times = i), (t.values = n);
        }
        return void 0 !== e.parse
          ? e.parse(t)
          : new e(t.name, t.times, t.values, t.interpolation);
      }
      Object.assign(So.prototype, {
        evaluate: function (t) {
          var e = this.parameterPositions,
            i = this._cachedIndex,
            n = e[i],
            r = e[i - 1];
          t: {
            e: {
              var a;
              i: {
                n: if (!(t < n)) {
                  for (var o = i + 2; ; ) {
                    if (void 0 === n) {
                      if (t < r) break n;
                      return (
                        (i = e.length),
                        (this._cachedIndex = i),
                        this.afterEnd_(i - 1, t, r)
                      );
                    }
                    if (i === o) break;
                    if (((r = n), t < (n = e[++i]))) break e;
                  }
                  a = e.length;
                  break i;
                }
                if (t >= r) break t;
                var s = e[1];
                t < s && ((i = 2), (r = s));
                for (o = i - 2; ; ) {
                  if (void 0 === r)
                    return (this._cachedIndex = 0), this.beforeStart_(0, t, n);
                  if (i === o) break;
                  if (((n = r), t >= (r = e[--i - 1]))) break e;
                }
                (a = i), (i = 0);
              }
              for (; i < a; ) {
                var c = (i + a) >>> 1;
                t < e[c] ? (a = c) : (i = c + 1);
              }
              if (((n = e[i]), void 0 === (r = e[i - 1])))
                return (this._cachedIndex = 0), this.beforeStart_(0, t, n);
              if (void 0 === n)
                return (
                  (i = e.length),
                  (this._cachedIndex = i),
                  this.afterEnd_(i - 1, r, t)
                );
            }
            (this._cachedIndex = i), this.intervalChanged_(i, r, n);
          }
          return this.interpolate_(i, r, t, n);
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function () {
          return this.settings || this.DefaultSettings_;
        },
        copySampleValue_: function (t) {
          for (
            var e = this.resultBuffer,
              i = this.sampleValues,
              n = this.valueSize,
              r = t * n,
              a = 0;
            a !== n;
            ++a
          )
            e[a] = i[r + a];
          return e;
        },
        interpolate_: function () {
          throw new Error("call to abstract method");
        },
        intervalChanged_: function () {},
      }),
        Object.assign(So.prototype, {
          beforeStart_: So.prototype.copySampleValue_,
          afterEnd_: So.prototype.copySampleValue_,
        }),
        (Ao.prototype = Object.assign(Object.create(So.prototype), {
          constructor: Ao,
          DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
          intervalChanged_: function (t, e, i) {
            var n = this.parameterPositions,
              r = t - 2,
              a = t + 1,
              o = n[r],
              s = n[a];
            if (void 0 === o)
              switch (this.getSettings_().endingStart) {
                case 2401:
                  (r = t), (o = 2 * e - i);
                  break;
                case 2402:
                  o = e + n[(r = n.length - 2)] - n[r + 1];
                  break;
                default:
                  (r = t), (o = i);
              }
            if (void 0 === s)
              switch (this.getSettings_().endingEnd) {
                case 2401:
                  (a = t), (s = 2 * i - e);
                  break;
                case 2402:
                  (a = 1), (s = i + n[1] - n[0]);
                  break;
                default:
                  (a = t - 1), (s = e);
              }
            var c = 0.5 * (i - e),
              h = this.valueSize;
            (this._weightPrev = c / (e - o)),
              (this._weightNext = c / (s - i)),
              (this._offsetPrev = r * h),
              (this._offsetNext = a * h);
          },
          interpolate_: function (t, e, i, n) {
            for (
              var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize,
                s = t * o,
                c = s - o,
                h = this._offsetPrev,
                l = this._offsetNext,
                u = this._weightPrev,
                p = this._weightNext,
                d = (i - e) / (n - e),
                f = d * d,
                m = f * d,
                v = -u * m + 2 * u * f - u * d,
                g = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * d + 1,
                y = (-1 - p) * m + (1.5 + p) * f + 0.5 * d,
                x = p * m - p * f,
                _ = 0;
              _ !== o;
              ++_
            )
              r[_] = v * a[h + _] + g * a[c + _] + y * a[s + _] + x * a[l + _];
            return r;
          },
        })),
        (To.prototype = Object.assign(Object.create(So.prototype), {
          constructor: To,
          interpolate_: function (t, e, i, n) {
            for (
              var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize,
                s = t * o,
                c = s - o,
                h = (i - e) / (n - e),
                l = 1 - h,
                u = 0;
              u !== o;
              ++u
            )
              r[u] = a[c + u] * l + a[s + u] * h;
            return r;
          },
        })),
        (Lo.prototype = Object.assign(Object.create(So.prototype), {
          constructor: Lo,
          interpolate_: function (t) {
            return this.copySampleValue_(t - 1);
          },
        })),
        Object.assign(Po, {
          toJSON: function (t) {
            var e,
              i = t.constructor;
            if (void 0 !== i.toJSON) e = i.toJSON(t);
            else {
              e = {
                name: t.name,
                times: Mo.convertArray(t.times, Array),
                values: Mo.convertArray(t.values, Array),
              };
              var n = t.getInterpolation();
              n !== t.DefaultInterpolation && (e.interpolation = n);
            }
            return (e.type = t.ValueTypeName), e;
          },
        }),
        Object.assign(Po.prototype, {
          constructor: Po,
          TimeBufferType: Float32Array,
          ValueBufferType: Float32Array,
          DefaultInterpolation: 2301,
          InterpolantFactoryMethodDiscrete: function (t) {
            return new Lo(this.times, this.values, this.getValueSize(), t);
          },
          InterpolantFactoryMethodLinear: function (t) {
            return new To(this.times, this.values, this.getValueSize(), t);
          },
          InterpolantFactoryMethodSmooth: function (t) {
            return new Ao(this.times, this.values, this.getValueSize(), t);
          },
          setInterpolation: function (t) {
            var e;
            switch (t) {
              case 2300:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
              case 2301:
                e = this.InterpolantFactoryMethodLinear;
                break;
              case 2302:
                e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
              var i =
                "unsupported interpolation for " +
                this.ValueTypeName +
                " keyframe track named " +
                this.name;
              if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation) throw new Error(i);
                this.setInterpolation(this.DefaultInterpolation);
              }
              return this;
            }
            return (this.createInterpolant = e), this;
          },
          getInterpolation: function () {
            switch (this.createInterpolant) {
              case this.InterpolantFactoryMethodDiscrete:
                return 2300;
              case this.InterpolantFactoryMethodLinear:
                return 2301;
              case this.InterpolantFactoryMethodSmooth:
                return 2302;
            }
          },
          getValueSize: function () {
            return this.values.length / this.times.length;
          },
          shift: function (t) {
            if (0 !== t)
              for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                e[i] += t;
            return this;
          },
          scale: function (t) {
            if (1 !== t)
              for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                e[i] *= t;
            return this;
          },
          trim: function (t, e) {
            for (
              var i = this.times, n = i.length, r = 0, a = n - 1;
              r !== n && i[r] < t;

            )
              ++r;
            for (; -1 !== a && i[a] > e; ) --a;
            if ((++a, 0 !== r || a !== n)) {
              r >= a && (r = (a = Math.max(a, 1)) - 1);
              var o = this.getValueSize();
              (this.times = Mo.arraySlice(i, r, a)),
                (this.values = Mo.arraySlice(this.values, r * o, a * o));
            }
            return this;
          },
          validate: function () {
            var t = !0,
              e = this.getValueSize();
            e - Math.floor(e) != 0 && (t = !1);
            var i = this.times,
              n = this.values,
              r = i.length;
            0 === r && (t = !1);
            for (var a = null, o = 0; o !== r; o++) {
              var s = i[o];
              if ("number" == typeof s && isNaN(s)) {
                t = !1;
                break;
              }
              if (null !== a && a > s) {
                t = !1;
                break;
              }
              a = s;
            }
            if (void 0 !== n && Mo.isTypedArray(n)) {
              o = 0;
              for (var c = n.length; o !== c; ++o) {
                var h = n[o];
                if (isNaN(h)) {
                  t = !1;
                  break;
                }
              }
            }
            return t;
          },
          optimize: function () {
            for (
              var t = this.times,
                e = this.values,
                i = this.getValueSize(),
                n = 2302 === this.getInterpolation(),
                r = 1,
                a = t.length - 1,
                o = 1;
              o < a;
              ++o
            ) {
              var s = !1,
                c = t[o];
              if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                if (n) s = !0;
                else
                  for (
                    var h = o * i, l = h - i, u = h + i, p = 0;
                    p !== i;
                    ++p
                  ) {
                    var d = e[h + p];
                    if (d !== e[l + p] || d !== e[u + p]) {
                      s = !0;
                      break;
                    }
                  }
              if (s) {
                if (o !== r) {
                  t[r] = t[o];
                  var f = o * i,
                    m = r * i;
                  for (p = 0; p !== i; ++p) e[m + p] = e[f + p];
                }
                ++r;
              }
            }
            if (a > 0) {
              t[r] = t[a];
              for (f = a * i, m = r * i, p = 0; p !== i; ++p)
                e[m + p] = e[f + p];
              ++r;
            }
            return (
              r !== t.length &&
                ((this.times = Mo.arraySlice(t, 0, r)),
                (this.values = Mo.arraySlice(e, 0, r * i))),
              this
            );
          },
          clone: function () {
            var t = Mo.arraySlice(this.times, 0),
              e = Mo.arraySlice(this.values, 0),
              i = new (0, this.constructor)(this.name, t, e);
            return (i.createInterpolant = this.createInterpolant), i;
          },
        }),
        (Co.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: Co,
          ValueTypeName: "bool",
          ValueBufferType: Array,
          DefaultInterpolation: 2300,
          InterpolantFactoryMethodLinear: void 0,
          InterpolantFactoryMethodSmooth: void 0,
        })),
        (Eo.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: Eo,
          ValueTypeName: "color",
        })),
        (Oo.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: Oo,
          ValueTypeName: "number",
        })),
        (No.prototype = Object.assign(Object.create(So.prototype), {
          constructor: No,
          interpolate_: function (t, e, i, n) {
            for (
              var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize,
                s = t * o,
                c = (i - e) / (n - e),
                l = s + o;
              s !== l;
              s += 4
            )
              h.slerpFlat(r, 0, a, s - o, a, s, c);
            return r;
          },
        })),
        (Io.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: Io,
          ValueTypeName: "quaternion",
          DefaultInterpolation: 2301,
          InterpolantFactoryMethodLinear: function (t) {
            return new No(this.times, this.values, this.getValueSize(), t);
          },
          InterpolantFactoryMethodSmooth: void 0,
        })),
        (Do.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: Do,
          ValueTypeName: "string",
          ValueBufferType: Array,
          DefaultInterpolation: 2300,
          InterpolantFactoryMethodLinear: void 0,
          InterpolantFactoryMethodSmooth: void 0,
        })),
        (zo.prototype = Object.assign(Object.create(Po.prototype), {
          constructor: zo,
          ValueTypeName: "vector",
        })),
        Object.assign(Ro, {
          parse: function (t) {
            for (
              var e = [],
                i = t.tracks,
                n = 1 / (t.fps || 1),
                r = 0,
                a = i.length;
              r !== a;
              ++r
            )
              e.push(Fo(i[r]).scale(n));
            return new Ro(t.name, t.duration, e);
          },
          toJSON: function (t) {
            for (
              var e = [],
                i = t.tracks,
                n = {
                  name: t.name,
                  duration: t.duration,
                  tracks: e,
                  uuid: t.uuid,
                },
                r = 0,
                a = i.length;
              r !== a;
              ++r
            )
              e.push(Po.toJSON(i[r]));
            return n;
          },
          CreateFromMorphTargetSequence: function (t, e, i, n) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
              var s = [],
                c = [];
              s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
              var h = Mo.getKeyframeOrder(s);
              (s = Mo.sortedArray(s, 1, h)),
                (c = Mo.sortedArray(c, 1, h)),
                n || 0 !== s[0] || (s.push(r), c.push(c[0])),
                a.push(
                  new Oo(
                    ".morphTargetInfluences[" + e[o].name + "]",
                    s,
                    c
                  ).scale(1 / i)
                );
            }
            return new Ro(t, -1, a);
          },
          findByName: function (t, e) {
            var i = t;
            if (!Array.isArray(t)) {
              var n = t;
              i = (n.geometry && n.geometry.animations) || n.animations;
            }
            for (var r = 0; r < i.length; r++) if (i[r].name === e) return i[r];
            return null;
          },
          CreateClipsFromMorphTargetSequences: function (t, e, i) {
            for (
              var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length;
              a < o;
              a++
            ) {
              var s = t[a],
                c = s.name.match(r);
              if (c && c.length > 1) {
                var h = n[(u = c[1])];
                h || (n[u] = h = []), h.push(s);
              }
            }
            var l = [];
            for (var u in n)
              l.push(Ro.CreateFromMorphTargetSequence(u, n[u], e, i));
            return l;
          },
          parseAnimation: function (t, e) {
            if (!t) return null;
            for (
              var i = function (t, e, i, n, r) {
                  if (0 !== i.length) {
                    var a = [],
                      o = [];
                    Mo.flattenJSON(i, a, o, n),
                      0 !== a.length && r.push(new t(e, a, o));
                  }
                },
                n = [],
                r = t.name || "default",
                a = t.length || -1,
                o = t.fps || 30,
                s = t.hierarchy || [],
                c = 0;
              c < s.length;
              c++
            ) {
              var h = s[c].keys;
              if (h && 0 !== h.length)
                if (h[0].morphTargets) {
                  for (var l = {}, u = 0; u < h.length; u++)
                    if (h[u].morphTargets)
                      for (var p = 0; p < h[u].morphTargets.length; p++)
                        l[h[u].morphTargets[p]] = -1;
                  for (var d in l) {
                    var f = [],
                      m = [];
                    for (p = 0; p !== h[u].morphTargets.length; ++p) {
                      var v = h[u];
                      f.push(v.time), m.push(v.morphTarget === d ? 1 : 0);
                    }
                    n.push(new Oo(".morphTargetInfluence[" + d + "]", f, m));
                  }
                  a = l.length * (o || 1);
                } else {
                  var g = ".bones[" + e[c].name + "]";
                  i(zo, g + ".position", h, "pos", n),
                    i(Io, g + ".quaternion", h, "rot", n),
                    i(zo, g + ".scale", h, "scl", n);
                }
            }
            return 0 === n.length ? null : new Ro(r, a, n);
          },
        }),
        Object.assign(Ro.prototype, {
          resetDuration: function () {
            for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
              var n = this.tracks[e];
              t = Math.max(t, n.times[n.times.length - 1]);
            }
            return (this.duration = t), this;
          },
          trim: function () {
            for (var t = 0; t < this.tracks.length; t++)
              this.tracks[t].trim(0, this.duration);
            return this;
          },
          validate: function () {
            for (var t = !0, e = 0; e < this.tracks.length; e++)
              t = t && this.tracks[e].validate();
            return t;
          },
          optimize: function () {
            for (var t = 0; t < this.tracks.length; t++)
              this.tracks[t].optimize();
            return this;
          },
          clone: function () {
            for (var t = [], e = 0; e < this.tracks.length; e++)
              t.push(this.tracks[e].clone());
            return new Ro(this.name, this.duration, t);
          },
        });
      var Uo = {
        enabled: !1,
        files: {},
        add: function (t, e) {
          !1 !== this.enabled && (this.files[t] = e);
        },
        get: function (t) {
          if (!1 !== this.enabled) return this.files[t];
        },
        remove: function (t) {
          delete this.files[t];
        },
        clear: function () {
          this.files = {};
        },
      };
      function Bo(t, e, i) {
        var n = this,
          r = !1,
          a = 0,
          o = 0,
          s = void 0,
          c = [];
        (this.onStart = void 0),
          (this.onLoad = t),
          (this.onProgress = e),
          (this.onError = i),
          (this.itemStart = function (t) {
            o++,
              !1 === r && void 0 !== n.onStart && n.onStart(t, a, o),
              (r = !0);
          }),
          (this.itemEnd = function (t) {
            a++,
              void 0 !== n.onProgress && n.onProgress(t, a, o),
              a === o && ((r = !1), void 0 !== n.onLoad && n.onLoad());
          }),
          (this.itemError = function (t) {
            void 0 !== n.onError && n.onError(t);
          }),
          (this.resolveURL = function (t) {
            return s ? s(t) : t;
          }),
          (this.setURLModifier = function (t) {
            return (s = t), this;
          }),
          (this.addHandler = function (t, e) {
            return c.push(t, e), this;
          }),
          (this.removeHandler = function (t) {
            var e = c.indexOf(t);
            return -1 !== e && c.splice(e, 2), this;
          }),
          (this.getHandler = function (t) {
            for (var e = 0, i = c.length; e < i; e += 2) {
              var n = c[e],
                r = c[e + 1];
              if (n.test(t)) return r;
            }
            return null;
          });
      }
      var Vo = new Bo();
      function Go(t) {
        (this.manager = void 0 !== t ? t : Vo),
          (this.crossOrigin = "anonymous"),
          (this.path = ""),
          (this.resourcePath = "");
      }
      Object.assign(Go.prototype, {
        load: function () {},
        parse: function () {},
        setCrossOrigin: function (t) {
          return (this.crossOrigin = t), this;
        },
        setPath: function (t) {
          return (this.path = t), this;
        },
        setResourcePath: function (t) {
          return (this.resourcePath = t), this;
        },
      });
      var jo = {};
      function ko(t) {
        Go.call(this, t);
      }
      function Wo(t) {
        Go.call(this, t);
      }
      function Ho(t) {
        Go.call(this, t);
      }
      function qo(t) {
        Go.call(this, t);
      }
      function Xo(t) {
        Go.call(this, t);
      }
      function Yo(t) {
        Go.call(this, t);
      }
      function Jo(t) {
        Go.call(this, t);
      }
      function Zo() {
        (this.type = "Curve"), (this.arcLengthDivisions = 200);
      }
      function Qo(t, e, i, n, r, a, o, s) {
        Zo.call(this),
          (this.type = "EllipseCurve"),
          (this.aX = t || 0),
          (this.aY = e || 0),
          (this.xRadius = i || 1),
          (this.yRadius = n || 1),
          (this.aStartAngle = r || 0),
          (this.aEndAngle = a || 2 * Math.PI),
          (this.aClockwise = o || !1),
          (this.aRotation = s || 0);
      }
      function Ko(t, e, i, n, r, a) {
        Qo.call(this, t, e, i, i, n, r, a), (this.type = "ArcCurve");
      }
      function $o() {
        var t = 0,
          e = 0,
          i = 0,
          n = 0;
        function r(r, a, o, s) {
          (t = r),
            (e = o),
            (i = -3 * r + 3 * a - 2 * o - s),
            (n = 2 * r - 2 * a + o + s);
        }
        return {
          initCatmullRom: function (t, e, i, n, a) {
            r(e, i, a * (i - t), a * (n - e));
          },
          initNonuniformCatmullRom: function (t, e, i, n, a, o, s) {
            var c = (e - t) / a - (i - t) / (a + o) + (i - e) / o,
              h = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
            r(e, i, (c *= o), (h *= o));
          },
          calc: function (r) {
            var a = r * r;
            return t + e * r + i * a + n * (a * r);
          },
        };
      }
      (ko.prototype = Object.assign(Object.create(Go.prototype), {
        constructor: ko,
        load: function (t, e, i, n) {
          void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          var r = this,
            a = Uo.get(t);
          if (void 0 !== a)
            return (
              r.manager.itemStart(t),
              setTimeout(function () {
                e && e(a), r.manager.itemEnd(t);
              }, 0),
              a
            );
          if (void 0 === jo[t]) {
            var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            if (o) {
              var s = o[1],
                c = !!o[2],
                h = o[3];
              (h = decodeURIComponent(h)), c && (h = atob(h));
              try {
                var l,
                  u = (this.responseType || "").toLowerCase();
                switch (u) {
                  case "arraybuffer":
                  case "blob":
                    for (
                      var p = new Uint8Array(h.length), d = 0;
                      d < h.length;
                      d++
                    )
                      p[d] = h.charCodeAt(d);
                    l =
                      "blob" === u
                        ? new Blob([p.buffer], { type: s })
                        : p.buffer;
                    break;
                  case "document":
                    var f = new DOMParser();
                    l = f.parseFromString(h, s);
                    break;
                  case "json":
                    l = JSON.parse(h);
                    break;
                  default:
                    l = h;
                }
                setTimeout(function () {
                  e && e(l), r.manager.itemEnd(t);
                }, 0);
              } catch (e) {
                setTimeout(function () {
                  n && n(e), r.manager.itemError(t), r.manager.itemEnd(t);
                }, 0);
              }
            } else {
              (jo[t] = []),
                jo[t].push({ onLoad: e, onProgress: i, onError: n });
              var m = new XMLHttpRequest();
              for (var v in (m.open("GET", t, !0),
              m.addEventListener(
                "load",
                function (e) {
                  var i = this.response,
                    n = jo[t];
                  if (
                    (delete jo[t], 200 === this.status || 0 === this.status)
                  ) {
                    this.status, Uo.add(t, i);
                    for (var a = 0, o = n.length; a < o; a++) {
                      (s = n[a]).onLoad && s.onLoad(i);
                    }
                    r.manager.itemEnd(t);
                  } else {
                    for (a = 0, o = n.length; a < o; a++) {
                      var s;
                      (s = n[a]).onError && s.onError(e);
                    }
                    r.manager.itemError(t), r.manager.itemEnd(t);
                  }
                },
                !1
              ),
              m.addEventListener(
                "progress",
                function (e) {
                  for (var i = jo[t], n = 0, r = i.length; n < r; n++) {
                    var a = i[n];
                    a.onProgress && a.onProgress(e);
                  }
                },
                !1
              ),
              m.addEventListener(
                "error",
                function (e) {
                  var i = jo[t];
                  delete jo[t];
                  for (var n = 0, a = i.length; n < a; n++) {
                    var o = i[n];
                    o.onError && o.onError(e);
                  }
                  r.manager.itemError(t), r.manager.itemEnd(t);
                },
                !1
              ),
              m.addEventListener(
                "abort",
                function (e) {
                  var i = jo[t];
                  delete jo[t];
                  for (var n = 0, a = i.length; n < a; n++) {
                    var o = i[n];
                    o.onError && o.onError(e);
                  }
                  r.manager.itemError(t), r.manager.itemEnd(t);
                },
                !1
              ),
              void 0 !== this.responseType &&
                (m.responseType = this.responseType),
              void 0 !== this.withCredentials &&
                (m.withCredentials = this.withCredentials),
              m.overrideMimeType &&
                m.overrideMimeType(
                  void 0 !== this.mimeType ? this.mimeType : "text/plain"
                ),
              this.requestHeader))
                m.setRequestHeader(v, this.requestHeader[v]);
              m.send(null);
            }
            return r.manager.itemStart(t), m;
          }
          jo[t].push({ onLoad: e, onProgress: i, onError: n });
        },
        setResponseType: function (t) {
          return (this.responseType = t), this;
        },
        setWithCredentials: function (t) {
          return (this.withCredentials = t), this;
        },
        setMimeType: function (t) {
          return (this.mimeType = t), this;
        },
        setRequestHeader: function (t) {
          return (this.requestHeader = t), this;
        },
      })),
        (Wo.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Wo,
          load: function (t, e, i, n) {
            var r = this,
              a = new ko(r.manager);
            a.setPath(r.path),
              a.load(
                t,
                function (t) {
                  e(r.parse(JSON.parse(t)));
                },
                i,
                n
              );
          },
          parse: function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
              var n = Ro.parse(t[i]);
              e.push(n);
            }
            return e;
          },
        })),
        (Ho.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Ho,
          load: function (t, e, i, r) {
            var a = this,
              o = [],
              s = new Jr();
            s.image = o;
            var c = new ko(this.manager);
            function h(h) {
              c.load(
                t[h],
                function (t) {
                  var i = a.parse(t, !0);
                  (o[h] = {
                    width: i.width,
                    height: i.height,
                    format: i.format,
                    mipmaps: i.mipmaps,
                  }),
                    6 === (l += 1) &&
                      (1 === i.mipmapCount && (s.minFilter = n),
                      (s.format = i.format),
                      (s.needsUpdate = !0),
                      e && e(s));
                },
                i,
                r
              );
            }
            if (
              (c.setPath(this.path),
              c.setResponseType("arraybuffer"),
              Array.isArray(t))
            )
              for (var l = 0, u = 0, p = t.length; u < p; ++u) h(u);
            else
              c.load(
                t,
                function (t) {
                  var i = a.parse(t, !0);
                  if (i.isCubemap)
                    for (
                      var r = i.mipmaps.length / i.mipmapCount, c = 0;
                      c < r;
                      c++
                    ) {
                      o[c] = { mipmaps: [] };
                      for (var h = 0; h < i.mipmapCount; h++)
                        o[c].mipmaps.push(i.mipmaps[c * i.mipmapCount + h]),
                          (o[c].format = i.format),
                          (o[c].width = i.width),
                          (o[c].height = i.height);
                    }
                  else
                    (s.image.width = i.width),
                      (s.image.height = i.height),
                      (s.mipmaps = i.mipmaps);
                  1 === i.mipmapCount && (s.minFilter = n),
                    (s.format = i.format),
                    (s.needsUpdate = !0),
                    e && e(s);
                },
                i,
                r
              );
            return s;
          },
        })),
        (qo.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: qo,
          load: function (t, e, i, r) {
            var a = this,
              o = new We(),
              s = new ko(this.manager);
            return (
              s.setResponseType("arraybuffer"),
              s.setPath(this.path),
              s.load(
                t,
                function (t) {
                  var i = a.parse(t);
                  i &&
                    (void 0 !== i.image
                      ? (o.image = i.image)
                      : void 0 !== i.data &&
                        ((o.image.width = i.width),
                        (o.image.height = i.height),
                        (o.image.data = i.data)),
                    (o.wrapS = void 0 !== i.wrapS ? i.wrapS : 1001),
                    (o.wrapT = void 0 !== i.wrapT ? i.wrapT : 1001),
                    (o.magFilter = void 0 !== i.magFilter ? i.magFilter : n),
                    (o.minFilter = void 0 !== i.minFilter ? i.minFilter : n),
                    (o.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1),
                    void 0 !== i.format && (o.format = i.format),
                    void 0 !== i.type && (o.type = i.type),
                    void 0 !== i.mipmaps &&
                      ((o.mipmaps = i.mipmaps), (o.minFilter = 1008)),
                    1 === i.mipmapCount && (o.minFilter = n),
                    (o.needsUpdate = !0),
                    e && e(o, i));
                },
                i,
                r
              ),
              o
            );
          },
        })),
        (Xo.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Xo,
          load: function (t, e, i, n) {
            void 0 !== this.path && (t = this.path + t),
              (t = this.manager.resolveURL(t));
            var r = this,
              a = Uo.get(t);
            if (void 0 !== a)
              return (
                r.manager.itemStart(t),
                setTimeout(function () {
                  e && e(a), r.manager.itemEnd(t);
                }, 0),
                a
              );
            var o = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "img"
            );
            function s() {
              o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                Uo.add(t, this),
                e && e(this),
                r.manager.itemEnd(t);
            }
            function c(e) {
              o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                n && n(e),
                r.manager.itemError(t),
                r.manager.itemEnd(t);
            }
            return (
              o.addEventListener("load", s, !1),
              o.addEventListener("error", c, !1),
              "data:" !== t.substr(0, 5) &&
                void 0 !== this.crossOrigin &&
                (o.crossOrigin = this.crossOrigin),
              r.manager.itemStart(t),
              (o.src = t),
              o
            );
          },
        })),
        (Yo.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Yo,
          load: function (t, e, i, n) {
            var r = new pi(),
              a = new Xo(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = 0;
            function s(i) {
              a.load(
                t[i],
                function (t) {
                  (r.images[i] = t),
                    6 === ++o && ((r.needsUpdate = !0), e && e(r));
                },
                void 0,
                n
              );
            }
            for (var c = 0; c < t.length; ++c) s(c);
            return r;
          },
        })),
        (Jo.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Jo,
          load: function (t, e, i, n) {
            var r = new y(),
              a = new Xo(this.manager);
            return (
              a.setCrossOrigin(this.crossOrigin),
              a.setPath(this.path),
              a.load(
                t,
                function (i) {
                  r.image = i;
                  var n =
                    t.search(/\.jpe?g($|\?)/i) > 0 ||
                    0 === t.search(/^data\:image\/jpeg/);
                  (r.format = n ? 1022 : 1023),
                    (r.needsUpdate = !0),
                    void 0 !== e && e(r);
                },
                i,
                n
              ),
              r
            );
          },
        })),
        Object.assign(Zo.prototype, {
          getPoint: function () {
            return null;
          },
          getPointAt: function (t, e) {
            var i = this.getUtoTmapping(t);
            return this.getPoint(i, e);
          },
          getPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return e;
          },
          getSpacedPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
            return e;
          },
          getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1];
          },
          getLengths: function (t) {
            if (
              (void 0 === t && (t = this.arcLengthDivisions),
              this.cacheArcLengths &&
                this.cacheArcLengths.length === t + 1 &&
                !this.needsUpdate)
            )
              return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e,
              i,
              n = [],
              r = this.getPoint(0),
              a = 0;
            for (n.push(0), i = 1; i <= t; i++)
              (a += (e = this.getPoint(i / t)).distanceTo(r)),
                n.push(a),
                (r = e);
            return (this.cacheArcLengths = n), n;
          },
          updateArcLengths: function () {
            (this.needsUpdate = !0), this.getLengths();
          },
          getUtoTmapping: function (t, e) {
            var i,
              n = this.getLengths(),
              r = 0,
              a = n.length;
            i = e || t * n[a - 1];
            for (var o, s = 0, c = a - 1; s <= c; )
              if ((o = n[(r = Math.floor(s + (c - s) / 2))] - i) < 0) s = r + 1;
              else {
                if (!(o > 0)) {
                  c = r;
                  break;
                }
                c = r - 1;
              }
            if (n[(r = c)] === i) return r / (a - 1);
            var h = n[r];
            return (r + (i - h) / (n[r + 1] - h)) / (a - 1);
          },
          getTangent: function (t) {
            var e = t - 1e-4,
              i = t + 1e-4;
            e < 0 && (e = 0), i > 1 && (i = 1);
            var n = this.getPoint(e);
            return this.getPoint(i).clone().sub(n).normalize();
          },
          getTangentAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e);
          },
          computeFrenetFrames: function (t, e) {
            var i,
              n,
              r,
              a = new p(),
              o = [],
              c = [],
              h = [],
              l = new p(),
              u = new C();
            for (i = 0; i <= t; i++)
              (n = i / t), (o[i] = this.getTangentAt(n)), o[i].normalize();
            (c[0] = new p()), (h[0] = new p());
            var d = Number.MAX_VALUE,
              f = Math.abs(o[0].x),
              m = Math.abs(o[0].y),
              v = Math.abs(o[0].z);
            for (
              f <= d && ((d = f), a.set(1, 0, 0)),
                m <= d && ((d = m), a.set(0, 1, 0)),
                v <= d && a.set(0, 0, 1),
                l.crossVectors(o[0], a).normalize(),
                c[0].crossVectors(o[0], l),
                h[0].crossVectors(o[0], c[0]),
                i = 1;
              i <= t;
              i++
            )
              (c[i] = c[i - 1].clone()),
                (h[i] = h[i - 1].clone()),
                l.crossVectors(o[i - 1], o[i]),
                l.length() > Number.EPSILON &&
                  (l.normalize(),
                  (r = Math.acos(s.clamp(o[i - 1].dot(o[i]), -1, 1))),
                  c[i].applyMatrix4(u.makeRotationAxis(l, r))),
                h[i].crossVectors(o[i], c[i]);
            if (!0 === e)
              for (
                r = Math.acos(s.clamp(c[0].dot(c[t]), -1, 1)),
                  r /= t,
                  o[0].dot(l.crossVectors(c[0], c[t])) > 0 && (r = -r),
                  i = 1;
                i <= t;
                i++
              )
                c[i].applyMatrix4(u.makeRotationAxis(o[i], r * i)),
                  h[i].crossVectors(o[i], c[i]);
            return { tangents: o, normals: c, binormals: h };
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          copy: function (t) {
            return (this.arcLengthDivisions = t.arcLengthDivisions), this;
          },
          toJSON: function () {
            var t = {
              metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON",
              },
            };
            return (
              (t.arcLengthDivisions = this.arcLengthDivisions),
              (t.type = this.type),
              t
            );
          },
          fromJSON: function (t) {
            return (this.arcLengthDivisions = t.arcLengthDivisions), this;
          },
        }),
        (Qo.prototype = Object.create(Zo.prototype)),
        (Qo.prototype.constructor = Qo),
        (Qo.prototype.isEllipseCurve = !0),
        (Qo.prototype.getPoint = function (t, e) {
          for (
            var i = e || new c(),
              n = 2 * Math.PI,
              r = this.aEndAngle - this.aStartAngle,
              a = Math.abs(r) < Number.EPSILON;
            r < 0;

          )
            r += n;
          for (; r > n; ) r -= n;
          r < Number.EPSILON && (r = a ? 0 : n),
            !0 !== this.aClockwise || a || (r === n ? (r = -n) : (r -= n));
          var o = this.aStartAngle + t * r,
            s = this.aX + this.xRadius * Math.cos(o),
            h = this.aY + this.yRadius * Math.sin(o);
          if (0 !== this.aRotation) {
            var l = Math.cos(this.aRotation),
              u = Math.sin(this.aRotation),
              p = s - this.aX,
              d = h - this.aY;
            (s = p * l - d * u + this.aX), (h = p * u + d * l + this.aY);
          }
          return i.set(s, h);
        }),
        (Qo.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            (this.aX = t.aX),
            (this.aY = t.aY),
            (this.xRadius = t.xRadius),
            (this.yRadius = t.yRadius),
            (this.aStartAngle = t.aStartAngle),
            (this.aEndAngle = t.aEndAngle),
            (this.aClockwise = t.aClockwise),
            (this.aRotation = t.aRotation),
            this
          );
        }),
        (Qo.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (
            (t.aX = this.aX),
            (t.aY = this.aY),
            (t.xRadius = this.xRadius),
            (t.yRadius = this.yRadius),
            (t.aStartAngle = this.aStartAngle),
            (t.aEndAngle = this.aEndAngle),
            (t.aClockwise = this.aClockwise),
            (t.aRotation = this.aRotation),
            t
          );
        }),
        (Qo.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            (this.aX = t.aX),
            (this.aY = t.aY),
            (this.xRadius = t.xRadius),
            (this.yRadius = t.yRadius),
            (this.aStartAngle = t.aStartAngle),
            (this.aEndAngle = t.aEndAngle),
            (this.aClockwise = t.aClockwise),
            (this.aRotation = t.aRotation),
            this
          );
        }),
        (Ko.prototype = Object.create(Qo.prototype)),
        (Ko.prototype.constructor = Ko),
        (Ko.prototype.isArcCurve = !0);
      var ts = new p(),
        es = new $o(),
        is = new $o(),
        ns = new $o();
      function rs(t, e, i, n) {
        Zo.call(this),
          (this.type = "CatmullRomCurve3"),
          (this.points = t || []),
          (this.closed = e || !1),
          (this.curveType = i || "centripetal"),
          (this.tension = n || 0.5);
      }
      function as(t, e, i, n, r) {
        var a = 0.5 * (n - e),
          o = 0.5 * (r - i),
          s = t * t;
        return (
          (2 * i - 2 * n + a + o) * (t * s) +
          (-3 * i + 3 * n - 2 * a - o) * s +
          a * t +
          i
        );
      }
      function os(t, e, i, n) {
        return (
          (function (t, e) {
            var i = 1 - t;
            return i * i * e;
          })(t, e) +
          (function (t, e) {
            return 2 * (1 - t) * t * e;
          })(t, i) +
          (function (t, e) {
            return t * t * e;
          })(t, n)
        );
      }
      function ss(t, e, i, n, r) {
        return (
          (function (t, e) {
            var i = 1 - t;
            return i * i * i * e;
          })(t, e) +
          (function (t, e) {
            var i = 1 - t;
            return 3 * i * i * t * e;
          })(t, i) +
          (function (t, e) {
            return 3 * (1 - t) * t * t * e;
          })(t, n) +
          (function (t, e) {
            return t * t * t * e;
          })(t, r)
        );
      }
      function cs(t, e, i, n) {
        Zo.call(this),
          (this.type = "CubicBezierCurve"),
          (this.v0 = t || new c()),
          (this.v1 = e || new c()),
          (this.v2 = i || new c()),
          (this.v3 = n || new c());
      }
      function hs(t, e, i, n) {
        Zo.call(this),
          (this.type = "CubicBezierCurve3"),
          (this.v0 = t || new p()),
          (this.v1 = e || new p()),
          (this.v2 = i || new p()),
          (this.v3 = n || new p());
      }
      function ls(t, e) {
        Zo.call(this),
          (this.type = "LineCurve"),
          (this.v1 = t || new c()),
          (this.v2 = e || new c());
      }
      function us(t, e) {
        Zo.call(this),
          (this.type = "LineCurve3"),
          (this.v1 = t || new p()),
          (this.v2 = e || new p());
      }
      function ps(t, e, i) {
        Zo.call(this),
          (this.type = "QuadraticBezierCurve"),
          (this.v0 = t || new c()),
          (this.v1 = e || new c()),
          (this.v2 = i || new c());
      }
      function ds(t, e, i) {
        Zo.call(this),
          (this.type = "QuadraticBezierCurve3"),
          (this.v0 = t || new p()),
          (this.v1 = e || new p()),
          (this.v2 = i || new p());
      }
      function fs(t) {
        Zo.call(this), (this.type = "SplineCurve"), (this.points = t || []);
      }
      (rs.prototype = Object.create(Zo.prototype)),
        (rs.prototype.constructor = rs),
        (rs.prototype.isCatmullRomCurve3 = !0),
        (rs.prototype.getPoint = function (t, e) {
          var i,
            n,
            r,
            a,
            o = e || new p(),
            s = this.points,
            c = s.length,
            h = (c - (this.closed ? 0 : 1)) * t,
            l = Math.floor(h),
            u = h - l;
          if (
            (this.closed
              ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c)
              : 0 === u && l === c - 1 && ((l = c - 2), (u = 1)),
            this.closed || l > 0
              ? (i = s[(l - 1) % c])
              : (ts.subVectors(s[0], s[1]).add(s[0]), (i = ts)),
            (n = s[l % c]),
            (r = s[(l + 1) % c]),
            this.closed || l + 2 < c
              ? (a = s[(l + 2) % c])
              : (ts.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), (a = ts)),
            "centripetal" === this.curveType || "chordal" === this.curveType)
          ) {
            var d = "chordal" === this.curveType ? 0.5 : 0.25,
              f = Math.pow(i.distanceToSquared(n), d),
              m = Math.pow(n.distanceToSquared(r), d),
              v = Math.pow(r.distanceToSquared(a), d);
            m < 1e-4 && (m = 1),
              f < 1e-4 && (f = m),
              v < 1e-4 && (v = m),
              es.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, f, m, v),
              is.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, f, m, v),
              ns.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, f, m, v);
          } else
            "catmullrom" === this.curveType &&
              (es.initCatmullRom(i.x, n.x, r.x, a.x, this.tension),
              is.initCatmullRom(i.y, n.y, r.y, a.y, this.tension),
              ns.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
          return o.set(es.calc(u), is.calc(u), ns.calc(u)), o;
        }),
        (rs.prototype.copy = function (t) {
          Zo.prototype.copy.call(this, t), (this.points = []);
          for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone());
          }
          return (
            (this.closed = t.closed),
            (this.curveType = t.curveType),
            (this.tension = t.tension),
            this
          );
        }),
        (rs.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          t.points = [];
          for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray());
          }
          return (
            (t.closed = this.closed),
            (t.curveType = this.curveType),
            (t.tension = this.tension),
            t
          );
        }),
        (rs.prototype.fromJSON = function (t) {
          Zo.prototype.fromJSON.call(this, t), (this.points = []);
          for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(new p().fromArray(n));
          }
          return (
            (this.closed = t.closed),
            (this.curveType = t.curveType),
            (this.tension = t.tension),
            this
          );
        }),
        (cs.prototype = Object.create(Zo.prototype)),
        (cs.prototype.constructor = cs),
        (cs.prototype.isCubicBezierCurve = !0),
        (cs.prototype.getPoint = function (t, e) {
          var i = e || new c(),
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
          return i.set(ss(t, n.x, r.x, a.x, o.x), ss(t, n.y, r.y, a.y, o.y)), i;
        }),
        (cs.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
          );
        }),
        (cs.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            (t.v3 = this.v3.toArray()),
            t
          );
        }),
        (cs.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
          );
        }),
        (hs.prototype = Object.create(Zo.prototype)),
        (hs.prototype.constructor = hs),
        (hs.prototype.isCubicBezierCurve3 = !0),
        (hs.prototype.getPoint = function (t, e) {
          var i = e || new p(),
            n = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
          return (
            i.set(
              ss(t, n.x, r.x, a.x, o.x),
              ss(t, n.y, r.y, a.y, o.y),
              ss(t, n.z, r.z, a.z, o.z)
            ),
            i
          );
        }),
        (hs.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
          );
        }),
        (hs.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            (t.v3 = this.v3.toArray()),
            t
          );
        }),
        (hs.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
          );
        }),
        (ls.prototype = Object.create(Zo.prototype)),
        (ls.prototype.constructor = ls),
        (ls.prototype.isLineCurve = !0),
        (ls.prototype.getPoint = function (t, e) {
          var i = e || new c();
          return (
            1 === t
              ? i.copy(this.v2)
              : (i.copy(this.v2).sub(this.v1),
                i.multiplyScalar(t).add(this.v1)),
            i
          );
        }),
        (ls.prototype.getPointAt = function (t, e) {
          return this.getPoint(t, e);
        }),
        (ls.prototype.getTangent = function () {
          return this.v2.clone().sub(this.v1).normalize();
        }),
        (ls.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }),
        (ls.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }),
        (ls.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }),
        (us.prototype = Object.create(Zo.prototype)),
        (us.prototype.constructor = us),
        (us.prototype.isLineCurve3 = !0),
        (us.prototype.getPoint = function (t, e) {
          var i = e || new p();
          return (
            1 === t
              ? i.copy(this.v2)
              : (i.copy(this.v2).sub(this.v1),
                i.multiplyScalar(t).add(this.v1)),
            i
          );
        }),
        (us.prototype.getPointAt = function (t, e) {
          return this.getPoint(t, e);
        }),
        (us.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }),
        (us.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }),
        (us.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }),
        (ps.prototype = Object.create(Zo.prototype)),
        (ps.prototype.constructor = ps),
        (ps.prototype.isQuadraticBezierCurve = !0),
        (ps.prototype.getPoint = function (t, e) {
          var i = e || new c(),
            n = this.v0,
            r = this.v1,
            a = this.v2;
          return i.set(os(t, n.x, r.x, a.x), os(t, n.y, r.y, a.y)), i;
        }),
        (ps.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }),
        (ps.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            t
          );
        }),
        (ps.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }),
        (ds.prototype = Object.create(Zo.prototype)),
        (ds.prototype.constructor = ds),
        (ds.prototype.isQuadraticBezierCurve3 = !0),
        (ds.prototype.getPoint = function (t, e) {
          var i = e || new p(),
            n = this.v0,
            r = this.v1,
            a = this.v2;
          return (
            i.set(
              os(t, n.x, r.x, a.x),
              os(t, n.y, r.y, a.y),
              os(t, n.z, r.z, a.z)
            ),
            i
          );
        }),
        (ds.prototype.copy = function (t) {
          return (
            Zo.prototype.copy.call(this, t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }),
        (ds.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            t
          );
        }),
        (ds.prototype.fromJSON = function (t) {
          return (
            Zo.prototype.fromJSON.call(this, t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }),
        (fs.prototype = Object.create(Zo.prototype)),
        (fs.prototype.constructor = fs),
        (fs.prototype.isSplineCurve = !0),
        (fs.prototype.getPoint = function (t, e) {
          var i = e || new c(),
            n = this.points,
            r = (n.length - 1) * t,
            a = Math.floor(r),
            o = r - a,
            s = n[0 === a ? a : a - 1],
            h = n[a],
            l = n[a > n.length - 2 ? n.length - 1 : a + 1],
            u = n[a > n.length - 3 ? n.length - 1 : a + 2];
          return i.set(as(o, s.x, h.x, l.x, u.x), as(o, s.y, h.y, l.y, u.y)), i;
        }),
        (fs.prototype.copy = function (t) {
          Zo.prototype.copy.call(this, t), (this.points = []);
          for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone());
          }
          return this;
        }),
        (fs.prototype.toJSON = function () {
          var t = Zo.prototype.toJSON.call(this);
          t.points = [];
          for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray());
          }
          return t;
        }),
        (fs.prototype.fromJSON = function (t) {
          Zo.prototype.fromJSON.call(this, t), (this.points = []);
          for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(new c().fromArray(n));
          }
          return this;
        });
      var ms = Object.freeze({
        __proto__: null,
        ArcCurve: Ko,
        CatmullRomCurve3: rs,
        CubicBezierCurve: cs,
        CubicBezierCurve3: hs,
        EllipseCurve: Qo,
        LineCurve: ls,
        LineCurve3: us,
        QuadraticBezierCurve: ps,
        QuadraticBezierCurve3: ds,
        SplineCurve: fs,
      });
      function vs() {
        Zo.call(this),
          (this.type = "CurvePath"),
          (this.curves = []),
          (this.autoClose = !1);
      }
      function gs(t) {
        vs.call(this),
          (this.type = "Path"),
          (this.currentPoint = new c()),
          t && this.setFromPoints(t);
      }
      function ys(t) {
        gs.call(this, t),
          (this.uuid = s.generateUUID()),
          (this.type = "Shape"),
          (this.holes = []);
      }
      function xs(t, e) {
        X.call(this),
          (this.type = "Light"),
          (this.color = new Ft(t)),
          (this.intensity = void 0 !== e ? e : 1),
          (this.receiveShadow = void 0);
      }
      function _s(t, e, i) {
        xs.call(this, t, i),
          (this.type = "HemisphereLight"),
          (this.castShadow = void 0),
          this.position.copy(X.DefaultUp),
          this.updateMatrix(),
          (this.groundColor = new Ft(e));
      }
      function bs(t) {
        (this.camera = t),
          (this.bias = 0),
          (this.radius = 1),
          (this.mapSize = new c(512, 512)),
          (this.map = null),
          (this.mapPass = null),
          (this.matrix = new C()),
          (this._frustum = new Xe()),
          (this._frameExtents = new c(1, 1)),
          (this._viewportCount = 1),
          (this._viewports = [new x(0, 0, 1, 1)]);
      }
      function ws() {
        bs.call(this, new Ge(50, 1, 0.5, 500));
      }
      function Ms(t, e, i, n, r, a) {
        xs.call(this, t, e),
          (this.type = "SpotLight"),
          this.position.copy(X.DefaultUp),
          this.updateMatrix(),
          (this.target = new X()),
          Object.defineProperty(this, "power", {
            get: function () {
              return this.intensity * Math.PI;
            },
            set: function (t) {
              this.intensity = t / Math.PI;
            },
          }),
          (this.distance = void 0 !== i ? i : 0),
          (this.angle = void 0 !== n ? n : Math.PI / 3),
          (this.penumbra = void 0 !== r ? r : 0),
          (this.decay = void 0 !== a ? a : 1),
          (this.shadow = new ws());
      }
      function Ss() {
        bs.call(this, new Ge(90, 1, 0.5, 500)),
          (this._frameExtents = new c(4, 2)),
          (this._viewportCount = 6),
          (this._viewports = [
            new x(2, 1, 1, 1),
            new x(0, 1, 1, 1),
            new x(3, 1, 1, 1),
            new x(1, 1, 1, 1),
            new x(3, 0, 1, 1),
            new x(1, 0, 1, 1),
          ]),
          (this._cubeDirections = [
            new p(1, 0, 0),
            new p(-1, 0, 0),
            new p(0, 0, 1),
            new p(0, 0, -1),
            new p(0, 1, 0),
            new p(0, -1, 0),
          ]),
          (this._cubeUps = [
            new p(0, 1, 0),
            new p(0, 1, 0),
            new p(0, 1, 0),
            new p(0, 1, 0),
            new p(0, 0, 1),
            new p(0, 0, -1),
          ]);
      }
      function As(t, e, i, n) {
        xs.call(this, t, e),
          (this.type = "PointLight"),
          Object.defineProperty(this, "power", {
            get: function () {
              return 4 * this.intensity * Math.PI;
            },
            set: function (t) {
              this.intensity = t / (4 * Math.PI);
            },
          }),
          (this.distance = void 0 !== i ? i : 0),
          (this.decay = void 0 !== n ? n : 1),
          (this.shadow = new Ss());
      }
      function Ts(t, e, i, n, r, a) {
        Ve.call(this),
          (this.type = "OrthographicCamera"),
          (this.zoom = 1),
          (this.view = null),
          (this.left = void 0 !== t ? t : -1),
          (this.right = void 0 !== e ? e : 1),
          (this.top = void 0 !== i ? i : 1),
          (this.bottom = void 0 !== n ? n : -1),
          (this.near = void 0 !== r ? r : 0.1),
          (this.far = void 0 !== a ? a : 2e3),
          this.updateProjectionMatrix();
      }
      function Ls() {
        bs.call(this, new Ts(-5, 5, 5, -5, 0.5, 500));
      }
      function Ps(t, e) {
        xs.call(this, t, e),
          (this.type = "DirectionalLight"),
          this.position.copy(X.DefaultUp),
          this.updateMatrix(),
          (this.target = new X()),
          (this.shadow = new Ls());
      }
      function Cs(t, e) {
        xs.call(this, t, e),
          (this.type = "AmbientLight"),
          (this.castShadow = void 0);
      }
      function Es(t, e, i, n) {
        xs.call(this, t, e),
          (this.type = "RectAreaLight"),
          (this.width = void 0 !== i ? i : 10),
          (this.height = void 0 !== n ? n : 10);
      }
      function Os(t) {
        Go.call(this, t), (this.textures = {});
      }
      (vs.prototype = Object.assign(Object.create(Zo.prototype), {
        constructor: vs,
        add: function (t) {
          this.curves.push(t);
        },
        closePath: function () {
          var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
          t.equals(e) || this.curves.push(new ls(e, t));
        },
        getPoint: function (t) {
          for (
            var e = t * this.getLength(), i = this.getCurveLengths(), n = 0;
            n < i.length;

          ) {
            if (i[n] >= e) {
              var r = i[n] - e,
                a = this.curves[n],
                o = a.getLength(),
                s = 0 === o ? 0 : 1 - r / o;
              return a.getPointAt(s);
            }
            n++;
          }
          return null;
        },
        getLength: function () {
          var t = this.getCurveLengths();
          return t[t.length - 1];
        },
        updateArcLengths: function () {
          (this.needsUpdate = !0),
            (this.cacheLengths = null),
            this.getCurveLengths();
        },
        getCurveLengths: function () {
          if (
            this.cacheLengths &&
            this.cacheLengths.length === this.curves.length
          )
            return this.cacheLengths;
          for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++)
            (e += this.curves[i].getLength()), t.push(e);
          return (this.cacheLengths = t), t;
        },
        getSpacedPoints: function (t) {
          void 0 === t && (t = 40);
          for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
          return this.autoClose && e.push(e[0]), e;
        },
        getPoints: function (t) {
          t = t || 12;
          for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
            for (
              var a = r[n],
                o =
                  a && a.isEllipseCurve
                    ? 2 * t
                    : a && (a.isLineCurve || a.isLineCurve3)
                    ? 1
                    : a && a.isSplineCurve
                    ? t * a.points.length
                    : t,
                s = a.getPoints(o),
                c = 0;
              c < s.length;
              c++
            ) {
              var h = s[c];
              (e && e.equals(h)) || (i.push(h), (e = h));
            }
          return (
            this.autoClose &&
              i.length > 1 &&
              !i[i.length - 1].equals(i[0]) &&
              i.push(i[0]),
            i
          );
        },
        copy: function (t) {
          Zo.prototype.copy.call(this, t), (this.curves = []);
          for (var e = 0, i = t.curves.length; e < i; e++) {
            var n = t.curves[e];
            this.curves.push(n.clone());
          }
          return (this.autoClose = t.autoClose), this;
        },
        toJSON: function () {
          var t = Zo.prototype.toJSON.call(this);
          (t.autoClose = this.autoClose), (t.curves = []);
          for (var e = 0, i = this.curves.length; e < i; e++) {
            var n = this.curves[e];
            t.curves.push(n.toJSON());
          }
          return t;
        },
        fromJSON: function (t) {
          Zo.prototype.fromJSON.call(this, t),
            (this.autoClose = t.autoClose),
            (this.curves = []);
          for (var e = 0, i = t.curves.length; e < i; e++) {
            var n = t.curves[e];
            this.curves.push(new ms[n.type]().fromJSON(n));
          }
          return this;
        },
      })),
        (gs.prototype = Object.assign(Object.create(vs.prototype), {
          constructor: gs,
          setFromPoints: function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++)
              this.lineTo(t[e].x, t[e].y);
            return this;
          },
          moveTo: function (t, e) {
            return this.currentPoint.set(t, e), this;
          },
          lineTo: function (t, e) {
            var i = new ls(this.currentPoint.clone(), new c(t, e));
            return this.curves.push(i), this.currentPoint.set(t, e), this;
          },
          quadraticCurveTo: function (t, e, i, n) {
            var r = new ps(this.currentPoint.clone(), new c(t, e), new c(i, n));
            return this.curves.push(r), this.currentPoint.set(i, n), this;
          },
          bezierCurveTo: function (t, e, i, n, r, a) {
            var o = new cs(
              this.currentPoint.clone(),
              new c(t, e),
              new c(i, n),
              new c(r, a)
            );
            return this.curves.push(o), this.currentPoint.set(r, a), this;
          },
          splineThru: function (t) {
            var e = new fs([this.currentPoint.clone()].concat(t));
            return (
              this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
            );
          },
          arc: function (t, e, i, n, r, a) {
            var o = this.currentPoint.x,
              s = this.currentPoint.y;
            return this.absarc(t + o, e + s, i, n, r, a), this;
          },
          absarc: function (t, e, i, n, r, a) {
            return this.absellipse(t, e, i, i, n, r, a), this;
          },
          ellipse: function (t, e, i, n, r, a, o, s) {
            var c = this.currentPoint.x,
              h = this.currentPoint.y;
            return this.absellipse(t + c, e + h, i, n, r, a, o, s), this;
          },
          absellipse: function (t, e, i, n, r, a, o, s) {
            var c = new Qo(t, e, i, n, r, a, o, s);
            if (this.curves.length > 0) {
              var h = c.getPoint(0);
              h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            return this.currentPoint.copy(l), this;
          },
          copy: function (t) {
            return (
              vs.prototype.copy.call(this, t),
              this.currentPoint.copy(t.currentPoint),
              this
            );
          },
          toJSON: function () {
            var t = vs.prototype.toJSON.call(this);
            return (t.currentPoint = this.currentPoint.toArray()), t;
          },
          fromJSON: function (t) {
            return (
              vs.prototype.fromJSON.call(this, t),
              this.currentPoint.fromArray(t.currentPoint),
              this
            );
          },
        })),
        (ys.prototype = Object.assign(Object.create(gs.prototype), {
          constructor: ys,
          getPointsHoles: function (t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++)
              e[i] = this.holes[i].getPoints(t);
            return e;
          },
          extractPoints: function (t) {
            return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
          },
          copy: function (t) {
            gs.prototype.copy.call(this, t), (this.holes = []);
            for (var e = 0, i = t.holes.length; e < i; e++) {
              var n = t.holes[e];
              this.holes.push(n.clone());
            }
            return this;
          },
          toJSON: function () {
            var t = gs.prototype.toJSON.call(this);
            (t.uuid = this.uuid), (t.holes = []);
            for (var e = 0, i = this.holes.length; e < i; e++) {
              var n = this.holes[e];
              t.holes.push(n.toJSON());
            }
            return t;
          },
          fromJSON: function (t) {
            gs.prototype.fromJSON.call(this, t),
              (this.uuid = t.uuid),
              (this.holes = []);
            for (var e = 0, i = t.holes.length; e < i; e++) {
              var n = t.holes[e];
              this.holes.push(new gs().fromJSON(n));
            }
            return this;
          },
        })),
        (xs.prototype = Object.assign(Object.create(X.prototype), {
          constructor: xs,
          isLight: !0,
          copy: function (t) {
            return (
              X.prototype.copy.call(this, t),
              this.color.copy(t.color),
              (this.intensity = t.intensity),
              this
            );
          },
          toJSON: function (t) {
            var e = X.prototype.toJSON.call(this, t);
            return (
              (e.object.color = this.color.getHex()),
              (e.object.intensity = this.intensity),
              void 0 !== this.groundColor &&
                (e.object.groundColor = this.groundColor.getHex()),
              void 0 !== this.distance && (e.object.distance = this.distance),
              void 0 !== this.angle && (e.object.angle = this.angle),
              void 0 !== this.decay && (e.object.decay = this.decay),
              void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
              void 0 !== this.shadow &&
                (e.object.shadow = this.shadow.toJSON()),
              e
            );
          },
        })),
        (_s.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: _s,
          isHemisphereLight: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              this.groundColor.copy(t.groundColor),
              this
            );
          },
        })),
        Object.assign(bs.prototype, {
          _projScreenMatrix: new C(),
          _lightPositionWorld: new p(),
          _lookTarget: new p(),
          getViewportCount: function () {
            return this._viewportCount;
          },
          getFrustum: function () {
            return this._frustum;
          },
          updateMatrices: function (t) {
            var e = this.camera,
              i = this.matrix,
              n = this._projScreenMatrix,
              r = this._lookTarget,
              a = this._lightPositionWorld;
            a.setFromMatrixPosition(t.matrixWorld),
              e.position.copy(a),
              r.setFromMatrixPosition(t.target.matrixWorld),
              e.lookAt(r),
              e.updateMatrixWorld(),
              n.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              this._frustum.setFromMatrix(n),
              i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
              i.multiply(e.projectionMatrix),
              i.multiply(e.matrixWorldInverse);
          },
          getViewport: function (t) {
            return this._viewports[t];
          },
          getFrameExtents: function () {
            return this._frameExtents;
          },
          copy: function (t) {
            return (
              (this.camera = t.camera.clone()),
              (this.bias = t.bias),
              (this.radius = t.radius),
              this.mapSize.copy(t.mapSize),
              this
            );
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          toJSON: function () {
            var t = {};
            return (
              0 !== this.bias && (t.bias = this.bias),
              1 !== this.radius && (t.radius = this.radius),
              (512 === this.mapSize.x && 512 === this.mapSize.y) ||
                (t.mapSize = this.mapSize.toArray()),
              (t.camera = this.camera.toJSON(!1).object),
              delete t.camera.matrix,
              t
            );
          },
        }),
        (ws.prototype = Object.assign(Object.create(bs.prototype), {
          constructor: ws,
          isSpotLightShadow: !0,
          updateMatrices: function (t) {
            var e = this.camera,
              i = 2 * s.RAD2DEG * t.angle,
              n = this.mapSize.width / this.mapSize.height,
              r = t.distance || e.far;
            (i === e.fov && n === e.aspect && r === e.far) ||
              ((e.fov = i),
              (e.aspect = n),
              (e.far = r),
              e.updateProjectionMatrix()),
              bs.prototype.updateMatrices.call(this, t);
          },
        })),
        (Ms.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: Ms,
          isSpotLight: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              (this.distance = t.distance),
              (this.angle = t.angle),
              (this.penumbra = t.penumbra),
              (this.decay = t.decay),
              (this.target = t.target.clone()),
              (this.shadow = t.shadow.clone()),
              this
            );
          },
        })),
        (Ss.prototype = Object.assign(Object.create(bs.prototype), {
          constructor: Ss,
          isPointLightShadow: !0,
          updateMatrices: function (t, e) {
            void 0 === e && (e = 0);
            var i = this.camera,
              n = this.matrix,
              r = this._lightPositionWorld,
              a = this._lookTarget,
              o = this._projScreenMatrix;
            r.setFromMatrixPosition(t.matrixWorld),
              i.position.copy(r),
              a.copy(i.position),
              a.add(this._cubeDirections[e]),
              i.up.copy(this._cubeUps[e]),
              i.lookAt(a),
              i.updateMatrixWorld(),
              n.makeTranslation(-r.x, -r.y, -r.z),
              o.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
              this._frustum.setFromMatrix(o);
          },
        })),
        (As.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: As,
          isPointLight: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              (this.distance = t.distance),
              (this.decay = t.decay),
              (this.shadow = t.shadow.clone()),
              this
            );
          },
        })),
        (Ts.prototype = Object.assign(Object.create(Ve.prototype), {
          constructor: Ts,
          isOrthographicCamera: !0,
          copy: function (t, e) {
            return (
              Ve.prototype.copy.call(this, t, e),
              (this.left = t.left),
              (this.right = t.right),
              (this.top = t.top),
              (this.bottom = t.bottom),
              (this.near = t.near),
              (this.far = t.far),
              (this.zoom = t.zoom),
              (this.view = null === t.view ? null : Object.assign({}, t.view)),
              this
            );
          },
          setViewOffset: function (t, e, i, n, r, a) {
            null === this.view &&
              (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
              }),
              (this.view.enabled = !0),
              (this.view.fullWidth = t),
              (this.view.fullHeight = e),
              (this.view.offsetX = i),
              (this.view.offsetY = n),
              (this.view.width = r),
              (this.view.height = a),
              this.updateProjectionMatrix();
          },
          clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1),
              this.updateProjectionMatrix();
          },
          updateProjectionMatrix: function () {
            var t = (this.right - this.left) / (2 * this.zoom),
              e = (this.top - this.bottom) / (2 * this.zoom),
              i = (this.right + this.left) / 2,
              n = (this.top + this.bottom) / 2,
              r = i - t,
              a = i + t,
              o = n + e,
              s = n - e;
            if (null !== this.view && this.view.enabled) {
              var c = this.zoom / (this.view.width / this.view.fullWidth),
                h = this.zoom / (this.view.height / this.view.fullHeight),
                l = (this.right - this.left) / this.view.width,
                u = (this.top - this.bottom) / this.view.height;
              (a =
                (r += l * (this.view.offsetX / c)) + l * (this.view.width / c)),
                (s =
                  (o -= u * (this.view.offsetY / h)) -
                  u * (this.view.height / h));
            }
            this.projectionMatrix.makeOrthographic(
              r,
              a,
              o,
              s,
              this.near,
              this.far
            ),
              this.projectionMatrixInverse.getInverse(this.projectionMatrix);
          },
          toJSON: function (t) {
            var e = X.prototype.toJSON.call(this, t);
            return (
              (e.object.zoom = this.zoom),
              (e.object.left = this.left),
              (e.object.right = this.right),
              (e.object.top = this.top),
              (e.object.bottom = this.bottom),
              (e.object.near = this.near),
              (e.object.far = this.far),
              null !== this.view &&
                (e.object.view = Object.assign({}, this.view)),
              e
            );
          },
        })),
        (Ls.prototype = Object.assign(Object.create(bs.prototype), {
          constructor: Ls,
          isDirectionalLightShadow: !0,
          updateMatrices: function (t) {
            bs.prototype.updateMatrices.call(this, t);
          },
        })),
        (Ps.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: Ps,
          isDirectionalLight: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              (this.target = t.target.clone()),
              (this.shadow = t.shadow.clone()),
              this
            );
          },
        })),
        (Cs.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: Cs,
          isAmbientLight: !0,
        })),
        (Es.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: Es,
          isRectAreaLight: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              (this.width = t.width),
              (this.height = t.height),
              this
            );
          },
          toJSON: function (t) {
            var e = xs.prototype.toJSON.call(this, t);
            return (
              (e.object.width = this.width), (e.object.height = this.height), e
            );
          },
        })),
        (Os.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: Os,
          load: function (t, e, i, n) {
            var r = this,
              a = new ko(r.manager);
            a.setPath(r.path),
              a.load(
                t,
                function (t) {
                  e(r.parse(JSON.parse(t)));
                },
                i,
                n
              );
          },
          parse: function (t) {
            var e = this.textures;
            function i(t) {
              return e[t], e[t];
            }
            var n = new wo[t.type]();
            if (
              (void 0 !== t.uuid && (n.uuid = t.uuid),
              void 0 !== t.name && (n.name = t.name),
              void 0 !== t.color && n.color.setHex(t.color),
              void 0 !== t.roughness && (n.roughness = t.roughness),
              void 0 !== t.metalness && (n.metalness = t.metalness),
              void 0 !== t.sheen && (n.sheen = new Ft().setHex(t.sheen)),
              void 0 !== t.emissive && n.emissive.setHex(t.emissive),
              void 0 !== t.specular && n.specular.setHex(t.specular),
              void 0 !== t.shininess && (n.shininess = t.shininess),
              void 0 !== t.clearcoat && (n.clearcoat = t.clearcoat),
              void 0 !== t.clearcoatRoughness &&
                (n.clearcoatRoughness = t.clearcoatRoughness),
              void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors),
              void 0 !== t.fog && (n.fog = t.fog),
              void 0 !== t.flatShading && (n.flatShading = t.flatShading),
              void 0 !== t.blending && (n.blending = t.blending),
              void 0 !== t.combine && (n.combine = t.combine),
              void 0 !== t.side && (n.side = t.side),
              void 0 !== t.opacity && (n.opacity = t.opacity),
              void 0 !== t.transparent && (n.transparent = t.transparent),
              void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest),
              void 0 !== t.depthTest && (n.depthTest = t.depthTest),
              void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite),
              void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite),
              void 0 !== t.stencilWrite && (n.stencilWrite = t.stencilWrite),
              void 0 !== t.stencilWriteMask &&
                (n.stencilWriteMask = t.stencilWriteMask),
              void 0 !== t.stencilFunc && (n.stencilFunc = t.stencilFunc),
              void 0 !== t.stencilRef && (n.stencilRef = t.stencilRef),
              void 0 !== t.stencilFuncMask &&
                (n.stencilFuncMask = t.stencilFuncMask),
              void 0 !== t.stencilFail && (n.stencilFail = t.stencilFail),
              void 0 !== t.stencilZFail && (n.stencilZFail = t.stencilZFail),
              void 0 !== t.stencilZPass && (n.stencilZPass = t.stencilZPass),
              void 0 !== t.wireframe && (n.wireframe = t.wireframe),
              void 0 !== t.wireframeLinewidth &&
                (n.wireframeLinewidth = t.wireframeLinewidth),
              void 0 !== t.wireframeLinecap &&
                (n.wireframeLinecap = t.wireframeLinecap),
              void 0 !== t.wireframeLinejoin &&
                (n.wireframeLinejoin = t.wireframeLinejoin),
              void 0 !== t.rotation && (n.rotation = t.rotation),
              1 !== t.linewidth && (n.linewidth = t.linewidth),
              void 0 !== t.dashSize && (n.dashSize = t.dashSize),
              void 0 !== t.gapSize && (n.gapSize = t.gapSize),
              void 0 !== t.scale && (n.scale = t.scale),
              void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset),
              void 0 !== t.polygonOffsetFactor &&
                (n.polygonOffsetFactor = t.polygonOffsetFactor),
              void 0 !== t.polygonOffsetUnits &&
                (n.polygonOffsetUnits = t.polygonOffsetUnits),
              void 0 !== t.skinning && (n.skinning = t.skinning),
              void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets),
              void 0 !== t.morphNormals && (n.morphNormals = t.morphNormals),
              void 0 !== t.dithering && (n.dithering = t.dithering),
              void 0 !== t.visible && (n.visible = t.visible),
              void 0 !== t.toneMapped && (n.toneMapped = t.toneMapped),
              void 0 !== t.userData && (n.userData = t.userData),
              void 0 !== t.uniforms)
            )
              for (var r in t.uniforms) {
                var a = t.uniforms[r];
                switch (((n.uniforms[r] = {}), a.type)) {
                  case "t":
                    n.uniforms[r].value = i(a.value);
                    break;
                  case "c":
                    n.uniforms[r].value = new Ft().setHex(a.value);
                    break;
                  case "v2":
                    n.uniforms[r].value = new c().fromArray(a.value);
                    break;
                  case "v3":
                    n.uniforms[r].value = new p().fromArray(a.value);
                    break;
                  case "v4":
                    n.uniforms[r].value = new x().fromArray(a.value);
                    break;
                  case "m3":
                    n.uniforms[r].value = new m().fromArray(a.value);
                  case "m4":
                    n.uniforms[r].value = new C().fromArray(a.value);
                    break;
                  default:
                    n.uniforms[r].value = a.value;
                }
              }
            if (
              (void 0 !== t.defines && (n.defines = t.defines),
              void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader),
              void 0 !== t.fragmentShader &&
                (n.fragmentShader = t.fragmentShader),
              void 0 !== t.extensions)
            )
              for (var o in t.extensions) n.extensions[o] = t.extensions[o];
            if (
              (void 0 !== t.shading && (n.flatShading = 1 === t.shading),
              void 0 !== t.size && (n.size = t.size),
              void 0 !== t.sizeAttenuation &&
                (n.sizeAttenuation = t.sizeAttenuation),
              void 0 !== t.map && (n.map = i(t.map)),
              void 0 !== t.matcap && (n.matcap = i(t.matcap)),
              void 0 !== t.alphaMap &&
                ((n.alphaMap = i(t.alphaMap)), (n.transparent = !0)),
              void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)),
              void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale),
              void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)),
              void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType),
              void 0 !== t.normalScale)
            ) {
              var s = t.normalScale;
              !1 === Array.isArray(s) && (s = [s, s]),
                (n.normalScale = new c().fromArray(s));
            }
            return (
              void 0 !== t.displacementMap &&
                (n.displacementMap = i(t.displacementMap)),
              void 0 !== t.displacementScale &&
                (n.displacementScale = t.displacementScale),
              void 0 !== t.displacementBias &&
                (n.displacementBias = t.displacementBias),
              void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)),
              void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)),
              void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)),
              void 0 !== t.emissiveIntensity &&
                (n.emissiveIntensity = t.emissiveIntensity),
              void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)),
              void 0 !== t.envMap && (n.envMap = i(t.envMap)),
              void 0 !== t.envMapIntensity &&
                (n.envMapIntensity = t.envMapIntensity),
              void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity),
              void 0 !== t.refractionRatio &&
                (n.refractionRatio = t.refractionRatio),
              void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)),
              void 0 !== t.lightMapIntensity &&
                (n.lightMapIntensity = t.lightMapIntensity),
              void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)),
              void 0 !== t.aoMapIntensity &&
                (n.aoMapIntensity = t.aoMapIntensity),
              void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)),
              void 0 !== t.clearcoatNormalMap &&
                (n.clearcoatNormalMap = i(t.clearcoatNormalMap)),
              void 0 !== t.clearcoatNormalScale &&
                (n.clearcoatNormalScale = new c().fromArray(
                  t.clearcoatNormalScale
                )),
              n
            );
          },
          setTextures: function (t) {
            return (this.textures = t), this;
          },
        }));
      var Ns = function (t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1);
      };
      function Is() {
        le.call(this),
          (this.type = "InstancedBufferGeometry"),
          (this.maxInstancedCount = void 0);
      }
      function Ds(t, e, i, n) {
        "number" == typeof i && ((n = i), (i = !1)),
          Ht.call(this, t, e, i),
          (this.meshPerAttribute = n || 1);
      }
      function zs(t) {
        Go.call(this, t);
      }
      (Is.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Is,
        isInstancedBufferGeometry: !0,
        copy: function (t) {
          return (
            le.prototype.copy.call(this, t),
            (this.maxInstancedCount = t.maxInstancedCount),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        toJSON: function () {
          var t = le.prototype.toJSON.call(this);
          return (
            (t.maxInstancedCount = this.maxInstancedCount),
            (t.isInstancedBufferGeometry = !0),
            t
          );
        },
      })),
        (Ds.prototype = Object.assign(Object.create(Ht.prototype), {
          constructor: Ds,
          isInstancedBufferAttribute: !0,
          copy: function (t) {
            return (
              Ht.prototype.copy.call(this, t),
              (this.meshPerAttribute = t.meshPerAttribute),
              this
            );
          },
          toJSON: function () {
            var t = Ht.prototype.toJSON.call(this);
            return (
              (t.meshPerAttribute = this.meshPerAttribute),
              (t.isInstancedBufferAttribute = !0),
              t
            );
          },
        })),
        (zs.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: zs,
          load: function (t, e, i, n) {
            var r = this,
              a = new ko(r.manager);
            a.setPath(r.path),
              a.load(
                t,
                function (t) {
                  e(r.parse(JSON.parse(t)));
                },
                i,
                n
              );
          },
          parse: function (t) {
            var e = t.isInstancedBufferGeometry ? new Is() : new le(),
              i = t.data.index;
            if (void 0 !== i) {
              var n = new Rs[i.type](i.array);
              e.setIndex(new Ht(n, 1));
            }
            var r = t.data.attributes;
            for (var a in r) {
              var o = r[a],
                s =
                  ((n = new Rs[o.type](o.array)),
                  new (o.isInstancedBufferAttribute ? Ds : Ht)(
                    n,
                    o.itemSize,
                    o.normalized
                  ));
              void 0 !== o.name && (s.name = o.name), e.setAttribute(a, s);
            }
            var c = t.data.morphAttributes;
            if (c)
              for (var a in c) {
                for (var h = c[a], l = [], u = 0, d = h.length; u < d; u++) {
                  (o = h[u]),
                    (s = new Ht(
                      (n = new Rs[o.type](o.array)),
                      o.itemSize,
                      o.normalized
                    ));
                  void 0 !== o.name && (s.name = o.name), l.push(s);
                }
                e.morphAttributes[a] = l;
              }
            var f = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== f) {
              u = 0;
              for (var m = f.length; u !== m; ++u) {
                var v = f[u];
                e.addGroup(v.start, v.count, v.materialIndex);
              }
            }
            var g = t.data.boundingSphere;
            if (void 0 !== g) {
              var y = new p();
              void 0 !== g.center && y.fromArray(g.center),
                (e.boundingSphere = new lt(y, g.radius));
            }
            return (
              t.name && (e.name = t.name),
              t.userData && (e.userData = t.userData),
              e
            );
          },
        }));
      var Rs = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray:
          "undefined" != typeof Uint8ClampedArray
            ? Uint8ClampedArray
            : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array,
      };
      function Fs(t) {
        Go.call(this, t);
      }
      Fs.prototype = Object.assign(Object.create(Go.prototype), {
        constructor: Fs,
        load: function (t, e, i, n) {
          var r = this,
            a = "" === this.path ? Ns(t) : this.path;
          this.resourcePath = this.resourcePath || a;
          var o = new ko(r.manager);
          o.setPath(this.path),
            o.load(
              t,
              function (t) {
                var i = null;
                try {
                  i = JSON.parse(t);
                } catch (t) {
                  return void (void 0 !== n && n(t));
                }
                var a = i.metadata;
                void 0 !== a &&
                  void 0 !== a.type &&
                  "geometry" !== a.type.toLowerCase() &&
                  r.parse(i, e);
              },
              i,
              n
            );
        },
        parse: function (t, e) {
          var i = this.parseShape(t.shapes),
            n = this.parseGeometries(t.geometries, i),
            r = this.parseImages(t.images, function () {
              void 0 !== e && e(s);
            }),
            a = this.parseTextures(t.textures, r),
            o = this.parseMaterials(t.materials, a),
            s = this.parseObject(t.object, n, o);
          return (
            t.animations && (s.animations = this.parseAnimations(t.animations)),
            (void 0 !== t.images && 0 !== t.images.length) ||
              (void 0 !== e && e(s)),
            s
          );
        },
        parseShape: function (t) {
          var e = {};
          if (void 0 !== t)
            for (var i = 0, n = t.length; i < n; i++) {
              var r = new ys().fromJSON(t[i]);
              e[r.uuid] = r;
            }
          return e;
        },
        parseGeometries: function (t, e) {
          var i = {};
          if (void 0 !== t)
            for (var n = new zs(), r = 0, a = t.length; r < a; r++) {
              var o,
                s = t[r];
              switch (s.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                  o = new lo[s.type](
                    s.width,
                    s.height,
                    s.widthSegments,
                    s.heightSegments
                  );
                  break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                  o = new lo[s.type](
                    s.width,
                    s.height,
                    s.depth,
                    s.widthSegments,
                    s.heightSegments,
                    s.depthSegments
                  );
                  break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                  o = new lo[s.type](
                    s.radius,
                    s.segments,
                    s.thetaStart,
                    s.thetaLength
                  );
                  break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                  o = new lo[s.type](
                    s.radiusTop,
                    s.radiusBottom,
                    s.height,
                    s.radialSegments,
                    s.heightSegments,
                    s.openEnded,
                    s.thetaStart,
                    s.thetaLength
                  );
                  break;
                case "ConeGeometry":
                case "ConeBufferGeometry":
                  o = new lo[s.type](
                    s.radius,
                    s.height,
                    s.radialSegments,
                    s.heightSegments,
                    s.openEnded,
                    s.thetaStart,
                    s.thetaLength
                  );
                  break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                  o = new lo[s.type](
                    s.radius,
                    s.widthSegments,
                    s.heightSegments,
                    s.phiStart,
                    s.phiLength,
                    s.thetaStart,
                    s.thetaLength
                  );
                  break;
                case "DodecahedronGeometry":
                case "DodecahedronBufferGeometry":
                case "IcosahedronGeometry":
                case "IcosahedronBufferGeometry":
                case "OctahedronGeometry":
                case "OctahedronBufferGeometry":
                case "TetrahedronGeometry":
                case "TetrahedronBufferGeometry":
                  o = new lo[s.type](s.radius, s.detail);
                  break;
                case "RingGeometry":
                case "RingBufferGeometry":
                  o = new lo[s.type](
                    s.innerRadius,
                    s.outerRadius,
                    s.thetaSegments,
                    s.phiSegments,
                    s.thetaStart,
                    s.thetaLength
                  );
                  break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                  o = new lo[s.type](
                    s.radius,
                    s.tube,
                    s.radialSegments,
                    s.tubularSegments,
                    s.arc
                  );
                  break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                  o = new lo[s.type](
                    s.radius,
                    s.tube,
                    s.tubularSegments,
                    s.radialSegments,
                    s.p,
                    s.q
                  );
                  break;
                case "TubeGeometry":
                case "TubeBufferGeometry":
                  o = new lo[s.type](
                    new ms[s.path.type]().fromJSON(s.path),
                    s.tubularSegments,
                    s.radius,
                    s.radialSegments,
                    s.closed
                  );
                  break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                  o = new lo[s.type](
                    s.points,
                    s.segments,
                    s.phiStart,
                    s.phiLength
                  );
                  break;
                case "PolyhedronGeometry":
                case "PolyhedronBufferGeometry":
                  o = new lo[s.type](
                    s.vertices,
                    s.indices,
                    s.radius,
                    s.details
                  );
                  break;
                case "ShapeGeometry":
                case "ShapeBufferGeometry":
                  for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
                    var u = e[s.shapes[h]];
                    c.push(u);
                  }
                  o = new lo[s.type](c, s.curveSegments);
                  break;
                case "ExtrudeGeometry":
                case "ExtrudeBufferGeometry":
                  for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
                    u = e[s.shapes[h]];
                    c.push(u);
                  }
                  var p = s.options.extrudePath;
                  void 0 !== p &&
                    (s.options.extrudePath = new ms[p.type]().fromJSON(p)),
                    (o = new lo[s.type](c, s.options));
                  break;
                case "BufferGeometry":
                case "InstancedBufferGeometry":
                  o = n.parse(s);
                  break;
                case "Geometry":
                  if ("THREE" in window && "LegacyJSONLoader" in THREE)
                    o = new THREE.LegacyJSONLoader().parse(
                      s,
                      this.resourcePath
                    ).geometry;
                  break;
                default:
                  continue;
              }
              (o.uuid = s.uuid),
                void 0 !== s.name && (o.name = s.name),
                !0 === o.isBufferGeometry &&
                  void 0 !== s.userData &&
                  (o.userData = s.userData),
                (i[s.uuid] = o);
            }
          return i;
        },
        parseMaterials: function (t, e) {
          var i = {},
            n = {};
          if (void 0 !== t) {
            var r = new Os();
            r.setTextures(e);
            for (var a = 0, o = t.length; a < o; a++) {
              var s = t[a];
              if ("MultiMaterial" === s.type) {
                for (var c = [], h = 0; h < s.materials.length; h++) {
                  var l = s.materials[h];
                  void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)),
                    c.push(i[l.uuid]);
                }
                n[s.uuid] = c;
              } else
                void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)),
                  (n[s.uuid] = i[s.uuid]);
            }
          }
          return n;
        },
        parseAnimations: function (t) {
          for (var e = [], i = 0; i < t.length; i++) {
            var n = t[i],
              r = Ro.parse(n);
            void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r);
          }
          return e;
        },
        parseImages: function (t, e) {
          var i = this,
            n = {};
          function r(t) {
            return (
              i.manager.itemStart(t),
              a.load(
                t,
                function () {
                  i.manager.itemEnd(t);
                },
                void 0,
                function () {
                  i.manager.itemError(t), i.manager.itemEnd(t);
                }
              )
            );
          }
          if (void 0 !== t && t.length > 0) {
            var a = new Xo(new Bo(e));
            a.setCrossOrigin(this.crossOrigin);
            for (var o = 0, s = t.length; o < s; o++) {
              var c = t[o],
                h = c.url;
              if (Array.isArray(h)) {
                n[c.uuid] = [];
                for (var l = 0, u = h.length; l < u; l++) {
                  var p = h[l],
                    d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)
                      ? p
                      : i.resourcePath + p;
                  n[c.uuid].push(r(d));
                }
              } else {
                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url)
                  ? c.url
                  : i.resourcePath + c.url;
                n[c.uuid] = r(d);
              }
            }
          }
          return n;
        },
        parseTextures: function (t, e) {
          function i(t, e) {
            return "number" == typeof t ? t : e[t];
          }
          var n = {};
          if (void 0 !== t)
            for (var r = 0, a = t.length; r < a; r++) {
              var o,
                s = t[r];
              s.image,
                e[s.image],
                ((o = Array.isArray(e[s.image])
                  ? new pi(e[s.image])
                  : new y(e[s.image])).needsUpdate = !0),
                (o.uuid = s.uuid),
                void 0 !== s.name && (o.name = s.name),
                void 0 !== s.mapping && (o.mapping = i(s.mapping, Bs)),
                void 0 !== s.offset && o.offset.fromArray(s.offset),
                void 0 !== s.repeat && o.repeat.fromArray(s.repeat),
                void 0 !== s.center && o.center.fromArray(s.center),
                void 0 !== s.rotation && (o.rotation = s.rotation),
                void 0 !== s.wrap &&
                  ((o.wrapS = i(s.wrap[0], Vs)), (o.wrapT = i(s.wrap[1], Vs))),
                void 0 !== s.format && (o.format = s.format),
                void 0 !== s.type && (o.type = s.type),
                void 0 !== s.encoding && (o.encoding = s.encoding),
                void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, Gs)),
                void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, Gs)),
                void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy),
                void 0 !== s.flipY && (o.flipY = s.flipY),
                void 0 !== s.premultiplyAlpha &&
                  (o.premultiplyAlpha = s.premultiplyAlpha),
                void 0 !== s.unpackAlignment &&
                  (o.unpackAlignment = s.unpackAlignment),
                (n[s.uuid] = o);
            }
          return n;
        },
        parseObject: function (t, e, i) {
          var n;
          function r(t) {
            return e[t], e[t];
          }
          function a(t) {
            if (void 0 !== t) {
              if (Array.isArray(t)) {
                for (var e = [], n = 0, r = t.length; n < r; n++) {
                  var a = t[n];
                  i[a], e.push(i[a]);
                }
                return e;
              }
              return i[t], i[t];
            }
          }
          switch (t.type) {
            case "Scene":
              (n = new Y()),
                void 0 !== t.background &&
                  Number.isInteger(t.background) &&
                  (n.background = new Ft(t.background)),
                void 0 !== t.fog &&
                  ("Fog" === t.fog.type
                    ? (n.fog = new nr(t.fog.color, t.fog.near, t.fog.far))
                    : "FogExp2" === t.fog.type &&
                      (n.fog = new ir(t.fog.color, t.fog.density)));
              break;
            case "PerspectiveCamera":
              (n = new Ge(t.fov, t.aspect, t.near, t.far)),
                void 0 !== t.focus && (n.focus = t.focus),
                void 0 !== t.zoom && (n.zoom = t.zoom),
                void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset),
                void 0 !== t.view && (n.view = Object.assign({}, t.view));
              break;
            case "OrthographicCamera":
              (n = new Ts(t.left, t.right, t.top, t.bottom, t.near, t.far)),
                void 0 !== t.zoom && (n.zoom = t.zoom),
                void 0 !== t.view && (n.view = Object.assign({}, t.view));
              break;
            case "AmbientLight":
              n = new Cs(t.color, t.intensity);
              break;
            case "DirectionalLight":
              n = new Ps(t.color, t.intensity);
              break;
            case "PointLight":
              n = new As(t.color, t.intensity, t.distance, t.decay);
              break;
            case "RectAreaLight":
              n = new Es(t.color, t.intensity, t.width, t.height);
              break;
            case "SpotLight":
              n = new Ms(
                t.color,
                t.intensity,
                t.distance,
                t.angle,
                t.penumbra,
                t.decay
              );
              break;
            case "HemisphereLight":
              n = new _s(t.color, t.groundColor, t.intensity);
              break;
            case "SkinnedMesh":
            case "Mesh":
              var o = r(t.geometry),
                s = a(t.material);
              n = o.bones && o.bones.length > 0 ? new Sr(o, s) : new Pe(o, s);
              break;
            case "InstancedMesh":
              (o = r(t.geometry)), (s = a(t.material));
              var c = t.count,
                h = t.instanceMatrix;
              (n = new Cr(o, s, c)).instanceMatrix = new Ht(
                new Float32Array(h.array),
                16
              );
              break;
            case "LOD":
              n = new Mr();
              break;
            case "Line":
              n = new Rr(r(t.geometry), a(t.material), t.mode);
              break;
            case "LineLoop":
              n = new Vr(r(t.geometry), a(t.material));
              break;
            case "LineSegments":
              n = new Br(r(t.geometry), a(t.material));
              break;
            case "PointCloud":
            case "Points":
              n = new qr(r(t.geometry), a(t.material));
              break;
            case "Sprite":
              n = new xr(a(t.material));
              break;
            case "Group":
              n = new Xn();
              break;
            default:
              n = new X();
          }
          if (
            ((n.uuid = t.uuid),
            void 0 !== t.name && (n.name = t.name),
            void 0 !== t.matrix
              ? (n.matrix.fromArray(t.matrix),
                void 0 !== t.matrixAutoUpdate &&
                  (n.matrixAutoUpdate = t.matrixAutoUpdate),
                n.matrixAutoUpdate &&
                  n.matrix.decompose(n.position, n.quaternion, n.scale))
              : (void 0 !== t.position && n.position.fromArray(t.position),
                void 0 !== t.rotation && n.rotation.fromArray(t.rotation),
                void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion),
                void 0 !== t.scale && n.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (n.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow),
            t.shadow &&
              (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias),
              void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius),
              void 0 !== t.shadow.mapSize &&
                n.shadow.mapSize.fromArray(t.shadow.mapSize),
              void 0 !== t.shadow.camera &&
                (n.shadow.camera = this.parseObject(t.shadow.camera))),
            void 0 !== t.visible && (n.visible = t.visible),
            void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled),
            void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder),
            void 0 !== t.userData && (n.userData = t.userData),
            void 0 !== t.layers && (n.layers.mask = t.layers),
            void 0 !== t.drawMode && n.setDrawMode(t.drawMode),
            void 0 !== t.children)
          )
            for (var l = t.children, u = 0; u < l.length; u++)
              n.add(this.parseObject(l[u], e, i));
          if ("LOD" === t.type)
            for (var p = t.levels, d = 0; d < p.length; d++) {
              var f = p[d],
                m = n.getObjectByProperty("uuid", f.object);
              void 0 !== m && n.addLevel(m, f.distance);
            }
          return n;
        },
      });
      var Us,
        Bs = {
          UVMapping: 300,
          CubeReflectionMapping: 301,
          CubeRefractionMapping: 302,
          EquirectangularReflectionMapping: 303,
          EquirectangularRefractionMapping: 304,
          SphericalReflectionMapping: 305,
          CubeUVReflectionMapping: 306,
          CubeUVRefractionMapping: 307,
        },
        Vs = {
          RepeatWrapping: 1e3,
          ClampToEdgeWrapping: 1001,
          MirroredRepeatWrapping: 1002,
        },
        Gs = {
          NearestFilter: 1003,
          NearestMipmapNearestFilter: 1004,
          NearestMipmapLinearFilter: 1005,
          LinearFilter: n,
          LinearMipmapNearestFilter: 1007,
          LinearMipmapLinearFilter: 1008,
        };
      function js(t) {
        Go.call(this, t), (this.options = void 0);
      }
      function ks() {
        (this.type = "ShapePath"),
          (this.color = new Ft()),
          (this.subPaths = []),
          (this.currentPath = null);
      }
      function Ws(t) {
        (this.type = "Font"), (this.data = t);
      }
      function Hs(t, e, i, n, r) {
        var a = r.glyphs[t] || r.glyphs["?"];
        if (a) {
          var o,
            s,
            c,
            h,
            l,
            u,
            p,
            d,
            f = new ks();
          if (a.o)
            for (
              var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")),
                v = 0,
                g = m.length;
              v < g;

            ) {
              switch (m[v++]) {
                case "m":
                  (o = m[v++] * e + i), (s = m[v++] * e + n), f.moveTo(o, s);
                  break;
                case "l":
                  (o = m[v++] * e + i), (s = m[v++] * e + n), f.lineTo(o, s);
                  break;
                case "q":
                  (c = m[v++] * e + i),
                    (h = m[v++] * e + n),
                    (l = m[v++] * e + i),
                    (u = m[v++] * e + n),
                    f.quadraticCurveTo(l, u, c, h);
                  break;
                case "b":
                  (c = m[v++] * e + i),
                    (h = m[v++] * e + n),
                    (l = m[v++] * e + i),
                    (u = m[v++] * e + n),
                    (p = m[v++] * e + i),
                    (d = m[v++] * e + n),
                    f.bezierCurveTo(l, u, p, d, c, h);
              }
            }
          return { offsetX: a.ha * e, path: f };
        }
      }
      function qs(t) {
        Go.call(this, t);
      }
      (js.prototype = Object.assign(Object.create(Go.prototype), {
        constructor: js,
        setOptions: function (t) {
          return (this.options = t), this;
        },
        load: function (t, e, i, n) {
          void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          var r = this,
            a = Uo.get(t);
          if (void 0 !== a)
            return (
              r.manager.itemStart(t),
              setTimeout(function () {
                e && e(a), r.manager.itemEnd(t);
              }, 0),
              a
            );
          fetch(t)
            .then(function (t) {
              return t.blob();
            })
            .then(function (t) {
              return void 0 === r.options
                ? createImageBitmap(t)
                : createImageBitmap(t, r.options);
            })
            .then(function (i) {
              Uo.add(t, i), e && e(i), r.manager.itemEnd(t);
            })
            .catch(function (e) {
              n && n(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }),
            r.manager.itemStart(t);
        },
      })),
        Object.assign(ks.prototype, {
          moveTo: function (t, e) {
            return (
              (this.currentPath = new gs()),
              this.subPaths.push(this.currentPath),
              this.currentPath.moveTo(t, e),
              this
            );
          },
          lineTo: function (t, e) {
            return this.currentPath.lineTo(t, e), this;
          },
          quadraticCurveTo: function (t, e, i, n) {
            return this.currentPath.quadraticCurveTo(t, e, i, n), this;
          },
          bezierCurveTo: function (t, e, i, n, r, a) {
            return this.currentPath.bezierCurveTo(t, e, i, n, r, a), this;
          },
          splineThru: function (t) {
            return this.currentPath.splineThru(t), this;
          },
          toShapes: function (t, e) {
            function i(t) {
              for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i],
                  a = new ys();
                (a.curves = r.curves), e.push(a);
              }
              return e;
            }
            function n(t, e) {
              for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                var o = e[r],
                  s = e[a],
                  c = s.x - o.x,
                  h = s.y - o.y;
                if (Math.abs(h) > Number.EPSILON) {
                  if (
                    (h < 0 && ((o = e[a]), (c = -c), (s = e[r]), (h = -h)),
                    t.y < o.y || t.y > s.y)
                  )
                    continue;
                  if (t.y === o.y) {
                    if (t.x === o.x) return !0;
                  } else {
                    var l = h * (t.x - o.x) - c * (t.y - o.y);
                    if (0 === l) return !0;
                    if (l < 0) continue;
                    n = !n;
                  }
                } else {
                  if (t.y !== o.y) continue;
                  if ((s.x <= t.x && t.x <= o.x) || (o.x <= t.x && t.x <= s.x))
                    return !0;
                }
              }
              return n;
            }
            var r = Ba.isClockWise,
              a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return i(a);
            var o,
              s,
              c,
              h = [];
            if (1 === a.length)
              return (
                (s = a[0]), ((c = new ys()).curves = s.curves), h.push(c), h
              );
            var l = !r(a[0].getPoints());
            l = t ? !l : l;
            var u,
              p,
              d = [],
              f = [],
              m = [],
              v = 0;
            (f[v] = void 0), (m[v] = []);
            for (var g = 0, y = a.length; g < y; g++)
              (o = r((u = (s = a[g]).getPoints()))),
                (o = t ? !o : o)
                  ? (!l && f[v] && v++,
                    (f[v] = { s: new ys(), p: u }),
                    (f[v].s.curves = s.curves),
                    l && v++,
                    (m[v] = []))
                  : m[v].push({ h: s, p: u[0] });
            if (!f[0]) return i(a);
            if (f.length > 1) {
              for (var x = !1, _ = [], b = 0, w = f.length; b < w; b++)
                d[b] = [];
              for (b = 0, w = f.length; b < w; b++)
                for (var M = m[b], S = 0; S < M.length; S++) {
                  for (var A = M[S], T = !0, L = 0; L < f.length; L++)
                    n(A.p, f[L].p) &&
                      (b !== L && _.push({ froms: b, tos: L, hole: S }),
                      T ? ((T = !1), d[L].push(A)) : (x = !0));
                  T && d[b].push(A);
                }
              _.length > 0 && (x || (m = d));
            }
            g = 0;
            for (var P = f.length; g < P; g++) {
              (c = f[g].s), h.push(c);
              for (var C = 0, E = (p = m[g]).length; C < E; C++)
                c.holes.push(p[C].h);
            }
            return h;
          },
        }),
        Object.assign(Ws.prototype, {
          isFont: !0,
          generateShapes: function (t, e) {
            void 0 === e && (e = 100);
            for (
              var i = [],
                n = (function (t, e, i) {
                  for (
                    var n = Array.from ? Array.from(t) : String(t).split(""),
                      r = e / i.resolution,
                      a =
                        (i.boundingBox.yMax -
                          i.boundingBox.yMin +
                          i.underlineThickness) *
                        r,
                      o = [],
                      s = 0,
                      c = 0,
                      h = 0;
                    h < n.length;
                    h++
                  ) {
                    var l = n[h];
                    if ("\n" === l) (s = 0), (c -= a);
                    else {
                      var u = Hs(l, r, s, c, i);
                      (s += u.offsetX), o.push(u.path);
                    }
                  }
                  return o;
                })(t, e, this.data),
                r = 0,
                a = n.length;
              r < a;
              r++
            )
              Array.prototype.push.apply(i, n[r].toShapes());
            return i;
          },
        }),
        (qs.prototype = Object.assign(Object.create(Go.prototype), {
          constructor: qs,
          load: function (t, e, i, n) {
            var r = this,
              a = new ko(this.manager);
            a.setPath(this.path),
              a.load(
                t,
                function (t) {
                  var i;
                  try {
                    i = JSON.parse(t);
                  } catch (e) {
                    i = JSON.parse(t.substring(65, t.length - 2));
                  }
                  var n = r.parse(i);
                  e && e(n);
                },
                i,
                n
              );
          },
          parse: function (t) {
            return new Ws(t);
          },
        }));
      var Xs = function () {
        return (
          void 0 === Us &&
            (Us = new (window.AudioContext || window.webkitAudioContext)()),
          Us
        );
      };
      function Ys(t) {
        Go.call(this, t);
      }
      function Js() {
        this.coefficients = [];
        for (var t = 0; t < 9; t++) this.coefficients.push(new p());
      }
      function Zs(t, e) {
        xs.call(this, void 0, e), (this.sh = void 0 !== t ? t : new Js());
      }
      function Qs(t, e, i) {
        Zs.call(this, void 0, i);
        var n = new Ft().set(t),
          r = new Ft().set(e),
          a = new p(n.r, n.g, n.b),
          o = new p(r.r, r.g, r.b),
          s = Math.sqrt(Math.PI),
          c = s * Math.sqrt(0.75);
        this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),
          this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
      }
      function Ks(t, e) {
        Zs.call(this, void 0, e);
        var i = new Ft().set(t);
        this.sh.coefficients[0]
          .set(i.r, i.g, i.b)
          .multiplyScalar(2 * Math.sqrt(Math.PI));
      }
      (Ys.prototype = Object.assign(Object.create(Go.prototype), {
        constructor: Ys,
        load: function (t, e, i, n) {
          var r = new ko(this.manager);
          r.setResponseType("arraybuffer"),
            r.setPath(this.path),
            r.load(
              t,
              function (t) {
                var i = t.slice(0);
                Xs().decodeAudioData(i, function (t) {
                  e(t);
                });
              },
              i,
              n
            );
        },
      })),
        Object.assign(Js.prototype, {
          isSphericalHarmonics3: !0,
          set: function (t) {
            for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
            return this;
          },
          zero: function () {
            for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
            return this;
          },
          getAt: function (t, e) {
            var i = t.x,
              n = t.y,
              r = t.z,
              a = this.coefficients;
            return (
              e.copy(a[0]).multiplyScalar(0.282095),
              e.addScale(a[1], 0.488603 * n),
              e.addScale(a[2], 0.488603 * r),
              e.addScale(a[3], 0.488603 * i),
              e.addScale(a[4], i * n * 1.092548),
              e.addScale(a[5], n * r * 1.092548),
              e.addScale(a[6], 0.315392 * (3 * r * r - 1)),
              e.addScale(a[7], i * r * 1.092548),
              e.addScale(a[8], 0.546274 * (i * i - n * n)),
              e
            );
          },
          getIrradianceAt: function (t, e) {
            var i = t.x,
              n = t.y,
              r = t.z,
              a = this.coefficients;
            return (
              e.copy(a[0]).multiplyScalar(0.886227),
              e.addScale(a[1], 1.023328 * n),
              e.addScale(a[2], 1.023328 * r),
              e.addScale(a[3], 1.023328 * i),
              e.addScale(a[4], 0.858086 * i * n),
              e.addScale(a[5], 0.858086 * n * r),
              e.addScale(a[6], 0.743125 * r * r - 0.247708),
              e.addScale(a[7], 0.858086 * i * r),
              e.addScale(a[8], 0.429043 * (i * i - n * n)),
              e
            );
          },
          add: function (t) {
            for (var e = 0; e < 9; e++)
              this.coefficients[e].add(t.coefficients[e]);
            return this;
          },
          scale: function (t) {
            for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
            return this;
          },
          lerp: function (t, e) {
            for (var i = 0; i < 9; i++)
              this.coefficients[i].lerp(t.coefficients[i], e);
            return this;
          },
          equals: function (t) {
            for (var e = 0; e < 9; e++)
              if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0;
          },
          copy: function (t) {
            return this.set(t.coefficients);
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
          fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var i = this.coefficients, n = 0; n < 9; n++)
              i[n].fromArray(t, e + 3 * n);
            return this;
          },
          toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            for (var i = this.coefficients, n = 0; n < 9; n++)
              i[n].toArray(t, e + 3 * n);
            return t;
          },
        }),
        Object.assign(Js, {
          getBasisAt: function (t, e) {
            var i = t.x,
              n = t.y,
              r = t.z;
            (e[0] = 0.282095),
              (e[1] = 0.488603 * n),
              (e[2] = 0.488603 * r),
              (e[3] = 0.488603 * i),
              (e[4] = 1.092548 * i * n),
              (e[5] = 1.092548 * n * r),
              (e[6] = 0.315392 * (3 * r * r - 1)),
              (e[7] = 1.092548 * i * r),
              (e[8] = 0.546274 * (i * i - n * n));
          },
        }),
        (Zs.prototype = Object.assign(Object.create(xs.prototype), {
          constructor: Zs,
          isLightProbe: !0,
          copy: function (t) {
            return (
              xs.prototype.copy.call(this, t),
              this.sh.copy(t.sh),
              (this.intensity = t.intensity),
              this
            );
          },
          toJSON: function (t) {
            return xs.prototype.toJSON.call(this, t);
          },
        })),
        (Qs.prototype = Object.assign(Object.create(Zs.prototype), {
          constructor: Qs,
          isHemisphereLightProbe: !0,
          copy: function (t) {
            return Zs.prototype.copy.call(this, t), this;
          },
          toJSON: function (t) {
            return Zs.prototype.toJSON.call(this, t);
          },
        })),
        (Ks.prototype = Object.assign(Object.create(Zs.prototype), {
          constructor: Ks,
          isAmbientLightProbe: !0,
          copy: function (t) {
            return Zs.prototype.copy.call(this, t), this;
          },
          toJSON: function (t) {
            return Zs.prototype.toJSON.call(this, t);
          },
        }));
      var $s = new C(),
        tc = new C();
      function ec(t) {
        (this.autoStart = void 0 === t || t),
          (this.startTime = 0),
          (this.oldTime = 0),
          (this.elapsedTime = 0),
          (this.running = !1);
      }
      Object.assign(
        function () {
          (this.type = "StereoCamera"),
            (this.aspect = 1),
            (this.eyeSep = 0.064),
            (this.cameraL = new Ge()),
            this.cameraL.layers.enable(1),
            (this.cameraL.matrixAutoUpdate = !1),
            (this.cameraR = new Ge()),
            this.cameraR.layers.enable(2),
            (this.cameraR.matrixAutoUpdate = !1),
            (this._cache = {
              focus: null,
              fov: null,
              aspect: null,
              near: null,
              far: null,
              zoom: null,
              eyeSep: null,
            });
        }.prototype,
        {
          update: function (t) {
            var e = this._cache;
            if (
              e.focus !== t.focus ||
              e.fov !== t.fov ||
              e.aspect !== t.aspect * this.aspect ||
              e.near !== t.near ||
              e.far !== t.far ||
              e.zoom !== t.zoom ||
              e.eyeSep !== this.eyeSep
            ) {
              (e.focus = t.focus),
                (e.fov = t.fov),
                (e.aspect = t.aspect * this.aspect),
                (e.near = t.near),
                (e.far = t.far),
                (e.zoom = t.zoom),
                (e.eyeSep = this.eyeSep);
              var i,
                n,
                r = t.projectionMatrix.clone(),
                a = e.eyeSep / 2,
                o = (a * e.near) / e.focus,
                c = (e.near * Math.tan(s.DEG2RAD * e.fov * 0.5)) / e.zoom;
              (tc.elements[12] = -a),
                ($s.elements[12] = a),
                (i = -c * e.aspect + o),
                (n = c * e.aspect + o),
                (r.elements[0] = (2 * e.near) / (n - i)),
                (r.elements[8] = (n + i) / (n - i)),
                this.cameraL.projectionMatrix.copy(r),
                (i = -c * e.aspect - o),
                (n = c * e.aspect - o),
                (r.elements[0] = (2 * e.near) / (n - i)),
                (r.elements[8] = (n + i) / (n - i)),
                this.cameraR.projectionMatrix.copy(r);
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(tc),
              this.cameraR.matrixWorld.copy(t.matrixWorld).multiply($s);
          },
        }
      ),
        Object.assign(ec.prototype, {
          start: function () {
            (this.startTime = (
              "undefined" == typeof performance ? Date : performance
            ).now()),
              (this.oldTime = this.startTime),
              (this.elapsedTime = 0),
              (this.running = !0);
          },
          stop: function () {
            this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
          },
          getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime;
          },
          getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
              var e = (
                "undefined" == typeof performance ? Date : performance
              ).now();
              (t = (e - this.oldTime) / 1e3),
                (this.oldTime = e),
                (this.elapsedTime += t);
            }
            return t;
          },
        });
      var ic = new p(),
        nc = new h(),
        rc = new p(),
        ac = new p();
      function oc() {
        X.call(this),
          (this.type = "AudioListener"),
          (this.context = Xs()),
          (this.gain = this.context.createGain()),
          this.gain.connect(this.context.destination),
          (this.filter = null),
          (this.timeDelta = 0),
          (this._clock = new ec());
      }
      function sc(t) {
        X.call(this),
          (this.type = "Audio"),
          (this.listener = t),
          (this.context = t.context),
          (this.gain = this.context.createGain()),
          this.gain.connect(t.getInput()),
          (this.autoplay = !1),
          (this.buffer = null),
          (this.detune = 0),
          (this.loop = !1),
          (this.loopStart = 0),
          (this.loopEnd = 0),
          (this.offset = 0),
          (this.duration = void 0),
          (this.playbackRate = 1),
          (this.isPlaying = !1),
          (this.hasPlaybackControl = !0),
          (this.sourceType = "empty"),
          (this._startedAt = 0),
          (this._pausedAt = 0),
          (this.filters = []);
      }
      (oc.prototype = Object.assign(Object.create(X.prototype), {
        constructor: oc,
        getInput: function () {
          return this.gain;
        },
        removeFilter: function () {
          return (
            null !== this.filter &&
              (this.gain.disconnect(this.filter),
              this.filter.disconnect(this.context.destination),
              this.gain.connect(this.context.destination),
              (this.filter = null)),
            this
          );
        },
        getFilter: function () {
          return this.filter;
        },
        setFilter: function (t) {
          return (
            null !== this.filter
              ? (this.gain.disconnect(this.filter),
                this.filter.disconnect(this.context.destination))
              : this.gain.disconnect(this.context.destination),
            (this.filter = t),
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination),
            this
          );
        },
        getMasterVolume: function () {
          return this.gain.gain.value;
        },
        setMasterVolume: function (t) {
          return (
            this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
            this
          );
        },
        updateMatrixWorld: function (t) {
          X.prototype.updateMatrixWorld.call(this, t);
          var e = this.context.listener,
            i = this.up;
          if (
            ((this.timeDelta = this._clock.getDelta()),
            this.matrixWorld.decompose(ic, nc, rc),
            ac.set(0, 0, -1).applyQuaternion(nc),
            e.positionX)
          ) {
            var n = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(ic.x, n),
              e.positionY.linearRampToValueAtTime(ic.y, n),
              e.positionZ.linearRampToValueAtTime(ic.z, n),
              e.forwardX.linearRampToValueAtTime(ac.x, n),
              e.forwardY.linearRampToValueAtTime(ac.y, n),
              e.forwardZ.linearRampToValueAtTime(ac.z, n),
              e.upX.linearRampToValueAtTime(i.x, n),
              e.upY.linearRampToValueAtTime(i.y, n),
              e.upZ.linearRampToValueAtTime(i.z, n);
          } else
            e.setPosition(ic.x, ic.y, ic.z),
              e.setOrientation(ac.x, ac.y, ac.z, i.x, i.y, i.z);
        },
      })),
        (sc.prototype = Object.assign(Object.create(X.prototype), {
          constructor: sc,
          getOutput: function () {
            return this.gain;
          },
          setNodeSource: function (t) {
            return (
              (this.hasPlaybackControl = !1),
              (this.sourceType = "audioNode"),
              (this.source = t),
              this.connect(),
              this
            );
          },
          setMediaElementSource: function (t) {
            return (
              (this.hasPlaybackControl = !1),
              (this.sourceType = "mediaNode"),
              (this.source = this.context.createMediaElementSource(t)),
              this.connect(),
              this
            );
          },
          setMediaStreamSource: function (t) {
            return (
              (this.hasPlaybackControl = !1),
              (this.sourceType = "mediaStreamNode"),
              (this.source = this.context.createMediaStreamSource(t)),
              this.connect(),
              this
            );
          },
          setBuffer: function (t) {
            return (
              (this.buffer = t),
              (this.sourceType = "buffer"),
              this.autoplay && this.play(),
              this
            );
          },
          play: function (t) {
            if (
              (void 0 === t && (t = 0),
              !0 !== this.isPlaying && !1 !== this.hasPlaybackControl)
            ) {
              this._startedAt = this.context.currentTime + t;
              var e = this.context.createBufferSource();
              return (
                (e.buffer = this.buffer),
                (e.loop = this.loop),
                (e.loopStart = this.loopStart),
                (e.loopEnd = this.loopEnd),
                (e.onended = this.onEnded.bind(this)),
                e.start(
                  this._startedAt,
                  this._pausedAt + this.offset,
                  this.duration
                ),
                (this.isPlaying = !0),
                (this.source = e),
                this.setDetune(this.detune),
                this.setPlaybackRate(this.playbackRate),
                this.connect()
              );
            }
          },
          pause: function () {
            if (!1 !== this.hasPlaybackControl)
              return (
                !0 === this.isPlaying &&
                  ((this._pausedAt =
                    (this.context.currentTime - this._startedAt) *
                    this.playbackRate),
                  this.source.stop(),
                  (this.source.onended = null),
                  (this.isPlaying = !1)),
                this
              );
          },
          stop: function () {
            if (!1 !== this.hasPlaybackControl)
              return (
                (this._pausedAt = 0),
                this.source.stop(),
                (this.source.onended = null),
                (this.isPlaying = !1),
                this
              );
          },
          connect: function () {
            if (this.filters.length > 0) {
              this.source.connect(this.filters[0]);
              for (var t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].connect(this.filters[t]);
              this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this;
          },
          disconnect: function () {
            if (this.filters.length > 0) {
              this.source.disconnect(this.filters[0]);
              for (var t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].disconnect(this.filters[t]);
              this.filters[this.filters.length - 1].disconnect(
                this.getOutput()
              );
            } else this.source.disconnect(this.getOutput());
            return this;
          },
          getFilters: function () {
            return this.filters;
          },
          setFilters: function (t) {
            return (
              t || (t = []),
              !0 === this.isPlaying
                ? (this.disconnect(), (this.filters = t), this.connect())
                : (this.filters = t),
              this
            );
          },
          setDetune: function (t) {
            if (((this.detune = t), void 0 !== this.source.detune))
              return (
                !0 === this.isPlaying &&
                  this.source.detune.setTargetAtTime(
                    this.detune,
                    this.context.currentTime,
                    0.01
                  ),
                this
              );
          },
          getDetune: function () {
            return this.detune;
          },
          getFilter: function () {
            return this.getFilters()[0];
          },
          setFilter: function (t) {
            return this.setFilters(t ? [t] : []);
          },
          setPlaybackRate: function (t) {
            if (!1 !== this.hasPlaybackControl)
              return (
                (this.playbackRate = t),
                !0 === this.isPlaying &&
                  this.source.playbackRate.setTargetAtTime(
                    this.playbackRate,
                    this.context.currentTime,
                    0.01
                  ),
                this
              );
          },
          getPlaybackRate: function () {
            return this.playbackRate;
          },
          onEnded: function () {
            this.isPlaying = !1;
          },
          getLoop: function () {
            return !1 !== this.hasPlaybackControl && this.loop;
          },
          setLoop: function (t) {
            if (!1 !== this.hasPlaybackControl)
              return (
                (this.loop = t),
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this
              );
          },
          setLoopStart: function (t) {
            return (this.loopStart = t), this;
          },
          setLoopEnd: function (t) {
            return (this.loopEnd = t), this;
          },
          getVolume: function () {
            return this.gain.gain.value;
          },
          setVolume: function (t) {
            return (
              this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
              this
            );
          },
        }));
      var cc = new p(),
        hc = new h(),
        lc = new p(),
        uc = new p();
      function pc(t) {
        sc.call(this, t),
          (this.panner = this.context.createPanner()),
          (this.panner.panningModel = "HRTF"),
          this.panner.connect(this.gain);
      }
      function dc(t, e) {
        (this.analyser = t.context.createAnalyser()),
          (this.analyser.fftSize = void 0 !== e ? e : 2048),
          (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
          t.getOutput().connect(this.analyser);
      }
      function fc(t, e, i) {
        (this.binding = t), (this.valueSize = i);
        var n,
          r = Float64Array;
        switch (e) {
          case "quaternion":
            n = this._slerp;
            break;
          case "string":
          case "bool":
            (r = Array), (n = this._select);
            break;
          default:
            n = this._lerp;
        }
        (this.buffer = new r(4 * i)),
          (this._mixBufferRegion = n),
          (this.cumulativeWeight = 0),
          (this.useCount = 0),
          (this.referenceCount = 0);
      }
      (pc.prototype = Object.assign(Object.create(sc.prototype), {
        constructor: pc,
        getOutput: function () {
          return this.panner;
        },
        getRefDistance: function () {
          return this.panner.refDistance;
        },
        setRefDistance: function (t) {
          return (this.panner.refDistance = t), this;
        },
        getRolloffFactor: function () {
          return this.panner.rolloffFactor;
        },
        setRolloffFactor: function (t) {
          return (this.panner.rolloffFactor = t), this;
        },
        getDistanceModel: function () {
          return this.panner.distanceModel;
        },
        setDistanceModel: function (t) {
          return (this.panner.distanceModel = t), this;
        },
        getMaxDistance: function () {
          return this.panner.maxDistance;
        },
        setMaxDistance: function (t) {
          return (this.panner.maxDistance = t), this;
        },
        setDirectionalCone: function (t, e, i) {
          return (
            (this.panner.coneInnerAngle = t),
            (this.panner.coneOuterAngle = e),
            (this.panner.coneOuterGain = i),
            this
          );
        },
        updateMatrixWorld: function (t) {
          if (
            (X.prototype.updateMatrixWorld.call(this, t),
            !0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
          ) {
            this.matrixWorld.decompose(cc, hc, lc),
              uc.set(0, 0, 1).applyQuaternion(hc);
            var e = this.panner;
            if (e.positionX) {
              var i = this.context.currentTime + this.listener.timeDelta;
              e.positionX.linearRampToValueAtTime(cc.x, i),
                e.positionY.linearRampToValueAtTime(cc.y, i),
                e.positionZ.linearRampToValueAtTime(cc.z, i),
                e.orientationX.linearRampToValueAtTime(uc.x, i),
                e.orientationY.linearRampToValueAtTime(uc.y, i),
                e.orientationZ.linearRampToValueAtTime(uc.z, i);
            } else
              e.setPosition(cc.x, cc.y, cc.z),
                e.setOrientation(uc.x, uc.y, uc.z);
          }
        },
      })),
        Object.assign(dc.prototype, {
          getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data;
          },
          getAverageFrequency: function () {
            for (
              var t = 0, e = this.getFrequencyData(), i = 0;
              i < e.length;
              i++
            )
              t += e[i];
            return t / e.length;
          },
        }),
        Object.assign(fc.prototype, {
          accumulate: function (t, e) {
            var i = this.buffer,
              n = this.valueSize,
              r = t * n + n,
              a = this.cumulativeWeight;
            if (0 === a) {
              for (var o = 0; o !== n; ++o) i[r + o] = i[o];
              a = e;
            } else {
              var s = e / (a += e);
              this._mixBufferRegion(i, r, 0, s, n);
            }
            this.cumulativeWeight = a;
          },
          apply: function (t) {
            var e = this.valueSize,
              i = this.buffer,
              n = t * e + e,
              r = this.cumulativeWeight,
              a = this.binding;
            if (((this.cumulativeWeight = 0), r < 1)) {
              var o = 3 * e;
              this._mixBufferRegion(i, n, o, 1 - r, e);
            }
            for (var s = e, c = e + e; s !== c; ++s)
              if (i[s] !== i[s + e]) {
                a.setValue(i, n);
                break;
              }
          },
          saveOriginalState: function () {
            var t = this.binding,
              e = this.buffer,
              i = this.valueSize,
              n = 3 * i;
            t.getValue(e, n);
            for (var r = i, a = n; r !== a; ++r) e[r] = e[n + (r % i)];
            this.cumulativeWeight = 0;
          },
          restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t);
          },
          _select: function (t, e, i, n, r) {
            if (n >= 0.5) for (var a = 0; a !== r; ++a) t[e + a] = t[i + a];
          },
          _slerp: function (t, e, i, n) {
            h.slerpFlat(t, e, t, e, t, i, n);
          },
          _lerp: function (t, e, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
              var s = e + o;
              t[s] = t[s] * a + t[i + o] * n;
            }
          },
        });
      var mc = new RegExp("[\\[\\]\\.:\\/]", "g"),
        vc = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
        gc = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        yc = /(WCOD+)?/.source.replace("WCOD", vc),
        xc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(
          "WC",
          "[^\\[\\]\\.:\\/]"
        ),
        _c = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        bc = new RegExp("^" + gc + yc + xc + _c + "$"),
        wc = ["material", "materials", "bones"];
      function Mc(t, e, i) {
        var n = i || Sc.parseTrackName(e);
        (this._targetGroup = t), (this._bindings = t.subscribe_(e, n));
      }
      function Sc(t, e, i) {
        (this.path = e),
          (this.parsedPath = i || Sc.parseTrackName(e)),
          (this.node = Sc.findNode(t, this.parsedPath.nodeName) || t),
          (this.rootNode = t);
      }
      function Ac(t, e, i) {
        (this._mixer = t), (this._clip = e), (this._localRoot = i || null);
        for (
          var n = e.tracks,
            r = n.length,
            a = new Array(r),
            o = { endingStart: 2400, endingEnd: 2400 },
            s = 0;
          s !== r;
          ++s
        ) {
          var c = n[s].createInterpolant(null);
          (a[s] = c), (c.settings = o);
        }
        (this._interpolantSettings = o),
          (this._interpolants = a),
          (this._propertyBindings = new Array(r)),
          (this._cacheIndex = null),
          (this._byClipCacheIndex = null),
          (this._timeScaleInterpolant = null),
          (this._weightInterpolant = null),
          (this.loop = 2201),
          (this._loopCount = -1),
          (this._startTime = null),
          (this.time = 0),
          (this.timeScale = 1),
          (this._effectiveTimeScale = 1),
          (this.weight = 1),
          (this._effectiveWeight = 1),
          (this.repetitions = 1 / 0),
          (this.paused = !1),
          (this.enabled = !0),
          (this.clampWhenFinished = !1),
          (this.zeroSlopeAtStart = !0),
          (this.zeroSlopeAtEnd = !0);
      }
      function Tc(t) {
        (this._root = t),
          this._initMemoryManager(),
          (this._accuIndex = 0),
          (this.time = 0),
          (this.timeScale = 1);
      }
      function Lc(t) {
        "string" == typeof t && (t = arguments[1]), (this.value = t);
      }
      function Pc(t, e, i) {
        rr.call(this, t, e), (this.meshPerAttribute = i || 1);
      }
      function Cc(t, e) {
        return t.distance - e.distance;
      }
      function Ec(t, e, i, n) {
        if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
          for (var r = t.children, a = 0, o = r.length; a < o; a++)
            Ec(r[a], e, i, !0);
      }
      Object.assign(Mc.prototype, {
        getValue: function (t, e) {
          this.bind();
          var i = this._targetGroup.nCachedObjects_,
            n = this._bindings[i];
          void 0 !== n && n.getValue(t, e);
        },
        setValue: function (t, e) {
          for (
            var i = this._bindings,
              n = this._targetGroup.nCachedObjects_,
              r = i.length;
            n !== r;
            ++n
          )
            i[n].setValue(t, e);
        },
        bind: function () {
          for (
            var t = this._bindings,
              e = this._targetGroup.nCachedObjects_,
              i = t.length;
            e !== i;
            ++e
          )
            t[e].bind();
        },
        unbind: function () {
          for (
            var t = this._bindings,
              e = this._targetGroup.nCachedObjects_,
              i = t.length;
            e !== i;
            ++e
          )
            t[e].unbind();
        },
      }),
        Object.assign(Sc, {
          Composite: Mc,
          create: function (t, e, i) {
            return t && t.isAnimationObjectGroup
              ? new Sc.Composite(t, e, i)
              : new Sc(t, e, i);
          },
          sanitizeNodeName: function (t) {
            return t.replace(/\s/g, "_").replace(mc, "");
          },
          parseTrackName: function (t) {
            var e = bc.exec(t);
            if (!e)
              throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            var i = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6],
              },
              n = i.nodeName && i.nodeName.lastIndexOf(".");
            if (void 0 !== n && -1 !== n) {
              var r = i.nodeName.substring(n + 1);
              -1 !== wc.indexOf(r) &&
                ((i.nodeName = i.nodeName.substring(0, n)), (i.objectName = r));
            }
            if (null === i.propertyName || 0 === i.propertyName.length)
              throw new Error(
                "PropertyBinding: can not parse propertyName from trackName: " +
                  t
              );
            return i;
          },
          findNode: function (t, e) {
            if (
              !e ||
              "" === e ||
              "root" === e ||
              "." === e ||
              -1 === e ||
              e === t.name ||
              e === t.uuid
            )
              return t;
            if (t.skeleton) {
              var i = t.skeleton.getBoneByName(e);
              if (void 0 !== i) return i;
            }
            if (t.children) {
              var n = function (t) {
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (r.name === e || r.uuid === e) return r;
                    var a = n(r.children);
                    if (a) return a;
                  }
                  return null;
                },
                r = n(t.children);
              if (r) return r;
            }
            return null;
          },
        }),
        Object.assign(Sc.prototype, {
          _getValue_unavailable: function () {},
          _setValue_unavailable: function () {},
          BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3,
          },
          Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
          GetterByBindingType: [
            function (t, e) {
              t[e] = this.node[this.propertyName];
            },
            function (t, e) {
              for (
                var i = this.resolvedProperty, n = 0, r = i.length;
                n !== r;
                ++n
              )
                t[e++] = i[n];
            },
            function (t, e) {
              t[e] = this.resolvedProperty[this.propertyIndex];
            },
            function (t, e) {
              this.resolvedProperty.toArray(t, e);
            },
          ],
          SetterByBindingTypeAndVersioning: [
            [
              function (t, e) {
                this.targetObject[this.propertyName] = t[e];
              },
              function (t, e) {
                (this.targetObject[this.propertyName] = t[e]),
                  (this.targetObject.needsUpdate = !0);
              },
              function (t, e) {
                (this.targetObject[this.propertyName] = t[e]),
                  (this.targetObject.matrixWorldNeedsUpdate = !0);
              },
            ],
            [
              function (t, e) {
                for (
                  var i = this.resolvedProperty, n = 0, r = i.length;
                  n !== r;
                  ++n
                )
                  i[n] = t[e++];
              },
              function (t, e) {
                for (
                  var i = this.resolvedProperty, n = 0, r = i.length;
                  n !== r;
                  ++n
                )
                  i[n] = t[e++];
                this.targetObject.needsUpdate = !0;
              },
              function (t, e) {
                for (
                  var i = this.resolvedProperty, n = 0, r = i.length;
                  n !== r;
                  ++n
                )
                  i[n] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0;
              },
            ],
            [
              function (t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e];
              },
              function (t, e) {
                (this.resolvedProperty[this.propertyIndex] = t[e]),
                  (this.targetObject.needsUpdate = !0);
              },
              function (t, e) {
                (this.resolvedProperty[this.propertyIndex] = t[e]),
                  (this.targetObject.matrixWorldNeedsUpdate = !0);
              },
            ],
            [
              function (t, e) {
                this.resolvedProperty.fromArray(t, e);
              },
              function (t, e) {
                this.resolvedProperty.fromArray(t, e),
                  (this.targetObject.needsUpdate = !0);
              },
              function (t, e) {
                this.resolvedProperty.fromArray(t, e),
                  (this.targetObject.matrixWorldNeedsUpdate = !0);
              },
            ],
          ],
          getValue: function (t, e) {
            this.bind(), this.getValue(t, e);
          },
          setValue: function (t, e) {
            this.bind(), this.setValue(t, e);
          },
          bind: function () {
            var t = this.node,
              e = this.parsedPath,
              i = e.objectName,
              n = e.propertyName,
              r = e.propertyIndex;
            if (
              (t ||
                ((t = Sc.findNode(this.rootNode, e.nodeName) || this.rootNode),
                (this.node = t)),
              (this.getValue = this._getValue_unavailable),
              (this.setValue = this._setValue_unavailable),
              t)
            ) {
              if (i) {
                var a = e.objectIndex;
                switch (i) {
                  case "materials":
                    if (!t.material) return;
                    if (!t.material.materials) return;
                    t = t.material.materials;
                    break;
                  case "bones":
                    if (!t.skeleton) return;
                    t = t.skeleton.bones;
                    for (var o = 0; o < t.length; o++)
                      if (t[o].name === a) {
                        a = o;
                        break;
                      }
                    break;
                  default:
                    if (void 0 === t[i]) return;
                    t = t[i];
                }
                if (void 0 !== a) {
                  if (void 0 === t[a]) return;
                  t = t[a];
                }
              }
              var s = t[n];
              if (void 0 !== s) {
                var c = this.Versioning.None;
                (this.targetObject = t),
                  void 0 !== t.needsUpdate
                    ? (c = this.Versioning.NeedsUpdate)
                    : void 0 !== t.matrixWorldNeedsUpdate &&
                      (c = this.Versioning.MatrixWorldNeedsUpdate);
                var h = this.BindingType.Direct;
                if (void 0 !== r) {
                  if ("morphTargetInfluences" === n) {
                    if (!t.geometry) return;
                    if (t.geometry.isBufferGeometry) {
                      if (!t.geometry.morphAttributes) return;
                      for (
                        o = 0;
                        o < this.node.geometry.morphAttributes.position.length;
                        o++
                      )
                        if (t.geometry.morphAttributes.position[o].name === r) {
                          r = o;
                          break;
                        }
                    } else {
                      if (!t.geometry.morphTargets) return;
                      for (
                        o = 0;
                        o < this.node.geometry.morphTargets.length;
                        o++
                      )
                        if (t.geometry.morphTargets[o].name === r) {
                          r = o;
                          break;
                        }
                    }
                  }
                  (h = this.BindingType.ArrayElement),
                    (this.resolvedProperty = s),
                    (this.propertyIndex = r);
                } else
                  void 0 !== s.fromArray && void 0 !== s.toArray
                    ? ((h = this.BindingType.HasFromToArray),
                      (this.resolvedProperty = s))
                    : Array.isArray(s)
                    ? ((h = this.BindingType.EntireArray),
                      (this.resolvedProperty = s))
                    : (this.propertyName = n);
                (this.getValue = this.GetterByBindingType[h]),
                  (this.setValue = this.SetterByBindingTypeAndVersioning[h][c]);
              } else e.nodeName;
            }
          },
          unbind: function () {
            (this.node = null),
              (this.getValue = this._getValue_unbound),
              (this.setValue = this._setValue_unbound);
          },
        }),
        Object.assign(Sc.prototype, {
          _getValue_unbound: Sc.prototype.getValue,
          _setValue_unbound: Sc.prototype.setValue,
        }),
        Object.assign(
          function () {
            (this.uuid = s.generateUUID()),
              (this._objects = Array.prototype.slice.call(arguments)),
              (this.nCachedObjects_ = 0);
            var t = {};
            this._indicesByUUID = t;
            for (var e = 0, i = arguments.length; e !== i; ++e)
              t[arguments[e].uuid] = e;
            (this._paths = []),
              (this._parsedPaths = []),
              (this._bindings = []),
              (this._bindingsIndicesByPath = {});
            var n = this;
            this.stats = {
              objects: {
                get total() {
                  return n._objects.length;
                },
                get inUse() {
                  return this.total - n.nCachedObjects_;
                },
              },
              get bindingsPerObject() {
                return n._bindings.length;
              },
            };
          }.prototype,
          {
            isAnimationObjectGroup: !0,
            add: function () {
              for (
                var t = this._objects,
                  e = t.length,
                  i = this.nCachedObjects_,
                  n = this._indicesByUUID,
                  r = this._paths,
                  a = this._parsedPaths,
                  o = this._bindings,
                  s = o.length,
                  c = 0,
                  h = arguments.length;
                c !== h;
                ++c
              ) {
                var l = arguments[c],
                  u = l.uuid,
                  p = n[u];
                if (void 0 === p) {
                  (p = e++), (n[u] = p), t.push(l);
                  for (var d = 0, f = s; d !== f; ++d)
                    o[d].push(new Sc(l, r[d], a[d]));
                } else if (p < i) {
                  t[p];
                  var m = --i,
                    v = t[m];
                  (n[v.uuid] = p), (t[p] = v), (n[u] = m), (t[m] = l);
                  for (d = 0, f = s; d !== f; ++d) {
                    var g = o[d],
                      y = g[m],
                      x = g[p];
                    (g[p] = y),
                      void 0 === x && (x = new Sc(l, r[d], a[d])),
                      (g[m] = x);
                  }
                } else t[p];
              }
              this.nCachedObjects_ = i;
            },
            remove: function () {
              for (
                var t = this._objects,
                  e = this.nCachedObjects_,
                  i = this._indicesByUUID,
                  n = this._bindings,
                  r = n.length,
                  a = 0,
                  o = arguments.length;
                a !== o;
                ++a
              ) {
                var s = arguments[a],
                  c = s.uuid,
                  h = i[c];
                if (void 0 !== h && h >= e) {
                  var l = e++,
                    u = t[l];
                  (i[u.uuid] = h), (t[h] = u), (i[c] = l), (t[l] = s);
                  for (var p = 0, d = r; p !== d; ++p) {
                    var f = n[p],
                      m = f[l],
                      v = f[h];
                    (f[h] = m), (f[l] = v);
                  }
                }
              }
              this.nCachedObjects_ = e;
            },
            uncache: function () {
              for (
                var t = this._objects,
                  e = t.length,
                  i = this.nCachedObjects_,
                  n = this._indicesByUUID,
                  r = this._bindings,
                  a = r.length,
                  o = 0,
                  s = arguments.length;
                o !== s;
                ++o
              ) {
                var c = arguments[o],
                  h = c.uuid,
                  l = n[h];
                if (void 0 !== l)
                  if ((delete n[h], l < i)) {
                    var u = --i,
                      p = t[u],
                      d = t[(y = --e)];
                    (n[p.uuid] = l),
                      (t[l] = p),
                      (n[d.uuid] = u),
                      (t[u] = d),
                      t.pop();
                    for (var f = 0, m = a; f !== m; ++f) {
                      var v = (x = r[f])[u],
                        g = x[y];
                      (x[l] = v), (x[u] = g), x.pop();
                    }
                  } else {
                    var y;
                    (n[(d = t[(y = --e)]).uuid] = l), (t[l] = d), t.pop();
                    for (f = 0, m = a; f !== m; ++f) {
                      var x;
                      ((x = r[f])[l] = x[y]), x.pop();
                    }
                  }
              }
              this.nCachedObjects_ = i;
            },
            subscribe_: function (t, e) {
              var i = this._bindingsIndicesByPath,
                n = i[t],
                r = this._bindings;
              if (void 0 !== n) return r[n];
              var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = s.length,
                h = this.nCachedObjects_,
                l = new Array(c);
              (n = r.length), (i[t] = n), a.push(t), o.push(e), r.push(l);
              for (var u = h, p = s.length; u !== p; ++u) {
                var d = s[u];
                l[u] = new Sc(d, t, e);
              }
              return l;
            },
            unsubscribe_: function (t) {
              var e = this._bindingsIndicesByPath,
                i = e[t];
              if (void 0 !== i) {
                var n = this._paths,
                  r = this._parsedPaths,
                  a = this._bindings,
                  o = a.length - 1,
                  s = a[o];
                (e[t[o]] = i),
                  (a[i] = s),
                  a.pop(),
                  (r[i] = r[o]),
                  r.pop(),
                  (n[i] = n[o]),
                  n.pop();
              }
            },
          }
        ),
        Object.assign(Ac.prototype, {
          play: function () {
            return this._mixer._activateAction(this), this;
          },
          stop: function () {
            return this._mixer._deactivateAction(this), this.reset();
          },
          reset: function () {
            return (
              (this.paused = !1),
              (this.enabled = !0),
              (this.time = 0),
              (this._loopCount = -1),
              (this._startTime = null),
              this.stopFading().stopWarping()
            );
          },
          isRunning: function () {
            return (
              this.enabled &&
              !this.paused &&
              0 !== this.timeScale &&
              null === this._startTime &&
              this._mixer._isActiveAction(this)
            );
          },
          isScheduled: function () {
            return this._mixer._isActiveAction(this);
          },
          startAt: function (t) {
            return (this._startTime = t), this;
          },
          setLoop: function (t, e) {
            return (this.loop = t), (this.repetitions = e), this;
          },
          setEffectiveWeight: function (t) {
            return (
              (this.weight = t),
              (this._effectiveWeight = this.enabled ? t : 0),
              this.stopFading()
            );
          },
          getEffectiveWeight: function () {
            return this._effectiveWeight;
          },
          fadeIn: function (t) {
            return this._scheduleFading(t, 0, 1);
          },
          fadeOut: function (t) {
            return this._scheduleFading(t, 1, 0);
          },
          crossFadeFrom: function (t, e, i) {
            if ((t.fadeOut(e), this.fadeIn(e), i)) {
              var n = this._clip.duration,
                r = t._clip.duration,
                a = r / n,
                o = n / r;
              t.warp(1, a, e), this.warp(o, 1, e);
            }
            return this;
          },
          crossFadeTo: function (t, e, i) {
            return t.crossFadeFrom(this, e, i);
          },
          stopFading: function () {
            var t = this._weightInterpolant;
            return (
              null !== t &&
                ((this._weightInterpolant = null),
                this._mixer._takeBackControlInterpolant(t)),
              this
            );
          },
          setEffectiveTimeScale: function (t) {
            return (
              (this.timeScale = t),
              (this._effectiveTimeScale = this.paused ? 0 : t),
              this.stopWarping()
            );
          },
          getEffectiveTimeScale: function () {
            return this._effectiveTimeScale;
          },
          setDuration: function (t) {
            return (
              (this.timeScale = this._clip.duration / t), this.stopWarping()
            );
          },
          syncWith: function (t) {
            return (
              (this.time = t.time),
              (this.timeScale = t.timeScale),
              this.stopWarping()
            );
          },
          halt: function (t) {
            return this.warp(this._effectiveTimeScale, 0, t);
          },
          warp: function (t, e, i) {
            var n = this._mixer,
              r = n.time,
              a = this._timeScaleInterpolant,
              o = this.timeScale;
            null === a &&
              ((a = n._lendControlInterpolant()),
              (this._timeScaleInterpolant = a));
            var s = a.parameterPositions,
              c = a.sampleValues;
            return (
              (s[0] = r), (s[1] = r + i), (c[0] = t / o), (c[1] = e / o), this
            );
          },
          stopWarping: function () {
            var t = this._timeScaleInterpolant;
            return (
              null !== t &&
                ((this._timeScaleInterpolant = null),
                this._mixer._takeBackControlInterpolant(t)),
              this
            );
          },
          getMixer: function () {
            return this._mixer;
          },
          getClip: function () {
            return this._clip;
          },
          getRoot: function () {
            return this._localRoot || this._mixer._root;
          },
          _update: function (t, e, i, n) {
            if (this.enabled) {
              var r = this._startTime;
              if (null !== r) {
                var a = (t - r) * i;
                if (a < 0 || 0 === i) return;
                (this._startTime = null), (e = i * a);
              }
              e *= this._updateTimeScale(t);
              var o = this._updateTime(e),
                s = this._updateWeight(t);
              if (s > 0)
                for (
                  var c = this._interpolants,
                    h = this._propertyBindings,
                    l = 0,
                    u = c.length;
                  l !== u;
                  ++l
                )
                  c[l].evaluate(o), h[l].accumulate(n, s);
            } else this._updateWeight(t);
          },
          _updateWeight: function (t) {
            var e = 0;
            if (this.enabled) {
              e = this.weight;
              var i = this._weightInterpolant;
              if (null !== i) {
                var n = i.evaluate(t)[0];
                (e *= n),
                  t > i.parameterPositions[1] &&
                    (this.stopFading(), 0 === n && (this.enabled = !1));
              }
            }
            return (this._effectiveWeight = e), e;
          },
          _updateTimeScale: function (t) {
            var e = 0;
            if (!this.paused) {
              e = this.timeScale;
              var i = this._timeScaleInterpolant;
              if (null !== i)
                (e *= i.evaluate(t)[0]),
                  t > i.parameterPositions[1] &&
                    (this.stopWarping(),
                    0 === e ? (this.paused = !0) : (this.timeScale = e));
            }
            return (this._effectiveTimeScale = e), e;
          },
          _updateTime: function (t) {
            var e = this.time + t,
              i = this._clip.duration,
              n = this.loop,
              r = this._loopCount,
              a = 2202 === n;
            if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? i - e : e;
            if (2200 === n) {
              -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
              t: {
                if (e >= i) e = i;
                else {
                  if (!(e < 0)) {
                    this.time = e;
                    break t;
                  }
                  e = 0;
                }
                this.clampWhenFinished
                  ? (this.paused = !0)
                  : (this.enabled = !1),
                  (this.time = e),
                  this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: t < 0 ? -1 : 1,
                  });
              }
            } else {
              if (
                (-1 === r &&
                  (t >= 0
                    ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, a))
                    : this._setEndings(0 === this.repetitions, !0, a)),
                e >= i || e < 0)
              ) {
                var o = Math.floor(e / i);
                (e -= i * o), (r += Math.abs(o));
                var s = this.repetitions - r;
                if (s <= 0)
                  this.clampWhenFinished
                    ? (this.paused = !0)
                    : (this.enabled = !1),
                    (e = t > 0 ? i : 0),
                    (this.time = e),
                    this._mixer.dispatchEvent({
                      type: "finished",
                      action: this,
                      direction: t > 0 ? 1 : -1,
                    });
                else {
                  if (1 === s) {
                    var c = t < 0;
                    this._setEndings(c, !c, a);
                  } else this._setEndings(!1, !1, a);
                  (this._loopCount = r),
                    (this.time = e),
                    this._mixer.dispatchEvent({
                      type: "loop",
                      action: this,
                      loopDelta: o,
                    });
                }
              } else this.time = e;
              if (a && 1 == (1 & r)) return i - e;
            }
            return e;
          },
          _setEndings: function (t, e, i) {
            var n = this._interpolantSettings;
            i
              ? ((n.endingStart = 2401), (n.endingEnd = 2401))
              : ((n.endingStart = t
                  ? this.zeroSlopeAtStart
                    ? 2401
                    : 2400
                  : 2402),
                (n.endingEnd = e ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
          },
          _scheduleFading: function (t, e, i) {
            var n = this._mixer,
              r = n.time,
              a = this._weightInterpolant;
            null === a &&
              ((a = n._lendControlInterpolant()),
              (this._weightInterpolant = a));
            var o = a.parameterPositions,
              s = a.sampleValues;
            return (o[0] = r), (s[0] = e), (o[1] = r + t), (s[1] = i), this;
          },
        }),
        (Tc.prototype = Object.assign(Object.create(r.prototype), {
          constructor: Tc,
          _bindAction: function (t, e) {
            var i = t._localRoot || this._root,
              n = t._clip.tracks,
              r = n.length,
              a = t._propertyBindings,
              o = t._interpolants,
              s = i.uuid,
              c = this._bindingsByRootAndName,
              h = c[s];
            void 0 === h && ((h = {}), (c[s] = h));
            for (var l = 0; l !== r; ++l) {
              var u = n[l],
                p = u.name,
                d = h[p];
              if (void 0 !== d) a[l] = d;
              else {
                if (void 0 !== (d = a[l])) {
                  null === d._cacheIndex &&
                    (++d.referenceCount, this._addInactiveBinding(d, s, p));
                  continue;
                }
                var f = e && e._propertyBindings[l].binding.parsedPath;
                ++(d = new fc(
                  Sc.create(i, p, f),
                  u.ValueTypeName,
                  u.getValueSize()
                )).referenceCount,
                  this._addInactiveBinding(d, s, p),
                  (a[l] = d);
              }
              o[l].resultBuffer = d.buffer;
            }
          },
          _activateAction: function (t) {
            if (!this._isActiveAction(t)) {
              if (null === t._cacheIndex) {
                var e = (t._localRoot || this._root).uuid,
                  i = t._clip.uuid,
                  n = this._actionsByClip[i];
                this._bindAction(t, n && n.knownActions[0]),
                  this._addInactiveAction(t, i, e);
              }
              for (
                var r = t._propertyBindings, a = 0, o = r.length;
                a !== o;
                ++a
              ) {
                var s = r[a];
                0 == s.useCount++ &&
                  (this._lendBinding(s), s.saveOriginalState());
              }
              this._lendAction(t);
            }
          },
          _deactivateAction: function (t) {
            if (this._isActiveAction(t)) {
              for (
                var e = t._propertyBindings, i = 0, n = e.length;
                i !== n;
                ++i
              ) {
                var r = e[i];
                0 == --r.useCount &&
                  (r.restoreOriginalState(), this._takeBackBinding(r));
              }
              this._takeBackAction(t);
            }
          },
          _initMemoryManager: function () {
            (this._actions = []),
              (this._nActiveActions = 0),
              (this._actionsByClip = {}),
              (this._bindings = []),
              (this._nActiveBindings = 0),
              (this._bindingsByRootAndName = {}),
              (this._controlInterpolants = []),
              (this._nActiveControlInterpolants = 0);
            var t = this;
            this.stats = {
              actions: {
                get total() {
                  return t._actions.length;
                },
                get inUse() {
                  return t._nActiveActions;
                },
              },
              bindings: {
                get total() {
                  return t._bindings.length;
                },
                get inUse() {
                  return t._nActiveBindings;
                },
              },
              controlInterpolants: {
                get total() {
                  return t._controlInterpolants.length;
                },
                get inUse() {
                  return t._nActiveControlInterpolants;
                },
              },
            };
          },
          _isActiveAction: function (t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions;
          },
          _addInactiveAction: function (t, e, i) {
            var n = this._actions,
              r = this._actionsByClip,
              a = r[e];
            if (void 0 === a)
              (a = { knownActions: [t], actionByRoot: {} }),
                (t._byClipCacheIndex = 0),
                (r[e] = a);
            else {
              var o = a.knownActions;
              (t._byClipCacheIndex = o.length), o.push(t);
            }
            (t._cacheIndex = n.length), n.push(t), (a.actionByRoot[i] = t);
          },
          _removeInactiveAction: function (t) {
            var e = this._actions,
              i = e[e.length - 1],
              n = t._cacheIndex;
            (i._cacheIndex = n), (e[n] = i), e.pop(), (t._cacheIndex = null);
            var r = t._clip.uuid,
              a = this._actionsByClip,
              o = a[r],
              s = o.knownActions,
              c = s[s.length - 1],
              h = t._byClipCacheIndex;
            (c._byClipCacheIndex = h),
              (s[h] = c),
              s.pop(),
              (t._byClipCacheIndex = null),
              delete o.actionByRoot[(t._localRoot || this._root).uuid],
              0 === s.length && delete a[r],
              this._removeInactiveBindingsForAction(t);
          },
          _removeInactiveBindingsForAction: function (t) {
            for (
              var e = t._propertyBindings, i = 0, n = e.length;
              i !== n;
              ++i
            ) {
              var r = e[i];
              0 == --r.referenceCount && this._removeInactiveBinding(r);
            }
          },
          _lendAction: function (t) {
            var e = this._actions,
              i = t._cacheIndex,
              n = this._nActiveActions++,
              r = e[n];
            (t._cacheIndex = n), (e[n] = t), (r._cacheIndex = i), (e[i] = r);
          },
          _takeBackAction: function (t) {
            var e = this._actions,
              i = t._cacheIndex,
              n = --this._nActiveActions,
              r = e[n];
            (t._cacheIndex = n), (e[n] = t), (r._cacheIndex = i), (e[i] = r);
          },
          _addInactiveBinding: function (t, e, i) {
            var n = this._bindingsByRootAndName,
              r = n[e],
              a = this._bindings;
            void 0 === r && ((r = {}), (n[e] = r)),
              (r[i] = t),
              (t._cacheIndex = a.length),
              a.push(t);
          },
          _removeInactiveBinding: function (t) {
            var e = this._bindings,
              i = t.binding,
              n = i.rootNode.uuid,
              r = i.path,
              a = this._bindingsByRootAndName,
              o = a[n],
              s = e[e.length - 1],
              c = t._cacheIndex;
            (s._cacheIndex = c),
              (e[c] = s),
              e.pop(),
              delete o[r],
              0 === Object.keys(o).length && delete a[n];
          },
          _lendBinding: function (t) {
            var e = this._bindings,
              i = t._cacheIndex,
              n = this._nActiveBindings++,
              r = e[n];
            (t._cacheIndex = n), (e[n] = t), (r._cacheIndex = i), (e[i] = r);
          },
          _takeBackBinding: function (t) {
            var e = this._bindings,
              i = t._cacheIndex,
              n = --this._nActiveBindings,
              r = e[n];
            (t._cacheIndex = n), (e[n] = t), (r._cacheIndex = i), (e[i] = r);
          },
          _lendControlInterpolant: function () {
            var t = this._controlInterpolants,
              e = this._nActiveControlInterpolants++,
              i = t[e];
            return (
              void 0 === i &&
                (((i = new To(
                  new Float32Array(2),
                  new Float32Array(2),
                  1,
                  this._controlInterpolantsResultBuffer
                )).__cacheIndex = e),
                (t[e] = i)),
              i
            );
          },
          _takeBackControlInterpolant: function (t) {
            var e = this._controlInterpolants,
              i = t.__cacheIndex,
              n = --this._nActiveControlInterpolants,
              r = e[n];
            (t.__cacheIndex = n), (e[n] = t), (r.__cacheIndex = i), (e[i] = r);
          },
          _controlInterpolantsResultBuffer: new Float32Array(1),
          clipAction: function (t, e) {
            var i = e || this._root,
              n = i.uuid,
              r = "string" == typeof t ? Ro.findByName(i, t) : t,
              a = null !== r ? r.uuid : t,
              o = this._actionsByClip[a],
              s = null;
            if (void 0 !== o) {
              var c = o.actionByRoot[n];
              if (void 0 !== c) return c;
              (s = o.knownActions[0]), null === r && (r = s._clip);
            }
            if (null === r) return null;
            var h = new Ac(this, r, e);
            return this._bindAction(h, s), this._addInactiveAction(h, a, n), h;
          },
          existingAction: function (t, e) {
            var i = e || this._root,
              n = i.uuid,
              r = "string" == typeof t ? Ro.findByName(i, t) : t,
              a = r ? r.uuid : t,
              o = this._actionsByClip[a];
            return (void 0 !== o && o.actionByRoot[n]) || null;
          },
          stopAllAction: function () {
            var t = this._actions,
              e = this._nActiveActions,
              i = this._bindings,
              n = this._nActiveBindings;
            (this._nActiveActions = 0), (this._nActiveBindings = 0);
            for (var r = 0; r !== e; ++r) t[r].reset();
            for (r = 0; r !== n; ++r) i[r].useCount = 0;
            return this;
          },
          update: function (t) {
            t *= this.timeScale;
            for (
              var e = this._actions,
                i = this._nActiveActions,
                n = (this.time += t),
                r = Math.sign(t),
                a = (this._accuIndex ^= 1),
                o = 0;
              o !== i;
              ++o
            ) {
              e[o]._update(n, t, r, a);
            }
            var s = this._bindings,
              c = this._nActiveBindings;
            for (o = 0; o !== c; ++o) s[o].apply(a);
            return this;
          },
          setTime: function (t) {
            this.time = 0;
            for (var e = 0; e < this._actions.length; e++)
              this._actions[e].time = 0;
            return this.update(t);
          },
          getRoot: function () {
            return this._root;
          },
          uncacheClip: function (t) {
            var e = this._actions,
              i = t.uuid,
              n = this._actionsByClip,
              r = n[i];
            if (void 0 !== r) {
              for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                var c = a[o];
                this._deactivateAction(c);
                var h = c._cacheIndex,
                  l = e[e.length - 1];
                (c._cacheIndex = null),
                  (c._byClipCacheIndex = null),
                  (l._cacheIndex = h),
                  (e[h] = l),
                  e.pop(),
                  this._removeInactiveBindingsForAction(c);
              }
              delete n[i];
            }
          },
          uncacheRoot: function (t) {
            var e = t.uuid,
              i = this._actionsByClip;
            for (var n in i) {
              var r = i[n].actionByRoot[e];
              void 0 !== r &&
                (this._deactivateAction(r), this._removeInactiveAction(r));
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a)
              for (var o in a) {
                var s = a[o];
                s.restoreOriginalState(), this._removeInactiveBinding(s);
              }
          },
          uncacheAction: function (t, e) {
            var i = this.existingAction(t, e);
            null !== i &&
              (this._deactivateAction(i), this._removeInactiveAction(i));
          },
        })),
        (Lc.prototype.clone = function () {
          return new Lc(
            void 0 === this.value.clone ? this.value : this.value.clone()
          );
        }),
        (Pc.prototype = Object.assign(Object.create(rr.prototype), {
          constructor: Pc,
          isInstancedInterleavedBuffer: !0,
          copy: function (t) {
            return (
              rr.prototype.copy.call(this, t),
              (this.meshPerAttribute = t.meshPerAttribute),
              this
            );
          },
        })),
        Object.assign(
          function (t, e, i, n) {
            (this.ray = new yt(t, e)),
              (this.near = i || 0),
              (this.far = n || 1 / 0),
              (this.camera = null),
              (this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: { threshold: 1 },
                Sprite: {},
              }),
              Object.defineProperties(this.params, {
                PointCloud: {
                  get: function () {
                    return this.Points;
                  },
                },
              });
          }.prototype,
          {
            linePrecision: 1,
            set: function (t, e) {
              this.ray.set(t, e);
            },
            setFromCamera: function (t, e) {
              e && e.isPerspectiveCamera
                ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
                  this.ray.direction
                    .set(t.x, t.y, 0.5)
                    .unproject(e)
                    .sub(this.ray.origin)
                    .normalize(),
                  (this.camera = e))
                : e &&
                  e.isOrthographicCamera &&
                  (this.ray.origin
                    .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
                    .unproject(e),
                  this.ray.direction
                    .set(0, 0, -1)
                    .transformDirection(e.matrixWorld),
                  (this.camera = e));
            },
            intersectObject: function (t, e, i) {
              var n = i || [];
              return Ec(t, this, n, e), n.sort(Cc), n;
            },
            intersectObjects: function (t, e, i) {
              var n = i || [];
              if (!1 === Array.isArray(t)) return n;
              for (var r = 0, a = t.length; r < a; r++) Ec(t[r], this, n, e);
              return n.sort(Cc), n;
            },
          }
        ),
        Object.assign(
          function (t, e, i) {
            return (
              (this.radius = void 0 !== t ? t : 1),
              (this.phi = void 0 !== e ? e : 0),
              (this.theta = void 0 !== i ? i : 0),
              this
            );
          }.prototype,
          {
            set: function (t, e, i) {
              return (this.radius = t), (this.phi = e), (this.theta = i), this;
            },
            clone: function () {
              return new this.constructor().copy(this);
            },
            copy: function (t) {
              return (
                (this.radius = t.radius),
                (this.phi = t.phi),
                (this.theta = t.theta),
                this
              );
            },
            makeSafe: function () {
              return (
                (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))),
                this
              );
            },
            setFromVector3: function (t) {
              return this.setFromCartesianCoords(t.x, t.y, t.z);
            },
            setFromCartesianCoords: function (t, e, i) {
              return (
                (this.radius = Math.sqrt(t * t + e * e + i * i)),
                0 === this.radius
                  ? ((this.theta = 0), (this.phi = 0))
                  : ((this.theta = Math.atan2(t, i)),
                    (this.phi = Math.acos(s.clamp(e / this.radius, -1, 1)))),
                this
              );
            },
          }
        ),
        Object.assign(
          function (t, e, i) {
            return (
              (this.radius = void 0 !== t ? t : 1),
              (this.theta = void 0 !== e ? e : 0),
              (this.y = void 0 !== i ? i : 0),
              this
            );
          }.prototype,
          {
            set: function (t, e, i) {
              return (this.radius = t), (this.theta = e), (this.y = i), this;
            },
            clone: function () {
              return new this.constructor().copy(this);
            },
            copy: function (t) {
              return (
                (this.radius = t.radius),
                (this.theta = t.theta),
                (this.y = t.y),
                this
              );
            },
            setFromVector3: function (t) {
              return this.setFromCartesianCoords(t.x, t.y, t.z);
            },
            setFromCartesianCoords: function (t, e, i) {
              return (
                (this.radius = Math.sqrt(t * t + i * i)),
                (this.theta = Math.atan2(t, i)),
                (this.y = e),
                this
              );
            },
          }
        );
      var Oc = new c();
      function Nc(t, e) {
        (this.min = void 0 !== t ? t : new c(1 / 0, 1 / 0)),
          (this.max = void 0 !== e ? e : new c(-1 / 0, -1 / 0));
      }
      Object.assign(Nc.prototype, {
        set: function (t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        },
        setFromPoints: function (t) {
          this.makeEmpty();
          for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
          return this;
        },
        setFromCenterAndSize: function (t, e) {
          var i = Oc.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        },
        makeEmpty: function () {
          return (
            (this.min.x = this.min.y = 1 / 0),
            (this.max.x = this.max.y = -1 / 0),
            this
          );
        },
        isEmpty: function () {
          return this.max.x < this.min.x || this.max.y < this.min.y;
        },
        getCenter: function (t) {
          return (
            void 0 === t && (t = new c()),
            this.isEmpty()
              ? t.set(0, 0)
              : t.addVectors(this.min, this.max).multiplyScalar(0.5)
          );
        },
        getSize: function (t) {
          return (
            void 0 === t && (t = new c()),
            this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
          );
        },
        expandByPoint: function (t) {
          return this.min.min(t), this.max.max(t), this;
        },
        expandByVector: function (t) {
          return this.min.sub(t), this.max.add(t), this;
        },
        expandByScalar: function (t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        },
        containsPoint: function (t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y
          );
        },
        containsBox: function (t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y
          );
        },
        getParameter: function (t, e) {
          return (
            void 0 === e && (e = new c()),
            e.set(
              (t.x - this.min.x) / (this.max.x - this.min.x),
              (t.y - this.min.y) / (this.max.y - this.min.y)
            )
          );
        },
        intersectsBox: function (t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y
          );
        },
        clampPoint: function (t, e) {
          return (
            void 0 === e && (e = new c()), e.copy(t).clamp(this.min, this.max)
          );
        },
        distanceToPoint: function (t) {
          return Oc.copy(t).clamp(this.min, this.max).sub(t).length();
        },
        intersect: function (t) {
          return this.min.max(t.min), this.max.min(t.max), this;
        },
        union: function (t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        },
        translate: function (t) {
          return this.min.add(t), this.max.add(t), this;
        },
        equals: function (t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        },
      });
      var Ic = new p(),
        Dc = new p();
      function zc(t, e) {
        (this.start = void 0 !== t ? t : new p()),
          (this.end = void 0 !== e ? e : new p());
      }
      function Rc(t) {
        X.call(this), (this.material = t), (this.render = function () {});
      }
      Object.assign(zc.prototype, {
        set: function (t, e) {
          return this.start.copy(t), this.end.copy(e), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (t) {
          return this.start.copy(t.start), this.end.copy(t.end), this;
        },
        getCenter: function (t) {
          return (
            void 0 === t && (t = new p()),
            t.addVectors(this.start, this.end).multiplyScalar(0.5)
          );
        },
        delta: function (t) {
          return (
            void 0 === t && (t = new p()), t.subVectors(this.end, this.start)
          );
        },
        distanceSq: function () {
          return this.start.distanceToSquared(this.end);
        },
        distance: function () {
          return this.start.distanceTo(this.end);
        },
        at: function (t, e) {
          return (
            void 0 === e && (e = new p()),
            this.delta(e).multiplyScalar(t).add(this.start)
          );
        },
        closestPointToPointParameter: function (t, e) {
          Ic.subVectors(t, this.start), Dc.subVectors(this.end, this.start);
          var i = Dc.dot(Dc),
            n = Dc.dot(Ic) / i;
          return e && (n = s.clamp(n, 0, 1)), n;
        },
        closestPointToPoint: function (t, e, i) {
          var n = this.closestPointToPointParameter(t, e);
          return (
            void 0 === i && (i = new p()),
            this.delta(i).multiplyScalar(n).add(this.start)
          );
        },
        applyMatrix4: function (t) {
          return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        },
        equals: function (t) {
          return t.start.equals(this.start) && t.end.equals(this.end);
        },
      }),
        (Rc.prototype = Object.create(X.prototype)),
        (Rc.prototype.constructor = Rc),
        (Rc.prototype.isImmediateRenderObject = !0);
      var Fc = new p(),
        Uc = new p(),
        Bc = new m(),
        Vc = ["a", "b", "c"];
      function Gc(t, e, i, n) {
        (this.object = t), (this.size = void 0 !== e ? e : 1);
        var r = void 0 !== i ? i : 16711680,
          a = void 0 !== n ? n : 1,
          o = 0,
          s = this.object.geometry;
        s && s.isGeometry
          ? (o = 3 * s.faces.length)
          : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new le(),
          h = new $t(2 * o * 3, 3);
        c.setAttribute("position", h),
          Br.call(this, c, new Er({ color: r, linewidth: a })),
          (this.matrixAutoUpdate = !1),
          this.update();
      }
      (Gc.prototype = Object.create(Br.prototype)),
        (Gc.prototype.constructor = Gc),
        (Gc.prototype.update = function () {
          this.object.updateMatrixWorld(!0),
            Bc.getNormalMatrix(this.object.matrixWorld);
          var t = this.object.matrixWorld,
            e = this.geometry.attributes.position,
            i = this.object.geometry;
          if (i && i.isGeometry)
            for (
              var n = i.vertices, r = i.faces, a = 0, o = 0, s = r.length;
              o < s;
              o++
            )
              for (
                var c = r[o], h = 0, l = c.vertexNormals.length;
                h < l;
                h++
              ) {
                var u = n[c[Vc[h]]],
                  p = c.vertexNormals[h];
                Fc.copy(u).applyMatrix4(t),
                  Uc.copy(p)
                    .applyMatrix3(Bc)
                    .normalize()
                    .multiplyScalar(this.size)
                    .add(Fc),
                  e.setXYZ(a, Fc.x, Fc.y, Fc.z),
                  (a += 1),
                  e.setXYZ(a, Uc.x, Uc.y, Uc.z),
                  (a += 1);
              }
          else if (i && i.isBufferGeometry) {
            var d = i.attributes.position,
              f = i.attributes.normal;
            for (a = 0, h = 0, l = d.count; h < l; h++)
              Fc.set(d.getX(h), d.getY(h), d.getZ(h)).applyMatrix4(t),
                Uc.set(f.getX(h), f.getY(h), f.getZ(h)),
                Uc.applyMatrix3(Bc)
                  .normalize()
                  .multiplyScalar(this.size)
                  .add(Fc),
                e.setXYZ(a, Fc.x, Fc.y, Fc.z),
                (a += 1),
                e.setXYZ(a, Uc.x, Uc.y, Uc.z),
                (a += 1);
          }
          e.needsUpdate = !0;
        });
      var jc = new p();
      function kc(t, e) {
        X.call(this),
          (this.light = t),
          this.light.updateMatrixWorld(),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1),
          (this.color = e);
        for (
          var i = new le(),
            n = [
              0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0,
              1, 1, 0, 0, 0, 0, -1, 1,
            ],
            r = 0,
            a = 1;
          r < 32;
          r++, a++
        ) {
          var o = (r / 32) * Math.PI * 2,
            s = (a / 32) * Math.PI * 2;
          n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1);
        }
        i.setAttribute("position", new $t(n, 3));
        var c = new Er({ fog: !1 });
        (this.cone = new Br(i, c)), this.add(this.cone), this.update();
      }
      (kc.prototype = Object.create(X.prototype)),
        (kc.prototype.constructor = kc),
        (kc.prototype.dispose = function () {
          this.cone.geometry.dispose(), this.cone.material.dispose();
        }),
        (kc.prototype.update = function () {
          this.light.updateMatrixWorld();
          var t = this.light.distance ? this.light.distance : 1e3,
            e = t * Math.tan(this.light.angle);
          this.cone.scale.set(e, e, t),
            jc.setFromMatrixPosition(this.light.target.matrixWorld),
            this.cone.lookAt(jc),
            void 0 !== this.color
              ? this.cone.material.color.set(this.color)
              : this.cone.material.color.copy(this.light.color);
        });
      var Wc = new p(),
        Hc = new C(),
        qc = new C();
      function Xc(t) {
        for (
          var e = (function t(e) {
              var i = [];
              e && e.isBone && i.push(e);
              for (var n = 0; n < e.children.length; n++)
                i.push.apply(i, t(e.children[n]));
              return i;
            })(t),
            i = new le(),
            n = [],
            r = [],
            a = new Ft(0, 0, 1),
            o = new Ft(0, 1, 0),
            s = 0;
          s < e.length;
          s++
        ) {
          var c = e[s];
          c.parent &&
            c.parent.isBone &&
            (n.push(0, 0, 0),
            n.push(0, 0, 0),
            r.push(a.r, a.g, a.b),
            r.push(o.r, o.g, o.b));
        }
        i.setAttribute("position", new $t(n, 3)),
          i.setAttribute("color", new $t(r, 3));
        var h = new Er({
          vertexColors: 2,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
        });
        Br.call(this, i, h),
          (this.root = t),
          (this.bones = e),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1);
      }
      function Yc(t, e, i) {
        (this.light = t), this.light.updateMatrixWorld(), (this.color = i);
        var n = new Ja(e, 4, 2),
          r = new Wt({ wireframe: !0, fog: !1 });
        Pe.call(this, n, r),
          (this.matrix = this.light.matrixWorld),
          (this.matrixAutoUpdate = !1),
          this.update();
      }
      function Jc(t, e) {
        (this.type = "RectAreaLightHelper"), (this.light = t), (this.color = e);
        var i = new le();
        i.setAttribute(
          "position",
          new $t([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)
        ),
          i.computeBoundingSphere();
        var n = new Er({ fog: !1 });
        Rr.call(this, i, n);
        var r = new le();
        r.setAttribute(
          "position",
          new $t(
            [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0],
            3
          )
        ),
          r.computeBoundingSphere(),
          this.add(new Pe(r, new Wt({ side: 1, fog: !1 }))),
          this.update();
      }
      (Xc.prototype = Object.create(Br.prototype)),
        (Xc.prototype.constructor = Xc),
        (Xc.prototype.updateMatrixWorld = function (t) {
          var e = this.bones,
            i = this.geometry,
            n = i.getAttribute("position");
          qc.getInverse(this.root.matrixWorld);
          for (var r = 0, a = 0; r < e.length; r++) {
            var o = e[r];
            o.parent &&
              o.parent.isBone &&
              (Hc.multiplyMatrices(qc, o.matrixWorld),
              Wc.setFromMatrixPosition(Hc),
              n.setXYZ(a, Wc.x, Wc.y, Wc.z),
              Hc.multiplyMatrices(qc, o.parent.matrixWorld),
              Wc.setFromMatrixPosition(Hc),
              n.setXYZ(a + 1, Wc.x, Wc.y, Wc.z),
              (a += 2));
          }
          (i.getAttribute("position").needsUpdate = !0),
            X.prototype.updateMatrixWorld.call(this, t);
        }),
        (Yc.prototype = Object.create(Pe.prototype)),
        (Yc.prototype.constructor = Yc),
        (Yc.prototype.dispose = function () {
          this.geometry.dispose(), this.material.dispose();
        }),
        (Yc.prototype.update = function () {
          void 0 !== this.color
            ? this.material.color.set(this.color)
            : this.material.color.copy(this.light.color);
        }),
        (Jc.prototype = Object.create(Rr.prototype)),
        (Jc.prototype.constructor = Jc),
        (Jc.prototype.update = function () {
          if (
            (this.scale.set(0.5 * this.light.width, 0.5 * this.light.height, 1),
            void 0 !== this.color)
          )
            this.material.color.set(this.color),
              this.children[0].material.color.set(this.color);
          else {
            this.material.color
              .copy(this.light.color)
              .multiplyScalar(this.light.intensity);
            var t = this.material.color,
              e = Math.max(t.r, t.g, t.b);
            e > 1 && t.multiplyScalar(1 / e),
              this.children[0].material.color.copy(this.material.color);
          }
        }),
        (Jc.prototype.dispose = function () {
          this.geometry.dispose(),
            this.material.dispose(),
            this.children[0].geometry.dispose(),
            this.children[0].material.dispose();
        });
      var Zc = new p(),
        Qc = new Ft(),
        Kc = new Ft();
      function $c(t, e, i) {
        X.call(this),
          (this.light = t),
          this.light.updateMatrixWorld(),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1),
          (this.color = i);
        var n = new oa(e);
        n.rotateY(0.5 * Math.PI),
          (this.material = new Wt({ wireframe: !0, fog: !1 })),
          void 0 === this.color && (this.material.vertexColors = 2);
        var r = n.getAttribute("position"),
          a = new Float32Array(3 * r.count);
        n.setAttribute("color", new Ht(a, 3)),
          this.add(new Pe(n, this.material)),
          this.update();
      }
      function th(t, e) {
        (this.lightProbe = t), (this.size = e);
        var i = { GAMMA_OUTPUT: "" },
          n = new Be({
            defines: i,
            uniforms: {
              sh: { value: this.lightProbe.sh.coefficients },
              intensity: { value: this.lightProbe.intensity },
            },
            vertexShader: [
              "varying vec3 vNormal;",
              "void main() {",
              "\tvNormal = normalize( normalMatrix * normal );",
              "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
              "}",
            ].join("\n"),
            fragmentShader: [
              "#define RECIPROCAL_PI 0.318309886",
              "vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {",
              "\t// matrix is assumed to be orthogonal",
              "\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );",
              "}",
              "vec3 linearToOutput( in vec3 a ) {",
              "\t#ifdef GAMMA_OUTPUT",
              "\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );",
              "\t#else",
              "\t\treturn a;",
              "\t#endif",
              "}",
              "// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf",
              "vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {",
              "\t// normal is assumed to have unit length",
              "\tfloat x = normal.x, y = normal.y, z = normal.z;",
              "\t// band 0",
              "\tvec3 result = shCoefficients[ 0 ] * 0.886227;",
              "\t// band 1",
              "\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;",
              "\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;",
              "\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;",
              "\t// band 2",
              "\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;",
              "\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;",
              "\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );",
              "\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;",
              "\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );",
              "\treturn result;",
              "}",
              "uniform vec3 sh[ 9 ]; // sh coefficients",
              "uniform float intensity; // light probe intensity",
              "varying vec3 vNormal;",
              "void main() {",
              "\tvec3 normal = normalize( vNormal );",
              "\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );",
              "\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );",
              "\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;",
              "\toutgoingLight = linearToOutput( outgoingLight );",
              "\tgl_FragColor = vec4( outgoingLight, 1.0 );",
              "}",
            ].join("\n"),
          }),
          r = new Ja(1, 32, 16);
        Pe.call(this, r, n), this.onBeforeRender();
      }
      function eh(t, e, i, n) {
        (t = t || 10),
          (e = e || 10),
          (i = new Ft(void 0 !== i ? i : 4473924)),
          (n = new Ft(void 0 !== n ? n : 8947848));
        for (
          var r = e / 2,
            a = t / e,
            o = t / 2,
            s = [],
            c = [],
            h = 0,
            l = 0,
            u = -o;
          h <= e;
          h++, u += a
        ) {
          s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
          var p = h === r ? i : n;
          p.toArray(c, l),
            (l += 3),
            p.toArray(c, l),
            (l += 3),
            p.toArray(c, l),
            (l += 3),
            p.toArray(c, l),
            (l += 3);
        }
        var d = new le();
        d.setAttribute("position", new $t(s, 3)),
          d.setAttribute("color", new $t(c, 3));
        var f = new Er({ vertexColors: 2 });
        Br.call(this, d, f);
      }
      function ih(t, e, i, n, r, a) {
        (t = t || 10),
          (e = e || 16),
          (i = i || 8),
          (n = n || 64),
          (r = new Ft(void 0 !== r ? r : 4473924)),
          (a = new Ft(void 0 !== a ? a : 8947848));
        var o,
          s,
          c,
          h,
          l,
          u,
          p,
          d = [],
          f = [];
        for (h = 0; h <= e; h++)
          (c = (h / e) * (2 * Math.PI)),
            (o = Math.sin(c) * t),
            (s = Math.cos(c) * t),
            d.push(0, 0, 0),
            d.push(o, 0, s),
            (p = 1 & h ? r : a),
            f.push(p.r, p.g, p.b),
            f.push(p.r, p.g, p.b);
        for (h = 0; h <= i; h++)
          for (p = 1 & h ? r : a, u = t - (t / i) * h, l = 0; l < n; l++)
            (c = (l / n) * (2 * Math.PI)),
              (o = Math.sin(c) * u),
              (s = Math.cos(c) * u),
              d.push(o, 0, s),
              f.push(p.r, p.g, p.b),
              (c = ((l + 1) / n) * (2 * Math.PI)),
              (o = Math.sin(c) * u),
              (s = Math.cos(c) * u),
              d.push(o, 0, s),
              f.push(p.r, p.g, p.b);
        var m = new le();
        m.setAttribute("position", new $t(d, 3)),
          m.setAttribute("color", new $t(f, 3));
        var v = new Er({ vertexColors: 2 });
        Br.call(this, m, v);
      }
      function nh(t, e, i, n) {
        (this.audio = t),
          (this.range = e || 1),
          (this.divisionsInnerAngle = i || 16),
          (this.divisionsOuterAngle = n || 2);
        var r = new le(),
          a = this.divisionsInnerAngle + 2 * this.divisionsOuterAngle,
          o = new Float32Array(3 * (3 * a + 3));
        r.setAttribute("position", new Ht(o, 3));
        var s = new Er({ color: 65280 }),
          c = new Er({ color: 16776960 });
        Rr.call(this, r, [c, s]), this.update();
      }
      ($c.prototype = Object.create(X.prototype)),
        ($c.prototype.constructor = $c),
        ($c.prototype.dispose = function () {
          this.children[0].geometry.dispose(),
            this.children[0].material.dispose();
        }),
        ($c.prototype.update = function () {
          var t = this.children[0];
          if (void 0 !== this.color) this.material.color.set(this.color);
          else {
            var e = t.geometry.getAttribute("color");
            Qc.copy(this.light.color), Kc.copy(this.light.groundColor);
            for (var i = 0, n = e.count; i < n; i++) {
              var r = i < n / 2 ? Qc : Kc;
              e.setXYZ(i, r.r, r.g, r.b);
            }
            e.needsUpdate = !0;
          }
          t.lookAt(Zc.setFromMatrixPosition(this.light.matrixWorld).negate());
        }),
        (th.prototype = Object.create(Pe.prototype)),
        (th.prototype.constructor = th),
        (th.prototype.dispose = function () {
          this.geometry.dispose(), this.material.dispose();
        }),
        (th.prototype.onBeforeRender = function () {
          this.position.copy(this.lightProbe.position),
            this.scale.set(1, 1, 1).multiplyScalar(this.size),
            (this.material.uniforms.intensity.value =
              this.lightProbe.intensity);
        }),
        (eh.prototype = Object.assign(Object.create(Br.prototype), {
          constructor: eh,
          copy: function (t) {
            return (
              Br.prototype.copy.call(this, t),
              this.geometry.copy(t.geometry),
              this.material.copy(t.material),
              this
            );
          },
          clone: function () {
            return new this.constructor().copy(this);
          },
        })),
        (ih.prototype = Object.create(Br.prototype)),
        (ih.prototype.constructor = ih),
        (nh.prototype = Object.create(Rr.prototype)),
        (nh.prototype.constructor = nh),
        (nh.prototype.update = function () {
          var t,
            e,
            i = this.audio,
            n = this.range,
            r = this.divisionsInnerAngle,
            a = this.divisionsOuterAngle,
            o = s.degToRad(i.panner.coneInnerAngle),
            c = s.degToRad(i.panner.coneOuterAngle),
            h = o / 2,
            l = c / 2,
            u = 0,
            p = 0,
            d = this.geometry,
            f = d.attributes.position;
          function m(i, r, a, o) {
            var s = (r - i) / a;
            for (f.setXYZ(u, 0, 0, 0), p++, t = i; t < r; t += s)
              (e = u + p),
                f.setXYZ(e, Math.sin(t) * n, 0, Math.cos(t) * n),
                f.setXYZ(
                  e + 1,
                  Math.sin(Math.min(t + s, r)) * n,
                  0,
                  Math.cos(Math.min(t + s, r)) * n
                ),
                f.setXYZ(e + 2, 0, 0, 0),
                (p += 3);
            d.addGroup(u, p, o), (u += p), (p = 0);
          }
          d.clearGroups(),
            m(-l, -h, a, 0),
            m(-h, h, r, 1),
            m(h, l, a, 0),
            (f.needsUpdate = !0),
            o === c && (this.material[0].visible = !1);
        }),
        (nh.prototype.dispose = function () {
          this.geometry.dispose(),
            this.material[0].dispose(),
            this.material[1].dispose();
        });
      var rh = new p(),
        ah = new p(),
        oh = new m();
      function sh(t, e, i, n) {
        (this.object = t), (this.size = void 0 !== e ? e : 1);
        var r = void 0 !== i ? i : 16776960,
          a = void 0 !== n ? n : 1,
          o = 0,
          s = this.object.geometry;
        s && s.isGeometry && (o = s.faces.length);
        var c = new le(),
          h = new $t(2 * o * 3, 3);
        c.setAttribute("position", h),
          Br.call(this, c, new Er({ color: r, linewidth: a })),
          (this.matrixAutoUpdate = !1),
          this.update();
      }
      (sh.prototype = Object.create(Br.prototype)),
        (sh.prototype.constructor = sh),
        (sh.prototype.update = function () {
          this.object.updateMatrixWorld(!0),
            oh.getNormalMatrix(this.object.matrixWorld);
          for (
            var t = this.object.matrixWorld,
              e = this.geometry.attributes.position,
              i = this.object.geometry,
              n = i.vertices,
              r = i.faces,
              a = 0,
              o = 0,
              s = r.length;
            o < s;
            o++
          ) {
            var c = r[o],
              h = c.normal;
            rh
              .copy(n[c.a])
              .add(n[c.b])
              .add(n[c.c])
              .divideScalar(3)
              .applyMatrix4(t),
              ah
                .copy(h)
                .applyMatrix3(oh)
                .normalize()
                .multiplyScalar(this.size)
                .add(rh),
              e.setXYZ(a, rh.x, rh.y, rh.z),
              (a += 1),
              e.setXYZ(a, ah.x, ah.y, ah.z),
              (a += 1);
          }
          e.needsUpdate = !0;
        });
      var ch = new p(),
        hh = new p(),
        lh = new p();
      function uh(t, e, i) {
        X.call(this),
          (this.light = t),
          this.light.updateMatrixWorld(),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1),
          (this.color = i),
          void 0 === e && (e = 1);
        var n = new le();
        n.setAttribute(
          "position",
          new $t([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)
        );
        var r = new Er({ fog: !1 });
        (this.lightPlane = new Rr(n, r)),
          this.add(this.lightPlane),
          (n = new le()).setAttribute(
            "position",
            new $t([0, 0, 0, 0, 0, 1], 3)
          ),
          (this.targetLine = new Rr(n, r)),
          this.add(this.targetLine),
          this.update();
      }
      (uh.prototype = Object.create(X.prototype)),
        (uh.prototype.constructor = uh),
        (uh.prototype.dispose = function () {
          this.lightPlane.geometry.dispose(),
            this.lightPlane.material.dispose(),
            this.targetLine.geometry.dispose(),
            this.targetLine.material.dispose();
        }),
        (uh.prototype.update = function () {
          ch.setFromMatrixPosition(this.light.matrixWorld),
            hh.setFromMatrixPosition(this.light.target.matrixWorld),
            lh.subVectors(hh, ch),
            this.lightPlane.lookAt(hh),
            void 0 !== this.color
              ? (this.lightPlane.material.color.set(this.color),
                this.targetLine.material.color.set(this.color))
              : (this.lightPlane.material.color.copy(this.light.color),
                this.targetLine.material.color.copy(this.light.color)),
            this.targetLine.lookAt(hh),
            (this.targetLine.scale.z = lh.length());
        });
      var ph = new p(),
        dh = new Ve();
      function fh(t) {
        var e = new le(),
          i = new Er({ color: 16777215, vertexColors: 1 }),
          n = [],
          r = [],
          a = {},
          o = new Ft(16755200),
          s = new Ft(16711680),
          c = new Ft(43775),
          h = new Ft(16777215),
          l = new Ft(3355443);
        function u(t, e, i) {
          p(t, i), p(e, i);
        }
        function p(t, e) {
          n.push(0, 0, 0),
            r.push(e.r, e.g, e.b),
            void 0 === a[t] && (a[t] = []),
            a[t].push(n.length / 3 - 1);
        }
        u("n1", "n2", o),
          u("n2", "n4", o),
          u("n4", "n3", o),
          u("n3", "n1", o),
          u("f1", "f2", o),
          u("f2", "f4", o),
          u("f4", "f3", o),
          u("f3", "f1", o),
          u("n1", "f1", o),
          u("n2", "f2", o),
          u("n3", "f3", o),
          u("n4", "f4", o),
          u("p", "n1", s),
          u("p", "n2", s),
          u("p", "n3", s),
          u("p", "n4", s),
          u("u1", "u2", c),
          u("u2", "u3", c),
          u("u3", "u1", c),
          u("c", "t", h),
          u("p", "c", l),
          u("cn1", "cn2", l),
          u("cn3", "cn4", l),
          u("cf1", "cf2", l),
          u("cf3", "cf4", l),
          e.setAttribute("position", new $t(n, 3)),
          e.setAttribute("color", new $t(r, 3)),
          Br.call(this, e, i),
          (this.camera = t),
          this.camera.updateProjectionMatrix &&
            this.camera.updateProjectionMatrix(),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1),
          (this.pointMap = a),
          this.update();
      }
      function mh(t, e, i, n, r, a, o) {
        ph.set(r, a, o).unproject(n);
        var s = e[t];
        if (void 0 !== s)
          for (
            var c = i.getAttribute("position"), h = 0, l = s.length;
            h < l;
            h++
          )
            c.setXYZ(s[h], ph.x, ph.y, ph.z);
      }
      (fh.prototype = Object.create(Br.prototype)),
        (fh.prototype.constructor = fh),
        (fh.prototype.update = function () {
          var t = this.geometry,
            e = this.pointMap;
          dh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
            mh("c", e, t, dh, 0, 0, -1),
            mh("t", e, t, dh, 0, 0, 1),
            mh("n1", e, t, dh, -1, -1, -1),
            mh("n2", e, t, dh, 1, -1, -1),
            mh("n3", e, t, dh, -1, 1, -1),
            mh("n4", e, t, dh, 1, 1, -1),
            mh("f1", e, t, dh, -1, -1, 1),
            mh("f2", e, t, dh, 1, -1, 1),
            mh("f3", e, t, dh, -1, 1, 1),
            mh("f4", e, t, dh, 1, 1, 1),
            mh("u1", e, t, dh, 0.7, 1.1, -1),
            mh("u2", e, t, dh, -0.7, 1.1, -1),
            mh("u3", e, t, dh, 0, 2, -1),
            mh("cf1", e, t, dh, -1, 0, 1),
            mh("cf2", e, t, dh, 1, 0, 1),
            mh("cf3", e, t, dh, 0, -1, 1),
            mh("cf4", e, t, dh, 0, 1, 1),
            mh("cn1", e, t, dh, -1, 0, -1),
            mh("cn2", e, t, dh, 1, 0, -1),
            mh("cn3", e, t, dh, 0, -1, -1),
            mh("cn4", e, t, dh, 0, 1, -1),
            (t.getAttribute("position").needsUpdate = !0);
        });
      var vh = new st();
      function gh(t, e) {
        (this.object = t), void 0 === e && (e = 16776960);
        var i = new Uint16Array([
            0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
            7,
          ]),
          n = new Float32Array(24),
          r = new le();
        r.setIndex(new Ht(i, 1)),
          r.setAttribute("position", new Ht(n, 3)),
          Br.call(this, r, new Er({ color: e })),
          (this.matrixAutoUpdate = !1),
          this.update();
      }
      function yh(t, e) {
        (this.type = "Box3Helper"), (this.box = t), (e = e || 16776960);
        var i = new Uint16Array([
            0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
            7,
          ]),
          n = new le();
        n.setIndex(new Ht(i, 1)),
          n.setAttribute(
            "position",
            new $t(
              [
                1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1,
                -1, -1, 1, -1, -1,
              ],
              3
            )
          ),
          Br.call(this, n, new Er({ color: e })),
          this.geometry.computeBoundingSphere();
      }
      function xh(t, e, i) {
        (this.type = "PlaneHelper"),
          (this.plane = t),
          (this.size = void 0 === e ? 1 : e);
        var n = void 0 !== i ? i : 16776960,
          r = new le();
        r.setAttribute(
          "position",
          new $t(
            [
              1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1,
              -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
            ],
            3
          )
        ),
          r.computeBoundingSphere(),
          Rr.call(this, r, new Er({ color: n }));
        var a = new le();
        a.setAttribute(
          "position",
          new $t(
            [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
            3
          )
        ),
          a.computeBoundingSphere(),
          this.add(
            new Pe(
              a,
              new Wt({
                color: n,
                opacity: 0.2,
                transparent: !0,
                depthWrite: !1,
              })
            )
          );
      }
      (gh.prototype = Object.create(Br.prototype)),
        (gh.prototype.constructor = gh),
        (gh.prototype.update = function (t) {
          if (
            (void 0 !== this.object && vh.setFromObject(this.object),
            !vh.isEmpty())
          ) {
            var e = vh.min,
              i = vh.max,
              n = this.geometry.attributes.position,
              r = n.array;
            (r[0] = i.x),
              (r[1] = i.y),
              (r[2] = i.z),
              (r[3] = e.x),
              (r[4] = i.y),
              (r[5] = i.z),
              (r[6] = e.x),
              (r[7] = e.y),
              (r[8] = i.z),
              (r[9] = i.x),
              (r[10] = e.y),
              (r[11] = i.z),
              (r[12] = i.x),
              (r[13] = i.y),
              (r[14] = e.z),
              (r[15] = e.x),
              (r[16] = i.y),
              (r[17] = e.z),
              (r[18] = e.x),
              (r[19] = e.y),
              (r[20] = e.z),
              (r[21] = i.x),
              (r[22] = e.y),
              (r[23] = e.z),
              (n.needsUpdate = !0),
              this.geometry.computeBoundingSphere();
          }
        }),
        (gh.prototype.setFromObject = function (t) {
          return (this.object = t), this.update(), this;
        }),
        (gh.prototype.copy = function (t) {
          return (
            Br.prototype.copy.call(this, t), (this.object = t.object), this
          );
        }),
        (gh.prototype.clone = function () {
          return new this.constructor().copy(this);
        }),
        (yh.prototype = Object.create(Br.prototype)),
        (yh.prototype.constructor = yh),
        (yh.prototype.updateMatrixWorld = function (t) {
          var e = this.box;
          e.isEmpty() ||
            (e.getCenter(this.position),
            e.getSize(this.scale),
            this.scale.multiplyScalar(0.5),
            X.prototype.updateMatrixWorld.call(this, t));
        }),
        (xh.prototype = Object.create(Rr.prototype)),
        (xh.prototype.constructor = xh),
        (xh.prototype.updateMatrixWorld = function (t) {
          var e = -this.plane.constant;
          Math.abs(e) < 1e-8 && (e = 1e-8),
            this.scale.set(0.5 * this.size, 0.5 * this.size, e),
            (this.children[0].material.side = e < 0 ? 1 : 0),
            this.lookAt(this.plane.normal),
            X.prototype.updateMatrixWorld.call(this, t);
        });
      var _h,
        bh,
        wh = new p();
      function Mh(t, e, i, n, r, a) {
        X.call(this),
          void 0 === t && (t = new p(0, 0, 1)),
          void 0 === e && (e = new p(0, 0, 0)),
          void 0 === i && (i = 1),
          void 0 === n && (n = 16776960),
          void 0 === r && (r = 0.2 * i),
          void 0 === a && (a = 0.2 * r),
          void 0 === _h &&
            ((_h = new le()).setAttribute(
              "position",
              new $t([0, 0, 0, 0, 1, 0], 3)
            ),
            (bh = new ao(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0)),
          this.position.copy(e),
          (this.line = new Rr(_h, new Er({ color: n }))),
          (this.line.matrixAutoUpdate = !1),
          this.add(this.line),
          (this.cone = new Pe(bh, new Wt({ color: n }))),
          (this.cone.matrixAutoUpdate = !1),
          this.add(this.cone),
          this.setDirection(t),
          this.setLength(i, r, a);
      }
      function Sh(t) {
        var e = [
            0,
            0,
            0,
            (t = t || 1),
            0,
            0,
            0,
            0,
            0,
            0,
            t,
            0,
            0,
            0,
            0,
            0,
            0,
            t,
          ],
          i = new le();
        i.setAttribute("position", new $t(e, 3)),
          i.setAttribute(
            "color",
            new $t(
              [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
              3
            )
          );
        var n = new Er({ vertexColors: 2 });
        Br.call(this, i, n);
      }
      (Mh.prototype = Object.create(X.prototype)),
        (Mh.prototype.constructor = Mh),
        (Mh.prototype.setDirection = function (t) {
          if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
          else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
          else {
            wh.set(t.z, 0, -t.x).normalize();
            var e = Math.acos(t.y);
            this.quaternion.setFromAxisAngle(wh, e);
          }
        }),
        (Mh.prototype.setLength = function (t, e, i) {
          void 0 === e && (e = 0.2 * t),
            void 0 === i && (i = 0.2 * e),
            this.line.scale.set(1, Math.max(1e-4, t - e), 1),
            this.line.updateMatrix(),
            this.cone.scale.set(i, e, i),
            (this.cone.position.y = t),
            this.cone.updateMatrix();
        }),
        (Mh.prototype.setColor = function (t) {
          this.line.material.color.set(t), this.cone.material.color.set(t);
        }),
        (Mh.prototype.copy = function (t) {
          return (
            X.prototype.copy.call(this, t, !1),
            this.line.copy(t.line),
            this.cone.copy(t.cone),
            this
          );
        }),
        (Mh.prototype.clone = function () {
          return new this.constructor().copy(this);
        }),
        (Sh.prototype = Object.create(Br.prototype)),
        (Sh.prototype.constructor = Sh);
      function Ah(t) {
        rs.call(this, t), (this.type = "catmullrom");
      }
      (Zo.create = function (t, e) {
        return (
          (t.prototype = Object.create(Zo.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.getPoint = e),
          t
        );
      }),
        Object.assign(vs.prototype, {
          createPointsGeometry: function (t) {
            var e = this.getPoints(t);
            return this.createGeometry(e);
          },
          createSpacedPointsGeometry: function (t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e);
          },
          createGeometry: function (t) {
            for (var e = new ze(), i = 0, n = t.length; i < n; i++) {
              var r = t[i];
              e.vertices.push(new p(r.x, r.y, r.z || 0));
            }
            return e;
          },
        }),
        Object.assign(gs.prototype, {
          fromPoints: function (t) {
            return this.setFromPoints(t);
          },
        }),
        Object.create(rs.prototype),
        Object.create(rs.prototype),
        (Ah.prototype = Object.create(rs.prototype)),
        Object.assign(Ah.prototype, {
          initFromArray: function () {},
          getControlPointsArray: function () {},
          reparametrizeByArcLength: function () {},
        }),
        (eh.prototype.setColors = function () {}),
        (Xc.prototype.update = function () {}),
        Object.assign(Go.prototype, {
          extractUrlBase: function (t) {
            return Ns(t);
          },
        }),
        (Go.Handlers = { add: function () {}, get: function () {} }),
        Object.assign(Fs.prototype, {
          setTexturePath: function (t) {
            return this.setResourcePath(t);
          },
        }),
        Object.assign(Nc.prototype, {
          center: function (t) {
            return this.getCenter(t);
          },
          empty: function () {
            return this.isEmpty();
          },
          isIntersectionBox: function (t) {
            return this.intersectsBox(t);
          },
          size: function (t) {
            return this.getSize(t);
          },
        }),
        Object.assign(st.prototype, {
          center: function (t) {
            return this.getCenter(t);
          },
          empty: function () {
            return this.isEmpty();
          },
          isIntersectionBox: function (t) {
            return this.intersectsBox(t);
          },
          isIntersectionSphere: function (t) {
            return this.intersectsSphere(t);
          },
          size: function (t) {
            return this.getSize(t);
          },
        }),
        (zc.prototype.center = function (t) {
          return this.getCenter(t);
        }),
        Object.assign(s, {
          random16: function () {
            return Math.random();
          },
          nearestPowerOfTwo: function (t) {
            return s.floorPowerOfTwo(t);
          },
          nextPowerOfTwo: function (t) {
            return s.ceilPowerOfTwo(t);
          },
        }),
        Object.assign(m.prototype, {
          flattenToArrayOffset: function (t, e) {
            return this.toArray(t, e);
          },
          multiplyVector3: function (t) {
            return t.applyMatrix3(this);
          },
          multiplyVector3Array: function () {},
          applyToBuffer: function (t) {
            return this.applyToBufferAttribute(t);
          },
          applyToVector3Array: function () {},
        }),
        Object.assign(C.prototype, {
          extractPosition: function (t) {
            return this.copyPosition(t);
          },
          flattenToArrayOffset: function (t, e) {
            return this.toArray(t, e);
          },
          getPosition: function () {
            return new p().setFromMatrixColumn(this, 3);
          },
          setRotationFromQuaternion: function (t) {
            return this.makeRotationFromQuaternion(t);
          },
          multiplyToArray: function () {},
          multiplyVector3: function (t) {
            return t.applyMatrix4(this);
          },
          multiplyVector4: function (t) {
            return t.applyMatrix4(this);
          },
          multiplyVector3Array: function () {},
          rotateAxis: function (t) {
            t.transformDirection(this);
          },
          crossVector: function (t) {
            return t.applyMatrix4(this);
          },
          translate: function () {},
          rotateX: function () {},
          rotateY: function () {},
          rotateZ: function () {},
          rotateByAxis: function () {},
          applyToBuffer: function (t) {
            return this.applyToBufferAttribute(t);
          },
          applyToVector3Array: function () {},
          makeFrustum: function (t, e, i, n, r, a) {
            return this.makePerspective(t, e, n, i, r, a);
          },
        }),
        (wt.prototype.isIntersectionLine = function (t) {
          return this.intersectsLine(t);
        }),
        (h.prototype.multiplyVector3 = function (t) {
          return t.applyQuaternion(this);
        }),
        Object.assign(yt.prototype, {
          isIntersectionBox: function (t) {
            return this.intersectsBox(t);
          },
          isIntersectionPlane: function (t) {
            return this.intersectsPlane(t);
          },
          isIntersectionSphere: function (t) {
            return this.intersectsSphere(t);
          },
        }),
        Object.assign(It.prototype, {
          area: function () {
            return this.getArea();
          },
          barycoordFromPoint: function (t, e) {
            return this.getBarycoord(t, e);
          },
          midpoint: function (t) {
            return this.getMidpoint(t);
          },
          normal: function (t) {
            return this.getNormal(t);
          },
          plane: function (t) {
            return this.getPlane(t);
          },
        }),
        Object.assign(It, {
          barycoordFromPoint: function (t, e, i, n, r) {
            return It.getBarycoord(t, e, i, n, r);
          },
          normal: function (t, e, i, n) {
            return It.getNormal(t, e, i, n);
          },
        }),
        Object.assign(ys.prototype, {
          extractAllPoints: function (t) {
            return this.extractPoints(t);
          },
          extrude: function (t) {
            return new ja(this, t);
          },
          makeGeometry: function (t) {
            return new to(this, t);
          },
        }),
        Object.assign(c.prototype, {
          fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i);
          },
          distanceToManhattan: function (t) {
            return this.manhattanDistanceTo(t);
          },
          lengthManhattan: function () {
            return this.manhattanLength();
          },
        }),
        Object.assign(p.prototype, {
          setEulerFromRotationMatrix: function () {},
          setEulerFromQuaternion: function () {},
          getPositionFromMatrix: function (t) {
            return this.setFromMatrixPosition(t);
          },
          getScaleFromMatrix: function (t) {
            return this.setFromMatrixScale(t);
          },
          getColumnFromMatrix: function (t, e) {
            return this.setFromMatrixColumn(e, t);
          },
          applyProjection: function (t) {
            return this.applyMatrix4(t);
          },
          fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i);
          },
          distanceToManhattan: function (t) {
            return this.manhattanDistanceTo(t);
          },
          lengthManhattan: function () {
            return this.manhattanLength();
          },
        }),
        Object.assign(x.prototype, {
          fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i);
          },
          lengthManhattan: function () {
            return this.manhattanLength();
          },
        }),
        Object.assign(ze.prototype, {
          computeTangents: function () {},
          computeLineDistances: function () {},
        }),
        Object.assign(X.prototype, {
          getChildByName: function (t) {
            return this.getObjectByName(t);
          },
          renderDepth: function () {},
          translate: function (t, e) {
            return this.translateOnAxis(e, t);
          },
          getWorldRotation: function () {},
        }),
        Object.defineProperties(X.prototype, {
          eulerOrder: {
            get: function () {
              return this.rotation.order;
            },
            set: function (t) {
              this.rotation.order = t;
            },
          },
          useQuaternion: { get: function () {}, set: function () {} },
        }),
        Object.defineProperties(Mr.prototype, {
          objects: {
            get: function () {
              return this.levels;
            },
          },
        }),
        Object.defineProperty(Lr.prototype, "useVertexTexture", {
          get: function () {},
          set: function () {},
        }),
        (Sr.prototype.initBones = function () {}),
        Object.defineProperty(Zo.prototype, "__arcLengthDivisions", {
          get: function () {
            return this.arcLengthDivisions;
          },
          set: function (t) {
            this.arcLengthDivisions = t;
          },
        }),
        (Ge.prototype.setLens = function (t, e) {
          void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
        }),
        Object.defineProperties(xs.prototype, {
          onlyShadow: { set: function () {} },
          shadowCameraFov: {
            set: function (t) {
              this.shadow.camera.fov = t;
            },
          },
          shadowCameraLeft: {
            set: function (t) {
              this.shadow.camera.left = t;
            },
          },
          shadowCameraRight: {
            set: function (t) {
              this.shadow.camera.right = t;
            },
          },
          shadowCameraTop: {
            set: function (t) {
              this.shadow.camera.top = t;
            },
          },
          shadowCameraBottom: {
            set: function (t) {
              this.shadow.camera.bottom = t;
            },
          },
          shadowCameraNear: {
            set: function (t) {
              this.shadow.camera.near = t;
            },
          },
          shadowCameraFar: {
            set: function (t) {
              this.shadow.camera.far = t;
            },
          },
          shadowCameraVisible: { set: function () {} },
          shadowBias: {
            set: function (t) {
              this.shadow.bias = t;
            },
          },
          shadowDarkness: { set: function () {} },
          shadowMapWidth: {
            set: function (t) {
              this.shadow.mapSize.width = t;
            },
          },
          shadowMapHeight: {
            set: function (t) {
              this.shadow.mapSize.height = t;
            },
          },
        }),
        Object.defineProperties(Ht.prototype, {
          length: {
            get: function () {
              return this.array.length;
            },
          },
          dynamic: {
            get: function () {
              return 35048 === this.usage;
            },
            set: function () {
              this.setUsage(35048);
            },
          },
        }),
        Object.assign(Ht.prototype, {
          setDynamic: function (t) {
            return this.setUsage(!0 === t ? 35048 : 35044), this;
          },
          copyIndicesArray: function () {},
          setArray: function () {},
        }),
        Object.assign(le.prototype, {
          addIndex: function (t) {
            this.setIndex(t);
          },
          addAttribute: function (t, e) {
            return (e && e.isBufferAttribute) ||
              (e && e.isInterleavedBufferAttribute)
              ? "index" === t
                ? (this.setIndex(e), this)
                : this.setAttribute(t, e)
              : this.setAttribute(t, new Ht(arguments[1], arguments[2]));
          },
          addDrawCall: function (t, e, i) {
            this.addGroup(t, e);
          },
          clearDrawCalls: function () {
            this.clearGroups();
          },
          computeTangents: function () {},
          computeOffsets: function () {},
          removeAttribute: function (t) {
            return this.deleteAttribute(t);
          },
        }),
        Object.defineProperties(le.prototype, {
          drawcalls: {
            get: function () {
              return this.groups;
            },
          },
          offsets: {
            get: function () {
              return this.groups;
            },
          },
        }),
        Object.defineProperties(rr.prototype, {
          dynamic: {
            get: function () {
              return 35048 === this.usage;
            },
            set: function (t) {
              this.setUsage(t);
            },
          },
        }),
        Object.assign(rr.prototype, {
          setDynamic: function (t) {
            return this.setUsage(!0 === t ? 35048 : 35044), this;
          },
          setArray: function () {},
        }),
        Object.assign(ka.prototype, {
          getArrays: function () {},
          addShapeList: function () {},
          addShape: function () {},
        }),
        Object.defineProperties(Lc.prototype, {
          dynamic: { set: function () {} },
          onUpdate: {
            value: function () {
              return this;
            },
          },
        }),
        Object.defineProperties(kt.prototype, {
          wrapAround: { get: function () {}, set: function () {} },
          overdraw: { get: function () {}, set: function () {} },
          wrapRGB: {
            get: function () {
              return new Ft();
            },
          },
          shading: {
            get: function () {},
            set: function (t) {
              this.flatShading = 1 === t;
            },
          },
          stencilMask: {
            get: function () {
              return this.stencilFuncMask;
            },
            set: function (t) {
              this.stencilFuncMask = t;
            },
          },
        }),
        Object.defineProperties(vo.prototype, {
          metal: {
            get: function () {
              return !1;
            },
            set: function () {},
          },
        }),
        Object.defineProperties(Be.prototype, {
          derivatives: {
            get: function () {
              return this.extensions.derivatives;
            },
            set: function (t) {
              this.extensions.derivatives = t;
            },
          },
        }),
        Object.assign(er.prototype, {
          clearTarget: function (t, e, i, n) {
            this.setRenderTarget(t), this.clear(e, i, n);
          },
          animate: function (t) {
            this.setAnimationLoop(t);
          },
          getCurrentRenderTarget: function () {
            return this.getRenderTarget();
          },
          getMaxAnisotropy: function () {
            return this.capabilities.getMaxAnisotropy();
          },
          getPrecision: function () {
            return this.capabilities.precision;
          },
          resetGLState: function () {
            return this.state.reset();
          },
          supportsFloatTextures: function () {
            return this.extensions.get("OES_texture_float");
          },
          supportsHalfFloatTextures: function () {
            return this.extensions.get("OES_texture_half_float");
          },
          supportsStandardDerivatives: function () {
            return this.extensions.get("OES_standard_derivatives");
          },
          supportsCompressedTextureS3TC: function () {
            return this.extensions.get("WEBGL_compressed_texture_s3tc");
          },
          supportsCompressedTexturePVRTC: function () {
            return this.extensions.get("WEBGL_compressed_texture_pvrtc");
          },
          supportsBlendMinMax: function () {
            return this.extensions.get("EXT_blend_minmax");
          },
          supportsVertexTextures: function () {
            return this.capabilities.vertexTextures;
          },
          supportsInstancedArrays: function () {
            return this.extensions.get("ANGLE_instanced_arrays");
          },
          enableScissorTest: function (t) {
            this.setScissorTest(t);
          },
          initMaterial: function () {},
          addPrePlugin: function () {},
          addPostPlugin: function () {},
          updateShadowMap: function () {},
          setFaceCulling: function () {},
          allocTextureUnit: function () {},
          setTexture: function () {},
          setTexture2D: function () {},
          setTextureCube: function () {},
          getActiveMipMapLevel: function () {
            return this.getActiveMipmapLevel();
          },
        }),
        Object.defineProperties(er.prototype, {
          shadowMapEnabled: {
            get: function () {
              return this.shadowMap.enabled;
            },
            set: function (t) {
              this.shadowMap.enabled = t;
            },
          },
          shadowMapType: {
            get: function () {
              return this.shadowMap.type;
            },
            set: function (t) {
              this.shadowMap.type = t;
            },
          },
          shadowMapCullFace: { get: function () {}, set: function () {} },
          context: {
            get: function () {
              return this.getContext();
            },
          },
        }),
        Object.defineProperties(Gn.prototype, {
          cullFace: { get: function () {}, set: function () {} },
          renderReverseSided: { get: function () {}, set: function () {} },
          renderSingleSided: { get: function () {}, set: function () {} },
        }),
        Object.defineProperties(ke.prototype, {
          activeCubeFace: { set: function () {} },
          activeMipMapLevel: { set: function () {} },
        }),
        Object.defineProperties(_.prototype, {
          wrapS: {
            get: function () {
              return this.texture.wrapS;
            },
            set: function (t) {
              this.texture.wrapS = t;
            },
          },
          wrapT: {
            get: function () {
              return this.texture.wrapT;
            },
            set: function (t) {
              this.texture.wrapT = t;
            },
          },
          magFilter: {
            get: function () {
              return this.texture.magFilter;
            },
            set: function (t) {
              this.texture.magFilter = t;
            },
          },
          minFilter: {
            get: function () {
              return this.texture.minFilter;
            },
            set: function (t) {
              this.texture.minFilter = t;
            },
          },
          anisotropy: {
            get: function () {
              return this.texture.anisotropy;
            },
            set: function (t) {
              this.texture.anisotropy = t;
            },
          },
          offset: {
            get: function () {
              return this.texture.offset;
            },
            set: function (t) {
              this.texture.offset = t;
            },
          },
          repeat: {
            get: function () {
              return this.texture.repeat;
            },
            set: function (t) {
              this.texture.repeat = t;
            },
          },
          format: {
            get: function () {
              return this.texture.format;
            },
            set: function (t) {
              this.texture.format = t;
            },
          },
          type: {
            get: function () {
              return this.texture.type;
            },
            set: function (t) {
              this.texture.type = t;
            },
          },
          generateMipmaps: {
            get: function () {
              return this.texture.generateMipmaps;
            },
            set: function (t) {
              this.texture.generateMipmaps = t;
            },
          },
        }),
        Object.defineProperties($n.prototype, {
          standing: { set: function () {} },
          userHeight: { set: function () {} },
        }),
        Object.defineProperties(sc.prototype, {
          load: {
            value: function (t) {
              var e = this;
              return (
                new Ys().load(t, function (t) {
                  e.setBuffer(t);
                }),
                this
              );
            },
          },
          startTime: { set: function () {} },
        }),
        (dc.prototype.getData = function () {
          return this.getFrequencyData();
        }),
        (je.prototype.updateCubeMap = function (t, e) {
          return this.update(t, e);
        });
      (v.crossOrigin = void 0),
        (v.loadTexture = function (t, e, i, n) {
          var r = new Jo();
          r.setCrossOrigin(this.crossOrigin);
          var a = r.load(t, i, void 0, n);
          return e && (a.mapping = e), a;
        }),
        (v.loadTextureCube = function (t, e, i, n) {
          var r = new Yo();
          r.setCrossOrigin(this.crossOrigin);
          var a = r.load(t, i, void 0, n);
          return e && (a.mapping = e), a;
        }),
        (v.loadCompressedTexture = function () {}),
        (v.loadCompressedTextureCube = function () {});
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("register", { detail: { revision: "110" } })
        );
    },
  },
]);
