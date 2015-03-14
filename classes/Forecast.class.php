<?php

/*класс для выполнения запросов к таблице 'Forecast' с информацией о погоде*/

/**
 * Description of Forecast
 *
 * @author виталя
 */
class Forecast {
/**
 * статический метод получения текощей погоды (температуры)
 * @return array массив городов с текущей информацией(температуры) о погоде
 * @throws Exception
 */
    public static function getForecastCurrent(){
        /**
         * запросом получаем температуру и город с максимальным значением даты, 
         */
        
        $keys = array("city"=>1);
        $initial = array("time_update" => '', "temp_current_c"=>'');
        $reduce = "function (obj, prev) 
            {
                if (prev.time_update < obj.last_success_update_date)
                { 
                    prev.temp_current_c = obj.temp_current_c; 
                    prev.time_update = obj.last_success_update_date;
                }  
            }";
        
        /**
         * отбираем только данные за последние 24 часа 
         */
        $time = (string)(time() - (60 * 60 * 24));
        $criteria =array('condition' => array('last_success_update_date' => array('$gte'=>$time)));
        $g = DB::getMongoDBObject()->Forecast->group($keys, $initial, $reduce, $criteria);
        
        if(!$g || !isset($g["retval"]))
            throw new Exception('Не удалось получить данные с сервера!');
        
        return array('forecast'=> $g["retval"]);
    }
    /**
     * получение всей погоды за последние сутки, если указан дата до позднее этой даты
     * @param string $сity город изформацию о погоде которого нужно получить
     * @param string/unixdate $lastUpdate дата последнего получения информации если
     * не первый запрос
     * @return array массив с погодой
     * @throws Exception
     */
    public static function getForecastArchiv($сity, $lastUpdate=''){
        $time =  (string)(time() - (60 * 60 * 24));
        
        if($lastUpdate!='')
            $time = $lastUpdate;
        
        $criteria = array('$and' => array(
            array('last_success_update_date' => array('$gt'=>$time)),
            array('city'=>$сity))
            );

        $field = array(
            '_id' => FALSE,
            'temp_current_c' => TRUE,
            'pressure_avg' => TRUE,
            'humidity_avg' => TRUE,
            'last_success_update_date' => TRUE,
            'wind_ru_full'=>TRUE
            );

        $cursor = DB::getMongoDBObject()->Forecast->find($criteria, $field);
        
        if(!$cursor)
            throw new Exception('Не удалось получить данные с сервера!');
        
        $result = array();
        $result = iterator_to_array($cursor);

        return array('forecast'=>array('city'=> $сity,'archiv'=>$result));
    }
    /**
     * получение погоды с http://pogoda.ngs.ru/json/ по городам, запись в бд
     * таблицу Forecasts
     * @return array массив со статусом выполненной операции
     * @throws Exception
     */
    public static function request(){
        /**
         * получаем массив городов из таблицы бд Cities
         */
        $cities = Cities::getCitiesName();
        /**
         * получаем текущую информацию о погоде с http://pogoda.ngs.ru/json/ по
         * выбранным выше городам
         */
        $pogoda = PogodaNgs::getForecasts('current',$cities);

        if(!$pogoda)
            throw new Exception('Не удалось получить данные с сервера!');
        /*
         * перебераем полученные данные о погоде по городам
         * создаем экземпляр документа погоды 
         * сохраняем в бд таблицу Forecast
         */
        foreach($pogoda as $row){
            $doc = new ForecastDocument($row->attributes);
            $doc->save();
           /* if(!$doc->save())
                throw new Exception('Не удалось сохранить данные в бд!');*/
            }
        return array('statu'=>'1');
    }
}
