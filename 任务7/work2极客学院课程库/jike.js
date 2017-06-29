$(document).ready(function() {
	// 导航栏下拉菜单
	var $head = $('#title');
	    $tit = $head.find('li');
	    $tit.hover(function(){
	    	$(this).find('.dropmenu').toggleClass('hide');
	    });
    // 左侧下拉菜单的实现
    var $ul = $('#proinfo');
        $lis = $ul.find('li');
    $lis.hover(function() {
        $(this).find(".prosmore").toggleClass('hide');
    });
    // 右侧下拉菜单
    var $rtitle = $('.title');
        $rlis = $rtitle.find('li');
        $rlis.hover(function() {
        $(this).find(".dropbox").toggleClass('hide');
    });
    // 点击搜索按钮出现搜索框，点击关闭按钮出现标题栏
    var $seach = $('.seach').find('li:last-child');
    var $close = $('#close');
    var $sbox = $('#sbox'); 
    var $tbox = $('#tbox');
    $seach.click(function(){
        $tbox.addClass('hide');
        $sbox.removeClass('hide');
    });
    $close.click(function(){
        $sbox.addClass('hide');
        $tbox.removeClass('hide');
    });
    // 点击图片图片加长的效果
    var imgli = $('.waterfall ul li');
    var text = $('.intro p');
    var degree = $('.degree');
    var num = $('.learn-num');
    var info = $('.intro');
    imgli.on('mouseover',function(e){
        $(this).find(text).removeClass('hide');
        $(this).find(degree).removeClass('hide');
        $(this).find(num).removeClass('hide');
        $(this).find(info).css('position','absolute');
    });
    imgli.on('mouseout',function(e){
        $(this).find(text).addClass('hide');
        $(this).find(degree).addClass('hide');
        $(this).find(num).addClass('hide');
        $(this).find(info).css('position','relative');
    });
});
