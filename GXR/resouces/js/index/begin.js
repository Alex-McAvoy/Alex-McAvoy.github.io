$(document).ready(function() {
	
	var temp=sessionStorage.getItem("user");
	if(temp!="GXR"){ //session中不信息存在
		alert("请重新登录!");
		window.location.href="../login.html";
	}
	
	
	//轮播图设置
	$('.carousel').carousel({
		interval: 3000
	});
	//读取中奖汇总json
	$.ajax({
		url: '../resouces/json/prizes_table.json',
		async: false,
		success: function(data) {
			content = data.content;
			times = data.times;
			url = data.url;
		}
	});
	// console.log(content);
	// console.log(times);
	// console.log(url);
	
	// 判断结点是否存在原型
	(function($) {
		$.fn.exist = function() {
			if ($(this).length >= 1) {
				return true;
			}
			return false;
		};
	})(jQuery);
});