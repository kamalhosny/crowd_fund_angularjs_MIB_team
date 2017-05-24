angular.module('crowdFundApp').controller('campaignsController',
 function($scope, CampaignService) {

   $scope.addCampaign = function(){
     CampaignService.createCampaign($scope.campaign
     ).then(function(success){
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
})
