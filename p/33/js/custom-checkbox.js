
jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
function() {

     changeCheck(jQuery(this));
     
});


jQuery(".niceCheck").each(
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });

function changeCheck(el)
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","100% 0");
		input.attr("checked", true)
	} else {
		el.css("background-position","0 100%");
		el.css("color","#000");
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","100% 0");	
		}
     return true;
}


		