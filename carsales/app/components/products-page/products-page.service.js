(function() {
    'use strict';
    angular.module('app.components.products-page')
        .service('productsPageService', productsPageService);

    productsPageService.$inject = ['$http', '$q', 'underscore'];

    function productsPageService($http, $q, _) {
        var self = this;
        // change this path to api.
        var productsPath = "products.json";

		self.getProducts = getProducts;
        self.addVehicle = addVehicle;
        self.editVehicle = editVehicle;

        self.products;

        function getProducts() {
            // get product from json file.
            return $http.get(productsPath)
            .then(retrieved, failed);
        }

        function retrieved(response) {
            // success get file
            self.products = response.data;
            return self.products;
        }

        function failed(error) {
            // fail to get file
            console.log(error);
        }

        function addVehicle(vehicle, type) {
            // add vehicle to the temp data. it is just a demostration, normally will send data back to api to add vehicle and get respond from server and refresh the list.
            var vehicles = _.findWhere(self.products, { VehicleType: type });
            if(vehicles){
                var max = _.max(vehicles.list, function(o){return o.id;});
                vehicle.id = max.id+1;
                vehicles.list.push(vehicle);
            }
        }

        function editVehicle(vehicle, type) {
            // edit vehicle in the temp data. it is just a demostration, normally will send data back to api to edit vehicle and get respond from server and refresh the list.
            var vehicles = _.findWhere(self.products, { VehicleType: type });
            if(vehicles){
                _.extend(_.findWhere(vehicles.list, { id: vehicle.id }), vehicle);
            }
        }
    }
})();