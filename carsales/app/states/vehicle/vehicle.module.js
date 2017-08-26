(function () {
    'use strict';

    angular.module('app.states.vehicle',
        [
            'ui.router',
            'ngSanitize',
            'app.components',
            'app.states.vehicle.list',
            'app.states.vehicle.add',
            'app.states.vehicle.edit'
        ]);
})();