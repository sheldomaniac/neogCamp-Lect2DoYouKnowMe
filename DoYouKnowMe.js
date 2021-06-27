//initialize readLineSync

var readLineSync = require('readline-sync');

var currHighestUser = {username:"1234", currHighScore: 4};

console.log("Let's check how well do you know me?");


//setTimeout(function(){
    console.log("This test contains 6 questions. Answer most questions to achieve Highest Score");
//},0);

//setTimeout(function(){
    var testUser = readLineSync.question("If you want to know details of current highest user, type 'HS' in terminal else hit Enter!\n");
//},0);

while(testUser != ""){
    if(testUser === "HS"){
        console.log("The current highest score is " + currHighestUser.currHighScore + " by " + currHighestUser.username + " !");
    }
    testUser = readLineSync.question();
}


//===%%%Start of questions%%%===
var question1 = {
    question: "What is my age? ", answer: "24"
};
  
var question2 = {
    question: "What is my height in cm? ", answer: "180"
};

var question3 = {
    question: "Where do I live? ", answer: "bangalore"
};

var question4 = {
    question: "What is your favorite family vacation? ", answer: "mumbai"
};

var question5 = {
    question: "Favorite Food? ", answer: "biryani"
};

var question6 = {
    question: "Do you know what you are? ", answer: "Awesome"
  };
  

//===%%%End of questions%%%===

  var questions = [question1, question2,question3,question4,question5];
  var score = 0;
  for(var i = 0, n = questions.length; i < n; i++){
    var userAnswer = readLineSync.question(questions[i].question);
    if(userAnswer.toLowerCase() === questions[i].answer)score++;
    
  }

  console.log(question6.question + question6.answer);
  score++;
  
  console.log("Your score is ",score);
  
  if(score > currHighestUser.currHighScore){
    currHighestUser.username = readLineSync.question("You have the current highest score!!! Please enter your name: ");
    currHighestUser.currHighScore = score;

    console.log("");
    console.log("Congratulations " + currHighestUser.username + "! You have the highest score right now with " + currHighestUser.currHighScore + " !\n");
  }

  // Project is done here. Below code is for testing purposes
  console.log("Below are few more questions for testing purposes. Would you like to participate? No points will be added/deducted.")
  
  //KeyInYN testing
  if(readLineSync.keyInYN("Type 'y' to participate or any other key to exit: ")){
    console.log("Woohooo!!! Let's goo!!!");
    console.log("To be noted: Some of these are memes so don't take it seriously :) ");

    //KeyInSelect testing
    var presidents = ["Man Mohan Singh", "Ram Nath Govind", "Prithviraj Chauhan", "Arun Jaitley"];
    var presAnswer = readLineSync.keyInSelect(presidents, "Who is the current president of India? ");
    presAnswer--;
    if(presAnswer == 2){
        console.log("Your answer is correct!");
    }else if (presAnswer == 3){
        console.log("Your meme knowledge is strong.");
    }
    console.log(presAnswer);

  } 

  var leapYrName = readLineSync.question("Enter your name: ");
  function inputleapYr(){
      var leapYearDOB = parseInt(readLineSync.question("Enter your DOB in format 'DDMMYYYY': "));

  }

  var year = leapYearDOB % 10000;

  var isAleapYear = false;

  function checkLeapYear(year){
    isAleapYear = false;
    if(year % 4 == 0){
        isAleapYear = true;
        if(year % 100 == 0){
            if(year % 400 == 0){
                isAleapYear = true;
            }else isAleapYear = false;
        }
    }
    return isAleapYear;
  }

  isAleapYear = checkLeapYear(year);

  if(isAleapYear === true) console.log("Congratulations! You were born in a leap year!!!");
  else console.log("You were not born on a leap year...")