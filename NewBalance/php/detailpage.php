<?php
    header("Content-type:text/html;charset=utf-8");

    $price = $_GET["userprice"];
    $name = $_GET["username"];
	$color = $_GET["usercolor"];
	$size = $_GET["usersize"];
	$imgsrc = $_GET["userimgsrc"];
	
    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("newbalance");
	
	$result = mysql_query("select * from goods where name='$name'",$conn);
	
	if(mysql_num_rows($result) == 1){
			echo "1";
		}else{
			mysql_query("insert into goods (price,name,color,size,imgsrc) values ('$price','$name','$color','$size','$imgsrc')",$conn);
		}

    

    mysql_close($conn);
?>