<?php
    header("Content-type:text/html;charset=utf-8");

    $emails = $_POST["useremails"];
    $pwds = $_POST["userpwds"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("newbalance");

    $return = mysql_query("select * from nb where email = '$emails' AND pwd = '$pwds'",$conn);

    if (mysql_num_rows($return)==1) {
        echo 1;
    }else{
        echo 2;
    }

    mysql_close($conn);
?>