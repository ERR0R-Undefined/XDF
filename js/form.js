// 打开弹窗
function hslxfopen() {
    $(".hslxftcr").animate({
        right: "-5rem"
    });
    $(".hslxftc0").fadeIn();
    $(".hslxftc2").fadeIn();
}

// 关闭弹窗
function hslxfclose() {
    $(".hslxftc2").fadeOut();
    $(".hslxftc0").fadeOut();
    $(".hslxftcr").animate({
        right: "2%"
    });
}

// 自动再次打开弹出
$(function() {
    setTimeout("hslxfopen()", "15000");
});

// 性别选择
$(".popout_xzzy_s1 li").click(function() {
    $(this)
        .siblings("li")
        .removeClass("xxzy_lis1");
    $(this).addClass("xxzy_lis1");
    $("#sex").val($(".xxzy_lis1").text());
});

// 年龄选择
$(".popout_xzzy_s2 li").click(function() {
    $(this)
        .siblings("li")
        .removeClass("xxzy_lis2");
    $(this).addClass("xxzy_lis2");
    $("#age").val($(".xxzy_lis2").text());
});

// 专业选择
$(".popout_xzzy_s3 li").click(function() {
    $(this)
        .siblings("li")
        .removeClass("xxzy_lis3");
    $(this).addClass("xxzy_lis3");
    $("#prof1").val($(".xxzy_lis3").text());
});

// 快商通传值方法
var onKST = function(text, isMobile, cv, isForm = false) {
    if (isForm) {
        var name = document.getElementById("formName");
        var tel = document.getElementById("formTel");
        cv = "姓名：" + name.value + "<br/>联系电话：" + tel.value;
    }

    ksChatLink =
        "https://ryak66.kuaishang.cn/bs/im.htm?cas=59019___673576&fi=69971" +
        "&cv=" +
        cv;
    eval(
        (function(p, a, c, k, e, r) {
            e = function(c) {
                return (
                    (c < a ? "" : e(parseInt(c / a))) +
                    ((c = c % a) > 35
                        ? String.fromCharCode(c + 29)
                        : c.toString(36))
                );
            };
            if (!"".replace(/^/, String)) {
                while (c--) r[e(c)] = k[c] || e(c);
                k = [
                    function(e) {
                        return r[e];
                    }
                ];
                e = function() {
                    return "\\w+";
                };
                c = 1;
            }
            while (c--)
                if (k[c])
                    p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            return p;
        })(
            "j Q(a,b){3(!a)9 K;9 v y(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\").17(a)}j H(a,b){4 c=a.h('?');3(c==-1)9'';a=a.15(c+1,a.D);4 d=v y(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\");4 r=a.L(d);3(r!=M)9 N(r[2]);9''}3(13&&5.h('s=1')==-1){3(5.h('?')==-1){5+='?s=1'}6{5+='&s=1'}}4 7,E=5;4 w=5.12(\"?\");w.11(\"\");3(n P!='S'&&P==A){7=A}6 3(Q(w[1],'s')){7=K}6{7=A}j l(){4 a='';m{4 b=H(5,'Z');3(b){4 c='';4 d=k.X.L(v y('(^| )'+b+'V'+b+'=([^;]*)(;|$)'));3(d!=M){c=N(d[2])}3(c){a+='&U='+c}}}q(e){}4 f=\"\";m{3(O.k.t.D>0){f=O.k.t}}q(e){f=k.t}3(!f||f.D==0){f=k.t}a+='&T='+C(u.z.B);3(f)a+='&10='+C(f);3(o)a+='&J='+C(o);3(5.h('?')==-1){a='?'+a.W(1)}5+=a;3(!7){u.z.B=5}6{4 g=u.Y(5,'G');3(g){m{g.18()}q(e){}}6{u.z.B=5}}}3(n 8!='S'){4 p={};3(o)p['J']=o;3(x)p['x']=x;3(7)p['14']='G';m{3(n 8.F=='j'){3(7&&E.h('16')==-1&&!8.R){8.R=E}8.F(p)}6 3(n 8.I=='j'){8.I(p)}6{l()}}q(e){l()}}6{l()}",
            62,
            71,
            "|||if|var|ksChatLink|else|openNewChatWin|KS|return||||||||indexOf||function|document|ksOpenLink|try|typeof|text||catch||ism|referrer|window|new|localArr|cv|RegExp|location|true|href|encodeURIComponent|length|_ksChatLink|openChatWin|_blank|getQueryString|openChatLink|sText|false|match|null|unescape|opener|ksUserDefinedOpenNewChatWin|checkQueryString|customUrl|undefined|dp|vi|_KS_|substring|cookie|open|cas|ref|push|split|isMobile|oTarget|substr|kuaishang|test|focus".split(
                "|"
            ),
            0,
            {}
        )
    );
};

// 表单发送快商通方法
var submitData = function() {
    onKST("表单", true, "访客输入的信息", true);
};

