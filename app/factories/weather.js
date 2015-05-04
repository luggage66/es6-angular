'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var WeatherFactory = (function () {
	function WeatherFactory($resource) {
		_classCallCheck(this, WeatherFactory);

		this.$resource = $resource;
	}

	_createClass(WeatherFactory, [{
		key: 'getWeather',
		value: function getWeather(location) {
			var YDEV = 'https://query.yahooapis.com/v1/public/yql',
			    YSQL = 'select item from weather.forecast' + ' where woeid in (select woeid from geo.places(1) ' + 'where text="' + location + '")';

			return this.$resource(YDEV, {}, {
				fetch: { method: 'GET', q: YSQL }

			});
		}
	}]);

	return WeatherFactory;
})();

WeatherFactory.$inject = [$resource];

exports['default'] = WeatherFactory;
module.exports = exports['default'];