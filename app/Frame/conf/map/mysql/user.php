<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    'table' => 'mini_core_user',
    'field' => array(
        'user_id'       => PARAM_STRING,
        'user_email'    => PARAM_EMAIL,
        'is_checked'    => PARAM_BOOL,
        'user_password' => PARAM_HEX,
        'user_nickname' => PARAM_STRING,
        'user_mobile'   => PARAM_MOBILE,
        'user_avatar'   => PARAM_STRING,
        'created'       => PARAM_DATETIME
    )
);