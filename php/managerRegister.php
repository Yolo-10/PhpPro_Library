<?php
    require_once('connectvars.php');
    header("Content-Type:text/html;charset=utf-8");
    $link = mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
    if(!$link){
        die("连接失败: " . mysqli_connect_errno()."<br>");
    }
    else{
            $user_name = $_POST["r_name"];
            $user_pwd1 = $_POST["r_password1"];
            $user_pwd2 = $_POST["r_password2"];
            $user_tel = $_POST["r_tel"];
            $user_type = $_POST["r_type"];
           
            if($user_type=="readers"){
                $id = "reader_id";
                $name = "reader_name";
                $pwd = "reader_pwd";
                $tel = "reader_tel";
            }
            else if($user_type=="managers"){
                $id = "manager_id";
                $name = "manager_name";
                $pwd = "manager_pwd";
                $tel = "manager_tel";
            }
            $selectTel = "SELECT $tel FROM $user_type WHERE $tel = '$user_tel'";
            $ret_tel = mysqli_fetch_array(mysqli_query($link,$selectTel));
            if(!empty($ret_tel[0])){
                $flag = 0;
                echo $flag;
            }
            else{
                $user_id = mt_rand(1000000,9999999);
                $selectID = "SELECT $id FROM $user_type WHERE $id = '$user_id'";
                $pass = mysqli_query($link,$selectID);
                while(!empty(mysqli_fetch_array(mysqli_query($link,$selectID))[0])){
                    $user_id = mt_rand(1000000,9999999);
                }
                echo $user_id;
                $sql = "insert into $user_type ($id,$name,$pwd,$tel) values ('$user_id','$user_name','$user_pwd1','$user_tel')";
                $ret_insert = mysqli_query($link,$sql);
            }
        }

    mysqli_close($link);
?>