var moegirl_menu = $('<nav id="moegirl-menu" />');
moegirl_menu.on('touchmove', function (event) {
	event.stopPropagation();
});
$('body').append(moegirl_menu);

moegirl_menu.append('<div id="moegirl-menu-title">' + $('h1').text() + '</div>');

var moegirl_menu_list = $('<ol id="moegirl-menu-list" />')
$('h2, h3, h4, h5').each(function () {
	var heading_el = $(this);
	
	moegirl_menu_list.append(
		$('<li />')
			.text(heading_el.text())
			.addClass('moegirl-menu-' + this.tagName.toLowerCase())
			.data('bind-element', heading_el)
	);
});
moegirl_menu_list.on('click', 'li', function () {
	$('html, body').scrollTop($(this).data('bind-element').offset().top);
	$('body').toggleClass('moegirl-menu-show');
}).appendTo(moegirl_menu);

var moegirl_menu_button = $('<div id="moegirl-menu-mind-attack" />');
moegirl_menu_button.on('touchstart', function (event) {
	event.stopPropagation();
	
	$('body').toggleClass('moegirl-menu-show');
});
$('body').append(moegirl_menu_button);

$('body').on('touchstart.moegirl-menu', function () {
	$(this).one('touchmove.moegirl-menu', function () {
		moegirl_menu_button.addClass('pause');
	}).one('touchend.moegirl-menu', function () {
		$(this).off('touchmove.moegirl-menu');
		moegirl_menu_button.removeClass('pause');
	});
});

var moegirl_menu_mask = $('<div id="moegirl-menu-mask" />');
moegirl_menu_mask.on('touchstart', function (event) {
	event.stopPropagation();
});
$('body').append(moegirl_menu_mask);