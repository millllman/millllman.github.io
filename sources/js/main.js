$(document).ready(function() {

	// Button to Top
	$('.btn-top').hide();
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 500 ) {
			$('.btn-top').stop().fadeIn(200);
		} else {
			$('.btn-top').fadeOut(200);
		}
	});	
	$('.btn-top').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		$(this).fadeOut();
	});

	// Technology
	$('.portfolio-box > li.js').append('<em class="js"></em>');
	$('.portfolio-box > li.bt').append('<em class="bootstrap"></em>');
	$('.portfolio-box > li.fd').append('<em class="foundation"></em>');
	$('.portfolio-box > li.rs').append('<em class="responsive"></em>');
	$('.portfolio-box > li.cs').append('<em class="css"></em>');
	$('.portfolio-box > li.sc').append('<em class="scss"></em>');
	$('.portfolio-box > li.ht').append('<em class="html"></em>');
	$('.portfolio-box > li span a').append('<i class="fa fa-search-plus"></i>');
	$('.portfolio-box > li span a').append('<span class="view">Перейти на сайт</span>');
	
	$('.portfolio-box > li').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	$('.theme-easy').on('click', function(e) {
		$('.portfolio-box').addClass('easy');
		$('.main-menu li a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.theme-apple').on('click', function(e) {
		$('.portfolio-box').removeClass('easy');
		$('.main-menu li a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	// Popup
	$('#feedback-open').click(function() {
		$('.FadeScreen').fadeIn(400);
		$('.feedback-popup').fadeIn(400).removeClass('close');
		return false;
	});

	$('#feedback-close, .FadeScreen').on('click', function() {
		$('.feedback-popup').addClass('close').delay(500).hide(100);
		$('.FadeScreen').fadeOut('slow');
		return false;
	});


});


