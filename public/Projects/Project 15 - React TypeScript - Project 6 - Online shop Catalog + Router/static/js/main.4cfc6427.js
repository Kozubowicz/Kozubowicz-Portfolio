/*! For license information please see main.4cfc6427.js.LICENSE.txt */
(() => {
  var e = {
      694: (e, t) => {
        var n;
        !(function () {
          'use strict';
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var l = typeof n;
                if ('string' === l || 'number' === l) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var o = a.apply(null, n);
                    o && e.push(o);
                  }
                } else if ('object' === l) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes('[native code]')
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var i in n) r.call(n, i) && n[i] && e.push(i);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      463: (e, t, n) => {
        'use strict';
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var o = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for('react.element'),
          w = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          N = Symbol.for('react.profiler'),
          C = Symbol.for('react.provider'),
          E = Symbol.for('react.context'),
          j = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          P = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          z = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var R = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var O = Symbol.iterator;
        function I(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (O && e[O]) || e['@@iterator'])
            ? e
            : null;
        }
        var F,
          M = Object.assign;
        function D(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || '';
            }
          return '\n' + F + e;
        }
        var B = !1;
        function U(e, t) {
          if (!e || B) return '';
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var a = u.stack.split('\n'),
                  l = r.stack.split('\n'),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var s = '\n' + a[o].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? D(e) : '';
        }
        function A(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D('Lazy');
            case 13:
              return D('Suspense');
            case 19:
              return D('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return '';
          }
        }
        function $(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case k:
              return 'Fragment';
            case w:
              return 'Portal';
            case N:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case P:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || 'Context') + '.Consumer';
              case C:
                return (e._context.displayName || 'Context') + '.Provider';
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || 'Memo';
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return $(t);
            case 8:
              return t === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = H(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function G(e, t) {
          J(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Se = null;
        function Ne(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof we) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = _a(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Ee() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Te() {}
        var Pe = !1;
        function Le(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return je(e, t, n);
          } finally {
            (Pe = !1), (null !== ke || null !== Se) && (Te(), Ee());
          }
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _a(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, 'passive', {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener('test', Oe, Oe),
              window.removeEventListener('test', Oe, Oe);
          } catch (ce) {
            Re = !1;
          }
        function Ie(e, t, n, r, a, l, o, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Me = null,
          De = !1,
          Be = null,
          Ue = {
            onError: function (e) {
              (Fe = !0), (Me = e);
            },
          };
        function Ae(e, t, n, r, a, l, o, i, s) {
          (Fe = !1), (Me = null), Ie.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if ($e(e) !== e) throw Error(l(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ve(a), e;
                    if (o === r) return Ve(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ge = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (l &= o) && (r = dt(l));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _t,
          wt,
          kt,
          St,
          Nt,
          Ct = !1,
          Et = [],
          jt = null,
          Tt = null,
          Pt = null,
          Lt = new Map(),
          zt = new Map(),
          Rt = [],
          Ot =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function It(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              jt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Tt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Pt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              zt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Nt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== jt && Dt(jt) && (jt = null),
            null !== Tt && Dt(Tt) && (Tt = null),
            null !== Pt && Dt(Pt) && (Pt = null),
            Lt.forEach(Bt),
            zt.forEach(Bt);
        }
        function At(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return At(t, e);
          }
          if (0 < Et.length) {
            At(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && At(jt, e),
              null !== Tt && At(Tt, e),
              null !== Pt && At(Pt, e),
              Lt.forEach(t),
              zt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && Rt.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Vt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var a = Yt(e, t, n, r);
            if (null === a) Vr(e, t, r, Kt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (jt = Ft(jt, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (Tt = Ft(Tt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (Pt = Ft(Pt, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var l = a.pointerId;
                    return Lt.set(l, Ft(Lt.get(l) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (
                      (l = a.pointerId),
                      zt.set(l, Ft(zt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && _t(l),
                  null === (l = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = _e(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            a = 'value' in Jt ? Jt.value : Jt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = M({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = M({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Nn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(M({}, pn, { dataTransfer: 0 })),
          gn = an(M({}, dn, { relatedTarget: 0 })),
          vn = an(
            M({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = M({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(M({}, un, { data: 0 })),
          _n = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          wn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          kn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Nn() {
          return Sn;
        }
        var Cn = M({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? wn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Nn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = an(Cn),
          jn = an(
            M({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = an(
            M({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nn,
            })
          ),
          Pn = an(
            M({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = M({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(Ln),
          Rn = [9, 13, 27, 32],
          On = c && 'CompositionEvent' in window,
          In = null;
        c && 'documentMode' in document && (In = document.documentMode);
        var Fn = c && 'TextEvent' in window && !In,
          Mn = c && (!On || (In && 8 < In && 11 >= In)),
          Dn = String.fromCharCode(32),
          Bn = !1;
        function Un(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Rn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function An(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Wn[e.type] : 'textarea' === t;
        }
        function Hn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Dr(e, 0);
        }
        function Yn(e) {
          if (q(xa(e))) return e;
        }
        function Xn(e, t) {
          if ('change' === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Gn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'),
                (Zn = 'function' === typeof er.oninput);
            }
            Gn = Zn;
          } else Gn = !1;
          Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent('onpropertychange', nr), (qn = Qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Yn(qn)) {
            var t = [];
            Hn(t, qn, e, _e(e)), Le(Kn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Yn(qn);
        }
        function lr(e, t) {
          if ('click' === e) return Yn(t);
        }
        function or(e, t) {
          if ('input' === e || 'change' === e) return Yn(t);
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ('selectionStart' in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var wr = {
            animationend: _r('Animation', 'AnimationEnd'),
            animationiteration: _r('Animation', 'AnimationIteration'),
            animationstart: _r('Animation', 'AnimationStart'),
            transitionend: _r('Transition', 'TransitionEnd'),
          },
          kr = {},
          Sr = {};
        function Nr(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          'TransitionEvent' in window || delete wr.transitionend.transition);
        var Cr = Nr('animationend'),
          Er = Nr('animationiteration'),
          jr = Nr('animationstart'),
          Tr = Nr('transitionend'),
          Pr = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function zr(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Rr = 0; Rr < Lr.length; Rr++) {
          var Or = Lr[Rr];
          zr(Or.toLowerCase(), 'on' + (Or[0].toUpperCase() + Or.slice(1)));
        }
        zr(Cr, 'onAnimationEnd'),
          zr(Er, 'onAnimationIteration'),
          zr(jr, 'onAnimationStart'),
          zr('dblclick', 'onDoubleClick'),
          zr('focusin', 'onFocus'),
          zr('focusout', 'onBlur'),
          zr(Tr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Ir =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Fr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Ir)
          );
        function Mr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, s, u) {
              if ((Ae.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = Me;
                (Fe = !1), (Me = null), De || ((De = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Mr(a, i, u), (l = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (i = r[o]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Mr(a, i, u), (l = s);
                }
            }
          }
          if (De) throw ((e = Be), (De = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ar = '_reactListening' + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Ar]) {
            (e[Ar] = !0),
              o.forEach(function (t) {
                'selectionchange' !== t &&
                  (Fr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ar] || ((t[Ar] = !0), Ur('selectionchange', !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = l,
              a = _e(n),
              o = [];
            e: {
              var i = Pr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = En;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = gn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = gn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Tn;
                    break;
                  case Cr:
                  case Er:
                  case jr:
                    s = vn;
                    break;
                  case Tr:
                    s = Pn;
                    break;
                  case 'scroll':
                    s = fn;
                    break;
                  case 'wheel':
                    s = zn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = jn;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = ze(h, f)) &&
                        c.push(Hr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = $e(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = jn),
                    (m = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (h = 'pointer')),
                  (d = null == s ? i : xa(s)),
                  (p = null == u ? i : xa(u)),
                  ((i = new c(m, h + 'leave', s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + 'enter', u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(o, i, s, c, !1),
                  null !== u && null !== d && Kr(o, d, u, c, !0);
              }
              if (
                'select' ===
                  (s =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === i.type)
              )
                var g = Xn;
              else if (Vn(i))
                if (Jn) g = or;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = i.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Hn(o, g, n, a)
                  : (v && v(e, i, r),
                    'focusout' === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (v = r ? xa(r) : window),
                e)
              ) {
                case 'focusin':
                  (Vn(v) || 'true' === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = vr = gr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), xr(o, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  xr(o, n, a);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Un(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (Mn &&
                  'ko' !== n.locale &&
                  ($n || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && $n && (y = en())
                    : ((Gt = 'value' in (Jt = a) ? Jt.value : Jt.textContent),
                      ($n = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = An(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return An(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Bn = !0), Dn);
                        case 'textInput':
                          return (e = t.data) === Dn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return 'compositionend' === e || (!On && Un(e, t))
                          ? ((e = en()), (Zt = Gt = Jt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Mn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, 'onBeforeInput')).length &&
                  ((a = new xn('onBeforeInput', 'beforeinput', null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(o, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = ze(e, n)) && r.unshift(Hr(e, l, a)),
              null != (l = ze(e, t)) && r.push(Hr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = ze(n, l)) && o.unshift(Hr(n, s, i))
                : a || (null != (s = ze(n, l)) && o.push(Hr(n, s, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Yr, '\n')
            .replace(Xr, '');
        }
        function Gr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          la = 'function' === typeof Promise ? Promise : void 0,
          oa =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          ga = '__reactListeners$' + da,
          va = '__reactHandles$' + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function _a(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function Na(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function Ca(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Ea = {},
          ja = Sa(Ea),
          Ta = Sa(!1),
          Pa = Ea;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ea;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function za(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ra() {
          Na(Ta), Na(ja);
        }
        function Oa(e, t, n) {
          if (ja.current !== Ea) throw Error(l(168));
          Ca(ja, t), Ca(Ta, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, W(e) || 'Unknown', a));
          return M({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ea),
            (Pa = ja.current),
            Ca(ja, e),
            Ca(Ta, Ta.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ia(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Na(Ta),
              Na(ja),
              Ca(ja, e))
            : Na(Ta),
            Ca(Ta, n);
        }
        var Da = null,
          Ba = !1,
          Ua = !1;
        function Aa(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function $a() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ba = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, $a), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Va = 0,
          Ha = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Xa = 1,
          Ja = '';
        function Ga(e, t) {
          (Wa[Va++] = Qa), (Wa[Va++] = Ha), (Ha = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ka++] = Xa), (qa[Ka++] = Ja), (qa[Ka++] = Ya), (Ya = e);
          var r = Xa;
          e = Ja;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ja = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ja = e);
        }
        function el(e) {
          null !== e.return && (Ga(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === Ha; )
            (Ha = Wa[--Va]), (Wa[Va] = null), (Qa = Wa[--Va]), (Wa[Va] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Ja = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = zu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = zu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = x.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = Sa(null),
          yl = null,
          bl = null,
          xl = null;
        function _l() {
          xl = bl = yl = null;
        }
        function wl(e) {
          var t = vl.current;
          Na(vl), (e._currentValue = t);
        }
        function kl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Sl(e, t) {
          (yl = e),
            (xl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null));
        }
        function Nl(e) {
          var t = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Cl = null;
        function El(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function jl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), El(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Tl(e, r)
          );
        }
        function Tl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pl = !1;
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Rl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ol(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Tl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), El(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Tl(e, n)
          );
        }
        function Il(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Fl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ml(e, t, n, r) {
          var a = e.updateQueue;
          Pl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === o ? (l = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, i = l; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      Pl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ms |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Dl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Bl = new r.Component().refs;
        function Ul(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = Rl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (ru(t, e, a, r), Il(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = Rl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (ru(t, e, a, r), Il(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Rl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ol(e, a, r)) && (ru(t, e, r, n), Il(t, e, r));
          },
        };
        function $l(e, t, n, r, a, l, o) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Wl(e, t, n) {
          var r = !1,
            a = Ea,
            l = t.contextType;
          return (
            'object' === typeof l && null !== l
              ? (l = Nl(l))
              : ((a = za(t) ? Pa : ja.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Ea)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Vl(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Al.enqueueReplaceState(t, t.state, null);
        }
        function Hl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Bl), Ll(e);
          var l = t.contextType;
          'object' === typeof l && null !== l
            ? (a.context = Nl(l))
            : ((l = za(t) ? Pa : ja.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            'function' === typeof (l = t.getDerivedStateFromProps) &&
              (Ul(e, t, l, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Al.enqueueReplaceState(a, a.state, null),
              Ml(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bl && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ('string' !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function Yl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ('object' === typeof l &&
                    null !== l &&
                    l.$$typeof === z &&
                    Kl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Fu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Du('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case z:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Fu(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === a ? u(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case z:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case z:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, i, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, i[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = o(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === i.length) return n(a, d), al && Ga(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((l = o(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Ga(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = h(d, a, m, i[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ga(a, m),
              u
            );
          }
          function g(a, i, s, u) {
            var c = I(s);
            if ('function' !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = i, g = (i = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Ga(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((i = o(y, i, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Ga(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = o(y, i, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ga(a, g),
              c
            );
          }
          return function e(r, l, o, s) {
            if (
              ('object' === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              'object' === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case _:
                  e: {
                    for (var u = o.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === z &&
                            Kl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Ql(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((l = Fu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = l))
                      : (((s = Iu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ql(r, l, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case w:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Bu(o, r.mode, s)).return = r), (r = l);
                  }
                  return i(r);
                case z:
                  return e(r, l, (c = o._init)(o._payload), s);
              }
              if (te(o)) return m(r, l, o, s);
              if (I(o)) return g(r, l, o, s);
              ql(r, o);
            }
            return ('string' === typeof o && '' !== o) || 'number' === typeof o
              ? ((o = '' + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Du(o, r.mode, s)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Xl = Yl(!0),
          Jl = Yl(!1),
          Gl = {},
          Zl = Sa(Gl),
          eo = Sa(Gl),
          to = Sa(Gl);
        function no(e) {
          if (e === Gl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca(Zl, Gl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Na(Zl), Ca(Zl, t);
        }
        function ao() {
          Na(Zl), Na(eo), Na(to);
        }
        function lo(e) {
          no(to.current);
          var t = no(Zl.current),
            n = se(t, e.type);
          t !== n && (Ca(eo, e), Ca(Zl, n));
        }
        function oo(e) {
          eo.current === e && (Na(Zl), Na(eo));
        }
        var io = Sa(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          go = null,
          vo = null,
          yo = !1,
          bo = !1,
          xo = 0,
          _o = 0;
        function wo() {
          throw Error(l(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function So(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : si),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (vo = go = null),
                (t.updateQueue = null),
                (fo.current = ui),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== go && null !== go.next),
            (ho = 0),
            (vo = go = mo = null),
            (yo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function No() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e), vo
          );
        }
        function Eo() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === vo ? mo.memoizedState : vo.next;
          if (null !== t) (vo = t), (go = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e);
          }
          return vo;
        }
        function jo(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function To(e) {
          var t = Eo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((ho & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f),
                  (mo.lanes |= d),
                  (Ms |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Ms |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Po(e) {
          var t = Eo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (xi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function zo(e, t) {
          var n = mo,
            r = Eo(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Vo(Io.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== vo && 1 & vo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bo(9, Oo.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(l(349));
            0 !== (30 & ho) || Ro(n, t, a);
          }
          return a;
        }
        function Ro(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Oo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fo(t) && Mo(e);
        }
        function Io(e, t, n) {
          return n(function () {
            Fo(t) && Mo(e);
          });
        }
        function Fo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Mo(e) {
          var t = Tl(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Do(e) {
          var t = Co();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Bo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Uo() {
          return Eo().memoizedState;
        }
        function Ao(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = Bo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function $o(e, t, n, r) {
          var a = Eo();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((l = o.destroy), null !== r && ko(r, o.deps)))
              return void (a.memoizedState = Bo(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Bo(1 | t, n, l, r));
        }
        function Wo(e, t) {
          return Ao(8390656, 8, e, t);
        }
        function Vo(e, t) {
          return $o(2048, 8, e, t);
        }
        function Ho(e, t) {
          return $o(4, 2, e, t);
        }
        function Qo(e, t) {
          return $o(4, 4, e, t);
        }
        function qo(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            $o(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Yo() {}
        function Xo(e, t) {
          var n = Eo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Jo(e, t) {
          var n = Eo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Go(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Ms |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function ei() {
          return Eo().memoizedState;
        }
        function ti(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = jl(e, t, n, r))) {
            ru(n, e, r, tu()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), El(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = jl(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var oi = {
            readContext: Nl,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Nl,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Nl,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ao(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ao(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ao(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Do,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(l(349));
                0 !== (30 & ho) || Ro(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(Io.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Bo(9, Oo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Ps.identifierPrefix;
              if (al) {
                var n = Ja;
                (t =
                  ':' +
                  t +
                  'R' +
                  (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = _o++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Nl,
            useCallback: Xo,
            useContext: Nl,
            useEffect: Vo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Jo,
            useReducer: To,
            useRef: Uo,
            useState: function () {
              return To(jo);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Go(Eo(), go.memoizedState, e);
            },
            useTransition: function () {
              return [To(jo)[0], Eo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: zo,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Nl,
            useCallback: Xo,
            useContext: Nl,
            useEffect: Vo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Jo,
            useReducer: Po,
            useRef: Uo,
            useState: function () {
              return Po(jo);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var t = Eo();
              return null === go
                ? (t.memoizedState = e)
                : Go(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [Po(jo)[0], Eo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: zo,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += A(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = '\nError generating stack: ' + l.message + '\n' + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = 'function' === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Rl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Qs = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Rl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              'function' === typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  'function' !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Rl(-1, 1)).tag = 2), Ol(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = x.ReactCurrentOwner,
          xi = !1;
        function _i(e, t, n, r) {
          t.child = null === e ? Jl(t, null, n, r) : Xl(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Sl(t, a),
            (r = So(e, t, n, r, l, a)),
            (n = No()),
            null === e || xi
              ? (al && n && el(t), (t.flags |= 1), _i(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return 'function' !== typeof l ||
              Ru(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Si(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ou(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Si(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hi(e, t, a);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return Ei(e, t, n, r, a);
        }
        function Ni(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Os, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Os, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Os, Rs),
                (Rs |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Os, Rs),
              (Rs |= r);
          return _i(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ei(e, t, n, r, a) {
          var l = za(n) ? Pa : ja.current;
          return (
            (l = La(t, l)),
            Sl(t, a),
            (n = So(e, t, n, r, l, a)),
            (r = No()),
            null === e || xi
              ? (al && r && el(t), (t.flags |= 1), _i(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function ji(e, t, n, r, a) {
          if (za(n)) {
            var l = !0;
            Fa(t);
          } else l = !1;
          if ((Sl(t, a), null === t.stateNode))
            Vi(e, t), Wl(t, n, r), Hl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var s = o.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = Nl(u))
              : (u = La(t, (u = za(n) ? Pa : ja.current)));
            var c = n.getDerivedStateFromProps,
              d =
                'function' === typeof c ||
                'function' === typeof o.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== r || s !== u) && Vl(t, o, r, u)),
              (Pl = !1);
            var f = t.memoizedState;
            (o.state = f),
              Ml(t, r, o, a),
              (s = t.memoizedState),
              i !== r || f !== s || Ta.current || Pl
                ? ('function' === typeof c &&
                    (Ul(t, n, c, r), (s = t.memoizedState)),
                  (i = Pl || $l(t, n, i, r, f, s, u))
                    ? (d ||
                        ('function' !== typeof o.UNSAFE_componentWillMount &&
                          'function' !== typeof o.componentWillMount) ||
                        ('function' === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        'function' === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      'function' === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = i))
                : ('function' === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              zl(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : gl(t.type, i)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Nl(s))
                : (s = La(t, (s = za(n) ? Pa : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof o.getSnapshotBeforeUpdate) ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== s) && Vl(t, o, r, s)),
              (Pl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Ml(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || Ta.current || Pl
              ? ('function' === typeof p &&
                  (Ul(t, n, p, r), (h = t.memoizedState)),
                (u = Pl || $l(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                        'function' !== typeof o.componentWillUpdate) ||
                      ('function' === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      'function' === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ('function' !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ti(e, t, n, r, l, a);
        }
        function Ti(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ma(t, n, !1), Hi(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xl(t, e.child, null, l)),
                (t.child = Xl(t, null, i, l)))
              : _i(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Pi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Li(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), _i(e, t, n, r), t.child;
        }
        var zi,
          Ri,
          Oi,
          Ii,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Mu(s, a, 0, null)),
                      (e = Fu(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Mi(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Bi(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ui(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Mu(
                      { mode: 'visible', children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Fu(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xl(t, e.child, null, i),
                    (t.child.memoizedState = Mi(i)),
                    (t.memoizedState = Fi),
                    o);
              if (0 === (1 & t.mode)) return Ui(e, t, i, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ui(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), xi || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Tl(e, a), ru(r, e, a, -1));
                }
                return gu(), Ui(e, t, i, (r = di(Error(l(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Xa),
                    (qa[Ka++] = Ja),
                    (qa[Ka++] = Ya),
                    (Xa = e.id),
                    (Ja = e.overflow),
                    (Ya = t)),
                  (t = Bi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ou(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Ou(r, i))
                : ((i = Fu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Mi(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ou(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bi(e, t) {
          return (
            ((t = Mu(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ui(e, t, n, r) {
          return (
            null !== r && hl(r),
            Xl(t, e.child, null, n),
            ((e = Bi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ai(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), kl(e.return, t, n);
        }
        function $i(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((_i(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ai(e, n, t);
                else if (19 === e.tag) Ai(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  $i(t, !1, a, n, l);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                $i(t, !0, n, null, l);
                break;
              case 'together':
                $i(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ms |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ki(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return qi(t), null;
            case 1:
            case 17:
              return za(t.type) && Ra(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Na(Ta),
                Na(ja),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                Ri(e, t),
                qi(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Oi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qi(t), null;
                }
                if (((e = no(Zl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Br('cancel', r), Br('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Br('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Ir.length; a++) Br(Ir[a], r);
                      break;
                    case 'source':
                      Br('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Br('error', r), Br('load', r);
                      break;
                    case 'details':
                      Br('toggle', r);
                      break;
                    case 'input':
                      X(r, o), Br('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Br('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, o), Br('invalid', r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (a = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, u, e),
                            (a = ['children', '' + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          'onScroll' === s &&
                          Br('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      Q(r), Z(r, o, !0);
                      break;
                    case 'textarea':
                      Q(r), oe(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          'select' === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    zi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case 'dialog':
                        Br('cancel', e), Br('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Br('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Ir.length; a++) Br(Ir[a], e);
                        a = r;
                        break;
                      case 'source':
                        Br('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Br('error', e), Br('load', e), (a = r);
                        break;
                      case 'details':
                        Br('toggle', e), (a = r);
                        break;
                      case 'input':
                        X(e, r), (a = Y(e, r)), Br('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Br('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Br('invalid', e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        'style' === o
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : 'children' === o
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && fe(e, c)
                            : 'number' === typeof c && fe(e, '' + c)
                          : 'suppressContentEditableWarning' !== o &&
                            'suppressHydrationWarning' !== o &&
                            'autoFocus' !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && 'onScroll' === o && Br('scroll', e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case 'input':
                        Q(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        Q(e), oe(e);
                        break;
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + V(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) Ii(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no(Zl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (Na(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qi(t), (o = !1);
                } else null !== ll && (iu(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Is && (Is = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return (
                ao(),
                Ri(e, t),
                null === e && $r(t.stateNode.containerInfo),
                qi(t),
                null
              );
            case 10:
              return wl(t.type._context), qi(t), null;
            case 19:
              if ((Na(io), null === (o = t.memoizedState))) return qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Qi(o, !1);
                else {
                  if (0 !== Is || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Qi(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Je() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qi(o, !0),
                      null === o.tail &&
                        'hidden' === o.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qi(t), null;
                  } else
                    2 * Je() - o.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Yi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                za(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Na(Ta),
                Na(ja),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Na(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Na(io), null;
            case 4:
              return ao(), null;
            case 10:
              return wl(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (zi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ri = function () {}),
          (Oi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Zl.current);
              var l,
                o = null;
              switch (n) {
                case 'input':
                  (a = Y(e, a)), (r = Y(e, r)), (o = []);
                  break;
                case 'select':
                  (a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ''));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (o = o || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Br('scroll', e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push('style', n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ii = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xi = !1,
          Ji = !1,
          Gi = 'function' === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Nu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Nu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ts(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ls(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (lt && 'function' === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    $t(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      ts(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Ji &&
                (es(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Nu(n, t, i);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Ji = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(l(160));
                hs(o, i, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Nu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Nu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, '');
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s &&
                      'radio' === o.type &&
                      null != o.name &&
                      J(a, o),
                      be(s, i);
                    var c = be(s, o);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      'style' === d
                        ? ge(a, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(a, f)
                        : 'children' === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case 'input':
                        G(a, o);
                        break;
                      case 'textarea':
                        le(a, o);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : '', !1));
                    }
                    a[pa] = o;
                  } catch (g) {
                    Nu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (g) {
                  Nu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (g) {
                  Nu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), ys(e);
              break;
            case 13:
              gs(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($s = Je())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (c = Ji) || d), gs(t, e), (Ji = c))
                  : gs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zi = e, d = e.child; null !== d; ) {
                    for (f = Zi = d; null !== Zi; ) {
                      switch (((h = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Nu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zi = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? 'function' === typeof (o = a.style).setProperty
                              ? o.setProperty('display', 'none', 'important')
                              : (o.display = 'none')
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', i)));
                      } catch (g) {
                        Nu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (g) {
                        Nu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), ys(e), 4 & r && ms(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  us(e, ss(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              Nu(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Zi = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Xi;
              if (!o) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Ji;
                i = Xi;
                var u = Ji;
                if (((Xi = o), (Ji = s) && !u))
                  for (Zi = a; null !== Zi; )
                    (s = (o = Zi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = o), (Zi = s))
                        : ks(a);
                for (; null !== l; ) (Zi = l), xs(l, t, n), (l = l.sibling);
                (Zi = a), (Xi = i), (Ji = u);
              }
              _s(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zi = l))
                : _s(e);
          }
        }
        function _s(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Dl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Dl(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && $t(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Ji || (512 & t.flags && ls(t));
              } catch (p) {
                Nu(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Nu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Nu(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Nu(t, l, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Nu(t, o, s);
                  }
              }
            } catch (s) {
              Nu(t, t.return, s);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Ss,
          Ns = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Es = x.ReactCurrentOwner,
          js = x.ReactCurrentBatchConfig,
          Ts = 0,
          Ps = null,
          Ls = null,
          zs = 0,
          Rs = 0,
          Os = Sa(0),
          Is = 0,
          Fs = null,
          Ms = 0,
          Ds = 0,
          Bs = 0,
          Us = null,
          As = null,
          $s = 0,
          Ws = 1 / 0,
          Vs = null,
          Hs = !1,
          Qs = null,
          qs = null,
          Ks = !1,
          Ys = null,
          Xs = 0,
          Js = 0,
          Gs = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ts) ? Je() : -1 !== Zs ? Zs : (Zs = Je());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== zs
            ? zs & -zs
            : null !== ml.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Js) throw ((Js = 0), (Gs = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Ts) && e === Ps) ||
              (e === Ps && (0 === (2 & Ts) && (Ds |= n), 4 === Is && su(e, zs)),
              au(e, r),
              1 === n &&
                0 === Ts &&
                0 === (1 & t.mode) &&
                ((Ws = Je() + 500), Ba && $a()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ps ? zs : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ba = !0), Aa(e);
                  })(uu.bind(null, e))
                : Aa(uu.bind(null, e)),
                oa(function () {
                  0 === (6 & Ts) && $a();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, lu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function lu(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Ts))) throw Error(l(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? zs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Ts;
            Ts |= 2;
            var o = mu();
            for (
              (Ps === e && zs === t) ||
              ((Vs = null), (Ws = Je() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            _l(),
              (Cs.current = o),
              (Ts = a),
              null !== Ls ? (t = 0) : ((Ps = null), (zs = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Fs), pu(e, 0), su(e, r), au(e, Je()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = Fs), pu(e, 0), su(e, r), au(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  wu(e, As, Vs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = $s + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, As, Vs), t);
                    break;
                  }
                  wu(e, As, Vs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ns(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, As, Vs), r);
                    break;
                  }
                  wu(e, As, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return au(e, Je()), e.callbackNode === n ? lu.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Us;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = As), (As = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === As ? (As = e) : As.push.apply(As, e);
        }
        function su(e, t) {
          for (
            t &= ~Bs,
              t &= ~Ds,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ts)) throw Error(l(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Je()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Fs), pu(e, 0), su(e, t), au(e, Je()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, As, Vs),
            au(e, Je()),
            null
          );
        }
        function cu(e, t) {
          var n = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && ((Ws = Je() + 500), Ba && $a());
          }
        }
        function du(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Ts) && ku();
          var t = Ts;
          Ts |= 1;
          var n = js.transition,
            r = bt;
          try {
            if (((js.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (js.transition = n), 0 === (6 & (Ts = t)) && $a();
          }
        }
        function fu() {
          (Rs = Os.current), Na(Os);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra();
                  break;
                case 3:
                  ao(), Na(Ta), Na(ja), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Na(io);
                  break;
                case 10:
                  wl(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Ls = e = Ou(e.current, null)),
            (zs = Rs = t),
            (Is = 0),
            (Fs = null),
            (Bs = Ds = Ms = 0),
            (As = Us = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((_l(), (fo.current = oi), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (vo = go = mo = null),
                (bo = !1),
                (xo = 0),
                (Es.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (Fs = t), (Ls = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = zs),
                  (s.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, s, 0, t),
                      1 & h.mode && gi(o, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gi(o, c, t), gu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vi(i);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yi(v, i, s, 0, t),
                      hl(ci(u, s));
                    break e;
                  }
                }
                (o = u = ci(u, s)),
                  4 !== Is && (Is = 2),
                  null === Us ? (Us = [o]) : Us.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Fl(o, hi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === qs || !qs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Fl(o, mi(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              _u(n);
            } catch (x) {
              (t = x), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cs.current;
          return (Cs.current = oi), null === e ? oi : e;
        }
        function gu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ps ||
              (0 === (268435455 & Ms) && 0 === (268435455 & Ds)) ||
              su(Ps, zs);
        }
        function vu(e, t) {
          var n = Ts;
          Ts |= 2;
          var r = mu();
          for ((Ps === e && zs === t) || ((Vs = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((_l(), (Ts = n), (Cs.current = r), null !== Ls))
            throw Error(l(261));
          return (Ps = null), (zs = 0), Is;
        }
        function yu() {
          for (; null !== Ls; ) xu(Ls);
        }
        function bu() {
          for (; null !== Ls && !Ye(); ) xu(Ls);
        }
        function xu(e) {
          var t = Ss(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? _u(e) : (Ls = t),
            (Es.current = null);
        }
        function _u(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ki(n, t, Rs))) return void (Ls = n);
            } else {
              if (null !== (n = Yi(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (Is = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = js.transition;
          try {
            (js.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ys);
                if (0 !== (6 & Ts)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Ps && ((Ls = Ps = null), (zs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Pu(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = js.transition), (js.transition = null);
                  var i = bt;
                  bt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Es.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === o && ++d === r && (u = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (_) {
                              Nu(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Xe(),
                    (Ts = s),
                    (bt = i),
                    (js.transition = o);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Ys = e), (Xs = a)),
                  (o = e.pendingLanes),
                  0 === o && (qs = null),
                  (function (e) {
                    if (lt && 'function' === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gs
                      ? Js++
                      : ((Js = 0), (Gs = e))
                    : (Js = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (js.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ys) {
            var e = xt(Xs),
              t = js.transition,
              n = bt;
            try {
              if (((js.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Xs = 0), 0 !== (6 & Ts)))
                  throw Error(l(331));
                var a = Ts;
                for (Ts |= 4, Zi = e.current; null !== Zi; ) {
                  var o = Zi,
                    i = o.child;
                  if (0 !== (16 & Zi.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zi = c; null !== Zi; ) {
                          var d = Zi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zi = f);
                          else
                            for (; null !== Zi; ) {
                              var p = (d = Zi).sibling,
                                h = d.return;
                              if ((os(d), d === c)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zi = p);
                                break;
                              }
                              Zi = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zi = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (o = Zi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zi = y);
                        break e;
                      }
                      Zi = o.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var x = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Zi = x);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (s = Zi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (w) {
                          Nu(s, s.return, w);
                        }
                      if (s === i) {
                        Zi = null;
                        break e;
                      }
                      var _ = s.sibling;
                      if (null !== _) {
                        (_.return = s.return), (Zi = _);
                        break e;
                      }
                      Zi = s.return;
                    }
                }
                if (
                  ((Ts = a),
                  $a(),
                  lt && 'function' === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (js.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Ol(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), au(e, t));
        }
        function Nu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Ol(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (zs & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & zs) === zs && 500 > Je() - $s)
                ? pu(e, 0)
                : (Bs |= n)),
            au(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Tl(e, t)) && (vt(e, t, n), au(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function Pu(e, t) {
          return qe(e, t);
        }
        function Lu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function zu(e, t, n, r) {
          return new Lu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Ru(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Fu(n.children, a, o, t);
              case S:
                (i = 8), (a |= 8);
                break;
              case N:
                return (
                  ((e = zu(12, n, t, 2 | a)).elementType = N), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = zu(13, n, t, a)).elementType = T), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = zu(19, n, t, a)).elementType = P), (e.lanes = o), e
                );
              case R:
                return Mu(n, a, o, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case E:
                      i = 9;
                      break e;
                    case j:
                      i = 11;
                      break e;
                    case L:
                      i = 14;
                      break e;
                    case z:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = zu(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Fu(e, t, n, r) {
          return ((e = zu(7, e, r, t)).lanes = n), e;
        }
        function Mu(e, t, n, r) {
          return (
            ((e = zu(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = zu(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = zu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Au(e, t, n, r, a, l, o, i, s) {
          return (
            (e = new Uu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = zu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          );
        }
        function $u(e) {
          if (!e) return Ea;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (za(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (za(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, l, o, i, s) {
          return (
            ((e = Au(n, r, !0, e, 0, l, 0, i, s)).context = $u(null)),
            (n = e.current),
            ((l = Rl((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ol(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            au(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var a = t.current,
            l = tu(),
            o = nu(a);
          return (
            (n = $u(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Rl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ol(a, t, o)) && (ru(e, a, o, l), Il(e, a, o)),
            o
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) xi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        za(t.type) && Fa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Di(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ni(e, t, n);
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = La(t, ja.current);
              Sl(t, n), (a = So(null, t, r, e, a, n));
              var o = No();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    za(r) ? ((o = !0), Fa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Hl(t, r, e, n),
                    (t = Ti(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    _i(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ei(null, t, r, e, n);
                    break e;
                  case 1:
                    t = ji(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ei(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ji(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  zl(e, t),
                  Ml(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Li(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Li(e, t, r, n, (a = ci(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Jl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  _i(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                _i(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Di(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xl(t, null, r, n)) : _i(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return _i(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _i(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(vl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !Ta.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        i = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Rl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              kl(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          kl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                _i(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Sl(t, n),
                (r = r((a = Nl(a)))),
                (t.flags |= 1),
                _i(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Si(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Vi(e, t),
                (t.tag = 1),
                za(r) ? ((e = !0), Fa(t)) : (e = !1),
                Sl(t, n),
                Wl(t, r, a),
                Hl(t, r, a, n),
                Ti(null, t, r, !0, e, n)
              );
            case 19:
              return Wi(e, t, n);
            case 22:
              return Ni(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Ku =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ('function' === typeof a) {
              var i = a;
              a = function () {
                var e = Hu(o);
                i.call(e);
              };
            }
            Vu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Hu(o);
                    l.call(e);
                  };
                }
                var o = Wu(t, r, e, 0, null, !1, 0, '', Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ('function' === typeof r) {
                var i = r;
                r = function () {
                  var e = Hu(s);
                  i.call(e);
                };
              }
              var s = Au(e, 0, !1, null, 0, !1, 0, '', Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(o);
        }
        (Xu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    au(t, Je()),
                    0 === (6 & Ts) && ((Ws = Je() + 500), $a()));
                }
                break;
              case 13:
                du(function () {
                  var t = Tl(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Tl(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Tl(e, t);
              if (null !== n) ru(n, e, t, tu());
              qu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Nt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((G(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = _a(r);
                      if (!a) throw Error(l(90));
                      q(r), G(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                le(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cu),
          (Te = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, _a, Ce, Ee, cu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(l(299));
            var n = !1,
              r = '',
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Au(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(',')), Error(l(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gu(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = '',
              i = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gu(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gu(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: (e, t, n) => {
        'use strict';
        var r = n(164);
        (t.s = r.createRoot), r.hydrateRoot;
      },
      164: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: (e, t, n) => {
        'use strict';
        var r = n(791),
          a = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      117: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          o = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var _ = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function N(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = '' + t.key),
            t))
              w.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: k.current,
          };
        }
        function C(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function j(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, a, l, o) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = '' === l ? '.' + j(s, 0) : l),
              _(o)
                ? ((a = ''),
                  null != e && (a = e.replace(E, '$&/') + '/'),
                  T(o, t, a, '', function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ''
                          : ('' + o.key).replace(E, '$&/') + '/') +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (l = '' === l ? '.' : l + ':'), _(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + j((i = e[u]), u);
              s += T(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += T((i = i.value), t, a, (c = l + j(i, u++)), o);
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return s;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z = { current: null },
          R = { transition: null },
          O = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = k.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = N),
          (t.createFactory = function (e) {
            var t = N.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (t.useCallback = function (e, t) {
            return z.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return z.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return z.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return z.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return z.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return z.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return z.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return z.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return z.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return z.current.useRef(e);
          }),
          (t.useState = function (e) {
            return z.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return z.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return z.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      791: (e, t, n) => {
        'use strict';
        e.exports = n(117);
      },
      184: (e, t, n) => {
        'use strict';
        e.exports = n(374);
      },
      813: (e, t) => {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), R(w);
            else {
              var t = r(c);
              null !== t && O(_, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              x(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var o = f.callback;
              if ('function' === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var i = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof i
                    ? (f.callback = i)
                    : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && O(_, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          N = null,
          C = -1,
          E = 5,
          j = -1;
        function T() {
          return !(t.unstable_now() - j < E);
        }
        function P() {
          if (null !== N) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = N(!0, e);
            } finally {
              n ? k() : ((S = !1), (N = null));
            }
          } else S = !1;
        }
        if ('function' === typeof b)
          k = function () {
            b(P);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            z = L.port2;
          (L.port1.onmessage = P),
            (k = function () {
              z.postMessage(null);
            });
        } else
          k = function () {
            v(P, 0);
          };
        function R(e) {
          (N = e), S || ((S = !0), k());
        }
        function O(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ('object' === typeof l && null !== l
                ? (l = 'number' === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), O(_, l - o)))
                : ((e.sortIndex = i), n(u, e), m || h || ((m = !0), R(w))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: (e, t, n) => {
        'use strict';
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && 'function' === typeof r.then) return r;
        }
        var l = Object.create(null);
        n.r(l);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var i = 2 & a && r;
          'object' == typeof i && !~e.indexOf(i);
          i = t(i)
        )
          Object.getOwnPropertyNames(i).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(l, o), l;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      'use strict';
      var e,
        t = n(250),
        r = n(791),
        a = n.t(r, 2),
        l = n(164),
        o = n.t(l, 2);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(e || (e = {}));
      const s = 'popstate';
      function u(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e)
          throw new Error(t);
      }
      function c(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          i(
            {
              pathname: 'string' === typeof e ? e : e.pathname,
              search: '',
              hash: '',
            },
            'string' === typeof t ? h(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function h(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function m(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: l = document.defaultView, v5Compat: o = !1 } = a,
          c = l.history,
          h = e.Pop,
          m = null,
          g = v();
        function v() {
          return (c.state || { idx: null }).idx;
        }
        function y() {
          h = e.Pop;
          let t = v(),
            n = null == t ? null : t - g;
          (g = t), m && m({ action: h, location: x.location, delta: n });
        }
        function b(e) {
          let t =
              'null' !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = 'string' === typeof e ? e : p(e);
          return (
            u(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                n
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), c.replaceState(i({}, c.state, { idx: g }), ''));
        let x = {
          get action() {
            return h;
          },
          get location() {
            return t(l, c);
          },
          listen(e) {
            if (m)
              throw new Error('A history only accepts one active listener');
            return (
              l.addEventListener(s, y),
              (m = e),
              () => {
                l.removeEventListener(s, y), (m = null);
              }
            );
          },
          createHref: (e) => n(l, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            h = e.Push;
            let a = f(x.location, t, n);
            r && r(a, t), (g = v() + 1);
            let i = d(a, g),
              s = x.createHref(a);
            try {
              c.pushState(i, '', s);
            } catch (u) {
              if (u instanceof DOMException && 'DataCloneError' === u.name)
                throw u;
              l.location.assign(s);
            }
            o && m && m({ action: h, location: x.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let a = f(x.location, t, n);
            r && r(a, t), (g = v());
            let l = d(a, g),
              i = x.createHref(a);
            c.replaceState(l, '', i),
              o && m && m({ action: h, location: x.location, delta: 0 });
          },
          go: (e) => c.go(e),
        };
        return x;
      }
      var g;
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(g || (g = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function v(e, t, n) {
        void 0 === n && (n = '/');
        let r = L(('string' === typeof t ? h(t) : t).pathname || '/', n);
        if (null == r) return null;
        let a = y(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let l = null;
        for (let o = 0; null == l && o < a.length; ++o) l = j(a[o], P(r));
        return l;
      }
      function y(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = '');
        let a = (e, a, l) => {
          let o = {
            relativePath: void 0 === l ? e.path || '' : l,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith('/') &&
            (u(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          let i = F([r, o.relativePath]),
            s = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".'
            ),
            y(e.children, t, s, i)),
            (null != e.path || e.index) &&
              t.push({ path: i, score: E(i, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of b(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function b(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith('?'),
          l = n.replace(/\?$/, '');
        if (0 === r.length) return a ? [l, ''] : [l];
        let o = b(r.join('/')),
          i = [];
        return (
          i.push(...o.map((e) => ('' === e ? l : [l, e].join('/')))),
          a && i.push(...o),
          i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const x = /^:\w+$/,
        _ = 3,
        w = 2,
        k = 1,
        S = 10,
        N = -2,
        C = (e) => '*' === e;
      function E(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(C) && (r += N),
          t && (r += w),
          n
            .filter((e) => !C(e))
            .reduce((e, t) => e + (x.test(t) ? _ : '' === t ? k : S), r)
        );
      }
      function j(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = '/',
          l = [];
        for (let o = 0; o < n.length; ++o) {
          let e = n[o],
            i = o === n.length - 1,
            s = '/' === a ? t : t.slice(a.length) || '/',
            u = T(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: i },
              s
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          l.push({
            params: r,
            pathname: F([a, u.pathname]),
            pathnameBase: M(F([a, u.pathnameBase])),
            route: c,
          }),
            '/' !== u.pathnameBase && (a = F([a, u.pathnameBase]));
        }
        return l;
      }
      function T(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            c(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".'
            );
            let r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:(\w+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    )
                  );
            e.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
              ? (a += '\\/*$')
              : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
            let l = new RegExp(a, t ? void 0 : 'i');
            return [l, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let l = a[0],
          o = l.replace(/(.)\/+$/, '$1'),
          i = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ('*' === r) {
              let e = i[n] || '';
              o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const s = i[n];
            return (
              (e[r] =
                a && !s
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          c(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ').'
                          ),
                          e
                        );
                      }
                    })(s || '', r)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: o,
          pattern: e,
        };
      }
      function P(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            c(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').'
            ),
            e
          );
        }
      }
      function L(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function z(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function R(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function O(e) {
        return R(e).map((t, n) =>
          n === e.length - 1 ? t.pathname : t.pathnameBase
        );
      }
      function I(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = h(e))
            : ((a = i({}, e)),
              u(
                !a.pathname || !a.pathname.includes('?'),
                z('?', 'pathname', 'search', a)
              ),
              u(
                !a.pathname || !a.pathname.includes('#'),
                z('#', 'pathname', 'hash', a)
              ),
              u(
                !a.search || !a.search.includes('#'),
                z('#', 'search', 'hash', a)
              ));
        let l,
          o = '' === e || '' === a.pathname,
          s = o ? '/' : a.pathname;
        if (null == s) l = n;
        else if (r) {
          let e = t[t.length - 1].replace(/^\//, '').split('/');
          if (s.startsWith('..')) {
            let t = s.split('/');
            for (; '..' === t[0]; ) t.shift(), e.pop();
            a.pathname = t.join('/');
          }
          l = '/' + e.join('/');
        } else {
          let e = t.length - 1;
          if (s.startsWith('..')) {
            let t = s.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join('/');
          }
          l = e >= 0 ? t[e] : '/';
        }
        let c = (function (e, t) {
            void 0 === t && (t = '/');
            let {
                pathname: n,
                search: r = '',
                hash: a = '',
              } = 'string' === typeof e ? h(e) : e,
              l = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e
                            ? n.length > 1 && n.pop()
                            : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: l, search: D(r), hash: B(a) };
          })(a, l),
          d = s && '/' !== s && s.endsWith('/'),
          f = (o || '.' === s) && n.endsWith('/');
        return c.pathname.endsWith('/') || (!d && !f) || (c.pathname += '/'), c;
      }
      const F = (e) => e.join('/').replace(/\/\/+/g, '/'),
        M = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        D = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        B = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function U(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const A = ['post', 'put', 'patch', 'delete'],
        $ = (new Set(A), ['get', ...A]);
      new Set($), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      const V = r.createContext(null);
      const H = r.createContext(null);
      const Q = r.createContext(null);
      const q = r.createContext(null);
      const K = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Y = r.createContext(null);
      function X() {
        return null != r.useContext(q);
      }
      function J() {
        return X() || u(!1), r.useContext(q).location;
      }
      function G(e) {
        r.useContext(Q).static || r.useLayoutEffect(e);
      }
      function Z() {
        let { isDataRoute: e } = r.useContext(K);
        return e
          ? (function () {
              let { router: e } = ue(ie.UseNavigateStable),
                t = de(se.UseNavigateStable),
                n = r.useRef(!1);
              return (
                G(() => {
                  n.current = !0;
                }),
                r.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ('number' === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, W({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              X() || u(!1);
              let e = r.useContext(V),
                { basename: t, navigator: n } = r.useContext(Q),
                { matches: a } = r.useContext(K),
                { pathname: l } = J(),
                o = JSON.stringify(O(a)),
                i = r.useRef(!1);
              G(() => {
                i.current = !0;
              });
              let s = r.useCallback(
                function (r, a) {
                  if ((void 0 === a && (a = {}), !i.current)) return;
                  if ('number' === typeof r) return void n.go(r);
                  let s = I(r, JSON.parse(o), l, 'path' === a.relative);
                  null == e &&
                    '/' !== t &&
                    (s.pathname = '/' === s.pathname ? t : F([t, s.pathname])),
                    (a.replace ? n.replace : n.push)(s, a.state, a);
                },
                [t, n, o, l, e]
              );
              return s;
            })();
      }
      function ee(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { matches: a } = r.useContext(K),
          { pathname: l } = J(),
          o = JSON.stringify(O(a));
        return r.useMemo(
          () => I(e, JSON.parse(o), l, 'path' === n),
          [e, o, l, n]
        );
      }
      function te(t, n, a) {
        X() || u(!1);
        let { navigator: l } = r.useContext(Q),
          { matches: o } = r.useContext(K),
          i = o[o.length - 1],
          s = i ? i.params : {},
          c = (i && i.pathname, i ? i.pathnameBase : '/');
        i && i.route;
        let d,
          f = J();
        if (n) {
          var p;
          let e = 'string' === typeof n ? h(n) : n;
          '/' === c ||
            (null == (p = e.pathname) ? void 0 : p.startsWith(c)) ||
            u(!1),
            (d = e);
        } else d = f;
        let m = d.pathname || '/',
          g = v(t, { pathname: '/' === c ? m : m.slice(c.length) || '/' });
        let y = oe(
          g &&
            g.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: F([
                  c,
                  l.encodeLocation
                    ? l.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? c
                    : F([
                        c,
                        l.encodeLocation
                          ? l.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          o,
          a
        );
        return n && y
          ? r.createElement(
              q.Provider,
              {
                value: {
                  location: W(
                    {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                    },
                    d
                  ),
                  navigationType: e.Pop,
                },
              },
              y
            )
          : y;
      }
      function ne() {
        let e = (function () {
            var e;
            let t = r.useContext(Y),
              n = ce(se.UseRouteError),
              a = de(se.UseRouteError);
            if (t) return t;
            return null == (e = n.errors) ? void 0 : e[a];
          })(),
          t = U(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          l = { padding: '0.5rem', backgroundColor: a };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement('h2', null, 'Unexpected Application Error!'),
          r.createElement('h3', { style: { fontStyle: 'italic' } }, t),
          n ? r.createElement('pre', { style: l }, n) : null,
          null
        );
      }
      const re = r.createElement(ne, null);
      class ae extends r.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            'React Router caught the following error during render',
            e,
            t
          );
        }
        render() {
          return this.state.error
            ? r.createElement(
                K.Provider,
                { value: this.props.routeContext },
                r.createElement(Y.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function le(e) {
        let { routeContext: t, match: n, children: a } = e,
          l = r.useContext(V);
        return (
          l &&
            l.static &&
            l.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = n.route.id),
          r.createElement(K.Provider, { value: t }, a)
        );
      }
      function oe(e, t, n) {
        var a;
        if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
          var l;
          if (null == (l = n) || !l.errors) return null;
          e = n.matches;
        }
        let o = e,
          i = null == (a = n) ? void 0 : a.errors;
        if (null != i) {
          let e = o.findIndex(
            (e) => e.route.id && (null == i ? void 0 : i[e.route.id])
          );
          e >= 0 || u(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
        }
        return o.reduceRight((e, a, l) => {
          let s = a.route.id ? (null == i ? void 0 : i[a.route.id]) : null,
            u = null;
          n && (u = a.route.errorElement || re);
          let c = t.concat(o.slice(0, l + 1)),
            d = () => {
              let t;
              return (
                (t = s
                  ? u
                  : a.route.Component
                  ? r.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                r.createElement(le, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === l)
            ? r.createElement(ae, {
                location: n.location,
                revalidation: n.revalidation,
                component: u,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      var ie = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(ie || {}),
        se = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(se || {});
      function ue(e) {
        let t = r.useContext(V);
        return t || u(!1), t;
      }
      function ce(e) {
        let t = r.useContext(H);
        return t || u(!1), t;
      }
      function de(e) {
        let t = (function (e) {
            let t = r.useContext(K);
            return t || u(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || u(!1), n.route.id;
      }
      a.startTransition;
      function fe(e) {
        let { to: t, replace: n, state: a, relative: l } = e;
        X() || u(!1);
        let { matches: o } = r.useContext(K),
          { pathname: i } = J(),
          s = Z(),
          c = I(t, O(o), i, 'path' === l),
          d = JSON.stringify(c);
        return (
          r.useEffect(
            () => s(JSON.parse(d), { replace: n, state: a, relative: l }),
            [s, d, l, n, a]
          ),
          null
        );
      }
      function pe(e) {
        u(!1);
      }
      function he(t) {
        let {
          basename: n = '/',
          children: a = null,
          location: l,
          navigationType: o = e.Pop,
          navigator: i,
          static: s = !1,
        } = t;
        X() && u(!1);
        let c = n.replace(/^\/*/, '/'),
          d = r.useMemo(
            () => ({ basename: c, navigator: i, static: s }),
            [c, i, s]
          );
        'string' === typeof l && (l = h(l));
        let {
            pathname: f = '/',
            search: p = '',
            hash: m = '',
            state: g = null,
            key: v = 'default',
          } = l,
          y = r.useMemo(() => {
            let e = L(f, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: p,
                    hash: m,
                    state: g,
                    key: v,
                  },
                  navigationType: o,
                };
          }, [c, f, p, m, g, v, o]);
        return null == y
          ? null
          : r.createElement(
              Q.Provider,
              { value: d },
              r.createElement(q.Provider, { children: a, value: y })
            );
      }
      function me(e) {
        let { children: t, location: n } = e;
        return te(ge(t), n);
      }
      new Promise(() => {});
      r.Component;
      function ge(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          r.Children.forEach(e, (e, a) => {
            if (!r.isValidElement(e)) return;
            let l = [...t, a];
            if (e.type === r.Fragment)
              return void n.push.apply(n, ge(e.props.children, l));
            e.type !== pe && u(!1), e.props.index && e.props.children && u(!1);
            let o = {
              id: e.props.id || l.join('-'),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (o.children = ge(e.props.children, l)),
              n.push(o);
          }),
          n
        );
      }
      function ve() {
        return (
          (ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ve.apply(this, arguments)
        );
      }
      function ye(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function be(e) {
        return (
          void 0 === e && (e = ''),
          new URLSearchParams(
            'string' === typeof e ||
            Array.isArray(e) ||
            e instanceof URLSearchParams
              ? e
              : Object.keys(e).reduce((t, n) => {
                  let r = e[n];
                  return t.concat(
                    Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]
                  );
                }, [])
          )
        );
      }
      new Set([
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ]);
      const xe = [
          'onClick',
          'relative',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
          'preventScrollReset',
          'unstable_viewTransition',
        ],
        _e = [
          'aria-current',
          'caseSensitive',
          'className',
          'end',
          'style',
          'to',
          'unstable_viewTransition',
          'children',
        ];
      const we = r.createContext({ isTransitioning: !1 });
      new Map();
      const ke = a.startTransition;
      o.flushSync;
      function Se(e) {
        let { basename: t, children: n, future: a, window: l } = e,
          o = r.useRef();
        var i;
        null == o.current &&
          (o.current =
            (void 0 === (i = { window: l, v5Compat: !0 }) && (i = {}),
            m(
              function (e, t) {
                let {
                  pathname: n = '/',
                  search: r = '',
                  hash: a = '',
                } = h(e.location.hash.substr(1));
                return (
                  n.startsWith('/') || n.startsWith('.') || (n = '/' + n),
                  f(
                    '',
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || 'default'
                  )
                );
              },
              function (e, t) {
                let n = e.document.querySelector('base'),
                  r = '';
                if (n && n.getAttribute('href')) {
                  let t = e.location.href,
                    n = t.indexOf('#');
                  r = -1 === n ? t : t.slice(0, n);
                }
                return r + '#' + ('string' === typeof t ? t : p(t));
              },
              function (e, t) {
                c(
                  '/' === e.pathname.charAt(0),
                  'relative pathnames are not supported in hash history.push(' +
                    JSON.stringify(t) +
                    ')'
                );
              },
              i
            )));
        let s = o.current,
          [u, d] = r.useState({ action: s.action, location: s.location }),
          { v7_startTransition: g } = a || {},
          v = r.useCallback(
            (e) => {
              g && ke ? ke(() => d(e)) : d(e);
            },
            [d, g]
          );
        return (
          r.useLayoutEffect(() => s.listen(v), [s, v]),
          r.createElement(he, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: s,
          })
        );
      }
      const Ne =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        Ce = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ee = r.forwardRef(function (e, t) {
          let n,
            {
              onClick: a,
              relative: l,
              reloadDocument: o,
              replace: i,
              state: s,
              target: c,
              to: d,
              preventScrollReset: f,
              unstable_viewTransition: h,
            } = e,
            m = ye(e, xe),
            { basename: g } = r.useContext(Q),
            v = !1;
          if ('string' === typeof d && Ce.test(d) && ((n = d), Ne))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith('//') ? new URL(e.protocol + d) : new URL(d),
                n = L(t.pathname, g);
              t.origin === e.origin && null != n
                ? (d = n + t.search + t.hash)
                : (v = !0);
            } catch (x) {}
          let y = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              X() || u(!1);
              let { basename: a, navigator: l } = r.useContext(Q),
                { hash: o, pathname: i, search: s } = ee(e, { relative: n }),
                c = i;
              return (
                '/' !== a && (c = '/' === i ? a : F([a, i])),
                l.createHref({ pathname: c, search: s, hash: o })
              );
            })(d, { relative: l }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: a,
                  state: l,
                  preventScrollReset: o,
                  relative: i,
                  unstable_viewTransition: s,
                } = void 0 === t ? {} : t,
                u = Z(),
                c = J(),
                d = ee(e, { relative: i });
              return r.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : p(c) === p(d);
                    u(e, {
                      replace: n,
                      state: l,
                      preventScrollReset: o,
                      relative: i,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, a, l, n, e, o, i, s]
              );
            })(d, {
              replace: i,
              state: s,
              target: c,
              preventScrollReset: f,
              relative: l,
              unstable_viewTransition: h,
            });
          return r.createElement(
            'a',
            ve({}, m, {
              href: n || y,
              onClick:
                v || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: c,
            })
          );
        });
      const je = r.forwardRef(function (e, t) {
        let {
            'aria-current': n = 'page',
            caseSensitive: a = !1,
            className: l = '',
            end: o = !1,
            style: i,
            to: s,
            unstable_viewTransition: c,
            children: d,
          } = e,
          f = ye(e, _e),
          p = ee(s, { relative: f.relative }),
          h = J(),
          m = r.useContext(H),
          { navigator: g } = r.useContext(Q),
          v =
            null != m &&
            (function (e, t) {
              void 0 === t && (t = {});
              let n = r.useContext(we);
              null == n && u(!1);
              let { basename: a } = Le(Te.useViewTransitionState),
                l = ee(e, { relative: t.relative });
              if (!n.isTransitioning) return !1;
              let o =
                  L(n.currentLocation.pathname, a) ||
                  n.currentLocation.pathname,
                i = L(n.nextLocation.pathname, a) || n.nextLocation.pathname;
              return null != T(l.pathname, i) || null != T(l.pathname, o);
            })(p) &&
            !0 === c,
          y = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
          b = h.pathname,
          x =
            m && m.navigation && m.navigation.location
              ? m.navigation.location.pathname
              : null;
        a ||
          ((b = b.toLowerCase()),
          (x = x ? x.toLowerCase() : null),
          (y = y.toLowerCase()));
        const _ = '/' !== y && y.endsWith('/') ? y.length - 1 : y.length;
        let w,
          k = b === y || (!o && b.startsWith(y) && '/' === b.charAt(_)),
          S =
            null != x &&
            (x === y || (!o && x.startsWith(y) && '/' === x.charAt(y.length))),
          N = { isActive: k, isPending: S, isTransitioning: v },
          C = k ? n : void 0;
        w =
          'function' === typeof l
            ? l(N)
            : [
                l,
                k ? 'active' : null,
                S ? 'pending' : null,
                v ? 'transitioning' : null,
              ]
                .filter(Boolean)
                .join(' ');
        let E = 'function' === typeof i ? i(N) : i;
        return r.createElement(
          Ee,
          ve({}, f, {
            'aria-current': C,
            className: w,
            ref: t,
            style: E,
            to: s,
            unstable_viewTransition: c,
          }),
          'function' === typeof d ? d(N) : d
        );
      });
      var Te, Pe;
      function Le(e) {
        let t = r.useContext(V);
        return t || u(!1), t;
      }
      function ze(e) {
        let t = r.useRef(be(e)),
          n = r.useRef(!1),
          a = J(),
          l = r.useMemo(
            () =>
              (function (e, t) {
                let n = be(e);
                return (
                  t &&
                    t.forEach((e, r) => {
                      n.has(r) ||
                        t.getAll(r).forEach((e) => {
                          n.append(r, e);
                        });
                    }),
                  n
                );
              })(a.search, n.current ? null : t.current),
            [a.search]
          ),
          o = Z(),
          i = r.useCallback(
            (e, t) => {
              const r = be('function' === typeof e ? e(l) : e);
              (n.current = !0), o('?' + r, t);
            },
            [o, l]
          );
        return [l, i];
      }
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(Te || (Te = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(Pe || (Pe = {}));
      var Re = n(694),
        Oe = n.n(Re);
      const Ie = './api/products.json',
        Fe = async () => {
          try {
            const e = await fetch(Ie),
              t = await e.json();
            return await new Promise((e) => setTimeout(e, 100)), t;
          } catch (e) {
            throw (console.error('Error:', e), e);
          }
        },
        Me = async (e) => {
          try {
            const t = await fetch(Ie),
              n = await t.json();
            await new Promise((e) => setTimeout(e, 100));
            return n.filter((t) => t.type === e);
          } catch (t) {
            throw (console.error('Error:', t), t);
          }
        };
      function De(e, t) {
        const [n, a] = (0, r.useState)(() => {
          const n = localStorage.getItem(e);
          return null != n ? JSON.parse(n) : 'function' === typeof t ? t() : t;
        });
        return (
          (0, r.useEffect)(() => {
            localStorage.setItem(e, JSON.stringify(n));
          }, [e, n]),
          [n, a]
        );
      }
      var Be = n(184);
      const Ue = (0, r.createContext)(void 0),
        Ae = () => {
          const e = (0, r.useContext)(Ue);
          if (!e)
            throw new Error(
              'useMyContext must be used within a MyContextProvider'
            );
          return e;
        },
        $e = (e) => {
          let { children: t } = e;
          const [n, a] = (0, r.useState)([]),
            [l, o] = De('favourites', []),
            [i, s] = De('cart', []);
          (0, r.useEffect)(() => {
            (async () => {
              const e = await Fe();
              a(() => e);
            })();
          }, []);
          const u = (e) => {
              const t = i.filter((t) => t.id !== e);
              s(t);
            },
            [c, d] = (0, r.useState)(!1);
          return (0, Be.jsx)(Ue.Provider, {
            value: {
              products: n,
              favourites: l,
              cart: i,
              toggleToFavourites: (e) => {
                if (-1 === l.findIndex((t) => t.id === e)) {
                  const t = n.find((t) => t.id === e);
                  t && o((e) => [...e, t]);
                } else o((t) => t.filter((t) => t.id !== e));
              },
              toggleToCart: (e) => {
                if (-1 === i.findIndex((t) => t.product.id === e)) {
                  const t = n.find((t) => t.id === e);
                  t &&
                    s((e) => [
                      ...e,
                      { id: new Date().getTime(), product: t, quantity: 1 },
                    ]);
                } else s((t) => t.filter((t) => t.product.id !== e));
              },
              isInFavourites: (e) => -1 !== l.findIndex((t) => t.id === e),
              isInCart: (e) => -1 !== i.findIndex((t) => t.product.id === e),
              increaseQuantityInCart: (e) => {
                const t = i.map((t) =>
                  t.id === e ? { ...t, quantity: t.quantity + 1 } : t
                );
                s(t);
              },
              removeFromCart: u,
              decreaseQuantityInCart: (e) => {
                const t = i
                  .map((t) => {
                    if (t.id === e) {
                      const n = t.quantity - 1;
                      return 0 === n ? (u(e), null) : { ...t, quantity: n };
                    }
                    return t;
                  })
                  .filter((e) => null !== e);
                s(t);
              },
              error: c,
              handleError: () => {
                d(!0), setTimeout(() => d(!1), 5e3);
              },
            },
            children: t,
          });
        };
      let We = (function (e) {
          return (
            (e.Phones = 'phone'),
            (e.Tablets = 'tablet'),
            (e.Accessories = 'accessorie'),
            e
          );
        })({}),
        Ve = (function (e) {
          return (
            (e.Phones = 'phones'),
            (e.Tablets = 'tablets'),
            (e.Accessories = 'accessories'),
            (e.Favorites = 'favorites'),
            (e.Cart = 'cart'),
            e
          );
        })({});
      const He = () => {
          const { favourites: e, cart: t } = Ae(),
            n = J().pathname.slice(1),
            [a, l] = (0, r.useState)(''),
            [o, i] = ze(),
            s = (e) => (t) => {
              let { isActive: n } = t;
              return Oe()(e, { 'navbar__link--item-active': n });
            };
          return (
            (0, r.useEffect)(() => {
              l(''), o.delete('query'), i(o);
            }, [n]),
            (0, Be.jsxs)('header', {
              children: [
                (0, Be.jsxs)('div', {
                  className: 'navbar__left',
                  children: [
                    (0, Be.jsx)(je, {
                      to: '/',
                      className: 'navbar__logo',
                      children: (0, Be.jsx)('img', {
                        alt: 'log',
                        src: './img/logo.svg',
                      }),
                    }),
                    (0, Be.jsxs)('nav', {
                      className: 'navbar__link',
                      children: [
                        (0, Be.jsx)(je, {
                          to: '/',
                          className: s('navbar__link--item SmallText'),
                          children: 'home',
                        }),
                        (0, Be.jsx)(je, {
                          to: '/phones',
                          className: s('navbar__link--item SmallText'),
                          children: 'phones',
                        }),
                        (0, Be.jsx)(je, {
                          to: '/tablets',
                          className: s('navbar__link--item SmallText'),
                          children: 'tablets',
                        }),
                        (0, Be.jsx)(je, {
                          to: '/accessories',
                          className: s('navbar__link--item SmallText'),
                          children: 'accessories',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'navbar__right',
                  children: [
                    (n === Ve.Phones ||
                      n === Ve.Tablets ||
                      n === Ve.Accessories ||
                      n === Ve.Favorites) &&
                      (0, Be.jsxs)('div', {
                        className: 'navbar__search',
                        children: [
                          (0, Be.jsx)('input', {
                            type: 'text',
                            className: 'navbar__search--input',
                            placeholder: 'Search in '.concat(n, '...'),
                            value: a,
                            onChange: (e) => {
                              const t = e.target.value;
                              l(t),
                                t ? o.set('query', t) : o.delete('query'),
                                i(o);
                            },
                          }),
                          a && a.length > 0
                            ? (0, Be.jsx)('button', {
                                className: 'navbar__search--input-item-clear',
                                onClick: () => {
                                  l(''), o.delete('query'), i(o);
                                },
                                'aria-label': 'clear',
                                type: 'button',
                                'data-cy': 'searchDelete',
                              })
                            : (0, Be.jsx)('div', {
                                className: 'navbar__search--input-item-loop',
                              }),
                        ],
                      }),
                    (0, Be.jsxs)(je, {
                      to: '/favorites',
                      className: s('navbar__favourites navbar__link--item'),
                      children: [
                        (0, Be.jsx)('img', {
                          alt: 'favorites',
                          src: './img/favourites.svg',
                          className: 'navbar__favourites--image',
                        }),
                        e.length > 0 &&
                          (0, Be.jsx)('span', {
                            className: 'navbar__favourites--image-counter',
                            children: e.length,
                          }),
                      ],
                    }),
                    (0, Be.jsxs)(je, {
                      to: '/cart',
                      className: s('navbar__cart navbar__link--item'),
                      children: [
                        (0, Be.jsx)('img', {
                          alt: 'cart',
                          src: './img/cart.svg',
                          className: 'navbar__favourites--image',
                        }),
                        t.length > 0 &&
                          (0, Be.jsx)('span', {
                            className: 'navbar__favourites--image-counter',
                            children: t.length,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Qe = (e) => {
          let { product: t, ProductSlider: n } = e;
          const {
              id: r,
              name: a,
              imageUrl: l,
              price: o,
              discount: i,
              screen: s,
              capacity: u,
              ram: c,
              type: d,
            } = t,
            {
              toggleToCart: f,
              toggleToFavourites: p,
              isInFavourites: h,
              isInCart: m,
            } = Ae();
          return (0, Be.jsxs)(
            'li',
            {
              className: 'productCard',
              style: n,
              children: [
                (0, Be.jsxs)(Ee, {
                  to: '/'.concat(d, 's/').concat(r),
                  children: [
                    (0, Be.jsx)('img', {
                      className: 'productCard__image',
                      alt: r,
                      src: l,
                    }),
                    (0, Be.jsx)('p', {
                      className: 'productCard__name BodyText',
                      children: a,
                    }),
                    (0, Be.jsx)('h2', {
                      className: 'productCard__price h2',
                      children: ((e, t) => {
                        if (t <= 0)
                          return (0, Be.jsx)(Be.Fragment, {
                            children: '$'.concat(e),
                          });
                        const n = ((e * (100 - i)) / 100).toFixed(0);
                        return (0, Be.jsxs)(Be.Fragment, {
                          children: [
                            '$'.concat(n),
                            (0, Be.jsx)('span', {
                              className: 'productCard__price-fullPrice h2',
                              children: '$'.concat(e),
                            }),
                          ],
                        });
                      })(o, i),
                    }),
                  ],
                }),
                (0, Be.jsx)('div', { className: 'productCard__line' }),
                (0, Be.jsxs)('div', {
                  className: 'productCard__details',
                  children: [
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-label SmallText',
                      children: 'Screen',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-value SmallText',
                      children: s,
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'productCard__details',
                  children: [
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-label SmallText',
                      children: 'Capacity',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-value SmallText',
                      children: u,
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'productCard__details',
                  children: [
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-label SmallText',
                      children: 'RAM',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'productCard__details-value SmallText',
                      children: c,
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'productCard__buttons',
                  children: [
                    (0, Be.jsx)('button', {
                      type: 'button',
                      className: Oe()('productCard__buttons-cart', 'buttons', {
                        'productCard__buttons-cart--addedToCart': m(r),
                      }),
                      onClick: () => f(r),
                      children: m(r) ? 'Added to cart' : 'Add to cart',
                    }),
                    (0, Be.jsx)('button', {
                      type: 'button',
                      className: 'productCard__buttons-favourites buttons',
                      onClick: () => p(r),
                      'data-cy': 'addToFavorite',
                      children: h(r)
                        ? (0, Be.jsx)('img', {
                            alt: 'filledFavourites',
                            src: './img/filledFavourites.svg',
                          })
                        : (0, Be.jsx)('img', {
                            alt: 'favourites',
                            src: './img/favourites.svg',
                          }),
                    }),
                  ],
                }),
              ],
            },
            r
          );
        },
        qe = (e) => {
          let { products: t, title: n } = e;
          const [a, l] = (0, r.useState)(0),
            o = {
              transform: 'translateX('.concat(288 * -a, 'px)'),
              transition: 'transform 300ms ease-in-out',
            },
            i = () => {
              const e = t.length - 4;
              return !(a < e);
            },
            s = () => 0 === a;
          return (0, Be.jsxs)('div', {
            className: 'slider__header',
            children: [
              (0, Be.jsx)('h1', {
                className: 'slider__header--title h1',
                children: n,
              }),
              (0, Be.jsx)('button', {
                type: 'button',
                className: Oe()(
                  'slider__header--arrow buttons buttons__arrow--left',
                  { 'buttons__arrow--left-disabled': s() }
                ),
                onClick: () => {
                  const e = a - 1;
                  l(e < 0 ? 0 : e);
                },
                'aria-label': 'arrow--left',
                disabled: s(),
              }),
              (0, Be.jsx)('button', {
                type: 'button',
                className: Oe()(
                  'slider__header--arrow buttons buttons__arrow--right',
                  { 'buttons__arrow--right-disabled': i() }
                ),
                onClick: () => {
                  const e = t.length - 4,
                    n = a + 1;
                  l(n > e ? e : n);
                },
                'aria-label': 'arrow--right',
                disabled: i(),
              }),
              (0, Be.jsx)('ul', {
                className: 'slider',
                'data-cy': 'cardsContainer',
                children: t.map((e) =>
                  (0, Be.jsx)(Qe, { product: e, ProductSlider: o }, e.id)
                ),
              }),
            ],
          });
        },
        Ke = (e) => {
          let { products: t } = e;
          const [n, a] = (0, r.useState)(0),
            [l, o] = (0, r.useState)(0),
            [i, s] = (0, r.useState)(0);
          return (
            (0, r.useEffect)(() => {
              a(() => t.filter((e) => e.type === We.Phones).length),
                o(() => t.filter((e) => e.type === We.Tablets).length),
                s(() => t.filter((e) => e.type === We.Accessories).length);
            }, [t]),
            (0, Be.jsxs)('div', {
              className: 'shopBy',
              children: [
                (0, Be.jsx)('h1', {
                  className: 'shopBy__title h1',
                  children: 'Shop by category',
                }),
                (0, Be.jsxs)('div', {
                  className: 'shopBy__container',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/phones',
                      className:
                        'shopBy__container--link shopBy__container--link-phones',
                      children: (0, Be.jsx)('img', {
                        alt: 'Phones',
                        src: 'img/category-phones.png',
                        className: 'shopBy__container--link-image-phones',
                      }),
                    }),
                    (0, Be.jsx)('h3', {
                      className: 'shopBy__container--categoryTitle h3',
                      children: 'Mobile Phones',
                    }),
                    (0, Be.jsx)('p', {
                      className: 'shopBy__container--description BodyText',
                      children: ''.concat(n, ' models'),
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'shopBy__container',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/tablets',
                      className:
                        'shopBy__container--link shopBy__container--link-tablets',
                      children: (0, Be.jsx)('img', {
                        alt: 'Tablets',
                        src: 'img/category-tablets.png',
                        className: 'shopBy__container--link-image-tablets ',
                      }),
                    }),
                    (0, Be.jsx)('h3', {
                      className: 'shopBy__container--categoryTitle h3',
                      children: 'Tablets',
                    }),
                    (0, Be.jsx)('p', {
                      className: 'shopBy__container--description BodyText',
                      children: ''.concat(l, ' models'),
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'shopBy__container',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/accessories',
                      className:
                        'shopBy__container--link shopBy__container--link-accessories',
                      children: (0, Be.jsx)('img', {
                        alt: 'Accessories',
                        src: 'img/category-accessories.png',
                        className: 'shopBy__container--link-image-accessories',
                      }),
                    }),
                    (0, Be.jsx)('h3', {
                      className: 'shopBy__container--categoryTitle h3',
                      children: 'Accessories',
                    }),
                    (0, Be.jsx)('p', {
                      className: 'shopBy__container--description BodyText',
                      children: ''.concat(i, ' models'),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Ye = () => {
          const [e, t] = (0, r.useState)(0),
            [n, a] = (0, r.useState)(),
            l = {
              transform: 'translateX('.concat(100 * -e, '%)'),
              transition: 'transform 500ms ease-in-out',
            },
            o = () => {
              t((e) => (e + 1 > 2 ? 0 : e + 1));
            },
            i = () => {
              const e = setInterval(() => {
                o();
              }, 5e3);
              a(() => e);
            };
          (0, r.useEffect)(
            () => (
              i(),
              () => {
                n && clearInterval(n);
              }
            ),
            []
          );
          return (0, Be.jsxs)('div', {
            className: 'banner',
            children: [
              (0, Be.jsx)('button', {
                type: 'button',
                className:
                  'buttons banner--arrow banner--arrow-left buttons__arrow--left',
                onClick: () => {
                  clearInterval(n), t((e) => (e - 1 < 0 ? 2 : e - 1)), i();
                },
                'aria-label': 'arrow--left',
              }),
              (0, Be.jsxs)('div', {
                className: 'banner--banner',
                children: [
                  (0, Be.jsx)('span', {
                    className: 'banner--banner--item',
                    style: l,
                    children: (0, Be.jsx)(Ee, {
                      to: '/phones',
                      children: (0, Be.jsx)('img', {
                        src: 'img/banner-phones.png',
                        alt: 'Banner Phones',
                        className: 'banner--banner--item-image',
                      }),
                    }),
                  }),
                  (0, Be.jsx)('span', {
                    className: 'banner--banner--item',
                    style: l,
                    children: (0, Be.jsx)(Ee, {
                      to: '/tablets',
                      children: (0, Be.jsx)('img', {
                        src: 'img/banner-tablets.png',
                        alt: 'Banner Tablets',
                        className: 'banner--banner--item-image',
                      }),
                    }),
                  }),
                  (0, Be.jsx)('span', {
                    className: 'banner--banner--item',
                    style: l,
                    children: (0, Be.jsx)(Ee, {
                      to: '/accessories',
                      children: (0, Be.jsx)('img', {
                        src: 'img/banner-accessories.png',
                        alt: 'Banner Accessories',
                        className: 'banner--banner--item-image',
                      }),
                    }),
                  }),
                ],
              }),
              (0, Be.jsx)('button', {
                type: 'button',
                className:
                  'banner--arrow banner--arrow-right buttons buttons__arrow--right',
                onClick: () => {
                  clearInterval(n), o(), i();
                },
                'aria-label': 'arrow--right',
              }),
              (0, Be.jsxs)('div', {
                className: 'banner--counter',
                children: [
                  (0, Be.jsx)('span', {
                    className: Oe()('banner--counter-indicator', {
                      'banner--counter-indicator-active': 0 === e,
                    }),
                  }),
                  (0, Be.jsx)('span', {
                    className: Oe()('banner--counter-indicator', {
                      'banner--counter-indicator-active': 1 === e,
                    }),
                  }),
                  (0, Be.jsx)('span', {
                    className: Oe()('banner--counter-indicator', {
                      'banner--counter-indicator-active': 2 === e,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Xe = () => {
          const { products: e } = Ae(),
            [t, n] = (0, r.useState)([]),
            [a, l] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              n(() =>
                e
                  .filter((e) => e.discount > 0)
                  .sort(
                    (e, t) =>
                      (t.price * t.discount) / 100 -
                      (e.price * e.discount) / 100
                  )
              ),
                l(() =>
                  e
                    .filter((e) => e.discount <= 0)
                    .sort((e, t) => t.price - e.price)
                );
            }, [e]),
            (0, Be.jsxs)('div', {
              className: 'home',
              children: [
                (0, Be.jsx)(Ye, {}),
                (0, Be.jsx)(qe, { products: t, title: 'Hot prices' }),
                (0, Be.jsx)('div', {
                  'data-cy': 'categoryLinksContainer',
                  children: (0, Be.jsx)(Ke, { products: e }),
                }),
                (0, Be.jsx)(qe, { products: a, title: 'Brand new models' }),
              ],
            })
          );
        },
        Je = () =>
          (0, Be.jsxs)('footer', {
            className: 'footer',
            children: [
              (0, Be.jsx)(Ee, {
                to: '/',
                className: 'footer__logo',
                children: (0, Be.jsx)('img', {
                  alt: 'log',
                  src: './img/logo.svg',
                }),
              }),
              (0, Be.jsxs)('div', {
                className: 'footer__links',
                children: [
                  (0, Be.jsx)('a', {
                    href: 'https://github.com/Kozubowicz/react_phone-catalog',
                    className: 'footer__links--item Uppercase',
                    children: 'Github',
                  }),
                  (0, Be.jsx)('a', {
                    href: '/#',
                    className: 'footer__links--item Uppercase',
                    children: 'Contacts',
                  }),
                  (0, Be.jsx)('a', {
                    href: '/#',
                    className: 'footer__links--item Uppercase',
                    children: 'rights',
                  }),
                ],
              }),
              (0, Be.jsx)('span', {
                className: 'footer__back--label SmallText',
                children: 'Back to top',
              }),
              (0, Be.jsx)('button', {
                type: 'button',
                className: 'footer__back--button buttons',
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
                children: (0, Be.jsx)('img', {
                  alt: 'arrowTop',
                  src: './img/arrowRight.svg',
                  className: 'footer__back--button-image',
                }),
              }),
            ],
          }),
        Ge = (e) => {
          let { maxPages: t, curentPage: n, handleChanePage: r } = e;
          const a = () => !(n < t),
            l = () => !(n > 1);
          return (0, Be.jsxs)('div', {
            className: 'product__buttons',
            'data-cy': 'pagination',
            children: [
              (0, Be.jsx)('button', {
                type: 'button',
                className: Oe()('buttons buttons__arrow--left', {
                  'buttons__arrow--left-disabled': l(),
                }),
                'data-cy': 'paginationLeft',
                onClick: () => r(n - 1),
                disabled: l(),
                'aria-label': 'arrow--left',
              }),
              (() => {
                const e = [];
                for (let l = 1; l <= t; l += 1)
                  e.push(
                    (0, Be.jsx)(
                      'button',
                      {
                        type: 'button',
                        className: Oe()('buttons', {
                          buttons__page: ((a = l), a === n),
                        }),
                        'data-cy': 'paginationRight',
                        onClick: () => r(l),
                        children: l,
                      },
                      l
                    )
                  );
                var a;
                return e;
              })(),
              (0, Be.jsx)('button', {
                type: 'button',
                className: Oe()('buttons buttons__arrow--right', {
                  'buttons__arrow--right-disabled': a(),
                }),
                'data-cy': 'paginationRight',
                onClick: () => r(n + 1),
                disabled: a(),
                'aria-label': 'arrow--right',
              }),
            ],
          });
        },
        Ze = () =>
          (0, Be.jsx)('h1', {
            className: 'page__title h1',
            children: 'There is not search results',
          });
      let et = (function (e) {
          return (
            (e.Newest = 'age'),
            (e.Alphabetically = 'name'),
            (e.Cheapest = 'price'),
            e
          );
        })({}),
        tt = (function (e) {
          return (
            (e.Default = '4'), (e.I8 = '8'), (e.I16 = '16'), (e.IAll = 'all'), e
          );
        })({});
      const nt = (e) => {
          let { products: t } = e;
          const [n, a] = ze(),
            l = n.get('query'),
            [o, i] = (0, r.useState)(n.get('sort') || et.Newest),
            [s, u] = (0, r.useState)(n.get('perPage') || tt.Default),
            [c, d] = (0, r.useState)(Number(n.get('page') || 1)),
            [f, p] = (0, r.useState)([]),
            [h, m] = (0, r.useState)(0);
          return (
            (0, r.useEffect)(() => {
              d(() => 1), n.delete('page'), a(n);
            }, [l]),
            (0, r.useEffect)(() => {
              let e = [...t];
              switch (
                (l &&
                  (e = e.filter((e) =>
                    e.name.toLowerCase().includes(l.toLocaleLowerCase())
                  )),
                o)
              ) {
                case et.Alphabetically:
                  e = e.sort((e, t) => e.name.localeCompare(t.name));
                  break;
                case et.Cheapest:
                  e = e.sort(
                    (e, t) =>
                      e.price -
                      (e.price * e.discount) / 100 -
                      (t.price - (t.price * t.discount) / 100)
                  );
                  break;
                default:
                  e = e.sort((e, t) => e.age - t.age);
              }
              if ('all' === s) p(() => e), m(() => 0);
              else {
                const t = Number(s);
                p(() => e.slice((c - 1) * t, c * t)),
                  m(() => Math.ceil(e.length / t));
              }
            }, [t, n]),
            (0, Be.jsxs)('div', {
              className: 'product',
              children: [
                (0, Be.jsx)('p', {
                  className: 'product__description BodyText',
                  children: ''.concat(
                    null === t || void 0 === t ? void 0 : t.length,
                    ' models'
                  ),
                }),
                (0, Be.jsxs)('div', {
                  className: 'product__selects',
                  children: [
                    (0, Be.jsxs)('label', {
                      className:
                        'product__selects--sort-by product__selects--label SmallText',
                      children: [
                        'Sort by',
                        (0, Be.jsxs)('select', {
                          className:
                            'product__selects--sort-select ButtonsText selects',
                          onChange: (e) => {
                            const t = e.target.value;
                            t &&
                              (i(() => t),
                              d(() => 1),
                              n.set('sort', t),
                              n.delete('page'),
                              a(n));
                          },
                          value: o,
                          children: [
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: et.Newest,
                              children: 'Newest',
                            }),
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: et.Alphabetically,
                              children: 'Alphabetically',
                            }),
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: et.Cheapest,
                              children: 'Cheapest',
                            }),
                          ],
                        }),
                        (0, Be.jsx)('span', { className: 'selects--icon' }),
                      ],
                    }),
                    (0, Be.jsxs)('label', {
                      className:
                        'product__selects--sort-items product__selects--label SmallText',
                      children: [
                        'Items on page',
                        (0, Be.jsxs)('select', {
                          className:
                            'product__selects--sort-select ButtonsText selects',
                          onChange: (e) => {
                            const t = e.target.value;
                            t &&
                              (u(() => t),
                              d(() => 1),
                              n.set('perPage', t),
                              n.delete('page'),
                              a(n));
                          },
                          value: s,
                          children: [
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: tt.Default,
                              children: tt.Default,
                            }),
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: tt.I8,
                              children: tt.I8,
                            }),
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: tt.I16,
                              children: tt.I16,
                            }),
                            (0, Be.jsx)('option', {
                              className: 'selects--option BodyText',
                              value: tt.IAll,
                              children: tt.IAll,
                            }),
                          ],
                        }),
                        (0, Be.jsx)('span', { className: 'selects--icon' }),
                      ],
                    }),
                  ],
                }),
                f.length > 0
                  ? (0, Be.jsx)('ul', {
                      className: 'product__list',
                      'data-cy': 'productList',
                      children:
                        f &&
                        f.map((e) => (0, Be.jsx)(Qe, { product: e }, e.id)),
                    })
                  : (0, Be.jsx)(Ze, {}),
                h > 1 &&
                  (0, Be.jsx)(Ge, {
                    maxPages: h,
                    curentPage: c,
                    handleChanePage: (e) => {
                      d(() => e), n.set('page', e.toString()), a(n);
                    },
                  }),
              ],
            })
          );
        },
        rt = () =>
          (0, Be.jsx)('div', {
            className: 'Loader',
            'data-cy': 'loader',
            children: (0, Be.jsx)('div', { className: 'Loader__content' }),
          }),
        at = (e) => {
          let { title: t } = e;
          return (0, Be.jsx)('h1', {
            className: 'page__title h1',
            children: ''.concat(t, ' not found'),
          });
        },
        lt = () => {
          const [e, t] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                const e = await Me(We.Phones);
                t(() => e);
              })();
            }, []),
            (0, Be.jsxs)('div', {
              className: 'page',
              children: [
                (0, Be.jsxs)('div', {
                  className: 'page__path',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/',
                      className: 'page__path--home',
                      children: (0, Be.jsx)('img', {
                        alt: 'arrowTop',
                        src: './img/home.svg',
                        className: 'page__path--home-image',
                      }),
                    }),
                    (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/arrowRight.svg',
                      className: 'page__path--prev',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'page__path--page SmallText',
                      children: 'Phones',
                    }),
                  ],
                }),
                e && 0 === e.length
                  ? (0, Be.jsx)(at, { title: 'Phones' })
                  : (0, Be.jsx)('h1', {
                      className: 'page__title h1',
                      children: 'Mobile phones',
                    }),
                !e && (0, Be.jsx)(rt, {}),
                e && e.length > 0 && (0, Be.jsx)(nt, { products: e }),
              ],
            })
          );
        },
        ot = () => {
          const [e, t] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                const e = await Me(We.Tablets);
                t(() => e);
              })();
            }, []),
            (0, Be.jsxs)('div', {
              className: 'page',
              children: [
                (0, Be.jsxs)('div', {
                  className: 'page__path',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/',
                      className: 'page__path--home',
                      children: (0, Be.jsx)('img', {
                        alt: 'arrowTop',
                        src: './img/home.svg',
                        className: 'page__path--home-image',
                      }),
                    }),
                    (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/arrowRight.svg',
                      className: 'page__path--prev',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'page__path--page SmallText',
                      children: 'Tablets',
                    }),
                  ],
                }),
                e && 0 === e.length
                  ? (0, Be.jsx)(at, { title: 'Tablets' })
                  : (0, Be.jsx)('h1', {
                      className: 'page__title h1',
                      children: 'Tablets',
                    }),
                !e && (0, Be.jsx)(rt, {}),
                e && e.length > 0 && (0, Be.jsx)(nt, { products: e }),
              ],
            })
          );
        },
        it = () => {
          const [e, t] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                const e = await Me(We.Accessories);
                t(() => e);
              })();
            }, []),
            (0, Be.jsxs)('div', {
              className: 'page',
              children: [
                (0, Be.jsxs)('div', {
                  className: 'page__path',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/',
                      className: 'page__path--home',
                      children: (0, Be.jsx)('img', {
                        alt: 'arrowTop',
                        src: './img/home.svg',
                        className: 'page__path--home-image',
                      }),
                    }),
                    (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/arrowRight.svg',
                      className: 'page__path--prev',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'page__path--page SmallText',
                      children: 'Accessories',
                    }),
                  ],
                }),
                e && 0 === e.length
                  ? (0, Be.jsx)(at, { title: 'Accessories' })
                  : (0, Be.jsx)('h1', {
                      className: 'page__title h1',
                      children: 'Accessories',
                    }),
                !e && (0, Be.jsx)(rt, {}),
                e && e.length > 0 && (0, Be.jsx)(nt, { products: e }),
              ],
            })
          );
        };
      const st = (e) => {
          let { products: t } = e;
          const [n] = ze(),
            a = n.get('query'),
            [l, o] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              let e = [...t];
              a &&
                (e = e.filter((e) =>
                  e.name.toLowerCase().includes(a.toLocaleLowerCase())
                )),
                o(() => e);
            }, [t, a]),
            (0, Be.jsxs)('div', {
              className: 'product',
              children: [
                (0, Be.jsx)('p', {
                  className: 'product__description BodyText',
                  children: ''.concat(
                    null === t || void 0 === t ? void 0 : t.length,
                    ' items'
                  ),
                }),
                l.length > 0
                  ? (0, Be.jsx)('ul', {
                      className: 'product__list',
                      'data-cy': 'productList',
                      children:
                        l &&
                        l.map((e) => (0, Be.jsx)(Qe, { product: e }, e.id)),
                    })
                  : (0, Be.jsx)(Ze, {}),
              ],
            })
          );
        },
        ut = () => {
          const { favourites: e } = Ae();
          return (0, Be.jsxs)('div', {
            className: 'page',
            children: [
              (0, Be.jsxs)('div', {
                className: 'page__path',
                children: [
                  (0, Be.jsx)(Ee, {
                    to: '/',
                    className: 'page__path--home',
                    children: (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/home.svg',
                      className: 'page__path--home-image',
                    }),
                  }),
                  (0, Be.jsx)('img', {
                    alt: 'arrowTop',
                    src: './img/arrowRight.svg',
                    className: 'page__path--prev',
                  }),
                  (0, Be.jsx)('span', {
                    className: 'page__path--page SmallText',
                    children: 'Favourites',
                  }),
                ],
              }),
              e && 0 === e.length
                ? (0, Be.jsx)(at, { title: 'Favourites' })
                : (0, Be.jsx)('h1', {
                    className: 'page__title h1',
                    children: 'Favourites',
                  }),
              !e && (0, Be.jsx)(rt, {}),
              e && e.length > 0 && (0, Be.jsx)(st, { products: e }),
            ],
          });
        },
        ct = (e) => {
          let { itemsNum: t, totalPrice: n } = e;
          const { handleError: r } = Ae();
          return (0, Be.jsxs)('div', {
            className: 'cartSummary',
            children: [
              (0, Be.jsx)('h1', {
                className: 'cartSummary__value h1',
                children: '$'.concat(n),
              }),
              (0, Be.jsx)('p', {
                className: 'cartSummary__quantity BodyText',
                'data-cy': 'productQauntity',
                children: 'Total for '.concat(t, ' items'),
              }),
              (0, Be.jsx)('span', { className: 'cartSummary__separator' }),
              (0, Be.jsx)('button', {
                type: 'button',
                className: 'cartSummary__button buttons buttons__page BodyText',
                onClick: r,
                children: 'Checkout',
              }),
            ],
          });
        },
        dt = (e) => {
          let { cartItem: t } = e;
          const { id: n, quantity: r, product: a } = t,
            {
              removeFromCart: l,
              decreaseQuantityInCart: o,
              increaseQuantityInCart: i,
            } = Ae();
          return (0, Be.jsxs)(
            'div',
            {
              className: 'cartItem',
              children: [
                (0, Be.jsx)('button', {
                  type: 'button',
                  'aria-label': 'remove-button',
                  className: 'cartItem__remove-button',
                  onClick: () => l(n),
                  'data-cy': 'cartDeleteButton',
                }),
                (0, Be.jsxs)(Ee, {
                  to: '/'.concat(a.type, 's/').concat(a.id),
                  className: 'cartItem__link',
                  children: [
                    (0, Be.jsx)('img', {
                      alt: a.id,
                      src: a.imageUrl,
                      className: 'cartItem__link--image',
                    }),
                    (0, Be.jsx)('p', {
                      className: 'cartItem__link--title BodyText',
                      children: a.name,
                    }),
                  ],
                }),
                (0, Be.jsxs)('div', {
                  className: 'cartItem__quantity BodyText',
                  children: [
                    (0, Be.jsx)('button', {
                      type: 'button',
                      'aria-label': 'minus-button',
                      className:
                        'cartItem__quantity--button cartItem__quantity--button-minus h3',
                      onClick: () => o(n),
                      children: '-',
                    }),
                    r,
                    (0, Be.jsx)('button', {
                      type: 'button',
                      'aria-label': 'plus-button',
                      className:
                        'cartItem__quantity--button cartItem__quantity--button-plus h3',
                      onClick: () => i(n),
                      children: '+',
                    }),
                  ],
                }),
                (0, Be.jsxs)('h2', {
                  className: 'cartItem__price h2',
                  children: ['$', a.price - (a.price * a.discount) / 100],
                }),
              ],
            },
            n
          );
        },
        ft = () => {
          const e = Z(),
            { cart: t } = Ae(),
            n = t.reduce((e, t) => e + t.quantity, 0),
            r = t.reduce(
              (e, t) =>
                e +
                t.quantity * t.product.price -
                (t.product.price * t.product.discount) / 100,
              0
            );
          return (0, Be.jsxs)('div', {
            className: 'page',
            children: [
              (0, Be.jsxs)('button', {
                type: 'button',
                className: 'page__path--back SmallText',
                onClick: () => e(-2),
                'data-cy': 'backButton',
                children: [
                  (0, Be.jsx)('img', {
                    alt: 'arrowTop',
                    src: './img/arrowLeft.svg',
                    className: 'page__path--prev',
                  }),
                  'Back',
                ],
              }),
              0 === t.length
                ? (0, Be.jsx)('h1', {
                    className: 'page__title h1',
                    children: 'Your cart is empty',
                  })
                : (0, Be.jsx)('h1', {
                    className: 'page__title h1',
                    children: 'Cart',
                  }),
              t.length > 0 &&
                (0, Be.jsxs)('div', {
                  className: 'page__cart',
                  children: [
                    (0, Be.jsx)('div', {
                      className: 'page__cart--list',
                      children: t.map((e) =>
                        (0, Be.jsx)(dt, { cartItem: e }, e.id)
                      ),
                    }),
                    (0, Be.jsx)(ct, { itemsNum: n, totalPrice: r }),
                  ],
                }),
            ],
          });
        },
        pt = (e) => {
          let { product: t } = e;
          const {
              products: n,
              isInFavourites: a,
              isInCart: l,
              toggleToCart: o,
              toggleToFavourites: i,
            } = Ae(),
            {
              price: s,
              discount: u,
              id: c,
              name: d,
              capacity: f,
              screen: p,
              ram: h,
              images: m,
              imageUrl: g,
              storage: v,
              sizeAndWeight: y,
              camera: b,
              battery: x,
              description: _,
            } = t,
            [w, k] = (0, r.useState)([]),
            [S, N] = (0, r.useState)(g);
          (0, r.useEffect)(() => {
            const e = () => Math.random() - 0.5;
            k(() => n.sort(e));
          }, [n]);
          return (0, Be.jsxs)(Be.Fragment, {
            children: [
              (0, Be.jsx)('h1', { className: 'page__title h1', children: d }),
              (0, Be.jsxs)('div', {
                className: 'details',
                children: [
                  (0, Be.jsx)('div', {
                    className: 'details__miniatures',
                    children: m.map((e) =>
                      (0, Be.jsx)(
                        'button',
                        {
                          type: 'button',
                          onClick: () =>
                            ((e) => {
                              N(e);
                            })(e),
                          className: 'details__miniatures--button',
                          children: (0, Be.jsx)('img', { alt: e, src: e }),
                        },
                        e
                      )
                    ),
                  }),
                  (0, Be.jsx)('img', {
                    className: 'details__image',
                    alt: '',
                    src: S,
                  }),
                  (0, Be.jsxs)('div', {
                    className: 'details__price',
                    children: [
                      (0, Be.jsx)('h2', {
                        className: 'productCard__price h2',
                        children: ((e, t) => {
                          if (t <= 0)
                            return (0, Be.jsx)(Be.Fragment, {
                              children: '$'.concat(e),
                            });
                          const n = ((e * (100 - u)) / 100).toFixed(0);
                          return (0, Be.jsxs)(Be.Fragment, {
                            children: [
                              '$'.concat(n),
                              (0, Be.jsx)('span', {
                                className: 'productCard__price-fullPrice h2',
                                children: '$'.concat(e),
                              }),
                            ],
                          });
                        })(s, u),
                      }),
                      (0, Be.jsx)('div', { className: 'productCard__line' }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label SmallText',
                            children: 'Screen',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value SmallText',
                            children: p,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label SmallText',
                            children: 'Capacity',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value SmallText',
                            children: f,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label SmallText',
                            children: 'RAM',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value SmallText',
                            children: h,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__buttons',
                        children: [
                          (0, Be.jsx)('button', {
                            type: 'button',
                            className: Oe()(
                              'productCard__buttons-cart',
                              'buttons',
                              { 'productCard__buttons-cart--addedToCart': l(c) }
                            ),
                            onClick: () => o(c),
                            children: l(c) ? 'Added to cart' : 'Add to cart',
                          }),
                          (0, Be.jsx)('button', {
                            type: 'button',
                            className:
                              'productCard__buttons-favourites buttons',
                            onClick: () => i(c),
                            'data-cy': 'addToFavorite',
                            children: a(c)
                              ? (0, Be.jsx)('img', {
                                  alt: 'filledFavourites',
                                  src: './img/filledFavourites.svg',
                                })
                              : (0, Be.jsx)('img', {
                                  alt: 'favourites',
                                  src: './img/favourites.svg',
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Be.jsx)('div', {
                    className: 'details__id SmallText',
                    children: 'ID: '.concat(c),
                  }),
                ],
              }),
              (0, Be.jsxs)('div', {
                className: 'details',
                children: [
                  (0, Be.jsxs)('div', {
                    className: 'details__about',
                    'data-cy': 'productDescription',
                    children: [
                      (0, Be.jsx)('h2', { className: 'h2', children: 'About' }),
                      (0, Be.jsx)('div', { className: 'productCard__line' }),
                      (0, Be.jsx)('p', {
                        className: 'details__about--p BodyText',
                        children: _,
                      }),
                    ],
                  }),
                  (0, Be.jsxs)('div', {
                    className: 'details__techSpecs',
                    children: [
                      (0, Be.jsx)('h2', {
                        className: 'h2',
                        children: 'Tech specs',
                      }),
                      (0, Be.jsx)('div', { className: 'productCard__line' }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'RAM',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: h,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'Capacity',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: f,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'RAM',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: h,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'Memeory',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: v.flash,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'Weight',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: y.weight,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'Camera',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: b.primary,
                          }),
                        ],
                      }),
                      (0, Be.jsxs)('div', {
                        className: 'productCard__details',
                        children: [
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-label BodyText',
                            children: 'Battery',
                          }),
                          (0, Be.jsx)('span', {
                            className: 'productCard__details-value BodyText',
                            children: x.type,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Be.jsx)(qe, { products: w, title: 'You may also like' }),
            ],
          });
        },
        ht = () => {
          const e = J().pathname.slice(1).split('/'),
            t = Z(),
            { productId: n } = (function () {
              let { matches: e } = r.useContext(K),
                t = e[e.length - 1];
              return t ? t.params : {};
            })(),
            [a, l] = (0, r.useState)(null),
            [o, i] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              l(() => null),
                (async () => {
                  try {
                    if (n) {
                      const e = await (async (e) => {
                        try {
                          const t = (await Fe()).find((t) => t.id === e);
                          if (!t) throw new Error();
                          const n = await fetch(
                            './api/products/'.concat(e, '.json')
                          );
                          if (!n.ok) throw new Error();
                          const r = await n.json();
                          return (
                            await new Promise((e) => setTimeout(e, 100)),
                            { ...r, ...t }
                          );
                        } catch (t) {
                          throw (console.error('Error:', t), t);
                        }
                      })(n);
                      l(() => e), i(!1);
                    }
                  } catch (e) {
                    i(!0);
                  }
                })();
            }, [n]),
            (0, Be.jsxs)('div', {
              className: 'page',
              children: [
                (0, Be.jsxs)('div', {
                  className: 'page__path',
                  'data-cy': 'breadCrumbs',
                  children: [
                    (0, Be.jsx)(Ee, {
                      to: '/',
                      className: 'page__path--home',
                      children: (0, Be.jsx)('img', {
                        alt: 'arrowTop',
                        src: './img/home.svg',
                        className: 'page__path--home-image',
                      }),
                    }),
                    (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/arrowRight.svg',
                      className: 'page__path--prev',
                    }),
                    (0, Be.jsx)(Ee, {
                      to: '/'.concat(e[0]),
                      className: 'page__path--page SmallText',
                      children: e[0],
                    }),
                    (0, Be.jsx)('img', {
                      alt: 'arrowTop',
                      src: './img/arrowRight.svg',
                      className: 'page__path--prev',
                    }),
                    (0, Be.jsx)('span', {
                      className: 'page__path--page SmallText',
                      children: e[1],
                    }),
                  ],
                }),
                (0, Be.jsx)('div', {
                  children: (0, Be.jsxs)('button', {
                    type: 'button',
                    className: 'page__path--back SmallText',
                    onClick: () => t(-2),
                    'data-cy': 'backButton',
                    children: [
                      (0, Be.jsx)('img', {
                        width: 24,
                        height: 24,
                        alt: 'arrowBack',
                        src: './img/arrowLeft.svg',
                        className: 'page__path--prev',
                      }),
                      'Back',
                    ],
                  }),
                }),
                a && !o && (0, Be.jsx)(pt, { product: a }),
                !a && !o && (0, Be.jsx)(rt, {}),
                o &&
                  (0, Be.jsx)('h1', {
                    className: 'page__title h1',
                    children: 'Product not Found',
                  }),
              ],
            })
          );
        },
        mt = () =>
          (0, Be.jsx)('div', {
            className: 'error',
            children: (0, Be.jsx)('h2', {
              className: 'h2',
              children: 'We are sorry, but this feature is not implemented yet',
            }),
          }),
        gt = () => {
          const { error: e } = Ae();
          return (0, Be.jsxs)('div', {
            className: 'App',
            children: [
              (0, Be.jsx)(He, {}),
              (0, Be.jsxs)(me, {
                children: [
                  (0, Be.jsx)(pe, { path: '/', element: (0, Be.jsx)(Xe, {}) }),
                  (0, Be.jsx)(pe, {
                    path: '/home',
                    element: (0, Be.jsx)(fe, { to: '/' }),
                  }),
                  (0, Be.jsxs)(pe, {
                    path: '/phones',
                    children: [
                      (0, Be.jsx)(pe, {
                        index: !0,
                        element: (0, Be.jsx)(lt, {}),
                      }),
                      (0, Be.jsx)(pe, {
                        path: ':productId',
                        element: (0, Be.jsx)(ht, {}),
                      }),
                    ],
                  }),
                  (0, Be.jsxs)(pe, {
                    path: '/tablets',
                    children: [
                      (0, Be.jsx)(pe, {
                        index: !0,
                        element: (0, Be.jsx)(ot, {}),
                      }),
                      (0, Be.jsx)(pe, {
                        path: ':productId',
                        element: (0, Be.jsx)(ht, {}),
                      }),
                    ],
                  }),
                  (0, Be.jsxs)(pe, {
                    path: '/accessories',
                    children: [
                      (0, Be.jsx)(pe, {
                        index: !0,
                        element: (0, Be.jsx)(it, {}),
                      }),
                      (0, Be.jsx)(pe, {
                        path: ':productId',
                        element: (0, Be.jsx)(ht, {}),
                      }),
                    ],
                  }),
                  (0, Be.jsx)(pe, {
                    path: '/favorites',
                    element: (0, Be.jsx)(ut, {}),
                  }),
                  (0, Be.jsx)(pe, {
                    path: '/cart',
                    element: (0, Be.jsx)(ft, {}),
                  }),
                  (0, Be.jsx)(pe, {
                    path: '/*',
                    element: (0, Be.jsx)('div', {
                      className: 'page',
                      children: (0, Be.jsx)('h1', {
                        className: 'page__title h1',
                        children: 'Page not found',
                      }),
                    }),
                  }),
                ],
              }),
              e && (0, Be.jsx)(mt, {}),
              (0, Be.jsx)(Je, {}),
            ],
          });
        };
      (0, t.s)(document.getElementById('root')).render(
        (0, Be.jsx)($e, {
          children: (0, Be.jsx)(Se, { children: (0, Be.jsx)(gt, {}) }),
        })
      );
    })();
})();
//# sourceMappingURL=main.4cfc6427.js.map
