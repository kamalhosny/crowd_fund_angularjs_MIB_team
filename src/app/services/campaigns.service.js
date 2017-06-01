(function() {
  angular.module('crowdFundApp').factory('CampaignService', function($http, $stateParams, CONFIG, Upload) {

  var base_url = CONFIG.apiUrl + '/campaign';

  return {
    getCampaigns: function() {
      return $http.get(base_url + '.json');
    },
    createCampaign: function(data) {
      return Upload.upload({
        url: base_url + '.json',
        method: 'post',
        data: data
      })
    },
    // return $http.post(base_url + '.json', data);
    getCampaign: function() {
      return $http.get(base_url + "/" + $stateParams.id + '.json');
    },
    updateCampaign: function(id, data) {
      return $http.put(base_url + "/" + id + '.json', data);
    },
    deleteCampaign: function(id) {
      return $http.delete(base_url + "/" + id + '.json');
    }
  }
})

}).call(this);
