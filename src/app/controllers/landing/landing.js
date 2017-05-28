angular.module('crowdFundApp').controller('landing',
  function ($scope, CampaignService, $sce, $auth) {
    CampaignService.getCampaigns().then(
      function (success) {
        $scope.campaigns = success.data;
      }
    )
  });
