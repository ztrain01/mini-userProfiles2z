var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http, $q) {


  this.getUsers = function() {
    var deferred = $q.defer();
    
    $http({
    method: 'GET',
      url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
      deferred.resolve(response.data.data);
    }, function(err) {
      deferred.reject(err);
    });
    
    return deferred.promise;
    
    };
  });
