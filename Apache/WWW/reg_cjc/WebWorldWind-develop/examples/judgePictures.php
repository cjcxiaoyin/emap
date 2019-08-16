<?php 
	$nodeId=$_POST["nodeId"];
	$nodeName=$_POST["nodeName"];
	if(file_exists(iconv('UTF-8','GBK',"./Paint/Pictures/".$nodeName.".png"))){
		echo file_get_contents(iconv('UTF-8','GBK',"./Paint/Pictures/".$nodeName.".txt"));
	}
	else{
		
	}

?>