let a = 0;
let b = 0;
let c = 0;
let name = "name";

function count(){
  if(a > b && a > c) {
    return "You chose mostly a's " + name + ", you should learn Python!"
  }
  else if(b > a && b > c) {
    return "You chose mostly b's " + name + ", you should learn Java!"
  }
  else if(c > a && c > b) {
    return "You chose mostly c's " + name + ", you should learn C!"
  }
  else {
    return "There is no clear answer " + name + ", you should start with Python to begin!"
  }
}
function choice(value) {
  if(value === "rock" || value === "average" || value === "yes") {
    a = a + 1;
  }
  else if(value === "classical" || value === "fast" || value === "no") {
    b = b + 1;
  }
  else {
    c = c + 1;
  }
}

$(document).ready(function() {

  $("#choice").submit(function(event) {
    event.preventDefault();
    name = $("input#name").val()
    const music = $("input:radio[name=music]:checked").val();
    const speed = $("input:radio[name=speed]:checked").val();
    const spice = $("input:radio[name=spice]:checked").val();
    const risk = $("input:radio[name=risk]:checked").val();
    const travel = $("input:radio[name=travel]:checked").val();
    choice(music);
    choice(speed);
    choice(spice);
    choice(risk);
    choice(travel);
    
    $("#output").text(count());
  });
});