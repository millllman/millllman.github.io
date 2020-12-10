jQuery(document).ready(function(){	
   
    $(".FadeScreen").hide();
	$(".ProfilePopup").hide();
	$(".FadeScreen").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".ProfilePopup").fadeOut(300);		
		return false;
	});
	$("#profile-open").click(function() {
		$(".FadeScreen").fadeIn(300);
		$(".ProfilePopup").fadeIn(200);
		return false;
	});
	$("#profile-close").click(function() {
		$(".FadeScreen").fadeOut(300);
		$(".ProfilePopup").fadeOut(300);		
		return false;
	});	

});
