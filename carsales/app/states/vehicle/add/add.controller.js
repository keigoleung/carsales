(function () {
    'use strict';

    angular.module('app.states.vehicle.add')
        .controller('addController', addController);

    addController.$inject = ['$scope', 'l10n'];

    function addController($scope, l10n) {
        $scope.l10n = l10n;
    }
})();
