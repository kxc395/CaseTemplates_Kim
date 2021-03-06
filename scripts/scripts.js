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
	
	//dropmenu init. 
	//is this css change necessary?
	$('.desktop-nav .dropmenu').css('display','block');
	$('.desktop-nav > ul').dropmenu({
		effect : 'slide',
		speed : 'fast',
		timeout : 0,
		nbsp : false
	});
	//fix this for menu specific. no need to look at ALL li's
	$('li').has('ul').find('> a').addClass('indicator');
		
});

$(window).load(function() {
	//Note in flexslider 2.2 they changed the next and prev handles to be a font < > rather than images.
	//Note I modified the CSS to be a 20px font rather than the default 40px
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".flex-container",
		nextText: "",
		prevText: ""		
	});
	
	$(".desktop-nav").sticky({ topSpacing: -5 });
});
 







