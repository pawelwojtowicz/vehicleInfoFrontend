(function () {
    'use strict';
var app = angular.module('vehicleInfoPage');

app.service( 'navigationService', ["$location" , function($location) {
  var vm = this;
  
  vm.showServerStats = function() {
    $location.url("/srvstats");
  };
  
  vm.showVehicleInfo = function() {
    $location.url("/baseinfo");
  };

}]);

}());
