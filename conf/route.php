<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

define('ARGV_DEFAULT','[^\/]+');
define('ARGV_INT','\d+');
/*
可根据正则表达式对参数进行类型过滤
route:
  '/url/<name>' => 'app/controller/action:name'
example:
  '/city/index' => 'home/city/index',
  '/home/(?<tagname>[^\/]+)'  => 'home/content/index:tagname',
  '/home/index/(?<id>[^\/]+)/(?<foodid>[^\/]+)' => 'home/index/index:id&foodid',
*/

return array(
    '/about'    => 'frame/home/about',
    '/login'    => 'frame/home/login',
    '/logout'   => 'frame/home/logout',
    '/register' => 'frame/home/register',
    '/opt'      => 'frame/team/opt',
    '/team/(?<team_id>'.ARGV_DEFAULT.')'    => 'frame/team/index:team_id',
    '/users'    => 'frame/user/index',
    '/apps'     => 'frame/app/index',
    '/user/setting'     => 'frame/user/setting',
);
