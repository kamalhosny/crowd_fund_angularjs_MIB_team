angular.module('crowdFundApp').controller('adminCampaignCtrl',
  function($scope, CampaignService, $auth) {
    CampaignService.getCampaigns().then(
      function(success) {
        $scope.campaigns=success.data;
      },
      function(error) {
      }
    )
    $scope.removeCampaign = function(id) {
      CampaignService.deleteCampaign(id).then(
        function(success) {
          var i = $scope.campaigns.findIndex(function(campaign) {
            return id === campaign.id;
          });
          $scope.campaigns.splice(i, 1);
        },
        function(error) {
        }
      )
    }

  });
