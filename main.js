// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;
let mouseX, mouseY;
let circle = {
  x: 500,
  y: 400,
};
// Global Variables
// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}

// Animation Loop
requestAnimationFrame(draw);

function draw() {
  //Logic
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // Draw

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Player
  if (mouseX > circle.x) {
    circle.x += 5;
  }
  if (mouseY > circle.y) {
    circle.y += 5;
  }
  if (mouseX < circle.x) {
    circle.x -= 5;
  }
  if (mouseY < circle.y) {
    circle.y -= 5;
  }
  // Animate
  requestAnimationFrame(draw);
}
