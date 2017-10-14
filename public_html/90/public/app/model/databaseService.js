(function () {
    'use strict';

    angular
            .module('Punto90')
            .service('databaseService', databaseService);

    databaseService.$inject = ['$http', '$httpParamSerializerJQLike'];

    function databaseService($http, $httpParamSerializerJQLike) {

        this.metodoget = function (data) {
            return $http.get('http://localhost:3000/ejercicio/' + data.nombre + '/' + data.edad);
        };

        this.metodopost = function (data) {
            return $http.post('http://localhost:3000/ejercicio/', $httpParamSerializerJQLike(data));
        };

        this.metodoput = function (data) {
            return $http.put('http://localhost:3000/ejercicio/', $httpParamSerializerJQLike(data));
        };

        this.metododelete = function (data) {
            return $http.delete('http://localhost:3000/ejercicio/', {data: $httpParamSerializerJQLike(data)});
        };

    }
})();