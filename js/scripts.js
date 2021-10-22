function count(){
  if(a > b && a > c) {
    return "You chose mostly a's name, you should learn Python!"
  }
  else if(b > a && b > c) {
    return "You chose mostly a's name, you should learn Java!"
  }
  else if(b > a && b > c) {
    return "You chose mostly c's name, you should learn C!"
  }
  else {
    return "There is no clear answer name, you should start with Python to begin!"
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