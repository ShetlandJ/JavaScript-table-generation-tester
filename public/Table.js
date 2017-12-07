var Table = function(){

}

Table.prototype.monthClicker = function(){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", function(i){
      this.style.backgroundColor = "green"
    })

    // setFaceOrHeel(i));
  }

  // function setFaceOrHeel(i) {
  //   return function(){
  //     var statusSelector = document.getElementById('face-or-heel');
  //     statusSelector.style.visibility = "visible"
  //     console.log(tableCells[i])
  //
  //     var face = document.getElementById('face');
  //     face.addEventListener('click', function(){
  //       tableCells[i].style.backgroundColor = "green";
  //       statusSelector.style.visibility = "hidden"
  //     }.bind(this));
  //
  //     var heel = document.getElementById('heel');
  //     heel.addEventListener('click', function(){
  //       tableCells[i].style.backgroundColor = "red";
  //       statusSelector.style.visibility = "hidden"
  //     }.bind(this));
  //
  //   }
  // };
}
