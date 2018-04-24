(function () {
    'use strict';
var app = angular.module('vehicleInfoPage');

app.service( 'tellTalesService', [ function() {
  var vm = this;
  
  var statusMapping = new Map();
  statusMapping.set(0x00, "off");
  statusMapping.set(0x01, "Cond. Red");
  statusMapping.set(0x02, "Cond. Yellow");
  statusMapping.set(0x03, "Cond. Info");
  statusMapping.set(0x07, "n/a");
  
  vm.getStatusText = function ( status ) {
    console.log("we check the state" + status);
    var statusTxt = statusMapping.get(status);
    if (null === statusTxt) {
      statusTxt = "undef";	
    }
    return statusTxt;
  }; 
  
  vm.getTellTalesStructure = function () {
    var emptyStatus = "***";
    vm.id2TellTaleDesc = new Map();
    vm.id2TellTaleDesc.set(1 , { name:"Cooling, air conditioning", status : emptyStatus} );
    vm.id2TellTaleDesc.set(2 , { name:"High beam, main beam", status : emptyStatus} );
    vm.id2TellTaleDesc.set(3 , { name:"Low beam, dipped beam", status : emptyStatus} );
    vm.id2TellTaleDesc.set(4 , { name:"Turn signals", status : emptyStatus} );
    vm.id2TellTaleDesc.set(5 , { name:"Hazard warning", status : emptyStatus} );
    vm.id2TellTaleDesc.set(6 , { name:"Provision for the disabled or handicapped persons", status : emptyStatus} );
    vm.id2TellTaleDesc.set(7 , { name:"Parking Brake", status : emptyStatus} );
    vm.id2TellTaleDesc.set(8 , { name:"Brake failure/brake system malfunction", status : emptyStatus} );
    vm.id2TellTaleDesc.set(9 , { name:"Hatch open", status : emptyStatus} );
    vm.id2TellTaleDesc.set(10 , { name:"Fuel level", status : emptyStatus} );
    vm.id2TellTaleDesc.set(11 , { name:"Engine coolant temperature", status : emptyStatus} );
    vm.id2TellTaleDesc.set(12 , { name:"Battery charging condition", status : emptyStatus} );
    vm.id2TellTaleDesc.set(13,  { name:"Engine oil", status : emptyStatus} );
    vm.id2TellTaleDesc.set(14 , { name:"Position lights,side lights", status : emptyStatus} );
    vm.id2TellTaleDesc.set(15 , { name:"Front fog light", status : emptyStatus} );
    vm.id2TellTaleDesc.set(16 , { name:"Rear fog light" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(17 , { name:"Park Heating" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(18 , { name:"Engine / Mil indicator" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(19 , { name:"Service, call for maintenance" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(20 , { name:"Transmission fluid temperature" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(21 , { name:"Transmission failure/malfunction" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(22,  { name:"Anti-lock brake system failure" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(23 , { name:"Worn brake linings" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(24 , { name:"Windscreen washer fluid/windshield washer fluid" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(25 , { name:"Tire failure/malfunction" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(26 , { name:"Malfunction/general failure " , status : emptyStatus} );
    vm.id2TellTaleDesc.set(27 , { name:"Engine oil temperature " , status : emptyStatus} );
    vm.id2TellTaleDesc.set(28 , { name:"Engine oil level" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(29 , { name:"Engine coolant level" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(30 , { name:"Steering fluid level" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(31 , { name:"Steering failure" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(32 , { name:"Height Control (Levelling)" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(33 , { name:"Retarder" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(34 , { name:"Engine Emission system failure (Mil indicator)" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(35 , { name:"ESC indication" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(36 , { name:"Brake lights" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(37 , { name:"Articulation" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(38 , { name:"Stop Request" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(39 , { name:"Pram request" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(40 , { name:"Bus stop brake" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(41 , { name:"AdBlue level" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(42 , { name:"Raising" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(43 , { name:"Lowering" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(44 , { name:"Kneeling" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(45 , { name:"Engine compartment temperature" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(46 , { name:"Auxillary air pressure" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(47 , { name:"Air filter clogged" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(48 , { name:"Fuel filter differential pressure" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(49 , { name:"Seat belt" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(50 , { name:"EBS" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(51 , { name:"Lane departure indication" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(52,  { name:"Advanced emergency braking system" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(53 , { name:"ACC" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(54 , { name:"Trailer connected" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(55 , { name:"ABS Trailer 1,2" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(56 , { name:"Airbag" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(57 , { name:"EBS Trailer 1,2" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(58,  { name:"Lowering" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(59 , { name:"Tachograph indication" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(60 , { name:"Lane departure warning switched off" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(61 , { name:"Engine emission filter (Soot Filter)" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(62 , { name:"Electric motor failures" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(63 , { name:"AdBlue tampering" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(64 , { name:"Multiplex System" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(65 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(66 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(67,  { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(68 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(69 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(70 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(71 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(72 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(73,  { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(74 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    vm.id2TellTaleDesc.set(75 , { name:"Reserved for FMS-Standard" , status : emptyStatus} );
    
    return vm.id2TellTaleDesc;
  };
}]);

}());
