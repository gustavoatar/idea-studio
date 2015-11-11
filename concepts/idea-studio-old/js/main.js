//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutQuad');
        event.preventDefault();
    });
    $('a.initiate').bind('click', function(event) {
		$('.off-canvas').addClass('fadeInUp')
		$('.white-bk').addClass('fadeIn')
	});
    $('.close-form-btn').bind('click', function(event) {
		$('.off-canvas').removeClass('fadeInUp').addClass('fadeInOut').delay(800).removeClass('fadeInOut');
		$('.white-bk').removeClass('fadeIn').addClass('fadeOut').delay(800).removeClass('fadeOut');
	
	});
    $('a.idea-vault').bind('click', function(event) {
		$('.the-idea-vault').removeClass('supressed')		
	});		
});


//jQuery spy on scorll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".back-to-top").addClass("showme");		

    } else {
        $(".back-to-top").removeClass("showme");		
		
    }
});
