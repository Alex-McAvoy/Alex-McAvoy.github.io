// 抽奖
$(document).ready(function() {
	$('.lottery').on('click', function() {
		$(this).attr("disabled", true); //点击按钮后,按钮进入不可编辑状态
		for(var i=1;i<=9;i++){
			$("li-"+i).hover(function(){
				$("li").css("width","300px");
			});
		}
		// var sum = names.length;
		// var le = 3 //设置滚动多轮
		// var hh = sum * le;
		// var y = 1;
		// var x = hh;
		// var times = 12; //调节滚动速度
		// var rand = parseInt(Math.random() * (x - y + 1) + y); //获取随机数
		// var i = Math.ceil(rand / sum); //向上取整
		// for (var i = i; i < le; i++) {
		// 	rand = rand + sum
		// }
		// time(1, rand, times, sum, times) //点击按钮后触发time事件
	})

});
function fun(){
	console.log(123);
}
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
