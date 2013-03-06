<?php
if (!defined('MONK_VERSION')) exit('Access is no allowed.');

return array(
    'table' => 'mini_core_team',
    'field'   => array(
        'team_id'   => PARAM_STRING,
        'team_name' => PARAM_STRING,
        'team_creater_id' => PARAM_UINT,
        'created'   => PARAM_DATETIME
    )
);