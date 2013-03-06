<?php
class Frame_Controller_Home extends Frame_Controller_Base{
    public function init(){
        parent::init();
    }

    //系统首页
    public function actionIndex(){
        return $this->render();
    }

    public function actionAbout(){
        echo '详情';
        //echo $_GET['tagname'];
    }

    public function actionLogin(){
        return $this->render();
    }

    public function actionLogin_POST(){
        //input验证
        $this->_setType(array('email'=>PARAM_EMAIL,'password'=>PARAM_STRING),'post');

        $email = $this->_post('email');
        $password = $this->_post('password');

        $model_user = MONK::getSingleton('Frame_Model_User');

        //登陆并返回昵称
        $user = $model_user->login(
            array(
                'user_email' => $this->_post('email'),
                'user_password' => $this->_post('password')
            )
        );
        if(!empty($user['user_id'])){
            //存储auth
            $_encrypt = MONK::getSingleton('Encrypt');
            $this->setAuth($_encrypt->authTokenEncode($user['user_id'].' '.$email.' '.$user['user_nickname'].' '.$_encrypt->passwdEncode($password).' '.$user['user_avatar']));
            return $this->redirect(MONK::_url('team/opt'));
        }else{
            return $this->sendStatus(false,'登陆失败,请重新登陆','email');
        }
    }

    public function actionLogout(){
        $this->clearAuth();
        //清空session
        return $this->sendStatus(true,'退出成功');
    }

    public function actionRegister(){
        return $this->render();
    }
    
    //需要进一步转移到只有ajax提交方式
    public function actionRegister_POST(){
        //input验证
        $this->_setType(array('team'=>PARAM_STRING,'nickname'=>PARAM_STRING,'email'=>PARAM_EMAIL,'password'=>PARAM_STRING,'password2'=>PARAM_STRING),'post');
        
        $team = $this->_post('team');
        $nickname = $this->_post('nickname');
        $email = $this->_post('email');
        $password = $this->_post('password');
        $password2 = $this->_post('password2');
        
        //数值验证
        //团队名称取值1-100字符
        if(strlen($team) < 1 || strlen($team) > 100)
            return $this->sendStatus(false,'请填写团队或者公司的名称;团队名称最长100个字符','team');
        
        //昵称取值1-100字符
        if(strlen($nickname) < 1 || strlen($nickname) > 100)
            return $this->sendStatus(false,'人在江湖飘,总得有名号;昵称最长100个字符','nickname');
        
        //邮件地址检验
        if(empty($email))
            return $this->sendStatus(false,'请正确填写您的邮箱地址','email');

        //密码取值6字符及以上
        if(strlen($password) < 6)
            return $this->sendStatus(false,'请填写您的登录密码;登录密码需要至少有6位','password');

        //密码比较
        if($password != $password2)
            return $this->sendStatus(false,'两次输入的密码不一样,请重新输入','password2');

        $model_user = MONK::getSingleton('Frame_Model_User');

        //检测email是否已经注册
        if($model_user->is_registered($email))
            return $this->sendStatus(false,'该邮箱已经被注册','email');

        //创建账户及团队
        $user_id = $model_user->create_with_team(
            array(
                'user_email'    => $email,
                'user_password' => $password,
                'user_nickname' => $nickname
            ),
            array(
                'team_name' => $team
            )
        );
        //setcookie
        if($user_id){
            $_encrypt = MONK::getSingleton('Encrypt');
            $this->setAuth($_encrypt->authTokenEncode($user_id.' '.$email.' '.$nickname.' '.$_encrypt->passwdEncode($password).' '.'empty.jpg'));
            return $this->sendStatus(true,'注册成功,请验证邮箱');
        }else{
            return $this->sendStatus(false,'注册失败,请检查填写项并提交','team');
        }
    }
}
