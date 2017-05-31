(function(){
  angular.module('alMakinah').controller('landing',
  function($scope, CampaignService, $sce, $auth) {
    CampaignService.getCampaigns().then(
      function(success) {
        $scope.campaigns = success.data;
      }
    )
  });
  
}).call(this);
