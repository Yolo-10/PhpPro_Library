// const delBtn = document.querySelector('.danger_del');
var flag = 0;
var id;
var sid;

function deleteBook() {
    var msg = "确认该条图书信息吗？";
    if (confirm(msg)) {
        // 发送ajax请求
        alert('删除成功');
    }
}
$('#book_id').bind('change', function () {
    var bookData = new FormData();
    id = $(this).val();
    bookData.append("book_id", id);
    console.log("bookData:" + bookData.get("book_id"));
    $.ajax({
        url: '../php/searchBookById.php',
        type: 'POST',
        data: bookData,
        contentType: false,
        processData: false,
        success: function (end) {
            console.log("end1:" + end);
            if (end == 0) {
                $('.bookLimit').css({
                    "display": "block"
                });
                $("#search_id").val("");
                $("#ISBN").val("");
                $("#author").val("");
                $("#book_name").val("");
                $("#publisher").val("");
                $("#publish_time").val("");
                $("#storage_time").val("");
                $("#storage_place").val("");
            } else {
                $('.bookLimit').css({
                    "display": "none"
                });
                console.log("该图书存在");
                var json = JSON.parse(end)
                sid = json.search_id;
                $("#search_id").val(json.search_id);
                $("#ISBN").val(json.ISBN);
                $("#author").val(json.book_author);
                $("#book_name").val(json.book_name);
                $("#publisher").val(json.book_publisher);
                $("#publish_time").val(json.publish_date);
                $("#storage_time").val(json.storage_time);
                $("#storage_place").val(json.storage_place);
                flag = 1;
            }
            return false;
        }
    })
})

$('.submit').click(function () {
    if (flag == 1) {
        var book_id = $("#book_id").val();
        var search_id = $("#search_id").val();
        var ISBN = $("#ISBN").val();
        var author = $("#author").val();
        var book_name = $("#book_name").val();
        var publisher = $("#publisher").val();
        var publish_time = $("#publish_time").val();
        var storage_time = $("#storage_time").val();
        var storage_place = $("#storage_place").val();

        var editData = new FormData();
        editData.append("id", id);
        editData.append("sid", sid);
        editData.append("book_id", book_id);
        editData.append("search_id", search_id);
        editData.append("ISBN", ISBN);
        editData.append("author", author);
        editData.append("book_name", book_name);
        editData.append("publisher", publisher);
        editData.append("publish_time", publish_time);
        editData.append("storage_time", storage_time);
        editData.append("storage_place", storage_place);

        if (confirm("是否确认修改？")) {
            $.ajax({
                url: '../php/editBook.php',
                type: 'POST',
                data: editData,
                contentType: false,
                processData: false,
                success: function (end) {
                    alert("修改成功！");
                    // const selectSecondNav = document.querySelector('.second_active'); //选中的二级导航栏
                    // location.reload();
                    // history.go(0);
                    // selectSecondNavs.click();
                    return false;
                }
            })
        }
    } else {
        alert("该图书不存在");
    }
})

$('.danger_del').click(function () {
    if (flag == 1) {
        var delData = new FormData();
        console.log("id:" + id);
        delData.append("id", id);
        delData.append("sid", sid);
        if (confirm("是否确认删除该图书？")) {
            $.ajax({
                url: '../php/delBook.php',
                type: 'POST',
                data: delData,
                contentType: false,
                processData: false,
                success: function (end) {
                    console.log("end2:" + end);
                    alert("删除成功");
                    // const selectSecondNav = document.querySelector('.second_active'); //选中的二级导航栏
                    // location.reload();
                    // selectSecondNavs.click();
                    // history.go(0);
                    return false;
                }
            })
        }
    } else {
        alert("该图书不存在");
    }
})