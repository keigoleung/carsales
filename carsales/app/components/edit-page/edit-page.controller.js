(function () {
    'use strict';

    angular.module('app.components.edit-page')
        .controller('editPageController', editPageController);

    editPageController.$inject = ['productsPageService', '$state', '$stateParams'];

    function editPageController(productsPageService, $state, $stateParams) {

        var vm = this;

        vm.submit = submit;
        vm.back = back;

        vm.type, vm.list;

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
            vm.vehicle = $stateParams.list;
            if(!vm.type&&!vm.list){
                $state.go('vehicle.list');
            }
        }

        function submit(valid) {
            if(valid){
                // edit vehicle
                productsPageService.editVehicle(vm.vehicle, vm.type);
                $state.go('vehicle.list');
            }
        }

        function back() {
            $state.go('vehicle.list');
        }
        
    }
})();
