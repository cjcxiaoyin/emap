<?php

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
		<div id="m_Redel" onclick="Cancelremove();">撤销删除</div>
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
		enable: true,
		nocheckInherit: true
	},
	callback: {
		onNodeCreated: this.onNodeCreated,
		beforeClick: this.beforeClick,
		onClick: this.onClick,
		onRightClick: this.OnRightClick,
		beforeRename: this.beforeRename
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
		{ id:1, pId:0, name:"政区图", open:true,checked:true},
		{ id:11, pId:1, name:"世界政区图", open:true},
		{ id:12, pId:1, name:"中国政区图", open:true,checked:true},
		{ id:2, pId:0, name:"地形图"},
		{ id:21, pId:2, name:"山脉"},
		{ id:211, pId:21, name:"世界山脉"},
		{ id:2111, pId:211, name:"亚洲"},
		{ id:21111, pId:2111, name:"乌拉尔山脉"},
		{ id:21112, pId:2111, name:"西西伯利亚平原"},
		{ id:21113, pId:2111, name:"中西伯利亚高原"},
		{ id:21114, pId:2111, name:"上扬斯克山脉"},
		{ id:21115, pId:2111, name:"楚科奇山脉"},
		{ id:21116, pId:2111, name:"朱格朱尔山脉"},
		{ id:21117, pId:2111, name:"斯塔诺夫山脉"},
		{ id:21118, pId:2111, name:"萨彦岭"},
		{ id:21119, pId:2111, name:"杭爱山"},
		{ id:211110, pId:2111, name:"蒙古高原"},
		{ id:211111, pId:2111, name:"太白山脉-金刚山"},
		{ id:211112, pId:2111, name:"富士山"},
		{ id:211113, pId:2111, name:"关东平原"},
		{ id:211114, pId:2111, name:"长山山脉"},
		{ id:211115, pId:2111, name:"掸邦高原"},
		{ id:211116, pId:2111, name:"若开山脉"},
		{ id:211117, pId:2111, name:"湄南河平原"},
		{ id:211118, pId:2111, name:"湄公河三角洲"},
		{ id:211119, pId:2111, name:"印度河平原"},
		{ id:211120, pId:2111, name:"恒河平原"},
		{ id:211121, pId:2111, name:"恒河三角洲"},
		{ id:211122, pId:2111, name:"德干高原"},
		{ id:211123, pId:2111, name:"东高止山"},
		{ id:211124, pId:2111, name:"西高止山"},
		{ id:211125, pId:2111, name:"帕米尔高原"},
		{ id:211126, pId:2111, name:"伊朗高原"},
		{ id:211127, pId:2111, name:"阿拉伯高原"},
		{ id:211128, pId:2111, name:"安纳托利亚高原"},
		{ id:211129, pId:2111, name:"美索不达米亚平原"},
		{ id:211130, pId:2111, name:"兴都库什山脉"},
		{ id:211131, pId:2111, name:"苏莱曼山脉"},
		{ id:211132, pId:2111, name:"扎格罗斯山脉"},
		{ id:211133, pId:2111, name:"大高加索山脉"},
		{ id:211134, pId:2111, name:"厄尔布鲁士山"},
		{ id:211135, pId:2111, name:"哈萨克丘陵"},
		{ id:211136, pId:2111, name:"图兰低地"},
		{ id:2112, pId:211, name:"欧洲"},
		{ id:21121, pId:2112, name:"阿尔卑斯山脉"},
		{ id:21122, pId:2112, name:"勃朗峰"},
		{ id:21123, pId:2112, name:"比利牛斯山脉"},
		{ id:21124, pId:2112, name:"亚平宁山脉"},
		{ id:21125, pId:2112, name:"埃特纳火山"},
		{ id:21126, pId:2112, name:"维苏威火山"},
		{ id:21127, pId:2112, name:"迪纳拉山脉"},
		{ id:21128, pId:2112, name:"喀尔巴阡山脉"},
		{ id:21129, pId:2112, name:"巴尔干山脉"},
		{ id:211210, pId:2112, name:"奔宁山脉"},
		{ id:211211, pId:2112, name:"斯堪的纳维亚山脉"},
		{ id:211212, pId:2112, name:"西欧平原"},
		{ id:211213, pId:2112, name:"巴黎盆地"},
		{ id:211214, pId:2112, name:"波德平原"},
		{ id:211215, pId:2112, name:"东欧平原"},
		{ id:211216, pId:2112, name:"波河平原"},
		{ id:211217, pId:2112, name:"中央高原"},
		{ id:211218, pId:2112, name:"巴伐利亚高原"},
		{ id:2113, pId:211, name:"非洲"},
		{ id:21131, pId:2113, name:"阿特拉斯山脉"},
		{ id:21132, pId:2113, name:"德拉肯斯山脉"},
		{ id:21133, pId:2113, name:"乞力马扎罗山"},
		{ id:21134, pId:2113, name:"埃塞俄比亚高原"},
		{ id:21135, pId:2113, name:"东非高原"},
		{ id:21136, pId:2113, name:"南非高原"},
		{ id:21137, pId:2113, name:"隆达-加丹加高原"},
		{ id:21138, pId:2113, name:"刚果盆地"},
		{ id:21139, pId:2113, name:"几内亚高原"},
		{ id:211310, pId:2113, name:"乍得盆地"},
		{ id:2114, pId:211, name:"大洋洲"},
		{ id:21141, pId:2114, name:"大分水岭"},
		{ id:21142, pId:2114, name:"大自流盆地"},
		{ id:21143, pId:2114, name:"金伯利高原"},
		{ id:21144, pId:2114, name:"查亚峰"},
		{ id:2115, pId:211, name:"北美洲"},
		{ id:21151, pId:2115, name:"科迪勒拉山系"},
		{ id:21152, pId:2115, name:"阿拉斯加山脉"},
		{ id:21153, pId:2115, name:"麦金利山"},
		{ id:21154, pId:2115, name:"马更些山脉"},
		{ id:21155, pId:2115, name:"落基山脉"},
		{ id:21156, pId:2115, name:"内华达山脉"},
		{ id:21157, pId:2115, name:"海岸山脉"},
		{ id:21158, pId:2115, name:"东马德雷山脉"},
		{ id:21159, pId:2115, name:"西马德雷山脉"},
		{ id:211510, pId:2115, name:"南马德雷山脉"},
		{ id:211511, pId:2115, name:"阿巴拉契亚山脉"},
		{ id:211512, pId:2115, name:"拉布拉多高原"},
		{ id:211513, pId:2115, name:"劳伦高地"},
		{ id:211514, pId:2115, name:"大平原"},
		{ id:211515, pId:2115, name:"密西西比平原"},
		{ id:211516, pId:2115, name:"大西洋沿岸平原"},
		{ id:211517, pId:2115, name:"科罗拉多高原"},
		{ id:211518, pId:2115, name:"墨西哥高原"},
		{ id:2116, pId:211, name:"南美洲"},
		{ id:21161, pId:2116, name:"安第斯山脉"},
		{ id:21162, pId:2116, name:"奥里诺科平原"},
		{ id:21163, pId:2116, name:"圭亚那高原"},
		{ id:21164, pId:2116, name:"亚马孙平原"},
		{ id:21165, pId:2116, name:"巴西高原"},
		{ id:21166, pId:2116, name:"拉普拉塔平原"},
		{ id:21167, pId:2116, name:"潘帕斯草原"},
		{ id:21168, pId:2116, name:"格兰查科草原"},
		{ id:21169, pId:2116, name:"巴塔哥尼亚高原"},
		{ id:212, pId:21, name:"中国山脉"},
		{ id:2121, pId:212, name:"山脉"},
		{ id:21211, pId:2121, name:"大兴安岭"},
		{ id:21212, pId:2121, name:"小兴安岭"},
		{ id:21213, pId:2121, name:"长白山-千山"},
		{ id:21214, pId:2121, name:"燕山"},
		{ id:21215, pId:2121, name:"太行山"},
		{ id:21216, pId:2121, name:"吕梁山"},
		{ id:21217, pId:2121, name:"沂山-蒙山"},
		{ id:21218, pId:2121, name:"秦岭"},
		{ id:21219, pId:2121, name:"大别山"},
		{ id:212110, pId:2121, name:"大巴山"},
		{ id:212111, pId:2121, name:"巫山"},
		{ id:212112, pId:2121, name:"武夷山"},
		{ id:212113, pId:2121, name:"玉山-阿里山"},
		{ id:212114, pId:2121, name:"罗霄山"},
		{ id:212115, pId:2121, name:"南岭"},
		{ id:2121151, pId:212115, name:"越城岭"},
		{ id:2121152, pId:212115, name:"都庞岭"},
		{ id:2121153, pId:212115, name:"萌渚岭"},
		{ id:2121154, pId:212115, name:"骑田岭"},
		{ id:2121155, pId:212115, name:"大庾岭"},
		{ id:212116, pId:2121, name:"雪峰山"},
		{ id:212117, pId:2121, name:"武陵山"},
		{ id:212118, pId:2121, name:"大娄山"},
		{ id:212119, pId:2121, name:"乌蒙山"},
		{ id:212120, pId:2121, name:"横断山"},
		{ id:2121201, pId:212120, name:"邛崃山"},
		{ id:2121202, pId:212120, name:"大雪山"},
		{ id:2121203, pId:212120, name:"沙鲁里山"},
		{ id:2121204, pId:212120, name:"芒康山"},
		{ id:2121205, pId:212120, name:"云岭"},
		{ id:2121206, pId:212120, name:"他念他翁山"},
		{ id:2121207, pId:212120, name:"怒山"},
		{ id:2121208, pId:212120, name:"高黎贡山"},
		{ id:212121, pId:2121, name:"喜马拉雅山"},
		{ id:212122, pId:2121, name:"冈底斯山"},
		{ id:212123, pId:2121, name:"念青唐古拉山"},
		{ id:212124, pId:2121, name:"唐古拉山"},
		{ id:212125, pId:2121, name:"巴颜喀拉山"},
		{ id:212126, pId:2121, name:"阿尼玛卿山"},
		{ id:212127, pId:2121, name:"祁连山"},
		{ id:212128, pId:2121, name:"阿尔金山"},
		{ id:212129, pId:2121, name:"昆仑山"},
		{ id:212130, pId:2121, name:"可可西里山"},
		{ id:212131, pId:2121, name:"喀喇昆仑山"},
		{ id:212132, pId:2121, name:"天山"},
		{ id:212133, pId:2121, name:"阿尔泰山"},
		{ id:212134, pId:2121, name:"贺兰山"},
		{ id:212135, pId:2121, name:"六盘山"},
		{ id:212136, pId:2121, name:"阴山"},
		{ id:2122, pId:212, name:"名山"},
		{ id:21221, pId:2122, name:"白头山"},
		{ id:21222, pId:2122, name:"恒山"},
		{ id:21223, pId:2122, name:"五台山"},
		{ id:21224, pId:2122, name:"泰山"},
		{ id:21225, pId:2122, name:"华山"},
		{ id:21226, pId:2122, name:"嵩山"},
		{ id:21227, pId:2122, name:"武当山"},
		{ id:21228, pId:2122, name:"黄山"},
		{ id:21229, pId:2122, name:"九华山"},
		{ id:212210, pId:2122, name:"庐山"},
		{ id:212211, pId:2122, name:"普陀山"},
		{ id:212212, pId:2122, name:"天目山"},
		{ id:212213, pId:2122, name:"井冈山"},
		{ id:212214, pId:2122, name:"衡山"},
		{ id:212215, pId:2122, name:"峨眉山"},
		{ id:212216, pId:2122, name:"青城山"},
		{ id:212217, pId:2122, name:"太白山"},
		{ id:212218, pId:2122, name:"贡嘎山"},
		{ id:212219, pId:2122, name:"南迦巴瓦峰"},
		{ id:212220, pId:2122, name:"珠穆朗玛峰"},
		{ id:212221, pId:2122, name:"希夏邦马峰"},
		{ id:212222, pId:2122, name:"乔戈里峰"},
		{ id:212223, pId:2122, name:"博格达峰"},
		{ id:2123, pId:212, name:"高原"},
		{ id:21231, pId:2123, name:"青藏高原"},
		{ id:21232, pId:2123, name:"云贵高原"},
		{ id:21233, pId:2123, name:"黄土高原"},
		{ id:21234, pId:2123, name:"内蒙古高原"},
		{ id:2124, pId:212, name:"盆地"},
		{ id:21241, pId:2124, name:"四川盆地"},
		{ id:21242, pId:2124, name:"柴达木盆地"},
		{ id:21243, pId:2124, name:"塔里木盆地"},
		{ id:21244, pId:2124, name:"准噶尔盆地"},
		{ id:21245, pId:2124, name:"吐鲁番盆地"},
		{ id:2125, pId:212, name:"丘陵"},
		{ id:21251, pId:2125, name:"辽东丘陵"},
		{ id:21252, pId:2125, name:"山东丘陵"},
		{ id:21253, pId:2125, name:"东南丘陵"},
		{ id:212531, pId:21253, name:"江南丘陵"},
		{ id:212532, pId:21253, name:"浙闽丘陵"},
		{ id:212533, pId:21253, name:"两广丘陵"},
		{ id:2126, pId:212, name:"平原"},
		{ id:21261, pId:2126, name:"东北平原"},
		{ id:212611, pId:21261, name:"三江平原"},
		{ id:212612, pId:21261, name:"松嫩平原"},
		{ id:212613, pId:21261, name:"辽河平原"},
		{ id:21262, pId:2126, name:"华北平原"},
		{ id:212621, pId:21262, name:"海河平原"},
		{ id:212622, pId:21262, name:"黄淮平原"},
		{ id:21263, pId:2126, name:"长江中下游平原"},
		{ id:212631, pId:21263, name:"江汉平原"},
		{ id:212632, pId:21263, name:"洞庭湖平原"},
		{ id:212633, pId:21263, name:"鄱阳湖平原"},
		{ id:212634, pId:21263, name:"苏皖沿江平原"},
		{ id:212635, pId:21263, name:"里下湖平原"},
		{ id:212636, pId:21263, name:"长江三角洲平原"},
		{ id:21264, pId:2126, name:"珠江三角洲平原"},
		{ id:21265, pId:2126, name:"台湾西部平原"},
		{ id:21266, pId:2126, name:"成都平原"},
		{ id:21267, pId:2126, name:"关中平原"},
		{ id:21268, pId:2126, name:"河套平原"},
		{ id:21269, pId:2126, name:"银川平原"},
		{ id:3, pId:0, name:"水系图"},
		{ id:31, pId:3, name:"中国水系"},
		{ id:311, pId:31, name:"河流"},
		{ id:3111, pId:311, name:"黑龙江"},
		{ id:31111, pId:3111, name:"松花江"},
		{ id:31112, pId:3111, name:"嫩江"},
		{ id:31113, pId:3111, name:"牡丹江"},
		{ id:31114, pId:3111, name:"乌苏里江"},
		{ id:3112, pId:311, name:"海河"},
		{ id:31121, pId:3112, name:"永定河"},
		{ id:31122, pId:3112, name:"大清河"},
		{ id:31123, pId:3112, name:"子牙河"},
		{ id:31124, pId:3112, name:"潮白河"},
		{ id:3113, pId:311, name:"黄河"},
		{ id:31131, pId:3113, name:"湟水"},
		{ id:31132, pId:3113, name:"洮河"},
		{ id:31133, pId:3113, name:"汾河"},
		{ id:31134, pId:3113, name:"渭河"},
		{ id:31135, pId:3113, name:"泾河"},
		{ id:3114, pId:311, name:"长江"},
		{ id:31141, pId:3114, name:"沱沱河"},
		{ id:31142, pId:3114, name:"通天河"},
		{ id:31143, pId:3114, name:"金沙江"},
		{ id:31144, pId:3114, name:"长江"},
		{ id:31145, pId:3114, name:"当曲"},
		{ id:31146, pId:3114, name:"雅砻江"},
		{ id:31147, pId:3114, name:"大渡河"},
		{ id:31148, pId:3114, name:"岷江"},
		{ id:31149, pId:3114, name:"嘉陵江"},
		{ id:311410, pId:3114, name:"乌江"},
		{ id:311411, pId:3114, name:"清江"},
		{ id:311412, pId:3114, name:"湘江"},
		{ id:311413, pId:3114, name:"沅江"},
		{ id:311414, pId:3114, name:"汉江"},
		{ id:311415, pId:3114, name:"赣江"},
		{ id:311416, pId:3114, name:"抚河"},
		{ id:311417, pId:3114, name:"虎跳峡"},
		{ id:311418, pId:3114, name:"瞿塘峡"},
		{ id:311419, pId:3114, name:"巫峡"},
		{ id:311420, pId:3114, name:"西陵峡"},
		{ id:311421, pId:3114, name:"都江堰"},
		{ id:311422, pId:3114, name:"玉树"},
		{ id:311423, pId:3114, name:"宜宾"},
		{ id:311424, pId:3114, name:"宜昌"},
		{ id:311425, pId:3114, name:"湖口"},
		{ id:3115, pId:311, name:"珠江"},
		{ id:31151, pId:3115, name:"南盘江"},
		{ id:31152, pId:3115, name:"红水河"},
		{ id:31153, pId:3115, name:"黔江"},
		{ id:31154, pId:3115, name:"浔江"},
		{ id:31155, pId:3115, name:"西江"},
		{ id:31156, pId:3115, name:"北盘江"},
		{ id:31157, pId:3115, name:"柳江"},
		{ id:31158, pId:3115, name:"郁江"},
		{ id:31159, pId:3115, name:"漓江"},
		{ id:311510, pId:3115, name:"桂江"},
		{ id:311511, pId:3115, name:"北江"},
		{ id:311512, pId:3115, name:"东江"},
		{ id:311513, pId:3115, name:"黄果树瀑布"},
		{ id:311514, pId:3115, name:"辽河"},
		{ id:311515, pId:3115, name:"图们江"},
		{ id:311516, pId:3115, name:"鸭绿江"},
		{ id:311517, pId:3115, name:"滦河"},
		{ id:311518, pId:3115, name:"淮河"},
		{ id:311519, pId:3115, name:"新安江"},
		{ id:311520, pId:3115, name:"富春江"},
		{ id:311521, pId:3115, name:"钱塘江"},
		{ id:311522, pId:3115, name:"闽江"},
		{ id:311523, pId:3115, name:"元江"},
		{ id:311524, pId:3115, name:"红河"},
		{ id:311525, pId:3115, name:"澜沧江"},
		{ id:311526, pId:3115, name:"湄公河"},
		{ id:311527, pId:3115, name:"怒江"},
		{ id:311528, pId:3115, name:"萨尔温江"},
		{ id:311529, pId:3115, name:"雅鲁藏布江"},
		{ id:311530, pId:3115, name:"布拉马普特拉河"},
		{ id:311531, pId:3115, name:"伊犁河"},
		{ id:311532, pId:3115, name:"叶尔羌河"},
		{ id:311533, pId:3115, name:"和田河"},
		{ id:311534, pId:3115, name:"塔里木河"},
		{ id:311535, pId:3115, name:"孔雀河"},
		{ id:311536, pId:3115, name:"额尔齐斯河"},
		{ id:311537, pId:3115, name:"弱水"},
		{ id:311538, pId:3115, name:"京杭大运河"},
		{ id:312, pId:31, name:"湖泊"},
		{ id:3121, pId:312, name:"兴凯湖"},
		{ id:3122, pId:312, name:"呼伦湖"},
		{ id:3123, pId:312, name:"镜泊湖"},
		{ id:3124, pId:312, name:"白洋淀"},
		{ id:3125, pId:312, name:"微山湖"},
		{ id:3126, pId:312, name:"洪泽湖"},
		{ id:3127, pId:312, name:"高邮湖"},
		{ id:3128, pId:312, name:"太湖"},
		{ id:3129, pId:312, name:"千岛湖"},
		{ id:31210, pId:312, name:"巢湖"},
		{ id:31211, pId:312, name:"鄱阳湖"},
		{ id:31212, pId:312, name:"洞庭湖"},
		{ id:31213, pId:312, name:"洪湖"},
		{ id:31214, pId:312, name:"滇池"},
		{ id:31215, pId:312, name:"洱海"},
		{ id:31216, pId:312, name:"青海湖"},
		{ id:31217, pId:312, name:"扎陵湖"},
		{ id:31218, pId:312, name:"鄂陵湖"},
		{ id:31219, pId:312, name:"纳木错"},
		{ id:31220, pId:312, name:"羊卓雍错"},
		{ id:31221, pId:312, name:"色林格"},
		{ id:31222, pId:312, name:"博斯腾湖"},
		{ id:31223, pId:312, name:"艾丁湖"},
		{ id:31224, pId:312, name:"乌梁素海"},
		{ id:32, pId:3, name:"世界水系"},
		{ id:321, pId:32, name:"亚洲"},
		{ id:3211, pId:321, name:"鄂毕河"},
		{ id:3212, pId:321, name:"叶尼塞河"},
		{ id:3213, pId:321, name:"勒拿河"},
		{ id:3214, pId:321, name:"阿穆尔河"},
		{ id:3215, pId:321, name:"湄公河"},
		{ id:3216, pId:321, name:"湄南河"},
		{ id:3217, pId:321, name:"萨尔温江"},
		{ id:3218, pId:321, name:"伊洛瓦底江"},
		{ id:3219, pId:321, name:"布拉马普特拉河"},
		{ id:32110, pId:321, name:"恒河"},
		{ id:32111, pId:321, name:"印度河"},
		{ id:32112, pId:321, name:"幼发拉底河"},
		{ id:32113, pId:321, name:"底格里斯河"},
		{ id:32114, pId:321, name:"约旦河"},
		{ id:32115, pId:321, name:"苏伊士运河"},
		{ id:32116, pId:321, name:"阿姆河"},
		{ id:32117, pId:321, name:"锡尔河"},
		{ id:32118, pId:321, name:"乌拉尔河"},
		{ id:32119, pId:321, name:"贝加尔湖"},
		{ id:32120, pId:321, name:"里海"},
		{ id:32121, pId:321, name:"咸海"},
		{ id:32122, pId:321, name:"巴尔喀什湖"},
		{ id:32123, pId:321, name:"死海"},
		{ id:32124, pId:321, name:"洞里萨湖"},
		{ id:322, pId:32, name:"欧洲"},
		{ id:3221, pId:322, name:"多瑙河"},
		{ id:3222, pId:322, name:"波河"},
		{ id:3223, pId:322, name:"罗讷河"},
		{ id:3224, pId:322, name:"卢瓦尔河"},
		{ id:3225, pId:322, name:"塞纳河"},
		{ id:3226, pId:322, name:"泰晤士河"},
		{ id:3227, pId:322, name:"莱茵河"},
		{ id:3228, pId:322, name:"易北河"},
		{ id:3229, pId:322, name:"维斯瓦河"},
		{ id:32210, pId:322, name:"顿河"},
		{ id:32211, pId:322, name:"第聂伯河"},
		{ id:32212, pId:322, name:"伏尔加河"},
		{ id:32213, pId:322, name:"基尔运河"},
		{ id:323, pId:32, name:"非洲"},
		{ id:3231, pId:323, name:"尼罗河"},
		{ id:3232, pId:323, name:"青尼罗河"},
		{ id:3233, pId:323, name:"白尼罗河"},
		{ id:3234, pId:323, name:"刚果河"},
		{ id:3235, pId:323, name:"赞比西河"},
		{ id:3236, pId:323, name:"尼日尔河"},
		{ id:3237, pId:323, name:"奥兰治河"},
		{ id:3238, pId:323, name:"莫西奥图尼亚瀑布"},
		{ id:3239, pId:323, name:"马拉维湖"},
		{ id:32310, pId:323, name:"坦噶尼喀湖"},
		{ id:32311, pId:323, name:"维多利亚湖"},
		{ id:32312, pId:323, name:"图尔卡纳湖"},
		{ id:32313, pId:323, name:"乍得湖"},
		{ id:32314, pId:323, name:"纳赛尔水库"},
		{ id:32315, pId:323, name:"阿斯旺水电站"},
		{ id:324, pId:32, name:"大洋洲"},
		{ id:3241, pId:324, name:"墨累河"},
		{ id:3242, pId:324, name:"达令河"},
		{ id:3243, pId:324, name:"北艾尔湖"},
		{ id:325, pId:32, name:"北美洲"},
		{ id:3251, pId:325, name:"密西西比河"},
		{ id:3252, pId:325, name:"俄亥俄河"},
		{ id:3253, pId:325, name:"密苏里河"},
		{ id:3254, pId:325, name:"格兰德河"},
		{ id:3255, pId:325, name:"科罗拉多河"},
		{ id:3256, pId:325, name:"哥伦比亚河"},
		{ id:3257, pId:325, name:"育空河"},
		{ id:3258, pId:325, name:"马更些河"},
		{ id:3259, pId:325, name:"圣劳伦斯河"},
		{ id:32510, pId:325, name:"大熊湖"},
		{ id:32511, pId:325, name:"大奴湖"},
		{ id:32512, pId:325, name:"温尼泊湖"},
		{ id:32513, pId:325, name:"苏必利尔湖"},
		{ id:32514, pId:325, name:"密歇根湖"},
		{ id:32515, pId:325, name:"休伦湖"},
		{ id:32516, pId:325, name:"伊利湖"},
		{ id:32517, pId:325, name:"安大略湖"},
		{ id:32518, pId:325, name:"巴拿马运河"},
		{ id:32519, pId:325, name:"尼亚加拉瀑布"},
		{ id:326, pId:32, name:"南美洲"},
		{ id:3261, pId:326, name:"亚马孙河"},
		{ id:3262, pId:326, name:"巴拉圭"},
		{ id:3263, pId:326, name:"巴拉那"},
		{ id:3264, pId:326, name:"拉普拉塔河"},
		{ id:3265, pId:326, name:"奥里诺科河"},
		{ id:3266, pId:326, name:"圣弗朗西斯科河"},
		{ id:3267, pId:326, name:"的的喀喀湖"},
		{ id:3268, pId:326, name:"马拉开波湖"},
		{ id:3269, pId:326, name:"伊瓜苏瀑布"},
		{ id:32610, pId:326, name:"安赫尔瀑布"},
		{ id:32611, pId:326, name:"伊泰普水电站"},
		{ id:4, pId:0, name:"气候图"},
		{ id:41, pId:4, name:"中国气候图"},
		{ id:411, pId:41, name:"温度带图"},
		{ id:412, pId:41, name:"干湿地区图"},
		{ id:42, pId:4, name:"世界气候图"},
		{ id:421, pId:42, name:"一月等温线图"},
		{ id:422, pId:42, name:"七月等温线图"},
		{ id:423, pId:42, name:"年降水量图"},
		{ id:424, pId:42, name:"气候类型分布图"},
		{ id:5, pId:0, name:"植被与土壤"},
		{ id:51, pId:5, name:"土壤分布图"},
		{ id:52, pId:5, name:"植被分布图"},
		{ id:6, pId:0, name:"洋流与渔场"},
		{ id:61, pId:6, name:"洋流"},
		{ id:62, pId:6, name:"渔场"},
		{ id:7, pId:0, name:"农业图"},
		{ id:71, pId:7, name:"世界农业图"},
		{ id:72, pId:7, name:"中国农业图"},
		{ id:8, pId:0, name:"自然资源图"},
		{ id:81, pId:8, name:"世界自然资源图"},
		{ id:82, pId:8, name:"中国自然资源图"},
		{ id:9, pId:0, name:"重要城市图"},
		{ id:91, pId:9, name:"世界重要城市图"},
		{ id:92, pId:9, name:"中国重要城市图"},
		{ id:10, pId:0, name:"交通线图"},
		{ id:101, pId:10, name:"世界交通线图"},
		{ id:1011, pId:101, name:"重要港口"},
		{ id:1012, pId:101, name:"航线"},
		{ id:1013, pId:101, name:"重要航空港"},
		{ id:1014, pId:101, name:"输油管道"},
		{ id:102, pId:10, name:"中国交通线图"},
		{ id:1021, pId:102, name:"铁路图"},
		{ id:1022, pId:102, name:"公路图"},
		{ id:1023, pId:102, name:"水运图"},
		{ id:11, pId:0, name:"人文图"},
		{ id:111, pId:11, name:"世界人文图"},
		{ id:1111, pId:111, name:"世界遗产分布图"},
		{ id:1112, pId:111, name:"世界人口密度"},
		{ id:1113, pId:111, name:"世界人种"},
		{ id:1114, pId:111, name:"世界宗教"},
		{ id:1115, pId:111, name:"世界语言 "},
		{ id:112, pId:11, name:"中国人文图"},
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
		case "中国政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaShow();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaHide();};break;
		case "世界政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaShow();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaHide();};break;
		case "政区图":if(treeNode.checked){window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaShow();window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaShow();}else{window.document.getElementById("cjc_8_3_frame").contentWindow.WorldQuHuaHide();window.document.getElementById("cjc_8_3_frame").contentWindow.ChinaQuHuaHide();};break;
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
	
	cjcNodeRefresh();
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
	cjc_reRemove_node(perNode_1Id_1);		
	zTree.showNodes(perNode_1);
	canCancel_1=false;
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

function cjcNodeRefresh(){
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","zNodes.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	//console.log(xmlDoc.getElementsByTagName("node")[0].attributes[0].value);
	zNodes_1=new Array();
	var nodeNum=xmlDoc.getElementsByTagName("node").length;
	for(var i=0;i<nodeNum;i++){
		var cjcObj={id:xmlDoc.getElementsByTagName("node")[i].attributes[0].value,pId:xmlDoc.getElementsByTagName("pid")[i].innerHTML,name:xmlDoc.getElementsByTagName("name")[i].innerHTML,isHidden:xmlDoc.getElementsByTagName("isHidden")[i].innerHTML==="false" ? false : true};
		zNodes_1.push(cjcObj);
		
	}
	//console.log(zNodes_1);
	$.fn.zTree.init($("#treeD_1"), setting_1, zNodes_1);
	zTree_Menu = $.fn.zTree.getZTreeObj("treeD_1");
	curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
	zTree_Menu.selectNode(curMenu);

	var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
	a.addClass("cur");
	zTree = $.fn.zTree.getZTreeObj("treeD_1");
	rMenu = $("#rMenu");
	
	//隐藏大标签的checkbox
	/*for(var i=0;i<zTree_Menu.getNodes().length;i++){
	zTree_Menu.getNodes()[i].nocheck=true;
	zTree.updateNode(zTree_Menu.getNodes()[i]);
	}*/

}
</script>
</html>
