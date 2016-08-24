(function(){
  angular
    .module('custom.MyDirective.custom-directive', [])
    .directive('customDirective', customDirective);

    function customDirective(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/custom-directive.html',
        scope: { },
        controller: directiveController,
        controllerAs: 'directiveController'
      };
      return directive;
}
directiveController.$inject = [];
function directiveController() {
console.log('hit');
}
})();
