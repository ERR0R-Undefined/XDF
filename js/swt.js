/*可获取用户,通过哪个关键词访问该页*/
//var refer = document.referrer;
//var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
//var re_domain = reg.exec(refer) ? reg.exec(refer)[0] : refer;
//var keyword = '';
//if(re_domain.indexOf("baidu.com") > 0){
//	keyword = keyword ? keyword : decodeURIComponent(getUrlParam(refer, 'wd'));
//	keyword = keyword ? keyword : decodeURIComponent(getUrlParam(refer, 'word'));
//	keyword = keyword ? keyword : decodeURIComponent(getUrlParam(refer, 'p'));
//} else if(re_domain.indexOf("sogou.com") > 0) {
//	keyword = decodeURIComponent(getUrlParam(refer, 'query'));
//} else if(re_domain.indexOf("sm.cn") > 0) {
//	keyword = decodeURIComponent(getUrlParam(refer, 'q'));
//}else{
//	keyword = "本校";
//}
///*if(document.querySelector('#searchWord')) {
//	document.querySelector('#searchWord').value = keyword;
//}*/
//
//function getUrlParam(url, paras) {
//	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
//	var paraObj = {}
//	for(i = 0; j = paraString[i]; i++) {
//		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
//	}
//	var returnValue = paraObj[paras.toLowerCase()];
//	if(typeof(returnValue) == "undefined") {
//		return "";
//	} else {
//		return returnValue;
//	}
//}
//

document.write('<script language="javascript" src="https://ryak66.kuaishang.cn/bs/ks.j?cI=673576&fI=69971"></script>');
// document.body.innerHTML = '<script language="javascript" src="https://ryak66.kuaishang.cn/bs/ks.j?cI=673576&fI=69971"></script>';
function openZoosUrl() {
    window.open("https://ryak66.kuaishang.cn/bs/im.htm?cas=59019___673576&fi=69971");
}

// 快商通访问来源，以及跳转对话窗口
var onKST = function (text, isMobile, cv) {
    if (cv) {
        cv = cv;
    } else {
        cv = '';
    }
    // ksChatLink = 'https://rytk20.kuaishang.cn/bs/ks.j?cI=607426&fI=125019&ism=1' + '&cv=' + cv;
    // ksChatLink = 'https://rytk20.kuaishang.cn/bs/im.htm?cas=122560___607426&fi=125019' + '&cv=' + cv;
    ksChatLink = 'https://ryak66.kuaishang.cn/bs/im.htm?cas=59019___673576&fi=69971' + '&cv=' + cv;
    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function (e) {
                return r[e]
            }];
            e = function () {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('j Q(a,b){3(!a)9 K;9 v y("(^|&)"+b+"=([^&]*)(&|$)","i").17(a)}j H(a,b){4 c=a.h(\'?\');3(c==-1)9\'\';a=a.15(c+1,a.D);4 d=v y("(^|&)"+b+"=([^&]*)(&|$)","i");4 r=a.L(d);3(r!=M)9 N(r[2]);9\'\'}3(13&&5.h(\'s=1\')==-1){3(5.h(\'?\')==-1){5+=\'?s=1\'}6{5+=\'&s=1\'}}4 7,E=5;4 w=5.12("?");w.11("");3(n P!=\'S\'&&P==A){7=A}6 3(Q(w[1],\'s\')){7=K}6{7=A}j l(){4 a=\'\';m{4 b=H(5,\'Z\');3(b){4 c=\'\';4 d=k.X.L(v y(\'(^| )\'+b+\'V\'+b+\'=([^;]*)(;|$)\'));3(d!=M){c=N(d[2])}3(c){a+=\'&U=\'+c}}}q(e){}4 f="";m{3(O.k.t.D>0){f=O.k.t}}q(e){f=k.t}3(!f||f.D==0){f=k.t}a+=\'&T=\'+C(u.z.B);3(f)a+=\'&10=\'+C(f);3(o)a+=\'&J=\'+C(o);3(5.h(\'?\')==-1){a=\'?\'+a.W(1)}5+=a;3(!7){u.z.B=5}6{4 g=u.Y(5,\'G\');3(g){m{g.18()}q(e){}}6{u.z.B=5}}}3(n 8!=\'S\'){4 p={};3(o)p[\'J\']=o;3(x)p[\'x\']=x;3(7)p[\'14\']=\'G\';m{3(n 8.F==\'j\'){3(7&&E.h(\'16\')==-1&&!8.R){8.R=E}8.F(p)}6 3(n 8.I==\'j\'){8.I(p)}6{l()}}q(e){l()}}6{l()}', 62, 71, '|||if|var|ksChatLink|else|openNewChatWin|KS|return||||||||indexOf||function|document|ksOpenLink|try|typeof|text||catch||ism|referrer|window|new|localArr|cv|RegExp|location|true|href|encodeURIComponent|length|_ksChatLink|openChatWin|_blank|getQueryString|openChatLink|sText|false|match|null|unescape|opener|ksUserDefinedOpenNewChatWin|checkQueryString|customUrl|undefined|dp|vi|_KS_|substring|cookie|open|cas|ref|push|split|isMobile|oTarget|substr|kuaishang|test|focus'.split('|'), 0, {}));
}

