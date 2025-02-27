// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var fe = ((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (r, n)=>(typeof require != "undefined" ? require : r)[n]
    }) : e)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var u = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports);
var at = u((hP, it)=>{
    function Jp() {
        this.__data__ = [], this.size = 0;
    }
    it.exports = Jp;
});
var ee = u((pP, ot)=>{
    function Qp(e, r) {
        return e === r || e !== e && r !== r;
    }
    ot.exports = Qp;
});
var _e = u((lP, st)=>{
    var el = ee();
    function rl(e, r) {
        for(var n = e.length; n--;)if (el(e[n][0], r)) return n;
        return -1;
    }
    st.exports = rl;
});
var ft = u((vP, ut)=>{
    var nl = _e(), tl = Array.prototype, il = tl.splice;
    function al(e) {
        var r = this.__data__, n = nl(r, e);
        if (n < 0) return !1;
        var t = r.length - 1;
        return n == t ? r.pop() : il.call(r, n, 1), --this.size, !0;
    }
    ut.exports = al;
});
var dt = u((gP, ct)=>{
    var ol = _e();
    function sl(e) {
        var r = this.__data__, n = ol(r, e);
        return n < 0 ? void 0 : r[n][1];
    }
    ct.exports = sl;
});
var pt = u((qP, ht)=>{
    var ul = _e();
    function fl(e) {
        return ul(this.__data__, e) > -1;
    }
    ht.exports = fl;
});
var vt = u((bP, lt)=>{
    var cl = _e();
    function dl(e, r) {
        var n = this.__data__, t = cl(n, e);
        return t < 0 ? (++this.size, n.push([
            e,
            r
        ])) : n[t][1] = r, this;
    }
    lt.exports = dl;
});
var Ee = u((yP, gt)=>{
    var hl = at(), pl = ft(), ll = dt(), vl = pt(), gl = vt();
    function ce(e) {
        var r = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++r < n;){
            var t = e[r];
            this.set(t[0], t[1]);
        }
    }
    ce.prototype.clear = hl;
    ce.prototype.delete = pl;
    ce.prototype.get = ll;
    ce.prototype.has = vl;
    ce.prototype.set = gl;
    gt.exports = ce;
});
var bt = u((mP, qt)=>{
    var ql = Ee();
    function bl() {
        this.__data__ = new ql, this.size = 0;
    }
    qt.exports = bl;
});
var mt = u((xP, yt)=>{
    function yl(e) {
        var r = this.__data__, n = r.delete(e);
        return this.size = r.size, n;
    }
    yt.exports = yl;
});
var wt = u((wP, xt)=>{
    function ml(e) {
        return this.__data__.get(e);
    }
    xt.exports = ml;
});
var Et = u((_P, _t)=>{
    function xl(e) {
        return this.__data__.has(e);
    }
    _t.exports = xl;
});
var Cr = u((EP, Tt)=>{
    var wl = typeof global == "object" && global && global.Object === Object && global;
    Tt.exports = wl;
});
var P = u((TP, At)=>{
    var _l = Cr(), El = typeof self == "object" && self && self.Object === Object && self, Tl = _l || El || Function("return this")();
    At.exports = Tl;
});
var re = u((AP, Ot)=>{
    var Al = P(), Ol = Al.Symbol;
    Ot.exports = Ol;
});
var Pt = u((OP, St)=>{
    var It = re(), Ct = Object.prototype, Il = Ct.hasOwnProperty, Cl = Ct.toString, Te = It ? It.toStringTag : void 0;
    function Sl(e) {
        var r = Il.call(e, Te), n = e[Te];
        try {
            e[Te] = void 0;
            var t = !0;
        } catch  {}
        var i = Cl.call(e);
        return t && (r ? e[Te] = n : delete e[Te]), i;
    }
    St.exports = Sl;
});
var Nt = u((IP, Lt)=>{
    var Pl = Object.prototype, Ll = Pl.toString;
    function Nl(e) {
        return Ll.call(e);
    }
    Lt.exports = Nl;
});
var H = u((CP, kt)=>{
    var Mt = re(), Ml = Pt(), Rl = Nt(), kl = "[object Null]", jl = "[object Undefined]", Rt = Mt ? Mt.toStringTag : void 0;
    function Fl(e) {
        return e == null ? e === void 0 ? jl : kl : Rt && Rt in Object(e) ? Ml(e) : Rl(e);
    }
    kt.exports = Fl;
});
var I = u((SP, jt)=>{
    function Gl(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
    }
    jt.exports = Gl;
});
var de = u((PP, Ft)=>{
    var Dl = H(), Bl = I(), Ul = "[object AsyncFunction]", zl = "[object Function]", Vl = "[object GeneratorFunction]", Hl = "[object Proxy]";
    function Kl(e) {
        if (!Bl(e)) return !1;
        var r = Dl(e);
        return r == zl || r == Vl || r == Ul || r == Hl;
    }
    Ft.exports = Kl;
});
var Dt = u((LP, Gt)=>{
    var Yl = P(), Wl = Yl["__core-js_shared__"];
    Gt.exports = Wl;
});
var zt = u((NP, Ut)=>{
    var Sr = Dt(), Bt = function() {
        var e = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
    }();
    function Xl(e) {
        return !!Bt && Bt in e;
    }
    Ut.exports = Xl;
});
var Pr = u((MP, Vt)=>{
    var $l = Function.prototype, Zl = $l.toString;
    function Jl(e) {
        if (e != null) {
            try {
                return Zl.call(e);
            } catch  {}
            try {
                return e + "";
            } catch  {}
        }
        return "";
    }
    Vt.exports = Jl;
});
var Kt = u((RP, Ht)=>{
    var Ql = de(), ev = zt(), rv = I(), nv = Pr(), tv = /[\\^$.*+?()[\]{}|]/g, iv = /^\[object .+?Constructor\]$/, av = Function.prototype, ov = Object.prototype, sv = av.toString, uv = ov.hasOwnProperty, fv = RegExp("^" + sv.call(uv).replace(tv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function cv(e) {
        if (!rv(e) || ev(e)) return !1;
        var r = Ql(e) ? fv : iv;
        return r.test(nv(e));
    }
    Ht.exports = cv;
});
var Wt = u((kP, Yt)=>{
    function dv(e, r) {
        return e?.[r];
    }
    Yt.exports = dv;
});
var K = u((jP, Xt)=>{
    var hv = Kt(), pv = Wt();
    function lv(e, r) {
        var n = pv(e, r);
        return hv(n) ? n : void 0;
    }
    Xt.exports = lv;
});
var er = u((FP, $t)=>{
    var vv = K(), gv = P(), qv = vv(gv, "Map");
    $t.exports = qv;
});
var Ae = u((GP, Zt)=>{
    var bv = K(), yv = bv(Object, "create");
    Zt.exports = yv;
});
var ei = u((DP, Qt)=>{
    var Jt = Ae();
    function mv() {
        this.__data__ = Jt ? Jt(null) : {}, this.size = 0;
    }
    Qt.exports = mv;
});
var ni = u((BP, ri)=>{
    function xv(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r;
    }
    ri.exports = xv;
});
var ii = u((UP, ti)=>{
    var wv = Ae(), _v = "__lodash_hash_undefined__", Ev = Object.prototype, Tv = Ev.hasOwnProperty;
    function Av(e) {
        var r = this.__data__;
        if (wv) {
            var n = r[e];
            return n === _v ? void 0 : n;
        }
        return Tv.call(r, e) ? r[e] : void 0;
    }
    ti.exports = Av;
});
var oi = u((zP, ai)=>{
    var Ov = Ae(), Iv = Object.prototype, Cv = Iv.hasOwnProperty;
    function Sv(e) {
        var r = this.__data__;
        return Ov ? r[e] !== void 0 : Cv.call(r, e);
    }
    ai.exports = Sv;
});
var ui = u((VP, si)=>{
    var Pv = Ae(), Lv = "__lodash_hash_undefined__";
    function Nv(e, r) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Pv && r === void 0 ? Lv : r, this;
    }
    si.exports = Nv;
});
var ci = u((HP, fi)=>{
    var Mv = ei(), Rv = ni(), kv = ii(), jv = oi(), Fv = ui();
    function he(e) {
        var r = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++r < n;){
            var t = e[r];
            this.set(t[0], t[1]);
        }
    }
    he.prototype.clear = Mv;
    he.prototype.delete = Rv;
    he.prototype.get = kv;
    he.prototype.has = jv;
    he.prototype.set = Fv;
    fi.exports = he;
});
var pi = u((KP, hi)=>{
    var di = ci(), Gv = Ee(), Dv = er();
    function Bv() {
        this.size = 0, this.__data__ = {
            hash: new di,
            map: new (Dv || Gv),
            string: new di
        };
    }
    hi.exports = Bv;
});
var vi = u((YP, li)=>{
    function Uv(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
    }
    li.exports = Uv;
});
var Oe = u((WP, gi)=>{
    var zv = vi();
    function Vv(e, r) {
        var n = e.__data__;
        return zv(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
    }
    gi.exports = Vv;
});
var bi = u((XP, qi)=>{
    var Hv = Oe();
    function Kv(e) {
        var r = Hv(this, e).delete(e);
        return this.size -= r ? 1 : 0, r;
    }
    qi.exports = Kv;
});
var mi = u(($P, yi)=>{
    var Yv = Oe();
    function Wv(e) {
        return Yv(this, e).get(e);
    }
    yi.exports = Wv;
});
var wi = u((ZP, xi)=>{
    var Xv = Oe();
    function $v(e) {
        return Xv(this, e).has(e);
    }
    xi.exports = $v;
});
var Ei = u((JP, _i)=>{
    var Zv = Oe();
    function Jv(e, r) {
        var n = Zv(this, e), t = n.size;
        return n.set(e, r), this.size += n.size == t ? 0 : 1, this;
    }
    _i.exports = Jv;
});
var rr = u((QP, Ti)=>{
    var Qv = pi(), eg = bi(), rg = mi(), ng = wi(), tg = Ei();
    function pe(e) {
        var r = -1, n = e == null ? 0 : e.length;
        for(this.clear(); ++r < n;){
            var t = e[r];
            this.set(t[0], t[1]);
        }
    }
    pe.prototype.clear = Qv;
    pe.prototype.delete = eg;
    pe.prototype.get = rg;
    pe.prototype.has = ng;
    pe.prototype.set = tg;
    Ti.exports = pe;
});
var Oi = u((eL, Ai)=>{
    var ig = Ee(), ag = er(), og = rr(), sg = 200;
    function ug(e, r) {
        var n = this.__data__;
        if (n instanceof ig) {
            var t = n.__data__;
            if (!ag || t.length < sg - 1) return t.push([
                e,
                r
            ]), this.size = ++n.size, this;
            n = this.__data__ = new og(t);
        }
        return n.set(e, r), this.size = n.size, this;
    }
    Ai.exports = ug;
});
var Ie = u((rL, Ii)=>{
    var fg = Ee(), cg = bt(), dg = mt(), hg = wt(), pg = Et(), lg = Oi();
    function le(e) {
        var r = this.__data__ = new fg(e);
        this.size = r.size;
    }
    le.prototype.clear = cg;
    le.prototype.delete = dg;
    le.prototype.get = hg;
    le.prototype.has = pg;
    le.prototype.set = lg;
    Ii.exports = le;
});
var nr = u((nL, Ci)=>{
    function vg(e, r) {
        for(var n = -1, t = e == null ? 0 : e.length; ++n < t && r(e[n], n, e) !== !1;);
        return e;
    }
    Ci.exports = vg;
});
var Lr = u((tL, Si)=>{
    var gg = K(), qg = function() {
        try {
            var e = gg(Object, "defineProperty");
            return e({}, "", {}), e;
        } catch  {}
    }();
    Si.exports = qg;
});
var Ce = u((iL, Li)=>{
    var Pi = Lr();
    function bg(e, r, n) {
        r == "__proto__" && Pi ? Pi(e, r, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[r] = n;
    }
    Li.exports = bg;
});
var Se = u((aL, Ni)=>{
    var yg = Ce(), mg = ee(), xg = Object.prototype, wg = xg.hasOwnProperty;
    function _g(e, r, n) {
        var t = e[r];
        (!(wg.call(e, r) && mg(t, n)) || n === void 0 && !(r in e)) && yg(e, r, n);
    }
    Ni.exports = _g;
});
var ve = u((oL, Mi)=>{
    var Eg = Se(), Tg = Ce();
    function Ag(e, r, n, t) {
        var i = !n;
        n || (n = {});
        for(var a = -1, o = r.length; ++a < o;){
            var s = r[a], f = t ? t(n[s], e[s], s, n, e) : void 0;
            f === void 0 && (f = e[s]), i ? Tg(n, s, f) : Eg(n, s, f);
        }
        return n;
    }
    Mi.exports = Ag;
});
var ki = u((sL, Ri)=>{
    function Og(e, r) {
        for(var n = -1, t = Array(e); ++n < e;)t[n] = r(n);
        return t;
    }
    Ri.exports = Og;
});
var M = u((uL, ji)=>{
    function Ig(e) {
        return e != null && typeof e == "object";
    }
    ji.exports = Ig;
});
var Gi = u((fL, Fi)=>{
    var Cg = H(), Sg = M(), Pg = "[object Arguments]";
    function Lg(e) {
        return Sg(e) && Cg(e) == Pg;
    }
    Fi.exports = Lg;
});
var ge = u((cL, Ui)=>{
    var Di = Gi(), Ng = M(), Bi = Object.prototype, Mg = Bi.hasOwnProperty, Rg = Bi.propertyIsEnumerable, kg = Di(function() {
        return arguments;
    }()) ? Di : function(e) {
        return Ng(e) && Mg.call(e, "callee") && !Rg.call(e, "callee");
    };
    Ui.exports = kg;
});
var A = u((dL, zi)=>{
    var jg = Array.isArray;
    zi.exports = jg;
});
var Hi = u((hL, Vi)=>{
    function Fg() {
        return !1;
    }
    Vi.exports = Fg;
});
var ne = u((Pe, qe)=>{
    var Gg = P(), Dg = Hi(), Wi = typeof Pe == "object" && Pe && !Pe.nodeType && Pe, Ki = Wi && typeof qe == "object" && qe && !qe.nodeType && qe, Bg = Ki && Ki.exports === Wi, Yi = Bg ? Gg.Buffer : void 0, Ug = Yi ? Yi.isBuffer : void 0, zg = Ug || Dg;
    qe.exports = zg;
});
var Le = u((pL, Xi)=>{
    var Vg = 9007199254740991, Hg = /^(?:0|[1-9]\d*)$/;
    function Kg(e, r) {
        var n = typeof e;
        return r = r ?? Vg, !!r && (n == "number" || n != "symbol" && Hg.test(e)) && e > -1 && e % 1 == 0 && e < r;
    }
    Xi.exports = Kg;
});
var tr = u((lL, $i)=>{
    var Yg = 9007199254740991;
    function Wg(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yg;
    }
    $i.exports = Wg;
});
var Ji = u((vL, Zi)=>{
    var Xg = H(), $g = tr(), Zg = M(), Jg = "[object Arguments]", Qg = "[object Array]", eq = "[object Boolean]", rq = "[object Date]", nq = "[object Error]", tq = "[object Function]", iq = "[object Map]", aq = "[object Number]", oq = "[object Object]", sq = "[object RegExp]", uq = "[object Set]", fq = "[object String]", cq = "[object WeakMap]", dq = "[object ArrayBuffer]", hq = "[object DataView]", pq = "[object Float32Array]", lq = "[object Float64Array]", vq = "[object Int8Array]", gq = "[object Int16Array]", qq = "[object Int32Array]", bq = "[object Uint8Array]", yq = "[object Uint8ClampedArray]", mq = "[object Uint16Array]", xq = "[object Uint32Array]", _ = {};
    _[pq] = _[lq] = _[vq] = _[gq] = _[qq] = _[bq] = _[yq] = _[mq] = _[xq] = !0;
    _[Jg] = _[Qg] = _[dq] = _[eq] = _[hq] = _[rq] = _[nq] = _[tq] = _[iq] = _[aq] = _[oq] = _[sq] = _[uq] = _[fq] = _[cq] = !1;
    function wq(e) {
        return Zg(e) && $g(e.length) && !!_[Xg(e)];
    }
    Zi.exports = wq;
});
var Ne = u((gL, Qi)=>{
    function _q(e) {
        return function(r) {
            return e(r);
        };
    }
    Qi.exports = _q;
});
var ir = u((Me, be)=>{
    var Eq = Cr(), ea = typeof Me == "object" && Me && !Me.nodeType && Me, Re = ea && typeof be == "object" && be && !be.nodeType && be, Tq = Re && Re.exports === ea, Nr = Tq && Eq.process, Aq = function() {
        try {
            var e = Re && Re.require && Re.require("util").types;
            return e || Nr && Nr.binding && Nr.binding("util");
        } catch  {}
    }();
    be.exports = Aq;
});
var ye = u((qL, ta)=>{
    var Oq = Ji(), Iq = Ne(), ra = ir(), na = ra && ra.isTypedArray, Cq = na ? Iq(na) : Oq;
    ta.exports = Cq;
});
var Mr = u((bL, ia)=>{
    var Sq = ki(), Pq = ge(), Lq = A(), Nq = ne(), Mq = Le(), Rq = ye(), kq = Object.prototype, jq = kq.hasOwnProperty;
    function Fq(e, r) {
        var n = Lq(e), t = !n && Pq(e), i = !n && !t && Nq(e), a = !n && !t && !i && Rq(e), o = n || t || i || a, s = o ? Sq(e.length, String) : [], f = s.length;
        for(var c in e)(r || jq.call(e, c)) && !(o && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Mq(c, f))) && s.push(c);
        return s;
    }
    ia.exports = Fq;
});
var ke = u((yL, aa)=>{
    var Gq = Object.prototype;
    function Dq(e) {
        var r = e && e.constructor, n = typeof r == "function" && r.prototype || Gq;
        return e === n;
    }
    aa.exports = Dq;
});
var Rr = u((mL, oa)=>{
    function Bq(e, r) {
        return function(n) {
            return e(r(n));
        };
    }
    oa.exports = Bq;
});
var ua = u((xL, sa)=>{
    var Uq = Rr(), zq = Uq(Object.keys, Object);
    sa.exports = zq;
});
var ar = u((wL, fa)=>{
    var Vq = ke(), Hq = ua(), Kq = Object.prototype, Yq = Kq.hasOwnProperty;
    function Wq(e) {
        if (!Vq(e)) return Hq(e);
        var r = [];
        for(var n in Object(e))Yq.call(e, n) && n != "constructor" && r.push(n);
        return r;
    }
    fa.exports = Wq;
});
var R = u((_L, ca)=>{
    var Xq = de(), $q = tr();
    function Zq(e) {
        return e != null && $q(e.length) && !Xq(e);
    }
    ca.exports = Zq;
});
var D = u((EL, da)=>{
    var Jq = Mr(), Qq = ar(), eb = R();
    function rb(e) {
        return eb(e) ? Jq(e) : Qq(e);
    }
    da.exports = rb;
});
var pa = u((TL, ha)=>{
    var nb = ve(), tb = D();
    function ib(e, r) {
        return e && nb(r, tb(r), e);
    }
    ha.exports = ib;
});
var va = u((AL, la)=>{
    function ab(e) {
        var r = [];
        if (e != null) for(var n in Object(e))r.push(n);
        return r;
    }
    la.exports = ab;
});
var qa = u((OL, ga)=>{
    var ob = I(), sb = ke(), ub = va(), fb = Object.prototype, cb = fb.hasOwnProperty;
    function db(e) {
        if (!ob(e)) return ub(e);
        var r = sb(e), n = [];
        for(var t in e)t == "constructor" && (r || !cb.call(e, t)) || n.push(t);
        return n;
    }
    ga.exports = db;
});
var Y = u((IL, ba)=>{
    var hb = Mr(), pb = qa(), lb = R();
    function vb(e) {
        return lb(e) ? hb(e, !0) : pb(e);
    }
    ba.exports = vb;
});
var ma = u((CL, ya)=>{
    var gb = ve(), qb = Y();
    function bb(e, r) {
        return e && gb(r, qb(r), e);
    }
    ya.exports = bb;
});
var kr = u((je, me)=>{
    var yb = P(), Ea = typeof je == "object" && je && !je.nodeType && je, xa = Ea && typeof me == "object" && me && !me.nodeType && me, mb = xa && xa.exports === Ea, wa = mb ? yb.Buffer : void 0, _a = wa ? wa.allocUnsafe : void 0;
    function xb(e, r) {
        if (r) return e.slice();
        var n = e.length, t = _a ? _a(n) : new e.constructor(n);
        return e.copy(t), t;
    }
    me.exports = xb;
});
var jr = u((SL, Ta)=>{
    function wb(e, r) {
        var n = -1, t = e.length;
        for(r || (r = Array(t)); ++n < t;)r[n] = e[n];
        return r;
    }
    Ta.exports = wb;
});
var Fr = u((PL, Aa)=>{
    function _b(e, r) {
        for(var n = -1, t = e == null ? 0 : e.length, i = 0, a = []; ++n < t;){
            var o = e[n];
            r(o, n, e) && (a[i++] = o);
        }
        return a;
    }
    Aa.exports = _b;
});
var Gr = u((LL, Oa)=>{
    function Eb() {
        return [];
    }
    Oa.exports = Eb;
});
var or = u((NL, Ca)=>{
    var Tb = Fr(), Ab = Gr(), Ob = Object.prototype, Ib = Ob.propertyIsEnumerable, Ia = Object.getOwnPropertySymbols, Cb = Ia ? function(e) {
        return e == null ? [] : (e = Object(e), Tb(Ia(e), function(r) {
            return Ib.call(e, r);
        }));
    } : Ab;
    Ca.exports = Cb;
});
var Pa = u((ML, Sa)=>{
    var Sb = ve(), Pb = or();
    function Lb(e, r) {
        return Sb(e, Pb(e), r);
    }
    Sa.exports = Lb;
});
var sr = u((RL, La)=>{
    function Nb(e, r) {
        for(var n = -1, t = r.length, i = e.length; ++n < t;)e[i + n] = r[n];
        return e;
    }
    La.exports = Nb;
});
var Fe = u((kL, Na)=>{
    var Mb = Rr(), Rb = Mb(Object.getPrototypeOf, Object);
    Na.exports = Rb;
});
var Dr = u((jL, Ma)=>{
    var kb = sr(), jb = Fe(), Fb = or(), Gb = Gr(), Db = Object.getOwnPropertySymbols, Bb = Db ? function(e) {
        for(var r = []; e;)kb(r, Fb(e)), e = jb(e);
        return r;
    } : Gb;
    Ma.exports = Bb;
});
var ka = u((FL, Ra)=>{
    var Ub = ve(), zb = Dr();
    function Vb(e, r) {
        return Ub(e, zb(e), r);
    }
    Ra.exports = Vb;
});
var Br = u((GL, ja)=>{
    var Hb = sr(), Kb = A();
    function Yb(e, r, n) {
        var t = r(e);
        return Kb(e) ? t : Hb(t, n(e));
    }
    ja.exports = Yb;
});
var Ur = u((DL, Fa)=>{
    var Wb = Br(), Xb = or(), $b = D();
    function Zb(e) {
        return Wb(e, $b, Xb);
    }
    Fa.exports = Zb;
});
var Da = u((BL, Ga)=>{
    var Jb = Br(), Qb = Dr(), ey = Y();
    function ry(e) {
        return Jb(e, ey, Qb);
    }
    Ga.exports = ry;
});
var Ua = u((UL, Ba)=>{
    var ny = K(), ty = P(), iy = ny(ty, "DataView");
    Ba.exports = iy;
});
var Va = u((zL, za)=>{
    var ay = K(), oy = P(), sy = ay(oy, "Promise");
    za.exports = sy;
});
var zr = u((VL, Ha)=>{
    var uy = K(), fy = P(), cy = uy(fy, "Set");
    Ha.exports = cy;
});
var Ya = u((HL, Ka)=>{
    var dy = K(), hy = P(), py = dy(hy, "WeakMap");
    Ka.exports = py;
});
var ie = u((KL, eo)=>{
    var Vr = Ua(), Hr = er(), Kr = Va(), Yr = zr(), Wr = Ya(), Qa = H(), xe = Pr(), Wa = "[object Map]", ly = "[object Object]", Xa = "[object Promise]", $a = "[object Set]", Za = "[object WeakMap]", Ja = "[object DataView]", vy = xe(Vr), gy = xe(Hr), qy = xe(Kr), by = xe(Yr), yy = xe(Wr), te = Qa;
    (Vr && te(new Vr(new ArrayBuffer(1))) != Ja || Hr && te(new Hr) != Wa || Kr && te(Kr.resolve()) != Xa || Yr && te(new Yr) != $a || Wr && te(new Wr) != Za) && (te = function(e) {
        var r = Qa(e), n = r == ly ? e.constructor : void 0, t = n ? xe(n) : "";
        if (t) switch(t){
            case vy:
                return Ja;
            case gy:
                return Wa;
            case qy:
                return Xa;
            case by:
                return $a;
            case yy:
                return Za;
        }
        return r;
    });
    eo.exports = te;
});
var no = u((YL, ro)=>{
    var my = Object.prototype, xy = my.hasOwnProperty;
    function wy(e) {
        var r = e.length, n = new e.constructor(r);
        return r && typeof e[0] == "string" && xy.call(e, "index") && (n.index = e.index, n.input = e.input), n;
    }
    ro.exports = wy;
});
var Xr = u((WL, to)=>{
    var _y = P(), Ey = _y.Uint8Array;
    to.exports = Ey;
});
var ur = u((XL, ao)=>{
    var io = Xr();
    function Ty(e) {
        var r = new e.constructor(e.byteLength);
        return new io(r).set(new io(e)), r;
    }
    ao.exports = Ty;
});
var so = u(($L, oo)=>{
    var Ay = ur();
    function Oy(e, r) {
        var n = r ? Ay(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
    }
    oo.exports = Oy;
});
var fo = u((ZL, uo)=>{
    var Iy = /\w*$/;
    function Cy(e) {
        var r = new e.constructor(e.source, Iy.exec(e));
        return r.lastIndex = e.lastIndex, r;
    }
    uo.exports = Cy;
});
var vo = u((JL, lo)=>{
    var co = re(), ho = co ? co.prototype : void 0, po = ho ? ho.valueOf : void 0;
    function Sy(e) {
        return po ? Object(po.call(e)) : {};
    }
    lo.exports = Sy;
});
var $r = u((QL, go)=>{
    var Py = ur();
    function Ly(e, r) {
        var n = r ? Py(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
    }
    go.exports = Ly;
});
var bo = u((eN, qo)=>{
    var Ny = ur(), My = so(), Ry = fo(), ky = vo(), jy = $r(), Fy = "[object Boolean]", Gy = "[object Date]", Dy = "[object Map]", By = "[object Number]", Uy = "[object RegExp]", zy = "[object Set]", Vy = "[object String]", Hy = "[object Symbol]", Ky = "[object ArrayBuffer]", Yy = "[object DataView]", Wy = "[object Float32Array]", Xy = "[object Float64Array]", $y = "[object Int8Array]", Zy = "[object Int16Array]", Jy = "[object Int32Array]", Qy = "[object Uint8Array]", em = "[object Uint8ClampedArray]", rm = "[object Uint16Array]", nm = "[object Uint32Array]";
    function tm(e, r, n) {
        var t = e.constructor;
        switch(r){
            case Ky:
                return Ny(e);
            case Fy:
            case Gy:
                return new t(+e);
            case Yy:
                return My(e, n);
            case Wy:
            case Xy:
            case $y:
            case Zy:
            case Jy:
            case Qy:
            case em:
            case rm:
            case nm:
                return jy(e, n);
            case Dy:
                return new t;
            case By:
            case Vy:
                return new t(e);
            case Uy:
                return Ry(e);
            case zy:
                return new t;
            case Hy:
                return ky(e);
        }
    }
    qo.exports = tm;
});
var Zr = u((rN, mo)=>{
    var im = I(), yo = Object.create, am = function() {
        function e() {}
        return function(r) {
            if (!im(r)) return {};
            if (yo) return yo(r);
            e.prototype = r;
            var n = new e;
            return e.prototype = void 0, n;
        };
    }();
    mo.exports = am;
});
var Jr = u((nN, xo)=>{
    var om = Zr(), sm = Fe(), um = ke();
    function fm(e) {
        return typeof e.constructor == "function" && !um(e) ? om(sm(e)) : {};
    }
    xo.exports = fm;
});
var _o = u((tN, wo)=>{
    var cm = ie(), dm = M(), hm = "[object Map]";
    function pm(e) {
        return dm(e) && cm(e) == hm;
    }
    wo.exports = pm;
});
var Oo = u((iN, Ao)=>{
    var lm = _o(), vm = Ne(), Eo = ir(), To = Eo && Eo.isMap, gm = To ? vm(To) : lm;
    Ao.exports = gm;
});
var Co = u((aN, Io)=>{
    var qm = ie(), bm = M(), ym = "[object Set]";
    function mm(e) {
        return bm(e) && qm(e) == ym;
    }
    Io.exports = mm;
});
var No = u((oN, Lo)=>{
    var xm = Co(), wm = Ne(), So = ir(), Po = So && So.isSet, _m = Po ? wm(Po) : xm;
    Lo.exports = _m;
});
var Qr = u((sN, jo)=>{
    var Em = Ie(), Tm = nr(), Am = Se(), Om = pa(), Im = ma(), Cm = kr(), Sm = jr(), Pm = Pa(), Lm = ka(), Nm = Ur(), Mm = Da(), Rm = ie(), km = no(), jm = bo(), Fm = Jr(), Gm = A(), Dm = ne(), Bm = Oo(), Um = I(), zm = No(), Vm = D(), Hm = Y(), Km = 1, Ym = 2, Wm = 4, Mo = "[object Arguments]", Xm = "[object Array]", $m = "[object Boolean]", Zm = "[object Date]", Jm = "[object Error]", Ro = "[object Function]", Qm = "[object GeneratorFunction]", ex = "[object Map]", rx = "[object Number]", ko = "[object Object]", nx = "[object RegExp]", tx = "[object Set]", ix = "[object String]", ax = "[object Symbol]", ox = "[object WeakMap]", sx = "[object ArrayBuffer]", ux = "[object DataView]", fx = "[object Float32Array]", cx = "[object Float64Array]", dx = "[object Int8Array]", hx = "[object Int16Array]", px = "[object Int32Array]", lx = "[object Uint8Array]", vx = "[object Uint8ClampedArray]", gx = "[object Uint16Array]", qx = "[object Uint32Array]", w = {};
    w[Mo] = w[Xm] = w[sx] = w[ux] = w[$m] = w[Zm] = w[fx] = w[cx] = w[dx] = w[hx] = w[px] = w[ex] = w[rx] = w[ko] = w[nx] = w[tx] = w[ix] = w[ax] = w[lx] = w[vx] = w[gx] = w[qx] = !0;
    w[Jm] = w[Ro] = w[ox] = !1;
    function fr(e, r, n, t, i, a) {
        var o, s = r & Km, f = r & Ym, c = r & Wm;
        if (n && (o = i ? n(e, t, i, a) : n(e)), o !== void 0) return o;
        if (!Um(e)) return e;
        var d = Gm(e);
        if (d) {
            if (o = km(e), !s) return Sm(e, o);
        } else {
            var h = Rm(e), p = h == Ro || h == Qm;
            if (Dm(e)) return Cm(e, s);
            if (h == ko || h == Mo || p && !i) {
                if (o = f || p ? {} : Fm(e), !s) return f ? Lm(e, Im(o, e)) : Pm(e, Om(o, e));
            } else {
                if (!w[h]) return i ? e : {};
                o = jm(e, h, s);
            }
        }
        a || (a = new Em);
        var l = a.get(e);
        if (l) return l;
        a.set(e, o), zm(e) ? e.forEach(function(T) {
            o.add(fr(T, r, n, T, e, a));
        }) : Bm(e) && e.forEach(function(T, O) {
            o.set(O, fr(T, r, n, O, e, a));
        });
        var v = c ? f ? Mm : Nm : f ? Hm : Vm, m = d ? void 0 : v(e);
        return Tm(m || e, function(T, O) {
            m && (O = T, T = e[O]), Am(o, O, fr(T, r, n, O, e, a));
        }), o;
    }
    jo.exports = fr;
});
var Go = u((uN, Fo)=>{
    var bx = Qr(), yx = 4;
    function mx(e) {
        return bx(e, yx);
    }
    Fo.exports = mx;
});
var cr = u((fN, Do)=>{
    function xx(e) {
        return function() {
            return e;
        };
    }
    Do.exports = xx;
});
var Uo = u((cN, Bo)=>{
    function wx(e) {
        return function(r, n, t) {
            for(var i = -1, a = Object(r), o = t(r), s = o.length; s--;){
                var f = o[e ? s : ++i];
                if (n(a[f], f, a) === !1) break;
            }
            return r;
        };
    }
    Bo.exports = wx;
});
var dr = u((dN, zo)=>{
    var _x = Uo(), Ex = _x();
    zo.exports = Ex;
});
var hr = u((hN, Vo)=>{
    var Tx = dr(), Ax = D();
    function Ox(e, r) {
        return e && Tx(e, r, Ax);
    }
    Vo.exports = Ox;
});
var Ko = u((pN, Ho)=>{
    var Ix = R();
    function Cx(e, r) {
        return function(n, t) {
            if (n == null) return n;
            if (!Ix(n)) return e(n, t);
            for(var i = n.length, a = r ? i : -1, o = Object(n); (r ? a-- : ++a < i) && t(o[a], a, o) !== !1;);
            return n;
        };
    }
    Ho.exports = Cx;
});
var Ge = u((lN, Yo)=>{
    var Sx = hr(), Px = Ko(), Lx = Px(Sx);
    Yo.exports = Lx;
});
var W = u((vN, Wo)=>{
    function Nx(e) {
        return e;
    }
    Wo.exports = Nx;
});
var en = u((gN, Xo)=>{
    var Mx = W();
    function Rx(e) {
        return typeof e == "function" ? e : Mx;
    }
    Xo.exports = Rx;
});
var rn = u((qN, $o)=>{
    var kx = nr(), jx = Ge(), Fx = en(), Gx = A();
    function Dx(e, r) {
        var n = Gx(e) ? kx : jx;
        return n(e, Fx(r));
    }
    $o.exports = Dx;
});
var nn = u((bN, Zo)=>{
    Zo.exports = rn();
});
var Qo = u((yN, Jo)=>{
    var Bx = Ge();
    function Ux(e, r) {
        var n = [];
        return Bx(e, function(t, i, a) {
            r(t, i, a) && n.push(t);
        }), n;
    }
    Jo.exports = Ux;
});
var rs = u((mN, es)=>{
    var zx = "__lodash_hash_undefined__";
    function Vx(e) {
        return this.__data__.set(e, zx), this;
    }
    es.exports = Vx;
});
var ts = u((xN, ns)=>{
    function Hx(e) {
        return this.__data__.has(e);
    }
    ns.exports = Hx;
});
var tn = u((wN, is)=>{
    var Kx = rr(), Yx = rs(), Wx = ts();
    function pr(e) {
        var r = -1, n = e == null ? 0 : e.length;
        for(this.__data__ = new Kx; ++r < n;)this.add(e[r]);
    }
    pr.prototype.add = pr.prototype.push = Yx;
    pr.prototype.has = Wx;
    is.exports = pr;
});
var os = u((_N, as)=>{
    function Xx(e, r) {
        for(var n = -1, t = e == null ? 0 : e.length; ++n < t;)if (r(e[n], n, e)) return !0;
        return !1;
    }
    as.exports = Xx;
});
var an = u((EN, ss)=>{
    function $x(e, r) {
        return e.has(r);
    }
    ss.exports = $x;
});
var on = u((TN, us)=>{
    var Zx = tn(), Jx = os(), Qx = an(), ew = 1, rw = 2;
    function nw(e, r, n, t, i, a) {
        var o = n & ew, s = e.length, f = r.length;
        if (s != f && !(o && f > s)) return !1;
        var c = a.get(e), d = a.get(r);
        if (c && d) return c == r && d == e;
        var h = -1, p = !0, l = n & rw ? new Zx : void 0;
        for(a.set(e, r), a.set(r, e); ++h < s;){
            var v = e[h], m = r[h];
            if (t) var T = o ? t(m, v, h, r, e, a) : t(v, m, h, e, r, a);
            if (T !== void 0) {
                if (T) continue;
                p = !1;
                break;
            }
            if (l) {
                if (!Jx(r, function(O, Q) {
                    if (!Qx(l, Q) && (v === O || i(v, O, n, t, a))) return l.push(Q);
                })) {
                    p = !1;
                    break;
                }
            } else if (!(v === m || i(v, m, n, t, a))) {
                p = !1;
                break;
            }
        }
        return a.delete(e), a.delete(r), p;
    }
    us.exports = nw;
});
var cs = u((AN, fs)=>{
    function tw(e) {
        var r = -1, n = Array(e.size);
        return e.forEach(function(t, i) {
            n[++r] = [
                i,
                t
            ];
        }), n;
    }
    fs.exports = tw;
});
var lr = u((ON, ds)=>{
    function iw(e) {
        var r = -1, n = Array(e.size);
        return e.forEach(function(t) {
            n[++r] = t;
        }), n;
    }
    ds.exports = iw;
});
var gs = u((IN, vs)=>{
    var hs = re(), ps = Xr(), aw = ee(), ow = on(), sw = cs(), uw = lr(), fw = 1, cw = 2, dw = "[object Boolean]", hw = "[object Date]", pw = "[object Error]", lw = "[object Map]", vw = "[object Number]", gw = "[object RegExp]", qw = "[object Set]", bw = "[object String]", yw = "[object Symbol]", mw = "[object ArrayBuffer]", xw = "[object DataView]", ls = hs ? hs.prototype : void 0, sn = ls ? ls.valueOf : void 0;
    function ww(e, r, n, t, i, a, o) {
        switch(n){
            case xw:
                if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) return !1;
                e = e.buffer, r = r.buffer;
            case mw:
                return !(e.byteLength != r.byteLength || !a(new ps(e), new ps(r)));
            case dw:
            case hw:
            case vw:
                return aw(+e, +r);
            case pw:
                return e.name == r.name && e.message == r.message;
            case gw:
            case bw:
                return e == r + "";
            case lw:
                var s = sw;
            case qw:
                var f = t & fw;
                if (s || (s = uw), e.size != r.size && !f) return !1;
                var c = o.get(e);
                if (c) return c == r;
                t |= cw, o.set(e, r);
                var d = ow(s(e), s(r), t, i, a, o);
                return o.delete(e), d;
            case yw:
                if (sn) return sn.call(e) == sn.call(r);
        }
        return !1;
    }
    vs.exports = ww;
});
var ys = u((CN, bs)=>{
    var qs = Ur(), _w = 1, Ew = Object.prototype, Tw = Ew.hasOwnProperty;
    function Aw(e, r, n, t, i, a) {
        var o = n & _w, s = qs(e), f = s.length, c = qs(r), d = c.length;
        if (f != d && !o) return !1;
        for(var h = f; h--;){
            var p = s[h];
            if (!(o ? p in r : Tw.call(r, p))) return !1;
        }
        var l = a.get(e), v = a.get(r);
        if (l && v) return l == r && v == e;
        var m = !0;
        a.set(e, r), a.set(r, e);
        for(var T = o; ++h < f;){
            p = s[h];
            var O = e[p], Q = r[p];
            if (t) var tt = o ? t(Q, O, p, r, e, a) : t(O, Q, p, e, r, a);
            if (!(tt === void 0 ? O === Q || i(O, Q, n, t, a) : tt)) {
                m = !1;
                break;
            }
            T || (T = p == "constructor");
        }
        if (m && !T) {
            var Je = e.constructor, Qe = r.constructor;
            Je != Qe && "constructor" in e && "constructor" in r && !(typeof Je == "function" && Je instanceof Je && typeof Qe == "function" && Qe instanceof Qe) && (m = !1);
        }
        return a.delete(e), a.delete(r), m;
    }
    bs.exports = Aw;
});
var Os = u((SN, As)=>{
    var un = Ie(), Ow = on(), Iw = gs(), Cw = ys(), ms = ie(), xs = A(), ws = ne(), Sw = ye(), Pw = 1, _s = "[object Arguments]", Es = "[object Array]", vr = "[object Object]", Lw = Object.prototype, Ts = Lw.hasOwnProperty;
    function Nw(e, r, n, t, i, a) {
        var o = xs(e), s = xs(r), f = o ? Es : ms(e), c = s ? Es : ms(r);
        f = f == _s ? vr : f, c = c == _s ? vr : c;
        var d = f == vr, h = c == vr, p = f == c;
        if (p && ws(e)) {
            if (!ws(r)) return !1;
            o = !0, d = !1;
        }
        if (p && !d) return a || (a = new un), o || Sw(e) ? Ow(e, r, n, t, i, a) : Iw(e, r, f, n, t, i, a);
        if (!(n & Pw)) {
            var l = d && Ts.call(e, "__wrapped__"), v = h && Ts.call(r, "__wrapped__");
            if (l || v) {
                var m = l ? e.value() : e, T = v ? r.value() : r;
                return a || (a = new un), i(m, T, n, t, a);
            }
        }
        return p ? (a || (a = new un), Cw(e, r, n, t, i, a)) : !1;
    }
    As.exports = Nw;
});
var fn = u((PN, Ss)=>{
    var Mw = Os(), Is = M();
    function Cs(e, r, n, t, i) {
        return e === r ? !0 : e == null || r == null || !Is(e) && !Is(r) ? e !== e && r !== r : Mw(e, r, n, t, Cs, i);
    }
    Ss.exports = Cs;
});
var Ls = u((LN, Ps)=>{
    var Rw = Ie(), kw = fn(), jw = 1, Fw = 2;
    function Gw(e, r, n, t) {
        var i = n.length, a = i, o = !t;
        if (e == null) return !a;
        for(e = Object(e); i--;){
            var s = n[i];
            if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
        }
        for(; ++i < a;){
            s = n[i];
            var f = s[0], c = e[f], d = s[1];
            if (o && s[2]) {
                if (c === void 0 && !(f in e)) return !1;
            } else {
                var h = new Rw;
                if (t) var p = t(c, d, f, e, r, h);
                if (!(p === void 0 ? kw(d, c, jw | Fw, t, h) : p)) return !1;
            }
        }
        return !0;
    }
    Ps.exports = Gw;
});
var cn = u((NN, Ns)=>{
    var Dw = I();
    function Bw(e) {
        return e === e && !Dw(e);
    }
    Ns.exports = Bw;
});
var Rs = u((MN, Ms)=>{
    var Uw = cn(), zw = D();
    function Vw(e) {
        for(var r = zw(e), n = r.length; n--;){
            var t = r[n], i = e[t];
            r[n] = [
                t,
                i,
                Uw(i)
            ];
        }
        return r;
    }
    Ms.exports = Vw;
});
var dn = u((RN, ks)=>{
    function Hw(e, r) {
        return function(n) {
            return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
        };
    }
    ks.exports = Hw;
});
var Fs = u((kN, js)=>{
    var Kw = Ls(), Yw = Rs(), Ww = dn();
    function Xw(e) {
        var r = Yw(e);
        return r.length == 1 && r[0][2] ? Ww(r[0][0], r[0][1]) : function(n) {
            return n === e || Kw(n, e, r);
        };
    }
    js.exports = Xw;
});
var ae = u((jN, Gs)=>{
    var $w = H(), Zw = M(), Jw = "[object Symbol]";
    function Qw(e) {
        return typeof e == "symbol" || Zw(e) && $w(e) == Jw;
    }
    Gs.exports = Qw;
});
var gr = u((FN, Ds)=>{
    var e_ = A(), r_ = ae(), n_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, t_ = /^\w*$/;
    function i_(e, r) {
        if (e_(e)) return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || r_(e) ? !0 : t_.test(e) || !n_.test(e) || r != null && e in Object(r);
    }
    Ds.exports = i_;
});
var zs = u((GN, Us)=>{
    var Bs = rr(), a_ = "Expected a function";
    function hn(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function") throw new TypeError(a_);
        var n = function() {
            var t = arguments, i = r ? r.apply(this, t) : t[0], a = n.cache;
            if (a.has(i)) return a.get(i);
            var o = e.apply(this, t);
            return n.cache = a.set(i, o) || a, o;
        };
        return n.cache = new (hn.Cache || Bs), n;
    }
    hn.Cache = Bs;
    Us.exports = hn;
});
var Hs = u((DN, Vs)=>{
    var o_ = zs(), s_ = 500;
    function u_(e) {
        var r = o_(e, function(t) {
            return n.size === s_ && n.clear(), t;
        }), n = r.cache;
        return r;
    }
    Vs.exports = u_;
});
var Ys = u((BN, Ks)=>{
    var f_ = Hs(), c_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, d_ = /\\(\\)?/g, h_ = f_(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(c_, function(n, t, i, a) {
            r.push(i ? a.replace(d_, "$1") : t || n);
        }), r;
    });
    Ks.exports = h_;
});
var De = u((UN, Ws)=>{
    function p_(e, r) {
        for(var n = -1, t = e == null ? 0 : e.length, i = Array(t); ++n < t;)i[n] = r(e[n], n, e);
        return i;
    }
    Ws.exports = p_;
});
var eu = u((zN, Qs)=>{
    var Xs = re(), l_ = De(), v_ = A(), g_ = ae(), q_ = 1 / 0, $s = Xs ? Xs.prototype : void 0, Zs = $s ? $s.toString : void 0;
    function Js(e) {
        if (typeof e == "string") return e;
        if (v_(e)) return l_(e, Js) + "";
        if (g_(e)) return Zs ? Zs.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -q_ ? "-0" : r;
    }
    Qs.exports = Js;
});
var pn = u((VN, ru)=>{
    var b_ = eu();
    function y_(e) {
        return e == null ? "" : b_(e);
    }
    ru.exports = y_;
});
var Be = u((HN, nu)=>{
    var m_ = A(), x_ = gr(), w_ = Ys(), __ = pn();
    function E_(e, r) {
        return m_(e) ? e : x_(e, r) ? [
            e
        ] : w_(__(e));
    }
    nu.exports = E_;
});
var we = u((KN, tu)=>{
    var T_ = ae(), A_ = 1 / 0;
    function O_(e) {
        if (typeof e == "string" || T_(e)) return e;
        var r = e + "";
        return r == "0" && 1 / e == -A_ ? "-0" : r;
    }
    tu.exports = O_;
});
var Ue = u((YN, iu)=>{
    var I_ = Be(), C_ = we();
    function S_(e, r) {
        r = I_(r, e);
        for(var n = 0, t = r.length; e != null && n < t;)e = e[C_(r[n++])];
        return n && n == t ? e : void 0;
    }
    iu.exports = S_;
});
var ou = u((WN, au)=>{
    var P_ = Ue();
    function L_(e, r, n) {
        var t = e == null ? void 0 : P_(e, r);
        return t === void 0 ? n : t;
    }
    au.exports = L_;
});
var uu = u((XN, su)=>{
    function N_(e, r) {
        return e != null && r in Object(e);
    }
    su.exports = N_;
});
var ln = u(($N, fu)=>{
    var M_ = Be(), R_ = ge(), k_ = A(), j_ = Le(), F_ = tr(), G_ = we();
    function D_(e, r, n) {
        r = M_(r, e);
        for(var t = -1, i = r.length, a = !1; ++t < i;){
            var o = G_(r[t]);
            if (!(a = e != null && n(e, o))) break;
            e = e[o];
        }
        return a || ++t != i ? a : (i = e == null ? 0 : e.length, !!i && F_(i) && j_(o, i) && (k_(e) || R_(e)));
    }
    fu.exports = D_;
});
var vn = u((ZN, cu)=>{
    var B_ = uu(), U_ = ln();
    function z_(e, r) {
        return e != null && U_(e, r, B_);
    }
    cu.exports = z_;
});
var hu = u((JN, du)=>{
    var V_ = fn(), H_ = ou(), K_ = vn(), Y_ = gr(), W_ = cn(), X_ = dn(), $_ = we(), Z_ = 1, J_ = 2;
    function Q_(e, r) {
        return Y_(e) && W_(r) ? X_($_(e), r) : function(n) {
            var t = H_(n, e);
            return t === void 0 && t === r ? K_(n, e) : V_(r, t, Z_ | J_);
        };
    }
    du.exports = Q_;
});
var gn = u((QN, pu)=>{
    function eE(e) {
        return function(r) {
            return r?.[e];
        };
    }
    pu.exports = eE;
});
var vu = u((eM, lu)=>{
    var rE = Ue();
    function nE(e) {
        return function(r) {
            return rE(r, e);
        };
    }
    lu.exports = nE;
});
var qu = u((rM, gu)=>{
    var tE = gn(), iE = vu(), aE = gr(), oE = we();
    function sE(e) {
        return aE(e) ? tE(oE(e)) : iE(e);
    }
    gu.exports = sE;
});
var k = u((nM, bu)=>{
    var uE = Fs(), fE = hu(), cE = W(), dE = A(), hE = qu();
    function pE(e) {
        return typeof e == "function" ? e : e == null ? cE : typeof e == "object" ? dE(e) ? fE(e[0], e[1]) : uE(e) : hE(e);
    }
    bu.exports = pE;
});
var qn = u((tM, yu)=>{
    var lE = Fr(), vE = Qo(), gE = k(), qE = A();
    function bE(e, r) {
        var n = qE(e) ? lE : vE;
        return n(e, gE(r, 3));
    }
    yu.exports = bE;
});
var xu = u((iM, mu)=>{
    var yE = Object.prototype, mE = yE.hasOwnProperty;
    function xE(e, r) {
        return e != null && mE.call(e, r);
    }
    mu.exports = xE;
});
var bn = u((aM, wu)=>{
    var wE = xu(), _E = ln();
    function EE(e, r) {
        return e != null && _E(e, r, wE);
    }
    wu.exports = EE;
});
var Eu = u((oM, _u)=>{
    var TE = ar(), AE = ie(), OE = ge(), IE = A(), CE = R(), SE = ne(), PE = ke(), LE = ye(), NE = "[object Map]", ME = "[object Set]", RE = Object.prototype, kE = RE.hasOwnProperty;
    function jE(e) {
        if (e == null) return !0;
        if (CE(e) && (IE(e) || typeof e == "string" || typeof e.splice == "function" || SE(e) || LE(e) || OE(e))) return !e.length;
        var r = AE(e);
        if (r == NE || r == ME) return !e.size;
        if (PE(e)) return !TE(e).length;
        for(var n in e)if (kE.call(e, n)) return !1;
        return !0;
    }
    _u.exports = jE;
});
var yn = u((sM, Tu)=>{
    function FE(e) {
        return e === void 0;
    }
    Tu.exports = FE;
});
var mn = u((uM, Au)=>{
    var GE = Ge(), DE = R();
    function BE(e, r) {
        var n = -1, t = DE(e) ? Array(e.length) : [];
        return GE(e, function(i, a, o) {
            t[++n] = r(i, a, o);
        }), t;
    }
    Au.exports = BE;
});
var xn = u((fM, Ou)=>{
    var UE = De(), zE = k(), VE = mn(), HE = A();
    function KE(e, r) {
        var n = HE(e) ? UE : VE;
        return n(e, zE(r, 3));
    }
    Ou.exports = KE;
});
var Cu = u((cM, Iu)=>{
    function YE(e, r, n, t) {
        var i = -1, a = e == null ? 0 : e.length;
        for(t && a && (n = e[++i]); ++i < a;)n = r(n, e[i], i, e);
        return n;
    }
    Iu.exports = YE;
});
var Pu = u((dM, Su)=>{
    function WE(e, r, n, t, i) {
        return i(e, function(a, o, s) {
            n = t ? (t = !1, a) : r(n, a, o, s);
        }), n;
    }
    Su.exports = WE;
});
var wn = u((hM, Lu)=>{
    var XE = Cu(), $E = Ge(), ZE = k(), JE = Pu(), QE = A();
    function eT(e, r, n) {
        var t = QE(e) ? XE : JE, i = arguments.length < 3;
        return t(e, ZE(r, 4), n, i, $E);
    }
    Lu.exports = eT;
});
var Mu = u((pM, Nu)=>{
    var rT = H(), nT = A(), tT = M(), iT = "[object String]";
    function aT(e) {
        return typeof e == "string" || !nT(e) && tT(e) && rT(e) == iT;
    }
    Nu.exports = aT;
});
var ku = u((lM, Ru)=>{
    var oT = gn(), sT = oT("length");
    Ru.exports = sT;
});
var Fu = u((vM, ju)=>{
    var uT = "\\ud800-\\udfff", fT = "\\u0300-\\u036f", cT = "\\ufe20-\\ufe2f", dT = "\\u20d0-\\u20ff", hT = fT + cT + dT, pT = "\\ufe0e\\ufe0f", lT = "\\u200d", vT = RegExp("[" + lT + uT + hT + pT + "]");
    function gT(e) {
        return vT.test(e);
    }
    ju.exports = gT;
});
var Yu = u((gM, Ku)=>{
    var Du = "\\ud800-\\udfff", qT = "\\u0300-\\u036f", bT = "\\ufe20-\\ufe2f", yT = "\\u20d0-\\u20ff", mT = qT + bT + yT, xT = "\\ufe0e\\ufe0f", wT = "[" + Du + "]", _n = "[" + mT + "]", En = "\\ud83c[\\udffb-\\udfff]", _T = "(?:" + _n + "|" + En + ")", Bu = "[^" + Du + "]", Uu = "(?:\\ud83c[\\udde6-\\uddff]){2}", zu = "[\\ud800-\\udbff][\\udc00-\\udfff]", ET = "\\u200d", Vu = _T + "?", Hu = "[" + xT + "]?", TT = "(?:" + ET + "(?:" + [
        Bu,
        Uu,
        zu
    ].join("|") + ")" + Hu + Vu + ")*", AT = Hu + Vu + TT, OT = "(?:" + [
        Bu + _n + "?",
        _n,
        Uu,
        zu,
        wT
    ].join("|") + ")", Gu = RegExp(En + "(?=" + En + ")|" + OT + AT, "g");
    function IT(e) {
        for(var r = Gu.lastIndex = 0; Gu.test(e);)++r;
        return r;
    }
    Ku.exports = IT;
});
var Xu = u((qM, Wu)=>{
    var CT = ku(), ST = Fu(), PT = Yu();
    function LT(e) {
        return ST(e) ? PT(e) : CT(e);
    }
    Wu.exports = LT;
});
var Zu = u((bM, $u)=>{
    var NT = ar(), MT = ie(), RT = R(), kT = Mu(), jT = Xu(), FT = "[object Map]", GT = "[object Set]";
    function DT(e) {
        if (e == null) return 0;
        if (RT(e)) return kT(e) ? jT(e) : e.length;
        var r = MT(e);
        return r == FT || r == GT ? e.size : NT(e).length;
    }
    $u.exports = DT;
});
var Qu = u((yM, Ju)=>{
    var BT = nr(), UT = Zr(), zT = hr(), VT = k(), HT = Fe(), KT = A(), YT = ne(), WT = de(), XT = I(), $T = ye();
    function ZT(e, r, n) {
        var t = KT(e), i = t || YT(e) || $T(e);
        if (r = VT(r, 4), n == null) {
            var a = e && e.constructor;
            i ? n = t ? new a : [] : XT(e) ? n = WT(a) ? UT(HT(e)) : {} : n = {};
        }
        return (i ? BT : zT)(e, function(o, s, f) {
            return r(n, o, s, f);
        }), n;
    }
    Ju.exports = ZT;
});
var tf = u((mM, nf)=>{
    var ef = re(), JT = ge(), QT = A(), rf = ef ? ef.isConcatSpreadable : void 0;
    function e0(e) {
        return QT(e) || JT(e) || !!(rf && e && e[rf]);
    }
    nf.exports = e0;
});
var qr = u((xM, of)=>{
    var r0 = sr(), n0 = tf();
    function af(e, r, n, t, i) {
        var a = -1, o = e.length;
        for(n || (n = n0), i || (i = []); ++a < o;){
            var s = e[a];
            r > 0 && n(s) ? r > 1 ? af(s, r - 1, n, t, i) : r0(i, s) : t || (i[i.length] = s);
        }
        return i;
    }
    of.exports = af;
});
var uf = u((wM, sf)=>{
    function t0(e, r, n) {
        switch(n.length){
            case 0:
                return e.call(r);
            case 1:
                return e.call(r, n[0]);
            case 2:
                return e.call(r, n[0], n[1]);
            case 3:
                return e.call(r, n[0], n[1], n[2]);
        }
        return e.apply(r, n);
    }
    sf.exports = t0;
});
var Tn = u((_M, cf)=>{
    var i0 = uf(), ff = Math.max;
    function a0(e, r, n) {
        return r = ff(r === void 0 ? e.length - 1 : r, 0), function() {
            for(var t = arguments, i = -1, a = ff(t.length - r, 0), o = Array(a); ++i < a;)o[i] = t[r + i];
            i = -1;
            for(var s = Array(r + 1); ++i < r;)s[i] = t[i];
            return s[r] = n(o), i0(e, this, s);
        };
    }
    cf.exports = a0;
});
var pf = u((EM, hf)=>{
    var o0 = cr(), df = Lr(), s0 = W(), u0 = df ? function(e, r) {
        return df(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: o0(r),
            writable: !0
        });
    } : s0;
    hf.exports = u0;
});
var vf = u((TM, lf)=>{
    var f0 = 800, c0 = 16, d0 = Date.now;
    function h0(e) {
        var r = 0, n = 0;
        return function() {
            var t = d0(), i = c0 - (t - n);
            if (n = t, i > 0) {
                if (++r >= f0) return arguments[0];
            } else r = 0;
            return e.apply(void 0, arguments);
        };
    }
    lf.exports = h0;
});
var An = u((AM, gf)=>{
    var p0 = pf(), l0 = vf(), v0 = l0(p0);
    gf.exports = v0;
});
var ze = u((OM, qf)=>{
    var g0 = W(), q0 = Tn(), b0 = An();
    function y0(e, r) {
        return b0(q0(e, r, g0), e + "");
    }
    qf.exports = y0;
});
var On = u((IM, bf)=>{
    function m0(e, r, n, t) {
        for(var i = e.length, a = n + (t ? 1 : -1); t ? a-- : ++a < i;)if (r(e[a], a, e)) return a;
        return -1;
    }
    bf.exports = m0;
});
var mf = u((CM, yf)=>{
    function x0(e) {
        return e !== e;
    }
    yf.exports = x0;
});
var wf = u((SM, xf)=>{
    function w0(e, r, n) {
        for(var t = n - 1, i = e.length; ++t < i;)if (e[t] === r) return t;
        return -1;
    }
    xf.exports = w0;
});
var Ef = u((PM, _f)=>{
    var _0 = On(), E0 = mf(), T0 = wf();
    function A0(e, r, n) {
        return r === r ? T0(e, r, n) : _0(e, E0, n);
    }
    _f.exports = A0;
});
var Af = u((LM, Tf)=>{
    var O0 = Ef();
    function I0(e, r) {
        var n = e == null ? 0 : e.length;
        return !!n && O0(e, r, 0) > -1;
    }
    Tf.exports = I0;
});
var If = u((NM, Of)=>{
    function C0(e, r, n) {
        for(var t = -1, i = e == null ? 0 : e.length; ++t < i;)if (n(r, e[t])) return !0;
        return !1;
    }
    Of.exports = C0;
});
var Sf = u((MM, Cf)=>{
    function S0() {}
    Cf.exports = S0;
});
var Lf = u((RM, Pf)=>{
    var In = zr(), P0 = Sf(), L0 = lr(), N0 = 1 / 0, M0 = In && 1 / L0(new In([
        ,
        -0
    ]))[1] == N0 ? function(e) {
        return new In(e);
    } : P0;
    Pf.exports = M0;
});
var Mf = u((kM, Nf)=>{
    var R0 = tn(), k0 = Af(), j0 = If(), F0 = an(), G0 = Lf(), D0 = lr(), B0 = 200;
    function U0(e, r, n) {
        var t = -1, i = k0, a = e.length, o = !0, s = [], f = s;
        if (n) o = !1, i = j0;
        else if (a >= B0) {
            var c = r ? null : G0(e);
            if (c) return D0(c);
            o = !1, i = F0, f = new R0;
        } else f = r ? [] : s;
        e: for(; ++t < a;){
            var d = e[t], h = r ? r(d) : d;
            if (d = n || d !== 0 ? d : 0, o && h === h) {
                for(var p = f.length; p--;)if (f[p] === h) continue e;
                r && f.push(h), s.push(d);
            } else i(f, h, n) || (f !== s && f.push(h), s.push(d));
        }
        return s;
    }
    Nf.exports = U0;
});
var Cn = u((jM, Rf)=>{
    var z0 = R(), V0 = M();
    function H0(e) {
        return V0(e) && z0(e);
    }
    Rf.exports = H0;
});
var jf = u((FM, kf)=>{
    var K0 = qr(), Y0 = ze(), W0 = Mf(), X0 = Cn(), $0 = Y0(function(e) {
        return W0(K0(e, 1, X0, !0));
    });
    kf.exports = $0;
});
var Gf = u((GM, Ff)=>{
    var Z0 = De();
    function J0(e, r) {
        return Z0(r, function(n) {
            return e[n];
        });
    }
    Ff.exports = J0;
});
var Sn = u((DM, Df)=>{
    var Q0 = Gf(), eA = D();
    function rA(e) {
        return e == null ? [] : Q0(e, eA(e));
    }
    Df.exports = rA;
});
var C = u((BM, Bf)=>{
    var br;
    if (typeof fe == "function") try {
        br = {
            clone: Go(),
            constant: cr(),
            each: nn(),
            filter: qn(),
            has: bn(),
            isArray: A(),
            isEmpty: Eu(),
            isFunction: de(),
            isUndefined: yn(),
            keys: D(),
            map: xn(),
            reduce: wn(),
            size: Zu(),
            transform: Qu(),
            union: jf(),
            values: Sn()
        };
    } catch  {}
    br || (br = window._);
    Bf.exports = br;
});
var He = u((UM, Hf)=>{
    "use strict";
    var g = C();
    Hf.exports = y;
    var nA = "\0", oe = "\0", Uf = "";
    function y(e) {
        this._isDirected = g.has(e, "directed") ? e.directed : !0, this._isMultigraph = g.has(e, "multigraph") ? e.multigraph : !1, this._isCompound = g.has(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = g.constant(void 0), this._defaultEdgeLabelFn = g.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[oe] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
    }
    y.prototype._nodeCount = 0;
    y.prototype._edgeCount = 0;
    y.prototype.isDirected = function() {
        return this._isDirected;
    };
    y.prototype.isMultigraph = function() {
        return this._isMultigraph;
    };
    y.prototype.isCompound = function() {
        return this._isCompound;
    };
    y.prototype.setGraph = function(e) {
        return this._label = e, this;
    };
    y.prototype.graph = function() {
        return this._label;
    };
    y.prototype.setDefaultNodeLabel = function(e) {
        return g.isFunction(e) || (e = g.constant(e)), this._defaultNodeLabelFn = e, this;
    };
    y.prototype.nodeCount = function() {
        return this._nodeCount;
    };
    y.prototype.nodes = function() {
        return g.keys(this._nodes);
    };
    y.prototype.sources = function() {
        var e = this;
        return g.filter(this.nodes(), function(r) {
            return g.isEmpty(e._in[r]);
        });
    };
    y.prototype.sinks = function() {
        var e = this;
        return g.filter(this.nodes(), function(r) {
            return g.isEmpty(e._out[r]);
        });
    };
    y.prototype.setNodes = function(e, r) {
        var n = arguments, t = this;
        return g.each(e, function(i) {
            n.length > 1 ? t.setNode(i, r) : t.setNode(i);
        }), this;
    };
    y.prototype.setNode = function(e, r) {
        return g.has(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = r), this) : (this._nodes[e] = arguments.length > 1 ? r : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = oe, this._children[e] = {}, this._children[oe][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
    };
    y.prototype.node = function(e) {
        return this._nodes[e];
    };
    y.prototype.hasNode = function(e) {
        return g.has(this._nodes, e);
    };
    y.prototype.removeNode = function(e) {
        var r = this;
        if (g.has(this._nodes, e)) {
            var n = function(t) {
                r.removeEdge(r._edgeObjs[t]);
            };
            delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], g.each(this.children(e), function(t) {
                r.setParent(t);
            }), delete this._children[e]), g.each(g.keys(this._in[e]), n), delete this._in[e], delete this._preds[e], g.each(g.keys(this._out[e]), n), delete this._out[e], delete this._sucs[e], --this._nodeCount;
        }
        return this;
    };
    y.prototype.setParent = function(e, r) {
        if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
        if (g.isUndefined(r)) r = oe;
        else {
            r += "";
            for(var n = r; !g.isUndefined(n); n = this.parent(n))if (n === e) throw new Error("Setting " + r + " as parent of " + e + " would create a cycle");
            this.setNode(r);
        }
        return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = r, this._children[r][e] = !0, this;
    };
    y.prototype._removeFromParentsChildList = function(e) {
        delete this._children[this._parent[e]][e];
    };
    y.prototype.parent = function(e) {
        if (this._isCompound) {
            var r = this._parent[e];
            if (r !== oe) return r;
        }
    };
    y.prototype.children = function(e) {
        if (g.isUndefined(e) && (e = oe), this._isCompound) {
            var r = this._children[e];
            if (r) return g.keys(r);
        } else {
            if (e === oe) return this.nodes();
            if (this.hasNode(e)) return [];
        }
    };
    y.prototype.predecessors = function(e) {
        var r = this._preds[e];
        if (r) return g.keys(r);
    };
    y.prototype.successors = function(e) {
        var r = this._sucs[e];
        if (r) return g.keys(r);
    };
    y.prototype.neighbors = function(e) {
        var r = this.predecessors(e);
        if (r) return g.union(r, this.successors(e));
    };
    y.prototype.isLeaf = function(e) {
        var r;
        return this.isDirected() ? r = this.successors(e) : r = this.neighbors(e), r.length === 0;
    };
    y.prototype.filterNodes = function(e) {
        var r = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        r.setGraph(this.graph());
        var n = this;
        g.each(this._nodes, function(a, o) {
            e(o) && r.setNode(o, a);
        }), g.each(this._edgeObjs, function(a) {
            r.hasNode(a.v) && r.hasNode(a.w) && r.setEdge(a, n.edge(a));
        });
        var t = {};
        function i(a) {
            var o = n.parent(a);
            return o === void 0 || r.hasNode(o) ? (t[a] = o, o) : o in t ? t[o] : i(o);
        }
        return this._isCompound && g.each(r.nodes(), function(a) {
            r.setParent(a, i(a));
        }), r;
    };
    y.prototype.setDefaultEdgeLabel = function(e) {
        return g.isFunction(e) || (e = g.constant(e)), this._defaultEdgeLabelFn = e, this;
    };
    y.prototype.edgeCount = function() {
        return this._edgeCount;
    };
    y.prototype.edges = function() {
        return g.values(this._edgeObjs);
    };
    y.prototype.setPath = function(e, r) {
        var n = this, t = arguments;
        return g.reduce(e, function(i, a) {
            return t.length > 1 ? n.setEdge(i, a, r) : n.setEdge(i, a), a;
        }), this;
    };
    y.prototype.setEdge = function() {
        var e, r, n, t, i = !1, a = arguments[0];
        typeof a == "object" && a !== null && "v" in a ? (e = a.v, r = a.w, n = a.name, arguments.length === 2 && (t = arguments[1], i = !0)) : (e = a, r = arguments[1], n = arguments[3], arguments.length > 2 && (t = arguments[2], i = !0)), e = "" + e, r = "" + r, g.isUndefined(n) || (n = "" + n);
        var o = Ve(this._isDirected, e, r, n);
        if (g.has(this._edgeLabels, o)) return i && (this._edgeLabels[o] = t), this;
        if (!g.isUndefined(n) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
        this.setNode(e), this.setNode(r), this._edgeLabels[o] = i ? t : this._defaultEdgeLabelFn(e, r, n);
        var s = tA(this._isDirected, e, r, n);
        return e = s.v, r = s.w, Object.freeze(s), this._edgeObjs[o] = s, zf(this._preds[r], e), zf(this._sucs[e], r), this._in[r][o] = s, this._out[e][o] = s, this._edgeCount++, this;
    };
    y.prototype.edge = function(e, r, n) {
        var t = arguments.length === 1 ? Pn(this._isDirected, arguments[0]) : Ve(this._isDirected, e, r, n);
        return this._edgeLabels[t];
    };
    y.prototype.hasEdge = function(e, r, n) {
        var t = arguments.length === 1 ? Pn(this._isDirected, arguments[0]) : Ve(this._isDirected, e, r, n);
        return g.has(this._edgeLabels, t);
    };
    y.prototype.removeEdge = function(e, r, n) {
        var t = arguments.length === 1 ? Pn(this._isDirected, arguments[0]) : Ve(this._isDirected, e, r, n), i = this._edgeObjs[t];
        return i && (e = i.v, r = i.w, delete this._edgeLabels[t], delete this._edgeObjs[t], Vf(this._preds[r], e), Vf(this._sucs[e], r), delete this._in[r][t], delete this._out[e][t], this._edgeCount--), this;
    };
    y.prototype.inEdges = function(e, r) {
        var n = this._in[e];
        if (n) {
            var t = g.values(n);
            return r ? g.filter(t, function(i) {
                return i.v === r;
            }) : t;
        }
    };
    y.prototype.outEdges = function(e, r) {
        var n = this._out[e];
        if (n) {
            var t = g.values(n);
            return r ? g.filter(t, function(i) {
                return i.w === r;
            }) : t;
        }
    };
    y.prototype.nodeEdges = function(e, r) {
        var n = this.inEdges(e, r);
        if (n) return n.concat(this.outEdges(e, r));
    };
    function zf(e, r) {
        e[r] ? e[r]++ : e[r] = 1;
    }
    function Vf(e, r) {
        --e[r] || delete e[r];
    }
    function Ve(e, r, n, t) {
        var i = "" + r, a = "" + n;
        if (!e && i > a) {
            var o = i;
            i = a, a = o;
        }
        return i + Uf + a + Uf + (g.isUndefined(t) ? nA : t);
    }
    function tA(e, r, n, t) {
        var i = "" + r, a = "" + n;
        if (!e && i > a) {
            var o = i;
            i = a, a = o;
        }
        var s = {
            v: i,
            w: a
        };
        return t && (s.name = t), s;
    }
    function Pn(e, r) {
        return Ve(e, r.v, r.w, r.name);
    }
});
var Yf = u((zM, Kf)=>{
    var iA = Qr(), aA = 1, oA = 4;
    function sA(e) {
        return iA(e, aA | oA);
    }
    Kf.exports = sA;
});
var Ke = u((VM, Wf)=>{
    var uA = ee(), fA = R(), cA = Le(), dA = I();
    function hA(e, r, n) {
        if (!dA(n)) return !1;
        var t = typeof r;
        return (t == "number" ? fA(n) && cA(r, n.length) : t == "string" && r in n) ? uA(n[r], e) : !1;
    }
    Wf.exports = hA;
});
var Zf = u((HM, $f)=>{
    var pA = ze(), lA = ee(), vA = Ke(), gA = Y(), Xf = Object.prototype, qA = Xf.hasOwnProperty, bA = pA(function(e, r) {
        e = Object(e);
        var n = -1, t = r.length, i = t > 2 ? r[2] : void 0;
        for(i && vA(r[0], r[1], i) && (t = 1); ++n < t;)for(var a = r[n], o = gA(a), s = -1, f = o.length; ++s < f;){
            var c = o[s], d = e[c];
            (d === void 0 || lA(d, Xf[c]) && !qA.call(e, c)) && (e[c] = a[c]);
        }
        return e;
    });
    $f.exports = bA;
});
var Qf = u((KM, Jf)=>{
    var yA = k(), mA = R(), xA = D();
    function wA(e) {
        return function(r, n, t) {
            var i = Object(r);
            if (!mA(r)) {
                var a = yA(n, 3);
                r = xA(r), n = function(s) {
                    return a(i[s], s, i);
                };
            }
            var o = e(r, n, t);
            return o > -1 ? i[a ? r[o] : o] : void 0;
        };
    }
    Jf.exports = wA;
});
var rc = u((YM, ec)=>{
    var _A = /\s/;
    function EA(e) {
        for(var r = e.length; r-- && _A.test(e.charAt(r)););
        return r;
    }
    ec.exports = EA;
});
var tc = u((WM, nc)=>{
    var TA = rc(), AA = /^\s+/;
    function OA(e) {
        return e && e.slice(0, TA(e) + 1).replace(AA, "");
    }
    nc.exports = OA;
});
var sc = u((XM, oc)=>{
    var IA = tc(), ic = I(), CA = ae(), ac = 0 / 0, SA = /^[-+]0x[0-9a-f]+$/i, PA = /^0b[01]+$/i, LA = /^0o[0-7]+$/i, NA = parseInt;
    function MA(e) {
        if (typeof e == "number") return e;
        if (CA(e)) return ac;
        if (ic(e)) {
            var r = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = ic(r) ? r + "" : r;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = IA(e);
        var n = PA.test(e);
        return n || LA.test(e) ? NA(e.slice(2), n ? 2 : 8) : SA.test(e) ? ac : +e;
    }
    oc.exports = MA;
});
var Ln = u(($M, fc)=>{
    var RA = sc(), uc = 1 / 0, kA = 17976931348623157e292;
    function jA(e) {
        if (!e) return e === 0 ? e : 0;
        if (e = RA(e), e === uc || e === -uc) {
            var r = e < 0 ? -1 : 1;
            return r * kA;
        }
        return e === e ? e : 0;
    }
    fc.exports = jA;
});
var dc = u((ZM, cc)=>{
    var FA = Ln();
    function GA(e) {
        var r = FA(e), n = r % 1;
        return r === r ? n ? r - n : r : 0;
    }
    cc.exports = GA;
});
var pc = u((JM, hc)=>{
    var DA = On(), BA = k(), UA = dc(), zA = Math.max;
    function VA(e, r, n) {
        var t = e == null ? 0 : e.length;
        if (!t) return -1;
        var i = n == null ? 0 : UA(n);
        return i < 0 && (i = zA(t + i, 0)), DA(e, BA(r, 3), i);
    }
    hc.exports = VA;
});
var vc = u((QM, lc)=>{
    var HA = Qf(), KA = pc(), YA = HA(KA);
    lc.exports = YA;
});
var Nn = u((eR, gc)=>{
    var WA = qr();
    function XA(e) {
        var r = e == null ? 0 : e.length;
        return r ? WA(e, 1) : [];
    }
    gc.exports = XA;
});
var bc = u((rR, qc)=>{
    var $A = dr(), ZA = en(), JA = Y();
    function QA(e, r) {
        return e == null ? e : $A(e, ZA(r), JA);
    }
    qc.exports = QA;
});
var mc = u((nR, yc)=>{
    function eO(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : void 0;
    }
    yc.exports = eO;
});
var wc = u((tR, xc)=>{
    var rO = Ce(), nO = hr(), tO = k();
    function iO(e, r) {
        var n = {};
        return r = tO(r, 3), nO(e, function(t, i, a) {
            rO(n, i, r(t, i, a));
        }), n;
    }
    xc.exports = iO;
});
var yr = u((iR, _c)=>{
    var aO = ae();
    function oO(e, r, n) {
        for(var t = -1, i = e.length; ++t < i;){
            var a = e[t], o = r(a);
            if (o != null && (s === void 0 ? o === o && !aO(o) : n(o, s))) var s = o, f = a;
        }
        return f;
    }
    _c.exports = oO;
});
var Tc = u((aR, Ec)=>{
    function sO(e, r) {
        return e > r;
    }
    Ec.exports = sO;
});
var Oc = u((oR, Ac)=>{
    var uO = yr(), fO = Tc(), cO = W();
    function dO(e) {
        return e && e.length ? uO(e, cO, fO) : void 0;
    }
    Ac.exports = dO;
});
var Mn = u((sR, Ic)=>{
    var hO = Ce(), pO = ee();
    function lO(e, r, n) {
        (n !== void 0 && !pO(e[r], n) || n === void 0 && !(r in e)) && hO(e, r, n);
    }
    Ic.exports = lO;
});
var Pc = u((uR, Sc)=>{
    var vO = H(), gO = Fe(), qO = M(), bO = "[object Object]", yO = Function.prototype, mO = Object.prototype, Cc = yO.toString, xO = mO.hasOwnProperty, wO = Cc.call(Object);
    function _O(e) {
        if (!qO(e) || vO(e) != bO) return !1;
        var r = gO(e);
        if (r === null) return !0;
        var n = xO.call(r, "constructor") && r.constructor;
        return typeof n == "function" && n instanceof n && Cc.call(n) == wO;
    }
    Sc.exports = _O;
});
var Rn = u((fR, Lc)=>{
    function EO(e, r) {
        if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__") return e[r];
    }
    Lc.exports = EO;
});
var Mc = u((cR, Nc)=>{
    var TO = ve(), AO = Y();
    function OO(e) {
        return TO(e, AO(e));
    }
    Nc.exports = OO;
});
var Dc = u((dR, Gc)=>{
    var Rc = Mn(), IO = kr(), CO = $r(), SO = jr(), PO = Jr(), kc = ge(), jc = A(), LO = Cn(), NO = ne(), MO = de(), RO = I(), kO = Pc(), jO = ye(), Fc = Rn(), FO = Mc();
    function GO(e, r, n, t, i, a, o) {
        var s = Fc(e, n), f = Fc(r, n), c = o.get(f);
        if (c) {
            Rc(e, n, c);
            return;
        }
        var d = a ? a(s, f, n + "", e, r, o) : void 0, h = d === void 0;
        if (h) {
            var p = jc(f), l = !p && NO(f), v = !p && !l && jO(f);
            d = f, p || l || v ? jc(s) ? d = s : LO(s) ? d = SO(s) : l ? (h = !1, d = IO(f, !0)) : v ? (h = !1, d = CO(f, !0)) : d = [] : kO(f) || kc(f) ? (d = s, kc(s) ? d = FO(s) : (!RO(s) || MO(s)) && (d = PO(f))) : h = !1;
        }
        h && (o.set(f, d), i(d, f, t, a, o), o.delete(f)), Rc(e, n, d);
    }
    Gc.exports = GO;
});
var zc = u((hR, Uc)=>{
    var DO = Ie(), BO = Mn(), UO = dr(), zO = Dc(), VO = I(), HO = Y(), KO = Rn();
    function Bc(e, r, n, t, i) {
        e !== r && UO(r, function(a, o) {
            if (i || (i = new DO), VO(a)) zO(e, r, o, n, Bc, t, i);
            else {
                var s = t ? t(KO(e, o), a, o + "", e, r, i) : void 0;
                s === void 0 && (s = a), BO(e, o, s);
            }
        }, HO);
    }
    Uc.exports = Bc;
});
var Hc = u((pR, Vc)=>{
    var YO = ze(), WO = Ke();
    function XO(e) {
        return YO(function(r, n) {
            var t = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
            for(a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && WO(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), r = Object(r); ++t < i;){
                var s = n[t];
                s && e(r, s, t, a);
            }
            return r;
        });
    }
    Vc.exports = XO;
});
var Yc = u((lR, Kc)=>{
    var $O = zc(), ZO = Hc(), JO = ZO(function(e, r, n) {
        $O(e, r, n);
    });
    Kc.exports = JO;
});
var kn = u((vR, Wc)=>{
    function QO(e, r) {
        return e < r;
    }
    Wc.exports = QO;
});
var $c = u((gR, Xc)=>{
    var eI = yr(), rI = kn(), nI = W();
    function tI(e) {
        return e && e.length ? eI(e, nI, rI) : void 0;
    }
    Xc.exports = tI;
});
var Jc = u((qR, Zc)=>{
    var iI = yr(), aI = k(), oI = kn();
    function sI(e, r) {
        return e && e.length ? iI(e, aI(r, 2), oI) : void 0;
    }
    Zc.exports = sI;
});
var ed = u((bR, Qc)=>{
    var uI = P(), fI = function() {
        return uI.Date.now();
    };
    Qc.exports = fI;
});
var td = u((yR, nd)=>{
    var cI = Se(), dI = Be(), hI = Le(), rd = I(), pI = we();
    function lI(e, r, n, t) {
        if (!rd(e)) return e;
        r = dI(r, e);
        for(var i = -1, a = r.length, o = a - 1, s = e; s != null && ++i < a;){
            var f = pI(r[i]), c = n;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (i != o) {
                var d = s[f];
                c = t ? t(d, f, s) : void 0, c === void 0 && (c = rd(d) ? d : hI(r[i + 1]) ? [] : {});
            }
            cI(s, f, c), s = s[f];
        }
        return e;
    }
    nd.exports = lI;
});
var ad = u((mR, id)=>{
    var vI = Ue(), gI = td(), qI = Be();
    function bI(e, r, n) {
        for(var t = -1, i = r.length, a = {}; ++t < i;){
            var o = r[t], s = vI(e, o);
            n(s, o) && gI(a, qI(o, e), s);
        }
        return a;
    }
    id.exports = bI;
});
var sd = u((xR, od)=>{
    var yI = ad(), mI = vn();
    function xI(e, r) {
        return yI(e, r, function(n, t) {
            return mI(e, t);
        });
    }
    od.exports = xI;
});
var fd = u((wR, ud)=>{
    var wI = Nn(), _I = Tn(), EI = An();
    function TI(e) {
        return EI(_I(e, void 0, wI), e + "");
    }
    ud.exports = TI;
});
var dd = u((_R, cd)=>{
    var AI = sd(), OI = fd(), II = OI(function(e, r) {
        return e == null ? {} : AI(e, r);
    });
    cd.exports = II;
});
var pd = u((ER, hd)=>{
    var CI = Math.ceil, SI = Math.max;
    function PI(e, r, n, t) {
        for(var i = -1, a = SI(CI((r - e) / (n || 1)), 0), o = Array(a); a--;)o[t ? a : ++i] = e, e += n;
        return o;
    }
    hd.exports = PI;
});
var vd = u((TR, ld)=>{
    var LI = pd(), NI = Ke(), jn = Ln();
    function MI(e) {
        return function(r, n, t) {
            return t && typeof t != "number" && NI(r, n, t) && (n = t = void 0), r = jn(r), n === void 0 ? (n = r, r = 0) : n = jn(n), t = t === void 0 ? r < n ? 1 : -1 : jn(t), LI(r, n, t, e);
        };
    }
    ld.exports = MI;
});
var qd = u((AR, gd)=>{
    var RI = vd(), kI = RI();
    gd.exports = kI;
});
var yd = u((OR, bd)=>{
    function jI(e, r) {
        var n = e.length;
        for(e.sort(r); n--;)e[n] = e[n].value;
        return e;
    }
    bd.exports = jI;
});
var wd = u((IR, xd)=>{
    var md = ae();
    function FI(e, r) {
        if (e !== r) {
            var n = e !== void 0, t = e === null, i = e === e, a = md(e), o = r !== void 0, s = r === null, f = r === r, c = md(r);
            if (!s && !c && !a && e > r || a && o && f && !s && !c || t && o && f || !n && f || !i) return 1;
            if (!t && !a && !c && e < r || c && n && i && !t && !a || s && n && i || !o && i || !f) return -1;
        }
        return 0;
    }
    xd.exports = FI;
});
var Ed = u((CR, _d)=>{
    var GI = wd();
    function DI(e, r, n) {
        for(var t = -1, i = e.criteria, a = r.criteria, o = i.length, s = n.length; ++t < o;){
            var f = GI(i[t], a[t]);
            if (f) {
                if (t >= s) return f;
                var c = n[t];
                return f * (c == "desc" ? -1 : 1);
            }
        }
        return e.index - r.index;
    }
    _d.exports = DI;
});
var Ad = u((SR, Td)=>{
    var Fn = De(), BI = Ue(), UI = k(), zI = mn(), VI = yd(), HI = Ne(), KI = Ed(), YI = W(), WI = A();
    function XI(e, r, n) {
        r.length ? r = Fn(r, function(a) {
            return WI(a) ? function(o) {
                return BI(o, a.length === 1 ? a[0] : a);
            } : a;
        }) : r = [
            YI
        ];
        var t = -1;
        r = Fn(r, HI(UI));
        var i = zI(e, function(a, o, s) {
            var f = Fn(r, function(c) {
                return c(a);
            });
            return {
                criteria: f,
                index: ++t,
                value: a
            };
        });
        return VI(i, function(a, o) {
            return KI(a, o, n);
        });
    }
    Td.exports = XI;
});
var Cd = u((PR, Id)=>{
    var $I = qr(), ZI = Ad(), JI = ze(), Od = Ke(), QI = JI(function(e, r) {
        if (e == null) return [];
        var n = r.length;
        return n > 1 && Od(e, r[0], r[1]) ? r = [] : n > 2 && Od(r[0], r[1], r[2]) && (r = [
            r[0]
        ]), ZI(e, $I(r, 1), []);
    });
    Id.exports = QI;
});
var Pd = u((LR, Sd)=>{
    var eC = pn(), rC = 0;
    function nC(e) {
        var r = ++rC;
        return eC(e) + r;
    }
    Sd.exports = nC;
});
var Nd = u((NR, Ld)=>{
    function tC(e, r, n) {
        for(var t = -1, i = e.length, a = r.length, o = {}; ++t < i;){
            var s = t < a ? r[t] : void 0;
            n(o, e[t], s);
        }
        return o;
    }
    Ld.exports = tC;
});
var Rd = u((MR, Md)=>{
    var iC = Se(), aC = Nd();
    function oC(e, r) {
        return aC(e || [], r || [], iC);
    }
    Md.exports = oC;
});
var E = u((RR, kd)=>{
    var mr;
    if (typeof fe == "function") try {
        mr = {
            cloneDeep: Yf(),
            constant: cr(),
            defaults: Zf(),
            each: nn(),
            filter: qn(),
            find: vc(),
            flatten: Nn(),
            forEach: rn(),
            forIn: bc(),
            has: bn(),
            isUndefined: yn(),
            last: mc(),
            map: xn(),
            mapValues: wc(),
            max: Oc(),
            merge: Yc(),
            min: $c(),
            minBy: Jc(),
            now: ed(),
            pick: dd(),
            range: qd(),
            reduce: wn(),
            sortBy: Cd(),
            uniqueId: Pd(),
            values: Sn(),
            zipObject: Rd()
        };
    } catch  {}
    mr || (mr = window._);
    kd.exports = mr;
});
var Fd = u((kR, jd)=>{
    jd.exports = "2.1.8";
});
var Dd = u((jR, Gd)=>{
    Gd.exports = {
        Graph: He(),
        version: Fd()
    };
});
var Ud = u((FR, Bd)=>{
    var j = C(), sC = He();
    Bd.exports = {
        write: uC,
        read: dC
    };
    function uC(e) {
        var r = {
            options: {
                directed: e.isDirected(),
                multigraph: e.isMultigraph(),
                compound: e.isCompound()
            },
            nodes: fC(e),
            edges: cC(e)
        };
        return j.isUndefined(e.graph()) || (r.value = j.clone(e.graph())), r;
    }
    function fC(e) {
        return j.map(e.nodes(), function(r) {
            var n = e.node(r), t = e.parent(r), i = {
                v: r
            };
            return j.isUndefined(n) || (i.value = n), j.isUndefined(t) || (i.parent = t), i;
        });
    }
    function cC(e) {
        return j.map(e.edges(), function(r) {
            var n = e.edge(r), t = {
                v: r.v,
                w: r.w
            };
            return j.isUndefined(r.name) || (t.name = r.name), j.isUndefined(n) || (t.value = n), t;
        });
    }
    function dC(e) {
        var r = new sC(e.options).setGraph(e.value);
        return j.each(e.nodes, function(n) {
            r.setNode(n.v, n.value), n.parent && r.setParent(n.v, n.parent);
        }), j.each(e.edges, function(n) {
            r.setEdge({
                v: n.v,
                w: n.w,
                name: n.name
            }, n.value);
        }), r;
    }
});
var Vd = u((GR, zd)=>{
    var xr = C();
    zd.exports = hC;
    function hC(e) {
        var r = {}, n = [], t;
        function i(a) {
            xr.has(r, a) || (r[a] = !0, t.push(a), xr.each(e.successors(a), i), xr.each(e.predecessors(a), i));
        }
        return xr.each(e.nodes(), function(a) {
            t = [], i(a), t.length && n.push(t);
        }), n;
    }
});
var Gn = u((DR, Kd)=>{
    var Hd = C();
    Kd.exports = L;
    function L() {
        this._arr = [], this._keyIndices = {};
    }
    L.prototype.size = function() {
        return this._arr.length;
    };
    L.prototype.keys = function() {
        return this._arr.map(function(e) {
            return e.key;
        });
    };
    L.prototype.has = function(e) {
        return Hd.has(this._keyIndices, e);
    };
    L.prototype.priority = function(e) {
        var r = this._keyIndices[e];
        if (r !== void 0) return this._arr[r].priority;
    };
    L.prototype.min = function() {
        if (this.size() === 0) throw new Error("Queue underflow");
        return this._arr[0].key;
    };
    L.prototype.add = function(e, r) {
        var n = this._keyIndices;
        if (e = String(e), !Hd.has(n, e)) {
            var t = this._arr, i = t.length;
            return n[e] = i, t.push({
                key: e,
                priority: r
            }), this._decrease(i), !0;
        }
        return !1;
    };
    L.prototype.removeMin = function() {
        this._swap(0, this._arr.length - 1);
        var e = this._arr.pop();
        return delete this._keyIndices[e.key], this._heapify(0), e.key;
    };
    L.prototype.decrease = function(e, r) {
        var n = this._keyIndices[e];
        if (r > this._arr[n].priority) throw new Error("New priority is greater than current priority. Key: " + e + " Old: " + this._arr[n].priority + " New: " + r);
        this._arr[n].priority = r, this._decrease(n);
    };
    L.prototype._heapify = function(e) {
        var r = this._arr, n = 2 * e, t = n + 1, i = e;
        n < r.length && (i = r[n].priority < r[i].priority ? n : i, t < r.length && (i = r[t].priority < r[i].priority ? t : i), i !== e && (this._swap(e, i), this._heapify(i)));
    };
    L.prototype._decrease = function(e) {
        for(var r = this._arr, n = r[e].priority, t; e !== 0 && (t = e >> 1, !(r[t].priority < n));)this._swap(e, t), e = t;
    };
    L.prototype._swap = function(e, r) {
        var n = this._arr, t = this._keyIndices, i = n[e], a = n[r];
        n[e] = a, n[r] = i, t[a.key] = e, t[i.key] = r;
    };
});
var Dn = u((BR, Yd)=>{
    var pC = C(), lC = Gn();
    Yd.exports = gC;
    var vC = pC.constant(1);
    function gC(e, r, n, t) {
        return qC(e, String(r), n || vC, t || function(i) {
            return e.outEdges(i);
        });
    }
    function qC(e, r, n, t) {
        var i = {}, a = new lC, o, s, f = function(c) {
            var d = c.v !== o ? c.v : c.w, h = i[d], p = n(c), l = s.distance + p;
            if (p < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + c + " Weight: " + p);
            l < h.distance && (h.distance = l, h.predecessor = o, a.decrease(d, l));
        };
        for(e.nodes().forEach(function(c) {
            var d = c === r ? 0 : Number.POSITIVE_INFINITY;
            i[c] = {
                distance: d
            }, a.add(c, d);
        }); a.size() > 0 && (o = a.removeMin(), s = i[o], s.distance !== Number.POSITIVE_INFINITY);)t(o).forEach(f);
        return i;
    }
});
var Xd = u((UR, Wd)=>{
    var bC = Dn(), yC = C();
    Wd.exports = mC;
    function mC(e, r, n) {
        return yC.transform(e.nodes(), function(t, i) {
            t[i] = bC(e, i, r, n);
        }, {});
    }
});
var Bn = u((zR, Zd)=>{
    var $d = C();
    Zd.exports = xC;
    function xC(e) {
        var r = 0, n = [], t = {}, i = [];
        function a(o) {
            var s = t[o] = {
                onStack: !0,
                lowlink: r,
                index: r++
            };
            if (n.push(o), e.successors(o).forEach(function(d) {
                $d.has(t, d) ? t[d].onStack && (s.lowlink = Math.min(s.lowlink, t[d].index)) : (a(d), s.lowlink = Math.min(s.lowlink, t[d].lowlink));
            }), s.lowlink === s.index) {
                var f = [], c;
                do c = n.pop(), t[c].onStack = !1, f.push(c);
                while (o !== c)
                i.push(f);
            }
        }
        return e.nodes().forEach(function(o) {
            $d.has(t, o) || a(o);
        }), i;
    }
});
var Qd = u((VR, Jd)=>{
    var wC = C(), _C = Bn();
    Jd.exports = EC;
    function EC(e) {
        return wC.filter(_C(e), function(r) {
            return r.length > 1 || r.length === 1 && e.hasEdge(r[0], r[0]);
        });
    }
});
var rh = u((HR, eh)=>{
    var TC = C();
    eh.exports = OC;
    var AC = TC.constant(1);
    function OC(e, r, n) {
        return IC(e, r || AC, n || function(t) {
            return e.outEdges(t);
        });
    }
    function IC(e, r, n) {
        var t = {}, i = e.nodes();
        return i.forEach(function(a) {
            t[a] = {}, t[a][a] = {
                distance: 0
            }, i.forEach(function(o) {
                a !== o && (t[a][o] = {
                    distance: Number.POSITIVE_INFINITY
                });
            }), n(a).forEach(function(o) {
                var s = o.v === a ? o.w : o.v, f = r(o);
                t[a][s] = {
                    distance: f,
                    predecessor: a
                };
            });
        }), i.forEach(function(a) {
            var o = t[a];
            i.forEach(function(s) {
                var f = t[s];
                i.forEach(function(c) {
                    var d = f[a], h = o[c], p = f[c], l = d.distance + h.distance;
                    l < p.distance && (p.distance = l, p.predecessor = h.predecessor);
                });
            });
        }), t;
    }
});
var Un = u((KR, th)=>{
    var Ye = C();
    th.exports = nh;
    nh.CycleException = wr;
    function nh(e) {
        var r = {}, n = {}, t = [];
        function i(a) {
            if (Ye.has(n, a)) throw new wr;
            Ye.has(r, a) || (n[a] = !0, r[a] = !0, Ye.each(e.predecessors(a), i), delete n[a], t.push(a));
        }
        if (Ye.each(e.sinks(), i), Ye.size(r) !== e.nodeCount()) throw new wr;
        return t;
    }
    function wr() {}
    wr.prototype = new Error;
});
var oh = u((YR, ah)=>{
    var ih = Un();
    ah.exports = CC;
    function CC(e) {
        try {
            ih(e);
        } catch (r) {
            if (r instanceof ih.CycleException) return !1;
            throw r;
        }
        return !0;
    }
});
var zn = u((WR, uh)=>{
    var _r = C();
    uh.exports = SC;
    function SC(e, r, n) {
        _r.isArray(r) || (r = [
            r
        ]);
        var t = (e.isDirected() ? e.successors : e.neighbors).bind(e), i = [], a = {};
        return _r.each(r, function(o) {
            if (!e.hasNode(o)) throw new Error("Graph does not have node: " + o);
            sh(e, o, n === "post", a, t, i);
        }), i;
    }
    function sh(e, r, n, t, i, a) {
        _r.has(t, r) || (t[r] = !0, n || a.push(r), _r.each(i(r), function(o) {
            sh(e, o, n, t, i, a);
        }), n && a.push(r));
    }
});
var ch = u((XR, fh)=>{
    var PC = zn();
    fh.exports = LC;
    function LC(e, r) {
        return PC(e, r, "post");
    }
});
var hh = u(($R, dh)=>{
    var NC = zn();
    dh.exports = MC;
    function MC(e, r) {
        return NC(e, r, "pre");
    }
});
var vh = u((ZR, lh)=>{
    var ph = C(), RC = He(), kC = Gn();
    lh.exports = jC;
    function jC(e, r) {
        var n = new RC, t = {}, i = new kC, a;
        function o(f) {
            var c = f.v === a ? f.w : f.v, d = i.priority(c);
            if (d !== void 0) {
                var h = r(f);
                h < d && (t[c] = a, i.decrease(c, h));
            }
        }
        if (e.nodeCount() === 0) return n;
        ph.each(e.nodes(), function(f) {
            i.add(f, Number.POSITIVE_INFINITY), n.setNode(f);
        }), i.decrease(e.nodes()[0], 0);
        for(var s = !1; i.size() > 0;){
            if (a = i.removeMin(), ph.has(t, a)) n.setEdge(a, t[a]);
            else {
                if (s) throw new Error("Input graph is not connected: " + e);
                s = !0;
            }
            e.nodeEdges(a).forEach(o);
        }
        return n;
    }
});
var qh = u((JR, gh)=>{
    gh.exports = {
        components: Vd(),
        dijkstra: Dn(),
        dijkstraAll: Xd(),
        findCycles: Qd(),
        floydWarshall: rh(),
        isAcyclic: oh(),
        postorder: ch(),
        preorder: hh(),
        prim: vh(),
        tarjan: Bn(),
        topsort: Un()
    };
});
var mh = u((QR, yh)=>{
    var bh = Dd();
    yh.exports = {
        Graph: bh.Graph,
        json: Ud(),
        alg: qh(),
        version: bh.version
    };
});
var F = u((ek, xh)=>{
    var Er;
    if (typeof fe == "function") try {
        Er = mh();
    } catch  {}
    Er || (Er = window.graphlib);
    xh.exports = Er;
});
var Eh = u((rk, _h)=>{
    _h.exports = Tr;
    function Tr() {
        var e = {};
        e._next = e._prev = e, this._sentinel = e;
    }
    Tr.prototype.dequeue = function() {
        var e = this._sentinel, r = e._prev;
        if (r !== e) return wh(r), r;
    };
    Tr.prototype.enqueue = function(e) {
        var r = this._sentinel;
        e._prev && e._next && wh(e), e._next = r._next, r._next._prev = e, r._next = e, e._prev = r;
    };
    Tr.prototype.toString = function() {
        for(var e = [], r = this._sentinel, n = r._prev; n !== r;)e.push(JSON.stringify(n, FC)), n = n._prev;
        return "[" + e.join(", ") + "]";
    };
    function wh(e) {
        e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
    }
    function FC(e, r) {
        if (e !== "_next" && e !== "_prev") return r;
    }
});
var Ah = u((nk, Th)=>{
    var B = E(), GC = F().Graph, DC = Eh();
    Th.exports = UC;
    var BC = B.constant(1);
    function UC(e, r) {
        if (e.nodeCount() <= 1) return [];
        var n = VC(e, r || BC), t = zC(n.graph, n.buckets, n.zeroIdx);
        return B.flatten(B.map(t, function(i) {
            return e.outEdges(i.v, i.w);
        }), !0);
    }
    function zC(e, r, n) {
        for(var t = [], i = r[r.length - 1], a = r[0], o; e.nodeCount();){
            for(; o = a.dequeue();)Vn(e, r, n, o);
            for(; o = i.dequeue();)Vn(e, r, n, o);
            if (e.nodeCount()) {
                for(var s = r.length - 2; s > 0; --s)if (o = r[s].dequeue(), o) {
                    t = t.concat(Vn(e, r, n, o, !0));
                    break;
                }
            }
        }
        return t;
    }
    function Vn(e, r, n, t, i) {
        var a = i ? [] : void 0;
        return B.forEach(e.inEdges(t.v), function(o) {
            var s = e.edge(o), f = e.node(o.v);
            i && a.push({
                v: o.v,
                w: o.w
            }), f.out -= s, Hn(r, n, f);
        }), B.forEach(e.outEdges(t.v), function(o) {
            var s = e.edge(o), f = o.w, c = e.node(f);
            c.in -= s, Hn(r, n, c);
        }), e.removeNode(t.v), a;
    }
    function VC(e, r) {
        var n = new GC, t = 0, i = 0;
        B.forEach(e.nodes(), function(s) {
            n.setNode(s, {
                v: s,
                in: 0,
                out: 0
            });
        }), B.forEach(e.edges(), function(s) {
            var f = n.edge(s.v, s.w) || 0, c = r(s), d = f + c;
            n.setEdge(s.v, s.w, d), i = Math.max(i, n.node(s.v).out += c), t = Math.max(t, n.node(s.w).in += c);
        });
        var a = B.range(i + t + 3).map(function() {
            return new DC;
        }), o = t + 1;
        return B.forEach(n.nodes(), function(s) {
            Hn(a, o, n.node(s));
        }), {
            graph: n,
            buckets: a,
            zeroIdx: o
        };
    }
    function Hn(e, r, n) {
        n.out ? n.in ? e[n.out - n.in + r].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n);
    }
});
var Ih = u((tk, Oh)=>{
    "use strict";
    var se = E(), HC = Ah();
    Oh.exports = {
        run: KC,
        undo: WC
    };
    function KC(e) {
        var r = e.graph().acyclicer === "greedy" ? HC(e, n(e)) : YC(e);
        se.forEach(r, function(t) {
            var i = e.edge(t);
            e.removeEdge(t), i.forwardName = t.name, i.reversed = !0, e.setEdge(t.w, t.v, i, se.uniqueId("rev"));
        });
        function n(t) {
            return function(i) {
                return t.edge(i).weight;
            };
        }
    }
    function YC(e) {
        var r = [], n = {}, t = {};
        function i(a) {
            se.has(t, a) || (t[a] = !0, n[a] = !0, se.forEach(e.outEdges(a), function(o) {
                se.has(n, o.w) ? r.push(o) : i(o.w);
            }), delete n[a]);
        }
        return se.forEach(e.nodes(), i), r;
    }
    function WC(e) {
        se.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            if (n.reversed) {
                e.removeEdge(r);
                var t = n.forwardName;
                delete n.reversed, delete n.forwardName, e.setEdge(r.w, r.v, n, t);
            }
        });
    }
});
var N = u((ik, Lh)=>{
    "use strict";
    var x = E(), Ch = F().Graph;
    Lh.exports = {
        addDummyNode: Sh,
        simplify: XC,
        asNonCompoundGraph: $C,
        successorWeights: ZC,
        predecessorWeights: JC,
        intersectRect: QC,
        buildLayerMatrix: e1,
        normalizeRanks: r1,
        removeEmptyRanks: n1,
        addBorderNode: t1,
        maxRank: Ph,
        partition: i1,
        time: a1,
        notime: o1
    };
    function Sh(e, r, n, t) {
        var i;
        do i = x.uniqueId(t);
        while (e.hasNode(i))
        return n.dummy = r, e.setNode(i, n), i;
    }
    function XC(e) {
        var r = new Ch().setGraph(e.graph());
        return x.forEach(e.nodes(), function(n) {
            r.setNode(n, e.node(n));
        }), x.forEach(e.edges(), function(n) {
            var t = r.edge(n.v, n.w) || {
                weight: 0,
                minlen: 1
            }, i = e.edge(n);
            r.setEdge(n.v, n.w, {
                weight: t.weight + i.weight,
                minlen: Math.max(t.minlen, i.minlen)
            });
        }), r;
    }
    function $C(e) {
        var r = new Ch({
            multigraph: e.isMultigraph()
        }).setGraph(e.graph());
        return x.forEach(e.nodes(), function(n) {
            e.children(n).length || r.setNode(n, e.node(n));
        }), x.forEach(e.edges(), function(n) {
            r.setEdge(n, e.edge(n));
        }), r;
    }
    function ZC(e) {
        var r = x.map(e.nodes(), function(n) {
            var t = {};
            return x.forEach(e.outEdges(n), function(i) {
                t[i.w] = (t[i.w] || 0) + e.edge(i).weight;
            }), t;
        });
        return x.zipObject(e.nodes(), r);
    }
    function JC(e) {
        var r = x.map(e.nodes(), function(n) {
            var t = {};
            return x.forEach(e.inEdges(n), function(i) {
                t[i.v] = (t[i.v] || 0) + e.edge(i).weight;
            }), t;
        });
        return x.zipObject(e.nodes(), r);
    }
    function QC(e, r) {
        var n = e.x, t = e.y, i = r.x - n, a = r.y - t, o = e.width / 2, s = e.height / 2;
        if (!i && !a) throw new Error("Not possible to find intersection inside of the rectangle");
        var f, c;
        return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), f = s * i / a, c = s) : (i < 0 && (o = -o), f = o, c = o * a / i), {
            x: n + f,
            y: t + c
        };
    }
    function e1(e) {
        var r = x.map(x.range(Ph(e) + 1), function() {
            return [];
        });
        return x.forEach(e.nodes(), function(n) {
            var t = e.node(n), i = t.rank;
            x.isUndefined(i) || (r[i][t.order] = n);
        }), r;
    }
    function r1(e) {
        var r = x.min(x.map(e.nodes(), function(n) {
            return e.node(n).rank;
        }));
        x.forEach(e.nodes(), function(n) {
            var t = e.node(n);
            x.has(t, "rank") && (t.rank -= r);
        });
    }
    function n1(e) {
        var r = x.min(x.map(e.nodes(), function(a) {
            return e.node(a).rank;
        })), n = [];
        x.forEach(e.nodes(), function(a) {
            var o = e.node(a).rank - r;
            n[o] || (n[o] = []), n[o].push(a);
        });
        var t = 0, i = e.graph().nodeRankFactor;
        x.forEach(n, function(a, o) {
            x.isUndefined(a) && o % i !== 0 ? --t : t && x.forEach(a, function(s) {
                e.node(s).rank += t;
            });
        });
    }
    function t1(e, r, n, t) {
        var i = {
            width: 0,
            height: 0
        };
        return arguments.length >= 4 && (i.rank = n, i.order = t), Sh(e, "border", i, r);
    }
    function Ph(e) {
        return x.max(x.map(e.nodes(), function(r) {
            var n = e.node(r).rank;
            if (!x.isUndefined(n)) return n;
        }));
    }
    function i1(e, r) {
        var n = {
            lhs: [],
            rhs: []
        };
        return x.forEach(e, function(t) {
            r(t) ? n.lhs.push(t) : n.rhs.push(t);
        }), n;
    }
    function a1(e, r) {
        var n = x.now();
        try {
            return r();
        } finally{
            console.log(e + " time: " + (x.now() - n) + "ms");
        }
    }
    function o1(e, r) {
        return r();
    }
});
var Rh = u((ak, Mh)=>{
    "use strict";
    var Nh = E(), s1 = N();
    Mh.exports = {
        run: u1,
        undo: c1
    };
    function u1(e) {
        e.graph().dummyChains = [], Nh.forEach(e.edges(), function(r) {
            f1(e, r);
        });
    }
    function f1(e, r) {
        var n = r.v, t = e.node(n).rank, i = r.w, a = e.node(i).rank, o = r.name, s = e.edge(r), f = s.labelRank;
        if (a !== t + 1) {
            e.removeEdge(r);
            var c, d, h;
            for(h = 0, ++t; t < a; ++h, ++t)s.points = [], d = {
                width: 0,
                height: 0,
                edgeLabel: s,
                edgeObj: r,
                rank: t
            }, c = s1.addDummyNode(e, "edge", d, "_d"), t === f && (d.width = s.width, d.height = s.height, d.dummy = "edge-label", d.labelpos = s.labelpos), e.setEdge(n, c, {
                weight: s.weight
            }, o), h === 0 && e.graph().dummyChains.push(c), n = c;
            e.setEdge(n, i, {
                weight: s.weight
            }, o);
        }
    }
    function c1(e) {
        Nh.forEach(e.graph().dummyChains, function(r) {
            var n = e.node(r), t = n.edgeLabel, i;
            for(e.setEdge(n.edgeObj, t); n.dummy;)i = e.successors(r)[0], e.removeNode(r), t.points.push({
                x: n.x,
                y: n.y
            }), n.dummy === "edge-label" && (t.x = n.x, t.y = n.y, t.width = n.width, t.height = n.height), r = i, n = e.node(r);
        });
    }
});
var We = u((ok, kh)=>{
    "use strict";
    var Ar = E();
    kh.exports = {
        longestPath: d1,
        slack: h1
    };
    function d1(e) {
        var r = {};
        function n(t) {
            var i = e.node(t);
            if (Ar.has(r, t)) return i.rank;
            r[t] = !0;
            var a = Ar.min(Ar.map(e.outEdges(t), function(o) {
                return n(o.w) - e.edge(o).minlen;
            }));
            return (a === Number.POSITIVE_INFINITY || a === void 0 || a === null) && (a = 0), i.rank = a;
        }
        Ar.forEach(e.sources(), n);
    }
    function h1(e, r) {
        return e.node(r.w).rank - e.node(r.v).rank - e.edge(r).minlen;
    }
});
var Kn = u((sk, jh)=>{
    "use strict";
    var Or = E(), p1 = F().Graph, Ir = We().slack;
    jh.exports = l1;
    function l1(e) {
        var r = new p1({
            directed: !1
        }), n = e.nodes()[0], t = e.nodeCount();
        r.setNode(n, {});
        for(var i, a; v1(r, e) < t;)i = g1(r, e), a = r.hasNode(i.v) ? Ir(e, i) : -Ir(e, i), q1(r, e, a);
        return r;
    }
    function v1(e, r) {
        function n(t) {
            Or.forEach(r.nodeEdges(t), function(i) {
                var a = i.v, o = t === a ? i.w : a;
                !e.hasNode(o) && !Ir(r, i) && (e.setNode(o, {}), e.setEdge(t, o, {}), n(o));
            });
        }
        return Or.forEach(e.nodes(), n), e.nodeCount();
    }
    function g1(e, r) {
        return Or.minBy(r.edges(), function(n) {
            if (e.hasNode(n.v) !== e.hasNode(n.w)) return Ir(r, n);
        });
    }
    function q1(e, r, n) {
        Or.forEach(e.nodes(), function(t) {
            r.node(t).rank += n;
        });
    }
});
var Hh = u((uk, Vh)=>{
    "use strict";
    var U = E(), b1 = Kn(), y1 = We().slack, m1 = We().longestPath, x1 = F().alg.preorder, w1 = F().alg.postorder, _1 = N().simplify;
    Vh.exports = ue;
    ue.initLowLimValues = Wn;
    ue.initCutValues = Yn;
    ue.calcCutValue = Gh;
    ue.leaveEdge = Bh;
    ue.enterEdge = Uh;
    ue.exchangeEdges = zh;
    function ue(e) {
        e = _1(e), m1(e);
        var r = b1(e);
        Wn(r), Yn(r, e);
        for(var n, t; n = Bh(r);)t = Uh(r, e, n), zh(r, e, n, t);
    }
    function Yn(e, r) {
        var n = w1(e, e.nodes());
        n = n.slice(0, n.length - 1), U.forEach(n, function(t) {
            E1(e, r, t);
        });
    }
    function E1(e, r, n) {
        var t = e.node(n), i = t.parent;
        e.edge(n, i).cutvalue = Gh(e, r, n);
    }
    function Gh(e, r, n) {
        var t = e.node(n), i = t.parent, a = !0, o = r.edge(n, i), s = 0;
        return o || (a = !1, o = r.edge(i, n)), s = o.weight, U.forEach(r.nodeEdges(n), function(f) {
            var c = f.v === n, d = c ? f.w : f.v;
            if (d !== i) {
                var h = c === a, p = r.edge(f).weight;
                if (s += h ? p : -p, A1(e, n, d)) {
                    var l = e.edge(n, d).cutvalue;
                    s += h ? -l : l;
                }
            }
        }), s;
    }
    function Wn(e, r) {
        arguments.length < 2 && (r = e.nodes()[0]), Dh(e, {}, 1, r);
    }
    function Dh(e, r, n, t, i) {
        var a = n, o = e.node(t);
        return r[t] = !0, U.forEach(e.neighbors(t), function(s) {
            U.has(r, s) || (n = Dh(e, r, n, s, t));
        }), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
    }
    function Bh(e) {
        return U.find(e.edges(), function(r) {
            return e.edge(r).cutvalue < 0;
        });
    }
    function Uh(e, r, n) {
        var t = n.v, i = n.w;
        r.hasEdge(t, i) || (t = n.w, i = n.v);
        var a = e.node(t), o = e.node(i), s = a, f = !1;
        a.lim > o.lim && (s = o, f = !0);
        var c = U.filter(r.edges(), function(d) {
            return f === Fh(e, e.node(d.v), s) && f !== Fh(e, e.node(d.w), s);
        });
        return U.minBy(c, function(d) {
            return y1(r, d);
        });
    }
    function zh(e, r, n, t) {
        var i = n.v, a = n.w;
        e.removeEdge(i, a), e.setEdge(t.v, t.w, {}), Wn(e), Yn(e, r), T1(e, r);
    }
    function T1(e, r) {
        var n = U.find(e.nodes(), function(i) {
            return !r.node(i).parent;
        }), t = x1(e, n);
        t = t.slice(1), U.forEach(t, function(i) {
            var a = e.node(i).parent, o = r.edge(i, a), s = !1;
            o || (o = r.edge(a, i), s = !0), r.node(i).rank = r.node(a).rank + (s ? o.minlen : -o.minlen);
        });
    }
    function A1(e, r, n) {
        return e.hasEdge(r, n);
    }
    function Fh(e, r, n) {
        return n.low <= r.lim && r.lim <= n.lim;
    }
});
var Xh = u((fk, Wh)=>{
    "use strict";
    var O1 = We(), Yh = O1.longestPath, I1 = Kn(), C1 = Hh();
    Wh.exports = S1;
    function S1(e) {
        switch(e.graph().ranker){
            case "network-simplex":
                Kh(e);
                break;
            case "tight-tree":
                L1(e);
                break;
            case "longest-path":
                P1(e);
                break;
            default:
                Kh(e);
        }
    }
    var P1 = Yh;
    function L1(e) {
        Yh(e), I1(e);
    }
    function Kh(e) {
        C1(e);
    }
});
var Zh = u((ck, $h)=>{
    var Xn = E();
    $h.exports = N1;
    function N1(e) {
        var r = R1(e);
        Xn.forEach(e.graph().dummyChains, function(n) {
            for(var t = e.node(n), i = t.edgeObj, a = M1(e, r, i.v, i.w), o = a.path, s = a.lca, f = 0, c = o[f], d = !0; n !== i.w;){
                if (t = e.node(n), d) {
                    for(; (c = o[f]) !== s && e.node(c).maxRank < t.rank;)f++;
                    c === s && (d = !1);
                }
                if (!d) {
                    for(; f < o.length - 1 && e.node(c = o[f + 1]).minRank <= t.rank;)f++;
                    c = o[f];
                }
                e.setParent(n, c), n = e.successors(n)[0];
            }
        });
    }
    function M1(e, r, n, t) {
        var i = [], a = [], o = Math.min(r[n].low, r[t].low), s = Math.max(r[n].lim, r[t].lim), f, c;
        f = n;
        do f = e.parent(f), i.push(f);
        while (f && (r[f].low > o || s > r[f].lim))
        for(c = f, f = t; (f = e.parent(f)) !== c;)a.push(f);
        return {
            path: i.concat(a.reverse()),
            lca: c
        };
    }
    function R1(e) {
        var r = {}, n = 0;
        function t(i) {
            var a = n;
            Xn.forEach(e.children(i), t), r[i] = {
                low: a,
                lim: n++
            };
        }
        return Xn.forEach(e.children(), t), r;
    }
});
var ep = u((dk, Qh)=>{
    var z = E(), $n = N();
    Qh.exports = {
        run: k1,
        cleanup: G1
    };
    function k1(e) {
        var r = $n.addDummyNode(e, "root", {}, "_root"), n = j1(e), t = z.max(z.values(n)) - 1, i = 2 * t + 1;
        e.graph().nestingRoot = r, z.forEach(e.edges(), function(o) {
            e.edge(o).minlen *= i;
        });
        var a = F1(e) + 1;
        z.forEach(e.children(), function(o) {
            Jh(e, r, i, a, t, n, o);
        }), e.graph().nodeRankFactor = i;
    }
    function Jh(e, r, n, t, i, a, o) {
        var s = e.children(o);
        if (!s.length) {
            o !== r && e.setEdge(r, o, {
                weight: 0,
                minlen: n
            });
            return;
        }
        var f = $n.addBorderNode(e, "_bt"), c = $n.addBorderNode(e, "_bb"), d = e.node(o);
        e.setParent(f, o), d.borderTop = f, e.setParent(c, o), d.borderBottom = c, z.forEach(s, function(h) {
            Jh(e, r, n, t, i, a, h);
            var p = e.node(h), l = p.borderTop ? p.borderTop : h, v = p.borderBottom ? p.borderBottom : h, m = p.borderTop ? t : 2 * t, T = l !== v ? 1 : i - a[o] + 1;
            e.setEdge(f, l, {
                weight: m,
                minlen: T,
                nestingEdge: !0
            }), e.setEdge(v, c, {
                weight: m,
                minlen: T,
                nestingEdge: !0
            });
        }), e.parent(o) || e.setEdge(r, f, {
            weight: 0,
            minlen: i + a[o]
        });
    }
    function j1(e) {
        var r = {};
        function n(t, i) {
            var a = e.children(t);
            a && a.length && z.forEach(a, function(o) {
                n(o, i + 1);
            }), r[t] = i;
        }
        return z.forEach(e.children(), function(t) {
            n(t, 1);
        }), r;
    }
    function F1(e) {
        return z.reduce(e.edges(), function(r, n) {
            return r + e.edge(n).weight;
        }, 0);
    }
    function G1(e) {
        var r = e.graph();
        e.removeNode(r.nestingRoot), delete r.nestingRoot, z.forEach(e.edges(), function(n) {
            var t = e.edge(n);
            t.nestingEdge && e.removeEdge(n);
        });
    }
});
var tp = u((hk, np)=>{
    var Zn = E(), D1 = N();
    np.exports = B1;
    function B1(e) {
        function r(n) {
            var t = e.children(n), i = e.node(n);
            if (t.length && Zn.forEach(t, r), Zn.has(i, "minRank")) {
                i.borderLeft = [], i.borderRight = [];
                for(var a = i.minRank, o = i.maxRank + 1; a < o; ++a)rp(e, "borderLeft", "_bl", n, i, a), rp(e, "borderRight", "_br", n, i, a);
            }
        }
        Zn.forEach(e.children(), r);
    }
    function rp(e, r, n, t, i, a) {
        var o = {
            width: 0,
            height: 0,
            rank: a,
            borderType: r
        }, s = i[r][a - 1], f = D1.addDummyNode(e, "border", o, n);
        i[r][a] = f, e.setParent(f, t), s && e.setEdge(s, f, {
            weight: 1
        });
    }
});
var sp = u((pk, op)=>{
    "use strict";
    var G = E();
    op.exports = {
        adjust: U1,
        undo: z1
    };
    function U1(e) {
        var r = e.graph().rankdir.toLowerCase();
        (r === "lr" || r === "rl") && ap(e);
    }
    function z1(e) {
        var r = e.graph().rankdir.toLowerCase();
        (r === "bt" || r === "rl") && V1(e), (r === "lr" || r === "rl") && (H1(e), ap(e));
    }
    function ap(e) {
        G.forEach(e.nodes(), function(r) {
            ip(e.node(r));
        }), G.forEach(e.edges(), function(r) {
            ip(e.edge(r));
        });
    }
    function ip(e) {
        var r = e.width;
        e.width = e.height, e.height = r;
    }
    function V1(e) {
        G.forEach(e.nodes(), function(r) {
            Jn(e.node(r));
        }), G.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            G.forEach(n.points, Jn), G.has(n, "y") && Jn(n);
        });
    }
    function Jn(e) {
        e.y = -e.y;
    }
    function H1(e) {
        G.forEach(e.nodes(), function(r) {
            Qn(e.node(r));
        }), G.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            G.forEach(n.points, Qn), G.has(n, "x") && Qn(n);
        });
    }
    function Qn(e) {
        var r = e.x;
        e.x = e.y, e.y = r;
    }
});
var fp = u((lk, up)=>{
    "use strict";
    var V = E();
    up.exports = K1;
    function K1(e) {
        var r = {}, n = V.filter(e.nodes(), function(s) {
            return !e.children(s).length;
        }), t = V.max(V.map(n, function(s) {
            return e.node(s).rank;
        })), i = V.map(V.range(t + 1), function() {
            return [];
        });
        function a(s) {
            if (!V.has(r, s)) {
                r[s] = !0;
                var f = e.node(s);
                i[f.rank].push(s), V.forEach(e.successors(s), a);
            }
        }
        var o = V.sortBy(n, function(s) {
            return e.node(s).rank;
        });
        return V.forEach(o, a), i;
    }
});
var dp = u((vk, cp)=>{
    "use strict";
    var X = E();
    cp.exports = Y1;
    function Y1(e, r) {
        for(var n = 0, t = 1; t < r.length; ++t)n += W1(e, r[t - 1], r[t]);
        return n;
    }
    function W1(e, r, n) {
        for(var t = X.zipObject(n, X.map(n, function(c, d) {
            return d;
        })), i = X.flatten(X.map(r, function(c) {
            return X.sortBy(X.map(e.outEdges(c), function(d) {
                return {
                    pos: t[d.w],
                    weight: e.edge(d).weight
                };
            }), "pos");
        }), !0), a = 1; a < n.length;)a <<= 1;
        var o = 2 * a - 1;
        a -= 1;
        var s = X.map(new Array(o), function() {
            return 0;
        }), f = 0;
        return X.forEach(i.forEach(function(c) {
            var d = c.pos + a;
            s[d] += c.weight;
            for(var h = 0; d > 0;)d % 2 && (h += s[d + 1]), d = d - 1 >> 1, s[d] += c.weight;
            f += c.weight * h;
        })), f;
    }
});
var lp = u((gk, pp)=>{
    var hp = E();
    pp.exports = X1;
    function X1(e, r) {
        return hp.map(r, function(n) {
            var t = e.inEdges(n);
            if (t.length) {
                var i = hp.reduce(t, function(a, o) {
                    var s = e.edge(o), f = e.node(o.v);
                    return {
                        sum: a.sum + s.weight * f.order,
                        weight: a.weight + s.weight
                    };
                }, {
                    sum: 0,
                    weight: 0
                });
                return {
                    v: n,
                    barycenter: i.sum / i.weight,
                    weight: i.weight
                };
            } else return {
                v: n
            };
        });
    }
});
var gp = u((qk, vp)=>{
    "use strict";
    var S = E();
    vp.exports = $1;
    function $1(e, r) {
        var n = {};
        S.forEach(e, function(i, a) {
            var o = n[i.v] = {
                indegree: 0,
                in: [],
                out: [],
                vs: [
                    i.v
                ],
                i: a
            };
            S.isUndefined(i.barycenter) || (o.barycenter = i.barycenter, o.weight = i.weight);
        }), S.forEach(r.edges(), function(i) {
            var a = n[i.v], o = n[i.w];
            !S.isUndefined(a) && !S.isUndefined(o) && (o.indegree++, a.out.push(n[i.w]));
        });
        var t = S.filter(n, function(i) {
            return !i.indegree;
        });
        return Z1(t);
    }
    function Z1(e) {
        var r = [];
        function n(a) {
            return function(o) {
                o.merged || (S.isUndefined(o.barycenter) || S.isUndefined(a.barycenter) || o.barycenter >= a.barycenter) && J1(a, o);
            };
        }
        function t(a) {
            return function(o) {
                o.in.push(a), --o.indegree === 0 && e.push(o);
            };
        }
        for(; e.length;){
            var i = e.pop();
            r.push(i), S.forEach(i.in.reverse(), n(i)), S.forEach(i.out, t(i));
        }
        return S.map(S.filter(r, function(a) {
            return !a.merged;
        }), function(a) {
            return S.pick(a, [
                "vs",
                "i",
                "barycenter",
                "weight"
            ]);
        });
    }
    function J1(e, r) {
        var n = 0, t = 0;
        e.weight && (n += e.barycenter * e.weight, t += e.weight), r.weight && (n += r.barycenter * r.weight, t += r.weight), e.vs = r.vs.concat(e.vs), e.barycenter = n / t, e.weight = t, e.i = Math.min(r.i, e.i), r.merged = !0;
    }
});
var yp = u((bk, bp)=>{
    var Xe = E(), Q1 = N();
    bp.exports = eS;
    function eS(e, r) {
        var n = Q1.partition(e, function(d) {
            return Xe.has(d, "barycenter");
        }), t = n.lhs, i = Xe.sortBy(n.rhs, function(d) {
            return -d.i;
        }), a = [], o = 0, s = 0, f = 0;
        t.sort(rS(!!r)), f = qp(a, i, f), Xe.forEach(t, function(d) {
            f += d.vs.length, a.push(d.vs), o += d.barycenter * d.weight, s += d.weight, f = qp(a, i, f);
        });
        var c = {
            vs: Xe.flatten(a, !0)
        };
        return s && (c.barycenter = o / s, c.weight = s), c;
    }
    function qp(e, r, n) {
        for(var t; r.length && (t = Xe.last(r)).i <= n;)r.pop(), e.push(t.vs), n++;
        return n;
    }
    function rS(e) {
        return function(r, n) {
            return r.barycenter < n.barycenter ? -1 : r.barycenter > n.barycenter ? 1 : e ? n.i - r.i : r.i - n.i;
        };
    }
});
var wp = u((yk, xp)=>{
    var $ = E(), nS = lp(), tS = gp(), iS = yp();
    xp.exports = mp;
    function mp(e, r, n, t) {
        var i = e.children(r), a = e.node(r), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, f = {};
        o && (i = $.filter(i, function(v) {
            return v !== o && v !== s;
        }));
        var c = nS(e, i);
        $.forEach(c, function(v) {
            if (e.children(v.v).length) {
                var m = mp(e, v.v, n, t);
                f[v.v] = m, $.has(m, "barycenter") && oS(v, m);
            }
        });
        var d = tS(c, n);
        aS(d, f);
        var h = iS(d, t);
        if (o && (h.vs = $.flatten([
            o,
            h.vs,
            s
        ], !0), e.predecessors(o).length)) {
            var p = e.node(e.predecessors(o)[0]), l = e.node(e.predecessors(s)[0]);
            $.has(h, "barycenter") || (h.barycenter = 0, h.weight = 0), h.barycenter = (h.barycenter * h.weight + p.order + l.order) / (h.weight + 2), h.weight += 2;
        }
        return h;
    }
    function aS(e, r) {
        $.forEach(e, function(n) {
            n.vs = $.flatten(n.vs.map(function(t) {
                return r[t] ? r[t].vs : t;
            }), !0);
        });
    }
    function oS(e, r) {
        $.isUndefined(e.barycenter) ? (e.barycenter = r.barycenter, e.weight = r.weight) : (e.barycenter = (e.barycenter * e.weight + r.barycenter * r.weight) / (e.weight + r.weight), e.weight += r.weight);
    }
});
var Ep = u((mk, _p)=>{
    var $e = E(), sS = F().Graph;
    _p.exports = uS;
    function uS(e, r, n) {
        var t = fS(e), i = new sS({
            compound: !0
        }).setGraph({
            root: t
        }).setDefaultNodeLabel(function(a) {
            return e.node(a);
        });
        return $e.forEach(e.nodes(), function(a) {
            var o = e.node(a), s = e.parent(a);
            (o.rank === r || o.minRank <= r && r <= o.maxRank) && (i.setNode(a), i.setParent(a, s || t), $e.forEach(e[n](a), function(f) {
                var c = f.v === a ? f.w : f.v, d = i.edge(c, a), h = $e.isUndefined(d) ? 0 : d.weight;
                i.setEdge(c, a, {
                    weight: e.edge(f).weight + h
                });
            }), $e.has(o, "minRank") && i.setNode(a, {
                borderLeft: o.borderLeft[r],
                borderRight: o.borderRight[r]
            }));
        }), i;
    }
    function fS(e) {
        for(var r; e.hasNode(r = $e.uniqueId("_root")););
        return r;
    }
});
var Ap = u((xk, Tp)=>{
    var cS = E();
    Tp.exports = dS;
    function dS(e, r, n) {
        var t = {}, i;
        cS.forEach(n, function(a) {
            for(var o = e.parent(a), s, f; o;){
                if (s = e.parent(o), s ? (f = t[s], t[s] = o) : (f = i, i = o), f && f !== o) {
                    r.setEdge(f, o);
                    return;
                }
                o = s;
            }
        });
    }
});
var Pp = u((wk, Sp)=>{
    "use strict";
    var Z = E(), hS = fp(), pS = dp(), lS = wp(), vS = Ep(), gS = Ap(), qS = F().Graph, Op = N();
    Sp.exports = bS;
    function bS(e) {
        var r = Op.maxRank(e), n = Ip(e, Z.range(1, r + 1), "inEdges"), t = Ip(e, Z.range(r - 1, -1, -1), "outEdges"), i = hS(e);
        Cp(e, i);
        for(var a = Number.POSITIVE_INFINITY, o, s = 0, f = 0; f < 4; ++s, ++f){
            yS(s % 2 ? n : t, s % 4 >= 2), i = Op.buildLayerMatrix(e);
            var c = pS(e, i);
            c < a && (f = 0, o = Z.cloneDeep(i), a = c);
        }
        Cp(e, o);
    }
    function Ip(e, r, n) {
        return Z.map(r, function(t) {
            return vS(e, t, n);
        });
    }
    function yS(e, r) {
        var n = new qS;
        Z.forEach(e, function(t) {
            var i = t.graph().root, a = lS(t, i, n, r);
            Z.forEach(a.vs, function(o, s) {
                t.node(o).order = s;
            }), gS(t, n, a.vs);
        });
    }
    function Cp(e, r) {
        Z.forEach(r, function(n) {
            Z.forEach(n, function(t, i) {
                e.node(t).order = i;
            });
        });
    }
});
var Bp = u((_k, Dp)=>{
    "use strict";
    var q = E(), mS = F().Graph, xS = N();
    Dp.exports = {
        positionX: ES,
        findType1Conflicts: Lp,
        findType2Conflicts: Np,
        addConflict: et,
        hasConflict: Mp,
        verticalAlignment: Rp,
        horizontalCompaction: kp,
        alignCoordinates: Fp,
        findSmallestWidthAlignment: jp,
        balance: Gp
    };
    function Lp(e, r) {
        var n = {};
        function t(i, a) {
            var o = 0, s = 0, f = i.length, c = q.last(a);
            return q.forEach(a, function(d, h) {
                var p = wS(e, d), l = p ? e.node(p).order : f;
                (p || d === c) && (q.forEach(a.slice(s, h + 1), function(v) {
                    q.forEach(e.predecessors(v), function(m) {
                        var T = e.node(m), O = T.order;
                        (O < o || l < O) && !(T.dummy && e.node(v).dummy) && et(n, m, v);
                    });
                }), s = h + 1, o = l);
            }), a;
        }
        return q.reduce(r, t), n;
    }
    function Np(e, r) {
        var n = {};
        function t(a, o, s, f, c) {
            var d;
            q.forEach(q.range(o, s), function(h) {
                d = a[h], e.node(d).dummy && q.forEach(e.predecessors(d), function(p) {
                    var l = e.node(p);
                    l.dummy && (l.order < f || l.order > c) && et(n, p, d);
                });
            });
        }
        function i(a, o) {
            var s = -1, f, c = 0;
            return q.forEach(o, function(d, h) {
                if (e.node(d).dummy === "border") {
                    var p = e.predecessors(d);
                    p.length && (f = e.node(p[0]).order, t(o, c, h, s, f), c = h, s = f);
                }
                t(o, c, o.length, f, a.length);
            }), o;
        }
        return q.reduce(r, i), n;
    }
    function wS(e, r) {
        if (e.node(r).dummy) return q.find(e.predecessors(r), function(n) {
            return e.node(n).dummy;
        });
    }
    function et(e, r, n) {
        if (r > n) {
            var t = r;
            r = n, n = t;
        }
        var i = e[r];
        i || (e[r] = i = {}), i[n] = !0;
    }
    function Mp(e, r, n) {
        if (r > n) {
            var t = r;
            r = n, n = t;
        }
        return q.has(e[r], n);
    }
    function Rp(e, r, n, t) {
        var i = {}, a = {}, o = {};
        return q.forEach(r, function(s) {
            q.forEach(s, function(f, c) {
                i[f] = f, a[f] = f, o[f] = c;
            });
        }), q.forEach(r, function(s) {
            var f = -1;
            q.forEach(s, function(c) {
                var d = t(c);
                if (d.length) {
                    d = q.sortBy(d, function(m) {
                        return o[m];
                    });
                    for(var h = (d.length - 1) / 2, p = Math.floor(h), l = Math.ceil(h); p <= l; ++p){
                        var v = d[p];
                        a[c] === c && f < o[v] && !Mp(n, c, v) && (a[v] = c, a[c] = i[c] = i[v], f = o[v]);
                    }
                }
            });
        }), {
            root: i,
            align: a
        };
    }
    function kp(e, r, n, t, i) {
        var a = {}, o = _S(e, r, n, i), s = i ? "borderLeft" : "borderRight";
        function f(h, p) {
            for(var l = o.nodes(), v = l.pop(), m = {}; v;)m[v] ? h(v) : (m[v] = !0, l.push(v), l = l.concat(p(v))), v = l.pop();
        }
        function c(h) {
            a[h] = o.inEdges(h).reduce(function(p, l) {
                return Math.max(p, a[l.v] + o.edge(l));
            }, 0);
        }
        function d(h) {
            var p = o.outEdges(h).reduce(function(v, m) {
                return Math.min(v, a[m.w] - o.edge(m));
            }, Number.POSITIVE_INFINITY), l = e.node(h);
            p !== Number.POSITIVE_INFINITY && l.borderType !== s && (a[h] = Math.max(a[h], p));
        }
        return f(c, o.predecessors.bind(o)), f(d, o.successors.bind(o)), q.forEach(t, function(h) {
            a[h] = a[n[h]];
        }), a;
    }
    function _S(e, r, n, t) {
        var i = new mS, a = e.graph(), o = TS(a.nodesep, a.edgesep, t);
        return q.forEach(r, function(s) {
            var f;
            q.forEach(s, function(c) {
                var d = n[c];
                if (i.setNode(d), f) {
                    var h = n[f], p = i.edge(h, d);
                    i.setEdge(h, d, Math.max(o(e, c, f), p || 0));
                }
                f = c;
            });
        }), i;
    }
    function jp(e, r) {
        return q.minBy(q.values(r), function(n) {
            var t = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
            return q.forIn(n, function(a, o) {
                var s = AS(e, o) / 2;
                t = Math.max(a + s, t), i = Math.min(a - s, i);
            }), t - i;
        });
    }
    function Fp(e, r) {
        var n = q.values(r), t = q.min(n), i = q.max(n);
        q.forEach([
            "u",
            "d"
        ], function(a) {
            q.forEach([
                "l",
                "r"
            ], function(o) {
                var s = a + o, f = e[s], c;
                if (f !== r) {
                    var d = q.values(f);
                    c = o === "l" ? t - q.min(d) : i - q.max(d), c && (e[s] = q.mapValues(f, function(h) {
                        return h + c;
                    }));
                }
            });
        });
    }
    function Gp(e, r) {
        return q.mapValues(e.ul, function(n, t) {
            if (r) return e[r.toLowerCase()][t];
            var i = q.sortBy(q.map(e, t));
            return (i[1] + i[2]) / 2;
        });
    }
    function ES(e) {
        var r = xS.buildLayerMatrix(e), n = q.merge(Lp(e, r), Np(e, r)), t = {}, i;
        q.forEach([
            "u",
            "d"
        ], function(o) {
            i = o === "u" ? r : q.values(r).reverse(), q.forEach([
                "l",
                "r"
            ], function(s) {
                s === "r" && (i = q.map(i, function(h) {
                    return q.values(h).reverse();
                }));
                var f = (o === "u" ? e.predecessors : e.successors).bind(e), c = Rp(e, i, n, f), d = kp(e, i, c.root, c.align, s === "r");
                s === "r" && (d = q.mapValues(d, function(h) {
                    return -h;
                })), t[o + s] = d;
            });
        });
        var a = jp(e, t);
        return Fp(t, a), Gp(t, e.graph().align);
    }
    function TS(e, r, n) {
        return function(t, i, a) {
            var o = t.node(i), s = t.node(a), f = 0, c;
            if (f += o.width / 2, q.has(o, "labelpos")) switch(o.labelpos.toLowerCase()){
                case "l":
                    c = -o.width / 2;
                    break;
                case "r":
                    c = o.width / 2;
                    break;
            }
            if (c && (f += n ? c : -c), c = 0, f += (o.dummy ? r : e) / 2, f += (s.dummy ? r : e) / 2, f += s.width / 2, q.has(s, "labelpos")) switch(s.labelpos.toLowerCase()){
                case "l":
                    c = s.width / 2;
                    break;
                case "r":
                    c = -s.width / 2;
                    break;
            }
            return c && (f += n ? c : -c), c = 0, f;
        };
    }
    function AS(e, r) {
        return e.node(r).width;
    }
});
var Vp = u((Ek, zp)=>{
    "use strict";
    var Ze = E(), Up = N(), OS = Bp().positionX;
    zp.exports = IS;
    function IS(e) {
        e = Up.asNonCompoundGraph(e), CS(e), Ze.forEach(OS(e), function(r, n) {
            e.node(n).x = r;
        });
    }
    function CS(e) {
        var r = Up.buildLayerMatrix(e), n = e.graph().ranksep, t = 0;
        Ze.forEach(r, function(i) {
            var a = Ze.max(Ze.map(i, function(o) {
                return e.node(o).height;
            }));
            Ze.forEach(i, function(o) {
                e.node(o).y = t + a / 2;
            }), t += a + n;
        });
    }
});
var $p = u((Tk, Xp)=>{
    "use strict";
    var b = E(), Hp = Ih(), Kp = Rh(), SS = Xh(), PS = N().normalizeRanks, LS = Zh(), NS = N().removeEmptyRanks, Yp = ep(), MS = tp(), Wp = sp(), RS = Pp(), kS = Vp(), J = N(), jS = F().Graph;
    Xp.exports = FS;
    function FS(e, r) {
        var n = r && r.debugTiming ? J.time : J.notime;
        n("layout", function() {
            var t = n("  buildLayoutGraph", function() {
                return XS(e);
            });
            n("  runLayout", function() {
                GS(t, n);
            }), n("  updateInputGraph", function() {
                DS(e, t);
            });
        });
    }
    function GS(e, r) {
        r("    makeSpaceForEdgeLabels", function() {
            $S(e);
        }), r("    removeSelfEdges", function() {
            aP(e);
        }), r("    acyclic", function() {
            Hp.run(e);
        }), r("    nestingGraph.run", function() {
            Yp.run(e);
        }), r("    rank", function() {
            SS(J.asNonCompoundGraph(e));
        }), r("    injectEdgeLabelProxies", function() {
            ZS(e);
        }), r("    removeEmptyRanks", function() {
            NS(e);
        }), r("    nestingGraph.cleanup", function() {
            Yp.cleanup(e);
        }), r("    normalizeRanks", function() {
            PS(e);
        }), r("    assignRankMinMax", function() {
            JS(e);
        }), r("    removeEdgeLabelProxies", function() {
            QS(e);
        }), r("    normalize.run", function() {
            Kp.run(e);
        }), r("    parentDummyChains", function() {
            LS(e);
        }), r("    addBorderSegments", function() {
            MS(e);
        }), r("    order", function() {
            RS(e);
        }), r("    insertSelfEdges", function() {
            oP(e);
        }), r("    adjustCoordinateSystem", function() {
            Wp.adjust(e);
        }), r("    position", function() {
            kS(e);
        }), r("    positionSelfEdges", function() {
            sP(e);
        }), r("    removeBorderNodes", function() {
            iP(e);
        }), r("    normalize.undo", function() {
            Kp.undo(e);
        }), r("    fixupEdgeLabelCoords", function() {
            nP(e);
        }), r("    undoCoordinateSystem", function() {
            Wp.undo(e);
        }), r("    translateGraph", function() {
            eP(e);
        }), r("    assignNodeIntersects", function() {
            rP(e);
        }), r("    reversePoints", function() {
            tP(e);
        }), r("    acyclic.undo", function() {
            Hp.undo(e);
        });
    }
    function DS(e, r) {
        b.forEach(e.nodes(), function(n) {
            var t = e.node(n), i = r.node(n);
            t && (t.x = i.x, t.y = i.y, r.children(n).length && (t.width = i.width, t.height = i.height));
        }), b.forEach(e.edges(), function(n) {
            var t = e.edge(n), i = r.edge(n);
            t.points = i.points, b.has(i, "x") && (t.x = i.x, t.y = i.y);
        }), e.graph().width = r.graph().width, e.graph().height = r.graph().height;
    }
    var BS = [
        "nodesep",
        "edgesep",
        "ranksep",
        "marginx",
        "marginy"
    ], US = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "tb"
    }, zS = [
        "acyclicer",
        "ranker",
        "rankdir",
        "align"
    ], VS = [
        "width",
        "height"
    ], HS = {
        width: 0,
        height: 0
    }, KS = [
        "minlen",
        "weight",
        "width",
        "height",
        "labeloffset"
    ], YS = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
    }, WS = [
        "labelpos"
    ];
    function XS(e) {
        var r = new jS({
            multigraph: !0,
            compound: !0
        }), n = nt(e.graph());
        return r.setGraph(b.merge({}, US, rt(n, BS), b.pick(n, zS))), b.forEach(e.nodes(), function(t) {
            var i = nt(e.node(t));
            r.setNode(t, b.defaults(rt(i, VS), HS)), r.setParent(t, e.parent(t));
        }), b.forEach(e.edges(), function(t) {
            var i = nt(e.edge(t));
            r.setEdge(t, b.merge({}, YS, rt(i, KS), b.pick(i, WS)));
        }), r;
    }
    function $S(e) {
        var r = e.graph();
        r.ranksep /= 2, b.forEach(e.edges(), function(n) {
            var t = e.edge(n);
            t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (r.rankdir === "TB" || r.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
        });
    }
    function ZS(e) {
        b.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            if (n.width && n.height) {
                var t = e.node(r.v), i = e.node(r.w), a = {
                    rank: (i.rank - t.rank) / 2 + t.rank,
                    e: r
                };
                J.addDummyNode(e, "edge-proxy", a, "_ep");
            }
        });
    }
    function JS(e) {
        var r = 0;
        b.forEach(e.nodes(), function(n) {
            var t = e.node(n);
            t.borderTop && (t.minRank = e.node(t.borderTop).rank, t.maxRank = e.node(t.borderBottom).rank, r = b.max(r, t.maxRank));
        }), e.graph().maxRank = r;
    }
    function QS(e) {
        b.forEach(e.nodes(), function(r) {
            var n = e.node(r);
            n.dummy === "edge-proxy" && (e.edge(n.e).labelRank = n.rank, e.removeNode(r));
        });
    }
    function eP(e) {
        var r = Number.POSITIVE_INFINITY, n = 0, t = Number.POSITIVE_INFINITY, i = 0, a = e.graph(), o = a.marginx || 0, s = a.marginy || 0;
        function f(c) {
            var d = c.x, h = c.y, p = c.width, l = c.height;
            r = Math.min(r, d - p / 2), n = Math.max(n, d + p / 2), t = Math.min(t, h - l / 2), i = Math.max(i, h + l / 2);
        }
        b.forEach(e.nodes(), function(c) {
            f(e.node(c));
        }), b.forEach(e.edges(), function(c) {
            var d = e.edge(c);
            b.has(d, "x") && f(d);
        }), r -= o, t -= s, b.forEach(e.nodes(), function(c) {
            var d = e.node(c);
            d.x -= r, d.y -= t;
        }), b.forEach(e.edges(), function(c) {
            var d = e.edge(c);
            b.forEach(d.points, function(h) {
                h.x -= r, h.y -= t;
            }), b.has(d, "x") && (d.x -= r), b.has(d, "y") && (d.y -= t);
        }), a.width = n - r + o, a.height = i - t + s;
    }
    function rP(e) {
        b.forEach(e.edges(), function(r) {
            var n = e.edge(r), t = e.node(r.v), i = e.node(r.w), a, o;
            n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = t), n.points.unshift(J.intersectRect(t, a)), n.points.push(J.intersectRect(i, o));
        });
    }
    function nP(e) {
        b.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            if (b.has(n, "x")) switch((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos){
                case "l":
                    n.x -= n.width / 2 + n.labeloffset;
                    break;
                case "r":
                    n.x += n.width / 2 + n.labeloffset;
                    break;
            }
        });
    }
    function tP(e) {
        b.forEach(e.edges(), function(r) {
            var n = e.edge(r);
            n.reversed && n.points.reverse();
        });
    }
    function iP(e) {
        b.forEach(e.nodes(), function(r) {
            if (e.children(r).length) {
                var n = e.node(r), t = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(b.last(n.borderLeft)), o = e.node(b.last(n.borderRight));
                n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - t.y), n.x = a.x + n.width / 2, n.y = t.y + n.height / 2;
            }
        }), b.forEach(e.nodes(), function(r) {
            e.node(r).dummy === "border" && e.removeNode(r);
        });
    }
    function aP(e) {
        b.forEach(e.edges(), function(r) {
            if (r.v === r.w) {
                var n = e.node(r.v);
                n.selfEdges || (n.selfEdges = []), n.selfEdges.push({
                    e: r,
                    label: e.edge(r)
                }), e.removeEdge(r);
            }
        });
    }
    function oP(e) {
        var r = J.buildLayerMatrix(e);
        b.forEach(r, function(n) {
            var t = 0;
            b.forEach(n, function(i, a) {
                var o = e.node(i);
                o.order = a + t, b.forEach(o.selfEdges, function(s) {
                    J.addDummyNode(e, "selfedge", {
                        width: s.label.width,
                        height: s.label.height,
                        rank: o.rank,
                        order: a + ++t,
                        e: s.e,
                        label: s.label
                    }, "_se");
                }), delete o.selfEdges;
            });
        });
    }
    function sP(e) {
        b.forEach(e.nodes(), function(r) {
            var n = e.node(r);
            if (n.dummy === "selfedge") {
                var t = e.node(n.e.v), i = t.x + t.width / 2, a = t.y, o = n.x - i, s = t.height / 2;
                e.setEdge(n.e, n.label), e.removeNode(r), n.label.points = [
                    {
                        x: i + 2 * o / 3,
                        y: a - s
                    },
                    {
                        x: i + 5 * o / 6,
                        y: a - s
                    },
                    {
                        x: i + o,
                        y: a
                    },
                    {
                        x: i + 5 * o / 6,
                        y: a + s
                    },
                    {
                        x: i + 2 * o / 3,
                        y: a + s
                    }
                ], n.label.x = n.x, n.label.y = n.y;
            }
        });
    }
    function rt(e, r) {
        return b.mapValues(b.pick(e, r), Number);
    }
    function nt(e) {
        var r = {};
        return b.forEach(e, function(n, t) {
            r[t.toLowerCase()] = n;
        }), r;
    }
});
var cP = u((Ak, Zp)=>{
    var uP = He(), fP = $p();
    Zp.exports = {
        Graph: uP,
        layout: fP
    };
});
const __default = cP();
const initGraph = (opt = {})=>new __default.Graph(opt);
const layout = __default.layout;
const is = (func)=>(d)=>func(d);
const isString = is((d)=>String(d) === d);
const isNumber = is((d)=>typeof d === "number" && !Number.isNaN(d));
const isRecord = is((d)=>d && !isString(d) && !isNumber(d) && !Array.isArray(d) && Object.keys(d).every(isString));
const pairsReducer = (r, d, i, all)=>i % 2 === 1 ? [
        ...r,
        [
            all[i - 1],
            d
        ]
    ] : r;
