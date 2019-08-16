<?php
	header("content-type:text/html;charset=utf-8");
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" href="css/zTreeStyle/zTreeStyle.css" type="text/css">
<link rel="stylesheet" type="text/css" href="css/skin_/nav.css" />
<title>底部内容页</title>
</head>

<body>
<div id="container">
	<div id="bd">
    	<div class="sidebar">
        	<div class="sidebar-bg"></div>
            <i class="sidebar-hide"></i>
            <h2><a href="javascript:;" class="ue-clear" onclick="$('#cjc_7_30_tree_1').css('display','block');$('#cjc_7_30_tree_2').css('display','none');"><i class="h2-icon" title="切换到树型结构"></i><span>专题地图</span></a></h2>
            <ul class="nav">
                <li class="nav-li">
                	<a href="javascript:;" class="ue-clear"><i class="nav-ivon"></i><span class="nav-text">新闻管理</span></a>
                    <ul class="subnav">
                    	<li class="subnav-li" href="index.html" data-id="8"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">新闻视频管理</span></a></li>
                        <li class="subnav-li" href="form.html" data-id="9"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">新闻频道管理</span></a></li>
                        <li class="subnav-li" href="table.html" data-id="10"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">地方新闻管理</span></a></li>
                        <li class="subnav-li" data-id="11"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">自定义设置1</span></a></li>
                    </ul>
                </li>
                <li class="nav-li current">
                	<a href="javascript:;" class="ue-clear"><i class="nav-ivon"></i><span class="nav-text">工具</span></a>
                	<ul class="subnav">
                    	<li class="subnav-li current" href="index.html" data-id="1"><a href="javascript:;" class="ue-clear" id="cjc_button_re"><i class="subnav-icon"></i><span class="subnav-text">首页</span></a></li>
						<li class="subnav-li" data-id="2"><a href="javascript:;" class="ue-clear" id="cjc_button_lakuang"><i class="subnav-icon"></i><span class="subnav-text">拉框放大</span></a></li>
                        <li class="subnav-li" data-id="3"><a href="javascript:;" class="ue-clear" id="cjc_button_juli"><i class="subnav-icon"></i><span class="subnav-text">距离测量</span></a></li>
                        <li class="subnav-li" data-id="4"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">自定义设置2</span></a></li>
                    </ul>
                </li>
                <li class="nav-li">
                	<a href="javascript:;" class="ue-clear"><i class="nav-ivon"></i><span class="nav-text">工作安排</span></a>
                    <ul class="subnav">
                    	<li class="subnav-li" data-id="5"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">工作安排查询1</span></a></li>
                        <li class="subnav-li" data-id="6"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">安排管理1</span></a></li>
                        <li class="subnav-li" data-id="7"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">类型选择1</span></a></li>
                    </ul>
                </li>
                <li class="nav-li last-nav-li">
                	<a href="javascript:;" class="ue-clear"><i class="nav-ivon"></i><span class="nav-text">数据管理</span></a>
                    <ul class="subnav">
                    	<li class="subnav-li" data-id="12"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">工作安排查询2</span></a></li>
                        <li class="subnav-li" data-id="13"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">安排管理2</span></a></li>
                        <li class="subnav-li" data-id="14"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">类型选择2</span></a></li>
                    </ul>
                </li>
            </ul>
            <div class="tree-list outwindow" id="cjc_7_30_tree_1">
				<ul id="treeDemo" class="ztree"></ul>
            </div>
			<h2><a href="javascript:void(0)" class="ue-clear" onclick="$('#cjc_7_30_tree_1').css('display','none');$('#cjc_7_30_tree_2').css('display','block');"><i class="h2-icon" title="切换到树型结构"></i><span>自定义区域</span></a></h2>
			<div id="cjc_7_30_tree_2" class="tree-list outwindow">
				<ul id="treeD_1" class="ztree"></ul>
			</div>
        </div>
        <div class="main">
        	<div class="title" >
                <i class="sidebar-show"></i>
                <ul class="tab ue-clear" id="cjc_7_28_title_1">
                   <li></li>
                </ul>
                <i class="tab-more"></i>
                <i class="tab-close" id="cjc_7_28_title_3"></i>
            </div>
			<iframe data-id="1" width="100%" height="100%" frameborder="0" src="index.html" id="cjc_8_3_frame"></iframe>
        </div>
    </div>
