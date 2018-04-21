(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('srvStatsController',[ 'backendStreamService',function(backendStreamService){
    var vm = this;
    vm.srvList = [];

    var showSrvStats = {
      cmd: 'srvStats'
    };

    vm.updateServerStats = function( srvStatList ) {
      vm.srvList = srvStatList;
    };
    
    backendStreamService.registerSrvStatsListener(vm.updateServerStats);
    backendStreamService.sendData(showSrvStats);
  }]);

}());
