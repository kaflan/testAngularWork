function loadTask($http){
    return{
      query:function(value){
          return $http({
            method: "GET",
            url : 'http://dev.efarmer.mobi:8080/RESTService/RESTService/preview/document?uri='+value,
            withCredentials: false
          }).then(function(res){
            return res.data
        });
      }
    };
}
angular.module('app').factory('loadTask', loadTask);
