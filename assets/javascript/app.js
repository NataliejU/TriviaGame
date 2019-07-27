$(document).ready(function (event) {

    var q0 = { 
        question: "What year did Spongebob first air?",
        answerChoices: ["A. 1996", "B. 1997", "C. 1998", "D. 1999"],
        answer: "D.",

    }

    var q1 = { 
        question: "What is Spongebob's birthday in his license?",
        answerChoices: ["A. September 3,1986", "B. July 14,1986", "C. March 20,1986", "D. November 7,1986"],
        answer: "B.",

    }

    var q2 = { 
        question: "How many episodes of Spongebob are there?",
        answerChoices: ["A. 243", "B. 246", "C. 237", "D. 239"],
        answer: "B.",

    }


    var q3 = { 
        question: "What is Plankton's wife's name?",
        answerChoices: ["A. Karen", "B. Katie", "C. Sara", "D. Nancy"],
        answer: "A.",

    }

    var timeLeft = 10; 

    var losses = 0; 

    var wins = 0; 

    var timesUp = 0; 

    var number = 0; 

    var questions = [q0.question, q1.question, q2.question, q3.question]; 
        console.log(questions); 

    var answerOptions = [q0.answerChoices, q1.answerChoices, q2.answerChoices, q3.answerChoices]; 

    var answers = [q0.answer, q1.answer, q2.answer, q3.answer]


   
    var replaceOptions = "<div class='row'>" + 
                            "<p>Answer Choices</p>" + 
                        "</div>" +
                        "<div class='row choice1'></div>" +
                        "<div class='row choice2'></div>" + 
                        "<div class='row choice3'></div>" +
                        "<div class='row choice4'></div>"

    function countdown () { 
        if (timeLeft === 0) {
            clearInterval(intervalId); 
            $(".timer").text("Time Remaining: " + 0 + " Seconds"); 
            $(".results").text("Times Up! The correct answer is: " + answers[number]); 
            timesUp ++; 
            number ++ ;
            setTimeout(game, 3000); 
        }
        else {
            timeLeft -- ;
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");  
         } 
    }


    function game () {
        if (number < questions.length ) {
            timeLeft = 10; 
            $(".results").text(""); 
            $(".main").html(replaceOptions); 
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
            intervalId = setInterval (countdown, 1000);
            //calling countdown function takes time to run, so there will be a time lag. This is why we display the time on screen first
            $(".question").text(questions[number]); 
            $(".choice1").html("<button class='buttons button1' value=" + answerOptions[number][0] + ">" + answerOptions[number][0] + "</button>");
            $(".choice2").html("<button class='buttons button2' value=" + answerOptions[number][1] + ">" + answerOptions[number][1] + "</button>"); 
            $(".choice3").html("<button class='buttons button3' value=" + answerOptions[number][2] + ">" + answerOptions[number][2] + "</button>");
            $(".choice4").html("<button class='buttons button4' value=" + answerOptions[number][3] + ">" + answerOptions[number][3] + "</button>");
            
            $(".buttons").on("click", function () {
                    var userClick = $(this).attr("value"); 
                    console.log(userClick); 

                if (userClick === answers[number]) {
                    $(".results").text("You're Right! The correct answer is: " + answers[number]); 
                    wins ++; 
                    clearInterval(intervalId); 
                    number ++ ;
                    setTimeout(game, 3000);

                }
                else{
                    $(".results").text("You're Wrong! The correct answer is: " + answers[number]);
                    losses ++; 
                    clearInterval(intervalId); 
                    number ++ ;
                    setTimeout(game, 3000); 

                }   
            }); 

        
        }
        else {
            clearInterval(intervalId); 
            $(".results").text("Game Over! Press Restart to Play Again!"); 
            $(".question").text("");
            $(".unanswered").text("Unanswered: " + timesUp);
            $(".correct").text("Correct: " + wins); 
            $(".incorrect").text("Incorrect: " + losses); 
            
            $(".restart").show(); 

    }
}

function reset () {
    $(".restart").hide(); 
    losses = 0; 
    $(".incorrect").text(""); 
    wins = 0; 
    $(".correct").text(""); 
    timesUp = 0; 
    $(".unanswered").text("");
    number = 0; 
    game(); 
}

$(".restart").hide(); 

$(".start").on("click", function () {


    //intervalId = setInterval (countdown, 1000); 

    $(this).hide(); 

    game(); 
    
}); 

$(".restart").on("click", function () {
    reset(); 
}); 

}); 