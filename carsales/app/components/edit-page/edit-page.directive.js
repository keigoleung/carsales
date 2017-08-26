(function () {
    'use strict';

    angular.module('app.components.edit-page')

    .directive('editPage', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/edit-page/edit-page.html',
                scope: {},
                controller: "@",
                name: "controllerName",
                controllerAs: 'vm'
            }
        });
})();
