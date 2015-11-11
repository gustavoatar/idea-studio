//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".main-nav").addClass("scrollme");
        $(".back-to-top").addClass("showme");		

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".main-nav").removeClass("scrollme");
        $(".back-to-top").removeClass("showme");		
		
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutQuad');
        event.preventDefault();
    });
});
