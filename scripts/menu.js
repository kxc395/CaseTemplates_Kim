$(document).ready(function() {

	$('.desktop-nav .dropmenu').css('display','block');
	$('.desktop-nav > ul').dropmenu({
		effect : 'slide',
		speed : 'fast',
		timeout : 0,
		nbsp : false
	});
	
	$('li').has('ul').find('> a').addClass('indicator');
	
});
	