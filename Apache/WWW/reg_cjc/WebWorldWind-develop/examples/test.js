var data_3_6 = {};
var layers=[];
var wwd;//实例化一个世界风对象
var count_3_9={};
var model_3_9={};
var air_interval_3_9={};
requirejs(['./WorldWindShim',
        './LayerManager'],
    function (WorldWind,
              LayerManager) {
        "use strict";

        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        wwd = new WorldWind.WorldWindow("canvasOne");
		wwd.goTo(new WorldWind.Position(39.92, 116.37, 2e7));	

        layers = [
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.BingAerialLayer(null), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
            {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true},
			{layer: new WorldWind.RenderableLayer("航线图层"),enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);
		loadData();
    });
	
function loadData() {
//Log.write('Loading data...');
$.get({
	url: 'data/cities_list.json',
	success: function(data) {
		var cities = JSON.parse(data);
		var cityPos = data_3_6.cityPos={};
		var html = [];
		for (var i = 0; i < cities.length; i++) {
			var city = cities[i],
				country = city[0],
				cityName = city[1];
			if (country == "China") {
				html.push('<label for=\'checkbox-' +
					cityName + '\'><input type=\'checkbox\' id=\'checkbox-' +
					cityName + '\' /> ' + cityName + '</label>');
				cityPos[cityName] = [city[2],city[3]];
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
				data_3_6.cities = JSON.parse(data);
				//Request airline data
				$.get({
					url:"data/airlines/China.json",
					success:function(data){
						var world_air=JSON.parse(data),
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
	 placemark.label=cityName;
	 placemark.displayName=cityName;
	 layers[8].layer.addRenderable(placemark);
	 var zd=data_3_6.China_air[cityName.toLowerCase()];
	 if(zd){
		 for(var i=0;i<zd.length;i++){
			var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
			 placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
			 placemarkAttributes.imageColor = WorldWind.Color.RED;
			 placemarkAttributes.imageScale= 0.1;
			 var placemark = new WorldWind.Placemark(new WorldWind.Position(data_3_6.cities[zd[i]][2], data_3_6.cities[zd[i]][3], 1e2), false, null);
			 placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
			 placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
			 placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
			 placemark.attributes = placemarkAttributes;
			 placemark.label=zd[i].split("^")[1];
			 placemark.displayName=cityName;
			 layers[8].layer.addRenderable(placemark);
			 cjc_10_7_driving([data_3_6.cityPos[cityName][0], data_3_6.cityPos[cityName][1]],[data_3_6.cities[zd[i]][2], data_3_6.cities[zd[i]][3]],color_ran,cityName);
				var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
				placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5,WorldWind.OFFSET_FRACTION, 0.5);
				placemarkAttributes.imageColor = WorldWind.Color.CYAN;
				placemarkAttributes.imageScale= 0.15;
				var placemark = new WorldWind.Placemark(new WorldWind.Position(data_3_6.cityPos[cityName][0], data_3_6.cityPos[cityName][1], 1e2), false, null);
				placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
				placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
				placemarkAttributes.labelAttributes.color=WorldWind.Color.WHITE;
				placemark.attributes = placemarkAttributes;
				placemark.label="飞机";
				placemark.displayName=cityName;
				layers[8].layer.addRenderable(placemark);
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
	for(var i in layers[8].layer.renderables){
		while(layers[8].layer.renderables[i].displayName==cityName){
			//layers[8].layer.renderables[i].enabled=false;
			layers[8].layer.removeRenderable(layers[8].layer.renderables[i]);
			if(layers[8].layer.renderables.length==0){
				break;
			}
		}
	}
	
	/*for(var i=0;i<layers[8].layer.renderables.length;i++){
		console.log(layers[8].layer.renderables[i]);
		if(layers[8].layer.renderables[i].displayName==cityName){
			console.log(i);
			layers[8].layer.removeRenderable(layers[8].layer.renderables[i]);
		}
	}*/
	//console.log(layers[8].layer);
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
	layers[8].layer.addRenderable(path);
	route_path=[];
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
		var dis=Math.sqrt((stop_y-start_y)*(stop_y-start_y)+(stop_x-start_x)*(stop_x-start_x));
		//console.log("k:"+k+"dis:"+dis);
		//添加飞机
		var ani_x=(stop_x-start_x)*count_3_9[cityName][num]/scale+start_x*1;
		var ani_y=k*(stop_x-start_x)*count_3_9[cityName][num]/scale+start_y*1;
		placemark.position=new WorldWind.Position(ani_x,ani_y, 1e2);
		wwd.redraw();
		return function(){
			animate_air(start_x,start_y,stop_x,stop_y,cityName,placemark,scale,num);
		}
}