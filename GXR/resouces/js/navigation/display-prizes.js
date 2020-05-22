// 主页展示中奖信息汇总
function indexDisplayPrize() {
	$("#navbar").collapse('hide');
	var node = $("#prizeTable").exist();
	if (!node) {
		$("#first-row").attr("hidden","hidden");
		$("#prizes").append('<table class="table table-striped table-hover" id="prizeTable">');
		$("#prizeTable").append('<tr>'+
			'<th style="text-align: center;">#</th>'+
			'<th style="text-align: center;">奖品</th>'+
			'<th style="text-align: center;">时间</th>'+
			'<th style="text-align: center;">中奖信息</th>'+
			'</tr>');

		var len = content.length;
		for (var i = 1; i <= len; i++) {
			if (i % 2 == 1)
				$("#prizeTable").append('<tr class="active" id=tr' + i + '>');
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

// 抽奖页展示中奖信息汇总
function shoppingCartDisplayPrize(){
	sessionStorage.setItem("from","prize");//存session
	window.location.href="./index.html";//跳转到主页
}
$(document).ready(function() {
	var temp=sessionStorage.getItem("from");
	if(temp=="prize"){ //session中信息存在
		indexDisplayPrize();//展示中奖信息汇总
		sessionStorage.setItem("from","");//销毁session
	}
});

// 隐藏中奖系统
function noDisplayPrize(){
	$("#navbar").collapse('hide');
	var node = $("#prizeTable").exist();
	if (node) {
		$("#prizeTable").remove();
		$("#first-row").removeAttr("hidden");
	}
}