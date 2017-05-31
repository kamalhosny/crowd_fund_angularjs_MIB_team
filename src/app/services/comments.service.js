(function(){
  angular.module('alMakinah').factory('CommentsService', function($http, $stateParams) {
  base_url = "http://localhost:3000"+ '/campaign';
  return {
    getComments: function() {
      return $http.get(base_url + "/" + $stateParams.id + '/comments.json');
    },
    createComment: function(data) {
      return $http.post(base_url + "/" + $stateParams.id + '/comments.json', data);
    }
  }
})

}).call(this)
