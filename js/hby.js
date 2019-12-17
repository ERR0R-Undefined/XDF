//红包雨
$(function() {
    $(".hby_kai").click(function() {
        var price_i = getRandom(60);
        switch (price_i) {
            case 1:
                $(".hby_price_i").html("50");
                break;
            case 2:
                $(".hby_price_i").html("50");
                break;
            case 3:
                $(".hby_price_i").html("50");
                break;
            case 4:
                $(".hby_price_i").html("50");
                break;
            case 5:
                $(".hby_price_i").html("50");
                break;
            case 6:
                $(".hby_price_i").html("50");
                break;
            case 7:
                $(".hby_price_i").html("50");
                break;
            case 8:
                $(".hby_price_i").html("50");
                break;
            case 9:
                $(".hby_price_i").html("50");
                break;
            case 10:
                $(".hby_price_i").html("50");
                break;
            case 11:
                $(".hby_price_i").html("50");
                break;
            case 12:
                $(".hby_price_i").html("50");
                break;
            case 13:
                $(".hby_price_i").html("50");
                break;
            case 14:
                $(".hby_price_i").html("50");
                break;
            case 15:
                $(".hby_price_i").html("50");
                break;
            case 16:
                $(".hby_price_i").html("50");
                break;
            case 17:
                $(".hby_price_i").html("50");
                break;
            case 18:
                $(".hby_price_i").html("50");
                break;
            case 19:
                $(".hby_price_i").html("50");
                break;
            case 20:
                $(".hby_price_i").html("50");
                break;
            case 21:
                $(".hby_price_i").html("50");
                break;
            case 22:
                $(".hby_price_i").html("50");
                break;
            case 23:
                $(".hby_price_i").html("50");
                break;
            case 24:
                $(".hby_price_i").html("50");
                break;
            case 24:
                $(".hby_price_i").html("50");
                break;
            case 25:
                $(".hby_price_i").html("50");
                break;
            case 26:
                $(".hby_price_i").html("50");
                break;
            case 27:
                $(".hby_price_i").html("50");
                break;
            case 28:
                $(".hby_price_i").html("50");
                break;
            case 29:
                $(".hby_price_i").html("50");
                break;
            case 30:
                $(".hby_price_i").html("50");
                break;
            case 31:
                $(".hby_price_i").html("50");
                break;
            case 32:
                $(".hby_price_i").html("50");
                break;
            case 32:
                $(".hby_price_i").html("50");
                break;
            case 33:
                $(".hby_price_i").html("50");
                break;
            case 34:
                $(".hby_price_i").html("50");
                break;
            case 35:
                $(".hby_price_i").html("50");
                break;
            case 36:
                $(".hby_price_i").html("50");
                break;
            case 37:
                $(".hby_price_i").html("50");
                break;
            case 38:
                $(".hby_price_i").html("50");
                break;
            case 39:
                $(".hby_price_i").html("50");
                break;
            case 40:
                $(".hby_price_i").html("50");
                break;
            case 41:
                $(".hby_price_i").html("50");
                break;
            case 42:
                $(".hby_price_i").html("50");
                break;
            case 43:
                $(".hby_price_i").html("50");
                break;
            case 44:
                $(".hby_price_i").html("50");
                break;
            case 45:
                $(".hby_price_i").html("50");
                break;
            case 46:
                $(".hby_price_i").html("50");
                break;
            case 47:
                $(".hby_price_i").html("50");
                break;
            case 48:
                $(".hby_price_i").html("50");
                break;
            case 49:
                $(".hby_price_i").html("50");
                break;
            case 50:
                $(".hby_price_i").html("50");
                break;
            case 51:
                $(".hby_price_i").html("100");
                break;
            case 52:
                $(".hby_price_i").html("100");
                break;
            case 53:
                $(".hby_price_i").html("100");
                break;
            case 54:
                $(".hby_price_i").html("100");
                break;
            case 55:
                $(".hby_price_i").html("100");
                break;
            case 56:
                $(".hby_price_i").html("200");
                break;
            case 57:
                $(".hby_price_i").html("200");
                break;
            case 58:
                $(".hby_price_i").html("300");
                break;
            case 59:
                $(".hby_price_i").html("400");
                break;
            case 60:
                $(".hby_price_i").html("500");
                break;
            default:
                $(".hby_price_i").html("50");
        }
        $(".hby_gai").animate(
            {
                marginTop: "30px"
            },
            1000
        );
    });
    $(".syhb_btn").click(function() {
        $(".hby_content").fadeIn();
    });
    $(".clos_hby").click(function() {
        $(".hby_content").hide();
        // $(".hby_gai").css("marginTop", "-440px")
    });
    var ad_hb_box_i = 1;

    function add_hbyli(hby_a) {
        var hby_js_i = 0;
        var hby_li_time = getRandom(6);
        var hby_left = getRandom(2000);
        var hby_top = -200;
        var hby_top_a = getRandom(5);
        var hby_list_a =
            '<a href="javascript:;" class="hby_list syhb_btn ssyhby_a' +
            hby_a +
            '"></a>';
        $("body").prepend(hby_list_a);

        $(".syhb_btn").click(function() {
            $(".hby_content").fadeIn();
        });
        var ssss = getRandom(3);
        if (ssss > 2) {
            var time_hby = setInterval(function() {
                $(".ssyhby_a" + hby_a + "").css({
                    transform: "rotate(" + -hby_js_i + "deg)",
                    left: hby_left
                });
                hby_js_i += hby_li_time;
            }, 100);
        } else {
            var time_hby = setInterval(function() {
                $(".ssyhby_a" + hby_a + "").css({
                    transform: "rotate(" + -hby_js_i + "deg)",
                    left: hby_left
                });
                hby_js_i -= hby_li_time;
            }, 100);
        }
        var hby_last = setInterval(function() {
            $(".ssyhby_a" + hby_a + "").css({
                top: hby_top
            });
            hby_top = hby_top + hby_top_a;
            if (hby_top >= 3000) {
                $(".ssyhby_a" + hby_a + "").remove();
            }
        }, 10);
    }
    var ad_hb_fun = setInterval(function() {
        add_hbyli(ad_hb_box_i);
        ad_hb_box_i++;
        if (ad_hb_box_i > 100) {
            clearInterval(ad_hb_fun);
        }
    }, 60);

    function getRandom(n) {
        return Math.floor(Math.random() * n + 1);
    }
    var hby_line =
        "<p class='syhb_a'><a href='javascript:;' class='syhb_btn'></a><span class='syhb_btn_zw'></span><a href='javascript:;' class='syhb_btn'></a><span class='syhb_btn_zw'></span></p><p class='syhb_b'><a href='javascript:;' class='syhb_btn'></a><span class='syhb_btn_zw'></span><a href='javascript:;' class='syhb_btn'></a><span class='syhb_btn_zw'></span></p>";
    141;
    var docu_height = $(document).height() / 141 - 12;

    for (var ii = 0; ii <= docu_height; ii++) {
        $(".hb_box_left").prepend(hby_line);
        $(".hb_box_right").prepend(hby_line);
    }
});

