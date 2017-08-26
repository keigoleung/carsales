(function () {
    'use strict';

    angular.module('app.components.products-page')
        .controller('productsPageController', productsPageController);

    productsPageController.$inject = ['productsPageService', '$state'];

    function productsPageController(productsPageService, $state) {

        var vm = this;
        vm.products = [];
        
        vm.editVehicle = editVehicle;
        vm.addVehicle = addVehicle;

        activate();

        function activate() {
            if(productsPageService.products) {
                vm.products = productsPageService.products;
            } else {
                productsPageService.getProducts().then(
                    function(data){
                        vm.products = data;
                    }
                )
            }
        }

        function editVehicle(type, list) {
            $state.go('vehicle.edit', { obj: type, list: list });
        }

        function addVehicle(type) {
            $state.go('vehicle.add', { obj: type });
        }
        
    }
})();
