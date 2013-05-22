function fadeHoverIn() {
	$(this).stop().animate({"opacity": "0"}, "normal");
}

function fadeHoverOut() {
	$(this).stop().animate({"opacity": "1"}, "slow");
}

$(document).ready(function() {
	$("img.fade-a").hover(fadeHoverIn, fadeHoverOut);
});