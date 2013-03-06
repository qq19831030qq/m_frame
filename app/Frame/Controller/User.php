<?php
class Frame_Controller_User extends Frame_Controller_Base{

    public function init(){
        if(!$this->isLogin())
            return $this->redirect(MONK::_url('home/login'));
        $this->assign('my',$this->user);
        if(!$this->teamFilter())
            return $this->redirect(MONK::_url('team/opt'));
        $this->assign('team_id',$this->team_id);
        $this->assign('my_teams',$this->user_teams);
        $this->assign('team_creater_id',$this->team_creater_id);
        parent::init();
    }

    //团队人员列表
    public function actionIndex(){
        $model_user = MONK::getSingleton('Frame_Model_User');
        $users = $model_user->get_users_by_team_id($this->team_id);
        $this->assign('users',$users);
        $this->render();
    }

    //用户管理首页
    public function actionSetting(){
        //获取用户信息
        $this->render();
    }

    public function actionSetting_POST(){
        $this->_setType(array('email'=>PARAM_EMAIL,'nickname'=>PARAM_STRING,'old_password'=>PARAM_STRING,'new_password'=>PARAM_STRING),'post');
        $email = $this->_post('email');
        $nickname = $this->_post('nickname');
        $old_password = $this->_post('old_password');
        $new_password = $this->_post('new_password');

        //邮件地址检验
        if(empty($email))
            return $this->sendStatus(false,'请正确填写您的邮箱地址','email');

        //昵称取值1-100字符
        if(strlen($nickname) < 1 || strlen($nickname) > 100)
            return $this->sendStatus(false,'人在江湖飘,总得有名号;昵称最长100个字符','nickname');

        //密码取值6字符及以上
        if(strlen($old_password) < 6)
            return $this->sendStatus(false,'请填写您的现有密码;现有密码需要至少有6位','old_password');

        //密码取值6字符及以上
        if(strlen($new_password) < 6)
            return $this->sendStatus(false,'请填写您的新密码;新密码需要至少有6位','new_password');

        //两次密码需要不同
        if($new_password == $old_password)
            return $this->sendStatus(false,'您的新密码和现有密码一致,不需要修改','new_password');

        $model_user = MONK::getSingleton('Frame_Model_User');

        //检测email是否已经注册
        if($email != $this->user['user_email'] && $model_user->is_registered($email))
            return $this->sendStatus(false,'该邮箱已经被注册','email');
        //用户名密码检测
        $_encrypt = MONK::getSingleton('Encrypt');
        if($_encrypt->passwdEncode($old_password) == $this->user['user_password']){
            $user_only_password = $model_user->update_password($this->user['user_id'],$new_password);
            if(!empty($user_only_password) && array_shift($user_only_password)['user_password'] = $_encrypt->passwdEncode($new_password))
                return $this->sendStatus(true,'密码修改成功');
            else
                return $this->sendStatus(false,'密码修改失败','old_password');
        }else
            return $this->sendStatus(false,'现有密码输入错误','old_password');
    }
}
