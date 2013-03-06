<?php
class Frame_Controller_App extends Frame_Controller_Base{

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

    //应用首页
    public function actionIndex(){
        //获取应用库列表
        $model_app = MONK::getSingleton('Frame_Model_App');
        $apps = $model_app->get_opened_apps($this->team_id);
        $this->assign('apps',$apps);
        return $this->render();
    }
}
