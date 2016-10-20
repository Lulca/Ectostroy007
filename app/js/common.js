
var siteNavigation = (function() {

	return {

		init: function() {
			var menu = $('.drop-down-nav');
			var button = $('.icon-menu');
			// var menuWrap = $('.menu-wrap');

			button.on('click', function() {
				$that = $(this);
				var menu = $that.parent().parent().find('.drop-down-nav');
				menu.fadeToggle();
				button.addClass('icon-menu-dark');
			});

			$(window).resize(function(){
				if ($(window).width() >= 992) {
					menu.fadeIn(.1);
				}

				if ($(window).width() < 992) {
					menu.fadeOut(.1);
				}

			});
			
		}
	}
})();


$(document).ready(function() {
	siteNavigation.init();
});