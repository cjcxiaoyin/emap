<?php
	$cjc_username=$_GET["cjc_username"];
	$cjc_email=$_GET["cjc_email"];
	file_put_contents("../data/System/xml/user.txt",$cjc_username);
	if(file_exists(iconv('UTF-8','GBK',"./Dtwo/user/".$cjc_username."/zNodes.xml"))){
		
	}else{
		mkdir ("./Dtwo/user/".$cjc_username);
		copy("http://localhost:8079/data/System/xml/zNodes.xml",iconv('UTF-8','GBK',"./Dtwo/user/".$cjc_username."/zNodes.xml"));
	}
	if(file_exists(iconv('UTF-8','GBK',"./WebWorldWind-develop/examples/user/".$cjc_username."/zNodes.xml"))){
		
	}else{
		mkdir ("./WebWorldWind-develop/examples/user/".$cjc_username);
		copy("http://localhost:8079/data/System/xml/zNodes.xml",iconv('UTF-8','GBK',"./WebWorldWind-develop/examples/user/".$cjc_username."/zNodes.xml"));
	}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>选择地图模式</title>
<link rel="stylesheet" type="text/css" href="css/jBox.css">
<link rel="stylesheet" href="css/judge.css">
</head>
<body>
	<div class="cjc_user">
		<img src="pictures/male79.png">
	</div>
	<div class="cjc_user">
		<div class="cjc_user_info"><?php echo $cjc_username; ?></div>
		<div class="cjc_user_info"><?php echo $cjc_email; ?></div>
		<a href="log.php">切换账户</a>

	</div>
	<div class="cjc_user_right">
		<a href="javascript:void(0);" onclick="$('#system_setting_dialog_cjc').css('display','block')">系统设置</a>
	</div>
	<div class="map_2D">
		<button class="map_2D_button" id="cjc_7_17_2D_button"></button>
		<div class="map_2D_text">二维地图</div>
	</div>
	<div class="map_3D">
		<button class="map_3D_button" id="cjc_7_17_3D_button"></button>
		<div class="map_3D_text">三维地图</div>
	</div>
	<div class="system_setting_dialog" id="system_setting_dialog_cjc">
		<div class="cjc_header">系统设置</div><br/>
		<div class="test_switch">
		<span class="cjc_on_off">&nbsp;&nbsp;&nbsp;&nbsp;地图缓存开关</span>
			<input class="test_switch_checkbox" id="on_off_switch" type="checkbox"/>
			<label class="test_switch_label" for="on_off_switch">
				<span class="test_switch_inner" data-on="ON" data-off="OFF"></span>
				<span class="test_switch_switch"></span>
			</label>
		</div>
		<br/>
		<div class="color_select">
			&nbsp;&nbsp;&nbsp;&nbsp;画笔颜色
			<input type="color" value="#ff0000" class="color_select_input"/>
		</div>
		<br/>
		<div>
			&nbsp;&nbsp;&nbsp;&nbsp;使用模式
			<select class="use_select">
				<option value ="dan">单屏模式</option>
				<option value ="shuang">双屏模式</option>
			</select>
		</div>
		<br/>
		<div class="export_dir">
			&nbsp;&nbsp;&nbsp;&nbsp;默认导出路径
			<input type="text" value="<?php echo dirname(dirname(__FILE__)).'\\data\\'; ?>" size="25" readonly/>
			<!--button>浏览</button-->
		</div>
		<br/>
		<div>
			<div class="cjc_server_text">&nbsp;&nbsp;&nbsp;&nbsp;地图服务器链接:</div>
			<div class="cjc_server">
				<div class="cjc_server_text_a">地址</div><input type="text" value="localhost" class="cjc_server_input_a" readonly/>
				<div class="cjc_server_text_b">端口</div><input type="text" value="8079" class="cjc_server_input_b" readonly/>
			</div>
		</div>
		<br/>
		<input type="button" value="确定" class="cjc_close_button" onclick="$('#system_setting_dialog_cjc').css('display','none')"/>
		<input type="button" value="关闭" class="cjc_close_button" onclick="$('#system_setting_dialog_cjc').css('display','none')"/>
	</div>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jBox.min.js"></script>
<script src="js/judge.js"></script>
</body>
</html>
