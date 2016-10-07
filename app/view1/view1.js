'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$interval', function($scope,$interval) {
  $scope.cardRow = [
    {name: 'Temp1', descr: 'irgendein Text 1', value:0},
    {name: 'Temp2', descr: 'irgendein Text 2', value:0},
    {name:'Temp3',descr:'irgendein Text 3', value:0},
    {name: 'Wert x',descr:'blaaaa', value:0}
  ];

  $scope.chartRow = [
    {name: 'Chart1', descr: 'irgendein Text 1'},
  //  {name: 'Chart1', descr: 'irgendein Text 2'},
  //  {name: 'Chart1',descr:'irgendein Text 3'},
  //  {name: 'Wert x',descr:'blaaaa'}
  ];


  function update() {
      for(var i=0;i< $scope.cardRow.length;i++){
          $scope.cardRow[i].value=Math.round((Math.random() * 10) * 10);

      }
      //for(var i=0;i<10;i++){
            for(var z=0;z<$scope.data.length;z++){
                $scope.data[z]=$scope.data[z+1];
            }
          $scope.data[$scope.data.length-1]=Math.round((Math.random() * 10) * 10);
    //  }
    //$scope.randomNumber = Math.round((Math.random() * 10) * 10);
  }
  $interval(update, 1000);

  $scope.labels = [1,2,3,4,5,6,7,8,9,10];
  $scope.series = ['Series A'];
  $scope.data = [    0, 0, 0, 0, 0, 0, 0,0,0,0];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
      animation: false,

    scales: {
      yAxes: [
        {

          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',

        }]
    }
  };
  //the following is NOT WORKING!
/*$scope.colours=[{ // default
        fillColor: "rgba(224, 108, 112, 1)",
        strokeColor: "rgba(207,100,103,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,0.8)"
    }];*/
}]);