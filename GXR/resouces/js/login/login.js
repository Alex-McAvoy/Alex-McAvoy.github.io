// 读取json
$(document).ready(function() {
	$.ajax({
		url: './resouces/json/6c6f67696e.json',
		async: false,
		success: function(data) {
			json_user = data.user;
			json_password = data.password;
		}
	})
});

// 用户名密码框焦点事件判断
$(function() {
	$("#user").blur(function() { // 用户名文本框失去焦点触发验证事件 
		if (!$(this).val())
			$("#input-user").text("请输入用户名！");
		else
			$("#input-user").text("");
	});
	$("#password").blur(function() { // 用户密码框失去焦点触发验证事件
		if (!$(this).val())
			$("#input-password").text("请输入密码！");
		else
			$("#input-password").text("");
	});
})

// 登录验证
function login() {
	var user = $("#user").val();
	var password = $("#password").val();
	if (!$("#user").val()) {
		$("#input-user").text("请输入用户名！");
	}
	else if (!$("#password").val()){
		$("#input-user").text("");
		$("#input-password").text("请输入密码！");
	}
	else {
		$("#input-user").text("");
		$("#input-password").text("");
		user = parseFloat(user);
		password = parseFloat(password);
		if (user == json_user) {
			if (password == json_password) {
				$("#input-password").text("");
				alert("生气了，禁止谷心然小朋友登录！")
				// alert("登录成功！");
				// window.location.href="index/index.html";
				// sessionStorage.setItem("user","GXR");//存session
				return false;
			} else {
				$("#input-password").text("密码错误！");
			}
		} else {
			$("#input-user").text("用户名不存在！");
		}
	}
}

