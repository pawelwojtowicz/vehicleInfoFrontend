(function () {
    'use strict';

var app = angular.module('vehicleInfoPage');

app.controller('mapController', [ 'backendStreamService', function(backendStreamService) {
  var vm = this;
  
  vm.tiles = {
    url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  };
  
  vm.vhPosition = {
    lat: 51.1552819,
    lng: 16.8978038,
    zoom: 18
  };
  
  vm.updateVhPosition = function( vhInfo ) {
    vm.vhPosition.lat = vhInfo.latitude;
    vm.vhPosition.lng = vhInfo.longitude;
    
    vm.busMark = {
        bus1: {
            lat: vm.vhPosition.lat,
            lng: vm.vhPosition.lng,
            message: "Bus",
            focus: true,
            draggable: false
        }
    };
    
    console.log("new position" + JSON.stringify(vm.vhPosition));
  };

}]);


}());
