
<?php
header("Content-type: application/json; charset=utf-8");

require_once('db.php');
if ($link) {
	//连接成功时要做的事

    if ($_GET['newstype']) {
        $newstype = $_GET['newstype'];

        $sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}'";

        mysqli_query($link,"SET NAMES utf8");

        $result = mysqli_query($link,$sql);

       
        $sendData = array();
      

        while ($row = mysqli_fetch_assoc($result)) {

            array_push($sendData, array(
                                  'id' => $row['id'],
                                  'newstype' => $row['newstype'],
                                  'newstitle' => $row['newstitle'],
                                  'newsimg' => $row['newsimg'],
                                  'newstime' => date('Y-m-d',strtotime($row['newstime'])),
                                  'newssrc' => $row['newssrc']
                ));
        }
        echo json_encode($sendData);
    }else{
        $sql = "select * from news";
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
    }


	
}else{

	echo json_encode(array('success'=>'none'));
}


mysqli_close($link);



?>