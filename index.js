var readlineSync = require("readline-sync");

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("You are rigth");
    score = score + 1;
  } else {
    console.log("You are wrong");
  }
  console.log(score);
  console.log("_____________");
}

var questions = [
  {
    question: "what is my last name ",
    answer: "bind",
  },
  {
    question: "what is my age ",
    answer: "23",
  },
  {
    question: "what is my month of birth ",
    answer: "may",
  },
];

console.log("Welcome to shor game:: HoW WeLL Do YoU KnoW ME?");
for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
