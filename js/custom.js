$(function () {

  // Question Category Slider
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Back to Top 
  var btn = $('.backtotop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 220) {
       $('.hero').addClass('sticky-hero-1');
    } else {
       $('.hero').removeClass('sticky-hero-1');
    }
  });

  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 700) {
  //      $('.hero').addClass('d-none');
  //   } else {
  //      $('.hero').removeClass('d-none');
  //   }
  // });


 

});

// celebration onClick
function rightAnswer() {
  document.getElementById("celebration-style").style.display = "flex";
}


// Loader 
$(window).on("load", function(){
  $('#loading-screen').fadeOut(500);    
});