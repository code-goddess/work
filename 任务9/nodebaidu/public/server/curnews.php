<?php

header("Content-type: application/json; charset=utf-8");
require_once('db.php');
if ($link) {
	//插入数据
	$newsid = $_GET['newsid'];
	$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	$sendData = array();
	while ($row = mysqli_fetch_assoc($result)) {

    	array_push($sendData, array(
                  'id' => $row['id'],
                  'newstype' => $row['newstype'],
                  'newstitle' => $row['newstitle'],
                  'newsimg' => $row['newsimg'],
                  'newstime' => $row['newstime'],
                  'newssrc' => $row['newssrc']
		));
    }
    echo json_encode($sendData);
}else{
	echo json_encode(array('success'=>'none'));
}
mysqli_close();

?>