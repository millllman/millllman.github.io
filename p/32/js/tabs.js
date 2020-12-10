$(document).ready(function() {

	//Default Action
	$(".DescriptionText").hide(); //Hide all content
	$("ul.DescriptionMenu li:first").addClass("active").show(); //Activate first tab
	$(".DescriptionText:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.DescriptionMenu li").click(function() {
		$("ul.DescriptionMenu li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".DescriptionText").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});
	
	$("#hreview_button").click(function() {
		$("ul.DescriptionMenu li").removeClass("active"); //Remove any "active" class
		$("ul.DescriptionMenu li:last-child").addClass("active"); //Add "active" class to selected tab
		$(".DescriptionText").hide(); //Hide all tab content
		$("#response").show(); //Hide all tab content		
	});
	
	$(".WClick").hide();
	$(".WriteCommentButton a").click(function() {
		$(".WClick").toggle(200);
	});
	
	$(".BadClientList li:odd").css('background', '#FAFAFA');
	
	$(".BadClientDescr").hide();
	$("#BadClientOpen").click(function() {		
		$(".BadClientDescr").toggle(200);		
		return false;
	});
	
	$(".FullDescription .read_more").hide();
	$(".FullDescription .more a").click(function() {
		$(".FullDescription .more").hide(200);
		$(".FullDescription .read_more").show(200);
		return false;
	});
	
});