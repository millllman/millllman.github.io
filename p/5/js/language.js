function initNav() {
		var navRoot = document.getElementById("select_language");
		var lis = navRoot.getElementsByTagName("li");
		for (var i=0; i<lis.length; i++)
		{
			var drops = lis[i].getElementsByTagName("ul");
			if (drops.length)
			{
				lis[i].onmouseover = function()
				{
					this.className += " hover";
				}
				lis[i].onmouseout = function()
				{
					this.className = this.className.replace("hover", "");
				}
			}
		}
}

if (window.addEventListener){
	window.addEventListener("load", initNav, false);
}
else if (window.attachEvent){
	window.attachEvent("onload", initNav);
}



