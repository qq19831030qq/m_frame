去掉Jquery代码
去掉Jquery ui代码
去掉wysihtml5代码
function(e) {
    "use strict";
    var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
    n = e.Blob && 
    function() {
        try {
            return Boolean(new Blob)
        } catch(e) {
            return ! 1
        }
    } (),
    r = n && e.Uint8Array && 
    function() {
        try {
            return (new Blob([new Uint8Array(100)])).size === 100
        } catch(e) {
            return ! 1
        }
    } (),
    i = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
    s = (n || i) && e.atob && e.ArrayBuffer && e.Uint8Array && 
    function(e) {
        var t,
        s,
        o,
        u,
        a,
        f;
        e.split(",")[0].indexOf("base64") >= 0 ? t = atob(e.split(",")[1]) : t = decodeURIComponent(e.split(",")[1]),
        s = new ArrayBuffer(t.length),
        o = new Uint8Array(s);
        for (u = 0; u < t.length; u += 1) o[u] = t.charCodeAt(u);
        return a = e.split(",")[0].split(":")[1].split(";")[0],
        n ? new Blob([r ? o: s], {
            type: a
        }) : (f = new i, f.append(s), f.getBlob(a))
    };
    e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(e, t) {
        e(this.mozGetAsFile("blob", t))
    }: t.toDataURL && s && (t.toBlob = function(e, t) {
        e(s(this.toDataURL(t)))
    })),
    typeof define == "function" && define.amd ? define(function() {
        return s
    }) : e.dataURLtoBlob = s
} (this),

//某日历插件

