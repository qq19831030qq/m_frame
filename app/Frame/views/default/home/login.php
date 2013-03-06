<!--{@page layout="pass"}-->
<!--{content head}-->
<!--{/content}-->
<!--{content title}-->
<span class="title">登录</span>
<span class="corner"><a href="<?php echo MONK::_url('*/register');?>">注册 →</a></span>
<!--{/content}-->
<!--{content form}-->
<form class="form" method="post" data-remote="true" novalidate>
    <div class="form-item">
        <label class="form-label" for="email">登录邮箱</label>
        <div class="form-field">
        <input type="email" tabindex="1" name="email" id="email" data-validate="required;email" data-validate-msg="请填写您的登录邮箱;" />
        </div>
    </div>

    <div class="form-item">
        <label class="form-label" for="pw">密码</label><span class="forgot-pw"><a href="/users/forgot_password" tabindex="5">（忘记了？）</a></span>
        <div class="form-field">
        <input type="password" tabindex="2" name="password" id="password" data-validate="required;length:6" data-validate-msg="请填写您的登录密码;登录密码至少有6位" />
        </div>
    </div>

    <div class="form-buttons">
        <button type="submit" tabindex="3" id="btn-signin" class="btn btn-primary" 
            data-disable-with="正在登录..." data-success-text="登录成功" data-goto="/launchpad/">登录</button>
    </div>
</form>
<!--{/content}-->