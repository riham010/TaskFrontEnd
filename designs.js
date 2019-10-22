// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    var table=document.getElementById('pixelCanvas'); 
    var rows=document.getElementById('inputHeight').value; 
    var cols=document.getElementById('inputWidth').value;
    var tableBody='';
     for(var i=0;i<rows;i++)
     {
        tableBody+='<tr>';
        for(var j=0;j<cols;j++)
        {
          tableBody+='<td></td>';
        }
        tableBody+='</tr>';
     }
     table.innerHTML=tableBody;
     AddEventForTd();
  }
function AddEventForTd(){
  var tds=document.getElementsByTagName('td');
  for(var x=0;x<tds.length;x++){ 
    tds[x].addEventListener("click", function(e){
      var currentTd=e.target;
      currentTd.style.backgroundColor=document.getElementById('colorPicker').value;
    });
  }
}
  