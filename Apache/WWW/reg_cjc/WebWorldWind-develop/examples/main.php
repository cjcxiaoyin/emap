<?php
	header("content-type:text/html;charset=utf-8");
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>中学地理教学数字地图（地球）系统</title>
<link rel="stylesheet" type="text/css" href="CSS/style.css" />
<link rel="stylesheet" type="text/css" href="CSS/skin_/main.css" />
<!--link rel="stylesheet" type="text/css" href="CSS/jquery.dialog.css" /-->
<script type="text/javascript" src="JS/jquery.js"></script>
<script type="text/javascript" src="JS/global.js"></script>
</head>

<body>
<div id="container">
	<div class="cjc_7_28_top">
		<img src="images/earth_1.png" width="50" height="50" class="cjc_7_28_img_1"/><div class="cjc_7_28_text_2" id="cjc_10_21_div">三维虚拟地球地图教学系统</div>
		<!--div class="cjc_7_28_text_1">
			<span class="cjc_7_28_text_strong_a">地名:</span><span id="placeName"></span><span class="cjc_7_28_text_strong_b">&nbsp;&nbsp;&nbsp;经度:</span><span id="jingDu"></span><span class="cjc_7_28_text_strong_b">&nbsp;&nbsp;&nbsp;纬度:</span><span id="weiDu"></span>
		</div-->
		<div class="cjc_7_28_right">
			<a onclick="window.location.href='../../Dtwo/main.php'">切换至二维</a>&nbsp;&nbsp;
			<a onclick="window.location.href='../../log.php'">切换账号</a>&nbsp;&nbsp;
			<a onclick="window.open('http://localhost:8079/data/System/pdf/WWD/帮助文档.pdf');">帮助文档</a>
		</div>
	</div>
    <div id="bd">
        <iframe width="100%" height="100%" id="mainIframe" src="nav.php" frameborder="0"></iframe>
    </div>
    
</div>

</body>
<!--script type="text/javascript" src="JS/core.js"></script-->
<!--script type="text/javascript" src="JS/jquery.dialog.js"></script-->
<script type="text/javascript">
$("#bd").height($(window).height());

$(window).resize(function(e) {
    $("#bd").height($(window).height());

});
</script>
</html>
