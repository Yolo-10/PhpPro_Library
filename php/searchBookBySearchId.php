<?php
require_once('connectvars.php');
header("Content-Type:text/html;charset=utf-8");

$search_id = $_POST['search_id'];

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$link) {
    die("连接失败: " . mysqli_connect_errno() . "<br>");
} else {
    $sql = "select * from books a ,book_inventory b where a.search_id = b.search_id AND a.
    search_id='$search_id';";

    $query = mysqli_query($link, $sql);
    // 数据库查询错误的输出
    if (!$query) {
        printf("Error: %s\n", mysqli_error($link));
        exit();
    }

    $list = []; //定义数组

    //这里要注意就是$info一定不能写成跟fetch里面的$query一样
    while ($info = mysqli_fetch_array($query)) {
        $list[] = $info;
    }

    if (empty($list)) {
        echo 0;
    } else {
        echo json_encode($list);
    }
}
mysqli_close($link);