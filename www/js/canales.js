
var canales = {};

/* 
 * Lista de canales. No hay repetidos (con URL repetida).
 * Sí se puede tener dos con el mismo nombre.
 * @type Array
 */
canales.lista_canales = [];

/**
 * Esta función añade un canal a la lista y si existe la URL, 
 * lo actualiza
 * @param {canal} nuevo_canal El canal a añadir
 */
canales.create = function(nuevo_canal) {
    var url = nuevo_canal.getUrl();
    var existe = false;
    for (var i=0; i<canales.lista_canales.length; i++) {
        if (canales.lista_canales[i].getUrl() === url){
            existe = true;
            canales.lista_canales[i]=nuevo_canal;
        }
    }
    if (existe === false) {
        canales.lista_canales.push(nuevo_canal);
    }
};

canales.read = function( index ) {
    if (!isNaN(index) && (index >= 0) && ( index < canales.lista_canales.length)) {
        return(canales.lista_canales[index]);
    } else {
        return(null);
    }
};

/*
 * Devuelve el canal que tenga esa misma URL.
 */
canales.findByURL = function ( url ){
    
};

canales.update = function ( index, canal_actualizado) {
    
    
};

canales.delete = function ( index ) {
    
};



