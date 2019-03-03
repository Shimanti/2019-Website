var currentQuestion = 0;
var totQuestions = questions.length;

var pageone = document.getElementById('pageone');
var questionEl = document.getElementById('question');
var answer = document.getElementById('answer');
var nextButton = document.getElementById('nextButton');

function loadQuestion (questionIndex) {
    answer.textContent = ' ';
    var q = questions[questionIndex];
    questionEl.textContent = 'Question ' + (questionIndex + 1) + ': ' + q.question;
    answer.textContent = 'Question ' + (questionIndex + 1) + ': ' + q.answer;
};

function loadNextQuestion () {
    window.location.href = '#pageone';
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);