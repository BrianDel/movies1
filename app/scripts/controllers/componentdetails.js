'use strict';

angular.module('moviesApp').controller(
  'ComponentViewCtrl',function($scope, $routeParams){

      var slug = $routeParams.slug;
      console.log('-slug-' );
      console.log(slug);
      var componentList = $scope;
console.log('-componentList-' );
console.log(componentList);
      for (var index in componentList) {
        console.log('index: ' + index);

        var component = componentList[index];

        if (component.slug === slug) {
          $scope.component = component;
          console.log('log component ' + $scope.component);
          break;
        }
      }

});
