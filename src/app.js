var app = angular.module('jschApp', []);

app.controller('MainController', function($scope) {
  $scope.currentPage = '';

  $scope.goTo = function(page) {
    if (page === 'common') {
      $scope.currentPage = 'pages/views/common-details.html';
    } else if (page === 'ongoing') {
      $scope.currentPage = 'pages/views/ongoing-project.html';  // ✅ no "s"
    } else if (page === 'available') {
      $scope.currentPage = 'pages/views/available-projects.html';
    } else if (page === 'gallery') {
      $scope.currentPage = 'pages/views/gallery.html';
    }
  };
});
