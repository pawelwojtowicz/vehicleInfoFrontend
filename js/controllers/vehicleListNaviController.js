(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('vehicleListNaviController',[ 'backendStreamService',function(backendStreamService){
    var vm = this;

    vm.menu = [];
    vm.updateVehicleList = function( vhList) {
      vm.menu = [];
      vhList.forEach( function( vehicleEntry ) {
        var newVehicle = { caption: vehicleEntry , vehicleId : vehicleEntry };
        vm.menu.push( newVehicle );
      });
    };                
     


    vm.showVehicle = function( index ) {
      var menuItem = vm.menu[index];
      var showVhCommand = {
        cmd: "vhSelection",
        selectedVehicleId: menuItem.vehicleId 
      };

      backendStreamService.sendData(showVhCommand);
    };
    
    backendStreamService.registerVhListListener(vm.updateVehicleList);
    
  }]);

}());
