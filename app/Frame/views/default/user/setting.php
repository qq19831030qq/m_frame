<!--{@page layout="frame"}-->
<!--{content head}-->
<style type="text/css">
#dropbox{height:100px;width:100px;border:1px solid #000;}
</style>
<!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--{/content}-->
<!--{content content}-->
<h3><?php echo $my['user_nickname']?>的设置</h3>
<form class="form" method="post" data-remote="true">
    <div class="form-item upload-avatar">
        <div class="avatar-wrapper">
            <img class="avatar" src="/uploads/10008/member/avatar/28323/thumb_2049af32dba064c0083cd3f37b897ad4.jpg" />
            <div class="loading"></div>
        </div>
        <div class="link-upload" data-url="/members/68a6f5ea5d964ad49ee62494d0032dd1/avatars/">
            <a id="btn-upload" href="javascript:;">选择新头像</a>
        </div>
        <div id="dropbox"><span class="message">头像上传区</span></div>
        <p class="desc">你可以选择png/jpg图片(100*100)作为头像</p>
    </div>
    <div class="form-item">
        <label class="form-label" for="txt-email">邮箱</label>
        <div class="form-field">
            <input type="text" name="email" id="txt-email" value="<?php echo $my['user_email']; ?>" data-validate="email" data-validate-msg="请输入一个有效的邮箱地址" />
        </div>
    </div>
    <div class="form-item">
        <label class="form-label" for="txt-nickname">昵称</label>
        <div class="form-field">
            <input type="text" name="nickname" id="txt-nickname" value="<?php echo $my['user_nickname']; ?>" 
                data-validate="required;length:1,100" data-validate-msg="人在江湖飘，总得有名号;昵称最长100个字符" />
        </div>
    </div>
    <div class="form-item">
        <label class="form-label" for="txt-old-password">现有密码</label>
        <div class="form-field">
            <input type="password" name="old_password" id="txt-old-password" placeholder="••••••••" data-validate="length:6;custom" 
                data-validate-msg="登录密码需要至少有6位;" data-blur-validate="false" />
          <p class="desc">不修改密码则不需要填写此项</p>
        </div>
    </div>
    <div class="form-item">
        <label class="form-label" for="txt-password">新密码</label>
        <div class="form-field">
            <input type="password" name="new_password" id="txt-password" placeholder="••••••••" data-validate="length:6;custom" 
                data-validate-msg="登录密码需要至少有6位;" data-blur-validate="false" />
              <p class="desc">修改密码请先输入现有密码，强烈建议密码同时包含字母、数字和标点符号。</p>
        </div>
    </div>
    <div class="form-buttons">
        <button class="btn" id="btn-save" data-disable-with="正在保存..."
            data-success-text="保存成功">保存</button>
        <a href="javascript:history.back()" class="btn btn-x">返回</a>
    </div>
</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo MONK::include_js('jquery-filedrop',$webSite.'/Frame/source/scripts/jquery-filedrop.js',false,true); ?>"></script>
<script type="text/javascript" src="<?php echo MONK::include_js('upload_avatar',$webSite.'/Frame/source/scripts/upload_avatar.js',false,true); ?>"></script>

<!--{/content}-->