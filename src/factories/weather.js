class WeatherFactory {
	constructor($resource) {
		this.$resource = $resource;
	}

	getWeather(location) {
		var YDEV = 'https://query.yahooapis.com/v1/public/yql'
			, YSQL = 'select item from weather.forecast'
							 + ' where woeid in (select woeid from geo.places(1) '
							 + 'where text="' + location + '")';

		return this.$resource(YDEV,
													{},
													{
														fetch: { method: 'GET', q: YSQL}

													}
												 );
	}
}

// WeatherFactory.$inject = ['$resource'];

export default WeatherFactory;
