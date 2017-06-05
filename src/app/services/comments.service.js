(function(){
  angular.module('crowdFundApp').factory('CommentsService', function($http, $stateParams, CONFIG) {
    var base_url = CONFIG.apiUrl + '/campaign';
    return {
      getComments: function() {
        return $http.get(base_url + "/" + $stateParams.id + '/comments.json');
      },
      createComment: function(data) {
        return $http.post(base_url + "/" + $stateParams.id + '/comments.json', data);
      },
      updateComment: function(id, data) {
        return $http.put(base_url + "/" + $stateParams.id + "/comments/" + id + ".json", data);
      },
      deleteComment: function(id) {
        return $http.delete(base_url + "/" + $stateParams.id + "/comments/" + id + ".json");
      },
    }
  })

}).call(this)
