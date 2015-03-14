/**
 * скрипт закружает карту с отметками гороов и информации погоде
 * выполняет ajax запросы на сервер
 * @param param
 */
$(document).ready(function(){  
    /**
     * инициализация карты 
     */
    map.initialize(); 
    weather.initialize();    
});

/*
 * класс запсии с погодой по городу
 */
function forecastDoc(attributes){
    this.city = attributes['city'];
    this.archiv = attributes['archiv'];  
    this.currentData = {
            temp_current_c: '',
            humidity_avg: 0,
            pressure_avg: 0,
            time_update: ''
        };
}

/**
 * основной объект для получения данных о погоде с сервера и вывода в браузере пользователя
 * @param array cities список городов, с информацией для вывода и установки метки на карте
 * @param array forecastArchiv массив который хранит записи о погоде по городам на даты
 * полученные с сервера
 */
var weather ={     
    cities : [],  
    forecastArchiv: [],
    
    initialize: function(){     
        
        /*
         * получение списка городов и информации для установки маркера
         * выполняет ajax запросом на сервер 
         */
        weather.getCities(function(r){
            /*
             * сохраняем полученный массив городов 
             */
            weather.cities = r;       
            /*
             * получаем ajax запросом текущую погоду по всем городам
             */
            weather.getForecastCurrent(function(){                  
                /*
                 * устанавливаем маркеры на карту с текущей температурой
                 */
                weather.addMarkers();
            });    
        });      
    },
    /*
     * получение списка городов и информации для установки маркера
     */
    getCities: function(callback){
        fPOST('getCities',{},callback);
    },
    /*
     * строит график температуры за последние судки используя данные из массива
     * forecastArchiv обеъкта
     */
    showGraph: function(rowArch){
       
       var data = [];   
        /*
         * подготавливаем данные из массива forecastArchiv для построения графика
         */
        rowArch.archiv.forEach(function(r){
            
            data.push({
                
                'last_success_update_date':new Date(r.last_success_update_date * 1000), 
                'temp_current_c':parseFloat(r.temp_current_c.replace(',','.'))
            });
        });

        /**
         * задаем параметры для построения графика 
         */
        var margin = {top: 20, right: 80, bottom: 30, left: 50},
            width = 200,
            height = 100;

        //var parseDate = d3.time.format("%Y%m%d%H%M%S").parse;

        var x = d3.time.scale()
            .range([5, width]);

        var y = d3.scale.linear()
            .range([height-5, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            //.ticks(d3.time.hour, 3)
            .tickFormat(d3.time.format("%H:%M"));

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");//.ticks(5);;

        var line = d3.svg.line()
            .interpolate("linear")
            .x(function(d) { return x(d.last_success_update_date); })
            .y(function(d) { return y(d.temperature); });

        var svg = d3.select("#graph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        color.domain(d3.keys(data[0]).filter(function(key) { return key !== "last_success_update_date"; }));

        var cities = color.domain().map(function(name) {
            return {
              name: name,
              values: data.map(function(d) {
                return {last_success_update_date: d.last_success_update_date, temperature: +d[name]};
              })
            };
        });

        x.domain(d3.extent(data, function(d) { return d.last_success_update_date; }));

        y.domain([
            d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
            d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
          ]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
        ;

        var city = svg.selectAll(".city")
            .data(cities)
            .enter().append("g")
            .attr("class", "city");

        city.append("path")
            .attr("class", "line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { return color(d.name); });
    },
    /*
     * переберает массвив cities объекта weather 
     * и размещает маркеры согласно указанным координатам
     */    
    addMarkers: function(){
        $.each(weather.cities, function(){ 
            var city = this;
            map.addMarker(city.lat,city.lng, city.name, function(){ 
                /* 
                 * назначаем обработчик клика на маркер                 
                 */
                var _marker = this;
                /*
                 * получение ajax запросом температуры за последние сутки 
                 * или с даты последнего получения информации для построения графика
                 * 
                 * @param string city город
                 * @param {type} callback
                 * @returns {undefined}
                 */
                weather.getForecastArchiv(city.name, function(rowArch){  
                    /*
                     * обновляем текущую информацию о погоде
                     */
                    weather.updateCurrent(rowArch,function(){
                        /*
                         * обновляем температуру на маркере
                         */
                        weather.updateLabelMarkers();
                        /*
                         * открываем окно с информацие о погод 
                         */                        
                        weather.openInfoWindow(rowArch,_marker, city);
                        /*
                         * строим графи от температуре за последние сутки
                         */
                        weather.showGraph(rowArch);
                    }); 
                }); 
            });           
        });  
    },  
      
    /*
     * получение ajax запросом данных о погоде за последние сутки или на дату
     * @param string city город
     */
    getForecastArchiv: function(city, callback){
        var rowArch = weather.findInArchiv(city);
        fPOST('getForecastArchiv',{city:city, lastUpdate:rowArch.currentData.time_update}, function(arrJSON){            
            $.each(arrJSON, function(){
                var rowJSON = this;
                if(rowArch){
                    $.merge(rowArch.archiv,rowJSON.archiv);
                }
                else
                {
                    /*
                     * добавляем полученные запросом данные в массив
                     */
                    weather.forecastArchiv.push(new forecastDoc(rowJSON));
                }
            });    
            callback(rowArch);    
        });
    },
    /*
     * получает текущие сведения о погоде по всем городам
     */
    getForecastCurrent: function(callback){
        fPOST('getForecastCurrent',{}, function(arrJSON){ 
            $.each(arrJSON.forecast,function(){
                var rowJSON = this;
                /*
                 * если погоду уже получали то запись в массиве forecastArchiv
                 * с архивной температурой уже есть просто обновляем
                 * если получаем впервые то создаем новую запись
                 */
                var rowArch = weather.findInArchiv(rowJSON.city);
                if(rowArch){
                    rowArch.currentData.time_update = '';
                    rowArch.currentData.temp_current_c = rowJSON.temp_current_c;
                }
                else{                    
                    var rowCurrent = new forecastDoc([]);
                    rowCurrent.city = rowJSON.city;
                    rowCurrent.archiv = [];
                    rowCurrent.currentData.temp_current_c = rowJSON.temp_current_c;
                    weather.forecastArchiv.push(rowCurrent);
                }
            }); 
            callback();
        });    
        
    },
    /*
     * обновление текущей погоды в массиве forecastArchiv класса weather
     */
    updateCurrent: function(rowArch, callback){
        var row = rowArch.archiv[rowArch.archiv.length-1];        
        rowArch.currentData.temp_current_c  = row.temp_current_c;        
        rowArch.currentData.humidity_avg = row.humidity_avg;
        rowArch.currentData.pressure_avg = row.pressure_avg;
        rowArch.currentData.time_update = row.last_success_update_date;
        callback();
    },
                       
    /*
     * поиск города с прогнозом в массиве 
     */
    findInArchiv: function(city){
        for(var i=0; i<=weather.forecastArchiv.length-1;i++) {             
            if(weather.forecastArchiv[i].city==city){
                return weather.forecastArchiv[i];
            }
        }
    },
    
    /*
     * обновление температуры на маркере
     */
    updateLabelMarkers: function(){
        $.each(weather.forecastArchiv, function(){
            var _marker = map.findMarker(this.city);
            if(_marker){
                 _marker.setLabelText(this.currentData.temp_current_c+'°');
            }
        });
    },
        
    /*
     * открытие окна с информацие о погоде и графиком
     */
    openInfoWindow : function(rowArch,marker,city){        
        map.info_window.setContent('Нет информации.');
        map.info_window.setContent(
                '   <div class="title_info">'+city.title+'</div>'+
                '   <div class="temp_current">'+rowArch.currentData.temp_current_c+'°</div>'+
                '   <div class = "information">'+                            
                '       <div class="pressure_avg"><slan class = "label_info">Давление: </span>'+rowArch.currentData.pressure_avg+' мм рт. ст.</div>'+
                '       <div class="humidity_avg"><slan class = "label_info">Влажность: </span>'+rowArch.currentData.humidity_avg+'%</div>'+
                '   </div>'+
                '   <div id="graph">'+
                '    </div>'               );
        map.info_window.open(map.map, marker);
    }
};
/*
 * объект гугл карта
 */
var map = {
    map: null,
    info_window: null,
    lat: 55.017639,
    lng: 82.888980,
    markers: [],
   
    initialize: function(){
        var latlng = new google.maps.LatLng(map.lat,map.lng);        
        
        var mapOpts = {
            zoom: 6,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map.map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);
        map.info_window = new google.maps.InfoWindow({content: ''});

        google.maps.Marker.prototype.setLabel = function(label){
            this.label = new MarkerLabel({
              map: this.map,
              marker: this,
              text: label
            });
            this.label.bindTo('position', this, 'position');
        };
        
        google.maps.Marker.prototype.setLabelText = function(text){           
            this.label.span.innerHTML = text;            
        };
        
        var MarkerLabel = function(options) {
            this.setValues(options);
            this.span = document.createElement('span');
            this.span.className = 'marker_label';
        };

        MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
            onAdd: function() {
                this.getPanes().overlayImage.appendChild(this.span);
                var self = this;
                this.listeners = [
                google.maps.event.addListener(this, 'position_changed', function() { self.draw();    })];
            },
            draw: function() {
                var text = String(this.get('text'));
                var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
                this.span.innerHTML = text;
                this.span.style.left = (position.x + 12) + 'px'; 
                this.span.style.top = (position.y -40) +'px';
            }            
        });
    },
    /*
     * добавление маркера на карту
     * @param lat ширина
     * @param lng долгота
     * @cityName название города
     */
    addMarker: function(lat,lng,cityName,callback){
        var loc = new google.maps.LatLng(lat, lng);
        var label='';
        
        $.each(weather.forecastArchiv, function(){
            if(this.city==cityName){
                label=this.currentData.temp_current_c+'°';
            }
        });
        
        var marker = new google.maps.Marker({
            map: map.map,
            position: loc,
            label: label,
            draggable: true,
            icon: 'images/marker.png'
        });
        map.markers.push([cityName,marker]);
        google.maps.event.addListener(marker, 'click', callback );
    },
    /*
     * поиск маркера в массиве с маркером
     */
    
    findMarker: function(name){
        for(var i=0; i<=map.markers.length-1;i++) {            
            if(map.markers[i][0]==name){
                return map.markers[i][1];
            }
        }
    }
 };
/*
 * функция выполнения запросов к серверу
 */
function fPOST(action,data,callback){
    $.post('ajax.php?action='+action,data,callback,'json');
}