$(function() {
    var page_main_width = $(".zzxdf_xbyb").width();
    var hb_box_width = $(window).width() - page_main_width;
    var body_con_height =
        $(".banner").height() +
        $(".navx").height() +
        $(".head").height() +
        $(".top").height() +
        18;
    var hb_box_height = $(window).height() - body_con_height;
    $(".hb_box_left").css({
        position: "fixed",
        height: hb_box_height,
        width: hb_box_width / 2,
        left: "0px",
        top: body_con_height,
        overFlow: "hidden"
    });
    $(".hb_box_right").css({
        position: "fixed",
        height: hb_box_height,
        width: hb_box_width / 2,
        right: "0px",
        top: body_con_height,
        overFlow: "hidden"
    });
    $(window).scroll(function() {
        $(".hb_box_left").css({
            height: hb_box_height + $(document).scrollTop(),
            top: body_con_height - $(document).scrollTop()
        });
        $(".hb_box_right").css({
            height: hb_box_height + $(document).scrollTop(),
            top: body_con_height - $(document).scrollTop()
        });
    });
    $(window).load(function() {
        $(".hb_box_right").css({
            height: hb_box_height + $(document).scrollTop(),
            top: body_con_height - $(document).scrollTop()
        });
    });
});
// var str = new Date();
// var date = str.getFullYear() + "年" + (str.getMonth() + 1) + "月" + str.getDate() + "号" + str.getHours() + "点" + str.getMinutes() + "分";
// $(':input[name=time]').val(date);

// var url = location.search; //获取url中"?"符后的字串
// if (url.indexOf("?") != -1) {
//     $(':input[name=channel]').val(url.substr(1));
// }

// var site = window.location.href; //获取表单所在网页地址
// $(':input[name=source]').val(site);

// function checkForm() {
//     uname = $('#hbName').val();
//     prof = $('#hbMajor').val();
//     tel = $('#hbTel').val();
//     telReg1 = /^[1-9]\d{7}$/gi;
//     telReg2 = /^[0][1-9]\d{9,10}$/gi;
//     phoneReg = /^[1][0-9]\d{9}$/gi;
//     telReg = /^()$/gi;
//     if (uname == '' || uname == '姓名') {
//         alert("亲，请填写您的姓名！");
//         return false;
//     }
//     if (uname.length < 2 || uname.length > 5) {
//         alert("亲，请正确填写您的姓名！");
//         return false;
//     }
//     if (prof == 0) {
//         alert("亲，请选择您的意向专业！");
//         return false;
//     }
//     if (tel == '' || tel == '联系电话') {
//         alert("亲，请填写您的电话！");
//         return false;
//     }
//     if (!telReg1.test(tel) && !telReg2.test(tel)) {
//         if (!phoneReg.test(tel)) {
//             alert("亲，请正确填写您的电话！");
//             return false;
//         }
//     }
// }

