//全局变量
var isExist_cityDingWei=false;
var isExist_JingWeiDingWei=false;
var isExist_cjcGuanJianZhi=false;
//var placeName=window.parent.parent.document.getElementById("placeName");
//var jingDu=window.parent.parent.document.getElementById("jingDu");
//var weiDu=window.parent.parent.document.getElementById("weiDu");
var cityDingWei=window.parent.parent.document.getElementById("cjcCityDingWei");
var placeSearch_01;
var geolocation;
var cjcMapCenter;
var is_cjc_button_01_enable=false;
var is_cjc_button_02_enable=false;
var is_cjc_button_03_enable=false;
var is_cjc_button_04_enable=false;
var is_cjc_button_05_enable=false;
var is_cjc_button_06_enable=false;
var is_cjc_button_07_enable=false;
var mouseTool;
//var googleLayer = null;
var diXinLayer;
var disWorld;
var is_disWorls_show=false;
var ruler1;
var district, polygons = [], citycode;
var citySelect = document.getElementById('city');
var districtSelect = document.getElementById('district');
var areaSelect = document.getElementById('street');
var opts = {
        subdistrict: 1,   //返回下一级行政区
        showbiz:false  //最后一级返回街道信息
};
var isShow=false;
 var colors = [
        "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
        "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
        "#651067", "#329262", "#5574a6", "#3b3eac"
];
//var isneedEvent=true;
//canvas画笔
var canvas=document.getElementById("cjc_8_5_canvas");
var context=canvas.getContext("2d");
var offCanvas=document.getElementById("offCanvas");
var offContext=offCanvas.getContext("2d");
var pan_type="pan";
var line_x;
var line_y;
//var offCanvas =$(window).width();
//var offCanvas =$(window).height();
//console.log(offCanvas+"      "+offCanvas);
var strokeColor = "red"
var isMouseDown = false
var lastLoc = {x:0,y:0}
var lastTimestamp = 0
var lastLineWidth = -0.1
//canvas画笔中线条大小
var maxLineWidth = 20;
var minLineWidth = 1;
var maxStrokeV = 3;
var minStrokeV = 0.1;
var cjc_8_5_size=5;
//窗体初始化
//placeName.innerText="";
//jingDu.innerText="";
//weiDu.innerText="";
//实例化地图
var map = new AMap.Map('GaoDeMap', {
	resizeEnable: true,
	zoom:4,
	doubleClickZoom:false,
	center: [104.299012,28.700327],
	mapStyle:"amap://styles/45b0c1d3a525c369a07a9e8eacd7f7cc",
	//mapStyle:"http://geojson.io/#map=2/20.0/0.0",
	defaultCursor:"default"
});
var scale = new AMap.Scale({
    visible: true
});
var isStartAddPoints=false;
var cjc_point_cont=" ";
var cjc_color="#000000";
var cjc_8_8_point;
var cjc_9_3_china_overlay;
var tipMarker_9_5=new AMap.Marker();
var json_pictures={};
var json_shapefiles={};
var json_geojson={};
var this_button_9_8=$("#pen_btn");
var this_button_9_9=$("#cjc_9_9_img_1");
var cjc_9_9_src="img/skin_/cjc/point_1.png";
var cjc_9_10_overlayers=[];
var cjc_9_10_text="";
var cjc_9_12_file;
var isSetMiddlePoint=false;
var is_mouseTool_polyline=false;
var isStartAddtext=false;
var diag = new Dialog();
var cjc_9_20_areas=[];
var cjc_num_count=1;
var cjc_9_25_lise_1;
var cjc_9_25_lise_2;
var timeOutEvent;
var my_polyline=[];
var cjc_10_29_time;
var diXinLayer_num=0;


var contextMenu = new AMap.ContextMenu();  //创建右键菜单
var contextMenu_1 = new AMap.ContextMenu();  //创建右键菜单
var mouseTool = new AMap.MouseTool(map);   //在地图中添加MouseTool插件
map.addControl(scale); 
//cjcKeHuDingWei();

//jquery获取的DOM事件
/*window.parent.document.getElementById("cjc_button_re").onclick=function(){
	cancelAllTools();
}
window.parent.document.getElementById("cjc_button_lakuang").onclick=function(){
	if(!is_cjc_button_01_enable){
		cancelAllTools();
		is_cjc_button_01_enable=true;
		var rectOptions = {
        strokeStyle: "dashed",
        strokeColor: "#FF33FF",
        fillColor: "#FF99FF",
        fillOpacity: 0.5,
        strokeOpacity: 1,
        strokeWeight: 2
    };
    map.plugin(["AMap.MouseTool"], function() {
        mouseTool = new AMap.MouseTool(map);
		//通过rectOptions更改拉框放大时鼠标绘制的矩形框样式
        mouseTool.rectZoomIn(rectOptions);     
    });
	}else{		
		is_cjc_button_01_enable=false;
		map.plugin(["AMap.MouseTool"], function() {
		//通过rectOptions更改拉框放大时鼠标绘制的矩形框样式
        mouseTool.close();     
    });
	}
}
window.parent.document.getElementById("cjc_button_juli").onclick=function(){
	if(!is_cjc_button_02_enable){
		cancelAllTools();
		is_cjc_button_02_enable=true;
        map.plugin(["AMap.RangingTool"], function() {
        ruler1 = new AMap.RangingTool(map);
        AMap.event.addListener(ruler1, "end", function(e) {
            ruler1.turnOff();
			is_cjc_button_02_enable=false;
        });
		});
		ruler1.turnOn();
	}else{
		ruler1.turnOff();
		is_cjc_button_02_enable=false;
	}
}*/
document.getElementById("cjc_8_3_btn_a_1").onclick=function(){
	if(isShow){
		$(".cjc_8_2_toolbar_right_children").css("display","none");
		isShow=false;
	}else{
		$(".cjc_8_2_toolbar_right_children").css("display","block");
		isShow=true;
	}
}
document.getElementById('shp').addEventListener('change', onChange_cjc);
document.getElementById('shp_9_3').addEventListener('change', onChange_cjc_9_3);  
window.parent.parent.document.getElementById("cjc_10_21_div").onclick=function(){
	add_title_box_new("关于系统");
	};
disWorld = new AMap.DistrictLayer.World({
        zIndex: 10,
        styles: {
            // 颜色格式: #RRGGBB、rgba()、rgb()、[r, g, b, a]
            // 国境线
            //'nation-stroke': nationStroke,
            // 海岸线
            //'coastline-stroke': '',
            // 填充
            'fill': function (props) {
				if (props.SOC == 'CHN') {
                //    updateInfo(props);
                    return 'rgba(255, 160, 122, 0.5)';
                } else {
					return 'rgba(128, 128, 128, 0.3)';
                }                    
            }
        }
});
function add_title_box_new(myName){	
	$.get("./interpretation/"+myName+".html", function(){
		var diag_new= new Dialog();
			diag_new.URL = "./interpretation/"+myName+".html";
			diag_new.Width=480;
			diag_new.Height=380;
			diag_new.show();
	},"html");
}
//cjc鼠标单击事件
AMap.plugin('AMap.Geocoder',function(){
   // var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   /*jingDu.innerText=e.lnglat.getLng();
		weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       });*/
	   if(isStartAddPoints){
		   cjc_8_8_point=e.lnglat;
		   cjc_8_8_open_add_point();
		   isStartAddPoints=false;
		   map.setDefaultCursor("default");
		   return;
	   }
	   if(isStartAddtext){
		   cjc_8_8_point=e.lnglat;
		   cjc_9_18_addText_open();
		   isStartAddtext=false;
		   map.setDefaultCursor("default");
		   return;
	   }
	   if(isSetMiddlePoint){
		   $(".cjc_8_9_addPictures").css("display","block");
		   $("#cjc_9_12_input").val(e.lnglat);
		   isSetMiddlePoint=false;
		   map.setDefaultCursor("default");
		   return;
	   }
	   if(is_disWorls_show){
		   var props = disWorld.getDistrictByContainerPos(e.pixel);
		   if(props){
			var SOC = props.SOC;
            disWorld.setStyles({
                'fill': function (props) {
                    return props.SOC == SOC ? 'rgba(255, 160, 122, 0.5)' : 'rgba(128, 128, 128, 0.3)';
                }
            });
			add_title_marker(props.NAME_CHN,e.lnglat);
		   }
	   }
	})
	.on("rightclick",function(e){
		if(is_mouseTool_polyline){
			is_mouseTool_polyline=false;
			mouseTool.close(false);
			map.setDefaultCursor("default");
			cjc_9_19_enable_buttons();
		}
	})
	.on("touchstart",function(e){timeOutEvent = setTimeout(function(){
		if(is_mouseTool_polyline){
			is_mouseTool_polyline=false;
			mouseTool.close(false);
			map.setDefaultCursor("default");
			cjc_9_19_enable_buttons();
		}},1000);})
	.on("touchmove",function(e){clearTimeout(timeOutEvent);timeOutEvent = 0;})
	.on("touchend",function(e){clearTimeout(timeOutEvent); })
	.on("dblclick",function(e){
		 if(is_disWorls_show){
			 tipMarker_9_5.setMap(null);
			 var props = disWorld.getDistrictByContainerPos(e.pixel);
		   if(props){
			var SOC = props.SOC;
            disWorld.setStyles({
                'fill': function (props) {
                    return props.SOC == SOC ? 'rgba(128, 128, 128, 0.3)' : 'rgba(128, 128, 128, 0.3)';
                }
            });
		   }
		 }
	});
});
//UI组件
/*AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $) {
        //创建一个实例
      	 var districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: map
        });
	//console.log(districtExplorer);
        //当前聚焦的区域
        var currentAreaNode = null;

        //鼠标hover提示内容
        var $tipMarkerContent = $('<div class="tipMarker top"></div>');

        var tipMarker = new AMap.Marker({
            content: $tipMarkerContent.get(0),
            offset: new AMap.Pixel(0, 0),
            bubble: true
        });

        //根据Hover状态设置相关样式
        function toggleHoverFeature(feature, isHover, position) {

            tipMarker.setMap(isHover ? map : null);

            if (!feature) {
                return;
            }

            var props = feature.properties;

            if (isHover) {

                //更新提示内容
                $tipMarkerContent.html(props.adcode + ': ' + props.name);
                //更新位置
                tipMarker.setPosition(position || props.center);
            }

            $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').toggleClass('hover', isHover);

            //更新相关多边形的样式
            var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
            for (var i = 0, len = polys.length; i < len; i++) {

                polys[i].setOptions({
                    fillOpacity: isHover ? 0.5 : 0.2
                });
            }
        }
        //监听feature的hover事件
      districtExplorer.on('featureMouseout featureMouseover', function(e, feature) {
		if(!isneedEvent){
			
		}else{
            toggleHoverFeature(feature, e.type === 'featureMouseover',
                e.originalEvent ? e.originalEvent.lnglat : null);
				}
        });

        //监听鼠标在feature上滑动
       districtExplorer.on('featureMousemove', function(e, feature) {
				if(!isneedEvent){
					
		}else{
            //更新提示位置
			tipMarker.setPosition(e.originalEvent.lnglat);
			}
        });
        //feature被点击
        districtExplorer.on('featureClick', function(e, feature) {
		if(!isneedEvent){

		}else{
				
            var props = feature.properties;

            //如果存在子节点
            if (props.childrenNum > 0) {
                //切换聚焦区域
                switch2AreaNode(props.adcode);
            }
		}
        });
		
        //外部区域被点击
        districtExplorer.on('outsideClick', function(e) {
				if(!isneedEvent){

		}else{
            districtExplorer.locatePosition(e.originalEvent.lnglat, function(error, routeFeatures) {

                if (routeFeatures && routeFeatures.length > 1) {
                    //切换到省级区域
                    switch2AreaNode(routeFeatures[1].properties.adcode);
                } else {
                    //切换到全国
                    switch2AreaNode(100000);
                }

            }, {
                levelLimit: 2
            });
			}
        });

        //绘制区域面板的节点
        function renderAreaPanelNode(ele, props, color) {

            var $box = $('<li/>').addClass('lv_' + props.level);

            var $h2 = $('<h2/>').addClass('lv_' + props.level).attr({
                'data-adcode': props.adcode,
                'data-level': props.level,
                'data-children-num': props.childrenNum || void(0),
                'data-center': props.center.join(',')
            }).html(props.name).appendTo($box);

            if (color) {
                $h2.css('borderColor', color);
            }

            //如果存在子节点
            if (props.childrenNum > 0) {

                //显示隐藏
                $('<div class="showHideBtn"></div>').appendTo($box);

                //子区域列表
                $('<ul/>').addClass('sublist lv_' + props.level).appendTo($box);

                $('<div class="clear"></div>').appendTo($box);

                if (props.level !== 'country') {
                    $box.addClass('hide-sub');
                }
            }

            $box.appendTo(ele);
        }


        //填充某个节点的子区域列表
        function renderAreaPanel(areaNode) {

            var props = areaNode.getProps();

            var subFeatures = areaNode.getSubFeatures();

            //填充子区域
            for (var i = 0, len = subFeatures.length; i < len; i++) {
                renderAreaPanelNode($subBox, areaNode.getPropsOfFeature(subFeatures[i]), colors[i % colors.length]);
            }
        }

        //绘制某个区域的边界
        function renderAreaPolygons(areaNode) {

            //更新地图视野
            map.setBounds(areaNode.getBounds(), null, null, true);

            //清除已有的绘制内容
            districtExplorer.clearFeaturePolygons();
			
            //绘制子区域
            districtExplorer.renderSubFeatures(areaNode, function(feature, i) {

                var fillColor = colors[i % colors.length];
                var strokeColor = colors[colors.length - 1 - i % colors.length];

                return {
                    cursor: 'default',
                    bubble: true,
                    strokeColor: strokeColor, //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 1, //线宽
                    fillColor: fillColor, //填充色
                    fillOpacity: 0.35, //填充透明度
                };
            });

            //绘制父区域
            districtExplorer.renderParentFeature(areaNode, {
                cursor: 'default',
                bubble: true,
                strokeColor: 'black', //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                fillColor: null, //填充色
                fillOpacity: 0.35, //填充透明度
            });
        }

        //切换区域后刷新显示内容
        function refreshAreaNode(areaNode) {
            districtExplorer.setHoverFeature(null);
            renderAreaPolygons(areaNode);
			cjc_9_3_china_overlay=districtExplorer.getAllFeaturePolygons();
        }

        //切换区域
        function switch2AreaNode(adcode, callback) {

            if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                return;
            }

            loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    return;
                }
                currentAreaNode = areaNode;
                //设置当前使用的定位用节点
                districtExplorer.setAreaNodesForLocating([currentAreaNode]);

                refreshAreaNode(areaNode);

                if (callback) {
                    callback(null, areaNode);
                }
            });
        }
        //加载区域
        function loadAreaNode(adcode, callback) {

            districtExplorer.loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    console.error(error);

                    return;
                }
                if (callback) {
                    callback(null, areaNode);
                }
            });
        }

        //全国
        switch2AreaNode(100000);
		
    });*/
