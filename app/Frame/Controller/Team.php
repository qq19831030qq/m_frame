<?php
class Frame_Controller_Team extends Frame_Controller_Base{

    public function init(){
        if(!$this->isLogin())
            return $this->redirect(MONK::_url('home/login'));
        $this->assign('my',$this->user);
        if(!$this->teamFilter())
            return $this->redirect(MONK::_url('*/opt'));
        $this->assign('team_id',$this->team_id);
        $this->assign('my_teams',$this->user_teams);
        $this->assign('team_creater_id',$this->team_creater_id);
        parent::init();
    }

    //团队首页
    public function actionIndex(){
        //获取当前team的应用列表(只有管理员才能看到所有应用并安装应用)
        $model_app = MONK::getSingleton('Frame_Model_App');
        $team_users = array_flip($this->user_teams);
        if($team_users[$this->team_id] == $this->user['user_id']){
            $apps = $model_app->get_apps_by_team_id($this->team_id);
        }else{
            $apps = $model_app->get_apps_by_user_id($this->user['user_id']);
        }
        $this->assign('apps',$apps);
        return $this->render();
    }

    //多团队选择界面
    public function actionOpt(){
        //获取所有团队信息
        $model_team = MONK::getSingleton('Frame_Model_Team');
        $user_teams = array();
        $teams = $model_team->get_team_by_user_id($this->user['user_id']);
        foreach($teams as $team){
            $user_teams[$team['team_creater_id']] = $team['team_id'];
        }
        $_SESSION[MONK::getConfig('user_teams')] = $user_teams;
        if(count($teams)==1){
            $team_id = array_shift($user_teams);
            $_SESSION[MONK::getConfig('user_select_team')] = $team_id;
            return $this->redirect(MONK::_url('*/index',array('team_id'=>$team_id),ARGV_DEFAULT));
        }else
            $this->assign('teams',$teams);
        $this->render();
    }
    

}
