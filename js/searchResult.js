// console.log('seacrchResult:');

window.onload = function () {
    // 删除除第一个子元素以外的子元素
    $('search_list').slice(1).remove();

    // 将参数转换成数组形式
    const paramsArr = location.search.substr(1).split('=');
    //获取搜索关键字，并解码
    const book_key = decodeURIComponent(paramsArr[1]);
    // 搜索框中显示关键字
    if (book_key != "undefined") {
        $('#searchbook').val(book_key);

        // 发送请求
        // 请求体数据
        var infoData = new FormData();
        infoData.append("book_key", book_key);
        // 发送请求
        $.ajax({
            url: '../php/searchBookByNameORAuthor.php',
            type: 'POST',
            data: infoData,
            contentType: false,
            processData: false,
            success: function (end) {
                // 没有匹配到数据
                if (end == 0) {
                    $('#search_list').text('未匹配到相关结果');
                } else {
                    let json = eval(end);
                    var str = '<div style="margin-bottom:20px;color:#333">匹配到' + json.length + '条相关结果</div>';
                    $("#search_list").prepend(str);
                    // console.log(Object.keys(json))
                    // console.log(Object.values(json))
                    // let data = JSON.stringify(Object.entries(json), null, 2);
                    // console.log(data);
                    $.each(json, function (index, value) {
                        const {
                            book_name,
                            book_publisher,
                            book_author,
                            storage_time,
                            search_id,
                            book_img,
                        } = value;

                        var row = $("#book").clone().attr('id', 'book' + index);
                        row.find(".mum").text(index + 1);
                        row.find(".book_name").text(book_name);
                        row.find(".book_author").text(book_author);
                        row.find(".book_publisher").text(book_publisher);
                        row.find(".storage_time").text(storage_time);
                        row.find(".search_id").text(search_id);
                        if (book_img) {
                            row.find('.book_img').attr('src', book_img);
                        }

                        row.css('display', 'block');
                        if (location.pathname.includes('searchresult1.html')) {
                            row.find("a").attr('href', './bookinfo1.html?book_key=' + book_key + '&search_id=' + search_id);
                        } else {
                            row.find("a").attr('href', './bookinfo.html?book_key=' + book_key + '&search_id=' + search_id);

                        }
                        row.appendTo("#search_list");
                    });
                }

            },
            error: function () {
                console.log('请求失败');
            }
        })
    }
}

$("#before_search").click(function () {
    console.log('开始搜索')
    let key = $('#searchbook').val();
    if (key.trim('') == "") {
        alert('当前搜索为空，请输入');
    } else {
        location.replace("/html/searchresult.html?book_key=" + key);
    }
})

$("#after_search").click(function () {
    console.log('开始搜索')
    let key = $('#searchbook').val();
    if (key.trim('') == "") {
        alert('当前搜索为空，请输入');
    } else {
        location.replace("/html/searchresult1.html?book_key=" + key);
    }
})