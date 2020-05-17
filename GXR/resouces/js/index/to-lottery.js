//随机url参数生成
function updateNum(){
	var table=["1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
	for(var i=1;i<=5;i++){
		var rand = Math.floor((Math.random()*16)); //获取随机数
		num=num+table[rand];
	}
}

function toLottery(){
	updateNum(); //更新num参数
	window.location.href="./lottery.html?num="+num;
}