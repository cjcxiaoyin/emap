 requirejs(['js/WorldWindShim',
        'js/LayerManager'],
    function (WorldWind,
              LayerManager) {
				  var myurl;
		WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_NONE);
        wwd = new WorldWind.WorldWindow("cjc_canvas_9_2");
		 var layers = [
            {layer: new WorldWind.BMNGLayer(), enabled: true}
        ];//添加图层
		for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }
	 var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
        placemarkAttributes.imageScale = 0.025;
        placemarkAttributes.imageColor = WorldWind.Color.WHITE;
        placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);
        placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";

        var shapeConfigurationCallback = function (attributes, record) {
            var configuration = {};
            configuration.name = attributes.values.name || attributes.values.Name || attributes.values.NAME;

            if (record.isPointType()) {
                configuration.name = attributes.values.name || attributes.values.Name || attributes.values.NAME;

                configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

                if (attributes.values.pop_max) {
                    var population = attributes.values.pop_max;
                    configuration.attributes.imageScale = 0.01 * Math.log(population);
                }
            } else if (record.isPolygonType()) {
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

        var shapefileLibrary = "https://worldwind.arc.nasa.gov/web/examples/data/shapefiles/naturalearth";

        // Create data for the world.
        //var worldLayer = new WorldWind.RenderableLayer("Countries");
       // var worldShapefile = new WorldWind.Shapefile(shapefileLibrary + "/ne_110m_admin_0_countries/ne_110m_admin_0_countries.shp");
       // worldShapefile.load(null, shapeConfigurationCallback, worldLayer);
       // wwd.addLayer(worldLayer);

        // Create data for cities.
      var cityLayer = new WorldWind.RenderableLayer("Cities");
      var cityShapefile = new WorldWind.Shapefile("http://localhost:8079/data/shapefile/diquJie_polyline.shp");
     //  var cityShapefile = new WorldWind.Shapefile("D:\\proj\\app\\Apache\\WWW\\data\\shapefile\\diquJie_polyline.shp");
        cityShapefile.load(null, shapeConfigurationCallback, cityLayer);
        wwd.addLayer(cityLayer);

        //var fortStory = "https://worldwind.arc.nasa.gov/web/examples/data/shapefiles/misc/FortStory/Trident-Spectre-Indigo-i.shp";
       // var fortStoryLayer = new WorldWind.RenderableLayer("Fort Story");
       // var fortStoryShapefile = new WorldWind.Shapefile(fortStory);
       // fortStoryShapefile.load(null, null, fortStoryLayer);
       //wwd.addLayer(fortStoryLayer);

        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);

//console.log(cityShapefile);
var map = new AMap.Map('GaoDeMap', {
	resizeEnable: true,
	zoom:10,
	center: [104.299012,28.700327]
});
var scale = new AMap.Scale({
    visible: true
});
map.addControl(scale); 
//map.add(cityLayer);
var titlelayer=new AMap.LayerGroup();
titlelayer.addLayer(cityLayer);
titlelayer.setMap(map);
console.log(titlelayer);
document.getElementById("input_file").addEventListener("change",function () {
		var filePath=$(this).val();
		console.log($(this));
		var fr = new FileReader();
		var file = this.files[0];
		//fr.readAsDataURL(file);
		fr.readAsText(file)
		//var obj = $(this).prev()[0];//
	/*	fr.onload = function() {
		//	console.log(this.result);
			var cityLayer = new WorldWind.RenderableLayer("Cities");
       var cityShapefile = new WorldWind.Shapefile(this.result);
        cityShapefile.load(null, shapeConfigurationCallback, cityLayer);
        wwd.addLayer(cityLayer);
		};*/
	
    });
//console.log(shapefile.projectionFile );
	});