function(e) {
    function O(e, t, n, r) {
        var i = n.lang();
        return i[e].call ? i[e](n, r) : i[e][t]
    }
    function M(e, t) {
        return function(n) {
            return B(e.call(this, n), t)
        }
    }
    function _(e) {
        return function(t) {
            var n = e.call(this, t);
            return n + this.lang().ordinal(n)
        }
    }
    function D(e, t, n) {
        this._d = e,
        this._isUTC = !!t,
        this._a = e._a || null,
        this._lang = n || !1
    }
    function P(e) {
        var t = this._data = {},
        n = e.years || e.y || 0,
        r = e.months || e.M || 0,
        i = e.weeks || e.w || 0,
        s = e.days || e.d || 0,
        o = e.hours || e.h || 0,
        u = e.minutes || e.m || 0,
        a = e.seconds || e.s || 0,
        f = e.milliseconds || e.ms || 0;
        this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5,
        this._days = s + i * 7,
        this._months = r + n * 12,
        t.milliseconds = f % 1e3,
        a += H(f / 1e3),
        t.seconds = a % 60,
        u += H(a / 60),
        t.minutes = u % 60,
        o += H(u / 60),
        t.hours = o % 24,
        s += H(o / 24),
        s += i * 7,
        t.days = s % 30,
        r += H(s / 30),
        t.months = r % 12,
        n += H(r / 12),
        t.years = n,
        this._lang = !1
    }
    function H(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function B(e, t) {
        var n = e + "";
        while (n.length < t) n = "0" + n;
        return n
    }
    function j(e, t, n) {
        var r = t._milliseconds,
        i = t._days,
        s = t._months,
        o;
        r && e._d.setTime( + e + r * n),
        i && e.date(e.date() + i * n),
        s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
    }
    function F(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function I(e, t) {
        var n = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        i = 0,
        s;
        for (s = 0; s < n; s++)~~e[s] !== ~~t[s] && i++;
        return i + r
    }
    function q(e, t, n, r) {
        var i,
        s,
        o = [];
        for (i = 0; i < 7; i++) o[i] = e[i] = e[i] == null ? i === 2 ? 1: 0: e[i];
        return e[7] = o[7] = t,
        e[8] != null && (o[8] = e[8]),
        e[3] += n || 0,
        e[4] += r || 0,
        s = new Date(0),
        t ? (s.setUTCFullYear(e[0], e[1], e[2]), s.setUTCHours(e[3], e[4], e[5], e[6])) : (s.setFullYear(e[0], e[1], e[2]), s.setHours(e[3], e[4], e[5], e[6])),
        s._a = o,
        s
    }
    function R(e, n) {
        var r,
        i,
        o = []; ! n && u && (n = require("./lang/" + e));
        for (r = 0; r < a.length; r++) n[a[r]] = n[a[r]] || s.en[a[r]];
        for (r = 0; r < 12; r++) i = t([2e3, r]),
        o[r] = new RegExp("^" + (n.months[r] || n.months(i, "")) + "|^" + (n.monthsShort[r] || n.monthsShort(i, "")).replace(".", ""), "i");
        return n.monthsParse = n.monthsParse || o,
        s[e] = n,
        n
    }
    function U(e) {
        var n = typeof e == "string" && e || e && e._lang || null;
        return n ? s[n] || R(n) : t
    }
    function z(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function W(e) {
        var t = e.match(l),
        n,
        r;
        for (n = 0, r = t.length; n < r; n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
            return s
        }
    }
    function X(e, t) {
        function r(t) {
            return e.lang().longDateFormat[t] || t
        }
        var n = 5;
        while (n--&&c.test(t)) t = t.replace(c, r);
        return C[t] || (C[t] = W(t)),
        C[t](e)
    }
    function V(e) {
        switch (e) {
        case "DDDD":
            return v;
        case "YYYY":
            return m;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return d;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
        case "a":
        case "A":
            return g;
        case "Z":
        case "ZZ":
            return y;
        case "T":
            return b;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return p;
        default:
            return new RegExp(e.replace("\\", ""))
        }
    }
    function $(e, t, n, r) {
        var i,
        s;
        switch (e) {
        case "M":
        case "MM":
            n[1] = t == null ? 0: ~~t - 1;
            break;
        case "MMM":
        case "MMMM":
            for (i = 0; i < 12; i++) if (U().monthsParse[i].test(t)) {
                n[1] = i,
                s = !0;
                break
            }
            s || (n[8] = !1);
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            t != null && (n[2] = ~~t);
            break;
        case "YY":
            n[0] = ~~t + (~~t > 70 ? 1900: 2e3);
            break;
        case "YYYY":
            n[0] = ~~Math.abs(t);
            break;
        case "a":
        case "A":
            r.isPm = (t + "").toLowerCase() === "pm";
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            n[3] = ~~t;
            break;
        case "m":
        case "mm":
            n[4] = ~~t;
            break;
        case "s":
        case "ss":
            n[5] = ~~t;
            break;
        case "S":
        case "SS":
        case "SSS":
            n[6] = ~~ (("0." + t) * 1e3);
            break;
        case "Z":
        case "ZZ":
            r.isUTC = !0,
            i = (t + "").match(x),
            i && i[1] && (r.tzh = ~~i[1]),
            i && i[2] && (r.tzm = ~~i[2]),
            i && i[0] === "+" && (r.tzh = -r.tzh, r.tzm = -r.tzm)
        }
        t == null && (n[8] = !1)
    }
    function J(e, t) {
        var n = [0, 0, 1, 0, 0, 0, 0],
        r = {
            tzh: 0,
            tzm: 0
        },
        i = t.match(l),
        s,
        o;
        for (s = 0; s < i.length; s++) o = (V(i[s]).exec(e) || [])[0],
        o && (e = e.slice(e.indexOf(o) + o.length)),
        A[i[s]] && $(i[s], o, n, r);
        return r.isPm && n[3] < 12 && (n[3] += 12),
        r.isPm === !1 && n[3] === 12 && (n[3] = 0),
        q(n, r.isUTC, r.tzh, r.tzm)
    }
    function K(e, t) {
        var n,
        r = e.match(h) || [],
        i,
        s = 99,
        o,
        u,
        a;
        for (o = 0; o < t.length; o++) u = J(e, t[o]),
        i = X(new D(u), t[o]).match(h) || [],
        a = I(r, i),
        a < s && 
        (s = a, n = u);
        return n
    }
    function Q(e) {
        var t = "YYYY-MM-DDT",
        n;
        if (w.exec(e)) {
            for (n = 0; n < 4; n++) if (S[n][1].exec(e)) {
                t += S[n][0];
                break
            }
            return y.exec(e) ? J(e, t + " Z") : J(e, t)
        }
        return new Date(e)
    }
    function G(e, t, n, r, i) {
        var s = i.relativeTime[e];
        return typeof s == "function" ? s(t || 1, !!n, e, r) : s.replace(/%d/i, t || 1)
    }
    function Y(e, t, n) {
        var i = r(Math.abs(e) / 1e3),
        s = r(i / 60),
        o = r(s / 60),
        u = r(o / 24),
        a = r(u / 365),
        f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t,
        f[3] = e > 0,
        f[4] = n,
        G.apply({},
        f)
    }
    function Z(e, n) {
        t.fn[e] = function(e) {
            var t = this._isUTC ? "UTC": "";
            return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
        }
    }
    function et(e) {
        t.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function tt(e, n) {
        t.duration.fn["as" + e] = function() {
            return + this / n
        }
    }
    var t,
    n = "1.7.2",
    r = Math.round,
    i,
    s = {},
    o = "en",
    u = typeof module != "undefined" && module.exports,
    a = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
    f = /^\/?Date\((\-?\d+)/i,
    l = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
    c = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,
    h = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
    p = /\d\d?/,
    d = /\d{1,3}/,
    v = /\d{3}/,
    m = /\d{1,4}/,
    g = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
    y = /Z|[\+\-]\d\d:?\d\d/i,
    b = /T/i,
    w = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
    E = "YYYY-MM-DDTHH:mm:ssZ",
    S = [["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /T\d\d:\d\d:\d\d/], ["HH:mm", /T\d\d:\d\d/], ["HH", /T\d\d/]],
    x = /([\+\-]|\d\d)/gi,
    T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
    N = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    },
    C = {},
    k = "DDD w M D d".split(" "),
    L = "M D H h m s w".split(" "),
    A = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return O("monthsShort", this.month(), this, e)
        },
        MMMM: function(e) {
            return O("months", this.month(), this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            var e = new Date(this.year(), this.month(), this.date()),
            t = new Date(this.year(), 0, 1);
            return~~ ((e - t) / 864e5 + 1.5)
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return O("weekdaysMin", this.day(), this, e)
        },
        ddd: function(e) {
            return O("weekdaysShort", this.day(), this, e)
        },
        dddd: function(e) {
            return O("weekdays", this.day(), this, e)
        },
        w: function() {
            var e = new Date(this.year(), this.month(), this.date() - this.day() + 5),
            t = new Date(e.getFullYear(), 0, 4);
            return~~ ((e - t) / 864e5 / 7 + 1.5)
        },
        YY: function() {
            return B(this.year() % 100, 2)
        },
        YYYY: function() {
            return B(this.year(), 4)
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return~~ (this.milliseconds() / 100)
        },
        SS: function() {
            return B(~~ (this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return B(this.milliseconds(), 3)
        },
        Z: function() {
            var e = -this.zone(),
            t = "+";
            return e < 0 && (e = -e, t = "-"),
            t + B(~~ (e / 60), 2) + ":" + B(~~e % 60, 2)
        },
        ZZ: function() {
            var e = -this.zone(),
            t = "+";
            return e < 0 && (e = -e, t = "-"),
            t + B(~~ (10 * e / 6), 4)
        }
    };
    while (k.length) i = k.pop(),
    A[i + "o"] = _(A[i]);
    while (L.length) i = L.pop(),
    A[i + i] = M(A[i], 2);
    A.DDDD = M(A.DDD, 3),
    t = function(n, r) {
        if (n === null || n === "") return null;
        var i,
        s;
        return t.isMoment(n) ? new D(new Date( + n._d), n._isUTC, n._lang) : (r ? F(r) ? i = K(n, r) : i = J(n, r) : (s = f.exec(n), i = n === e ? new Date: s ? new Date( + s[1]) : n instanceof Date ? n: F(n) ? q(n) : typeof n == "string" ? Q(n) : new Date(n)), new D(i))
    },
    t.utc = function(e, n) {
        return F(e) ? new D(q(e, !0), !0) : (typeof e == "string" && !y.exec(e) && (e += " +0000", n && (n += " Z")), t(e, n).utc())
    },
    t.unix = function(e) {
        return t(e * 1e3)
    },
    t.duration = function(e, n) {
        var r = t.isDuration(e),
        i = typeof e == "number",
        s = r ? e._data: i ? {}: e,
        o;
        return i && (n ? s[n] = e: s.milliseconds = e),
        o = new P(s),
        r && (o._lang = e._lang),
        o
    },
    t.humanizeDuration = function(e, n, r) {
        return t.duration(e, n === !0 ? null: n).humanize(n === !0 ? !0: r)
    },
    t.version = n,
    t.defaultFormat = E,
    t.lang = function(e, n) {
        var r;
        if (!e) return o; (n || !s[e]) && R(e, n);
        if (s[e]) {
            for (r = 0; r < a.length; r++) t[a[r]] = s[e][a[r]];
            t.monthsParse = s[e].monthsParse,
            o = e
        }
    },
    t.langData = U,
    t.isMoment = function(e) {
        return e instanceof D
    },
    t.isDuration = function(e) {
        return e instanceof P
    },
    t.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm": "PM": n ? "am": "AM"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(e) {
            var t = e % 10;
            return~~ (e % 100 / 10) === 1 ? "th": t === 1 ? "st": t === 2 ? "nd": t === 3 ? "rd": "th"
        }
    }),
    t.fn = D.prototype = {
        clone: function() {
            return t(this)
        },
        valueOf: function() {
            return + this._d
        },
        unix: function() {
            return Math.floor( + this._d / 1e3)
        },
        toString: function() {
            return this._d.toString()
        },
        toDate: function() {
            return this._d
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds(), !!this._isUTC]
        },
        isValid: function() {
            return this._a ? this._a[8] != null ? !!this._a[8] : !I(this._a, (this._a[7] ? t.utc(this._a) : t(this._a)).toArray()) : !isNaN(this._d.getTime())
        },
        utc: function() {
            return this._isUTC = !0,
            this
        },
        local: function() {
            return this._isUTC = !1,
            this
        },
        format: function(e) {
            return X(this, e ? e: t.defaultFormat)
        },
        add: function(e, n) {
            var r = n ? t.duration( + n, e) : t.duration(e);
            return j(this, r, 1),
            this
        },
        subtract: function(e, n) {
            var r = n ? t.duration( + n, e) : t.duration(e);
            return j(this, r, -1),
            this
        },
        diff: function(e, n, i) {
            var s = this._isUTC ? t(e).utc() : t(e).local(),
            o = (this.zone() - s.zone()) * 6e4,
            u = this._d - s._d - o,
            a = this.year() - s.year(),
            f = this.month() - s.month(),
            l = this.date() - s.date(),
            c;
            return n === "months" ? c = a * 12 + f + l / 30: n === "years" ? c = a + (f + l / 30) / 12: c = n === "seconds" ? u / 1e3: n === "minutes" ? u / 6e4: n === "hours" ? u / 36e5: n === "days" ? u / 864e5: n === "weeks" ? u / 6048e5: u,
            i ? c: r(c)
        },
        from: function(e, n) {
            return t.duration(this.diff(e)).lang(this._lang).humanize(!n)
        },
        fromNow: function(e) {
            return this.from(t(), e)
        },
        calendar: function() {
            var e = this.diff(t().sod(), "days", !0),
            n = this.lang().calendar,
            r = n.sameElse,
            i = e < -6 ? r: e < -1 ? n.lastWeek: e < 0 ? n.lastDay: e < 1 ? n.sameDay: e < 2 ? n.nextDay: e < 7 ? n.nextWeek: r;
            return this.format(typeof i == "function" ? i.apply(this) : i)
        },
        isLeapYear: function() {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        isDST: function() {
            return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e == null ? t: this.add({
                d: e - t
            })
        },
        startOf: function(e) {
            switch (e.replace(/s$/, "")) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return this
        },
        endOf: function(e) {
            return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        sod: function() {
            return this.clone().startOf("day")
        },
        eod: function() {
            return this.clone().endOf("day")
        },
        zone: function() {
            return this._isUTC ? 0: this._d.getTimezoneOffset()
        },
        daysInMonth: function() {
            return t.utc([this.year(), this.month() + 1, 0]).date()
        },
        lang: function(t) {
            return t === e ? U(this) : (this._lang = t, this)
        }
    };
    for (i = 0; i < T.length; i++) Z(T[i].toLowerCase(), T[i]);
    Z("year", "FullYear"),
    t.duration.fn = P.prototype = {
        weeks: function() {
            return H(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function(e) {
            var t = +this,
            n = this.lang().relativeTime,
            r = Y(t, !e, this.lang()),
            i = t <= 0 ? n.past: n.future;
            return e && (typeof i == "function" ? r = i(r) : r = i.replace(/%s/i, r)),
            r
        },
        lang: t.fn.lang
    };
    for (i in N) N.hasOwnProperty(i) && (tt(i, N[i]), et(i.toLowerCase()));
    tt("Weeks", 6048e5),
    u && (module.exports = t),
    typeof ender == "undefined" && (this.moment = t),
    typeof define == "function" && define.amd && define("moment", [], 
    function() {
        return t
    })
}.call(this),

//MCW框架，绑定事件，AJAX setup

function(t) {
    t(function() {
        moment.weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		//AJAX启动项
        t.ajaxSetup({
            type: "POST",
            dataType: "json",
            data: {
                conn_guid: t("#conn-guid").val()
            },
            beforeSend: function(e, n) {
                if (n.type != "GET") {
                    var r = t("meta[name='csrf-token']").attr("content");
                    e.setRequestHeader("X-CSRF-Token", r)
                }
            },
            error: function(e, n, r) {
                if (n === "abort") return;
                var i = t.parseJSON(e.responseText),
                s = "";
                i.errors ? t.each(i.errors, 
                function(e, t) {
                    s += t.msg + "<br/>"
                }) : s += i.msg,
                s && mcw.message({
                    msg: s
                });
                var o = mcw.urlParts(location.href).href;
                mcw.clearPageCache(o)
            }
        }),
		//body的一些事件绑定
        t.rails && t("body").on("keydown", "form.form textarea", 
        function(e) {
            var n = mcw.metaKey(e);
            n && e.which == 13 && (e.preventDefault(), t(this).closest("form.form").submit())
        }).on("submit", "form.form", 
        function(e) {
            var n = t(e.currentTarget),
            r = !0;
            return n.find("input[data-validate], textarea[data-validate]").each(function(e, n) {
                mcw.validateField(t(n)) || (r = !1)
            }),
            r
        }).on("blur", "input[data-validate]", 
        function(e) {
            var n = t(this);
            n.attr("data-blur-validate") != "false" && mcw.validateField(n, !0)
        }).on("ajax:error", "form.form", 
        function(e, n) {
            var r = t(e.currentTarget),
            i = t.parseJSON(n.responseText).errors;
            t.each(i, 
            function(e, n) {
                var i = r.find("input[name=" + n.target + "], textarea[name=" + n.target + "]"),
                s = i.nextAll(".error");
                s.length || (s = t("<p class='error'></p>").insertAfter(i)),
                s.text(n.msg),
                i.addClass("error").nextAll(".desc").hide()
            })
        }).on("ajax:complete", "form.form", 
        function(e, n, r) {
            if (r == "success") {
                var i = t(this).find(t.rails.enableSelector),
                s = i.attr("data-success-text"),
                o = t.parseJSON(n.responseText),
                u = o && o.target_url || i.attr("data-goto"),
                a = i.data("refresh");
                s && i.text(s + " ✓").prop("disabled", !0).addClass("success");
                if (u) {
                    var f = mcw.urlParts(u),
                    l = mcw.urlParts(location.href);
                    f.path != l.path && (t(".workspace").length ? mcw.stack({
                        url: u,
                        replace: !0,
                        root: i.is("[data-goto-root]"),
                        restorePosition: !0
                    }) : location.href = u)
                }
                a && mcw.stack({
                    url: location.href,
                    nocache: !0
                }),
                s && !u && !a && setTimeout(function() {
                    i.text(i.data("ujs:enable-with")).prop("disabled", !1).removeClass("success")
                },
                3e3);
                if (s || u || a) return ! 1
            }
        }).on("ajax:complete", t.rails.linkClickSelector, 
        function(e, n, r) {
            var i = t(this);
            i.is("[data-global-loading]") ? mcw.globalLoading("hide") : i.is("[data-loading]") && mcw.tinyLoading(i, !1);
            if (r == "success") {
                var s = t.parseJSON(n.responseText),
                o = s && s.target_url || i.attr("data-goto"),
                u = i.data("refresh");
                if (o) {
                    var a = mcw.urlParts(o),
                    f = mcw.urlParts(location.href);
                    a.path != f.path && (t(".workspace").length ? mcw.stack({
                        url: o,
                        replace: !0,
                        root: i.is("[data-goto-root]"),
                        restorePosition: !0,
                        bare: i.is("[data-goto-bare]")
                    }) : location.href = o)
                }
                u && mcw.stack({
                    url: location.href,
                    nocache: !0
                })
            }
        }).on("ajax:error", t.rails.linkClickSelector, 
        function(e, n, r, i) {
            if (r === "abort") return;
            var s = t.parseJSON(n.responseText),
            o = "";
            s.errors ? t.each(s.errors, 
            function(e, t) {
                o += t.msg + "<br/>"
            }) : o += s.msg,
            mcw.message({
                msg: o
            })
        }).on("ajax:beforeSend", t.rails.linkClickSelector, 
        function(e, n, r) {
            var i = t(this);
            i.is("[data-global-loading]") ? mcw.globalLoading(i.data("global-loading")) : i.is("[data-loading]") && mcw.tinyLoading(i)
        })
    }),
	//核心mcw框架
    window.mcw = {
		//异步加载图片
        loadImage: function(e, t) {
            var n = new Image;
            t && (n.onload = function() {
                t(n)
            },
            n.onerror = function() {
                t()
            });
            if (typeof e == "string") n.src = e;
            else if (e.nodeName && e.nodeName == "IMG") n.src = e.src;
            else if (window.FileReader && FileReader.prototype.readAsDataURL) {
                var r = new FileReader;
                r.onload = function(e) {
                    n.src = e.target.result
                },
                r.readAsDataURL(e)
            } else t()
        },
		//批量预加载
        preloadImages: function(e) {
            t.each(e, 
            function(e, t) {
                mcw.loadImage(t)
            })
        },
		//模板标记解析
        template: function(e, n) {
            var r = t("#" + e).html();
            return n && t.each(n, 
            function(e, t) {
                var n = new RegExp("\\{\\{ " + e + " \\}\\}", "g");
                r = r.replace(n, t)
            }),
            t(r)
        },
		//参数匹配
        params: function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = "[\\?&]" + e + "=([^&#]*)",
            n = new RegExp(t),
            r = n.exec(window.location.search);
            return r ? decodeURIComponent(r[1].replace(/\+/g, " ")) : ""
        },
        parseParams: function(t) {
            if (!t) return null;
            var n = /([^&=]+)=?([^&]*)/g,
            r = /\+/g,
            i = function(e) {
                return decodeURIComponent(e.replace(r, " "))
            };
            params = {},
            e;
            while (e = n.exec(t)) {
                var s = i(e[1]),
                o = i(e[2]);
                s.substring(s.length - 2) === "[]" ? (s = s.substring(0, s.length - 2), (params[s] || (params[s] = [])).push(o)) : params[s] = o
            }
            return params
        },
		//路由解析
        urlParts: function(e) {
            if (!e) return null;
            var n = t("<a/>", {
                href: e
            }),
            r = "/" + n[0].pathname.replace(/\/$/g, "").replace(/^\//g, "") + "/",
            i = n[0].search,
            s = n[0].hash;
            return {
                href: r + i + s,
                path: r,
                search: i,
                hash: s
            }
        },
		//支持Transition效果
        supportTransition: function() {
            var e = document.body || document.documentElement,
            t = e.style,
            n = "transition";
            if (typeof t[n] == "string") return ! 0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"],
            n = n.charAt(0).toUpperCase() + n.substr(1);
            for (var r = 0; r < v.length; r++) if (typeof t[v[r] + n] == "string") return ! 0;
            return ! 1
        },
        transitionEnd: function(e, n) {
            if (mcw.supportTransition()) {
                var r = "transitionend";
                t.browser.webkit ? r = "webkitTransitionEnd": t.browser.msie ? r = "transitionend": t.browser.opera && (r = "oTransitionEnd"),
                e.one(r, n)
            } else setTimeout(n, 20)
        },
		//对话框
        dialog: function() {
            if (typeof arguments[0] == "string" && arguments[0] == "hide") return t(document).off(".dialog"),
            t("#mask").remove(),
            t(".dialog").remove();
            if (typeof arguments[0] == "object") {
                var e = t.extend({
                    el: null,
                    width: 600,
                    height: "auto",
                    modal: !1,
                    padding: !0,
                    closeButton: !0
                },
                arguments[0]);
                mcw.dialog("hide");
                var n = t("<div class='dialog'><div class='dialog-wrapper clearfix'></div><a href='javascript:;' class='link-close-dialog'>Close</a></div>").css({
                    width: e.width,
                    height: e.height
                }).appendTo(".page:last");
                e.closeButton || n.find(".link-close-dialog").remove(),
                n.find(".dialog-wrapper").append(e.el),
                n.find(".link-close-dialog").on("click", 
                function(e) {
                    e.preventDefault(),
                    mcw.dialog("hide")
                }),
                t(document).on("keydown.dialog", 
                function(e) {
                    e.which == 27 && mcw.dialog("hide")
                }),
                setTimeout(function() {
                    n.css({
                        marginLeft: -e.width / 2,
                        marginTop: -n.height() / 2
                    })
                },
                20);
                if (e.modal) {
                    var r = t("<div id='mask' class='hidden'></div>").appendTo(".page:last");
                    r.on("click", 
                    function(e) {
                        mcw.dialog("hide")
                    }),
                    setTimeout(function() {
                        r.removeClass("hidden")
                    },
                    20)
                }
                return n
            }
            return null
        },
		//提示框
        message: function(e) {
            var n = t("<div class='message-content'><p></p><div class='dialog-buttons clearfix'><button class='btn'></button></div></div>");
            n.find("p").html(e.msg),
            n.find(".dialog-buttons button").text(e.ok || "我知道了").on("click", 
            function(e) {
                mcw.dialog("hide")
            }),
            mcw.dialog(t.extend({
                el: n,
                width: 450
            },
            e))
        },
		//确认框
        confirm: function(e) {
            var n = t("<div class='message-content'><p></p><div class='dialog-buttons clearfix'><button class='btn btn-primary btn-yes'></button><a href='javascript:void(0)' class='link-no'></a></div></div>");
            n.find("p").html(e.msg),
            n.find(".dialog-buttons .btn-yes").text(e.ok || "确定").on("click", 
            function(t) {
                mcw.dialog("hide"),
                e.callback(!0, t)
            }),
            n.find(".dialog-buttons .link-no").text(e.cancel || "取消").on("click", 
            function(t) {
                t.preventDefault(),
                mcw.dialog("hide"),
                e.callback(!1, t)
            }),
            mcw.dialog(t.extend({
                el: n,
                width: 450
            },
            e))
        },
		//全局加载图标
        globalLoading: function(e) {
            if (e == "hide") t("#mask, .global-loading").remove();
            else {
                var n = t("<div id='mask' class='hidden'></div>").appendTo("body"),
                r = t("<div class='global-loading'>" + e + "</div>").appendTo("body");
                setTimeout(function() {
                    n && n.css({
                        cursor: "default"
                    }).removeClass("hidden"),
                    r && r.css({
                        marginLeft: -r.outerWidth() * .5,
                        marginTop: -r.outerHeight() * .5
                    })
                },
                20)
            }
        },
		//指派人时候小块内容加载
        tinyLoading: function(e, n) {
            e = t(e),
            n !== !1 ? (t("<img />", {
                src: "/assets/blank-3dbe121a376a181f0fe840fb1daeeb51.gif"
            }).css({
                display: e.css("display"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                marginLeft: e.css("marginLeft"),
                marginTop: e.css("marginTop"),
                marginRight: e.css("marginRight"),
                marginBottom: e.css("marginBottom"),
                "float": e.css("float"),
                position: e.css("position"),
                top: e.css("top"),
                left: e.css("left"),
                verticalAlign: "bottom",
                background: "url(/assets/tiny-loading-e8bd9af828c29751e76f3d73d4f9e005.gif) no-repeat 50% 50%"
            }).addClass("tiny-loading").insertAfter(e), e.hide()) : (e.next(".tiny-loading").remove(), e.show())
        },
		//以对象方式处理文本
        selectText: function(e, n, r) {
            e = t(e),
            n = n || e.val().length,
            r = r || 0;
            if (e[0].createTextRange) {
                var i = e[0].createTextRange();
                i.collapse(!0),
                i.moveStart("character", n),
                i.moveEnd("character", r),
                i.select()
            } else e[0].setSelectionRange && e[0].setSelectionRange(n, n + r);
            e.focus()
        },
		//提示工具
        tooltip: function(e, n) {
            if (navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1 || navigator.platform.indexOf("iPad") != -1) return;
            if (n == "hide") {
                var r = e.data("tooltipTimer"),
                i = e.data("tooltipEl");
                r && (clearTimeout(r), r = null),
                i && (i.remove(), i = null)
            } else {
                var r = e.data("tooltipTimer"),
                i = e.data("tooltipEl"),
                s = e.offset(),
                o = e.width(),
                u = e.height(),
                a = e.attr("tooltip");
                r && (clearTimeout(r), r = null),
                i && (i.remove(), i = null),
                i = t("<div class='tooltip'><div class='tooltip-arrow'></div><div class='tooltip-content'></div></div>").appendTo("body"),
                i.find(".tooltip-content").text(a),
                i.css({
                    opacity: 0,
                    top: s.top + u,
                    left: s.left - (i.width() - o) * .5
                }),
                r = setTimeout(function() {
                    i.addClass("transition").css({
                        opacity: 1,
                        top: s.top + u + 15
                    })
                },
                200),
                e.data("tooltipTimer", r),
                e.data("tooltipEl", i)
            }
        },
		//自适应尺寸
        fitSize: function(e, n, r) {
            r = t.extend({
                stretch: !1,
                minWidth: 0,
                minHeight: 0
            },
            r);
            var i = {
                width: n.width,
                height: n.height
            };
            if (r.stretch || n.width > e.width || n.height > e.height || n.width < r.minWidth || n.height < r.minHeight) n.width / n.height > e.width / e.height ? (i.width = Math.max(e.width, r.minWidth), i.height = i.width * n.height / n.width) : (i.height = Math.max(e.height, r.minHeight), i.width = i.height * n.width / n.height);
            return i.x = (e.width - i.width) / 2,
            i.y = (e.height - i.height) / 2,
            i
        },
		//图片显示效果及延迟加载
        viewImage: function(e) {
            function g(e, n) {
                if (!c) return;
                var r = t(window),
                i = mcw.fitSize({
                    width: r.width() - 80,
                    height: r.height() - (v.length > 1 ? 160: 80)
                },
                n || {
                    width: e.width,
                    height: e.height
                });
                i.x += 40,
                i.y += 30,
                c.css({
                    width: i.width,
                    height: i.height,
                    top: i.y,
                    left: i.x
                }).find("img").attr({
                    src: e.src
                }),
                c.removeClass("loading"),
                p.show()
            }
            function y() {
                p.hide();
                var e = t(document).scrollTop(),
                r = t(document).scrollLeft(),
                i = {
                    width: n.width(),
                    height: n.height(),
                    top: n.offset().top - e,
                    left: n.offset().left - r
                };
                c.css(i),
                mcw.transitionEnd(c, 
                function(e) {
                    f.trigger("galleryhide").remove(),
                    c = null
                }),
                t(document).unbind(".originimg")
            }
            var n = e,
            r = e.data("origin-src"),
            i = e.data("origin-size"),
            s = e.data("origin-name");
            if (!r) return;
            n.is("[src]") || (n = n.find("[src]:first")),
            i ? (i = i.split(","), i = {
                width: i[0] * 1 || n.width() * 10,
                height: i[1] * 1 || n.height() * 10
            }) : i = {
                width: n.width() * 10,
                height: n.height() * 10
            };
            var o = t(document).scrollTop(),
            u = t(document).scrollLeft(),
            a = {
                width: n.width(),
                height: n.height(),
                top: n.offset().top - o,
                left: n.offset().left - u
            },
            f = t("<div />", {
                "class": "gallery-wrapper loading"
            }).click(t.proxy(y, this)).appendTo("body"),
            l = t("<div class='mask'></div>").appendTo(f),
            c = t("<div />", {
                id: "gallery-img"
            }).css({
                width: a.width,
                height: a.height,
                top: a.top,
                left: a.left
            }).appendTo(f),
            h = t("<img />", {
                src: n.attr("src")
            }).appendTo(c),
            p = t("<div />", {
                "class": "gallery-img-name hide",
                html: "<span>" + s + '</span> [ <a href="' + r + '" target="_blank">查看原图</a> ] '
            }).appendTo(c),
            d = t("<div />", {
                "class": "loading-indicator"
            }).appendTo(c),
            v = e.parent().children("*[data-origin-src]"),
            m = null;
            return v.length > 1 && (m = t("<ul/>", {
                "class": "gallery"
            }).appendTo(f), v.each(function(e, r) {
                var i = t(r),
                s;
                i.is("[src]") ? s = i: s = i.find("[src]:first");
                var o = t("<li/>"),
                u = t("<a/>", {
                    href: "javascript:;"
                }).appendTo(o),
                a = t("<img/>", {
                    src: s.attr("src")
                }).appendTo(u);
                u.on("click", {
                    d: i,
                    t: s
                },
                function(e) {
                    var t = e.data.d,
                    r = e.data.t;
                    return n = r,
                    p.hide(),
                    u.parent("li").addClass("selected").siblings("li").removeClass("selected"),
                    p.find("span").text(t.data("origin-name")).end().find("a").attr("href", t.data("origin-src")),
                    c.addClass("loading"),
                    mcw.loadImage(t.data("origin-src"), 
                    function(e) {
                        g(e)
                    }),
                    !1
                }),
                s[0] == n[0] && o.addClass("selected"),
                m.append(o)
            })),
            t(document).on("keydown.originimg", t.proxy(function(e) {
                return e.which == 27 ? y.call(this) : e.which == 37 || e.which == 38 ? m.find(".selected").prev("li").find("a").click() : (e.which == 39 || e.which == 40) && m.find(".selected").next("li").find("a").click(),
                !1
            },
            this)),
            t("span, a", p).on("click", 
            function(e) {
                e.stopPropagation()
            }),
            setTimeout(function() {
                mcw.loadImage(n.attr("src"), 
                function(e) {
                    if (!e) return f.remove(),
                    !1;
                    mcw.transitionEnd(c, 
                    function(e) {
                        f.trigger("galleryshow"),
                        c.addClass("loading"),
                        mcw.loadImage(r, 
                        function(e) {
                            c.removeClass("loading").find("img").attr("src", e.src)
                        }),
                        m && m.css({
                            left: (t(window).width() - m.width()) / 2
                        }),
                        p.show()
                    }),
                    g(e, i),
                    p.hide(),
                    f.removeClass("loading")
                })
            },
            20),
            f
        },
		//滚动效果
        scrollTo: function(e, n) {
            n = t.extend({
                anim: !0,
                container: null
            },
            n);
            var r = null,
            i = n.container ? t(n.container) : t("html, body");
            if (typeof e != "object" || typeof e.top != "number" && typeof e.left != "number") {
                var s = t(e).offset(),
                o = i.offset() || {
                    top: 0,
                    left: 0
                };
                r = {
                    top: s.top - o.top - 30,
                    left: s.left - o.left - 30
                }
            } else r = e;
            n.anim ? i.animate({
                scrollTop: r.top,
                scrollLeft: r.left
            },
            500) : i.scrollTop(r.top).scrollLeft(r.left)
        },
		//验证渲染
        validateField: function(e, n) {
            var r = e.attr("data-validate"),
            i = e.attr("data-validate-msg"),
            s = e.val(),
            o = !0,
            u = "";
            if (!r) return o;
            r = r.split(";"),
            i !== undefined && (i = i.split(";")),
            t.each(r, 
            function(r, a) {
                var a = t.trim(a).split(":"),
                f = a[0],
                l = a.length > 1 ? a[1] : null,
                c = null;
                if (f == "custom") {
                    var h = t.Event("validate");
                    e.trigger(h, [s, l]),
                    c = h.result || {
                        valid: !0
                    }
                } else c = mcw.validate[f](s, l);
                if (!c.valid) return o = c.valid,
                i && i.length && i[r] ? u = i[r] : c.errorMsg ? u = c.errorMsg: u = "",
                f == "required" && n && (o = !0, u = ""),
                !1
            });
            if (!o) {
                e.addClass("error").nextAll(".desc").hide();
                if (u) {
                    var a = e.nextAll(".error");
                    a.length || (a = t("<p class='error'></p>").insertAfter(e)),
                    a.text(u).show()
                }
            } else e.removeClass("error").nextAll(".desc").show().end().nextAll(".error").remove();
            return o
        },
		//验证器
        validate: {
            required: function(e, n) {
                return {
                    valid: !!t.trim(e),
                    errorMsg: "请填写这个字段"
                }
            },
            length: function(e, t) {
                t = (t || "0").split(",");
                var n = e.length,
                r = t[0] * 1,
                i = t.length > 1 ? t[1] * 1: null;
                return {
                    valid: !e || n >= r && (!i || n <= i),
                    errorMsg: "这个字段的长度不能" + (r > 0 ? "少于" + r + "位": "") + (i ? "多余" + i + "位": "")
                }
            },
            range: function(e, t) {
                t = (t || "0").split(",");
                var n = t[0] * 1,
                r = t.length > 1 ? t[1] * 1: null;
                return {
                    valid: !e || e >= n && (!r || e <= r),
                    errorMsg: "这个字段的值" + (n > 0 ? "不能小于" + n: "") + (r ? "不能大余" + r: "")
                }
            },
            email: function(e, t) {
                var n = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return {
                    valid: !e || n.test(e),
                    errorMsg: "请填写正确的邮箱地址"
                }
            },
            number: function(e, t) {
                return {
                    valid: !e || /^\d+$/.test(e),
                    errorMsg: "请填写数字"
                }
            },
            mobile: function(e, t) {
                return {
                    valid: !e || /^\d{11}$/.test(e),
                    errorMsg: "请填写一个有效的手机号码"
                }
            }
        },
		//弹窗
        popover: function(e, n) {
            if (n == "hide") {
                var r = t(e).data("popover");
                r && (r.remove(), t(e).removeClass("popover-target").data("popover", null), t(document).unbind(".popover"))
            } else {
                var i = t(".popover");
                i.length > 0 && i.each(function(e, n) {
                    mcw.popover(t(n).data("target"), "hide")
                }),
                e = t(e);
                var s = e.offset(),
                o = e.outerWidth(),
                u = e.outerHeight(),
                a = t(window).height(),
                r = t("<div class='popover'>					<div class='popover-content'></div>					<div class='popover-arrow'></div>				</div>");
                r.appendTo("body").find(".popover-content").append(n.content);
                var f = r.outerHeight(),
                l = t(document).scrollTop(),
                c = t(document).scrollLeft(),
                h = r.find(".popover-arrow").width(),
                p = r.find(".popover-arrow").height(),
                d = 15,
                v,
                m;
                a - s.top + l < f + 10 ? (r.addClass("direction-up"), v = s.top + u / 2 + p / 2 + d - f, m = s.left + o + h + 5) : (r.addClass("direction-down"), v = s.top + u / 2 - p / 2 - d, m = s.left + o + h + 5),
                r.css({
                    top: v,
                    left: m
                }),
                t(document).bind("mousedown.popover", 
                function(n) {
                    var i = t(n.target);
                    if (i[0] == e[0] || r.has(i).length) return;
                    mcw.popover(e, "hide")
                }),
                e.addClass("popover-target").data("popover", r),
                r.data("target", e)
            }
        },
		//高亮
        highlight: function(e, t, n) {
            n = n || "transparent",
            e.stop(!0, !0).css({
                backgroundColor: t || "#fffed6"
            }),
            setTimeout(function() {
                e.animate({
                    backgroundColor: n
                },
                {
                    queue: !1,
                    duration: 1e3
                })
            },
            100)
        },
		//滚动加载
        scrollLoad: function(e, n) {
            function o() {
                if (s.offset().top - i.scrollTop() < r) {
                    if (s.hasClass("loading")) return;
                    s.addClass("loading").text("正在加载更多...");
                    var e = n(s);
                    e && e.done(function(e) {
                        e ? (s.removeClass("loading").text("加载更多内容"), o()) : s.removeClass("loading").addClass("over").text("没有更多内容了").unbind("click")
                    })
                }
            }
            var r,
            i = t(window);
            if (e === !1) {
                t(window).unbind(".scrollLoad"),
                i.unbind(".scrollLoad");
                return
            }
            var s = t("#btn-load-more", e);
            if (!s.length) return;
            t(window).unbind(".scrollLoad").bind("resize.scrollLoad", 
            function(e) {
                r = t(window).height()
            }).resize(),
            i.unbind(".scrollLoad").bind("scroll.scrollLoad", 
            function(e) {
                if (s.is(".loading, .over")) return;
                o()
            }).scroll()
        },
		//快捷键转换
        metaKey: function(e) {
            var t = /Mac/.test(navigator.userAgent);
            return t ? e.metaKey: e.ctrlKey
        },
		//播放视频
        playAudio: function(e, n) {
            var r = t("#audio-" + e);
            r.length || (r = t('<audio id="audio-' + e + '">						<source src="' + n + '" type="audio/mpeg" />					</audio>').appendTo("body")),
            r = r.get(0),
            t.browser.chrome && r.load(),
            r.play()
        },
		//解析时间
        prettyDate: function(e, t) {
            var n = moment(e, t),
            r = moment(),
            i = r.diff(n);
            if (i < 0) return "刚刚";
            if (n.diff(moment().add("d", -1).startOf("day")) < 0) return n.format("M月D日");
            if (n.diff(moment().startOf("day")) < 0) return "昨天";
            if (i < 6e4) return "刚刚";
            if (i >= 6e4 && i < 36e5) return Math.round(i / 6e4).toFixed(0) + "分钟前";
            if (i >= 36e5 && i < 864e5) return Math.round(i / 36e5).toFixed(0) + "小时前"
        },
		//本地离线存储
        autosave: function(e) {
            e = e || document;
            var n = t("[data-autosave]", e),
            r = mcw.urlParts(location.href),
            i = [];
            n.each(function(e, n) {
                var n = t(n),
                s = n.data("autosave"),
                o = r.path + s + "/autosave/";
                if (!s) return;
                n.off("keyup.autosave").on("keyup.autosave", 
                function() {
                    var e = t(this).val();
                    localStorage[o] = e
                }),
                localStorage[o] && n.val(localStorage[o]),
                i.push(o)
            }),
            n.closest(".form").off("ajax:success.autosave").on("ajax:success.autosave", 
            function(e) {
                t.each(i, 
                function(e, t) {
                    localStorage[t] = ""
                })
            })
        }
    }
} (jQuery),

//全局URL控制，错误页定位，AJAX内容加载

function(e) {
    var t = {},
    n = {},
    r = null,
    i = {},
    s = window.history && window.history.pushState && window.history.replaceState;
    e(function() {
        function l(t) {
            i && (n[i.url] = e(this).scrollTop())
        }
        function c(t, n) {
            var r = t;
            if (typeof t != "object") {
                var i = o.find(".sheet-active");
                if (i.length) {
                    var s = mcw.urlParts(i.data("url")).href;
                    i.empty().removeClass("sheet-active").attr("data-url", s).attr("data-id", i.attr("id")).removeAttr("id");
                    var u = e("<div class='sheet-header'><a class='link-parent-sheet' data-stack data-stack-replace></a></div>").appendTo(i);
                    u.find(".link-parent-sheet").attr("href", s).attr("data-restore-position", "true").text(i.data("page-name"))
                }
                r = e("<div class='page hidden empty'></div>");
                if (!n) {
                    var a = o.find(".page").length;
                    r.addClass("sheet sheet-active sheet-" + (a || "root")).attr("data-url", t)
                }
                r.appendTo(i.length ? i: o),
                r.removeClass("hidden")
            } else r.addClass("empty").children(".page").remove(),
            r.hasClass("sheet") && r.addClass("sheet-active"),
            r.data("id") && r.attr("id", r.data("id"));
            return r
        }
        function h(n, i, s, u) {
            function f(r) {
                var u = o.find(".page").index(n),
                a = e(r).attr("data-url", i).removeClass("sheet-root sheet-1 sheet-2 sheet-3 sheet-4").addClass("sheet-" + (u || "root")).addClass("empty");
                n.replaceWith(a);
                var f = a.attr("id");
                return mcw.pages[f] && mcw.pages[f].init(a),
                e(document).trigger("afterstack", [a]),
                a.removeClass("empty"),
                t[i] = {
                    id: f,
                    name: a.data("page-name") + " - Tower",
                    html: e("<div/>").append(a.clone()).html()
                },
                s && s(a),
                mcw.live && mcw.live(),
                a
            }
            function l() {
                i || (i = mcw.urlParts(n.data("url")).href),
                r = e.ajax({
                    url: i,
                    type: "get",
                    headers: {
                        "X-PJAX": "true"
                    },
                    data: {
                        pjax: 1
                    },
                    complete: function() {
                        r = null
                    },
                    dataType: "html",
                    error: function(e) { ! e || e.status !== 404 && e.status !== 403 ? e && e.status === 502 ? mcw.message({
                            msg: "抱歉，系统繁忙，请稍后刷新页面。"
                        }) : e && e.status === 500 && mcw.message({
                            msg: "抱歉，系统出错了，请稍后刷新页面。"
                        }) : f(e.responseText),
                        mcw.clearPageCache(i)
                    },
                    success: function(e) {
                        f(e)
                    }
                })
            }
            if (!n || !n.length) return;
            var a = t[i]; ! u && a && a.html ? (n = f(a.html), n.data("pjax-refresh") === !1 ? mcw.live && mcw.liveHandler() : l()) : (i && n.addClass("loading"), l())
        }
        window.mcw || (mcw = {});
        if (!s) {
            e.extend(mcw, {
                stack: function(e) {
                    location.href = e.url
                },
                clearPageCache: function() {}
            });
            return
        }
        var o = e(".workspace"),
        u = e(document).on("scroll.stack", l);
        if (o.length) {
            var a = mcw.urlParts(location.href).href,
            f = o.find(".page:last").attr("data-url", a);
            t[a] = {
                id: f.attr("id"),
                name: document.title,
                html: e("<div/>").append(f.clone()).html()
            },
            i = {
                id: f.attr("id"),
                name: document.title,
                url: a,
                html: o.html()
            },
            history.replaceState(i, i.name, i.url)
        }
        e.extend(mcw, {
            clearPageCache: function(e) {
                e ? t[e] = undefined: t = {}
            },
            stack: function(s) {
                s = e.extend({
                    url: "",
                    root: !1,
                    replace: !1,
                    bare: !1,
                    restorePosition: !1,
                    parent: null,
                    nocache: !1
                },
                s);
                var a = e.Event("beforestack");
                e(document).trigger(a);
                if (a.result === !1) return;
                r && (r.abort(), r = null),
                u.off("scroll.stack", l),
                mcw.live && mcw.live(!1);
                var f = mcw.urlParts(s.url),
                p = mcw.urlParts(location.href),
                d = o.find(".page:last"),
                v = d.hasClass("loading"),
                m = null;
                d.length && !d.hasClass("empty") && (t[p.href] = {
                    id: d.attr("id"),
                    name: d.data("page-name") + " - Tower",
                    html: e("<div/>").append(d.clone()).html()
                },
                i.html = o.html(), history.replaceState(i, i.name, i.url)),
                f.path == p.path && f.search == p.search ? m = d: s.root ? (o.empty(), s.parent && e("<div class='page sheet sheet-root sheet-active'></div>").attr("data-page-name", s.parent.name).attr("data-url", s.parent.url).appendTo(o)) : s.replace && (o.find(".page").each(function() {
                    var t = e(this),
                    n = mcw.urlParts(t.data("url"));
                    if (n && f.path == n.path) return m = t,
                    t[0] != d[0] && c(t),
                    !1
                }), m || (m = d.empty(), c(m)));
                if (!m || m.length < 1) m = c(f.href, s.bare);
                i = {
                    url: f.href,
                    name: "正在加载...",
                    html: o.html()
                },
                history[v ? "replaceState": "pushState"](i, i.name, i.url),
                document.title = i.name,
                !f.hash && s.restorePosition && n[f.href] !== undefined ? u.scrollTop(n[f.href]) : u.scrollTop(0),
                u.on("scroll.stack", l).scroll(),
                h(m, f.href, 
                function(e) {
                    i = {
                        id: e.attr("id"),
                        url: f.href,
                        name: e.data("page-name") + " - Tower",
                        html: o.html()
                    },
                    history.replaceState(i, i.name, i.url),
                    document.title = i.name,
                    f.hash && setTimeout(function() {
                        mcw.scrollTo(f.hash, {
                            anim: !1
                        })
                    },
                    0),
                    window._gaq && _gaq.push(["_trackPageview"])
                },
                s.nocache)
            }
        }),
        e(document).on("click.stack", "a[data-stack]", 
        function(t) {
            var n = mcw.metaKey(t);
            if (n) return;
            t.preventDefault();
            var r = e(this),
            i = null;
            r.is("[data-parent-name][data-parent-url]") && (i = {
                name: r.data("parent-name"),
                url: r.data("parent-url")
            }),
            mcw.stack({
                url: r.data("url") || r.attr("href"),
                root: r.is("[data-stack-root]"),
                replace: r.is("[data-stack-replace]"),
                bare: r.is("[data-stack-bare]"),
                restorePosition: r.is("[data-restore-position]"),
                nocache: r.is("[data-nocache]"),
                parent: i
            })
        }),
        e(window).on("popstate.stack", 
        function(t) {
            var s = t.originalEvent.state;
            if (!s) return;
            r && (r.abort(), r = null),
            mcw.live && mcw.live(!1),
            e(document).trigger("beforestack"),
            u.off("scroll.stack", l),
            o.html(s.html),
            document.title = s.name,
            i = s;
            var a = o.find(".page:last"),
            f = a.attr("id");
            mcw.pages[f] && mcw.pages[f].init(a),
            a.data("pjax-refresh") === !1 ? mcw.live && mcw.liveHandler() : h(a, null, null, !0),
            n[s.url] !== undefined ? u.scrollTop(n[s.url]) : u.scrollTop(0),
            u.on("scroll.stack", l).scroll()
        })
    })
} (jQuery),

//编辑器支持可拖拽以及进度

function(e) {
    function n(t) {
        function o(i) {
            var s = /(_|\*)(\S+?)(_|\*)\s/g,
            o;
            while ((o = s.exec(i.data)) != null) {
                var u = i.data.substr(0, o.index) + o[2] + i.data.substr(o.index + o[0].length, o.input.length - 1),
                a = n.createTextNode(u);
                e(i).replaceWith(a);
                var f = rangy.createRange(n);
                f.setStart(a, o.index),
                f.setEnd(a, o.index + o[2].length),
                r.setSelection(f),
                t.composer.commands.exec("bold"),
                r.setAfter(r.getSelectedNode().parentNode),
                e(r.getSelectedNode()).closest("b").length && t.composer.commands.exec("bold")
            }
        }
        function u(i) {
            var s = /^\*\s+(\S*?)/g,
            o;
            while ((o = s.exec(i.data)) != null) {
                if (i.previousSibling && !e(i.previousSibling).is("br")) return;
                var u = i.data.substr(0, o.index) + o[1] + i.data.substr(o.index + o[0].length),
                a = rangy.createRange(n);
                a.setStartAfter(i),
                a.setEndAfter(i),
                r.setSelection(a),
                t.composer.commands.exec("insertUnorderedList");
                var f = r.getSelectedNode();
                f.textContent = u;
                var l = e(f).closest("li");
                if (l.length) {
                    var c = n.createTextNode(wysihtml5.INVISIBLE_SPACE);
                    l.append(c),
                    r.selectNode(c)
                } else r.setAfter(f)
            }
        }
        function a(i) {
            var s = /^\d[\.、]\s(\S*?)/g,
            o;
            while ((o = s.exec(i.data)) != null) {
                var u = i.data.substr(0, o.index) + o[1] + i.data.substr(o.index + o[0].length),
                a = rangy.createRange(n);
                a.setStartAfter(i),
                a.setEndAfter(i),
                r.setSelection(a),
                t.composer.commands.exec("insertOrderedList");
                var f = r.getSelectedNode();
                f.textContent = u;
                var l = e(f).closest("li");
                if (l.length) {
                    var c = n.createTextNode(wysihtml5.INVISIBLE_SPACE);
                    l.append(c),
                    r.selectNode(c)
                } else r.setAfter(f)
            }
        }
        var n = t.composer.doc,
        r = t.composer.selection,
        i = rangy.createRange(n);
        i.selectNode(n.body);
        var s = i.getNodes([3]);
        e.each(s, 
        function(e, t) {
            o(t),
            u(t),
            a(t)
        })
    }
    function r(e) {
        var t = e.originalEvent.dataTransfer,
        n = navigator.userAgent.indexOf("AppleWebKit") > -1;
        return t && t.effectAllowed != "none" && (t.files || !n && t.types.contains && t.types.contains("Files"))
    }
    e(function() {
        e("body").on("validate", ".form-editor", 
        function(t, n, r) {
            var i = e(this).find(".editor:first"),
            s = i.find(".attachment:visible"),
            o = e(t.currentTarget),
            u = {
                valid: !0
            };
            return /^((&nbsp;)*\s*(<br>)*)*$/.test(n) && !e.trim(o.find("input[type=text]").val()) && !s.length ? (i.addClass("error"), u.valid = !1) : n.length > 5e3 ? (i.addClass("error"), u.valid = !1, mcw.message({
                msg: "内容最长5000个字符"
            })) : i.removeClass("error"),
            s.each(function() {
                if (e(this).hasClass("uploading")) return i.addClass("error"),
                u.valid = !1,
                !1
            }),
            u
        }).on("ajax:beforeSend", ".form-editor", 
        function(t, n, r) {
            var i = e(".member-list input:checked").map(function() {
                return e(this).val()
            }).get();
            r.data += "&cc_guids=" + i.join(",");
            var s = e(this).find(".editor:first"),
            o = s.find(".attachment[fileid]:visible").map(function() {
                return e(this).is("[attachId]") ? e(this).attr("attachId") : null
            }).get(),
            u = s.find(".attachment:hidden:not([fileid])").map(function() {
                return e(this).is("[attachId]") ? e(this).attr("attachId") : null
            }).get(),
            a = s.find(".attachment:visible").map(function() {
                return e(this).is("[attachId]") ? e(this).attr("attachId") : null
            }).get();
            r.data += "&attach_guids=" + o.join(",") + "&delete_attach_guids=" + u.join(",") + "&attach_order=" + a.join(",")
        }).on("click", ".link-select-all", 
        function(t) {
            t.preventDefault(),
            e(t.currentTarget).parents(".notify:first").find(".member-list input:checkbox").attr("checked", "checked")
        }).on("click", ".link-select-none", 
        function(t) {
            t.preventDefault(),
            e(t.currentTarget).parents(".notify:first").find(".member-list input:checkbox").removeAttr("checked")
        }).on("click", ".link-change-notify", 
        function(t) {
            t.preventDefault(),
            e(t.currentTarget).parent().hide().parents(".notify:first").find(".select-all").show().end().find(".form-field").show().end().find(".receiver").hide()
        })
    }),
    window.mcw || (mcw = {});
    var t = {
        attachment: "<div class='attachment'>				<img src='/assets/file_icons/file_extension_others-794dbedf3ee0e0e7ea0a61d225ff67f4.png'/>				<span class='name'></span>				<span class='size'></span>				<div class='progress-bar'><div><span></span></div></div>				<span class='percent'>0%</span>				<a href='javascript:;' class='link-cancel' title='Cancel'>Cancel</a>			</div>",
        toolbar: '<div class="editor-toolbar">				<a class="toolbar-button toolbar-button-em" data-wysihtml5-command="formatInline" data-wysihtml5-command-value="b" href="javascript:;" title="加粗文字">加粗文字</a>				<a class="toolbar-button toolbar-button-ul" data-wysihtml5-command="insertUnorderedList" href="javascript:;" title="无序列表">无序列表</a>				<a class="toolbar-button toolbar-button-ol" data-wysihtml5-command="insertOrderedList" href="javascript:;" title="有序列表">有序列表</a>			</div>'
    };
    e.extend(mcw, {
        editor: function(n, i) {
            function d(e) {
                var t = o.parents("form:first").find("button[type=submit]");
                e === "normal" && t.prop("disabled") ? t.prop("disabled", !1).text(t.data("originText") || t.data("ujs:enable-with")).removeData("originText") : e === "uploading" && !t.prop("disabled") && t.prop("disabled", !0).data("originText", t.text()).text("正在上传附件...")
            }
            i = e.extend({},
            i, {
                upload: !0,
                toolbar: !0
            });
            var s = e(n),
            o,
            u;
            s.parent().is(".editor") ? o = s.parent() : o = s.wrap("<div class='editor' />").parent(),
            mcw.autosave(o.closest(".form-editor")),
            i.toolbar && (u = e(t.toolbar).insertAfter(s));
            var a = (new wysihtml5.Editor(s[0], {
                toolbar: u ? u[0] : undefined,
                style: !1,
                parserRules: wysihtml5ParserRules,
                stylesheets: ["/assets/editor-774343d3556ec6d051d1447a894bbc3d.css"]
            })).on("load", 
            function() {
                if (!a || !a.composer) return;
                e(a.composer.doc).on("dragover", 
                function(t) {
                    r(t) && e(document).trigger("dragover_if.editor")
                }),
                e(a.composer.doc).bind("drop dragenter dragover dragleave", 
                function(e) {
                    return e.preventDefault(),
                    !1
                }),
                e(a.composer.doc.body).bind("keydown", 
                function(e) {
                    var t = mcw.metaKey(e);
                    if (e.which == 13 && t) return s.closest(".form").find("button:submit").click(),
                    !1
                });
                var t = s.attr("tabindex");
                t && e(a.composer.iframe).attr("tabindex", t)
            }).on("focus:composer", 
            function() {
                a && a.composer && (e(a.composer.iframe).closest(".editor").addClass("focus"), a.heightInterval = setInterval(e.proxy(function() {
                    a && a.composer ? e(a.composer.iframe).css({
                        minHeight: Math.max(90, e(a.composer.element).outerHeight() + 10)
                    }) : a && (clearInterval(a.heightInterval), a.heightInterval = null)
                },
                this), 300), o.removeClass("error"))
            }).on("blur", 
            function() {}).on("blur:composer", 
            function() {
                a && a.composer && e(a.composer.iframe).closest(".editor").removeClass("focus"),
                a && a.heightInterval && (clearInterval(a.heightInterval), a.heightInterval = null)
            });
            e(a.textareaElement).is("[data-autosave]") && a.on("change:composer", 
            function() {
                if (a) {
                    var t = mcw.urlParts(location.href),
                    n = e(a.textareaElement).data("autosave"),
                    r = a.getValue(),
                    i = t.path + n + "/autosave/";
                    if (!n) return;
                    localStorage[i] = r
                }
            }),
            o.data("editor", a);
            if (mcw.upload && i.upload) {
                var f = o.find(".editor-attachments"),
                l = o.find(".add-attachment");
                l.length < 1 && (l = e('<div class="add-attachment">添加附件</div>')),
                o.after('<p class="upload-limit-desc">单个附件支持最大50MB</p>'),
                l.insertAfter(a.currentView.iframe),
                f.length < 1 && (f = e("<div class='editor-attachments'></div>").appendTo(o));
                var c = mcw.upload(l, {
                    action: "/upload/attachments",
                    beforeUpload: function(n) {
                        var r = e(t.attachment).attr({
                            fileid: n.id
                        }).prependTo(f);
                        mcw.loadImage(n.obj, 
                        function(e) {
                            if (!e) {
                                var t = "/assets/file_icons/",
                                i = t + "file_extension_" + n.extension + ".png";
                                mcw.loadImage(i, 
                                function(e) {
                                    e ? r.find("img").attr("src", e.src) : r.find("img").attr("src", t + "file_extension_others.png")
                                })
                            } else r.find("img").attr({
                                src: e.src,
                                "data-origin-src": e.src,
                                "data-origin-size": e.width + "," + e.height,
                                "data-origin-name": n.name
                            }).css("cursor", "pointer")
                        });
                        if (window.File && window.FileList) {
                            var i = 0;
                            n.size >= 1048576 ? i = (n.size / 1048576).toFixed(1) + "M": i = (n.size / 1024).toFixed(0) + "K"
                        } else r.find(".progress-bar").remove().end().find(".percent").text("正在上传...").addClass("ie");
                        r.addClass("uploading"),
                        r.find(".name").text(n.name),
                        r.find(".size").text(i),
                        r.find(".link-cancel").text("取消上传").attr("title", "取消上传"),
                        d("uploading"),
                        l.addClass("active")
                    },
                    onProgress: function(e, t, n) {
                        var r = f.find(".attachment[fileid=" + e.id + "]"),
                        i = (t / n * 100).toFixed(0) + "%";
                        r.find(".progress-bar span").width(i),
                        r.find(".percent").text(i)
                    },
                    onValidate: function(e, t) {
                        return e.size && e.size / 1048576 > 50 ? (mcw.message({
                            msg: '附件 <em style="color: #ee6500;">' + e.name + "</em> 大小超过50MB, 无法完成上传",
                            width: 500
                        }), !1) : !0
                    },
                    onSuccess: function(e, t) {
                        var n = f.find(".attachment[fileid=" + e.id + "]");
                        n.find(".progress-bar, .percent").remove(),
                        n.removeClass("uploading").attr("attachid", t.attach).find(".link-cancel").text("移除附件").attr("title", "移除附件"),
                        mcw.loadImage(t.file_path, 
                        function(e) {
                            e && n.find("img").attr({
                                src: e.src,
                                "data-origin-src": e.src,
                                "data-origin-size": e.width + "," + e.height
                            })
                        })
                    },
                    onCancel: function(e) {},
                    onError: function(t, n) {
                        var r = e.parseJSON(n.responseText);
                        mcw.message({
                            msg: r.msg
                        }),
                        f.find(".attachment.uploading .link-cancel").click(),
                        d("normal")
                    },
                    onComplete: function(e, t) {
                        c.getInProgress() === 0 && d("normal")
                    }
                }),
                h,
                p = e('<div class="droparea"><span>拖动文件到这里，添加附件</span></div>').appendTo(o);
                p.on("dragover", 
                function(e) {
                    if (!r(e)) return;
                    p.addClass("droparea-active");
                    var t = e.originalEvent.dataTransfer.effectAllowed;
                    /^(move|linkMove)$/.test(t) ? e.originalEvent.dataTransfer.dropEffect = "move": e.originalEvent.dataTransfer.dropEffect = "copy",
                    e.stopPropagation(),
                    e.preventDefault(),
                    clearTimeout(h),
                    h = setTimeout(function() {
                        p.hide()
                    },
                    500)
                }).on("dragenter", 
                function(e) {
                    if (!r(e)) return;
                    p.addClass("droparea-active")
                }).on("dragleave", 
                function(t) {
                    if (!r(t)) return;
                    var n = e(document.elementFromPoint(t.originalEvent.clientX, t.originalEvent.clientY));
                    if (n.is(".droparea") || n.parent(".droparea").length) return;
                    p.removeClass("droparea-active")
                }).on("drop", 
                function(t) {
                    if (!r(t)) return;
                    var n;
                    if (!t.originalEvent.dataTransfer.files || !t.originalEvent.dataTransfer.files.length) return;
                    files = t.originalEvent.dataTransfer.files,
                    files && e.each(files, 
                    function(e, t) {
                        c.uploadFile(t)
                    })
                }),
                a.on("paste:composer", e.proxy(function(t) {
                    if (!t || !t.dataTransfer) {
                        var n = e("img", a.composer.element),
                        r = n.map(function(t, n) {
                            return e(n).attr("src")
                        }).get();
                        n.remove(),
                        e.each(r, 
                        function(e, t) {
                            blob = window.dataURLtoBlob && window.dataURLtoBlob(t),
                            blob.name = "屏幕截图 " + moment().format("YYYY-MM-DD HH:mm:ss") + ".png",
                            c.uploadFile(blob)
                        })
                    } else {
                        var i;
                        if (t.dataTransfer.files && t.dataTransfer.files.length) t.originalEvent.stopPropagation(),
                        t.originalEvent.preventDefault(),
                        i = t.dataTransfer.files[0];
                        else {
                            if (! (t.dataTransfer.items && t.dataTransfer.items.length && t.dataTransfer.items[0].type.indexOf("image") > -1)) {
                                if (t.dataTransfer.types && (e.inArray("image/png", t.dataTransfer.types) > -1 || e.inArray("image/tiff", t.dataTransfer.types) > -1)) return t.originalEvent.preventDefault(),
                                !1;
                                return
                            }
                            t.originalEvent.stopPropagation(),
                            t.originalEvent.preventDefault(),
                            i = t.dataTransfer.items[0]
                        }
                        i && (i.getAsFile && (i = i.getAsFile()), i.name || (i.name = "屏幕截图 " + moment().format("YYYY-MM-DD HH:mm:ss") + ".png"), c.uploadFile(i))
                    }
                },
                this)),
                e(document).on("dragenter.editor", 
                function(e) {
                    if (!r(e)) return;
                    p.show()
                }).on("dragover.editor", 
                function(e) {
                    if (!r(e)) return;
                    e.originalEvent.dataTransfer.dropEffect = "none",
                    e.preventDefault(),
                    clearTimeout(h),
                    h = setTimeout(function() {
                        p.hide()
                    },
                    500)
                }).on("drop.editor", 
                function(e) {
                    p.hide(),
                    e.preventDefault()
                }).on("click.editor", ".editor-attachments .link-cancel", 
                function(t) {
                    t.preventDefault();
                    var n = e(t.currentTarget).parents(".attachment:first"),
                    r = n.siblings(".attachment:visible"),
                    i = n.attr("fileid");
                    i && n.hasClass("uploading") && c.cancel(i),
                    n.hide().removeClass("uploading"),
                    r.length || l.removeClass("active")
                }).on("dragover_if.editor", 
                function(e) {
                    p.show()
                }),
                f.sortable({
                    axis: "y",
                    item: ".attachment",
                    cursor: "move",
                    helper: "clone",
                    tolerance: "pointer",
                    placeholder: "editor-attach-placeholder",
                    containment: "parent"
                })
            }
            return e.extend(a, {
                destroyEditor: function() {
                    var t = e(a.textarea.element).closest(".form").off(".editor");
                    t.data("submitEvent") && (t.data("submitEvent").stop(), e.removeData(t, "submitEvent")),
                    t.data("resetEvent") && (t.data("resetEvent").stop(), e.removeData(t, "resetEvent")),
                    clearInterval(a.heightInterval),
                    a = null,
                    o.find(".editor-attachments .link-cancel").click(),
                    o.next(".upload-limit-desc").remove(),
                    d("normal");
                    var n = s.nextAll("iframe.wysihtml5-sandbox").remove();
                    s.nextAll("input[name='_wysihtml5_mode'], .editor-attachments, .add-attachment, .editor-toolbar").remove(),
                    e("body").removeClass("wysihtml5-supported"),
                    e(document).off(".editor"),
                    p && p.remove(),
                    s.unwrap().val("")
                }
            }),
            o.data("editor", a),
            a
        }
    })
} (jQuery),

//日期选择插件

function(e) {
    var t = {
        inline: !1,
        showPrevNext: !0,
        disableToday: !1,
        allowOld: !0,
        format: "YYYY-MM-DD"
    },
    n = function(n, r) {
        this.el = e(n);
        var i = e.extend({},
        t, r);
        this.el.data("settings", i);
        var s = this.el.val();
        s && (this.selectedDate = moment(s, i.format)),
        i.inline ? this.show() : (this.el.focus(e.proxy(function(e) {
            this.show()
        },
        this)).focus(), e(document).bind("click.datepicker", e.proxy(function(e) {
            this.hide()
        },
        this)))
    };
    e.extend(n.prototype, {
        show: function() {
            this.update()
        },
        hide: function() {
            this.cal && (this.cal.remove(), this.cal = null, e(document).unbind(".datepicker"))
        },
        setStartDate: function(e) {
            this.el.data("settings").startDate = e,
            this.cal && this.update()
        },
        setEndDate: function(e) {
            this.el.data("settings").endDate = e,
            this.cal && this.update()
        },
        setSelectedDate: function(e) {
            if (!e) this.selectedDate = null,
            this.el.val("");
            else {
                this.selectedDate = moment(e);
                var t = this.el.data("settings");
                this.el.val(this.selectedDate.format(t.format))
            }
            this.cal && this.update()
        },
        update: function() {
            var t = this.el,
            n = t.data("settings"),
            r = t.data("theDate") || this.selectedDate || moment().startOf("day"),
            i = r.clone().startOf("month"),
            s = r.clone().endOf("month"),
            o = r.clone().add("months", -1).endOf("month"),
            u = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            t.data("theDate", r);
            var a = "";
            for (var f = 0, l = 0; f < 6; f++) {
                var c = "";
                for (var h = 0; h < 7; h++, l++) {
                    var p = o.date() - o.day() + l + 1,
                    d = p - o.date(),
                    v = h == 6 ? "sun": h == 5 ? "sat": "day";
                    if (d >= 1 && d <= s.date()) {
                        var m = moment().startOf("day"),
                        g = r.clone().date(d);
                        v += m.diff(g) == 0 ? " today": "",
                        n.allowOld || (v += g.diff(m) < 0 ? "disabled": ""),
                        this.selectedDate && (v += g.diff(this.selectedDate) == 0 ? " selected": "")
                    } else {
                        if (d > s.date() && h == 0) break;
                        v = "disabled",
                        d = d <= 0 ? p: p - s.date() - o.date()
                    }
                    c += "<td class='datepicker-day'><a href='javascript:;' class='" + v + "'>" + d + "</div></td>"
                }
                c && (a += "<tr class='days'>" + c + "</tr>")
            }
            var y = n.allowOld,
            b = !0;
            n.showPrevNext || (y = b = !1);
            var w = r.year() + "年" + u[r.month()],
            E = "<table><tr><td class='datepicker-prev'>" + (y ? "<a href='javascript:;'>Prev</a>": "") + "</td>" + "<td class='datepicker-title' colspan='5'>" + w + "</td>" + "<td class='datepicker-next'>" + (b ? "<a href='javascript:;'>Next</a>": "") + "</td>" + "</tr>" + "<tr class='datepicker-dow'>" + "<td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><td>日</td>" + "</tr>" + a + "</table>";
            if (!this.cal) {
                this.cal = e("<div class='datepicker'></div>").insertAfter(t);
                if (!n.inline) {
                    var S = t.offset();
                    this.cal.css({
                        position: "absolute",
                        "z-index": n.zIndex || 100,
                        left: S.left,
                        top: S.top + t.outerHeight(!0)
                    })
                }
                this.cal.on("click", 
                function(e) {
                    return ! 1
                }).on("click", ".datepicker-prev a", e.proxy(function(t) {
                    var n = e(t.currentTarget),
                    r = this.el.data("theDate"),
                    i = r.clone().add("months", -1);
                    this.el.data("theDate", i),
                    this.update()
                },
                this)).on("click", ".datepicker-next a", e.proxy(function(t) {
                    var n = e(t.currentTarget),
                    r = this.el.data("theDate"),
                    i = r.clone().add("months", 1);
                    this.el.data("theDate", i),
                    this.update()
                },
                this)).on("click", ".datepicker-day a", e.proxy(function(t) {
                    t.preventDefault();
                    var n = e(t.currentTarget);
                    if (n.hasClass("disabled")) return;
                    var r = n.text(),
                    i = this.el.data("settings"),
                    s = this.el.data("theDate"),
                    o = s.clone().date(r);
                    this.el.data("theDate", o),
                    this.el.val(o.format(i.format)),
                    this.selectedDate = o,
                    this.cal.find(".datepicker-day a.selected").removeClass("selected"),
                    n.addClass("selected"),
                    i.inline || this.hide(),
                    i.onSelect && i.onSelect(o)
                },
                this))
            }
            this.cal.html(E)
        }
    }),
    window.mcw || (mcw = {}),
    e.extend(mcw, {
        datepicker: function(t, r) {
            return new n(e(t), r)
        }
    })
} (jQuery),

//轮询状态更新

function(e) {
    function n(t, n) {
        var r = e(t).data("sort") * 1,
        i = e(n).data("sort") * 1;
        return r - i
    }
    function r(t, n) {
        var r = e(t).data("sort") * 1,
        i = e(n).data("sort") * 1;
        return i - r
    }
    e.extend(window.mcw, {
        live: function(e) {
            if (e === !1) {
                clearInterval(mcw.liveInterval),
                mcw.liveInterval = null,
                mcw.liveRequest && (mcw.liveRequest.abort(), mcw.liveRequest = null);
                return
            }
            mcw.live(!1);
            var t = mcw.urlParts(location.href).path;
            mcw.liveInterval = setInterval(mcw.liveHandler, 1e4)
        },
        liveHandler: function() {
            var n = e(".workspace .page:last");
            if (!n.length) return;
            var r = mcw.urlParts(location.href),
            i = n.data("since");
            mcw.liveRequest = e.ajax({
                url: r.path + "live/" + r.search,
                type: "get",
                data: {
                    since: i,
                    conn_guid: e("#conn-guid").val()
                },
                success: function(n) {
                    var r = e(".workspace .page:last"),
                    i = r.attr("id");
                    r.attr("data-since", n.timestamp).data("since", n.timestamp);
                    if (i && mcw.pages[i] && mcw.pages[i].update && mcw.pages[i].update(n) === !1) return;
                    e.each(t, 
                    function(e, t) {
                        t(n)
                    })
                },
                error: function(t, n, i) {
                    if (n === "abort") return;
                    mcw.clearPageCache(r.href);
                    var s = e.parseJSON(t.responseText);
                    console && console.error && console.error(s.msg)
                }
            })
        }
    });
    var t = {
        unread: function(t) {
            t.unread !== undefined && e("#notification-count").toggleClass("unread", t.unread > 0).text(t.unread)
        },
        d18n: function(t) {
            if (t.d18n && mcw.d18n.support() && mcw.d18n.permitted() && e("#d18n-enabled").val() === "true") {
                var n = e.now(),
                r = localStorage.last_d18n_req * 1;
                if (r && n - r < 9900) return;
                localStorage.last_d18n_req = n,
                e.each(t.d18n, 
                function(e, t) {
                    mcw.d18n.show(t)
                })
            }
        },
        unread_notis: function(t) {
            var n = e(".noti-pop-list");
            if (!n.length) return;
            t.unread_notis ? (n.html(t.unread_notis).show(), e(".noti-pop-empty").hide(), mcw.adjustDate(n)) : (n.html("").hide(), e(".noti-pop-empty").show())
        },
        topics: function(t) {
            var n = e(".messages");
            if (!n.length || !t.topics) return;
            var r = [],
            i = !1;
            t.topics.deleted && t.topics.deleted.length && (e.each(t.topics.deleted, 
            function(t, r) {
                n.find(".message[data-guid=" + r + "]").fadeOut(function() {
                    e(this).remove()
                })
            }), e(".init.init-discussion").hide()),
            t.topics.created && t.topics.created.length && (e.each(t.topics.created, 
            function(t, i) {
                var s = e(i),
                o = s.data("guid");
                n.find("[data-guid=" + o + "]").remove(),
                n.prepend(s),
                r.push(s),
                mcw.adjustDate(s)
            }), i = !0),
            t.topics.updated && t.topics.updated.length && (e.each(t.topics.updated, 
            function(t, i) {
                var s = e(i),
                o = s.data("guid");
                n.find("[data-guid=" + o + "]").remove(),
                n.prepend(s),
                r.push(s),
                mcw.adjustDate(s)
            }), i = !0);
            if (i) {
                var s = n.find(".message"),
                o = "YYYY-MM-DD HH:mm:ss Z";
                s.sort(function(t, n) {
                    var r = moment(e(t).data("last-comment-at"), o),
                    i = moment(e(n).data("last-comment-at"), o);
                    return i.diff(r)
                }),
                n.prepend(s)
            }
            var u = e(".workspace .page:last");
            u.is("#page-project") && (n.find(".message:gt(2)").hide(), n.find(".message:lt(3)").show());
            if (t.topics.count) {
                var a = e(".link-more-topics");
                a.length && a.text(a.text().replace(/\d+/, t.topics.count))
            }
            e(r).each(function() {
                mcw.highlight(e(this))
            })
        },
        todolists: function(t) {
            var n = e(".todolists");
            if (!n.length || !t.todolists) return;
            var i = [],
            s = !1;
            t.todolists.created && t.todolists.created.length && (e.each(t.todolists.created, 
            function(t, r) {
                var s = e(r.html),
                o = n.find(".todolist[data-guid=" + s.data("guid") + "]");
                o.length ? o.replaceWith(s) : n.append(s),
                i.push(s.find(".title"))
            }), e(".init-todo-empty, .init-todo-completed").remove(), s = !0),
            t.todolists.deleted && t.todolists.deleted.length && e.each(t.todolists.deleted, 
            function(t, r) {
                n.find(".todolist[data-guid=" + r + "]").fadeOut(function() {
                    e(this).remove()
                })
            }),
            t.todolists.updated && t.todolists.updated.length && e.each(t.todolists.updated, 
            function(e, t) {
                var r = n.find("[data-guid=" + t.guid + "]");
                t.name && r.find(".title h4 a").text(t.name),
                t.position && (r.data("sort", t.position), s = !0),
                i.push(r.find(".title h4 a"))
            });
            if (s) {
                var o = n.children(".todolist");
                o.sort(r),
                n.append(o)
            }
        },
        todos: function(t) {
            if (!t.todos) return;
            var r = [],
            i = [];
            t.todos.created && t.todos.created.length && (e.each(t.todos.created, 
            function(t, n) {
                if (!n.list) return;
                var s = e(n.html),
                o = s.data("guid"),
                u = e(".todolist[data-guid=" + n.list + "]"),
                a = u.find(".todo[data-guid=" + o + "]"),
                f = s.hasClass("completed");
                a.length && a.remove(),
                mcw.setTodoFilter(),
                u.find(f ? ".todos-completed": ".todos-uncompleted").append(s),
                r.push(s),
                i.push(u[0]),
                mcw.adjustTodo(s),
                mcw.adjustDate(s)
            }), e(".init-todo-empty, .init-todo-completed").remove()),
            t.todos.deleted && t.todos.deleted.length && e.each(t.todos.deleted, 
            function(t, n) {
                e(".todo[data-guid=" + n + "]").fadeOut(function() {
                    e(this).remove()
                })
            }),
            t.todos.updated && t.todos.updated.length && e.each(t.todos.updated, 
            function(t, n) {
                var s = e(n.html),
                o = s.data("guid"),
                u = e(".todo[data-guid=" + o + "]"),
                a = s.hasClass("completed"),
                f;
                n.list ? f = e(".todolist[data-guid=" + n.list + "]") : f = u.closest(".todolist"),
                a ? u.fadeOut(function() {
                    f.find(".todos-completed").prepend(s),
                    mcw.adjustDate(s),
                    mcw.adjustTodo(s)
                }) : (u.remove(), f.find(".todos-uncompleted").append(s), mcw.adjustDate(s), mcw.adjustTodo(s)),
                mcw.setTodoFilter();
                if (!f.length) return;
                n.position_changed || r.push(s),
                i.push(f[0])
            }),
            e.each(e.unique(i), 
            function(t, r) {
                var i = e(r).find(".todos-uncompleted"),
                s = e(r).find(".todos-completed"),
                o = i.children(".todo");
                completedEls = s.children(".todo"),
                o.sort(n),
                completedEls.sort(n),
                i.append(o),
                s.append(completedEls)
            }),
            e(r).each(function() {
                mcw.highlight(e(this))
            })
        },
        files: function(t) {
            var n = e(".file-list:first");
            if (!n.length || !t.files) return;
            var r = [];
            t.files.created && t.files.created.length && (e.each(t.files.created, 
            function(t, i) {
                var s = e(i);
                n.prepend(s).closest(".day").show(),
                r.push(s)
            }), e(".init.init-file").remove()),
            t.files.deleted && t.files.deleted.length && e.each(t.files.deleted, 
            function(t, n) {
                e(".file[data-guid=" + n + "]").fadeOut(function() {
                    var t = e(this).closest(".file-list");
                    e(this).remove(),
                    t.find(".file").length || t.closest(".day").hide()
                })
            }),
            t.files.updated && t.files.updated.length && e.each(t.files.updated, 
            function(t, i) {
                var s = e(i),
                o = s.data("guid"),
                u = e(".file[data-guid=" + o + "]");
                u.length ? u.replaceWith(s) : n.prepend(s),
                r.push(s)
            });
            var i = e(".workspace .page:last");
            i.is("#page-project") && (n.find(".file:gt(4)").hide(), n.find(".file:lt(5)").show());
            if (t.files.count) {
                var s = e(".link-more-files");
                s.length && s.text(s.text().replace(/\d+/, t.files.count))
            }
        },
        folders: function(t) {
            var n = e(".folders");
            if (!n.length || !t.dirs) return;
            var r = [];
            t.dirs.created && t.dirs.created.length && e.each(t.dirs.created, 
            function(t, i) {
                var s = e(i);
                n.append(s),
                r.push(s)
            }),
            t.dirs.deleted && t.dirs.deleted.length && e.each(t.dirs.deleted, 
            function(t, r) {
                n.find(".link-folder[data-guid=" + r + "]").fadeOut(function() {
                    e(this).remove()
                })
            }),
            t.dirs.updated && t.dirs.updated.length && e.each(t.dirs.updated, 
            function(t, i) {
                var s = e(i),
                o = s.data("guid"),
                u = n.find(".link-folder[data-guid=" + o + "]");
                u.length ? u.replaceWith(s) : n.append(s),
                r.push(s)
            })
        },
        comments: function(t) {
            var n = e(".comments");
            if (!n.length || !t.comments) return;
            var r = [];
            t.comments.created && t.comments.created.length && e.each(t.comments.created, 
            function(t, i) {
                var s = e(i);
                n.find(".comment-form").before(s),
                r.push(s)
            }),
            t.comments.deleted && t.comments.deleted.length && e.each(t.comments.deleted, 
            function(t, r) {
                n.find("#" + r).fadeOut(function() {
                    e(this).remove()
                })
            }),
            t.comments.updated && t.comments.updated.length && e.each(t.comments.updated, 
            function(t, i) {
                var s = e(i),
                o = s.attr("id"),
                u = n.find("#" + o);
                u.length ? u.replaceWith(s) : n.append(s),
                r.push(s)
            }),
            e(r).each(function() {
                mcw.highlight(e(this))
            })
        }
    }
} (jQuery),

//问题反馈，通知，返回顶部 作为全局加载

function(e) {
    e(function() {
        mcw.preloadImages(["/assets/blank-3dbe121a376a181f0fe840fb1daeeb51.gif", "/assets/loading-b82a3823017fd8cdd7a595e38a196189.gif", "/assets/loading-upload-4acb931056ec71d1ad42f71604910d02.gif", "/assets/icon-enter-key-85ea1f3d6deb90d9a48d4cdc5e34298a.png", "/assets/back-to-top-aa485503b416e67b699c82ee4f7638d0.png", "/assets/tiny-loading-e8bd9af828c29751e76f3d73d4f9e005.gif", "/assets/todo-actions-icon-d145055acdde425ecab942a80aaa9bb4.png", "/assets/todo-actions-icon-today-a8bd827d9d61e3a2d8d06303e631d79c.png"]),
        e(document).on("click", "#link-feedback", mcw.feedbackClick).on("click", "*[data-origin-src]", 
        function(t) {
            var n = e(this),
            r = mcw.metaKey(t);
            r ? window.open(n.attr("data-origin-src")) : mcw.viewImage(n)
        }).on("mouseenter", "*[tooltip]", 
        function(t) {
            var n = e(t.currentTarget),
            r = n.attr("tooltip");
            mcw.tooltip(n, r)
        }).on("mouseleave", "*[tooltip]", 
        function(t) {
            var n = e(t.currentTarget);
            mcw.tooltip(n, "hide")
        }).on("beforestack", 
        function(t) {
            e("*[tooltip]").trigger("mouseleave");
            var n = e(".popover-target");
            n.each(function() {
                mcw.popover(e(this), "hide")
            }),
            e(document).trigger("mousedown.notipop");
            var r = !0;
            e(".editor").each(function(t, n) {
                var i = e(n).closest(".form");
                if (i.find(".attachment.uploading:visible").length && !window.confirm("有文件正在上传中，离开当前页将会自动放弃上传，确定要离开？")) {
                    r = !1;
                    return
                }
                i.find(".btn-cancel-update-comment, .btn-cancel-create-comment, #link-cancel-post").click()
            });
            if (!r) return r;
            mcw.scrollLoad(!1),
            e(".header .nav li.active").removeClass("active")
        }).on("afterstack", 
        function(e, t) {
            mcw.adjustDate(t),
            mcw.adjustPermission(t)
        }).on("click", ".noti-pop .noti-pop-list .notice .link", 
        function(t) {
            var n = e(this).closest(".notice").data("notification-guid");
            mcw.readNotification(n)
        }).on("click", ".back-to-top", 
        function(e) {
            e.preventDefault(),
            mcw.scrollTo("body")
        }),
        function() {
            var t = 0,
            n = null,
            r = e(document);
            e(window).bind("resize.backTop", 
            function(n) {
                t = e(this).height()
            }).resize(),
            r.bind("scroll.backTop", 
            function(i) {
                r.scrollTop() > t * 1.5 ? n || (n = e('<a class="back-to-top" href="#" title="返回顶部">返回顶部</a>').appendTo(".page:last")) : n && (n.remove(), n = null)
            })
        } (),
        e("#notification-count").on("mousedown", 
        function() {
            var t = e(".noti-pop");
            return t.hasClass("on") ? e(document).trigger("mousedown.notipop") : (t.addClass("on"), e(document).unbind(".notipop").bind("mousedown.notipop", 
            function(n) {
                var r = e(n.target);
                r.closest(".noti-pop").length || (t.removeClass("on"), e(document).unbind(".notipop"))
            })),
            !1
        }),
        e("#noti-mark-read").click(function(t) {
            t.preventDefault(),
            e("#notification-count").text(0).removeClass("unread"),
            e(".noti-pop-list").empty().hide(),
            e(".noti-pop-empty").show(),
            e(document).trigger("mousedown.notipop"),
            e.ajax({
                url: "/notifications/read_all/"
            })
        }),
        e(".search-wrap").on("click", 
        function(e) {
            return ! 1
        }).on("click", ".link-search", 
        function(t) {
            var n = e(t.currentTarget).closest(".search-wrap"),
            r = e(document),
            i = e("#form-search");
            if (n.hasClass("active")) return;
            return n.addClass("active").find("#txt-search").focus(),
            r.one("click.search", 
            function(e) {
                n.removeClass("active").find("#txt-search").val(""),
                r.unbind("keyup.search")
            }).bind("keyup.search", 
            function(e) {
                e.keyCode == 27 && (e.preventDefault(), r.trigger("click.search"))
            }),
            !1
        }),
        e("#txt-search").bind("keyup DOMAutoComplete", 
        function() {
            e.trim(e(this).val()).length ? e(this).addClass("enter") : e(this).removeClass("enter")
        }).on("keydown", 
        function(t) {
            var n = e(this);
            if (t.which == 13) {
                var r = e.trim(n.val());
                return r ? (e("#page-search-result").empty().addClass("loading"), mcw.stack({
                    url: e("#form-search").attr("action") + "?keyword=" + encodeURIComponent(r),
                    root: !0
                }), n.val(r).get(0).select()) : n.val(""),
                !1
            }
        }),
        mcw.me = {
            guid: e("#member-guid").val(),
            avatar: e("#member-avatar").val(),
            admin: e("#member-admin").length > 0 ? !0: !1,
            owner: e("#member-owner").length > 0 ? !0: !1
        };
        var t = e(".workspace .page:last"),
        n = t.attr("id");
        n && mcw.pages[n] && mcw.pages[n].init(t),
        mcw.me.guid && mcw.live(),
        mcw.me.avatar && mcw.preloadImages([mcw.me.avatar]),
        mcw.adjustDate(t),
        mcw.adjustPermission(t)
    }),
    e.extend(window.mcw, {
        pages: {},
        feedbackClick: function(e) {
            e.preventDefault();
            var t = mcw.dialog({
                el: mcw.template("tpl-feedback")
            });
            t.find("#txt-feedback").focus(),
            t.find("#link-cancel-feedback").click(function(e) {
                e.preventDefault(),
                mcw.dialog("hide")
            }),
            t.find("form.form-feedback").on("ajax:success", 
            function(e) {
                mcw.message({
                    msg: "感谢您的反馈，我们会尽快处理。"
                })
            })
        },
        d18n: {
            support: function() {
                return e.browser.safari ? !!window.Notification: e.browser.chrome ? !!window.webkitNotifications: !1
            },
            permitted: function() {
                if (!mcw.d18n.support()) return ! 1;
                if (e.browser.safari) return Notification.permissionLevel() === "granted";
                if (e.browser.chrome) return webkitNotifications.checkPermission() == 0
            },
            requestPermission: function(t) {
                if (!mcw.d18n.support()) return;
                t = t || 
                function() {},
                e.browser.safari ? Notification.requestPermission(t) : e.browser.chrome && webkitNotifications.requestPermission(t)
            },
            show: function(t) {
                if (!mcw.d18n.support()) return;
                var n = null;
                e.browser.safari ? n = new Notification(t.title, t.content) : e.browser.chrome && (n = webkitNotifications.createNotification("/assets/icon-tower-479344ffcf99c7852fa40955302e15ac.png", t.title, t.content)),
                n.onclick = function() {
                    mcw.stack({
                        url: t.url,
                        root: !0,
                        parent: {
                            name: "全部通知",
                            url: "/teams/" + t.team + "/notifications/"
                        }
                    }),
                    mcw.readNotification(t.guid),
                    window.focus(),
                    this.cancel()
                },
                mcw.playAudio("notification", "/assets/notification-cc3cfeed3b317b42296450911fae479a.mp3"),
                n.show(),
                setTimeout(function() {
                    n && n.cancel()
                },
                1e4)
            }
        },
        metaKey: function(e) {
            var t = /Mac/.test(navigator.userAgent);
            return t ? e.metaKey: e.ctrlKey
        },
        playNotifySound: function() {
            var t = e("#notify-sound");
            t.length || (t = e('<audio id="notify-sound">						<source src="/assets/notification-cc3cfeed3b317b42296450911fae479a.mp3" type="audio/mpeg" />					</audio>').appendTo("body")),
            t = t.get(0),
            e.browser.chrome && t.load(),
            t.play()
        },
        prettyDate: function(e, t) {
            var n = moment(e, t),
            r = moment(),
            i = r.diff(n);
            if (i < 0) return "刚刚";
            if (n.diff(moment().add("d", -1).startOf("day")) < 0) return n.format("M月D日");
            if (n.diff(moment().startOf("day")) < 0) return "昨天";
            if (i < 6e4) return "刚刚";
            if (i >= 6e4 && i < 36e5) return Math.round(i / 6e4).toFixed(0) + "分钟前";
            if (i >= 36e5 && i < 864e5) return Math.round(i / 36e5).toFixed(0) + "小时前"
        },
        readNotification: function(t) {
            var n = e("#notification-count"),
            r = Math.max(0, n.text() * 1 - 1);
            n.toggleClass("unread", r > 0).text(r);
            var i = e(".noti-pop-list");
            i.find(".notice[data-notification-guid=" + t + "]").remove(),
            i.find(".notice").length || (i.html("").hide(), e(".noti-pop-empty").show())
        },
        adjustDate: function(t) {
            e("[data-abstime]", t).each(function() {
                var t = e(this);
                t.text(mcw.prettyDate(t.data("abstime"), "YYYY-MM-DD HH:mm:ss Z")).removeAttr("data-abstime")
            })
        },
        adjustPermission: function(t) {
            t = e(t).is("[data-visible-to]") ? e(t
            ) : e("[data-visible-to]", t),
            t.each(function() {
                var t = e(this).hide(),
                n = t.data("visible-to").split(",");
                mcw.me.admin && e.inArray("admin", n) > -1 && t.show();
                if (e.inArray("creator", n) > -1) {
                    var r = t.closest("[data-author-guid]");
                    r.length && mcw.me.guid == r.data("author-guid") && t.show()
                }
            })
        }
    });
    if (e.ui && e.ui.sortable) {
        var t = e.ui.sortable.prototype._mouseStart;
        e.ui.sortable.prototype._mouseStart = function(e, n, r) {
            this._trigger("beforestart", e, this._uiHash()),
            t.apply(this, [e, n, r])
        };
        var n = e.fn.scrollParent;
        e.fn.scrollParent = function() {
            var t = n.apply(this, arguments);
            return t.is("html") ? e(document) : t
        }
    }
    if (e.ui && e.ui.draggable) {
        var r = e.ui.draggable.prototype._mouseStart;
        e.ui.draggable.prototype._mouseStart = function(e, t, n) {
            this._trigger("beforestart", e, this._uiHash()),
            r.apply(this, [e, t, n])
        }
    }
} (jQuery),

//项目内容页各类控制 https://tower.im/projects/06153e5a411c416c8981e3879466f087/

function(e) {
    function t(t) {
        e(".todolist-form.new").show().find(".todolist-name").focus(),
        e(".init-todo-empty, .init-todo-completed").hide()
    }
    function n(t) {
        e(".todolist-form.new").find(".todolist-name").val("").removeClass("error").end().hide(),
        e(".init-todo-empty, .init-todo-completed").show()
    }
    function i(t) {
        var n = e(this).data("request-members");
        mcw.members || (mcw.members = {}),
        mcw.members[n] ? s(".todo-assignee[disabled]", mcw.members[n]) : r || (r = e.ajax({
            url: "/projects/" + n + "/mates",
            type: "get",
            success: function(e) {
                mcw.members[n] = e,
                s(".todo-assignee[disabled]", e),
                r = null
            }
        }))
    }
    function s(t, n) {
        e(t).each(function() {
            var t = e(this);
            t.is("select") || (t = t.find("select"));
            var r = t.find("option.loading");
            if (r.length < 1) return;
            n.length && e.each(n, 
            function() {
                e("<option />").text(this.nickname).val(this.guid).insertAfter(r)
            }),
            r.remove(),
            e("<option disabled>-----</option>").prependTo(t);
            var i = t.find("option[value=" + mcw.me.guid + "]");
            i.text(i.text() + " (我自己)").prependTo(t),
            t.val(t.data("selected-member") || -1).removeAttr("data-selected-member").removeAttr("disabled");
            var s = i.next(),
            o = s.next();
            o.is("[disabled]") && (s.remove(), o.remove())
        })
    }
    function o(t) {
        function h() {
            if (n.hasClass("link-todo-due")) {
                var t = i.find(".todo-due-date").val();
                n.find(".due").text(t || "没有截止时间").attr("data-date", t || ""),
                n.next(".todo-due-date").val(t ? moment(t).valueOf() : "")
            } else {
                var r = n.closest(".todo"),
                s = r.find(".todo-content a").text(),
                o = i.find(".todo-assignee").val(),
                t = i.find(".todo-due-date").val(),
                u = {
                    todo_content: s,
                    assignee_guid: o,
                    due_at: t ? moment(t).valueOf() : undefined
                };
                mcw.tinyLoading(n),
                e.ajax({
                    url: r.find(".todo-actions .edit").attr("href"),
                    data: u,
                    success: function(t) {
                        var n = e(t.html);
                        r.replaceWith(n),
                        mcw.adjustTodo(n),
                        mcw.setTodoFilter(),
                        e(".workspace .page:last").trigger("todoupdate", [n])
                    }
                })
            }
            mcw.popover(n, "hide")
        }
        var n = e(this);
        if (n.hasClass("disabled")) return;
        var r = n.data("popover");
        if (r) mcw.popover(n, "hide");
        else {
            var i = mcw.template("tpl-todo-popover"),
            o = n.find(".due").attr("data-date") || null,
            u = i.find(".todo-due-date").val(o);
            if (n.hasClass("link-todo-due")) i.find(".select-assignee").remove(),
            i.find("h3").remove();
            else {
                var a = n.find(".assignee").attr("data-guid") || -1,
                f = n.closest(".todo").data("project-guid"),
                l = i.find(".todo-assignee").on("change", 
                function(e) {
                    h()
                });
                l.attr("data-selected-member", a),
                mcw.members[f] && l.is("[disabled]") && s(l, mcw.members[f])
            }
            i.find(".shortcuts a").click(function(t) {
                t.preventDefault();
                var n = e(this),
                r = "";
                n.hasClass("today") ? r = moment().format("YYYY-MM-DD") : n.hasClass("tomorrow") ? r = moment().add("days", 1).format("YYYY-MM-DD") : n.hasClass("this-week") ? r = moment().day(5).format("YYYY-MM-DD") : n.hasClass("next-week") && (r = moment().day(12).format("YYYY-MM-DD")),
                c.setSelectedDate(r),
                h()
            }),
            o ? i.find(".no-due-date").click(function(e) {
                e.preventDefault(),
                c.setSelectedDate(null),
                h()
            }) : i.find(".no-due-date").remove();
            var c = mcw.datepicker(u, {
                inline: !0,
                onSelect: function(e) {
                    h()
                }
            });
            mcw.popover(n, {
                content: i
            })
        }
        return ! 1
    }
    function u(t, n) {
        var r = e(n.html);
        e(".todolists").prepend(r),
        e(t.target).find(".btn-cancel-todolist").click().end().find(".todolist-name").val(""),
        r.find(".btn-new-todo").click(),
        mcw.sortTodos(r.find(".todos-uncompleted")),
        e(".init-todo-empty, .init-todo-completed").remove(),
        e(".filters-wrap").show()
    }
    function a(t) {
        t.keyCode === 13 ? (t.preventDefault(), e(t.currentTarget).find("button[type=submit]").click()) : t.keyCode === 27 && (t.preventDefault(), e(t.currentTarget).find(".btn-cancel-todolist, .btn-cancel-update-todolist").click())
    }
    function f(t) {
        t.preventDefault();
        var n = e(t.currentTarget),
        r = n.parent(),
        i = r.next(".todo-form.new");
        if (!i.length) {
            i = mcw.template("tpl-todo-form").insertAfter(r),
            i.addClass("new").find("form").attr("action", n.data("url")).find("textarea").autosize().end().find(".edit-buttons").remove();
            var o = n.data("request-members"),
            u = i.find(".todo-assignee").attr("data-selected-member", "-1");
            mcw.members[o] && u.is("[disabled]") && s(u, mcw.members[o])
        }
        i.show().find("textarea").focus(),
        r.hide()
    }
    function l(t) {
        var n = e(t.currentTarget),
        r = n.parents(".todo-form.new"),
        i = r.prev();
        r.hide().find(".todo-content").val("").removeClass("error"),
        i.show()
    }
    function c(t, n) {
        var r = e(n.html),
        i = e(t.target);
        i.find("textarea.todo-content").val("").focus().end().closest(".todolist").find(".todos-uncompleted").append(r),
        mcw.setTodoFilter(),
        mcw.adjustTodo(r)
    }
    function h(t, n, r) {
        e(t.target).closest(".page").attr("id") == "page-todolist" && mcw.globalLoading("正在删除任务列表...")
    }
    function p(t, n) {
        var r = e(t.target).closest(".todolist");
        r.closest(".page").attr("id") == "page-todolist" ? (mcw.globalLoading("hide"), mcw.stack({
            url: "/projects/" + r.data("project-guid") + "/",
            root: !0
        })) : r.fadeOut(function() {
            e(this).remove()
        })
    }
    function d(t, n) {
        var r = e(n.html),
        i = e(t.target).closest(".title");
        i.hide().after(r),
        mcw.selectText(r.find(".todolist-name").focus())
    }
    function v(t) {
        e(t.currentTarget).parents(".todolist-form.edit").prev(".title").show().end().remove()
    }
    function m(t) {
        var n = e(this).data("url");
        e.ajax({
            url: n
        })
    }
    function g(t, n, r, i) {
        var s = e(t.target),
        o = s.closest(".todolist").find(".title h4 a");
        o.text(s.find("input.todolist-name").val()).closest(".title").show(),
        s.parent(".todolist-form.edit").remove()
    }
    function y(t, n) {
        if (n.success) {
            var r = e(this),
            i = r.parents(".todolist:first"),
            s = i.closest(".page");
            s.is("#page-todolist") ? i.addClass("todolist-completed") : i.fadeOut(function() {
                if (s.is("#page-todolists")) {
                    var t = e(".todolists-completed");
                    t.find("a").length && t.append(","),
                    t.append(i.find(".title h4 a"))
                }
                e(this).remove()
            })
        }
    }
    function b(t, n) {
        if (n.success) {
            var r = e(this),
            i = r.parents(".todolist:first");
            i.removeClass("todolist-completed")
        }
    }
    function w(t, n, r) {
        e(t.target).closest(".page").attr("id") == "page-todo" && mcw.globalLoading("正在删除任务...")
    }
    function E(t, n) {
        var r = e(t.target).closest(".todo");
        r.closest(".page").is("#page-todo") ? (mcw.globalLoading("hide"), mcw.stack({
            url: "/projects/" + r.data("project-guid") + "/",
            root: !0
        })) : r.fadeOut(function() {
            r.remove(),
            e(".workspace .page:last").trigger("todoremove", [r])
        })
    }
    function S(t) {
        t.preventDefault();
        var n = e(t.currentTarget),
        r = n.closest(".todo"),
        i = r.next(".todo-form.edit");
        if (!i.length) {
            i = mcw.template("tpl-todo-form").insertAfter(r),
            i.addClass("edit").find("form").attr("action", n.attr("href")).end().find(".create-buttons").remove();
            var o = n.data("request-members"),
            u = i.find(".todo-assignee").attr("data-selected-member", r.find(".assignee").data("guid") || -1);
            mcw.members[o] && u.is("[disabled]") && s(u, mcw.members[o])
        }
        var a = r.find(".todo-assign-due .due").data("date") || null;
        i.find(".link-todo-due .due").text(a || "没有截止时间").attr("data-date", a),
        a && i.find("input[name=due_at]").val(moment(a).valueOf());
        var f = i.find("textarea").val(r.find(".todo-content a").text());
        mcw.selectText(f),
        i.show().find("textarea").autosize(),
        r.hide()
    }
    function x(t) {
        var n = e(t.currentTarget).closest(".todo-form.edit"),
        r = n.find(".link-todo-due"),
        i = r.data("popover");
        i && mcw.popover(r, "hide"),
        n.prev(".todo").show().end().remove()
    }
    function T(t, n, r, i) {
        var s = e(t.target).parents(".todo-form.edit"),
        o = s.prev(".todo"),
        u = e(n.html),
        a = n.assigneeGuid,
        f = e("#page-member");
        s.remove(),
        o.replaceWith(u),
        mcw.setTodoFilter(),
        mcw.adjustTodo(u),
        mcw.adjustDate(u),
        e(".workspace .page:last").trigger("todoupdate", [u]);
        var l = u.find(".todo-content");
        mcw.highlight(l, undefined, l.css("backgroundColor"))
    }
    function C(t) {
        var n = e(t.target),
        r = n.is(":checked"),
        i = n.closest(".todo"),
        s = i.closest(".todolist"),
        o = i.data("guid"),
        u = i.data("project-guid"),
        a = "/projects/" + u + "/todos/" + o + (r ? "/complete/": "/reopen/");
        N && (N.abort(), N = null),
        N = e.ajax({
            url: a,
            dataType: "json",
            type: "post",
            success: function(t) {
                function a() {
                    e("#page-todo").length ? i.replaceWith(n) : r ? (i.fadeTo(200, 0), i.slideUp(200, 
                    function() {
                        i.remove(),
                        n.prependTo(o),
                        e(".workspace .page:last").trigger("todocomplete", [i])
                    })) : i.fadeOut(function() {
                        i.remove(),
                        n.appendTo(o),
                        mcw.setTodoFilter(),
                        e(".workspace .page:last").trigger("todoreopen", [i])
                    }),
                    mcw.adjustDate(n),
                    mcw.adjustTodo(n)
                }
                var n = e(t.html),
                o = r ? s.find(".todos-completed") : s.find(".todos-uncompleted"),
                u = e(".runner.on", i);
                u.length ? (mcw.transitionEnd(i, 
                function() {
                    setTimeout(function() {
                        a()
                    },
                    500)
                }), u.removeClass("on")) : a()
            }
        })
    }
    function k(t) {
        t.keyCode === 13 && !mcw.metaKey(t) ? (t.preventDefault(), e(t.currentTarget).find("button[type=submit]").click()) : t.keyCode === 27 && (t.preventDefault(), e(t.currentTarget).find(".btn-cancel-todo, .btn-cancel-update-todo").click())
    }
    e(function() {
        var r = e(".wrapper");
        r.on("click", ".btn-new-todolist", t).on("click", ".btn-cancel-todolist", n).on("ajax:success", ".todolist-form.new .form", u).on("keydown", ".todolist-form", a).on("validate", ".todolist-form form", 
        function(e, t, n) {
            var r = {
                valid: !0
            };
            return t ? t.length > 255 && (r.valid = !1, r.errorMsg = "", mcw.message({
                msg: "任务列表名称最长255个字符"
            })) : (r.valid = !1, r.errorMsg = ""),
            r
        }),
        r.on("click", ".btn-new-todo", f).on("click", ".btn-cancel-todo", l).on("click", ".link-todo-due", o).on("ajax:success", ".todo-form.new .form", c).on("keydown", ".todo-form", k).on("validate", ".todo-form form", 
        function(e, t, n) {
            var r = {
                valid: !0
            };
            return t ? t.length > 1e3 && (r.valid = !1, r.errorMsg = "", mcw.message({
                msg: "任务内容最长1000个字符"
            })) : (r.valid = !1, r.errorMsg = ""),
            r
        }),
        r.on("ajax:success", ".todo .todo-actions .run", 
        function(t, n) {
            function o() {
                var t = e(".runner", r).removeClass("on");
                i.replaceWith(r),
                setTimeout(function() {
                    t.addClass("on")
                },
                10),
                mcw.adjustTodo(r)
            }
            var r = e(n.html),
            i = e(t.target).closest("li.todo"),
            s = e.grep(e("li.todo.running:has(.assignee)"), 
            function(t, n) {
                return e(".assignee", t).data("guid") === mcw.me.guid ? !0: !1
            });
            i.hasClass("hl") && r.addClass("hl"),
            s.length ? (s = e(s[0]), mcw.transitionEnd(s, o), s.removeClass("running").find(".runner").removeClass("on")) : o()
        }).on("ajax:success", ".todo .todo-actions .pause", 
        function(t, n) {
            var r = e(n.html),
            i = e(t.target).closest("li.todo");
            i.hasClass("hl") && r.addClass("hl"),
            mcw.transitionEnd(i, 
            function() {
                i.replaceWith(r),
                mcw.adjustTodo(r)
            }),
            e(".runner", i).removeClass("on")
        }),
        r.on("ajax:success", ".todolist-actions .del", p).on("ajax:beforeSend", ".todolist-actions .del", h).on("ajax:success", ".todolist-actions .edit", d).on("click", ".btn-cancel-update-todolist", v).on("click", ".todolist-stick-checkbox", m).on("ajax:success", ".todolist-form.edit .form", g).on("ajax:success", ".todolist-actions .close", y).on("ajax:success", ".todolist-actions .reopen", b),
        r.on("ajax:success", ".todo-actions .del", E).on("ajax:beforeSend", ".todo-actions .del", w).on("click", ".todo-actions .edit", S).on("click", ".btn-cancel-update-todo", x).on("ajax:success", ".todo-form.edit .form", T).on("click", ".todo .todo-assign-due", o).on("mouseenter", "[data-request-members]", i),
        r.on("click", ".todo input[type=checkbox]", C),
        r.on("change", ".filters select", 
        function(t) {
            var n = e(t.currentTarget),
            r = n.val();
            n.is("#filter-assignee") ? localStorage.todo_hl_assignee = r: n.is("#filter-due") && (localStorage.todo_hl_due = r),
            mcw.setTodoFilter()
        }),
        mcw.adjustTodo()
    });
    var r = null,
    N;
    e.extend(mcw, {
        sortTodos: function(t) {
            var t = t || e(".todos-uncompleted");
            if (!t.is(".todos-uncompleted")) return;
            t.sortable({
                axis: "y",
                handle: ".todo-content",
                items: ".todo",
                cursor: "pointer",
                cursorAt: {
                    left: 30,
                    top: 20
                },
                tolerance: "pointer",
                helper: "clone",
                placeholder: "todo-placeholder",
                connectWith: ".todos-uncompleted",
                start: function(e, n) {
                    t.addClass("sorting");
                    var r = (n.helper.outerHeight(!0) - 2) / 2;
                    n.placeholder.css({
                        height: r,
                        marginBottom: r
                    })
                },
                stop: function(n, r) {
                    var i = r.item,
                    s = i.closest(".todos").find(".todo").map(function() {
                        return e(this).data("guid")
                    }).get(),
                    o = i.closest(".todolist").data("guid"),
                    u = i.data("guid"),
                    a = i.data("project-guid");
                    e.ajax({
                        url: "/projects/" + a + "/todos/" + u + "/reorder/",
                        data: {
                            list_guid: o,
                            guids: s.join(",")
                        }
                    }),
                    t.removeClass("sorting")
                }
            })
        },
        sortTodolists: function(t) {
            var t = t || e(".todolists");
            if (!t.is(".todolists")) return;
            t.sortable({
                axis: "y",
                handle: ".title h4 a",
                items: ".todolist",
                cursor: "pointer",
                helper: "clone",
                tolerance: "pointer",
                placeholder: "todolist-placeholder",
                beforestart: function(e, t) {
                    var n = t.item.parent(".todolists"),
                    r = n.children(".todolist"),
                    i = t.item.prevAll(".todolist"),
                    s = t.item.nextAll(".todolist"),
                    o = n.outerHeight(),
                    u = 54,
                    a = t.item.offset().top - n.offset().top,
                    f = a - i.length * u,
                    l = o - r.length * u - f;
                    r.addClass("collapse").children(":not(.title)").hide(),
                    n.css({
                        paddingTop: f,
                        paddingBottom: l
                    })
                },
                stop: function(e, t) {
                    var n = t.item;
                    n.parent().css({
                        paddingTop: 0,
                        paddingBottom: 0
                    }).find(".todolist").removeClass("collapse").children("ul").show(),
                    mcw.scrollTo(n),
                    setTimeout(function() {
                        mcw.highlight(n)
                    },
                    500)
                },
                update: function(t, n) {
                    var r = n.item,
                    i = r.parent().find(".todolist:visible").map(function() {
                        return e(this).data("guid")
                    }).get().reverse(),
                    s = r.data("guid"),
                    o = r.data("project-guid"),
                    u = {
                        guids: i.join(",")
                    };
                    e.ajax({
                        url: "/projects/" + o + "/lists/" + s + "/reorder/",
                        data: u
                    })
                }
            })
        },
        setTodoFilter: function() {
            if (!e(".filters").length) return;
            var t = e(".todos-uncompleted .todo");
            if (!t.length) return;
            var n = !0,
            r = !0,
            i = localStorage.todo_hl_assignee || e("#filters-assignee").val(),
            s;
            localStorage.todo_hl_due ? s = parseInt(localStorage.todo_hl_due) : s = parseInt(e("#filter-due").val()),
            t.filter(".hl").removeClass("hl");
            switch (i) {
            case "0":
                n = !1;
                break;
            case "-1":
                t = e.grep(t, 
                function(t, n) {
                    return ! e(".assignee", t).length
                });
                break;
            default:
                t = e.grep(t, 
                function(t, n) {
                    return e(".assignee", t).data("guid") === i
                })
            }
            var o = moment(),
            u = moment();
            switch (s) {
            case - 1: r = !1;
                break;
            case 0:
                u = u.sod(),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return n && moment(n).diff(u) == 0 ? !0: !1
                });
                break;
            case 1:
                u = u.add("days", 1).sod(),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return n && moment(n).diff(u) == 0 ? !0: !1
                });
                break;
            case 2:
                o.day() == 0 ? (o = o.day( - 6).sod(), u = u.sod()) : (o = o.day(1).sod(), u = u.day(7).sod()),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return n && moment(n).diff(u) <= 0 && moment(n).diff(o) >= 0 ? !0: !1
                });
                break;
            case 3:
                o = o.add("weeks", 1),
                u = u.add("weeks", 1),
                o.day() == 0 ? (o = o.day( - 6).sod(), u = u.sod()) : (o = o.day(1).sod(), u = u.day(7).sod()),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return n && moment(n).diff(u) <= 0 && moment(n).diff(o) >= 0 ? !0: !1
                });
                break;
            case 4:
                u = u.add("days", -1).sod(),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return n && moment(n).diff(u) <= 0 ? !0: !1
                });
                break;
            case 5:
                u = u.add("weeks", 2),
                u.day() == 0 ? u = u.day( - 6).sod() : u = u.day(1).sod(),
                t = e.grep(t, 
                function(t) {
                    var n = e(".due", t).data("date");
                    return ! n || moment(n).diff(u) >= 0 ? !0: !1
                });
                break;
            default:

            }
            n || r ? (e(t).addClass("hl"), e(".filter-desc").show()) : e(".filter-desc").hide(),
            localStorage.todo_hl_assignee = i,
            localStorage.todo_hl_due = s
        },
        initTodoFilter: function() {
            localStorage.todo_hl_assignee ? e("#filter-assignee").val(localStorage.todo_hl_assignee) : e("#filter-assignee").length && (localStorage.todo_hl_assignee = e("#filter-assignee").val()),
            localStorage.todo_hl_due && e.isNumeric(localStorage.todo_hl_due) ? e("#filter-due").val(localStorage.todo_hl_due) : e("#filter-due").length && (localStorage.todo_hl_due = e("#filter-due").val() * 1),
            mcw.setTodoFilter()
        },
        adjustTodoFilter: function() {
            var t = e("#filter-assignee"),
            n = t.find("option[value=" + mcw.me.guid + "]");
            n.text(n.text().replace(" (我自己)", "") + " (我自己)").insertAfter(t.find("[value=0]").next())
        },
        adjustTodo: function(t) {
            var n = e(t).is(".todo") ? e(t) : e(".todo", t),
            r = moment().startOf("day").toDate();
            n.find(".todo-assign-due").each(function(t, n) {
                var i = e(this).find(".due").data("date");
                if (i) {
                    var s = moment(i).toDate();
                    s < r && e(this).addClass("delay")
                }
            }),
            n.each(function(t, n) {
                var n = e(n),
                r = e(".assignee", n); (!r.length || r.data("guid") !== mcw.me.guid) && n.find(".run, .pause").remove()
            });
            var i = e(".workspace .page:last");
            i.is("[data-archived], [data-locked], [data-deleted]") && (n.find("input:checkbox").attr("disabled", "disabled"), n.find(".todo-assign-due").addClass("disabled"))
        }
    })
} (jQuery),

