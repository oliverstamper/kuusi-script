function saveScore() {
    const initials = initialsInput.value.trim();
  
    if (initials !== '') {
      alert(`Score saved: ${score} with initials ${initials}`);
      resetQuiz();
    } else {
      alert('Please enter your initials.');
    }
}

const finalScoreSpan = document.getElementById('final-score');

const clearHighscoresButton = document.getElementById('clear');

function clearHighscores() {
    highscoresList.innerHTML = '';
}
  
const viewHighscoresLink = document.querySelector('.scores a');

function viewHighscores() {
    window.location.href = 'highscores.html';
}