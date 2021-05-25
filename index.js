// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/
/*
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));
*/
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
   -Counter2 is a first-class functions that is essentially
  a value,whereas Counter1 is a higher-order function that passes
  in a function as an argument which is named in this case counterMaker();
  
  
  2. Which of the two uses a closure? How can you tell?
  
   -Counter1 has a closure because It's a higher order function that passes
  a child function through a parent function which in turn returns a new value
  for the new value using a global variable. I could tell because it had a callback 
  function,which implies it's a higher order function.
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     counter1 is not the best practice because the nature of the closure utilizes 
     global variables which may cause bugs in our code if we're building large web apps.
     counter2 is actually preferable because it has a limited scoping that only works with
     the scoping that the function has been provided with.thus Giving as a result cleaner
     code that gives you less bugs.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/
  const randomInt=(min,max) => Math.trunc(Math.random()*(max-min)+1)+min;

function inning(){
return randomInt(-1,2);
}
console.log(inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

const inningVariable= inning();

function finalScore(a , b){

  function calcFinalScore(){
    const totalScore= (inningVariable*b);
    return totalScore;
   }
 const game={
   home:'HOME',
   homeScore: calcFinalScore(),
   away:'AWAY',
   awayScore: calcFinalScore()
 } 
 return "{"+game.home+": "+game.homeScore+","+game.away+": "+game.awayScore+"}";
}
console.log(finalScore(inningVariable,12));



/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore() {
  const match={
    home:'HOME',
    homeScore: inning(),
    away:'AWAY',
    awayScore: inning()
  }
  return `The score for ${match.home} is ${Number(match.homeScore)}, and the score
  for ${match.away} is ${Number(match.awayScore)}`;
}
console.log(getInningScore());

/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]
  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */



const getInningScoreVariable= getInningScore();



/*const randomInt=(min,max) => Math.trunc(Math.random()*(max-min)+1)+min;*/
//Above is a general formula that returns random numbers within a given range//Feel free 
//to use it as a snippet.

function randomInningNumber(){
  return randomInt(0,10);
}

function scoreboard() {
  const play={
    inning:randomInningNumber(),
    home:'HOME',


  
}
}
console.log(scoreboard());


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
*/
