// 页面表单发送信息系统方法
var sendToSystem = function () {
    var nameLabel = $('#formName').attr('data-label');
    var name = $('#formName').val();
    var telLabel = $('#formTel').attr('data-label');
    var tel = $('#formTel').val();
    var sexLabel = $('#formSex').attr('data-label');
    var sex = $('#formSex').val();
    var majorLabel = $('#formMajor').attr('data-label');
    var major = $('#formMajor').val();
    var ageLabel = $('#formAge').attr('data-label');
    var age = $('#formAge').val();
    var url = window.location.href;
    var orderTime = new Date();
    var ipLabel = 'ip';
    var ip = returnCitySN["cip"];
    var searchUrl = window.location.search;
    var postUrl;
    if (searchUrl.indexOf('bdyd') != -1) {
        postUrl = 'bdyd-m';
    } else if (searchUrl.indexOf('bdxd') != -1) {
        postUrl = 'bdxd-m';
    } else if (searchUrl.indexOf('bdpc') != -1) {
        postUrl = 'bdpc-m';
    } else if (searchUrl.indexOf('sgyd') != -1) {
        postUrl = 'sgyd-m';
    } else if (searchUrl.indexOf('sg2yd') != -1) {
        postUrl = 'sg2yd-m';
    } else if (searchUrl.indexOf('sgpc') != -1) {
        postUrl = 'sgpc-m';
    } else if (searchUrl.indexOf('sm') != -1) {
        postUrl = 'sm-m';
    } else if (searchUrl.indexOf('360') != -1) {
        postUrl = '360-m';
    } else if ((searchUrl.indexOf('wxgzh') != -1) || (searchUrl.indexOf('vxgzh') != -1)) {
        postUrl = 'vx-m';
    } else {
        postUrl = 'm';
    }

    //定义发送数据格式
    var data = {
        "data": {
            "click_id": "",
            "url": url,
            "account_id": "",
            "order_time": orderTime,
            "data": [
                {
                    "label": nameLabel,
                    "value": name
                },
                {
                    "label": telLabel,
                    "value": tel
                },
                {
                    "label": sexLabel,
                    "value": sex
                },
                {
                    "label": majorLabel,
                    "value": major
                },
                {
                    "label": ageLabel,
                    "value": age
                },
                {
                    "label": ipLabel,
                    "value": ip
                }
            ]
        }
    };

    console.log(data);

    $.ajax({
        type: "POST",
        // url: "https://developer.szxdfpr.cn/txgdt.php?qd="+postUrl,
        url: "https://developer.szxdfpr.cn/txgdt.php?qd="+postUrl,
        data: JSON.stringify(data),
        dataType: "json",
        success: function (e) {
            console.log(e);
        },
        fail: function (b) {
            console.log(b);
        }
    });
}

//Created by Administrator on 2018/10/24.

var url = location.search; //获取url中"?"符后的字串
if(url.indexOf("?") != -1) {
    $(':input[name=channel]').val(url.substr(1));
}

var site = window.location.href;//获取表单所在网页地址
$(':input[name=source]').val(site);

$("#formBtn").click(
    function(){
        var name = $('#formName').val();
        var tel = $('#formTel').val();
        var sex = $('input:radio[name="formSex"]:checked').val();
        var major = $('#formSex').val();
        var channel= $("input[name='channel']").val();
        var source= $("input[name='source']").val();
        var ip=returnCitySN["cip"];

        telReg1 = /^[1-9]\d{7}$/gi;
        telReg2 = /^[0][1-9]\d{9,10}$/gi;
        phoneReg = /^[1][0-9]\d{9}$/gi;
        telReg = /^()$/gi;
        if(name == '' || name == '姓名是必填的哦～') {
            alert("亲，请填写您的姓名！");
            return false;
        }
        if(name.length < 2 || name.length > 5) {
            alert("亲，请正确填写您的姓名！");
            return false;
        }
        if(tel == '' || tel == '电话是必填项哦～') {
            alert("亲，请填写您的电话！");
            return false;
        }
        if(!telReg1.test(tel) && !telReg2.test(tel)) {
            if(!phoneReg.test(tel)) {
                alert("亲，请正确填写您的电话！");
                return false;
            }
        }
        console.log(tel);
       
        $.ajax({
            url:"https://admin.szxdfpr.cn/api/v1/dingRobot/in",
            type:"get",
            data:{
                name:name,
                sex:sex,
                tel:tel,
                major:major,
                ip:ip,
                fromurl:source,
                channel:channel,
            },
            dataType:"jsonp",
            success:function (e){
                console.log(e);
            },
            fail:function (b) {
                console.log(b);
            }
        });
        sendToSystem();
        alert("提交成功！");
    }
);

function hslxfopen() {
    $(".hslxftcr").animate({
        right: "-5rem"
    });
    $(".hslxftc0").fadeIn();
    $(".hslxftc2").fadeIn()
};

function hslxfclose() {
    $(".hslxftc2").fadeOut();
    $(".hslxftc0").fadeOut();
    $(".hslxftcr").animate({
        right: "2%"
    })
};
$(function () {
    setTimeout("hslxfopen()", "15000");
});

