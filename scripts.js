

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 150) {
        $("nav").addClass("nav-black");
        $(".navbar-brand img").attr("src", "img/logo-black.png");

      } else {
        $("nav").removeClass("nav-black");
        $(".navbar-brand img").attr("src", "img/logo-white.png");
      }
    });
  });

  $(document).ready(function(){
    if ($(window).width() < 990){
      $("nav").removeClass("fixed-top");
    }
    else {
      $("nav").addClass("black");
    }
});