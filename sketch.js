var callLink = "http://latex.codecogs.com/svg.latex?";
var slate;
function setup() {
  noCanvas();
  var timer = new Timer();
  timer.createTimer(10);
  // timer.startTimer();
  //NEED BUTTON
  // slate.attribute("lang","latex");
  // var s = "\\frac{1+sin(x)}{y}";
  // slate.html(s);
  createSlate();
  setupEquation();



}
function createSlate(){
  slate = createDiv("");
  slate.id("slate");
}
function setupEquation(){
  var equation = createImg(callLink+"\e^{i\\pi}+1");
  equation.parent(slate);
  $('#slate').children("img").hide();
  $('#slate').children("img").fadeIn();
}