//讨论内容页编辑器点击后展开 https://tower.im/projects/06153e5a411c416c8981e3879466f087/messages/48ff6ec4535c4dc2a69a9cb723442454/

function(e) {
    function t(t, n) {
        e(t.target).parents(".comment:first").fadeOut(function() {
            e(this).remove()
        })
    }
    function n(t, n) {
        var r = e(n.html),
        i = e("textarea.comment-content", r),
        s = e(t.target).parents(".comment:first");
        s.hide(),
        r.insertAfter(s),
        mcw.editor(i)
    }
    function r(t) {
        var n = e(this).closest(".form"),
        r = n.find(".editor").data("editor");
        r.destroyEditor(),
        e(t.currentTarget).parents(".comment-form.edit").prev().show().end().remove()
    }
    function i(t, n, r, i) {
        var s = e(t.target).parents(".comment-form.edit"),
        o = s.prev(),
        u = e(n.html).hide();
        o.replaceWith(u),
        u.show(),
        s.remove(),
        mcw.adjustDate(u),
        mcw.adjustPermission(u)
    }
    function s(t) {
        var n = e(t.currentTarget).closest(".comment-form.new"),
        r = n.find(".editor").data("editor");
        r.destroyEditor(),
        e(".notify, .form-buttons, .fake-textarea", n).toggle()
    }
    e(function() {
        e(".wrapper").on("click", ".form-new-comment .fake-textarea", 
        function(t) {
            t.preventDefault();
            var n = e(this).hide().parents(".form:first");
            e(".notify, .form-buttons", n).show(),
            n.find(".member-list input:checked").length ? (n.find(".receiver, .change-notify").show(), n.find(".select-all, .notify-title + .form-field").hide()) : (n.find(".receiver, .change-notify").hide(), n.find(".select-all, .notify-title + .form-field").show());
            var r = e("textarea.comment-content", n);
            mcw.editor(r)
        }).on("ajax:success", ".comment-actions .del", t).on("ajax:success", ".comment-actions .edit", n).on("click", ".btn-cancel-update-comment", r).on("ajax:success", ".comment-form.edit .form", i).on("click", ".btn-cancel-create-comment", s).on("ajax:success", ".comment-form.new .form", 
        function(t, n) {
            var r = e(n.html).hide(),
            i = e(t.target).closest(".comment-form.new"),
            s = i.find(".editor").data("editor");
            r.insertBefore(i).fadeIn(),
            s.destroyEditor(),
            e(".notify, .form-buttons, .fake-textarea", i).toggle(),
            mcw.adjustCCList(),
            mcw.adjustDate(r),
            mcw.adjustPermission(r)
        })
    }),
    e.extend(mcw, {
        adjustCCList: function() {
            var t = e(".comment-form, .form-new-discussion"),
            n = t.find(".receiver"),
            r = t.find(".member-list");
            r.find("input[value=" + mcw.me.guid + "]:checkbox").closest("li").remove();
            if (!n.length) return;
            n.empty();
            var i = r.find("input:checked");
            if (i.length) {
                var s = "";
                i.each(function(t, n) {
                    var r = e(this),
                    i = r.val(),
                    o = r.parent().text();
                    t > 0 && (s += '<span class="sp">, </span>'),
                    s += '<span data-guid="' + i + '">' + o + "</span>"
                }),
                n.html(s)
            } else n.hide().next(".change-notify").hide().next(".select-all").show()
        },
        adjustAuthor: function() {
            var t = e(".comment-form, .form-new-discussion");
            t.find(".avatar-wrap").attr("href", "/members/" + mcw.me.guid),
            t.find("img.avatar").attr("src", mcw.me.avatar)
        }
    })
} (jQuery),

