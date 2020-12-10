jQuery(document).ready(function(){
   
    $(".FadeScreen").hide();
	$(".RulesPopup").hide();
	$(".FeedbackPopup").hide();

	$(".FadeScreen").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".RulesPopup").fadeOut(300);
		$(".FeedbackPopup").fadeOut(300);		
		return false;
	});
	$(".popup-close").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".RulesPopup").fadeOut(300);
		$(".FeedbackPopup").fadeOut(300);		
		return false;
	});
	$("#popup-open").click(function() {
		$(".FadeScreen").fadeIn(300);
		$(".RulesPopup").fadeIn(200);
		return false;
	});
	$(".feedback-open").click(function() {
		$(".FadeScreen").fadeIn(300);
		$(".FeedbackPopup").fadeIn(200);
		return false;
	});

	$(".CategoryMenu .wrap").hide();
	$(".CategoryMenu .name a").click(function() {
		$(".CategoryMenu .wrap").slideToggle(300);
		$(".CategoryMenu .name a").toggleClass("active");
		return false;
	});

	$(document).ready(function() {
        $('.amount-down').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.amount-up').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

	$(document).ready(function() {
        var carousel = $("#carousel").featureCarousel({        	
        });        
      });

    $(document).ready(function (){
		$("#pikame").PikaChoose({carousel:true, carouselVertical:true});
	}); 


    $("#box-sort2").hide();
    $("#btn-sort1").click(function() {		
		$("#box-sort1").fadeIn();
		$(this).addClass("active");
		$("#box-sort2").hide();
		$("#btn-sort2").removeClass("active");
		return false;
	});
    $("#btn-sort2").click(function() {
		$("#box-sort1").hide();
		$("#btn-sort1").removeClass("active");
		$("#box-sort2").fadeIn();
		$(this).addClass("active");
		return false;
	});

	$(".pika-stage a").addClass("preview");

    //$(".CatalogBox li .zoom").hide();
    //$(".CatalogBox li").hover(function() {
    //	$(this).find(".zoom").fadeIn(150);
    //});
    //$(".CatalogBox li").mouseleave(function() {
    //	$(".CatalogBox li .zoom").fadeOut(150);
    //});

//.CatalogBox li:hover .zoom
	//============== Hover Jquery ================
	$('.on_hoverjs_1').mouseenter(function(){
		$('.on_hoverjs_bg_img').hide();
		$('.on_hoverjs_1_img').show();
		$('.on_hoverjs_1').show().css({"background":"transparent", "color":"transparent", "border":"none"});
		$('.on_hoverjs_2').hide();
		$('.on_hoverjs_3').hide();
		$('.on_hoverjs_4').hide();
	});
	$('.on_hoverjs_1').mouseleave(function(){
		$('.on_hoverjs_bg_img').show();
		$('.on_hoverjs_1_img').hide();
		$('.on_hoverjs_1').show().css({"background":"#605f64", "color":"#fff", "border":"1px solid #919193"});
		$('.on_hoverjs_2').show();
		$('.on_hoverjs_3').show();
		$('.on_hoverjs_4').show();
	});
//-------------------------------------------------------
	$('.on_hoverjs_2').mouseenter(function(){
		$('.on_hoverjs_bg_img').hide();
		$('.on_hoverjs_2_img').show();
		$('.on_hoverjs_2').show().css({"background":"transparent", "color":"transparent", "border":"none"});
		$('.on_hoverjs_1').hide();
		$('.on_hoverjs_3').hide();
		$('.on_hoverjs_4').hide();
	});
	$('.on_hoverjs_2').mouseleave(function(){
		$('.on_hoverjs_bg_img').show();
		$('.on_hoverjs_2_img').hide();
		$('.on_hoverjs_2').show().css({"background":"#605f64", "color":"#fff", "border":"1px solid #919193"});
		$('.on_hoverjs_1').show();
		$('.on_hoverjs_3').show();
		$('.on_hoverjs_4').show();
	});
//-------------------------------------------------------
	$('.on_hoverjs_3').mouseenter(function(){
		$('.on_hoverjs_bg_img').hide();
		$('.on_hoverjs_3_img').show();
		$('.on_hoverjs_3').show().css({"background":"transparent", "color":"transparent", "border":"none"});
		$('.on_hoverjs_2').hide();
		$('.on_hoverjs_1').hide();
		$('.on_hoverjs_4').hide();
		
	});
	$('.on_hoverjs_3').mouseleave(function(){
		$('.on_hoverjs_bg_img').show();
		$('.on_hoverjs_3_img').hide();
		$('.on_hoverjs_3').show().css({"background":"#605f64", "color":"#fff", "border":"1px solid #919193"});
		$('.on_hoverjs_2').show();
		$('.on_hoverjs_1').show();
		$('.on_hoverjs_4').show();
	});
//-------------------------------------------------------
	$('.on_hoverjs_4').mouseenter(function(){
		$('.on_hoverjs_bg_img').hide();
		$('.on_hoverjs_4_img').show();
		$('.on_hoverjs_4').show().css({"background":"transparent", "color":"transparent", "border":"none"});
		$('.on_hoverjs_2').hide();
		$('.on_hoverjs_3').hide();
		$('.on_hoverjs_1').hide();
		
	});
	$('.on_hoverjs_4').mouseleave(function(){
		$('.on_hoverjs_bg_img').show();
		$('.on_hoverjs_4_img').hide();
		$('.on_hoverjs_4').show().css({"background":"#605f64", "color":"#fff", "border":"1px solid #919193"});
		$('.on_hoverjs_2').show();
		$('.on_hoverjs_3').show();
		$('.on_hoverjs_1').show();
	});


//============================================ 	
   

/**
 * Example: inputPlaceholder( document.getElementById('my_input_element') )
 * @param {Element} input
 * @param {String} [color='#AAA']
 * @return {Element} input
 */
function inputPlaceholder (input, color) {

    if (!input) return null;

    // Do nothing if placeholder supported by the browser (Webkit, Firefox 3.7)
    if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) return input;

    color = color || '#AAA';
    var default_color = input.style.color;
    var placeholder = input.getAttribute('placeholder');

    if (input.value === '' || input.value == placeholder) {
        input.value = placeholder;
        input.style.color = color;
        input.setAttribute('data-placeholder-visible', 'true');
    }

    var add_event = /*@cc_on'attachEvent'||@*/'addEventListener';

    input[add_event](/*@cc_on'on'+@*/'focus', function(){
     input.style.color = default_color;
     if (input.getAttribute('data-placeholder-visible')) {
         input.setAttribute('data-placeholder-visible', '');
         input.value = '';
     }
    }, false);

    input[add_event](/*@cc_on'on'+@*/'blur', function(){
        if (input.value === '') {
            input.setAttribute('data-placeholder-visible', 'true');
            input.value = placeholder;
            input.style.color = color;
        } else {
            input.style.color = default_color;
            input.setAttribute('data-placeholder-visible', '');
        }
    }, false);

    input.form && input.form[add_event](/*@cc_on'on'+@*/'submit', function(){
        if (input.getAttribute('data-placeholder-visible')) {
            input.value = '';
        }
    }, false);

    return input;
}



   
});