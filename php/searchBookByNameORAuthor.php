<?php
require_once('connectvars.php');
header("Content-Type:text/html;charset=utf-8");

$book_key = $_POST['book_key'];

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$link) {
    die("连接失败: " . mysqli_connect_errno() . "<br>");
} else {
    $sql = "select * from books where book_name like '%$book_key%' OR book_author like '%$book_key%';";
    $query = mysqli_query($link, $sql);
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

    //dump出来就是一个二维数组了(σﾟ∀ﾟ)σ
    // $res_all = mysqli_fetch_array(mysqli_query($link, $sql));
    // if (!empty($res_all["search_id"])) {
    //     $flag = 1;
    //     echo json_encode($res_all);
    // } else {
    //     echo json_encode($flag);
    // }
}
mysqli_close($link);