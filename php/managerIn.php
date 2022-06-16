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
        mysqli_query($dbc,"set character set 'utf8'");
        mysqli_query($dbc,"set manager_id,manager_pwd 'utf8'");
        if($id!="-1"){
            $selectType = "manager_id";
            $user = $id;
        }else{
            $selectType = "manager_tel";
            $user = $tel;
        }
        $selectId = "SELECT manager_pwd FROM managers WHERE $selectType = '$user'";
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
            $query="select * from managers where $selectType ='$user'";
            $result=mysqli_fetch_array(mysqli_query($dbc,$query));
            echo json_encode($result);//返回读者信息
        }
        mysqli_close($dbc);
        
    }

?>