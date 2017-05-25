angular.module('crowdFundApp').controller('campaignController', function($scope, $http, $stateParams, $sce) {
  $http.get('http://localhost:3000/campaign/' + $stateParams.id + '.json').then(
    function(success) {
      $scope.campaign = success.data

      if ($scope.campaign.video) {
        $scope.youTubeVideoUrl = $scope.campaign.video.replace('.com/watch?v=', ".com/embed/");
        $scope.video = $sce.trustAsResourceUrl($scope.youTubeVideoUrl);
      }

      $scope.achieved=$scope.campaign.achieved;
      $scope.achievedPercentage = String($scope.campaign.achieved * 100 / $scope.campaign.goal) + '%';
    },
    function(err) {
      console.log(err);
    });
});
