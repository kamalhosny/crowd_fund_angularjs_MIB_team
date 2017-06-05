(function(){
  angular.module('crowdFundApp').controller('landing',
  function($scope, CampaignService, $sce, $auth) {
    $scope.carouselTimer = 5000;
    $scope.finishedCampaigns=[];
    $scope.unFinishedCampaigns=[];
    CampaignService.getCampaigns().then(
      function(success) {
        $scope.campaigns = success.data;
        for(var i=0; i<$scope.campaigns.length; i++){
          $scope.campaigns[i].created_at=new Date($scope.campaigns[i].created_at).toDateString()
          if($scope.campaigns[i].status===true){
            $scope.finishedCampaigns.push($scope.campaigns[i]);
          }else{
            $scope.unFinishedCampaigns.push($scope.campaigns[i]);
          }
        }
        $scope.unFinishedCampaigns=$scope.unFinishedCampaigns.slice(0,3);
      }
    )


  });
}).call(this);
