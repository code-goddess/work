$(document).ready(function() {
    // 关注
    $('#caremenu>span').click(function() {
        var ulNode = $(this).next('ul');
        ulNode.slideToggle('1000');
    });
    $('.titlebox li').each(function(index) {
        $(this).click(function(e) {
            // alert('123');
            $('.box div.content').removeClass('content');
            $('.titlebox li.tabin').removeClass('tabin');
            $('.tab').eq(index).addClass('content');
            $(this).addClass('tabin');
        });
    });
    // 设置
    $('.setimg').click(function() {
        $('.setting').slideToggle('1000');
    });

});
// 视频里的图片瀑布流布局
// $('.video').on('load',function(){
// 	alert('123');
// });
$(window).on('load', function() {
        alert('123');
        waterfall();
 });
function waterfall() {
    alert('视频里的图片瀑布流布局');
}
