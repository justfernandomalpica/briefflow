<?php
$project_root=realpath(__DIR__."/..");
define("PROJECT_ROOT", $project_root);

require PROJECT_ROOT . "/vendor/autoload.php";
require "functions.php";

use Core\Routing\Router;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(PROJECT_ROOT);
$dotenv->safeLoad();

$router = new Router();