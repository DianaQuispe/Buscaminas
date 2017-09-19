"use strict";  
const app = {
    item :  {
    f :0,
     comment: undefined
    },
    init : function() {
        $('#play').click(function() {
            var arreImages = new Array();
            
            $('#table').empty();
            var numTab = $('#inputTable').val( );
            console.log(numTab);
            for(var i=0; i<numTab; i++) {
                $('#table').append(`<tr>`);
                for(var j=0; j<numTab; j++) {
                    $('#table').append(`<td><img class="img" src="images/blanco.png" id=${app.item.f++} width="100" heigth="250" alt="">\
                    </td></tr>`);
                }
            }
            $('img').click(function() {
                $(this).attr("src","images/bomba.gif");
                alert('d');
                
            })
            
          })

    },
    setup: function() {

    }

}
$(document).ready(app.init);
