var callLink = "http://latex.codecogs.com/svg.latex?";
var slate;
var start;
var problemSet;
var difficulty;

function setup() {
    noCanvas();
    var timekeeper = new Timer();
    timekeeper.createTimer(10);
    createSlate();
    setupSelector();
    setupEquation();
    makeButton();

    start.mousePressed(function() {
        timekeeper.startTimer()
    });

}

function createSlate() {
    slate = createDiv("");
    slate.id("slate");
}

function setupSelector() {

    var label = createElement('label', "Select a difficulty of problem");
    label.parent(slate);
    label.attribute('for', 'difficulty')
    label.id('label');
    $('#label').click(function() {
        $(this).siblings('select').css('width', $(this).outerWidth(true)).toggle();
    });
    createElement('br').attribute('clear', 'all').parent(slate);
    difficulty = createSelect();
    difficulty.id('dif');
    difficulty.attribute('name', 'difficulty');
    difficulty.attribute('style', 'display:none;');
    difficulty.parent(slate);

    //----------------------------------------------------
    var url = "https://raw.githubusercontent.com/harsh2204/Derivitive-B/master/problems.json";
    $.getJSON(url,{},function(json) {
          problemSet = json;
          console.log(json);
            console.log("JSON LOADED");
            for (var i = 0; i < problemSet.problem.length; i++) {
                console.log("GOing through the problemSet " + problemSet.problem[i].difficulty);
                difficulty.option(problemSet.problem[i].difficulty);
            }
        }
    ).fail(function(data){
      console.log(data);
    });
}

function setupEquation() {
    // var s = "\\frac{1+sin(x)}{y}";
    var equation = createImg(callLink + "\e^{i\\pi}+1");
    equation.parent(slate);
    $('#slate').children("img").hide();
    $('#slate').children("img").fadeIn();
}

function makeButton() {
    var buttonDiv = createDiv("");
    start = createButton("Start Timer");
    var newEQ = createButton("New Equation");
    start.parent(buttonDiv);
    newEQ.parent(buttonDiv);
    buttonDiv.id("butDiv");
    start.id('start');
    newEQ.id('start');
}
