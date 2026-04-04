<?php
function debug(mixed $var, bool $kill = true) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
    if($kill) exit;
}

function start_session() {
    if(session_status() !== PHP_SESSION_ACTIVE) session_start();
}