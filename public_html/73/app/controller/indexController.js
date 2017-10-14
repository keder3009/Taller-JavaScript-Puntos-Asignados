angular.module('73', []).controller('indexController', ['$scope','$log', function ($scope,$log) {
   
   $scope.$log = $log;
   $scope.message = 'Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap';
   $log.log("Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap");
   $log.warn("Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap");
   $log.info("Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap");
   $log.error("Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap");
   $log.debug("Hi, this is my script number 73 in JavaScript with AngularJS and Bootstrap");

}]);