/*微信弹窗界面*/
//var swtWx = [
//	"<style>*{margin:0;padding:0;}.all_mid {box-sizing:border-box;-webkit-box-sizing:border-box;margin:0 auto;font-family:'微软雅黑';font-size:14px;max-width:640px}.topTips {z-index:4;}#LXB_CONTAINER.lxb-container {z-index:4;}.ly-header {width:100%;background:#393a3f;height:40px;}.ly-header nav {height:40px;background:#393a3f;}.ly-header nav a i {float:right;width:1px;height:20px;margin:10px 0 0 0;background:#2e2e32}.ly-header nav p {color:#FFF;font-size:0.3rem;height:40px;line-height:40px;text-align:center;font-size:18px}.ly-header nav a:nth-child(2) {float:right;width:50px;height:40px;background:url('https://m.szxdfpr.cn/images/wechat.png') no-repeat scroll 10px -45px;background-size:140%}.ly-section1 {background:#ebebeb;padding:1px 0 5px 0;}.ly-section1 .line {margin:0 0 0 15px;}.ly-section1 .left {float:left;width:90%;margin:0 0 0 0;}.ly-section1 .left div {position:relative;margin:0 0 0 60px;padding:10px;background:#FFF;color:#323232;border:1px solid #d5d5d5;border-radius:6px;}.time {font-size:18px;color:#fff;text-align:center;margin-top:8px;margin-left:38%;border-radius:3px;width:100px;height:20px;line-height:20px;background:#ccc;overflow:hidden;}.ly-section1 .left div i {position:absolute;top:12px;left:-20px;width:20px;height:20px;background:url('https://m.szxdfpr.cn/images/wechat.png') no-repeat scroll 0 -200px;transform:rotate(-180deg)}.ly-section1 .left img {float:left;width:40px;height:40px;border-radius: 10px;}.ly-section1 .left div img {float:none;width:10%;}.ly-section1 figure {width:95%;margin:3px auto;overflow:hidden;border-bottom:1px solid #CCCCCC;}.ly-section1 .zzh {width:100%;float:left;display:block;margin-bottom:15px;}.ly-section1 figcaption {width:68%;float:left;margin-left:2%;}.ly-footer {height:51px;background:#FFF;border-top:1px solid #bfbfbf}.ly-footer .azf1 a {float:left;width:40px;height:50px;background:url('https://m.szxdfpr.cn/images/wechat.png') no-repeat scroll 9px -89px;}.ly-footer .azf2 textarea {float:left;width:60%;height:36px;margin:7px 0 0 0px;color:#000;font-size:16px;line-height:35px;border:none;border-bottom:1px solid #d8d8d8;transition:0.3s;resize:none;/*overflow-y:auto;*/outline:none;}.ly-footer .azf2 textarea:focus {border:none;border-bottom:1px solid #45c01a;}.ly-footer .azf2 textarea.on {border-bottom:#45c01a}.ly-footer .azf2 i {}.ly-footer .azf3 a {float:right;margin-right:10px;width:65px;height:35px;margin-top:-40px;margin:7px 5px 0 0;background:#45c01a;color:#FFF;text-align:center;line-height:35px;border-radius:5px;cursor:pointer;transition:0.3s;}.ly-footer .azf3 a:hover {background-color:#3aa814;}.ly-clear {clear:both;}.ly-hide {display:none;}.ly-animation-bell {display:inline-block;color:#F00;transition:0.5s;}.ly-animation-bell.on {animation:ly-animation-bell 0.5s;}#pfjw {width:100%;z-index:999999;left:0;bottom:0;position:fixed;display:none;}#pfjw .closePop {float:left;width:40px;height:40px;background:url('https://m.szxdfpr.cn/images/wechat.png') no-repeat scroll 20px 18px;background-size:160%;}#pfjw .closePop img {margin:2px auto;display:block;}@keyframes ly-animation-bell {0% {transform:rotate(-5deg);}20% {transform:rotate(10deg);}40% {transform:rotate(-15deg);}60% {transform:rotate(20deg);}80% {transform:rotate(-15deg);}100% {transform:rotate(10deg);}}#LRfloater1 {z-index:99999!important}#tools2,#tools3 {margin:6px 0}</style>",
//	"<div class=\'all_zx\'  id=\'pfjw\' >",
//	"<div class=\'all_mid\'>",
//	"<header style='overflow: hidden; padding-bottom: 0;position:relative ' class=\'ly-header\'>",
//	"<a onclick=\'toolclose();\' class=\'closePop\'></a>",
//	"    <nav style='overflow: initial;padding:0; '>",
//	"        <a><i></i></a>",
//	"        <a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\")\'></a>",
//	"<p>在线老师为您解答！</p>",
//	"    </nav>",
//	"</header>",
//	"",
//	"<div id=\'toopl\' class=\'shadow\'></div>",
//	"<section class=\'ly-section1\' id=\'frist\'>",
//	"",
//	"",
//	"<div id=\'now4\' class=\'time\'></div>",
//	"<dl id=\'tools2\'>",
//	"    <div class=\'line ly-hide\' style=\'display: block;\'>",
//	"        <div class=\'left\'>",
//	"            <a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\")\'><img src=\'https://m.szxdfpr.cn/images/swt/slc.jpg\'></a>",
//	"            <div><a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\")\'>您好，关于"+keyword+"的相关问题我帮你解答</a></div>",
//	"        </div>",
//	"        <div class=\'ly-clear\'></div>",
//	"    </div>",
//	"</dl>",
//	"<dl id=\'tools3\'>",
//	"    <div class=\'line ly-hide\' style=\'display:block\'><!--style=\'block\'-->",
//	"        <div class=\'left\'>",
//	"            <a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\")\'><img src=\'https://m.szxdfpr.cn/images/swt/slc.jpg'></a>",
//	"            <div><a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\")\'>请问是您本人要学习还是代亲戚朋友咨询的呢？</a></div>",
//	"        </div>",
//	"        <div class=\'ly-clear\'></div>",
//	"    </div>",
//	"</dl>",
//	"</section>",
//	"",
//	"<footer style=\'padding:0;margin-top: 0;margin-bottom: 0px;\' class=\'ly-footer\'>",
//	"    <div class=\'azf1\'><a href=\'tel:0512-65716013\'></a></div>",
//	"    <div class=\'azf2\'>",
//	"        <textarea class='textareathis' placeholder='请输入您要咨询的问题'></textarea>",
//	"        <i></i>",
//	"    </div>",
//	"    <div class=\'azf3\'><a href=\'javascript:;\' onclick=\'openZoosUrl(\"chatwin\",\"&e=ly---\"+document.querySelector(\".textareathis\").value)\'>发送</a></div>",
//	"</footer>",
//	"</div>",
//	"</div>"
//];
//
//var showDiv = document.createElement('div');
//showDiv.innerHTML = swtWx.join('');
//document.body.appendChild(showDiv);
//setTimeout(function() {
//	wechatBox();
//}, 8000);
//
//function fade(element) {
//	var op = 0.1;
//	element.style.display = 'none';
//	var timer = setInterval(function() {
//		if(op >= 1) {
//			clearInterval(timer);
//			element.style.display = 'block';
//		}
//		element.style.opacity = op;
//		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//		op += op * 0.1;
//	}, 10);
//}
//
//function wechatBox() {
//	var now = new Date();
//	var hh = now.getHours();
//	var mm = now.getMinutes();
//	var date4 = document.getElementById("now4");
//	GDW = function(obj) {
//		if(obj < 10) return "0" + obj;
//		else return obj;
//	}
//	date4.innerHTML = GDW(hh) + ":" + GDW(mm);
//	var frist = document.getElementById("pfjw");
//	var toopl = document.getElementById("toopl");
//	var tools2 = document.getElementById("tools2");
//	var tools3 = document.getElementById("tools3");
//	/*控制弹出时间*/
//	function deal() {
//			if(hh >= 8 && hh <= 22) {
//			
//	setTimeout("toolshow()", 1000);
//	
//	toolshow = function() {
//		frist.style.display = "block";
//		tools2.style.display = "none";
//		tools3.style.display = "none";
//		setTimeout(toolshow2, 0);
//		var clearSWTFloatTimer = setInterval(function() {
//			if(document.querySelector("#LRdiv3")) {
//				document.querySelector("#LRdiv3").innerHTML = "";
//				clearInterval(clearSWTFloatTimer);
//			}
//		}, 2000);
//	}
//	toolshow2 = function() {
//		tools2.style.display = "block";
//		setTimeout(toolshow3, 2000);
//	}
//	toolshow3 = function() {
//		tools3.style.display = "block";
//	}
//	toolclose = function() {
//		frist.style.display = "none";
//		toopl.style.display = "none";
//		tools2.style.display = "none";
//		tools3.style.display = "none";
//		setTimeout("toolshow()", 8000);
//	}
//	} else {
//				pfjw.style.display = "none";
//			}
//		}
//		deal();
//}