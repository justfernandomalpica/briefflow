<?php
require __DIR__ . "/../config/app.php";

// Healthcheck
$router->get("/health", function() { include PROJECT_ROOT . "/config/notFoundPage.php"; })->name("healthcheck");

$router->dispatch();