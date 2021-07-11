
var dc = new function() {
    var self=this;

    self.httpGet = function(url)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, true );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    self.clicked = function(row,column,e) {
        console.log("clicked",row,column);
        e.addClass("hilit");
        setTimeout(() => e.removeClass("hilit"),200);
        self.httpGet(`/api/clicked?r=${row}&c=${column}`);
    };

    self.init = function() {
        console.log("INIT");
        for(column=0;column!=5;column++)
            for(row=0;row!=4;row++) {
                (function(){
                    var r=row,c=column;
                    $( `#${r}-${c}` ).click(function () {self.clicked(r,c,$(this))});
                })();
            }
    }
};