// 发送信息系统方法
var sendToSystem = function() {
    $.ajax({
        url: "https://crm.szxdfpr.cn/index.php/web_submit",
        type: "POST",
        data: $("#formData").serialize(),
        dataType: "json",
        success: function(e) {
            console.log(e);
        },
        fail: function(b) {
            console.log(b);
        }
    });
};

// 网页表单发送按钮
$("#formBtn").click(function() {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var name = document.getElementById("formName");
    var tel = document.getElementById("formTel");

    if (name.value == "") {
        alert("请输入您的真实姓名");
        name.focus();
        return false;
    }

    if (!myreg.test(tel.value)) {
        alert("请输入正确的手机号码");
        tel.focus();
        return false;
    }

    submitData();
    sendToSystem();
});

// 快商通传值方法
var onKST01 = function(text, isMobile, cv, isForm = false) {
    if (isForm) {
        var age = document.getElementById("popAge");
        var major = document.getElementById("popMajor");
        var gender = document.getElementById("popGender");
        var tel = document.getElementById("popTel");

        cv =
            "<br/>年龄：" +
            age.value +
            "<br/>专业：" +
            major.value +
            "<br/>性别：" +
            gender.value +
            "<br/>联系电话：" +
            tel.value;
    }

    ksChatLink =
        "https://ryak66.kuaishang.cn/bs/im.htm?cas=59019___673576&fi=69971" +
        "&cv=" +
        cv;
    eval(
        (function(p, a, c, k, e, r) {
            e = function(c) {
                return (
                    (c < a ? "" : e(parseInt(c / a))) +
                    ((c = c % a) > 35
                        ? String.fromCharCode(c + 29)
                        : c.toString(36))
                );
            };
            if (!"".replace(/^/, String)) {
                while (c--) r[e(c)] = k[c] || e(c);
                k = [
                    function(e) {
                        return r[e];
                    }
                ];
                e = function() {
                    return "\\w+";
                };
                c = 1;
            }
            while (c--)
                if (k[c])
                    p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            return p;
        })(
            "j Q(a,b){3(!a)9 K;9 v y(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\").17(a)}j H(a,b){4 c=a.h('?');3(c==-1)9'';a=a.15(c+1,a.D);4 d=v y(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\");4 r=a.L(d);3(r!=M)9 N(r[2]);9''}3(13&&5.h('s=1')==-1){3(5.h('?')==-1){5+='?s=1'}6{5+='&s=1'}}4 7,E=5;4 w=5.12(\"?\");w.11(\"\");3(n P!='S'&&P==A){7=A}6 3(Q(w[1],'s')){7=K}6{7=A}j l(){4 a='';m{4 b=H(5,'Z');3(b){4 c='';4 d=k.X.L(v y('(^| )'+b+'V'+b+'=([^;]*)(;|$)'));3(d!=M){c=N(d[2])}3(c){a+='&U='+c}}}q(e){}4 f=\"\";m{3(O.k.t.D>0){f=O.k.t}}q(e){f=k.t}3(!f||f.D==0){f=k.t}a+='&T='+C(u.z.B);3(f)a+='&10='+C(f);3(o)a+='&J='+C(o);3(5.h('?')==-1){a='?'+a.W(1)}5+=a;3(!7){u.z.B=5}6{4 g=u.Y(5,'G');3(g){m{g.18()}q(e){}}6{u.z.B=5}}}3(n 8!='S'){4 p={};3(o)p['J']=o;3(x)p['x']=x;3(7)p['14']='G';m{3(n 8.F=='j'){3(7&&E.h('16')==-1&&!8.R){8.R=E}8.F(p)}6 3(n 8.I=='j'){8.I(p)}6{l()}}q(e){l()}}6{l()}",
            62,
            71,
            "|||if|var|ksChatLink|else|openNewChatWin|KS|return||||||||indexOf||function|document|ksOpenLink|try|typeof|text||catch||ism|referrer|window|new|localArr|cv|RegExp|location|true|href|encodeURIComponent|length|_ksChatLink|openChatWin|_blank|getQueryString|openChatLink|sText|false|match|null|unescape|opener|ksUserDefinedOpenNewChatWin|checkQueryString|customUrl|undefined|dp|vi|_KS_|substring|cookie|open|cas|ref|push|split|isMobile|oTarget|substr|kuaishang|test|focus".split(
                "|"
            ),
            0,
            {}
        )
    );
};

// 表单发送快商通方法
var submitData01 = function() {
    onKST01("表单", true, "访客输入的信息", true);
};

// 发送信息系统方法
var sendToSystem01 = function() {
    $.ajax({
        url: "https://crm.szxdfpr.cn/index.php/web_submit",
        type: "POST",
        data: $("#formData01").serialize(),
        dataType: "json",
        success: function(e) {
            console.log(e);
        },
        fail: function(b) {
            console.log(b);
        }
    });
};

// 网页表单发送按钮
$("#sub1").click(function() {
    var tel = document.getElementById("popTel");
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

    if (!myreg.test(tel.value)) {
        alert("请输入正确的手机号码");
        tel.focus();
        return false;
    }

    submitData01();
    sendToSystem01();
});
