(function () {
    "use strict";
    function e(e, t, o) {
        function a() {
            for (
                var e = Math.cos,
                    a = [
                        new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, 1, 1),
                        new THREE.Vector3(1, -1, 1),new THREE.Vector3(1, -1, -1), new THREE.Vector3(-1, -1, -1),new THREE.Vector3(-1, -1, 1),
                    ],
                    s = 0; 8 > s; s++
            )
                C.push([]), L.push([]);
            for (var r = i / 2, l = new THREE.Vector3(b, f, z), c = 0; c <= o; c++) {
                var m = c / o, d = m * r, g = e(d), p = n(d);
                if (c == o) {
                    M.set(0, 1, 0); var h = M.clone().multiplyScalar(t).add(l); C[0].push(h), A.push(h); var v = M.clone(); L[0].push(v), E.push(v);
                    continue;
                }
                for (var S = 0; S <= o; S++) {
                    var w = S / o, u = w * r; (M.x = g * e(u)), (M.y = p), (M.z = g * n(u));
                    var h = M.clone().multiplyScalar(t).add(l);  C[0].push(h), A.push(h); var v = M.clone().normalize();  L[0].push(v), E.push(v);
                }
            }
            for (var T = 1; 8 > T; T++)
                for (var h, s = 0; s < C[0].length; s++) {
                    (h = C[0][s].clone().multiply(a[T])), C[T].push(h), A.push(h);var v = L[0][s].clone().multiply(a[T]); L[T].push(v), E.push(v);
                }
        }
        function s() {
            for (var e, t = [!0, !1, !0, !1, !1, !0, !1, !0], s = x * (o - 1), r = 0; 8 > r; r++) {e = _ * r;
                for (var n = 0; n < o - 1; n++)
                    for (var l = n * x, m = (n + 1) * x, g = 0; g < o; g++) {
                        var p = g + 1, h = e + l + g, y = e + l + p, f = e + m + g, z = e + m + p;
                        t[r] ? (P.push(h), P.push(f), P.push(y), P.push(y), P.push(f), P.push(z)) : (P.push(h), P.push(y), P.push(f), P.push(y), P.push(z), P.push(f));
                    }
                for (var g = 0; g < o; g++) {
                    var h = e + s + g,  y = e + s + g + 1,  f = e + D;
                    t[r] ? (P.push(h), P.push(f), P.push(y)) : (P.push(h), P.push(y), P.push(f));
                }
            }
        }
        function r() {
            var e = D,t = D + _,  s = D + 2 * _, r = D + 3 * _;
            P.push(e), P.push(t),P.push(s),  P.push(e),  P.push(s),   P.push(r), (e = D + 4 * _), (t = D + 5 * _),(s = D + 6 * _), (r = D + 7 * _),
                P.push(e), P.push(s), P.push(t), P.push(e),P.push(r),P.push(s), (e = 0),  (t = _), (s = 4 * _),   (r = 5 * _),
                P.push(e),   P.push(s),   P.push(t),  P.push(t),      P.push(s), P.push(r),(e = 2 * _),    (t = 3 * _),   (s = 6 * _),  (r = 7 * _),
                P.push(e),  P.push(s),  P.push(t),   P.push(t), P.push(s),  P.push(r),(e = o),  (t = o + 3 * _),  (s = o + 4 * _), (r = o + 7 * _),
                P.push(e), P.push(t), P.push(s), P.push(t),   P.push(r), P.push(s),(e = o + _),  (t = o + 2 * _),(s = o + 5 * _),(r = o + 6 * _),
                P.push(e), P.push(s),  P.push(t), P.push(t),  P.push(s), P.push(r);
        }
        function m() {
            for (var e = 0; 4 > e; e++)
                for (var t = e * _, s = 4 * _ + t, r = !0 & e, n = 0; n < o; n++) {
                    var l = n + 1,  m = t + n,  a = t + l,  g = s + n,  c = s + l;
                    r ? (P.push(m), P.push(g), P.push(a), P.push(a), P.push(g), P.push(c)) : (P.push(m), P.push(a), P.push(g), P.push(a), P.push(c), P.push(g));
                }
        }
        function u() {
            for (var e = [0, 2, 4, 6], t = [1, 3, 5, 7], s = 0; 4 > s; s++)
                for (var r = _ * e[s], n = _ * t[s], l = 1 >= s, m = 0; m < o; m++) {
                    var g = m * x, p = (m + 1) * x,  h = r + g,  a = r + p, y = n + g,c = n + p;
                    l ? (P.push(h), P.push(y), P.push(a), P.push(a), P.push(y), P.push(c)) : (P.push(h), P.push(a), P.push(y), P.push(a), P.push(c), P.push(y));
                }
        }
        function g() {
            for (var e = o - 1, t = [0, 1, 4, 5], s = [3, 2, 7, 6], r = [0, 1, 1, 0], n = 0; 4 > n; n++)
                for (var l = t[n] * _, m = s[n] * _, g = 0; g <= e; g++) {
                    var p = l + o + g * x, a = l + (g == e ? _ - 1 : o + (g + 1) * x), h = m + o + g * x, c = m + (g == e ? _ - 1 : o + (g + 1) * x);
                    r[n] ? (P.push(p), P.push(h), P.push(a), P.push(a), P.push(h), P.push(c)) : (P.push(p), P.push(a), P.push(h), P.push(a), P.push(c), P.push(h));
                }
        }
        THREE.BufferGeometry.call(this), (this.type = "RoundedBoxGeometry"), (o = isNaN(o) ? 1 : c(1, d(o)));
        var p, h, y;
        (p = h = y = e), (t = e * t), (t = l(t, l(p, l(h, l(y))) / 2));
        var b = p / 2 - t, f = h / 2 - t, z = y / 2 - t;
        this.parameters = { width: p, height: h, depth: y, radius: t, radiusSegments: o };
        var x = o + 1,
            v = (x * o + 1) << 3,S = new THREE.BufferAttribute(new Float32Array(3 * v), 3), w = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
            C = [], L = [],  T = new THREE.Vector3(), M = new THREE.Vector3(),  A = [], E = [], P = [],D = x * o, _ = x * o + 1; a(), r(), s(), m(), g(), u();
        for (var k = 0, V = 0; V < A.length; V++) S.setXYZ(k, A[V].x, A[V].y, A[V].z), w.setXYZ(k, E[V].x, E[V].y, E[V].z), k++;
        this.setIndex(new THREE.BufferAttribute(new Uint16Array(P), 1)), this.addAttribute("position", S), this.addAttribute("normal", w);
    }
    function t(e, t, a) {
        var o, s, r, n; (o = s = -e / 2), (r = n = e), (t = e * t);
        const i = new THREE.Shape();
        i.moveTo(o, s + t),
            i.lineTo(o, s + n - t), i.quadraticCurveTo(o, s + n, o + t, s + n),i.lineTo(o + r - t, s + n), i.quadraticCurveTo(o + r, s + n, o + r, s + n - t),
            i.lineTo(o + r, s + t),i.quadraticCurveTo(o + r, s, o + r - t, s), i.lineTo(o + t, s),
            i.quadraticCurveTo(o, s, o, s + t);const l = new THREE.ExtrudeBufferGeometry(i, { depth: a, bevelEnabled: !1, curveSegments: 3 });
        return l;
    }
    var a = Math.sign, o = Math.abs,  s = Math.pow,r = Math.round,n = Math.sin, i = Math.PI,  l = Math.min,  c = Math.max,   d = Math.floor,
        m = Math.tan;
    const u = (() => { let e = 0;
        return new (class {
            constructor() {
                (this.ids = []), (this.animations = {}), (this.update = this.update.bind(this)), (this.raf = 0), (this.time = 0);
            }
            update() {
                const e = performance.now(),  t = e - this.time; this.time = e;  let a = this.ids.length;
                for (this.raf = a ? requestAnimationFrame(this.update) : 0; a--; ) this.animations[this.ids[a]] && this.animations[this.ids[a]].update(t);
            }
            add(t) {
                (t.id = e++), this.ids.push(t.id), (this.animations[t.id] = t);
                0 !== this.raf || ((this.time = performance.now()), (this.raf = requestAnimationFrame(this.update)));
            }
            remove(e) {
                const t = this.ids.indexOf(e.id);0 > t || (this.ids.splice(t, 1), delete this.animations[e.id], (e = null));
            }
        })();
    })();
    class g {
        constructor(e) {
            !0 === e && this.start();
        }
        start() {
            u.add(this);
        }
        stop() {
            u.remove(this);
        }
        update() {}
    }
    class p extends g {
        constructor(e) {
            super(!0),
                (this.game = e), (this.container = this.game.dom.game), (this.scene = new THREE.Scene()),(this.renderer = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 })),
                this.renderer.setPixelRatio(window.devicePixelRatio), this.container.appendChild(this.renderer.domElement), (this.camera = new THREE.PerspectiveCamera(2, 1, 0.1, 1e4)),
                (this.stage = { width: 2, height: 3 }),   (this.fov = 10),   this.createLights(),   (this.onResize = []),  this.resize(),
                window.addEventListener("resize", () => this.resize(), !1);
        }
        update() {
            this.renderer.render(this.scene, this.camera);
        }
        resize() {
            (this.width = this.container.offsetWidth), (this.height = this.container.offsetHeight), this.renderer.setSize(this.width, this.height), (this.camera.fov = this.fov), (this.camera.aspect = this.width / this.height);
            const e = this.stage.width / this.stage.height,
                t = this.fov * THREE.Math.DEG2RAD;
            let a = e < this.camera.aspect ? this.stage.height / 2 / m(t / 2) : this.stage.width / this.camera.aspect / (2 * m(t / 2));
            (a *= 0.5), this.camera.position.set(a, a, a), this.camera.lookAt(this.scene.position), this.camera.updateProjectionMatrix();
            const o = e < this.camera.aspect ? (this.height / 100) * e : this.width / 100;
            (document.documentElement.style.fontSize = o + "px"), this.onResize && this.onResize.forEach((e) => e());
        }
        createLights() {
            (this.lights = { holder: new THREE.Object3D(), ambient: new THREE.AmbientLight(16777215, 0.69), front: new THREE.DirectionalLight(16777215, 0.36), back: new THREE.DirectionalLight(16777215, 0.19) }),
                this.lights.front.position.set(1.5, 5, 3), this.lights.back.position.set(-1.5, -5, -3),  this.lights.holder.add(this.lights.ambient),
                this.lights.holder.add(this.lights.front), this.lights.holder.add(this.lights.back),  this.scene.add(this.lights.holder);
        }
    }
    (e.prototype = Object.create(THREE.BufferGeometry.prototype)), (e.constructor = e);
    class h {
        constructor(e) {
            (this.game = e),
                (this.size = 3),
                (this.geometry = { pieceCornerRadius: 0.12, edgeCornerRoundness: 0.15, edgeScale: 0.82, edgeDepth: 0.01 }),
                (this.holder = new THREE.Object3D()), (this.object = new THREE.Object3D()), (this.animator = new THREE.Object3D()),
                this.holder.add(this.animator), this.animator.add(this.object),this.game.world.scene.add(this.holder);
        }
        init() {
            (this.cubes = []),
                (this.object.children = []),
                this.object.add(this.game.controls.group),
                2 === this.size ? (this.scale = 1.25) : 3 === this.size ? (this.scale = 1) : 3 < this.size && (this.scale = 3 / this.size),
                this.object.scale.set(this.scale, this.scale, this.scale);
            const e = 2 === this.size ? 0.825 : 1;
            this.game.controls.edges.scale.set(e, e, e),this.generatePositions(), this.generateModel(), this.pieces.forEach((e) => {
                    this.cubes.push(e.userData.cube), this.object.add(e);
                }),
                this.holder.traverse((e) => {  e.frustumCulled && (e.frustumCulled = !1);  }),
                this.updateColors(this.game.themes.getColors()), (this.sizeGenerated = this.size);
        }
        resize(e = !1) {
            (this.size !== this.sizeGenerated || e) && ((this.size = this.game.preferences.ranges.size.value), this.reset(), this.init(), (this.game.saved = !1), this.game.timer.reset(), this.game.storage.clearGame());
        }
        reset() {
            this.game.controls.edges.rotation.set(0, 0, 0), this.holder.rotation.set(0, 0, 0), this.object.rotation.set(0, 0, 0), this.animator.rotation.set(0, 0, 0);
        }
        generatePositions() {
            const e = this.size - 1,t = 0 == this.size % 2 ? 0.5 - this.size / 2 : 0 - d(this.size / 2); let a, o, s;
            for (this.positions = [], a = 0; a < this.size; a++)
                for (o = 0; o < this.size; o++)
                    for (s = 0; s < this.size; s++) {
                        let r = new THREE.Vector3(t + a, t + o, t + s),  n = [];
                        0 == a && n.push(0), a == e && n.push(1), 0 == o && n.push(2), o == e && n.push(3), 0 == s && n.push(4), s == e && n.push(5), (r.edges = n), this.positions.push(r);
                    }
        }
        generateModel() {
            (this.pieces = []), (this.edges = []);
            const a = 1 / 3,
                o = new THREE.MeshLambertMaterial(), s = new THREE.Mesh(new e(a, this.geometry.pieceCornerRadius, 3), o.clone()), r = t(a, this.geometry.edgeCornerRoundness, this.geometry.edgeDepth);
            this.positions.forEach((e, t) => {
                const n = new THREE.Object3D(), l = s.clone(), c = []; n.position.copy(e.clone().divideScalar(3)), n.add(l), (n.name = t),
                    (n.edgesName = ""),   e.edges.forEach((e) => { const t = new THREE.Mesh(r, o.clone()),s = ["L", "R", "D", "U", "B", "F"][e],
                            l = a / 2;t.position.set(l * [-1, 1, 0, 0, 0, 0][e], l * [0, 0, -1, 1, 0, 0][e], l * [0, 0, 0, 0, -1, 1][e]),
                            t.rotation.set((i / 2) * [0, 0, 1, -1, 0, 0][e], (i / 2) * [-1, 1, 0, 0, 2, 0][e], 0),
                            t.scale.set(this.geometry.edgeScale, this.geometry.edgeScale, this.geometry.edgeScale),
                            (t.name = s),  n.add(t),     c.push(s),  this.edges.push(t);
                    }),
                    (n.userData.edges = c), (n.userData.cube = l), (n.userData.start = { position: n.position.clone(), rotation: n.rotation.clone() }),
                    this.pieces.push(n);});
        }
        updateColors(e) {
            ("object" != typeof this.pieces && "object" != typeof this.edges) || (this.pieces.forEach((t) => t.userData.cube.material.color.setHex(e.P)), this.edges.forEach((t) => t.material.color.setHex(e[t.name])));
        }
        loadFromData(e) {
            (this.size = e.size),  this.reset(),  this.init(), this.pieces.forEach((t) => {  const a = e.names.indexOf(t.name),  o = e.positions[a], s = e.rotations[a];
                    t.position.set(o.x, o.y, o.z), t.rotation.set(s.x, s.y, s.z); });
        }
    }
    const y = {
        Power: { In: (e) => ((e = r(e || 1)), (a) => s(a, e)), Out: (e) => ((e = r(e || 1)), (a) => 1 - o(s(a - 1, e))), InOut: (e) => ((e = r(e || 1)), (a) => (0.5 > a ? s(2 * a, e) / 2 : (1 - o(s(2 * a - 1 - 1, e))) / 2 + 0.5)) },
        Sine: { In: () => (e) => 1 + n((i / 2) * e - i / 2), Out: () => (e) => n((i / 2) * e), InOut: () => (e) => (1 + n(i * e - i / 2)) / 2 },
        Back: { Out: (e) => ((e = e || 1.70158), (a) => (a -= 1) * a * ((e + 1) * a + e) + 1), In: (e) => ((e = e || 1.70158), (a) => a * a * ((e + 1) * a - e)) },
        Elastic: {
            Out: (e, t) => {
                let a = 2 * i, o = 1 <= e ? e : 1, r = (t || 0.3) / (1 > e ? e : 1),  l = (r / a) * (Math.asin(1 / o) || 0);
                return (r = a / r), (e) => o * s(2, -10 * e) * n((e - l) * r) + 1;
            },
        },
    };
    class b extends g {
        constructor(e) { super(!1),
                (this.duration = e.duration || 500), (this.easing = e.easing || ((e) => e)),   (this.onUpdate = e.onUpdate || (() => {})),
                (this.onComplete = e.onComplete || (() => {})), (this.delay = e.delay || !1), (this.yoyo = !e.yoyo && null),
                (this.progress = 0), (this.value = 0),  (this.delta = 0),    this.getFromTo(e),
                this.delay ? setTimeout(() => super.start(), this.delay) : super.start(),
                this.onUpdate(this);
        }
        update(e) {
            const t = 1 * this.value, a = !0 === this.yoyo ? -1 : 1;(this.progress += (e / this.duration) * a),
                (this.value = this.easing(this.progress)), (this.delta = this.value - t),  null !== this.values && this.updateFromTo(),
                null === this.yoyo ? (1 >= this.progress ? this.onUpdate(this) : ((this.progress = 1), (this.value = 1), this.onUpdate(this), this.onComplete(this), super.stop())) : this.updateYoyo();
        }
        updateYoyo() {
            (1 < this.progress || 0 > this.progress) && ((this.value = this.progress = 1 < this.progress ? 1 : 0), (this.yoyo = !this.yoyo)), this.onUpdate(this);
        }
        updateFromTo() {
            this.values.forEach((e) => {
                this.target[e] = this.from[e] + (this.to[e] - this.from[e]) * this.value;
            });
        }
        getFromTo(e) {
            return e.target && e.to
                ? void ((this.target = e.target || null),     (this.from = e.from || {}),    (this.to = e.to || null), (this.values = []),
                  1 > Object.keys(this.from).length &&   Object.keys(this.to).forEach((e) => { this.from[e] = this.target[e];
                      }),
                  Object.keys(this.to).forEach((e) => { this.values.push(e); }))
                : void (this.values = null);
        }
    }
    window.addEventListener("touchmove", () => {}),
        document.addEventListener(  "touchmove", (e) => { e.preventDefault();  },  { passive: !1 });
    class v {
        constructor(e, t) {
            return (
                (this.position = { current: new THREE.Vector2(), start: new THREE.Vector2(), delta: new THREE.Vector2(), old: new THREE.Vector2(), drag: new THREE.Vector2() }),
                (this.options = Object.assign({ calcDelta: !1 }, t || {})),  (this.element = e),  (this.touch = null),
                (this.drag = {
                    start: (e) => { ("mousedown" == e.type && 1 != e.which) || ("touchstart" == e.type && 1 < e.touches.length) ||  (this.getPositionCurrent(e),
                            this.options.calcDelta && ((this.position.start = this.position.current.clone()), this.position.delta.set(0, 0), this.position.drag.set(0, 0)),
                            (this.touch = "touchstart" == e.type),  this.onDragStart(this.position),
                            window.addEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1),
                            window.addEventListener(this.touch ? "touchend" : "mouseup", this.drag.end, !1));
                    },
                    move: (e) => { this.options.calcDelta && (this.position.old = this.position.current.clone()), this.getPositionCurrent(e),
                            this.options.calcDelta && ((this.position.delta = this.position.current.clone().sub(this.position.old)), (this.position.drag = this.position.current.clone().sub(this.position.start))),
                            this.onDragMove(this.position);
                    },
                    end: (e) => {this.getPositionCurrent(e), this.onDragEnd(this.position), window.removeEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1),
                            window.removeEventListener(this.touch ? "touchend" : "mouseup", this.drag.end, !1);
                    },
                }),
                (this.onDragStart = () => {}),   (this.onDragMove = () => {}),   (this.onDragEnd = () => {}),  this.enable(), this);
        }
        enable() {
            return this.element.addEventListener("touchstart", this.drag.start, !1), this.element.addEventListener("mousedown", this.drag.start, !1), this;
        }
        disable() {
            return this.element.removeEventListener("touchstart", this.drag.start, !1), this.element.removeEventListener("mousedown", this.drag.start, !1), this;
        }
        getPositionCurrent(e) {
            const t = e.touches ? e.touches[0] || e.changedTouches[0] : e; this.position.current.set(t.pageX, t.pageY);
        }
        convertPosition(e) {
            return (e.x = 2 * (e.x / this.element.offsetWidth) - 1), (e.y = -(2 * (e.y / this.element.offsetHeight) - 1)), e;
        }
    }
    const f = 0;
    class x {
        constructor(e) {
            (this.game = e), (this.flipConfig = 0), (this.flipEasings = [y.Power.Out(3), y.Sine.Out(), y.Back.Out(1.5)]), (this.flipSpeeds = [125, 200, 300]), (this.raycaster = new THREE.Raycaster());
            const t = new THREE.MeshBasicMaterial({ depthWrite: !1, transparent: !0, opacity: 0, color: 13311 });
            (this.group = new THREE.Object3D()),  (this.group.name = "controls"),    this.game.cube.object.add(this.group),
                (this.helper = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 200), t.clone())),  this.helper.rotation.set(0, i / 4, 0),
                this.game.world.scene.add(this.helper),(this.edges = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), t.clone())),
                this.game.world.scene.add(this.edges),  (this.onSolved = () => {}),  (this.onMove = () => {}),  (this.momentum = []),
                (this.scramble = null), (this.state = f),  (this.enabled = !1),  this.initDraggable();
        }
        enable() {this.draggable.enable(), (this.enabled = !0);}
        disable() { this.draggable.disable(), (this.enabled = !1);}
        initDraggable() {
            (this.draggable = new v(this.game.dom.game)), (this.draggable.onDragStart = (e) => {if (null === this.scramble && 1 !== this.state && 2 !== this.state) {
                        this.gettingDrag = 3 === this.state;   const t = this.getIntersect(e.current, this.edges, !1);
                        !1 !== t && (this.dragIntersect = this.getIntersect(e.current, this.game.cube.cubes, !0)),
                            !1 !== t && !1 !== this.dragIntersect ? ((this.dragNormal = t.face.normal.round()),
                                  (this.flipType = "layer"), this.attach(this.helper, this.edges),this.helper.rotation.set(0, 0, 0),
                                  this.helper.position.set(0, 0, 0),     this.helper.lookAt(this.dragNormal),   this.helper.translateZ(0.5),
                                  this.helper.updateMatrixWorld(),  this.detach(this.helper, this.edges))
                                : ((this.dragNormal = new THREE.Vector3(0, 0, 1)), (this.flipType = "cube"), this.helper.position.set(0, 0, 0), this.helper.rotation.set(0, i / 4, 0), this.helper.updateMatrixWorld());
                        let a = this.getIntersect(e.current, this.helper, !1);
                        !1 === a || ((this.dragCurrent = this.helper.worldToLocal(a.point)), (this.dragTotal = new THREE.Vector3()), (this.state = this.state === f ? 1 : this.state));
                    }
                }),
                (this.draggable.onDragMove = (e) => {
                    if (null === this.scramble && this.state !== f && (3 !== this.state || !1 !== this.gettingDrag)) {
                        const t = this.getIntersect(e.current, this.helper, !1);
                        if (!1 !== t) {
                            const a = this.helper.worldToLocal(t.point.clone());
                            if (
                                ((this.dragDelta = a.clone().sub(this.dragCurrent).setZ(0)),
                                this.dragTotal.add(this.dragDelta), (this.dragCurrent = a),   this.addMomentumPoint(this.dragDelta),
                                1 === this.state && 0.05 < this.dragTotal.length())
                            ) {
                                if (((this.dragDirection = this.getMainAxis(this.dragTotal)), "layer" === this.flipType)) {
                                    const e = new THREE.Vector3(); e[this.dragDirection] = 1; const t = this.helper.localToWorld(e).sub(this.helper.position),
                                        a = this.edges.worldToLocal(t).round(); (this.flipAxis = a.cross(this.dragNormal).negate()), this.selectLayer(this.getLayer(!1));
                                } else {
                                    const t = "x" == this.dragDirection ? "y" : "y" == this.dragDirection && e.current.x > this.game.world.width / 2 ? "z" : "x";
                                    (this.flipAxis = new THREE.Vector3()), (this.flipAxis[t] = 1 * ("x" == t ? -1 : 1));
                                }
                                (this.flipAngle = 0), (this.state = 2);
                            } else if (2 === this.state) {
                                const e = this.dragDelta[this.dragDirection];
                                "layer" === this.flipType
                                    ? (this.group.rotateOnAxis(this.flipAxis, e), (this.flipAngle += e))
                                    : (this.edges.rotateOnWorldAxis(this.flipAxis, e), this.game.cube.object.rotation.copy(this.edges.rotation), (this.flipAngle += e));
                            }
                        }
                    }
                }),
                (this.draggable.onDragEnd = () => {
                    if (null === this.scramble) {if (2 !== this.state) return (this.gettingDrag = !1), void (this.state = f);  this.state = 3;
                        const e = this.getMomentum()[this.dragDirection],
                            t = 0.05 < o(e) && o(this.flipAngle) < i / 2, s = t ? this.roundAngle(this.flipAngle + a(this.flipAngle) * (i / 4)) : this.roundAngle(this.flipAngle),
                            r = s - this.flipAngle;
                        "layer" === this.flipType
                            ? this.rotateLayer(r, !1, () => { this.game.storage.saveGame(), (this.state = this.gettingDrag ? 1 : f), (this.gettingDrag = !1), this.checkIsSolved();})
                            : this.rotateCube(r, () => {(this.state = this.gettingDrag ? 1 : f), (this.gettingDrag = !1); });
                    }
                });
        }
        rotateLayer(e, t, a) {
            const o = t ? 0 : this.flipConfig, s = this.flipEasings[o],  r = this.flipSpeeds[o], n = 2 == o ? this.bounceCube() : () => {};
            this.rotationTween = new b({
                easing: s, duration: r,
                onUpdate: (t) => {let a = t.delta * e;this.group.rotateOnAxis(this.flipAxis, a), n(t.value, a, e); },
                onComplete: () => {
                    t || this.onMove();  const e = this.flipLayer.slice(0); this.game.cube.object.rotation.setFromVector3(this.snapRotation(this.game.cube.object.rotation.toVector3())),
                        this.group.rotation.setFromVector3(this.snapRotation(this.group.rotation.toVector3())),
                        this.deselectLayer(this.flipLayer), a(e);
                },
            });
        }
        bounceCube() {
            let e = !0;return (t, a, o) => {1 <= t && (e && ((a = (t - 1) * o), (e = !1)), this.game.cube.object.rotateOnAxis(this.flipAxis, a)); };
        }
        rotateCube(e, t) {
            const a = this.flipConfig, o = [y.Power.Out(4), y.Sine.Out(), y.Back.Out(2)][a], s = [100, 150, 350][a];
            this.rotationTween = new b({ easing: o,  duration: s,  onUpdate: (t) => {
                    this.edges.rotateOnWorldAxis(this.flipAxis, t.delta * e), this.game.cube.object.rotation.copy(this.edges.rotation);
                },
                onComplete: () => {
                    this.edges.rotation.setFromVector3(this.snapRotation(this.edges.rotation.toVector3())), this.game.cube.object.rotation.copy(this.edges.rotation), t();
                },
            });
        }
        selectLayer(e) {
            this.group.rotation.set(0, 0, 0), this.movePieces(e, this.game.cube.object, this.group), (this.flipLayer = e);
        }
        deselectLayer(e) {
            this.movePieces(e, this.group, this.game.cube.object), (this.flipLayer = null);
        }
        movePieces(e, t, a) {
            t.updateMatrixWorld(), a.updateMatrixWorld(),
                e.forEach((e) => {
                    const o = this.game.cube.pieces[e];  o.applyMatrix(t.matrixWorld), t.remove(o), o.applyMatrix(new THREE.Matrix4().getInverse(a.matrixWorld)), a.add(o);
                });
        }
        getLayer(e) {
            const t = { 2: 6, 3: 3, 4: 4, 5: 3 }[this.game.cube.size],a = []; let o;
            if (!1 === e) {
                const a = this.dragIntersect.object.parent; (o = this.getMainAxis(this.flipAxis)), (e = a.position.clone().multiplyScalar(t).round());
            } else o = this.getMainAxis(e);
            return (
                this.game.cube.pieces.forEach((s) => { const r = s.position.clone().multiplyScalar(t).round();  r[o] == e[o] && a.push(s.name);
                }),
                a
            );
        }
        keyboardMove(e, t) {
            if (this.state === f && !0 === this.enabled)
                if ("LAYER" === e) {
                    const e = this.getLayer(t.position);
                    (this.flipAxis = new THREE.Vector3()), (this.flipAxis[t.axis] = 1),  (this.state = 2), this.selectLayer(e),
                        this.rotateLayer(t.angle, !1, () => {this.game.storage.saveGame(), (this.state = f), this.checkIsSolved();
                        });
                } else
                    "CUBE" === e &&
                        ((this.flipAxis = new THREE.Vector3()),  (this.flipAxis[t.axis] = 1), (this.state = 2),this.rotateCube(t.angle, () => {this.state = f;
                        }));
        }
        scrambleCube() {
            null == this.scramble && ((this.scramble = this.game.scrambler), (this.scramble.callback = "function" == typeof callback ? callback : () => {}));
            const e = this.scramble.converted, t = e[0], a = this.getLayer(t.position);
            (this.flipAxis = new THREE.Vector3()),  (this.flipAxis[t.axis] = 1), this.selectLayer(a), this.rotateLayer(t.angle, !0, () => {
                    e.shift(), 0 < e.length ? this.scrambleCube() : ((this.scramble = null), this.game.storage.saveGame());  });
        }
        getIntersect(e, t, a) {
            this.raycaster.setFromCamera(this.draggable.convertPosition(e.clone()), this.game.world.camera);
            const o = a ? this.raycaster.intersectObjects(t) : this.raycaster.intersectObject(t);return !!(0 < o.length) && o[0];
        }
        getMainAxis(e) {
            return Object.keys(e).reduce((t, a) => (o(e[t]) > o(e[a]) ? t : a));
        }
        detach(e, t) {
            e.applyMatrix(t.matrixWorld), t.remove(e), this.game.world.scene.add(e);
        }
        attach(e, t) {
            e.applyMatrix(new THREE.Matrix4().getInverse(t.matrixWorld)), this.game.world.scene.remove(e), t.add(e);
        }
        addMomentumPoint(e) {
            const t = Date.now(); (this.momentum = this.momentum.filter((e) => 500 > t - e.time)), !1 !== e && this.momentum.push({ delta: e, time: t });
        }
        getMomentum() {
            const e = this.momentum.length, t = new THREE.Vector2();
            return ( this.addMomentumPoint(!1),this.momentum.forEach((a, o) => { t.add(a.delta.multiplyScalar(o / e));  }),  t );
        }
        roundAngle(e) {const t = i / 2; return a(e) * r(o(e) / t) * t;}
        snapRotation(e) {
            return e.set(this.roundAngle(e.x), this.roundAngle(e.y), this.roundAngle(e.z));
        }
        checkIsSolved() {
            performance.now();
            let e = !0;
            const t = { "x-": [], "x+": [], "y-": [], "y+": [], "z-": [], "z+": [] };
            this.game.cube.edges.forEach((e) => { const a = e.parent.localToWorld(e.position.clone()).sub(this.game.cube.object.position),
                    o = this.getMainAxis(a),s = 1 > a.multiplyScalar(2).round()[o] ? "-" : "+";t[o + s].push(e.name);
            }),
                Object.keys(t).forEach((a) => {  t[a].every((e) => e === t[a][0]) || (e = !1);  }),
                e && this.onSolved();
        }
    }
    class z {
        constructor(e) {
            (this.game = e), (this.dificulty = 0), (this.scrambleLength = { 2: [7, 9, 11], 3: [20, 25, 30], 4: [30, 40, 50], 5: [40, 60, 80] }), (this.moves = []), (this.conveted = []), (this.pring = "");
        }
        scramble(e) {
            let t = 0;
            if (((this.moves = "undefined" == typeof e ? [] : e.split(" ")), 1 > this.moves.length)) {
                const a = this.scrambleLength[this.game.cube.size][this.dificulty], o = 4 > this.game.cube.size ? "UDLRFB" : "UuDdLlRrFfBb",
                    s = ["", "'", "2"],
                    r = "undefined" == typeof e ? a : e;
                for (; t < r; ) {
                    const e = o[d(Math.random() * o.length)] + s[d(3 * Math.random())];
                    (0 < t && e.charAt(0) == this.moves[t - 1].charAt(0)) || (1 < t && e.charAt(0) == this.moves[t - 2].charAt(0)) || (this.moves.push(e), t++);
                } }return (this.callback = () => {}), this.convert(), (this.print = this.moves.join(" ")), this;
        }
        convert() {
            (this.converted = []), this.moves.forEach((e) => { const t = this.convertMove(e),  a = e.charAt(1); this.converted.push(t), "2" == a && this.converted.push(t);
                });
        }
        convertMove(e) {
            const t = e.charAt(0),  a = e.charAt(1), o = { D: "y", U: "y", L: "x", R: "x", F: "z", B: "z" }[t.toUpperCase()];
            let s = { D: -1, U: 1, L: -1, R: 1, F: 1, B: -1 }[t.toUpperCase()];
            3 < this.game.cube.size && t !== t.toLowerCase() && (s *= 2);  const r = new THREE.Vector3();
            r[{ D: "y", U: "y", L: "x", R: "x", F: "z", B: "z" }[t.toUpperCase()]] = s;const n = (i / 2) * -s * ("'" == a ? -1 : 1);
            return { position: r, axis: o, angle: n, name: e };
        }
    }
    class S {
        constructor(e) {
            (this.game = e), (this.tweens = {}), (this.durations = {}), (this.data = { cubeY: -0.2, cameraZoom: 0.85 }), (this.activeTransitions = 0);
        }
        init() {
            this.game.controls.disable(),   (this.game.cube.object.position.y = this.data.cubeY), (this.game.cube.animator.position.y = 4),
                (this.game.cube.animator.rotation.x = -i / 3), (this.game.world.camera.zoom = this.data.cameraZoom), this.game.world.camera.updateProjectionMatrix(),
                (this.tweens.buttons = {}),   (this.tweens.timer = []), (this.tweens.title = []),(this.tweens.best = []), (this.tweens.complete = []),
                (this.tweens.prefs = []),                (this.tweens.theme = []), (this.tweens.stats = []);
        }
        buttons(e, t) {
            const a = (e, t) =>    new b({
                    target: e.style, duration: 300, easing: t ? y.Power.Out(2) : y.Power.In(3), from: { opacity: t ? 0 : 1 },  to: { opacity: t ? 1 : 0 },
                    onUpdate: (a) => { const o = t ? 1 - a.value : a.value; e.style.transform = `translate3d(0, ${1.5 * o}em, 0)`;
                    },
                    onComplete: () => (e.style.pointerEvents = t ? "all" : "none"),
                });
            t.forEach((e) => (this.tweens.buttons[e] = a(this.game.dom.buttons[e], !1))),
                setTimeout(
                    () =>
                        e.forEach((e) => {this.tweens.buttons[e] = a(this.game.dom.buttons[e], !0); }), t ? 500 : 0
                );
        }
        cube(e, t = !1) {  this.activeTransitions++;
            try { this.tweens.cube.stop();
            } catch (t) {}
            const a = this.game.cube.animator.position.y, o = this.game.cube.animator.rotation.x;
            (this.tweens.cube = new b({
                duration: e ? 3e3 : 1250, easing: e ? y.Elastic.Out(0.8, 0.6) : y.Back.In(1),
                onUpdate: (s) => {
                    (this.game.cube.animator.position.y = e ? (t ? 0.9 + 3.5 * (1 - s.value) : 4 * (1 - s.value)) : a + 4 * s.value), (this.game.cube.animator.rotation.x = e ? ((1 - s.value) * i) / 3 : o + (s.value * -i) / 3);
                }, })),t &&(e ? ((this.game.world.camera.zoom = 0.75), this.game.world.camera.updateProjectionMatrix()) : setTimeout(() => {
                              (this.game.world.camera.zoom = this.data.cameraZoom), this.game.world.camera.updateProjectionMatrix();}, 1500)),
                (this.durations.cube = e ? 1500 : 1500), setTimeout(() => this.activeTransitions--, this.durations.cube);
        }
        float() {
            try { this.tweens.float.stop();
            } catch (t) {}
            this.tweens.float = new b({
                duration: 1500,easing: y.Sine.InOut(),   yoyo: !0, onUpdate: (e) => {
                    (this.game.cube.holder.position.y = -0.02 + 0.04 * e.value),(this.game.cube.holder.rotation.x = 0.005 - 0.01 * e.value),
                        (this.game.cube.holder.rotation.z = -this.game.cube.holder.rotation.x),
                        (this.game.cube.holder.rotation.y = this.game.cube.holder.rotation.x),
                        (this.game.controls.edges.position.y = this.game.cube.holder.position.y + this.game.cube.object.position.y);
                },
            });
        }
        zoom(e, t) {
            this.activeTransitions++;const a = e ? 1 : this.data.cameraZoom,  o = 0 < t ? c(t, 1500) : 1500, s = 0 < t ? r(o / 1500) : 1,
                n = y.Power.InOut(0 < t ? 2 : 3);
            (this.tweens.zoom = new b({target: this.game.world.camera,  duration: o,easing: n,to: { zoom: a }, onUpdate: () => {
                    this.game.world.camera.updateProjectionMatrix();
                },
            })),
                (this.tweens.rotate = new b({
                    target: this.game.cube.animator.rotation, duration: o,   easing: n, to: { y: 2 * -i * s },  onComplete: () => {this.game.cube.animator.rotation.y = 0; },
                })),
                (this.durations.zoom = o),
                setTimeout(() => this.activeTransitions--, this.durations.zoom);
        }
        elevate(e) {
            this.activeTransitions++;
            this.tweens.elevate = new b({ target: this.game.cube.object.position, duration: e ? 1500 : 0, easing: y.Power.InOut(3), to: { y: e ? -0.05 : this.data.cubeY } });
            (this.durations.elevate = 1500), setTimeout(() => this.activeTransitions--, this.durations.elevate);
        }
        complete(e, t) {
            this.activeTransitions++; const a = t ? this.game.dom.texts.best : this.game.dom.texts.complete;null === a.querySelector("span i") && a.querySelectorAll("span").forEach((e) => this.splitLetters(e));
            const o = a.querySelectorAll(".icon, i"); this.flipLetters(t ? "best" : "complete", o, e), (a.style.opacity = 1);
            const s = this.durations[t ? "best" : "complete"];
            e || setTimeout(() => (this.game.dom.texts.timer.style.transform = ""), s), setTimeout(() => this.activeTransitions--, s);
        }
        stats(e) {
            e && this.game.scores.calcStats(), this.activeTransitions++,this.tweens.stats.forEach((e) => {  e.stop(), (e = null);  });
            let t = -1;
            const a = this.game.dom.stats.querySelectorAll(".stats"), o = e ? y.Power.Out(2) : y.Power.In(3);
            a.forEach((a, s) => { const r = s * (e ? 80 : 60); this.tweens.stats[t++] = new b({ delay: r, duration: 400,  easing: o,
                    onUpdate: (t) => {      const o = e ? 2 * (1 - t.value) : t.value, s = e ? t.value : 1 - t.value; (a.style.transform = `translate3d(0, ${o}em, 0)`), (a.style.opacity = s);
                    },
                });
            }),
                (this.durations.stats = 0),
                setTimeout(() => this.activeTransitions--, this.durations.stats);
        }
        preferences(e) {
            this.ranges(this.game.dom.prefs.querySelectorAll(".range"), "prefs", e);
        }
        theming(e) {
            this.ranges(this.game.dom.theme.querySelectorAll(".range"), "prefs", e);
        }
        ranges(e, t, a) {
            this.activeTransitions++,
                this.tweens[t].forEach((e) => {
                    e.stop(), (e = null);
                });
            const o = a ? y.Power.Out(2) : y.Power.In(3);
            let s = -1,  r = 0;
            e.forEach((e, n) => { const i = e.querySelector(".range__label"),  l = e.querySelector(".range__track-line"), c = e.querySelector(".range__handle"),
                    m = e.querySelectorAll(".range__list div"), d = n * (a ? 120 : 100);(i.style.opacity = a ? 0 : 1), (l.style.opacity = a ? 0 : 1),
                    (c.style.opacity = a ? 0 : 1),    (c.style.pointerEvents = a ? "all" : "none"),(this.tweens[t][s++] = new b({ delay: a ? d : d,
                        duration: 400,  easing: o,    onUpdate: (e) => {const t = a ? 1 - e.value : e.value,  o = a ? e.value : 1 - e.value;
                            (i.style.transform = `translate3d(0, ${t}em, 0)`), (i.style.opacity = o);
                        },
                    })),
                    (this.tweens[t][s++] = new b({
                        delay: a ? d + 100 : d, duration: 400, easing: o,  onUpdate: (e) => {const t = a ? 1 - e.value : e.value,
                                o = a ? e.value : 1 - e.value;
                            (l.style.transform = `translate3d(0, ${t}em, 0) scale3d(${o}, 1, 1)`), (l.style.opacity = o);
                        },
                    })),
                    (this.tweens[t][s++] = new b({
                        delay: a ? d + 100 : d,  duration: 400, easing: o,  onUpdate: (e) => {const t = a ? 1 - e.value : e.value, o = 1 - t,
                                s = 0.5 + 0.5 * o;(c.style.transform = `translate3d(0, ${t}em, 0) scale3d(${s}, ${s}, ${s})`), (c.style.opacity = o);
                        },
                    })),
                    m.forEach((e, r) => { (e.style.opacity = a ? 0 : 1), (this.tweens[t][s++] = new b({  delay: a ? d + 200 + 50 * r : d, duration: 400,
                                easing: o, onUpdate: (t) => {  const o = a ? 1 - t.value : t.value,s = a ? t.value : 1 - t.value;(e.style.transform = `translate3d(0, ${o}em, 0)`), (e.style.opacity = s);
                                },
                            }));
                    }),
                    (r = m.length > r ? m.length - 1 : r),(e.style.opacity = 1);
            }),
                (this.durations[t] = a ? 100 * (e.length - 1) + 200 + 50 * r + 400 : 100 * (e.length - 1) + 400),
                setTimeout(() => this.activeTransitions--, this.durations[t]);
        }
        title(e) {
            this.activeTransitions++;  const t = this.game.dom.texts.title;null === t.querySelector("span i") && t.querySelectorAll("span").forEach((e) => this.splitLetters(e));
            const a = t.querySelectorAll("i"); this.flipLetters("title", a, e), (t.style.opacity = 1); const o = this.game.dom.texts.note;
            (this.tweens.title[a.length] = new b({ target: o.style, easing: y.Sine.InOut(), duration: e ? 800 : 400, yoyo: !!e || null, from: { opacity: e ? 0 : parseFloat(getComputedStyle(o).opacity) }, to: { opacity: e ? 1 : 0 } })),
                setTimeout(() => this.activeTransitions--, this.durations.title);
        }
        timer(e) {
            this.activeTransitions++;  const t = this.game.dom.texts.timer; (t.style.opacity = 0), this.game.timer.convert(), this.game.timer.setText(), this.splitLetters(t);
            const a = t.querySelectorAll("i");this.flipLetters("timer", a, e), (t.style.opacity = 1), setTimeout(() => this.activeTransitions--, this.durations.timer);}
        splitLetters(e) {
            const t = e.innerHTML;  (e.innerHTML = ""),   t.split("").forEach((t) => { const a = document.createElement("i"); (a.innerHTML = t), e.appendChild(a);});
        }
        flipLetters(e, t, a) {
            try { this.tweens[e].forEach((e) => e.stop()); } catch (t) {}
            t.forEach((t, o) => {
                (t.style.opacity = a ? 0 : 1), (this.tweens[e][o] = new b({  easing: y.Sine.Out(), duration: a ? 800 : 400, delay: 50 * o,
                        onUpdate: (e) => { const o = a ? -80 * (1 - e.value) : 80 * e.value;(t.style.transform = `rotate3d(0, 1, 0, ${o}deg)`), (t.style.opacity = a ? e.value : 1 - e.value);
                        },
                    })); }), (this.durations[e] = 50 * (t.length - 1) + (a ? 800 : 400));
        }
    }
    
})();
