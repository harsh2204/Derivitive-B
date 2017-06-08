var callLink = "http://latex.codecogs.com/svg.latex?";
var slate;
var start;
function setup() {
  noCanvas();
  var timekeeper = new Timer();
  timekeeper.createTimer(10);
  createSlate();
  setupEquation();
  makeButton();
  

  start.mousePressed(function(){
    timekeeper.startTimer()
  });

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
  start = createButton("Start Timer");
  var newEQ = createButton("New Equation");
  start.parent(buttonDiv);
  newEQ.parent(buttonDiv);
  buttonDiv.id("butDiv");
  start.id('start');
  newEQ.id('start');
}
