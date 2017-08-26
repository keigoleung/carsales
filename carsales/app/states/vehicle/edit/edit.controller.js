(function () {
    'use strict';

    angular.module('app.states.vehicle.edit')
        .controller('editController', editController);

    editController.$inject = ['$scope', 'l10n'];

    function editController($scope, l10n) {
        $scope.l10n = l10n;
    }
})();
