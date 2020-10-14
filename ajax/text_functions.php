<?php

function getDummyText($length)
{
    $text = file_get_contents('../data/lorem.txt');

    return substr($text, 0, $length -1) . '.';
}

function getTransformedText($original_text)
{
    $operation = Helper::getGet('operation');
    $response = Strings::$operation($original_text);

    return $response;
}