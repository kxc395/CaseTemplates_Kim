var TEMPLATE_VERSION = 0.1;

$(function(){	
	//if scrolling past 100px down fade in the button that allows the user to scroll back up
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	
	//this is the button that fades in past 100px, it allows the screen to scroll back up to the top of the page.
	$('#back-top').click(function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		//return false;
	});
	
	// Global links toggle
	$('#global-menu-toggle').click(function(e) {
		e.preventDefault();
		$('#global-menu').slideToggle('fast');
		$(this).toggleClass('active');
		//return false;
	});
	//mobile nav
	$('.mobile-nav .dropmenu li a').click(function(e) {
		e.preventDefault();
		var openMe = $(this).next();
		var mySiblings = $(this).parent().siblings().find('ul');
		if (openMe.is(':visible')) {
			openMe.slideUp('normal');  
		} else {
			mySiblings.slideUp('normal');  
			openMe.slideDown('normal');
		}
	});
	
	// Mobile Nav
	$('.mobile-nav-toggle, .mobile-nav-toggle_smartphone').click(function (e) {
		e.preventDefault();
		$('.mobile-nav .dropmenu').slideToggle('fast');
	});
});

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".flex-container"
	});
	
	$(".desktop-nav").sticky({ topSpacing: -5 });
});
 