//项目内容页标记处理及文件上传 https://tower.im/projects/06153e5a411c416c8981e3879466f087/
function(e) {
    function t(t, n, r) {
        e(t).each(function() {
            var t = e(this),
            i = t.find(".label-list").empty();
            e.each(n, 
            function() {
                var t = e("<a/>", {
                    href: "javascript:;",
                    "class": "folder-item",
                    text: this.name
                }).attr("data-guid", this.guid).appendTo(i);
                this.guid == r && t.addClass("current")
            }),
            t.find(".txt-new-label").removeAttr("disabled")
        })
    }
    function n(t, n) {
        var r;
        e.each(mcw.folders[n], 
        function(e) {
            this.guid == t && (r = e)
        }),
        mcw.folders[n].splice(r, 1)
    }
    e(function() {
        e(document).on("ajax:success", ".file .link-delete", 
        function(t) {
            var n = e(this).closest(".file");
            n.fadeOut(function() {
                var t = e(".workspace .page:last");
                n.trigger("filedelete", [n]),
                n.remove()
            })
        }).on("click", ".file .link-label", 
        function(n) {
            n.preventDefault();
            var r = e(this),
            i = r.data("popover");
            if (r.hasClass("loading") || r.hasClass("disabled")) return;
            if (i) mcw.popover(r, "hide");
            else {
                var s = mcw.template("tpl-label-popover"),
                o = s.find(".label-list").data("project-guid");
                mcw.folders[o] && t(s, mcw.folders[o], r.data("guid")),
                r.hasClass("no-label") ? s.find(".remove-label").hide() : s.find("h3").text("更换标签"),
                mcw.popover(r, {
                    content: s
                })
            }
            return ! 1
        }).on("mousedown", ".label-popover .link-remove-label", 
        function(t) {
            t.preventDefault();
            var r = e(this),
            i = r.closest(".popover"),
            s = i.data("target"),
            o = s.data("guid");
            mcw.popover(s, "hide"),
            s.addClass("loading"),
            e.ajax({
                url: s.data("url"),
                data: {
                    to: !1
                },
                success: function(t) {
                    s.text("标记文件").addClass("no-label").removeClass("loading").data("guid", "");
                    if (t.deleted) {
                        var r = i.find(".label-list").data("project-guid");
                        n(t.deleted, r)
                    }
                    if (o) {
                        var u = e(".file-links .link-folder[data-guid=" + o + "] span"),
                        a = u.text().match(/\d+/g);
                        a = a ? Math.max(0, a[0] * 1 - 1) : 0,
                        u.text("(" + a + ")")
                    }
                }
            })
        }).on("click", ".label-popover .folder-item", 
        function(t) {
            t.preventDefault();
            var r = e(this),
            i = r.closest(".popover"),
            s = i.data("target"),
            o = s.data("guid"),
            u = r.data("guid");
            mcw.popover(s, "hide"),
            s.addClass("loading"),
            e.ajax({
                url: s.data("url"),
                data: {
                    to: u
                },
                success: function(t) {
                    s.text(r.text()).removeClass("no-label").removeClass("loading").data("guid", r.data("guid"));
                    if (t.deleted) {
                        var a = i.find(".label-list").data("project-guid");
                        n(t.deleted, a)
                    }
                    if (o) {
                        var f = e(".file-links .link-folder[data-guid=" + o + "] span"),
                        l = f.text().match(/\d+/g);
                        l = l ? Math.max(0, l[0] * 1 - 1) : 0,
                        f.text("(" + l + ")")
                    }
                    var c = e(".file-links .link-folder[data-guid=" + u + "] span"),
                    l = c.text().match(/\d+/g);
                    l = l ? l[0] * 1 + 1: 0,
                    c.text("(" + l + ")")
                }
            })
        }).on("keydown", ".label-popover .txt-new-label", 
        function(t) {
            if (t.which != 13) return;
            var n = e(this),
            r = n.val();
            if (!r) {
                n.addClass("error");
                return
            }
            n.removeClass("error");
            var i = n.closest(".popover"),
            s = i.data("target"),
            o = s.data("guid");
            mcw.popover(s, "hide"),
            s.addClass("loading"),
            e.ajax({
                url: s.data("url"),
                data: {
                    name: r
                },
                success: function(t) {
                    s.text(r).removeClass("no-label").removeClass("loading").data("guid", t.guid);
                    var u = i.find(".label-list").data("project-guid");
                    mcw.folders[u].splice(0, 0, {
                        name: t.name,
                        guid: t.guid
                    }),
                    n.val("");
                    if (o) {
                        var a = e(".file-links .link-folder[data-guid=" + o + "] span"),
                        f = a.text().match(/\d+/g);
                        f = f ? Math.max(0, f[0] * 1 - 1) : 0,
                        a.text("(" + f + ")")
                    }
                    e("<a/>", {
                        "class": "link-folder",
                        "data-stack": "",
                        "data-guid": t.guid,
                        href: "/projects/" + u + "/dirs/" + t.guid + "/"
                    }).append(t.name + "(<span>1</span>)").insertAfter(".file-links .link-more-files")
                }
            }),
            e(document).off(".folder")
        }).on("mouseover", "[data-request-labels]", 
        function() {
            var n = e(this),
            r = n.data("request-labels");
            mcw.folders || (mcw.folders = {}),
            mcw.folders[r] ? t(".label-popover", mcw.folders[r], n.data("guid")) : e.ajax({
                url: "/projects/" + r + "/folders.json",
                type: "get",
                success: function(e) {
                    mcw.folders[r] = e,
                    t(".label-popover", e, n.data("guid"))
                }
            }),
            n.removeAttr("data-request-labels").attr("data-project-guid", r)
        })
    }),
    e.extend(window.mcw, {
        initUpload: function(t) {
            var n = t.btn ? e(t.btn) : e(".btn-upload-file"),
            r = t.container ? e(t.container) : e(".file-list"),
            i = n.data("url"),
            s;
            s = mcw.upload(n, {
                action: i,
                beforeUpload: function(n) {
                    var i = mcw.template("tpl-upload-file", {
                        id: n.id,
                        name: n.name
                    });
                    r.prepend(i),
                    mcw.loadImage(n.obj, 
                    function(e) {
                        if (!e) {
                            var t = "/assets/file_icons/",
                            r = t + "file_extension_" + n.extension + ".png";
                            mcw.loadImage(r, 
                            function(e) {
                                e ? i.find(".file-thumb img").attr("src", e.src) : i.find(".file-thumb img").attr("src", t + "file_extension_others.png")
                            })
                        } else i.find(".file-thumb").attr({
                            "data-origin-src": e.src,
                            "data-origin-name": n.name,
                            "data-origin-size": e.width + "," + e.height
                        }).find("img").attr("src", e.src)
                    });
                    if (window.File && window.FileList) {
                        var o = 0;
                        n.size >= 1048576 ? o = (n.size / 1048576).toFixed(1) + "M": o = (n.size / 1024).toFixed(0) + "K"
                    } else i.addClass("ie");
                    i.find(".size").text(o).end().find(".link-cancel").text("取消上传").attr("title", "取消上传").click(function() {
                        var e = i.attr("fileid");
                        e && i.hasClass("uploading") && s.cancel(e),
                        i.fadeOut(function() {
                            t.onCancel && t.onCancel(i)
                        })
                    }),
                    t.beforeUpload && t.beforeUpload();
                    if (t.countEl) {
                        var u = e(t.countEl),
                        a = u.text().replace(/\d+/, 
                        function(e) {
                            return e * 1 + 1
                        });
                        u.text(a).show()
                    }
                },
                onProgress: function(e, t, n) {
                    var i = r.find(".file[fileid=" + e.id + "]"),
                    s = (t / n * 100).toFixed(0) + "%";
                    i.find(".progress-bar span").width(s),
                    i.find(".percent").text(s)
                },
                onSuccess: function(n, i) {
                    var s = r.find(".file#file-upload-" + n.id),
                    o = e(i.html).show();
                    s.replaceWith(o),
                    e(".init.init-file").remove(),
                    t.onSuccess && t.onSuccess(n, i)
                },
                onValidate: function(e, t) {
                    return e.size && e.size / 1048576 > 50 ? (mcw.message({
                        msg: '附件 <em style="color: #ee6500;">' + e.name + "</em> 大小超过50MB, 无法完成上传",
                        width: 500
                    }), !1) : !0
                },
                onCancel: function(e) {},
                onError: function(e, t) {},
                onComplete: function(e, t) {}
            })
        },
        adjustFile: function(t) {
            var n = e(".workspace .page:last"),
            r = e(t).is(".file") ? e(t) : e(".file", t);
            n.is("[data-archived], [data-locked], [data-deleted]") && r.find(".link-label").addClass("disabled")
        }
    })
} (jQuery),

