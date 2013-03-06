<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    /*
    *
    * 以下为惯例配置，不允许删除，可修改和增加
    *
    */
    //软件运行模式 debug,released
    'run_model'             => 'debug', //禁止更改
	//URL模式及后缀 url_rewrite url_default
	'url_method'		    => 'url_rewrite', //禁止更改
    'url_html_subfix'       => '.html', //禁止更改
    
    //默认应用，控制器，行为，客户端类型，风格
    'app'                   => 'frame', //禁止更改
    'controller'            => 'index',
    'action'                => 'index',
    'client'                => 'pc',    //禁止更改
    'theme'                 => 'default', //禁止更改

    //默认应用，控制器，行为的名称
    'app_name'              => 'app', //禁止更改
    'controller_name'       => 'controller', //禁止更改
    'action_name'           => 'action', //禁止更改

    //视图及视图缓存配置
    'view_dir_name'         => 'views', //禁止更改
    'compile_dir'           => MONK_ROOT.'c_views'.DS, //禁止更改
    'layout_dir_name'       => 'layout', //禁止更改
    'view_file_subfix'      => '.php', //禁止更改
    'view_complie_expires'  => 3600, //禁止更改

    //app扩展库名
    'app_lib_name'          => 'extensions',//禁止更改
    
    //代理IP(貌似没什么用？获取IP地址？)
    'proxy_ips'             => '', //禁止更改  '10.0.1.200,10.0.1.201'

    //应用MYSQL数据池 //禁止更改
    'app_mysql_pool'        => array(
        'Frame' => array(
            'connectString'         => 'mysql://root:11112222tq@localhost:3306',
            'dbname'                => 'minic_db',
        ),
    ),
    //应用redis数据池
    'app_redis_pool'        => array(), //禁止更改
    //应用memcache缓存池
    'app_memcache_pool'     => array(), //禁止更改
    
    //全局数据库相关设置，支持APP更新设置
    'character_set_connection'  => 'utf8', //禁止更改
    'character_set_results'     => 'utf8', //禁止更改
    'character_set_client'      => 'binary', //禁止更改
    'sql_mode'                  => '', //禁止更改
    'map_path'                  => 'map', //禁止更改

    //验证开关，支持APP更新设置
    'input_param_validate'  => true,
    'db_param_validate'     => true,

    //全局数据验证配置 //禁止更改
    'allowed_server_param'  => array(
        'HTTP_USER_AGENT'   => PARAM_STRING,
        'HTTP_HOST'         => PARAM_STRING,
        'PATH_INFO'         => PARAM_STRING,
        'HTTP_X_REQUESTED_WITH' => PARAM_STRING,
        'x-requested-with'  => PARAM_STRING,
        'REQUEST_METHOD'    => PARAM_STRING,
        'SERVER_NAME'       => PARAM_STRING,
        'HTTPS'             => PARAM_STRING,
        'REQUEST_URI'       => PARAM_STRING,
        'HTTP_REFERER'      => PARAM_STRING,
    ),
    
    //app禁止设置的配置项 //禁止更改
    'deny_app_config'   => array(
        'run_model',
        'url_method',
        'url_html_subfix',
        'app',
        'client',
        'theme',
        'app_name',
        'controller_name',
        'action_name',
        'view_dir_name',
        'compile_dir',
        'layout_dir_name',
        'view_file_subfix',
        'view_complie_expires',
        'app_mysql_pool',
        'app_redis_pool',
        'app_memcache_pool',
        'character_set_connection',
        'character_set_results',
        'character_set_client',
        'sql_mode',
        'map_path',
        'allowed_server_param',
        'deny_app_config',
        'auth_token',
        'name',
        'session_name',
        'session_path',
    ),
    //SESSION相关配置
    'session_name'  => '6e21af644073e2d74d1af41fab505ab0', //禁止更改 md5('_minic_session')
    'session_path'  => MONK_ROOT.'session', //禁止更改

    //COOKIE保存时间
    'cookie_expire' => 3600*24*365, //禁止更改

    //用户保存的cookie key
    'auth_token'    => '81849ce94cd39aab067a921d55c97175', //禁止更改 md5('_minic_auth')
    'name'          => '0dfa82948db5803ab512ccc0dc2ba564', //禁止更改 md5('_minic_nickname')
    
    /*
    * 用户保存的session data key
    * user_teams结构定义 array('team_creater_id'=>'taem_id')
    *
    */

    'user_teams'     => '5613710a27eca8b202e08ce40479c8e3', //禁止更改 md5('_minic_user_teams')
    'user_select_team'     => '7a1a45cbfe459a53e7a449223c735350', //禁止更改 md5('_minic_user_selected_team')
);
