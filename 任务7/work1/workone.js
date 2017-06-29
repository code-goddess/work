$(document).ready(function() {
	// 关注
	$('#caremenu>span').click(function(){
		var ulNode = $(this).next('ul');
		ulNode.slideToggle('1000');
	});
	$('.titlebox li').each(function(index){
		$(this).click(function(){
			// alert('123');
			$('.box div.content').removeClass('content');
			$('.titlebox li.tabin').removeClass('tabin');
			$('.box div').eq(index).addClass('content');
			$(this).addClass('tabin');
		});
	});
	// 设置
	$('.setimg').click(function(){
		$('.setting').slideToggle('1000');
	});
});