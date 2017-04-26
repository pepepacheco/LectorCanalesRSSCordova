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
    
    $.canales.create($.canal);
    
};