angular.module('crowdFundApp').factory('UserService', function($http, $stateParams, CONFIG){

  var base_url = CONFIG.apiUrl + '/users/' ;

  return {
    getUser: function() {
      return $http.get(base_url + $stateParams.id + '.json');
    },
    updateUser: function(data){

      return $http.patch(base_url + $stateParams.id + '.json', data);
    },
    deleteUser: function() {
      return $http.delete(base_url + $stateParams.id + '.json');
    },

  }
})
