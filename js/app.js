
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
    function newGame() {
      $(document).on('click', '.new', function() {
        // location.reload(true);
        alert('button clicked');
      });

      // reset everything back to the beginning state
      // dont use location
    };

    // Testing if the click event is working
    function newGame() {
      $('.new').click(function() {
        alert( "Handler for .click() called." );
      });
    };

    $('form').submit(function(event) {
      event.preventDefault();
      // input.val("");
      storeRandomNumber();
      $('a.new').click(newGame);
    });

    // input.val("");
    // move to form click move to submit
    // put in submit dont need in guess button click
    // reset the state


    // random number 1 - 100
    function getRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    };

    // store the random number
    function storeRandomNumber() {
      var randomNumber = getRandomNumber();
      var count = 0;
      $('#guessButton').click(function() {
        var userGuess = $('#userGuess').val(); // getter - because just getting value
      });
    };

    // this will allow user to either hit enter or click the Guess btn
    $('#userGuess').keyup(function(event){
      if(event.keyCode == 13){
        $('#guessButton').click();
      }
    });
    
    // feedback to user
    function feedbackToUser() {
      var result = checkNumber(randomNumber, userGuess)
      $('#feedback').html(result);
      // put the guessed numbers in a list
      $('ul#guessList').append('<li>' + userGuess + '</li>')
    };

    // check to see how close a user is to the random number
    function checkNumber (randomNumber, userGuess) {
      var diff = Math.abs(randomNumber - userGuess);
      if (diff >= 50){
        return "You are freezing cold";
      } else if (diff >= 30) {
        return "Cold";
      } else if (diff >= 20) {
        return "Warm";
      } else if (diff >= 10) {
        return "Hot";
      } else if (diff >= 1) {
        return "You are burning up!!!";
      } else if (diff === 0) {
        return "Congrats!! You've guessed the right number!";
      } else {
        return "Keep guessing...";
      }
    };
    
});