//忘记密码页面 https://tower.im/users/forgot_password

function(e) {
    e(function() {
        var t = e("#page-forgot-password");
        if (t.length < 1) return;
        t.on("ajax:success", "form.form", 
        function(t, n) {
            var r = e("#email").val(),
            i = e(".center-box .bd").empty();
            mcw.template("template-email-sent", {
                email: r
            }).appendTo(i)
        })
    })
} (jQuery),

//已邀请成员页面 https://tower.im/invitations/7e2c4bcc6ed8419fbe6a6ba69a49cf3e/

function(e) {
    var t = "page-member";
    page = "#" + t,
    e(function() {
        e("body").on("ajax:beforeSend", page + " #link-cancel-invitation", 
        function(e) {
            mcw.globalLoading("正在取消邀请...")
        }).on("ajax:error", page + " #link-cancel-invitation", 
        function(e) {
            mcw.globalLoading("hide")
        })
    })
} (jQuery),

//邀请页面 https://tower.im/invite/

function(e) {
    var t = "page-invite",
    n = "#" + t;
    e(function() {
        e("body").on("submit", n + " .form-invite", 
        function(t) {
            var n = e(this),
            r = !0,
            i = e.grep(e("input.invite-email"), 
            function(t, n) {
                return e.trim(e(t).val()) !== ""
            });
            return e("input.invite-email:first").closest(".form-item").find("p.error").remove(),
            i.length ? (e.each(i, 
            function(n, i) {
                var i = e(i),
                s = i.val(),
                o = e.trim(s);
                if (!mcw.validate.email(o).valid) {
                    var u = s.indexOf(o),
                    a = o + " 不是一个正确的邮箱地址";
                    return mcw.selectText(t.currentTarget, u, o.length),
                    e('<p class="error">' + a + "</p>").appendTo(i.parent()),
                    r = !1,
                    !1
                }
            }), r) : (e('<p class="error">请至少邀请一个人</p>').insertAfter(n.find("#label-email")), !1)
        }).on("ajax:beforeSend", n + " .form-invite", 
        function(t, n, r) {
            var i = e("input.invite-email").map(function() {
                return e.trim(e(this).val())
            }).get().filter(function(e) {
                return e !== ""
            }).join(",");
            r.data += "&emails=" + encodeURIComponent(i)
        }).on("click", n + " .select-all-proj", 
        function(t) {
            t.preventDefault(),
            e(".proj-in input[type=checkbox]").prop("checked", !0)
        }).on("click", n + " .select-none-proj", 
        function(t) {
            t.preventDefault(),
            e(".proj-in input[type=checkbox]").prop("checked", !1)
        }).on("click", n + " .link-invite-message", 
        function(t) {
            t.preventDefault();
            var n = e(t.target);
            n.next(".form-item").show().end().remove()
        }).on("ajax:error", n + " .form-invite", mcw.inviteError).on("click", n + " #add-invite-item", mcw.addInviteItem).on("click", n + " .del-invite", mcw.removeInviteItem)
    }),
    e.extend(mcw, {
        removeInviteItem: function(t) {
            t.preventDefault();
            var n = e(t.target),
            r = n.closest(".invite-item"),
            i = r.siblings();
            r.fadeTo(200, 0).slideUp(200, 
            function() {
                r.remove(),
                i.length === 1 && i.eq(0).find(".del-invite").remove()
            })
        },
        addInviteItem: function(t) {
            t.preventDefault();
            var n = e(t.target),
            r = n.closest(".form-item"),
            i = r.find(".invite-item:last"),
            s = i.clone(!0),
            o = s.find("input").val("");
            s.find(".error").remove(),
            s.insertAfter(i),
            o.focus(),
            r.find(".invite-item:not(:has(.del-invite)) input").after('<a href="javascript:;" class="del-invite">删除</a>')
        },
        inviteError: function(t, n) {
            var r = e(t.currentTarget),
            i = e.parseJSON(n.responseText).errors;
            if (i && i.length) {
                var s = i[0];
                if (s.target && s.target === "emails") {
                    var o = s.emails;
                    e.each(r.find("input.invite-email"), 
                    function(t, n) {
                        var n = e(n),
                        r = e.trim(n.val()),
                        i = o.indexOf(r);
                        i >= 0 && (e('<p class="error">' + r + s.msg + "</p>").appendTo(n.parent()), o.splice(i, 1))
                    }),
                    o.length && e("#label-email").next(".error").remove().end().after('<p class="error">' + o.join("、") + s.msg + "</p>")
                }
            }
        }
    })
} (jQuery),

