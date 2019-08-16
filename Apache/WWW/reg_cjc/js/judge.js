

new jBox('Mouse', {    
            attach: '#cjc_7_17_2D_button',   
			width:400,
			 position: {x: 'right', y: 'bottom'},
            content: '二维地图。是指用于教学的各类地图，是为学校讲授地球科学、环境科学和历史学等有关地理空间分布课目时所用的各种地图。地图按用途划分的一类，是专用地图的一种。主要是结合教学内容编制，供各级学校教学用的地图。' 
});
new jBox('Mouse', {    
            attach: '#cjc_7_17_3D_button', 
			width:400,			
			 position: {x: 'right', y: 'bottom'},
            content: '三维地图，又称为三维卫星影像地图。是借助卫星为媒介，向用户真实反馈地球表面地貌的图像。卫星地图是卫星拍摄的真实的地理面貌，所以卫星地图可用来检测地面的信息，你可以了解到地理位置，地形等信息，可以应用于城乡规划，通过卫星地图的gps导航系统，可以告诉你，你现在身处何方，你将前往的那个地方怎么走等信息。' 
});


document.getElementById("cjc_7_17_3D_button").onclick=function(){
	window.location.href="WebWorldWind-develop/examples/main.php";
}
document.getElementById("cjc_7_17_2D_button").onclick=function(){
	window.location.href="Dtwo/main.php";
}
