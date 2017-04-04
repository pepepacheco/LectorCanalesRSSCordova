
var canales = {};

canales.lista_canales = [];

canales.create = function(nuevo_canal) {
    canales.lista_canales.push(nuevo_canal);
};

canales.read = function( index ) {
    if (!isNaN(index) && (index >0) && (index<canales.lista_canales.length)) {
        return(canales.lista_canales[index]);
    } else {
        return(null);
    }
};

canales.update = function ( index, canal_actualizado) {
    
};

canales.delete = function ( index ) {
    
};



