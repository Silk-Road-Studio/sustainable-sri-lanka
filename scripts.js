

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