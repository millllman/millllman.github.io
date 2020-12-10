jQuery(document).ready(function(){
   
	$(".faq-tooltip").hide();
    $(".faq-info").hover(function() {
		$(this).find(".faq-tooltip").stop().fadeToggle();
		return false;
	});

    $(".SecondMenu ul.level-1-ul").hide();
    $(".SecondMenu li.level-1").hover(function() {
		$(this).find(".level-1-ul").stop().slideToggle(300);
		return false;
	});

	// $(".level-1-ul").mouseleave(function() {
	// 	$(".level-1-ul").slideDown(300);
	// 	return false;
	// });
	
   
});