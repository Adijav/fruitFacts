(function(){
	angular.module("fruitFacts")
	.controller("ListController",["$scope","QuizMetrics","DataService",ListController]);

	/* Controller for the fruit list */
	function ListController($scope, QuizMetrics, DataService) {
		$scope.data = DataService.fruitsData;
		$scope.activeFruit = {};
		$scope.changeActiveFruit = changeActiveFruit;
		$scope.search = "";
		$scope.QuizMetrics = QuizMetrics;
		$scope.activateQuiz = activateQuiz;

		/* Function to add active fruit details into activeFruit object */
		function changeActiveFruit(index){
			$scope.activeFruit = index;
		}

		/* Function to hide list view */
		function activateQuiz(){
			QuizMetrics.changeState("quiz", true);
		}
	};
})();