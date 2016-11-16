// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeShape() {
  //code to create shape
  var canvas = document.getElementNs("circle")
  var circle  = document.createElementById(namespace, "game-board")
  circle.setAttribute("cx", 35)
  circle.setAttribute("cy", 15)
  circle.setAttribute("r", 65)
  canvasappendChild(circle)
}
