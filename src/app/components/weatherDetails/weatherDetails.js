
angular.module('latestOne').component('weatherDetails', {
  templateUrl: 'app/components/weatherDetails/weatherDetails.html',
  bindings: {
    details: '<',
    weather: '<',
    loading: '<'
  },
  controller: function() {
  }
});
