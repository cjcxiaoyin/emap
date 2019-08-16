<?php
	header("content-type:text/html;charset=utf-8");
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/skin_/main.css" />
<!--link rel="stylesheet" type="text/css" href="css/jquery.dialog.css" /-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/global.js"></script>
<title>中学地理教学数字地图（地球）系统</title>
</head>

<body>
<div id="container">
	<div class="cjc_7_28_top">
		<img src="img/skin_/cjc/二维地图图标_n.png" width="55" height="42" class="cjc_7_28_img_1"></img><div class="cjc_7_28_text_2" id="cjc_10_21_div">二维地图教学系统</div>
		<!--div class="cjc_7_28_text_1">
			<span class="cjc_7_28_text_strong_a">地名:</span><span id="placeName"></span><span class="cjc_7_28_text_strong_b">&nbsp;&nbsp;&nbsp;经度:</span><span id="jingDu"></span><span class="cjc_7_28_text_strong_b">&nbsp;&nbsp;&nbsp;纬度:</span><span id="weiDu"></span>
		</div-->
		<div class="cjc_7_28_right">
			<a onclick="window.location.href='../WebWorldWind-develop/examples/main.php'">切换至三维</a>&nbsp;&nbsp;
			<a onclick="window.location.href='../log.php'">切换账号</a>&nbsp;&nbsp;
			<a onclick="window.open('http://localhost:8079/data/System/pdf/Dtwo/帮助文档.pdf');">帮助文档</a>
		</div>
	</div>
    <div id="bd">
        <iframe width="100%" height="100%" id="mainIframe" src="nav.php" frameborder="0"></iframe>
    </div>
    
</div>

</body>
<!--script type="text/javascript" src="js/core.js"></script-->
<!--script type="text/javascript" src="js/jquery.dialog.js"></script-->
<script type="text/javascript">
$("#bd").height($(window).height());

$(window).resize(function(e) {
    $("#bd").height($(window).height());

});
/*$(".cjc_7_28_text_2").on("click",function(){
	alert("ok");
});*/
</script>
</html>