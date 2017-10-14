angular.module('73').config([
   '$httpProvider',
   '$stateProvider',
   '$urlRouterProvider',
   function config($httpProvider, $stateProvider, $urlRouterProvider) {
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('index', {
         url: '/',
         controller: 'indexController',
         templateUrl: 'app/view/principal.html',
         resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                  return $ocLazyLoad.load(
                          [
                             'app/model/databaseService.js',
                             'app/controller/indexController.js'
                           ],
                          {
                             serie: true
                          }
                  );
               }]
         }
      });
}]);