// script.js
$(document).ready(function () {
  const slideWidth = $(".hi-slide li").width();
  const numSlides = $(".hi-slide li").length;
  let currentSlide = 0;

  function updateSlider() {
    const offset = -currentSlide * slideWidth;
    $(".hi-slide ul").css("transform", `translateX(${offset}px)`);
  }

  $(".hi-prev").click(function () {
    currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    updateSlider();
  });

  $(".hi-next").click(function () {
    currentSlide = (currentSlide + 1) % numSlides;
    updateSlider();
  });

  updateSlider();
});
