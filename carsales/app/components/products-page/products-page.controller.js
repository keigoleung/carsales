(function () {
    'use strict';

    angular.module('app.components.products-page')
        .controller('productsPageController', productsPageController);

    productsPageController.$inject = ['productsPageService', '$state'];

    function productsPageController(productsPageService, $state) {

        var vm = this;
        vm.products = [];
        vm.propertyName = 'id';
        vm.reverse = false;
        
        vm.editVehicle = editVehicle;
        vm.addVehicle = addVehicle;
        vm.sortBy = sortBy;

        activate();

        function activate() {
            if(productsPageService.products) {
                vm.products = productsPageService.products;
            } else {
                // get vehicle list from json
                productsPageService.getProducts().then(
                    function(data){
                        vm.products = data;
                    }
                )
            }
        }

        function editVehicle(type, list) {
            // go to edit vehicle page
            $state.go('vehicle.edit', { obj: type, list: list });
        }

        function addVehicle(type) {
            // go to add vehicle page
            $state.go('vehicle.add', { obj: type });
        }

        function sortBy(propertyName) {
            // sort the vehicle list
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;
        };
        
    }
})();
