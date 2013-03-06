<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    'table' => 'mini_core_app',
    'field' => array(
        'app_id'    => PARAM_STRING,
        'app_name'  => PARAM_STRING,
        'app_category' => PARAM_UINT,
        'team_id'   => PARAM_UINT,
        'team_name' => PARAM_STRING,
        'user_id'   => PARAM_UINT,
        'app_version' => PARAM_STRING,
        'created'   => PARAM_DATETIME,
        'updated'   => PARAM_DATETIME,
        'app_language' => PARAM_STRING,
        'app_system_requirements' => PARAM_STRING,
        'app_summary' => PARAM_STRING,
        'app_info'  => PARAM_STRING,
        'app_icon'  => PARAM_STRING,
        'app_status'=> PARAM_UINT
    )
);