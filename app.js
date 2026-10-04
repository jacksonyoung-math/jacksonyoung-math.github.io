$(document).ready(function(){

	/* animate the underlines on page load */
	$(".newspaper-line").animate({width: "300px"}, 500);
	$(".mobile-line").animate({width: "90%"}, 500);

	/* redraws a string, character by character, given a div tag with 
	title="string" and a list of letter divs contained in the word. */
	$.fn.redrawHeader = function() {
		var namelist = this.attr("title").split("");
		jQuery.each(namelist, function(i) {
			$("#name"+i).fadeOut(0);
		});
		jQuery.each(namelist, function(i) {
			$("#name"+i).delay(100*0.8*i).fadeIn();
		});
		return this;
	};
	
	/* redraw string applied to my name */
	$("#name").click(function(){
		$("#name").redrawHeader();
	});

	/* mobile dropdown menu */
	var open = false;

	$("#mobile-name").click(function(){
		if (open === true) {
			$(".mobile-nav").animate({height: "0%"}, 250);
			open = false;
		} else if (open === false) {
			$(".mobile-nav").animate({height: "80%"}, 250);
			open = true;
		} else {
			alert("Error");
		};
		return false;
	});

	/* Random image button */
	const imgsrcs = ["leo2.jpg", "leo3.jpg", "leo4.jpg", "leo5.jpg", "leo6.jpg", "leo7.jpg", "leo8.jpg", "leo9.jpg"];

	$(".random-image").click(function(){
		var index = Math.floor(Math.random()*imgsrcs.length);
		document.getElementById("random-image").src = imgsrcs[index];
		document.getElementById("random-image").title = imgsrcs[index];
	});


});