
var canal = {};

canal.nombre = "";
canal.tipo = "";
canal.url = "";

canal.checkAndDo = function (nombre, url){
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "select * from rss where url=\""+url+"\"",
            format: "json"
        },
        success: function (response) {
            if (response.query.count >0) {
                canal.nombre = nombre;
                canal.tipo = "rss";
                canal.url = url;
            } else {
                 $.ajax({
                    url: "http://query.yahooapis.com/v1/public/yql",
                    jsonp: "callback",
                    dataType: "jsonp",
                    data: {
                        q: "select * from atom where url=\""+url+"\"",
                        format: "json"
                    },
                    success: function (response) {
                        if (response.query.count >0) {
                            // lo guardo como ATOM    
                            canal.nombre = nombre;
                            canal.tipo = "atom";
                            canal.url = url;
                        } else {
                            throw error;
                        }
                    } 
                 });
             }
         }
    });
};

canal.add = function(nombre, url){
    canal.checkAndDo(nombre, url);
};

canal.update = function(nombre, tipo, url){
    canal.nombre = nombre;
    canal.tipo = tipo;
    canal.url = url;
};

canal.getUrl = function (){
    return canal.url;
};

canal.setUrl = function (url){
    canal.url = url;
};

canal.getNombre = function (){
    return canal.nombre;
};

canal.setNombre = function (nombre){
    canal.nombre = nombre;
};

canal.getTipo = function (){
    return canal.tipo;
};

canal.setTipo = function (tipo){
    canal.tipo = tipo;
};