</div>

<div class="more-bab-list">
	<ul></ul>
    <div class="opt-panel-ml"></div>
    <div class="opt-panel-mr"></div>
    <div class="opt-panel-bc"></div>
    <div class="opt-panel-br"></div>
    <div class="opt-panel-bl"></div>
</div>
<div id="rMenu">
		<div id="m_add" onclick="addTreeNode();">增加节点</div>
		<div id="m_del" onclick="removeTreeNode();">删除节点</div>
		<!--div id="m_Redel" onclick="Cancelremove();">撤销删除</div-->
		<div id="m_edit" onclick="editTreeNode();">修改节点</div>
	</div>
</body>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/global.js"></script>
<script type="text/javascript" src="js/nav.js"></script>
<script type="text/javascript" src="js/Menu.js"></script>
<script src="js/jquery.ztree.core.min.js"></script>
<script src="js/jquery.ztree.excheck.min.js"></script>
<script src="js/jquery.ztree.exedit.min.js"></script>
<script src="js/jquery.ztree.exhide.min.js"></script>
<script type="text/javascript">
var current_user;
var curMenu = null, zTree_Menu = null;
var zTree, rMenu,log,className = "dark",zNodes_1=new Array();
var canCancel_1=false;
var perNode_1Id_1;
var perNode_1;
var setting_1 = {
	view: {
		showLine: true,
		dblClickExpand: false
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	edit: {
		enable: true,
		showRemoveBtn:false,
		showRenameBtn:false
	},
	check: {
		enable: true
	},
	callback: {
		onNodeCreated: this.onNodeCreated,
	//	beforeClick: this.beforeClick,
		onClick: this.onClick,
		onRightClick: this.OnRightClick,
		beforeRename: this.beforeRename,
		onCheck: onCheck_1
	}
};
	var menu = new Menu({
		defaultSelect: $('.nav').find('li[data-id="1"]')	
	});
	
	// 左侧树结构加载
	var setting = {
			check: {
				enable: true
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				onCheck: onCheck
			}
		};

	var zNodes =[
		{ id:1, pId:0, name:"政区图", nocheck:true},
		{ id:11, pId:1, name:"世界政区图"},
		{ id:12, pId:1, name:"中国政区图"},
		{ id:2, pId:0, name:"地形图",nocheck:true},
		{ id:21, pId:2, name:"世界山脉",nocheck:true},
		{ id:211, pId:21, name:"亚洲山脉"},
		{ id:212, pId:21, name:"欧洲山脉"},
		{ id:213, pId:21, name:"非洲山脉"},
		{ id:214, pId:21, name:"大洋洲山脉"},
		{ id:215, pId:21, name:"北美洲山脉"},
		{ id:216, pId:21, name:"南美洲山脉"},
		{ id:22, pId:2, name:"中国地形",nocheck:true},
		{ id:221, pId:22, name:"中国山脉"},
		{ id:222, pId:22, name:"中国地形"},
		{ id:3, pId:0, name:"水系图",nocheck:true},
		{ id:31, pId:3, name:"中国水系",nocheck:true},
		{ id:311, pId:31, name:"河流"},
		{ id:312, pId:31, name:"湖泊"},
		{ id:32, pId:3, name:"世界水系",nocheck:true},
		{ id:321, pId:32, name:"亚洲"},
		{ id:322, pId:32, name:"欧洲"},
		{ id:323, pId:32, name:"非洲"},
		{ id:324, pId:32, name:"大洋洲"},
		{ id:325, pId:32, name:"北美洲"},
		{ id:326, pId:32, name:"南美洲"},
		{ id:4, pId:0, name:"气候图",nocheck:true},
		{ id:41, pId:4, name:"中国气候图",nocheck:true},
		{ id:411, pId:41, name:"中国一月等温线图"},
		{ id:412, pId:41, name:"中国七月等温线图"},
		{ id:413, pId:41, name:"中国年降水量图"},
		{ id:414, pId:41, name:"温度带图"},
		{ id:415, pId:41, name:"干湿地区图"},
		{ id:42, pId:4, name:"世界气候图",nocheck:true},
		{ id:421, pId:42, name:"一月等温线图"},
		{ id:422, pId:42, name:"七月等温线图"},
		{ id:423, pId:42, name:"年降水量图"},
		{ id:424, pId:42, name:"气候类型分布图"},
		{ id:5, pId:0, name:"中国植被与土壤",nocheck:true},
		{ id:51, pId:5, name:"土壤分布图"},
		{ id:52, pId:5, name:"植被分布图"},
		{ id:6, pId:0, name:"洋流与渔场",nocheck:true},
		{ id:61, pId:6, name:"洋流"},
		{ id:62, pId:6, name:"渔场"},
		{ id:7, pId:0, name:"农业图",nocheck:true},
		{ id:71, pId:7, name:"世界农业图"},
		{ id:72, pId:7, name:"中国农业图"},
		{ id:8, pId:0, name:"自然资源图",nocheck:true},
		{ id:81, pId:8, name:"世界自然资源图",nocheck:true},
		{ id:811, pId:81, name:"世界森林资源"},
		{ id:812, pId:81, name:"世界水资源"},
		{ id:813, pId:81, name:"世界土地资源"},
		{ id:82, pId:8, name:"中国自然资源图",nocheck:true},
		{ id:821, pId:82, name:"中国森林资源"},
		{ id:822, pId:82, name:"中国水资源"},
		{ id:823, pId:82, name:"中国土地资源"},
		{ id:9, pId:0, name:"重要城市图",nocheck:true},
		{ id:91, pId:9, name:"世界重要城市图"},
		{ id:92, pId:9, name:"中国重要城市图"},
		{ id:10, pId:0, name:"交通线图",nocheck:true},
		{ id:101, pId:10, name:"世界交通线图",nocheck:true},
		{ id:1011, pId:101, name:"港口与输油管道"},
		{ id:1012, pId:101, name:"航线与航空港"},
		{ id:102, pId:10, name:"中国交通线图",nocheck:true},
		{ id:1021, pId:102, name:"铁路交通图"},
		{ id:1022, pId:102, name:"公路交通图"},
		{ id:1023, pId:102, name:"水运线路图"},
		{ id:1024, pId:102, name:"航空线路图"},
		{ id:1025, pId:102, name:"管道运输图"},
		{ id:11, pId:0, name:"人文图",nocheck:true},
		{ id:111, pId:11, name:"世界人文图",nocheck:true},
		{ id:1111, pId:111, name:"世界遗产分布图"},
		{ id:1112, pId:111, name:"世界人口密度"},
		{ id:1113, pId:111, name:"世界人种"},
		{ id:1114, pId:111, name:"世界宗教"},
		{ id:1115, pId:111, name:"世界语言"},
		{ id:112, pId:11, name:"中国人文图",nocheck:true},
		{ id:1121, pId:112, name:"中国民族分布"}
		
	];			
	
	/*$('.sidebar h2').click(function(e) {
        $('.tree-list').toggleClass('outwindow');
		$('.nav').toggleClass('outwindow');
    });*/
	
	/*$(document).click(function(e) {
		if(!$(e.target).is('.tab-more')){
			 $('.tab-more').removeClass('active');
			 $('.more-bab-list').hide();
		}
    });*/
	function onCheck(e, treeId, treeNode) {
		switch(treeNode.name){
			//case "中国政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaShow();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaHide();};break;
			case "中国政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_copy(treeNode.id,"中国政区图.json","中国政区首都.json");}else{var cjc_10_28_ex=window.document.getElementById("cjc_8_3_frame").contentWindow;cjc_10_28_ex.geojson_hide_cjc(treeNode.id);cjc_10_28_ex.geojson_hide_cjc(3);cjc_10_28_ex.geojson_hide_cjc(1);cjc_10_28_ex.geojson_hide_cjc(2);};break;
			case "世界政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaShow();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaHide();};break;
			case "亚洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"亚洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "欧洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"欧洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "非洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"非洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "大洋洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"大洋洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "北美洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"北美洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "南美洲山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"南美洲山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国山脉":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"中国山脉.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);window.document.getElementById("cjc_8_3_frame").contentWindow.hideDiXinTu();};break;
			case "中国地形":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"中国地形.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);window.document.getElementById("cjc_8_3_frame").contentWindow.hideDiXinTu();};break;
			
			case "中国一月等温线图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国一月等温线图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国七月等温线图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国七月等温线图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国年降水量图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"中国年降水量图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "干湿地区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"干湿地区图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "一月等温线图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"一月等温线图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "七月等温线图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"七月等温线图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "土壤分布图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"土壤分布.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "植被分布图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"植被分布.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "河流":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"河流.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);window.document.getElementById("cjc_8_3_frame").contentWindow.hideDiXinTu();};break;
			case "湖泊":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"湖泊.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(4);};break;
			case "洋流":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"洋流.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "渔场":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"渔场.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "大洋洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"大洋洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "南美洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"南美洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "北美洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"北美洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "非洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"非洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "欧洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"欧洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "亚洲":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"亚洲.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "温度带图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson_China_WDD(treeNode.id,"温度带图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "气候类型分布图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"气候类型分布.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "中国农业图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国农业图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "中国土地资源":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国土地资源.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "中国水资源":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国水资源.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国森林资源":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国森林资源.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "世界重要城市图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"世界城市.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国重要城市图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国城市.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "铁路交通图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"铁路交通图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			
			case "世界遗产分布图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"世界遗产分布图.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "世界人口密度":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"世界人口密度.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "世界人种":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"世界人种.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "世界语言":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"世界语言.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
			case "中国民族分布":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_geojson(treeNode.id,"中国民族分布.json");}else{window.document.getElementById("cjc_8_3_frame").contentWindow.geojson_hide_cjc(treeNode.id);};break;
		}
	}
	function onCheck_1(e, treeId, treeNode){
		switch(treeNode.pId){
			case "11":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.pictures_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.pictures_hide(treeNode.id);};break;
			case "21":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_hide(treeNode.id);};break;
			case "22":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_hide(treeNode.id);};break;
		}
	}
	function beforeClick(treeId, node) {
	if (node.isParent) {
		if (node.level === 0) {
			var pNode = curMenu;
			while (pNode && pNode.level !==0) {
				pNode = pNode.getParentNode();
			}
			if (pNode !== node) {
				var a = $("#" + pNode.tId + "_a");
				a.removeClass("cur");
				zTree_Menu.expandNode(pNode, false);
			}
			a = $("#" + node.tId + "_a");
			a.addClass("cur");

			var isOpen = false;
			for (var i=0,l=node.children.length; i<l; i++) {
				if(node.children[i].open) {
					isOpen = true;
					break;
				}
			}
			if (isOpen) {
				zTree_Menu.expandNode(node, true);
				curMenu = node;
			} else {
				zTree_Menu.expandNode(node.children[0].isParent?node.children[0]:node, true);
				curMenu = node.children[0];
			}
		} else {
			zTree_Menu.expandNode(node);
		}
	}
	return !node.isParent;
}
function onClick(e, treeId, node) {
	//alert("Do what you want to do!");
	//选中事件
	//console.log(e);
}

