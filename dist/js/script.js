$(document).ready(function(){
    $('.interface__carousel').slick({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/3_section/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/3_section/right.svg"></button>'
    });
  });