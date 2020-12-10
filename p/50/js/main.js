$(document).ready(function() {

	// Pre Loader
	$(window).load(function() {
		$('.loader').show();
		setTimeout(function(){
			$('.loader').fadeOut();
		});
	});

	//E-mail Ajax Send
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	new WOW().init();
	
	// Logo Animation
	var logo = $('.logo-wrap');
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 50 ) {
			logo.addClass('fixed');
		} else {
			logo.removeClass('fixed');
		}
	});

	// Scroll Button
	$("p.examples a").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	
    $(".fadeScreen").click(function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").fadeOut(300);       
        return false;
    });
    $(".popup-open").click(function() {
        $(".fadeScreen").fadeIn(300);
        $(".popup-box").fadeIn(200);
        return false;
    });
    $(".popup-close").click(function() {
        $(".fadeScreen").fadeOut(300);
        $(".popup-box").fadeOut(300);       
        return false;
    });

	// $('#more-projects').click(function(e) {
	// 	$(this).closest('.section_screen-3').find('.other-projects').fadeIn(1200);
	// 	$(this).closest('.column').remove();
	// 	e.preventDefault();
	// });

	$('#dropmenu-open').click(function() {
		$(this).closest('.logo-wrap').find('.logo-dropmenu').slideToggle();
		$(this).toggleClass('dropmenu-active');
		return false;
	});



 	// Fade Animation Products
 	$('.fade-item').hide();
	window.onscroll = function() {
		$('.fade-item').each(function(){
		if ($(window).scrollTop()>=$('#fadeAnimation').offset().top-$(window).height() && $(window).scrollTop()<=$('#fadeAnimation').offset().top) $('.fade-item').fade_img();
		});
		}
		$.fn.fade_img = function (ops) {
		var $elem = this;
		var res = $.extend({ delay: 200, speed: 200 }, ops);
		for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) $elem.eq(i).delay(pause).fadeIn(res.speed);
		return $elem;
	};


	// Form Validation
	$(".section6_form-button input[type='submit']").click(function (){	  
	  var site = $("#verify-site").val().trim(),
	  	  name = $("#verify-name").val().trim(),
	  	  mail = $("#verify-mail").val().trim(),
	  	  validate = $('.section6_form-text'),
	  	  validateSite = $('.section6_form-text.vd1'),
	  	  validateName = $('.section6_form-text.vd2'),
	  	  validateMail = $('.section6_form-text.vd3');
	  if (site.length == 0) {
	  	validateSite.addClass('error');
	  } else {
	  	validateSite.removeClass('error');
	  };
	  if (name.length == 0) {
	  	validateName.addClass('error');
	  } else {
	  	validateName.removeClass('error');
	  };
	  if (mail.length == 0) {
	  	validateMail.addClass('error');
	  } else {
	  	validateMail.removeClass('error');
	  };	  
	  if (validate.hasClass('error')){	  	
		return false;
	  } else {
		$(".fadeScreen").fadeIn(300);
        $(".popup-box").fadeIn(200);
        validate.removeClass('error');
        $(".section6_form-text input[type=text]").val('');
	  };
	});	


    // window.onscroll = function() {
    // 	if ( fadeElement.hasClass('fixed') && window.pageYOffset < fadeElementPosition) {
    // 		fadeElement.removeClass('fixed');
    // 	} else if (window.pageYOffset > fadeElementPosition) {
    // 		fadeElement.addClass('fixed');
    // 	}
    // };

});