//treelist调用的方法
function ChinaQuHuaHide(){
	//$(".amap-layer.amap-vectors").addClass("newcjc");
	isneedEvent=false;
	map.remove(cjc_9_3_china_overlay);
}
function ChinaQuHuaShow(){
	//$(".amap-layer.amap-vectors.newcjc").removeClass("newcjc");
	isneedEvent=true;
	map.add(cjc_9_3_china_overlay);
	map.setZoomAndCenter(4,[104.299012,28.700327]);
}
function WorldQuHuaHide(){
	//if(googleLayer){
	//	googleLayer.setMap(null);
	//}
	if(disWorld){
		disWorld.setMap(null);
		tipMarker_9_5.setMap(null);
		is_disWorls_show=false;
	}
}
function WorldQuHuaShow(){
	//addGoogleLayer();
	is_disWorls_show=true;
	map.setZoomAndCenter(3,[104.299012,28.700327]);
	
	//map.setLayers(disWorld);
	disWorld.setMap(map);
}	
//自己的六个按钮的函数
function cjc_turn_big(){
	map.zoomIn();
}
function cjc_turn_small(){
	map.zoomOut();
}	
	
function cjcKeHuDingWei(){
	//$(".amap-layer").css("display","none");
	  map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            showButton:false,
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        cjc_9_25_lise_1=AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        cjc_9_25_lise_2=AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
	//解析定位结果
	function onComplete(data) {
		//alert("定位成功");
		AMap.event.removeListener(cjc_9_25_lise_1);
		AMap.event.removeListener(cjc_9_25_lise_2);
	}
	//解析定位错误信息
	function onError(data) {
		//alert("定位失败");
		AMap.event.removeListener(cjc_9_25_lise_1);
		AMap.event.removeListener(cjc_9_25_lise_2);
	}
}
function cjcCanvasPaint(){
	setCanvas_width_height();
	$("#cjc_btn_controller").css("display","block");
	$(".canvas_div").css("display","block");
}
function cjc_reload(){
	//location.reload();
	window.parent.location.reload();
}
    // 添加Google图层
function addGoogleLayer() {
        googleLayer = new AMap.TileLayer({
            // 图块取图地址
            getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=m@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
            zIndex:100
        });
        googleLayer.setMap(map);
}
function addDiXinfTu(){
	if(!diXinLayer){
		diXinLayer=new AMap.TileLayer({
			getTileUrl: 'https://t{1,2,3,4}.tianditu.gov.cn/DataServer?T=ter_w&x=[x]&y=[y]&l=[z]',
			zIndex:20
		});
		diXinLayer.setMap(map);
		diXinLayer_num++;
	}else{
		diXinLayer.setMap(map);
		diXinLayer_num++;
	}
}

