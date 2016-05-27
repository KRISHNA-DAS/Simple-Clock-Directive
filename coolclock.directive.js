(function () {
    'use strict'; 
    angular
    .module('clockApp')
 .directive('coolClock',coolClock);
 coolClock.$inject=['$interval'];
 function coolClock($interval) {
    return {
    restrict: 'EA',
    replace : true,
    templateUrl:'coolclock.template.html',
      link: link
    };
 
function link(scope, element, attrs) {
   var timeoutId,seconds,minutes,hours,time;
   function getValues(){
     time=new Date();
     seconds=time.getSeconds()*6;
     minutes=time.getMinutes()*6;
     hours=time.getHours()*30;
       assignValues();
   }
   
 
function assignValues() {
 scope.sectransform = 'rotate('+seconds+'deg)';
 scope.mintransform = 'rotate('+minutes+'deg)';
 scope.hourtransform = 'rotate('+hours+'deg)';
    }
 
     element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    timeoutId = $interval(function() {
      getValues();
    }, 1000);
   
   } 
  }
})();