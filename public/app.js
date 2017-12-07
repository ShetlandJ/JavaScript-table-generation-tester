var app = function(){

  var tableCell = document.getElementsByClassName('month-cells');
  console.log(tableCell);
  tableCell[0].addEventListener('click', function(){
    console.log("hello")
    tableCell[0].style.backgroundColor = "#AA0000";
  });
};


// var colouriseTableCell = function(){
//   // var tableCell = document.getElementById('td');
//   tableCell.style.backgroundColor = "FFFFFF";
// }

window.addEventListener('load', app);
