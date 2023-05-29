import $ from "jquery";
import "slick-carousel";

$('.reviews__inner').slick({
    prevArrow: '<img class="arrows" src="assets/images/arrow-l.svg" alt="">',
    nextArrow: '<img class="arrows" src="assets/images/arrow-r.svg" alt="">',
});
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
});