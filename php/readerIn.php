<?php
    require_once('connectvars.php');
    header("Content-Type:text/html;charset=utf-8");

    $id=$_POST['user_id'];
    $tel=$_POST['user_tel'];
    $pwd=$_POST['user_pwd'];
    $flag = -1;

    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    if (!$dbc) { 
		die("连接失败: " . mysqli_connect_errno()."<br>"); 
	}
    else{
        if($id!="-1"){
            $selectType = "reader_id";
            $user = $id;
        }else{
            $selectType = "reader_tel";
            $user = $tel;
        }
        $selectId = "SELECT reader_pwd FROM readers WHERE $selectType = '$user'";
        // echo $selectId;
        $ret_id=mysqli_fetch_array(mysqli_query($dbc,$selectId));
        // echo $ret_id[0];
        // echo $pwd;
        if(empty($ret_id[0])){
            $flag = -1;
            echo json_encode($flag);
        }
        else if($ret_id[0]!=$pwd){
            $flag = 0;
            echo json_encode($flag);
        }
        else{
            $flag = 1;
            $query="select * from readers where $selectType ='$user'";
            $result=mysqli_fetch_array(mysqli_query($dbc,$query));
            echo json_encode($result);//返回读者信息
        }
        mysqli_close($dbc);
    }

?>