'use strict';

/**
 * @ngdoc service
 * @name moviesApp.Components
 * @description
 * # Components
 * Factory in the moviesApp.
 */
angular.module('moviesApp')
  .factory('Components', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
