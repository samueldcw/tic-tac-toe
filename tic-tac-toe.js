// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function topLeft() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 62)
  circle.setAttribute("cy", 35)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}

function topmiddle() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 35)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function topleft() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 235)
  circle.setAttribute("cy", 35)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}

function middleright() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 62)
  circle.setAttribute("cy", 123)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function middle() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 123)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function middleleft() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 235)
  circle.setAttribute("cy", 123)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function bottomright() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 62)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function bottommiddle() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
function bottomleft() {
  //code to create shape
  var canvas = document.getElementById("game-board")
  var circle  = document.createElementNS(namespace, "circle")
  canvas.appendChild(circle)
  circle.setAttribute("cx", 235)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 25)
  canvas.appendChild(circle)
}
