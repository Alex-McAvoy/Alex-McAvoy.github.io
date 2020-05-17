window.onload = function() {
	//轮播图设置
	$('.carousel').carousel({
		interval: 3000
	});
	//读取开奖信息json
	$.ajax({
		url: '../resouces/json/lottery.json',
		async: false,
		success: function(data) {
			num = data.num;
		}
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
}