$(document).ready(function() {
    // 打开页面的时候，清空表格数据，发送请求
    var $newstable = $('#newstable tbody');

    refreshNews();

    /*************************提交新闻********************/
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //判断是否为空
        if ($('#newstitle').val() === '' || $('#newstype').val() === '' || $('#newsimg').val() === '' || $('#newstime').val() === '' || $('#newssrc').val() === '') {
            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newstype').val() === '') {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            //提交新闻
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            }
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    $('#newstitle').val('');
                    $('#newstype').val('');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
                    refreshNews();
                    alert('插入了一条数据');
                }
            });
        }
    });

    /**********************删除数据**********************/
    var deleId = null;
    $newstable.on('click', '.btn-danger', function() {
        $('#deleModal').modal('show');
        deleId = $(this).parent().prevAll().eq(-1).html();
        // console.log(deleId);
    });
    //按确认按钮，删除数据
    $('#confirmBtn').click(function() {
        if (deleId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleId },
                success: function(data) {
                    // refreshNews();
                    // $('#deleModal').modal('hide');
                }
            });
            refreshNews();
            $('#deleModal').modal('hide');
        }
        
    });

    /******************修改数据************************/
    var updateId = null;
    $newstable.on('click', '.btn-primary', function() {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(-1).html();
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            datatype: 'json',
            data: {newsid: updateId },
            success: function(data) {
                // console.log(deleId);
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
                $('#unewssrc').val(data[0].newssrc);
            }
        });
    });
    //按确认按钮，修改数据
    $('#updateBtn').click(function() {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data:{
                id:updateId,
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val()
            },
            success: function(data) {
                refreshNews();
                $('#updateModal').modal('hide');

            }
        });
    });



    function refreshNews() {
        $newstable.empty();
        $.ajax({
            type: 'get',
            url: '/admin/getnews',
            datatype: 'json',
            success: function(data) {
                $.each(data,function(index, item) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime.split('T')[0]);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdctrl = $('<td>');
                    var $btnmdfy = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndele = $('<button>').addClass('btn btn-xs btn-danger').html('删除');
                    $tdctrl.append($btnmdfy, $btndele);
                    var $row = $('<tr>');
                    $row.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdsrc, $tdctrl);
                    $newstable.append($row);
                });
            }
        });
    }


});
