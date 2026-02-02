function show() {
  var x = document.getElementById("nav-ul");
  if (x.className === "nav-ul") {
    x.className += " responsive";
  } else {
    x.className = "nav-ul";
  }
}