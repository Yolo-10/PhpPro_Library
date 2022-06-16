/*
Navicat MySQL Data Transfer

Source Server         : library
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : librarydb

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2022-05-26 12:31:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `search_id` varchar(20) NOT NULL,
  `ISBN` varchar(20) NOT NULL,
  `book_author` varchar(20) NOT NULL,
  `book_publisher` varchar(20) NOT NULL,
  `publish_date` date NOT NULL,
  `book_name` varchar(20) NOT NULL,
  `book_img` varchar(100) DEFAULT NULL,
  `storage_time` date NOT NULL,
  `storage_place` varchar(255) NOT NULL,
  PRIMARY KEY (`search_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('1001', '9787302023685', '严蔚敏', '机械工业出版社', '2014-01-14', '数据结构:c语言版', '../images/1001.jpg', '2021-01-23', '二楼南区3列1排');
INSERT INTO `books` VALUES ('1011', '12121212', '刘冰', '机械工业出版社', '2021-07-16', '软件工程实践教程', '../images/软件工程实践教程.jpg', '2022-05-19', '二楼南区a列1排');
INSERT INTO `books` VALUES ('1012', '34343434', '张凯', '中国电力出版社', '2022-05-11', '软件工程师指南', '../images/软件工程师指南.jpg', '2022-04-06', '三楼东区b列2排');
INSERT INTO `books` VALUES ('1014', '1234567', '路遥', '贵州人民出版社', '1905-06-24', '平凡的世界', null, '2022-02-28', '1楼东区b架4层');
INSERT INTO `books` VALUES ('1015', '1234568', '袁津生，吴砚农', '人民邮电出版社', '1905-06-25', '计算机网络安全基础', null, '2022-03-01', '2楼东区c架5层');
INSERT INTO `books` VALUES ('1016', '1234569', '金汉均，金洋', '武汉大学出版社', '1905-06-26', '汇编语言程序设计', null, '2022-03-02', '3楼东区a架3层');
INSERT INTO `books` VALUES ('1017', '1234570', '张念鲁，刘红屏', '高等教育出版社', '1905-06-27', 'Web程序设计教程', null, '2022-03-03', '4楼东区a架1层');
INSERT INTO `books` VALUES ('1019', '1234572', '肖兴燕', '西南交通大学出版社', '1905-06-29', '马克思主义哲学', '../images/1019.jpg', '2022-03-05', '2楼西区a架1层');
INSERT INTO `books` VALUES ('1020', '1234573', '孙钟秀', '高等教育出版社', '1905-06-30', '操作系统教程', null, '2022-03-06', '3楼西区a架2层');
INSERT INTO `books` VALUES ('1021', '1234574', '吴启武', '消华人学出版社', '1905-07-01', 'C语首课程设计案例', null, '2022-03-07', '4楼西区b架4层');
INSERT INTO `books` VALUES ('1022', '1234575', '张吕菊', '高等教育出版社.', '1905-07-02', '医学免疫学', null, '2022-03-08', '1楼南区c架3层');
INSERT INTO `books` VALUES ('1024', '1234577', '中国人民大学书报资料中心', '中国人民大学书报资料社', '1905-07-04', '马克思列宁主义研究', null, '2022-03-10', '3楼南区b架4层');
INSERT INTO `books` VALUES ('1025', '1234578', '王昌英', '中央编泽出版社', '1905-07-05', '列宁时代观研究', null, '2022-03-11', '4楼南区a架1层');
INSERT INTO `books` VALUES ('1026', '1234579', '姚润皋，尚庆飞', '北京师范大学出版社', '1905-07-06', '列宁和中国化马克思主义哲学原著选读', '../images/1026.jpg', '2022-03-12', '1楼东区b架5层');
INSERT INTO `books` VALUES ('1027', '1234580', '李慎明，王伟光', '中央编译出版社', '1905-07-07', '马克思主义研究论丛', '../images/1027.jpg', '2022-03-13', '2楼东区a架1层');
INSERT INTO `books` VALUES ('1028', '1234581', '吴兵', '四川大学出版社', '1905-07-08', '马克思经济伦理思想及其当代价值', '../images/1028.jpg', '2022-03-14', '3楼东区c架5层');
INSERT INTO `books` VALUES ('1029', '1234582', '程怡主', '化学.工业出版社', '1905-07-09', '中药制药辅料应用学', null, '2022-03-15', '4楼东区b架4层');
INSERT INTO `books` VALUES ('1030', '1234583', '王长云，邵长伦:', '科学出版社', '1905-07-10', '洲洋药物学', null, '2022-03-16', '1楼西区a架1层');
INSERT INTO `books` VALUES ('1031', '1234584', '(明)李时珍', '吉林出版集团', '1905-07-11', '木草纲目', null, '2022-03-17', '2楼西区c架5层');
INSERT INTO `books` VALUES ('1032', '1234585', '郑艳', '科学出版社', '1905-07-12', '中约资源教育', null, '2022-03-18', '3楼西区c架4层');
INSERT INTO `books` VALUES ('1033', '1234586', '张爱玲', '北京十月文艺出版社', '1905-07-13', '雷峰塔', null, '2022-03-19', '4楼西区a架1层');
INSERT INTO `books` VALUES ('1036', '1234589', '(明)吴承恩', '古林出版集团', '1905-07-16', '西游记', null, '2022-03-22', '3楼南区c架5层');
INSERT INTO `books` VALUES ('1037', '1234590', '(明)罗贯中', '吉林由版集团', '1905-07-17', '三国演义', null, '2022-03-23', '4楼南区b架4层');
INSERT INTO `books` VALUES ('1038', '1234591', '(明)施耐庵', '古林出版集团', '1905-07-18', '水浒传', null, '2022-03-24', '1楼东区c架5层');
INSERT INTO `books` VALUES ('1039', '1234592', '(清)曹雪芹著高鹗续', '中火编译出版社', '1905-07-19', '红楼梦', null, '2022-03-25', '2楼东区b架4层');
INSERT INTO `books` VALUES ('1040', '1234593', '(美)威廉.G，齐克芒德著 刘启译', '清华大学出版社', '1905-07-20', '商业研究方法', null, '2022-03-26', '3楼东区b架4层');
INSERT INTO `books` VALUES ('1041', '1234594', '陈思进，金蓓當', '中国商业出版社', '1905-07-21', '华尔街金融真相', '../images/1041.jpg', '2022-03-27', '4楼东区c架5层');
INSERT INTO `books` VALUES ('1042', '1234595', '杨招军，秦国文', '光明日报出版社', '1905-07-22', '进化金融理论及应用', '../images/1042.jpg', '2022-03-28', '1楼西区c架5层');
INSERT INTO `books` VALUES ('gaodengshuxue', '123', '陈冠希', '复旦大学出版社', '2009-12-31', '高等数学', null, '2021-09-17', '三楼西区a排3列');
INSERT INTO `books` VALUES ('xianxingdaishu', '456', '吴彦祖', '清华大学出版社', '2010-12-31', '线性代数', null, '2022-09-17', '二楼南区d排3列');
INSERT INTO `books` VALUES ('zzzzz', '12312312', 'gyp', '清华大学出版社', '2022-04-19', '不知名书籍', null, '2022-05-25', '二楼东区c列8排');

-- ----------------------------
-- Table structure for book_inventory
-- ----------------------------
DROP TABLE IF EXISTS `book_inventory`;
CREATE TABLE `book_inventory` (
  `book_id` varchar(20) NOT NULL,
  `search_id` varchar(20) NOT NULL,
  `is_borrowed` int(255) NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `search_id` (`search_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book_inventory
-- ----------------------------
INSERT INTO `book_inventory` VALUES ('10141', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10142', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10143', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10144', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10145', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10146', '1014', '1');
INSERT INTO `book_inventory` VALUES ('10151', '1015', '1');
INSERT INTO `book_inventory` VALUES ('10152', '1015', '1');
INSERT INTO `book_inventory` VALUES ('10153', '1015', '1');
INSERT INTO `book_inventory` VALUES ('10154', '1015', '1');
INSERT INTO `book_inventory` VALUES ('10155', '1015', '1');
INSERT INTO `book_inventory` VALUES ('10161', '1016', '1');
INSERT INTO `book_inventory` VALUES ('10162', '1016', '1');
INSERT INTO `book_inventory` VALUES ('10163', '1016', '1');
INSERT INTO `book_inventory` VALUES ('10164', '1016', '1');
INSERT INTO `book_inventory` VALUES ('10165', '1016', '1');
INSERT INTO `book_inventory` VALUES ('10171', '1017', '1');
INSERT INTO `book_inventory` VALUES ('10172', '1017', '1');
INSERT INTO `book_inventory` VALUES ('10173', '1017', '1');
INSERT INTO `book_inventory` VALUES ('10174', '1017', '1');
INSERT INTO `book_inventory` VALUES ('10181', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10182', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10183', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10184', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10185', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10186', '1018', '1');
INSERT INTO `book_inventory` VALUES ('10191', '1019', '0');
INSERT INTO `book_inventory` VALUES ('10192', '1019', '1');
INSERT INTO `book_inventory` VALUES ('10193', '1019', '1');
INSERT INTO `book_inventory` VALUES ('10194', '1019', '0');
INSERT INTO `book_inventory` VALUES ('10201', '1020', '1');
INSERT INTO `book_inventory` VALUES ('10202', '1020', '1');
INSERT INTO `book_inventory` VALUES ('10203', '1020', '1');
INSERT INTO `book_inventory` VALUES ('10204', '1020', '1');
INSERT INTO `book_inventory` VALUES ('10205', '1020', '1');
INSERT INTO `book_inventory` VALUES ('10211', '1021', '0');
INSERT INTO `book_inventory` VALUES ('10221', '1022', '1');
INSERT INTO `book_inventory` VALUES ('10231', '1023', '1');
INSERT INTO `book_inventory` VALUES ('10241', '1024', '0');
INSERT INTO `book_inventory` VALUES ('10242', '1024', '1');
INSERT INTO `book_inventory` VALUES ('10243', '1024', '0');
INSERT INTO `book_inventory` VALUES ('10244', '1024', '1');
INSERT INTO `book_inventory` VALUES ('10245', '1024', '1');
INSERT INTO `book_inventory` VALUES ('10246', '1024', '0');
INSERT INTO `book_inventory` VALUES ('10251', '1025', '1');
INSERT INTO `book_inventory` VALUES ('10261', '1026', '1');
INSERT INTO `book_inventory` VALUES ('10262', '1026', '0');
INSERT INTO `book_inventory` VALUES ('10263', '1026', '1');
INSERT INTO `book_inventory` VALUES ('10264', '1026', '0');
INSERT INTO `book_inventory` VALUES ('10271', '1027', '1');
INSERT INTO `book_inventory` VALUES ('10272', '1027', '0');
INSERT INTO `book_inventory` VALUES ('10273', '1027', '1');
INSERT INTO `book_inventory` VALUES ('10274', '1027', '1');
INSERT INTO `book_inventory` VALUES ('10281', '1028', '1');
INSERT INTO `book_inventory` VALUES ('10282', '1028', '0');
INSERT INTO `book_inventory` VALUES ('10283', '1028', '0');
INSERT INTO `book_inventory` VALUES ('10284', '1028', '1');
INSERT INTO `book_inventory` VALUES ('10285', '1028', '0');
INSERT INTO `book_inventory` VALUES ('10291', '1029', '1');
INSERT INTO `book_inventory` VALUES ('10301', '1030', '1');
INSERT INTO `book_inventory` VALUES ('10311', '1031', '1');
INSERT INTO `book_inventory` VALUES ('10321', '1032', '1');
INSERT INTO `book_inventory` VALUES ('10331', '1033', '1');
INSERT INTO `book_inventory` VALUES ('10341', '1034', '1');
INSERT INTO `book_inventory` VALUES ('10351', '1035', '1');
INSERT INTO `book_inventory` VALUES ('10361', '1036', '1');
INSERT INTO `book_inventory` VALUES ('10371', '1037', '1');
INSERT INTO `book_inventory` VALUES ('10381', '1038', '1');
INSERT INTO `book_inventory` VALUES ('10391', '1039', '1');
INSERT INTO `book_inventory` VALUES ('10401', '1040', '1');
INSERT INTO `book_inventory` VALUES ('10411', '1041', '0');
INSERT INTO `book_inventory` VALUES ('10412', '1041', '1');
INSERT INTO `book_inventory` VALUES ('10413', '1041', '0');
INSERT INTO `book_inventory` VALUES ('10414', '1041', '1');
INSERT INTO `book_inventory` VALUES ('10421', '1042', '1');
INSERT INTO `book_inventory` VALUES ('10422', '1042', '0');
INSERT INTO `book_inventory` VALUES ('10423', '1042', '1');
INSERT INTO `book_inventory` VALUES ('10424', '1042', '0');
INSERT INTO `book_inventory` VALUES ('10425', '1042', '1');
INSERT INTO `book_inventory` VALUES ('10426', '1042', '0');
INSERT INTO `book_inventory` VALUES ('11111', 'xxxxx', '1');
INSERT INTO `book_inventory` VALUES ('22222', 'xxxxx', '0');
INSERT INTO `book_inventory` VALUES ('33333', 'yyyyy', '0');
INSERT INTO `book_inventory` VALUES ('44444', 'yyyyy', '1');
INSERT INTO `book_inventory` VALUES ('55555', 'yyyyy', '0');
INSERT INTO `book_inventory` VALUES ('66666', 'xianxingdaishu', '1');
INSERT INTO `book_inventory` VALUES ('77777', 'gaodengshuxue', '1');

-- ----------------------------
-- Table structure for managers
-- ----------------------------
DROP TABLE IF EXISTS `managers`;
CREATE TABLE `managers` (
  `manager_id` char(7) NOT NULL,
  `manager_name` varchar(10) NOT NULL,
  `manager_pwd` varchar(20) NOT NULL,
  `manager_tel` char(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of managers
-- ----------------------------
INSERT INTO `managers` VALUES ('1111111', '李四', '123456', '12345678909');

-- ----------------------------
-- Table structure for readers
-- ----------------------------
DROP TABLE IF EXISTS `readers`;
CREATE TABLE `readers` (
  `reader_id` char(7) NOT NULL,
  `reader_name` varchar(10) NOT NULL,
  `reader_pwd` varchar(20) NOT NULL,
  `reader_tel` char(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of readers
-- ----------------------------
INSERT INTO `readers` VALUES ('9999999', '张三', '123456', '12121212121');
