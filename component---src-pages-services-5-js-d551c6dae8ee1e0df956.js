"use strict";
(self.webpackChunkspet_gatsby = self.webpackChunkspet_gatsby || []).push([
    [4893], {
        9314: function(e, t, a) {
            var c = a(7294);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function n(e, t) {
                if (null == e) return {};
                var a, c, l = function(e, t) {
                    if (null == e) return {};
                    var a, c, l = {},
                        n = Object.keys(e);
                    for (c = 0; c < n.length; c++) a = n[c], t.indexOf(a) >= 0 || (l[a] = e[a]);
                    return l
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (c = 0; c < n.length; c++) a = n[c], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a])
                }
                return l
            }
            var r = (0, c.forwardRef)((function(e, t) {
                var a = e.color,
                    r = void 0 === a ? "currentColor" : a,
                    s = e.size,
                    i = void 0 === s ? 24 : s,
                    m = n(e, ["color", "size"]);
                return c.createElement("svg", l({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, m), c.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), c.createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "16"
                }), c.createElement("line", {
                    x1: "8",
                    y1: "12",
                    x2: "16",
                    y2: "12"
                }))
            }));
            r.displayName = "PlusCircle", t.Z = r
        },
        6160: function(e, t, a) {
            a.r(t);
            var c = a(7294),
                l = a(3231),
                n = a(4816),
                r = a(626),
                s = a(7801),
                i = a(2998),
                m = a(5444),
                o = a(9314),
                d = a(8264),
                E = a(3594),
                v = a(7797),
                g = a(5600),
                u = a(3234),
                f = a(2017),
                b = a(8321),
                p = a(7079),
                y = a(1096);
            t.default = function() {
                return c.createElement(l.Z, null, c.createElement(n.Z, {
                    title: "Services 5"
                }), c.createElement(r.Z, null), c.createElement(i.Z, {
                    pageTitle: "Services Style Five"
                }), c.createElement("div", {
                    className: "agency-services-area ptb-80 pb-50"
                }, c.createElement("div", {
                    className: "container"
                }, c.createElement("div", {
                    className: "row justify-content-center"
                }, c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: d.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "IT Professionals")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))), c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: E.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "Software Engineers")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))), c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: v.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "Web Development")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))), c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: g.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "SEO & Content")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))), c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: u.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "Digital Marketing")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))), c.createElement("div", {
                    className: "col-lg-4 col-sm-6 col-md-6"
                }, c.createElement("div", {
                    className: "agency-services-box"
                }, c.createElement("img", {
                    src: f.Z,
                    alt: "image"
                }), c.createElement("div", {
                    className: "content"
                }, c.createElement("h3", null, c.createElement(m.Link, {
                    to: "/service-details"
                }, "Data Analysts")), c.createElement(m.Link, {
                    to: "/service-details",
                    className: "read-more-btn"
                }, "Read More ", c.createElement(o.Z, null))))))), c.createElement("div", {
                    className: "shape2 rotateme"
                }, c.createElement("img", {
                    src: b.Z,
                    alt: "shape"
                })), c.createElement("div", {
                    className: "shape3"
                }, c.createElement("img", {
                    src: p.Z,
                    alt: "shape"
                })), c.createElement("div", {
                    className: "shape4"
                }, c.createElement("img", {
                    src: y.Z,
                    alt: "shape"
                })), c.createElement("div", {
                    className: "shape7"
                }, c.createElement("img", {
                    src: y.Z,
                    alt: "shape"
                })), c.createElement("div", {
                    className: "shape8 rotateme"
                }, c.createElement("img", {
                    src: b.Z,
                    alt: "shape"
                }))), c.createElement(s.Z, null))
            }
        },
        8264: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img1-fb50e94f7547cede1bcc161297b3d313.jpg"
        },
        3594: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img2-c3809a2eb6a0baf6b5cb321ed76c29f2.jpg"
        },
        7797: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img3-a2e57eba995428852ec410f6a13ced57.jpg"
        },
        5600: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img4-8dbbb024b3be609d6b6c48f77ae4f095.jpg"
        },
        3234: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img5-afbfbdfd40f8d35e591aa5f5c26423f8.jpg"
        },
        2017: function(e, t, a) {
            t.Z = a.p + "static/agency-services-img6-bcb5415825136fbfa035c524aca18af1.jpg"
        }
    }
]);
//# sourceMappingURL=component---src-pages-services-5-js-d551c6dae8ee1e0df956.js.map