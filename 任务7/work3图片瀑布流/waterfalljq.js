$(window).on('load', function() {
    //图片的定位布局
    waterfall();
    //页面滚动时加载新图片
    var dataInt = {
        "data": [{ "src": "23.jpg" }, { "src": "24.jpg" },
            { "src": "25.jpg" }, { "src": "26.jpg" }, { "src": "27.jpg" },
            { "src": "28.jpg" }, { "src": "29.jpg" }, { "src": "30.jpg" },
            { "src": "31.jpg" }, { "src": "32.jpg" }
        ]
    };
    $(window).on('scroll', function() {
        console.log(checkScrollSlide());
        //判断是否具备加载图片的条件
        if (checkScrollSlide()) {
            $.each(dataInt.data, function(key, value) {
                var oBox = $('<div>').addClass('box').appendTo($('#main'));
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src', 'images/' + $(value).attr('src')).appendTo($(oPic));
            })
            waterfall();
        }
    });
    //响应式布局
    $(window).on('resize',function(){
        waterfall();
    });
});

function waterfall() {
    var $boxs = $('#main>div');
    //获取列宽
    var w = $boxs.eq(0).outerWidth();
    //获取列数
    var cols = Math.floor($(window).width() / w);
    //大盒子宽 居中
    $('#main').width(w * cols).css('margin', '0 auto');
    //获取上一行中哪张图片的高最矮,将下一行第一张图片放在此下面
    var hArr = [];
    //遍历
    $boxs.each(function(index, value) {
        value.style.cssText - '';
        // console.log(value);
        //图片高
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            //获取hArr中哪个数字最小
            var minH = Math.min.apply(null, hArr);
            //获取最小值的索引
            var minHIndex = $.inArray(minH, hArr);
            //将value的dom对象转换为jq对象 $(value)
            $(value).css({
                    'position': 'absolute',
                    'top': minH + 'px',
                    'left': minHIndex * w + 'px'
                })
                //之后的图片的position都为absolute，造成图片重叠
                // 解决：修改数组，改变minH的高
            hArr[minHIndex] += $boxs.eq(index).outerHeight();
        }
        // console.log(minHIndex);
    })
}
//判断是否具备加载图片的条件
function checkScrollSlide() {
    // 获取最后一张图片
    var lastBox = $('#main>div').last();
    //获取最后一张图片滚动的距离
    var lastBoxDis = lastBox.offset().top + Math.floor(lastBox.outerHeight() / 2);
    // console.log(lastBoxDis);
    //获取滚动条滚走的距离
    var scrollTop = $(window).scrollTop();
    //获取浏览器的高度
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}
