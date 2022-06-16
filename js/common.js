$('#user_center').click(function () {
  var type = localStorage.getItem("user_type");
  console.log(type);
  if (type == "reader")
    window.location.href = "../html/userCenter.html";
  else
    window.location.href = "../html/managerCenter.html";
})

$(function () {
  //一段正则，匹配所有_min.的图片src属性
  var test = /_min\./
  //遍历所有的图片节点
  $("img").each(function (index, obj) {
    if (test.test($(this).attr("src"))) {
      var reSrc = $(this).attr("src").replace(test, ".");
      $(this).attr("src", reSrc)
    }
  })
})

$('.mainBtn').click(function () {
  window.location.href = "../html/login_after.html";
})
$('.borrowBookBtn').click(function () {
  window.location.href = "../html/borrowBook.html";
})
$('.returnBookBtn').click(function () {
  window.location.href = "../html/returnBook.html";
})
$('.renewBtn').click(function () {
  window.location.href = "../html/renewBook.html";
})
$('.adviceBtn').click(function () {
  window.location.href = "../html/advice.html";
})
$('.userCenterBtn').click(function () {
  window.location.href = "../html/userCenter.html";
})
$('.returnBtn').click(function () {
  window.history.go(-1);
})

$('.agreeToBorrow').click(function () {
  window.location.href = "../html/borrowBook3.html";
})
$('.agreeToReturn').click(function () {
  window.location.href = "../html/returnBook3.html";
})
$('.agree').click(function () {
  window.location.href = "../html/returnBook4.html";
})

$('.submitAdvice').click(function () {
  if ($('#adviceTitle').val() == "" || $('#adviceInf').val() == "") {
    alert("输入不能为空！");
  } else {
    alert("反馈提交成功");
    $('#adviceTitle').val("");
    $('#adviceInf').val("");
  }
})

$('#book1').click(function () {
  if ($('#choose1').css("display") == "none") {
    $('#choose1').css({
      "display": "block"
    });
    $('#book1').css({
      "color": "#35A7FF",
      "border-color": "#35A7FF"
    });
  } else {
    $('#choose1').css({
      "display": "none"
    });
    $('#book1').css({
      "color": "#000",
      "border-color": "#000"
    });
  }
})

$('#book2').click(function () {
  if ($('#choose2').css("display") == "none") {
    $('#choose2').css({
      "display": "block"
    });
    $('#book2').css({
      "color": "#35A7FF",
      "border-color": "#35A7FF"
    });
  } else {
    $('#choose2').css({
      "display": "none"
    });
    $('#book2').css({
      "color": "#000",
      "border-color": "#000"
    });
  }
})

$('#book3').click(function () {
  if ($('#choose3').css("display") == "none") {
    $('#choose3').css({
      "display": "block"
    });
    $('#book3').css({
      "color": "#35A7FF",
      "border-color": "#35A7FF"
    });
  } else {
    $('#choose3').css({
      "display": "none"
    });
    $('#book3').css({
      "color": "#000",
      "border-color": "#000"
    });
  }
})

$('.agreeToRenew').click(function () {
  window.location.href = "../html/renewBook2.html";
})