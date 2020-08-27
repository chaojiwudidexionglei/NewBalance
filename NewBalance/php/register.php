<?php
    header("Content-type:text/html;charset=utf-8");

    $email = $_POST["useremail"];
    $pwd = $_POST["userpwd"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("newbalance");

    mysql_query("insert into nb (email,pwd) values ('$email','$pwd')",$conn);

    mysql_close($conn);
?>