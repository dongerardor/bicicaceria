myApp.factory('Countgroups', function($firebase,
  $rootScope, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + '/users/' + 
    $rootScope.currentUser.$id + '/groups');

  var groupsInfo = $firebase(ref);

  var groupsArray = groupsInfo.$asArray();

  groupsArray.$loaded(function(data) {
    $rootScope.howManygroups = groupsArray.length;
  });

  groupsArray.$watch(function(data) {
    $rootScope.howManygroups = groupsArray.length;
  });

  return true;

}); //Countgroups