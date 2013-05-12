
function socialImageIn() {
	var name = $(this).attr('id');
	name = name.substring(name.indexOf('-') + 1, name.length);
	$(this).attr('src', 'img/' + name + '-color.png');
}

function socialImageOut() {
	var name = $(this).attr('id');
	name = name.substring(name.indexOf('-') + 1, name.length);
	$(this).attr('src', 'img/' + name + '-black.png');
}

$(document).ready(function() {
	$('#social-mail').hover(socialImageIn, socialImageOut);
	$('#social-twitter').hover(socialImageIn, socialImageOut);
	$('#social-github').hover(socialImageIn, socialImageOut);
	$('#social-googleplus').hover(socialImageIn, socialImageOut);
	$('#social-linkedin').hover(socialImageIn, socialImageOut);
	$('#social-rss').hover(socialImageIn, socialImageOut);
});