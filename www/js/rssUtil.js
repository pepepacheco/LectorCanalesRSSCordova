
var rssUtil = {};

rssUtil.url = "";
rssUtil.name = "";

rssUtil.create = function (url, nombre) {
    rssUtil.url = url;
    rssUtil.name = nombre;
};

rssUtil.read = function (caja) {
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
        // Tell YQL what we want and that we want JSON
        data: {
            q: "select * from rss where url=\""+rssUtil.url+"\"",
            format: "json"
        },
        // Work with the response
        success: function (response) {
            $(caja).empty();
            var num_noticias = response.query.count;
            var array_noticias = response.query.results.item;
            for (var i=0; i<num_noticias; i++){
                var div = $("<div class='well'></div>");
                div.append("<h3>"+array_noticias[i].title+"</h3>");
                div.append("<p>"+array_noticias[i].description+"</p>");
                div.append("<p>"+array_noticias[i].pubDate+"</p>");
                // array_noticias[i].link
                $(caja).append(div);
            }
            
        }
    });
};

rssUtil.update = function (url, nombre) {
    rssUtil.url = url;
    rssUtil.name = nombre;
};