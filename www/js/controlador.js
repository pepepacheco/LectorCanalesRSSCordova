/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.controller = {};

$.controller.muestra = function(caja){
    // Para cerrar el menú cuando pulsamos una opción
    $(".navbar-collapse").collapse("hide");
    $(".panel").hide();
    $(caja).show("slow");
};

$.controller.addChannel = function (){
    // leemos del formulario y creamos el canal con esa información
    $.canal.add($("#nombreCanal").val(), $("#urlCanal").val());
    // si el canal "funciona" lo añadimos a marcadores  
    // $.canales.create($.canal);
    $(".panel").hide();
    $("#start").show();
    
};

$.controller.cargaCanales =  function () {
    var i=0;
    $.canales.load();
    $("#start").empty();
    for (i=0; i< $.canales.tam(); i++){
        // $("#start").append('<div class="col-xs-4" style=background-color:lavender;">'+$.canales.lista_canales[i].nombre+'</div>');        
        $.controller.add2rejilla(i);
    }
};

$.controller.add2rejilla = function (index) {
    $("#start").append('<div onclick="$.controller.cargaNoticias('+index+')" class="col-xs-4" style=background-color:lavender;">'+$.canales.lista_canales[index].nombre+'</div>');
};

$.controller.cargaNoticias = function (index) {
    $("#news").empty();
    $("#start").hide();
    $("#news").show();
    if ($.canales.lista_canales[index].tipo==="rss") {
        $.controller.cargaRSS(index);
    } else {  
        if ($.canales.lista_canales[index].tipo==="atom") {
            $.controller.cargaATOM(index);
        }else{
            $.error.msg("Listando noticias", "Tipo de canal desconocido." );
            // ERROR tipo de canal desconocido
        }
    }
    
};

$.controller.cargaRSS =  function(index){
    $("#news").append('<h3>RSS: '+$.canales.lista_canales[index].nombre+'</h3>');
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "select * from rss where url=\""+url+"\"",
            format: "json"
        },
        success: function (response) {
            // código para listar las noticias del canal RSS
        }
    });
};

$.controller.cargaATOM = function(index){
    $("#news").append('<h3>ATOM: '+$.canales.lista_canales[index].nombre+'</h3>');
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "select * from atom where url=\""+url+"\"",
            format: "json"
        },
        success: function (response) {
            // código para listar las noticias del canal ATOM
        }
    });
};