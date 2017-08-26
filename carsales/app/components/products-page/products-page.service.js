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
            if(type==='Car'){
                var max = _.max(self.products[0].list, function(o){return o.id;});
                vehicle.id = max.id+1;
                self.products[0].list.push(vehicle);
            } else {
                var max = _.max(self.products[1].list, function(o){return o.id;});
                vehicle.id = max.id+1;
                self.products[1].list.push(vehicle);
            }
        }
    }
})();