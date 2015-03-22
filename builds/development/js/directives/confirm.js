myApp.directive('confirmationNeeded', function() {
  return {
    priority: 1,
    terminal: true,
    link: function(scope, element, attr) {
      var msg = attr.confirmationNeeded || "Estás seguro que quieres borrar este item?";
      var clickAction = attr.ngClick;
      element.bind('click', function() {
        if(window.confirm(msg)) {
          scope.$eval(clickAction);
        }
      });
    }
  };
});