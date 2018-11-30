// QUIZ TEST 
const myQuiz = 
    [
      {question: "1. How many teams are there in the Preimership?",
        answers: {
          a: '10',
          b: '15',
          c: '20',
          d: '25'
        },      
      correctAnswer:'c',
      },

    {
        question: "2. Who lost in the final of the 2018 World Cup?",
        answers: {
          a: 'France',
          b: 'Brazil',
          c: 'England',
          d: 'Croatia'
        },
        correctAnswer: 'd'
      },

      {
        question: "3. Which team does Marcus Rashford play for?",
        answers: {
          a: 'Man City',
          b: 'Man U',
          c: 'Southampton',
          d: 'Whitehawk FC'
        },
        correctAnswer: 'b'
      },

      {
        question: "4. How old is Harry Kane?",
        answers: {
          a: '6',
          b: '25',
          c: '34',
          d: '80'
        },
        correctAnswer: 'b'
      },
  
      {
          question: "5. What is the name of Brighton and Hove Albions Stadium?",
          answers: {
            a: 'The Amex',
            b: 'Wembley',
            c: 'Old Traford',
            d: 'Justins House'
          },
          correctAnswer: 'a'
        },
  
        {
         question: "6. Spurs win 2 games, draw 2 games and lose 1 game. How many points do they have?",
          answers: {
            a: '10',
            b: '100',
            c: '7',
            d: '8'
          },
          correctAnswer: 'd'
        },

        {
            question: "7. Which of these team is not in Europe?",
            answers: {
              a: 'Sweeden',
              b: 'Peru',
              c: 'Wales',
              d: 'Italy'
            },
            correctAnswer: 'b'
          },
    
          {
            question: "8. Which team has won the most Champions League titles?",
            answers: {
              a: 'AC Milan',
              b: 'Barcelona',
              c: 'Man U',
              d: 'Juventus'
            },
            correctAnswer: 'a'
          },
      
          {
              question: "9. Who won the golden boot last season?",
              answers: {
                a: 'Kevin De Bruyne',
                b: 'Eden Hazard',
                c: 'Dele Alli',
                d: 'Mo Salah'
              },
              correctAnswer: 'd'
            },
      
            {
              question: "10. If you count both teams and the referee, how many people are on the pitch?",
              answers: {
                a: '23',
                b: '18',
                c: '10000000',
                d: '26'
              },
              correctAnswer: 'a'
            },

  ];
 
//this will keep track of the amount of times the game is clicked- WORKING
let currentIndex = 0;

//Count to hold number of correct answers- WORKING 
let numberCorrect = 0;

//keep track of how many questions have been answered- WORKING
let numOfQsAnswered = 0; 

// Button which closes welcome panel and opens up the quiz form-  WORKING 
function startGame(){
    $('.welcome-area').on('click', '.beginBtn', function(event) {
        $('.welcome-area').hide();
        $('.quiz').show();
    });
}

//Button at bottom of quiz which resets the webpage-  WORKING 
function endQuiz(){
  //when you click the rest button...
    $('.final-page').on('click', '.reset', function(event) {
      // hide the 'final page' which is a html dv
      $('.final-page').hide();
      // show the welcome page from the start which is in a .welcome-area div
      $('.welcome-area').show();
      //reset the indexes I had to count through the questions, number of correct questions and number of questions answered
      currentIndex = numberCorrect = numOfQsAnswered = 0;
      //re-run the function which is used to first call the first question
      printAllQuestions();
      });
}


//On clicking the submit question button this will console.log which radio button was clicked and prevent the button 
// being clicked again - WORKING 
function submitAnswer(){    
  $('.quiz').on('click', '.submitAnswer', function(event) {
    // prevent default behaviour 
    event.preventDefault();
    // stop button from being clickable again
    $(this).prop('disabled', true);
    //add 1 to the number of questions answered 
    numOfQsAnswered ++;
    // get user input value (a, b, c or d) and set it to selValue 
    var selValue = ($('input[type=radio][name=rbnNumber]:checked').attr('id'));
    //get answer of current question
    let correct = myQuiz[currentIndex].correctAnswer; 
    // if they match... 
    if(selValue === correct){
      //print well done and increase number of correct answers by one console.log
      $('.answerText').show().html("Well done! " + (correct) + " is the right answer");
      numberCorrect++;
      //otherwise tell them they got it wrong
    } else{
      $('.answerText').show().html("Sorry the correct answer was " + correct);
    }
    //give them their current score either way and display button to move on 
    $('.scoreTally').show().html("Your score is: " + numberCorrect + " /10");
    $('.nextQuestion').show();
    showFinalPage()
  });
}

// -------------------------------------
 //display final page. I will show this button at the end- NOT WORKING NEEDS TO ONLY WORK ON 10th Q
 function showFinalPage(){
  if(numOfQsAnswered === 10){
    $('.quiz').hide();
    $('.final-page').show();
    $('.finalScoreTally').html("Your final score is: " + numberCorrect + " /10");
    if(numberCorrect >= 7){$('.endMessage').html("Well done you passed the quiz!");}
    else {$('.endMessage').html("Unlucky, try again!");}
  }
 }



// template HTML. Question and 4 answers passed in as arguments- WORKING
function printOneQuestion(){
  let currentItem =  myQuiz[currentIndex];
  return(
    `<form class="container-fluid text-center mt-3 mx-4 quizItem" value="">
        <h3>${currentItem.question}</h3>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="a" id="a">
          <label class="form-check-label" for="inlineRadio1">A. ${currentItem.answers.a}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="b" id="b">
          <label class="form-check-label" for="inlineRadio2">B.   ${currentItem.answers.b}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="c" id="c">
          <label class="form-check-label" for="inlineRadio3">C.   ${currentItem.answers.c}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="d" id="d">
          <label class="form-check-label" for="inlineRadio4">D. ${currentItem.answers.d}</label>
        </div><br>
            <button class="btn btn-secondary mt-4 mb-4 submitAnswer">Submit answer</button>
            <h3 class="text-center text-info answerText" style="display:none"></h3><br>         
            <h3 class="text-center text-info scoreTally" style="display:none"></h3><br>
            <button class="btn btn-secondary mt-4 mb-4 nextQuestion" style="display:none" >Next Question</button><br>        
      </form>`
  )
}

//into the test div this will print out the template HTML and populate 
// string interplation via the testPrint function
function printAllQuestions(){
  $('.test').html(printOneQuestion());
}

function nextQuestion(e){
  currentIndex++;
  printAllQuestions();
}

function goToNextQ(){
  $('.test').on('click', '.nextQuestion', e => nextQuestion(e));
}



// -------------------------
//My container function 
function allFunctions(){
    startGame()
    submitAnswer()  
    printAllQuestions()
    goToNextQ()
    showFinalPage() 
    endQuiz()
  }
$(allFunctions);
// --------------------------