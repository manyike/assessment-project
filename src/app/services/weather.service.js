'use strict';

angular.module('latestOne')

  .service('openWeatherApi', function ($http) {

      // Ideally you want to hide these credentials by using you own internal api
      // as a proxy to the 3rd party in this case the open weather api
      var baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
      var apiKey  = '53f9d8e4213222cf517d86dc406d67fc';

      this.getLatestWeather = function (latitude, longitude, callback) {
        // ideally we can cache the weather response in session storage since
        // weather does not change very often
        $http.get(baseUrl, {
          params: {
            'lat': latitude,
            'lon': longitude,
            'appid': apiKey,
            'units': 'metric'
          }
        }).then(function (response) {
          callback(null, response.data);

        }, function(error) {
          callback(error);
        });
      }
    }
  );
