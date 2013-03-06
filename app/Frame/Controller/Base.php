<?php
class Frame_Controller_Base extends controller{
    
    //用户信息
    var $user = array();
    
    //用户的团队
    var $user_teams = array();

    //用户团队信息
    var $team_id = '';

    //当前团队管理人ID
    var $team_creater_id = '';

    public function init(){
        $this->assign('webSite','http://www.minic.com');
        parent::init();
    }
    
    //对于验证项统一的JSON返回
    protected function sendStatus($status,$msg = '注册成功', $name = ''){
        if($status) $s = 'success';
        else $s = 'error';
        $this->json(array('status'=>$s,'id'=>$name,'msg'=>$msg));
    }
    
    //设置AUTH cookie
    protected function setAuth($auth){
        setcookie(MONK::getConfig('auth_token'),$auth,time() + MONK::getConfig('cookie_expire'));
    }

    //清空AUTH cookie
    protected function clearAuth(){
        setcookie(MONK::getConfig('auth_token'),'',time()-1);
    }

    //启动登陆验证
    protected function isLogin(){
        $this->_setType(array(MONK::getConfig('auth_token')=>PARAM_STRING),'cookie');
        $auth_token = $this->_cookie(MONK::getConfig('auth_token'));
        if($auth_token){
            //解码auth_token得到用户ID，邮箱，密码
            $this->user = array();
            $_encrypt = MONK::getSingleton('Encrypt');
            list($user_id,$user_email,$user_nickname,$user_password,$user_avatar) = explode(' ',$_encrypt->authTokenDecode($auth_token));
            //登陆检验，不过会增加数据库连接，在刷新频率比较高的情况下会非常耗资源，如果有比较好的缓存服务器倒是可以尝试，因为这样更安全
            //进行邮箱账号验证
            $is_email = validator::get_param_email($user_email);
            if($is_email){
                $this->user['user_id'] = $user_id;
                $this->user['user_email'] = $user_email;
                $this->user['user_nickname'] = $user_nickname;
                $this->user['user_avatar'] = $user_avatar;
                $this->user['user_password'] = $user_password;
                return true;
            }else
                return false;
        }else
            return false;
    }

    //全局性的team过滤控制
    protected function teamFilter(){
        $controller_action = strtolower(MONK::getConfig('controller')).'_'.strtolower(MONK::getConfig('action'));
        $this->_setType(array(MONK::getConfig('user_teams')=>array('func'=>PARAM_ARRAY,'argv'=>PARAM_ARRAY ^ PARAM_STRING)),'session');
        $this->user_teams = $this->_session(MONK::getConfig('user_teams'));
        $team_users = array_flip($this->user_teams);

        if($controller_action == 'team_opt')
            return true;
        elseif($controller_action == 'team_index'){
            $this->_setType(array('team_id'=>PARAM_STRING));
            $team_id = $this->_get('team_id');
            if(in_array($team_id, $this->user_teams)){
                $_SESSION[MONK::getConfig('user_select_team')] = $team_id;
                $this->team_id = $team_id;
                $this->team_creater_id = $team_users[$team_id];
                return true;
            }else
                return false;
        }else{
            $this->_setType(array(MONK::getConfig('user_select_team')=>PARAM_STRING),'session');
            $team_id = $this->_session(MONK::getConfig('user_select_team'));
            if($team_id && in_array($team_id, $this->user_teams)){
                $this->team_id = $team_id;
                $this->team_creater_id = $team_users[$team_id];
                return true;
            }else
                return false;
        }
        return false;
    }
}
