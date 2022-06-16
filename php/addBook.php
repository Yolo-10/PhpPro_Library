<?php
    require_once('connectvars.php');
    header("Content-Type:text/html;charset=utf-8");
    $link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if (!$link) { 
		die("连接失败: " . mysqli_connect_errno()."<br>"); 
	}
    else{
        $book_id = $_POST['book_id'];
        $search_id = $_POST['search_id'];
        $ISBN = $_POST['ISBN'];
        $author = $_POST['author'];
        $book_name = $_POST['book_name'];
        $publisher = $_POST['publisher'];
        $publish_time = $_POST['publish_time'];
        $storage_time = $_POST['storage_time'];
        $storage_place = $_POST['storage_place'];
        
        $selectSearchId = "select * from books where search_id = '$search_id'";
        $selectBookId = "select * from book_inventory where book_id = '$book_id'";
        $retSearch_id = mysqli_fetch_array(mysqli_query($link,$selectSearchId));
        $retBook_id = mysqli_fetch_array(mysqli_query($link,$selectBookId));
        if(empty($retSearch_id["search_id"])){
            $addBook = "INSERT INTO books (search_id,ISBN,book_author,book_publisher,publish_date,book_name,storage_time,storage_place) 
            VALUES ('$search_id','$ISBN','$author','$publisher','$publish_time','$book_name','$storage_time','$storage_place')";
            $ret_insert1 = mysqli_query($link,$addBook);
            echo json_encode($ret_insert1);
        }
        if(empty($retBook_id["book_id"])){
            $addBook = "INSERT INTO book_inventory VALUES ('$book_id','$search_id','1')";
            $ret_insert2 = mysqli_query($link,$addBook);
            echo json_encode($ret_insert2);
        }
    }
    mysqli_close($link);
?>