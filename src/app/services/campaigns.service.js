angular.module('crowdFundApp').factory('CampaignService', function($http, $stateParams, CONFIG) {

  base_url = CONFIG.apiUrl + '/campaign';

  return {
    getCampaigns: function() {
      return $http.get(base_url + '.json');
    },
    createCampaign: function(data) {
      return $http.post(base_url + '.json', data);
    },
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
