//Game: 30 seconds total
    //Display contdown
    function startTimer(duration, display) {
        var timer = duration, seconds;
        setInterval(function () {
            seconds = parseInt(timer % 60, 10);
    
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = "Time Left: "  + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
        if (timer == 0) {
            clearTimeout(timer);
    
    };
}
    
    window.onload = function () {
        var thirtySec = 30000,
            display = document.querySelector('#timer');
        startTimer(thirtySec, display);
        function countdown() {
            
    }}



function check(){
    var questionOne = document.quiz.q1.value;
    var questionTwo = document.quiz.q2.value;
    var questionThree = document.quiz.q3.value;
    var questionFour = document.quiz.q4.value;
    var questionFive = document.quiz.q5.value;
    var questionSix = document.quiz.q6.value;
    var correct=0;
    var incorrect=0;


    if (questionOne=="Troy"){
        correct++;
        console.log(questionOne);
    }
    if(questionTwo=="D'Artagnan, 'Dart' for short"){
        correct++;
        console.log(questionTwo);
    }
    if(questionThree=="Mirkwood"){
        correct++;
        console.log(questionThree);
    }
    if(questionFour=="She can make people see what she wants them to see"){
        correct++;
        console.log(questionFour);
    }
    if(questionFive=="Venkman"){
        correct++;
        console.log(questionFive);
    }
    if(questionSix=="Christmas Lights"){
        correct++;
        console.log(questionSix);
    }
}



// $("#start").onclick(check);    
// var userCorrect = 0;
// var userWrong = 0;



// var clockRunning = false;

// function play (){
//     $("#startGame").click(play);
// }

// var question1 = $(quiz.q1.value)


// setTimeout (play, 30000);

// $("")

            // var myQuestions = [
            //     {
            //         question: "What did Dustin name his new friend, in Season 2?",
            //         answers: {
            //             a: 'Yurtle, the Turtle',
            //             b: 'DArtagnan, "Dart" for short',
            //             c: 'Don Quixote, Don for short',
            //             d: 'Dustin Jr.'
            //         },
            //         correctAnswer: 'b'
            //     },
            //     {
            //         question: "What nickname does the street have where Will goes missing?",
            //         answers: {
            //             a: 'Mirkwood',
            //             b: 'Camelot',
            //             c: 'Narnia',
            //             d: 'Sherwood'
            //         },
            //         correctAnswer: 'a',
            //     },
            //     {
            //         question: 'What is Eleven\'s "sister\'s" power?',
            //         answers: {
            //             a: 'She can turn herself and other people invisible',
            //             b: 'She can make things explode with her mind',
            //             c: 'She can read minds',
            //             d: 'She can make people see what she wants them to see'
            //         },
            //         correctAnswer: 'd'
            //     },
            //     {
            //         question: 'Which Ghost Buster do both Lucas and Mike dress up as for Halloween?',
            //         answers: {
            //             a: 'Spengler',
            //             b: 'Winston',
            //             c: 'Venkman',
            //             d: 'Stantz'
            //         },
            //         correctAnswer: 'c'
            //     },
            //     {
            //         question: 'What does Joyce use to communicate with Will while he is in the Upside Down?',
            //         answers: {
            //             a: 'A Chalkboard',
            //             b: 'Christmas Lights',
            //             c: 'The T.V.',
            //             d: 'Morse Code'
            //         },
            //         correctAnswer: 'b'
            //     }
    
            //     ];
               


// //Question 1
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1
//               //if userChoice = 
//  //Question 2
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1

//  //Question 3
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1

//  //Question 4
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1

//  //Question 5
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1
 
//   //Question 6
//     //If userChoice is wrong, next question and score-1
//     //If userChoice is correct, next question and score +1
 
 
//  //Game Over
//     //If all answers are answered
//         //Display: #right, #wrong
//     //If time runs out, game ends
//         //Display: # right, #wrong