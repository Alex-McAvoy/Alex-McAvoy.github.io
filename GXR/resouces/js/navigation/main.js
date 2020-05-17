// 导航栏浮动
var mt = 0;
window.onload = function() {
	var nav = document.getElementById("nav");
	var mt = nav.offsetTop;
	window.onscroll = function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > mt) {
			nav.style.position = "fixed";
			nav.style.width="100%";
			nav.style.top = "0";
			nav.style.zIndex="9999"
		} else {
			nav.style.position = "static";
		}
	}
}