$(document).ready(function(){

	$.fn.zTree.init($("#treeDemo"), setting, zNodes);	
	$('.tree-list').toggleClass('outwindow');
	$('.nav').toggleClass('outwindow');
		$.ajax({
		url:"http://localhost:8079/data/System/xml/user.txt",
		type:"GET",
		success:function(result,status,xhr){
			//console.log(result);
			current_user=result;
			cjcNodeRefresh();
		},
		error:function(xhr,status,error){
			//console.log(xhr);
			//console.log(status);
			//console.log(error);
		}
	});		
	
});

function OnRightClick(event, treeId, treeNode) {
	/*if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
		zTree.cancelSelectedNode();
		//showrMenu("root", event.clientX, event.clientY);
	}
	else if (treeNode && !treeNode.noR) {
		zTree.selectNode(treeNode);
		showrMenu("node", event.clientX, event.clientY);
	}*/
	event.preventDefault();
	if(treeNode){
		showrMenu("node", event.clientX, event.clientY);
	}
}

function showrMenu(type, x, y) {
	$("#m_add").hide();
	if (type=="root") {
		$("#m_del").hide();
		$("#m_edit").hide();
	} else {
		$("#m_del").show();
		$("#m_edit").show();
	}
/*	if(canCancel_1){
		$("#m_Redel").show();
	}else{
		$("#m_Redel").hide();
	}
	*/

	y += document.body.scrollTop;
	x += document.body.scrollLeft;
	rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});

	$("body").bind("mousedown", onBodyMouseDown);
}
function hiderMenu() {
	if (rMenu) rMenu.css({"visibility": "hidden"});
	$("body").unbind("mousedown", onBodyMouseDown);
}
function onBodyMouseDown(event){
	if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
		rMenu.css({"visibility" : "hidden"});
	}
}
function addTreeNode() {
	hiderMenu();
	var newNode = { name:"newNode"};
	if (zTree.getSelectedNodes()[0]) {
		//newNode.checked = zTree.getSelectedNodes()[0].checked;
		//newNode.checked =true;
		zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
		cjc_add_node(zTree.getSelectedNodes()[0].id);
		//console.log(zTree.getSelectedNodes()[0].id);
		
		
	} else {
		zTree.addNodes(null, newNode);
	}
	setTimeout(function(){
		cjcNodeRefresh();
	},2500);
}
function removeTreeNode() {
	var zTree = $.fn.zTree.getZTreeObj("treeD_1");
	hiderMenu();
	var nodes = zTree.getSelectedNodes();
	perNode_1=nodes;
	if (nodes && nodes.length>0) {
		//if (nodes[0].children && nodes[0].children.length > 0) {
		//	var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
		//	if (confirm(msg)==true){
		//		zTree.removeNode(nodes[0]);
		//	}
		//	alert("根节点无法删除");
		//} else {
		if(nodes[0].checked){
			alert("图层未关闭，无法删除！");
			return;
		}
		perNode_1Id_1=nodes[0].id;	
		cjc_remove_node(perNode_1Id_1);		
		zTree.hideNodes(nodes);
		canCancel_1=true;
		//zTree.removeNode(nodes[0]);
		//cjcNodeRefresh();
	//	}
	}
}
function Cancelremove(){
	hiderMenu();
	if(perNode_1){
		cjc_reRemove_node(perNode_1Id_1);		
		zTree.showNodes(perNode_1);
		canCancel_1=false;
	}
}
function checkTreeNode(checked) {
	var nodes = zTree.getSelectedNodes();
	if (nodes && nodes.length>0) {
		zTree.checkNode(nodes[0], checked, true);
	}
	hiderMenu();
}
function resetTree() {
	hiderMenu();
	$.fn.zTree.init($("#treeD_1"), setting_1, zNodes_1);
}
function editTreeNode(){
	var zTree = $.fn.zTree.getZTreeObj("treeD_1");
	var nodes = zTree.getSelectedNodes();
	if (nodes && nodes.length>0) {
		zTree.editName(nodes[0]);
	}
	hiderMenu();
}
function beforeRename(treeId, treeNode, newName, isCancel) {
			if (newName.length == 0) {
				setTimeout(function() {
					var zTree = $.fn.zTree.getZTreeObj("treeD_1");
					zTree.cancelEditName();
					alert("节点名称不能为空.");
				}, 0);
				return false;
			}else{
				cjc_edit_name(treeNode.id,newName);
			}
			return true;
}
function cjc_edit_name(id,name){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}else{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//window.location.href="node_setName.php?id="+id+"&name="+name;
		}
	}
	xmlhttp.open("GET","node_setName.php?id="+id+"&name="+name,true);
	xmlhttp.send();
}
function cjc_remove_node(id){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4&&xmlhttp.status==200){
			alert("删除成功！");
		}
	}
	xmlhttp.open("GET","node_remove.php?id="+id,true);
	xmlhttp.send();
}
function cjc_reRemove_node(id){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4&&xmlhttp.status==200){
			
		}
	}
	xmlhttp.open("GET","node_reRemove.php?id="+id,true);
	xmlhttp.send();
}
function cjc_add_node(pid){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4&&xmlhttp.status==200){
			//alert(pid);
			//window.location.href="node_add.php?pid=10000";
		}
	}
	xmlhttp.open("GET","node_add.php?pid="+pid,true);
	xmlhttp.send();
}

