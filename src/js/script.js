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
//for menu-adaptive
document.querySelectorAll(".menu__button-drop").forEach(button => {
    button.addEventListener('click', function(event) {
        document.querySelectorAll('.menu__item').forEach(item => {
            if (item.querySelector('.menu__button-drop') !== button) {
                item.classList.remove('menu__item_open');
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('menu__item_open');
    });
});

document.body.addEventListener('click', function(event) {
    console.log(event.target.parentElement.classList.contains('menu__item_open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('menu__button-drop') == true ||
        event.target.classList.contains('dropdown-menu') == true
    ) return

    document.querySelectorAll('.menu__item').forEach(item => {
        item.classList.remove('menu__item_open');
    });
});

//for main-header__menu
document.querySelectorAll(".main-header__menu_button-drop").forEach(button => {
    button.addEventListener('click', function(event) {
        document.querySelectorAll('.main-header__menu_item').forEach(item => {
            if (item.querySelector('.main-header__menu_button-drop') !== button) {
                item.classList.remove('main-header__menu_item-open');
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('main-header__menu_item-open');
    });
});

document.body.addEventListener('click', function(event) {
    console.log(event.target.parentElement.classList.contains('main-header__menu_item-open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('main-header__menu_button-drop') == true ||
        event.target.classList.contains('main-header__dropdown') == true
    ) return

    document.querySelectorAll('.main-header__menu_item').forEach(item => {
        item.classList.remove('main-header__menu_item-open');
    });
});

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    console.log(scrollDistance);

    document.querySelectorAll('.table-item__icon').forEach((el, i) => {
        if(el.offsetTop <= scrollDistance) {
            document.querySelectorAll('.categories li').forEach((el) => {
                if(el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            document.querySelectorAll('.categories li')[i].
            classList.add('active');
        }
    });
});

$('.tab-container').on('click', '.cloud__tab',
    function() {
        const thisButton = $(this);
        const parentContainer = thisButton.closest('.cloud__menu');

        parentContainer.find('.cloud__tab').removeClass('cloud__tab_active');
        thisButton.addClass('cloud__tab_active');

        parentContainer.find('.cloud__content').removeClass('cloud__content_active');

        const targetClass = thisButton.data('target');

        parentContainer.find(targetClass).addClass('cloud__content_active');
    });

    $(document).ready(function() {
        $('.arrow_right').on('click', function() {
          $('.tab-container').animate( { scrollLeft: '+=200' }, 500);
        });
      
        $('.arrow_left').on('click', function() {
          $('.tab-container').animate( { scrollLeft: '-=200' }, 500);
        });
      });