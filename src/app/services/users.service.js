angular.module('crowdFundApp').factory('UserService', function($http, $stateParams, CONFIG, Upload){

  var base_url = CONFIG.apiUrl + '/users/' ;

  return {
    getUser: function() {
      return $http.get(base_url + $stateParams.id + '.json');
    },
    updateUser: function(data){
      return Upload.upload({
        url: base_url + $stateParams.id + '.json',
        method: 'put',
        data: data
      })
    },
    deleteUser: function() {
      return $http.delete(base_url + $stateParams.id + '.json');
    },

  }
})

// return $http.patch(base_url + $stateParams.id + '.json', data);
