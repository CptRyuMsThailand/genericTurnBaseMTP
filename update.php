<?php
require "connection.php";
$_room = $_POST["room"];
$_pass = $_POST["pass"];
$_data = $_POST["data"];
ob_clean();
if(isset($_room) && isset($_pass) && isset($_data)){
	echo savefile($_room,$_pass,$_data);
}else{
	echo false;
}

?>