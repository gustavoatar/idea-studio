//jQuery to collapse the navbar on scroll
//capture scroll any percentage
$(window).scroll(function(){
    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
    var scrolltrigger = 0.95;
	var percentageScrolled= (wintop/(docheight-winheight))*(100);

    console.log('wintop='+wintop);
    console.log('docheight='+docheight);
    console.log('winheight='+winheight);
    console.log(wintop+'=='+(docheight-winheight));
    console.log(wintop==(docheight-winheight));
	console.log(percentageScrolled);
	
	if (percentageScrolled >= 15) {
		$(".dot.one").removeClass('tiny').addClass('larger');
		$('.line-slide').addClass('one');	
    } else if(percentageScrolled < 15){
		$(".dot.one").addClass('tiny').removeClass('larger');
		$('.line-slide').removeClass('one')
		
    }		
	if (percentageScrolled >= 40) {
		$(".dot.two").removeClass('tiny').addClass('larger');
		$('.line-slide').addClass('two');
		
    } else if (percentageScrolled < 40){
		$(".dot.two").addClass('tiny').removeClass('larger');
		$('.line-slide').removeClass('two');
		
    }
/*    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".main-nav").addClass("scrollme");
        $(".back-to-top").addClass("showme");
		$(".dot").removeClass('tiny').addClass('larger');
		$('.line-slide').removeClass('two').addClass('one');
		
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".main-nav").removeClass("scrollme");
        $(".back-to-top").removeClass("showme");		
		$(".dot").addClass('tiny').removeClass('larger');
		$('.line-slide').removeClass('one').removeClass('two');
		
    }

    if ($(".navbar").offset().top < 450) {
		$(".dot.two").removeClass('tiny').addClass('larger');
		$('.line-slide').removeClass('one').addClass('two');
		
    } else {
		$(".dot.two").addClass('tiny').removeClass('larger');
		$('.line-slide').removeClass('one').addClass('two');
		
    }	
	*/
});

/*function scrollLine(percentageScrolled){
	$('.line::before').css({
		'height' : percentageScrolled+'%'
	});
}*/

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
