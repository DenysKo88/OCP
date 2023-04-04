$(document).ready(function(){
    $('.interface__carousel').slick({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/3_section/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/3_section/right.svg"></button>',
      responsive:[
        {
            breakpoint: 621,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                dots: false,
                arrows: false
            }
        }
        ]
    });
  });


const hamburger = document.querySelector('.main-header__hamburger'),
    menu = document.querySelector('.menu-adaptive'),
    closeElem = document.querySelector('.menu-adaptive__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    }); 

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});