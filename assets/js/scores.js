
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const highscoresList = document.getElementById('highscores');


highScores.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
    highscoresList.appendChild(listItem);
});

function saveScore() {
    const initials = document.getElementById('initials').value.trim();
  
    if (initials !== '') {
        
        highScores.push({ initials, score });

        
        highScores.sort((a, b) => b.score - a.score);

        
        localStorage.setItem('highScores', JSON.stringify(highScores));

        alert(`Score saved: ${score} with initials ${initials}`);
        resetQuiz();
    } else {
        alert('Please enter your initials.');
    }
}

function clearHighscores() {
    
    localStorage.removeItem('highScores');

    
    highscoresList.innerHTML = '';
}
  
function viewHighscores() {
    window.location.href = 'highscores.html';
}