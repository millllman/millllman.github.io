$(document).ready(function() {


	$("#phone-mask").mask("+7(999) 999-99-99");

	new WOW().init();

	$(".assets-box .animated").hover(function() {
		$(this).addClass('rubberBand');
	}, function() {
		$(this).removeClass('rubberBand');
	});

	$(".fadeScreen").hide();

    $(".popup-open").click(function() {
        $(".fadeScreen").fadeIn(500);
        $(".order-popup").addClass("popup-active").hide().fadeIn(500);
        return false;
    });
	
$(window).scroll(function() {
    $('.animated').each(function(){
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();

        var topOfWindow = $(window).scrollTop()+100;
        var heightOfWindow = $(window).height();

        var animName = $(this).data('anim');
        if (!$(this).data('atop')){
            var animTop = 0.9;
        }else{
            var animTop = $(this).data('atop');
        }

        if (imagePos < topOfWindow + heightOfWindow*animTop && imagePos+imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);
        } else if (imagePos+imageHght < topOfWindow || imagePos > topOfWindow+heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });
});

$(document).ready(function() {
    $('.animated').each(function(){
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();

        var topOfWindow = $(window).scrollTop()+100;
        var heightOfWindow = $(window).height();

        var animName = $(this).data('anim');

        if (imagePos < topOfWindow+heightOfWindow && imagePos+imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);
        } else if (imagePos+imageHght < topOfWindow || imagePos > topOfWindow+heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });
});

var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
    overlay.hide();
    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('data-modal');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    close.click( function(){
        modal
            .animate({opacity: 0.5, top: '30%'}, 300, function(){
                $('.order-popup').removeClass('popup-active');
                // $(this).css('display', 'block');
                overlay.fadeOut(400);
                $(this).animate({
                    opacity: 1,
                    top: '50%'
                });
            }
        );
});


// ---------------------------------------------- Mail sender


























});