(function(){
	angular.module("fruitFacts")
	.controller("QuizController",["$scope","QuizMetrics","DataService", QuizController]);

	function QuizController($scope,QuizMetrics,DataService){
		$scope.QuizMetrics = QuizMetrics;
		$scope.DataService = DataService;
		$scope.activeQuestion = 0;
		$scope.questionAnswered = questionAnswered;
		$scope.setActiveQuestion = setActiveQuestion;
		$scope.selectAnswer = selectAnswer;
		$scope.finaliseAnswers = finaliseAnswers;
		$scope.error = false;
		$scope.finalise = false;
		$scope.closeError = closeError;
		$scope.closeFinalize = closeFinalize;

		var totalAnsweredQuestions = 0;

		/* close error message */
		function closeError() {
			$scope.error = false;
		}

		/**/
		function closeFinalize(){
			$scope.finalise = false;
		}

		/* find the next unanswered question */
		function setActiveQuestion(index) {
			if(index === undefined){
				var flag=false;

				var quizLength=DataService.quizQuestions.length-1;

				while(!flag){
					$scope.activeQuestion = $scope.activeQuestion<quizLength?++$scope.activeQuestion:0;

					if($scope.activeQuestion === 0){
						$scope.error = true;
					}

					if(DataService.quizQuestions[$scope.activeQuestion].selected === null) {
						flag=true;
					}
				}
			}
			else{
				$scope.activeQuestion = index;
			}
			
		}


		/* check if current question is answered */
		function questionAnswered() {
			var quizLength = DataService.quizQuestions.length;

			if(DataService.quizQuestions[$scope.activeQuestion].selected !== null) {
				totalAnsweredQuestions++;
				
				if(totalAnsweredQuestions >= quizLength){
					for (var i = 0; i < quizLength; i++) {
						if(DataService.quizQuestions[i].selected === null){
							setActiveQuestion(i);
							return;
						}
					}

					$scope.error = false;
					$scope.finalise = true;
					return;
				}
			}
			$scope.setActiveQuestion();
		}

		/* set selected property of selected question to index */
		function selectAnswer(index){
			DataService.quizQuestions[$scope.activeQuestion].selected = index;
		}	

		/* reset all scope variables */
		function finaliseAnswers(){
			$scope.finalise = false;
			totalAnsweredQuestions = 0;
			$scope.activeQuestion = 0;
			QuizMetrics.markQuiz();
			QuizMetrics.changeState("quiz", false);
			QuizMetrics.changeState("results", true);
		}
	}
})();