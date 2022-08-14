var level = 0;
var started = false;
var highestScore = 0;
var currentScore = 0;

$(document).keydown(function () {

    if (!started) {

        started = true;
        $("h1").text("Level " + level);
        nextSequence();
    }
});

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");   // name of id is same as that of color of the button
    userClickedPattern.push[userChosenColor];

    animatePress(userChosenColor);
    playSound(userChosenColor);

    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {

            // console.log("Success");
            if (level > currentScore) {
                currentScore = level;
                $("#current-score").text("Current Score : " + currentScore);
            }

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {

        // console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("h1").text("Game - Over");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
            $("h1").text("Press A Key to Start");
        }, 1000);

        startOver();
    }
}

function startOver() {

    if (level - 1 > highestScore) {
        highestScore = level - 1;
        $("#highest-score").text("Highest Score : " + highestScore);
    }

    currentScore = 0;
    $("#current-score").text("Current Score : " + currentScore);

    started = false;
    level = 0;
    userClixkedPattern = [];
    gamePattern = [];
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function nextSequence() {

    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}





// Angela Help

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       //2. Call startOver() if the user gets the sequence wrong.
//       startOver();
//     }

// }

// function nextSequence() {

//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //1. Create a new function called startOver().
// function startOver() {

//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
