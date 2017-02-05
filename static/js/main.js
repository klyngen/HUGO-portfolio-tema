function setActive(id) {
  var d = document.getElementById(id);
  d.className += "active";
  var e = d.childNodes[0];
  e.style.color = "black";
  e.style.background = "white";
}
