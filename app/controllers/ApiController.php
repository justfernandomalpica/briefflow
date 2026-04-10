<?php declare(strict_types=1);

namespace App\Controllers;

use Api\SchemaApiController;

class ApiController {
    // Form Schema 
    public static function getSchema() {
        $schema = SchemaApiController::getSchema('json');
        self::renderJson($schema);
    }

    public static function getAllSections() {
        $sections = SchemaApiController::getAllSections('json');
        self::renderJson($sections);
        
    }

    public static function getSectionById(array $params) {
        $id = $params['id'] ?? '';
        $section = SchemaApiController::getSectionById($id,'json');
        if($section==='') {
            http_response_code(404);
            exit;
        }
        self::renderJson($section);
    }

    public static function getAllFields() {
        $fields = SchemaApiController::getAllFields('json');
        self::renderJson($fields);
    }

    public static function getFieldsBySectionId(array $params) {
        $id = $params['id'] ?? '';
        $fields = SchemaApiController::getFieldsBySectionId($id,'json');
        if($fields==='') {
            http_response_code(404);
            exit;
        }
        self::renderJson($fields);
    }

    // Responses
        // ToDo

    // Private methods
    private static function renderJson($value) {
        header('Content-Type: application/json');
        echo $value;
    }
}