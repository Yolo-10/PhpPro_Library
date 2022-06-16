var addP = "<p>";
var addP1 = "</p>";

//点击选择文件
$('.submit').click(function () {
    $('.bgcolor').css({
        "display": "block"
    });
    $('.inputBox').css({
        "display": "block"
    });
    console.log("submit");
})
$('#cancel').click(function () {
    $('.bgcolor').css({
        "display": "none"
    });
    $('.inputBox').css({
        "display": "none"
    });
    $('#fileName').empty();
    console.log("cancel");
    localStorage.setItem("file", "");
    $('#inputBook').val("");
})
$('.ps').click(function () {
    $('#inputBook').click();
    console.log("上传文件")
})
//选择文件事件
$('#inputBook').change(function () {
    console.log("选择文件");
    var file = $(this);
    var fileLen = file[0].files.length;
    var items = file[0].files;
    console.log("length:" + fileLen);
    if (fileLen <= 0)
        return;
    else { //处理每个文件
        console.log("点一下");
        $('.ps').css({
            "display": "none"
        });
        $('.addBookBtn').css({
            "display": "block"
        });
        var html = '';
        html += addP + items[0].name + addP1; //输出文件名
        console.log(items[0].name);
        console.log(file.val()); //文件地址
        console.log(items[0].type);
        //读取文件内容
        if (typeof (FileReader) != "undefined") {
            console.log("11111111");
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary',
                    cellDates: true
                });
                workbook.SheetNames.forEach(function (sheetName) {
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    if (XL_row_object.length > 0) {
                        var books = JSON.stringify(XL_row_object);
                        localStorage.setItem("file", books);
                    }

                })
            };
            reader.onerror = function (event) {
                console.error("File could not be read! Code " + event.target.error.code);
            };
            // 读取上传文件为二进制
            reader.readAsBinaryString(items[0]);
        }
        // reader.readAsText(items[0]);
        $('#fileName').append(html);

    }
})
//点击取消按钮
$('#no').click(function () {
    $('.ps').css({
        "display": "block"
    });
    $('.addBookBtn').css({
        "display": "none"
    });
    $('#fileName').empty();
    localStorage.setItem("file", "");
    $('#inputBook').val("");
})

//点击确定按钮
$('#yes').click(function () {
    $('#fileName').empty();
    var file = localStorage.getItem("file");
    if (file == "") {
        alert("该文件为空，请重新选择");
        $('.ps').css({
            "display": "block"
        });
        $('.addBookBtn').css({
            "display": "none"
        });
        // console.log("点一下");
        $('#fileName').empty();
        localStorage.setItem("file", "");
    } else {
        var json = JSON.parse(file);
        console.log(json);
        console.log(json[0]);
        for (let i in json) {
            console.log(i + ":" + json[i].book_name);
            var bookData = new FormData();
            bookData.append("book_id", json[i].book_id);
            bookData.append("search_id", json[i].search_id);
            bookData.append("ISBN", json[i].ISBN);
            bookData.append("author", json[i].book_author);
            bookData.append("book_name", json[i].book_name);
            bookData.append("publisher", json[i].book_publisher);
            bookData.append("publish_time", json[i].publish_date.substring(0, 10));
            bookData.append("storage_time", json[i].storage_time.substring(0, 10));
            bookData.append("storage_place", json[i].storage_place);
            $.ajax({
                url: '../php/addBook.php',
                type: 'POST',
                data: bookData,
                contentType: false,
                processData: false,
                success: function (end) {
                    console.log("end" + i + ":" + end);
                    if (end == "falsefalse" || end == "truefalse" || end == "falseture") {
                        alert("条码号为：" + json[i].book_id + "图书数据不完整，上新失败");
                    }
                },
                error: function () {
                    alert("上新失败！");
                }
            })
        }
        alert("上新完成！");
        $('.ps').css({
            "display": "block"
        });
        $('.addBookBtn').css({
            "display": "none"
        });
        $('#inputBook').val("");
    }
})