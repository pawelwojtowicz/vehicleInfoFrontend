(function () {
  'use strict';

  var app = angular.module('vehicleInfoPage');

  app.controller('vehicleInfoController',[ 'backendStreamService','tellTalesService',function(backendStreamService, tellTalesService ){
    var vm = this;
    
    vm.vhName = "";
    vm.heartbeatTimestamp = "";
    vm.vhPosition = "";
    vm.vhSpeed = "";

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

    
    vm.tellTales = [];
    
    vm.updateVehicleInfo = function( info) {	
	    
	    vm.vhName = info.name;
	    vm.heartbeatTimestamp = info.timestamp;
	    vm.vhSpeed = info.speed;
	    var position = JSON.parse(info.position);
	//    vm.vhPosition.lat = position.latitude;
	//    vm.vhPosition.lng = position.longitude;
	    vm.dashboard.speed = info.dashboard.speed;
	    vm.dashboard.bat_soc = info.dashboard.bat_soc;
	    vm.analyses.estimated_range_inservice = info.analyses.estimated_range_inservice;
	    vm.analyses.estimated_time_inservice = info.analyses.estimated_time_inservice;
	
	    
      vm.busMark = {
        bus1: {
          lat: vm.vhPosition.lat,
          lng: vm.vhPosition.lng,
          message: "Bus",
          focus: true,
          draggable: false
        }
      };
 
	    
	    var skeleton = tellTalesService.getTellTalesStructure();
      
	    for ( var key in info ) {
		    if ( info.hasOwnProperty(key) && key.startsWith('tt') ) {
	        var ttId = parseInt(key.substring(2));
	         
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
