(function($){

    $.fn.stickToTop = function (offset) {

        // Return this to maintain chainability
        return this.each(function () {

            // Set some variables
            var $this       = $(this),
                elemTop     = $this.offset().top,
                elemHeight  = $this.outerHeight(true);
                elemWidth   = $this.width(),
                $next       = $this.next(),
                // Get the margin-top of the element after the target and convert it to an integer
                nextMTop    = parseInt($next.css('margin-top').replace('px', ''));;

            // When we're scrolling
            $(window).scroll( function(){

                // Check if the distance we've scrolled is greater than the distance the target is from the top
                if ( $(window).scrollTop()-offset > elemTop ) {

                    // Add the height of the target element to the existing margin of the next element so there is no 'slip'
                    $next.css({
                        'margin-top' : (elemHeight + nextMTop) + 'px'
                    });

                    // Position the target element fixed and to the top of the window.
                    $this.css({
                        position    : 'fixed',
                        top         : '0',
                        width       : elemWidth,
                        'z-index'   : '99'
                    }).addClass('sticky');

                } else {

                    // Undo the margin additions
                    $next.css({
                        'margin-top' : ''
                    });

                    // Undo the position and return everything to normal
                    $this.css({
                        position    : '',
                        top         : '',
                        width       : '',
                        'z-index'   : ''
                    }).removeClass('sticky');
                }

            });

        });

    }

})(jQuery);

// Call the plugin
$('header').stickToTop();