const pairs = (arr)=>{
    const init = [];
    return arr.reduce(pairsReducer, init);
};
const path = (_path, obj)=>{
    if (!obj) return undefined;
    const [first, ...rest] = _path;
    if (!first) return obj;
    return path(rest, obj[first]);
};
const uniq = (arr)=>Array.from(new Set(arr));
const has = (key, obj)=>isRecord(obj) && Object.keys(obj).includes(key);
const isNum = isNumber;
const flatten = (arr)=>arr.reduce((r, _arr)=>{
        _arr.forEach((d)=>r.push(d));
        return r;
    }, []);
const getBbox = (points)=>points.reduce((r, [x, y])=>{
        if (r[0] > x) r[0] = x;
        if (r[1] > y) r[1] = y;
        if (r[2] < x) r[2] = x;
        if (r[3] < y) r[3] = y;
        return r;
    }, [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ]);
const getLinePath = ([first, ...rest])=>[
        `M ${first[0]} ${first[1]}`,
        ...pairs(rest).map(([one, two])=>{
            const [x1, y1] = one;
            const [x2, y2] = two;
            return [
                "Q",
                x1,
                y1,
                x2,
                y2
            ].join(" ");
        })
    ].join(" ");
const fixNode = ({ x, y, width, height, ...rest })=>({
        ...rest,
        width,
        height,
        center: [
            x,
            y
        ],
        translate: [
            x - width / 2,
            y - height / 2
        ]
    });
