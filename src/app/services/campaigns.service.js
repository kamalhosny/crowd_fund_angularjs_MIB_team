(function() {
  angular.module('alMakinah').factory('CampaignService', function($http, $stateParams) {

    base_url = "http://localhost:3000" + '/campaign';

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

      // todo but the id and the right URL
      // updateCampaign: function (data, id){
      //   return $http.patch(base_url + id + '.json', data);
      // },
      deleteCampaign: function(id) {
        return $http.delete(base_url + "/" +id+ '.json');
      }
    }
  })

}).call(this);
