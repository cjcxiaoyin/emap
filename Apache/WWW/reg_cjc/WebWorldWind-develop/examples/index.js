var canvas_1=document.getElementById("canvasOne");//读取canvas画布
var wwd;//实例化一个世界风对象
var accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NDg1bDA1cjYzM280NHJ5NzlvNDMifQ.d6e-nNyBDtmQCVwVNivz7A#15/34.0610/119.7600";
var layers=[];
var cjc_9_22_timeInterval_function;
var cjc_9_22_timeInterval;
var currentIndex = 0;
//从高德地图继承
var isShow=false;
var map = new AMap.Map('GaoDeMap', {});
var geolocation;
//canvas画笔
var canvas=document.getElementById("cjc_8_5_canvas");
var context=canvas.getContext("2d");
var offCanvas=document.getElementById("offCanvas");
var offContext=offCanvas.getContext("2d");
var pan_type="pan";
var line_x;
var line_y;
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
var this_button_9_8=$("#pen_btn");
var this_button_9_9=$("#cjc_9_9_img_1");
var json_pictures={};
var is_has_pictures_9_24=false;
var isStartAddPoints=false;
var cjc_8_8_point;
var cjc_9_9_src="img/skin_/cjc/point_1.png";
var cjc_color="#000000";
var starPush=false;
var last_positopn_lat;
var last_positopn_lng;
var pathPositions=[];
var shapePositions=[];
var shapePositions_1=[];
var highlightedItems = [];
var isStaraddshapes=false;
var isAddText=false;
var canShow=false;
var myLayer_9_27;
var pickPoint=[];
var last_layer;
var last_po_layer;
var shp_view;
var isNeedYun=false;
var cjc_num_count=1;
var isSetMiddlePoint=false;
var cjc_9_12_file;
var json_shapefiles={};
var cjc_textLayer;
//var is_mouse_press=false;
var isTurnOnL=false;
const serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
var YunLayer;
var point_start_10_7;
var point_stop_10_7;
var isStartDriving=false;
var DrivingType="";
var route_path=[];
var isGetcountry=false;
var diag = new Dialog();
var cjc_10_10_QiHou=[];
var data_3_6 = {};
var count_3_9={};
var model_3_9={};
var air_interval_3_9={};
var ship_line_num={};
var isNoBox=true;


