const map = [
" 12* 1*",
"1 *  *2",
" 3121 1",
"1* 1  *",
" 21 31*",
"*11  * ",
" *1*312",
];

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
})
})
