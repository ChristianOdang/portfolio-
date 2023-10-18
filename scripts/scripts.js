$(document).ready(function () {
  $(window).scroll(function () {
    //sticky navbar on scroll
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //scroll-up button show/hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehaviour", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehaviour", "smooth");
  });

  //toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar".menu).toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing text animation
  var typed = new Typed(".typing", {
    strings: ["Developer", "Freelancer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
