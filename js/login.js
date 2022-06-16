var u_id;

$("#login").click(function () {
    var identity = -1;
    //判断身份
    if ($("#radio1:checked").val() != null) {
        identity = 1;
        console.log("11");
    }
    if ($("#radio2:checked").val() != null) {
        identity = 2;
        console.log("22");
    }
    if (identity == -1) {
        alert("您还未选择身份。");
        return false;
    }

    //判断用户名密码是否为空
    if ($("#user_id").val() == "" || $("#user_pwd").val() == "") {
        alert("账号或密码不能为空，请重新输入。");
        return false;
    } else {
        var infoData = new FormData();
        console.log($("#user_id").val());
        console.log($("#user_pwd").val());
        var id = $("#user_id").val();
        if (id.length == 11) {
            infoData.append("user_tel", id);
            infoData.append("user_id", "-1");
            console.log("tel");
        } else {
            infoData.append("user_id", id);
            infoData.append("user_tel", "-1");
            console.log("id");
        }
        infoData.append("user_pwd", $("#user_pwd").val());


        if (identity == 1) { //若身份为读者
            $.ajax({
                url: '../php/readerIn.php',
                type: 'POST',
                data: infoData,
                contentType: false,
                processData: false,
                success: function (end) {
                    console.log(end);
                    if (end == -1) {
                        alert("当前账号不存在。");
                        return false;
                    } else if (end == 0) {
                        alert("账号或密码错误，请重新输入。");
                        return false;
                    } else {
                        alert("登录成功！");
                        var json = JSON.parse(end);
                        localStorage.setItem("user_id", json.reader_id);
                        localStorage.setItem("user_name", json.reader_name);
                        localStorage.setItem("user_pwd", json.reader_pwd);
                        localStorage.setItem("user_tel", json.reader_tel);
                        localStorage.setItem("user_type", "reader");
                        window.location.href = "../html/login_after.html"; //登录读者页面
                        return false;
                    }
                },
                error: function () {
                    alert("登录失败！");
                }
            })
        } else if (identity == 2) { //若身份为管理员
            $.ajax({
                url: '../php/managerIn.php',
                type: 'POST',
                data: infoData,
                contentType: false,
                processData: false,
                success: function (end) {
                    console.log(end);
                    if (end == -1) {
                        alert("当前账号不存在。");
                        return false;
                    } else if (end == 0) {
                        alert("账号或密码错误，请重新输入。");
                        return false;
                    } else {
                        alert("登录成功！");
                        var json = JSON.parse(end);
                        localStorage.setItem("user_id", json.manager_id);
                        localStorage.setItem("user_name", json.manager_name);
                        localStorage.setItem("user_pwd", json.manager_pwd);
                        localStorage.setItem("user_tel", json.manager_tel);
                        localStorage.setItem("user_type", "manager");
                        window.location.href = "../html/login_after.html"; //登录管理员页面
                        return false;
                    }
                },
                error: function () {
                    alert("登录失败！");
                }
            })
        }
    }

})

//点击重置按钮
$('#reset').click(function () {
    $('input:radio').prop('checked', false);
    $('.inputbox').val("");
})