/* 红包表单对接信息系统 */
// 发送信息系统方法
var hbSend = function() {
    var name01 = $("#hbName").val();
    var nameLabel = $("#hbName").attr("data-label");
    var tel01 = $("#hbTel").val();
    var telLabel = $("#hbTel").attr("data-label");
    var sex01 = $("#hbSex").val();
    var sexLabel = $("#hbSex").attr("data-label");
    var major01 = $("#money").text();
    var majorLabel = $("#money").attr("data-label");
    var age01 = $("#hbAge").val();
    var ageLabel = $("#hbAge").attr("data-label");
    var url = window.location.href;
    var ipLabel = "ip";
    var ip = returnCitySN["cip"];
    var orderTime = new Date();
    var searchUrl = window.location.search;
    var postUrl;
    if (searchUrl.indexOf("bdyd") != -1) {
        postUrl = "bdyd-m";
    } else if (searchUrl.indexOf("bdxd") != -1) {
        postUrl = "bdxd-m";
    } else if (searchUrl.indexOf("bdpc") != -1) {
        postUrl = "bdpc-m";
    } else if (searchUrl.indexOf("sgyd") != -1) {
        postUrl = "sgyd-m";
    } else if (searchUrl.indexOf("sg2yd") != -1) {
        postUrl = "sg2yd-m";
    } else if (searchUrl.indexOf("sgpc") != -1) {
        postUrl = "sgpc-m";
    } else if (searchUrl.indexOf("sm") != -1) {
        postUrl = "sm-m";
    } else if (searchUrl.indexOf("360") != -1) {
        postUrl = "360-m";
    } else if (
        searchUrl.indexOf("wxgzh") != -1 ||
        searchUrl.indexOf("vxgzh") != -1
    ) {
        postUrl = "vx-m";
    } else {
        postUrl = "m";
    }

    //定义发送数据格式
    var data = {
        data: {
            click_id: "",
            url: url,
            account_id: "",
            order_time: orderTime,
            data: [
                {
                    label: nameLabel,
                    value: name01
                },
                {
                    label: telLabel,
                    value: tel01
                },
                {
                    label: sexLabel,
                    value: sex01
                },
                {
                    label: majorLabel,
                    value: major01
                },
                {
                    label: ageLabel,
                    value: age01
                },
                {
                    label: ipLabel,
                    value: ip
                }
            ]
        }
    };

    console.log(data);

    $.ajax({
        type: "POST",
        url: "https://form.szxdfpr.cn/txgdt.php?qd=" + postUrl,
        // url: "https://developer.szxdfpr.cn/txgdt.php?qd="+postUrl,
        data: JSON.stringify(data),
        dataType: "json",
        success: function(e) {
            console.log(e);
        },
        fail: function(b) {
            console.log(b);
        }
    });
};

/* 红包对接钉钉 */
$("#hbBtn").click(function() {
    var name = $("#hbName").val();
    var tel = $("#hbTel").val();
    var sex = $("#hbSex").val();
    var major = $("#money").text();
    var channel = $("#hbChannel").val();
    var source = $("#hbSource").val();
    var ip = returnCitySN["cip"];

    telReg1 = /^[1-9]\d{7}$/gi;
    telReg2 = /^[0][1-9]\d{9,10}$/gi;
    phoneReg = /^[1][0-9]\d{9}$/gi;
    telReg = /^()$/gi;
    if (name == "" || name == "姓名是必填的哦～") {
        alert("亲，请填写您的姓名！");
        return false;
    }
    if (name.length < 2 || name.length > 5) {
        alert("亲，请正确填写您的姓名！");
        return false;
    }
    if (tel == "" || tel == "电话是必填项哦～") {
        alert("亲，请填写您的电话！");
        return false;
    }
    if (!telReg1.test(tel) && !telReg2.test(tel)) {
        if (!phoneReg.test(tel)) {
            alert("亲，请正确填写您的电话！");
            return false;
        }
    }

    $.ajax({
        url: "https://admin.szxdfpr.cn/api/v1/dingRobot/in",
        type: "get",
        data: {
            name: name,
            sex: sex,
            tel: tel,
            major: major,
            ip: ip,
            fromurl: source,
            channel: channel
        },
        dataType: "jsonp",
        success: function(e) {
            console.log(e);
        },
        fail: function(b) {
            console.log(b);
        }
    });
    hbSend();
    alert(
        "中奖信息提交成功！咨询老师马上联系您！奖券只能中奖一次，不可叠加使用，中奖金额以第一次提交为准！"
    );
});
