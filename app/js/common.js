
var siteNavigation = (function() {

	return {

		init: function() {
			var menu = $('.drop-down-nav');
			var button = $('.icon-menu');
			// var menuWrap = $('.menu-wrap');

			button.on('click', function() {
				var $that = $(this);
				var menu = $that.parent().parent().find('.drop-down-nav');
				menu.fadeToggle();
				button.addClass('icon-menu-dark');
			});

			$(window).resize(function(){
				if ($(window).width() >= 992) {
					menu.fadeOut(.1);
				}

				if ($(window).width() < 992) {
					menu.fadeOut(.1);
				}

			});
			
		}
	}
})();

var choseCity = (function() {
	return {
		init: function() {
			var tabs = $('.tabs');
			var navTabs = tabs.find('.nav-tabs')
			var li = tabs.find('li');
			var innerDiv = tabs.find('.chose-city-992');
			var innerCity = innerDiv.find('.inner-city');

			// navTabs.fadeOut();

			innerDiv.on('click', function() {
				navTabs.fadeToggle();
			});

			li.on('click', function() {
				var $that = $(this);
				innerCity.text($that.text());
			});
		}
	}
})();


var showSensor = (function() {
	return {
		init: function() {
			var sensorItem = $('.sensor-list__item');

			sensorItem.on('click', function() {
				var $that = $(this);
				var sensorDescription = $that.next();
				sensorDescription.slideToggle();
			});
		}
	}
})();


$(document).ready(function() {
	siteNavigation.init();
	choseCity.init();
	showSensor.init();
});