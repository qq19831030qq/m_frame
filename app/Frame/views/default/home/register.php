<!--{@page layout="pass"}-->
<!--{content head}-->
<!--{/content}-->
<!--{content title}-->
<span class="title">创建新团队</span>
<span class="corner"><a href="<?php echo MONK::_url('*/login');?>">登录 →</a></span>
<!--{/content}-->
<!--{content form}-->
<form class="form" method="post" data-remote="true" novalidate>
    <div class="form-item">
        <label class="form-label" for="team">团队名称</label>
        <div class="form-field">
            <input type="text" name="team" id="team" placeholder="例如：XX公司" autofocus 
            data-validate="required;length:1,100" data-validate-msg="请填写团队或者公司的名称;团队名称最长100个字符" />
        </div> 
    </div>

    <div class="form-item">
        <label class="form-label" for="nickname">昵称</label>
        <div class="form-field">
            <input type="text" name="nickname" id="nickname" placeholder="例如：王同学" data-validate="required;length:1,100" data-validate-msg="人在江湖飘，总得有名号;昵称最长100个字符" />
        </div>
    </div>

    <div class="form-item">
        <label class="form-label" for="email">登录邮箱</label>
        <div class="form-field">
            <input type="email" name="email" id="email" placeholder="例如：yourname@company.com" data-validate="required;email" data-validate-msg="请填写您的邮箱地址;" />
            <p class="desc">填写常用邮箱地址，接受、事务完成通知等邮件</p>
        </div>
    </div>

    <div class="form-item">
        <label class="form-label" for="password">密码</label>
        <div class="form-field">
            <input type="password" name="password" id="password" data-validate="required;length:6" data-validate-msg="请填写您的登录密码;登录密码需要至少有6位" />
            <p class="desc">最短6位，区分大小写，强烈建议同时包含字母、数字和标点符号</p>
        </div>
    </div>

    <div class="form-item">
        <label class="form-label" for="password2">确认密码</label>
        <div class="form-field">
            <input type="password" name="password2" id="password2" data-validate="required;length:6" data-validate-msg="两次输入的密码不一样" />
            <p class="desc">请再次输入密码，确保密码已经正确输入</p>
        </div>
    </div>

    <div class="declare">点击注册表示您已阅读并同意<a href="/agreement/">《服务条款》</a></div>

    <div class="form-item form-btns">
        <button type="submit" id="btn-signup" class="btn btn-primary btn-large" 
        data-disable-with="正在注册..." data-success-text="注册成功">注册</button>
    </div>
</form>
<!--{/content}-->