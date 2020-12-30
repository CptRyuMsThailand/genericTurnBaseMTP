<?php
require "connection.php";
$pass = $_POST["pass"];
ob_clean();
if(isset($pass)){
	echo createfile($pass);
}else{
	echo false;
}
?>