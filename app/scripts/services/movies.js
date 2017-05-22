'use strict';

/**
 * @ngdoc service
 * @name moviesApp.Movies
 * @description
 * # Movies
 * Factory in the moviesApp.
 */
angular.module('moviesApp')
  .factory('Movies', function ($http) {

    //var moviesRequest = null;

    return {
      load: function() {
        return $http.get('/movies.json');
      },
      find: function(id, componentList) {
        for (var i in componentList) {
          var component = componentList[i];
          if (id === component.id) {
            return component;
          }
        }
      }
    };
  });
