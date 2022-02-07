$(function(){
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    768 : {
      items : 2.2,
      // option2 : value,
  }
  });
});