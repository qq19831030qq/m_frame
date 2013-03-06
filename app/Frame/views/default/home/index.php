<!--{@page}-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>微系 Minic</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" href="<?php echo MONK::include_css('index',$webSite.'/Frame/source/styles/index.css',false,true); ?>">
    <script type="text/javascript" src="<?php echo MONK::include_js('pass',$webSite.'/Frame/source/scripts/base.js',false,true); ?>"></script>
</head>
<body>
    <div class="header">
        <div class="logo">
            <a href="/">
                <!--<img src="/source/images/logo.png" width="160" height="105" alt="微系" title="微系 Minic">-->
            </a>
        </div>
        <div class="nav">
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="<?php echo MONK::_url('*/about');?>">了解详细</a></li>
            </ul>
            <em>|</em>
            <ul>
                <li><a href="<?php echo MONK::_url('*/register');?>">注册</a></li>
                <li><a href="<?php echo MONK::_url('*/login');?>">登录</a></li>
            </ul>
        </div>
    </div>
    <div class="content">
    </div>
    <div class="footer">
        <span class="copyright">© copyright noskycn</span>
        <span class="icp">浙ICP备XXXXXXXXX号-1</span>
    </div>
</body>
</html>