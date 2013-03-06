<?php
class Frame_Model_Team extends model {

    private $sqls = array(
        'get_team_only_id' => 'select `team_id` from `mini_core_team_link_user` where `user_id` = [@user_id]',
        'get_team_by_user_id' => 'select `team_id`,`team_name`,`team_creater_id` from `mini_core_team` where `team_id` in(select `team_id` from `mini_core_team_link_user` where `user_id` = [@user_id])',
    );
    
    public function __construct(){
        parent::__construct();
    }

    //获取当前用户的所有团队
    public function get_team_only_id($user_id){
        return mysql::fetch('team_link_user', $this->sqls['get_team_only_id'], array('user_id'=>$user_id));
    }

     public function get_team_by_user_id($user_id){
        return mysql::fetch('team_link_user', $this->sqls['get_team_by_user_id'], array('user_id'=>$user_id));
    }

    
}