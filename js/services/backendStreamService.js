(function () {
    'use strict';
var app = angular.module('vehicleInfoPage');

app.service( 'backendStreamService', ["$websocket" , function($websocket) {
	var vm = this;
	vm.vhListlisteners = [];
	vm.vhInfoListeners = [];
	vm.connStateListener = [];

	var url = "ws://" + location.host +"/webfeed";
	var dataStream = $websocket(url);

	dataStream.onMessage( function(message) {
	  console.log(message);
		var command = JSON.parse(message.data);


		if ( 'vhListUpdate' === command.type) {
			vm.vhListlisteners.forEach( function(callback) {
				callback(command.data);		
			});		
		} else if ('vhInfoUpdate' === command.type) {
			vm.vhInfoListeners.forEach( function(callback) {
				callback(command.data);
			});
		}
	});


	dataStream.onOpen( function() {
		console.log("connection opened");
		vm.connStateListener.forEach( function(callback) {
			callback(true);		
		});	

	});

	dataStream.onClose( function() {
		vm.connStateListener.forEach( function(callback) {
			callback(false);		
		});	
	});

	dataStream.onError( function(error) {
		console.log("Error" +JSON.stringify(error));	
	});

	vm.sendData = function(data) {
		dataStream.send(JSON.stringify(data));	
	};

	vm.registerVhListListener = function( listener ) {
		vm.vhListlisteners.push( listener);	
	};
	
	vm.registerVhInfoListeners = function( listener ) {
	  vm.vhInfoListeners.push( listener);
	};

	vm.registerConnStateListener = function( listener ) {
		vm.connStateListener.push(listener);
	};
}]);

}());
