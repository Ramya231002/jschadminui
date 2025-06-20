var app = angular.module('jschApp', []);

app.controller('MainController', function($scope) {
  $scope.currentPage = '';

  $scope.goTo = function(page) {
    if (page === 'common') {
      $scope.currentPage = 'views/common-details.html';
    } else if (page === 'ongoing') {
      $scope.currentPage = 'views/ongoing-project.html';
    } else if (page === 'available') {
      $scope.currentPage = 'views/available-projects.html';
    } else if (page === 'gallery') {
      $scope.currentPage = 'views/gallery.html';
    }
  };
});
