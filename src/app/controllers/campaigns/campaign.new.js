(function(){
  angular.module('crowdFundApp').controller('campaignNew',
    function($scope, CampaignService, $auth, toaster) {
      $scope.addCampaign = function() {
        console.log($scope.campaign)
        var data = {
          campaign: {
            title: $scope.campaign.title,
            description: $scope.campaign.description,
            goal: $scope.campaign.goal,
            video: $scope.campaign.video,
            cover_photo: $scope.campaign.cover_photo,
            profile_photo: $scope.campaign.profile_photo,
            description_photo: $scope.campaign.description_photo
          }
        };
        CampaignService.createCampaign(data)
        .then(function(success) {
          toaster.pop('success', 'Congratulations!, you added a new campaign')
          console.log('campaign added successfully')
        }, function(error) {
          console.log(error)
        })
      };
    });
}).call(this);
