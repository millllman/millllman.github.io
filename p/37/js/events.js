jQuery(document).ready(function(){
	jQuery('.PopularBox .try span').click(function() {
		jQuery.scrollTo('#scrollTo', 1000);
	});	
   
    $(".FadeScreen").hide();
	$(".FeedbackPopup").hide();
	$(".FadeScreen").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".FeedbackPopup").fadeOut(300);		
		return false;
	});
	$("#feedback-open").click(function() {
		$(".FadeScreen").fadeIn(300);
		$(".FeedbackPopup").fadeIn(200);
		return false;
	});
	$(".feedback-close").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".FeedbackPopup").fadeOut(300);		
		return false;
	});	

});
