angular.module('punto76').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, database, $localStorage) {

        $scope.data = {};
        $scope.successAlert = true;

        $scope.guardarDatos = function () {
            database.insert($scope.data);
            //database.insert($scope.ls);
            $scope.successAlert = false;
            $scope.misDatos = $localStorage.misDatos;
        };

        $scope.click = function () {

            $scope.successAlert = true;

        };
    }]);