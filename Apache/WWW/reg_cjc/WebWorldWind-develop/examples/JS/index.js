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
var googleLayer = null;
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
var isneedEvent=true;
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
var cjc_8_5_size=1;
//窗体初始化
//placeName.innerText="";
//jingDu.innerText="";
//weiDu.innerText="";
//实例化地图
var map = new AMap.Map('GaoDeMap', {
	resizeEnable: true,
	zoom:16,
	center: [104.299012,28.700327]
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
		   map.setDefaultCursor();
		   return;
	   }
	   if(isStartAddtext){
		   cjc_8_8_point=e.lnglat;
		   cjc_9_18_addText_open();
		   isStartAddtext=false;
		   map.setDefaultCursor();
		   return;
	   }
	   if(isSetMiddlePoint){
		   $(".cjc_8_9_addPictures").css("display","block");
		   $("#cjc_9_12_input").val(e.lnglat);
		   isSetMiddlePoint=false;
		   map.setDefaultCursor();
		   return;
	   }
	});
	map.on("rightclick",function(e){
		if(is_mouseTool_polyline){
			is_mouseTool_polyline=false;
			mouseTool.close(false);
			map.setDefaultCursor();
			cjc_9_19_enable_buttons();
		}
	});
});
//UI组件
AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $) {
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
		
    });
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
	if(googleLayer){
		googleLayer.setMap(null);
	}
}
function WorldQuHuaShow(){
	addGoogleLayer();
	map.setZoomAndCenter(3,[104.299012,28.700327]);
}	
//自己的六个按钮的函数
function cjc_turn_big(){
	map.zoomIn();
}
function cjc_turn_small(){
	map.zoomOut();
}	
	
function cjcKeHuDingWei(){
	  map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            showButton:false,
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
	//解析定位结果
	function onComplete(data) {
		//alert("定位成功");
	}
	//解析定位错误信息
	function onError(data) {
		//alert("定位失败");
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
 //   lastLoc = windowToCanvas(point.x, point.y);
    lastLoc = point;
    lastTimestamp = new Date().getTime();
}
function endStroke(){
    isMouseDown = false;
	offContext.clearRect(0,0,offCanvas.width,offCanvas.height);
}
function moveStroke(point){
  //  var curLoc = windowToCanvas( point.x , point.y );
    var curLoc = point;
    var curTimestamp = new Date().getTime();
    var s = calcDistance( curLoc , lastLoc );
    var t = curTimestamp - lastTimestamp;

    var lineWidth = calcLineWidth( t , s );

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
					var cjc_position=  new AMap.Polyline({
						path: lnglats,
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
			json_shapefiles[node_id]=geojson;
		}
	},"json");
}
function add_geojson(node_id,fileName) {
	switch(fileName){
		case "土壤分布.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
		case "植被分布.json":map.setZoomAndCenter(4,[104.299012,28.700327]);break;
	}
	$.get("./json/"+fileName, function(result){
		if(result){
			var geojson = new AMap.GeoJSON({
				'geoJSON':result,     //geojsonObject,
				'getPolyline': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson);
					return new AMap.Polyline({
						path: lnglats,
						borderWeight:50,
						strokeColor:randomHexColor()
					}).on("click",function(e){add_title_box(geojson.properties.Name);}).on('mousemove',function(e){add_title_marker(geojson.properties.Name,e.lnglat);}).on("mouseout",function(e){tipMarker_9_5.setMap(null);});
					
				},
				'getPolygon': function(geojson, lnglats) {//还可以自定义getMarker和getPolyline
					//console.log(geojson.properties.Name);
                   return new AMap.Polygon({
                        path: lnglats,
                        strokeColor:'white',
                        fillColor:randomHexColor()
                        
                    }).on("click",function(e){add_title_box(geojson.properties.Name);}).on('mousemove',function(e){add_title_marker(geojson.properties.Name,e.lnglat);}).on("mouseout",function(e){tipMarker_9_5.setMap(null);});
                }
				
			});	
			geojson.setMap(map);	
			json_geojson[node_id]=geojson;
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
function add_title_marker(myContent,myPosition){
	tipMarker_9_5.setMap(null);
	//鼠标hover提示内容
	var $tipMarkerContent = $('<div class="tipMarker top"></div>');

	tipMarker_9_5 = new AMap.Marker({
		content: $tipMarkerContent.get(0)
	});
	//更新提示内容
	$tipMarkerContent.html(myContent);
	//更新位置
	tipMarker_9_5.setPosition(myPosition);
	tipMarker_9_5.setMap(map);
}
function add_title_box(myName){
	/*$.get("./interpretation/"+myName+".txt", function(result){
		console.log(result);
	},"text");*/
	
	diag.URL = "./interpretation/"+myName+".html";
	diag.show();
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
			var bound_left=img.width*0.014748/690/Math.pow(2,(map.getZoom()-15))*$("#cjc_9_12_select_1").val();
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
			imageLayer.setMap(map);
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
//add_geojson("植被分布.json");