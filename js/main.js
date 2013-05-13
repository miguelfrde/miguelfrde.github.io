
function fadeHoverIn() {
	$(this).stop().animate({"opacity": "0"}, "normal");
}

function fadeHoverOut() {
	$(this).stop().animate({"opacity": "1"}, "slow");
}

function showAlert() {
	$('#alert-patience').fadeIn("normal").delay(1500).fadeOut("normal");
}

$(document).ready(function() {
	$("#alert-patience").hide();
	$("img.fade-a").hover(fadeHoverIn, fadeHoverOut);
	$("a.patience").click(showAlert);	
	$("ul.nav li a").click(showAlert);
});