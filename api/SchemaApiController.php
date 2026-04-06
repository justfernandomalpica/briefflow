<?php declare(strict_types=1);

namespace Api;

class SchemaApiController {
    private static ?array $schema = null;

    private const JSON = 'json';
    private const ARRAY = 'array';
    private const JSON_FORMAT = JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;

    public static function setSchema(string $jsonPath) {
        $baseErrorMessage = "Error while settign form schema file. ";
        $path = trim($jsonPath);
        if($path === "") throw new \InvalidArgumentException($baseErrorMessage."Path cannot be empty");
        $path = realpath(PROJECT_ROOT.$path."form.schema.json");
        if($path === false) throw new \InvalidArgumentException($baseErrorMessage."No form.schema.json file in provided directory");
        $json = file_get_contents($path);
        self::$schema = json_decode($json, true);
    }

    public static function getSchema(string $format = self::ARRAY) : array | string {
        if(is_null(self::$schema)) return ($format === self::JSON) ? "" : [];
        return self::returnOnFormat(self::$schema,$format);
    }

    public static function getAllSections(string $format = self::ARRAY) : array | string {
        if(is_null(self::$schema)) return ($format === self::JSON) ? "" : [];
        $sections = [];
        foreach(self::$schema["sections"] as $section) {
            $id = $section["id"];
            unset($section["id"]);
            $sections[$id] = $section;
        }
        return self::returnOnFormat($sections,$format);
    }

    public static function getSectionById(string $id, string $format = self::ARRAY) : array | string {
        $sections = self::getAllSections();
        if(!in_array($id,array_keys($sections))) return ($format === self::JSON) ? "" : [];
        $section = [];
        foreach($sections as $sId => $sec) {
            if($sId !== $id) continue;
            $section = $sec;
            break;
        }
        return self::returnOnFormat($section,$format);
    }
    
    public static function getFieldsById(string $id, string $format = self::ARRAY) : array | string {
        $fields = self::getSectionById($id)["fields"];
        $assocFields = [];
        foreach($fields as $field) {
            $fId = $field["id"];
            unset($field["id"]);
            $assocFields[$fId] = $field;
        }
        return self::returnOnFormat($assocFields,$format);
    }

    private static function returnOnFormat(array $value, string $format = self::ARRAY) : array | string {
        return ($format === self::ARRAY) ? $value : self::encode($value);
    }

    private static function encode(array $value) : string {
        $value = json_encode($value, self::JSON_FORMAT);
        return ($value === false) ? "" : $value;
    }
}