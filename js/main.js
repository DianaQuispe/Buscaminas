"use strict";  

$('#play').click(function() {
    $('#table').empty();
    var numTab = $('#inputTable').val( );
    console.log(numTab);
    for(var i=0; i<numTab; i++) {
        $('#table').append(`<tr>`);
        for(var j=0; j<numTab; j++) {
            $('#table').append(`<td>dff</td></tr>`);
        }
    }
})