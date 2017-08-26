(function () {
    'use strict';

    angular.module('app.components.add-page')

    .directive('addPage', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/add-page/add-page.html',
                scope: {},
                controller: "@",
                name: "controllerName",
                controllerAs: 'vm'
            }
        });
})();
