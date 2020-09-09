  var gamePattern = [];
  var buttonColors = ["red", "blue", "green", "yellow"];
  var userClickedPattern = [];

  var randomNumber;
  var randomChosenColor = "";
  var userChosenColor;

  var currentUserAnswer = [];

  var level = 0;

  function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    playsound(randomChosenColor);

    $("h1").text("level " + level);
    level++;

  }


  function checkAnswer(currentLevel) {
    for (i = 0, j = userClickedPattern.length - gamePattern.length - 1; i < gamePattern.length, j < userClickedPattern.length; i++, j++) {
      if (gamePattern[j] !== userClickedPattern[j]) {
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press anywhere to Restart");
        startOver();


      }
    }


    if (gamePattern[gamePattern.length - 1] === userClickedPattern[userClickedPattern.length - 1]) {

      if (currentLevel === userClickedPattern.length) {

        setTimeout(function() {
          nextSequence();
        }, 1100);
        userClickedPattern = [];

      }

    }
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];

    setTimeout(function() {
      var keyPressCount = 0;
      $(document).on("click", function() {
        keyPressCount++;
        if (keyPressCount === 1) {
          nextSequence();
        }

      });

    }, 2000);


  }


  $(".btn").on("click", function() {
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(level);


  });
  //
  // $(document).keypress(function(e) {
  //   nextSequence();
  // });

  var keyPressCount = 0;
  $(document).on("click", function() {
    keyPressCount++;
    if (keyPressCount === 1) {
      nextSequence();
    }

  });
