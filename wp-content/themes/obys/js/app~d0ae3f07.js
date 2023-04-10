(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "./src/js/app.js": function (e, t, s) {
      "use strict";
      s.r(t);
      s("./node_modules/core-js/modules/es.promise.js"),
        s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
      var i = s("./node_modules/three/build/three.module.js");
      s("./node_modules/core-js/modules/es.regexp.constructor.js"),
        s("./node_modules/core-js/modules/es.regexp.to-string.js"),
        s("./node_modules/core-js/modules/es.string.replace.js"),
        s("./node_modules/core-js/modules/es.string.split.js");
      !(function (e, t, s) {
        function i(e, t) {
          return typeof e === t;
        }
        function n() {
          return "function" != typeof t.createElement
            ? t.createElement(arguments[0])
            : d
            ? t.createElementNS.call(
                t,
                "http://www.w3.org/2000/svg",
                arguments[0]
              )
            : t.createElement.apply(t, arguments);
        }
        function o() {
          var e = t.body;
          return e || ((e = n(d ? "svg" : "body")).fake = !0), e;
        }
        var a = [],
          r = [],
          h = {
            _version: "3.6.0",
            _config: {
              classPrefix: "",
              enableClasses: !0,
              enableJSClass: !0,
              usePrefixes: !0,
            },
            _q: [],
            on: function (e, t) {
              var s = this;
              setTimeout(function () {
                t(s[e]);
              }, 0);
            },
            addTest: function (e, t, s) {
              r.push({ name: e, fn: t, options: s });
            },
            addAsyncTest: function (e) {
              r.push({ name: null, fn: e });
            },
          },
          l = function () {};
        (l.prototype = h), (l = new l());
        var c = t.documentElement,
          d = "svg" === c.nodeName.toLowerCase(),
          u = h._config.usePrefixes
            ? " -webkit- -moz- -o- -ms- ".split(" ")
            : ["", ""];
        h._prefixes = u;
        var m = (h.testStyles = function (e, s, i, a) {
          var r,
            h,
            l,
            d,
            u = "modernizr",
            m = n("div"),
            v = o();
          if (parseInt(i, 10))
            for (; i--; )
              ((l = n("div")).id = a ? a[i] : u + (i + 1)), m.appendChild(l);
          return (
            ((r = n("style")).type = "text/css"),
            (r.id = "s" + u),
            (v.fake ? v : m).appendChild(r),
            v.appendChild(m),
            r.styleSheet
              ? (r.styleSheet.cssText = e)
              : r.appendChild(t.createTextNode(e)),
            (m.id = u),
            v.fake &&
              ((v.style.background = ""),
              (v.style.overflow = "hidden"),
              (d = c.style.overflow),
              (c.style.overflow = "hidden"),
              c.appendChild(v)),
            (h = s(m, e)),
            v.fake
              ? (v.parentNode.removeChild(v),
                (c.style.overflow = d),
                c.offsetHeight)
              : m.parentNode.removeChild(m),
            !!h
          );
        });
        l.addTest("touchevents", function () {
          var s;
          if (
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof DocumentTouch)
          )
            s = !0;
          else {
            var i = [
              "@media (",
              u.join("touch-enabled),("),
              "heartz",
              ")",
              "{#modernizr{top:9px;position:absolute}}",
            ].join("");
            m(i, function (e) {
              s = 9 === e.offsetTop;
            });
          }
          return s;
        }),
          (function () {
            var e, t, s, n, o, h;
            for (var c in r)
              if (r.hasOwnProperty(c)) {
                if (
                  ((e = []),
                  (t = r[c]).name &&
                    (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                )
                  for (s = 0; s < t.options.aliases.length; s++)
                    e.push(t.options.aliases[s].toLowerCase());
                for (
                  n = i(t.fn, "function") ? t.fn() : t.fn, o = 0;
                  o < e.length;
                  o++
                )
                  1 === (h = e[o].split(".")).length
                    ? (l[h[0]] = n)
                    : (!l[h[0]] ||
                        l[h[0]] instanceof Boolean ||
                        (l[h[0]] = new Boolean(l[h[0]])),
                      (l[h[0]][h[1]] = n)),
                    a.push((n ? "" : "no-") + h.join("-"));
              }
          })(),
          (function (e) {
            var t = c.className,
              s = l._config.classPrefix || "";
            if ((d && (t = t.baseVal), l._config.enableJSClass)) {
              var i = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
              t = t.replace(i, "$1" + s + "js$2");
            }
            l._config.enableClasses &&
              ((t += " " + s + e.join(" " + s)),
              d ? (c.className.baseVal = t) : (c.className = t));
          })(a),
          delete h.addTest,
          delete h.addAsyncTest;
        for (var v = 0; v < l._q.length; v++) l._q[v]();
        e.Modernizr = l;
      })(window, document);
      s("./src/js/utils/vh.js");
      Document.prototype.ready = (e) => {
        e &&
          "function" == typeof e &&
          document.addEventListener("DOMContentLoaded", () => {
            if (
              "interactive" === document.readyState ||
              "complete" === document.readyState
            )
              return e();
          });
      };
      const n = (e, t = 0, s = 1) => Math.max(t, Math.min(s, e)),
        o = (e, t, s, i, n) => i + ((n - i) * (e - t)) / (s - t),
        a = ({ x: e, y: t }, { width: s, height: n }, o = 0) => {
          const a = ((e, t) => {
            const s = e[0],
              i = e[1],
              n = e[2],
              o = e[3],
              a = t[0],
              r = t[1];
            return [Math.abs(a * s + r * n), Math.abs(a * i + r * o)];
          })(
            ((r = i.e.degToRad(o)),
            [Math.cos(r), -Math.sin(r), Math.sin(r), Math.cos(r)]),
            [e, t]
          );
          var r;
          const h = { w: a[0] / s, h: a[1] / n },
            l = 1 / Math.max(h.w, h.h);
          return new i.l(h.w * l, h.h * l);
        },
        r = (e, t, s = !1) => {
          const i = new CustomEvent(e, { detail: t }, { once: s });
          document.dispatchEvent(i);
        };
      var h = s("./node_modules/gsap/index.js"),
        l = s("./node_modules/splitting/dist/splitting.js"),
        c = s.n(l);
      class d {
        constructor(e) {
          (this.holder = e),
            (this.shown = !1),
            (this.animationSpeed = 0.35),
            this.init();
        }
        init() {
          (this.defaultText = this.holder.querySelector(
            ".link__text--default"
          )),
            (this.italicText = this.holder.querySelector(
              ".link__text--italic"
            )),
            (this.defaultTextSplit =
              this.defaultText &&
              c()({ target: this.defaultText, whitespace: !0 })[0]),
            (this.italicTextSplit =
              this.italicText &&
              c()({ target: this.italicText, whitespace: !0 })[0]),
            (this.defaultLetters = this.defaultTextSplit.chars),
            (this.italicLetters = this.italicTextSplit.chars),
            (this.staggerDelay =
              this.animationSpeed / this.defaultLetters.length),
            (this.showTimeline = this.show()),
            (this.hideTimeline = this.hide()),
            h.g.set([this.defaultLetters, this.italicText], { opacity: 1 }),
            h.g.set(this.italicLetters, { opacity: 0 }),
            this.attachEvents();
        }
        attachEvents() {
          this.holder.addEventListener("mouseenter", () => {
            this.triggerShow();
          }),
            this.holder.addEventListener("touchstart", () => {
              this.triggerShow();
            }),
            this.holder.addEventListener("mouseleave", () => {
              this.triggerHide();
            }),
            this.holder.addEventListener("touchend", () => {
              this.triggerHide();
            });
        }
        triggerShow() {
          this.shown ? this.hideTimeline.reverse() : this.showTimeline.play(0);
        }
        triggerHide() {
          this.shown ? this.hideTimeline.play(0) : this.showTimeline.reverse();
        }
        show() {
          const e = new h.e({
            paused: !0,
            onComplete: () => {
              this.shown = !0;
            },
          });
          return (
            e.staggerFromTo(
              this.defaultLetters,
              this.animationSpeed,
              { opacity: 1 },
              { opacity: 0, ease: Circ.easeOut },
              this.staggerDelay,
              0
            ),
            e.staggerFromTo(
              this.italicLetters,
              this.animationSpeed,
              { opacity: 0 },
              { opacity: 1, ease: Circ.easeIn },
              this.staggerDelay,
              this.staggerDelay
            ),
            e
          );
        }
        hide() {
          const e = new h.e({
            paused: !0,
            onComplete: () => {
              this.shown = !1;
            },
          });
          return (
            e.staggerFromTo(
              this.italicLetters,
              this.animationSpeed,
              { opacity: 1 },
              { opacity: 0, ease: Circ.easeOut },
              this.staggerDelay,
              0
            ),
            e.staggerFromTo(
              this.defaultLetters,
              this.animationSpeed,
              { opacity: 0 },
              { opacity: 1, ease: Circ.easeIn },
              this.staggerDelay,
              this.staggerDelay
            ),
            e
          );
        }
      }
      class u {
        constructor(e) {
          (this.holder = e),
            (this.texts = [
              ...this.holder.querySelectorAll("[data-scroll-indicator-text]"),
            ]),
            (this.animationSpeed = 2),
            this.texts.length && this.init();
        }
        init() {
          const e = new h.e({ repeat: -1 });
          this.texts.map((t, s) => {
            const i = h.g.fromTo(
              t,
              this.animationSpeed,
              { y: "-150%", delay: this.animationSpeed },
              {
                y: "0%",
                onComplete: () => {
                  h.g.fromTo(
                    t,
                    this.animationSpeed,
                    { y: "0%" },
                    { y: "150%" }
                  );
                },
              }
            );
            e.add(i);
          }),
            e.play();
        }
      }
      const m = { start: "MenuInStart", end: "MenuInEnd" },
        v = { start: "MenuOutStart", end: "MenuOutEnd" },
        p = { start: "PreloaderOutStart", end: "PreloaderOutEnd" },
        g = { start: "AjaxInStart", end: "AjaxInEnd" },
        y = { start: "AjaxOutStart", end: "AjaxOutEnd" },
        f = ".LocomotiveScroll",
        x = {
          namespace: f,
          ready: "ready".concat(f),
          scrolling: "scrolling".concat(f),
          update: "update".concat(f),
          destroy: "destroy".concat(f),
          stop: "stop".concat(f),
          play: "play".concat(f),
          call: "call".concat(f),
          scrollTo: "scrollTo".concat(f),
        },
        w = {
          activeClass: "custom-cursor--enabled",
          innactiveClass: "is-stopped",
          hoverClass: "is-hover",
          animationSpeed: 0.4,
          node: "[data-page-cursor]",
        },
        S = { zoom: "TileZoom", scroll: "animateTile" },
        b = { toggle: "ViewToggle" },
        _ = { toggle: "DetailToggle" },
        M = document.documentElement,
        C = document.body;
      class E {
        constructor(e) {
          (this.holder = e),
            (this.touch = window.Modernizr && window.Modernizr.touchevents),
            (this.namespace = this.holder.dataset.scrollCall),
            this.init();
        }
        init() {
          (this.selector = '[data-scroll-call="'.concat(this.namespace, '"]')),
            (this.animationSpeed = this.holder.dataset.speed
              ? parseInt(this.holder.dataset.speed)
              : 0.75),
            (this.animationDelay = this.holder.dataset.delay
              ? parseInt(this.holder.dataset.delay)
              : 0.2),
            this.attachEvents();
        }
        attachEvents() {
          document.addEventListener(x.call, (e) => {
            (this.scrollData = e.detail.scrollData),
              this.scrollData.name === this.namespace &&
                !this.holder.dataset.show &&
                this.scrollData.obj.inView &&
                this.holder.classList.contains(this.scrollData.obj.class) &&
                ((this.holder.dataset.show = !0), this.show());
          }),
            this.holder.addEventListener("triggerAnimation", (e) => {
              this.show();
            });
        }
        show() {
          const e = new h.e();
          return (
            e.fromTo(
              this.holder,
              this.animationSpeed,
              { opacity: 0 },
              { opacity: 1, ease: h.c.easeInOut },
              this.animationDelay
            ),
            e
          );
        }
        hide() {
          const e = new h.e();
          return (
            e.fromTo(
              this.holder,
              this.animationSpeed,
              { opacity: 1 },
              { opacity: 0, ease: h.c.easeInOut },
              this.animationDelay
            ),
            e
          );
        }
      }
      class L extends E {
        constructor(e) {
          super(e);
        }
      }
      class T extends E {
        constructor(e) {
          super(e);
        }
        init() {
          super.init(),
            (this.splitter = c()({
              target: this.holder,
              by: "lines",
              whitespace: !1,
            })[0]),
            (this.lines = this.splitter.lines),
            this.lines.map((e) => {
              const t = document.createElement("span");
              t.classList.add("splitted-title__line"),
                ((e, t) => {
                  for (
                    var s = e[0].parentNode, i = e[0].previousSibling, n = 0;
                    e.length - n;
                    t.firstChild === e[0] && n++
                  )
                    t.appendChild(e[n]);
                  var o = i ? i.nextSibling : s.firstChild;
                  s.insertBefore(t, o);
                })(e, t);
            }),
            this.holder.dataset.animate ||
              TweenMax.set(this.lines, { y: "120%" });
        }
        show() {
          const e = new TimelineMax({
            onComplete: () => (this.holder.dataset.shown = !0),
          });
          return (
            e.staggerFromTo(
              this.lines,
              this.animationSpeed,
              { y: "150%" },
              { y: "0%", ease: Circ.easeOut, clearProps: "y" },
              this.animationSpeed / this.lines.length,
              this.animationDelay
            ),
            e
          );
        }
      }
      class I extends E {
        constructor(e) {
          super(e);
        }
        init() {
          super.init(),
            (this.animationDelay = 0),
            super.touch ||
              TweenMax.set(this.holder, { transformOrigin: "100% 100%" });
        }
        show() {
          const e = new TimelineMax();
          return (
            e.fromTo(
              this.holder,
              this.animationSpeed,
              { scaleX: 0 },
              { scaleX: 1, ease: Circ.easeOut },
              this.animationDelay
            ),
            e
          );
        }
      }
      class z extends E {
        constructor(e) {
          super(e), super.init();
        }
        init() {
          (this.animationDelay = 0),
            TweenMax.set(this.holder, { transformOrigin: "100% 100%" });
        }
        show() {
          this.touch || r(S.scroll, { tile: this.holder });
        }
      }
      class A extends E {
        constructor(e) {
          super(e),
            (this.header = document.querySelector(".header")),
            (this.attr = "data-theme");
        }
        init() {
          super.init();
        }
        attachEvents() {
          this.render();
        }
        show() {
          "enter" === this.scrollData.direction
            ? this.inverse()
            : this.default();
        }
        inverse() {
          this.header.setAttribute(this.attr, this.holder.dataset.theme);
        }
        default() {
          this.header.removeAttribute(this.attr);
        }
        check() {
          (this.bounds = this.holder.getBoundingClientRect()),
            (this.headerBounds = this.header.getBoundingClientRect());
          const { top: e, bottom: t } = this.bounds,
            { height: s } = this.headerBounds,
            i = s / 2;
          e < i && t > i && !this.isInverse
            ? (this.inverse(), (this.isInverse = !0))
            : ((t < i && this.isInverse) || (e > i && this.isInverse)) &&
              (this.default(), (this.isInverse = !1)),
            this.render();
        }
        render() {
          this.raf = requestAnimationFrame(() => this.check());
        }
      }
      class k {
        constructor(e) {
          (this.holder = e),
            (this.animationSpeed = 0.35),
            (this.eventName = "pauseVideo"),
            (this.activeClassName = "video-is-playing"),
            (this.clickHandlerBound = () => this.clickHandler()),
            this.init();
        }
        init() {
          (this.video = this.holder.querySelector("video")),
            this.video &&
              ((this.overlay = this.holder.querySelector(
                "[data-video-thumbnail]"
              )),
              (this.playButton =
                this.holder.querySelector("[data-play-button]")),
              (this.playIcon =
                this.playButton.querySelector(".button__play-icon")),
              (this.pauseIcon = this.playButton.querySelector(
                ".button__pause-icon"
              )),
              (this.videoPlaying = !1),
              this.attachEvents());
        }
        attachEvents() {
          this.holder.addEventListener("click", this.clickHandlerBound),
            this.video.addEventListener("play", () => this.playVideo()),
            this.video.addEventListener("pause", () =>
              this.playVideo().reverse(0)
            ),
            document.addEventListener(x.call, (e) => {
              (this.scrollData = e.detail.scrollData),
                this.scrollData.name === this.eventName &&
                  this.scrollData.obj.inView &&
                  !this.video.paused &&
                  this.video.pause();
            });
        }
        clickHandler() {
          event.preventDefault(), this.changeVideoState();
        }
        changeVideoState() {
          this.video.paused
            ? (this.video.play(),
              this.holder.classList.add(this.activeClassName))
            : (this.video.pause(),
              this.holder.classList.remove(this.activeClassName));
        }
        playVideo() {
          const e = new h.e();
          return (
            e.fromTo(
              [this.overlay, this.playIcon],
              this.animationSpeed,
              { autoAlpha: 1 },
              { autoAlpha: 0 },
              0
            ),
            e.fromTo(
              this.playButton,
              this.animationSpeed,
              { scale: 1 },
              { scale: 0.5, transformOrigin: "50% 50%" },
              0
            ),
            e.fromTo(
              [this.video, this.pauseIcon],
              this.animationSpeed,
              { autoAlpha: 0 },
              { autoAlpha: 1 },
              0
            ),
            e
          );
        }
      }
      s("./node_modules/core-js/modules/es.object.assign.js"),
        s("./node_modules/intersection-observer/intersection-observer.js");
      class D {
        constructor(e, t) {
          (this.mediaToLoad = [...e]),
            this.mediaToLoad.length &&
              ((this.loadingFinished = !1),
              (this.loadedEvent = new Event("lazyLoaded")),
              (this.settings = Object.assign(
                {},
                {
                  defaultType: "image",
                  imageSettings: {
                    name: "image",
                    attr: "data-src",
                    loadAttr: "src",
                  },
                  backgroundSettings: {
                    name: "background",
                    attr: "data-background",
                    loadAttr: "style",
                  },
                },
                t
              )));
        }
        loadImages() {
          return new Promise(async (e, t) => {
            try {
              const t = this.mediaToLoad.map((e) => this.loadImage(e));
              await Promise.all(t),
                (this.loadingFinished = !0),
                this.settings.holder &&
                  (this.settings.holder,
                  this.settings.holder.dispatchEvent(this.loadedEvent)),
                e();
            } catch (e) {
              t();
            }
          });
        }
        async loadImage(e) {
          return new Promise(async (t, s) => {
            try {
              this.isImage(e)
                ? await this.performLoading(e, this.settings.imageSettings)
                : await this.performLoading(
                    e,
                    this.settings.backgroundSettings
                  ),
                t();
            } catch (e) {
              s();
            }
          });
        }
        async performLoading(e, t) {
          return new Promise((s, i) => {
            try {
              if (!e.hasAttribute(t.attr)) return;
              const i = e.getAttribute(t.attr);
              this.isImage(e)
                ? e.setAttribute(t.loadAttr, i)
                : (e.style.backgroundImage = "url(".concat(i, ")")),
                e.removeAttribute(t.attr),
                s(),
                (e.dataset.loaded = !0);
            } catch (e) {
              i();
            }
          });
        }
        isImage(e) {
          return e.hasAttribute(this.settings.imageSettings.attr);
        }
      }
      class B {
        constructor(e, t) {
          (this.holder = e),
            (this.settings = Object.assign(
              {},
              {
                imagesSelector: "[data-src], [data-background]",
                DOM: { visual: "[data-lazy-image]" },
                observerConfig: { rootMargin: "150%" },
              },
              t
            )),
            (this.images = [
              ...this.holder.querySelectorAll(this.settings.imagesSelector),
            ]),
            this.images.length &&
              ((this.lazyLoad = new D(this.images, { holder: this.holder })),
              this.init());
        }
        init() {
          this.attachEvents();
        }
        attachEvents() {
          this.initObserver(), this.observer.observe(this.holder);
        }
        initObserver() {
          this.observer = new IntersectionObserver((e) => {
            e.forEach(async (e) => {
              e.isIntersecting &&
                (this.observer.unobserve(e.target),
                await this.lazyLoad.loadImages());
            });
          }, this.settings.observerConfig);
        }
      }
      class P {
        constructor() {
          (this.touch = window.Modernizr && window.Modernizr.touchevents),
            (this.cursor = M.querySelector(w.node)),
            (this.moveEvent = "mousemove"),
            (this.enterEvent = "mouseenter"),
            (this.leaveEvent = "mouseleave"),
            (this.hoverClass = w.hoverClass),
            (this.activeClass = w.activeClass),
            (this.stoppedClass = w.innactiveClass),
            (this.animationSpeed = w.animationSpeed),
            (this.cursorDelaySpeed = w.cursorDelaySpeed),
            (this.rafID = null),
            (this.magnetTreshold = 30),
            (this.magnetDataSelector = "data-magnet-item"),
            (this.videoSelector = "data-video-block"),
            (this.playButtonSelector = "data-play-button"),
            (this.handleMouseEnterBound = () => this.handleMouseEnter()),
            (this.handleMouseLeaveBound = () => this.handleMouseLeave()),
            (this.handleMagnetMouseMoveBound = () =>
              this.handleMagnetMouseMove()),
            (this.handleMagnetMouseEnterBound = () =>
              this.handleMagnetMouseEnter()),
            (this.handleMagnetMouseLeaveBound = () =>
              this.handleMagnetMouseLeave()),
            (this.handleVideoBlockEnterBounds = () =>
              this.handleVideoBlockEnter()),
            (this.handleVideoBlockLeaveBounds = () =>
              this.handleVideoBlockLeave()),
            (this.handleVideoBlockMoveBounds = () =>
              this.handleVideoBlockMove()),
            this.initCursor();
        }
        unveilCursor(e) {
          setTimeout(() => {
            this.cursorSpeed = this.cursorDelaySpeed;
          }, 1e3 * this.cursorDelaySpeed);
        }
        initCursor() {
          this.cursor &&
            ((this.cursorSpeed = 0),
            (this.easing = Expo.eseInOut),
            (this.clientX = -100),
            (this.clientY = -100),
            this.unveilCursor(),
            M.addEventListener(this.moveEvent, (e) => {
              this.unveilCursor(e), this.setPosition(e);
            }),
            this.initHovers(),
            this.render(),
            M.classList.add(this.activeClass));
        }
        setPosition(e) {
          (this.clientX = e.clientX), (this.clientY = e.clientY);
        }
        findHoverElements() {
          (this.links = [...M.querySelectorAll("a[href], button, .button")]),
            (this.magnetLinks = [
              ...M.querySelectorAll("[".concat(this.magnetDataSelector, "]")),
            ]),
            (this.videoBlocks = [
              ...M.querySelectorAll("[".concat(this.videoSelector, "]")),
            ]);
        }
        handleMouseEnter() {
          h.g.to(this.cursor, this.animationSpeed, { scale: 1.33 });
        }
        handleMouseLeave() {
          h.g.to(this.cursor, this.animationSpeed, { scale: 1 });
        }
        handleMagnetMouseEnter() {
          this.activeMagnetCursor();
        }
        handleMagnetMouseLeave() {
          this.resetMagnetCursor();
        }
        activeMagnetCursor() {
          const e = event.target;
          this.magnetLinkBounds = e.getBoundingClientRect();
          const {
            top: t,
            left: s,
            width: i,
            height: n,
          } = this.magnetLinkBounds;
          (this.linkStartPositionX =
            -1 * Math.floor(s - this.cursorX) -
            i / 2 +
            this.cursorBounds.width / 2),
            (this.linkStartPositionY =
              -1 * Math.floor(t - this.cursorY) -
              n / 2 +
              this.cursorBounds.height / 2),
            this.isNeededTarget(e, this.magnetDataSelector) &&
              (e.classList.add(this.hoverClass),
              M.addEventListener(
                this.moveEvent,
                this.handleMagnetMouseMoveBound
              ));
        }
        resetMagnetCursor() {
          const e = event.target;
          this.isNeededTarget(e, this.magnetDataSelector) &&
            (e.classList.remove(this.hoverClass),
            h.g.to(event.target, this.animationSpeed, {
              x: 0,
              y: 0,
              clearProps: "x, y",
            }),
            M.removeEventListener(
              this.moveEvent,
              this.handleMagnetMouseMoveBound
            ));
        }
        handleMagnetMouseMove() {
          const e = event.target;
          if (!this.isNeededTarget(e, this.magnetDataSelector)) return;
          const {
              top: t,
              left: s,
              width: i,
              height: o,
            } = this.magnetLinkBounds,
            a = -1 * (s - this.cursorX) - i / 2 + this.cursorBounds.width / 2,
            r = -1 * (t - this.cursorY) - o / 2 + this.cursorBounds.height / 2,
            l = n(
              a,
              this.linkStartPositionX - this.magnetTreshold,
              this.linkStartPositionX + this.magnetTreshold
            ),
            c = n(
              r,
              this.linkStartPositionY - this.magnetTreshold,
              this.linkStartPositionY + this.magnetTreshold
            );
          h.g.to(e, 0.35, { x: l, y: c });
        }
        isNeededTarget(e, t) {
          return e.hasAttribute(t);
        }
        handleVideoBlockEnter() {
          (this.video = event.target),
            (this.playButton = this.video.querySelector(
              "[".concat(this.playButtonSelector, "]")
            )),
            (this.playButtonBounds =
              this.playButton && this.playButton.getBoundingClientRect()),
            (this.playButtonSizes =
              this.playButton && this.playButton.getBoundingClientRect()),
            (this.videoBounds =
              this.video && this.video.getBoundingClientRect()),
            this.playButton.classList.add(this.hoverClass),
            (this.playButtonSizes =
              this.playButton && this.playButton.getBoundingClientRect()),
            this.handleVideoBlockMove();
        }
        handleVideoBlockMove() {
          const e = this.video.getBoundingClientRect(),
            { left: t, top: s } = this.playButtonBounds,
            { width: i, height: o } = this.playButtonSizes,
            a = -1 * (t - this.cursorX) - i / 2 + this.cursorBounds.width / 2,
            r =
              -1 * (s - this.cursorY) -
              o / 2 +
              this.cursorBounds.height / 2 +
              (this.videoBounds.top - e.top);
          h.g.set(this.playButton, { pointerEvents: "none" }),
            h.g.to(this.cursor, this.animationSpeed, { scale: 0, opacity: 0 }),
            h.g.set(this.playButton, {
              x: a,
              y: n(r, -e.height / 2, e.height / 2),
            }),
            this.renderVideoMove();
        }
        renderVideoMove() {
          this.playBtnMoveRaf = requestAnimationFrame(
            this.handleVideoBlockMoveBounds
          );
        }
        handleVideoBlockLeave() {
          h.g.to(this.playButton, this.animationSpeed, {
            x: 0,
            y: 0,
            pointerEvents: "all",
          }),
            h.g.to(this.cursor, this.animationSpeed, { scale: 1, opacity: 1 }),
            this.playButton.classList.remove(this.hoverClass),
            cancelAnimationFrame(this.playBtnMoveRaf);
        }
        initHovers() {
          this.findHoverElements(),
            this.links.map((e) => {
              e.addEventListener(this.enterEvent, this.handleMouseEnterBound),
                e.addEventListener(this.leaveEvent, this.handleMouseLeaveBound);
            }),
            this.touch ||
              (this.magnetLinks.map((e) => {
                e.addEventListener(
                  this.enterEvent,
                  this.handleMagnetMouseEnterBound
                ),
                  e.addEventListener(
                    this.leaveEvent,
                    this.handleMagnetMouseLeaveBound
                  );
              }),
              this.videoBlocks.map((e) => {
                e.addEventListener(
                  this.enterEvent,
                  this.handleVideoBlockEnterBounds
                ),
                  e.addEventListener(
                    this.leaveEvent,
                    this.handleVideoBlockLeaveBounds
                  );
              }));
        }
        render() {
          (this.cursorBounds = this.cursor.getBoundingClientRect()),
            (this.cursorX = this.clientX - this.cursor.offsetWidth / 2),
            (this.cursorY = this.clientY - this.cursor.offsetHeight / 2),
            h.g.to(this.cursor, this.cursorSpeed, {
              x: this.cursorX,
              y: this.cursorY,
            }),
            this.raf();
        }
        raf() {
          (this.rafID = requestAnimationFrame(this.render.bind(this))),
            this.cursor.classList.remove(this.stoppedClass);
        }
        stopCursor() {
          cancelAnimationFrame(this.rafID),
            this.cursor.classList.add(this.stoppedClass);
        }
        destroyCursor() {
          M.removeEventListener(this.moveEvent, this.unveilCursor),
            M.removeEventListener(this.moveEvent, this.setPosition),
            cancelAnimationFrame(this.rafID);
        }
      }
      class O {
        constructor(e) {
          (this.holder = e), (this.updateInterval = 3600), this.init();
        }
        init() {
          this.setTime(), this.updateTime();
        }
        setTime() {
          (this.currentHour = new Date().toLocaleTimeString("ru-RU", {
            timeZone: "Europe/Kiev",
            hour: "2-digit",
          })),
            (this.currentMinutes = new Date().toLocaleTimeString("ru-RU", {
              timeZone: "Europe/Kiev",
              minute: "2-digit",
            })),
            this.currentMinutes < 10
              ? (this.currentMinutes = "0".concat(this.currentMinutes))
              : this.currentMinutes,
            (this.holder.innerHTML = ""
              .concat(this.currentHour, ' <span class="separator">:</span> ')
              .concat(this.currentMinutes)),
            (this.separator = this.holder.querySelector(".separator")),
            h.g.to(this.separator, 1, { repeat: -1, yoyo: !0, opacity: 0 });
        }
        updateTime() {
          setInterval(() => {
            this.setTime();
          }, this.updateInterval);
        }
      }
      class q {
        constructor(e) {
          (this.holder = e),
            (this.touch = window.Modernizr && window.Modernizr.touchevents),
            (this.target =
              this.holder.dataset.target || this.holder.getAttribute("href")),
            (this.targetNode = document.querySelector(this.target)),
            this.init();
        }
        init() {
          this.holder.addEventListener("click", (e) => {
            e.preventDefault(), r(x.scrollTo, { target: this.target });
          });
        }
      }
      var j = s("./node_modules/simplebar/dist/simplebar.esm.js");
      s("./node_modules/simplebar/dist/simplebar.css");
      function H() {
        return Promise.all([
          void document.querySelectorAll(".link-typed").forEach((e) => {
            new d(e);
          }),
          void document
            .querySelectorAll('[data-scroll-call="fadeIn"]')
            .forEach((e) => {
              new L(e);
            }),
          void document
            .querySelectorAll('[data-scroll-call="splitLines"]')
            .forEach((e) => {
              new T(e);
            }),
          void document
            .querySelectorAll('[data-scroll-call^="scale"]')
            .forEach((e) => {
              new I(e);
            }),
          void document
            .querySelectorAll("[data-scroll-indicator]")
            .forEach((e) => {
              new u(e);
            }),
          void document
            .querySelectorAll('[data-scroll-call^="webgl"]')
            .forEach((e) => {
              new z(e);
            }),
          void document
            .querySelectorAll('[data-scroll-call^="headerTheme"]')
            .forEach((e) => {
              new A(e);
            }),
          void document.querySelectorAll("[data-video-block]").forEach((e) => {
            new k(e);
          }),
          void (
            e
              ? e.querySelectorAll("[data-lazy-media]")
              : document.querySelectorAll("[data-lazy-media]")
          ).forEach((e) => {
            new B(e);
          }),
          void document.querySelectorAll("[data-local-time]").forEach((e) => {
            new O(e);
          }),
          void document
            .querySelectorAll("[data-smooth-scroll]")
            .forEach((e) => {
              new q(e);
            }),
          void document
            .querySelectorAll("[data-simplebar]")
            .forEach((e) => new j.a(e)),
          void new P(),
        ]);
        var e;
      }
      var R = s("./node_modules/pubsub-js/src/pubsub.js"),
        F = s.n(R);
      s("./node_modules/core-js/modules/es.number.to-fixed.js");
      class V {
        constructor(e, t, s, n) {
          (this.scene = t),
            (this.$els = {
              body: C,
              el: e,
              visual: e.querySelector(".showcase-item__visual"),
              title: e.querySelector(".showcase-item__heading"),
              description: e.querySelector(".showcase-item__description"),
              arrows: C.querySelectorAll(".showcase-arrow"),
              link: e.querySelector("a"),
              scrollTrigger: e.querySelector('[data-scroll-call="webgl"]'),
              sections: document.querySelectorAll(".site-section"),
            }),
            (this.duration = s),
            (this.zoomAnimationSpeed = 1.2),
            (this.mainImage = this.$els.visual),
            (this.images = []),
            (this.sizes = new i.l(0, 0)),
            (this.offset = new i.l(0, 0)),
            (this.vertexShader =
              "#define GLSLIFY 1\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    vec3 pos = position;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"),
            (this.fragmentShader = n),
            (this.clock = new i.c()),
            (this.PR = window.devicePixelRatio.toFixed(1)),
            (this.mouse = new i.l(0, 0)),
            (this.hasClicked = !1),
            (this.isZoomed = !1),
            (this.imagesToPreload = [
              this.mainImage.dataset.image,
              this.mainImage.dataset.hoverImage,
              this.mainImage.dataset.scaleImage ||
                this.mainImage.dataset.hoverImage,
            ]),
            (this.letterEffectLetter = this.$els.el.dataset.letter),
            this.letterEffectLetter &&
              this.imagesToPreload.push(this.letterEffectLetter),
            (this.loader = new i.k()),
            this.preload(this.imagesToPreload, () => {
              this.initTile();
            }),
            this.bindEvent();
        }
        bindEvent() {
          document.addEventListener(S.zoom, ({ detail: e }) => {
            this.zoom(e);
          }),
            document.addEventListener("mousemove", (e) => {
              this.onMouseMove(e);
            }),
            window.addEventListener("resize", () => {
              this.onResize();
            }),
            this.$els.el.addEventListener("mouseenter", () => {
              this.onPointerEnter();
            }),
            this.$els.el.addEventListener("mouseleave", () => {
              this.onPointerLeave();
            }),
            this.$els.el.addEventListener("click", (e) => {
              this.onClick(e);
            });
        }
        onClick(e) {
          e.preventDefault(),
            this.mesh &&
              e.target.hasAttribute("href") &&
              ((this.hasClicked = !0), r(_.toggle, { open: !0, target: this }));
        }
        onPointerEnter() {
          (this.isHovering = !0),
            this.isZoomed ||
              this.hasClicked ||
              (this.mesh &&
                h.g.to(this.uniforms.u_progressHover, this.duration, {
                  value: 1,
                  ease: h.c.easeInOut,
                }));
        }
        onPointerLeave() {
          !this.mesh ||
            this.isZoomed ||
            this.hasClicked ||
            h.g.to(this.uniforms.u_progressHover, this.duration, {
              value: 0,
              ease: h.c.easeInOut,
              onComplete: () => {
                this.isHovering = !1;
              },
            });
        }
        onResize() {
          this.getBounds(),
            this.mesh &&
              (this.mesh.scale.set(this.sizes.x, this.sizes.y, 1),
              this.uniforms.u_res.value.set(
                window.innerWidth / this.PR,
                window.innerHeight / this.PR
              ));
        }
        onMouseMove(e) {
          this.isZoomed ||
            this.hasClicked ||
            h.g.to(this.mouse, 0.5, { x: e.clientX, y: e.clientY });
        }
        onScroll() {
          h.g.to(this.uniforms.u_alpha, 2, { value: 1, delay: 0.3 });
        }
        initTile() {
          let e = this.images[0],
            t = this.images[1],
            s = this.images[2] || null,
            n = this.images[3];
          this.getBounds(),
            (this.uniforms = {
              u_alpha: { value: 1 },
              u_map: { type: "t", value: e },
              u_ratio: { value: a(this.sizes, e.image) },
              u_hovermap: { type: "t", value: t },
              u_hoverratio: { value: a(this.sizes, t.image) },
              u_scalemap: { type: "t", value: s || t },
              u_scaleratio: { value: a(this.sizes, s ? s.image : t.image) },
              u_shape: { value: n },
              u_mouse: { value: this.mouse },
              u_progressHover: { value: 0 },
              u_progressClick: { value: 0 },
              u_time: { value: this.clock.getElapsedTime() },
              u_res: { value: new i.l(window.innerWidth, window.innerHeight) },
            }),
            (this.geometry = new i.h(1, 1, 1, 1)),
            (this.material = new i.j({
              uniforms: this.uniforms,
              vertexShader: this.vertexShader,
              fragmentShader: this.fragmentShader,
              transparent: !0,
              defines: { PI: Math.PI, PR: this.PR },
            })),
            (this.mesh = new i.f(this.geometry, this.material)),
            (this.mesh.position.x = this.offset.x),
            (this.mesh.position.y = this.offset.y),
            this.mesh.scale.set(this.sizes.x, this.sizes.y, this.PR),
            this.scene.mainScene.add(this.mesh),
            this.mainImage.classList.add("is-loaded");
        }
        move() {
          !this.mesh ||
            this.isZoomed ||
            this.hasClicked ||
            (this.getBounds(),
            h.g.set(this.mesh.position, { x: this.offset.x, y: this.offset.y }),
            h.g.to(this.mesh.scale, 0.3, {
              x: this.sizes.x,
              y: this.sizes.y,
              z: 1,
            }));
        }
        update() {
          this.mesh &&
            (this.move(),
            this.isHovering &&
              (this.uniforms.u_time.value += this.clock.getDelta()));
        }
        zoom({ tile: e, open: t }) {
          const s = e === this,
            i = {
              x: s ? window.innerWidth : this.sizes.x,
              y: s ? window.innerWidth / 2 : this.sizes.y,
            },
            n = {
              x: s ? 0 : this.offset.x,
              y: s ? window.innerHeight / -3 : this.offset.y,
            },
            o = a(i, s ? this.images[2].image : this.images[0].image),
            r = s ? this.zoomAnimationSpeed / 3 : 0;
          (this.sizes.x = i.x),
            (this.sizes.y = i.y),
            this.hide(!s, !t),
            (this.uniforms.u_hovermap = this.uniforms.u_scalemap),
            (this.uniforms.u_hoverratio = this.uniforms.u_scaleratio),
            h.g.to(
              [this.$els.sections, "[data-scroll-indicator]"],
              this.zoomAnimationSpeed,
              { opacity: 0, ease: h.b.easeInOut }
            ),
            h.g.to(this.uniforms.u_progressClick, this.zoomAnimationSpeed, {
              value: s ? 1 : 0,
              ease: h.c.easeInOut,
              delay: r,
              onComplete: () => {
                (this.isZoomed = s),
                  (this.hasClicked = t),
                  h.g.to(this.uniforms.u_progressHover, this.duration, {
                    value: s ? 1 : 0,
                    ease: h.c.easeInOut,
                    delay: r,
                  });
              },
            }),
            h.g.to(this.mesh.scale, this.zoomAnimationSpeed, {
              delay: 2 * r,
              x: i.x,
              y: i.y,
              ease: h.b.easeInOut,
              onUpdate: () => {
                this.getBounds();
              },
              onComplete: () => {
                PubSub.publish(b.toggle, { shouldOpen: s, target: this });
              },
            }),
            h.g.to(this.mesh.position, this.zoomAnimationSpeed, {
              delay: 2 * r,
              x: n.x,
              y: n.y,
              ease: h.b.easeInOut,
            }),
            h.g.to(this.uniforms.u_hoverratio.value, this.zoomAnimationSpeed, {
              delay: 2 * r,
              x: o.x,
              y: o.y,
              ease: h.b.easeInOut,
            });
        }
        hide(e, t) {
          const s = e && !t ? 0 : this.zoomAnimationSpeed;
          h.g.to(this.uniforms.u_alpha, 0.5, {
            delay: s,
            value: e && !t ? 0 : 1,
            ease: h.d.easeIn,
          }),
            h.g.to(this.$els.el, 0.5, {
              delay: s,
              alpha: e && !t ? 0 : 1,
              force3D: !0,
            });
        }
        getBounds() {
          const {
            width: e,
            height: t,
            left: s,
            top: n,
          } = this.mainImage.getBoundingClientRect();
          this.sizes.equals(new i.l(e, t)) || this.sizes.set(e, t),
            this.offset.equals(
              new i.l(
                s - window.innerWidth / 2 + e / 2,
                -n + window.innerHeight / 2 - t / 2
              )
            ) ||
              this.offset.set(
                s - window.innerWidth / 2 + e / 2,
                -n + window.innerHeight / 2 - t / 2
              );
        }
        preload(e, t) {
          let s = 0;
          const n = e.length,
            o = (e, t) => {
              const s = this.loader.load(e, t);
              s.center.set(0.5, 0.5),
                (s.minFilter = i.d),
                (s.generateMipmaps = !1),
                this.images.push(s);
            };
          e.forEach((e) => {
            o(e, () => {
              (s += 1), s === n && t();
            });
          });
        }
      }
      class $ {
        constructor(e, t, s, n) {
          (this.scene = t),
            (this.$els = {
              body: C,
              el: e,
              images: [...e.querySelectorAll("[data-image]")],
              words: [...e.querySelectorAll("[data-word]")],
            }),
            (this.duration = s),
            (this.strength = 0.3),
            (this.perspective = 1.75),
            (this.animationSpeed = 0.5),
            (this.sizes = new i.l(0, 0)),
            (this.offset = new i.l(0, 0)),
            (this.clock = new i.c()),
            (this.PR = window.devicePixelRatio.toFixed(1)),
            (this.mouse = new i.l()),
            (this.images = []),
            this.initEffectShell().then(() => {
              (this.isLoaded = !0),
                this.isMouseOver && this.onMouseOver(this.tempItemIndex),
                (this.tempItemIndex = null),
                this.bindEvents(),
                this.init();
            });
        }
        initEffectShell() {
          let e = [];
          this.items = this.itemsElements;
          let t = new i.k();
          return (
            (t.minFilter = i.d),
            (t.generateMipmaps = !1),
            this.items.forEach((s, i) => {
              e.push(this.loadTexture(t, s.img ? s.img.src : null, i));
            }),
            new Promise((t, s) => {
              Promise.all(e).then((e) => {
                e.forEach((e, t) => {
                  this.items[t].texture = e.texture;
                }),
                  t();
              });
            })
          );
        }
        init() {
          (this.position = new i.m(0, 0, 0)),
            (this.scale = new i.m(1, 1, 1)),
            (this.geometry = new i.h(1, 1, 32, 32)),
            (this.uniforms = {
              uTexture: { value: null },
              uOffset: { value: new i.l() },
              uAlpha: { value: 0 },
            }),
            (this.material = new i.j({
              uniforms: this.uniforms,
              vertexShader:
                "\n        uniform vec2 uOffset;\n\n        varying vec2 vUv;\n\n        vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n          float M_PI = 3.1415926535897932384626433832795;\n          position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n          position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n          return position;\n        }\n\n        void main() {\n          vUv =  uv + (uOffset * 2.);\n          vec3 newPosition = position;\n          newPosition = deformationCurve(position,uv,uOffset);\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n        }\n      ",
              fragmentShader:
                "\n        uniform sampler2D uTexture;\n        uniform float uAlpha;\n\n        varying vec2 vUv;\n\n        vec2 scaleUV(vec2 uv,float scale) {\n          float center = 0.5;\n          return ((uv - center) * scale) + center;\n        }\n\n        void main() {\n          vec3 color = texture2D(uTexture,scaleUV(vUv,.9)).rgb;\n          gl_FragColor = vec4(color,uAlpha);\n        }\n      ",
              transparent: !0,
            })),
            (this.mesh = new i.f(this.geometry, this.material)),
            this.scene.mainScene.add(this.mesh);
        }
        bindEvents() {
          this.items.map((e, t) => {
            const s = e.element;
            s.addEventListener("mouseover", (e) => {
              this.onMouseOver(t, e);
            }),
              s.addEventListener("mousemove", (e) => {
                this.onMouseMove(e);
              }),
              s.addEventListener("mouseleave", (e) => {
                this.onMouseLeave(e);
              });
          });
        }
        onMouseEnter() {
          (this.currentItem && this.isMouseOver) ||
            ((this.isMouseOver = !0),
            this.scene.camera.position.set(0, 0, this.perspective),
            TweenLite.to(this.uniforms.uAlpha, this.animationSpeed, {
              value: 1,
              ease: Power4.easeOut,
            }));
        }
        onMouseLeave(e) {
          (this.isMouseOver = !1),
            TweenLite.to(this.uniforms.uAlpha, this.animationSpeed, {
              value: 0,
              ease: Power4.easeOut,
              onComplete: () => {
                this.scene.camera.position.set(0, 0, this.scene.perspective);
              },
            });
        }
        onMouseMove(e) {
          (this.mouse.x = (e.clientX / this.viewport.width) * 2 - 1),
            (this.mouse.y = (-e.clientY / this.viewport.height) * 2 + 1);
          let t = o(
              this.mouse.x,
              -1,
              1,
              -this.viewSize.width / 2,
              this.viewSize.width / 2
            ),
            s = o(
              this.mouse.y,
              -1,
              1,
              -this.viewSize.height / 2,
              this.viewSize.height / 2
            );
          (this.position = new i.m(t, s, 0)),
            TweenLite.to(this.mesh.position, 1, {
              x: t,
              y: s,
              ease: Power4.easeOut,
              onUpdate: this.onPositionUpdate.bind(this),
            });
        }
        onPositionUpdate() {
          let e = this.mesh.position
            .clone()
            .sub(this.position)
            .multiplyScalar(-this.strength);
          this.uniforms.uOffset.value = e;
        }
        onMouseOver(e, t) {
          (this.tempItemIndex = e),
            this.isLoaded &&
              (this.onMouseEnter(),
              (this.currentItem && this.currentItem.index === e) ||
                this.onTargetChange(e));
        }
        onTargetChange(e) {
          (this.currentItem = this.items[e]),
            (this.imageRatio =
              this.currentItem.img.naturalWidth /
              this.currentItem.img.naturalHeight),
            (this.scale = new i.m(this.imageRatio, 1, 1)),
            (this.uniforms.uTexture.value = this.currentItem.texture),
            this.mesh.scale.copy(this.scale);
        }
        loadTexture(e, t, s) {
          return new Promise((n, o) => {
            t
              ? e.load(
                  t,
                  (e) => {
                    (e.minFilter = i.d),
                      (e.generateMipmaps = !1),
                      n({ texture: e, index: s });
                  },
                  void 0,
                  (e) => {
                    o(e);
                  }
                )
              : n({ texture: null, index: s });
          });
        }
        get viewport() {
          let e = this.scene.container.clientWidth,
            t = this.scene.container.clientHeight;
          return { width: e, height: t, aspectRatio: e / t };
        }
        get viewSize() {
          let e = this.scene.camera.position.z,
            t = (this.scene.camera.fov * Math.PI) / 180,
            s = 2 * Math.tan(t / 2) * e;
          return { width: s * this.viewport.aspectRatio, height: s, vFov: t };
        }
        get itemsElements() {
          const e = [];
          if ("self" === this.$els.el.dataset.webglHover) {
            const t = this.$els.el.querySelector("[data-image]");
            e.push({ element: this.$els.el, img: t, index: 0 });
          } else
            Promise.all(
              [...this.$els.words].filter((t, s) => {
                const i = t.dataset.word,
                  n = this.$els.images.filter((e) => e.dataset.image === i)[0];
                i && n && e.push({ element: t, img: n, index: s });
              })
            );
          return e;
        }
      }
      i.b.enabled = !0;
      class N {
        constructor(e) {
          (this.container = e),
            (this.animationSpeed = 1),
            (this.perspective = 800),
            (this.effects = {
              goo: "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nuniform sampler2D u_map;\nuniform sampler2D u_hovermap;\n\nuniform float u_alpha;\nuniform float u_time;\nuniform float u_progressHover;\nuniform float u_progressClick;\n\nuniform vec2 u_res;\nuniform vec2 u_mouse;\nuniform vec2 u_ratio;\nuniform vec2 u_hoverratio;\n\nvarying vec2 v_uv;\n\nfloat circle(in vec2 _st, in float _radius, in float blurriness){\n    vec2 dist = _st;\n\t  return 1. - smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);\n}\n\nvoid main() {\n  vec2 resolution = u_res * PR;\n  float time = u_time * 0.05;\n  float progress = u_progressClick;\n\n  float progressHover = u_progressHover;\n  vec2 uv = v_uv;\n  vec2 uv_h = v_uv;\n\n  vec2 st = gl_FragCoord.xy / resolution.xy - vec2(.5);\n  st.y *= resolution.y / resolution.x;\n\n  vec2 mouse = vec2((u_mouse.x / u_res.x) * 2. - 1.,-(u_mouse.y / u_res.y) * 2. + 1.) * -.5;\n  mouse.y *= resolution.y / resolution.x;\n\n  vec2 cpos = st + mouse;\n\n  float c = circle(cpos, .025 * progressHover + progress * 0.8, 2.);\n\n  float offX = uv.x + sin(uv.y + time * 2.) * 0.3;\n  float offY = uv.y - time * .6 - cos(time * 5.) * 0.7;\n  float nc = (snoise(vec3(offX, offY, time * .5) * 8.)) * progressHover;\n  float nh = (snoise(vec3(offX, offY, time * .5 ) * 2.)) * .03;\n\n  uv_h -= vec2(0.5);\n  uv_h *= 1. - u_progressHover * 0.1;\n  uv_h += vec2(0.5);\n\n  uv_h *= u_hoverratio;\n\n  uv -= vec2(0.5);\n  uv *= 1. - u_progressHover * 0.2;\n  uv *= u_ratio;\n  uv += vec2(0.5);\n\n  vec4 image = texture2D(u_hovermap, uv_h);\n  vec4 imageDistorted = texture2D(u_map, uv + vec2(nh) * progressHover);\n\n  float finalMask = smoothstep(.99, 1., pow(c, 2.) * 4. + nc * (1. - progress));\n\n  vec4 finalImage = mix(imageDistorted, image, clamp(finalMask + progress, 0., 1.));\n\n  gl_FragColor = vec4(finalImage.rgb, u_alpha);\n}\n",
              letter:
                "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nuniform sampler2D u_map;\nuniform sampler2D u_hovermap;\nuniform sampler2D u_shape;\n\nuniform float u_time;\nuniform float u_alpha;\n\nuniform vec2 u_res;\nuniform vec2 u_ratio;\nuniform vec2 u_hoverratio;\nuniform vec2 u_mouse;\nuniform float u_progressHover;\nuniform float u_progressClick;\n\nvarying vec2 v_uv;\n\nvoid main() {\n  vec2 resolution = u_res * PR;\n  vec2 uv = v_uv;\n  vec2 uv_h = v_uv;\n  float time = u_time * 0.05;\n  float progress = u_progressClick;\n  float progressHover = u_progressHover;\n\n  vec2 st = gl_FragCoord.xy / resolution.xy - vec2(.5);\n  st.y *= resolution.y / resolution.x;\n\n  vec2 mouse = vec2((u_mouse.x / u_res.x) * 2. - 1.,-(u_mouse.y / u_res.y) * 2. + 1.) * -.5;\n  mouse.y *= resolution.y / resolution.x;\n\n  uv -= vec2(0.5);\n  uv *= 1. - u_progressHover * 0.03;\n  uv *= u_ratio;\n  uv += vec2(0.5);\n\n  vec2 shapeUv = (st + mouse) * 3.;\n  shapeUv *= 1.2 - (progressHover + progress) * 0.8;\n  shapeUv /= progressHover;\n  shapeUv += vec2(.5);\n\n  vec4 shape = texture2D(u_shape, shapeUv);\n\n  float s = (shape.r) * 5. * (1. - progress);\n  float offX = uv.x + sin(uv.y + time * 2.) * 0.3;\n  float offY = uv.y - time * .6 - cos(time * 5.) * 0.7;\n  float n = snoise(vec3(offX, offY, time) * 5.) + 2.;\n\n  uv_h -= vec2(0.5);\n  uv_h *= 1. - progressHover * 0.05;\n  uv_h *= u_hoverratio;\n  uv_h += vec2(0.5);\n\n  vec4 image = texture2D(u_map, uv + mouse * 0.05 * progressHover * (1. - progress));\n  vec4 hover = texture2D(u_hovermap, uv_h + mouse * 0.5 * progressHover * (1. - progress));\n\n  float pct = smoothstep(.99, 1., clamp(n - s, 0., 1.) + progress);\n\n  vec4 finalImage = mix(image, hover, pct);\n\n  gl_FragColor = vec4(finalImage.rgb, u_alpha) ;\n  // gl_FragColor = vec4(vec3(pct), 1.);\n}\n",
            }),
            (this.W = window.innerWidth),
            (this.H = window.innerHeight),
            (this.mouse = new i.l(0, 0)),
            (this.activeTile = null),
            this.init(),
            this.start(),
            this.bindEvent();
        }
        init() {
          (this.renderer = new i.n({ canvas: this.container, alpha: !0 })),
            this.renderer.setSize(this.W, this.H),
            this.renderer.setPixelRatio(window.devicePixelRatio);
        }
        bindEvent() {
          document.addEventListener(_.toggle, ({ detail: e }) => {
            this.onToggleView(e);
          }),
            document.addEventListener(S.scroll, ({ detail: e }) => {
              this.onAnimate(e);
            }),
            window.addEventListener("resize", () => {
              this.onResize();
            }),
            F.a.subscribe(y.end, () => {
              this.start();
            }),
            F.a.subscribe(g.end, () => {
              cancelAnimationFrame(this.rafID);
            });
        }
        onAnimate(e) {
          const t = this.tiles.filter(
            (e) =>
              e.$els.scrollTrigger.dataset && e.$els.scrollTrigger.dataset.show
          );
          t && [...t].map((e) => e.onScroll());
        }
        start() {
          (this.$tiles = [...document.querySelectorAll("[data-hover-effect]")]),
            (this.$hoverImages = [
              ...document.querySelectorAll("[data-webgl-hover]"),
            ]),
            (this.hasTiles = this.$tiles.length),
            (this.mainScene = new i.i()),
            this.initCamera(),
            this.initLights(),
            this.hasTiles &&
              (this.tiles = this.$tiles.map((e) => {
                const t = e.dataset.hoverEffect || "goo";
                return new V(e, this, this.animationSpeed, this.effects[t]);
              })),
            this.$hoverImages.length &&
              (this.hoverImages = this.$hoverImages.map(
                (e) => new $(e, this, this.animationSpeed, this.effects.hover)
              )),
            this.update();
        }
        initCamera() {
          const e =
            (2 * Math.atan(this.H / 2 / this.perspective) * 180) / Math.PI;
          (this.camera = new i.g(e, this.W / this.H, 1, 1e4)),
            this.camera.position.set(0, 0, this.perspective);
        }
        initLights() {
          const e = new i.a(16777215, 2);
          this.mainScene.add(e);
        }
        onResize() {
          (this.W = window.innerWidth),
            (this.H = window.innerHeight),
            (this.camera.aspect = this.W / this.H),
            this.camera.updateProjectionMatrix(),
            this.renderer.setSize(this.W, this.H);
        }
        onToggleView({ target: e, open: t }) {
          (this.activeTile = e),
            r(x.stop, { lock: t }),
            r(S.zoom, { tile: this.activeTile, open: t });
        }
        update() {
          this.hasTiles &&
            this.tiles.forEach((e) => {
              e.update();
            }),
            this.renderer.render(this.mainScene, this.camera),
            (this.rafID = requestAnimationFrame(() => this.update()));
        }
      }
      class Y {
        constructor() {
          (this.touch = window.Modernizr && window.Modernizr.touchevents),
            (this.$els = { scene: document.getElementById("scene") }),
            this.$els.scene && !this.touch && this.init();
        }
        init() {
          this.scene = new N(this.$els.scene);
        }
      }
      var U = s("./node_modules/@barba/core/dist/barba.umd.js"),
        X = s.n(U),
        W = s("./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
      class G {
        constructor() {
          (this.DOM = {
            overlay: ".page-overlay",
            darkener: ".page-darkener",
            page: ".page-holder",
            wrapper: ".wrapper",
          }),
            (this.overlay = document.querySelector(this.DOM.overlay)),
            (this.darkener = document.querySelector(this.DOM.darkener)),
            (this.page = document.querySelector(this.DOM.page)),
            (this.animationSpeed = 1.5),
            (this.pageMovementValue = 200),
            PubSub.subscribe(g.start, (e, t) => {
              this.page = t.next.container.querySelector(this.DOM.page);
            });
        }
        setGlobals(e) {
          (this.axis = "horizontal" === e.direction ? "x" : "y"),
            (this.oppositeMovement = e.oppositeMovement);
        }
        showPage(e) {
          return new Promise((t, s) => {
            try {
              this.setGlobals(e),
                new h.e({
                  onComplete: () => {
                    t();
                  },
                })
                  .timeScale(4)
                  .add(this.showContent(e));
            } catch (e) {
              s();
            }
          });
        }
        hidePage(e) {
          return new Promise((t, s) => {
            try {
              this.setGlobals(e);
              const s = new h.e({
                onComplete: () => {
                  t();
                },
              });
              "x" == this.axis &&
                TweenLite.set(this.overlay, {
                  y: "0",
                  x: this.oppositeMovement ? "-100%" : "100%",
                }),
                s.add(this.showOverlay(e), 0).add(this.hideContent(e), 0);
            } catch (e) {
              s();
            }
          });
        }
        hideContent(e) {
          return (
            this.setGlobals(e),
            new h.e().add(this.movePageDown(e), 0).add(this.showDarkener(e), 0)
          );
        }
        showContent(e) {
          return this.setGlobals(e), new h.e().add(this.movePageUp(e));
        }
        movePageUp(e) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.page,
              this.animationSpeed,
              {
                [this.axis]: "x" === this.axis ? 0 : this.pageMovementValue,
                overflow: "hidden",
                zIndex: 1020,
              },
              {
                [this.axis]: 0,
                clearProps: "".concat(this.axis, ", overflow, zIndex"),
                ease: h.d.easeInOut,
              },
              0
            )
          );
        }
        movePageDown(e) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.page,
              this.animationSpeed,
              { [this.axis]: 0, overflow: "hidden", zIndex: 1020 },
              {
                [this.axis]: this.oppositeMovement
                  ? this.pageMovementValue
                  : -this.pageMovementValue,
                clearProps: "".concat(this.axis, ", overflow, zIndex"),
                ease: h.d.easeInOut,
              },
              0
            )
          );
        }
        showDarkener(e) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.darkener,
              this.animationSpeed,
              { opacity: 0, [this.axis]: 0 },
              {
                [this.axis]: 0,
                opacity: 1,
                ease: h.d.easeInOut,
                clearProps: "opacity, ".concat(this.axis),
              },
              0
            )
          );
        }
        hideDarkener(e) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.darkener,
              this.animationSpeed,
              { opacity: 1, [this.axis]: 0 },
              {
                [this.axis]: 0,
                opacity: 0,
                ease: h.d.easeInOut,
                clearProps: "opacity, ".concat(this.axis),
              },
              0
            )
          );
        }
        showOverlay(e, t) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.overlay,
              this.animationSpeed,
              { [this.axis]: this.oppositeMovement ? "-100%" : "100%" },
              {
                [this.axis]: "0%",
                ease: h.d.easeInOut,
                onComplete: () => {
                  t && t();
                },
              }
            )
          );
        }
        hideOverlay(e, t) {
          return (
            this.setGlobals(e),
            new h.e().fromTo(
              this.overlay,
              this.animationSpeed,
              { [this.axis]: "0%" },
              {
                [this.axis]: this.oppositeMovement ? "100%" : "-100%",
                ease: h.d.easeInOut,
                clearProps: "x, y",
                onComplete: () => {
                  t && t();
                },
              }
            )
          );
        }
      }
      class Z {
        constructor() {
          (this.touch = window.Modernizr && window.Modernizr.touchevents),
            (this.mainNav = document.querySelector(".main-nav")),
            (this.links = [...this.mainNav.querySelectorAll(".list__link")]),
            (this.animationOverlay = new G()),
            (this.progressClass = "is-animating"),
            (this.ignoreAttr = "data-ajax-ignore"),
            (this.animationSettings = {
              direction: "vertical",
              oppositeMovement: !1,
            }),
            this.attachEvents(),
            this.init();
        }
        init() {
          const e = this;
          X.a.hooks.before(
            (e) =>
              new Promise((t, s) => {
                try {
                  !(function (e) {
                    const t = e.current.url.path,
                      s = e.next.url.path;
                    if (t === s) return !0;
                    return !1;
                  })(e)
                    ? t()
                    : (window.location = e.current.url.path);
                } catch (e) {
                  s();
                }
              })
          ),
            X.a.hooks.beforeLeave((e) => {
              Object(W.disableBodyScroll)(C),
                M.classList.add(this.progressClass),
                F.a.publish(g.start, e);
            }),
            X.a.hooks.afterLeave((e) => {
              F.a.publish(y.start, e);
            }),
            X.a.hooks.after(
              (e) =>
                new Promise((t, s) => {
                  try {
                    M.classList.remove(this.progressClass),
                      F.a.publish("ResetJS", e),
                      (this.activeLink = this.links.filter((t) =>
                        t.getAttribute("href") === e.next.url.path
                          ? t
                          : (t.classList.remove("is-active"), !1)
                      )),
                      this.activeLink.length &&
                        this.activeLink[0].classList.add("is-active"),
                      t();
                  } catch (e) {
                    s();
                  }
                })
            ),
            X.a.init({
              timeout: 5e3,
              transitions: [
                {
                  sync: !0,
                  custom: ({ trigger: t }) =>
                    !e.touch && t.dataset && "case" === t.dataset.ajax,
                  leave: (t) =>
                    new Promise((s) => {
                      F.a.subscribeOnce(b.toggle, () => {
                        e.animationOverlay.showOverlay(
                          { direction: "vertical", oppositeMovement: !0 },
                          () => {
                            F.a.publish(g.end, t), s();
                          }
                        );
                      });
                    }),
                  afterEnter: (t) =>
                    new Promise(async (s) => {
                      s(),
                        F.a.publish(y.end, t),
                        e.animationOverlay.hideOverlay({
                          direction: "vertical",
                          oppositeMovement: !0,
                        });
                      const i = setTimeout(() => {
                        r(x.update), clearTimeout(i);
                      }, (e.animationOverlay.animationSpeed / 3) * 1e3);
                    }),
                },
                {
                  sync: !0,
                  leave: (t) =>
                    new Promise(async (s) => {
                      await e.animationOverlay.hidePage(e.animationSettings),
                        s(),
                        F.a.publish(g.end, t);
                    }),
                  afterEnter: (t) =>
                    new Promise(async (s) => {
                      s(),
                        await e.animationOverlay.showPage(e.animationSettings),
                        F.a.publish(y.end, t),
                        e.animationOverlay.movePageUp(e.animationSettings),
                        e.animationOverlay.hideOverlay(
                          e.animationSettings,
                          () => {
                            r(x.update);
                          }
                        );
                    }),
                },
              ],
              prevent: ({ el: e }) => e.hasAttribute(this.ignoreAttr),
              requestError: (e, t, s, i) => !1,
            });
        }
        attachEvents() {
          F.a.subscribe(g.start, (e, t) => {
            r(x.destroy);
          }),
            F.a.subscribe(y.end, (e, t) => {
              r(x.ready, t), Object(W.enableBodyScroll)(C);
            });
        }
      }
      var J = s(
        "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js"
      );
      class K {
        constructor(e = {}) {
          (this.offTopClass = "is-not-top"),
            (this.scrollTreshold = 25),
            (this.settings = Object.assign(this, e)),
            this.init();
        }
        init() {
          this.initScroll(), this.attachEvents();
        }
        initScroll() {
          (this.scroll = new J.a(this.settings)),
            (window.customScroll = this.scroll),
            this.scroll.on("scroll", (e) => {
              (this.scrollData = e),
                this.checkPageTop(),
                r(x.scrolling, { scrollData: this.scrollData });
            }),
            this.scroll.on("call", (e, t, s) => {
              r(x.call, { scrollData: { name: e, direction: t, obj: s } });
            }),
            C.classList.remove(this.offTopClass);
        }
        setWindowScroll() {
          window.scroll = this.scrollData && this.scrollData.scroll;
        }
        checkPageTop() {
          this.scrollData.scroll.y > this.scrollTreshold
            ? C.classList.add(this.offTopClass)
            : C.classList.remove(this.offTopClass);
        }
        update() {
          this.scroll.update();
        }
        attachEvents() {
          document.addEventListener(x.ready, (e) => {
            (this.settings.el = e.detail.next.container),
              (this.settings.elMobile = e.detail.next.container),
              this.initScroll();
          }),
            document.addEventListener(x.destroy, () => {
              this.scroll.destroy();
            }),
            document.addEventListener(x.update, () => {
              this.scroll.update();
            }),
            document.addEventListener(x.stop, () => {
              this.scroll.stop();
            }),
            document.addEventListener(x.scrollTo, (e) => {
              this.scroll.scrollTo(e.detail.target);
            }),
            document.addEventListener(x.play, () => {
              this.scroll.start();
            });
        }
      }
      class Q {
        constructor(e) {
          (this.holder = e),
            (this.pageActiveClass = "menu--opened"),
            (this.toggleActiveClass = "toggler--active"),
            (this.menuAnimationSpeed = 0.55),
            (this.rafID = null),
            (this.outEventForbidden = !1),
            (this.ease = h.a.easeOut),
            this.init(),
            this.attachEvents();
        }
        init() {
          (this.toggle = this.holder.querySelector("[data-menu-opener]")),
            (this.overlay = this.holder.querySelector(
              ".header-collapse__overlay"
            )),
            (this.collapse = this.holder.querySelector(".header-collapse")),
            (this.scroller = this.holder.querySelector(
              ".header-collapse__scroller"
            )),
            (this.collapseHolder = this.holder.querySelector(
              ".header-collapse__holder"
            )),
            (this.menuItems = this.holder.querySelectorAll(".main-nav__item")),
            (this.menuItemsText = this.holder.querySelectorAll(
              ".main-nav .link__text"
            )),
            (this.staggers = this.holder.querySelectorAll(".info-box")),
            this.toggle.addEventListener("click", (e) => {
              e.preventDefault(),
                C.classList.contains(this.pageActiveClass)
                  ? this.close()
                  : this.open();
            }),
            F.a.subscribe(g.end, () => {
              C.classList.contains(this.pageActiveClass) && this.close();
            });
        }
        open() {
          (this.reverseMovement = !1),
            C.classList.add(this.pageActiveClass),
            this.toggle.classList.add(this.toggleActiveClass),
            Object(W.disableBodyScroll)(this.scroller),
            this.animateMenuIn().play(),
            this.moveOverlay().play();
        }
        close() {
          (this.reverseMovement = !0),
            C.classList.remove(this.pageActiveClass),
            this.toggle.classList.remove(this.toggleActiveClass),
            this.animateMenuIn().reverse(0),
            this.moveOverlay().reverse(0);
        }
        attachEvents() {
          F.a.subscribe(g.end, () => {
            C.classList.remove(this.pageActiveClass),
              this.toggle.classList.remove(this.toggleActiveClass);
          });
        }
        animateMenuIn() {
          const e = () => {
            Object(W.enableBodyScroll)(this.scroller);
          };
          h.f.set(this.menuItems, {
            overflow: "hidden",
            pointerEvents: "none",
            clearProps: "overflow, pointerEvents",
          });
          const t = new h.e({
            paused: !0,
            onComplete: () => {
              e();
            },
            onReverseComplete: () => {
              e();
            },
          });
          return (
            t.staggerFromTo(
              this.menuItemsText,
              0.5,
              { y: this.reverseMovement ? -150 : 150, opacity: 0 },
              { y: 0, opacity: 1, ease: this.ease },
              this.reverseMovement ? -0.065 : 0.065,
              0.35
            ),
            t.staggerFromTo(
              this.staggers,
              0.5,
              { opacity: 0 },
              { opacity: 1 },
              0.1,
              0.5
            ),
            t
          );
        }
        moveOverlay() {
          const e = new h.e({
            paused: !0,
            onComplete: () => {
              F.a.publish(m.end);
            },
            onReverseComplete: () => {
              F.a.publish(v.end), h.f.set(this.overlay, { clearProps: "all" });
            },
          });
          return (
            e.fromTo(
              this.collapse,
              this.menuAnimationSpeed,
              {
                y: this.reverseMovement ? "-100%" : "100%",
                ease: this.reverseMovement ? h.a.easeOut : h.a.easeIn,
              },
              { y: "0%" },
              0
            ),
            e.fromTo(
              this.overlay,
              this.menuAnimationSpeed,
              {
                y: this.reverseMovement ? "100%" : "-100%",
                ease: this.reverseMovement ? h.a.easeOut : h.a.easeIn,
              },
              { y: "0%" },
              0
            ),
            e.fromTo(
              this.collapseHolder,
              0.35,
              { autoAlpha: 0 },
              { autoAlpha: 1 },
              "-=0.15"
            ),
            e
          );
        }
      }
      class ee {
        constructor(e) {
          (this.holder = e), this.holder && ((this.duration = 2), this.init());
        }
        init() {
          (this.content = this.holder.querySelector(".intro-section__content")),
            (this.progress = this.holder.querySelector(
              ".section-counter__text"
            )),
            (this.animatedText =
              this.holder.querySelector('[data-word="now"]')),
            (this.fadeItems = [
              ...this.holder.querySelectorAll('[data-scroll-call="fadeIn"]'),
            ]),
            (this.splitItems = [
              ...this.holder.querySelectorAll(
                '[data-scroll-call="splitLines"]'
              ),
            ]),
            (this.allItems = this.content.querySelectorAll(
              '.word, [data-scroll-call="fadeIn"]'
            )),
            (this.timeline = new h.e({
              onUpdate: () => {
                const e = Math.round(100 * this.timeline.progress(), 10);
                this.progress &&
                  (this.progress.innerHTML = "".concat(e, " - 100"));
              },
              onComplete: () => {
                this.hidePreloader().play();
              },
            })),
            Object(W.disableBodyScroll)(C),
            this.animate();
        }
        triggerAnimationHandler(e) {
          e.classList.add("is-inview");
          const t = new CustomEvent("triggerAnimation");
          e.dispatchEvent(t);
        }
        animate() {
          this.fadeItems.map((e) => this.triggerAnimationHandler(e)),
            this.splitItems.map((e) => this.triggerAnimationHandler(e));
          let e = 0;
          (this.textBlink = new h.e({
            repeat: 3,
            onRepeat: () => {
              e % 2
                ? this.animatedText.classList.add("italic-outline")
                : this.animatedText.classList.remove("italic-outline"),
                (e += 1);
            },
            onComplete: () => {
              this.animatedText.classList.add("italic-outline");
            },
          })),
            this.textBlink.to(this.animatedText, this.duration / 3, {
              yoyo: !0,
              opacity: 0,
              ease: Expo.easeInOut,
            }),
            this.timeline.add(this.textBlink),
            this.timeline.play();
        }
        hidePreloader() {
          const e = new h.e({
            onComplete: () => {
              PubSub.publish(p.end),
                TweenMax.to(this.holder, 1, {
                  y: "-100%",
                  ease: Circ.easeInOut,
                  onComplete: () => {
                    Object(W.enableBodyScroll)(C), this.holder.remove();
                  },
                });
            },
          });
          var t;
          return (
            e.staggerFromTo(
              ((t = this.allItems), [...t].sort(() => 0.5 - Math.random())),
              1,
              { opacity: 1 },
              { opacity: 0 },
              0.05
            ),
            e
          );
        }
      }
      function te() {
        navigator.platform.indexOf("Mac") > -1 || M.classList.add("is-win");
      }
      document.ready(async () => {
        await H(),
          (function () {
            const e = document.getElementById("preloader");
            new ee(e);
          })(),
          new Z(),
          (function () {
            const e = document.querySelector(".header");
            new Q(e);
          })(),
          (function () {
            const e = window.Webgl || {};
            (window.Webgl = e), (e.Stage = new Y());
          })(),
          te(),
          PubSub.subscribe(p.end, () => {
            !(function (e) {
              const t = e
                ? e.querySelector(".wrapper")
                : document.querySelector(".wrapper");
              new K({
                el: t,
                elMobile: t,
                smooth: !0,
                smoothMobile: !1,
                getDirection: !0,
                inertia: 0.65,
              });
            })(),
              M.classList.remove("is-loading");
          }),
          PubSub.subscribe("ResetJS", async (e, t) => {
            await H();
          });
      });
    },
    "./src/js/utils/vh.js": function (e, t, s) {
      !(function () {
        function e() {
          document.documentElement.style.setProperty(
            "--full-viewport",
            "".concat(window.innerHeight, "px")
          );
        }
        e(),
          window.addEventListener("resize", () => {
            e();
          });
      })(window, document);
    },
    "./src/styles/main.scss": function (e, t, s) {},
    0: function (e, t, s) {
      s("./node_modules/core-js/modules/es.array.iterator.js"),
        s("./node_modules/regenerator-runtime/runtime.js"),
        s("./src/js/app.js"),
        (e.exports = s("./src/styles/main.scss"));
    },
  },
  [[0, 1, 2, 4, 5, 3]],
]);
