$(document).ready(function() {
	// INIT
	menuMobile();
	backToTop();
	new WOW().init();

	// FUNCTION
});

function backToTop() {
	if ($('#back_to_top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back_to_top').fadeIn();
	            } else {
	                $('#back_to_top').fadeOut();
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back_to_top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
}

function menuMobile() {
	$('nav#menu').mmenu({
		extensions		   : [ 'effect-slide-menu', 'shadow-page'],
		keyboardNavigation : false,
		screenReader 	   : false,
		counters		   : false,
		navbar 		: {
			title		: 'MENU'
		},
		navbars		: [
			{
				position	: 'bottom',
				content		: [
					'<a href="#" target="_blank">Domain.com</a>'
				]
			}
		]			
	});
}

function select2() {
    $('.select2').select2();
}