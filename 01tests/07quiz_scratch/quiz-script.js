var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('answer1');
var opt2 = document.getElementById('answer2');
var opt3 = document.getElementById('answer3');
var opt4 = document.getElementById('answer4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.opt1;
    opt2.textContent = q.opt2;
    opt3.textContent = q.opt3;
    opt4.textContent = q.opt4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
//    alert("Your answer was: " + selectedOption.value + " The correct answer is: " + questions[currentQuestion].answer);
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    } 
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);