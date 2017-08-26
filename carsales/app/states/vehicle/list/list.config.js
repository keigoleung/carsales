(function () {
    'use strict';

    angular.module('app.states.vehicle.list')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('vehicle.list', {
                url: '/list',
                views: {
                    "@": { templateUrl: 'app/states/vehicle/list/index.html' }
                },
                transitions: {
                }
            });

    }
})();

