'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.cardRow = [
    {name: 'Temp1', descr: 'irgendein Text 1'},
    {name: 'Temp2', descr: 'irgendein Text 2'},
    {name:'Temp3',descr:'irgendein Text 3'},
    {name: 'Wert x',descr:'blaaaa'}
  ];

  $scope.chartRow = [
    {name: 'Chart1', descr: 'irgendein Text 1'},
    {name: 'Chart1', descr: 'irgendein Text 2'},
    {name: 'Chart1',descr:'irgendein Text 3'},
    {name: 'Wert x',descr:'blaaaa'}
  ];


  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }]
    }
  }


}]);