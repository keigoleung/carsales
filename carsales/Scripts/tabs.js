/**
 * The angular tabs module
 * @author: nerv
 * @version: 0.2.5, 2012-08-25
 * Nick Melnik - extended to work with removing of tabs.
 */
(function(angular) {

    'use strict';

    angular.module('tabs', []);

    angular.module('tabs')
        .directive('ngTabs', ngTabsDirective);

    function ngTabsDirective() {
        return {
            scope: true,
            restrict: 'EAC',
            controller: ngTabsController
        };
    }

    function ngTabsController($scope) {
        $scope.tabs = {
            index: 0,
            count: 0
        };

        var vm = this;

        var headers = [];
        var bodies = [];
        var idCounter = 0;

        vm.getTabHeadIndex = getTabHeadIndex;
        vm.getTabBodyIndex = getTabBodyIndex;
        vm.removeTabHeadElement = removeTabHeadElement;
        vm.removeTabBodyElement = removeTabBodyElement;

        function getTabHeadIndex(element) {
            if (element.tabId === undefined) {
                idCounter++;
                element.tabId = idCounter;
                headers.push(element);
                return headers.length;
            }
            for (var i = 0; i < headers.length; i++) {
                var header = headers[i];
                if (header.tabId === element.tabId) {
                    return i + 1;
                }
            }
            return 0;
        }

        function getTabBodyIndex (element) {
            if (element.tabId === undefined) {
                idCounter++;
                element.tabId = idCounter;
                bodies.push(element);
                return bodies.length;
            }
            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.tabId === element.tabId) {
                    return i + 1;
                }
            }
            return 0;
        }

        function removeTabHeadElement(element) {
            var index = vm.getTabHeadIndex(element);
            if (index > 0) {
                headers.splice(index - 1, 1);
            }
        }

        function removeTabBodyElement(element) {
            var index = vm.getTabBodyIndex(element);
            if (index > 0) {
                bodies.splice(index - 1, 1);
            }
        }
    }

    ngTabsController.$inject = ['$scope'];


    angular.module('tabs')
        .directive('ngTabHead', ngTabHeadDirective);

    function ngTabHeadDirective() {
        return {
            scope: false,
            restrict: 'EAC',
            require: '^ngTabs',
            link: function (scope, element, attributes, controller) {
                var index = controller.getTabHeadIndex(element);
                var value = attributes.ngTabHead;
                var active = /[-*\/%^=!<>&|]/.test(value) ? scope.$eval(value) : !!value;

                scope.tabs.index = scope.tabs.index || ( active ? index : null );

                element.bind('click', function () {
                    scope.tabs.index = controller.getTabHeadIndex(element);
                    scope.$$phase || scope.$apply();
                });

                var watchRemove = scope.$watch('tabs.index', function () {
                    element.toggleClass('active', scope.tabs.index === controller.getTabHeadIndex(element));
                });

                scope.$on('$destroy', function () {
                    controller.removeTabHeadElement(element);
                    element.unbind('click');
                    watchRemove();
                });
            }
        };
    }


    angular.module('tabs')
        .directive('ngTabBody', ngTabBodyDirective);

    function ngTabBodyDirective() {
        return {
            scope: false,
            restrict: 'EAC',
            require: '^ngTabs',
            link: function (scope, element, attributes, controller) {

                var watchRemove = scope.$watch('tabs.index', function () {
                    element.toggleClass(attributes.ngTabBody + ' ng-show', scope.tabs.index === controller.getTabBodyIndex(element));
                });

                scope.$on('$destroy', function () {
                    controller.removeTabBodyElement(element);
                    watchRemove();
                });
            }
        };
    }

})(angular);