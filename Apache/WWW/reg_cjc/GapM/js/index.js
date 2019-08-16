//全局变量
var isExist_cityDingWei=false;
var isExist_JingWeiDingWei=false;
var isExist_cjcGuanJianZhi=false;
var placeName=document.getElementById("placeName");
var jingDu=document.getElementById("jingDu");
var weiDu=document.getElementById("weiDu");
var cityDingWei=document.getElementById("cjcCityDingWei");
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
var ruler1;
var district, polygons = [], citycode;
var citySelect = document.getElementById('city');
var districtSelect = document.getElementById('district');
var areaSelect = document.getElementById('street');
var opts = {
        subdistrict: 1,   //返回下一级行政区
        showbiz:false  //最后一级返回街道信息
};

//窗体初始化
$("#GaoDeMap").css("height",window.innerHeight-125+"px");
window.onresize=function(){
	$("#GaoDeMap").css("height",window.innerHeight-125+"px");
}
placeName.innerText="";
jingDu.innerText="";
weiDu.innerText="";
//实例化地图
var map = new AMap.Map('GaoDeMap', {
	resizeEnable: true,
	zoom:16,
	center: [116.39767, 39.908677]
});
var scale = new AMap.Scale({
    visible: true
});
map.addControl(scale); 
var autoOptions = { //输入提示
    input: "tipinput"
};
var auto = new AMap.Autocomplete(autoOptions);
var placeSearch = new AMap.PlaceSearch({//构造地点查询类
    map: map
});  
cjcKeHuDingWei();
//jquery获取的DOM事件
document.getElementById("cjc_button_01").onclick=function(){
	if(!is_cjc_button_01_enable){
		cancelAllTools();
		$("#cjc_button_01").addClass("active");
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
		$("#cjc_button_01").removeClass("active");
		is_cjc_button_01_enable=false;
		map.plugin(["AMap.MouseTool"], function() {
		//通过rectOptions更改拉框放大时鼠标绘制的矩形框样式
        mouseTool.close();     
    });
	}
}
document.getElementById("cjc_button_02").onclick=function(){
	if(!is_cjc_button_02_enable){
		cancelAllTools();
		$("#cjc_button_02").addClass("active");
		is_cjc_button_02_enable=true;
        map.plugin(["AMap.RangingTool"], function() {
        ruler1 = new AMap.RangingTool(map);
        AMap.event.addListener(ruler1, "end", function(e) {
            ruler1.turnOff();
			$("#cjc_button_02").removeClass("active");
			is_cjc_button_02_enable=false;
        });
		});
		ruler1.turnOn();
	}else{
		ruler1.turnOff();
		$("#cjc_button_02").removeClass("active");
		is_cjc_button_02_enable=false;
	}
}
document.getElementById("cjc_button_03").onclick=function(){
	if(!is_cjc_button_03_enable){
		cancelAllTools();
		$("#cjc_button_03").addClass("active");
		is_cjc_button_03_enable=true;
         map.plugin(["AMap.MouseTool"], function() {
        mouseTool = new AMap.MouseTool(map);
        //鼠标工具插件添加draw事件监听
        AMap.event.addListener(mouseTool, "draw", function callback(e) {
            var eObject = e.obj;//obj属性就是鼠标事件完成所绘制的覆盖物对象。
        });
        mouseTool.measureArea();  //调用鼠标工具的面积量测功能
    });
	}else{
		if(mouseTool!=null){
		mouseTool.close();
		}
		$("#cjc_button_03").removeClass("active");
		is_cjc_button_03_enable=false;
	}
}
document.getElementById("cjc_button_04").onclick=function(){
	if(!is_cjc_button_04_enable){
		cancelAllTools();
		$("#cjc_button_04").addClass("active");
		is_cjc_button_04_enable=true;
         map.plugin(["AMap.MouseTool"], function() {
        mouseTool = new AMap.MouseTool(map);
        mouseTool.marker({offset:new AMap.Pixel(-14,-11)});
    });
	}else{
		if(mouseTool!=null){
		mouseTool.close();
		}
		$("#cjc_button_04").removeClass("active");
		is_cjc_button_04_enable=false;
	}
}
document.getElementById("cjc_button_05").onclick=function(){
	if(!is_cjc_button_05_enable){
		cancelAllTools();
		$("#cjc_button_05").addClass("active");
		is_cjc_button_05_enable=true;
         map.plugin(["AMap.MouseTool"], function() {
        mouseTool = new AMap.MouseTool(map);
        mouseTool.polyline();
    });
	}else{
		if(mouseTool!=null){
		mouseTool.close();
		}
		$("#cjc_button_05").removeClass("active");
		is_cjc_button_05_enable=false;
	}
}
document.getElementById("cjc_button_06").onclick=function(){
	if(!is_cjc_button_06_enable){
		cancelAllTools();
		$("#cjc_button_06").addClass("active");
		is_cjc_button_06_enable=true;
         map.plugin(["AMap.MouseTool"], function() {
        mouseTool = new AMap.MouseTool(map);
         mouseTool.polygon();
    });
	}else{
		if(mouseTool!=null){
		mouseTool.close();
		}
		$("#cjc_button_06").removeClass("active");
		is_cjc_button_06_enable=false;
	}
}
document.getElementById("cjc_button_07").onclick=function(){
	if(!is_cjc_button_07_enable){
		cancelAllTools();
		$("#cjc_button_07").addClass("active");
		is_cjc_button_07_enable=true;
        $("#cjc_5_5_tip").css("display","block");
	}else{
		$("#cjc_5_5_tip").css("display","none");
		$("#cjc_button_07").removeClass("active");
		is_cjc_button_07_enable=false;
	}
}
//地图的事件
AMap.plugin('AMap.Geocoder',function(){
    var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   jingDu.innerText=e.lnglat.getLng();
	   weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       })
	});
});
AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
AMap.event.addDomListener(document.getElementById('query'), 'click', function() {
    var cityName = document.getElementById('cityName').value;
    if (!cityName) {
        cityName = '北京市';
		placeSearch_01.clear();
    }
    map.setCity(cityName);
	$("#cjcCityDingWei").css("display","none");
	isExist_cityDingWei=false;
});
AMap.event.addDomListener(document.getElementById('query_01'), 'click', function() {
    var jingDu_01 = document.getElementById('jingDu_01').value;
    var weiDu_01 = document.getElementById('weiDu_01').value;
    if (!jingDu_01) {
        alert("经度的值不能为空");
    }else if(!weiDu_01){
		alert("纬度的值不能为空");
	}else{
    map.panTo([jingDu_01,weiDu_01]);
	$("#cjcJingWeiDingWei").css("display","none");
	isExist_JingWeiDingWei=false;
	}
});
AMap.event.addDomListener(document.getElementById('query_02'), 'click', function() {
    var cjcGuanJianZhi = document.getElementById('tipinput').value;
    if (!cjcGuanJianZhi) {
        alert("关键字不能为空");
    }else{
	$("#cjcGuanJianZhi").css("display","none");
	isExist_cjcGuanJianZhi=false;
	AMap.service(["AMap.PlaceSearch"], function() {
		placeSearch_01 = new AMap.PlaceSearch({ //构造地点查询类
			pageSize: 5,
			pageIndex: 1,
			city: "", //城市
			map: map,
			panel: "panel"
		});
		//关键字查询
		placeSearch_01.search(cjcGuanJianZhi);	
		$("#query_03").css("display","block");
		
    });
	}
});
AMap.event.addDomListener(document.getElementById('query_03'), 'click', function() {
    placeSearch_01.clear();
	$("#query_03").css("display","none");
});
AMap.event.addDomListener(document.getElementById('query_04'), 'click', function() {
    $("#tip").css("display","none");
	$("#query_04").css("display","none");
});
//额外执行的函数
addXingZhengQuHua();
GunDong();
changess();
$(window).resize(function(){
	changess();
});
//函数调用
function cjcCityDingWei(){
	if(isExist_cityDingWei){
		alert("请在右下角输入城市名称");
	}else{
		isExist_cityDingWei=true;
		$("#cjcCityDingWei").css("display","block");
		if(isExist_JingWeiDingWei){
			isExist_JingWeiDingWei=false;
			$("#cjcJingWeiDingWei").css("display","none");
		}
	}
}
function cjcJingWeiDingWei(){
	if(isExist_JingWeiDingWei){
		alert("请在右下角输入经纬坐标");
	}else{
		isExist_JingWeiDingWei=true;
		$("#cjcJingWeiDingWei").css("display","block");
		if(isExist_cityDingWei){
			isExist_cityDingWei=false;
			$("#cjcCityDingWei").css("display","none");
		}
	}
}
function guanJianZhiSouSuo(){
	if(isExist_cjcGuanJianZhi){
		alert("请在右上角输入关键字");
	}else{
		isExist_cjcGuanJianZhi=true;
		$("#cjcGuanJianZhi").css("display","block");
	}
}
function select(e) {
    placeSearch.setCity(e.poi.adcode);
    placeSearch.search(e.poi.name);  //关键字查询查询
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
function cjcFanHuiChuShi(){
	map.setZoomAndCenter(16,[116.39767, 39.908677]);
}
function cjcTianQiYuBao(){
	cjcMapCenter=map.getCenter();//获取中心点的经纬坐标
	var len=0;
	var tianQiYuBaoResults;
	//var tianQiYuBaoMarker = new AMap.Marker();
	AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $) {
		var districtExplorer = new DistrictExplorer({
            map: map
        });
		districtExplorer.locatePosition(cjcMapCenter, function(err, features) {
			if (err) {
				alert("未知区域");
				return;
			}
			len=features.length-1;
			//alert(features[len].properties.name);
			tianQiYuBaoResults=features[len].properties.name;
			TianQiYuBao(tianQiYuBaoResults);
			//tianQiYuBaoMarker.setPosition(cjcMapCenter);
			//tianQiYuBaoMarker.setMap(map);
            }, {
                levelLimit: 4
		});
	});
}
function TianQiYuBao(placeName){
	$("#tip").css("display","block");
	$("#query_04").css("display","block");
	  AMap.service('AMap.Weather', function() {
        var weather = new AMap.Weather();
        //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        weather.getLive(placeName, function(err, data) {
            if (!err) {
                var str = [];
                str.push('<div style="color: #3366FF;">实时天气' + '</div>');
                str.push('<div>城市/区：' + data.city + '</div>');
                str.push('<div>天气：' + data.weather + '</div>');
                str.push('<div>温度：' + data.temperature + '℃</div>');
                str.push('<div>风向：' + data.windDirection + '</div>');
                str.push('<div>风力：' + data.windPower + ' 级</div>');
                str.push('<div>空气湿度：' + data.humidity + '</div>');
                str.push('<div>发布时间：' + data.reportTime + '</div>');
                var marker = new AMap.Marker({map: map, position: map.getCenter()});
                var infoWin = new AMap.InfoWindow({
                    content: str.join(''),
                    offset: new AMap.Pixel(0, -20)
                });
                infoWin.open(map, marker.getPosition());
                marker.on('mouseover', function() {
                    infoWin.open(map, marker.getPosition());
                });
            }
        });
        //未来4天天气预报
        weather.getForecast(placeName, function(err, data) {
            if (err) {return;}
            var str = [];
            for (var i = 0,dayWeather; i < data.forecasts.length; i++) {
                dayWeather = data.forecasts[i];
                str.push(dayWeather.date+' <div class="weather">'+dayWeather.dayWeather+'</div> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
            }
            document.getElementById('tip').innerHTML = str.join('<br>');
        });
    });
}
function cjcRestart(){
	window.location.reload();
}
function cjc3DMap(){
	cancelAllTools();
	mapInit();
	AMap.plugin('AMap.Geocoder',function(){
    var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   jingDu.innerText=e.lnglat.getLng();
	   weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       })
	});
});
}
function mapInit(){
	cjcGetPosition();
  map = new AMap.Map('GaoDeMap', {
    resizeEnable: true,
    rotateEnable:true,
    pitchEnable:true,
    zoom: 17,
    pitch:80,
    rotation:-15,
    viewMode:'3D',//开启3D视图,默认为关闭
    buildingAnimation:true,//楼块出现是否带动画
    
    expandZoomRange:true,
    zooms:[3,20],
    center: cjcMapCenter
  });
    map.addControl(new AMap.ControlBar({
    showZoomBar:false,
    showControlButton:true,
    position:{
      right:'10px',
      top:'10px'
    }
  }))
}
function cjcNormalMap(){
	cancelAllTools();
	cjcGetPosition();
	map = new AMap.Map('GaoDeMap', {
	resizeEnable: true,
	zoom:16,
	center: cjcMapCenter
});
scale = new AMap.Scale({
    visible: true
});
map.addControl(scale); 
map.plugin(["AMap.ToolBar"], function() {
		map.addControl(new AMap.ToolBar());
	});
	if(location.href.indexOf('&guide=1')!==-1){
		map.setStatus({scrollWheel:false})
	}
AMap.plugin('AMap.Geocoder',function(){
    var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   jingDu.innerText=e.lnglat.getLng();
	   weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       })
	});
});
}
function cjcGetPosition(){
	cjcMapCenter=map.getCenter();//获取中心点的经纬坐标
}
function cjcWeiXingMap(){
	cancelAllTools();
	cjcGetPosition();
map = new AMap.Map('GaoDeMap', {
        center: cjcMapCenter,
        layers: [new AMap.TileLayer.Satellite()],
        zoom: 16
});
AMap.plugin('AMap.Geocoder',function(){
    var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   jingDu.innerText=e.lnglat.getLng();
	   weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       })
	});
});
}
function cjcWeiXingMapMarker(){
	cancelAllTools();
	cjcGetPosition();
map = new AMap.Map('GaoDeMap', {
        center: cjcMapCenter,
         layers: [
            new AMap.TileLayer.Satellite(),
            new AMap.TileLayer.RoadNet()
        ],
        zoom: 16
});
AMap.plugin('AMap.Geocoder',function(){
    var geocoder = new AMap.Geocoder({});
	map.on('click',function(e){
	   jingDu.innerText=e.lnglat.getLng();
	   weiDu.innerText=e.lnglat.getLat();
	   geocoder.getAddress(e.lnglat,function(status,result){
		   if(status=='complete'){
           placeName.innerText= result.regeocode.formattedAddress;
           }else{
               placeName.innerText = '无法获取地址';
           }
       })
	});
});
}
function cjcCountryMap(){
	map.setZoomAndCenter(4, [108.946609, 34.262324]);
}
function cancelAllTools(){
	$("#cjc_button_01").removeClass("active");
	$("#cjc_button_02").removeClass("active");
	$("#cjc_button_03").removeClass("active");
	$("#cjc_button_04").removeClass("active");
	$("#cjc_button_05").removeClass("active");
	$("#cjc_button_06").removeClass("active");
	$("#cjc_button_07").removeClass("active");
	is_cjc_button_01_enable=false;
	is_cjc_button_02_enable=false;
	is_cjc_button_03_enable=false;
	is_cjc_button_04_enable=false;
	is_cjc_button_05_enable=false;
	is_cjc_button_06_enable=false;
	is_cjc_button_07_enable=false;
	
	if(ruler1!=undefined){
		ruler1.turnOff();
	}
	map.plugin(["AMap.MouseTool"], function() {
		//通过rectOptions更改拉框放大时鼠标绘制的矩形框样式
		if(mouseTool!=null){
        mouseTool.close();     
		}
    });
	$("#cjc_5_5_tip").css("display","none");
}
function cjcClearAllMarkers(){
	map.clearMap();
}
function addXingZhengQuHua(){
	district = new AMap.DistrictSearch(opts);
	district.search('中国', function(status, result) {
    if(status=='complete'){
         getData(result.districtList[0]);
    }
    });
}

 function getData(data,level) {
        var bounds = data.boundaries;
        if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
                var polygon = new AMap.Polygon({
                    map: map,
                    strokeWeight: 1,
                    strokeColor: '#CC66CC',
                    fillColor: '#CCF3FF',
                    fillOpacity: 0.5,
                    path: bounds[i]
                });
                polygons.push(polygon);
            }
            map.setFitView();//地图自适应
        }       
        //清空下一级别的下拉列表
        if (level === 'province') {
            citySelect.innerHTML = '';
            districtSelect.innerHTML = '';
            areaSelect.innerHTML = '';
        } else if (level === 'city') {
            districtSelect.innerHTML = '';
            areaSelect.innerHTML = '';
        } else if (level === 'district') {
            areaSelect.innerHTML = '';
        }

        var subList = data.districtList;
        if (subList) {
            var contentSub = new Option('--请选择--');
            var curlevel = subList[0].level;
            var curList =  document.querySelector('#' + curlevel);
            curList.add(contentSub);
            for (var i = 0, l = subList.length; i < l; i++) {
                var name = subList[i].name;
                var levelSub = subList[i].level;
                var cityCode = subList[i].citycode;
                contentSub = new Option(name);
                contentSub.setAttribute("value", levelSub);
                contentSub.center = subList[i].center;
                contentSub.adcode = subList[i].adcode;
                curList.add(contentSub);
            }
        }
        
    }
