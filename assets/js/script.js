//--- clear local storage --- 
//localStorage.clear("clearStorage");
//storage.clear();
//---------------- button clicks --------------------
//var signUpButton = document.querySelector("#startQuiz");

//Start clicks
function startQuiz() {     
      window.location.href = "questionsPg1.html";  //relative path
}
//move to next page
function nextOneToTwo() {
    window.location.href = "questionsPg2.html"; 
}
//move to next page
function nextQuestionsPgTwo() {
    window.location.href = "questionsPg2.html"; 
}

function wrongValue() {
    var x = 0;
    return x;  
}

//--- questionsPg1 clicks
function strings() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    //wrongValue = 10; setTimeout = 3000;     // sleep for 3 seconds
    console.log(wrongValue);
    nextQuestionsPgTwo();

    //localStorage.setItem("correctOrWrong", wrong);

    
    ////////nextQuestionsPgTwo();
    //window.location.href = "questionsPg2.html";  //relative path
    }              
function boxes() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgTwo();
}
function character() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    nextQuestionsPgTwo();
}
function booleans() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    nextQuestionsPgTwo();
}

//move to next page
function nextTwoToThree() {
    window.location.href = "questionsPg3.html"; 
}
//move to next page
function nextQuestionsPgThree() {
    window.location.href = "questionsPg3.html"; 
}
//-- questionsPg2 clicks
function quotes() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    nextQuestionsPgThree();
}
function curlyBrackets() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    nextQuestionsPgThree();
}
function parenthesis() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgThree();
}
function squareBrackets() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    nextQuestionsPgThree();
}

//move to next page
function nextThreeToDone() {
    window.location.href = "allDone.html"; 
}
//move to next page
function nextQuestionsPgAllDone() {
    window.location.href = "allDone.html"; 
}
//questionsPg3 clicks
function numberedStrings() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgAllDone();
}
function otherArrays() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgAllDone();
}
function booleans2() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgAllDone();
}
function allTheAbove() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
    nextQuestionsPgAllDone();
}

//all done page - submit for high scores click
function submitInitials() {    
     window.location.href = "highScores.html";  //relative path
    }
//high scores - go back & clear high scores 2 clicks
function goBack() {    
     window.location.href = "index.html";  //relative path
    }
function clearHighScores() {    
    //window.location.href = "allDone.html";  //relative path
    localStorage.clear(); 
}


//countdown timer - // reference: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

//reduce clock by 10 seconds  

//var timeleftTrack = document.querySelector("#countdown");

/*
function reduceCountdown() {
    var n = 10;
    countdown.timeleft = countdown.timeleft - n;
    localStorage.setItem("countdown", countdown.timeleft);
}
*/

/*
function continueCountdown() {    
    var n = 10;
    if (userSelection(false)) {
        localStorage.getItem("continueCountdown", (countdown.timeleft = countdown.timeleft - n);
        document.setElementById("countdownCountdown").innerHTML = countdown.timeleft + " seconds remaining";
    } else {
        localStorage.getItem("continueCountdown", countdown.timeleft);
        document.setElementById("continueCountdown").innerHTML = timeleft + " seconds remaining";
    }
}

*/

window.onload = function countdown() {    
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      }
      timeleft -= 1;
    }, 1000);
};

/*
var countdown = document.querySelector("#countdown");

continueTheCountdown.addEventListener("contTheCountdown", function(event) {
    event.preventDefault();
    var countdown = document.querySelector("#countdown").value;
    
    //var n = 10;
    if (userSelection(false)) {
        localStorage.getItem("continueCountdown", (countdown.timeleft = countdown.timeleft - 10));
        document.setElementById("countdownCountdown").innerHTML = countdown.timeleft + " seconds remaining";
    } else {
        localStorage.getItem("continueCountdown", countdown.timeleft);
        document.setElementById("continueCountdown").innerHTML = timeleft + " seconds remaining";
    }
    localStorage.setItem("countdown", countdown.timeleft);
    
    }
  });

  */

// initials

var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userinitialsSpan = document.querySelector("#user-initials");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
function renderLastRegistered() {
  // Fill in code here to retrieve the last initials
  //var x = localStorage.getItem();
  var displayinitials = document.querySelector("#user-initials");
    displayinitials.textContent = localStorage.getItem("#inputInitials");
  // If they are null, return early from this function
  // Else set the text of the userInitialSpan to the corresponding values form local storgage  
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
   if (initials === "") {
    displayMessage("error", "Initials cannot be blank.");
  } else {
    displayMessage("success", "Initials entered successfully.");
  // Save initials  to localStorage and render the last registered.
  localStorage.setItem("inputInitials", initials);
  }
});


    





