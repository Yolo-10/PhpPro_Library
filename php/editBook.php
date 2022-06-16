<?php
    require_once('connectvars.php');
    header("Content-Type:text/html;charset=utf-8");
    $link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if (!$link) { 
		die("连接失败: " . mysqli_connect_errno()."<br>"); 
	}
    else{
        $id = $_POST['id'];
        $sid = $_POST['sid'];
        $book_id = $_POST['book_id'];
        $search_id = $_POST['search_id'];
        $ISBN = $_POST['ISBN'];
        $author = $_POST['author'];
        $book_name = $_POST['book_name'];
        $publisher = $_POST['publisher'];
        $publish_time = $_POST['publish_time'];
        $storage_time = $_POST['storage_time'];
        $storage_place = $_POST['storage_place'];
        $updatebooks = "UPDATE books SET search_id= '$search_id' , ISBN = '$ISBN',book_author = '$author',book_publisher = '$publisher',publish_date = '$publish_time',book_name = '$book_name',storage_time = '$storage_time',storage_place = '$storage_place' WHERE search_id='$sid'";
        $updateinventory = "UPDATE book_inventory SET book_id = '$book_id',search_id = '$search_id' WHERE book_id = '$id'";
        $updateinventory1 = "UPDATE book_inventory SET search_id = '$search_id' WHERE search_id = '$sid'";
        mysqli_query($link,$updatebooks);
        mysqli_query($link,$updateinventory);
        mysqli_query($link,$updateinventory1);
        mysqli_close($link);
    }
?>  