
var canal = {};

canal.nombre = "";
canal.tipo = "";
canal.url = "";

canal.add = function(nombre, tipo, url){
    canal.nombre = nombre;
    canal.tipo = tipo;
    canal.url = url;
};

canal.update = function(nombre, tipo, url){
    canal.nombre = nombre;
    canal.tipo = tipo;
    canal.url = url;
};
