var app = function(){

  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i< tableCells.length; i++) {
        tableCells[i].addEventListener("click", bindClick(i));
  }

  function bindClick(i) {
    return function(){
      console.log(i);
      this.style.backgroundColor = "#AA0000"
    };
  }






  // table.addEventListener('click', res => res.target.style.backgroundColor = "#AA0000")

  // var tableCellArray = document.getElementsByClassName('month-cells');
  //   tableCellArray[0].addEventListener('click', function(){
  //     tableCellArray[0].style.backgroundColor = "#AA0000";
  //   });
};


// var colouriseTableCell = function(){
//   // var tableCell = document.getElementById('td');
//   tableCell.style.backgroundColor = "FFFFFF";
// }

window.addEventListener('load', app);
