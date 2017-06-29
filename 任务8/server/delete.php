<?php
header("Content-type: application/json; charset=utf-8");
require_once('db.php');
if ($link) {
	//插入数据
	$newsid = $_POST['newsid'];
	$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";
	echo $sql;
	mysqli_query($link,"SET NAMES utf8");
	mysqli_query($link,$sql);
	echo json_encode(array('删除'=>'成功'));
}
mysqli_close();

?>