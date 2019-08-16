<?php
	$pid=$_GET["pid"];
	$doc = new DOMDocument();
	$myfile = fopen("http://localhost:8079/data/System/xml/user.txt", "r") or die("Unable to open file!");
	$current_user=fgets($myfile);
	$xml_path=iconv('UTF-8','GBK','./user/'.$current_user.'/zNodes.xml');
	$doc->load($xml_path);
	$node_id_1=-1;
	$root = $doc -> documentElement;//根标签 
	$books = $doc -> getElementsByTagName("node");
	//增加元素
	$newNode=$doc->createElement("node");
	
	//if($pid<10){
		foreach ($books as $book) {
			if($book->getAttribute('id')>10*$pid&&$book->getAttribute('id')<10*($pid+1)){
				$node_id_1=$book->getAttribute('id');
			}
		}
		if($node_id_1==-1){
			$node_id_1=10*$pid;
		}
		$node_id_1=$node_id_1+1;
		$newNode->setAttribute("id",$node_id_1);
		$pid_node=$doc->createElement("pid");
		$newNode->appendChild($pid_node);
		$pid_node->nodeValue=$pid;
		
		$name_node=$doc->createElement("name");
		$newNode->appendChild($name_node);
		$name_node->nodeValue="newNode";
		
		$isHidden_node=$doc->createElement("isHidden");
		$newNode->appendChild($isHidden_node);
		$isHidden_node->nodeValue="false";		
		$root->appendChild($newNode);
	//}
	
	
	//对文件做修改后，一定要记得重新sava一下，才能修改掉原文件
	$doc -> save($xml_path);

?>