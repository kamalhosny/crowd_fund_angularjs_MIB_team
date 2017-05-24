angular.module('crowdFundApp').factory('CampaignService', function($http, CONFIG){

    base_url = CONFIG.apiUrl + '/campaign.json';

    return {
      getCampaigns: function() {
        return $http.get(base_url);
      },
      createCampaign: function(data){
        return $http.post(base_url, data);
      },
      // todo but the id and the right URL
      // updateCampaign: function(data, id){
      //   return $http.patch(base_url + id + '.json', data);
      // },
      // deleteCampaign: function(id){
      //   return $http.delete(base_url + id + '.json');
      // }
    }
})
