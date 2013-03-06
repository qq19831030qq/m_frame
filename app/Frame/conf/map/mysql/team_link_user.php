<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    'table' => 'mini_core_team_link_user',
    'field' => array(
        'team_id'   => PARAM_STRING,
        'user_id'   => PARAM_STRING,
        'user_type' => PARAM_BOOL,
        'created'   => PARAM_DATETIME
    )
);