function hideDiXinTu(){
	if(diXinLayer_num==1){
		diXinLayer.setMap(null);
		diXinLayer_num=0;
	}else{
		diXinLayer_num--;
	}
}
//canvas手绘
//颜色按钮事件
$("#pen_btn").click(
    function(){
        pan_type="pan";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#trangle_btn").click(
    function(){
        pan_type="trangle";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#ellipse_btn").click(
    function(){
        pan_type="ellipse";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#cricle_btn").click(
    function(){
        pan_type="circle";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#line_btn").click(
    function(){
        pan_type="line";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#rubber_btn").click(
    function(){
        pan_type="rubber";
		this_button_9_8.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_8=$(this);
    }
)
$("#clear_btn").click(
    function(){
        context.clearRect( 0 , 0 , canvas.width, canvas.height );
    }
)
$("#exit_btn").click(
    function(){
        $("#cjc_btn_controller").css("display","none");
		$(".canvas_div").css("display","none");
    }
)
$("#save_btn").click(
    function(){
       // $("#cjc_btn_controller").css("display","none");
		//$(".canvas_div").css("display","none");
		var image_8_28=canvas.toDataURL("image/png");
		//window.location.href=image_8_28;
		//console.log(image_8_28);
		Url2Png(image_8_28);
		$("#cjc_btn_controller").css("display","none");
		$(".canvas_div").css("display","none");
		setTimeout(function(){
			parent.window.cjcNodeRefresh();
		},2500); 
    }
)
$(".color_btn").click(
    function(){
        $(".color_btn").removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
        strokeColor = $(this).css("background-color");
		context.strokeStyle = strokeColor;
    }
)
$(".size_btn").click(
    function(){
        $(".size_btn").removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
        cjc_8_5_size = $(this).attr("id");
		context.lineWidth=15/cjc_8_5_size;
    }
)
//$("#cjc_8_8_select_1").val();这里"设置符号"的大小
//$("#cjc_8_8_select_2").val();这里"设置标注文字"的大小

document.getElementById("cjc_8_8_colorinput_1").onchange=function(){
	$(".cjc_9_9_img_2").css("filter","drop-shadow("+this.value+" 40px 0)");
	cjc_color=this.value;
}
//画笔调用的函数
function beginStroke(point){
    isMouseDown = true;
    lastLoc = point;
    lastTimestamp = new Date().getTime();
}
function endStroke(){
    isMouseDown = false;
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
}
function moveStroke(point){
    var curLoc = point;
    var curTimestamp = new Date().getTime();
    var s = calcDistance( curLoc , lastLoc );
    var t = curTimestamp - lastTimestamp;

    var lineWidth = calcLineWidth( t , s );
   // var lineWidth = 15;
	
    //draw
    context.beginPath();
    context.moveTo( lastLoc.x , lastLoc.y );
    context.lineTo( curLoc.x, curLoc.y);
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth/cjc_8_5_size;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
	

    lastLoc = curLoc;
    lastTimestamp = curTimestamp;
    lastLineWidth = lineWidth;
}
function calcLineWidth( t , s ){

    var v = s / t;
//	console.log(v);
    var resultLineWidth;
    if( v <= minStrokeV )
        resultLineWidth = maxLineWidth;
    else if ( v >= maxStrokeV )
        resultLineWidth = minLineWidth;
    else{
        resultLineWidth = maxLineWidth - (v-minStrokeV)/(maxStrokeV-minStrokeV)*(maxLineWidth-minLineWidth);
    }

    if( lastLineWidth == -1 )
        return resultLineWidth;

    return resultLineWidth*1/3 + lastLineWidth*2/3;
}
function calcDistance( loc1 , loc2 ){
    return Math.sqrt((loc1.x - loc2.x)*(loc1.x - loc2.x) + (loc1.y - loc2.y)*(loc1.y - loc2.y));
}
function setCanvas_width_height(){
	canvas.width=$(".canvas_div").width();
	canvas.height=$(".canvas_div").height();
	offCanvas.width=$(".canvas_div").width();
	offCanvas.height=$(".canvas_div").height();
	context.strokeStyle = strokeColor;
	context.lineWidth=15/cjc_8_5_size;
	context.lineCap = "round";
    context.lineJoin = "round";
}
//canvas事件
offCanvas.onmousedown = function(e){
    e.preventDefault();
  // beginStroke( {x: e.clientX , y: e.clientY} );
   switch(pan_type){
		case "pan":beginStroke({x:e.clientX,y:e.clientY});break;
		case "rubber":cjc_9_7_rubber({x:e.clientX,y:e.clientY});break;
		case "line":cjc_9_7_star_point({x:e.clientX,y:e.clientY});break;
		case "circle":cjc_9_7_star_point({x:e.clientX,y:e.clientY});break;
		case "ellipse":cjc_9_7_star_point({x:e.clientX,y:e.clientY});break;
		case "trangle":cjc_9_7_star_point({x:e.clientX,y:e.clientY});break;
	}
};
/*offCanvas.ontouchstart=function(e){
	//console.log(e);
	switch(pan_type){
		case "pan":beginStroke({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "rubber":cjc_9_7_rubber({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "line":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "circle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "ellipse":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "trangle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
	}
};*/
offCanvas.addEventListener("touchstart",function(e){
	e.preventDefault();
	switch(pan_type){
		case "pan":beginStroke({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "rubber":cjc_9_7_rubber({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "line":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "circle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "ellipse":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "trangle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
	}
});
offCanvas.addEventListener("touchmove",function(e){
	e.preventDefault();
	if( isMouseDown ){
        switch(pan_type){
			case "pan":moveStroke({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "rubber":cjc_9_7_rubber({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "line":cjc_9_7_line({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "circle":cjc_9_7_circle({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "ellipse":cjc_9_7_ellipse({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "trangle":cjc_9_8_trangle({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		}
    }
});
offCanvas.addEventListener("touchend",function(e){
	e.preventDefault();
	endStroke();
	switch(pan_type){
		case "pan":break;
		case "rubber":break;
		case "line":cjc_9_7_stop_point({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "circle":cjc_9_8_stop_circle({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "ellipse":cjc_9_9_stop_ellipse({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "trangle":cjc_9_13_stop_trangle({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
	}
});
/*offCanvas.ontouchmove=function(e){
	//console.log(e);
	if( isMouseDown ){
        switch(pan_type){
			case "pan":moveStroke({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "rubber":cjc_9_7_rubber({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "line":cjc_9_7_line({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "circle":cjc_9_7_circle({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "ellipse":cjc_9_7_ellipse({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
			case "trangle":cjc_9_8_trangle({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		}
    }
};*/
/*offCanvas.ontouchend=function(e){
	endStroke();
	switch(pan_type){
		case "pan":break;
		case "rubber":break;
		case "line":cjc_9_7_stop_point({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "circle":cjc_9_8_stop_circle({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "ellipse":cjc_9_9_stop_ellipse({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
		case "trangle":cjc_9_13_stop_trangle({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});break;
	}
};*/
offCanvas.onmouseup = function(e){
    e.preventDefault();
    endStroke();
	switch(pan_type){
		case "pan":break;
		case "rubber":break;
		case "line":cjc_9_7_stop_point({x:e.clientX,y:e.clientY});break;
		case "circle":cjc_9_8_stop_circle({x:e.clientX,y:e.clientY});break;
		case "ellipse":cjc_9_9_stop_ellipse({x:e.clientX,y:e.clientY});break;
		case "trangle":cjc_9_13_stop_trangle({x:e.clientX,y:e.clientY});break;
	}
};
offCanvas.onmouseout = function(e){
    e.preventDefault();
    endStroke();
};
offCanvas.onmousemove = function(e){
    e.preventDefault();
    if( isMouseDown ){
        switch(pan_type){
			case "pan":moveStroke({x:e.clientX,y:e.clientY});break;
			case "rubber":cjc_9_7_rubber({x:e.clientX,y:e.clientY});break;
			case "line":cjc_9_7_line({x:e.clientX,y:e.clientY});break;
			case "circle":cjc_9_7_circle({x:e.clientX,y:e.clientY});break;
			case "ellipse":cjc_9_7_ellipse({x:e.clientX,y:e.clientY});break;
			case "trangle":cjc_9_8_trangle({x:e.clientX,y:e.clientY});break;
		}
    }
};
function cjc_9_7_rubber(point){
	isMouseDown=true;
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
	offContext.save();
	offContext.fillStyle="#ede";
	offContext.beginPath();
	//offContext.arc(point.x,point.y,50,0,Math.PI*2);
	//offContext.fill();
	offContext.fillRect(point.x-50,point.y-50,100,100);
	offContext.restore();
	
	//context.save();
	//context.fillStyle="#fff";
	//context.beginPath();
	//context.arc(point.x,point.y,50,0,Math.PI*2);
	//context.fill();
	//context.restore();
	context.clearRect(point.x-50,point.y-50,100,100);
}
function cjc_9_7_star_point(point){
	isMouseDown=true;
//	context.beginPath();
//	context.moveTo(point.x,point.y);
	
	line_x=point.x;
	line_y=point.y;
	
}
function cjc_9_7_stop_point(point){
	context.save();
	context.beginPath();
	context.moveTo(line_x,line_y);
	context.lineTo(point.x,point.y);
	//offContext.moveTo(point.x,point.y);
	context.stroke();
	context.closePath();
	context.restore();
}
function cjc_9_8_stop_circle(point){
	context.save();
	context.beginPath();
	context.arc(point.x,point.y,Math.sqrt((point.x-line_x)*(point.x-line_x)+(point.y-line_y)*(point.y-line_y)),0,Math.PI*2);
	//offContext.moveTo(point.x,point.y);
	context.stroke();
	context.closePath();
	context.restore();
}
function cjc_9_9_stop_ellipse(point){
	var a=Math.abs(point.y-line_y);
	var b=Math.sqrt((point.x-line_x)*(point.x-line_x)+(point.y-line_y)*(point.y-line_y));
	context.save();
	context.beginPath();
	BezierEllipse2(context,point.x,point.y,a,b);
	//offContext.moveTo(point.x,point.y);
	context.stroke();
	context.closePath();
	context.restore();
}
function cjc_9_13_stop_trangle(point){
	var o1=2/3*Math.PI;
	var o2=4/3*Math.PI;
	context.save();
	context.beginPath();
	context.moveTo(line_x,line_y);
	context.lineTo(line_x*Math.cos(o1)-line_y*Math.sin(o1)+(1-Math.cos(o1))*point.x+Math.sin(o1)*point.y,line_x*Math.sin(o1)+line_y*Math.cos(o1)+(1-Math.cos(o1))*point.y-Math.sin(o1)*point.x);
	context.lineTo(line_x*Math.cos(o2)-line_y*Math.sin(o2)+(1-Math.cos(o2))*point.x+Math.sin(o2)*point.y,line_x*Math.sin(o2)+line_y*Math.cos(o2)+(1-Math.cos(o2))*point.y-Math.sin(o2)*point.x);
	context.lineTo(line_x,line_y);
	context.stroke();
	context.closePath();
	context.restore();
}
function cjc_9_7_line(point){
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
	offContext.save();
	offContext.beginPath();
	offContext.moveTo(line_x,line_y);
	offContext.lineTo(point.x,point.y);
	//offContext.moveTo(point.x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();

}
function cjc_9_7_circle(point){
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
	offContext.save();
	offContext.beginPath();
	offContext.moveTo(line_x,line_y);
	offContext.lineTo(point.x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();
	offContext.save();
	offContext.beginPath();
	offContext.arc(point.x,point.y,Math.sqrt((point.x-line_x)*(point.x-line_x)+(point.y-line_y)*(point.y-line_y)),0,Math.PI*2);
	//offContext.moveTo(point.x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();
}
function cjc_9_8_trangle(point){
	var a=Math.sqrt(3)*Math.sqrt((point.x-line_x)*(point.x-line_x)+(point.y-line_y)*(point.y-line_y));
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
	offContext.save();
	offContext.beginPath();
	offContext.moveTo(line_x,line_y);
	//offContext.lineTo(a*Math.cos(Math.atan((point.y-line_y)/(point.x-line_x))+Math.PI/6)+line_x,a*Math.sin(Math.atan((point.y-line_y)/(point.x-line_x))+Math.PI/6)+line_y);
	//offContext.lineTo(a*Math.cos(Math.atan((point.y-line_y)/(point.x-line_x))-Math.PI/6)+line_x,a*Math.sin(Math.atan((point.y-line_y)/(point.x-line_x))-Math.PI/6)+line_y);
	//offContext.lineTo(a*Math.cos(Math.atan((point.y-line_y)/(point.x-line_x))+Math.PI/6)+line_x,a*Math.sin(Math.atan((point.y-line_y)/(point.x-line_x))+Math.PI/6)+line_y);
	//offContext.lineTo(a*Math.cos(Math.atan((point.y-line_y)/(point.x-line_x))-Math.PI/6)+line_x,a*Math.sin(Math.atan((point.y-line_y)/(point.x-line_x))-Math.PI/6)+line_y);
	var o1=2/3*Math.PI;
	var o2=4/3*Math.PI;
	offContext.lineTo(line_x*Math.cos(o1)-line_y*Math.sin(o1)+(1-Math.cos(o1))*point.x+Math.sin(o1)*point.y,line_x*Math.sin(o1)+line_y*Math.cos(o1)+(1-Math.cos(o1))*point.y-Math.sin(o1)*point.x);
	offContext.lineTo(line_x*Math.cos(o2)-line_y*Math.sin(o2)+(1-Math.cos(o2))*point.x+Math.sin(o2)*point.y,line_x*Math.sin(o2)+line_y*Math.cos(o2)+(1-Math.cos(o2))*point.y-Math.sin(o2)*point.x);
	offContext.lineTo(line_x,line_y);
	offContext.lineTo(point.x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();
}
function cjc_9_7_ellipse(point){
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
	
	var a=Math.abs(point.y-line_y);
	var b=Math.sqrt((point.x-line_x)*(point.x-line_x)+(point.y-line_y)*(point.y-line_y));
	
	offContext.save();
	offContext.beginPath();
	offContext.moveTo(line_x,point.y);
	offContext.lineTo(point.x,point.y);
	offContext.lineTo(point.x,point.y-a);
	//offContext.lineTo(line_x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();
	offContext.save();
	offContext.beginPath();
	BezierEllipse2(offContext,point.x,point.y,a,b);
	//offContext.moveTo(point.x,point.y);
	offContext.stroke();
	offContext.closePath();
	offContext.restore();
}
function BezierEllipse2(ctx, x, y, b, a)
{
	//context为Canvas的2D绘图环境对象，
	//x为椭圆中心横坐标，
	//y为椭圆中心纵坐标，
	//a为椭圆横半轴长，
	//b为椭圆纵半轴长。
   var k = .5522848,
   ox = a * k, // 水平控制点偏移量
   oy = b * k; // 垂直控制点偏移量

   ctx.beginPath();
   //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
   ctx.moveTo(x - a, y);
   ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
   ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
   ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
   ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
   ctx.closePath();
   ctx.stroke();
}
//加载点标记
$(".cjc_9_9_imgs").click(
    function(){
		this_button_9_9.removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
		this_button_9_9=$(this);
		cjc_9_9_src=$(this).attr("src");
		$(".cjc_9_9_img_2").attr("src",cjc_9_9_src);
	});
contextMenu.addItem("删除该点", function() {
        for(var i=0;i<cjc_9_10_overlayers.length;i++){
			if(cjc_9_10_overlayers[i].txt==cjc_9_10_text){
				cjc_9_10_overlayers[i].data.setMap(null);
			}
		}
    }, 0);
contextMenu_1.addItem("删除标注", function() {
        for(var i=0;i<cjc_9_10_overlayers.length;i++){
			if(cjc_9_10_overlayers[i].text_w==cjc_9_10_text){
				cjc_9_10_overlayers[i].data.setMap(null);
			}
		}
    }, 0);
function cjc_8_8_addPoints(cjclatlng){
	AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
		var cjc_9_10_marker=new SimpleMarker({
			//前景文字
			iconLabel: {
			    innerHTML: '<i>'+cjc_point_cont+'</i>', //设置文字内容
				style: {
					"color": $("#cjc_9_5_color_select").val(), //设置文字颜色
					"font-size":$("#cjc_8_8_select_2").val(),
					"font-family":$("#cjc_9_6_select_1").val(),
					"width":"300px",
					"text-align":"left"
				}
			},
			//背景图标样式
			iconStyle: {
				src: cjc_9_9_src,
				style: {
					'position':'relative',
					'left':-20*$("#cjc_8_8_select_1").val()+'px',
					'width':20*$("#cjc_8_8_select_1").val()+'px',
					'height':30*$("#cjc_8_8_select_1").val()+'px',
					'filter': 'drop-shadow('+document.getElementById("cjc_8_8_colorinput_1").value+' '+20*$("#cjc_8_8_select_1").val()+'px 0)',
					'border-right':20*$("#cjc_8_8_select_1").val()+'px solid transparent'
				}
			},

			//...其他Marker选项...，不包括content
			map: map,
			position: cjclatlng
		}).on('rightclick', function(e) {contextMenu.open(map,e.lnglat);cjc_9_10_text=cjclatlng;});
		cjc_9_10_overlayers.push({"txt":cjclatlng,"data":cjc_9_10_marker});
	});
}
function cjc_9_6_getLength(){
	var num;
	if(cjc_point_cont.length>10){
		num=10;
	}else{
		num=cjc_point_cont.length;
	}
	return -num*num/2;
}
//关闭符号编辑面板
function cjc_8_8_close_edit(){
	$(".cjc_8_8_edit").css("display","none");
}
//开启符号编辑面板
function cjc_8_8_open_edit(){
	$(".cjc_8_8_edit").css("display","block");
}
function cjc_8_8_reset_edit(){
	this_button_9_9.removeClass("color_btn_selected");
	$("#cjc_9_9_img_1").addClass("color_btn_selected");
	document.getElementById("cjc_8_8_colorinput_1").value="#EE82EE";
	$(".cjc_9_9_img_2").css("filter","drop-shadow(#EE82EE 40px 0)");
	$(".cjc_9_9_img_2").attr("src","img/skin_/cjc/point_1.png");
	cjc_8_8_close_edit();
	$("#cjc_8_8_select_1").val(1);
	cjc_color="#EE82EE";
}
//关闭添加点面板
function cjc_8_8_close_add_point(){
	cjc_point_cont=$("#cjc_9_6_text").val();
	if(!cjc_point_cont){
		cjc_point_cont=" ";
	}
	cjc_8_8_addPoints(cjc_8_8_point);
	cjc_8_8_close_edit();
	$(".cjc_8_7_addPoints").css("display","none");	
	cjc_9_19_enable_buttons();
}
//开启添加点面板
function cjc_8_8_open_add_point(){
	$(".cjc_8_7_addPoints").css("display","block");
}
//开启添加点的监听事件
function cjc_8_8_addPoints_new(){
	cjc_9_19_disable_buttons();
	//cjc_8_8_open_add_point();
	isStartAddPoints=true;
	map.setDefaultCursor("crosshair");
}
function Url2Png(url){
	var position=map.getZoom()+";"+map.getCenter().lat+";"+map.getCenter().lng+";"+map.getBounds();//4;28.700327;104.299012
    $.post("Url2Png.php",{
		"url":url,
		"position":position
		},
		function(data,status){
		// console.log(data);
    });
}
function onChange_cjc() {
    var shpFile = document.getElementById('shp').files[0];
    if(shpFile&&shpFile.name.split('.')[1]=="shp"){
        var opts = { shp: shpFile };
        var shapefile = new Shapefile(opts, function(data){
			var isNeedSetView=[];
			var geojson = new AMap.GeoJSON({
                'geoJSON':data.geojson,     //geojsonObject,
				'getMarker':function(geojson, lnglat) {//还可以自定义getMarker和getPolyline
					var cjc_position= new AMap.Marker({
						position:lnglat
					});
					isNeedSetView.push(cjc_position);
					return cjc_position;
				},
				'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
                    // var area = AMap.GeometryUtil.ringArea(lnglats[0])//求面积
                    var cjcPosition= new AMap.Polyline({
                        path: lnglats,
                        borderWeight:50,
                        strokeColor:randomHexColor()                    
                    });
					isNeedSetView.push(cjcPosition);
					return cjcPosition;
				},
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.NAME);
                    var cjc_position= new AMap.Polygon({
                        path: lnglats,
                        strokeColor:'white',
                        fillColor:randomHexColor()
                        
                    });
					isNeedSetView.push(cjc_position);
					return cjc_position;
                }
            });	
            geojson.setMap(map);	
			map.setFitView(isNeedSetView);
			isNeedSetView=[];	
			setTimeout(function(){
				parent.window.cjcNodeRefresh();
			},2500); 			
			saveAsGeojson(data.geojson,shpFile.name);
			
        });
		
		
    }else{
		alert("不支持的文件类型！");
	}
}
function onChange_cjc_9_3() {
	var file=document.getElementById('shp_9_3').files[0];
	if(file&&file.name.split('.')[1]=="kml"){
		var reader = new FileReader();
		 reader.onload = function (event) {
                    var txt = event.target.result;
					var result_cjc=toGeoJSON["kml"]((new DOMParser()).parseFromString(txt, 'text/xml'));
					var isNeedSetView=[];
					var geojson = new AMap.GeoJSON({
						geoJSON:result_cjc,
						'getMarker':function(geojson, lnglat) {//还可以自定义getMarker和getPolyline
							var cjc_position= new AMap.Marker({
								position:lnglat
							});
							isNeedSetView.push(cjc_position);
							return cjc_position;
						},
						'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
							// var area = AMap.GeometryUtil.ringArea(lnglats[0])//求面积
							var cjcPosition= new AMap.Polyline({
								path: lnglats,
								borderWeight:50,
								strokeColor:randomHexColor()                    
							});
							isNeedSetView.push(cjcPosition);
							return cjcPosition;
						},
						'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
							//console.log(geojson.properties.NAME);
							var cjc_position= new AMap.Polygon({
								path: lnglats,
								strokeColor:'white',
								fillColor:randomHexColor()
								
							});
							isNeedSetView.push(cjc_position);
							return cjc_position;
						}
					});	
					geojson.setMap(map);
					map.setFitView(isNeedSetView);
					isNeedSetView=[];
					setTimeout(function(){
						parent.window.cjcNodeRefresh();
					},2500); 
					saveAsGeojson_kml(result_cjc,file.name);
		}
		reader.readAsText(file);
	}else{
		alert("不支持的文件类型！");
	}
}
function saveAsGeojson(mydata,myname){
	var newMyName=myname.split('.');
	$.post("geojsonSave.php",{
		"mydata":mydata,
		"myname":newMyName[0]},
		function(data,status){
		  //console.log(data);
    });
}
function saveAsGeojson_kml(mydata,myname){
	var newMyName=myname.split('.');
	$.post("geojsonSave_kml.php",{
		"mydata":mydata,
		"myname":newMyName[0]},
		function(data,status){
		  //console.log(data);
    });
}
function pictures_show(node_id,node_name){
	$.post("judgePictures.php",{
		"nodeId":node_id,
		"nodeName":node_name
	},function(data,status){
		if(data){
			var cjc_position=data.split(';');
			map.setZoomAndCenter(cjc_position[0],[cjc_position[2],cjc_position[1]]);
			var bunds_1=cjc_position[3].split(',');
			var bunds_2=cjc_position[4].split(',');
			var bands_cjc=new AMap.Bounds(
				[bunds_1[0],bunds_1[1]],
				[bunds_2[0],bunds_2[1]]
			);
			var imageLayer = new AMap.ImageLayer({
				url: "./Paint/Pictures/"+node_name+".png",
				bounds:bands_cjc,
				zooms: [3, 18]
			});
			imageLayer.setMap(map);
			json_pictures[node_id]=imageLayer;
		}else{
			
		}
	});
}
function pictures_hide(node_id){
	json_pictures[node_id].setMap(null);
}
function shapefile_show(node_id,node_name){
	$.post("JudgeShapefile.php",{
		"nodeId":node_id,
		"nodeName":node_name
	},function(data,status){
		if(data){
			add_geojson_cjc(node_id,node_name);
		}else{
			
		}
	});
}
function shapefile_hide(node_id){
	json_shapefiles[node_id].setMap(null);
}
function geojson_hide_cjc(node_id){
	if(!json_geojson[node_id]){
		return;
	}
	tipMarker_9_5.setMap(null);
	json_geojson[node_id].setMap(null);
}
function add_geojson_cjc(node_id,fileName) {
	$.get("./json/"+fileName+".json", function(result){
		if(result){
			var isNeedSetView=[];
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getMarker':function(geojson, lnglat) {//还可以自定义getMarker和getPolyline
					var cjc_position= new AMap.Marker({
						position:lnglat
					});
					isNeedSetView.push(cjc_position);
					return cjc_position;
				},
				'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson);
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						cjc_lnglat[index]=new AMap.LngLat(ele[0],ele[1],true);
					});
					var cjc_position=  new AMap.Polyline({
						path: cjc_lnglat,
						borderWeight:50,
						strokeColor:randomHexColor()
					});
					isNeedSetView.push(cjc_position);
					return cjc_position;
					
				},
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.NAME);
                    var cjc_position= new AMap.Polygon({
                        path: lnglats,
                        strokeColor:'#DCDCDC',
                        fillColor:randomHexColor()
                        
                    });
					isNeedSetView.push(cjc_position);
					return cjc_position;
                }
				
			});	
			geojson.setMap(map);	
			map.setFitView(isNeedSetView);
			isNeedSetView=[];
			json_shapefiles[node_id]=geojson;
		}
	},"json");
}
/*document.addEventListener("click",function(){
	console.log(map.getCenter());
});*/
function add_geojson(node_id,fileName) {
	switch(fileName){
		case "湖泊.json":addExtraBound_11_14("国界面.json");break;
	}
	/*switch(fileName){
		case "亚洲山脉.json":map.setZoomAndCenter(3,[98.536097,51.498193]);break;
		case "欧洲山脉.json":map.setZoomAndCenter(4,[13.10641,58.918586]);break;
		case "非洲山脉.json":map.setZoomAndCenter(4,[13.018519,0.905866]);break;
		case "大洋洲山脉.json":map.setZoomAndCenter(5,[134.175746,-28.183815]);break;
		case "北美洲山脉.json":map.setZoomAndCenter(3,[-79.392394,65.18769]);break;
		case "南美洲山脉.json":map.setZoomAndCenter(4,[-55.178527,-27.166591]);break;
		case "中国山脉.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "中国地形.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "中国一月等温线图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "中国七月等温线图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "中国年降水量图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "干湿地区图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "土壤分布.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "植被分布.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "河流.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "渔场.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		
		case "温度带图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "气候类型分布.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		
		case "中国农业图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "世界城市.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		case "中国城市.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "铁路交通图.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		
		case "世界遗产分布图.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		case "世界人口密度.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		case "世界人种.json":map.setZoomAndCenter(3,[104.299012,28.700327]);break;
		case "中国民族分布.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
	}*/
	$.get("./json/"+fileName, function(result){
		
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getMarker':function(geojson,lnglat){
					return new AMap.Marker({
						position: lnglat,
						zIndex:110,
						bubble:true,
						cursor:"pointer",
						icon:"http://localhost:8079/data/system/images/poi-marker-default.png"
					}).on("rightclick",function(e){add_title_box(geojson.properties.name);})
					.on("click",function(e){
						//clearTimeout(cjc_10_29_time);
						//cjc_10_29_time=setTimeout(function(){add_title_marker(geojson.properties.name,e.lnglat);},300);
						add_title_marker(geojson.properties.name,e.lnglat);
						this.setIcon("http://localhost:8079/data/system/images/poi-marker-red.png");
						})
				//	.on("mousemove",function(e){this.setIcon("http://localhost:8079/data/system/images/poi-marker-red.png");})
				//	.on("mouseout",function(e){
						//tipMarker_9_5.setMap(null);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-default.png");})
					.on("dblclick",function(e){
						//clearTimeout(cjc_10_29_time);
						tipMarker_9_5.setMap(null);
						this.setIcon("http://localhost:8079/data/system/images/poi-marker-default.png");
						});
				},
				'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(lnglats);
					//console.log(geojson.properties.Name||geojson.properties._parentProperities.Name);
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						cjc_lnglat[index]=new AMap.LngLat(ele[0],ele[1],true);
					});
					var cjc_10_26_poliline= new AMap.Polyline({
						path: cjc_lnglat,
						zIndex:110,
						cursor:"pointer",
						bubble:true,
						lineJoin:"round",
						strokeWeight:5,
						strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true),
						strokeOpacity:0.3
					}).on("rightclick",function(e){add_title_box(geojson.properties.Name);})
					.on("click",function(e){
					//	clearTimeout(cjc_10_29_time);
					//	cjc_10_29_time=setTimeout(function(){add_title_marker(geojson.properties.Name||geojson.properties._parentProperities.Name,e.lnglat);},300);				
						add_title_marker(geojson.properties.Name||geojson.properties._parentProperities.Name,e.lnglat);
						for(var i=0;i<my_polyline.length;i++){
								for(var key in my_polyline[i]){
									if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
									my_polyline[i][key].setOptions({strokeOpacity:1,strokeWeight:10,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,false)});
									}
								}
							}
						})
			//		.on("mousemove",function(e){
						//this.setOptions({strokeOpacity:1});	
						//is_cjc_mousemove=true;
			//				for(var i=0;i<my_polyline.length;i++){
			//					for(var key in my_polyline[i]){
			//						if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//							my_polyline[i][key].setOptions({strokeOpacity:1,strokeWeight:15,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,false)});
			//						}
			//					}
			//				}
			//			})
			//		.on("mouseout",function(e){
					//	tipMarker_9_5.setMap(null);
						//this.setOptions({strokeOpacity:0.3});
			//				for(var i=0;i<my_polyline.length;i++){
			//						for(var key in my_polyline[i]){
			//							if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//								my_polyline[i][key].setOptions({strokeOpacity:0.3,strokeWeight:10,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true)});
			//							}
			//						}
			//					}
		//			})
			//		.on("touchstart",function(e){timeOutEvent = setTimeout(function(){add_title_box(geojson.properties.Name);},1000);})
				//	.on("touchmove",function(e){
			//			clearTimeout(timeOutEvent);
				//		timeOutEvent = 0;
						//this.setOptions({strokeOpacity:1});
			//			for(var i=0;i<my_polyline.length;i++){
			 //					for(var key in my_polyline[i]){
			//						if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//							my_polyline[i][key].setOptions({strokeOpacity:1});
			//						}
			//					}
			//				}
			//			})
			//		.on("touchend",function(e){
				//		clearTimeout(timeOutEvent); 
				//		tipMarker_9_5.setMap(null);
				//		for(var i=0;i<my_polyline.length;i++){
				//				for(var key in my_polyline[i]){
				//					if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
				//						my_polyline[i][key].setOptions({strokeOpacity:0.3});
				//					}
				//				}
			//				}
			//			})
					.on("dblclick",function(e){
						//clearTimeout(cjc_10_29_time);
						tipMarker_9_5.setMap(null);
						for(var i=0;i<my_polyline.length;i++){
									for(var key in my_polyline[i]){
										if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
											my_polyline[i][key].setOptions({strokeOpacity:0.3,strokeWeight:5,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true)});
										}
									}
								}
						});
					my_polyline.push({[geojson.properties.Name||geojson.properties._parentProperities.Name]:cjc_10_26_poliline});
					return cjc_10_26_poliline;
				},
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						var cjc_ele=[];
						ele.forEach(function(ele_new,index){
							cjc_ele[index]=new AMap.LngLat(ele_new[0],ele_new[1],true);
						});
						cjc_lnglat[index]=cjc_ele;
					});
					//new AMap.lnglat(lnglats)
                   return new AMap.Polygon({
                        path: cjc_lnglat,
						cursor:"pointer",
						bubble:true,
                        strokeColor:'#DCDCDC',
                        fillColor:cjc_randomHexColor(geojson.properties.Name,true),
						fillOpacity:0.3
                        
                    })
					.on("rightclick",function(e){add_title_box(geojson.properties.Name);})
					//.on("click",function(e){
					//	clearTimeout(cjc_10_29_time);
				//		cjc_10_29_time=setTimeout(function(){add_title_marker(geojson.properties.Name,e.lnglat);},300);				
						
					//	})
					//.on("mousemove",function(e){this.setOptions({fillOpacity:1,fillColor:cjc_randomHexColor(geojson.properties.Name,false)});})
					//.on("mouseout",function(e){this.setOptions({fillOpacity:0.3,fillColor:cjc_randomHexColor(geojson.properties.Name,true)});})
					//.on("touchstart",function(e){timeOutEvent = setTimeout(function(){add_title_box(geojson.properties.Name);},1000);})
					//.on("touchmove",function(e){clearTimeout(timeOutEvent);timeOutEvent = 0;this.setOptions({fillOpacity:1});})
					//.on("touchend",function(e){clearTimeout(timeOutEvent); tipMarker_9_5.setMap(null);this.setOptions({fillOpacity:0.3});})
					//.on("dblclick",function(e){clearTimeout(cjc_10_29_time);tipMarker_9_5.setMap(null);});
					.on("click",function(e){
						add_title_marker(geojson.properties.Name,e.lnglat);
						this.setOptions({fillOpacity:1,fillColor:cjc_randomHexColor(geojson.properties.Name,false)});
					})
					.on("dblclick",function(e){
						tipMarker_9_5.setMap(null);
						this.setOptions({fillOpacity:0.3,fillColor:cjc_randomHexColor(geojson.properties.Name,true)});
					});
                }
				
			});	
			geojson.setMap(map);	
			json_geojson[node_id]=geojson;
			cjc_9_20_areas=[];
			
		}
	},"json");
	
}
function add_geojson_copy(node_id,fileName,fileName_1) {
	//map.setZoomAndCenter(4,[104.299012,28.700327]);
	$.get("./json/"+fileName, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.Name);
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						var cjc_ele=[];
						ele.forEach(function(ele_new,index){
							cjc_ele[index]=new AMap.LngLat(ele_new[0],ele_new[1],true);
						});
						cjc_lnglat[index]=cjc_ele;
					});
                   return new AMap.Polygon({
                        path: cjc_lnglat,
						cursor:"pointer",
						bubble:true,
                        strokeColor:'#DCDCDC',
                        fillColor:cjc_randomHexColor(geojson.properties.Name,true),
						fillOpacity:0.3
                        
                    })
					.on("rightclick",function(e){add_title_box(geojson.properties.Name);})
					.on("click",function(e){
						//console.log(geojson);
					//	add_title_marker(geojson.properties.Name||geojson.properties._parentProperities.Name,e.lnglat);
						this.setOptions({fillOpacity:1,fillColor:cjc_randomHexColor(geojson.properties.Name,false)});
						})
					//.on("mousemove",function(e){this.setOptions({fillOpacity:1,fillColor:cjc_randomHexColor(geojson.properties.Name,false)});})
					//.on("mouseout",function(e){
					//	this.setOptions({fillOpacity:0.3,fillColor:cjc_randomHexColor(geojson.properties.Name,true)});})
				//	.on("touchstart",function(e){
						//timeOutEvent = setTimeout(function(){add_title_box(geojson.properties.Name);},1000);
				//		})
				//	.on("touchmove",function(e){
						//clearTimeout(timeOutEvent);
						//timeOutEvent = 0;
				//		this.setOptions({fillOpacity:1});})
				//	.on("touchend",function(e){
						//clearTimeout(timeOutEvent);
					//	tipMarker_9_5.setMap(null);
				//		this.setOptions({fillOpacity:0.3});})
					.on("dblclick",function(e){
						tipMarker_9_5.setMap(null);
						this.setOptions({fillOpacity:0.3,fillColor:cjc_randomHexColor(geojson.properties.Name,true)});
						});
                }
				
			});	
			geojson.setMap(map);	
			json_geojson[node_id]=geojson;
			cjc_9_20_areas=[];
			
		}
	},"json");
	
	$.get("./json/"+fileName_1, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     
				'getMarker':function(geojson,lnglat){
					return new AMap.ElasticMarker({
						position: lnglat,
						zIndex:150,
						bubble:true,
						cursor:"pointer",
						//icon:"http://localhost:8079/data/system/images/poi-marker-default.png"
						styles:[{
							icon:{
									img:"http://localhost:8079/data/system/images/poi-marker-default.png",
									size:[27,34],
									ancher:[13,34],
									fitZoom:5,//最合适的级别
									scaleFactor:1.5,//地图放大一级的缩放比例系数
									maxScale:4,//最大放大比例
									minScale:0.1//最小放大比例
							}
						}],
						zoomStyleMapping:{
							3:0,
							4:0,
							5:0,
							6:0,
							7:0,
							8:0,
							9:0,
							10:0,      
							11:0,    
							12:0,    
							13:0,    
							14:0,    
							15:0,    
							16:0,    
							17:0,    
							18:0
						}
					})
					.on("rightclick",function(e){	
						add_title_marker(geojson.properties.Name,e.lnglat);
						})
					.on("click",function(e){
						add_title_marker(geojson.properties.Name,e.lnglat);
						//this.setIcon("http://localhost:8079/data/system/images/poi-marker-red.png");
						})
				//	.on("mousemove",function(e){this.setIcon("http://localhost:8079/data/system/images/poi-marker-red.png");})
				//	.on("mouseout",function(e){
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-default.png");})
					.on("dblclick",function(e){
						tipMarker_9_5.setMap(null);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-default.png");
						});
				}
				
			});	
			geojson.setMap(map);	
			json_geojson[3]=geojson;
			cjc_9_20_areas=[];
			
		}
	},"json");
	
	$.get("./json/"+fileName_1, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     
				'getMarker':function(geojson,lnglat){
					return new AMap.ElasticMarker({
						position: lnglat,
						zIndex:110,
						bubble:true,
						//offset:new AMap.Pixel(-5,-32),
						cursor:"pointer",
						//icon:"http://localhost:8079/data/system/images/poi-marker-jian.png"
						styles:[{
							icon:{
									img:"http://localhost:8079/data/system/images/poi-marker-jian.png",
									size:[27,34],
									ancher:[-10,34],
									fitZoom:5,//最合适的级别
									scaleFactor:1.5,//地图放大一级的缩放比例系数
									maxScale:4,//最大放大比例
									minScale:0.1//最小放大比例
							}
						}],
						zoomStyleMapping:{
							3:0,
							4:0,
							5:0,
							6:0,
							7:0,
							8:0,
							9:0,
							10:0,      
							11:0,    
							12:0,    
							13:0,    
							14:0,    
							15:0,    
							16:0,    
							17:0,    
							18:0
						}
					}).on("rightclick",function(e){
						//add_title_box(geojson.properties.Name);
						//set the right click EventListener
						
						add_title_marker(geojson.properties.SName,e.lnglat);
						})
					.on("click",function(e){
						add_title_marker(geojson.properties.SName,e.lnglat);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-jianh.png");
						//console.log(geojson);
						})
					//.on("mousemove",function(e){this.setIcon("http://localhost:8079/data/system/images/poi-marker-jianh.png");})
				//	.on("mouseout",function(e){

					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-jian.png");})
					.on("dblclick",function(e){
						tipMarker_9_5.setMap(null);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-jian.png");
						});
				}
				
			});	
			geojson.setMap(map);	
			json_geojson[1]=geojson;
			cjc_9_20_areas=[];
			
		}
	},"json");
	
	$.get("./json/"+fileName_1, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     
				'getMarker':function(geojson,lnglat){
				//	console.log(lnglat[0]);
					return new AMap.ElasticMarker({
						position:lnglat,
						zIndex:110,
						bubble:true,
						//offset:new AMap.Pixel(-38,-34),
						cursor:"pointer",
						//icon:"http://localhost:8079/data/system/images/poi-marker-quan.png"
						styles:[{
							icon:{
									img:"http://localhost:8079/data/system/images/poi-marker-quan.png",
									size:[27,34],
									ancher:[38,34],
									//imageOffect:[-38,-34],
									fitZoom:5,//最合适的级别
									scaleFactor:1.5,//地图放大一级的缩放比例系数
									maxScale:4,//最大放大比例
									minScale:0.1//最小放大比例
							}
						}],
						zoomStyleMapping:{
							3:0,
							4:0,
							5:0,
							6:0,
							7:0,
							8:0,
							9:0,
							10:0,      
							11:0,    
							12:0,    
							13:0,    
							14:0,    
							15:0,    
							16:0,    
							17:0,    
							18:0
						}
					}).on("rightclick",function(e){
						//add_title_box(geojson.properties.Name);
						//set the right click EventListener
						add_title_marker(geojson.properties.PName,e.lnglat);
						})
					.on("click",function(e){
						add_title_marker(geojson.properties.PName,e.lnglat);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-quanh.png");
						//console.log(geojson);
						})
				//	.on("mousemove",function(e){this.setIcon("http://localhost:8079/data/system/images/poi-marker-quanh.png");})
				//	.on("mouseout",function(e){

					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-quan.png");})
					.on("dblclick",function(e){
						tipMarker_9_5.setMap(null);
					//	this.setIcon("http://localhost:8079/data/system/images/poi-marker-quan.png");
						});
				}
				
			});	
			geojson.setMap(map);	
			json_geojson[2]=geojson;
			cjc_9_20_areas=[];
		}
	},"json");
}
function add_geojson_China_WDD(node_id,fileName) {
	switch(fileName){
		case "河流.json":addDiXinfTu();break;
		case "中国山脉.json":addDiXinfTu();break;
		case "中国地形.json":addDiXinfTu();break;
	}
	$.get("./json/"+fileName, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson);
					//console.log(geojson.properties.Name||geojson.properties._parentProperities.Name);
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						cjc_lnglat[index]=new AMap.LngLat(ele[0],ele[1],true);
					});
					var cjc_10_26_poliline= new AMap.Polyline({
						path: cjc_lnglat,
						zIndex:110,
						cursor:"pointer",
						bubble:true,
						lineJoin:"round",
						strokeWeight:5,
						strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true),
						strokeOpacity:0.3
					}).on("rightclick",function(e){add_title_box(geojson.properties.Name);})
					.on("click",function(e){
					//	clearTimeout(cjc_10_29_time);
					//	cjc_10_29_time=setTimeout(function(){add_title_marker(geojson.properties.Name||geojson.properties._parentProperities.Name,e.lnglat);},300);				
						add_title_marker(geojson.properties.Name||geojson.properties._parentProperities.Name,e.lnglat);
						for(var i=0;i<my_polyline.length;i++){
								for(var key in my_polyline[i]){
									if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
									my_polyline[i][key].setOptions({strokeOpacity:1,strokeWeight:10,strokeColor:cjc_randomHexColor_China_WDD(geojson.properties.Name||geojson.properties._parentProperities.Name)});
									}
								}
							}
						})
			//		.on("mousemove",function(e){
						//this.setOptions({strokeOpacity:1});	
						//is_cjc_mousemove=true;
			//				for(var i=0;i<my_polyline.length;i++){
			//					for(var key in my_polyline[i]){
			//						if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//							my_polyline[i][key].setOptions({strokeOpacity:1,strokeWeight:15,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,false)});
			//						}
			//					}
			//				}
			//			})
			//		.on("mouseout",function(e){
					//	tipMarker_9_5.setMap(null);
						//this.setOptions({strokeOpacity:0.3});
			//				for(var i=0;i<my_polyline.length;i++){
			//						for(var key in my_polyline[i]){
			//							if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//								my_polyline[i][key].setOptions({strokeOpacity:0.3,strokeWeight:10,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true)});
			//							}
			//						}
			//					}
		//			})
			//		.on("touchstart",function(e){timeOutEvent = setTimeout(function(){add_title_box(geojson.properties.Name);},1000);})
				//	.on("touchmove",function(e){
			//			clearTimeout(timeOutEvent);
				//		timeOutEvent = 0;
						//this.setOptions({strokeOpacity:1});
			//			for(var i=0;i<my_polyline.length;i++){
			 //					for(var key in my_polyline[i]){
			//						if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
			//							my_polyline[i][key].setOptions({strokeOpacity:1});
			//						}
			//					}
			//				}
			//			})
			//		.on("touchend",function(e){
				//		clearTimeout(timeOutEvent); 
				//		tipMarker_9_5.setMap(null);
				//		for(var i=0;i<my_polyline.length;i++){
				//				for(var key in my_polyline[i]){
				//					if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
				//						my_polyline[i][key].setOptions({strokeOpacity:0.3});
				//					}
				//				}
			//				}
			//			})
					.on("dblclick",function(e){
						//clearTimeout(cjc_10_29_time);
						tipMarker_9_5.setMap(null);
						for(var i=0;i<my_polyline.length;i++){
									for(var key in my_polyline[i]){
										if(key==(geojson.properties.Name||geojson.properties._parentProperities.Name)){
											my_polyline[i][key].setOptions({strokeOpacity:0.3,strokeWeight:5,strokeColor:cjc_randomHexColor(geojson.properties.Name||geojson.properties._parentProperities.Name,true)});
										}
									}
								}
						});
					my_polyline.push({[geojson.properties.Name||geojson.properties._parentProperities.Name]:cjc_10_26_poliline});
					return cjc_10_26_poliline;
				},
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.Name);
					var cjc_lnglat=[];
					lnglats.forEach(function(ele,index){
						var cjc_ele=[];
						ele.forEach(function(ele_new,index){
							cjc_ele[index]=new AMap.LngLat(ele_new[0],ele_new[1],true);
						});
						cjc_lnglat[index]=cjc_ele;
					});
                   return new AMap.Polygon({
                        path: cjc_lnglat,
						cursor:"pointer",
						bubble:true,
                        strokeColor:'rgba(211,211,211,0.3)',
                       // fillColor:cjc_randomHexColor_China_WDD(geojson.properties.Name),
                        fillColor:cjc_randomHexColor_China_WDD("灰色"),
						fillOpacity:0.3
                        
                    })
					.on("rightclick",function(e){
						add_title_box(geojson.properties.Name);
						})
					.on("click",function(e){
				//		clearTimeout(cjc_10_29_time);
				//		cjc_10_29_time=setTimeout(function(){add_title_marker(geojson.properties.Name,e.lnglat);},300);				
						this.setOptions({fillOpacity:1,fillColor:cjc_randomHexColor_China_WDD(geojson.properties.Name)});
						add_title_marker(geojson.properties.Name,e.lnglat);
						})
				//	.on("mousemove",function(e){this.setOptions({fillOpacity:1});})
				//	.on("mouseout",function(e){this.setOptions({fillOpacity:0.3});})
				//	.on("touchstart",function(e){timeOutEvent = setTimeout(function(){add_title_box(geojson.properties.Name);},1000);})
				//	.on("touchmove",function(e){
					//	clearTimeout(timeOutEvent);
					//	timeOutEvent = 0;
						//this.setOptions({fillOpacity:1});
				//		})
				//	.on("touchend",function(e){
				//		clearTimeout(timeOutEvent);
						//tipMarker_9_5.setMap(null);
						//this.setOptions({fillOpacity:0.3});
				//		})
					.on("dblclick",function(e){
						//clearTimeout(cjc_10_29_time);
						tipMarker_9_5.setMap(null);
						this.setOptions({fillOpacity:0.3,fillColor:cjc_randomHexColor_China_WDD("灰色")});
						});
                }
				
			});	
			geojson.setMap(map);	
			json_geojson[node_id]=geojson;
			cjc_9_20_areas=[];
			
		}
	},"json");
}
//add_geojson("Border_FeaturesToJSON.json");
function randomHexColor() { //随机生成十六进制颜色
	var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
	while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
		hex = '0' + hex;
	}
	return '#' + hex; //返回‘#'开头16进制颜色
}
function cjc_randomHexColor(name,isgrey){
	if(isgrey){
		return '#808080';
	}else{
		for(var i=0;i<cjc_9_20_areas.length;i++){
				if(cjc_9_20_areas[i].cjc_name==name){
					return cjc_9_20_areas[i].cjc_color;
				}
		}
		var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
		while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
			hex = '0' + hex;
		}
		cjc_9_20_areas.push({
			cjc_name:name,
			cjc_color:"#"+hex
		});
		return '#' + hex; //返回‘#'开头16进制颜色
	}
}
function cjc_randomHexColor_China_WDD(name){
	//console.log(name);
	switch(name){
		case "热带":return "#FF69B4";break;
		case "亚热带":return "#FFE4B5";break;
		case "高原气候区":return "#6A5ACD";break;
		case "暖温带":return "#FFFF00";break;
		case "中温带":return "#228B22";break;
		case "寒温带":return "#00BFFF";break;
		case "海南岛":return "#DCFF2F";break;
		case "珠江三角洲":return "#228B22";break;
		case "台湾西部平原":return "#ADFF2F";break;
		case "台湾山":return "#F0E68C";break;
		case "两广丘陵":return "#556B2F";break;
		case "浙闽丘陵":return "#6B8E23";break;
		case "云贵高原":return "#DAA520";break;
		case "江南丘陵":return "#BDB76B";break;
		case "四川盆地":return "#98FB98";break;
		case "长江中下游平原":return "#006400";break;
		case "长江中上游地区":return "#7FFF00";break;
		case "山东半岛":return "#7CFC00";break;
		case "柴达木盆地":return "#FFA500";break;
		case "华北平原":return "#008000";break;
		case "青藏高原":return "#8B4513";break;
		case "黄土高原":return "#F4A460";break;
		case "辽东半岛":return "#00FF7F";break;
		case "塔里木盆地":return "#B8860B";break;
		case "吐鲁番哈密盆地":return "#9ACD32";break;
		case "天山山脉":return "#FFD700";break;
		case "长白山":return "#006400";break;
		case "塔尔巴哈台山":return "#32CD32";break;
		case "准格尔盆地":return "#40E0D0";break;
		case "东北平原":return "#66CDAA";break;
		case "阿尔泰山脉":return "#2E8B57";break;
		case "小兴安岭":return "#8B0000";break;
		case "内蒙古高原":return "#FF8C00";break;
		case "灰色":return "#808080";break;
		case "年降水量低于50毫米":return "#A0522D";break;
		case "年降水量50 — 200毫米":return "#CD853F";break;
		case "年降水量200 — 400毫米":return "#D2B48C";break;
		case "年降水量400 — 800毫米":return "#87CEFA";break;
		case "年降水量800 — 1600毫米":return "#00BFFF";break;
		case "年降雨量1600 — 3000毫米":return "#1E90FF";break;
		case "年降水量高于3000毫米":return "#00008B";break;
		case "干旱区":return "#A0522D";break;
		case "半干旱区":return "#DAA520";break;
		case "半湿润区":return "#00BFFF";break;
		case "湿润区":return "#00008B";break;
		case "黑龙江":return "#1E90FF";break;
		case "海拉尔河":return "#1E90FF";break;
		case "乌苏里江":return "#1E90FF";break;
		case "松花江":return "#1E90FF";break;
		case "嫩江":return "#1E90FF";break;
		case "牡丹江":return "#1E90FF";break;
		case "辽河":return "#1E90FF";break;
		case "鸭绿江":return "#1E90FF";break;
		case "塔里木河":return "#1E90FF";break;
		case "滦河":return "#1E90FF";break;
		case "汾河":return "#1E90FF";break;
		case "黄河":return "#1E90FF";break;
		case "渭河":return "#1E90FF";break;
		case "钱塘江":return "#1E90FF";break;
		case "嘉陵江":return "#1E90FF";break;
		case "汉江":return "#1E90FF";break;
		case "雅鲁藏布江":return "#1E90FF";break;
		case "大渡河":return "#1E90FF";break;
		case "赣江":return "#1E90FF";break;
		case "乌江":return "#1E90FF";break;
		case "岷江":return "#1E90FF";break;
		case "湘江":return "#1E90FF";break;
		case "沅江":return "#1E90FF";break;
		case "长江":return "#1E90FF";break;
		case "雅砻江":return "#1E90FF";break;
		case "闽江":return "#1E90FF";break;
		case "柳江":return "#1E90FF";break;
		case "澜沧江":return "#1E90FF";break;
		case "怒江":return "#1E90FF";break;
		case "元江":return "#1E90FF";break;
		case "北江":return "#1E90FF";break;
		case "东江":return "#1E90FF";break;
		case "珠江":return "#1E90FF";break;
		case "郁江":return "#1E90FF";break;
		case "黑水河":return "#1E90FF";break;
		case "弱水":return "#1E90FF";break;
		case "松花江":return "#1E90FF";break;
		case "第二松花江":return "#1E90FF";break;
		case "京杭运河":return "#1E90FF";break;
		case "淮河":return "#1E90FF";break;
		case "阿尔金山脉":return "#8B0000";break;
		case "唐古拉山脉":return "#8B0000";break;
		case "秦岭":return "#FFD700";break;//
		case "南岭":return "#FFD700";break;//
		case "大兴安岭":return "#006400";break;///
		case "燕山":return "#FFD700";break;//
		case "贺兰山":return "#8B0000";break;
		case "阴山山脉":return "#FFD700";break;//
		case "太行山脉":return "#006400";break;///
		case "祁连山脉":return "#FFD700";break;
		case "武夷山脉":return "#006400";break;///
		case "雪峰山":return "#006400";break;///
		case "台湾山脉":return "#006400";break;///
		case "大巴山":return "#8B0000";break;
		case "巫山":return "#006400";break;///
		case "横断山脉":return "#8B0000";break;
		case "巴颜柯拉山脉":return "#8B0000";break;
		case "昆仑山脉":return "#FFD700";break;//
		case "冈底斯山脉":return "#8B0000";break;
		case "喜马拉雅山脉":return "#8B0000";break;
		case "大别山":return "#8B0000";break;
		case "额尔古纳河":return "#1E90FF";break;
		case "纳文河":return "#1E90FF";break;
		case "克鲁伦河":return "#1E90FF";break;
		case "头道江(漫江)":return "#1E90FF";break;
		case "二道白河":return "#1E90FF";break;
		case "二道江":return "#1E90FF";break;
		case "西辽河":return "#1E90FF";break;
		case "老哈河":return "#1E90FF";break;
		case "闪电河":return "#1E90FF";break;
		case "永定河(桑干河、永定新河)":return "#1E90FF";break;
		case "海河":return "#1E90FF";break;
		case "子牙河(子牙新河)":return "#1E90FF";break;
		case "卫河(大沙河)":return "#1E90FF";break;
		case "汉江(汉水)":return "#1E90FF";break;
		case "通榆运河":return "#1E90FF";break;
		case "新通扬运河":return "#1E90FF";break;
		case "通吕运河":return "#1E90FF";break;
		case "通扬运河":return "#1E90FF";break;
		case "富春江":return "#1E90FF";break;
		case "闽江(九龙溪、沙溪)":return "#1E90FF";break;
		case "绵水":return "#1E90FF";break;
		case "贡水":return "#1E90FF";break;
		case "东江(寻邬水)":return "#1E90FF";break;
		case "北江(浈水)":return "#1E90FF";break;
		case "西江":return "#1E90FF";break;
		case "北江干流水道(顺德水道、沙湾水道)":return "#1E90FF";break;
		case "珠江(前航道、后航道、虎门水道)":return "#1E90FF";break;
		case "东江北干流":return "#1E90FF";break;
		case "蕉门水道":return "#1E90FF";break;
		case "洪奇沥水道":return "#1E90FF";break;
		case "横门水道(小榄水道、东海水道)":return "#1E90FF";break;
		case "浔江":return "#1E90FF";break;
		case "郁江(驮娘江、右江、邕江)":return "#1E90FF";break;
		case "黔江":return "#1E90FF";break;
		case "红水河":return "#1E90FF";break;
		case "柳江(都柳江、融江)":return "#1E90FF";break;
		case "清水江":return "#1E90FF";break;
		case "鸭池河":return "#1E90FF";break;
		case "三岔河":return "#1E90FF";break;
		case "龙头江(马尾河)":return "#1E90FF";break;
		case "黑河(弱水、东河、西河)":return "#1E90FF";break;
		case "疏勒河(昌马河)":return "#1E90FF";break;
		case "额尔齐斯河":return "#1E90FF";break;
		case "伊犁河(特克斯河)":return "#1E90FF";break;
		case "塔里木河(叶尔羌河)":return "#1E90FF";break;
		case "和田河(喀拉喀什河)":return "#1E90FF";break;
		case "车尔臣河(卡墙河、且末河)":return "#1E90FF";break;
		case "狮泉河(森格藏布、印度河)":return "#1E90FF";break;
		case "萨特累季河(郎钦藏布、象泉河)":return "#1E90FF";break;
		case "通天河":return "#1E90FF";break;
		case "约古宗列渠":return "#1E90FF";break;
		case "沱沱河(玛曲)":return "#1E90FF";break;
		case "扎曲":return "#1E90FF";break;
		case "大渡河(马柯河、大金川)":return "#1E90FF";break;
		case "金沙江":return "#1E90FF";break;
		case "那曲":return "#1E90FF";break;
		case "南盘江":return "#1E90FF";break;
		case "礼社江":return "#1E90FF";break;
		case "黑水河(李仙江、把边河、川河)":return "#1E90FF";break;
		case "常山江(马金溪)":return "#1E90FF";break;
		case "衢江":return "#1E90FF";break;
		case "当却藏布(马泉河)":return "#1E90FF";break;
		case "沮水":return "#1E90FF";break;
		case "双台子河":return "#1E90FF";break;
		case "马甲藏布(呼那卡那里河)":return "#1E90FF";break;
		case "伊洛瓦底江(独龙江、恩梅开江)":return "#1E90FF";break;
		case "墨累河":return "#1E90FF";break;//世界水系——大洋洲--开始
		case "索布格尔河":return "#1E90FF";break;
		case "塞皮克河":return "#1E90FF";break;
		case "弗莱河":return "#1E90FF";break;
		case "曼伯拉莫河":return "#1E90FF";break;
		case "伊登布尔格河":return "#1E90FF";break;
		case "迪古尔河":return "#1E90FF";break;
		case "大洋洲":return "#000000";break;//世界水系——大洋洲--结束
		case "白尼罗河":return "#1E90FF";break;//世界水系——非洲--开始
		case "韦莱河":return "#1E90FF";break;
		case "开赛河":return "#1E90FF";break;
		case "奥兰治河":return "#1E90FF";break;
		case "尼罗河":return "#1E90FF";break;
		case "塞内加尔河":return "#1E90FF";break;
		case "青尼罗河":return "#1E90FF";break;
		case "巴科伊河":return "#1E90FF";break;
		case "巴芬河":return "#1E90FF";break;
		case "尼日尔河":return "#1E90FF";break;
		case "贝努埃河":return "#1E90FF";break;
		case "乌班吉河":return "#1E90FF";break;
		case "刚果河":return "#1E90FF";break;
		case "赞比西河":return "#1E90FF";break;
		case "林波波河":return "#1E90FF";break;
		case "非洲":return "#000000";break;
		case "谢贝利河":return "#1E90FF";break;
		case "舍贝莱河":return "#1E90FF";break;
		case "朱巴河":return "#1E90FF";break;//世界水系——非洲--结束
		case "马格达莱纳河":return "#1E90FF";break;//世界水系——南美洲--开始
		case "奥里诺科河":return "#1E90FF";break;
		case "马拉尼翁河":return "#1E90FF";break;
		case "泰利斯皮里斯河":return "#1E90FF";break;
		case "托坎廷斯河":return "#1E90FF";break;
		case "帕拉南河":return "#1E90FF";break;
		case "巴拉圭河":return "#1E90FF";break;
		case "巴拉那伊巴河":return "#1E90FF";break;
		case "贝尔梅霍河":return "#1E90FF";break;
		case "乌拉圭河":return "#1E90FF";break;
		case "马塔基托河":return "#1E90FF";break;
		case "沃佩斯河":return "#1E90FF";break;
		case "库鲁埃尼河":return "#1E90FF";break;
		case "圣弗朗西斯科河":return "#1E90FF";break;
		case "欣古河":return "#1E90FF";break;
		case "马代拉河":return "#1E90FF";break;
		case "塔帕若斯河":return "#1E90FF";break;
		case "马默雷河":return "#1E90FF";break;
		case "南美洲":return "#000000";break;
		case "内格罗河":return "#1E90FF";break;
		case "亚马逊河":return "#1E90FF";break;//世界水系——南美洲--结束
		case "阿肯色河":return "#1E90FF";break;//世界水系——北美洲--开始
		case "特斯林河":return "#1E90FF";break;
		case "芬利河":return "#1E90FF";break;
		case "萨斯喀彻温河":return "#1E90FF";break;
		case "鲍河":return "#1E90FF";break;
		case "马更些河":return "#1E90FF";break;
		case "奴河":return "#1E90FF";break;
		case "皮斯河":return "#1E90FF";break;
		case "纳尔逊河":return "#1E90FF";break;
		case "威利斯顿湖":return "#1E90FF";break;
		case "圣劳伦斯河":return "#1E90FF";break;
		case "密苏里河":return "#1E90FF";break;
		case "科罗拉多河":return "#1E90FF";break;
		case "育空河":return "#1E90FF";break;
		case "密西西比河":return "#1E90FF";break;
		case "美洲":return "#000000";break;//世界水系——北美洲--结束
		case "阿肯色河":return "#1E90FF";break;//世界水系——欧洲--开始
		case "易北河":return "#1E90FF";break;
		case "奥得河":return "#1E90FF";break;
		case "维斯瓦河":return "#1E90FF";break;
		case "拉贝河":return "#1E90FF";break;
		case "埃布罗河":return "#1E90FF";break;
		case "波河":return "#1E90FF";break;
		case "莱茵河":return "#1E90FF";break;
		case "塞纳河":return "#1E90FF";break;
		case "蒂萨河":return "#1E90FF";break;
		case "德劳河":return "#1E90FF";break;
		case "厄耶伦河":return "#1E90FF";break;
		case "瓦尔河":return "#1E90FF";break;
		case "德拉瓦河":return "#1E90FF";break;
		case "罗讷河":return "#1E90FF";break;
		case "萨瓦河":return "#1E90FF";break;
		case "多瑙河":return "#1E90FF";break;
		case "特茹河":return "#1E90FF";break;
		case "卢瓦尔河":return "#1E90FF";break;
		case "德涅斯特河":return "#1E90FF";break;
		case "第聂伯河":return "#1E90FF";break;
		case "顿河":return "#1E90FF";break;
		case "伏尔加河":return "#1E90FF";break;
		case "卡马河":return "#1E90FF";break;
		case "北德维纳河":return "#1E90FF";break;
		case "维切格达河":return "#1E90FF";break;
		case "伯朝拉河":return "#1E90FF";break;
		case "欧洲":return "#000000";break;//世界水系——欧洲--结束
		case "亚洲":return "#000000";break;//世界水系——亚洲--开始
		case "穆鲁诺河":return "#1E90FF";break;
		case "巴里托河":return "#1E90FF";break;
		case "卡普阿斯河":return "#1E90FF";break;
		case "卡拉苏河":return "#1E90FF";break;
		case "幼发拉底河":return "#1E90FF";break;
		case "塞尔萨尔河":return "#1E90FF";break;
		case "底格里斯河":return "#1E90FF";break;
		case "阿拉克斯河":return "#1E90FF";break;
		case "卡伦河":return "#1E90FF";break;
		case "克孜勒乌赞河":return "#1E90FF";break;
		case "卡拉库姆运河":return "#1E90FF";break;
		case "萨雷苏河":return "#1E90FF";break;
		case "楚河":return "#1E90FF";break;
		case "赫尔曼德河":return "#1E90FF";break;
		case "锡尔河":return "#1E90FF";break;
		case "阿姆河":return "#1E90FF";break;
		case "喷赤河":return "#1E90FF";break;
		case "伊希姆河":return "#1E90FF";break;
		case "额尔齐斯河":return "#1E90FF";break;
		case "鄂毕河":return "#1E90FF";break;
		case "赫塔河":return "#1E90FF";break;
		case "科图伊河":return "#1E90FF";break;
		case "下通古斯卡河":return "#1E90FF";break;
		case "勒拿河":return "#1E90FF";break;
		case "贝加尔湖":return "#1E90FF";break;
		case "奥列尼奥克河":return "#1E90FF";break;
		case "叶尼塞河":return "#1E90FF";break;
		case "安加拉河":return "#1E90FF";break;
		case "哈坦加河":return "#1E90FF";break;
		case "因迪吉尔卡河":return "#1E90FF";break;
		case "科雷马河":return "#1E90FF";break;
		case "阿尔丹河":return "#1E90FF";break;
		case "维季姆河":return "#1E90FF";break;
		case "色楞格河":return "#1E90FF";break;
		case "伊德尔河":return "#1E90FF";break;
		case "伊犁河":return "#1E90FF";break;
		case "纳伦河":return "#1E90FF";break;
		case "马哈韦利河":return "#1E90FF";break;
		case "讷尔默达河":return "#1E90FF";break;
		case "戈达瓦里河":return "#1E90FF";break;
		case "克里希纳河":return "#1E90FF";break;
		case "额尔古纳河":return "#1E90FF";break;
		case "黑龙江":return "#1E90FF";break;
		case "松花江":return "#1E90FF";break;
		case "嫩江":return "#1E90FF";break;
		case "牡丹江":return "#1E90FF";break;
		case "辽河":return "#1E90FF";break;
		case "老哈河":return "#1E90FF";break;
		case "滦河":return "#1E90FF";break;
		case "塔里木河":return "#1E90FF";break;
		case "鸭绿江":return "#1E90FF";break;
		case "黑河":return "#1E90FF";break;
		case "闪电河":return "#1E90FF";break;
		case "疏勒河":return "#1E90FF";break;
		case "永定河":return "#1E90FF";break;
		case "北运河":return "#1E90FF";break;
		case "和田河":return "#1E90FF";break;
		case "海河":return "#1E90FF";break;
		case "南运河":return "#1E90FF";break;
		case "子牙河":return "#1E90FF";break;
		case "车尔臣河":return "#1E90FF";break;
		case "卫河":return "#1E90FF";break;
		case "通天河":return "#1E90FF";break;
		case "沱沱河":return "#1E90FF";break;
		case "富春江":return "#1E90FF";break;
		case "衢江":return "#1E90FF";break;
		case "常山江":return "#1E90FF";break;
		case "清水江":return "#1E90FF";break;
		case "南盘江":return "#1E90FF";break;
		case "克鲁伦河":return "#1E90FF";break;
		case "阿穆尔河":return "#1E90FF";break;
		case "乌苏里江":return "#1E90FF";break;
		case "苏德莱杰河":return "#1E90FF";break;
		case "杰纳布河":return "#1E90FF";break;
		case "印度河":return "#1E90FF";break;
		case "亚穆纳河":return "#1E90FF";break;
		case "格尔纳利河":return "#1E90FF";break;
		case "卡克拉河":return "#1E90FF";break;
		case "恒河":return "#1E90FF";break;
		case "公河":return "#1E90FF";break;
		case "蒙河":return "#1E90FF";break;
		case "昭批耶河":return "#1E90FF";break;
		case "宾河":return "#1E90FF";break;
		case "难河":return "#1E90FF";break;
		case "湄公河":return "#1E90FF";break;
		case "红河":return "#1E90FF";break;
		case "南乌江":return "#1E90FF";break;
		case "萨尔温江":return "#1E90FF";break;
		case "钦敦江":return "#1E90FF";break;
		case "塔奈河":return "#1E90FF";break;
		case "伊洛瓦底江":return "#1E90FF";break;
		case "戛达曲":return "#1E90FF";break;
		case "拉马普特拉河":return "#1E90FF";break;
		case "大同江":return "#1E90FF";break;
		case "北汉江":return "#1E90FF";break;
		case "临津江":return "#1E90FF";break;
		case "南汉江":return "#1E90FF";break;
		case "洛东江":return "#1E90FF";break;
		case "锦江":return "#1E90FF";break;
		case "阿拉伯河":return "#1E90FF";break;
		case "克孜勒河":return "#1E90FF";break;
		case "阿拉斯河":return "#1E90FF";break;
		case "乌拉尔河":return "#1E90FF";break;
		case "维柳伊河":return "#1E90FF";break;//世界水系——亚洲--结束
		
	}
}
function add_title_marker(myContent,myPosition){
	if(myContent=="emap"){
		return;
	}
	tipMarker_9_5.setMap(null);
	//鼠标hover提示内容
	var $tipMarkerContent = $('<div class="tipMarker top"></div>');
	tipMarker_9_5 = new AMap.Marker({
		content: $tipMarkerContent.get(0),
		shape:new AMap.Marker({})
	});
	//更新提示内容
	$tipMarkerContent.html(myContent);
	//更新位置
	tipMarker_9_5.setPosition(myPosition);
	//tipMarker_9_5
	tipMarker_9_5.setMap(map);
}
function add_title_box(myName){	
	$.get("./interpretation/"+myName+".html", function(){
			diag.URL = "./interpretation/"+myName+".html";
			diag.show();
	},"html");

}
/*function cjc_re_class(cjc_top,cjc_left,cjc_str){
	$(cjc_str).css("position","absolute");
	$(cjc_str).css("z-index","2");
	$(cjc_str).css("border","1px solid blue");
	$(cjc_str).css("background-color","white");
	$(cjc_str).css("white-space","nowrap");
	$(cjc_str).css("cursor","pointer");
	$(cjc_str).css("padding","3px");
	$(cjc_str).css("line-height","14px");
	$(cjc_str).css("top",cjc_top);
	$(cjc_str).css("left",cjc_left);
}*/
function cjc_9_12_read_image(files){
		var file=files[0];
		if(file){
			var reader=new FileReader();
			reader.onload=function(){
				cjc_9_12_file=this.result;
			}
			reader.readAsDataURL(file);
		}
}
function cjc_9_12_addPictures(){
	cjc_9_19_disable_buttons();
	$(".cjc_8_9_addPictures").css("display","block");
	$("#cjc_9_12_input").val(map.getCenter());
	$("#cjc_9_25_input_0").val("图片"+cjc_num_count);
}
function cjc_9_12_setPoint(){
	isSetMiddlePoint=true;
	$(".cjc_8_9_addPictures").css("display","none");
	map.setDefaultCursor("crosshair");
}
function cjc_9_12_start_add_pictures(){
	cjc_9_19_enable_buttons();
	$(".cjc_8_9_addPictures").css("display","none");
	if(cjc_9_12_file){
		var img=new Image();
		img.src=cjc_9_12_file;
		img.onload=function(){	
			/*var bound_left=img.width*0.014748/690/Math.pow(2,(map.getZoom()-15))*$("#cjc_9_12_select_1").val();
			var bound_right=img.height*0.007046/430/Math.pow(2,(map.getZoom()-15))*$("#cjc_9_12_select_1").val();
			var latlng=$("#cjc_9_12_input").val().split(',');
			var l1=latlng[0]-bound_left;	
			var l2=latlng[0]-0+bound_left;
			var r1=latlng[1]-bound_right;
			var r2=latlng[1]-0+bound_right;
			var imageLayer= new AMap.ImageLayer({
				url: img.src,
				bounds: new AMap.Bounds(
					[l1,r1],
					[l2,r2]
				),
				zooms: [3, 18]
			});
			imageLayer.setMap(map);*/
		
		cjc_num_count++;
		var title =$("#cjc_9_25_input_0").val();
		var content = [];
		var width_11_13=img.width*$("#cjc_11_13_select").val();
		var height_11_13=img.height*$("#cjc_11_13_select").val();
		content.push("<img src='"+img.src+"' width='"+width_11_13+"' height='"+height_11_13+"'/>");
		content.push($("#cjc_9_25_input_1").val());
		var infoWindow = new AMap.InfoWindow({
			isCustom: true,  //使用自定义窗体
			content: createInfoWindow(title, content.join("<br/>")),
			offset: new AMap.Pixel(16, -45)
		});
		 var marker = new AMap.Marker({
            map: map,
            position: $("#cjc_9_12_input").val().split(','),
			label:{
				content:$("#cjc_9_25_input_0").val(),
				offset:new AMap.Pixel(-10, -20)
			}
        });
		AMap.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker.getPosition());
        });
		}
	}
}
function cjc_9_18_addLine(){
	var arr=[];
	switch($("#cjc_9_18_select_1").find("option:selected").text()){
		case "实线":arr=[0,0,0];break;
		case "虚线":arr=[10,10] ;break;
		case "点线":arr=[10,2,10];break;
	}
	$('.cjc_9_13_addLine').css('display','none');
	mouseTool.polyline({
		map:map,
		strokeStyle:$("#cjc_9_18_select_1").val(),
		strokeDasharray:arr,
		strokeWeight:2*$("#cjc_9_18_select_2").val(),
		strokeColor:$("#cjc_9_18_color_1").val(),
		strokeOpacity:$("#cjc_9_18_select_3").val()
	});
	is_mouseTool_polyline=true;
	map.setDefaultCursor("crosshair");
}
function cjc_9_18_addPictures(){
	var arr=[];
	switch($("#cjc_9_18_select_4").find("option:selected").text()){
		case "实线":arr=[0,0,0];break;
		case "虚线":arr=[10,10] ;break;
		case "点线":arr=[10,2,10];break;
	}
	$('.cjc_9_18_addPictures').css('display','none');
	mouseTool.polygon({
		map:map,
		strokeColor:$("#cjc_9_18_color_2").val(),
		strokeOpacity:$("#cjc_9_18_select_6").val(),
		strokeWeight:2*$("#cjc_9_18_select_5").val(),
		strokeStyle:$("#cjc_9_18_select_4").val(),
		strokeDasharray:arr,
		fillColor:$("#cjc_9_18_color_3").val(),
		fillOpacity:$("#cjc_9_18_select_7").val()
	});
	is_mouseTool_polyline=true;
	map.setDefaultCursor("crosshair");
}
function cjc_9_18_addText_dd(){
	cjc_9_19_enable_buttons();
	cjc_9_18_addText(cjc_8_8_point);
}
function cjc_9_18_addText(cjc_position_9_18){
	var cjc_txt="";
	if($("#cjc_9_18_text").val()){
		cjc_txt=$("#cjc_9_18_text").val();
	}else{
		cjc_txt="空";
	}
	$(".cjc_9_18_addText").css("display","none");
	var cjc_text = new AMap.Text({
        text:cjc_txt,//文本内容
        textAlign:'center',
        verticalAlign:'middle', 
		map:map,
        draggable:true,
		raiseOnDrag:true,
        cursor:'move',
        angle:$("#cjc_9_18_select_9").val(),//旋转角度
		zIndex:200,
        style:{
            'background-color':$("#cjc_9_18_color_5").val(),//背景颜色
            'border':'solid '+$("#cjc_9_18_select_8").val()+"px "+$("#cjc_9_18_color_4").val(),//
            'padding':'10px 20px',
			'color':$("#cjc_9_18_color_6").val(),
			'font-size':$("#cjc_9_18_select_11").val(),
			'font-family':$("#cjc_9_18_select_10").val()
        },
        position: cjc_position_9_18
    }).on('rightclick', function(e) {contextMenu_1.open(map,e.lnglat);cjc_9_10_text=cjc_position_9_18;});
	cjc_9_10_overlayers.push({"text_w":cjc_position_9_18,"data":cjc_text});
}
function cjc_9_18_addText_open(){
	$(".cjc_9_18_addText").css("display","block");
}
function cjc_9_18_addText_new(){
	cjc_9_19_disable_buttons()
	//cjc_8_8_open_add_point();
	isStartAddtext=true;
	map.setDefaultCursor("crosshair");
}
//cjc_9_18_addText();
function cjc_9_19_disable_buttons(){
	$(".cjc_8_2_add_body_btn_1").attr("disabled","disabled");
	$(".cjc_8_2_add_body_btn_2").attr("disabled","disabled");
}

