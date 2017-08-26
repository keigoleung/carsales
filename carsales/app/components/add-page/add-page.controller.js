(function () {
    'use strict';

    angular.module('app.components.add-page')
        .controller('addPageController', addPageController);

    addPageController.$inject = ['productsPageService', '$state', '$stateParams'];

    function addPageController(productsPageService, $state, $stateParams) {

        var vm = this;

        vm.submit = submit;
        vm.back = back;

        vm.type;

        vm.vehicle = {
            "make":"",
            "model":"",
            "engine":"",
            "door":"",
            "wheels":"",
            "carType":""
        }

        activate();

        function activate() {
            vm.type = $stateParams.obj;
            if(!vm.type){
                $state.go('vehicle.list');
            }
        }

        function submit(valid) {
            if(valid){
                productsPageService.addVehicle(vm.vehicle, vm.type);
                $state.go('vehicle.list');
            }
        }

        function back() {
            $state.go('vehicle.list');
        }
        
    }
})();
