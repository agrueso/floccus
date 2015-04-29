// public/core.js
var scotchTodo = angular.module('gruDoPadel', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all players and show them
	$http.get('/api/players')
		.success(function(data) {
			$scope.players = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createPlayer = function() {
		$http.post('/api/players', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.players = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a player after checking it
	$scope.deletePlayer = function(id) {
		$http.delete('/api/players/' + id)
			.success(function(data) {
				$scope.players = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}