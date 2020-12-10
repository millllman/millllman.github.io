$(document).ready(function() {

	$('.catalog-menu > li > ul').hide();
	

	$('.catalog-menu > li > a').click(function() {
		$('.catalog-menu > li > ul').slideUp();
		$('.catalog-menu > li > a').removeClass('active');
		$(this).addClass('active').closest('li').find('ul').slideDown();
		return false;	
	});



});