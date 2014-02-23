'use strict';

angular.module('testApp')
  .controller('MainCtrl', ['$scope', 'Programmes', function ($scope, progs) {

    progs.query(function(ps) {
        var endD;
        ps.forEach(function(val, key) {
            var prevD = endD;
            endD = val.endTime;
            if (val.startTime < prevD) {
                val.overlapsWithPrevious = true;
            }
        });
        $scope.programmes = ps;
    });

  }]);
