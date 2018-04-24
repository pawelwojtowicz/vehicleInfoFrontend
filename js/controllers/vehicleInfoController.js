(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('vehicleInfoController',[ 'backendStreamService','tellTalesService',function(backendStreamService, tellTalesService ){
    var vm = this;
    
    vm.vhName = "";
    vm.heartbeatTimestamp = "";
    vm.vhPosition = "";
    vm.vhSpeed = "";
    
    vm.tellTales = [];
    
    vm.updateVehicleInfo = function( info) {	
	    
	    vm.vhName = info.name;
	    vm.heartbeatTimestamp = info.timestamp;
	    vm.vhSpeed = info.speed;
	    vm.vhPosition = JSON.parse(info.position);
	    
	    var skeleton = tellTalesService.getTellTalesStructure();
      
	    for ( var key in info ) {
		    if ( info.hasOwnProperty(key) && key.startsWith('tt') ) {
	        var ttId = parseInt(key.substring(2));
	         console.log( "this was obtained - " + ttId );
	         
	         var entry = skeleton.get(ttId);
	         
	         entry.status = tellTalesService.getStatusText(parseInt(info[key]));
	         skeleton.set(ttId, entry);
		    }	
	    }
	    
	    vm.tellTales.length = 0;
	    skeleton.forEach( function( value, key ) {
	      vm.tellTales.push( { id: key, name: value.name, status: value.status} );
	    });    
    };                
    
    backendStreamService.registerVhInfoListeners(vm.updateVehicleInfo);
    
  }]);

}());
