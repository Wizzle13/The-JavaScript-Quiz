var quizTimer = 100;
var timerEl = document.getElementById('timer');
var i = 0;
var quizStarted = "no";

//  quiz/game timer section
var countDown =function(){
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (quizTimer > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        // console.log(quizTimer)
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
// The question array
var questions = 
      [
        {
          question: "What is the capital of United Kingdom?",
          choices: ["Manchester", "Birmingham", "London", "Iowa"],
          answer: "2"
        },
        
        {
          question: "What is the capital of United States?",
          choices: ["California", "New York", "Miami", "Florida"],
          answer: "1"
        }
    ];

// loads question
var loadQuestion = function(){
    quizStarted = "yes";
    if (i < questions.length){
        var question = questions[i].question;
        formEl.querySelector("#questions").textContent = ( question );
        formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Submit Anwser</button>"
        
        var options = questions[i].choices;
        document.body.appendChild(document.createElement("br"));
         var name = "radio"+i; 
        for ( var opt = 0; opt < options.length; opt++) {
        
     
            formEl.querySelector("#quizAnwsers").innerHTML = "<input type='radio' name='Anwser' value='1' />"+ options[0]+"<br/><input type='radio' name='Anwser' value='2' />"+ options[1]+"<br/><input type='radio' name='Anwser' value='3' />"+ options[2]+"<br/><input type='radio' name='Anwser' value='4' />"+ options[3]+"<br/>"
       
            
            console.log(opt);
            console.log(options[opt]);
        }
    }
    else {
        formEl.querySelector("#questions").textContent = ("Congratulation you completed the test! Your Score is "+quizTimer);
        formEl.querySelector("#quizAnwsers").innerHTML = "<input type='input' name='HighScore'  />";
        formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Submit Score</button>"
    }
}
var checkAnwser = function(event) {
    // event.preventDefault();
    var qAnwser = questions[i].answer;
    console.log(qAnwser);
    var ele = document.getElementsByName('Anwser');
                  
    for(var e = 0; e < ele.length; e++) {
        if(ele[e].checked)
        console.log(ele[e].value);
        var submitedAnwser = ele[e].value
    }

    
    if(qAnwser === submitedAnwser){
        console.log("correct");
        quizTimer = quizTimer + 5;
    }
    else {
        console.log("incorrect");
        quizTimer = quizTimer - 10;
    }
    

    i++;
    loadQuestion();
}

var startQuiz = function(event) {
    event.preventDefault();
    countDown();
    if (quizStarted === "no"){
        loadQuestion();
    }
    else {
        checkAnwser();
    }    
}
    
var formEl = document.querySelector("#quiz-form");
    formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Start The Test!</button>"
    formEl.addEventListener("submit", startQuiz);
    

