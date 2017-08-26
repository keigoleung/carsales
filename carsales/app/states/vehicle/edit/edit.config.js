(function () {
    'use strict';

    angular.module('app.states.vehicle.edit')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('vehicle.edit', {
                url: '/edit',
                views: {
                    "@": { templateUrl: 'app/states/vehicle/edit/index.html' }
                },
                transitions: {
                },
                params: {
                    obj: null,
                    list: null
                }
            });

    }
})();

