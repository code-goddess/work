// 画图
// var c = document.getElementById('myCavas');
// var ctx = c.getContext('2d');
// ctx.lineJoin="round";
// ctx.strokeStyle="#803500";
// ctx.moveTo(20,80);
// ctx.lineTo(280,80);
// ctx.lineTo(270,50);
// ctx.stroke();

//动态添加公交车站牌
$(document).ready(function () {
	// body...
	var $stopName = $('.stopName').find('h1').html();
	var $busArr = ['红旗河沟枢纽','大庙','小苑','蚂蝗梁','李家坪立交','三弯路口','二号桥','北国风光'];
	var $busInfo = $('<div></div>').addClass('busInfo').appendTo($('.box'));
	var $busName = $('<div></div>').addClass('busName').appendTo($busInfo);
	$h2 = $('<h2></h2>').html('301').appendTo($busName);
	$p1 = $('<p></p>').html('首班车：6:30').appendTo($busName);
	$('<p></p>').html('末班车：22:30').appendTo($busName);
	var $busLine = $('<div></div>').addClass('busLine').appendTo($busInfo);
	$('<h3></h3>').html('红旗河沟枢纽 --- 北国风光').appendTo($busLine);
	var $stop = $('<ul></ul>').addClass('stop').appendTo($busLine);
	for (var i = 0; i < $busArr.length; i++) {
		var $li = $('<li></li>').html($busArr[i]).appendTo($stop);
		$li.each(function(index,item){
			if ($(this).html() == $stopName) {
				$(this).css('color','#803500');
			}
		});
	}
	$('<div></div').addClass('mydiv arrow-right').appendTo($busLine);

});