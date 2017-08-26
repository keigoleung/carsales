(function () {
    'use strict';

    angular.module('app.states.vehicle.list')
        .controller('listController', listController);

    listController.$inject = ['$scope', 'l10n'];

    function listController($scope, l10n) {
        $scope.l10n = l10n;
    }
})();
