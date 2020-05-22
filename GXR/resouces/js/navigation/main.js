// 导航栏浮动
$(document).ready(function() {
	var mt=0;
	var nav = document.getElementById("nav");
	var mt = nav.offsetTop;
	window.onscroll = function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > mt) {
			nav.style.position = "fixed";
			nav.style.width = "100%";
			nav.style.top = "0";
			nav.style.zIndex = "9999"
		} else {
			nav.style.position = "static";
		}
	}
});

// pe端导航栏自动折叠
$(window).scroll(function() {
	//小屏幕下的导航条折叠
	if ($(window).width() < 768) {
		//点击导航链接之后，把导航选项折叠起来
		$(window).click(function() {
			$("#navbar").collapse('hide');
		});
		//滚动屏幕时，把导航选项折叠起来
		$(window).scroll(function() {
			$("#navbar").collapse('hide');
		});
	}
});
