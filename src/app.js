import angular from 'angular';
import unused1 from 'angular-route';
import unused2 from 'angular-resource/angular-resource';

import WeatherFactory from 'factories/weather';
import WeatherController from 'controllers/weatherController';

var app = angular.module('weatherApp', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/weather.html',
            controller: 'WeatherController'
        });
}]);
app.
	  factory('WeatherFactory', WeatherFactory).
	  controller('WeatherController', WeatherController)
