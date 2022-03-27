var quizTimer = 10;
var timerEl = document.getElementById('timer');

//  quiz/game timer section
var countDown =function(){
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (quizTimer > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        console.log(quizTimer)
        timerEl.textContent = quizTimer + " seconds left";    
        quizTimer--;
        } else if (quizTimer === 1) {
        // When `quizTimer` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = quizTimer + " second left";    
        quizTimer--;
        } 
        else {
            timerEl.textContent = "Time up";
        }
    }, 1000);
}

var startQuiz = function() {
    event.preventDefault();
    countDown()
}

var formEl = document.querySelector("#quiz-form");

formEl.addEventListener("submit", startQuiz);