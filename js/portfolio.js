$(function ($) {

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('show.bs.modal', function (event) {
    var view = $(event.relatedTarget); // view that triggered the modal    
    var projectUrl = view.data('url'); // Extract info from data-* attributes
    var id = view.data('id'); // Extract info from data-* attributes

    var gameFrame = document.getElementById('unity-url' + id);
    gameFrame.src = projectUrl;
  });

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('hidden.bs.modal', function (event) {  
    var modal = $(this);
    var frame = modal.find('.iframe');

    console.log('hiding modal ', frame);

    frame.src = "about:blank";
    frame.contents().find("body").html('');
  });

  $(".button1, .button2, .button3").click(function () {
    $("#controls1, #controls2, #controls3").toggle();
  });

});