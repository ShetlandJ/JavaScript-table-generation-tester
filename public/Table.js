var Table = function(){
this.statusBoolean();
}

Table.prototype.monthClicker = function(){
  const tableCells = document.getElementsByTagName('td');

  for(var i=0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", function(i){
        this.style.backgroundColor = "green"
    })
  }
}

Table.prototype.statusBoolean = function(){
  var faceRadioBtn = document.getElementById('face-radio');
  faceRadioBtn.addEventListener('change', function(){
    console.log("James");
  })
  var heelRadioBtn = document.getElementById('heel-radio');
  heelRadioBtn.addEventListener('change', function(){
    console.log("Steph");
  })




  var radioStatusBool = (document.getElementById("face-radio").checked)
  console.log(radioStatusBool)
  if (radioStatusBool){
    console.log("Hello")
  }
}
