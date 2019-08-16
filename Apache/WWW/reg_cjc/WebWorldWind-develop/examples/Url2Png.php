<?php
	$url = $_POST['url'];
	$position=$_POST['position'];
	$node_id_cjc=110;
	preg_match('/^(data:\s*image\/(\w+);base64,)/', $url, $result);
	$type = $result[2];    //获取图片的类型jpg png等
	$name_cjc="newPicture".date('YmdHis',time());
	$name = $name_cjc.".".$type; //图片重命名
	$savepath = "./Paint/Pictures/".$name;   //图片保存目录
	$savepath_txt="./Paint/Pictures/".$name_cjc.".txt";
	file_put_contents($savepath, base64_decode(str_replace($result[1], '', $url)));   //对图片进行解析并保存
	file_put_contents($savepath_txt,$position);
	function create_node(){
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
			if($node->getAttribute("id")==1){
				$node_0=$node;
			}
			if($node->getAttribute("id")==11){
				$node_1=$node;
			}
		}
		if(!$node_0) {
			$newNode=$dom->createElement("node");
			$newNode->setAttribute("id","1");
			$pid_node=$dom->createElement("pid");
			$newNode->appendChild($pid_node);
			$pid_node->nodeValue="0";
			$name_node=$dom->createElement("name");
			$newNode->appendChild($name_node);
			$name_node->nodeValue="绘图";
			$isHidden_node=$dom->createElement("isHidden");
			$newNode->appendChild($isHidden_node);
			$isHidden_node->nodeValue="false";		
			$root->appendChild($newNode);
			
			$newNode=$dom->createElement("node");
			$newNode->setAttribute("id","11");
			$pid_node=$dom->createElement("pid");
			$newNode->appendChild($pid_node);
			$pid_node->nodeValue="1";
			$name_node=$dom->createElement("name");
			$newNode->appendChild($name_node);
			$name_node->nodeValue="图片";
			$isHidden_node=$dom->createElement("isHidden");
			$newNode->appendChild($isHidden_node);
			$isHidden_node->nodeValue="false";		
			$root->appendChild($newNode);
		} else {
			$node_0->getElementsByTagName("name")->item(0)->nodeValue="绘图";
			if(!$node_1) {
				$newNode=$dom->createElement("node");
				$newNode->setAttribute("id","11");
				$pid_node=$dom->createElement("pid");
				$newNode->appendChild($pid_node);
				$pid_node->nodeValue="1";
				$name_node=$dom->createElement("name");
				$newNode->appendChild($name_node);
				$name_node->nodeValue="图片";
				$isHidden_node=$dom->createElement("isHidden");
				$newNode->appendChild($isHidden_node);
				$isHidden_node->nodeValue="false";		
				$root->appendChild($newNode);
			} else {
				$node_1->getElementsByTagName("name")->item(0)->nodeValue="图片";
			}
		}
		//$node_id_cjc=110;
		//$name_cjc="newPicture".date('YmdHis',time());
		global $name_cjc;
		global $node_id_cjc;
		foreach($nodes as $node ){
			if($node->getElementsByTagName("pid")->item(0)->nodeValue==11){
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
		$pid_node->nodeValue="11";
		
		$name_node=$dom->createElement("name");
		$newNode->appendChild($name_node);
		$name_node->nodeValue=$name_cjc;
		
		$isHidden_node=$dom->createElement("isHidden");
		$newNode->appendChild($isHidden_node);
		$isHidden_node->nodeValue="false";		
		$root->appendChild($newNode);
		$dom -> save($xml_path);

	}
	create_node();
?>