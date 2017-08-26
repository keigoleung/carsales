(function() {
    'use strict';
    angular.module('app.components.products-page')
        .service('productsPageService', productsPageService);

    productsPageService.$inject = ['$http', '$q', 'underscore'];

    function productsPageService($http, $q, _) {
        var self = this;
        var productsPath = "products.json";

		self.getProducts = getProducts;
        self.addVehicle = addVehicle;
        self.editVehicle = editVehicle;

        self.products;

        function getProducts() {
            return $http.get(productsPath)
            .then(retrieved, failed);
        }

        function retrieved(response) {
            self.products = response.data;
            return self.products;
        }

        function failed(error) {
            console.log(error);
        }

        function addVehicle(vehicle, type) {
            var vehicles = _.findWhere(self.products, { VehicleType: type });
            if(vehicles){
                var max = _.max(vehicles.list, function(o){return o.id;});
                vehicle.id = max.id+1;
                vehicles.list.push(vehicle);
            }
        }

        function editVehicle(vehicle, type) {
            var vehicles = _.findWhere(self.products, { VehicleType: type });
            if(vehicles){
                _.extend(_.findWhere(vehicles.list, { id: vehicle.id }), vehicle);
            }
        }
    }
})();