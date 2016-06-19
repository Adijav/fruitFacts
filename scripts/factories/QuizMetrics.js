/* Factory to share data between controllers */

(function(){
	angular.module("fruitFacts")
	.factory("QuizMetrics", ["DataService",QuizMetrics]);

	function QuizMetrics(DataService){
		var quizObject = {
			quizActive: false,
			resultsActive: false,
			correctAnswers: [],
			markQuiz: markQuiz,
			numCorrect: 0,
			changeState: changeState
		};
		return quizObject;

		/* change state to load list/quiz view */
		function changeState(metric, state){
			if(metric === "quiz"){
				quizObject.quizActive = state;
			}else if(metric === "results"){
				quizObject.resultsActive = state;
			}else {
				return false;
			}
		}

		/* check if answer is correct and count number of correct answers */
		function markQuiz(){
			quizObject.correctAnswers = DataService.correctAnswers;
			for (var i = 0; i < DataService.quizQuestions.length; i++) {
				if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
					DataService.quizQuestions[i].correct = true;
					quizObject.numCorrect++;
				}else {
					DataService.quizQuestions[i].correct = false;
				}
			};
		}
	}
})();