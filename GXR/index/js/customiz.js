window.onload = function() {
	$('.carousel').carousel({
		interval: 3000
	});
	$.ajax({
		url: './index/json/prizes.json',
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
	
	// 判断结点是否存在
	(function($) {
		$.fn.exist = function() {
			if ($(this).length >= 1) {
				return true;
			}
			return false;
		};
	})(jQuery);
}

function showPrize() {
	var node = $("#prizeTable").exist();
	console.log(node);
	if (node) {
		$("#prizeTable").remove();
	} else {
		$("#prizes").append('<table class="table table-striped table-hover" id="prizeTable">');
		$("#prizeTable").append('<tr><th>#</th><th>奖品</th><th>时间</th><th>中奖信息</th></tr>');

		var len = content.length;
		for (var i = 1; i <= len; i++) {
			if (i % 2 == 1)
				$("#prizeTable").append('<tr class="success" id=tr' + i + '>');
			else
				$("#prizeTable").append('<tr class="active" id=tr' + i + '>');
			var temp = '#tr' + i;
			$(temp).append('<td>' + i + '</td>');
			$(temp).append('<td>' + content[i - 1] + '</td>');
			$(temp).append('<td>' + times[i - 1] + '</td>');
			$(temp).append('<td>' + '<a href="' + url[i - 1] + '">中奖信息</a>' + '</td>');
		}
	}
}