function cjc_9_19_enable_buttons(){
	$(".cjc_8_2_add_body_btn_1").removeAttr("disabled");
	$(".cjc_8_2_add_body_btn_2").removeAttr("disabled");
}
//构建自定义信息窗体
function createInfoWindow(title, content) {
	var info = document.createElement("div");
	info.className = "info";

	//可以通过下面的方式修改自定义窗体的宽高
	//info.style.width = "400px";
	// 定义顶部标题
	var top = document.createElement("div");
	var titleD = document.createElement("div");
	var closeX = document.createElement("img");
	top.className = "info-top";
	titleD.innerHTML = title;
	closeX.src = "https://webapi.amap.com/images/close2.gif";
	closeX.onclick = closeInfoWindow;

	top.appendChild(titleD);
	top.appendChild(closeX);
	info.appendChild(top);

	// 定义中部内容
	var middle = document.createElement("div");
	middle.className = "info-middle";
	middle.style.backgroundColor = 'white';
	middle.innerHTML = content;
	info.appendChild(middle);

	// 定义底部内容
	var bottom = document.createElement("div");
	bottom.className = "info-bottom";
	bottom.style.position = 'relative';
	bottom.style.top = '0px';
	bottom.style.margin = '0 auto';
	var sharp = document.createElement("img");
	sharp.src = "https://webapi.amap.com/images/sharp.png";
	bottom.appendChild(sharp);
	info.appendChild(bottom);
	return info;
}
function addExtraBound_11_14(fileName){
	$.get("./json/"+fileName, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.Name);
                   return new AMap.Polygon({
                        path: lnglats,
						cursor:"pointer",
						zIndex:0,
                        strokeColor:'#DCDCDC',
                        fillColor:cjc_randomHexColor(geojson.properties.Name,true),
						fillOpacity:0.3
                        
                    });
                }
				
			});	
			geojson.setMap(map);	
			json_geojson[4]=geojson;
			
		}
	},"json");
}
//关闭信息窗体
function closeInfoWindow() {
	map.clearInfoWindow();
}
//add_geojson("植被分布.json");