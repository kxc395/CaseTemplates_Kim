	
// Back to top
	jQuery(document).ready(function () {
		$(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});

		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 300);
			return false;
		});
	}); 


// Slider
$(window).load(function() {
				$('.flexslider').flexslider({
				  animation: "slide",
				  controlsContainer: ".flex-container"
			  });
			});
 
// Mobile Nav
jQuery(document).ready(function() {
	jQuery('.mobile-nav .dropmenu li a').click(
		function() {
			var openMe = $(this).next();
			var mySiblings = $(this).parent().siblings().find('ul');
			if (openMe.is(':visible')) {
				openMe.slideUp('normal');  
			} else {
				mySiblings.slideUp('normal');  
				openMe.slideDown('normal');
			}
	      }
	);
	
	jQuery('.mobile-nav-toggle, .mobile-nav-toggle_smartphone').click (function () {
	jQuery('.mobile-nav .dropmenu ').slideToggle('fast');
	return false;
		
	});

});

// Global links toggle
jQuery(document).ready(function() {
	jQuery('#global-menu-toggle').click(function() {
	jQuery('#global-menu').slideToggle('fast');
	jQuery(this).toggleClass('active');
	return false;
		
	});
		
});


// Sticky nav
    jQuery(window).load(function(){
      jQuery(".desktop-nav").sticky({ topSpacing: -5 });
    });




