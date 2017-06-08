var counter = 0;
var timer;
var timeLeft;
var sound;

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
        timeLeft = time;
        timer = createDiv(fixTime(timeLeft));
        timer.addClass("timer");
    }

    Timer.prototype.startTimer = function() {
        function tickDown() {
            counter++;
            // console.log(counter);
            // console.log(this.timeLeft);
            timer.html(fixTime(timeLeft - counter));
            if (timeLeft == counter) {
                clearInterval(tick);
                sound.play();
                $('.timer').css('background-color', '#ff4c4c');
            }
        }
        var tick = setInterval(tickDown, 1000);
    }
}
