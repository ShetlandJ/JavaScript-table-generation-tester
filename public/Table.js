var Table = function(){

}

Table.prototype.monthClicker = function(){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i< tableCells.length; i++) {
        tableCells[i].addEventListener("click", bindClick(i));
  }

  function bindClick(i) {
    return function(){
      this.style.backgroundColor = "#AA0000"
    };
  }
}