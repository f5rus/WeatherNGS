<?php
/*класс для работы с таблицей Cities бызы данных*/


/**
 * Description of Cities
 *
 * @author виталя
 */
class Cities {  
    /**
     * получает имена всех городов
     * @return array, например array('nsk','omsk','tomsk');
     */
    public static function getCitiesName(){
        $cursor = DB::getMongoDBObject()->Cities->find(array(),array("name" => 1, "_id"=>0));
        $result = array();
        foreach ($cursor as $val){
            array_push($result, $val['name']);
        }
        return $result;
    }
    /**
     * получает записи из таблицы с наванием городов и прочей информацией 
     * @return array, например 
     *      array({
     *          'name'=>'nsk', краткое наименование
     *          'title'=>'Новосибирск', полное название
     *          'lat'=>89.9998876, широта
     *          'lng'=>56.2324323 долгота
     *      });
     */
    public static function getCities(){
        $cursor = DB::getMongoDBObject()->Cities->find(array(),array("_id"=>0));
        $result = array();
        $result = iterator_to_array($cursor);
        return $result;
    }
     /**
     * добавляет запись в таблицу с названием города и процей информацией 
     * @param array массив с аттрибутами
     * @return true
     *  });
     */
    public static function setCity($attributes){
        DB::getMongoDBObject()->Cities->insert(
                array(
                    'name'=>$attributes[name],
                    'title'=>$attributes[title],
                    'lat' => $attributes[lat],
                    'lng'=> $attributes[lng])
                );
    }
}
