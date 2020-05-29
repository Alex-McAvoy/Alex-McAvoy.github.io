//随机url参数生成
function updateNum(num){
	var table=["1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
	for(var i=1;i<=5;i++){
		var rand = Math.floor((Math.random()*16)); //获取随机数
		num=num+table[rand];
	}
	return num;
}

function toLottery(){
	var num=sessionStorage.getItem("num");
	if(num==""||num=="error"||num==null) //session信息不存在
		num=updateNum(0);
	else
		num=updateNum(num); //更新num参数
	window.location.href="./lottery.html?num="+num;
}