function cjc_5_5_search(obj) {
    //清除地图上所有覆盖物
    for (var i = 0, l = polygons.length; i < l; i++) {
        polygons[i].setMap(null);
    }
    var option = obj[obj.options.selectedIndex];
    var keyword = option.text; //关键字
    var adcode = option.adcode;
    district.setLevel(option.value); //行政区级别
    district.setExtensions('all');
    //行政区查询
    //按照adcode进行查询可以保证数据返回的唯一性
    district.search(adcode, function(status, result) {
    if(status === 'complete'){
        getData(result.districtList[0],obj.id);
    }
    });
}
function cjc_5_5_setCenter(obj){
    map.setCenter(obj[obj.options.selectedIndex].center)
}
$(".span2").scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        // 火狐是DOMMouseScroll事件
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        $(this).on(eventType, function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0? 0: scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
				changess();
            }        
        });
    });	
};
function GunDong(){
$(".span2").css({"overflow":"auto"});
	 $(".span2").css("height",window.innerHeight+"px");
	//$(".span2").scrollUnique();
 $(document.body).css({
   "overflow-x":"hidden",
   "overflow-y":"hidden"
 });
}
function changess(){
	$(".span2").css("height",window.innerHeight+"px");
	//$(".span2").css("height",window.innerHeight*8/9+"px");
	//var aaa=$("#dashboard-menu").width();
	//var bbb="10px "+(aaa-1)*77/198+"px";			
	//$(".cjc_4_24_button").css("padding",bbb);
}