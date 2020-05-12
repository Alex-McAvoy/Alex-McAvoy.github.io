// 抽奖
$(document).ready(function() {
	for (var i = 1; i <= names.length; i++) {
		$(".content").append('<div id="' + i + '" class="kuai">' + names[i - 1] + '</div>');
	}
	$(".content").append('<div id="num" class="num">剩余抽奖次数：' + num + '次</div>')
	$('.lottery').on('click', function() {
		$(this).attr("disabled", true); //点击按钮后,按钮进入不可编辑状态
		num -= 1; //抽奖次数-1
		$(".num").html('<div id="num">抽奖次数：' + num + '次</div>')
		var sum = names.length;
		var le = 3 //设置滚动多轮
		var hh = sum * le;
		var y = 1;
		var x = hh;
		var times = 12; //调节滚动速度
		var rand = parseInt(Math.random() * (x - y + 1) + y); //获取随机数
		var i = Math.ceil(rand / sum); //向上取整
		for (var i = i; i < le; i++) {
			rand = rand + sum
		}
		time(1, rand, times, sum, times) //点击按钮后触发time事件
	})

});

function time(shu, sums, tie, sum, tis) { //倒计时
	var tie = tie + tis //滚动速度
	setTimeout(function() {
		if (shu <= sums) {
			$('.kuai').css({
				'background-color': '',
				'color': ''
			}) //清除css
			$('#' + shu + '').css({
				'background-color': '#ff0000',
				'color': '#fff'
			}) //添加css样式
			if (shu == sum) {
				sums = sums - shu
				shu = 0;
			}
			shu++
			text(shu, sums, tie, sum, tis)
		} else { //抽奖完毕
			if (num > 0) //抽奖次数大于0,按钮重新进入可编辑状态
				$('.lottery').attr("disabled", false);
		}
	}, tie);
}

function text(shu, sums, tie, sum, tis) {
	time(shu, sums, tie, sum, tis) //执行time事件
}
