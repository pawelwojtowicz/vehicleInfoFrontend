var app = angular.module("vehicleInfoPage", [ "leaflet-directive" , "angular-websocket" ]);



app.service( 'backendStreamService', ["$websocket" , function($websocket) {
	var vm = this;
	vm.listeners = [];
	vm.connStateListener = [];

	var url = "ws://" + location.host +"/webfeed";
	console.log(url);

	var dataStream = $websocket(url);

	dataStream.onMessage(message , function(message) {
		var vhInfo = JSON.parse(message);
		vm.listeners.forEach( function(callback) {
			callback(vhInfo);		
		});	
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

app.controller( 'speedController' , ['backendStreamService', function(backendStreamService){

}]);