const validate = (nodes, edges)=>{
    const nodeMap = new Map();
    nodes.forEach((d)=>{
        if (!has("id", d)) {
            throw new Error(`Node is missing "id": ${JSON.stringify(d)}`);
        }
        if (!d.label) {
            throw new Error(`Node is missing "name": ${JSON.stringify(d)}`);
        }
        if (nodeMap.get(d.id)) throw new Error(`Duplicate node "id": ${d.id}`);
        nodeMap.set(d.id, true);
    });
    edges.forEach((d)=>{
        if (!has("from", d)) {
            throw new Error(`Edge is missing "from": ${JSON.stringify(d)}`);
        }
        if (!has("to", d)) {
            throw new Error(`Edge is missing "to": ${JSON.stringify(d)}`);
        }
        if (!nodeMap.get(d.from)) {
            throw new Error(`Edge "from" is not a node "id": ${JSON.stringify(d)}`);
        }
        if (!nodeMap.get(d.to)) {
            throw new Error(`Edge "to" is not a node "id": ${JSON.stringify(d)}`);
        }
    });
};
const DEFAULT_CONFIG = {
    rankdir: "TB",
    nodesep: 50,
    ranksep: 50,
    node: {
        width: 100,
        height: 20
    }
};
const getConfig = (config = {})=>{
    const conf = DEFAULT_CONFIG;
    const rankdir = path([
        "rankdir"
    ], config);
    if ([
        "TB",
        "BT",
        "LR",
        "RL"
    ].includes(rankdir)) {
        conf.rankdir = rankdir;
    }
    const distanceX = path([
        "node",
        "distanceX"
    ], config);
    if (distanceX && !Number.isNaN(distanceX)) {
        if ([
            "TB",
            "BT"
        ].includes(conf.rankdir)) {
            conf.nodesep = distanceX;
        } else {
            conf.ranksep = distanceX;
        }
    }
    const distanceY = path([
        "node",
        "distanceY"
    ], config);
    if (distanceY && !Number.isNaN(distanceY)) {
        if ([
            "TB",
            "BT"
        ].includes(conf.rankdir)) {
            conf.ranksep = distanceY;
        } else {
            conf.nodesep = distanceY;
        }
    }
    const width = path([
        "node",
        "width"
    ], config);
    if (width && !Number.isNaN(width)) {
        conf.node.width = width;
    }
    const height = path([
        "node",
        "height"
    ], config);
    if (height && !Number.isNaN(height)) {
        conf.node.height = height;
    }
    return conf;
};
const createLayout = ({ config, nodes, edges })=>{
    validate(nodes, edges);
    const conf = getConfig(config);
    const graph = initGraph();
    graph.setGraph({
        rankdir: conf.rankdir,
        nodesep: conf.nodesep,
        ranksep: conf.ranksep
    });
    graph.setDefaultEdgeLabel(function() {
        return {};
    });
    nodes.forEach((d)=>{
        const node = {
            ...d,
            width: d.width || conf.node.width,
            height: d.height || conf.node.height
        };
        graph.setNode(String(d.id), node);
    });
    edges.forEach(({ from, to })=>{
        graph.setEdge(String(from), String(to));
    });
    layout(graph);
    const result = {
        nodes: [],
        edges: [],
        bbox: [
            0,
            0,
            0,
            0
        ]
    };
    graph.nodes().forEach(function(v) {
        result.nodes.push(fixNode(graph.node(v)));
    });
    graph.edges().forEach(function(e) {
        const points = ((graph.edge(e) || {}).points || []).map(({ x, y })=>[
                x,
                y
            ]);
        const path = getLinePath(points);
        result.edges.push({
            from: e.v,
            to: e.w,
            points,
            path
        });
    });
    const nodePoints = flatten(result.nodes.map(({ translate: [x, y], width, height })=>[
            [
                x,
                y
            ],
            [
                x + width,
                y + height
            ]
        ]));
    const edgePoints = flatten(result.edges.map((d)=>d.points));
    const bbox = getBbox(nodePoints.concat(edgePoints));
    result.bbox = bbox;
    return result;
};
const stringifyAttributes = (attributes)=>Object.keys(attributes).map((key)=>` ${key}="${String(attributes[key])}"`).join("");
class Element {
    tag;
    constructor(tag){
        this.tag = tag;
    }
    children = [];
    child(tag) {
        const child = new Element(tag);
        this.children.push(child);
        return child;
    }
    attributes = {};
    attr(newAttributes) {
        const previousAttributes = this.attributes;
        this.attributes = {
            ...previousAttributes,
            ...newAttributes
        };
        return this;
    }
    innerText = "";
    data(innerText) {
        this.innerText = innerText;
        return this;
    }
    outer() {
        return `<${this.tag}${stringifyAttributes(this.attributes)}>${this.inner()}</${this.tag}>`;
    }
    inner() {
        return this.children.length > 0 ? this.children.map((child)=>child.outer()).join("") : this.innerText;
    }
}
const xml = (tag)=>new Element(tag);
const defaultNodeRect = {
    fill: "none",
    stroke: "black"
};
const isNodeConfigFunc = (d)=>Boolean(d) && typeof d === "function";
const defaultNodeLabel = {
    "text-anchor": "middle",
    "font-size": 16
};
const defaultEdgePath = {
    fill: "none",
    stroke: "black",
    "stroke-linecap": "round"
};
const isNodeConfigObj = (d)=>Boolean(d) && typeof d === "object";
const isEdgeConfigFunc = (d)=>Boolean(d) && typeof d === "function";
const isEdgeConfigObj = (d)=>Boolean(d) && typeof d === "object";
const ARROW_ID = "arrow-head";
const getArrowId = (color)=>color.includes("#") ? ARROW_ID + "-" + color.split("#").join("") : ARROW_ID + "-" + color;
const getNodeConfig = (config, node)=>{
    if (isNodeConfigFunc(config)) {
        return config(node);
    }
    if (isNodeConfigObj(config)) {
        return config;
    }
    return {};
};
const drawNode = (parent, node, config = {})=>{
    const g = parent.child("g");
    g.attr({
        "class": `node-${node.id}`
    });
    const conf = getNodeConfig(config, node);
    const rect = g.child("rect");
    rect.attr({
        x: node.translate[0],
        y: node.translate[1],
        width: node.width,
        height: node.height,
        ...defaultNodeRect,
        ...conf.rect || {}
    });
    const text = g.child("text");
    const textConfig = {
        ...defaultNodeLabel,
        ...conf.label || {}
    };
    text.attr({
        x: node.center[0],
        y: node.center[1] + (textConfig["font-size"] ? Number(textConfig["font-size"]) * 0.3 : 0),
        ...textConfig
    });
    text.data(node.label);
};
const getEdgeConfig = (config, edge)=>{
    if (isEdgeConfigFunc(config)) {
        return config(edge);
    }
    if (isEdgeConfigObj(config)) {
        return config;
    }
    return {};
};
const drawEdge = (parent, edge, config = {})=>{
    const path = parent.child("path");
    const conf = getEdgeConfig(config, edge);
    const _pathConf = {
        ...defaultEdgePath,
        ...conf.path || {}
    };
    const pathConf = conf.arrow ? {
        ..._pathConf,
        "marker-end": `url(#${getArrowId(_pathConf.stroke)})`
    } : _pathConf;
    path.attr({
        d: edge.path,
        ...pathConf
    });
};
const getPadding = (d)=>{
    if (Array.isArray(d) && isNum(d[0]) && isNum(d[1])) {
        return d;
    }
    if (isNum(d)) return [
        d,
        d
    ];
    return [
        0,
        0
    ];
};
const getArrowColors = (edges, config)=>{
    if (isEdgeConfigObj(config)) {
        const c = config.path?.stroke ? String(config.path.stroke) : defaultEdgePath.stroke;
        return config.arrow ? [
            c
        ] : [];
    }
    if (isEdgeConfigFunc(config)) {
        const allColors = edges.reduce((colors, edge)=>{
            const conf = config(edge);
            if (conf?.arrow) {
                const c = conf.path?.stroke ? String(conf.path.stroke) : defaultEdgePath.stroke;
                colors.push(c);
            }
            return colors;
        }, []);
        return uniq(allColors);
    }
    return [];
};
const defs = (svg, config = {}, edges)=>{
    const arrowColors = getArrowColors(edges, config?.edge);
    if (!arrowColors.length) return;
    const defs = svg.child("defs");
    arrowColors.forEach((fill)=>{
        const marker = defs.child("marker");
        marker.attr({
            id: getArrowId(fill),
            orient: "auto",
            viewBox: "0 0 10 10",
            refX: 8,
            refY: 5,
            markerUnits: "strokeWidth",
            markerWidth: 5,
            markerHeight: 5
        });
        const markerPath = marker.child("path");
        markerPath.attr({
            d: "M 0 0 L 10 5 L 0 10 z",
            fill
        });
    });
};
const toSvg = ({ bbox, edges, nodes }, config = {})=>{
    const padding = getPadding(config.padding);
    const viewBox = [
        bbox[0],
        bbox[1],
        bbox[2] + 2 * padding[0] - bbox[0],
        bbox[3] + 2 * padding[1] - bbox[1]
    ].join(" ");
    const svg = xml("svg");
    svg.attr({
        viewBox,
        xmlns: "http://www.w3.org/2000/svg",
        style: Object.entries(config.style || {}).map(([k, v])=>`${k}:${v}`).join(";")
    });
    defs(svg, config, edges);
    const g = svg.child("g");
    g.attr({
        transform: `translate(${padding[0]}, ${padding[1]})`
    });
    const edgeG = g.child("g").attr({
        "class": "edges"
    });
    edges.forEach((d)=>drawEdge(edgeG, d, config.edge));
    nodes.forEach((d)=>drawNode(g, d, config.node));
    return svg.outer();
};
const EDGE_TYPES = [
    "..>",
    "-->",
    "--",
    "..",
    "->",
    "-"
];
const DIRS = [
    "TB",
    "BT",
    "LR",
    "RL"
];
const getNodeSize = (label)=>({
        width: label.length * 16,
        height: 30
    });
