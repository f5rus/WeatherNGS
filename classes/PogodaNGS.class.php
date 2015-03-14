<?php

/**
 * Класс для получени сведений о погоде по городам с http://pogoda.ngs.ru/json/ 
 * @param array $_attributes 
 */

/**
 * Description of Forecast
 *
 * @author виталя
 */
class PogodaNgs {   
    
    private $_attributes;
    /**
     * проверка на валидность входящих данных
     * @param array $attributes
     */
    public function __construct($attributes=array()) {
        foreach($attributes as $name=>$value){
            if($this->validate($value))
                $this->_attributes[$name] = (is_string($value)) ? htmlspecialchars(strip_tags($value)) : $value;
        };
    }

    public function __set($name, $value) {
        $this->_attributes[$name] = $value;
    }
/**
 * получение данных о погоде по нескольким городам
 * @param array $names указание типа получаемых данных. Например:
 * current - текущие
 * @param array $cities массив гордов по которым необходимо получить информацию о
 * погоде
 * @return boolean|array массив с погодой по городам
 */
    public static function getForecasts($names,$cities){
        $cities_str = implode('","', $cities);    
        
        $opts = array(
                'http'=> array(
                    'method'=>'POST',
                    'header'=>'Content-Type: application/json',
                    'content'=>'{
                        "method":"getForecasts", 
                        "params":{                            
                            "names":"'.$names.'",
                            "cities":["'.$cities_str.'"]
                        }
                    }'
                )            
            );
            
            $context = stream_context_create($opts);
            $result = json_decode(file_get_contents('http://pogoda.ngs.ru/json/',FALSE,$context));           

            
            if($result->error){     
                return FALSE;
            }
            
            if(!$result || !$result->result)
            {
                return FALSE;
            }            
                     
            $weather = $result->result;            

            $array_PogodaNgs= array();
            foreach($weather as $name=>$value){  
               
                $pogoda = new PogodaNgs($value->current);
                $pogoda->city = $name;
                array_push($array_PogodaNgs, $pogoda);
                    
            }
           
                     
            return $array_PogodaNgs;
    }
    /**
     * получние информации о погоде по одному городу
     * @param string $name тип получаемой информации например current - текущая
     * @param string $city город по которому нужно получить прогноз
     * @return boolean
     */
    public function getForecast($name, $city){
        
            $opts = array(
                'http'=> array(
                    'method'=>'POST',
                    'header'=>'Content-Type: application/json',
                    'content'=>'{
                        "method":"getForecast",
                        "params":{
                            "name":"'.$name.'",
                            "city":"'.$city.'"
                        }
                    }'
                )
            );

            $context = stream_context_create($opts);
            $result = json_decode(file_get_contents('http://pogoda.ngs.ru/json/',FALSE,$context));           

            if($result->error){
                return FALSE;
            }
            
            if(!$result || !$result->result)
            {
                return FALSE;
            }
            
            $weather = $result->result;

            foreach($weather as $name=>$value){
                if($this->validate($value))
                    $this->_attributes[$name] = (is_string($value)) ? htmlspecialchars(strip_tags($value)) : $value;
            }
            
            return TRUE;
        }
    /*
     * валидатор данных
     */
    public function validate($value){
        if(!is_numeric($value) && !is_string($value)){
            return FALSE;
        }
         
        if(is_string($value) && strlen($value)>10){
            return FALSE;
        }
        return TRUE;
    }

    public function getattributes(){
        return $this->_attributes;
    }
    
    public function __get($name){
        $getter='get'.$name;
        if(method_exists($this, $getter)){
            return $this->$getter();
        }
        
        if(isset($this->_attributes[$name])){
            return $this->_attributes[$name];
        }
    }
       
}
