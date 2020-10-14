<?php

if (strtoupper($_SERVER['REQUEST_METHOD']) !== 'GET') return;

require_once('../../../init.php');

function fakeText($length)
{
    $text = file_get_contents('../data/lorem.txt');

    return substr($text, 0, $length -1) . '.';
}

$length = Helper::getGet('length');

echo fakeText($length);