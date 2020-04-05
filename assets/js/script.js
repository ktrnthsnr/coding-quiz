//---------------- button clicks --------------------

var signUpButton = document.querySelector("#startQuiz");


//Start clicks
function startQuiz() {     
      window.location.href = "questionsPg1.html";  //relative path
}


//--- questionsPg1 clicks
function strings() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
    }
        function nextOneToTwo() {    
            window.location.href = "questionsPg2.html";  //relative path
        }
        //reduce clock by 10 seconds    
        function reduceTime() {
                var n = 10;
                timeleft = timeleft - n;
            }
           
function boxes() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}
    function nextOneToTwo() {    
        window.location.href = "questionsPg2.html";  //relative path
    }

function character() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
}
    function nextOneToTwo() {    
        window.location.href = "questionsPg2.html";  //relative path
    }

function booleans() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
}

    function nextOneToTwo() {    
        window.location.href = "questionsPg2.html";  //relative path
    }

//-- questionsPg2 clicks
function quotes() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
}
    function nextTwoToThree() {    
        window.location.href = "questionsPg3.html";  //relative path
    }


function curlyBrackets() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
}
    function nextTwoToThree() {    
        window.location.href = "questionsPg3.html";  //relative path
    }


function parenthesis() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}
    function nextTwoToThree() {    
        window.location.href = "questionsPg3.html";  //relative path
    }


function squareBrackets() {    //wrong
    document.getElementById("correctOrWrong").innerHTML ="Wrong";
}
    function nextTwoToThree() {    
        window.location.href = "questionsPg3.html";  //relative path
    }


//questionsPg3 clicks
function numberedStrings() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}

    function nextThreeToDone() {    
        window.location.href = "allDone.html";  //relative path
    }

function otherArrays() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}

    function nextThreeToDone() {    
        window.location.href = "allDone.html";  //relative path
    }

function booleans2() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}

    function nextThreeToDone() {    
        window.location.href = "allDone.html";  //relative path
    }

function allTheAbove() {    //correct
    document.getElementById("correctOrWrong").innerHTML ="Correct";
}

    function nextThreeToDone() {    
        window.location.href = "allDone.html";  //relative path
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

//initials
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userinitials = document.querySelector("#user-initials");
var submitButton = document.querySelector("#clearScores");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
function renderLastRegistered() {
  var displayinitials = document.querySelector("#user-initials");
   displayinitials.textContent = localStorage.getItem("inputinitials");
}
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Top scores");
  localStorage.setItem("inputinitials", initials);
  }
});

