<?php
class Frame_Model_App extends model {

    private $sqls = array(
        'get_apps_by_team_id' => 'select `app_id`,`app_name`,`app_icon`,`app_has_wap` from `mini_core_app` where `app_id` in(select `app_id` from `mini_core_team_link_app` where `team_id` = [@team_id]);',
        'get_apps_by_user_id' => 'select `app_id`,`app_name`,`app_icon`,`app_has_wap` from `mini_core_app` where `app_id` in(select `app_id` from `mini_core_user_link_app` where `user_id` = [@user_id]);',
        'get_opened_apps' => 'select `app_id`,`app_name`,`app_icon`,`app_has_wap` from `mini_core_app` where `app_status` = 1;',
    );
    
    public function __construct(){
        parent::__construct();
    }
    
    //根据team_id获取app
    public function get_apps_by_team_id($team_id){
        return mysql::fetch('team_link_app', $this->sqls['get_apps_by_team_id'], array('team_id'=>$team_id));
    }

    //根据user_id获取APP
    public function get_apps_by_user_id($user_id){
        return mysql::fetch('team_link_app', $this->sqls['get_apps_by_user_id'], array('user_id'=>$user_id));
    }
    //获取所有已经开放的应用
    public function get_opened_apps(){
        return mysql::fetch('team_link_app', $this->sqls['get_opened_apps']);
    }
}