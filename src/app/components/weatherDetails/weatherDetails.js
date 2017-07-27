
angular.module('latestOne').component('weatherDetails', {
  templateUrl: 'app/components/weatherDetails/weatherDetails.html',
  bindings: {
    weather: '<',
    loading: '<'
  },
  controller: function() {}
});
