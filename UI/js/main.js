function openDrawerMenu(){
  var x = document.getElementById("mainMenu");
  if (x.className === "menu"){
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}