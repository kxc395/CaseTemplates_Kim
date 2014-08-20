/*      
 *      jQuery dropmenu 1.1.4.1
 *      www.frebsite.nl
 *      Copyright (c) 2010 Fred Heusschen
 *      Licensed under the MIT license.
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *		https://code.google.com/p/btstatproject/source/browse/trunk/kcs-btc/build.xml/WebContent/js/jquery.dropmenu.js?r=17
 *
 * 		1.1.4.1 8/11/2014
 *		Ben Margevicius
 *		http://fpb.case.edu 
 * 		Modified under the MIT license
 *		Modified to work with jquery 2+
 *		  Removed old brower detection added straight javascript 
 *		  http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie
 */
 
 /*Added in 1.1.4.1 
 *
 * Default IE String in 10 and below: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)
 * Default IE String in 11 and above: Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0)
 */
 function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    // other browser
    return -1; //I changed this because the prmiary return values is an int. Not a boolean, false does return as 0 but this is clearer.
}
 
 (function($) {
	$.fn.dropmenu = function(options) {
		/*var isIE 	= $.browser.msie,
			isIE6	= isIE && $.browser.version <= 7,
			isIE7	= isIE && $.browser.version == 7,
			isIE8	= isIE && $.browser.version == 8;
		*/
		var IEVersion = detectIE();		

		return this.each(function() {

			var opts  = $.extend({}, $.fn.dropmenu.defaults, options),
				$menu = $(this),
				$topl = $menu.find('> li'),
				menuX = $menu.offset().left;

			if (opts.maxWidth == 0) {
				opts.maxWidth = $('body').width() - menuX;
			}

			//	UL itself and all LI's
			$menu
				.css({
					display: 'block',
					listStyle: 'none'
				})
				.find("li")
				.css({
					display: 'block',
					listStyle: 'none',
					position: 'relative',
					margin: 0,
					padding: 0
				});
			
			
			var css = {
				display: 'block',
				outline: 'none'
			};
			if (opts.nbsp) css['whiteSpace'] = 'nowrap';
			
			//	all A's and SPANs
			$menu
				.find('li > a, li > span')
				.css(css);


			//	top-level LI's and top level A's and SPANs
			$topl
				.find('> a, > span')
				.addClass('toplevel')

			//	all sub-ULs
			$menu
				.find('ul')
			
			//	first sub-UL and second, third, etc. sub-ULs
			$topl
				.find('> ul')
				.css({
					left: 0,
					top: $topl.outerHeight()
				})
				.find('li > a, li > span')
				.addClass('sublevel')
				.parent()
				.find('ul')
				.css({
					top: 0
				}).data('subsub', true);
			
			//$topl
				


			/*	IE fixes
			if (IE == 6) {
				$menu.find('ul').css({
					lineHeight: 0
				});
			}
			if (isIE6 || isIE7 || isIE8) {
				$menu.find('ul a, ul span').css({
					zoom: 1
				});
			}
			*/
			//IE Fixes for 1.1.4.1
			if (IEVersion == 6) {
				$menu.find('ul').css({
					lineHeight: 0
				});				
			}
			if (IEVersion >= 6 && IEVersion <= 8) {
				$menu.find('ul a, ul span').css({
					zoom: 1
				});
			}
			

			$menu.find('a').click(function() {
				$('ul', $menu).hide();
				$('a, span', $menu).removeClass('hover');
			});

			$menu.find('li').hover(
				
				//	showing submenu
				function() {
					var listit = this,
						subnav = $.fn.dropmenu.getSubnav(listit),
						subcss = { zIndex: $.fn.dropmenu.zIndex++ };

					$(listit).find('> a, > span').addClass('hover');

					if (!subnav) return;
					if ($(subnav).is(":animated")) return;

					if ($.data(subnav, 'subsub')) {
						var distance  = $(listit).outerWidth(),
							itemWidth = $(listit).offset().left + distance - menuX,
							position  = (opts.maxWidth < itemWidth) ? "right" : "left";
						
						subcss[position] = distance;						
					}
					$(subnav).css(subcss);
					$.data(subnav, 'stayOpen', true);
					
					switch (opts.effect) {
						case 'slide':
							$(subnav).slideDown(opts.speed);
							break;
						
						case 'fade':
							$(subnav).fadeIn(opts.speed);
							break;
							
						default:
							$(subnav).show();
							break;
					}

				//	hiding submenu
				}, function() {
					var listit = this,
						subnav = $.fn.dropmenu.getSubnav(listit);

					if (!subnav) {
						$(listit).find('> a, > span').removeClass('hover');
						return;
					}

					$.data(subnav, 'stayOpen', false);
					setTimeout(function() {
						if ($.data(subnav, 'stayOpen')) return;
						$(listit).find('> a, > span').removeClass('hover');

						$('ul', subnav).hide();
						switch (opts.effect) {
							case 'slide':
								$(subnav).slideUp(opts.speed);
								break;
							
							case 'fade':
								$(subnav).fadeOut(opts.speed);
								break;
								
							default:
								$(subnav).hide();
								break;
						}
						
					}, opts.timeout);
				}
			);
		});
	};
	
	$.fn.dropmenu.getSubnav = function(ele) {
		if (ele.nodeName.toLowerCase() == 'li') {
			var subnav = $('> ul', ele);
			return subnav.length ? subnav[0] : null;
		} else {
			return ele;
		}
	}
	
	$.fn.dropmenu.zIndex 	= 500;
	$.fn.dropmenu.defaults 	= {
		effect			: 'none',		//	'slide', 'fade', or 'none'
		speed			: 'normal',		//	'normal', 'fast', 'slow', 100, 1000, etc
		timeout			: 250,
		nbsp			: false,
		maxWidth		: 0
	};
})(jQuery);