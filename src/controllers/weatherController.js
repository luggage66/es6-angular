class WeatherController {
	constructor($scope, WeatherFactory) {
		this.scope = $scope;
		this.WeatherFactory = WeatherFactory
	}

	getLocation() {
		scope.data = { location: '', weather: '' };
		scope.data.weather = WeatherFactory.getWeather(scope.data.location).fetch()
	}

}

export default WeatherController;
