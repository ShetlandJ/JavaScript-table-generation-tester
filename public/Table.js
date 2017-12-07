var Table = function(){
  this.statusBoolean();
}

Table.prototype.monthClicker = function(color){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", function(i){
      this.style.backgroundColor = color
    })
  }
}

Table.prototype.statusBoolean = function(){
  var faceRadioBtn = document.getElementById('face-radio');
  var heelRadioBtn = document.getElementById('heel-radio');

  faceRadioBtn.addEventListener('change', function(){
    this.monthClicker('green');
  }.bind(this))
  heelRadioBtn.addEventListener('change', function(){
    this.monthClicker("red");
  }.bind(this))
}
