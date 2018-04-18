(function () {
    'use strict';
    
    var app = angular.module('vehicleInfoPage');
    
    app.controller('vehicleListNaviController',[ 'backendStreamService',function(backendStreamService){
      var vm = this;
    
      vm.menu = [ { caption: "Vehicle1" , vehicleId: "1"} , 
                  { caption: "Vehicle2" , vehicleId: "2"} ,
                  { caption: "Vehicle3" , vehicleId: "3"} ,
                  { caption: "Vehicle4" , vehicleId: "4"} ,
                  { caption: "Vehicle5" , vehicleId: "5"} ];
        
        

      
      vm.showVehicle = function( index ) {
        var menuItem = vm.menu[index];

	var showVhCommand = {
		cmd: "showVh",
		vhId: menuItem.vehicleId 
	};

	backendStreamService.sendData(showVhCommand);
      };


    }]);

}());
