<?php declare(strict_types=1);

namespace App\Controllers;

use Core\Rendering\View;

class FormController {
    private \Core\Rendering\RenderEngine $rEngine;

    public function __construct(\Core\Rendering\RenderEngine $engine) {
        $this->rEngine = $engine;
    }

    public function index() {
        $view = new View("public/greeting");
        $this->rEngine->render("master",$view);
    }

    public function form() {
        $view = new View("public/form");
        $this->rEngine->render("master",$view);
    } 

    public function farewell() {
        $view = new View("public/farewell");
        $this->rEngine->render("master",$view);
    }
}