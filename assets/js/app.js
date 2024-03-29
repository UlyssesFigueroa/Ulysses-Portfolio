var projectTab = $(".btn-secondary")

$('#carouselDiv').on('slide.bs.carousel', function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == 'left') {
        $('.carousel-item').eq(i).appendTo('.carousel-inner');
      }
      else {
        $('carousel-item').eq(0).appendTo('.carousel-inner');
      }
    }
  }
});


projectTab.on("click", function() {
  if ($(this).hasClass("active") === false) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  }
  if ($("#btn1").hasClass("active")) {
    pleasantly();
  } else if ($("#btn2").hasClass("active")){
    movieQuiz();
  } else {
    passwordGen();
  }

})

function movieQuiz() {
  $(".card-img-top").attr("src", "./assets/Images/Quiz-home.png");
  $(".card-title").text("Movie Quiz");
  $(".card-text").text("Trivia game.");
  $(".projectInfo").text("An entertaining quiz containing movie related questions. The user has 75 seconds to answer all questions and the score is based off time left. Be careful all wrong answers will have a penalty of 5 seconds.");
  $(".btn-web").attr("href", "https://ulyssesfigueroa.github.io/Movie-Quiz/");
  $(".btn-git").attr("href", "https://github.com/UlyssesFigueroa/Movie-Quiz");
}

function pleasantly() {
  $(".card-img-top").attr("src", "./assets/Images/Pleasantly.png");
  $(".card-title").text("Pleasantly");
  $(".card-text").text("Food & cocktail recipe's");
  $(".projectInfo").text("A website build with the average cook in mind. The inspiration came from a frugal mentality to use whatever ingredients a user currently has in their home.");
  $(".btn-web").attr("href", "https://lljirie.github.io/Project1/");
  $(".btn-git").attr("href", "https://github.com/LLJirie/Project1");
}

function passwordGen() {
  $(".card-img-top").attr("src", "./assets/Images/password-generator.png");
  $(".card-title").text("Password Generator");
  $(".card-text").text("Create a secure password.");
  $(".projectInfo").text("A website to help generate a unique password containing your choice of lower case, upper case, special characters, and numbers.");
  $(".btn-web").attr("href", "https://ulyssesfigueroa.github.io/Password-Generator/");
  $(".btn-git").attr("href", "https://github.com/UlyssesFigueroa/Password-Generator");
}





$(".userResume").on("click", function() {
  window.open('UlyssesFigueroa_Resume.pdf', '_blank', 'fullscreen=yes'); 
  return false;
  
})

// Pleasantly();