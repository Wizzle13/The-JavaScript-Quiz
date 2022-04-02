var quizTimer = 100;
var timerEl = document.getElementById('timer');
var i = 0;
var quizStarted = "no";
var score = "0";

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
          question: "If you save your array of objects to the browser’s local storage and it looks like [Object object] when you visit it in Chrome’s DevTools, what’s wrong?",
          choices: ["The array wasn’t stringified with JSON.stringify() before saving it in Local Storage.", "The array wasn’t stringified with JSON.stringify() before saving it in Local Storage."],
          answer: "1"
        },
        
        {
          question: "In the DOM’s event object, what does its target property refer to?",
          choices: ["It refers to the HTML element that was interacted with to dispatch the event.", "It refers to the HTML element we want to affect as a result of our dispatched event"],
          answer: "1"
        },

        {
            question: "What does event.preventDefault() do?",
            choices: ["It stops the browser from reloading the page upon a form submission","It stops the browser from allowing the form submission event to occur. "],
            answer: "1"
        },

        {
            question: "The browser event submit allows us to do the following:",
            choices: ["Submit a form using a button.", "Submit a form using both a button and the Enter key."],
            answer: "2"
        },

        {
            question: "How do we use JavaScript to get the information entered into a form’s input field?",
            choices: ["We can select the form’s input element and use the value property to read its data.", "We can select the form itself and use the value property to read all of its data.", "We can select the form’s input element and use the textContent or innerHTML properties to read its data."],
            answer: "1"
        },  
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
        
     
            formEl.querySelector("#quizAnwsers").innerHTML = "<input type='radio' name='Anwser' value='1' />"+ options[0]+"<br/><input type='radio' name='Anwser' value='2' />"+ options[1]+"<br/><br/>"
       
        }
    }
    else {
        quizStarted = "HS";
        score = quizTimer;
        formEl.querySelector("#questions").textContent = ("Congratulation you completed the test! Your Score is "+score);
        formEl.querySelector("#quizAnwsers").innerHTML = "<input type='input' name='HighScore' class ='HSI' />";
        formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Submit Score</button>"
    }
}

// Submit the High Score
var submitHighScore =function() {
    var initials =$("#HSI").val();
    localStorage.setItem('HighScore', initials +" , "+ score);
    window.location.reload(true);
}

// check the anwser
var checkAnwser = function(event) {
    // event.preventDefault();
    var qAnwser = questions[i].answer;
    
    var ele = document.getElementsByName('Anwser');
                  
    for(var e = 0; e < ele.length; e++) {
        if(ele[e].checked){
        
        var submitedAnwser = ele[e].value
        }
        
    }

    // checks to see if the anwser
    if(qAnwser == submitedAnwser){
        quizTimer = quizTimer + 5;
    }
    else {
        quizTimer = quizTimer - 10;
    }
    

    i++;
    loadQuestion();
}

// starts the quiz
var startQuiz = function(event) {
    event.preventDefault();
    countDown();
    if (quizStarted === "no"){
        loadQuestion();
    }
    else if (quizStarted === "yes"){
        checkAnwser();
    }    
    else {
        submitHighScore();
    }
}

var showHS = function(){
    quizStarted = "HS";
    var CurrentHS = localStorage.getItem("HighScore")
    formEl.querySelector("#questions").textContent = ("The Current High Score is:");
    formEl.querySelector("#quizAnwsers").innerHTML = "<h3>"+ CurrentHS +"</h3>";
    formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Close</button>"
}
    
var formEl = document.querySelector("#quiz-form");
    formEl.querySelector("#button").innerHTML = "<button type='submit' id = 'submit'>Start The Test!</button>"
    formEl.addEventListener("submit", startQuiz);
var formE2 = document.querySelector("#highScore");   
    formE2.addEventListener("click", showHS);
    

