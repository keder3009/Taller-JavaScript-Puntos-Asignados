angular.module('punto76').service('databaseService', ['$localStorage', function ($localStorage) {

    this.insert = function (data) {
      $localStorage.misDatos = data;
    };

  }]);