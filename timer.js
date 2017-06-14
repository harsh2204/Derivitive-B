var counter = 0;
var timer;
var timeLeft;
var sound;
var start;
var reset;
function Timer() {
    function fixTime(s) {
        var min = floor(s / 60);
        var sec = s % 60;
        return nf(min, 2) + ":" + nf(sec, 2);
    }
    Timer.prototype.createTimer = function(time) {
        sound = loadSound("ding.mp3", function() {
            console.log("Sound Loaded!");
        });
        var parentDiv = createDiv("");
        parentDiv.id("timerP");
        //---------------------------------------------------------------
        start = createButton("Start Timer");
        start.parent(parentDiv);
        start.id('buttonTop');
        start.addClass('start');
        $(".start").on("click", function() {
            var $this = $(this);
            // Disable button
            $this.attr({
                "disabled": "disabled",
                "readonly": "readonly"
            });
            Timer.prototype.startTimer();
        });
        //---------------------------------------------------------------
        timeLeft = time;
        timer = createDiv(fixTime(timeLeft));
        timer.parent(parentDiv);
        timer.addClass("timer");
        //---------------------------------------------------------------
        reset = createButton("Reset Timer");
        reset.parent(parentDiv);
        reset.id("buttonTop");
        reset.addClass('reset');
        $(".reset").on("click", function() {
            var $this = $(this);
            counter = 0;
            timer.html(fixTime(timeLeft));
            $('.timer').css('background-color', '#f0e68c');

        });
    }

    Timer.prototype.startTimer = function() {
        function tickDown() {
            counter++;
            console.log(counter);
            // console.log(this.timeLeft);
            timer.html(fixTime(timeLeft - counter));
            if (timeLeft == counter) {
                clearInterval(tick);
                sound.play();
                $('.start').removeAttr("disabled readonly");
                $('.timer').css('background-color', '#ff4c4c');
            }
        }
        var tick = setInterval(tickDown, 1000);
    }
}
