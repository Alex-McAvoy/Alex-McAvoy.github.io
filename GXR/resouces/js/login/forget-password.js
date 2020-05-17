$(function(){
	$("#mouse").mouseover(function(){
		$("#forget-password").text("忘记用户名和密码了？你知道该找谁的∠( ᐛ 」∠)＿");
	})
	$("#mouse").mouseout(function(){
		$("#forget-password").text("");
	})
});