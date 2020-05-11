// 读取json
$(document).ready(function() {
	$.ajax({
		url: './json/6c6f67696e.json',
		async: false,
		success: function(data) {
			json_user = data.user;
			json_password = data.password;
		}
	})
	$.ajax({
		url: './json/prizes.json',
		async: false,
		success: function(data) {
			num = data.num;
		}
	})
});

// 焦点事件判断
$(function() {
	$("#user").blur(function() { // 用户名文本框失去焦点触发验证事件 
		if (!$(this).val())
			alert("用户名不能为空！");
	});
	$("#password").blur(function() { // 用户密码框失去焦点触发验证事件
		if (!$(this).val())
			alert("密码不能为空！");
	});
})

function updateNum(){
	var table=["1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
	for(var i=1;i<=5;i++){
		var rand = Math.floor((Math.random()*16)); //获取随机数
		num=num+table[rand];
	}
}

// 登录验证
function login() {
	var user = $("#user").val();
	var password = $("#password").val();
	if (!$("#user").val())
		alert("用户名不能为空！");
	else if (!$("#password").val())
		alert("密码不能为空！");
	else {
		user = parseFloat(user);
		password = parseFloat(password);
		if (user == json_user) {
			if (password == json_password) {
				alert("登录成功！");
				updateNum(); //更新num参数
				window.location.href="prize.html?num="+num;
				return false;
			} else {
				alert("密码错误！");
			}
		} else {
			alert("用户名不存在！");
		}
	}
}