/*function cjcNodeRefresh(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();	
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","zNodes.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	zNodes_1=new Array();
	var cjcObj;
	var nodeNum=xmlDoc.getElementsByTagName("node").length;
	for(var i=0;i<nodeNum;i++){
		var nodeId_9_25=xmlDoc.getElementsByTagName("node")[i].attributes[0].value;
		if(nodeId_9_25==1||nodeId_9_25==11||nodeId_9_25==2||nodeId_9_25==21||nodeId_9_25==22){
			cjcObj={
				"id":nodeId_9_25,
				"pId":xmlDoc.getElementsByTagName("pid")[i].innerHTML,
				"name":xmlDoc.getElementsByTagName("name")[i].innerHTML,
				"isHidden":xmlDoc.getElementsByTagName("isHidden")[i].innerHTML==="false" ? false : true,
				"nocheck":true
			};
		}else{
			cjcObj={
				"id":nodeId_9_25,
				"pId":xmlDoc.getElementsByTagName("pid")[i].innerHTML,
				"name":xmlDoc.getElementsByTagName("name")[i].innerHTML,
				"isHidden":xmlDoc.getElementsByTagName("isHidden")[i].innerHTML==="false" ? false : true
			};
		}
		zNodes_1.push(cjcObj);
		
	}*/
