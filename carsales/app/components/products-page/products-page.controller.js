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
            productsPageService.getProducts().then(
	            function(data){
		            vm.products = data;
	            }
            )
        }

        function editVehicle(type, id) {
            console.log(type);
            $state.go('vehicle.edit');
        }

        function addVehicle(type) {
            $state.go('vehicle.add');
        }
        
    }
})();
