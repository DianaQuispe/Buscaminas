"use strict";
const map = [
" 12* 1*",
"1 *  *2",
" 3121 1",
"1* 1  *",
" 21 31*",
"*11  * ",
" *1*312",
];
const map1 = [
    " 12* 1*12",
    "1 *1 *231",
    " 3121 1**",
    "1* 121** ",
    " * 21 31*",
    "*11 2*1* ",
    " *1*3121*",
];
const map2 = [
    " 12* 1*1211*",
    "1 *1 *231  *",
    " 3121 1** 13",
    "1* 1 *321** ",
    " * 21 312 1*",
    "*11 2*1* 11 ",
    " *1*312 * 1*",
    " 12* 1*1 232",
    " * 21 312 1*",
    "*11 2*1* 11 ",
    
];

$(document).ready( function() {
    $('#play').click(function() {
        
            let table = document.getElementById('table');
            
            table.innerHTML = "";
            var matrix = [];
        for(var i =0; i<map.length;i ++) {
            var tr = document.createElement('tr');
            matrix[i] =[];
            for(var j=0; j<map[i].length; j++){
                var td = document.createElement('td');
                if(map[i][j] == '*') {
                    var div = document.createElement('div');
                    div.className="celda";
                    
                    var imagen = document.createElement('img');
                    imagen.src = "images/bombita.png"; 
                    td.className="bomba";
                    
                    div.appendChild(imagen);
                    
                    td.appendChild(div);      
        
                }else if(map[i][j] == '1' ) {
                    var div = document.createElement('div');
                    div.className="celda";
                    
                    var imagen = document.createElement('img');
                    imagen.src = "images/numero1.jpg"; 
                    div.appendChild(imagen);
                    td.appendChild(div);  
                    
                }else if(map[i][j] == '2') {
                    var div = document.createElement('div');
                    div.className="celda";
                    var imagen = document.createElement('img');
                    imagen.src = "images/numero2.jpg"; 
                    div.appendChild(imagen);
                    td.appendChild(div);  
                    
                }else if(map[i][j] == '3') {
                    var div = document.createElement('div');     
                    div.className="celda";
                    var imagen = document.createElement('img');
                    imagen.src = "images/numero3.jpg"; 
                    div.appendChild(imagen);
                    td.appendChild(div); 
                
                }
                tr.appendChild(td);
        }
        table.appendChild(tr);
        
        }
        $('td').click(function() {
            $(this).children().css("display","inline");
            if($(this).hasClass('bomba')){
                alert('PERDISTE');
            }
            
        })
        })
        $('#medio').click(function() {
            
                let table = document.getElementById('table');
                
                table.innerHTML = "";
                var matrix = [];
            for(var i =0; i<map1.length;i ++) {
                var tr = document.createElement('tr');
                matrix[i] =[];
                for(var j=0; j<map1[i].length; j++){
                    var td = document.createElement('td');
                    if(map1[i][j] == '*') {
                        var div = document.createElement('div');
                        div.className="celda";
                        
                        var imagen = document.createElement('img');
                        imagen.src = "images/bombita.png"; 
                        td.className="bomba";
                        
                        div.appendChild(imagen);
                        
                        td.appendChild(div);      
            
                    }else if(map1[i][j] == '1' ) {
                        var div = document.createElement('div');
                        div.className="celda";
                        
                        var imagen = document.createElement('img');
                        imagen.src = "images/numero1.jpg"; 
                        div.appendChild(imagen);
                        td.appendChild(div);  
                        
                    }else if(map[i][j] == '2') {
                        var div = document.createElement('div');
                        div.className="celda";
                        var imagen = document.createElement('img');
                        imagen.src = "images/numero2.jpg"; 
                        div.appendChild(imagen);
                        td.appendChild(div);  
                        
                    }else if(map[i][j] == '3') {
                        var div = document.createElement('div');     
                        div.className="celda";
                        var imagen = document.createElement('img');
                        imagen.src = "images/numero3.jpg"; 
                        div.appendChild(imagen);
                        td.appendChild(div); 
                    
                    }
                    tr.appendChild(td);
            }
            table.appendChild(tr);
            
            }
            $('td').click(function() {
                $(this).children().css("display","inline");
                if($(this).hasClass('bomba')){
                    alert('PERDISTE');
                }
                
            })
            })
            $('#dificil').click(function() {
                
                    let table = document.getElementById('table');
                    
                    table.innerHTML = "";
                    var matrix = [];
                for(var i =0; i<map2.length;i ++) {
                    var tr = document.createElement('tr');
                    matrix[i] =[];
                    for(var j=0; j<map2[i].length; j++){
                        var td = document.createElement('td');
                        if(map1[i][j] == '*') {
                            var div = document.createElement('div');
                            div.className="celda";
                            
                            var imagen = document.createElement('img');
                            imagen.src = "images/bombita.png"; 
                            td.className="bomba";
                            
                            div.appendChild(imagen);
                            
                            td.appendChild(div);      
                
                        }else if(map1[i][j] == '1' ) {
                            var div = document.createElement('div');
                            div.className="celda";
                            
                            var imagen = document.createElement('img');
                            imagen.src = "images/numero1.jpg"; 
                            div.appendChild(imagen);
                            td.appendChild(div);  
                            
                        }else if(map[i][j] == '2') {
                            var div = document.createElement('div');
                            div.className="celda";
                            var imagen = document.createElement('img');
                            imagen.src = "images/numero2.jpg"; 
                            div.appendChild(imagen);
                            td.appendChild(div);  
                            
                        }else if(map[i][j] == '3') {
                            var div = document.createElement('div');     
                            div.className="celda";
                            var imagen = document.createElement('img');
                            imagen.src = "images/numero3.jpg"; 
                            div.appendChild(imagen);
                            td.appendChild(div); 
                        
                        }
                        tr.appendChild(td);
                }
                table.appendChild(tr);
                
                }
                $('td').click(function() {
                    $(this).children().css("display","inline");
                    if($(this).hasClass('bomba')){
                        alert('PERDISTE');
                    }
                    
                })
                })

})
