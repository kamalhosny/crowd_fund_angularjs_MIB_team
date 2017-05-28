angular.module('crowdFundApp').controller('campaignsIndex',
  function($scope, CampaignService, $sce, $auth) {
    CampaignService.getCampaigns().then(
      function(success) {
        $scope.campaigns = success.data;
        console.log($scope.campaigns);
        for (var i = 0; i < $scope.campaigns.length; i++) {
          if ($scope.campaigns[i].video) {
            $scope.campaigns[i].video = $sce.trustAsResourceUrl($scope.campaigns[i].video.replace('.com/watch?v=', ".com/embed/"));
          }
        }
      },
      function(error) {
        console.log('failed to get data from the server')
      });
  });
