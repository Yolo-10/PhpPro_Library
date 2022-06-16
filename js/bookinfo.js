console.log('bookinfo:');

window.onload = function () {
    // 将参数转换成数组形式
    const book_key = decodeURIComponent(location.search.substr(1).split("&")[0].split('=')[1]);
    const search_id = decodeURIComponent(location.search.substr(1).split("&")[1].split('=')[1]);
    // console.log(book_key);
    // console.log(search_id);

    // 搜索框中显示关键字
    $(searchbook).val(book_key);

    // 发送请求
    // 请求体数据
    var infoData = new FormData();
    infoData.append("search_id", search_id);

    // 发送请求
    $.ajax({
        url: '../php/searchBookBySearchId.php',
        type: 'POST',
        data: infoData,
        contentType: false,
        processData: false,
        success: function (end) {
            // 没有匹配到数据
            let json = eval(end);
            console.log(json);
            console.log(json[0].book_name);

            $('.book_name').text(json[0].book_name);
            $('.book_author').text(json[0].book_author);
            $('.book_ISBN').text(json[0].book_ISBN);
            $('.book_pubDate').text(json[0].book_pubDate);
            $('.book_publisher').text(json[0].book_publisher);
            $('.search_id').text(json[0].search_id);
            $('.storage_time').text(json[0].storage_time);
            if (json[0].book_img) {
                $('.book_img').attr('src', json[0].book_img);

            }

            $.each(json, function (index, value) {
                const {
                    storage_place,
                    search_id,
                    book_id,
                    is_borrowed
                } = value;
                // console.log(storage_place);
                // console.log(search_id);
                // console.log(book_id);
                // console.log(is_borrowed);



                var row = $("#tr_modern").clone().attr('id', 'book' + index);
                row.show();
                row.find(".tr_num").text(index + 1);
                row.find(".tr_searchId").text(search_id);
                row.find(".tr_bookId").text(book_id);
                row.find(".tr_place").text(storage_place);
                if (is_borrowed == 0) {
                    row.find('.tr_isborrow').text('可借');
                } else if (is_borrowed == 1) {
                    row.find('.tr_isborrow').text('借出');
                    row.find('.tr_isborrow').attr('class', 'cannot');
                }
                row.appendTo("#book_td");
            });
        },
        error: function () {
            console.log('请求失败');
        }
    })
}

$('#before_search').click(function () {
    console.log('开始搜索')
    let key = $('#searchbook').val();
    if (key.trim('') == "") {
        alert('当前搜索为空，请输入');
    } else {
        location.replace("../html/searchresult.html?book_key=" + key);
    }
})
$('#after_search').click(function () {
    console.log('开始搜索')
    let key = $('#searchbook').val();
    if (key.trim('') == "") {
        alert('当前搜索为空，请输入');
    } else {
        location.replace("../html/searchresult.html?book_key=" + key);
    }
})