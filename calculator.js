(function(){

	var app = angular.module('myCalculator', []);

	app.controller('CalculatorController', ['$scope', function($scope){

		$scope.distance_options = [10, 50, 100, 1000];
		$scope.current_distance = 100;
		$scope.current_cost = 1.30;

		$scope.mazda_conversion = .049;
		$scope.toyota_conversion = .093;
		$scope.lambo_conversion = .125;
		$scope.f1_conversion = .75;

		$scope.calculate = function(){
			$scope.mazda_consumption = ($scope.current_distance * $scope.mazda_conversion).toFixed(2);
			$scope.toyota_consumption = ($scope.current_distance * $scope.toyota_conversion).toFixed(2);
			$scope.lambo_consumption = ($scope.current_distance * $scope.lambo_conversion).toFixed(2);
			$scope.f1_consumption = ($scope.current_distance * $scope.f1_conversion).toFixed(2);


			$scope.mazda_cost = ( $scope.mazda_consumption * $scope.current_cost).toFixed(2);
			$scope.toyota_cost = ( $scope.toyota_consumption * $scope.current_cost).toFixed(2);
			$scope.lambo_cost = ( $scope.lambo_consumption * $scope.current_cost).toFixed(2);
			$scope.f1_cost = ( $scope.f1_consumption * $scope.current_cost).toFixed(2);
		}

		$scope.calculate();

	}]);

})();
