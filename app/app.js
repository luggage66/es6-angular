'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _WeatherFactory = require('factories/weather');

var _WeatherFactory2 = _interopRequireDefault(_WeatherFactory);

var _WeatherController = require('controllers/weatherController');

var _WeatherController2 = _interopRequireDefault(_WeatherController);

var app = angular.module('weatherApp', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherController'
    });
}]);
app.factory('WeatherFactory', _WeatherFactory2['default']).controller('WeatherController', _WeatherController2['default']);