<?php
	//$geojson=json_encode($_POST["mydata"]);	
	move_uploaded_file($_FILES['shpfile_shp']['tmp_name'],iconv('UTF-8','GBK',"../../../data/shapefile/".$_FILES['shpfile_shp']['name']));
	move_uploaded_file($_FILES['shpfile_dbf']['tmp_name'],iconv('UTF-8','GBK',"../../../data/shapefile/".$_FILES['shpfile_dbf']['name']));
	move_uploaded_file($_FILES['shpfile_prj']['tmp_name'],iconv('UTF-8','GBK',"../../../data/shapefile/".$_FILES['shpfile_prj']['name']));
	$myfile = fopen("http://localhost:8079/data/System/xml/user.txt", "r") or die("Unable to open file!");
	$current_user=fgets($myfile);
	$xml_path=iconv('UTF-8','GBK','./user/'.$current_user.'/zNodes.xml');
	$dom = new DOMDocument();
	$dom->load($xml_path);
	$root = $dom -> documentElement;//根标签 
	$node_0;
	$node_1;
	$nodes = $dom->getElementsByTagName("node");
	foreach($nodes as $node ){
		if($node->getAttribute("id")==2){
			$node_0=$node;
		}
		if($node->getAttribute("id")==21){
			$node_1=$node;
		}
	}
	if(!$node_0) {
		$newNode=$dom->createElement("node");
		$newNode->setAttribute("id","2");
		$pid_node=$dom->createElement("pid");
		$newNode->appendChild($pid_node);
		$pid_node->nodeValue="0";
		$name_node=$dom->createElement("name");
		$newNode->appendChild($name_node);
		$name_node->nodeValue="数据";
		$isHidden_node=$dom->createElement("isHidden");
		$newNode->appendChild($isHidden_node);
		$isHidden_node->nodeValue="false";		
		$root->appendChild($newNode);
		
		$newNode=$dom->createElement("node");
		$newNode->setAttribute("id","21");
		$pid_node=$dom->createElement("pid");
		$newNode->appendChild($pid_node);
		$pid_node->nodeValue="2";
		$name_node=$dom->createElement("name");
		$newNode->appendChild($name_node);
		$name_node->nodeValue="Shapefiles";
		$isHidden_node=$dom->createElement("isHidden");
		$newNode->appendChild($isHidden_node);
		$isHidden_node->nodeValue="false";		
		$root->appendChild($newNode);
	} else {
		$node_0->getElementsByTagName("name")->item(0)->nodeValue="数据";
		if(!$node_1) {
			$newNode=$dom->createElement("node");
			$newNode->setAttribute("id","21");
			$pid_node=$dom->createElement("pid");
			$newNode->appendChild($pid_node);
			$pid_node->nodeValue="2";
			$name_node=$dom->createElement("name");
			$newNode->appendChild($name_node);
			$name_node->nodeValue="Shapefiles";
			$isHidden_node=$dom->createElement("isHidden");
			$newNode->appendChild($isHidden_node);
			$isHidden_node->nodeValue="false";		
			$root->appendChild($newNode);
		} else {
			$node_1->getElementsByTagName("name")->item(0)->nodeValue="Shapefiles";
		}
	}
	//$node_id_cjc=110;
	//$name_cjc="newPicture".date('YmdHis',time());
	$node_id_cjc=11000;
	foreach($nodes as $node ){
		if($node->getElementsByTagName("pid")->item(0)->nodeValue==21){
			$id_new=$node->getAttribute("id");
			if($node_id_cjc<$id_new){
				$node_id_cjc=$id_new;
			}
		}
	}
	$node_id_cjc=$node_id_cjc+1;
	$newNode=$dom->createElement("node");
	$newNode->setAttribute("id",$node_id_cjc);
	$pid_node=$dom->createElement("pid");
	$newNode->appendChild($pid_node);
	$pid_node->nodeValue="21";
	
	$name_node=$dom->createElement("name");
	$newNode->appendChild($name_node);
	$name_node->nodeValue=explode(".",$_FILES['shpfile_shp']['name'])[0];
	
	$isHidden_node=$dom->createElement("isHidden");
	$newNode->appendChild($isHidden_node);
	$isHidden_node->nodeValue="false";		
	$root->appendChild($newNode);
	$dom -> save($xml_path);

?>