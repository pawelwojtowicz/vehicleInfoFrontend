var app = angular.module("vehicleInfoPage", [ "leaflet-directive" , "ngWebsocket" ]);

app.service( 'backendStreamService', ["$websocket" , function() {
	var vm = this;
	vm.listeners = [];
	vm.connStateListener = [];

	var dataStream = $websocket("ws://" + windows.location.host +"/webfeed");

	dataStream.onMessage(message , function(message) {
		var vhInfo = JSON.parse(message);
		vm.listeners.forEach( function(callback) {
			callback(vhInfo);		
		});	
	});

	dataStream.onOpen( function() {
		vm.connStateListener.forEach( function(callback) {
			callback(true);		
		});	

	});

	dataStream.onClose( function() {
		vm.connStateListener.forEach( function(callback) {
			callback(false);		
		});	
	});

	vm.sendData = function(data) {
		dataStream.send(JSON.stringify(data));	
	};

	vm.registerVhInfoListener = function( listener ) {
		vm.listeners.push( listener);	
	};

	vm.registerConnStateListener = function( listener ) {
		vm.connStateListener.push(listener);
	};
}]);




