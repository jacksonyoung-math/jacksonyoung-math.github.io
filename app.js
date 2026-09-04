$(document).ready(function(){

	/* redraws a string, character by character, given a div tag with 
	title="string" and a list of letter divs contained in the word. */
	$.fn.redrawHeader = function() {
		var namelist = this.attr("title").split("");
		jQuery.each(namelist, function(i) {
			$("#name"+i).hide();
		});
		jQuery.each(namelist, function(i) {
			$("#name"+i).delay(100*3*i).fadeIn();
		});
		return this;
	};
	
	$("#name").click(function(){
		$("#name").redrawHeader();
	});

});