<?php

/* 
 * Клас документ таблицы Forecast
 * @param $city Город
 * @param $temp_current_c температура
 * @param $pressure_avg   давление
 * @param $humidity_avg   влажность воздуха
 * @param $last_success_update_date   дата информации
 */


/**
 * Description of ForecastDocument
 *
 * @author виталя
 */
class ForecastDocument {
    public $city='';
    public $temp_current_c='';
    public $pressure_avg=0;
    public $humidity_avg=0;
    public $last_success_update_date='';

/**
 * конструктор 
 * @param array $attributes
 */
    public function __construct($attributes = array()){    
        $this->setAttributes($attributes);
    }
    /**
     * заполняет свойства аттрибутами из конструктора
     * @param array $values
     */
    public function setAttributes($values){
        foreach($values as $name=>$value)
        {
            if(isset($this->$name)){
                $this->$name = $value;
            }
        }
    }
    /**
     * проверяет существует ли в базе данныз запись о погоде на угказанную в
     * критериях дату для города
     * @param type $criteria
     * @return boolean
     */
    public static function existindb($criteria){
        $doc = DB::getMongoDBObject()->Forecast->findOne($criteria);
        if($doc){
            return TRUE;
        }
    }
    /**
     * сохраняет сведения о погоде на дату по городу в бд таблицу Forecast
     * @return boolean
     */
    public function save(){
        /**
         * производит проверку данных перед записью в бд
         */
        if(!$this->validate())
            return;
        /**
         * проверяет существует ли по этому городу информация о погоде на указанную
         * дату
         */
        $criteria=array('$and' => array(
            array('last_success_update_date'=>$this->last_success_update_date),
            array('city'=>$this->city))
            );
        
        if($this->existindb($criteria))
            return;

        /**
         * добавляет запись в бд
         */
        DB::getMongoDBObject()->Forecast->insert(array(
            'city'=>DB::esc($this->city),
            'temp_current_c'=>DB::esc($this->temp_current_c),
            'pressure_avg'=>$this->pressure_avg,
            'humidity_avg'=>$this->humidity_avg,
            'last_success_update_date'=>DB::esc($this->last_success_update_date),
        ));
        return TRUE;
    }
    /**
     * валидация данных
     * @return boolean true если данные валидны
     * @throws Exception
     */
    public function validate(){
    
       $rules = array(
            array('attr'=>array('city','last_success_update_date'), 'rule'=> 'required'),
            array('attr'=>array('city','temp_current_c','last_success_update_date'),'rule'=>'is_string'),
            array('attr'=>array('city','temp_current_c','last_success_update_date'),'rule'=>'max_lenght', 'arg'=> 10),
            array('attr'=>array('pressure_avg','humidity_avg'),'rule'=> 'is_numeric'),
            array('attr'=>array('pressure_avg','humidity_avg'),'rule'=>'max','arg'=>10000)
        );

       foreach ($rules as $r){
            foreach ($r['attr'] as $attr) {
                $value = $this->$attr;

                switch ($r['rule']){
                    case 'is_string':
                        if(!is_string($value))
                            throw new Exception('Значение должно иметь тип(String)'.$attr);
                        break;
                    case 'is_numeric':
                        if(!is_numeric($value))
                            throw new Exception('Значение должно иметь тип(Numeric)'.$attr);
                        break;
                    case 'required':
                        if(is_string($value) && trim($value)=='')
                            throw new Exception('Значения должны быть заполнены'.$attr);
                        break;
                    case 'max_lenght':
                        if(strlen($value)>$r['arg'])
                            throw new Exception('Превышено допустимое количество символов аттрибута'.$attr);
                        break;
                    case 'max':
                        if($value>$r['arg'])
                            throw new Exception('Превышено превышено максимальное значение аттрибута'.$attr);
                        break;
                }
            }
        }
        return TRUE;
    }
}
