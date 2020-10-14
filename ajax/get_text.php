<?php

if (strtoupper($_SERVER['REQUEST_METHOD']) !== 'GET') die();

require_once('../../../init.php');
require_once('text_functions.php');

$allowed_methods = [
    'getDummyText',
    'getTransformedText',
];

$function = Helper::getGet('function');
if (! in_array($function, $allowed_methods)) die();

$parameter = Helper::getGet('parameter');

echo call_user_func($function, $parameter);