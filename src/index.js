angular.module('crowdFundApp', ['ng-token-auth', 'ipCookie', 'ui.router', 'yaru22.angular-timeago', 'toaster', 'angularPayments'])
  .config(function($authProvider, $stateProvider, $locationProvider, CONFIG, $urlRouterProvider) {
    $authProvider.configure([{
      default: {
        apiUrl: CONFIG.apiUrl
      }
    }, {

      admin: {
        apiUrl: CONFIG.apiUrl,
        signOutUrl: '/admin_auth/sign_out',
        emailSignInPath: '/admin_auth/sign_in',
        passwordResetPath: '/admin_auth/password',
        passwordUpdatePath: '/admin_auth/password',
        tokenValidationPath: '/admin_auth/validate_token'
      }
    }]);
    $locationProvider.html5Mode(true);
    $stateProvider.state({
      name: 'landing',
      url: '/',
      templateUrl: 'app/views/landing/landing.html'
    });
    $stateProvider.state({
      name: 'sign_in',
      url: '/sign_in',
      templateUrl: 'app/views/sessions/session_sign_in.html'
    });
    $stateProvider.state({
      name: 'sign_up',
      url: '/sign_up',
      templateUrl: 'app/views/sessions/session_sign_up.html'
    });
    $stateProvider.state({
      name: 'admin_sign_in',
      url: '/admins/sign_in',
      templateUrl: 'app/views/sessions/session_admin_sign_in.html'
    });
    $stateProvider.state({
      name: 'campaigns',
      url: '/campaigns',
      templateUrl: 'app/views/campaigns/campaign.index.html',
      controller: 'campaignsIndex'
    })
    $stateProvider.state({
      name: 'campaigns_create',
      url: '/campaigns/new',
      templateUrl: 'app/views/campaigns/campaign.new.html',
      controller: 'campaignNew',
      resolve: {
        resolvedUser: function($auth, $state, validationService) {
          validationService.authenticateDefault($auth, $state)
        }
      },
    });
    $stateProvider.state({
      name: 'campaign_show',
      url: '/campaigns/:id',
      templateUrl: 'app/views/campaigns/campaign.show.html',
      controller: 'campaignShow'
    });
    $stateProvider.state({
      name: 'admin_campaign',
      url: '/admins/campaigns',
      templateUrl: 'app/views/admin/admin.campaign.html',
      controller: 'adminCampaignCtrl',
      resolve: {
        resolvedUser: function($auth, $state, validationService) {
          validationService.authenticateAdmin($auth, $state)
        },
      },
    });

    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
      name: 'user_profile_show',
      url: '/users/:id',
      templateUrl: 'app/views/users/user_profile.html',
      controller: 'userShow'
    });
    $stateProvider.state({
      name: 'user_profile_edit',
      url: '/users/edit/:id',
      templateUrl: 'app/views/users/edit_profile.html',
      controller: 'userEdit'
    });
    $stateProvider.state({
      name: 'payment_form',
      url: '/campaigns/:id/payment',
      templateUrl: 'app/views/payment/payment.html',
      controller: 'payment',
      resolve: {
        resolvedUser: function($auth, $state, validationService) {
          validationService.authenticateDefault($auth, $state)
        }
      },
    });
  });
