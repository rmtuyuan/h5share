require = function e(i, o, a) {
    function t(r, d) {
        if (!o[r]) {
            if (!i[r]) {
                var l = "function" == typeof require && require;
                if (!d && l) return l(r, !0);
                if (n) return n(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = o[r] = {
                exports: {}
            };
            i[r][0].call(u.exports, function (e) {
                var o = i[r][1][e];
                return t(o ? o : e)
            }, u, u.exports, e, i, o, a)
        }
        return o[r].exports
    }
    for (var n = "function" == typeof require && require, r = 0; r < a.length; r++) t(a[r]);
    return t
}({
    21: [function (e, i, o) {
        $(function () {
            function i() {
                $(function () {
                    var e = ["http://s0.qhimg.com/monitor/;monitor/8e133f74.js", "http://static.huajiao.com/huajiao/web/static/js/common/monitor.js?v=ab6688f", "http://s11.cnzz.com/z_stat.php?id=1255745025&web_id=1255745025"],
                        i = $("#weixin-js").data("src");
                    e.push(i), u.init(r), h.init(), s.init(g), m(e, null, "script", function () {
                        window.monitor && monitor.setProject("huajiao").setUrl(window.location.href), a(), f.init({
                            type: "video",
                            id: r.feedid
                        }, w)
                    }), document.addEventListener("WeixinJSBridgeReady", function () {
                        WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
                            setTimeout(function () {
                                $("div.h5_player_pause").trigger("click"), _vid = $("video")[0], _vid.load(), _vid.play()
                            }, 50)
                        })
                    }, !1)
                })
            }

            function o() {
                p.init(), i(), 1 == r.mode || 3 == r.mode ? (g.uid = l.uid, g.liveid = r.feedid) : 2 == r.mode && (g.uid = d.author.uid, g.liveid = d.feed.relateid)
            }

            function a() {
                var e, i, o, a, n = 1;
                2 == r.mode && (n = l.uid == d.author.uid ? 2 : 3), e = j[n], i = t();
                for (o in e) a = e[o], a.title = a.title.replace(/\{realname\}/g, i.realname), a.content = a.content.replace(/\{title\}/g, i.title), a.content = a.title.replace(/\{realname\}/g, i.realname), a.des = a.content, a.pic = i.image, a.image = i.image;
                for (o in w) w[o] = a;
                return w
            }

            function t() {
                var e = {
                    realname: "",
                    title: "",
                    rec: ""
                };
                return 1 == r.mode || 3 == r.mode ? (e.realname = c.verifiedinfo.realname, e.title = r.title) : 2 == r.mode && (e.realname = d.author.verifiedinfo.realname, e.title = r.title), e.image = r.image, e
            }
            var n = e("../../common/js/module/huajiaoUtils"),
                r = (n.getParamFormUrl, e("./data/feedData")),
                d = e("./data/anchor"),
                l = e("./data/userData"),
                c = (e("./public/huajiaoAjax"), _DATA.author),
                u = e("./public/publicArea"),
                s = e("./public/huajiaoDownload"),
                p = e("./public/addParamForUrl"),
                h = e("./public/downTip"),
                f = e("./public/share"),
                m = e("./public/async");
            e("./public/pop"), n.isIosDevice();
            e("./public/dot");
            var g = {
                    uid: "",
                    liveid: ""
                },
                w = {
                    weibo: null,
                    weixin: null,
                    circle: null,
                    qq: null,
                    qqzone: null
                },
                j = {
                    1: {
                        normal: {
                            title: "「{录制人{realname}}的花椒小视频",
                            content: "{{title}}{录制人{realname}}的私密小视频，不看就删掉了哦~",
                            pic: "",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        },
                        weibo: {
                            title: "{录制人{realname}}的花椒小视频",
                            content: "{{title}}{@录制人{realname}}的私密小视频，不看就删掉了哦~（使用#花椒直播#录制）",
                            pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        }
                    },
                    2: {
                        normal: {
                            title: "我分享了{被录制主播{realname}}的花椒小视频",
                            content: "{{realname}}{我分享了{被录制主播{realname}}的小视频，快来围观吧！",
                            pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        },
                        weibo: {
                            title: "{被录制主播{realname}}的花椒小视频",
                            content: "{{title}}{我分享了{@被录制主播{realname}}的小视频，快来围观吧！（使用#花椒直播#录制）",
                            pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        }
                    },
                    3: {
                        normal: {
                            title: "{{被录制主播realname}}的花椒小视频",
                            content: "{{title}}我制作的花椒小视频，快来围观吧！",
                            pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        },
                        weibo: {
                            title: "{{被录制主播realname}}的花椒小视频",
                            content: "{{title}}我制作的花椒小视频，快来围观吧！（使用#花椒直播#录制）",
                            pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                            link: window.location.href
                        }
                    }
                };
            o()
        })
    }, {
        "../../common/js/module/huajiaoUtils": 3,
        "./data/anchor": 4,
        "./data/feedData": 5,
        "./data/userData": 8,
        "./public/addParamForUrl": 9,
        "./public/async": 10,
        "./public/dot": 11,
        "./public/downTip": 12,
        "./public/huajiaoAjax": 13,
        "./public/huajiaoDownload": 14,
        "./public/pop": 16,
        "./public/publicArea": 17,
        "./public/share": 19
    }],
    19: [function (e, i, o) {
        i.exports = function () {
            function i(e) {
                e && (u.type = e.type || "custom", u.id = e.id, u.funcs = e.funcs || {}, o())
            }

            function o() {
                var e = u.defaultDocumet.title,
                    i = u.defaultDocumet.content,
                    o = _DATA.author;
                return "off" == _DATA.degrade.share ? (o && (u.defaultDocumet.title = e.replace(/\{nickname\}/g, o.verifiedinfo.realname), u.defaultDocumet.content = i.replace(/\{nickname\}/g, o.verifiedinfo.realname), u.defaultDocumet.image = o.avatar, d("weibo", u.defaultDocumet), d("weixin", u.defaultDocumet), d("circle", u.defaultDocumet), d("qq", u.defaultDocumet), d("qqzone", u.defaultDocumet)), t(), !1) : void a(u.id, u.type)
            }

            function a(e, i) {
                var o = {
                        type: "get",
                        data: {
                            relateid: e,
                            type: i
                        },
                        url: "/api/getShareInfo",
                        dataType: "jsonp"
                    },
                    a = {
                        weibo: "weibo",
                        weixin: "wx",
                        circle: "circle",
                        qq: "qq",
                        qqzone: "qzone"
                    },
                    n = function (e) {
                        var i, o, n = e.data,
                            r = u.defaultDocumet.title,
                            l = u.defaultDocumet.content,
                            c = _DATA.author;
                        if ("0000" != e.code) return console.log("分享接口fail"), !1;
                        if (c)
                            for (i in a) o = a[i], "0000" == n.weibo.e ? d(i, n[o].r) : (u.defaultDocumet.title = r.replace(/\{nickname\}/g, c.verifiedinfo.realname), u.defaultDocumet.content = l.replace(/\{nickname\}/g, c.verifiedinfo.realname), u.defaultDocumet.image = c.avatar, d(i, u.defaultDocumet));
                        t()
                    },
                    r = function (e) {
                        window.console && console.log("获取分享文案失败")
                    };
                $.ajax(o).done(n).fail(r)
            }

            function t() {
                var e = "/wx/getConfig",
                    i = {},
                    o = function (e) {
                        var i = e.data.config;
                        c.appId = i.appId, c.timestamp = i.timestamp, c.nonceStr = i.nonceStr, c.signature = i.signature, n(c)
                    },
                    a = function () {
                        window.console && console.log("获取微信分享配置信息失败")
                    };
                window.wx ? r(e, i, o, a) : window.console && console.log("没有检测到微信js-sdk")
            }

            function n(e) {
                window.wx.config(e), window.wx.ready(function () {
                    window.wx.checkJsApi({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"],
                        success: function (e) {}
                    }), window.wx.onMenuShareTimeline({
                        title: u.circle.content,
                        link: u.circle.link,
                        imgUrl: u.circle.pic
                    }), console.log(u.weixin), window.wx.onMenuShareAppMessage({
                        title: u.weixin.title || document.title || "花椒直播",
                        desc: u.weixin.content,
                        link: u.weixin.link,
                        imgUrl: u.weixin.pic
                    }), window.wx.onMenuShareQQ({
                        title: u.qq.title,
                        desc: u.qq.desc,
                        link: u.qq.link,
                        imgUrl: u.qq.pic
                    }), window.wx.onMenuShareWeibo({
                        title: u.weibo.title,
                        desc: u.weibo.title,
                        link: u.weibo.link,
                        imgUrl: u.weibo.pic
                    }), window.wx.onMenuShareQZone({
                        title: u.qqzone.title,
                        desc: u.qqzone.desc,
                        link: u.qqzone.link,
                        imgUrl: u.qqzone.pic
                    })
                })
            }

            function r(e, i, o, a) {
                $.ajax({
                    url: e,
                    data: i,
                    dataType: "jsonp"
                }).done(function (e) {
                    e && "0000" == e.code && o(e)
                }).fail(function (e) {
                    a(e)
                })
            }

            function d(e, i) {
                return i ? void("Y" == _DATA.feed.feed.share_redpacket ? (u[e].title = "主播正在发花椒豆，快进来~", u[e].content = "土豪直播间正在集人抢" + _DATA.feed.feed.redpacket_info.amount + "豆，主播还超nice，快进来，来不及了~", u[e].pic = "http://p6.yx-s.com/d/inn/e8232970/h5-icon.png", u[e].link = i.url) : (u[e].title = i.title, u[e].content = i.content, u[e].pic = i.image, u[e].link = i.url)) : !1
            }
            var l = {},
                c = (e("../../../common/js/module/huajiaoUtils"), e("../../../common/js/module/huajiaoShare"), {
                    debug: !1,
                    appId: "",
                    timestamp: 0,
                    nonceStr: "",
                    signature: "",
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
                }),
                u = {
                    type: "custom",
                    id: 0,
                    defaultDocumet: {
                        title: "「{nickname}」的直播邀请",
                        content: "【9.14花椒之夜】范爷、张继科携众星带你嗨！「{nickname}」在花椒直播@了你，快去看看吧！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        image: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    documents: {
                        title: "花椒直播邀您一起看世界！",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    weibo: {
                        title: "花椒直播邀您一起看世界！",
                        site: "花椒直播",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    weixin: {
                        title: "花椒直播邀您一起看世界！",
                        desc: "花椒直播邀您一起看世界！",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    circle: {
                        title: "花椒直播邀您一起看世界！",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    qq: {
                        title: "花椒直播邀您一起看世界！",
                        desc: "花椒直播邀您一起看世界！",
                        site: "花椒直播",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    qqzone: {
                        title: "花椒直播邀您一起看世界！",
                        desc: "花椒直播邀您一起看世界！",
                        site: "花椒直播",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    redpackage: {
                        title: "主播正在发红包，快进来~！",
                        desc: "土豪直播间正在集人抢188豆大红包，主播还超nice，快进来，来不及了~",
                        site: "花椒直播",
                        content: "花椒直播邀您一起看世界！",
                        pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                        link: window.location.href
                    },
                    funcs: {
                        weibo: null,
                        weixin: null,
                        circle: null,
                        qq: null,
                        qqzone: null
                    }
                };
            return l.init = function (e, o) {
                if ("off" == _DATA.degrade.wxconfig) return !1;
                if (o)
                    for (var a in o) $.extend(u[a], o[a]);
                i(e)
            }, l
        }()
    }, {
        "../../../common/js/module/huajiaoShare": 2,
        "../../../common/js/module/huajiaoUtils": 3
    }],
    17: [function (e, i, o) {
        i.exports = function () {
            function i() {
                $(window).on("scroll", function () {
                    d(3)
                }), setTimeout(function () {
                    d(3)
                }, 10), $(".js_other_hot").on("click", function (e) {
                    var i = $(".js_playerArea").height() + $(".userinfo").height();
                    return document.body.scrollTop = i, !1
                })
            }

            function o() {
                $(window).on("scroll", function () {
                    l(15)
                }), setTimeout(function () {
                    l(15)
                }, 10), $(".js_other_hot").on("click", function (e) {
                    var i = $(".js_playerArea").height() + $(".userinfo").height();
                    return document.body.scrollTop = i, !1
                })
            }

            function a() {
                var e, i = {
                    offset: 0,
                    num: 15,
                    format: "hot"
                };
                "h5_ligature" == _DATA.page ? (e = p.HOT_LIGATURE, i.uid = _DATA.author.uid) : e = p.HOT_URL, $.ajax({
                    url: e,
                    data: i,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    cache: !1,
                    success: function (e) {
                        return "0000" != e.code ? (console.log("接口错误！"), !1) : void r(e.data)
                    }
                })
            }

            function t() {
                var e = {
                        offset: 0,
                        num: 3,
                        format: "video"
                    },
                    i = p.HOT_VIDEO;
                $.ajax({
                    url: i,
                    data: e,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    cache: !1,
                    success: function (e) {
                        return 0 != e.errno ? (console.log("接口错误！"), $(".js_recommendVideoArea").hide(), $(".js_recommendArea").hide(), !1) : void n(e.data)
                    }
                })
            }

            function n(e) {
                var o, a, t = "";
                for (m = m.join(""), o = 0, a = e.feeds.length; a > o; o++) t += u.formatTpl(m, e.feeds[o].feed);
                return e.feed && !e.feed.length ? ($(".js_video_loading").html("暂无数据！"), !1) : ($(".js_video_loading").hide(), $(".js_hot_video_lists").html(t), void i())
            }

            function r(e) {
                var i, a, t = "";
                for ("h5_ligature" == _DATA.page && (e.feeds = e, f = g), f = f.join(""), i = 0, a = e.feeds.length; a > i; i++) "h5_ligature" == _DATA.page && (e.feeds[i].watches = e.feeds[i].clickCount, e.feeds[i].image = e.feeds[i].feed.image, e.feeds[i].liveid = e.feeds[i].id, e.feeds[i].name = e.feeds[i].author.verifiedinfo.realname, e.feeds[i].uid = e.feeds[i].author.uid, e.feeds[i].staruid = e.feeds[i].staruid), t += u.formatTpl(f, e.feeds[i]);
                return e.feed && !e.feed.length ? ($(".js_loading").html("暂无数据！"), !1) : e.length || "h5_ligature" != _DATA.page ? ($(".js_loading").hide(), $(".js_hot_lists").html(t), void o()) : ($(".js_loading").html("暂无数据！"), !1)
            }

            function d(e) {
                h = $(".js_recommendVideoArea ul");
                var i, o, t, n = h.find("li img[data-src]"),
                    r = n.length;
                if (0 === n.length) return !1;
                e ? (t = isNaN(e) ? 6 : parseInt(e, 10), t = t > r ? r : t) : t = n.length;
                for (var d = 0; t > d; d++) o = n.eq(d), i = o.attr("data-src"), o.attr("src", i), o.removeAttr("data-src");
                a()
            }

            function l(e) {
                h = $(".js_recommendArea ul");
                var i, o, a, t = h.find("li img[data-src]"),
                    n = t.length;
                if (0 === t.length) return !1;
                e ? (a = isNaN(e) ? 6 : parseInt(e, 10), a = a > n ? n : a) : a = t.length;
                for (var r = 0; a > r; r++) o = t.eq(r), i = o.attr("data-src"), i = i.split(".jpg")[0] + "-200_200.jpg", o.attr("src", i), o.removeAttr("data-src")
            }

            function c(e) {
                return "off" == _DATA.degrade.hot ? ($(".js_recommendArea").hide(), $(".js_bttm").hide(), $(".userinfo").css("margin-bottom", 0), !1) : ("h5_video" == _DATA.page ? t() : a(), void(s = e))
            }
            var u = e("../../../common/js/module/huajiaoUtils"),
                s = null,
                p = {
                    HOT_URL: "/api/getHotFeedinfo",
                    HOT_LIGATURE: "/starLianMai/getLianmaiList",
                    HOT_VIDEO: "/api/getVedioData"
                },
                h = null,
                f = ["<li>", '<a href="/l/index?liveid={{liveid}}">', '<img src="http://static.huajiao.com/huajiao/activity/resource_dev/share/image/bkg-default200-30970cc46a.png" data-src="{{image}}"/>', "</a>", "</li>"],
                m = ["<li>", '<a href="/l/index?liveid={{relateid}}">', '<img src="http://static.huajiao.com/huajiao/activity/resource_dev/share/image/bkg-default200-30970cc46a.png" data-src="{{image}}"/>', '<span class="video_start"></span></a>', "</li>"],
                g = ["<li>", '<a href="/l/ligature?fid={{liveid}}&uid={{uid}}&staruid={{staruid}}">', '<img src="http://static.huajiao.com/huajiao/activity/resource_dev/share/image/bkg-default200-30970cc46a.png" data-src="{{image}}"/>', '<div class="nickname_num">', "<code>{{watches}}次</code>", "<span>{{name}}</span>", "</div>", "</a>", "</li>"];
            return {
                init: c
            }
        }()
    }, {
        "../../../common/js/module/huajiaoUtils": 3
    }],
    16: [function (e, i, o) {
        i.exports = function () {
            function i() {
                var e, i = _DATA.page,
                    a = n[i],
                    r = "";
                for (e = 0; e < a.length; e++) r += t[a[e]];
                $("body").append(r), o()
            }

            function o() {
                $(".js_hj_download").on("hjdl", function (e) {
                    var i = $(this),
                        o = null,
                        t = $(e.currentTarget).data("download-id"),
                        n = $(e.currentTarget).data("uid");
                    if (o = i.hasClass("red-paper-wrap") ? $(".js_open_mask") : $(".js_down_mask"), !e._args) return o.hide(), !1;
                    var d = r[i.data("wd")],
                        l = o.find(".js_dl_tip");
                    l.html(d), a.isUpIos9() && (o.find(".js_hj_download").attr("data-download-id", t), o.find(".js_hj_download").attr("data-uid", n)), o.show(), setTimeout(function () {
                        o.hide()
                    }, e._args)
                })
            }
            var a = e("../../../common/js/module/huajiaoUtils"),
                t = (a.getParamFormUrl, e("./tipTpl")),
                n = (window._DATA.feed, {
                    h5_live: ["gift", "chatpop", "lineslow", "livepause"],
                    h5_replay: ["replaybar", "lineslow"],
                    h5_ligature: ["zjkpop", "ligatruebar"],
                    h5_video: ["redpaper", "hjdl"]
                }),
                r = ["即将为您下载全世界最萌的直播App，</br>看直播还有红包拿哦~", "只有下载花椒App，才能查看主播的私密信息哦~", "只有下载花椒App，才能观看更多精彩直播哦~"];
            return {
                init: i
            }
        }()
    }, {
        "../../../common/js/module/huajiaoUtils": 3,
        "./tipTpl": 20
    }],
    14: [function (e, i, o) {
        i.exports = function () {
            function i(e) {
                var i = $(this),
                    a = i.attr("data-download-id") || _DATA.page,
                    r = (i.data("open"), o().os),
                    l = t(a, r, i),
                    c = l.url,
                    p = l.hjUrl,
                    h = (u.isWeixin(), u.isWeibo());
                return h && "ios" === r ? (d(r), !1) : (clearTimeout(s), void n(c, i, p))
            }

            function o() {
                var e;
                return u.isMobileDevice() ? (e = "mb", u.isIosDevice() ? os = "ios" : os = "android") : e = "pc", {
                    device: e,
                    os: os
                }
            }

            function a(e, i) {
                var o, a, t;
                for (o in e) {
                    if (a = e[o], !a) break;
                    t = i.indexOf("?") > -1 ? i + "&" + o + "=" + a : i + "?" + o + "=" + a
                }
                return t
            }

            function t(e, i, o) {
                var t = "http://www.huajiao.com/dl.php",
                    n = "http://huajiao.dl.keniub.com/app/android/apk/",
                    r = ".apk",
                    d = "http://huajiao.dl.keniub.com/app/android/apk/huajiao_fenxiang_release.apk",
                    l = "http://qd.huajiao.com/index.php?id=Tq25M691",
                    c = "ios" == i ? l : d,
                    s = "ios" === i ? "huajiao://huajiao.com/goto/index" : "huajiao://web.huajiao",
                    h = o.data("uid"),
                    f = o.data("time") || 0;
                p.uid = h;
                var m, g, w = {
                        wx: "https://lnk0.com/UxhMtg",
                        circle: "https://lnk0.com/dwBtg8",
                        qq: "https://lnk0.com/QdcQx9",
                        qzone: "https://lnk0.com/xt8QFt",
                        weibo: "https://lnk0.com/oc4kEp",
                        minguo: "https://lnk0.com/1okQJt",
                        erweima: "https://lnk0.com/IxZRx1",
                        shichangerweima: "https://lnk0.com/AhkANp"
                    },
                    j = {
                        erweima: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338997682053",
                        shichangerweima: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338997886640",
                        circle: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1335381160427",
                        wx: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1335380772497",
                        minguo: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338484786652"
                    },
                    _ = {
                        wx: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1359562666138",
                        circle: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1359562543395",
                        qq: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1359562666136",
                        qzone: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1359562666137",
                        weibo: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1359562861653"
                    },
                    v = u.getParamFormUrl("qd"),
                    b = u.getParamFormUrl("reference");
                switch (v = "" !== u.getParamFormUrl("qd") ? v : b, "weixin" == v && (v = "wx"), e) {
                    case "h5_live":
                        _DATA.author.uid && _DATA.feed.feed.relateid && "" !== _DATA.feed.feed.relateid && "" !== _DATA.author.uid ? s = u.isUpIos9() ? "http://share.huajiao.com/download/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid + "&qd=" + v : "huajiao://huajiao.com/goto/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid : (s = "ios" === i ? "huajiao://huajiao.com/goto/index?userid=" : "huajiao://web.huajiao?userid=", s += _DATA.author.uid);
                        break;
                    case "h5_replay":
                        g = "ios" === i ? "huajiao://asdf/newreplay?replayid=" : "huajiao://huajiao.com/goto/replay?replayid=", _DATA.author.uid && _DATA.feed.feed.relateid && "" !== _DATA.feed.feed.relateid && "" !== _DATA.author.uid ? s = u.isUpIos9() ? "http://share.huajiao.com/download/replay?replayid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid : g + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid : (s = "ios" === i ? "huajiao://huajiao.com/goto/index?userid=" : "huajiao://web.huajiao?userid=", s += _DATA.author.uid);
                        break;
                    case "h5_finish":
                        if (!_DATA.author) {
                            u.isUpIos9() && (s = "http://share.huajiao.com/download/index");
                            break
                        }
                        s = u.isUpIos9() ? "http://share.huajiao.com/download/profile?userid=" : "huajiao://huajiao.com/goto/profile?userid=", s += _DATA.author.uid;
                        break;
                    case "h5_ligature":
                        if (!_DATA.author) break;
                        if ("ios" == i) {
                            if (u.isUpIos9()) {
                                s = "http://share.huajiao.com/download/index?userid=";
                                break
                            }
                            s = "huajiao://huajiao.com/goto/index?userid="
                        } else s = "huajiao://web.huajiao?userid=";
                        s += _DATA.author.uid;
                        break;
                    case "h5_profile":
                        if (!_DATA.author) break;
                        if (u.isUpIos9() && (0 == f || !f)) {
                            s = "http://share.huajiao.com/download/profile?userid=" + h;
                            break
                        }
                        s = "huajiao://huajiao.com/goto/profile?userid=" + h;
                        break;
                    case "h5_hot":
                        u.isUpIos9() && 0 == f && (s = "http://share.huajiao.com/download/index");
                        break;
                    case "h5_video":
                        if (u.isUpIos9() && 0 == f) {
                            s = "http://share.huajiao.com/download/videodetail?videoid=" + _DATA.feed.feed.relateid;
                            break
                        }
                        s = "ios" == i ? "huajiao://huajiao.com/goto/videodetail?videoid=" + _DATA.feed.feed.relateid : "huajiao://huajiao.com/goto/video?videoid=" + _DATA.feed.feed.relateid;
                        break;
                    default:
                        c && "" !== c || (c = t)
                }
                return "" !== v && "ios" === i && (c = w[v]), u.isWeixin() && "ios" === i && (c = t), "h5_video" == e && (j = $.extend(j, _)), m = encodeURI(s), "" !== v && "android" === i ? c = u.isWeixin() && j[v] ? "h5_live" === e || "h5_replay" === e || "h5_finish" === e || "h5_profile" === e || "h5_hot" === e || "h5_video" === e ? j[v] + "&android_schema=" + m : j[v] : u.isWeixin() && !j[v] ? t : j[v] ? j[v] + "&android_schema=" + m : n + v + r : "" == v && "android" === i && (c = t), s = a({
                    from: "h5"
                }, s), {
                    url: c || t,
                    hjUrl: s || ""
                }
            }

            function n(e, i, o) {
                var a, t, n = (u.isIosDevice() ? "ios" : "android", u.getParamFormUrl("qd")),
                    d = u.isIosDevice() ? 2e3 : 1e3,
                    l = i.attr("data-download-id") || _DATA.page,
                    c = i.data("open"),
                    s = i.data("time"),
                    p = {
                        AppleTest: 1,
                        wf: 1,
                        huajiao_liulanqi: 1,
                        huajiao_wifi: 1
                    };
                if (e) {
                    if (u.is360view() && u.isAndroidDevice()) {
                        try {
                            MobileSafeJsInterface.openUrl('{url: "' + e + '", type=2}')
                        } catch (h) {}
                        return !1
                    }
                    if (u.isSafe()) return e = "http://msoftdl.360.cn/mobilesafe/shouji360/360safe/neibu/ws_xxl_release.apk", window.location.href = e, !1;
                    if ("h5_live" !== l && "h5_replay" !== l && "h5_ligature" != l && "h5_finish" !== l && "h5_hot" !== l && "h5_profile" !== l && "h5_video" !== l || p[n]) return r(i, e, s), !1;
                    if (("h5_live" !== l || "h5_replay" !== l) && u.isIosDevice() && 1 != c) return r(i, e, s), !1;
                    t = new Date, a = setTimeout(function () {
                        var o = new Date;
                        d + 500 > o - t ? r(i, e, s) : window.close()
                    }, d), $(window).on("visibilitychange webkitvisibilitychange pagehide", function () {
                        clearTimeout(a)
                    }, !1), window.location.href = o
                }
            }

            function r(e, i, o) {
                s = setTimeout(function () {
                    window.location.href = i
                }, o), e.trigger("hjdl", o)
            }

            function d(e) {
                var i;
                u.isWeixin() ? i = "http://static.huajiao.com/huajiao/web/static/images/popbox-ios.jpg" : u.isWeibo() && (i = "http://static.huajiao.com/huajiao/web/static/images/popbox-wb.png");
                var o = $(".js_openPopbox"),
                    a = '<div class="openPopbox js_openPopbox" style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;background: rgba(0, 0, 0, 0.4) url(' + i + ') no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;z-index: 1010;display: none;"></div>';
                0 == o.length && ($("body").append(a), o = $(".js_openPopbox")), o.unbind().click(function () {
                    o.hide(300)
                }), o.show(300)
            }

            function l() {
                var e = $("<script>");
                e.attr("src", "http://s4.qhimg.com/static/fadd33004f7a80af.js"), $("body").append(e)
            }

            function c() {
                var e, a = $(".js_hj_download").attr("data-download-id") || _DATA.page,
                    n = u.getParamFormUrl("qd"),
                    r = u.getParamFormUrl("reference"),
                    d = {
                        wf: 1,
                        liulanqi1: 1,
                        liulanqi2: 1,
                        huajiao_llqzbpd: 1,
                        liulanqi5: 1,
                        sjws_qita: 1,
                        ws_gntj: 1,
                        ws_grh5: 1,
                        huajiao_zb: 1,
                        ws_xxl: 1,
                        AppleTest: 1,
                        ws_xxlqz: 1,
                        huajiao_liulanqi: 1
                    };
                return n = "" !== n ? n : r, u.isSz() ? (l(), !1) : (u.isUpIos9() && !u.isWeibo() && $(".js_hj_download").each(function () {
                    var e = $(this),
                        i = e.data("open"),
                        a = (e.data("time"), e.attr("data-download-id") || _DATA.page),
                        n = o().os;
                    t(a, n, e);
                    return 1 != i ? !1 : "" == _DATA.author && "h5_finish" == a && (u.isWeixin() || u.isQQ()) ? !1 : void 0
                }), $("body").on("click", ".js_hj_download", i), void("h5_live" === a && u.isMobileDevice() && !d[n] && (e = "huajiao://huajiao.com/goto/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid, window.location.href = e)))
            }
            var u = e("../../../common/js/module/huajiaoUtils"),
                s = null,
                p = {
                    liveid: "",
                    uid: ""
                };
            return {
                init: c
            }
        }()
    }, {
        "../../../common/js/module/huajiaoUtils": 3
    }],
    13: [function (e, i, o) {
        i.exports = function () {
            function i(e, i, o) {
                o = o || t, $.ajax({
                    url: e,
                    data: i,
                    type: "POST",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1
                }).done(function (e) {
                    n(e, o)
                }).fail(function (e) {
                    r(e, o)
                })
            }

            function o(e, i, o) {
                o = o || t, $.ajax({
                    url: e,
                    data: i,
                    type: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1
                }).done(function (e) {
                    n(e, o)
                }).fail(function (e) {
                    r(e, o)
                })
            }

            function a(e, i, o) {
                o = o || t, $.ajax({
                    url: e,
                    data: i,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    cache: !1
                }).done(function (e) {
                    n(e, o)
                }).fail(function (e) {
                    r(e, o)
                })
            }

            function t(e) {
                0 == e.code ? l.debug(JSON && JSON.stringify(e.data)) : l.warn("code:" + e.code + ",msg" + e.msg)
            }

            function n(e, i) {
                i(e ? 0 == e.errno ? {
                    code: 0,
                    msg: "success",
                    data: e.data
                } : {
                    code: e.errno,
                    msg: e.errmsg
                } : {
                    code: 90001,
                    msg: "ajax return null"
                })
            }

            function r(e, i) {
                i({
                    code: 90002,
                    msg: "ajax fail"
                })
            }

            function d(e, i, o, a) {
                $.ajax({
                    url: e,
                    data: i,
                    dataType: "jsonp"
                }).done(function (e) {
                    e && "0000" == e.code && o(e)
                }).fail(function (e) {
                    a(e)
                })
            }
            var l = e("../../../common/js/module/huajiaoLog");
            return {
                post: i,
                get: o,
                jsonp: a,
                ajaxJsonp: d
            }
        }()
    }, {
        "../../../common/js/module/huajiaoLog": 1
    }],
    12: [function (e, i, o) {
        i.exports = function () {
            function i(e) {
                var i, u, s = n("qd"),
                    p = _DATA.page;
                l = r[s] || 6e4, d = e, t.isIosDevice() ? $("body").on("touchend", ".js_redpackage_cancel", function (e) {
                    $(this).closest(".popup-dialog").remove(), $(".timer3").length && (i = setTimeout(function () {
                        "none" == $("#js_downed_tip").css("display") && $(".timer3").show(), i = null
                    }, 18e4))
                }) : $("body").on("click", ".js_redpackage_cancel", function (e) {
                    e.stopPropagation(), $(this).closest(".popup-dialog").remove(), $(".timer3").length && (i = setTimeout(function () {
                        "none" == $("#js_downed_tip").css("display") && $(".timer3").show(), i = null
                    }, 18e4))
                }), $("body").on("click", ".js_redpackage_submit", function () {
                    $(this).closest(".popup-dialog").hide()
                }), o(), "h5_live" == p ? (h.init({
                    bindCallback: function () {
                        c = !1, f = !1
                    }
                }), u = setTimeout(function () {
                    "none" == $("#js_downed_tip").css("display") && $(".timer4").show()
                }, 6e4)) : "h5_replay" == p && h.init({
                    bindCallback: function () {
                        c = !1, f = !1
                    }
                }), a()
            }

            function o() {
                var e, i = _DATA.page,
                    o = p[i],
                    a = "";
                if (!o) return !1;
                for (e = 0; e < o.length; e++) "chatpop" == o[e] && "Y" == _DATA.feed.feed.share_redpacket && (o[e] = "chatpopredpackage"), a += u[o[e]];
                $(".js_video_wrap").append(a), "Y" == _DATA.feed.feed.share_redpacket && $(".tool-bar-open-redpackage span").html(_DATA.feed.feed.redpacket_info.amount)
            }

            function a() {
                return $("body").on("click", ".js_hj_download", function () {
                    var e = $("#downloadPopup");
                    return t.isWeibo() && t.isIosDevice() || e.length && !e.is(":hidden") ? !1 : (f = !0, void $("#js_downed_tip").show())
                }), $("body").on("click", ".js_kown", function () {
                    f = !1, c = !1, $("#js_downed_tip").hide(0)
                }), null == d ? !1 : void $(".js_ignore").on("click", function () {
                    $(".js_line_slow").hide()
                })
            }
            var t = e("../../../common/js/module/huajiaoUtils"),
                n = t.getParamFormUrl,
                r = {
                    liulanqi5: 12e4,
                    huajiao_wifi: -1,
                    wf: -1
                };
            _DATA.userName = _DATA.feed.author.verified ? _DATA.feed.author.verifiedinfo.realname : _DATA.feed.author.nickname;
            var d, l, c, u = e("./tipTpl"),
                s = window._DATA.feed,
                p = {
                    h5_live: ["chatpop", "lineslow", "livepause"],
                    h5_replay: ["replaybar", "lineslow"],
                    h5_ligature: ["zjkpop", "ligatruebar"]
                },
                h = function () {
                    function e(e) {
                        a(n), i()
                    }

                    function i() {
                        var e = {};
                        if (d) throw "download_dialog has been init";
                        1 == r ? e.id = "h5_live" : 2 == r && (e.id = "h5_replay");
                        var i = document.createElement("div");
                        i.className = "popup-dialog", i.id = "downloadPopup", t = o(t, e), i.innerHTML = t, d = i, document.body.appendChild(i)
                    }

                    function o(e, i) {
                        var o, a = "";
                        for (var t in i) a = "{{" + t + "}}", o = new RegExp(a, "gm"), e = e.replace(o, i[t]);
                        return e
                    }

                    function a(e) {
                        var i = document.getElementsByTagName("head")[0],
                            o = document.createElement("style");
                        o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), i.appendChild(o)
                    }
                    var t = '<div class="popup-wrap"><div class="popup"><a data-open="true" data-key="浮层" data-dot-mark="h5_down" data-download-id="{{id}}" class="popup-down js_hj_download"><span class="popup-btn">立即打开</span></a></div></div>',
                        n = ".popup-dialog{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:1002;display:none;}.popup-down{width:100%;height:100%;display:block;position:absolute;left:0;top:0;}.popup-wrap{height:100%;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center}.popup{width:250px;height:320px;position:relative;background:#ff4487 url(http://p9.qhimg.com/d/inn/2064fff6/share_pop.png) no-repeat;background-size:100% auto;-webkit-background-size:100% auto;border-radius:10px;-webkit-border-radius:10px}.popup-btn{position:absolute;bottom:20px;left:15px;display:block;margin:0 auto;width:220px;height:40px;border-radius:6px;-webkit-border-radius:6px;background:#000;line-height:40px;color:white;text-align:center;font-size:16px;}",
                        r = s.type,
                        d = null,
                        l = function () {
                            if (!d) throw "use init to initDialog first";
                            d.style.display = "block"
                        };
                    return {
                        init: e,
                        show: l
                    }
                }(),
                f = !1;
            return {
                init: i
            }
        }()
    }, {
        "../../../common/js/module/huajiaoUtils": 3,
        "./tipTpl": 20
    }],
    11: [function (e, i, o) {
        i.exports = function () {
            function i(e) {
                var i, a = $(this),
                    t = a.attr("data-dot-mark"),
                    n = a.attr("data-key"),
                    r = _DATA.page || "";
                if (i = o.isIosDevice() ? "ios" : "android", t = "huajiao_" + r + t + "_" + i, monitor) {
                    var d = e.target || e,
                        l = {
                            cId: t,
                            c: n || monitor.util.getText(d)
                        };
                    monitor.log(l, "click")
                } else window.console && console.log("没找到monitor")
            }
            var o = e("../../../common/js/module/huajiaoUtils");
            $(".js_hj_download, .js_dot_btn").on("click", i)
        }()
    }, {
        "../../../common/js/module/huajiaoUtils": 3
    }],
    10: [function (e, i, o) {
        i.exports = function () {
            function e(e, i, o, a) {
                function t() {
                    m++, m >= f && c()
                }

                function n(e, i) {
                    f++, e.onload = t, c = i
                }
                for (var r, d = i || document.createElement("div"), l = {
                        link: "href",
                        script: "src"
                    }, c = a || function () {}, u = {
                        link: ["rel", "stylesheet"],
                        script: ["type", "text/javascript"]
                    }, s = u[o][0], p = u[o][1], h = l[o], f = 0, m = 0, g = 0, w = e.length; w > g; g++) r = document.createElement(o), r[h] = e[g], r[s] = p, n(r, c), d.appendChild(r);
                i || (d.style.display = "none", document.body.appendChild(d))
            }
            return e
        }()
    }, {}],
    9: [function (e, i, o) {
        i.exports = function () {
            function e(e) {
                var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                    o = window.location.search.substr(1).match(i);
                return null != o ? decodeURIComponent(o[2]) : ""
            }

            function i(i, o) {
                var a, t, n, r = o.attr("href");
                for (t = 0, a = i.length; a > t; t++) n = i[t], "" != e(n) && (r = r.indexOf("?") > -1 ? r + "&" + n + "=" + e(n) : r + "?" + n + "=" + e(n));
                window.location.href = r
            }

            function o() {
                $("body").on("click", "a", function (e) {
                    var o = $(this),
                        a = o.attr("href"),
                        t = /(http)|(https)|(\/)/g;
                    return a && a.match(t) ? (i(["qd", "reference"], o), !1) : !0
                })
            }
            return {
                init: o
            }
        }()
    }, {}],
    8: [function (e, i, o) {
        i.exports = function () {
            var i = e("../../../common/js/module/huajiaoLog"),
                o = e("./huajiaoConfig"),
                a = e("./formate"),
                t = o.defaultConfig,
                n = window._DATA,
                r = {};
            return n.user ? (r.uid = n.user.uid.toString(), r.nickname = n.user.nickname || t.nickname, r.avatar = n.user.avatar || t.avatar41, r.avatar_l = n.user.avatar_l || t.avatar60, r.signature = n.user.signature, r.gender = n.user.gender, r.astro = n.user.astro, r.location = a.formateLocation(n.user.location), r.lives = parseInt(n.user.lives, 10), r.watches = parseInt(n.user.watches, 10), r.praises = parseInt(n.user.praises, 10), r.followings = parseInt(n.user.followings, 10), r.followers = parseInt(n.user.followers, 10), r.source = n.user.source, r.followed = n.user.followed, r.blocked = n.user.blocked, r.verified = n.user.verified, r.verifiedinfo = {
                credentials: n.user.verifiedinfo.credentials,
                type: n.user.verifiedinfo.type,
                realname: n.user.verifiedinfo.realname,
                status: n.user.verifiedinfo.status,
                error: n.user.verifiedinfo.error
            }) : i.log("No user data"), r
        }()
    }, {
        "../../../common/js/module/huajiaoLog": 1,
        "./formate": 6,
        "./huajiaoConfig": 7
    }],
    4: [function (e, i, o) {
        i.exports = function () {
            var i = e("../../../common/js/module/huajiaoLog"),
                o = e("./huajiaoConfig"),
                a = (e("./formate"), o.defaultConfig, window._DATA),
                t = {};
            return 2 == a.feed.feed.mode ? t = a.feed.feed.origin : i.log("No anchor data"), t
        }()
    }, {
        "../../../common/js/module/huajiaoLog": 1,
        "./formate": 6,
        "./huajiaoConfig": 7
    }],
    7: [function (e, i, o) {
        i.exports = function () {
            var e = "http://static.huajiao.com/huajiao/web/static/",
                i = "http://www.huajiao.com/api/",
                o = "花椒播主",
                a = e + "images/default/avatar.png",
                t = e + "images/default/avatar_31.png",
                n = e + "images/default/avatar_60.png";
            return {
                urlBase: {
                    "static": e,
                    "interface": i
                },
                defaultConfig: {
                    nickname: o,
                    avatar41: a,
                    avatar31: t,
                    avatar60: n
                }
            }
        }()
    }, {}],
    2: [function (e, i, o) {
        i.exports = function () {
            function e() {
                n = {
                    type: "custom",
                    id: 0,
                    documents: {
                        title: d.title,
                        pic: d.pic,
                        link: window.location.href
                    },
                    weibo: {
                        title: d.title,
                        site: d.site,
                        pic: d.pic,
                        link: window.location.href
                    },
                    weixin: {
                        title: d.title,
                        desc: d.desc,
                        pic: d.pic,
                        link: window.location.href
                    },
                    circle: {
                        title: d.title,
                        pic: d.pic,
                        link: window.location.href
                    },
                    qq: {
                        title: d.title,
                        desc: d.desc,
                        site: d.site,
                        pic: d.pic,
                        link: window.location.href
                    },
                    qqzone: {
                        title: d.title,
                        desc: d.desc,
                        site: d.site,
                        pic: d.pic,
                        link: window.location.href
                    },
                    funcs: {
                        weibo: null,
                        weixin: null,
                        circle: null,
                        qq: null,
                        qqzone: null
                    }
                }
            }

            function i() {
                var e = "http://system.huajiao.com/wx/getconfig",
                    i = {},
                    t = function (e) {
                        var i = e.data.config;
                        r.appId = i.appId, r.timestamp = i.timestamp, r.nonceStr = i.nonceStr, r.signature = i.signature, o(r)
                    },
                    n = function () {
                        window.console && console.log("获取微信分享配置信息失败")
                    };
                window.wx ? a(e, i, t, n) : window.console && console.log("没有检测到微信js-sdk")
            }

            function o(e) {
                window.wx.config(e), window.wx.ready(function () {
                    window.wx.checkJsApi({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"],
                        success: function (e) {}
                    }), window.wx.onMenuShareTimeline({
                        title: n.weixin.desc,
                        link: n.circle.link,
                        imgUrl: n.circle.pic
                    }), window.wx.onMenuShareAppMessage({
                        title: n.weixin.title || "花椒直播",
                        desc: n.weixin.desc,
                        link: n.weixin.link,
                        imgUrl: n.weixin.pic
                    }), window.wx.onMenuShareQQ({
                        title: n.qq.title,
                        desc: n.qq.desc,
                        link: n.qq.link,
                        imgUrl: n.qq.pic
                    }), window.wx.onMenuShareWeibo({
                        title: n.weibo.title,
                        desc: n.weibo.title,
                        link: n.weibo.link,
                        imgUrl: n.weibo.pic
                    }), window.wx.onMenuShareQZone({
                        title: n.qqzone.title,
                        desc: n.qqzone.desc,
                        link: n.qqzone.link,
                        imgUrl: n.qqzone.pic
                    })
                })
            }

            function a(e, i, o, a) {
                $.ajax({
                    url: e,
                    data: i,
                    dataType: "jsonp"
                }).done(function (e) {
                    e && "0" == e.errno && o(e)
                }).fail(function (e) {
                    a(e)
                })
            }

            function t(e) {
                var i = navigator.userAgent.toLowerCase(),
                    o = {
                        ios: /iphone|ipad|ipod/,
                        and: /android/
                    },
                    a = {
                        relateId: "laxin123",
                        titile: "花椒直播  发红包了",
                        content: "我使用花椒直播赚钱，有福同享，送你大红包一起来吧",
                        img: "http://static.huajiao.com/huajiao/202944587200951588.png",
                        url: "http://www.huajiao.com"
                    };
                if ($.extend(a, e), o.ios.test(i)) {
                    var t = 0,
                        n = 0,
                        r = a.relateId,
                        d = a.title,
                        l = a.content,
                        c = a.img,
                        u = a.url;
                    window.location.href = "huajiao://h5fenxiang/share?messageType=" + n + "&shareType=" + t + "&title=" + d + "&content=" + l + "&imageUrlString=" + c + "&linkUrlString=" + u + "&relateId=" + r
                } else if (o.and.test(i)) {
                    var r = a.relateId,
                        s = a.url,
                        d = a.title,
                        p = a.content,
                        h = a.img;
                    CallShare.callShare(r, s, d, p, h)
                }
                return !1
            }
            var n, r = {
                    debug: !1,
                    appId: "",
                    timestamp: 0,
                    nonceStr: "",
                    signature: "",
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
                },
                d = {
                    site: "花椒直播",
                    title: "花椒直播",
                    desc: "我使用花椒直播赚钱，有福同享，送你大红包一起来吧",
                    pic: "http://static.huajiao.com/huajiao/202944587200951588.png",
                    link: window.location.href
                },
                l = function (o) {
                    d = o ? $.extend(d, o) : d, e(), i()
                };
            return {
                wxShare: l,
                appShare: t
            }
        }()
    }, {}]
}, {}, [21]);