document.oncontextmenu = function(){
　　return false;
}
 requirejs(['./WorldWindShim','./LayerManager'],function (WorldWind,LayerManager) {
	"use strict";
	wwd = new WorldWind.WorldWindow("canvasOne");
	wwd.goTo(new WorldWind.Position(39.92, 116.37, 2e7));	
	
	
	layers = [
		//{layer: new WorldWind.BMNGLayer()},//NASA服务器无效了
		{layer:	new WorldWind.BMNGRestLayer("https://worldwind32.arc.nasa.gov/standalonedata/Earth/BlueMarble256")},//模拟动画图层作为初始图层
		{layer: new WorldWind.BingAerialWithLabelsLayer()},
		{layer: new WorldWind.BingRoadsLayer()},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("卫星图", "mapbox.streets-satellite", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("等高线", "mapbox.outdoors", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("剪纸艺术", "mapbox.wheatpaste", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("漫画风格", "mapbox.comic", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("航海探险", "mapbox.pirates", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("铅笔手绘", "mapbox.pencil", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("经典图层", "mapbox.streets-basic", accessToken)},
		{layer: new WorldWind.DigitalGlobeTiledImageLayer("数字化地图", "mapbox.streets", accessToken)},
		{layer: new WorldWind.CompassLayer()},
		{layer: new WorldWind.CoordinatesDisplayLayer(wwd)},
		{layer: new WorldWind.ViewControlsLayer(wwd)},
		{layer:	new WorldWind.BMNGRestLayer("https://worldwind32.arc.nasa.gov/standalonedata/Earth/BlueMarble256")},//模拟动画图层
		{layer:	new WorldWind.StarFieldLayer()},//星空图层
		{layer: new WorldWind.AtmosphereLayer()},//大气层的图层
		{layer: new WorldWind.RenderableLayer("世界城市")},
		{layer: new WorldWind.RenderableLayer("世界首都")},
		{layer: new WorldWind.RenderableLayer("世界国家")},
		{layer: new WorldWind.RenderableLayer("航线图层")},//layer[20].layer
		{layer: new WorldWind.RenderableLayer("气候分布模式")},
		{layer: new WorldWind.RenderableLayer("经纬网5度")},
		{layer: new WorldWind.RenderableLayer("经纬网10度")},
		{layer: new WorldWind.RenderableLayer("经纬网15度")},
		{layer: new WorldWind.RenderableLayer("经纬网20度")},
		{layer: new WorldWind.RenderableLayer("经纬网30度")},
		{layer: new WorldWind.RenderableLayer("线划边界")},
		{layer: new WorldWind.RenderableLayer()},
		{layer: new WorldWind.CoordinatesDisplayLayer(wwd)},
		{layer: new WorldWind.RenderableLayer("飞机航线")},//layer[30].layer
		{layer: new WorldWind.RenderableLayer("轮船航线")},//layer[31].layer
     ];//添加图层 
	
	 for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = false;
            wwd.addLayer(layers[l].layer);
     }
	 layers[0].layer.enabled=true;
	 layers[15].layer.enabled=true;
	 layers[17].layer.pickEnabled=false;
	 layers[18].layer.pickEnabled=false;
	 layers[19].layer.pickEnabled=false;
	 layers[22].layer.pickEnabled=false;
	 layers[23].layer.pickEnabled=false;
	 layers[24].layer.pickEnabled=false;
	 layers[25].layer.pickEnabled=false;
	 layers[26].layer.pickEnabled=false;
	 layers[27].layer.pickEnabled=false;
	 layers[29].layer.enabled=true;
	 layers[30].layer.enabled=true;
	 layers[31].layer.enabled=true;
	 layers[20].layer.pickEnabled=false;
	 
	 
	var layer_17 = new WorldWind.GeoJSONParser("http://localhost:8079/data/System/geojson/世界城市.geojson");
	var layer_18 = new WorldWind.GeoJSONParser("http://localhost:8079/data/System/geojson/世界首都.geojson");
	var layer_19 = new WorldWind.GeoJSONParser("http://localhost:8079/data/System/geojson/世界国家.geojson");
	layer_17.load(null, GeojsonConfigurationCallback_17, layers[17].layer);
	layer_18.load(null, GeojsonConfigurationCallback_18, layers[18].layer);
	layer_19.load(null, GeojsonConfigurationCallback_19, layers[19].layer);
		
	/*var layer_21 = new WorldWind.KmlFile("http://localhost:8079/data/System/kml/气候分布模式.kml", []);
	 layer_21.then(function (kmlFile) {
		 layers[21].layer.addRenderable(kmlFile);
		 layers[21].layer.pickEnabled=false;
		// return new WorldWind.KmlFile("http://localhost:8079/data/System/kml/世界首都.kml", []);
	 }); .then(function (kmlFile) {
		 layers[18].layer.addRenderable(kmlFile);
		 layers[18].layer.pickEnabled=false;
		 return new WorldWind.KmlFile("http://localhost:8079/data/System/kml/世界国家.kml", []);
	 }).then(function (kmlFile) {
		 layers[19].layer.addRenderable(kmlFile);
		 layers[19].layer.pickEnabled=false;
		// return new WorldWind.KmlFile("http://localhost:8079/data/System/kml/争议地区.kml", []);
	 }).then(function (kmlFile) {
		 layers[20].layer.addRenderable(kmlFile);
		 layers[20].layer.pickEnabled=false;
		 
	 });*/

	//var worldShapefile_10_4 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/countries_shp/ne_110m_admin_0_countries.shp");
	var worldShapefile_5 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/ne_110m_graticules_all/ne_110m_graticules_5.shp");
	var worldShapefile_10 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/ne_110m_graticules_all/ne_110m_graticules_10.shp");
	var worldShapefile_15 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/ne_110m_graticules_all/ne_110m_graticules_15.shp");
	var worldShapefile_20 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/ne_110m_graticules_all/ne_110m_graticules_20.shp");
	var worldShapefile_30 = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/ne_110m_graticules_all/ne_110m_graticules_30.shp");
	var worldShapefile_boundry = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/boundry/ne_110m_admin_0_boundary_lines_land.shp");
	var worldQiHou = new WorldWind.Shapefile("http://localhost:8079/data/System/shpfile/qih/世界气候面层.shp");
	//worldShapefile_10_4.load(null, shapeConfigurationCallback, layers[21].layer);
	worldShapefile_5.load(null, shapeConfigurationCallback, layers[22].layer);
	worldShapefile_10.load(null, shapeConfigurationCallback, layers[23].layer);
	worldShapefile_15.load(null, shapeConfigurationCallback, layers[24].layer);
	worldShapefile_20.load(null, shapeConfigurationCallback, layers[25].layer);
	worldShapefile_30.load(null, shapeConfigurationCallback, layers[26].layer);
	worldShapefile_boundry.load(null, shapeConfigurationCallback, layers[27].layer);
	worldQiHou.load(null, shapeConfigurationCallback_Chinese, layers[21].layer);
	$.get(serviceAddress,function(xmlDom){
		if(xmlDom){
			var wms = new WorldWind.WmsCapabilities(xmlDom);
			var wmsLayerCapabilities = wms.getNamedLayer("MODAL2_M_CLD_FR");
			var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
			wmsConfig.title = "Average Surface Temp";
			YunLayer = new WorldWind.WmsLayer(wmsConfig);
			YunLayer.enabled=false;
			wwd.addLayer(YunLayer);
		}
	});
	//加载航线的点标记
	var pathAttributes = new WorldWind.ShapeAttributes();
	pathAttributes.outlineColor =WorldWind.Color.WHITE ;
	pathAttributes.drawVerticals = true; // draw verticals only when extruding	
	/*for(var i=0;i<chinaAirRoutes.length;i++){		
		var cjc_10_11_path=[];
		cjc_10_11_path.push(new WorldWind.Position(chinaAirRoutes[i].line[0][1], chinaAirRoutes[i].line[0][0], 1e4));
		cjc_10_11_path.push(new WorldWind.Position(chinaAirRoutes[i].line[1][1], chinaAirRoutes[i].line[1][0], 1e4));
		var path = new WorldWind.Path(cjc_10_11_path, pathAttributes);//实例化一个路径对象
		path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
		path.pathType=WorldWind.LINEAR;
		path.followTerrain = true;
		path.extrude = true; // make it a curtain
		path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
		layers[20].layer.addRenderable(path);		
	}*/
	


	
	 cjc_9_22_timeInterval_function=function () {
		wwd.redraw();
		currentIndex = ++currentIndex % WorldWind.BMNGRestLayer.availableTimes.length;
		layers[14].layer.time = WorldWind.BMNGRestLayer.availableTimes[currentIndex];		
	 }
	var clickRecognizer = new WorldWind.ClickRecognizer(wwd, handleClick);
	canvas_1.addEventListener("mousedown",function(e){
		e.preventDefault();
		if(e.button==2){
			starPush=false;
			isStaraddshapes=false;
			isAddText=false;
			pathPositions=[];
			shapePositions=[];
			last_layer=null;
			last_po_layer=null;
			$("#canvasOne").css("cursor","default");
			cjc_9_19_enable_buttons();
		}
	});
	$("#add_mouse_div_1").on("click",function(){
		if(myLayer_9_27){
			wwd.removeLayer(myLayer_9_27);
			wwd.redraw();
			}
		$("#add_mouse_div").css("display","none");
	});
	cjc_textLayer=new WorldWind.RenderableLayer("cjc Screen Text");
	wwd.addLayer(cjc_textLayer);
	$("#add_mouse_div_2").on("click",function(){$("#add_mouse_div").css("display","none");});
	wwd.addEventListener("mousemove", handlePick);
	wwd.addEventListener("mousedown", handleRightClick);
	//wwd.addEventListener("mouseup", handleMouseUp);
	loadData_3_8();
	ship_line_3_8();
});



//var handleMouseUp=function(){
	//is_mouse_press=false;
//}
window.parent.parent.document.getElementById("cjc_10_21_div").onclick=function(){
	add_title_box_new("关于系统");
};
function add_title_box_new(myName){	
	$.get("./interpretation/"+myName+".html", function(){
		var diag_new= new Dialog();
			diag_new.URL = "./interpretation/"+myName+".html";
			diag_new.Width=480;
			diag_new.Height=380;
			diag_new.show();
	},"html");
}
var handleRightClick=function(e){
	e.preventDefault();
	var x = e.clientX,y = e.clientY;
	var pickList = wwd.pick(wwd.canvasCoordinates(x, y));
	if(e.button==2&&canShow&&!starPush&&!isStaraddshapes){
		canShow=false;
		add_mouse_div(pickPoint[0],pickPoint[1]);
	}
     if (pickList.objects.length > 0&&e.button==0) {
        for (var p = 0; p < pickList.objects.length; p++) {
				
				if (pickList.objects[p].userObject instanceof WorldWind.Placemark) {				
					if(pickList.objects[p].userObject.layer.displayName=="Surface Images"){
						//console.log(pickList.objects[p].userObject);
						pickList.objects[p].userObject.layer.renderables[0].enabled=!pickList.objects[p].userObject.layer.renderables[0].enabled;
					}
				}else if(pickList.objects[p].userObject instanceof WorldWind.SurfacePolygon){
					if(pickList.objects[p].userObject.layer.displayName=="气候分布模式"){				
						add_mouse_div_name(pickPoint[0],pickPoint[1],pickList.objects[p].userObject.displayName);
					}
				}
			}
		}
	//	if(isTurnOnL){
		//	is_mouse_press=true;
	//	}
		//cjc_get_Tianqi();
}
var handlePick = function (o) {
	// The input argument is either an Event or a TapRecognizer. Both have the same properties for determining
	// the mouse or tap location.
	var x = o.clientX,
		y = o.clientY;
	var redrawRequired = highlightedItems.length > 0;
	pickPoint = wwd.canvasCoordinates(x, y);
	// De-highlight any highlighted placemarks.
	for (var h = 0; h < highlightedItems.length; h++) {
		highlightedItems[h].highlighted = false;
	}
	highlightedItems = [];
	myLayer_9_27=null;
	
	// Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
	// relative to the upper left corner of the canvas rather than the upper left corner of the page.
	var rectRadius = 1,
		pickRectangle = new WorldWind.Rectangle(pickPoint[0] - rectRadius, pickPoint[1] + rectRadius,
			2 * rectRadius, 2 * rectRadius);

	var pickList = wwd.pickShapesInRegion(pickRectangle);
	// Highlight the items picked.
	if (pickList.objects.length > 0) {
		
		redrawRequired = true;
		for (var p = 0; p < pickList.objects.length; p++) {
			if (pickList.objects[p].isOnTop) {
				canShow=true;	
				myLayer_9_27=pickList.objects[0].userObject.layer;
				pickList.objects[p].userObject.highlighted = true;
				highlightedItems.push(pickList.objects[p].userObject);
			}
		}
	}else{
		pickList=null;
		canShow=false;
		$("#add_mouse_div_name").css("display","none");
	}

	// Update the window if we changed anything.
	if (redrawRequired) {
		wwd.redraw();
	}
	//if(is_mouse_press){
	//	cjc_get_Tianqi();
	//}
};
function layerControl(num,isOk){
	if(isOk){
		 if(num==14){
			cjc_9_22_timeInterval=window.setInterval(cjc_9_22_timeInterval_function, 2000);
			wwd.goTo(new WorldWind.Position(39.9199, 116.3699,2e7));
		}else if(num==16){
			runSunSimulation();
			wwd.goTo(new WorldWind.Position(39.9199, 116.3699,2e7));
		}else if(num==28){
			wwd.goTo(new WorldWind.Position(39.9199, 116.3699,2e7));
			if(YunLayer){
			YunLayer.enabled=true;
			}else{
				$.get(serviceAddress,function(xmlDom){
					if(xmlDom){
						var wms = new WorldWind.WmsCapabilities(xmlDom);
						var wmsLayerCapabilities = wms.getNamedLayer("MODAL2_M_CLD_FR");
						var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
						wmsConfig.title = "Average Surface Temp";
						YunLayer = new WorldWind.WmsLayer(wmsConfig);
						YunLayer.enabled=false;
						wwd.addLayer(YunLayer);
					}
				});
			}
			wwd.redraw();
			return;
		}		
		layers[num].layer.enabled=true;

	}else{	
		if(num==14){
			window.clearInterval(cjc_9_22_timeInterval);
		}else if(num==16){
			stopSunSimulation();
		}else if(num==28){
			if(YunLayer){
			YunLayer.enabled=false;
			}
			wwd.redraw();
			return;
		}
		 layers[num].layer.enabled=false;
		
		
	}
	wwd.redraw();
}

function runSunSimulation() {
	var date = new Date(Date.now());
	layers[16].layer.time = date;
	layers[16].layer.time = date;
	wwd.redraw();
}
function stopSunSimulation(){
	layers[16].layer.time = null;
	wwd.redraw();
}
function cjcStartDiYiRenCheng(){
	wwd.navigator.tilt = 60;
	layers[1].layer.enabled=true;
	wwd.goTo(new WorldWind.Position(wwd.navigator.lookAtLocation.latitude,wwd.navigator.lookAtLocation.longitude, 50000));
}
function cjcEndDiYiRenCheng(){
	wwd.navigator.tilt = 0;	
	layers[1].layer.enabled=false;
	wwd.goTo(new WorldWind.Position(39.92021, 116.37012, 2e7));
}

//从高德地图继承
document.getElementById("cjc_8_3_btn_a_1").onclick=function(){
	if(isShow){
		$(".cjc_8_2_toolbar_right_children").css("display","none");
		isShow=false;
	}else{
		$(".cjc_8_2_toolbar_right_children").css("display","block");
		isShow=true;
	}
}
map.plugin('AMap.Geolocation', function() {
			geolocation = new AMap.Geolocation({
				enableHighAccuracy: true,//是否使用高精度定位，默认:true
				timeout: 10000,          //超过10秒后停止定位，默认：无穷大
				showButton:false,
				zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
			});
});
function cjc_turn_big(){
	wwd.goTo(new WorldWind.Position(wwd.navigator.lookAtLocation.latitude,wwd.navigator.lookAtLocation.longitude, wwd.navigator.range*4/5));
}
function cjc_turn_small(){
	wwd.goTo(new WorldWind.Position(wwd.navigator.lookAtLocation.latitude,wwd.navigator.lookAtLocation.longitude, wwd.navigator.range*6/5));
}
function cjc_reload(){
	window.parent.location.reload();
}
function cjcKeHuDingWei(){
	geolocation.getCurrentPosition();
	var evel_1=AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
	var evel_2=AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
	function onComplete(data) {
		AMap.event.removeListener(evel_1);
		AMap.event.removeListener(evel_2);
		wwd.goTo(new WorldWind.Position(data.position.lat,data.position.lng,2000));
	}
	function onError(data) {
		AMap.event.removeListener(evel_1);
		AMap.event.removeListener(evel_2);
		//console.log("定位失败");
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
function cjcCanvasPaint(){
	setCanvas_width_height();
	$("#cjc_btn_controller").css("display","block");
	$(".canvas_div").css("display","block");
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
	switch(pan_type){
		case "pan":beginStroke({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "rubber":cjc_9_7_rubber({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "line":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "circle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "ellipse":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
		case "trangle":cjc_9_7_star_point({x:e.touches[0].clientX,y:e.touches[0].clientY});break;
	}
};
offCanvas.ontouchmove=function(e){
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
};
offCanvas.ontouchend=function(e){
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
function pictures_show(node_id,node_name){
	$.post("judgePictures.php",{
		"nodeId":node_id,
		"nodeName":node_name
	},function(data,status){
		if(data){
			
			var cjc_position=data.split(';');
			//wwd.navigator.lookAtLocation.latitude=cjc_position[0];
			//wwd.navigator.lookAtLocation.longitude=cjc_position[1];
			//wwd.navigator.range=cjc_position[2];
			wwd.goTo(new WorldWind.Position(cjc_position[0],cjc_position[1],cjc_position[2]),isOk_9_24);
			var screenOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5, WorldWind.OFFSET_FRACTION, 0.5);
			var screenImage1 = new WorldWind.ScreenImage(screenOffset,"./Paint/Pictures/"+node_name+".png");
			var screenImageLayer = new WorldWind.RenderableLayer();
			screenImageLayer.addRenderable(screenImage1);
			json_pictures[node_id]=screenImageLayer;
			function isOk_9_24(){		
				if(!is_has_pictures_9_24){				
					wwd.addLayer(screenImageLayer);	
					is_has_pictures_9_24=true;	
				}
		
			}
		}else{
			
		}
	});
}
function Url2Png(url){

	var position=wwd.navigator.lookAtLocation.latitude+";"+wwd.navigator.lookAtLocation.longitude+";"+wwd.navigator.range;//4;28.700327;104.299012
      $.post("Url2Png.php",{
		"url":url,
		"position":position
		},
		function(data,status){
			
    });
}
function pictures_hide(node_id){
	json_pictures[node_id].enabled=false;
	wwd.goTo(new WorldWind.Position(wwd.navigator.lookAtLocation.latitude,wwd.navigator.lookAtLocation.longitude, wwd.navigator.range*9/10),isNeedRemove_9_24);
	function isNeedRemove_9_24(){
		if(is_has_pictures_9_24){
		wwd.removeLayer(json_pictures[node_id]);
		is_has_pictures_9_24=false;
		}
	}
}
function cjc_8_8_addPoints_new(){
	cjc_9_19_disable_buttons();
	isStartAddPoints=true;
	$("#canvasOne").css("cursor","crosshair");
}
function cjc_9_19_disable_buttons(){
	$(".cjc_8_2_add_body_btn_1").attr("disabled","disabled");
	$(".cjc_8_2_add_body_btn_2").attr("disabled","disabled");
}
function cjc_9_19_enable_buttons(){
	$(".cjc_8_2_add_body_btn_1").removeAttr("disabled");
	$(".cjc_8_2_add_body_btn_2").removeAttr("disabled");
}
//鼠标单击事件，并且与鼠标长按事件区分开来
function add_mouse_div(x,y) {
	$("#add_mouse_div").css("display","block");
	$("#add_mouse_div").css("left",x+"px");
	$("#add_mouse_div").css("top",y+"px");	
}
function add_mouse_div_name(x,y,name){
	$("#add_mouse_div_name").css("display","block");
	$("#add_mouse_div_name").css("left",x+"px");
	$("#add_mouse_div_name").css("top",y+"px");
	$("#add_mouse_div_name_1").text(name);
}
function handleClick(recognizer) {
	var x = recognizer.clientX,
		y = recognizer.clientY;//获取单击位置在屏幕的坐标
	$("#add_mouse_div").css("display","none");
	var pickList = wwd.pick(wwd.canvasCoordinates(x, y));//将获取到的坐标转化为worldWind的坐标
	if (pickList.objects.length == 1 && pickList.objects[0].isTerrain) {
		var position = pickList.objects[0].position;
		if(isGetcountry&&isNoBox){
			/*$.get("https://api.map.baidu.com/geocoder/v2/",{
				"ak":"1ok5MbxZMMA9ywQ9nHBhSwPl9O4mgtAM",
				"location":position.latitude+","+position.longitude,
				"output":"json"
				},function(data,status){
					let cjc_data=JSON.parse(data).result.addressComponent;
					if(wwd.navigator.range>=6000000){
						console.log(cjc_data.country);
						if(cjc_data.country){
							add_title_box(cjc_data.country);
						}
					}else{
						console.log(cjc_data.city);
						if(cjc_data.city){
							add_title_box(cjc_data.city);
						}
					}	
				}
			);*/
			isNoBox=false;
			setTimeout(function(){isNoBox=true;},1000);
			$.ajax({
				type:"GET",
				url:"https://api.map.baidu.com/geocoder/v2/",
				data:{
				"ak":"1ok5MbxZMMA9ywQ9nHBhSwPl9O4mgtAM",
				"location":position.latitude+","+position.longitude,
				"output":"json"
				},
				dataType:"jsonp",
				jsonp:"callback",
				success:function(data){
					console.log(data);
					var cjc_data=data.result.addressComponent;
					if(wwd.navigator.range>=3000000){
						console.log(cjc_data.country);
						if(cjc_data.country){
							add_title_box(cjc_data.country);
						}
					}
					else{
						/*if(cjc_data.province){
							console.log(cjc_data.city);
							add_title_box(cjc_data.city);
						}else if(cjc_data.city){
							console.log(cjc_data.city);
							add_title_box(cjc_data.city);
						}*/
						console.log(cjc_data.city);
						add_title_box(cjc_data.city);
					}
				}
			});
		}
		if(isStartAddPoints){
		   cjc_8_8_point=position;
		   cjc_8_8_open_add_point();
		   isStartAddPoints=false;
		   $("#canvasOne").css("cursor","default");
		   return;
	   }
		if(isSetMiddlePoint){
			cjc_8_8_point=position;
			$(".cjc_8_9_addPictures").css("display","block");
			$("#cjc_9_12_input").val(position.latitude+","+position.longitude);
			isSetMiddlePoint=false;
			$("#canvasOne").css("cursor","default");
		   return;
		}
		if(starPush){//开始画路径的事件
			if(last_layer){
				wwd.removeLayer(last_layer);
				wwd.redraw();
			}
			pathPositions.push(new WorldWind.Position(position.latitude, position.longitude, 1e4));
			//将鼠标点击事件获取到的坐标传入坐标数组当中
			if(pathPositions.length<2){
				return;
			}

			//路径对象的参数
			var pathAttributes = new WorldWind.ShapeAttributes();
			pathAttributes.outlineColor = hexToRgba($("#cjc_9_18_color_1").val(),1);
			pathAttributes.drawVerticals = true; // draw verticals only when extruding
			//path.attributes = pathAttributes;
			
			var path = new WorldWind.Path(pathPositions, pathAttributes);//实例化一个路径对象
			path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
			path.pathType=WorldWind.LINEAR;
			path.followTerrain = true;
			path.extrude = true; // make it a curtain
			path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
			
			var highlightAttributes = new WorldWind.ShapeAttributes(pathAttributes);
			highlightAttributes.outlineColor=new WorldWind.Color(1, 1, 1, 1);
			path.highlightAttributes=highlightAttributes;

			// 渲染路径对象，并将它添加到worldWind图层中
			
			var pathsLayer = new WorldWind.RenderableLayer();
			pathsLayer.pickEnabled=true;
			pathsLayer.addRenderable(path);
			wwd.addLayer(pathsLayer);
			last_layer=pathsLayer;
		}
		if(isStaraddshapes){//开始画图形事件		
			if(last_po_layer){
				wwd.removeLayer(last_po_layer);
				wwd.redraw();
			}
			shapePositions.push(new WorldWind.Position(position.latitude, position.longitude, 1e4));
			if(shapePositions.length>=3){
			shapePositions_1=[];
			var attributes = new WorldWind.ShapeAttributes(null);
			attributes.outlineWidth =$("#cjc_9_27_select").val()-0;
			attributes.drawOutline =Boolean($("#cjc_9_26_select").val());
			attributes.outlineColor = hexToRgba($("#cjc_9_26_color").val(),1);
			attributes.interiorColor  = hexToRgba($("#cjc_9_18_color_3").val(),1);
					
			var shape = new WorldWind.SurfacePolygon(shapePositions, attributes);
			
			var highlightAttributes = new WorldWind.ShapeAttributes(attributes);
			highlightAttributes.interiorColor = new WorldWind.Color(1, 1, 1, 1);
			//shape.highlighted=true;
			shape.highlightAttributes = highlightAttributes;
			var shapeLayer = new WorldWind.RenderableLayer();
			shapeLayer.pickEnabled=true;
			shapeLayer.addRenderable(shape);
			wwd.addLayer(shapeLayer);
			last_po_layer=shapeLayer;
			}else if($("#cjc_9_26_select").val()){			
				shapePositions_1.push(new WorldWind.Position(position.latitude, position.longitude, 1e4));
				var path = new WorldWind.Path(shapePositions_1, null);//实例化一个路径对象
				path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
				path.pathType=WorldWind.GREAT_CIRCLE;
				path.followTerrain = true;
				path.extrude = true; // make it a curtain
				path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode

				//路径对象的参数
				var pathAttributes = new WorldWind.ShapeAttributes(null);
				pathAttributes.outlineColor = hexToRgba($("#cjc_9_26_color").val(),1);
				pathAttributes.drawVerticals = path.extrude; // draw verticals only when extruding
				path.attributes = pathAttributes;
				// 渲染路径对象，并将它添加到worldWind图层中
				var new_cjc_layer = new WorldWind.RenderableLayer();
				new_cjc_layer.addRenderable(path);
				wwd.addLayer(new_cjc_layer);
				last_po_layer=new_cjc_layer;
			}
		}
		if(isAddText){
			cjc_8_8_point=position;
		   cjc_9_27_open_add_point();
		   isStartAddPoints=false;
		   $("#canvasOne").css("cursor","default");
		   return;
		}
		if(isTurnOnL){
			cjc_get_Tianqi(position);
		}
		if(isStartDriving){
			if(!point_start_10_7){
				point_start_10_7=position;
				 var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				 placemarkAttributes.imageColor = WorldWind.Color.GREEN;
				 placemarkAttributes.imageScale= 0.2;
				 var placemark = new WorldWind.Placemark(new WorldWind.Position(position.latitude, position.longitude, 1e2), false, null);
				 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				 placemark.attributes = placemarkAttributes;
				 placemark.label="起点";
				 layers[20].layer.addRenderable(placemark);
				 wwd.redraw();
			}else{
				point_stop_10_7=position;
				 var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				 placemarkAttributes.imageColor = WorldWind.Color.RED;
				 placemarkAttributes.imageScale= 0.2;
				 var placemark = new WorldWind.Placemark(new WorldWind.Position(position.latitude, position.longitude, 1e2), false, null);
				 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				 placemark.attributes = placemarkAttributes;
				 placemark.label="终点";
				 layers[20].layer.addRenderable(placemark);
				 wwd.redraw();
				isStartDriving=false;
				cjc_10_7_driving(point_start_10_7,point_stop_10_7);
			}
		}
	}
}
function cjc_8_8_close_edit(){
	$(".cjc_8_8_edit").css("display","none");
}
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
function cjc_9_27_open_add_point(){
	$("#cjc_9_18_text").val("文本标注");
	$(".cjc_9_18_addText").css("display","block");
}
function cjc_8_8_open_add_point(){
	$(".cjc_8_7_addPoints").css("display","block");
}
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
function cjc_9_18_addText_new(){
	isAddText=true;
	$("#canvasOne").css("cursor","crosshair");
	cjc_9_19_disable_buttons();
}
function cjc_9_18_addText_dd(){
	$(".cjc_9_18_addText").css("display","none");	
	cjc_9_19_enable_buttons();
	
	
	 var textAttr=new WorldWind.TextAttributes();
	
	 //textAttr.font.size=
	 var placemark = new WorldWind.GeographicText (new WorldWind.Position(cjc_8_8_point.latitude, cjc_8_8_point.longitude, 1e2), textAttr);
	 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
	 placemark.text =$("#cjc_9_18_text").val();
	 placemark.attributes.color=hexToRgba($("#cjc_9_18_color_6").val(),1);
	 placemark.attributes.scale=$("#cjc_9_18_select_11").val()-0;
	  var textAttr_highLight=new WorldWind.TextAttributes();
	 textAttr_highLight.color=new WorldWind.Color(1, 0, 0, 1);
	 textAttr_highLight.scale=1.2*$("#cjc_9_18_select_11").val()-0;
	 placemark.highlightAttributes =textAttr_highLight;
	 
	
	 var pointLayer_9_24=new WorldWind.RenderableLayer();
	 pointLayer_9_24.addRenderable(placemark);
	 wwd.addLayer(pointLayer_9_24);
}
function cjc_8_8_addPoints(cjclatlng){
	 var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	 placemarkAttributes.imageScale = $("#cjc_8_8_select_1").val();
     placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
	 placemarkAttributes.imageColor = hexToRgba($("#cjc_8_8_colorinput_1").val(),0.8);
	 var placemark = new WorldWind.Placemark(new WorldWind.Position(cjclatlng.latitude, cjclatlng.longitude, 1e2), false, null);
	 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
     placemarkAttributes.imageSource = cjc_9_9_src;
	 placemarkAttributes.labelAttributes.color=hexToRgba($("#cjc_9_5_color_select").val(),0.8);
	 placemarkAttributes.labelAttributes.scale=$("#cjc_8_8_select_2").val();
     placemark.attributes = placemarkAttributes;
	 var highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
     highlightAttributes.imageScale = 1.2;
     placemark.highlightAttributes = highlightAttributes;
	 placemark.label=cjc_point_cont;
	 //placemark.eyeDistanceScaling =true;
	 //placemark.eyeDistanceScalingThreshold=wwd.navigator.range;
	// placemark.userProperties.addEventListener("click",function(){console.log("ok");});
	
	 var pointLayer_9_24=new WorldWind.RenderableLayer();
	 //console.log(placemark);
	// console.log(pointLayer_9_24);
	 pointLayer_9_24.addRenderable(placemark);
	 wwd.addLayer(pointLayer_9_24);
}
function hexToRgba(hex, opacity) { 
var color_9_24=new WorldWind.Color.colorFromBytes(parseInt("0x" + hex.slice(1, 3)),parseInt("0x" + hex.slice(3, 5)), parseInt("0x" + hex.slice(5, 7)),255*opacity);
return color_9_24;
//return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
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
document.getElementById("cjc_8_8_colorinput_1").onchange=function(){
	$(".cjc_9_9_img_2").css("filter","drop-shadow("+this.value+" 40px 0)");
	cjc_color=this.value;
}
document.getElementById('shp').addEventListener('change', onChange_cjc);
document.getElementById('shp_9_3').addEventListener('change', onChange_cjc_9_3); 
//添加线条
function cjc_9_18_addLine(){
	starPush=true;
	$('.cjc_9_13_addLine').css('display','none');
	$("#canvasOne").css("cursor","crosshair");
}
function cjc_9_18_addPictures(){
	isStaraddshapes=true;
	$(".cjc_9_18_addPictures").css("display","none");
	$("#canvasOne").css("cursor","crosshair");
}
function onChange_cjc(){
	 var shpFile = document.getElementById('shp').files;
	 var shpfile_shp_name;
	 var formData = new FormData();

    if(shpFile&&shpFile.length<10){
			for(var i=0;i<shpFile.length;i++){
				var fileName=shpFile[i].name.split('.');
				var fileNameCount=fileName.length-1;
				if(fileName[fileNameCount]=="shp"){
					formData.append("shpfile_shp", shpFile[i]);
					shpfile_shp_name=shpFile[i].name;
				}else if(fileName[fileNameCount]=="dbf"){
					formData.append("shpfile_dbf", shpFile[i]);
				}else if(fileName[fileNameCount]=="prj"){
					formData.append("shpfile_prj", shpFile[i]);
				}
			}
			if(formData.get("shpfile_shp")){
			isNeedYun=true;
			saveAsGeojson(formData);
			}else{
				alert("找不到shpfile");
			}
			
		//	saveAsGeojson(shpfile_dbf,shpfile_dbf_name);
		//	saveAsGeojson(shpfile_prj,shpfile_prj_name);
			/*var reader_shp=new FileReader();
			reader_shp.onload=function(data){
				saveAsGeojson(data.target.result,shpfile_shp_name);
			}
			reader_shp.readAsBinaryString(shpfile_shp);
			var reader_dbf=new FileReader();
			reader_dbf.onload=function(data){
				saveAsGeojson(data.target.result,shpfile_dbf_name);
			}
			reader_dbf.readAsBinaryString(shpfile_dbf);
			var reader_prj=new FileReader();
			reader_prj.onload=function(data){
				saveAsGeojson(data.target.result,shpfile_prj_name);
			}
			reader_prj.readAsBinaryString(shpfile_prj);*/
			//saveAsGeojson(a,shpFile.name);
			//setTimeout(function(){
			//	parent.window.cjcNodeRefresh();
			//},500);
			setTimeout(function(){
				parent.window.cjcNodeRefresh();
			},2500);
    }else{
		alert("文件夹为空或文件过多！");
	}
	
	 
}
function onChange_cjc_9_3() {
	var file=document.getElementById('shp_9_3').files[0];
	if(file&&(file.name.split('.')[1]=="kml"||file.name.split('.')[1]=="kmz")){
		var reader = new FileReader();
		var reader_1 = new FileReader();
		reader.onload = function (data) {
		var kmlFilePromise = new WorldWind.KmlFile(data.target.result, []);
		kmlFilePromise.then(function (kmlFile) {
			var renderableLayer = new WorldWind.RenderableLayer("Surface Shapes");
			renderableLayer.addRenderable(kmlFile);
			if(kmlFile.node.getElementsByTagName("latitude").length>0&&kmlFile.node.getElementsByTagName("range").length>0&&kmlFile.node.getElementsByTagName("longitude").length>0){
				wwd.goTo(new WorldWind.Position(kmlFile.node.getElementsByTagName("latitude")[0].innerHTML,kmlFile.node.getElementsByTagName("longitude")[0].innerHTML, kmlFile.node.getElementsByTagName("range")[0].innerHTML));
				if(kmlFile.node.getElementsByTagName("tilt").length>0){
					wwd.navigator.tilt = kmlFile.node.getElementsByTagName("tilt")[0].innerHTML;
				}
			}else{
				var posi=kmlFile.node.getElementsByTagName("coordinates")[0].innerHTML.replace(/^\s*/,"").split(' ');
				var posit=posi[0].split(',');
				wwd.goTo(new WorldWind.Position(posit[1],posit[0],1e4));
			}
			wwd.addLayer(renderableLayer);
			wwd.redraw();
			
		});
				//	setTimeout(function(){
					//	parent.window.cjcNodeRefresh();
				//	},500); 
					//saveAsGeojson_kml(data.target.result,file.name);
		}
		reader.readAsDataURL(file);
		reader_1.onload = function (data) {
			saveAsGeojson_kml(data.target.result,file.name);
			setTimeout(function(){
				parent.window.cjcNodeRefresh();
			},2500); 
		}
		reader_1.readAsText(file);
	}else{
		alert("不支持的文件类型！");
	}
}
function saveAsGeojson_kml(mydata,myname){
	var newMyName=myname.split('.');
	$.post("geojsonSave_kml.php",{
		"mydata":mydata,
		"myname":myname,
		"myNewName":newMyName[0]},
		function(data,status){
		  //console.log(data);
    });
}

var GeojsonConfigurationCallback_17 = function (geometry, properties) {
	var configuration = {};
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
		placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.5);
	placemarkAttributes.imageScale = 0.05;
	placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
	placemarkAttributes.imageColor = WorldWind.Color.WHITE;
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

	if (geometry.isPointType() || geometry.isMultiPointType()) {
		configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

		if (properties && (properties.name || properties.Name || properties.NAME)) {
			configuration.name = properties.name || properties.Name || properties.NAME;
		}
		if (properties && properties.POP_MAX) {
			var population = properties.POP_MAX;
			configuration.attributes.imageScale = 0.01 * Math.log(population);
		}
	}
	else if (geometry.isLineStringType() || geometry.isMultiLineStringType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);
		configuration.attributes.drawOutline = true;
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.1 * configuration.attributes.interiorColor.red,
			0.3 * configuration.attributes.interiorColor.green,
			0.7 * configuration.attributes.interiorColor.blue,
			1.0);
		configuration.attributes.outlineWidth = 1.0;
	}
	else if (geometry.isPolygonType() || geometry.isMultiPolygonType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);

		// Fill the polygon with a random pastel color.
		configuration.attributes.interiorColor = new WorldWind.Color(
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.1);
		// Paint the outline in a darker variant of the interior color.
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.5 * configuration.attributes.interiorColor.red,
			0.5 * configuration.attributes.interiorColor.green,
			0.5 * configuration.attributes.interiorColor.blue,
			1.0);
	}
	return configuration;
};
var GeojsonConfigurationCallback_18 = function (geometry, properties) {
	var configuration = {};
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
		placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.5);
	placemarkAttributes.imageScale = 0.1;
	placemarkAttributes.labelAttributes.color=WorldWind.Color.RED;
	placemarkAttributes.imageColor = WorldWind.Color.RED;
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

	if (geometry.isPointType() || geometry.isMultiPointType()) {
		configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

		if (properties && (properties.name || properties.Name || properties.NAME)) {
			configuration.name = properties.name || properties.Name || properties.NAME;
		}
		if (properties && properties.POP_MAX) {
			var population = properties.POP_MAX;
			configuration.attributes.imageScale = 0.01 * Math.log(population);
		}
	}
	else if (geometry.isLineStringType() || geometry.isMultiLineStringType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);
		configuration.attributes.drawOutline = true;
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.1 * configuration.attributes.interiorColor.red,
			0.3 * configuration.attributes.interiorColor.green,
			0.7 * configuration.attributes.interiorColor.blue,
			1.0);
		configuration.attributes.outlineWidth = 1.0;
	}
	else if (geometry.isPolygonType() || geometry.isMultiPolygonType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);

		// Fill the polygon with a random pastel color.
		configuration.attributes.interiorColor = new WorldWind.Color(
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.1);
		// Paint the outline in a darker variant of the interior color.
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.5 * configuration.attributes.interiorColor.red,
			0.5 * configuration.attributes.interiorColor.green,
			0.5 * configuration.attributes.interiorColor.blue,
			1.0);
	}

	return configuration;
};
var GeojsonConfigurationCallback_19 = function (geometry, properties) {
	var configuration = {};
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
		placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.5);
	placemarkAttributes.imageScale = 0.2;
	placemarkAttributes.labelAttributes.color=WorldWind.Color.YELLOW;
	placemarkAttributes.imageColor = WorldWind.Color.YELLOW;
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

	if (geometry.isPointType() || geometry.isMultiPointType()) {
		configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

		if (properties && (properties.name || properties.Name || properties.NAME)) {
			configuration.name = properties.name || properties.Name || properties.NAME;
		}
		if (properties && properties.POP_MAX) {
			var population = properties.POP_MAX;
			configuration.attributes.imageScale = 0.01 * Math.log(population);
		}
	}
	else if (geometry.isLineStringType() || geometry.isMultiLineStringType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);
		configuration.attributes.drawOutline = true;
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.1 * configuration.attributes.interiorColor.red,
			0.3 * configuration.attributes.interiorColor.green,
			0.7 * configuration.attributes.interiorColor.blue,
			1.0);
		configuration.attributes.outlineWidth = 1.0;
	}
	else if (geometry.isPolygonType() || geometry.isMultiPolygonType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);

		// Fill the polygon with a random pastel color.
		configuration.attributes.interiorColor = new WorldWind.Color(
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.1);
		// Paint the outline in a darker variant of the interior color.
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.5 * configuration.attributes.interiorColor.red,
			0.5 * configuration.attributes.interiorColor.green,
			0.5 * configuration.attributes.interiorColor.blue,
			1.0);
	}

	return configuration;
};
 var shapeConfigurationCallback_Chinese = function (attributes, record) {
	
	var configuration = {};
	var aa=attributes.values.name|| attributes.values.Name || attributes.values.NAME;
	var new_name=unescape(aa.replace(/\\u/g, '%u'));
	configuration.name = new_name;
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	placemarkAttributes.imageScale = 0.025;
	placemarkAttributes.imageColor = WorldWind.Color.WHITE;
	placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
		WorldWind.OFFSET_FRACTION, 0.5,
		WorldWind.OFFSET_FRACTION, 1.0);
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

	if (record.isPointType()) {
		configuration.name = attributes.values.name || attributes.values.Name || attributes.values.NAME;

		configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

		if (attributes.values.pop_max) {
			var population = attributes.values.pop_max;
			configuration.attributes.imageScale = 0.01 * Math.log(population);
		}
	}else if (record.isPolylineType()) {
		var pathAttributes = new WorldWind.ShapeAttributes(null);
		pathAttributes.drawVerticals = true;
		pathAttributes.outlineColor = WorldWind.Color.YELLOW;

		configuration.attributes=pathAttributes;
   }else if (record.isPolygonType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);
		configuration.highlightAttributes=new WorldWind.ShapeAttributes(null);
		configuration.highlightAttributes.interiorColor=WorldWind.Color.WHITE;
		configuration.highlightAttributes.outlineColor=WorldWind.Color.YELLOW;
		// Fill the polygon with a random pastel color.
		configuration.attributes.interiorColor = WWC_random(configuration.name);

		// Paint the outline in a darker variant of the interior color.
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.5 * configuration.attributes.interiorColor.red,
			0.5 * configuration.attributes.interiorColor.green,
			0.5 * configuration.attributes.interiorColor.blue,
			1.0);
	}

	return configuration;
};
 var shapeConfigurationCallback = function (attributes, record) {
	 shp_view=record.boundingRectangle;
	 if(isNeedYun){
		wwd.goTo(new WorldWind.Position(shp_view[0],shp_view[2],2e7));
		isNeedYun=false;
	 }
	var configuration = {};
	configuration.name = attributes.values.name || attributes.values.Name || attributes.values.NAME;
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	placemarkAttributes.imageScale = 0.025;
	placemarkAttributes.imageColor = WorldWind.Color.WHITE;
	placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
		WorldWind.OFFSET_FRACTION, 0.5,
		WorldWind.OFFSET_FRACTION, 1.0);
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

	if (record.isPointType()) {
		configuration.name = attributes.values.name || attributes.values.Name || attributes.values.NAME;

		configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

		if (attributes.values.pop_max) {
			var population = attributes.values.pop_max;
			configuration.attributes.imageScale = 0.01 * Math.log(population);
		}
	}else if (record.isPolylineType()) {
		var pathAttributes = new WorldWind.ShapeAttributes(null);
		pathAttributes.drawVerticals = true;
		pathAttributes.outlineColor = WorldWind.Color.YELLOW;

		configuration.attributes=pathAttributes;
   }else if (record.isPolygonType()) {
		configuration.attributes = new WorldWind.ShapeAttributes(null);

		// Fill the polygon with a random pastel color.
		configuration.attributes.interiorColor = new WorldWind.Color(
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			0.375 + 0.5 * Math.random(),
			1.0);

		// Paint the outline in a darker variant of the interior color.
		configuration.attributes.outlineColor = new WorldWind.Color(
			0.5 * configuration.attributes.interiorColor.red,
			0.5 * configuration.attributes.interiorColor.green,
			0.5 * configuration.attributes.interiorColor.blue,
			1.0);
	}

	return configuration;
};

