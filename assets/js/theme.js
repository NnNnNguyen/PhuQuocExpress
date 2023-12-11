; (function ($) {
    "use strict"
    $(document).ready(function () {
        $(".menu").click(function (event) {
            event.preventDefault();
            $(".menu-overlay").toggleClass("open");
            $(".menu").toggleClass("open");
        });
    });

    /* 1. Preloader */
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });
})(jQuery)