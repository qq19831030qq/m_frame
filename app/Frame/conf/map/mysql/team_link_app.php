<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    'table' => 'mini_core_team_link_app',
    'field' => array(
        'team_id'   => PARAM_STRING,
        'app_id'    => PARAM_STRING,
        'created'   => PARAM_DATETIME
    )
);