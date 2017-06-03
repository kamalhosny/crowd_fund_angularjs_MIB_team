(function(){
  angular.module('crowdFundApp').controller('payment',
    function($scope, $http, CONFIG, PaymentService, toaster, $stateParams, CampaignService) {
      debugger
      CampaignService.getCampaign().then(
        function(success) {
          $scope.campaign = success.data
        }
      )
      // Stripe Response Handler
      // Stripe.setPublishableKey(env('PUBLISHABLE_KEY'))
      Stripe.setPublishableKey('pk_test_xTQpXGarHpdw1K62JcYxZ1ll')
      $scope.stripeCallback = function(code, result) {
        debugger
        if (result.error) {
          toaster.pop('error', result.error.message);
        } else {
          var amountCents = $scope.amount * 100;
          // Simple POST request example (passing data) :
          PaymentService.postCharge({
            id: result.id,
            stripeEmail: $scope.user.email,
            amount: amountCents,
          }).then(
            function(success) {
              console.log(success);
              toaster.pop('success', 'your transaction is done successfully');
              $scope.campaign.achieved += $scope.amount;
              if ($scope.campaign.achieved >= $scope.campaign.goal) {
                CampaignService.updateCampaign($stateParams.id, {
                  campaign: {
                    status: true,
                    achieved: $scope.campaign.achieved
                  }
                })
              } else {
                CampaignService.updateCampaign($stateParams.id, {
                  campaign: {
                    achieved: $scope.campaign.achieved
                  }
                })
              }
            },
            function(error) {
              console.log(error);
              toaster.pop('error', 'Sorry, something gone wrong');
            });
        }
      };
    });

}).call(this);
