(function () {
    'use strict';

    angular.module('app.states.vehicle.add')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('vehicle.add', {
                url: '/add',
                views: {
                    "@": { templateUrl: 'app/states/vehicle/add/index.html' }
                },
                transitions: {
                }
            });

    }
})();

