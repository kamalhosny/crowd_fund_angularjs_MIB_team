(function(){
  angular.module('crowdFundApp').factory('validationService', function($auth, $state) {
  return {
    authenticateDefault: function($auth, $state) {
      $auth.validateUser().then(function(user) {
        if (user.configName === 'default') {
          return user;
        } else {
          $state.go('dashboard_layout.landing');
        }
      }, function(_error) {
        $state.go('dashboard_layout.sign_in');
      });
    },
    authenticateAdmin: function($auth, $state) {
      $auth.validateUser().then(function(user) {
        if (user.configName === 'admin') {
          return user;
        } else {
          $state.go('dashboard_layout.admin_sign_in');
        }
      }, function(_error) {
        $state.go('dashboard_layout.admin_sign_in');
      });
    }

  }
});
}).call(this);
