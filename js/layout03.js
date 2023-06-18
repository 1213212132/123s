$(function () {

    $('.mok_slide').slick({
        vertical: true,

        arrows: false,
        dots: true,
    });



    $('.box .color_change ').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.change_content li').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.shop_menu .right .touch li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.mok_slide li').eq(idx).addClass('on').siblings().removeClass('on');
    });



})


