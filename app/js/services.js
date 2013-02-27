'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('eventsApp.services', [])
    .factory('eventData', function() {
        return {
            events: [
                {id: 1, name: 'Code Camp',  date: '03/15/2013', time: '9:00am - 5:00pm', location: {address: "123 Wall St", city: "New York", province: "NY"}, imageUrl: 'http://blog.laptopmag.com/wpress/wp-content/uploads/2012/08/Code-Camp_sf.jpg' },
                {id: 2, name: 'Code Retreat',  date: '03/16/2013', time: '8:00am - 4:30pm', location: {address: "42 Wallaby Way", city: "Sydney", province: "AU"}, imageUrl: 'http://api.ning.com/files/2vzV35vB8k5SPm92v9bGA0ng9DP2h-ONIcgPoDUThiIk1roHMF4eVjzlN2o3z9S5aU*wKgn9jZpdxEekNQCYvnOumr-beV44/cnlogo.png' },
                {id: 3, name: 'Agile Roundtable',  date: '04/02/2013', time: '2:00pm - 5:00pm', location: {address: "10 Downing St", city: "London", province: "UK"}, imageUrl: 'http://2.bp.blogspot.com/_gLnOWFiJhI8/SzfU7icq4SI/AAAAAAAAAAw/uPYwoNfPQHU/S1600-R/cart.jpg' }
                ]
        };
    });
