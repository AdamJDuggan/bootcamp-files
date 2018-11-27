//array of quiz objects
const myQuiz = 
    [
      {question: "How many teams are there in the Preimership?",
        answers: {
          a: '10',
          b: '15',
          c: '20',
          d: '25'
        },      
      correctAnswer:'c',
      },

    {
        question: "Who lost in the final of the 2018 World Cup?",
        answers: {
          a: 'France',
          b: 'Brazil',
          c: 'England',
          d: 'Croatia'
        },
        correctAnswer: 'd'
      },

      {
        question: "Which team does Marcus Rashford play for?",
        answers: {
          a: 'Man City',
          b: 'Man U',
          c: 'Southampton',
          d: 'Whitehawk FC'
        },
        correctAnswer: 'b'
      },

      {
        question: "How old is Harry Kane?",
        answers: {
          a: '6',
          b: '25',
          c: '34',
          d: '80'
        },
        correctAnswer: 'b'
      },
  
      {
          question: "What is the name of Brighton and Hove Albions Stadium?",
          answers: {
            a: 'The Amex',
            b: 'Wembley',
            c: 'Old Traford',
            d: 'Justins House'
          },
          correctAnswer: 'a'
        },
  
        {
         question: "Spurs win 2 games, draw 2 games and lose 1 game. How many points do they have?",
          answers: {
            a: '10',
            b: '100',
            c: '7',
            d: '8'
          },
          correctAnswer: 'd'
        },

        {
            question: "Which of these team is not in Europe?",
            answers: {
              a: 'Sweeden',
              b: 'Peru',
              c: 'Wales',
              d: 'Italy'
            },
            correctAnswer: 'b'
          },
    
          {
            question: "Which team has won the most Champions League titles?",
            answers: {
              a: 'AC Milan',
              b: 'Barcelona',
              c: 'Man U',
              d: 'Juventus'
            },
            correctAnswer: 'a'
          },
      
          {
              question: "Who won the golden boot last season?",
              answers: {
                a: 'Kevin De Bruyne',
                b: 'Eden Hazard',
                c: 'Dele Alli',
                d: 'Mo Salah'
              },
              correctAnswer: 'd'
            },
      
            {
              question: "If you count both teams and the referee, how many people are on the pitch?",
              answers: {
                a: '23',
                b: '18',
                c: '10000000',
                d: '26'
              },
              correctAnswer: 'a'
            },

  ];
 
const myQuestions = [
  "How many teams are there in the Preimership?",
  "Who lost in the final of the 2018 World Cup?",
  "Which team does Marcus Rashford play for?",
  "How old is Harry Kane?",
  "What is the name of Brighton and Hove Albions Stadium?",
  "Spurs win 2 games, draw 2 games and lose 1 game. How many points do they have?",
  "Which of these team is not in Europe?",
  "Which team has won the most Champions League titles?",
  "Who won the golden boot last season?",
  "If you count both teams and the referee, how many people are on the pitch?"
  ]

const myAnswers= [
{
a: '10',
b: '15',
c: '20',
d: '25'
},

{
a: 'France',
b: 'Brazil',
c: 'England',
d: 'Croatia'
},

{
a: 'Man City',
b: 'Man U',
c: 'Southampton',
d: 'Whitehawk FC'
},

{
a: '6',
b: '25',
c: '34',
d: '80'
},

{
a: 'The Amex',
b: 'Wembley',
c: 'Old Traford',
d: 'Justins House'
},

{
a: '10',
b: '100',
c: '7',
d: '8'
},

{
a: 'Sweeden',
b: 'Peru',
c: 'Wales',
d: 'Italy'
},

{
a: 'AC Milan',
b: 'Barcelona',
c: 'Man U',
d: 'Juventus'
},

{
a: 'Kevin De Bruyne',
b: 'Eden Hazard',
c: 'Dele Alli',
d: 'Mo Salah'
},

{
a: '23',
b: '18',
c: '10000000',
d: '26'
},

];


// Button which closes welcome panel and opens up the quiz form-  WORKING 
function startGame(){
    $('.welcome-area').on('click', '.beginBtn', function(event) {
        $('.welcome-area').hide();
        $('.quiz').show();
    });
}

//Button at bottom of quiz which resets the webpage-  WORKING 
function endQuiz(){
    $('.final-page').on('click', '.reset', function(event) {
        window.location.reload();
        console.log("working");
      });
}

//Count to hold number of correct answers- WORKING 
numberCorrect = 0;

//On clicking the submit question button this will console.log which radio button was clicked and prevent the button 
// being clicked again - WORKING BUT TO BE UPDATED To WORK FOR ALL 10 QUESTIONS
function submitAnswer(){
  $('.quiz').on('click', '.submitAnswer', function(event) {
    // prevent default behaviour 
    event.preventDefault();
    // stop button from being clickable again
    $(this).prop('disabled', true);
    // get user input value (a, b, c or d) and set it to selValue 
    var selValue = ($('input[type=radio][name=rbnNumber]:checked').attr('id'));
    //get answer of current question, currently this will only work for question one!
    let correct = myQuiz[0].correctAnswer; 
    // if they match... 
    if(selValue === correct){
      //print well done and increase number of correct answers by one 
      console.log("Well done! " + (correct) + " is the right answer");
      numberCorrect++;
      //otherwise tell them they got it wrong
    } else{
      console.log("Sorry the correct answer was " + correct);
    }
    //give them their current score either way 
    console.log("Your score is: " + numberCorrect + " /10");
  });
}

 //display final page. I will show this button at the end- NOT WORKING NEEDS TO ONLY WORK ON 10th Q
 function lastQuestionSummary(){
  // display the final screen
  $('.final-page').show();
 }

// template HTML. Question and 4 answers passed in as arguments- WORKING
function printOneQuestion(question, a, b, c, d,){
  return(
    `<form class="container-fluid text-center mt-3 mx-4 quizItem" value="">
        <h3>${question}</h3>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="a" id="a">
          <label class="form-check-label" for="inlineRadio1">A. ${a}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="b" id="b">
          <label class="form-check-label" for="inlineRadio2">B.   ${b}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="c" id="c">
          <label class="form-check-label" for="inlineRadio3">C.   ${c}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="d" id="d">
          <label class="form-check-label" for="inlineRadio4">D. ${d}</label>
        </div><br>
            <button class="btn btn-secondary mt-4 mb-4 submitAnswer">Submit answer</button>             
      </form>`
  )
}

//into the test div this will print out the template HTML and populate 
// string interplation via the testPrint function
function printAllQuestions(){
  $('.test').html(printOneQuestion(
    'How many teams are there in the Premership (hardcoded)?', 
    10, 15, 20, 25))
}







// -------------------------
//My container function 
function allFunctions(){
    startGame()
    endQuiz()
    submitAnswer()  
    printAllQuestions()
  }
$(allFunctions);
// --------------------------