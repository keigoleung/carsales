(function() {
    'use strict';

    angular.module('app.states.vehicle')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('vehicle', {
                url: '/vehicle',
                abstract: true,
                template: '<ui-view></ui-view>'
            });
    }

})();
