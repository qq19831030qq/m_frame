<?php
class Frame_Model_User extends model {

    private $sqls = array(
        'create_user' => 'insert into `mini_core_user`(`user_id`,`user_email`,`user_password`,`user_nickname`,`created`) values([@user_id],[@user_email],[@user_password],[@user_nickname],[@created]);',
        'create_team' => 'insert into `mini_core_team`(`team_id`,`team_name`,`team_creater_id`,`created`) values([@team_id],[@team_name],[@team_creater_id],[@created]);',
        'login' => 'select `user_id`,`user_nickname`,`user_avatar` from `mini_core_user` where `user_email` = [@user_email] and `user_password` = [@user_password] limit 1;',
        'find_by_email' => 'select 1 from `mini_core_user` where `user_email` = [@user_email] limit 1',
        'create_team_link_user' => 'insert into `mini_core_team_link_user`(`team_id`,`user_id`,`user_type`,`created`) values([@team_id],[@user_id],[@user_type],[@created]);',
        'get_users_by_team_id' => 'select `user_id`,`user_nickname`,`user_avatar` from `mini_core_user` where `user_id` in(select `user_id` from `mini_core_team_link_user` where `team_id` = [@team_id]);',
        'update_password' => 'update `mini_core_user` set `user_password` = [@user_password] where `user_id` = [@user_id];',
        'get_user_by_user_id' => 'select `user_password` from `mini_core_user` where `user_id` = [@user_id];',
    );
    
    public function __construct(){
        parent::__construct();
    }
    
    //创建用户
    public function create_with_team($userdata,$teamdata){
        $created = $userdata['created'] = $teamdata['created'] = time();
        $_encrypt = MONK::getSingleton('Encrypt');
        $userdata['user_password'] = $_encrypt->passwdEncode($userdata['user_password']);
        $teamdata['team_creater_id'] = $userdata['user_id'] = md5($userdata['user_password'].$created.rand());
        mysql::startTrans();
        mysql::execute('user', $this->sqls['create_user'], $userdata);
        $teamdata['team_id'] = md5($teamdata['team_name'].$created.rand());
        mysql::execute('team', $this->sqls['create_team'], $teamdata);
        mysql::execute('team_link_user', $this->sqls['create_team_link_user'], array('team_id'=>$teamdata['team_id'],'user_id'=>$teamdata['team_creater_id'],'user_type'=>1,'created'=>$created));
        mysql::commit();
        return $teamdata['team_creater_id'];
    }

    //检验邮箱是否已经注册
    public function is_registered($email){
        $user = mysql::fetch('user', $this->sqls['find_by_email'], array('user_email'=>$email));
        return !empty($user);
    }

    //登陆
    public function login($data){
        $_encrypt = MONK::getSingleton('Encrypt');
        $data['user_password'] = $_encrypt->passwdEncode($data['user_password']);
        $user = mysql::fetch('user', $this->sqls['login'], $data);
        if(!empty($user))
            return array_shift($user);
        else
            return false;
    }

    //获取团队成员
    public function get_users_by_team_id($team_id){
        return mysql::fetch('team_link_user', $this->sqls['get_users_by_team_id'], array('team_id'=>$team_id));
    }

    //修改密码
    public function update_password($user_id,$user_password){
        $_encrypt = MONK::getSingleton('Encrypt');
        mysql::startTrans();
        mysql::execute('user', $this->sqls['update_password'], array('user_id'=>$user_id,'user_password'=>$_encrypt->passwdEncode($user_password)));
        $user = mysql::fetch('user', $this->sqls['get_user_by_user_id'], array('user_id'=>$user_id));
        mysql::commit();
        return $user;
    }
    
}