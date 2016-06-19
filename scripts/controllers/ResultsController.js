(function(){
	angular.module("fruitFacts")
	.controller("ResultsController",["$scope","QuizMetrics","DataService", ResultsController]);

	function ResultsController($scope, QuizMetrics, DataService){
		$scope.QuizMetrics = QuizMetrics;
		$scope.DataService = DataService;
		$scope.activeQuestion = 0;
		$scope.getAnswerClass = getAnswerClass;
		$scope.setActiveQuestion = setActiveQuestion;
		$scope.resetVariables = resetVariables;

		/* add bckground color to the selected option */
		function getAnswerClass(index) {
			if(index === QuizMetrics.correctAnswers[$scope.activeQuestion]){
				return "bg-success";
			}
			else if(index === DataService.quizQuestions[$scope.activeQuestion].selected){
				return "bg-danger";
			}
		}

		/* Set active question*/
		function setActiveQuestion(index) {
			$scope.activeQuestion = index;
		}

		/* reset variables */
		function resetVariables() {
			QuizMetrics.changeState("results", false);
			QuizMetrics.numCorrect = 0;

			for (var i = 0; i < DataService.quizQuestions.length; i++) {
				DataService.quizQuestions[i].selected = null;
				DataService.quizQuestions[i].correct = null;
			};
		}
	}
})();