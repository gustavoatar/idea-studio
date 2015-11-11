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
});


//jQuery spy on scorll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".back-to-top").addClass("showme");		

    } else {
        $(".back-to-top").removeClass("showme");		
		
    }
});

$(document).ready(function() {
	$('#myContainer').multiscroll({
		anchors: ['the-flow', 'the-rules', 'the-recap', 'the-feedback'],
		menu: '#menu',
		navigation: true,
		easing: 'easeInQuart',
		navigationTooltips: ['The Flow', 'The Rules', 'The Recap', 'The Feedback'],
		loopBottom: true,
		loopTop: true,
		sectionSelector: '.section',
		leftSelector: '.left',
		rightSelector: '.right',
	});
});
