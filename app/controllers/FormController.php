<?php declare(strict_types=1);

namespace App\Controllers;

use Api\SchemaApiController;
use Core\Rendering\View;

class FormController {
    private \Core\Rendering\RenderEngine $rEngine;

    public function __construct(\Core\Rendering\RenderEngine $engine) {
        $this->rEngine = $engine;
    }

    public function index() {
        $fields = SchemaApiController::getFieldsBySectionId("identificacion");
        
        $view = new View("public/greeting");
        $view->data(["fields"=>$fields]);
        $this->rEngine->render("master",$view);
    }

    public function form() {
        $view = new View("public/form");
        $this->rEngine->render("master",$view);
    }
    public function validate() {
        debug($_POST); //Prueba de ruta desplayando los datos del formulario.
    }

    public function identify(){
        debug($_POST); //Prueba de ruta desplayando los datos del formulario.
    }

    public function farewell() {
        $view = new View("public/farewell");
        $this->rEngine->render("master",$view);
    }
}