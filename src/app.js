import angular from 'angular';

import WeatherFactory from './factories/weather';
import WeatherController from './controllers/weatherController';

// require('angular-resource') loads angular-resource as 'ngResource' and return returns the string 'ngResource'
// so you can use it right in the dependency list below.
// same with angular-route

var app = angular.module('weatherApp', [require('angular-resource'), require('angular-route')]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'src/views/weather.html',
            controller: 'WeatherController'
        });
}]);
app.
	  factory('WeatherFactory', WeatherFactory).
	  controller('WeatherController', WeatherController)
