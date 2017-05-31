angular.module('crowdFundApp').factory('validationService', function($auth, $state) {
  return {
    authenticateDefault: function($auth, $state) {
      $auth.validateUser().then(function(user) {
        if (user.configName === 'default') {
          return user;
        } else {
          $state.go('landing');
        }
      }, function(_error) {
        $state.go('sign_in');
      });
    },
    authenticateAdmin: function($auth, $state) {
      $auth.validateUser().then(function(user) {
        if (user.configName === 'admin') {
          return user;
        } else {
          $state.go('admin_sign_in');
        }
      }, function(_error) {
        $state.go('admin_sign_in');
      });
    }

  }
});
