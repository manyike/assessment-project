(function() {
  'use strict';

  angular
    .module('latestOne')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
