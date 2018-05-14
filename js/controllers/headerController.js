(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('headerController',[ 'backendStreamService','navigationService', function(backendStreamService,navigationService){
    var vm = this;
	vm.header = "Trapeze Vehicle Data Cloud";

    vm.showServerStats = function() {
	    navigationService.showServerStats();
    };
    
    //backendStreamService.registerSrvStatsListener(vm.updateServerStats);
  }]);
}());