const getStrokeDashArray = (type)=>{
    if (type && type.includes("--")) {
        return `${1.5 * 2} ${1.5 * 3}`;
    }
    if (type && type.includes("..")) {
        return `${1.5 * 0.5} ${1.5 * 1.5}`;
    }
    return "1 0";
};
const getEdgePath = (type)=>({
        stroke: "currentColor",
        "stroke-dasharray": getStrokeDashArray(type)
    });
const renderSvg = ({ rankdir, nodes, edges })=>{
    const layout = createLayout({
        nodes: nodes.map((d)=>({
                ...getNodeSize(d.label),
                ...d
            })),
        edges: edges,
        config: {
            rankdir
        }
    });
    const typeMap = new Map();
    edges.forEach((d)=>{
        typeMap.set(`${d.from}___${d.to}`, d.type);
    });
    const getEdgeType = (from, to)=>typeMap.get(`${from}___${to}`);
    return toSvg(layout, {
        style: {
            "font-family": "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;"
        },
        padding: [
            10,
            10
        ],
        edge: ({ to, from })=>{
            const type = getEdgeType(String(from), String(to));
            return {
                arrow: Boolean(type && type.includes(">")),
                path: {
                    ...getEdgePath(type),
                    "stroke-width": 1.5
                }
            };
        },
        node: {
            rect: {
                stroke: "currentColor",
                rx: "3",
                fill: "currentColor",
                "fill-opacity": 0.05,
                "stroke-opacity": 0.5
            },
            label: {
                fill: "currentColor",
                "font-size": 16
            }
        }
    });
};
const readLines = function*(d) {
    for (const line of d.split("\n")){
        const l = line.trim();
        if (l !== "") {
            yield l;
        }
    }
};
const removeComments = function*(g) {
    for (const line of g){
        if (!line.startsWith("# ")) {
            yield line;
        }
    }
};
const isDirLine = (line)=>line.startsWith("dir:");
const isDir = (d)=>DIRS.includes(d);
const getDir = (line)=>{
    const [_, _dir] = line.split("dir:");
    const dir = _dir.trim().toUpperCase();
    return isDir(dir) ? dir : DIRS[0];
};
const getEdgeType = (d)=>EDGE_TYPES.find((link)=>d.includes(link));
const getNode = (d)=>{
    if (d.includes("[") && d.includes("]") && d.indexOf("[") < d.indexOf("]")) {
        const [id, l] = d.split("[");
        const [label] = l.split("]");
        const tId = id.trim();
        const tLabel = label.trim();
        if (tId !== "" && tLabel !== "") {
            return {
                id: tId,
                label: tLabel
            };
        }
    }
    return {
        id: d.trim()
    };
};
const getEdge = (line)=>{
    const type = getEdgeType(line);
    if (!type) return undefined;
    const [_from, _to] = line.split(type).map((d)=>d.trim());
    const from = getNode(_from);
    const to = getNode(_to);
    return from && to ? {
        from,
        to,
        type
    } : undefined;
};
const parseDsl = (dsl)=>{
    let rankdir = DIRS[0];
    const nodeMap = new Map();
    const addNode = ({ id, label })=>{
        if (label) nodeMap.set(id, label);
        else {
            if (!nodeMap.get(id)) {
                nodeMap.set(id, id);
            }
        }
    };
    const edges = [];
    const lines = removeComments(readLines(dsl));
    for (const line of lines){
        if (isDirLine(line)) {
            rankdir = getDir(line);
        } else {
            const edge = getEdge(line);
            if (edge) {
                edges.push({
                    from: edge.from.id,
                    to: edge.to.id,
                    type: edge.type
                });
                addNode(edge.from);
                addNode(edge.to);
            }
        }
    }
    return {
        rankdir,
        nodes: Array.from(nodeMap.entries()).map(([id, label])=>({
                id,
                label
            })),
        edges
    };
};
const render = (d)=>renderSvg(d);
const renderFromString = (d)=>render(parseDsl(d));
export { render as render };
export { renderFromString as renderFromString };

