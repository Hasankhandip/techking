"use strict";

// preloader start
$(window).on("load", function () {
    $(".preloader")
      .delay(500)
      .animate(
        {
          opacity: "0",
        },
        500,
        function () {
          $(".preloader").css("display", "none");
        }
      );
  });
// preloader end



// scroll-top btn start
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });

  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
// scroll-top btn end