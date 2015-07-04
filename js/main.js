//Слайдер с фотографиями
$(function() {
    $('#dg-container').gallery({
        autoplay	:	true
    });
});
//Слайдер клиентов
$(document).ready(function(){
    $('.slider-client').bxSlider({
        slideWidth: 200,
        minSlides: 1,
        maxSlides: 6,
        slideMargin: 0
    });
});
// Анимация
new WOW().init();
