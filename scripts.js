let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const playerScoreSpan = document.querySelector('.your-score .zero');
const computerScoreSpan = document.querySelector('.computer-score .zero');
const rulesButton = document.querySelector('.button');
const choicesImages = {
  rock: document.querySelector('img[src="stone.png"]'),
  paper: document.querySelector('img[src="paper.png"]'),
  scissors: document.querySelector('img[src="scissor.png"]')
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'draw';
    }
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }

  function updateScores(winner) {
    if (winner === 'player') {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      localStorage.setItem('playerScore', playerScore);
    } else if (winner === 'computer') {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      localStorage.setItem('computerScore', computerScore);
    }
  }

choicesImages.rock.addEventListener('click', () => playGame('rock'));
choicesImages.paper.addEventListener('click', () => playGame('paper'));
choicesImages.scissors.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
  
    updateScores(winner);
    displayResultMessage(winner, playerChoice, computerChoice);
    if (winner === 'player') {
      celebrateWin();
    }
  }

  function displayResultMessage(winner, playerChoice, computerChoice) {
    let message = '';
    if (winner === 'player') {
      message = `You won! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    } else if (winner === 'computer') {
      message = `Computer won! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    } else {
      message = `It's a draw! Both chose ${playerChoice}.`;
    }
    alert(message); // You can replace this with a more custom design.
  }

  function celebrateWin() {
    // This could be a confetti animation, or some graphical effect.
    alert("Congratulations! You won this round! 🎉");
  }

  rulesButton.addEventListener('click', () => {
    alert("Rules: Rock beats Scissors, Scissors beat Paper, Paper beats Rock.");
  });

  function loadScores() {
    playerScore = localStorage.getItem('playerScore') || 0;
    computerScore = localStorage.getItem('computerScore') || 0;
  
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
  }
  
  loadScores();
  
