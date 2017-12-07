var Table = function(){

}

Table.prototype.monthClicker = function(){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", function(i){
      this.style.backgroundColor = "green"
    })
  }


}
