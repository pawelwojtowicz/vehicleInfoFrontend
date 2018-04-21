(function () {
    'use strict';
var app = angular.module("vehicleInfoPage", [ "ngMaterial","angular-websocket" , "ngRoute" ]);

app.config(['$routeProvider' , function($routeProvider) {
	$routeProvider.
	when('/baseinfo', {
		templateUrl: 'partials/baseInfo.html',
		controller: 'vehicleInfoController',
		controllerAs: 'vm',
		bindToController: true,
		replace: true
	}).
	when('/srvstats', {
		templateUrl: 'partials/srvStats.html',
		controller: 'srvStatsController',
		controllerAs: 'vm',
		bindToController: true,
		replace: true
	}).
	otherwise({
		redirectTo: '/baseinfo'	
	});
}]);
}());




