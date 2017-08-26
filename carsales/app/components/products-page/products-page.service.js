(function() {
    'use strict';
    angular.module('app.components.products-page')
        .service('productsPageService', productsPageService);

    productsPageService.$inject = ['$http', '$q'];

    function productsPageService($http, $q) {
        var self = this;
        var productsPath = "products.json";

		self.getProducts = getProducts;

        function getProducts() {
            return $http.get(productsPath)
                .then(retrieved, failed);
        }

        function retrieved(response) {
            return response.data;
        }

        function failed(error) {
            console.log(error);
        }
    }
})();