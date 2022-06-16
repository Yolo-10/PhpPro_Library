<?php
    require_once('connectvars.php');
    header("Content-Type:text/html;charset=utf-8");
    $book_id = $_POST['book_id'];
    $flag = 0;
    $link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if (!$link) { 
		die("连接失败: " . mysqli_connect_errno()."<br>"); 
	}
    else{
        $selectId = "select search_id from book_inventory where book_id = '$book_id'";
        $ret_id = mysqli_fetch_array(mysqli_query($link,$selectId));
        if(!empty($ret_id["search_id"])){
            $search_id = $ret_id[0];
            // echo $search_id;
            $flag = 1;
            // echo json_encode($flag);
            $selectAll = "select * from books where search_id = '$search_id'";
            $ret_all = mysqli_fetch_array(mysqli_query($link,$selectAll));
            echo json_encode($ret_all);
        }
        else{
            echo json_encode($flag);
            
        }
    }
    mysqli_close($link);
?>