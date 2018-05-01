(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('vehicleListNaviController',[ 'backendStreamService','navigationService',function(backendStreamService,navigationService){
    var vm = this;

    vm.menu = [];
    vm.updateVehicleList = function( vhList) {
      vm.menu = [];
      vhList.forEach( function( vehicleEntry ) {
        var newVehicle = { caption: vehicleEntry , vehicleId : vehicleEntry };
        vm.menu.push( newVehicle );
      });
    };                
     
    vm.showVehicle = function( selectedVehicleId ) {
      var showVhCommand = {
        cmd: "vhSelection",
        selectedVehicleId: selectedVehicleId 
      };

      backendStreamService.sendData(showVhCommand);
      navigationService.showVehicleInfo();
    };
    
    backendStreamService.registerVhListListener(vm.updateVehicleList);
    
  }]);

}());
