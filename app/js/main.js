$(function () {

    $('.header__btn-menu').on('click', function (){
        $('.menu').toggleClass('menu--open')
    });

    $('.top__slider').slick({
        dots: true,
        arrows:false,
        fade: true,
        autoplay: true
    })

    let mixer = mixitup('.gallery__inner',{
        load: {
            filter: '.living'
        }
    })
})