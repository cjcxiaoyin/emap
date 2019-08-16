<?php
	header("content-type:text/html;charset=utf-8");
	$id=$_GET["id"];
	$name=$_GET["name"];
	function setName($a,$b){
		$myfile = fopen("http://localhost:8079/data/System/xml/user.txt", "r") or die("Unable to open file!");
		$current_user=fgets($myfile);
		$xml_path=iconv('UTF-8','GBK','./user/'.$current_user.'/zNodes.xml');
		$docss=new DOMDocument();
		$docss->load($xml_path);
		$nodes = $docss->getElementsByTagName("node");
		foreach($nodes as $node ){
			if($node->getAttribute("id")==$a){				
				if($node->getElementsByTagName("pid")->item(0)->nodeValue=="11"){
					$need_rename_1="./Paint/Pictures/".$node->getElementsByTagName("name")->item(0)->nodeValue.".png";
					$need_rename_1=iconv('UTF-8','GBK',$need_rename_1);
					$need_rename_2="./Paint/Pictures/".$node->getElementsByTagName("name")->item(0)->nodeValue.".txt";
					$need_rename_2=iconv('UTF-8','GBK',$need_rename_2);
					if(file_exists($need_rename_1)){
						rename($need_rename_1,iconv('UTF-8','GBK',"./Paint/Pictures/".$b.".png"));
						rename($need_rename_2,iconv('UTF-8','GBK',"./Paint/Pictures/".$b.".txt"));
					}
				}
				else if($node->getElementsByTagName("pid")->item(0)->nodeValue=="21"||$node->getElementsByTagName("pid")->item(0)->nodeValue=="22"){
					$need_rename_1="./json/".$node->getElementsByTagName("name")->item(0)->nodeValue.".json";
					$need_rename_1=iconv('UTF-8','GBK',$need_rename_1);
					if(file_exists($need_rename_1)){
						rename($need_rename_1,iconv('UTF-8','GBK',"./json/".$b.".json"));
					}
				}
				$node->getElementsByTagName("name")->item(0)->nodeValue=$b;
			}
		}
		//对文件做修改后，一定要记得重新sava一下，才能修改掉原文件
		$docss -> save($xml_path);
		
	}
	setName($id,$name);
?>