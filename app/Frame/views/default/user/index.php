<!--{@page layout="frame"}-->
<!--{content head}-->
<!--{/content}-->
<!--{content content}-->
<ul>
<?php foreach($users as $user){ ?>
<li><?php echo $user['user_nickname']; ?><?php if($team_creater_id==$user['user_id']){?>(团队创建人)<?php } ?></li>
<?php } ?>
</ul>
<!--{/content}-->