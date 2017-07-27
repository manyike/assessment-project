(function() {
  'use strict';

  angular
    .module('latestOne')
    .controller('MainController', appController);

  /*eslint angular/controller-as-vm: [2,"viewModel"]*/
  function appController ($window, openWeatherApi, toastr) {
    var viewModel = this;
    viewModel.title = 'Welcome to Weather sniffers!!';
    viewModel.loading = false;
    viewModel.latestWeather = {};
    viewModel.refreshWeather = function() {
      viewModel.loading = true;
      _fetchWeather();
    };

    function _fetchWeather() {
      viewModel.loading = true;
      $window.navigator.geolocation.getCurrentPosition(
        function (position) {
          openWeatherApi.getLatestWeather(position.coords.latitude, position.coords.longitude,
            function(error, results) {
              viewModel.loading = false;
              if (error) {
                toastr.error('Error fetching weather details for your location.');
              } else {
                viewModel.latestWeather = results;
              }
            }
          );
        },
        function(error) {
          viewModel.loading = false;
          switch(error.code) {
            case error.PERMISSION_DENIED:
              toastr.error('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              toastr.error('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              toastr.error('The request to get user location timed out.');
              break;
            case error.UNKNOWN_ERROR:
              toastr.error('An unknown error occurred.Please try again');
              break;
          }
        }
      );
    }

    if ($window.navigator.geolocation) {
      _fetchWeather();
    } else {
      toastr.error('Geolocation is not supported by this browser.')
    }

  }
})();
