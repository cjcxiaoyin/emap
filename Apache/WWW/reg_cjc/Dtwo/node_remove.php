<?php
	$id=$_GET["id"];
	$myfile = fopen("http://localhost:8079/data/System/xml/user.txt", "r") or die("Unable to open file!");
	$current_user=fgets($myfile);
	$xml_path=iconv('UTF-8','GBK','./user/'.$current_user.'/zNodes.xml');
	$doc = new DOMDocument();
	
	$doc->load($xml_path);
	 
	$root = $doc -> documentElement;//根标签 
	$books = $doc -> getElementsByTagName("node");
	//遍历
	foreach ($books as $book) {
		//将id=$id的删除
		if($book->getAttribute('id')==$id){
			$root->removeChild($book);
			//$book->getElementsByTagName("isHidden")->item(0)->nodeValue="true";
		}
	}
	//对文件做修改后，一定要记得重新sava一下，才能修改掉原文件
	$doc -> save($xml_path);

?>