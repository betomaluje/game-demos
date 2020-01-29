$(function($) {

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('show.bs.modal', function (event) {  
      var view = $(event.relatedTarget); // view that triggered the modal    
      var projectUrl = view.data('url'); // Extract info from data-* attributes
      console.log("url: " + projectUrl);

      var id = view.data('id'); // Extract info from data-* attributes
      console.log("id: " + id);

      var gameFrame = document.getElementById('unity-url' + id);
      gameFrame.src = projectUrl;
  });

	$(".button1, .button2, .button3").click(function(){
    	$("#controls1, #controls2, #controls3").toggle();
  	});

});
