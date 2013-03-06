/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50528
Source Host           : 127.0.0.1:3306
Source Database       : minic_db

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2013-03-06 17:04:02
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `mini_core_app`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_app`;
CREATE TABLE `mini_core_app` (
  `app_id` varchar(32) NOT NULL COMMENT '应用MD5唯一标识符',
  `app_name` varchar(100) NOT NULL COMMENT '应用名称',
  `app_category` tinyint(1) NOT NULL COMMENT '应用类别',
  `team_id` int(11) NOT NULL COMMENT '开发团队ID',
  `team_name` varchar(100) NOT NULL COMMENT '团队名称',
  `user_id` int(11) NOT NULL COMMENT '提交人ID',
  `app_version` varchar(100) NOT NULL COMMENT 'app版本',
  `created` int(10) NOT NULL COMMENT '创建时间',
  `updated` int(10) NOT NULL COMMENT '更新时间',
  `app_language` varchar(100) NOT NULL COMMENT '语言',
  `app_system_requirements` varchar(255) NOT NULL COMMENT '系统要求',
  `app_summary` varchar(255) NOT NULL COMMENT '简介',
  `app_info` text COMMENT '应用详情',
  `app_icon` varchar(255) NOT NULL COMMENT '应用图标',
  `app_status` tinyint(1) DEFAULT '0' COMMENT '应用状态(开放,测试中,未通过,审核中)',
  `app_has_wap` tinyint(1) DEFAULT '0' COMMENT '是否有WAP版本',
  PRIMARY KEY (`app_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_app
-- ----------------------------
INSERT INTO `mini_core_app` VALUES ('a1662a5116063c07b18bdfb657c9ef54', '在线考勤', '1', '1', '微系官方', '1', '1.0', '1362128400', '1362128400', '中文', 'chrome浏览器,IE8以上', '支持人脸识别，支持GPS位置服务', null, '', '0', '0');

-- ----------------------------
-- Table structure for `mini_core_team`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_team`;
CREATE TABLE `mini_core_team` (
  `team_id` varchar(32) NOT NULL COMMENT '团队MD5唯一标识符',
  `team_name` varchar(100) NOT NULL COMMENT '名称',
  `team_creater_id` varchar(32) NOT NULL COMMENT '创建人ID',
  `created` int(10) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`team_id`),
  KEY `created` (`created`),
  KEY `user_id` (`team_creater_id`),
  KEY `team_name` (`team_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_team
-- ----------------------------
INSERT INTO `mini_core_team` VALUES ('a1662a5116063c07b18bdfb657c9ef54', '微系', '33daf628fa33ec22ec5af2a148056e2f', '1362491276');

-- ----------------------------
-- Table structure for `mini_core_team_link_app`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_team_link_app`;
CREATE TABLE `mini_core_team_link_app` (
  `team_id` varchar(32) NOT NULL COMMENT '团队ID',
  `app_id` varchar(32) NOT NULL COMMENT '应用ID',
  `created` int(10) NOT NULL,
  KEY `team` (`team_id`),
  KEY `app` (`app_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_team_link_app
-- ----------------------------
INSERT INTO `mini_core_team_link_app` VALUES ('a1662a5116063c07b18bdfb657c9ef54', 'a1662a5116063c07b18bdfb657c9ef54', '1362491276');

-- ----------------------------
-- Table structure for `mini_core_team_link_user`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_team_link_user`;
CREATE TABLE `mini_core_team_link_user` (
  `team_id` varchar(32) NOT NULL COMMENT '团队ID',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `user_type` enum('1','0') DEFAULT '0' COMMENT '用户类型,1为创建人',
  `created` int(10) NOT NULL COMMENT '创建时间',
  KEY `team` (`team_id`),
  KEY `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_team_link_user
-- ----------------------------
INSERT INTO `mini_core_team_link_user` VALUES ('a1662a5116063c07b18bdfb657c9ef54', '33daf628fa33ec22ec5af2a148056e2f', '1', '1362491276');
INSERT INTO `mini_core_team_link_user` VALUES ('a1662a5116063c07b18bdfb657c9ef54', '98c7f38a5c3d4a70071cb8b06e451ef0', '0', '1362532901');

-- ----------------------------
-- Table structure for `mini_core_user`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_user`;
CREATE TABLE `mini_core_user` (
  `user_id` varchar(32) NOT NULL COMMENT '用户MD5唯一标识符',
  `user_email` varchar(100) NOT NULL COMMENT '邮箱/账户',
  `is_checked` tinyint(1) DEFAULT '0' COMMENT '邮箱是否已验证',
  `user_password` varchar(100) NOT NULL COMMENT '密码',
  `user_nickname` varchar(100) NOT NULL COMMENT '昵称',
  `user_mobile` varchar(20) DEFAULT NULL COMMENT '手机',
  `user_avatar` varchar(100) DEFAULT NULL COMMENT '头像',
  `created` int(10) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `login` (`user_email`,`user_nickname`),
  UNIQUE KEY `user_email` (`user_email`) USING BTREE,
  KEY `created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_user
-- ----------------------------
INSERT INTO `mini_core_user` VALUES ('33daf628fa33ec22ec5af2a148056e2f', 'noskycn@vip.qq.com', '0', '310fdcbe62672b70744eea587e39581cb45874acab5ca5244fecf9d0d3f11410', '沈某人', null, null, '1362491276');
INSERT INTO `mini_core_user` VALUES ('98c7f38a5c3d4a70071cb8b06e451ef0', 'noskycn5@vip.qq.com', '0', '3c705ee140ca9df8cea3b46f36d470f4ec771846a4bd1b17bd96f2657a168cb4', '沈某人5', null, null, '1362532901');

-- ----------------------------
-- Table structure for `mini_core_user_category`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_user_category`;
CREATE TABLE `mini_core_user_category` (
  `uc_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户分类ID',
  `uc_name` varchar(100) NOT NULL COMMENT '用户分类名称',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`uc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_user_category
-- ----------------------------

-- ----------------------------
-- Table structure for `mini_core_user_category_link_app`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_user_category_link_app`;
CREATE TABLE `mini_core_user_category_link_app` (
  `uc_id` int(11) NOT NULL COMMENT '用户分类ID',
  `app_id` int(11) NOT NULL COMMENT '应用ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_user_category_link_app
-- ----------------------------

-- ----------------------------
-- Table structure for `mini_core_user_link_app`
-- ----------------------------
DROP TABLE IF EXISTS `mini_core_user_link_app`;
CREATE TABLE `mini_core_user_link_app` (
  `app_id` varchar(32) NOT NULL COMMENT '用应ID',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `created` int(10) NOT NULL COMMENT '创建时间',
  KEY `team` (`app_id`),
  KEY `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_core_user_link_app
-- ----------------------------

-- ----------------------------
-- Table structure for `mini_crm_custom`
-- ----------------------------
DROP TABLE IF EXISTS `mini_crm_custom`;
CREATE TABLE `mini_crm_custom` (
  `custom_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '客户ID',
  `created` int(10) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`custom_id`),
  KEY `created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_crm_custom
-- ----------------------------

-- ----------------------------
-- Table structure for `mini_crm_custom_attribute`
-- ----------------------------
DROP TABLE IF EXISTS `mini_crm_custom_attribute`;
CREATE TABLE `mini_crm_custom_attribute` (
  `ca_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '属性ID',
  `attribute_name` varchar(100) NOT NULL COMMENT '名称',
  `attribute_type` varchar(100) NOT NULL COMMENT '类型',
  PRIMARY KEY (`ca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mini_crm_custom_attribute
-- ----------------------------
