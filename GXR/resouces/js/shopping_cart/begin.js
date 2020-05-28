$(document).ready(function() {
	var temp=sessionStorage.getItem("user");
	if(temp!="GXR"){ //session中不信息存在
		alert("请重新登录!");
		window.location.href="../login.html";
	}
	// 读取奖品池json
	$.ajax({
		url: '../resouces/json/shopping_cart.json',
		async: false,
		success: function(e) {
			data=e;
		}
	})
	
	obj_data=randomData();//json对象随机排序
	generatePage();//生成页面
});
//json对象随机排序
function randomData(){
	var obj_data=[];
	for(var obj in data)
		obj_data.push(obj);
	
	obj_data.sort(() => Math.random() - 0.5);
	return obj_data;
}
//生成页面
function generatePage(){
	var id=0;
	var len = Object.keys(data).length;
	for(var i=0;i<len;i++){
		id++;
		var card_num=Math.floor(Math.random()*5)+1;//卡片颜色id
		
		var obj=obj_data[i];
		//json数据
		var name=data[obj]["name"];
		var cost=data[obj]["cost"];
		var genre=data[obj]["genre"];
		var url=data[obj]["url"];
		var img=data[obj]["img"];
		
		//"genre": "cosmetic",化妆品
		//"genre": "cream",护肤品
		//"genre": "stationery",文具
		//"genre": "snack",食物
		//"genre": "clothes",衣服
		//"genre": "electronics",电子产品
		//"other": "other",其它
		if(genre=="cosmetic")
			genre='<i class="fa fa-paint-brush" aria-hidden="true"></i>';
		else if(genre=="cream")
			genre='<i class="fa fa-bath" aria-hidden="true"></i>';
		else if(genre=="stationery")
			genre='<i class="fa fa-pencil" aria-hidden="true"></i>';
		else if(genre=="snack")
			genre='<i class="fa fa-coffee" aria-hidden="true"></i>';
		else if(genre=="clothes")
			genre='<i class="fa fa-commenting-o" aria-hidden="true"></i>';
		else if(genre=="electronics")
			genre='<i class="fa fa-keyboard-o" aria-hidden="true"></i>';
		else if(genre=="other")
			genre='<i class="fa fa-cubes" aria-hidden="true"></i>';
			
		$(".swiper-wrapper").append('<div class="swiper-slide" id="swiper-slide-'+id+'"></div>');
		$("#swiper-slide-"+id).append('<section id="section-'+id+'"></section>');
		$("#section-"+id).append('<div class="card-container" id="card-container-'+id+'"></div>');
		$("#card-container-"+id).append('<div class="card-'+card_num+' text-center" id="card-'+id+'"></div>');
		
		$("#card-"+id).append('<div class="title" id="title-'+id+'"></div>');
		$("#title-"+id).append(genre);
		var temp=name.split("（");
		if(temp.length==2){//有括号时
			var name1=temp[0];
			var name2="（"+temp[1];
			$("#title-"+id).append('<h2>'+name1+'</h2>');
			$("#title-"+id).append('<h4>'+name2+'</h4>');
		}
		else{//无括号时
			$("#title-"+id).append('<h2>'+name+'</h2>');
		}
		
		$("#card-"+id).append('<div class="price" id="price-'+id+'"></div>');
		$("#price-"+id).append('<h5><sup>￥</sup>'+cost+'</h5>');
		
		$("#card-"+id).append('<div class="option" id="option-'+id+'"></div>');
		$("#option-"+id).append('<img src="'+img+'" />');
		
		
		if(url=="")
			url="javascript:alert('你知道该找谁兑奖的qwq');";
		$("#card-"+id).append('<a href="'+url+'">Order Now</a>');
	}
}

// <div class="swiper-slide">
// 		<section>
// 			<div class="card-container">
// 				<div class="card text-center">
// 					<div class="title">
// 						<i class="fa fa-medkit" aria-hidden="true"></i>
// 						<h2>美若康隐形近视眼镜日抛盒10片</h2>
// 						<h4>（475/425）*2</h4>
// 					</div>
// 					<div class="price">
// 						<h5><sup>￥</sup>72.00</h5>
// 					</div>
// 					<div class="option">
// 						<img src="../resouces/img/prizepool/01.png" />
// 					</div>
// 					<a href="#">Order Now</a>
// 				</div>
// 			</div>
// 		</section>
// 	</div>