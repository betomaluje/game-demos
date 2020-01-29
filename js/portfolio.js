$(function ($) {

  var gameFrame;

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('show.bs.modal', function (event) {
    var view = $(event.relatedTarget); // view that triggered the modal    
    var projectUrl = view.data('url'); // Extract info from data-* attributes
    var id = view.data('id'); // Extract info from data-* attributes

    gameFrame = document.getElementById('unity-url' + id);
    gameFrame.src = projectUrl;
  });

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('hide.bs.modal', function (event) {  
    if (gameFrame == null) return;
  
    gameFrame.src = 'about:blank';   
    gameFrame = null;
  });

  $(".button1, .button2, .button3").click(function () {
    $("#controls1, #controls2, #controls3").toggle();
  });

});