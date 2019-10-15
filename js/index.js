var TOTAL_TIME = 90;
var sec = TOTAL_TIME;
var puzzleplayed = 0;
var score = 0;
var failed = 0;

showScore();

function newGame() {
    // new game. set played time to TOTAL_TIME  - anwar
    sec = TOTAL_TIME;
    
    showScore();
}

function setScore() {
    if(!localStorage.getItem('puzzlescore')) {
        localStorage.setItem('puzzlescore', 1);
    } else {
        score = localStorage.getItem('puzzlescore');
        localStorage.setItem('puzzlescore', +score + 1);
    }
    if(localStorage.getItem('puzzlescore')) {
        score = localStorage.getItem('puzzlescore');
        document.getElementById("succeed").innerHTML = "[Succeed: " + score + "] ";
    }
    //alert("You won! Congratulations! Your total score is: " + score*10);
    incrementTotalPlayed();
    sec = 1000;
    //alert("You won! Congratulations! Your total score is: " + score*10);
}

function incrementTotalPlayed() {
    if(!localStorage.getItem('puzzleplayed')) {
        localStorage.setItem('puzzleplayed', 1);
    } else {
        puzzleplayed = localStorage.getItem('puzzleplayed');
        localStorage.setItem('puzzleplayed', +puzzleplayed + 1);
    }
    showScore();
}

function showScore() {
    if(localStorage.getItem('puzzlescore')) {
        score = localStorage.getItem('puzzlescore');
        document.getElementById("succeed").innerHTML = "[Succeed: " + score + "] ";
    }
    if(localStorage.getItem('puzzleplayed')) {
        if(localStorage.getItem('puzzlescore')) {
            score = localStorage.getItem('puzzlescore');
        } else {
            score = 0;
        }
        puzzleplayed = localStorage.getItem('puzzleplayed');
        failed = +puzzleplayed - (+score);
        document.getElementById("failed").innerHTML = "[Failed: " + failed + "] ";
    }
}

function startTime() {
    sec = sec-1;
    document.getElementById("time").innerHTML = "[Time: " + sec + "/" + TOTAL_TIME + "]";
    if (sec > 0) {
        setTimeout(function(){startTime()}, 1000);
    } else {
        randomImg(50);
        q(".img-con").classList.remove("clear");
        tabOpen(".field-con");
        // new game. set played time to TOTAL_TIME  - anwar
        newGame();
        incrementTotalPlayed();
        setTimeout(function(){startTime()}, 1000);
    }
}