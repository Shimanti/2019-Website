var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function clickMoreQuizzes() {
  var x = document.getElementById("morequizzescontainer");
  if (x.style.height == "" || x.style.height == "0px") {
    x.style.height = "450px";
    document.getElementById("menuheader").getElementsByTagName("i")[0].className = "fas fa-caret-up";
  } else {
    x.style.height = "0px";
    document.getElementById("menuheader").getElementsByTagName("i")[0].className = "fas fa-caret-down";
  }
}

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
    alert("Your answer was: " + selectedOption.value + " The correct answer is: " + questions[currentQuestion].answer);
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

function startTimer() {
  var tobj = document.getElementById("timespent")
  var t = "0:00";
  var s = 00;
  var d = new Date();
  var timeint = setInterval(function () {
    s += 1;
    d.setMinutes("0");
    d.setSeconds(s);
    min = d.getMinutes();
    sec = d.getSeconds();
    if (sec < 10) sec = "0" + sec;
    document.getElementById("timespent").value = min + ":" + sec;
  }, 1000);
  tobj.value = t;
}
if (window.addEventListener) {              
  window.addEventListener("load", startTimer);
} else if (window.attachEvent) {                 
  window.attachEvent("onload", startTimer);
}