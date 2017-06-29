var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db');

var connection = mysql.createPool(db);

/* 后台路由页面*/

// 获取所有的新闻列表
router.get('/getnews', function(req, res, next) {
  connection.query('SELECT * FROM `news`',function(err,rows){
  	res.json(rows);
  });
});

//更新新闻
router.post('/update', function(req, res){
	var newsid = req.body.id;
	var newstitle = req.body.newstitle;
	var newstype = req.body.newstype;
	var newsimg = req.body.newsimg;
	var newstime = req.body.newstime;
	var newssrc = req.body.newssrc;

	connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE id=?',
		[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
			res.json(rows.changedRows);
		});
});

//删除新闻
router.post('/delete', function(req, res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`id` = ?',[newsid],function(err,result){
			console.log(result.effectedRows);
	});
});

//模态框
router.get('/curnews', function(req, res, next){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows){
		res.json(rows);
	});
});

//插入新闻
router.post('/insert', function(req, res){
	var newstitle = req.body.newstitle;
	var newstype = req.body.newstype;
	var newsimg = req.body.newsimg;
	var newstime = req.body.newstime
	var newssrc = req.body.newssrc;

	connection.query('INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES(?,?,?,?,?)',
		[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
			res.json(result.insertId);
		});
});

module.exports = router;








