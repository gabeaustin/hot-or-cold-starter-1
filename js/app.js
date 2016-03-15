
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
      $(document).on("click", ".new", function() {
        location.reload(true);
      });
    };

    $(document).load(newGame());


});


