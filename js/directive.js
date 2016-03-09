function taskDetails(){
    return {
        controller:'TestCtrl',
        controllerAs: 'vm',
        template: '<h2> {{vm.details.operation.name}}: Insecticide input on'+
      "some particular fields <span class='head'>"
      + "{{vm.details.endTime}}</span></h2>"+
"<p><img src='css/fields-icon.png' alt=''> Field: <b>{{vm.details.bbox}}</b></p>"+
"<p><img src='css/Layer-108.png' alt=''> Operation: <b>{{vm.details.operation.name}}</b></p>"+
"<p><img src='css/Shape-4.png' alt=''> Vehicle: <b>{{vm.details.operation.vehicle.vehicleType.name}}</b></p>"+
"<p><img src='css/Vector-Smart-Object.png' alt=''> Materials: <b>{{vm.details.operation.tasks.materials}}</b></p>"+
"<p><img src='css/Vector-Smart-Object2.png' alt=''> From:   <b>{{vm.details.org.name}}</b></p>"+
"<p>Notes:" + '<b> some notes</b></p>'+
"<input type='button' class='button' value='Add task to eFarm Pilot'>",
      link: function(scope, el, attr){
        scope.$watch('vm', function(old, newval){
          console.log(old, newval)
          scope.$applyAsync(old)
        }, true)
      }
    }
}
angular.module('app').directive('taskDetails', taskDetails);
