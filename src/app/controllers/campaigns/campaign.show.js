(function(){
  angular.module('crowdFundApp').controller('campaignShow',
  function($scope, CampaignService, $sce, $auth, $stateParams, $state, Upload, CONFIG) {
    $scope.url = CONFIG.apiUrl;
    CampaignService.getCampaign().then(
      function(success) {
        $scope.campaign = success.data
        if ($scope.campaign.video) {
          $scope.youTubeVideoUrl = $scope.campaign.video.replace('.com/watch?v=', ".com/embed/");
          $scope.video = $sce.trustAsResourceUrl($scope.youTubeVideoUrl);
        }

        $scope.achieved = $scope.campaign.achieved;
        $scope.achievedPercentage = String($scope.campaign.achieved * 100 / $scope.campaign.goal) + '%';
      },
      function(err) {
        console.log('failed to get data from the server');
      });
    $scope.removeCampaign = function() {
      CampaignService.deleteCampaign($stateParams.id)
        .then(function(success) {
          console.log(success)
        }, function(error) {
          console.log(error);
        })
    };
    $scope.editVideoUrl = function() {
      CampaignService.updateCampaign($stateParams.id, $scope.campaign).then(
        function(success) {
          $scope.campaign = success.data;
          $state.reload();
        },
        function(error) {
          console.log(error);
        }
      )
    }
  });
}).call(this);
