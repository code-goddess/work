<?php
header("Content-type: application/json; charset=utf-8");
require_once('db.php');
if ($link) {
	//插入数据
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];
	$id = $_POST['id'];
	
	$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE id={$id}";
	
	mysqli_query($lsink,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}


?>