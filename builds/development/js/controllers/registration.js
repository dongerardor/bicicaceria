myApp.controller('RegistrationController', 
  function($scope, $firebaseAuth, $location, Authentication) {

  var ref = new Firebase('https://bikehunting.firebaseio.com/');
  var auth = $firebaseAuth(ref);
  
  $scope.login = function() {
    Authentication.login($scope.user)
    .then(function(user) {
      $location.path('/groups');
    }).catch(function(error) {
      var msg = "Hubo un error";
      switch (error.code){
        case "INVALID_USER":
          msg = "Usuario no válido";
          break;
        case "INVALID_PASSWORD":
          msg = "Clave incorrecta";
          break;
        default:
          break;
      }
      $scope.message = msg;
    });
  }; //login

  $scope.register = function() {
    Authentication.register($scope.user)
      .then(function(user) {
        Authentication.login($scope.user);
        $location.path('/groups');
      }).catch(function(error) {
        $scope.message = error.message;
      });
  }; //register

}); //RegistrationController