//我的设置 https://tower.im/members/68a6f5ea5d964ad49ee62494d0032dd1/settings/

function(e) {
    var t = "page-member-settings",
    n = "#" + t;
    e(function() {
        var t = "***********";
        e("body").on("validate", n + " #txt-password", 
        function(n, r) {
            var i = {
                valid: !0
            },
            s = e.trim(e("#txt-old-password").val());
            return s && s !== t && (r === t || !r.length) && (i = {
                valid: !1,
                errorMsg: "新密码不能为空"
            }),
            i
        }).on("focus", n + " #txt-password," + n + " #txt-old-password", 
        function(n, r) {
            var i = e(this);
            i.val() == t && i.val(""),
            i.addClass("on")
        }).on("blur", n + " #txt-password," + n + " #txt-old-password", 
        function(n, r) {
            var i = e(this);
            i.val() == "" ? i.val(t).removeClass("on") : i.addClass("on")
        }).on("validate", n + " #txt-old-password", 
        function(n, r) {
            var i = {
                valid: !0
            },
            s = e.trim(e("#txt-password").val());
            return s && s !== t && (r === t || !r.length) && (i = {
                valid: !1,
                errorMsg: "现有密码不能为空"
            }),
            i
        }).on("ajax:before", n + " .form", 
        function(t, n, r) {
            var i = e("#txt-password");
            i.val() && i.hasClass("on") ? i.attr("name", "password") : i.removeAttr("name");
            var i = e("#txt-old-password");
            i.val() && i.hasClass("on") ? i.attr("name", "old_password") : i.removeAttr("name")
        }),
        e(n + " #txt-password, " + n + " #txt-old-password").blur()
    }),
    mcw.pages[t] = {
        init: function() {
            var t = e(".link-upload", n);
            mcw.upload(t, {
                action: t.data("url"),
                multiple: !1,
                beforeUpload: function(t) {
                    e(".avatar-wrapper .loading").show()
                },
                onValidate: function(t, n) {
                    return e.inArray(n, ["jpeg", "jpg", "png"]) == -1 ? (mcw.message({
                        msg: "请选择jpg或者png文件"
                    }), !1) : !0
                },
                onSuccess: function(t, n) {
                    e(".avatar-wrapper img.avatar").attr("src", n.avatar)
                },
                onError: function(t, n) {
                    var r = "";
                    try {
                        var i = e.parseJSON(n.responseText).errors;
                        e.each(errors, 
                        function(e, t) {
                            r += t.msg + "<br/>"
                        })
                    } catch(s) {
                        r = "头像上传失败"
                    } finally {
                        mcw.message({
                            msg: r
                        })
                    }
                },
                onComplete: function(t, n) {
                    e(".avatar-wrapper .loading").hide()
                }
            })
        }
    }
} (jQuery),

//我自己 https://tower.im/members/68a6f5ea5d964ad49ee62494d0032dd1/?me=1

