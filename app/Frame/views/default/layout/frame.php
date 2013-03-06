<!--{@layout}-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>微系 Minic</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" href="<?php echo MONK::include_css('pass',$webSite.'/Frame/source/styles/frame.css',false,true); ?>">
    <script type="text/javascript" src="<?php echo MONK::include_js('pass',$webSite.'/Frame/source/scripts/base.js',false,true); ?>"></script>
    <!--{contentplaceholderid head}-->
</head>
<body>
    <div class="header">
        <div class="logo">
            <a href="/">
                <!--<img src="/source/images/logo.png" width="160" height="105" alt="微系" title="微系 Minic">-->
            </a>
        </div>
        <ul class="nav">
            <li><a href="<?php echo MONK::_url('team/index',array('team_id'=>$team_id),ARGV_DEFAULT);?>">我的工作台</a></li>
            <li><a href="<?php echo MONK::_url('user/index');?>">团队</a></li>
            <li><a href="<?php echo MONK::_url('notice/index');?>">通知</a></li>
            <li><a href="<?php echo MONK::_url('app/index');?>">应用库</a></li>
        </ul>
        <ul class="setting">
            <li><a href="<?php echo MONK::_url('user/setting');?>">我的设置</a></li>
            <!--<li><a href="<?php echo MONK::_url('team/setting');?>">团队设置</a></li>-->
            <li><a href="<?php echo MONK::_url('home/logout');?>">退出</a></li>
        </ul>
    </div>
    <div class="content">
        <!--{contentplaceholderid content}-->
    </div>
    <div class="footer">
        <span class="copyright">© copyright noskycn</span>
        <span class="icp">浙ICP备XXXXXXXXX号-1</span>
    </div>
</body>
</html>