function cjcNodeRefresh(){
	$.ajax({
		url:"user/"+current_user+"/zNodes.xml",
		type:"GET",
		cache:false,
		success:function(result,status,xhr){
			//console.log(result);
			//console.log(status);
			//console.log(xhr);
			zNodes_1=new Array();
			var cjcObj;
			var nodeNum=result.getElementsByTagName("node").length;
			for(var i=0;i<nodeNum;i++){
				var nodeId_9_25=result.getElementsByTagName("node")[i].attributes[0].value;
				if(nodeId_9_25==1||nodeId_9_25==11||nodeId_9_25==2||nodeId_9_25==21||nodeId_9_25==22){
					cjcObj={
						"id":nodeId_9_25,
						"pId":result.getElementsByTagName("pid")[i].innerHTML,
						"name":result.getElementsByTagName("name")[i].innerHTML,
						"isHidden":result.getElementsByTagName("isHidden")[i].innerHTML==="false" ? false : true,
						"nocheck":true
					};
				}else{
					cjcObj={
						"id":nodeId_9_25,
						"pId":result.getElementsByTagName("pid")[i].innerHTML,
						"name":result.getElementsByTagName("name")[i].innerHTML,
						"isHidden":result.getElementsByTagName("isHidden")[i].innerHTML==="false" ? false : true
					};
				}
				zNodes_1.push(cjcObj);
				
			}
			$.fn.zTree.init($("#treeD_1"), setting_1, zNodes_1);
			rMenu = $("#rMenu");
		},
		error:function(xhr,status,error){
			//console.log(xhr);
			//console.log(status);
			//console.log(error);
		}
		
	});		
	
}
</script>
</html>
