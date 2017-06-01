angular.module('crowdFundApp').factory('PaymentService', function($http, CONFIG,  $stateParams) {
  var base_url = CONFIG.apiUrl+"/campaign/" ;
  return {
    postCharge: function(data) {
      return $http.post(base_url +$stateParams.id + "/charges.json", data);
    }
  }
})
