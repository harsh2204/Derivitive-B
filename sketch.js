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


    // $('#label').click(function() {
    //     $(this).siblings('select').css('width', $(this).outerWidth(true)).toggle();
    // });
    var selectParent = createDiv("");
    selectParent.id("selectParent");
    selectParent.parent(slate);

    createElement('br').attribute('clear', 'all').parent(slate);
    difficulty = createSelect();
    difficulty.id('dif');
    difficulty.attribute('name', 'difficulty');
    difficulty.attribute('style', 'display:none;');
    difficulty.parent(slate);

    //----------------------------------------------------
    // var url = "https://raw.githubusercontent.com/harsh2204/Derivitive-B/master/problems.json";
    var url = "problems.json";
    $.getJSON(url,{},function(json) {
          problemSet = json;
          console.log(json);
            console.log("JSON LOADED");
            for (var i = 0; i < problemSet.problem.length; i++) {
                console.log("GOing through the problemSet " + problemSet.problem[i].difficulty);
                difficulty.option(problemSet.problem[i].difficulty);
            }
            difficulty.attribute('size', problemSet.problem.length);
        }
    ).fail(function(data){
      alert("JSON did not load!");
      console.log(data);
    });


    $('#label').click(function (e) {
    e.stopPropagation();
    $(this).siblings('select').css('width', $(this).outerWidth(true)).toggle();
});

$('#dif').change(function (e) {
    e.stopPropagation();
    var val = this.value || 'Select options';
    $(this).siblings('#label').text(val);
    $(this).hide();
});

$('select').find('option').on({
    'mouseover': function () {
        $('.hover').removeClass('hover');
        $(this).addClass('hover');
    },
        'mouseleave': function () {
        $(this).removeClass('hover');
    }
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
    var bottomDiv = createDiv("");
    bottomDiv.id("butDiv");
    // start = createButton("Start Timer");
    // start.parent(bottomDiv);
    // start.id('start');
    var newEQ = createButton("Show Equation");
    newEQ.parent(bottomDiv);
    newEQ.id('start');
}
