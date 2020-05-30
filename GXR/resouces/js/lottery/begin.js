// 读取json
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
	alert("			注意事项\n		抽奖机会仅有三次\n请在抽奖完毕后凭截图任选一个进行兑奖\n	    P.S.刷新没用 🙃  🙃  🙃 ");
	obj_data=randomData();//json对象随机排序
	generatePage();//生成页面
});
//json对象随机排序
function randomData(){
	var obj_data=[];
	// var num=0;
	for(var obj in data){
		// num++;
		// if(num==34||num==35||num==36)
		// 	continue;
		obj_data.push(obj);
	}
	obj_data.sort(() => Math.random() - 0.5);
	return obj_data;
}
//生成页面
function generatePage(){
	var len = Object.keys(data).length;
	var names=new Array(9);
	for(var i=0;i<9;i++){		
		var obj=obj_data[i];
		var name=data[obj]["name"];
		names[i]=name;
		// names.push(name);
	}
	names[4]="谢谢参与"
	
	var num=sessionStorage.getItem("num");//获取抽奖次数
	for (var i = 0; i <9; i++){ //生成九宫格
		$(".content").append('<div id="' + i + '" class="prizes"></div>');
		$("#"+i).append('<span class="prizes-text">'+names[i]+'</span>');
	}
	$(".content").append('<div id="num" class="num">剩余抽奖次数：' + num + '次</div>');
	if(num>0)
		lottery();//抽奖
}
