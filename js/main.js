"use strict";  
const app = {

    item :  {
    f :0,
    arreImages: new Array()
    },
    init : function() {
        $('#play').click(function() {
            $('#table').empty();
            var numTab = $('#inputTable').val( );
            for(var i=0; i<numTab; i++) {
                $('#table').append(`<tr>`);
                for(var j=0; j<numTab; j++) {
                    $('#table').append(`<td><img class="img" src="images/blanco.png" id=${app.item.f++} alt="">\
                    </td></tr>`);
                }
            }
            $('img').click(function(){
                var ids = $(this).attr('id');
                console.log($(this).attr('id'));
                for(var i=0; i<app.item.arreImages.length; i++) {
                    if(ids == app.item.arreImages[i]) {
                        alert('perdiste');
                        $(this).attr("src","images/bombita.jpg");
                        $(this).addClass('bomba');

                        
                    }
                    
                }
                
                console.log(app.item.arreImages);    
                $(this).attr("src","images/numero1.jpg");
                
            })
           
            
    })
    Array.prototype.unique=function(a){
        return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
      });
      app.setup();
},
    setup: function() {
        var numAl = parseInt($('#inputTable').val( ))+3; 
        for(var i=0; i <parseInt($('#inputTable').val( ))+3;i ++){ 
            var math =  Math.floor((Math.random() * 12));
            app.item.arreImages.push(math);
            app.item.arreImages =app.item.arreImages.unique();
         
            
        }
        if(app.item.arreImages.length != parseInt(numAl)) {
            app.item.arreImages.push(math);
        }
        

       
    
    }
} 
$(document).ready(app.init);
