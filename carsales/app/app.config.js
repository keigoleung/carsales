(function() { 
    'use strict';

    angular.module('app')
        .config(config);


    config.$inject = ['$compileProvider', '$stateProvider', '$urlRouterProvider'];

    function config($compileProvider, stateProvider, urlRouterProvider) {

        stateProvider
            .state('home', {
                url: '',
                controller: redirectToInitialState
            });

    }

    redirectToInitialState.$inject = ['$state'];

    function redirectToInitialState($state) {
        $state.go('vehicle.list');
    }

})();
