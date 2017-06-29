$(document).ready(function() {
    var isFirst = true;
    refreshNews("精选");
    $('nav a').click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);

        // alert('123');
    });

});

function refreshNews(type) {

    var $lists = $('article ul');
    $lists.empty();

    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {
            console.log(data);

            data.forEach(function(item,index){

                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsimg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span><span>').html(item.newstime.split('T')[0]).addClass('newstime').appendTo($p);
                var $newssrc = $('<span><span>').html(item.newssrc).addClass('newssrc').appendTo($p);
            });
            
        }
    });
}
