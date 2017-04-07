(function ($) {

    // Init Wow
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

//hover dropdown menu
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $('.navbar .dropdown > a').click(function () {
        location.href = this.href;
    });
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // Testimonials Slider
    $('.bxslider').bxSlider({
        adaptiveHeight: true,
        mode: 'fade'
    });

})(jQuery);