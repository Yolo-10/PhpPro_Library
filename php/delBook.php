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
        echo $id;
        $selectId = "SELECT * FROM book_inventory WHERE search_id = '$sid'";
        $delbook = "DELETE FROM book_inventory  WHERE book_id='$id'";
        $delbook1 = "DELETE FROM books  WHERE search='$sid'";
        mysqli_query($link,$delbook);
        echo mysqli_fetch_array(mysqli_query($link,$selectId))[0];
        if(empty(mysqli_fetch_array(mysqli_query($link,$selectId))[0])){
            mysqli_query($link,$delbook1);
        }
        mysqli_close($link);
    }
?>  