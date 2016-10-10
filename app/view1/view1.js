'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$interval', function ($scope, $interval) {
        $scope.cardRow = [
            {name: 'Drilling Heat', color: 'white', value: 0},
            {name: 'Drilling Speed', color: 'white', value: 0},
            {name: 'Milling Heat', color: 'white', value: 0},
            {name: 'Milling Speed', color: 'white', value: 0}
        ];
        $scope.type = 'line';
        $scope.chartRow = [
            {
                name: 'Chart1',
                type: 'bar',
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                series: ['Series A'],
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                datasetOverride: [{yAxisID: 'y-axis-1'}],
                options: {
                    animation: false,
                    scales: {
                        yAxes: [
                            {
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'

                            }]
                    }
                }
            },
            {
                name: 'Chart2',
                type: 'line',
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                series: ['Series A'],
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                datasetOverride: [{yAxisID: 'y-axis-1'}],
                options: {
                    animation: false,
                    scales: {
                        yAxes: [
                            {
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'

                            }]
                    }
                }
            }
            //  {name: 'Chart1',descr:'irgendein Text 3'},
            //  {name: 'Wert x',descr:'blaaaa'}
        ];

        function update() {
            for (var i = 0; i < $scope.cardRow.length; i++) {
                $scope.cardRow[i].value = Math.round((Math.random() * 10) * 10);
                var value = $scope.cardRow[i].value;
                switch (true) {
                    case (value > 80):
                        $scope.cardRow[i].color = 'red';
                        break;
                    case (value > 60):
                        $scope.cardRow[i].color = 'orange';
                        break;
                    case (value > 40):
                        $scope.cardRow[i].color = 'yellow';
                        break;
                    default:
                        $scope.cardRow[i].color = 'green';
                        break;
                }
            }
            for (var y = 0; y < $scope.chartRow.length; y++) {
                for (var z = 0; z < $scope.chartRow[y].data.length; z++) {
                    $scope.chartRow[y].data[z] = $scope.chartRow[y].data[z + 1];
                }
                $scope.chartRow[y].data[z -1] = Math.round((Math.random() * 10) * 10);
            }
        }

        $interval(update, 1000);
//erstes Chart
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
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