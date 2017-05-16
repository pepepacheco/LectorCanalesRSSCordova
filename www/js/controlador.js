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
        $("#start").append('<div class="col-xs-4" style=background-color:lavender;">'+$.canales.lista_canales[i].nombre+'</div>');
        //  <div class="col-xs-4" style="background-color:lavender;">.col-sm-4 hola que tal como va</div>
    }
};

$.controller.cargaNoticias = function (index) {
    $("#news").empty();
    $("#start").hide();
    $("#news").show();
    
    
};

$.controller.cargaRSS =  function(){
    
};

$.controller.cargaATOM = function(){
    
};