function saveAsGeojson(mydata){
		$.ajax({
			url:"geojsonSave.php",
			type:"post",
			data:mydata,
			contentType: false,
			processData: false,
			success:function(){
			var worldLayer = new WorldWind.RenderableLayer("Countries");
			var worldShapefile = new WorldWind.Shapefile("http://localhost:8079/data/shapefile/"+mydata.get("shpfile_shp").name);
			worldShapefile.load(null, shapeConfigurationCallback, worldLayer);
			wwd.addLayer(worldLayer);
			wwd.redraw();
			}
		});
}
function cjc_9_12_addPictures(){
	cjc_9_19_disable_buttons();
	$(".cjc_8_9_addPictures").css("display","block");
	$("#cjc_9_12_input").val(wwd.navigator.lookAtLocation.latitude+","+wwd.navigator.lookAtLocation.longitude);
	$("#cjc_10_1_input_0").val("图片"+cjc_num_count);
}
function cjc_9_12_setPoint(){
	isSetMiddlePoint=true;
	$(".cjc_8_9_addPictures").css("display","none");
	$("#canvasOne").css("cursor","crosshair");
}
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
function cjc_9_12_start_add_pictures(){
	var point=$("#cjc_9_12_input").val().split(',');
	var scale=$("#cjc_9_12_select_1").val();
	cjc_9_19_enable_buttons();
	$(".cjc_8_9_addPictures").css("display","none");
	if(cjc_9_12_file){
		var img=new Image();
		img.src=cjc_9_12_file;
		img.onload=function(){	
			var a1=point[0]-0+img.width*0.01*scale;
			var a2=point[0]-img.width*0.01*scale;
			var b1=point[1]-0+img.height*0.01*scale;
			var b2=point[1]-img.height*0.01*scale;
			a1=a1<-90?(a1+90):a1;
			a2=a2<-90?(a2+90):a2;
			a1=a1>90?(a1-90):a1;
			a2=a2>90?(a2-90):a2;
			b1=b1<-180?(b1+180):b1;
			b2=b2<-180?(b2+180):b2;
			b1=b1>180?(b1-180):b1;
			b2=b2>180?(b2-180):b2;
			if(a1>a2){
				var temp=a1;
				a1=a2;
				a2=temp;
			}
			if(b1>b2){
				var temp=b1;
				b1=b2;
				b2=temp;
			}
			cjc_num_count++;
			var surfaceImage1 = new WorldWind.SurfaceImage(new WorldWind.Sector(a1, a2, b1,b2),cjc_9_12_file);//40, 50, -120, -100
			var surfaceImageLayer = new WorldWind.RenderableLayer();
			surfaceImageLayer.displayName = "Surface Images";
			surfaceImage1.enabled=false;
			surfaceImageLayer.addRenderable(surfaceImage1);
			
			
			var placemark = new WorldWind.Placemark(new WorldWind.Position(point[0], point[1], 1e2), true, null);
			placemark.label =$("#cjc_10_1_input_0").val();
			placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
			
			var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
			placemarkAttributes.imageOffset = new WorldWind.Offset(
				WorldWind.OFFSET_FRACTION, 0.3,
				WorldWind.OFFSET_FRACTION, 0.0);
			placemarkAttributes.imageColor = WorldWind.Color.WHITE;
			placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
				WorldWind.OFFSET_FRACTION, 0.5,
				WorldWind.OFFSET_FRACTION, 1.0);
			placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
			placemarkAttributes.drawLeaderLine = true;
			placemarkAttributes.leaderLineAttributes.outlineColor = WorldWind.Color.RED;
			placemarkAttributes.imageScale = 1;
			placemarkAttributes.imageSource=WorldWind.configuration.baseUrl+"images/pushpins/castshadow-white.png";
			placemark.attributes = placemarkAttributes;
            var highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
            highlightAttributes.imageScale = 1.2;
            placemark.highlightAttributes = highlightAttributes;
			surfaceImageLayer.addRenderable(placemark);
			wwd.addLayer(surfaceImageLayer);
		}
	}
}
function shapefile_show(node_id,node_name){
	$.post("JudgeShapefile.php",{
		"nodeId":node_id,
		"nodeName":node_name
	},function(data,status){
		if(data){
			isNeedYun=true;
			var worldLayer = new WorldWind.RenderableLayer("Countries_shp");
			var worldShapefile = new WorldWind.Shapefile("http://localhost:8079/data/shapefile/"+node_name+".shp");
			worldShapefile.load(null, shapeConfigurationCallback, worldLayer);
			wwd.addLayer(worldLayer);
			wwd.redraw();
			json_shapefiles[node_id]=worldLayer;
		}else{
			
		}
	});
}
function shapefile_hide(node_id){
	wwd.removeLayer(json_shapefiles[node_id]);
	wwd.redraw();
}
function kml_show(node_id,node_name){
	$.post("JudgeKML.php",{
		"nodeId":node_id,
		"nodeName":node_name
	},function(data,status){
		if(data){
			var kmlFilePromise = new WorldWind.KmlFile("http://localhost:8079/data/kml/"+node_name+".kml", []);
			kmlFilePromise.then(function (kmlFile) {
			var renderableLayer = new WorldWind.RenderableLayer("Surface Shapes");
			renderableLayer.addRenderable(kmlFile);
			if(kmlFile.node.getElementsByTagName("latitude").length>0&&kmlFile.node.getElementsByTagName("range").length>0&&kmlFile.node.getElementsByTagName("longitude").length>0){
				wwd.goTo(new WorldWind.Position(kmlFile.node.getElementsByTagName("latitude")[0].innerHTML,kmlFile.node.getElementsByTagName("longitude")[0].innerHTML, kmlFile.node.getElementsByTagName("range")[0].innerHTML));
				if(kmlFile.node.getElementsByTagName("tilt").length>0){
					wwd.navigator.tilt = kmlFile.node.getElementsByTagName("tilt")[0].innerHTML;
				}
			}else{
				var posi=kmlFile.node.getElementsByTagName("coordinates")[0].innerHTML.replace(/^\s*/,"").split(' ');
				var posit=posi[0].split(',');
				wwd.goTo(new WorldWind.Position(posit[1],posit[0],1e7));
			}
			wwd.addLayer(renderableLayer);
			json_shapefiles[node_id]=renderableLayer;
			wwd.redraw();
			});
		}
	});
}
function kml_hide(node_id,node_name){
	wwd.removeLayer(json_shapefiles[node_id]);
	wwd.redraw();
}
function cjc_get_Tianqi(po){
	if(!po){
		po={
			"longitude":wwd.navigator.lookAtLocation.longitude,
			"latitude":wwd.navigator.lookAtLocation.latitude
			};
	}
	var geocoder= new AMap.Geocoder();
	var position=new AMap.LngLat(po.longitude,po.latitude);
	geocoder.getAddress(position, function(status, result) {
            if (status === 'complete'&&result.regeocode) {
				var city;
				if(result.regeocode.addressComponent.city){
					city = result.regeocode.addressComponent.city;
				}else if(result.regeocode.addressComponent.province){
					city = result.regeocode.addressComponent.province;
				}
				var weather = new AMap.Weather();
				weather.getLive(city, function(err, data) {
					  if (!err) {
						cjc_textLayer.removeAllRenderables();
						wwd.redraw();
						var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94),"城市/区: "+data.city);
						var screenText_1 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.92),"天气: "+data.weather);
						var screenText_2 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.90),"温度: "+data.temperature);
						var screenText_3 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.88),"风向: "+data.windDirection);
						var screenText_4 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.86),"风力: "+data.windPower);
						var screenText_5 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.84),"空气湿度: "+data.humidity);
						var screenText_6 = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.82),"发布时间: "+data.reportTime);
						var textAttributes = new WorldWind.TextAttributes();
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94);
						textAttributes.color = WorldWind.Color.WHITE;
						screenText.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.92);						
						screenText_1.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.90);
						screenText_2.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.88);
						screenText_3.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.86);
						screenText_4.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.84);
						screenText_5.attributes = textAttributes;
						textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.82);
						screenText_6.attributes = textAttributes;
						cjc_textLayer.addRenderable(screenText);
						cjc_textLayer.addRenderable(screenText_1);
						cjc_textLayer.addRenderable(screenText_2);
						cjc_textLayer.addRenderable(screenText_3);
						cjc_textLayer.addRenderable(screenText_4);
						cjc_textLayer.addRenderable(screenText_5);
						cjc_textLayer.addRenderable(screenText_6);
						
						wwd.redraw();
					  }
				});
				
            }else{
				cjc_textLayer.removeAllRenderables();
				wwd.redraw();
				var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94),"暂无数据");
				var textAttributes = new WorldWind.TextAttributes();
				textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94);
				textAttributes.color = WorldWind.Color.WHITE;
				screenText.attributes = textAttributes;
				cjc_textLayer.addRenderable(screenText);
				
				wwd.redraw();
			}
        });
}
function cjc_hide_Tianqi(){
	cjc_textLayer.removeAllRenderables();
	wwd.redraw();
}
function cjc_10_7_driving(start_p,stop_p){
	route_path.push(new WorldWind.Position(start_p.latitude, start_p.longitude, 1e4));
	route_path.push(new WorldWind.Position(stop_p.latitude, stop_p.longitude, 1e4));
	var pathAttributes = new WorldWind.ShapeAttributes();
	pathAttributes.outlineColor = WorldWind.Color.WHITE;
	pathAttributes.drawVerticals = true; // draw verticals only when extruding
	var path = new WorldWind.Path(route_path, pathAttributes);//实例化一个路径对象
	path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
	path.pathType=WorldWind.LINEAR;
	path.followTerrain = true;
	path.extrude = true; // make it a curtain
	path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
	layers[20].layer.addRenderable(path);
	point_start_10_7="";
	point_stop_10_7="";
	route_path=[];
}
function cjc_10_7_startDriv(){
	route_path=[];
	//DrivingType=name;
	layers[20].layer.removeAllRenderables();
	isStartDriving=true;
	layers[20].layer.enabled=true;
	wwd.redraw();
}
function cjc_10_7_stopDriv(){
	route_path=[];
	layers[20].layer.removeAllRenderables();
	isStartDriving=false;
	layers[20].layer.enabled=false;
	wwd.redraw();
	point_start_10_7="";
	point_stop_10_7="";
}
/*function cjc_10_7_driving(start_p,stop_p){
	switch(DrivingType){
		case "驾车路线":var driving = new AMap.Driving({}); driving.search(new AMap.LngLat(start_p.longitude, start_p.latitude), new AMap.LngLat(stop_p.longitude, stop_p.latitude),function(status,result){showResult(status,result);});break;
		case "步行路线":var driving = new AMap.Walking({}); driving.search(new AMap.LngLat(start_p.longitude, start_p.latitude), new AMap.LngLat(stop_p.longitude, stop_p.latitude),function(status,result){showResult(status,result);});break;
		case "骑行路线":var driving = new AMap.Riding({}); driving.search(new AMap.LngLat(start_p.longitude, start_p.latitude), new AMap.LngLat(stop_p.longitude, stop_p.latitude),function(status,result){showResult_riding(status,result);});break;
	}
	function showResult(status,result){
		if(status=="complete"&&result.routes[0].steps.length<=46){
			route_path.push(new WorldWind.Position(start_p.latitude, start_p.longitude, 1e4));
			
			for(var i=0;i<result.routes[0].steps.length;i++){
				var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94-0.02*i),result.routes[0].steps[i].instruction);
				var textAttributes = new WorldWind.TextAttributes();
				textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94-0.02*i);
				textAttributes.color = WorldWind.Color.WHITE;
				screenText.attributes = textAttributes;				
				var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				placemarkAttributes.imageColor = WorldWind.Color.YELLOW;
				placemarkAttributes.imageScale= 0.1;
				var placemark = new WorldWind.Placemark(new WorldWind.Position(result.routes[0].steps[i].start_location.lat,result.routes[0].steps[i].start_location.lng, 1e2), false, null);
				placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				placemark.attributes = placemarkAttributes;
				placemark.label="点"+i;
				route_path.push(new WorldWind.Position(result.routes[0].steps[i].start_location.lat,result.routes[0].steps[i].start_location.lng, 1e4));
				layers[20].layer.addRenderable(placemark);			
				layers[20].layer.addRenderable(screenText);			
			}
			route_path.push(new WorldWind.Position(stop_p.latitude, stop_p.longitude, 1e4));
			var pathAttributes = new WorldWind.ShapeAttributes();
			pathAttributes.outlineColor = WorldWind.Color.BLUE;
			pathAttributes.drawVerticals = true; // draw verticals only when extruding
			var path = new WorldWind.Path(route_path, pathAttributes);//实例化一个路径对象
			path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
			path.pathType=WorldWind.LINEAR;
			path.followTerrain = true;
			path.extrude = true; // make it a curtain
			path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
			layers[20].layer.addRenderable(path);
			wwd.redraw();
		}else{
			var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94),"线路过长或超出国内，暂无数据");
			var textAttributes = new WorldWind.TextAttributes();
			textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94);
			textAttributes.color = WorldWind.Color.WHITE;
			screenText.attributes = textAttributes;				
			layers[20].layer.addRenderable(screenText);	
			wwd.redraw();
		}
	}
	function showResult_riding(status,result){
		if(status=="complete"&&result.routes[0].rides.length<=46){
			route_path.push(new WorldWind.Position(start_p.latitude, start_p.longitude, 1e4));
			
			for(var i=0;i<result.routes[0].rides.length;i++){
				var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94-0.02*i),result.routes[0].rides[i].instruction);
				var textAttributes = new WorldWind.TextAttributes();
				textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94-0.02*i);
				textAttributes.color = WorldWind.Color.WHITE;
				screenText.attributes = textAttributes;				
				var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				placemarkAttributes.imageColor = WorldWind.Color.YELLOW;
				placemarkAttributes.imageScale= 0.1;
				var placemark = new WorldWind.Placemark(new WorldWind.Position(result.routes[0].rides[i].start_location.lat,result.routes[0].rides[i].start_location.lng, 1e2), false, null);
				placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				placemark.attributes = placemarkAttributes;
				placemark.label="点"+i;
				route_path.push(new WorldWind.Position(result.routes[0].rides[i].start_location.lat,result.routes[0].rides[i].start_location.lng, 1e4));
				layers[20].layer.addRenderable(placemark);			
				layers[20].layer.addRenderable(screenText);			
			}
			route_path.push(new WorldWind.Position(stop_p.latitude, stop_p.longitude, 1e4));
			var pathAttributes = new WorldWind.ShapeAttributes();
			pathAttributes.outlineColor = WorldWind.Color.BLUE;
			pathAttributes.drawVerticals = true; // draw verticals only when extruding
			var path = new WorldWind.Path(route_path, pathAttributes);//实例化一个路径对象
			path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
			path.pathType=WorldWind.LINEAR;
			path.followTerrain = true;
			path.extrude = true; // make it a curtain
			path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
			layers[20].layer.addRenderable(path);
			wwd.redraw();
		}else{
			var screenText = new WorldWind.ScreenText(new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.01, WorldWind.OFFSET_FRACTION, 0.94),"线路过长或超出国内，暂无数据");
			var textAttributes = new WorldWind.TextAttributes();
			textAttributes.offset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION,0.01, WorldWind.OFFSET_FRACTION, 0.94);
			textAttributes.color = WorldWind.Color.WHITE;
			screenText.attributes = textAttributes;				
			layers[20].layer.addRenderable(screenText);	
			wwd.redraw();
		}
	}
	point_start_10_7="";
	point_stop_10_7="";
	route_path=[];
}
function cjc_10_7_startDriv(name){
	route_path=[];
	DrivingType=name;
	layers[20].layer.removeAllRenderables();
	isStartDriving=true;
	layers[20].layer.enabled=true;
	wwd.redraw();
}
function cjc_10_7_stopDriv(){
	route_path=[];
	layers[20].layer.removeAllRenderables();
	isStartDriving=false;
	layers[20].layer.enabled=false;
	wwd.redraw();
	point_start_10_7="";
	point_stop_10_7="";
}*/
function add_title_box(myName){	
	$.get("./interpretation/"+myName+".html", function(){
			diag.URL = "./interpretation/"+myName+".html";
			diag.show();
			//window.open("./help.html");
	},"html");

}
function WWC_random(name){
	for(var i=0;i<cjc_10_10_QiHou.length;i++){
			if(cjc_10_10_QiHou[i].cjc_name==name){
				return cjc_10_10_QiHou[i].cjc_color;
			}
	}
	var cjc_10_10_color=new WorldWind.Color(
			 Math.random(),
			 Math.random(),
			 Math.random(),
			0.8);
	cjc_10_10_QiHou.push({
		cjc_name:name,
		cjc_color:cjc_10_10_color
	});
	return cjc_10_10_color;
}
function loadData_3_8() {
$.get({
	url:'data/cities_list.json',
	success: function(data) {	
	//console.log(data);
		var cities =JSON.parse(JSON.stringify(data));
		var cityPos = data_3_6.cityPos={};
		var html = [5];
		for (var i = 0; i < cities.length; i++) {
			var city = cities[i],
				country = city[0],
				cityName = city[1];
			if (country == "China") {
				if(cityName=="Beijing"){
					html[0]=('<label for=\'checkbox-' +
						cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
						cityName + '\' /> ' + fanyi_3_9(cityName) + '</label>');
					cityPos[cityName] = [city[2],city[3]];
				}else if(cityName=="Shenyang"){
					html[1]=('<label for=\'checkbox-' +
						cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
						cityName + '\' /> ' + fanyi_3_9(cityName) + '</label>');
					cityPos[cityName] = [city[2],city[3]];
				}else if(cityName=="Luoyang"){
					html[2]=('<label for=\'checkbox-' +
						cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
						cityName + '\' /> ' + fanyi_3_9(cityName) + '</label>');
					cityPos[cityName] = [city[2],city[3]];
				}else if(cityName=="Jiuzhaigou"){
					html[3]=('<label for=\'checkbox-' +
						cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
						cityName + '\' /> ' + fanyi_3_9(cityName) + '</label>');
					cityPos[cityName] = [city[2],city[3]];
				}else if(cityName=="Wuyishan"){
					html[4]=('<label for=\'checkbox-' +
						cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
						cityName + '\' /> ' + fanyi_3_9(cityName) + '</label>');
					cityPos[cityName] = [city[2],city[3]];
				}
			}
		}
		document.getElementById("city-list").innerHTML='<li>' + html.join('</li><li>') +'</li>';
		document.getElementById("city-list").addEventListener("change",function(e){
			var cityName=e.target.id.split('-')[1];
			if(e.target.checked){
				//console.log(cityName+"checked");
				add_air_line(cityName);
			}else{
				//console.log(cityName+"unchecked");
				remove_air_line(cityName);
			}
			
		});
		$.get({
			url: 'data/cities.json',
			success: function(data) {
				data_3_6.cities = JSON.parse(JSON.stringify(data));
				//Request airline data
				$.get({
					url:"data/airlines/China.json",
					success:function(data){
						var world_air=JSON.parse(JSON.stringify(data)),
						china_air=data_3_6.China_air={};
						for(var i=0;i<world_air.length;i++){
							if(world_air[i][2]=="china"){
								china_air[world_air[i][1]]=[];
							}
						}
						for(var i=0;i<world_air.length;i++){
							if(world_air[i][2]=="china"){
								var count=0;
								var test_s=world_air[i][4]+"^"+world_air[i][3];
								for(var j=0;j<china_air[world_air[i][1]].length;j++){
									if(china_air[world_air[i][1]][j]==test_s){
										count--;
									}else{
										count++;
									}
								}
								if(count==china_air[world_air[i][1]].length){
									china_air[world_air[i][1]].push(test_s);
								}
							}
						}
						//console.log(data_3_6);

					}
				});
			}
		});
	}
});
}
function add_air_line(cityName){
	air_interval_3_9[cityName]=[];
	count_3_9[cityName]=[];
	model_3_9[cityName]=[];
	//添加起点
	var color_ran=new WorldWind.Color(Math.random(),Math.random(),Math.random(),1);
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
	 placemarkAttributes.imageColor = WorldWind.Color.GREEN;
	 placemarkAttributes.imageScale= 0.2;
	 var placemark = new WorldWind.Placemark(new WorldWind.Position(data_3_6.cityPos[cityName][0], data_3_6.cityPos[cityName][1], 1e2), false, null);
	 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
	 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
	 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
	 placemark.attributes = placemarkAttributes;
	 placemark.label=fanyi_3_9(cityName);
	 placemark.displayName=cityName;
	 layers[30].layer.addRenderable(placemark);
	 var zd=data_3_6.China_air[cityName.toLowerCase()];
	 if(zd){
		 for(var i=0;i<zd.length;i++){
			var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
			 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
			 placemarkAttributes.imageColor = WorldWind.Color.RED;
			 placemarkAttributes.imageScale= 0.2;
			 var placemark = new WorldWind.Placemark(new WorldWind.Position(data_3_6.cities[zd[i]][2], data_3_6.cities[zd[i]][3], 1e2), false, null);
			 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
			 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
			 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
			 placemark.attributes = placemarkAttributes;
			 placemark.label=fanyi_3_9(zd[i].split("^")[1]);
			 placemark.displayName=cityName;
			 layers[30].layer.addRenderable(placemark);
			 cjc_10_7_driving([data_3_6.cityPos[cityName][0], data_3_6.cityPos[cityName][1]],[data_3_6.cities[zd[i]][2], data_3_6.cities[zd[i]][3]],color_ran,cityName);
			 //飞机
			 var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				placemarkAttributes.imageColor = WorldWind.Color.CYAN;
				placemarkAttributes.imageScale= 0.15;
				var placemark = new WorldWind.Placemark(new WorldWind.Position(data_3_6.cityPos[cityName][0], data_3_6.cityPos[cityName][1], 1e2), false, null);
				placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				placemark.attributes = placemarkAttributes;
				//placemark.label="飞机";
				placemark.displayName=cityName;
				layers[30].layer.addRenderable(placemark);
				var scale=250+Math.random()*250;
				count_3_9[cityName][i]=0;
				model_3_9[cityName][i]=true;		
				var temp_interval=setInterval(animate_air(data_3_6.cityPos[cityName][0],data_3_6.cityPos[cityName][1],data_3_6.cities[zd[i]][2],data_3_6.cities[zd[i]][3],cityName,placemark,scale,i),250);
				air_interval_3_9[cityName].push(temp_interval);
		 }
	 }
	 wwd.redraw();
}
function remove_air_line(cityName){
	for(var i in air_interval_3_9[cityName]){
		clearInterval(air_interval_3_9[cityName][i]);
	}
	air_interval_3_9[cityName]=[];
	for(var i in layers[30].layer.renderables){
			while(layers[30].layer.renderables[i]&&layers[30].layer.renderables[i].displayName==cityName){
				layers[30].layer.removeRenderable(layers[30].layer.renderables[i]);
			}
	}
	wwd.redraw();
}
function cjc_10_7_driving(start_p,stop_p,color_ran,cityName){
	var route_path=[];
	route_path.push(new WorldWind.Position(start_p[0], start_p[1], 1e4));
	route_path.push(new WorldWind.Position(stop_p[0], stop_p[1], 1e4));
	var pathAttributes = new WorldWind.ShapeAttributes();
	pathAttributes.outlineColor = color_ran;
	pathAttributes.drawVerticals = true; // draw verticals only when extruding
	var path = new WorldWind.Path(route_path, pathAttributes);//实例化一个路径对象
	path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
	path.pathType=WorldWind.LINEAR;
	path.followTerrain = true;
	path.extrude = true; // make it a curtain
	path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
	path.displayName=cityName;
	layers[30].layer.addRenderable(path);
	route_path=[];
}
function add_airLine_3_8(){
	$(".list-wrapper").css("display","block");
}
function add_shipLine_3_8(){
	$(".list-wrapper_n").css("display","block");
}
function remove_airLine_3_8(){
	$(".list-wrapper").css("display","none");
	layers[30].layer.removeAllRenderables();
	var no_len=document.getElementById("city-list").childNodes.length;
	for(var i=0;i<no_len;i++){
		document.getElementById("city-list").childNodes[i].childNodes[0].childNodes[0].checked=false;
	}
	wwd.redraw();
	for(var i in air_interval_3_9){
		for(var j in air_interval_3_9[i]){
			clearInterval(air_interval_3_9[i][j]);
		}
		air_interval_3_9[i]=[];
	}
}
function remove_shipLine_3_8(){
	$(".list-wrapper_n").css("display","none");
	layers[31].layer.removeAllRenderables();
	var no_len=document.getElementById("city-list_n").childNodes.length;
	for(var i=0;i<no_len;i++){
		document.getElementById("city-list_n").childNodes[i].childNodes[0].childNodes[0].checked=false;
	}
	wwd.redraw();
	for(var i in air_interval_3_9){
		for(var j in air_interval_3_9[i]){
			clearInterval(air_interval_3_9[i][j]);
		}
		air_interval_3_9[i]=[];
	}
}
function ship_line_3_8(){
$.get({
	url:'data/ship_track.json',
	success:function(data){
	var ship_line=JSON.parse(JSON.stringify(data));
	var html=[];
	for(var cityName in ship_line){
		html.push('<label for=\'checkbox-' + cityName + '\'><input type=\'checkbox\' id=\'checkbox-' + cityName + '\' /> ' + cityName + '</label>');
	}
	document.getElementById("city-list_n").innerHTML='<li>' + html.join('</li><li>') +'</li>';
	document.getElementById("city-list_n").addEventListener("change",function(e){
			var cityName=e.target.id.split('-')[1]+"-"+e.target.id.split('-')[2];
			if(e.target.checked){
				//console.log(cityName+"checked");
				add_ship_line(cityName,ship_line);
			}else{
				//console.log(cityName+"unchecked");
				remove_ship_line(cityName);
			}
			
	});
		
	}
});

}
function add_ship_line(lineName,ship_line){
	air_interval_3_9[lineName]=[];
	//添加起点
	var color_ran=new WorldWind.Color(Math.random(),Math.random(),Math.random(),1);
	var route_path=[];
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
	placemarkAttributes.imageColor = WorldWind.Color.GREEN;
	placemarkAttributes.imageScale= 0.2;
	var placemark = new WorldWind.Placemark(new WorldWind.Position(ship_line[lineName][0][1], ship_line[lineName][0][0], 1e2), false, null);
	placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
	placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
	placemark.attributes = placemarkAttributes;
	placemark.label=lineName.split("-")[0];
	placemark.displayName=lineName;
	layers[31].layer.addRenderable(placemark);
	//添加终点
	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
	 placemarkAttributes.imageColor = WorldWind.Color.RED;
	 placemarkAttributes.imageScale= 0.2;
	 var placemark = new WorldWind.Placemark(new WorldWind.Position(ship_line[lineName][ship_line[lineName].length-1][1], ship_line[lineName][ship_line[lineName].length-1][0], 1e2), false, null);
	 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
	 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
	 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
	 placemark.attributes = placemarkAttributes;
	 placemark.label=lineName.split("-")[1];
	 placemark.displayName=lineName;
	 layers[31].layer.addRenderable(placemark);
	for(var i in ship_line[lineName]){
		route_path.push(new WorldWind.Position(ship_line[lineName][i][1], ship_line[lineName][i][0], 1e4));
	}
	var pathAttributes = new WorldWind.ShapeAttributes();
	pathAttributes.outlineColor = color_ran;
	pathAttributes.drawVerticals = true; // draw verticals only when extruding
	var path = new WorldWind.Path(route_path, pathAttributes);//实例化一个路径对象
	path.altitudeMode = WorldWind.CLAMP_TO_GROUND;
	path.pathType=WorldWind.LINEAR;
	path.followTerrain = true;
	path.extrude = true; // make it a curtain
	path.useSurfaceShapeFor2D = true; // use a surface shape in 2D mode
	path.displayName=lineName;
	layers[31].layer.addRenderable(path);
	wwd.redraw();

	var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
	placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
	placemarkAttributes.imageColor = WorldWind.Color.YELLOW;
	placemarkAttributes.imageScale= 0.15;
	var placemark = new WorldWind.Placemark(new WorldWind.Position(ship_line[lineName][0][1], ship_line[lineName][0][0], 1e2), false, null);
	placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
	placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
	placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
	placemark.attributes = placemarkAttributes;
	//placemark.label="轮船";
	placemark.displayName=lineName;
	layers[31].layer.addRenderable(placemark);
	var scale=1+Math.random()*1;
	count_3_9[lineName]=0;
	ship_line_num[lineName]=0;
	var temp_interval=setInterval(animate_ship(route_path,lineName,placemark,scale),100);
	air_interval_3_9[lineName].push(temp_interval);
}
function remove_ship_line(cityName){
	for(var i in air_interval_3_9[cityName]){
		clearInterval(air_interval_3_9[cityName][i]);
	}
	air_interval_3_9[cityName]=[];
	for(var i in layers[31].layer.renderables){
			while(layers[31].layer.renderables[i]&&layers[31].layer.renderables[i].displayName==cityName){
				layers[31].layer.removeRenderable(layers[31].layer.renderables[i]);
			}
	}
	wwd.redraw();
}
function fanyi_3_9(cityName){
	var cityName_n=cityName;
	switch(cityName){
		case "Ganzhou":cityName_n="赣州";break;
		case "ganzhou":cityName_n="赣州";break;
		case "Beijing":cityName_n="北京";break;
		case "beijing":cityName_n="北京";break;
		case "Yinchuan":cityName_n="银川";break;
		case "yinchuan":cityName_n="银川";break;
		case "Hotan":cityName_n="和田";break;
		case "hotan":cityName_n="和田";break;
		case "Chifeng":cityName_n="赤峰";break;
		case "chifeng":cityName_n="赤峰";break;
		case "Xilinhot":cityName_n="锡林浩特";break;
		case "xilinhot":cityName_n="锡林浩特";break;
		case "Xingyi":cityName_n="兴义";break;
		case "xingyi":cityName_n="兴义";break;
		case "Baoshan":cityName_n="保山";break;
		case "baoshan":cityName_n="保山";break;
		case "Luxi":cityName_n="芦溪";break;
		case "luxi":cityName_n="芦溪";break;
		case "Jinzhou":cityName_n="锦州";break;
		case "jinzhou":cityName_n="锦州";break;
		case "Dandong":cityName_n="丹东";break;
		case "dandong":cityName_n="丹东";break;
		case "Zhongwei":cityName_n="中卫";break;
		case "zhongwei":cityName_n="中卫";break;
		case "Dalian":cityName_n="大连";break;
		case "dalian":cityName_n="大连";break;
		case "Shenyang":cityName_n="沈阳";break;
		case "shenyang":cityName_n="沈阳";break;
		case "Wuyishan":cityName_n="武夷山";break;
		case "wuyishan":cityName_n="武夷山";break;
		case "Weifang":cityName_n="潍坊";break;
		case "weifang":cityName_n="潍坊";break;
		case "Kuqa":cityName_n="新疆";break;
		case "kuqa":cityName_n="新疆";break;
		case "Ji An":cityName_n="吉安";break;
		case "ji an":cityName_n="吉安";break;
		case "Jiuzhaigou":cityName_n="九寨沟";break;
		case "jiuzhaigou":cityName_n="九寨沟";break;
		case "Jiamusi":cityName_n="佳木斯";break;
		case "jiamusi":cityName_n="佳木斯";break;
		case "Heihe":cityName_n="黑河";break;
		case "heihe":cityName_n="黑河";break;
		case "Luoyang":cityName_n="洛阳";break;
		case "luoyang":cityName_n="洛阳";break;
		case "Nanyang":cityName_n="南阳";break;
		case "nanyang":cityName_n="南阳";break;
		case "Tongliao":cityName_n="通辽";break;
		case "tongliao":cityName_n="通辽";break;
		case "Foshan":cityName_n="佛山";break;
		case "foshan":cityName_n="佛山";break;
		case "Bangda":cityName_n="邦达";break;
		case "bangda":cityName_n="邦达";break;
		case "Manzhouli":cityName_n="满洲里";break;
		case "manzhouli":cityName_n="满洲里";break;
		case "Xichang":cityName_n="西昌";break;
		case "xichang":cityName_n="西昌";break;
		case "Lhasa":cityName_n="拉萨";break;
		case "lhasa":cityName_n="拉萨";break;
		case "Aksu":cityName_n="阿克苏";break;
		case "aksu":cityName_n="阿克苏";break;
		case "Haikou":cityName_n="海口";break;
		case "haikou":cityName_n="海口";break;
		case "Korla":cityName_n="库尔勒";break;
		case "korla":cityName_n="库尔勒";break;
		case "Dunhuang":cityName_n="敦煌";break;
		case "dunhuang":cityName_n="敦煌";break;
		case "Nyingchi":cityName_n="林芝";break;
		case "nyingchi":cityName_n="林芝";break;
		case "Jiayuguan":cityName_n="嘉峪关";break;
		case "jiayuguan":cityName_n="嘉峪关";break;
		case "Ankang":cityName_n="安康";break;
		case "ankang":cityName_n="安康";break;
		case "Hanzhong":cityName_n="汉中";break;
		case "hanzhong":cityName_n="汉中";break;
		case "Zhoushan":cityName_n="舟山";break;
		case "zhoushan":cityName_n="舟山";break;
		case "Mudanjiang":cityName_n="牡丹江";break;
		case "mudanjiang":cityName_n="牡丹江";break;
		case "Nanning":cityName_n="南宁";break;
		case "nanning":cityName_n="南宁";break;
		case "Shangri-La":cityName_n="香格里拉";break;
		case "shangri-la":cityName_n="香格里拉";break;
		case "Longyan":cityName_n="龙岩";break;
		case "longyan":cityName_n="龙岩";break;
		case "Nantong":cityName_n="南通";break;
		case "nantong":cityName_n="南通";break;
		case "Datong":cityName_n="大同";break;
		case "datong":cityName_n="大同";break;
		case "Dujiangyan":cityName_n="都江堰";break;
		case "dujiangyan":cityName_n="都江堰";break;
		case "Yiwu":cityName_n="义乌";break;
		case "yiwu":cityName_n="义乌";break;
		case "Mohe County":cityName_n="漠河";break;
		case "mohe county":cityName_n="漠河";break;
		case "Beihai":cityName_n="北海";break;
		case "beihai":cityName_n="北海";break;
		case "Yichang":cityName_n="宜昌";break;
		case "yichang":cityName_n="宜昌";break;
		case "Dazhou":cityName_n="达州";break;
		case "dazhou":cityName_n="达州";break;
		case "Chengdu":cityName_n="成都";break;
		case "chengdu":cityName_n="成都";break;
		case "Sanya":cityName_n="三亚";break;
		case "sanya":cityName_n="三亚";break;
		case "Anqing":cityName_n="安庆";break;
		case "anqing":cityName_n="安庆";break;
		case "Yan'an":cityName_n="延安";break;
		case "yan'an":cityName_n="延安";break;
		case "Shiquanhe":cityName_n="狮泉河";break;
		case "shiquanhe":cityName_n="狮泉河";break;
		case "Liping":cityName_n="黎平";break;
		case "liping":cityName_n="黎平";break;
		case "Qingdao":cityName_n="青岛";break;
		case "qingdao":cityName_n="青岛";break;
		case "Wuzhou":cityName_n="梧州";break;
		case "wuzhou":cityName_n="梧州";break;
		case "Tongren":cityName_n="铜仁";break;
		case "tongren":cityName_n="铜仁";break;
		case "Changcha":cityName_n="长沙";break;
		case "Changsha":cityName_n="长沙";break;
		case "changcha":cityName_n="长沙";break;
		case "changsha":cityName_n="长沙";break;
		case "Lianyungang":cityName_n="连云港";break;
		case "lianyungang":cityName_n="连云港";break;
		case "Yantai":cityName_n="烟台";break;
		case "yantai":cityName_n="烟台";break;
		case "Jingdezhen":cityName_n="景德镇";break;
		case "jingdezhen":cityName_n="景德镇";break;
		case "Yuncheng":cityName_n="运城";break;
		case "yuncheng":cityName_n="运城";break;
		case "Altay":cityName_n="阿勒泰";break;
		case "altay":cityName_n="阿勒泰";break;
		case "Daqing":cityName_n="大庆";break;
		case "daqing":cityName_n="大庆";break;
		case "Xi\\\\'AN":cityName_n="西安";break;
		case "xi\\\\'an":cityName_n="西安";break;
		case "Wenzhou":cityName_n="温州";break;
		case "wenzhou":cityName_n="温州";break;
		case "Weihai":cityName_n="威海";break;
		case "weihai":cityName_n="威海";break;
		case "Jian":cityName_n="吉安";break;
		case "jian":cityName_n="吉安";break;
		case "Guilin":cityName_n="桂林";break;
		case "guilin":cityName_n="桂林";break;
		case "Jining":cityName_n="济宁";break;
		case "jining":cityName_n="济宁";break;
		case "Karamay":cityName_n="克拉玛依";break;
		case "karamay":cityName_n="克拉玛依";break;
		case "Nanchang":cityName_n="南昌";break;
		case "nanchang":cityName_n="南昌";break;
		case "Tengchong":cityName_n="腾冲";break;
		case "tengchong":cityName_n="腾冲";break;
		case "Golmud":cityName_n="格尔木";break;
		case "golmud":cityName_n="格尔木";break;
		case "Jiujiang":cityName_n="九江";break;
		case "jiujiang":cityName_n="九江";break;
		case "Guangyuan":cityName_n="广元";break;
		case "guangyuan":cityName_n="广元";break;
		case "Panzhihua":cityName_n="攀枝花";break;
		case "panzhihua":cityName_n="攀枝花";break;
		case "Hailar":cityName_n="海拉尔";break;
		case "hailar":cityName_n="海拉尔";break;
		case "Guangzhou":cityName_n="广州";break;
		case "guangzhou":cityName_n="广州";break;
		case "Xi'an":cityName_n="西安";break;
		case "xi'an":cityName_n="西安";break;
		case "Zhanjiang":cityName_n="湛江";break;
		case "zhanjiang":cityName_n="湛江";break;
		case "Guiyang":cityName_n="贵阳";break;
		case "guiyang":cityName_n="贵阳";break;
		case "Yibin":cityName_n="宜宾";break;
		case "yibin":cityName_n="宜宾";break;
		case "Wuhan":cityName_n="武汉";break;
		case "wuhan":cityName_n="武汉";break;
		case "Wuhai":cityName_n="乌海";break;
		case "wuhai":cityName_n="乌海";break;
		case "Chaoyang":cityName_n="朝阳";break;
		case "chaoyang":cityName_n="朝阳";break;
		case "Yanji":cityName_n="延吉";break;
		case "yanji":cityName_n="延吉";break;
		case "Baotou":cityName_n="包头";break;
		case "baotou":cityName_n="包头";break;
		case "Yushu":cityName_n="玉树";break;
		case "yushu":cityName_n="玉树";break;
		case "Jinan":cityName_n="济南";break;
		case "jinan":cityName_n="济南";break;
		case "Xiamen":cityName_n="厦门";break;
		case "xiamen":cityName_n="厦门";break;
		case "Urumqi":cityName_n="乌鲁木齐";break;
		case "urumqi":cityName_n="乌鲁木齐";break;
		case "Nanjing":cityName_n="南京";break;
		case "nanjing":cityName_n="南京";break;
		case "Hangzhou":cityName_n="杭州";break;
		case "hangzhou":cityName_n="杭州";break;
		case "Xining":cityName_n="西宁";break;
		case "xining":cityName_n="西宁";break;
		case "Shantou":cityName_n="汕头";break;
		case "shantou":cityName_n="汕头";break;
		case "Zhuhai":cityName_n="珠海";break;
		case "zhuhai":cityName_n="珠海";break;
		case "Zhijiang":cityName_n="枝江";break;
		case "zhijiang":cityName_n="枝江";break;
		case "Ninbo":cityName_n="宁波";break;
		case "ninbo":cityName_n="宁波";break;
		case "Lanzhou":cityName_n="兰州";break;
		case "lanzhou":cityName_n="兰州";break;
		case "Enshi":cityName_n="恩施";break;
		case "enshi":cityName_n="恩施";break;
		case "Ulanhot":cityName_n="乌兰浩特";break;
		case "ulanhot":cityName_n="乌兰浩特";break;
		case "Yulin":cityName_n="玉林";break;
		case "yulin":cityName_n="玉林";break;
		case "Huangshan":cityName_n="黄山";break;
		case "huangshan":cityName_n="黄山";break;
		case "Simao":cityName_n="思茅";break;
		case "simao":cityName_n="思茅";break;
		case "Tianjin":cityName_n="天津";break;
		case "tianjin":cityName_n="天津";break;
		case "Yining":cityName_n="伊宁";break;
		case "yining":cityName_n="伊宁";break;
		case "Changchun":cityName_n="长春";break;
		case "changchun":cityName_n="长春";break;
		case "Hefei":cityName_n="合肥";break;
		case "hefei":cityName_n="合肥";break;
		case "Nanchong":cityName_n="南充";break;
		case "nanchong":cityName_n="南充";break;
		case "Chongqing":cityName_n="重庆";break;
		case "chongqing":cityName_n="重庆";break;
		case "Wanxian":cityName_n="万县";break;
		case "wanxian":cityName_n="万县";break;
		case "Mianyang":cityName_n="绵阳";break;
		case "mianyang":cityName_n="绵阳";break;
		case "Shenzhen":cityName_n="深圳";break;
		case "shenzhen":cityName_n="深圳";break;
		case "Meixian":cityName_n="眉县";break;
		case "meixian":cityName_n="眉县";break;
		case "Lincang":cityName_n="临沧";break;
		case "lincang":cityName_n="临沧";break;
		case "Jinghong":cityName_n="景洪";break;
		case "jinghong":cityName_n="景洪";break;
		case "Huai An":cityName_n="淮安";break;
		case "huai an":cityName_n="淮安";break;
		case "Shanghai":cityName_n="上海";break;
		case "shanghai":cityName_n="上海";break;
		case "Huizhou":cityName_n="惠州";break;
		case "huizhou":cityName_n="惠州";break;
		case "Wuxi":cityName_n="无锡";break;
		case "wuxi":cityName_n="无锡";break;
		case "Qiqihar":cityName_n="齐齐哈尔";break;
		case "qiqihar":cityName_n="齐齐哈尔";break;
		case "Quanzhou":cityName_n="泉州";break;
		case "quanzhou":cityName_n="泉州";break;
		case "Huhhot":cityName_n="呼和浩特";break;
		case "huhhot":cityName_n="呼和浩特";break;
		case "Zhengzhou":cityName_n="郑州";break;
		case "zhengzhou":cityName_n="郑州";break;
		case "Linyi":cityName_n="临沂";break;
		case "linyi":cityName_n="临沂";break;
		case "Zhaotong":cityName_n="昭通";break;
		case "zhaotong":cityName_n="昭通";break;
		case "Liuzhou":cityName_n="柳州";break;
		case "liuzhou":cityName_n="柳州";break;
		case "Dayong":cityName_n="大庸";break;
		case "dayong":cityName_n="大庸";break;
		case "Yancheng":cityName_n="盐城";break;
		case "yancheng":cityName_n="盐城";break;
		case "Changzhi":cityName_n="长治";break;
		case "changzhi":cityName_n="长治";break;
		case "Hami":cityName_n="哈密";break;
		case "hami":cityName_n="哈密";break;
		case "Lijiang":cityName_n="丽江";break;
		case "lijiang":cityName_n="丽江";break;
		case "Kunming":cityName_n="昆明";break;
		case "kunming":cityName_n="昆明";break;
		case "Dongying":cityName_n="东营";break;
		case "dongying":cityName_n="东营";break;
		case "Qingyang":cityName_n="庆阳";break;
		case "qingyang":cityName_n="庆阳";break;
		case "Wenshan":cityName_n="文山";break;
		case "wenshan":cityName_n="文山";break;
		case "Qiemo":cityName_n="且末";break;
		case "qiemo":cityName_n="且末";break;
		case "Shijiazhuang":cityName_n="石家庄";break;
		case "shijiazhuang":cityName_n="石家庄";break;
		case "Luzhou":cityName_n="泸州";break;
		case "luzhou":cityName_n="泸州";break;
		case "Qinhuangdao":cityName_n="秦皇岛";break;
		case "qinhuangdao":cityName_n="秦皇岛";break;
		case "Fuyang":cityName_n="阜阳";break;
		case "fuyang":cityName_n="阜阳";break;
		case "Taiyuan":cityName_n="太原";break;
		case "taiyuan":cityName_n="太原";break;
		case "Fuzhou":cityName_n="福州";break;
		case "fuzhou":cityName_n="福州";break;
		case "Hongyuan":cityName_n="红原";break;
		case "hongyuan":cityName_n="红原";break;
		case "Kashi":cityName_n="喀什";break;
		case "kashi":cityName_n="喀什";break;
		case "Tacheng":cityName_n="塔城";break;
		case "tacheng":cityName_n="塔城";break;
		case "tacheng":cityName_n="塔城";break;
		case "Changzhou":cityName_n="常州";break;
		case "changzhou":cityName_n="常州";break;
		case "Xiangfan":cityName_n="襄樊";break;
		case "xiangfan":cityName_n="襄樊";break;
		case "Dali":cityName_n="大理";break;
		case "dali":cityName_n="大理";break;
		case "Dongsheng":cityName_n="东胜";break;
		case "dongsheng":cityName_n="东胜";break;
		case "Changde":cityName_n="常德";break;
		case "changde":cityName_n="常德";break;
		case "Quzhou":cityName_n="衢州";break;
		case "quzhou":cityName_n="衢州";break;
		case "Jinghonggasa":cityName_n="景洪嘎洒";break;
		case "jinghonggasa":cityName_n="景洪嘎洒";break;
		case "Xuzhou":cityName_n="徐州";break;
		case "xuzhou":cityName_n="徐州";break;
		case "Huangyan":cityName_n="黄岩";break;
		case "huangyan":cityName_n="黄岩";break;
		case "Harbin":cityName_n="哈尔滨";break;
		case "harbin":cityName_n="哈尔滨";break;
		case "Maiwa":cityName_n="麦洼";break;
		case "maiwa":cityName_n="麦洼";break;
		case "taipei":cityName_n="台北";break;
		case "hong kong":cityName_n="香港";break;
		case "kaohsiung":cityName_n="高雄";break;
		case "macau":cityName_n="澳门";break;
	}
	return cityName_n;
}
function animate_air(start_x,start_y,stop_x,stop_y,cityName,placemark,scale,num){	
//console.log(count_3_9[cityName][num]);
		if(model_3_9[cityName][num]){
			count_3_9[cityName][num]+=Math.random();
		}else{
			count_3_9[cityName][num]-=Math.random();
		}
		if(count_3_9[cityName][num]>=scale){
			model_3_9[cityName][num]=false;
		}
		if(count_3_9[cityName][num]<=0){
			model_3_9[cityName][num]=true;
		}
		var k=(stop_y-start_y)/(stop_x-start_x);
		//var dis=Math.sqrt((stop_y-start_y)*(stop_y-start_y)+(stop_x-start_x)*(stop_x-start_x));
		//console.log("k:"+k+"dis:"+dis);
		//添加飞机
		//console.log(k);
		var ani_x=(stop_x-start_x)*count_3_9[cityName][num]/scale+start_x*1;
		var ani_y=k*(stop_x-start_x)*count_3_9[cityName][num]/scale+start_y*1;
		placemark.position=new WorldWind.Position(ani_x,ani_y, 1e2);
		wwd.redraw();
		return function(){
			animate_air(start_x,start_y,stop_x,stop_y,cityName,placemark,scale,num);
		}
}
function animate_ship(ship_route,cityName,placemark,scale){
	//count_3_9[cityName][0]=0;
	//ship_line_num[cityName]=0;
	//model_3_9[cityName][0]=true
	if(ship_line_num[cityName]<ship_route.length-2){
		count_3_9[cityName]+=Math.random();
		if(count_3_9[cityName]>=scale){
			//model_3_9[cityName][0]=false;
			ship_line_num[cityName]++;
			count_3_9[cityName]=0;
		}
		var k=(ship_route[ship_line_num[cityName]+1].longitude-ship_route[ship_line_num[cityName]].longitude)/(ship_route[ship_line_num[cityName]+1].latitude-ship_route[ship_line_num[cityName]].latitude);
		var ani_x=(ship_route[ship_line_num[cityName]+1].latitude-ship_route[ship_line_num[cityName]].latitude)*count_3_9[cityName]/scale+ship_route[ship_line_num[cityName]].latitude*1;
		var ani_y=k*(ship_route[ship_line_num[cityName]+1].latitude-ship_route[ship_line_num[cityName]].latitude)*count_3_9[cityName]/scale+ship_route[ship_line_num[cityName]].longitude*1;
		placemark.position=new WorldWind.Position(ani_x,ani_y, 1e2);
		wwd.redraw();
		return function(){
			animate_ship(ship_route,cityName,placemark,scale);
		}
	}else{
		ship_line_num[cityName]=0;
		return function(){
			animate_ship(ship_route,cityName,placemark,scale);
		}
	}
}