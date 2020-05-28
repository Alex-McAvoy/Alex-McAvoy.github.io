// 读取json
$(document).ready(function() {
	var temp=sessionStorage.getItem("user");
	if(temp!="GXR"){ //session中不信息存在
		alert("请重新登录!");
		window.location.href="../login.html";
	}
	$.ajax({
		url: '../resouces/json/lottery.json',
		async: false,
		success: function(data) {
			name = data.name;
			names = name.split(",");
		}
	})
	num = getUrlParam('num')[0];
});

// 获取url参数
function getUrlParam(param) {
	var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; //返回参数值
}