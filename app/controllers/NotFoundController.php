<?php declare(strict_types=1);

namespace App\Controllers;

class NotFoundController {
    public static function index() {
        header("Content-Type: application/xml; charset=utf-8");
        echo "<Error> 404. Page not found :( </Error>";
        exit();
    }
}