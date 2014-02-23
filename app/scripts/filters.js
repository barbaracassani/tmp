angular.module('myFilters', []).filter('_myDate', function($filter) {
    return function(input) {
        return $filter('date')(input, 'MM/dd/yyyy @ h:mma'); //to be customized
    };
})

.filter('_myDuration', function($filter) {
    return function(input) {
        var t = input/60, h = 0, m = 0;
        m = t % 60;
        h = Math.floor(t / 60);
        return  h + 'hrs ' + m + 'm';
    };
});



