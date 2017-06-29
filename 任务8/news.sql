-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: 2017-06-10 10:17:06
-- 服务器版本： 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(12, '国内', '外卖的送餐员 送一单可以挣多少钱？', 'img/1.jpg', '2017-06-02 00:00:00', '极客'),
(13, '百家', '外卖的送餐员 送一单可以挣多少钱？', 'img/2.jpg', '2017-06-09 00:00:00', 'zxc'),
(15, '精选', '外卖的送餐员 送一单可以挣多少钱？', 'img/3.jpg', '2017-06-16 00:00:00', '极客'),
(16, '精选', '外卖的送餐员 送一单可以挣多少钱？', 'img/4.jpg', '2017-06-19 00:00:00', '财经'),
(17, '百家', '外卖的送餐员 送一单可以挣多少钱？', 'img/5.jpg', '2017-01-03 00:00:00', '娱乐');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;