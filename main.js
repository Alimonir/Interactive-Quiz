const quizData = [
  {
    question: "What is the capital of France ?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Larry Page"],
    correct: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "What is AI?",
    options: [
      "Artificial Intelligence",
      "searching app",
      "animal",
      "car model",
    ],
    correct: 0,
  },
  {
    question: "What is ChatGBT?",
    options: [
      "wether app",
      "Planrt",
      "google searching tool",
      "searching app AI",
    ],
    correct: 3,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
];
let currentQuestion = 0;
let score = 0;
function loadQuiz() {
  const question = document.getElementById("question");
  const optionsDiv = document.querySelector(".options");

  const questionData = quizData[currentQuestion];

  question.innerText = questionData.question;

  //clear previous options
  optionsDiv.innerText = "";
  //load new option forEach span
  questionData.options.forEach((option, index) => {
    let optionSpan = document.createElement("span");
    optionSpan.classList.add("option");
    optionSpan.innerText = option;
    //Add click event to each optin to use index === corect
    optionSpan.addEventListener("click", () => {
      if (index === questionData.correct) {
        score++;
        optionSpan.style.backgroundColor = "green";
      } else {
        optionSpan.style.backgroundColor = "red";
      }
      //Disable options after selection using forEach and pointerEvents = none
      document.querySelectorAll(".option").forEach((opt) => {
        opt.style.pointerEvents = "none";
      });
    });
    // append optionSpan to option
    optionsDiv.appendChild(optionSpan);
  });
}

//function named showResult score in quiz container
function showResult() {
  let scoreDiv = `Your Score is ${score} out of ${quizData.length}`;
  document.getElementById("quiz-container").innerText = scoreDiv;
}
// function on next increase currentQuestion inside it put if o call loadQuiz and showResult
document.getElementById("next-button").addEventListener("click", function () {
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    showResult();
  } else {
    loadQuiz();
  }
});
//call loadQuiz
loadQuiz();
