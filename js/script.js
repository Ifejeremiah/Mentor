$(function(){
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
});