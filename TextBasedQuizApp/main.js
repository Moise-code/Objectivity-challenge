// Create an array containing multiple-choice questions and corresponding answers
const quizQuestions = [
  {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
  },
  {
      question: "What is the capital of India?",
      choices: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
  },
  {
      question: "What is the capital of China?",
      choices: ["Hong Kong", "Shanghai", "Beijing", "Taipei"],
      answer: "Beijing"
  }
];

// Create a variable to track the user's score
let score = 0;

// Create a function to generate a random number
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// Create a function to display a question
const displayQuestion = () => {
  // Generate a random number between 0 and the length of the quizQuestions array
  let randomNumber = getRandomNumber(quizQuestions.length);

  // Use the random number to select a random question from the array
  let question = quizQuestions[randomNumber];

  // Display the question to the user
  console.log(question.question);

  // Display the multiple choice answers to the user
  for (let i = 0; i < question.choices.length; i++) {
      console.log(i + ": " + question.choices[i]);
  }

  // Ask the user to select an answer
  let userAnswer = prompt("Please select an answer (Enter the number of your answer):");

  // Check if the user's answer is correct
  if (question.choices[userAnswer] == question.answer) {
      // Add 1 to the user's score
      score++;
      console.log("Correct! Your score is now " + score);
  } else {
      // Display the correct answer to the user
      console.log("Incorrect. The correct answer is " + question.answer);
  }
}

// Display 3 questions to the user
for (let i = 0; i < 3; i++) {
  displayQuestion();
}

// Display the user's final score
console.log("Your final score is " + score);