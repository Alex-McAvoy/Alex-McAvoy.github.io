$(function(){
	$("#mouse").mouseover(function(){
		$("#forget-password").html("忘记用户名和密码了？<br/>你知道该找谁的<br/>∠( ᐛ 」∠)＿");
	})
	$("#mouse").mouseout(function(){
		$("#forget-password").text("");
	})
});