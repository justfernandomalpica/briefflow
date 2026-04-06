<?php

use App\Controllers\ApiController;

require __DIR__ . "/../config/app.php";

// Healthcheck
$router->get("/health", function() {
    header("Content-Type: text/xml; charset=utf-8");
    echo "<health> Ok! </health>";
})->name("healthcheck");

// Shcema API
$router->get("/api/schema",[ApiController::class,"getSchema"])->name("get.schema");
$router->get("/api/sections",[ApiController::class,"getAllSections"])->name("get.sections");
$router->get("/api/section/{id}",[ApiController::class,"getSectionById"])->name("get.section.id");
$router->get("/api/fields/{id}",[ApiController::class,"getFieldsById"])->name("get.fields.id");

// Guest user flow
$router->get("/", [$formController, "index"])->name("index.greeting");
$router->get("/form",[$formController, "form"])->name("index.form"); //Aqui se necesita middleware de usuario identificado
$router->post("/identify",[$formController,"identify"])->name("index.form.post"); 
$router->get("/thankyou",[$formController, "farewell"])->name("index.farewell");

$router->dispatch();