$(".popout_xzzy_s1 li").click(function () {
    $(this).siblings('li').removeClass("xxzy_lis1");
    $(this).addClass("xxzy_lis1");
    $('#sex').val($('.xxzy_lis1').text());
});
$(".popout_xzzy_s2 li").click(function () {
    $(this).siblings('li').removeClass("xxzy_lis2");
    $(this).addClass("xxzy_lis2");
    $('#age').val($('.xxzy_lis2').text());
});
$(".popout_xzzy_s3 li").click(function () {
    $(this).siblings('li').removeClass("xxzy_lis3");
    $(this).addClass("xxzy_lis3");
    $('#prof1').val($('.xxzy_lis3').text());
});


// 发送信息系统方法
var sendSystem = function () {
    var name01 = $('#name').val();
    var nameLabel = $('#name').attr('data-label');
    var tel01 = $('#tel').val();
    var telLabel = $('#tel').attr('data-label');
    var sex01 = $('#sex').val();
    var sexLabel = $('#sex').attr('data-label');
    var major01 = $('#prof1').val();
    var majorLabel = $('#prof1').attr('data-label');
    var age01 = $('#age').val();
    var ageLabel = $('#age').attr('data-label');
    var url = window.location.href;
    var ipLabel = 'ip';
    var ip = returnCitySN["cip"];
    var orderTime = new Date();
    var searchUrl = window.location.search;
    var postUrl;
    if (searchUrl.indexOf('bdyd') != -1) {
        postUrl = 'bdyd-m';
    } else if (searchUrl.indexOf('bdxd') != -1) {
        postUrl = 'bdxd-m';
    } else if (searchUrl.indexOf('bdpc') != -1) {
        postUrl = 'bdpc-m';
    } else if (searchUrl.indexOf('sgyd') != -1) {
        postUrl = 'sgyd-m';
    } else if (searchUrl.indexOf('sg2yd') != -1) {
        postUrl = 'sg2yd-m';
    } else if (searchUrl.indexOf('sgpc') != -1) {
        postUrl = 'sgpc-m';
    } else if (searchUrl.indexOf('sm') != -1) {
        postUrl = 'sm-m';
    } else if (searchUrl.indexOf('360') != -1) {
        postUrl = '360-m';
    } else if ((searchUrl.indexOf('wxgzh') != -1) || (searchUrl.indexOf('vxgzh') != -1)) {
        postUrl = 'vx-m';
    } else {
        postUrl = 'm';
    }

    //定义发送数据格式
    var data = {
        "data": {
            "click_id": "",
            "url": url,
            "account_id": "",
            "order_time": orderTime,
            "data": [
                {
                    "label": nameLabel,
                    "value": name01
                },
                {
                    "label": telLabel,
                    "value": tel01
                },
                {
                    "label": sexLabel,
                    "value": sex01
                },
                {
                    "label": majorLabel,
                    "value": major01
                },
                {
                    "label": ageLabel,
                    "value": age01
                },
                {
                    "label": ipLabel,
                    "value": ip
                }
            ]
        }
    };

    console.log(data);

    $.ajax({
        type: "POST",
        // url: "https://form.szxdfpr.cn/txgdt.php?qd=" + postUrl,
        url: "https://developer.szxdfpr.cn/txgdt.php?qd="+postUrl,
        data: JSON.stringify(data),
        dataType: "json",
        success: function (e) {
            console.log(e);
        },
        fail: function (b) {
            console.log(b);
        }
    });
}



//Created by Administrator on 2018/10/24.

var url = location.search; //获取url中"?"符后的字串
if (url.indexOf("?") != -1) {
    $(':input[name=channel]').val(url.substr(1));
}

var site = window.location.href; //获取表单所在网页地址
$(':input[name=source]').val(site);

$("#sub1").click(
    function () {
        var sex = $('#sex').val();
        var age = $('#age').val();
        var tel = $("#tel").val();
        var major = $("#prof1").val();
        var channel = $("input[name='channel']").val();
        var source = $("input[name='source']").val();
        var ip = returnCitySN["cip"];

        telReg1 = /^[1-9]\d{7}$/gi;
        telReg2 = /^[0][1-9]\d{9,10}$/gi;
        phoneReg = /^[1][0-9]\d{9}$/gi;
        telReg = /^()$/gi;


        if (tel == '' || tel == '电话是必填项哦～') {
            alert("亲，请填写您的电话！");
            return false;
        }
        if (!telReg1.test(tel) && !telReg2.test(tel)) {
            if (!phoneReg.test(tel)) {
                alert("亲，请正确填写您的电话！");
                return false;
            }
        }

        if (sex == '') {
            alert("请选择性别");
            return false;
        }

        if (age == '') {
            alert("请选择年龄");
            return false;
        }

        if (major == '') {
            alert("请选择专业");
            return false;
        }

        console.log(tel);

        $.ajax({
            url: "https://admin.szxdfpr.cn/api/v1/dingRobot/in",
            type: "get",
            data: {
                name: name,
                sex: sex,
                tel: tel,
                major: major,
                problem: age,
                ip: ip,
                fromurl: source,
                channel: channel,
            },
            dataType: "jsonp",
            success: function (e) {
                console.log(e);
            },
            fail: function (b) {
                console.log(b);
            }
        });
        // 同时调用发送信息系统方法
        sendSystem();

        alert("提交成功！")
    }
);