function(e) {
    function r() {
        var t = e("#filter-project"),
        n = t.val(),
        r = e(".box .todo").show();
        n !== "-1" && r.filter(":not([data-project-guid=" + n + "])").hide(),
        i()
    }
    function i() {
        var t = e("#box-today"),
        n = e("#box-other"),
        r = e("h5", t),
        i = e(".todo", t),
        s = e(".todo", n); ! i.length && !s.length ? (e("#boxes").hide(), e(".init-todo-empty").show()) : (e("#boxes").show(), e(".init-todo-empty").hide(), i.length ? i.filter(":visible").length ? (r.show(), e(".init-box-empty").hide(), e("#init-filter-empty").hide()) : (r.hide(), e(".init-box-empty").hide(), e("#init-filter-empty").show()) : (r.hide(), e(".init-box-empty").show(), e("#init-filter-empty").hide()))
    }
    function s() {
        var t = e(".box .todo"),
        n = e("#filter-project"),
        i = {},
        s = n.val();
        t.each(function(t, n) {
            n = e(n),
            i[n.data("project-guid")] = n.data("project-name")
        });
        var o = e('<option value="-1">所有项目</option>');
        e.each(i, 
        function(t, n) {
            var r = e('<option value="' + t + '">' + n + "</option>");
            t === s && r.attr("selected", !0),
            o = o.add(r)
        }),
        n.html(o),
        n.val(s),
        r()
    }
    function o() {
        var t = e("#box-other"),
        n = e("#box-today"),
        r = e(".todos", t),
        s = e(".todos", n),
        o = e(".todo", r),
        u = e(".todo", s),
        a = {
            revert: "invalid",
            revertDuration: 200,
            cursor: "pointer",
            handle: ".todo-content",
            helper: function(t) {
                var n = e(t.currentTarget);
                return n.css("position", "absolute"),
                n.get(0)
            },
            axis: "y",
            stop: function(t, n) {
                e(n.helper).css({
                    position: "static"
                })
            }
        },
        f = {
            activeClass: "ui-state-highlight",
            hoverClass: "ui-state-droppable",
            drop: function(t, o) {
                var u = o.draggable,
                a = e(".todo-content a", u).text(),
                f = e(".assignee", u).data("guid");
                u.css({
                    top: 0,
                    position: "static"
                });
                var l = {
                    todo_content: a,
                    assignee_guid: f,
                    due_at: moment().sod().valueOf()
                };
                u.parents(".todos").is(r) ? (n.find("h5").show().end().find(".init").hide(), u.appendTo(s)) : (u.appendTo(r), l.due_at = undefined),
                mcw.tinyLoading(e(".todo-assign-due", u)),
                e.ajax({
                    url: u.find(".todo-actions .edit").attr("href"),
                    data: l,
                    success: function(t) {
                        var n = e(t.html);
                        u.replaceWith(n),
                        mcw.highlight(e(".todo-content", n)),
                        mcw.adjustTodo(n),
                        i()
                    }
                })
            },
            activate: function(t, n) {
                e(t.target).is(n.draggable.parents(".todos")) && e(t.target).removeClass("ui-state-highlight")
            }
        };
        e(".box").on("mouseenter", ".todo", 
        function() {
            var t = e(this);
            t.hasClass("ui-draggable") || t.draggable(a)
        }),
        n.droppable(e.extend(f, {
            accept: "#box-other .todo"
        })),
        t.droppable(e.extend(f, {
            accept: "#box-today .todo"
        }))
    }
    function u() {
        function o(t, n) {
            var r = moment(e(t).find(".due").data("date") || "2999-01-01"),
            i = moment(e(n).find(".due").data("date") || "2999-01-01");
            return r.diff(i)
        }
        var t = moment().endOf("day"),
        n = e("#box-today .todolist .todos-uncompleted"),
        r = e("#box-other .todolist .todos-uncompleted");
        n.find(".todo").add(r.find(".todo")).each(function() {
            var i = e(this),
            s = i.find(".due");
            if (!s.length || !s.data("date")) {
                i.appendTo(r);
                return
            }
            var o = moment(s.data("date"));
            o.diff(t) > 0 ? i.appendTo(r) : i.appendTo(n)
        });
        var i = n.find(".todo").sort(o),
        s = r.find(".todo").sort(o);
        n.append(i),
        r.append(s)
    }
    var t = "page-member",
    n = "#" + t;
    e(function() {
        e(document).on("change", n + " #filter-project", 
        function(e) {
            r()
        }).on("todoremove todocomplete todoreopen", n, 
        function(e) {
            i()
        }).on("todoupdate", n, 
        function(t) {
            var r = e(this);
            r.find(".assignee").data("guid") !== e(n).data("guid") ? setTimeout(function() {
                r.fadeOut(function() {
                    r.remove(),
                    e(".workspace .page:last").trigger("todoremove", [r])
                })
            },
            1e3) : (u(), i())
        })
    }),
    mcw.pages[t] = {
        init: function() {
            var t = e(n);
            t.data("self") && e("#nav-me").addClass("active"),
            !t.is("[data-locked]") && t.data("self") && o(),
            s(),
            mcw.adjustTodo()
        },
        update: function(t) {
            var i = e("#box-other .todolist .todos-uncompleted"),
            s = e(n).data("guid");
            if (!t.member_todos) return;
            var o = [],
            a = !1;
            t.member_todos.created && t.member_todos.created.length && (e.each(t.member_todos.created, 
            function(t, n) {
                var r = e(n).hide(),
                s = e("#boxes").find(".todo[data-guid=" + r.data("guid") + "]");
                s.length ? s.replaceWith(r) : i.append(r),
                mcw.adjustTodo(r),
                o.push(r.find(".todo-content"))
            }), a = !0),
            t.member_todos.deleted && t.member_todos.deleted.length && e.each(t.member_todos.deleted, 
            function(t, n) {
                e("#boxes").find(".todo[data-guid=" + n + "]").remove()
            }),
            t.member_todos.updated && t.member_todos.updated.length && (e.each(t.member_todos.updated, 
            function(t, n) {
                var r = e(n).hide(),
                u = r.find(".assignee").data("guid"),
                a = e("#boxes").find(".todo[data-guid=" + r.data("guid") + "]");
                if (u != s) {
                    a.remove();
                    return
                }
                a.length ? a.before(r).remove() : i.append(r),
                mcw.adjustTodo(r),
                o.push(r.find(".todo-content"))
            }), a = !0),
            a && (u(), r()),
            e(o).each(function() {
                mcw.highlight(e(this))
            })
        }
    }
} (jQuery),

//团队页 https://tower.im/members/

function(e) {
    var t = "page-members",
    n = "#" + t;
    e(function() {
        e(".wrapper").on("click", n + " .member.new.cannot", 
        function(e) {
            return mcw.message({
                msg: "只有管理员才能邀请新成员。<br/>去找其他管理员为你授权或者帮你邀请吧。"
            }),
            !1
        })
    }),
    mcw.pages[t] = {
        init: function() {
            e("#nav-members").addClass("active")
        }
    }
} (jQuery),

//讨论内容页 https://tower.im/projects/7f19cd0e6d2446f2a8eaea9520abc941/messages/bf59c68531624db8b4dceb861818fdf4/

function(e) {
    function r(t, n) {
        var r = e(n.html),
        i = e(t.target).closest(".message");
        i.hide(),
        r.insertAfter(i),
        mcw.editor(r.find("textarea"))
    }
    function i(t, n) {
        var r = e(n.html),
        i = e(t.target).closest(".message-form.edit"),
        s = i.prev(),
        o = i.find(".editor").data("editor");
        o.destroyEditor(),
        s.replaceWith(r),
        mcw.adjustDate(r),
        mcw.adjustPermission(r),
        i.remove()
    }
    function s(t) {
        var n = e(this).closest(".form"),
        r = n.find(".editor").data("editor");
        r.destroyEditor(),
        e(t.currentTarget).parents(".message-form.edit").hide().prev().show().end().remove()
    }
    function o() {
        mcw.globalLoading("正在删除讨论...")
    }
    function u() {
        mcw.globalLoading("hide")
    }
    var t = "page-message",
    n = "#" + t;
    e(function() {
        e("body").on("ajax:success", n + " .message-actions .edit", r).on("click", n + " #link-cancel-post", s).on("ajax:success", n + " .form-edit-message", i).on("ajax:beforeSend", n + " .message-actions .del", o).on("ajax:complete", n + " .message-actions .del", u)
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.adjustCCList(),
            mcw.adjustAuthor()
        },
        update: function(t) {
            if (!t.message) return;
            if (t.message.updated) {
                var n = e(".workspace .page:last");
                if (n.is("[data-deleted]")) return mcw.stack({
                    url: location.href,
                    nocache: !0
                }),
                !1;
                var r = e(t.message.updated),
                i = e(".message");
                r.toggle(i.is(":visible")),
                i.replaceWith(r),
                mcw.adjustDate(r),
                mcw.adjustPermission(r)
            }
            if (t.message.deleted) return mcw.stack({
                url: location.href,
                nocache: !0
            }),
            !1
        }
    }
} (jQuery),

//通知设置 https://tower.im/members/68a6f5ea5d964ad49ee62494d0032dd1/notification_settings/

function(e) {
    var t = "page-notification-settings",
    n = "#" + t;
    e(function() {
        e(".wrapper").on("click", n + " .option input:radio", 
        function(t) {
            var n = e(this),
            r = n.closest(".option");
            if (r.hasClass("active")) return;
            r.addClass("active").siblings(".option").removeClass("active"),
            r.hasClass("option-on") ? r.find(".choose-project").removeClass("hide").end().find(".project-list input:checkbox").attr("checked", "checked") : r.siblings(".option").find(".select-shortcut, .project-list").addClass("hide").end().find(".choose-project").removeClass("hide")
        }).on("click", n + " .choose-project a", 
        function(t) {
            t.preventDefault();
            var n = e(this).closest(".choose-project").addClass("hide");
            optEl = n.closest(".option"),
            optEl.addClass("active").siblings(".option").removeClass("active"),
            optEl.find("input:radio").attr("checked", "checked").end().find(".select-shortcut, .project-list").removeClass("hide").end().find(".project-list input:checkbox").attr("checked", "checked")
        }).on("ajax:before", n + " .form", 
        function(t) {
            var n = e("#radio-d18n-on").is(":checked");
            n && !mcw.d18n.permitted() && mcw.d18n.requestPermission()
        }).on("ajax:success", n + " .form", 
        function(t) {
            var n = e("#radio-d18n-on").is(":checked");
            e("#d18n-enabled").val(n ? "true": "false")
        }).on("click", n + " .select-all", 
        function(t) {
            t.preventDefault(),
            e(this).closest(".option").find(".project-list input:checkbox").attr("checked", "checked")
        }).on("click", n + " .select-none", 
        function(t) {
            t.preventDefault(),
            e(this).closest(".option").find(".project-list input:checkbox").removeAttr("checked")
        })
    })
} (jQuery),

//通知 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/notifications/

function(e) {
    var t = "page-notifications";
    page = "#" + t,
    e(function() {
        e(".wrapper").on("click", page + " .notice.unread .link, .notice.unread .commnets-count", 
        function(t) {
            var n = e(this).closest(".notice").removeClass("unread"),
            r = n.data("notification-guid");
            mcw.readNotification(r)
        })
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.scrollLoad(page, 
            function() {
                return e.ajax({
                    url: e(page).data("url"),
                    dataType: "html",
                    type: "get",
                    data: {
                        till: e(".notice:last").data("created-at")
                    },
                    success: function(t) {
                        t && (e(".notifications").append(t), mcw.adjustDate())
                    }
                })
            })
        },
        update: function(t) {
            if (!t.notifications) return;
            var n = e(".notifications");
            t.notifications.created && t.notifications.created.length && e.each(t.notifications.created, 
            function(t, r) {
                n.find("[data-topic-guid=" + r.guid + "]").remove();
                var i = e(r.html).prependTo(n);
                mcw.adjustDate(i)
            }),
            t.notifications.updated && t.notifications.updated.length && e.each(t.notifications.updated, 
            function(e, t) {
                n.find("[data-notification-guid=" + t + "]").removeClass("unread")
            })
        }
    }
} (jQuery),

//全部讨论 https://tower.im/projects/7f19cd0e6d2446f2a8eaea9520abc941/topics/

function(e) {
    var t = "page-topics",
    n = "#" + t;
    e(function() {
        e(".wrapper").on("click", n + " .editor-placeholder", 
        function(t) {
            t.preventDefault(),
            e(this).hide();
            var n = e(".form-new-discussion").show(),
            r = n.find(".editor");
            n.find("#txt-title").focus(),
            r.length || mcw.editor(e("#txt-content")),
            e(".init.init-discussion").hide()
        }).on("click", n + " #link-cancel-post", 
        function(t) {
            t.preventDefault();
            var n = e(".form-new-discussion"),
            r = n.find(".editor");
            if (r.length) {
                var i = r.data("editor");
                i.destroyEditor()
            }
            n.hide(),
            e(".init.init-discussion, .editor-placeholder").show()
        }).on("ajax:success", n + " .form-new-discussion", 
        function(t, n) {
            e(".init.init-discussion").remove(),
            e("#link-cancel-post").click(),
            e("#txt-title, txt-content").val("");
            var r = e(".messages"),
            i = e(n.html).hide().prependTo(r).fadeIn();
            r.offset().top < e(document).scrollTop() && mcw.scrollTo(".editor-wrapper"),
            mcw.adjustDate(i)
        })
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.scrollLoad(n, 
            function() {
                return e.ajax({
                    url: location.pathname,
                    dataType: "html",
                    type: "get",
                    data: {
                        till: e(".message:last").data("last-comment-at")
                    },
                    success: function(t) {
                        t && (e(".messages").append(t), mcw.adjustDate())
                    }
                })
            })
        }
    }
} (jQuery),

//成员管理 https://tower.im/members/7d1d80ad62614d64b789a8c196b01835/settings/

function(e) {
    var t = "page-member",
    n = "#" + t;
    e(function() {
        e("body").on("ajax:success", n + " #link-upgrade", 
        function(t) {
            e(".status-admin").removeClass("hide"),
            e(".status-normal").addClass("hide")
        }).on("ajax:success", n + " #link-downgrade", 
        function(t) {
            e(".status-admin").addClass("hide"),
            e(".status-normal").removeClass("hide")
        }).on("ajax:beforeSend", n + " #link-remove-member", 
        function(e) {
            mcw.globalLoading("正在移除...")
        }).on("ajax:success", n + " #link-remove-member", 
        function(e) {
            mcw.globalLoading("hide")
        }).on("ajax:error", n + " #link-remove-member", 
        function(e) {
            mcw.globalLoading("hide")
        })
    })
} (jQuery),

//回顾 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/progress/

function(e) {
    function r() {
        var t = e(".progress-day.today"),
        n = e(".progress-day.yesterday"),
        r = moment().format("YYYY-MM-DD"),
        i = moment().add("d", -1).format("YYYY-MM-DD");
        if (t.data("date") != r) {
            var s = moment(t.data("date"), "YYYY-MM-DD");
            t.find("h4").empty().removeClass("today").append("<span class='date'>" + s.format("M/D") + "</span>").append("<span class='day'>" + moment.weekdays[s.day()] + "</span>")
        }
        if (n.data("date") != i) {
            var s = moment(n.data("date"), "YYYY-MM-DD");
            n.find("h4").empty().removeClass("yesterday").append("<span class='date'>" + s.format("M/D") + "</span>").append("<span class='day'>" + moment.weekdays[s.day()] + "</span>")
        }
        e(".progress-day[data-date=" + r + "]").addClass("today").find("h4:first").html("今"),
        e(".progress-day[data-date=" + i + "]").addClass("yesterday").find("h4:first").html("昨")
    }
    var t = "page-progress",
    n = "#" + t;
    e(function() {
        e("body").on("change", n + " #select-member", 
        function(t) {
            var n = e(this).val(),
            r;
            "0" == n ? r = location.pathname: r = location.pathname + "?by_member=" + n,
            mcw.stack({
                url: r,
                root: !0,
                bare: !0,
                nocache: !0
            })
        })
    }),
    mcw.pages[t] = {
        init: function() {
            e("#nav-progress").addClass("active"),
            r(),
            mcw.scrollLoad(n, 
            function(t) {
                return e.ajax({
                    url: location.pathname,
                    dataType: "html",
                    data: {
                        till: e(".progress-day:last").attr("data-date"),
                        by_member: e("#select-member").val()
                    },
                    success: function(e) {
                        e && (t.before(e), r())
                    }
                })
            })
        },
        update: function(t) {
            if (!t.progress) return;
            var n = [];
            t.progress.created && t.progress.created.length && (e.each(t.progress.created, 
            function(t, r) {
                var i = e(r.html),
                s = moment(i.find(".datetime").text(), "YYYY-MM-DD HH:mm: "),
                o = e(".progress-day[data-date=" + s.format("YYYY-MM-DD") + "]");
                o.length || (o = mcw.template("tpl-progress-day", {
                    date: s.format("YYYY-MM-DD"),
                    dateStr: s.format("M/D"),
                    dayStr: moment.weekdays[s.day()]
                }).insertAfter("#select-member"));
                var u = o.find(".progress-project:first");
                if (!u.length || u.data("guid") != r.project.guid) u = mcw.template("tpl-progress-project", {
                    guid: r.project.guid,
                    name: r.project.name
                }).insertAfter(o.find("h4"));
                i.insertAfter(u.find("h5")),
                n.push(i)
            }), r()),
            e(n).each(function() {
                mcw.highlight(e(this))
            })
        }
    }
} (jQuery),

//创建新项目 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/projects/new/

function(e) {
    var t = "page-new-project",
    n = "#" + t;
    e(function() {
        mcw.preloadImages(["/assets/icon-check-e5b477cb7a924487bf783a0e8a374a21.png"]),
        e("body").on("ajax:beforeSend", n + " form.form", 
        function(t, n, r) {
            membersGuid = e(".member.selected").map(function() {
                return e(this).data("guid")
            }).get(),
            invitations = e(".member.invited.selected").map(function() {
                return e(this).data("guid")
            }).get(),
            emails = e("input.invite-email").map(function() {
                return e.trim(e(this).val())
            }).get().filter(function(e) {
                return e !== ""
            }).join(","),
            r.data += "&members=" + membersGuid.join(",") + "&invitations=" + invitations.join(",") + "&emails=" + encodeURIComponent(emails)
        }).on("click", n + " .member", 
        function(t) {
            var n = e(t.currentTarget);
            n.toggleClass("selected")
        }).on("submit", n + " form.form", 
        function(t) {
            var n = e(this),
            r = !0,
            i = e.grep(e("input.invite-email"), 
            function(t, n) {
                return e.trim(e(t).val()) !== ""
            });
            return e("input.invite-email:first").closest(".form-item").find("p.error").remove(),
            e.each(i, 
            function(n, i) {
                var i = e(i),
                s = i.val(),
                o = e.trim(s);
                if (!mcw.validate.email(o).valid) {
                    var u = s.indexOf(o),
                    a = o + " 不是一个正确的邮箱地址";
                    return mcw.selectText(t.currentTarget, u, o.length),
                    e('<p class="error">' + a + "</p>").appendTo(i.parent()),
                    r = !1,
                    !1
                }
            }),
            r
        }).on("click", n + " .link-show-invite", 
        function(t) {
            t.preventDefault(),
            e(t.target).hide().next().show()
        }).on("ajax:error", n + " form.form", mcw.inviteError).on("click", n + " #add-invite-item", mcw.addInviteItem).on("click", n + " .del-invite", mcw.removeInviteItem)
    })
} (jQuery),

//项目 https://tower.im/projects/7f19cd0e6d2446f2a8eaea9520abc941/settings/
function(e) {
    var t = "page-project-settings",
    n = "#" + t;
    e(function() {
        e(".wrapper").on("ajax:success", n + " form#form-info", 
        function(t, n) {
            e(".project-info").find(".name a").text(n.name).end().find(".desc").text(n.desc)
        }).on("ajax:beforeSend", n + " #btn-archive-project", 
        function(e) {
            mcw.globalLoading("正在归档项目..."),
            mcw.clearPageCache()
        }).on("ajax:beforeSend", n + " #btn-unarchive-project", 
        function(e) {
            mcw.globalLoading("正在激活项目..."),
            mcw.clearPageCache()
        }).on("click", n + " #btn-unarchive-denied", 
        function(t) {
            var n = e("#reach-max-msg").html();
            return mcw.message({
                msg: n,
                width: 550
            }),
            !1
        }).on("ajax:success", n + " #btn-archive-project", 
        function(e) {
            mcw.globalLoading("hide")
        }).on("ajax:success", n + " #btn-unarchive-project", 
        function(e) {
            mcw.globalLoading("hide")
        }).on("click", n + " #btn-del-project", 
        function(e) {
            e.preventDefault(),
            mcw.dialog({
                el: mcw.template("tpl-del-project"),
                modal: !0
            })
        }).on("click", n + " #btn-cancel-del", 
        function(e) {
            mcw.dialog("hide")
        }).on("click", n + " #btn-exec-del", 
        function(t) {
            var n = e(t.currentTarget),
            r = n.data("url");
            e.ajax({
                url: r,
                type: "post",
                dataType: "json",
                beforeSend: function() {
                    mcw.dialog("hide"),
                    mcw.globalLoading("正在删除项目...")
                },
                success: function(e) {
                    e.success && (mcw.globalLoading("hide"), mcw.stack({
                        url: e.target_url,
                        replace: !1,
                        root: !0,
                        restorePosition: !1
                    }))
                }
            })
        }).on("keyup", n + " #del-project-text", 
        function(t) {
            var n = e(t.currentTarget);
            n.val() === "DELETE" ? e("#btn-exec-del").prop("disabled", !1) : e("#btn-exec-del").prop("disabled", !0)
        })
    }),
    mcw.pages[t] = {
        init: function(t) {
            t.is("[data-archived], [data-locked], [data-deleted]") && e("#project-name, #project-desc, #btn-save-settings").attr("disabled", "disabled")
        }
    }
} (jQuery),

//项目成员管理 https://tower.im/projects/06153e5a411c416c8981e3879466f087/members/

function(e) {
    var t = "page-project-members",
    n = "#" + t;
    e(function() {
        mcw.preloadImages(["/assets/icon-check-e5b477cb7a924487bf783a0e8a374a21.png"]),
        e("body").on("click", n + " .member", 
        function(t) {
            if (e("#btn-save-members").is(":disabled")) return;
            var n = e(t.currentTarget);
            n.toggleClass("selected")
        }).on("ajax:beforeSend", n + " form#form-members", 
        function(t, n, r) {
            membersGuid = e(".member.selected").map(function() {
                return e(this).data("guid")
            }).get(),
            invitations = e(".member.invited.selected").map(function() {
                return e(this).data("guid")
            }).get(),
            emails = e("input.invite-email").map(function() {
                return e.trim(e(this).val())
            }).get().filter(function(e) {
                return e !== ""
            }).join(","),
            r.data += "&members=" + membersGuid.join(",") + "&invitations=" + invitations.join(",") + "&emails=" + encodeURIComponent(emails)
        }).on("ajax:success", n + " form#form-members", 
        function(t, n) {
            var r = e("button[type=submit]", t.target).data("project-guid");
            r && mcw.members && delete mcw.members[r],
            e(".invite-item:first").find(".del-invite").remove().end().find("input").val("").end().siblings(".invite-item").remove();
            if (n.invitations) {
                var i = e("ul.members");
                e.each(n.invitations, 
                function(e, t) {
                    t.nickname = t.email,
                    mcw.template("tpl-invited-member", t).hide().appendTo(i).fadeIn()
                })
            }
        }).on("submit", n + " .form#form-members", 
        function(t) {
            var n = e(this),
            r = !0,
            i = e.grep(e("input.invite-email"), 
            function(t, n) {
                return e.trim(e(t).val()) !== ""
            });
            return e("input.invite-email:first").closest(".form-item").find("p.error").remove(),
            e.each(i, 
            function(n, i) {
                var i = e(i),
                s = i.val(),
                o = e.trim(s);
                if (!mcw.validate.email(o).valid) {
                    var u = s.indexOf(o),
                    a = o + " 不是一个正确的邮箱地址";
                    return mcw.selectText(t.currentTarget, u, o.length),
                    e('<p class="error">' + a + "</p>").appendTo(i.parent()),
                    r = !1,
                    !1
                }
            }),
            r
        }).on("click", n + " .link-show-invite", 
        function(t) {
            t.preventDefault(),
            e(t.target).hide().next().show()
        }).on("ajax:error", n + " form#form-members", mcw.inviteError).on("click", n + " #add-invite-item", mcw.addInviteItem).on("click", n + " .del-invite", mcw.removeInviteItem)
    }),
    mcw.pages[t] = {
        init: function(t) {
            t.is("[data-archived], [data-locked], [data-deleted]") && e("#btn-save-members").attr("disabled", "disabled")
        }
    }
} (jQuery),

//项目内容页 https://tower.im/projects/06153e5a411c416c8981e3879466f087/

