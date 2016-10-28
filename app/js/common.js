
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
				button.toggleClass('icon-menu-dark');
			});

			$(window).resize(function(){
				if ($(window).width() >= 992) {
					menu.fadeOut(.1);
					button.removeClass('icon-menu-dark');
				}

				if ($(window).width() < 992) {
					menu.fadeOut(.1);
					button.removeClass('icon-menu-dark');
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
			var sensorItem = $('.sensor-list__item'),
				mapSensor = $('.map-sensor').slideUp(0);

			sensorItem.on('click', function() {
				var screenWidth = $(window).width();
				if (screenWidth < 992) {
					var $that = $(this);
					var sensorDescription = $that.next();
					sensorDescription.slideToggle();
					// console.log('hell1');
				}

				$(window).resize(function(){
					sensorDescription.slideUp();
				});
				
			});
		}
	}
})();

var showSensorDescript = (function() {
	return {
		init: function() {
			var sensor = $('.sensor'),
				sensorItem = sensor.find('.sensor-list__item'),
				flag = true;

				sensorItem.on('mouseover mouseout', function (event) {
					var $this = $(this),
					attrNumber = $this.attr('data-number'),
					sensorWrap = $this.closest('.sensor'),
					mapSensors = sensorWrap.find('.map-sensor');
					mapSensor = mapSensors.filter('.map-sensor'+ attrNumber)

					if ($(window).width() > 992) {
						// flag = false;
						if (event.type === 'mouseover') {
							mapSensor.fadeIn(0, function() {
								// flag = true;
							});
						} else if (event.type === 'mouseout') {
							mapSensor.fadeOut(0, function() {
								// flag = true;
							});
						}
					}
				});
		}
	}
})();


$(document).ready(function() {
	siteNavigation.init();
	choseCity.init();
	showSensor.init();
	showSensorDescript.init();
});