$(document).ready(function() {
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