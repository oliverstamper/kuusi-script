//Start Button
const startButton = document.getElementById('start');
startButton.addEventListener('click', startQuiz);
function startQuiz() {
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
    startTimer();
}

//Quiz

let currentQuestionIndex = 0;
let score = 0;

const timerElement = document.getElementById('time');

let timer;

function startTimer() {
    let timeLeft = 60;
  
    timer = setInterval(() => {
      timeLeft--;
  
      if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
        endQuiz();
      }
  
      timerElement.textContent = timeLeft;
    }, 1000);
}

const quizContainer = document.getElementById('questions');
const questionContainer = document.getElementById('question-title');




function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectAnswer(option));
      optionsContainer.appendChild(button);
    });
}

const optionsContainer = document.getElementById('choices');
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', checkAnswer);

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    } else {
      clearInterval(timer);
      startTimer();
      timeLeft -= 10;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
    finalScoreSpan.textContent = score;
}

const initialsInput = document.getElementById('initials');


  
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    initialsInput.value = '';
    startButton.style.display = 'block';
    endContainer.style.display = 'none';
    clearInterval(timer);
}