function(e) {
    var t = "page-project",
    n = "#" + t;
    e(function() {
        e(".wrapper").on("click", n + " div.todolists-completed .show-all a", 
        function(t) {
            t.preventDefault(),
            e(t.target).parent().next("span.all").show().end().remove()
        }).on("click.file", n + " .file .link-cancel", 
        function(t) {
            t.preventDefault();
            var n = e(t.currentTarget).parents(".file:first"),
            r = n.attr("fileid");
            r && n.hasClass("uploading") && uploader.cancel(r),
            n.removeClass("uploading").fadeOut(function() {
                n.siblings().length || e("div.init").show(),
                n.remove()
            })
        }).on("click", n + " .btn-new-discussion", 
        function(t) {
            t.preventDefault();
            var n = e(".form-new-discussion").show(),
            r = n.find(".editor");
            n.find("#txt-title").focus(),
            r.length || mcw.editor(e("#txt-content")),
            e(".init.init-discussion").hide()
        }).on("click", n + " #link-cancel-post", 
        function(t) {
            t.preventDefault();
            var n = e(".form-new-discussion"),
            r = n.find(".editor");
            if (r.length) {
                var i = r.data("editor");
                i.destroyEditor()
            }
            n.hide(),
            e(".init.init-discussion").show()
        }).on("ajax:success", n + " .form-new-discussion", 
        function(t, n) {
            e("#link-cancel-post").click(),
            e("#txt-title, txt-content").val("");
            var r = e(".messages");
            messageEl = e(n.html).hide().prependTo(r).fadeIn();
            var i = e(".link-more-topics");
            i.length && i.text(i.text().replace(/\d+/, 
            function(e) {
                return e * 1 + 1
            })),
            mcw.adjustDate(messageEl),
            e(".init.init-discussion").hide(),
            r.find(".message:gt(2)").hide(),
            r.find(".message:lt(3)").show()
        }).on("filedelete", n + " .file", 
        function(t, n) {
            var r = e(".link-more-files"),
            i = r.text().replace(/\d+/, 
            function(e) {
                return e * 1 - 1
            });
            r.text(i),
            n.siblings(".file").length || r.hide();
            var s = n.closest(".file-list");
            n.remove(),
            s.find(".file:gt(4)").hide(),
            s.find(".file:lt(5)").show()
        })
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.initTodoFilter(),
            mcw.sortTodos(),
            mcw.sortTodolists(),
            mcw.initUpload({
                countEl: e(".link-more-files"),
                beforeUpload: function() {
                    var t = e(".file-list");
                    t.find(".file:gt(4)").hide(),
                    t.find(".file:lt(5)").show()
                }
            }),
            mcw.me.admin || e(".link-admin").remove(),
            mcw.adjustCCList(),
            mcw.adjustTodo(),
            mcw.adjustTodoFilter(),
            mcw.adjustFile()
        }
    }
} (jQuery),

//修改密码

function(e) {
    e(function() {
        var t = e("#page-reset-password");
        if (t.length < 1) return;
        t.on("ajax:success", "form.form", 
        function(t, n) {
            var r = e(".center-box .bd").empty();
            mcw.template("template-success").appendTo(r)
        })
    })
} (jQuery),

//搜索结果 https://tower.im/search/?keyword=2

function(e) {
    var t = "page-search-result",
    n = "#" + t;
    e.expr[":"].icontains = function(e, t, n, r) {
        return (e.textContent || e.innerText || jQuery(e).text() || "").toLowerCase().indexOf(n[3].toLowerCase()) >= 0
    },
    e(function() {}),
    mcw.pages[t] = {
        init: function() {
            var t = e("#keyword").val(),
            n = new RegExp(t, "ig");
            e(".results p, .results a, .results span").filter(':icontains("' + t + '")').each(function() {
                var t = e(this);
                if (this.childNodes.length === 1 && this.childNodes[0].nodeType === 3) {
                    var r = t.text();
                    t.html(r.replace(n, 
                    function(e) {
                        return '<span class="match">' + e + "</span>"
                    }))
                }
            });
            var r = e(".sheet-active select.category"),
            i = e(".results [data-category]"),
            s = e(".results .empty");
            r.on("change", 
            function(e) {
                i.filter(":hidden").show();
                var t = r.val();
                "all" != t && i.not('[data-category="' + t + '"]').hide(),
                i.filter(":visible").length ? s.hide() : s.show()
            })
        }
    }
} (jQuery),

//付费 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/settings/

function(e) {
    var t = "page-team-settings",
    n = "#" + t;
    e(function() {
        e("body").on("click", n + " .team-name a.edit", 
        function(t) {
            t.preventDefault();
            var n = e(this).parents("h3:first").hide().find(".name").text(),
            r = e("form.form-team").show();
            r.find("input").val(n).focus()
        }).on("ajax:success", n + " .form-team", 
        function(t, n) {
            var r = e(this),
            i = n.name;
            r.find("input").val("").end().hide().siblings("h3").find(".name").text(i).end().show()
        }).on("keydown", ".form-team", 
        function(t) {
            t.keyCode === 27 && (t.preventDefault(), e(t.currentTarget).find(".btn-cancel").click())
        }).on("click", n + " .team-name .btn-cancel", 
        function(t) {
            e(this).parents("form:first").hide().find("input").val("").end().siblings("h3").show()
        }).on("click", n + " #btn-del-team", 
        function(e) {
            e.preventDefault(),
            mcw.dialog({
                el: mcw.template("tpl-del-team"),
                width: 660,
                modal: !0
            })
        }).on("click", n + " #btn-cancel-del", 
        function(e) {
            mcw.dialog("hide")
        }).on("click", n + " #btn-exec-del", 
        function(t) {
            var n = e(t.currentTarget),
            r = n.data("url");
            e.ajax({
                url: r,
                type: "post",
                dataType: "json",
                beforeSend: function() {
                    mcw.dialog("hide"),
                    mcw.globalLoading("正在删除团队...")
                },
                success: function(e) {
                    e.success && (mcw.globalLoading("hide"), location.href = e.target_url)
                }
            })
        }).on("keyup", n + " #del-team-text", 
        function(t) {
            var n = e(t.currentTarget);
            n.val() === "DELETE" ? e("#btn-exec-del").prop("disabled", !1) : e("#btn-exec-del").prop("disabled", !0)
        }).on("ajax:beforeSend", n + " .form-trans-account", 
        function(t) {
            var n = e("button[type=submit]", this);
            mcw.tinyLoading(n)
        }).on("ajax:success", n + " .form-trans-account", 
        function(e, t) {
            t.success && (location.href = t.next_url)
        }).on("ajax:complete", n + " .form-trans-account", 
        function(e, t) {
            mcw.tinyLoading(btn, !1)
        })
    })
} (jQuery),

//项目页事件 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/

function(e) {
    function r(t) {
        t.preventDefault(),
        t.stopPropagation();
        var r = e(t.currentTarget);
        if (r.hasClass("visible")) {
            e(document).trigger("click.badge");
            return
        }
        e(document).trigger("click.badge");
        var i = r.parent(".folder"),
        s = i.attr("class"),
        o = s.match(/c\d+/)[0],
        u = s.match(/i\d+/)[0],
        a = r.offset(),
        f = e(n).offset(),
        l = mcw.template("tpl-badge", {});
        r.addClass("visible"),
        l.find("li." + o).addClass("selected").end().find(".icons li").addClass(o).filter("." + u).addClass("selected"),
        l.appendTo(n).css({
            top: a.top - f.top + 18,
            left: a.left - f.left - l.width() / 2 - 23
        }),
        e(document).one("click.badge", 
        function(t) {
            e(".badge-edit.visible").removeClass("visible"),
            e(".badge-settings").remove(),
            e(document).unbind("keyup.badge")
        }).bind("keyup.badge", 
        function(t) {
            t.keyCode == 27 && (t.preventDefault(), e(document).trigger("click.badge"))
        })
    }
    function i(t) {
        t.preventDefault(),
        t.stopPropagation();
        var n = e(t.currentTarget);
        if (n.hasClass("selected")) return;
        var r = n.attr("class");
        n.siblings(".selected").removeClass("selected").end().addClass("selected"),
        e(".badge-settings .icons li").each(function() {
            var t = e(this).attr("class").replace(/c\d+/, r);
            e(this).attr("class", t)
        });
        var i = e(".badge-edit.visible").parent(".folder");
        i.attr("class", i.attr("class").replace(/c\d+/, r)),
        o(i)
    }
    function s(t) {
        t.preventDefault(),
        t.stopPropagation();
        var n = e(t.currentTarget);
        if (n.hasClass("selected")) return;
        var r = n.attr("class").match(/i\d+/)[0];
        n.siblings(".selected").removeClass("selected").end().addClass("selected");
        var i = e(".badge-edit.visible").parent(".folder");
        i.attr("class", i.attr("class").replace(/i\d+/, r)),
        o(i)
    }
    function o(t) {
        var n = t.attr("href") + "/badge",
        r = t.attr("class").match(/c(\d+)/)[1],
        i = t.attr("class").match(/i(\d+)/)[1];
        e.ajax({
            url: n,
            type: "post",
            dataType: "json",
            data: {
                color_id: r - 1,
                icon_id: i - 1
            },
            success: function(e) { ! e.success
            }
        })
    }
    var t = "page-team-show",
    n = "#" + t;
    e(function() {
        mcw.preloadImages(["/assets/icon-info-f6c72fc53772306ae1b88ece8f1199ad.png", "/assets/project-badge-settings-bg-abdfe0f433044519c1e382f9087485f0.png"]),
        e("body").on("click", n + " .denied", 
        function(e) {
            return mcw.message({
                msg: '只有管理员能够创建项目。<br/>去找<a href="/members/">其他管理员</a>为你授权或者帮你创建吧。'
            }),
            !1
        }).on("click", n + " .reach-max:not(.denied)", 
        function(t) {
            var n = e(t.target),
            r = e("#reach-max-msg").html();
            return mcw.message({
                msg: r,
                width: 550
            }),
            !1
        }).on("click", n + " .badge-edit", r).on("click", n + " .color-sets li", i).on("click", n + " .icons li", s).on("click", n + " .badge-settings", 
        function(e) {
            e.preventDefault(),
            e.stopPropagation()
        }).on("ajax:success", n + " .resend-email-verify", 
        function(e, t) {
            t.success ? mcw.message({
                msg: "验证邮件发送成功，请注意查收"
            }) : mcw.message({
                msg: t.msg
            })
        })
    }),
    mcw.pages[t] = {
        init: function() {
            e("#nav-project").addClass("active")
        }
    }
} (jQuery),

//任务内容页 https://tower.im/projects/06153e5a411c416c8981e3879466f087/todos/fe0f993315494b99802cbb124ae6a318/

function(e) {
    var t = "page-todo",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function() {
            mcw.adjustTodo(),
            mcw.adjustCCList(),
            mcw.adjustAuthor()
        },
        update: function(t) {
            if (!t.todo) return;
            if (t.todo.updated) {
                var n = e(".workspace .page:last");
                if (n.is("[data-deleted]")) return mcw.stack({
                    url: location.href,
                    nocache: !0
                }),
                !1;
                var r = e(t.todo.updated),
                i = e(".todo");
                r.toggle(i.is(":visible")),
                i.replaceWith(r),
                mcw.adjustDate(r)
            }
            if (t.todo.deleted) return mcw.stack({
                url: location.href,
                nocache: !0
            }),
            !1
        }
    }
} (jQuery),

//单个任务列表 https://tower.im/projects/06153e5a411c416c8981e3879466f087/lists/372ebca953f449a18de01b4a0813a4bd/show/

function(e) {
    var t = "page-todolist",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function(t) {
            mcw.initTodoFilter(),
            mcw.sortTodos(),
            mcw.adjustTodo(),
            mcw.adjustTodoFilter(),
            t.is("[data-archived], [data-locked], [data-deleted]") && e(".todolist-stick-checkbox").attr("disabled", "disabled");
            var n = e("#tpl-todos-completed");
            n.length && (e(".todolist .todos-completed").replaceWith(mcw.template("tpl-todos-completed")), n.remove())
        },
        update: function(t) {
            var n = e(".todolist");
            if (!t.todolist) return;
            t.todolist.deleted && mcw.stack({
                url: location.href,
                nocache: !0,
                replace: !0
            });
            if (t.todolist.updated) {
                var r = t.todolist.updated;
                r.name && n.find(".title h4 a").text(r.name),
                r.position && (n.data("sort", r.position), needResort = !0)
            }
        }
    }
} (jQuery),

//所有任务 https://tower.im/projects/06153e5a411c416c8981e3879466f087/todos/

function(e) {
    var t = "page-todolists",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function() {
            mcw.initTodoFilter(),
            mcw.sortTodos(),
            mcw.sortTodolists(),
            mcw.adjustTodo(),
            mcw.adjustTodoFilter()
        }
    }
} (jQuery),

//所有完成任务 https://tower.im/projects/06153e5a411c416c8981e3879466f087/todos/completed/

function(e) {
    var t = "page-completed-todos",
    n = "#" + t;
    e(function() {
        e("body").on("change", n + " #select-member", 
        function(t) {
            location.href = location.pathname + "?by_member=" + e(this).val()
        })
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.scrollLoad(n, 
            function(t) {
                return e.ajax({
                    url: location.pathname,
                    dataType: "html",
                    data: {
                        till: e(".day:last").attr("data-date"),
                        by_member: e("#select-member").val()
                    },
                    success: function(e) {
                        e && t.before(e)
                    }
                })
            })
        }
    }
} (jQuery),

//个人已完成的任务 https://tower.im/members/68a6f5ea5d964ad49ee62494d0032dd1/todos/completed/

function(e) {
    var t = "page-member-completed-todos",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function() {
            mcw.scrollLoad(n, 
            function(t) {
                return e.ajax({
                    url: location.pathname,
                    dataType: "html",
                    data: {
                        till: e(".day:last").attr("data-date")
                    },
                    success: function(e) {
                        e && t.before(e)
                    }
                })
            })
        }
    }
} (jQuery),

//所有文件 https://tower.im/projects/06153e5a411c416c8981e3879466f087/attachments/

function(e) {
    var t = "page-attachments",
    n = "#" + t;
    e(function() {
        e(document).on("filedelete", n + " .file", 
        function(t, n) {
            n.siblings().length || n.closest(".day").hide(),
            e(".day:visible").length || e("div.init-file").show()
        })
    }),
    mcw.pages[t] = {
        init: function(t) {
            mcw.adjustFile();
            var n = e(".day:first");
            if (!n.length) {
                var r = e("div.init-file");
                r.hide(),
                n = mcw.template("tpl-today", {
                    date: moment().format("YYYY-MM-DD")
                }).insertBefore(r).hide()
            } else ! moment(n.data("date")).diff(moment().sod()) || (n = mcw.template("tpl-today", {
                date: moment().format("YYYY-MM-DD")
            }).insertBefore(n).hide());
            t.is("[data-archived], [data-locked], [data-deleted]") ? t.find(".btn-add-files").remove() : mcw.initUpload({
                btn: e(".btn-add-files"),
                container: n.find(".file-list"),
                beforeUpload: function() {
                    n.show()
                },
                onCancel: function(t) {
                    t.siblings().length || t.closest(".day").hide(),
                    e(".day:visible").length || e("div.init-file").show()
                }
            }),
            mcw.scrollLoad(t, 
            function(t) {
                return e.ajax({
                    url: location.pathname,
                    type: "get",
                    dataType: "html",
                    data: {
                        till: e(".day:last").attr("data-date")
                    },
                    success: function(e) {
                        e && t.before(e)
                    }
                })
            })
        }
    }
} (jQuery),

//回收站中该文件 https://tower.im/projects/06153e5a411c416c8981e3879466f087/uploads/e8ad5ec92db14206880481081a79719a/

function(e) {
    var t = "page-file",
    n = "#" + t;
    e(function() {
        e("body").on("ajax:beforeSend", n + " .file-actions .del", 
        function(e) {
            mcw.globalLoading("正在删除文件...")
        }).on("ajax:success", n + " .file-actions .del", 
        function(e) {
            mcw.globalLoading("hide")
        })
    }),
    mcw.pages[t] = {
        init: function() {
            mcw.adjustCCList(),
            mcw.adjustAuthor(),
            mcw.adjustFile()
        },
        update: function(t) {
            if (!t.upload) return;
            if (t.upload.updated) {
                var n = e(".workspace .page:last");
                if (n.is("[data-deleted]")) return mcw.stack({
                    url: location.href,
                    nocache: !0
                }),
                !1;
                var r = e(t.upload.updated),
                i = e(".upload");
                r.toggle(i.is(":visible")),
                i.replaceWith(r),
                mcw.adjustDate(r),
                mcw.adjustPermission(r)
            }
            if (t.upload.deleted) return mcw.stack({
                url: location.href,
                nocache: !0
            }),
            !1
        }
    }
} (jQuery),


function(e) {
    var t = "page-folders",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function() {}
    }
} (jQuery),

//文件标记 https://tower.im/projects/06153e5a411c416c8981e3879466f087/dirs/aad2fa4e622540349199e288e0af69c9/

function(e) {
    var t = "page-folder",
    n = "#" + t;
    e(function() {}),
    mcw.pages[t] = {
        init: function(e) {
            mcw.adjustFile()
        }
    }
} (jQuery),

//团队选择 https://tower.im/launchpad

function(e) {
    var t = "page-launchpad",
    n = "#" + t;
    e(function() {
        e("body").on("click", n + " #btn-new-team", 
        function(e) {
            e.preventDefault(),
            mcw.dialog({
                el: mcw.template("tpl-new-team"),
                width: 600
            }).find("#txt-team").focus()
        }).on("click", n + " #btn-cancel-create-team", 
        function(e) {
            e.preventDefault(),
            mcw.dialog("hide")
        })
    })
} (jQuery),

function(e) {
    var t = "page-apply-free",
    n = "#" + t;
    e(function() {
        e(n + " textarea").autosize(),
        e("body").on("click", n + " .btn-add-attach", 
        function(t) {
            t.preventDefault();
            var n = e("p.attachment:last");
            n.clone().insertAfter(n)
        }).on("change", n + " #category", 
        function(t) {
            var n = e(this);
            n.val() === "1" ? e("#form-item-attach").show().find("input").data("validate", "required").attr("data-validate", "required") : e("#form-item-attach").hide().find("input").val("").removeData("validate").removeAttr("data-validate")
        })
    })
} (jQuery),

//付费方案 https://tower.im/teams/ca80bfd1700e46798581f20021c588cb/plans/

function(e) {
    function i() {
        var t = e(".plan-list .selected"),
        n = t.data("type") * 1,
        i = r[n],
        s = i.price;
        e("input[name=plan]").val(n);
        var o = e("#tips").removeClass("inform inform-warn inform-info").html("");
        e("button.btn-choose").prop("disabled", !1);
        var u = e("#trial").val() === "true",
        a = e("#cur-plan-type").val() * 1,
        f = e("#left-money").val() * 1,
        l = e("#cur-team-proj-num").val() * 1,
        c = i.projNum,
        h = '<a href="' + e("#select-charge-path").val() + '">付费</a>',
        p = e("#locked").val() === "true",
        d = [],
        v = [];
        if (l > c) v.push('目前团队中共有<a href="javascript:;" class="link-show-projects">' + l + "个项目</a>，请选择支持更多项目的方案");
        else if (!u && a !== -1) {
            var m = r[a],
            g = m.price,
            y = m.projNum;
            if (p) y > c ? f >= s ? d.push("我们将立即从您的团队账户中扣除 &yen;" + s + "，您的团队将马上恢复正常") : v.push("您的团队账户余额不足，请先" + h) : y < c && v.push("您的团队账户余额不足，请先" + h);
            else {
                var b = (moment(e("#next-charge-date").val()).sod().valueOf() - moment().sod().valueOf()) / 864e5,
                w = Math.floor(Math.abs(s - g) / 30 * b);
                y > c ? d.push("您选择了费用更低的方案，我们将立即退还差价 &yen;" + w + " 到您的团队账户") : y < c && (f >= w ? d.push("您选择了费用更高的方案，我们将立即从您的账户扣除升级差价 &yen;" + w) : v.push("您选择了费用更高的方案，需要支付升级差价 &yen;" + w + "，您的团队账户余额不足，请" + h + "后再试"))
            }
        }
        var E = "";
        v.length ? (e.each(v, 
        function() {
            E += "<p>" + this + "</p>"
        }), o.addClass("inform inform-warn").html(E), e("button.btn-choose").prop("disabled", !0)) : d.length && (e.each(d, 
        function() {
            E += "<p>" + this + "</p>"
        }), o.addClass("inform inform-info").html(E))
    }
    var t = "page-plans",
    n = "#" + t,
    r = [{
        price: 20,
        projNum: 5
    },
    {
        price: 99,
        projNum: 10
    },
    {
        price: 199,
        projNum: 20
    },
    {
        price: 299,
        projNum: 99
    },
    {
        price: 49,
        projNum: 5
    }];
    e(function() {
        e("body").on("click", n + " .plan-list li", 
        function(t) {
            if (!e(".form-plan").length) return;
            var n = e(this);
            n.hasClass("selected"),
            n.siblings(".selected").removeClass("selected").end().addClass("selected"),
            i()
        }).on("click", n + " .link-show-projects", 
        function(e) {
            mcw.dialog({
                el: mcw.template("tpl-projects"),
                width: 800
            })
        }).on("ajax:success", n + " .form-plan", 
        function(e, t) {
            if (t.success) return location.href = t.success_url,
            !1
        })
    }),
    mcw.pages[t] = {
        init: function() {
            var t = e("#cur-plan-type").val() * 1;
            if (t === -1 || t === 0) {
                e(".btn-choose").prop("disabled", !0);
                return
            }
            e(".plan-list li[data-type=" + t + "]").addClass("selected"),
            e(".form-plan").length && i()
        }
    }
} (jQuery),

function(e) {
    var t = "page-charge",
    n = "#" + t;
    e(function() {
        e("body").on("ajax:success", n + " .form-alipay", 
        function(e, t) {
            t.success && (location.href = t.charge_url)
        }).on("click", n + " .btn-brohao", 
        function(t) {
            var n = e("#charge-amount").val();
            mcw.dialog({
                el: mcw.template("tpl-brohao-confirm", {
                    yen: n,
                    amount: n
                })
            })
        }).on("ajax:success", n + " .form-brohao", 
        function(e, t) {
            t.success && (location.href = t.charge_url)
        }).on("click", n + " .form-brohao .btn-cancel", 
        function(e) {
            mcw.dialog("hide")
        }).on("click", n + " .charge-item", 
        function(t) {
            var n = e(t.currentTarget);
            if (n.hasClass("selected")) return;
            n.siblings(".selected").removeClass("selected").end().addClass("selected"),
            e("#charge-amount").val(n.data("charge"))
        })
    }),
    mcw.pages[t] = {
        init: function() {
            var t = e(".charge-item.year");
            t.addClass("selected"),
            e("#charge-amount").val(t.data("charge"))
        }
    }
} (jQuery),

function(e) {
    var t = "page-payment-history",
    n = "#" + t;
    e(function() {
        e("body").on("click", n + " .btn-receipt", 
        function(e) {
            mcw.dialog({
                el: mcw.template("tpl-receipt", {}),
                width: 700
            })
        }).on("ajax:success", n + " .form-receipt", 
        function(e, t) {
            t.success && mcw.dialog({
                el: mcw.template("tpl-apply-success", {
                    target_url: t.target_url
                })
            })
        }).on("click", n + " .btn-apply-ok, " + n + " .btn-edit-receipt-ok", 
        function(t) {
            mcw.stack({
                url: e(t.target).data("url"),
                replace: !0,
                root: !1,
                restorePosition: !0
            })
        }).on("click", n + " .form-receipt .btn-cancel, " + n + " .form-edit-receipt .btn-cancel", 
        function(e) {
            e.preventDefault(),
            mcw.dialog("hide")
        }).on("ajax:success", n + " .edit-receipt", 
        function(e, t) {
            mcw.dialog({
                el: t.html,
                width: 700
            })
        }).on("ajax:success", n + " .form-edit-receipt", 
        function(e, t) {
            t.success && mcw.dialog({
                el: mcw.template("tpl-edit-receipt-success", {
                    target_url: t.target_url
                })
            })
        })
    })
} (jQuery);