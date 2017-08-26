
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