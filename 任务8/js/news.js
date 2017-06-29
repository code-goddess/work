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
    // var $lists = $('<ul></ul>').appendTo($('article'));
    $lists.empty();

    $.ajax({
        url: 'server/getnews.php',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {

            $.each(JSON.parse(data), function(index,item){

                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsimg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span><span>').html(item.newstime).addClass('newstime').appendTo($p);
                var $newssrc = $('<span><span>').html(item.newssrc).addClass('newssrc').appendTo($p);
            });
            
        }
    });
}
