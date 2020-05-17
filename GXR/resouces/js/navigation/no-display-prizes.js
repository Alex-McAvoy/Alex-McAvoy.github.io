// 隐藏中奖系统
function noDisplayPrize(){
	var node = $("#prizeTable").exist();
	if (node) {
		$("#prizeTable").remove();
		$("#first-row").removeAttr("hidden");
	}
}