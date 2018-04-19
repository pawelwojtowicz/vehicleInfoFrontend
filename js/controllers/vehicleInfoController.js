(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('vehicleInfoController',[ 'backendStreamService',function(backendStreamService){
    var vm = this;

    vm.vhInfo = [];
    vm.updateVehicleInfo = function( info) {
	vm.vhInfo.length = 0;	
	console.log( JSON.stringify(info) );

	for ( var key in info ) {
		if ( info.hasOwnProperty(key) ) {
			var entry = { name : key, val: info[key] };
			vm.vhInfo.push(entry);
		}	
	}
	
	
    };                
     
    backendStreamService.registerVhInfoListeners(vm.updateVehicleInfo);
    
  }]);

}());
