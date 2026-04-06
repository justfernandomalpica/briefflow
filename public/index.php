<?php
require __DIR__ . "/../config/app.php";

// Healthcheck
$router->get("/health", function() { include PROJECT_ROOT . "/config/notFoundPage.php"; })->name("healthcheck");

// Guest user flow
$router->get("/", [$formController, "index"])->name("index.greeting");
$router->get("/form",[$formController, "form"])->name("index.form"); //Aqui se necesita middleware de usuario identificado
$router->get("/thankyou",[$formController, "farewell"])->name("index.farewell");

$router->dispatch();