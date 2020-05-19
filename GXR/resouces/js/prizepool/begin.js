// 读取奖品池json
$(document).ready(function() {
	$.ajax({
		url: '../resouces/json/prizes_pool.json',
		async: false,
		success: function(e) {
			data=e;
		}
	})
	
	var id=0;
	var len = Object.keys(data).length;
	var arr = new Array(len).fill(0);
	for(var obj in data){
		id++;
		var card_num=Math.floor(Math.random()*5)+1;//卡片颜色id
		
		//json数据
		var name=data[obj]["name"];
		var cost=data[obj]["cost"];
		var genre=data[obj]["genre"];
		var url=data[obj]["url"];
		var img=data[obj]["img"];
		
		if(genre=="maquillage")
			genre='<i class="fa fa-heart" aria-hidden="true"></i>';
		else if(genre=="stationery")
			genre='<i class="fa fa-pencil" aria-hidden="true"></i>';
		else if(genre=="snack")
			genre='<i class="fa fa-coffee" aria-hidden="true"></i>';
		else if(genre="clothes")
			genre='<i class="fa fa-female" aria-hidden="true"></i>';
		else if(genre=="electronics")
			genre='<i class="fa fa-keyboard-o" aria-hidden="true"></i>';
		
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
		$("#price-"+id).append('<h5>'+cost+'<sup>￥</sup></h5>');
		
		$("#card-"+id).append('<div class="option" id="option-'+id+'"></div>');
		$("#option-"+id).append('<img src="'+img+'" />');
		
		
		$("#card-"+id).append('<a href="'+url+'">Order Now</a>');
	}
	
	//"genre": "maquillage"化妆品
	//"genre": "stationery",文具
	//"genre": "snack",食物
	//"genre": "clothes",衣服
	//"genre": "electronics",电子产品
});

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
// 						<h5>72.00<sup>￥</sup></h5>
// 					</div>
// 					<div class="option">
// 						<img src="../resouces/img/prizepool/01.png" />
// 					</div>
// 					<a href="#">Order Now</a>
// 				</div>
// 			</div>
// 		</section>
// 	</div>