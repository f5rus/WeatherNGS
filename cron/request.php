<?php
/**
 * скрипт который должен запускаться с периодом времени для парсинга информации
 * о текущей погоде и записи ее в базу данных 
 */
require '../classes/Cities.class.php';
require '../classes/DB.class.php';
require '../classes/PogodaNGS.class.php';
require '../classes/ForecastDocument.class.php';
require '../classes/Forecast.class.php';
try {
    DB::init();
    $response = Forecast::request();
    }
catch (Exception $ex) 
    {
    die(json_encode(array('error'=>$ex->getMessage())));
}