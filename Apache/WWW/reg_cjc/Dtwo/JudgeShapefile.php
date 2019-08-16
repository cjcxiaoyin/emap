<?php
	$nodeId=$_POST["nodeId"]；
	$nodeName=$_POST["nodeName"];
	if(file_exists(iconv('UTF-8','GBK',"./json/".$nodeName.".json"))){
		echo "true";
	}else{
		
	}
?>