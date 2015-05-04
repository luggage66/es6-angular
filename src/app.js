import angular from 'angular';
import unused1 from 'angular-route';
import unused2 from 'angular-resource';

import WeatherFactory from './factories/weather';
import WeatherController from './controllers/weatherController';

console.log(angular.version);

var app = angular.module('ng', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: require('./views/weather.html'),
            controller: 'WeatherController'
        });
}]);
app.
	  factory('WeatherFactory', WeatherFactory).
	  controller('WeatherController', WeatherController)
