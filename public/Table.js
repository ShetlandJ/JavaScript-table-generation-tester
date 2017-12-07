var Table = function(){

}

Table.prototype.monthClicker = function(){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", setFaceOrHeel(i));
  }

  function setFaceOrHeel(i) {
    return function(){
      var statusSelector = document.getElementById('face-or-heel');
      statusSelector.style.visibility = "visible"

      var face = document.getElementById('face');
      face.addEventListener('click', function(){
        this.style.backgroundColor = "green";
        statusSelector.style.visibility = "hidden"
      }.bind(this));

      var heel = document.getElementById('heel');
      heel.addEventListener('click', function(){
        this.style.backgroundColor = "red";
        statusSelector.style.visibility = "hidden"
      }.bind(this));

    }
  };
}
