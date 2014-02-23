'use strict';

/* Services */

var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('Programmes', ['$resource',
    function($resource){
        return $resource('api/programmes/:programId', {}, {
            query: {method:'GET', isArray:true}
        })
    }])