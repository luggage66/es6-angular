'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var WeatherController = (function () {
	function WeatherController($scope, WeatherFactory) {
		_classCallCheck(this, WeatherController);

		this.scope = $scope;
		this.WeatherFactory = WeatherFactory;
	}

	_createClass(WeatherController, [{
		key: 'getLocation',
		value: function getLocation() {
			scope.data = { location: '', weather: '' };
			scope.data.weather = WeatherFactory.getWeather(scope.data.location).fetch();
		}
	}]);

	return WeatherController;
})();

exports['default'] = WeatherController;
module.exports = exports['default'];