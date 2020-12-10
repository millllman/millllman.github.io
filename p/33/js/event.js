$(document).ready(function() {	
	
	$(".ProjectHide").hide();
	$(".ProjectMore a").click(function() {
		$(".ProjectHide").slideDown();
		return false;
	});
	
	$(".GalleryBox img").hover(function() {
		$(".GalleryBox img").addClass("opacity-image");
		$(this).removeClass("opacity-image");
	});
	$(".GalleryBox").mouseleave(function() {		
		$(".GalleryBox img").removeClass("opacity-image");
	});
	
});