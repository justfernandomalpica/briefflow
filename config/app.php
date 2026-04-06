<?php
$project_root=realpath(__DIR__."/..");
define("PROJECT_ROOT", $project_root);

require PROJECT_ROOT . "/vendor/autoload.php";
require "functions.php";

use Api\SchemaApiController;
use App\Controllers\FormController;
use Core\Rendering\RenderEngine;
use Core\Routing\Router;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(PROJECT_ROOT);
$dotenv->safeLoad();

$router = new Router();

$rEngine = new RenderEngine("app/views/layouts","app/views");

SchemaApiController::setSchema("/config/");

$formController = new FormController($rEngine);