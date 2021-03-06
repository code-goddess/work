$(document).ready(function() {
    //保存换肤的颜色
    /**
    * 单例模式
    * 只创建一次，减少代码的重复，节约浏览器加载时间
    */
    var singleton = {
        unique: null,
        getInstance:function (){
            if (!this.unique) {
                this.unique = localStorage.getItem("themeColor");
            }
            return this.unique;
        }
    }
    var themeColor = singleton.getInstance();
    if (themeColor) {
        $('body').css('background',themeColor);
        $('.fiexnews').css('background',themeColor);
        $('.h').css('background',themeColor);
    }
    //换肤
    $('.skin').on('click',function(index,value){
        if (isFirst) {
            var $skinDiv = $('<div>').addClass('skinDiv').prependTo($('header'));
            var $saveBtn = $('<button>').addClass('saveBtn').text('保存').appendTo($skinDiv);
            $saveBtn.click(function(){
                $skinDiv.remove();
                isFirst = true;
            });
            //创建颜色
            var $colorArr = ["AliceBlue", "white", "Aqua", "Aquamarine", "DarkOliveGreen ", "LightGreen"];
            for (var i = 0; i < $colorArr.length; i++) {
                var $skinImg = $('<p>').addClass('skinImg').appendTo($skinDiv);
                $skinImg.css('background',$colorArr[i]);
                //函数闭包
                /**
                * 单例模式
                * 闭包容易造成内存泄漏，使用闭包实现的单例，相对而言更安全一点
                */
                var single = !function(i){
                    $skinImg.each(function(index,value){
                        $(value).click(construct);
                    });
                    function construct(){
                        $('body').css('background',$colorArr[i]);
                        $('.fiexnews').css('background',$colorArr[i]);
                        $('.h').css('background',$colorArr[i]);
                        localStorage.setItem("themeColor", $colorArr[i]);
                    }
                    
                }(i);
            }
            isFirst = false;
        }
    });
    
    // 关注
    $('#caremenu>span').click(function() {
        var ulNode = $(this).next('ul');
        ulNode.slideToggle('1000');
    });
    $('.titlebox li').each(function(index) {
        $(this).click(function(e) {
            $('.box div.content').removeClass('content');
            $('.titlebox li.tabin').removeClass('tabin');
            $('.tab').eq(index).addClass('content');
            $(this).addClass('tabin');
        });
    });
    // 设置
    $('.setimg').click(function(e) {
        //禁止事件冒泡
        e.stopPropagation();
        $('.setting').slideDown('1000');
    });
    //点击页面，收起面板 事件冒泡
    $(document).on('click', function() {
        $('.setting').slideUp('1000');
    });
    //设置中添加关注
    var isFirst = true;
    $('.uncare .mydiv').each(function(index) {
        $(this).click(function() {
            $(this).appendTo('.loved');
            $('.loved .mydiv').each(function(index, value) {
                $(this).click(function(event) {
                    $(this).appendTo('.uncare');
                });
            });
        });
    });

    $(window).scroll(function() {
        // 滚动时，让推荐右侧模块的position固定不动
        var $recommend = $('.fiexnews');
        // 获取滚动的距离
        var t = $(window).scrollTop();
        // console.log(t);
        if (t > 190) {
            $recommend.css({
                'position': 'fixed',
                'z-index': '99',
                'top': 100 + 'px',
                'left': 724 + 'px'
            });
        } else {
            $recommend.css({
                'position': 'absolute',
                'top': 32 + 'px',
                'left': 590 + 'px'
            });
        }
        // 滚动时，让百度position固定不动
        if (t>0) {
            if (isFirst) {
                var $box = $('<div>').addClass('baidubox').prependTo($('header'));
                var $baiduimg = $('<img>').attr('src','img/logo.png').addClass('bdimg').appendTo($box);
                var $input = $('.biv-bor').clone().addClass('bdinput').appendTo($box);
                isFirst = false;
            }
        } else {
            $('header').find('.baidubox').remove();
            isFirst = true;
        }
    });

});

