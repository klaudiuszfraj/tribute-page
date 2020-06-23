	&(document).ready(function)() {
		var NavY = $('.nav').offset().top;

		var stickyNav = function(){
		var Scrolly = $(window).scrollTop();

		if (Scrolly > NavY) {
			$('.nav').addclass('sticky');
		} else {
			$('.nav').removeclass('sticky');
		}
		};

		stickyNav();

		$(window).scroll(function() {
			stickyNav();
		});
		};