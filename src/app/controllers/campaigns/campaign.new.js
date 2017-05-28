angular.module('crowdFundApp').controller('campaignNew',
  function ($scope, CampaignService, $auth,toaster) {
    $scope.addCampaign = function () {
      CampaignService.createCampaign($scope.campaign)
        .then(function (success) {
          toaster.pop('success','Congratulations!, you added a new campaign')
          console.log('campaign added successfully')
        }, function (error) {
          console.log(error)
        })
    };
  });
