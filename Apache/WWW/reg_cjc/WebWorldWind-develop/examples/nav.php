<?php
	header("content-type:text/html;charset=utf-8");
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="CSS/style.css" />
<link rel="stylesheet" type="text/css" href="CSS/zTreeStyle/zTreeStyle.css">
<link rel="stylesheet" type="text/css" href="CSS/skin_/nav.css" />
<title>底部内容页</title>
</head>

<body>
<div id="container">
	<div id="bd">
    	<div class="sidebar">
        	<div class="sidebar-bg"></div>
            <i class="sidebar-hide"></i>
            <h2><a href="javascript:;" class="ue-clear" onclick="$('#cjc_7_30_tree_1').css('display','block');$('#cjc_7_30_tree_2').css('display','none');"><i class="h2-icon" title="切换到树型结构"></i><span>主数据库</span></a></h2>
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
		<div id="m_Redel" onclick="Cancelremove();">撤销删除</div>
		<div id="m_edit" onclick="editTreeNode();">修改节点</div>
	</div>
</body>

<script type="text/javascript" src="JS/jquery.js"></script>
<script type="text/javascript" src="JS/global.js"></script>
<script type="text/javascript" src="JS/nav.js"></script>
<script type="text/javascript" src="JS/Menu.js"></script>
<script src="JS/jquery.ztree.core.min.js"></script>
<script src="JS/jquery.ztree.excheck.min.js"></script>
<script src="JS/jquery.ztree.exedit.min.js"></script>
<script src="JS/jquery.ztree.exhide.min.js"></script>
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
				enable: true,
				chkboxType :{"Y" : "", "N" : "" }
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
		{ id:1, pId:0, name:"卫星影像",checked:true},
		{ id:2, pId:0, name:"边界和地名",nocheck:true},
		{ id:21, pId:2, name:"边界"},
		{ id:22, pId:2, name:"地名",nocheck:true},
		{ id:221, pId:22, name:"世界主要城市"},
		{ id:222, pId:22, name:"世界首都"},
		{ id:223, pId:22, name:"世界国家"},
		{ id:3, pId:0, name:"道路"},
		{ id:4, pId:0, name:"地球模式",nocheck:true},
		{ id:41, pId:4, name:"卫星图模式"},
		{ id:42, pId:4, name:"单色图模式"},
		{ id:43, pId:4, name:"四季变换模式"},
		{ id:44, pId:4, name:"国家行政模式"},
		{ id:45, pId:4, name:"气候分布模式"},
		{ id:46, pId:4, name:"高度图模式"},
		{ id:47, pId:4, name:"昼夜模式"},
		{ id:5, pId:0, name:"经纬线显示",nocheck:true},
		{ id:51, pId:5, name:"5度经纬线"},
		{ id:52, pId:5, name:"10度经纬线"},
		{ id:53, pId:5, name:"15度经纬线"},
		{ id:54, pId:5, name:"20度经纬线"},
		{ id:55, pId:5, name:"30度经纬线"},
		{ id:6, pId:0, name:"云层显示"},
		{ id:7, pId:0, name:"国家城市介绍"},
		{ id:8, pId:0, name:"城市实时天气"},
		{ id:9, pId:0, name:"航线模拟",nocheck:true},
		{ id:91, pId:9, name:"飞机航线"},
		{ id:92, pId:9, name:"轮船航线"}
		
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
			case "卫星影像":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(0,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(0,false);};break;
			case "边界":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(27,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(27,false);};break;
			case "世界主要城市":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(17,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(17,false);};break;
			case "世界首都":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(18,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(18,false);};break;
			case "世界国家":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(19,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(19,false);};break;
			case "国家行政模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(1,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(1,false);};break;
			case "气候分布模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(21,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(21,false);};break;
			case "道路":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(2,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(2,false);};break;
			case "卫星图模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(3,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(3,false);};break;
			case "单色图模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(8,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(8,false);};break;
			case "四季变换模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(14,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(14,false);};break;
			case "高度图模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.cjcStartDiYiRenCheng();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.cjcEndDiYiRenCheng();};break;
			case "昼夜模式":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(16,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(16,false);};break;
			case "5度经纬线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(22,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(22,false);};break;
			case "10度经纬线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(23,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(23,false);};break;
			case "15度经纬线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(24,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(24,false);};break;
			case "20度经纬线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(25,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(25,false);};break;
			case "30度经纬线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(26,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(26,false);};break;
			case "云层显示":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(28,true);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.layerControl(28,false);};break;
			
			
			case "国家城市介绍":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.isGetcountry=true;}else{window.document.getElementById("cjc_8_3_frame").contentWindow.isGetcountry=false;};break;
			case "城市实时天气":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_get_Tianqi();window.document.getElementById("cjc_8_3_frame").contentWindow.isTurnOnL=true;}else{window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_hide_Tianqi();window.document.getElementById("cjc_8_3_frame").contentWindow.isTurnOnL=false;};break;
			//case "航线生成":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_10_7_startDriv();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_10_7_stopDriv();};break;
			case "飞机航线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_airLine_3_8();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.remove_airLine_3_8();};break;
			//case "飞机动画":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_open_air();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_close_air();};break;
			//case "轮船动画":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_open_ship();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.cjc_close_ship();};break;
			case "轮船航线":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.add_shipLine_3_8();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.remove_shipLine_3_8();};break;
	
		}
	}
	function onCheck_1(e, treeId, treeNode){
		switch(treeNode.pId){
			case "11":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.pictures_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.pictures_hide(treeNode.id);};break;
			case "21":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.shapefile_hide(treeNode.id);};break;
			case "22":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.kml_show(treeNode.id,treeNode.name);}else{window.document.getElementById("cjc_8_3_frame").contentWindow.kml_hide(treeNode.id);};break;
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
	if(canCancel_1){
		$("#m_Redel").show();
	}else{
		$("#m_Redel").hide();
	}

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
		
	}
	$.fn.zTree.init($("#treeD_1"), setting_1, zNodes_1);
	rMenu = $("#rMenu");

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
