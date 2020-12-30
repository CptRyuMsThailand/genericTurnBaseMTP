<?php
function createfile($pass){
	$now = time();
	$fname = base_convert($now, 10, 36);
	$baseFolder = "./savestate/";
	$file = fopen($baseFolder.$fname.".csv","w");
	fwrite($file, $pass."\n");
	fwrite($file, $now."\n");
	fclose($file);
	return $fname;
}
function savefile($fname,$pass,$data_string){
	$baseFolder = "./savestate/";
	$file = fopen($baseFolder.$fname.".csv","r");
	$csvdata = fgetcsv($file);
	fclose($file);
	if($csvdata[0] != $pass){
		return false;
	}
	$file = fopen($baseFolder.$fname.".csv","w");
	fwrite($file, $pass."\n");
	fwrite($file, time()."\n");
	fwrite($file,$data_string);
	fclose($file);
	return time();
}
function rfile($fname,$pass,$time){
	$baseFolder = "./savestate/";

	$file = fopen($baseFolder.$fname.".csv","r");
	$csvdata = [];
	while(true){
		$data = fgetcsv($file);
		if(!$data)break;
		array_push($csvdata,$data);
	}
	fclose($file);
	if($csvdata[0][0] == $pass and $csvdata[1][0] != $time){
		return json_encode($csvdata);//print_r($csvdata);
	}
	return false;
}

?>