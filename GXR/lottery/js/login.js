// 读取json
$(document).ready(function() {
	$.ajax({
		url: './6c6f67696e.json',
		async: false,
		success: function(data) {
			json_user = data.user;
			json_password = data.password;
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

// 登录验证
function login(e) {
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
				window.location.href="prize.html";
				alert("登录成功！");
			} else {
				alert("密码错误！");
			}
		} else {
			alert("用户名不存在！");
		}
	}
}
