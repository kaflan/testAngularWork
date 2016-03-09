angular.module('app', ['ngRoute'])
  .config(['$httpProvider', function($httpProvider) {
       $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    }
]);
