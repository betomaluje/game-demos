$(function($) {

  $('#portfolioModal1, #portfolioModal2, #portfolioModal3').on('show.bs.modal', function (event) {  
      var view = $(event.relatedTarget); // view that triggered the modal    
      var projectUrl = view.data('url'); // Extract info from data-* attributes
      console.log("url: " + projectUrl);

      var gameFrame = document.getElementById('unity-url');
      gameFrame.src = projectUrl;
  });

});
