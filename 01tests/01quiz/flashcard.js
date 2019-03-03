var currentQuestion = 0;
var totQuestions = questions.length;

var pageone = document.getElementById('pageone');
var questionEl = document.getElementById('question');
var answer = document.getElementById('answer');
var nextButton = document.getElementById('nextButton');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = 'Question ' + (questionIndex + 1) + ': ' + q.question + '\n';
    answer.textContent = 'Question ' + (questionIndex + 1) + ': ' + q.answer + '\n';
};

function loadNextQuestion () {

    window.location.href = '#pageone';
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    answer.textContent = ' ';
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);