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

    /** chart configuration */
    vm.currLabel = 1;
    vm.labels = [1];
    vm.series = ['IBISHost', 'DataExchange', 'Navi'];    
    vm.data = [
      [15],
      [10],
      [100]
    ];
    vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    vm.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
    
    /** end of chart configuration */

    
    vm.tellTales = [];
    
    vm.updateVehicleInfo = function( info) {
      vm.currLabel = vm.currLabel+1;
      
      if (vm.currLabel % 5 === 0) {  
        vm.labels.push(vm.currLabel);
        vm.data[0].push( 12.5 + 5*Math.random() );
        vm.data[1].push( 10 + 5*Math.random() );
        vm.data[2].push( 50 + 50*Math.random() );
      }
      console.log(vm.data);
	    
	    vm.vhName = info.name;
	    vm.heartbeatTimestamp = info.timestamp;
	    vm.vhSpeed = info.speed;
	    var position = { longitude: vm.vhPosition.lng , latitude: vm.vhPosition.lat };
	    if ( undefined !== info.position) {
	      position = JSON.parse(info.position);
	      vm.vhPosition.lat = position.latitude;
	      vm.vhPosition.lng = position.longitude;
	    }
	    vm.dashboard_speed = info.dashboard_speed;
	    vm.dashboard_bat_soc = info.dashboard_bat_soc;
	    vm.analyses_estimated_range_inservice = info.analyses_estimated_range_inservice;
	    vm.analyses_estimated_time_inservice = info.analyses_estimated_time_inservice;
	
	    
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
