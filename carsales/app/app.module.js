
(function() {
    'use strict';

    angular.module('app',
        [
            'ui.router',
            'ngSanitize',
            'ui.bootstrap',
            'tabs',
            'app.components',
            'app.states.vehicle'
        ]);

})();

(function () {
    'use strict';

    angular.module('app')
        .service('underscore', underscoreService);

    underscoreService.$inject = ['$window'];

    function underscoreService($window) {
        return $window._;
    }
})();