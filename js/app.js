
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- reloads the page when New Game button is clicked ---*/
    // function newGame() {
    //   $(document).on("click", ".new", function() {
    //     location.reload(true);

    //     reset everything back to the beginning state
    //     dont use location
    //   });
    // };

    // newGame();

    // random number 1 - 100
    function getRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }

    // store the random number
    var randomNumber = getRandomNumber();
    var count = 0;
    $('#guessButton').click(function() {
      var userGuess = $('#userGuess').val()
    
    // feedback to user
    var result = checkNumber(randomNumber, userGuess)
    $('#feedback').html(result)

    // put the guessed numbers in a list
    $('ul#guessList').append('<li>' + userGuess + '</li>')

    });

    // check to see how close a user is to the random number
    function checkNumber (randomNumber, userGuess) {
      var diff = Math.abs(randomNumber - userGuess);
      if (diff > 50){
        return "You are freezing cold";
      } else if (diff > 30) {
        return "Cold";
      } else if (diff > 20) {
        return "Warm";
      } else if (diff > 10) {
        return "Hot";
      } else if (diff >= 1) {
        return "You are burning up!!!";
      } else if (diff === 0) {
        return "Congrats!! You've guessed the right number!";
      } else {
        return "Keep guessing...";
      }
    }

});


