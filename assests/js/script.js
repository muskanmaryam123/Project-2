	// Navbar on Scroll Color Change
	window.addEventListener('scroll', function() {
		const navbar = document.querySelector('.navbar');
		if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
		} else {
		navbar.classList.remove('scrolled');
		}
	});

	// Banner Text Animation 
	const typed = new Typed('.typed-text', {
		strings: ['Nobel Prize', 'Nobel Prize'],
		typeSpeed: 100,
		backSpeed: 100,
		backDelay: 700,
		loop: true
	});


// owl slider and timer
jQuery(document).ready(function($) {

	"use strict";

	var siteCarousel = function () {

	  if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 1000,
		    items: 4,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
				0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
				items:4
	        }
		}
			});
			
			$('.js-custom-next-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('next.owl.carousel');
			})
			$('.js-custom-prev-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('prev.owl.carousel');
			})
		}
		
	};
	siteCarousel();


	
	var siteCountDown = function() {
		
		$('#date-countdown, #date-countdown2').countdown('2033/10/10', function(event) {
			var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();
	
	var siteDatePicker = function() {
		
		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

});


// SCROLL TO TOP
(function ($) {
	'use strict';
	
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 70) {
		  $('.scroll-to-top').addClass('reveal');
		} else {
		  $('.scroll-to-top').removeClass('reveal');
		}
	});

	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

})(jQuery);

// GALLERY
AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});