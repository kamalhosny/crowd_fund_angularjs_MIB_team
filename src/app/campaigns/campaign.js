angular.module('crowdFundApp').controller('campaignsController',
 function($scope, CampaignService, $sce) {

   $scope.addCampaign = function(){
     CampaignService.createCampaign($scope.campaign)
     .then(function(success){
       console.log('campaign added successfully')
     }, function (error) {
       console.log(error)
     }
   )};
   CampaignService.getCampaigns().then(
     function(success){
       $scope.campaigns = success.data,
       console.log('got campaigns successfully')
     },
     function(error){
       console.log('failed to get data from the server')
     })

  CampaignService.getCampaign().then(
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
      console.log('failed to get data from the server');
    });
});
