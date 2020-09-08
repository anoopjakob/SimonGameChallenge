  var gamePattern = [];
  var buttonColors = ["red", "blue", "green", "yellow"];
  var userClickedPattern = [];

  var randomNumber;
  var randomChosenColor = "yellow";
  var userChosenColor;

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

  $(".btn").on("click", function() {
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);


  });
  //
  // $(document).keypress(function(e) {
  //   nextSequence();
  // });

  var keyPressCount = 0;
  $(document).on("keydown", function() {
    keyPressCount++;
    if (keyPressCount === 1) {
      nextSequence();
    }
  });
