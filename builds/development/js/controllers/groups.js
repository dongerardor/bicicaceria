myApp.controller('groupsController',
  function($scope, $rootScope, $firebase,
    Countgroups, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + '/users/' + 
    $rootScope.currentUser.$id + '/groups');

  var groupsInfo = $firebase(ref);
  var groupsObj = groupsInfo.$asObject();

  groupsObj.$loaded().then(function(data) {
    $scope.groups = data;
  }); //make sure groups data is loaded


  $scope.addgroup = function() {
    groupsInfo.$push({
      name: $scope.groupname,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $scope.groupname='';
    });
  }; //addgroup

  $scope.deletegroup = function(key) {
    groupsInfo.$remove(key);
  }; //deletegroup


}); //groupsController