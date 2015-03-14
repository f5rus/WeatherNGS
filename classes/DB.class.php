<?php

/*класс служит для создания и управления подключениями субд mongo, реализация паттерна singleton */

/**
 * Description of DB
 *
 * @author виталя
 */
class DB {
    private static $_instance;
    private $_mongoDB;
    /**
     * создание менеджер подключения
     */
    private function __construct(){
    //  $mongoDB = new Mongo("mongodb://:@/pogodadb");
        $mongoDB = new MongoClient();
        $this->_mongoDB = $mongoDB->pogodadb;
    }
    /**
     * проверяет, если менежер подключения к бд еше не создан то создает
     * @return boolean
     */
    public static function init(){
        if(self::$_instance instanceof self){
            return false;
        }
        else {
            self::$_instance = new self();            
        }
    }
    /**
     * возвращает экземпляр менеджера подключений к бд
     * @return object(MongoClient)
     */    
    public static function getMongoDBObject(){
	return self::$_instance->_mongoDB;
    }
    /**
     * заменяет спец символы в строке и очищает от тегов
     * @param string $str
     * @return string
     */
    public static function esc($str){
        return strip_tags(htmlspecialchars($str));
    }
}
