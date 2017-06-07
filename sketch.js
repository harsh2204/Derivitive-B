var callLink = "http://latex.codecogs.com/svg.latex?";
var slate;
function setup() {
  noCanvas();
  var timer = new Timer();
  timer.createTimer(10);
  createSlate();
  setupEquation();
  makeButton();
}
function createSlate(){
  slate = createDiv("");
  slate.id("slate");
}
function setupEquation(){
  // var s = "\\frac{1+sin(x)}{y}";
  var equation = createImg(callLink+"\e^{i\\pi}+1");
  equation.parent(slate);
  $('#slate').children("img").hide();
  $('#slate').children("img").fadeIn();
}

function makeButton(){
  var buttonDiv = createDiv("");
  var start = createButton("Start Timer");
  var newEQ = createButton("New Equation");
  start.parent(buttonDiv);
  newEQ.parent(buttonDiv);
  buttonDiv.id("butDiv");
  start.id('start');
  newEQ.id('start');
  start.mousePressed(timer.startTimer());
}
