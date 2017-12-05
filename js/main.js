$(document).ready(function(){
    $('#slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
    });

    $('#intro-header').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#intro-button').removeClass('hidden');
        $('#intro-button').addClass('animated fadeInUp');
    });

    $('#main').fullpage({
        navigation: true,
        verticalCentered: false
    });
});