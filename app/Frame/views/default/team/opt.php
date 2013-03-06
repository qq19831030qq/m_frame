<!--{@page}-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>微系 Minic</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" href="<?php echo MONK::include_css('pass',$webSite.'/Frame/source/styles/opt.css',false,true); ?>">
    <script type="text/javascript" src="<?php echo MONK::include_js('pass',$webSite.'/Frame/source/scripts/base.js',false,true); ?>"></script>
</head>
<body>
    <div class="header">
        <div class="logo">
            <a href="/">
                <!--<img src="/source/images/logo.png" width="160" height="105" alt="微系" title="微系 Minic">-->
            </a>
        </div>
        <ul class="setting">
            <li>hi,xxx</li>
            <li><a href="<?php echo MONK::_url('home/logout');?>">退出</a></li>
        </ul>
    </div>
    <div class="content">
        <ul>
            <?php foreach($teams as $team){?>
            <li><a href="<?php echo MONK::_url('*/index',array('team_id'=>$team['team_id']),ARGV_INT); ?>"><?php echo $team['team_name']; ?></a></li>
            <?php } ?>
        </ul>
    </div>
    <div class="footer">
        <span class="copyright">© copyright noskycn</span>
        <span class="icp">浙ICP备XXXXXXXXX号-1</span>
    </div>
</body>
</html>