'use strict';


angular.module('eventsApp', ['eventsApp.filters', 'eventsApp.services', 'eventsApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {templateUrl: 'partials/eventList.html', controller: EventListController});
    $routeProvider.when('/event/:eventId', {templateUrl: 'partials/event.html', controller: EventController});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
