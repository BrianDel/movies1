'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('MainCtrl', function ($scope, $http) {

    function successCallback(response){
      for (var row in response.data.rows){
        response.data.rows[row].slug = response.data.rows[row].key.toLowerCase().replace(/ /g,'-');
      }
      $scope.componentList = response.data.rows;
      console.log($scope.componentList);
    }
    function errorCallback(error){
      console.log('Failed to retieve data');
      console.log(error);
    }

    var url = 'http://127.0.0.1:5984/componentsdb/_design/components/_view/allcomponents';
    $http.get(url).then(successCallback, errorCallback);


    $scope.closed = 'false';
    //$scope.componentList=componentList;
    $scope.component = {
      title: '',
      description:'',
      imagesrc:'/images/component.png',
      team:'',
      slug:''
    };

    $scope.validateTitle = function() {

      if($scope.component.title.length > 0) {
         console.debug($scope.component.title);
      } else {
        window.alert('Title is required.');
      }

    };

    $scope.addComponent = function() {
      console.log($scope.component);
      console.log($scope.componentList);
      $scope.componentList.push(angular.copy($scope.component));
      $http({
          url: 'http://127.0.0.1:5984/evidence',
          method: 'PUT',
          withCredentials: false,
          headers: {
          },
          data: {
              'key':'value'
           }
      });
    };

    $scope.checkTeam = function() {
      if ($scope.component.team === '') {
        window.alert('Team required');
      }
    };
    $scope.checkDescription = function() {
      if ($scope.component.description === '') {
        window.alert('Description required');
      }
    };

  });
