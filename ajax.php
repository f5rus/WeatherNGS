<?php
/**
 * скрипт для обработки ajax запросов от клиента по погоде
 */

/**
 * подключение необходимых классов
 */
require 'classes/DB.class.php';
require 'classes/ForecastDocument.class.php';
require 'classes/PogodaNGS.class.php';
require 'classes/Forecast.class.php';
require 'classes/Cities.class.php';
try {
    /**
     * инициализация субд
     */
    DB::init();
    
    /**
     * проверка действи из GET запроса
     */
    if(!isset($_GET['action']))
        throw new Exception('Не найдено!');
    /**
     * проверка параметров POST запроса, фильтрация входных данных
     */
    if(isset($_POST['city']))
        $сity = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_SPECIAL_CHARS);
    if(isset($_POST['lastUpdate']))
        $lastUpdate = filter_input(INPUT_POST, 'lastUpdate', FILTER_SANITIZE_SPECIAL_CHARS);
    
    $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
    
    /**
     * проверка действия
     */
    $response = array();
    switch ($action){
        /**
         * если запросили список городов с информацией
         * возвращает города и информация о городах, название, широта, долгота для карты
         */
        case 'getCities':
            $response = Cities::getCities();
            break;
        /**
         * если запросили всю погоду начинаяя с даты
         * возвращает всю информацию о погоде начиная с lastUpdate
         */       
        case 'getForecastArchiv':
            $response = Forecast::getForecastArchiv($сity,$lastUpdate);
            break;
        case 'getForecastCurrent':
        /**
         * если запросили текущую погоду
         * возвращает последнюю информацию о погоде
         */
            $response = Forecast::getForecastCurrent();
            break;
        default:
            throw new Exception('Не найдено!');
            break;
        }
        echo json_encode($response);
    }
catch (Exception $ex) {
    die(json_encode(array('error'=>$ex->getMessage())));
}