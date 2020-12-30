<?php
require "connection.php";
$_room = $_POST["room"];
$_pass = $_POST["pass"];
$_time = $_POST["time"];
ob_clean();
if(isset($_room) && isset($_pass) && isset($_time)){
	echo rfile($_room,$_pass,$_time);
}else{
	echo false;
}
?>
