//密码少于6位提示
$('#psw1').bind('input propertychange', function () {
    if ($(this).val().length < 6) {
        console.log("hhhhhhhh");
        $('.pswLimit').css({
            "display": "block"
        });
        $('#logo_psw1').css({
            "visibility": "hidden"
        });
    } else {
        console.log("xxxxxxxx");
        $('#logo_psw1').css({
            "visibility": "visible"
        });
        $('.pswLimit').css({
            "display": "none"
        });
    }
})

//两次密码输入不匹配提示
$('#psw2').bind('input propertychange', function () {
    if ($(this).val() != $('#psw1').val()) {
        console.log("hhhhhhhh");
        $('.psw_diff').css({
            "display": "block"
        });
        $('#logo_psw2').css({
            "visibility": "hidden"
        });
    } else {
        console.log("xxxxxxxx");
        $('.psw_diff').css({
            "display": "none"
        });
        $('#logo_psw2').css({
            "visibility": "visible"
        });
    }
})

//手机号输入不正确提示
$('#input_phone').bind('input propertychange', function () {
    var temp = $(this).val()
    if (temp.length != 11 || isNaN(temp)) {
        console.log("hhhhhhhh");
        $('.phone_limit').css({
            "display": "block"
        });
        $('#logo_phone').css({
            "visibility": "hidden"
        });
    } else {
        console.log("xxxxxxxx");
        $('.phone_limit').css({
            "display": "none"
        });
        $('#logo_phone').css({
            "visibility": "visible"
        });
    }
})

//姓名为空提示
$('#input_name').bind('change', function () {
    if ($(this).val().length != 0) {
        console.log($(this).val().length);
        $('#logo_name').css({
            "visibility": "visible"
        });

    } else {
        console.log("xxxxxxxx");
        $('#logo_name').css({
            "visibility": "hidden"
        });
    }
})
//验证码为空提示
$('#input_id').bind('change', function () {
    if ($(this).val().length != 0) {
        console.log($(this).val().length);
        $('#logo_id').css({
            "visibility": "visible"
        });
    } else {
        console.log("xxxxxxxx");
        $('#logo_id').css({
            "visibility": "hidden"
        });
    }
})

//注册按钮点击事件
$("#submit").click(function () {
    var identity = -1;
    var type = null;
    var name = $('#input_name').val();
    var psw = $('#psw1').val();
    var psw1 = $('#psw2').val();
    var phone = $('#input_phone').val();
    var id = $('#input_id').val();
    console.log("name:" + name + "psw:" + psw + "phone:" + phone + "id:" + id);
    //判断身份
    if ($("#radio1:checked").val() != null) {
        identity = 1;
        type = "readers";
        console.log("11");
    }
    if ($("#radio2:checked").val() != null) {
        identity = 2;
        type = "managers";
        console.log("22");
    }
    if (identity == -1) {
        alert("您还未选择身份");
        return false;
    } else if (name.length == 0) {
        alert("用户名不能为空");
        return false;
    } else if (psw.length == 0) {
        alert("密码不能为空");
        console.log(psw)
        return false;
    } else if (psw.length < 6) {
        alert("密码不得少于6位");
        console.log(psw)
        return false;
    } else if (psw != psw1) {
        alert("两次输入密码不一致");
        console.log(psw)
        return false;
    } else if (phone.length == 0) {
        alert("手机号不能为空");
        console.log(phone);
        return false;
    } else if (phone.length != 11) {
        alert("手机号输入错误");
        console.log(phone);
        return false;
    } else if (id != "x5tb") {
        alert("验证码输入错误")
        return false;
    } else {
        var infoData = new FormData();
        infoData.append("r_name", $("#input_name").val());
        infoData.append("r_password1", $("#psw1").val());
        infoData.append("r_password2", $("#psw2").val());
        infoData.append("r_tel", $("#input_phone").val());
        infoData.append("r_type", type);
        console.log(infoData);
        $.ajax({
            url: '../php/managerRegister.php',
            type: 'POST',
            data: infoData,
            contentType: false,
            processData: false,
            success: function (end) {
                console.log("end:" + end);
                if (end == 0) {
                    alert("该手机号已注册。")
                } else {
                    var u_id = end;
                    alert("注册成功 \n 您的借阅卡号为" + u_id);
                    window.location.href = "sign.html"; //登录读者页面
                }
            },
            error: function () {
                alert("注册失败！");
            }
        })

    }


})


//点击重置按钮
$('#reset').click(function () {
    $('input:radio').prop('checked', false);
    $('.inputbox').val("");
    $('.pss').css({
        "display": "none"
    })
    $('.logo').css({
        "visibility": "hidden"
    })
})