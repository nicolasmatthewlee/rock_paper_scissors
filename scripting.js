const generate_button = document.querySelector('#generate');
const computerlabel = document.querySelector('#computerlabel');
const resultlabel = document.querySelector('#resultlabel');

const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');

const round_label = document.querySelector('#round');
const player_score_label = document.querySelector('#player_score');
const computer_score_label = document.querySelector('#computer_score');

let round = 1;
let player_score=0;
let computer_score=0;

function getComputerChoice() {
    // Math.floor returns the greatest integer <= its argument
    let randomInt=Math.floor(Math.random() * 3);

    let computer_choice;
    switch(randomInt) {
        case 0:
            computer_choice='rock';
            break;
        case 1:
            computer_choice='paper';
            break;
        case 2:
            computer_choice='scissors';
            break;
    }

    let today = new Date();
    let time = today.getMilliseconds();

    return computer_choice;
}

function playRound(player_selection) {

    let computer_selection = getComputerChoice();

    if (player_selection == computer_selection) {
        resultlabel.textContent=`Tie! ${player_selection.charAt(0).toUpperCase()+player_selection.slice(1)} ties with ${computer_selection}!`
    } else {
        if (player_selection == 'rock' && computer_selection == 'paper') {
            resultlabel.textContent='You lose! Rock loses to paper!';
        } else if (player_selection == 'rock' && computer_selection == 'scissors') {
            resultlabel.textContent='You win! Rock beats scissors!';
        } else if (player_selection == 'scissors' && computer_selection == 'rock') {
            resultlabel.textContent='You lose! Scissors loses to rock!';
        } else if (player_selection == 'scissors' && computer_selection == 'paper') {
            resultlabel.textContent='You win! Scissors beats paper!';
        } else if (player_selection == 'paper' && computer_selection == 'rock') {
            resultlabel.textContent='You win! Paper beats rock!';
        } else if (player_selection == 'paper' && computer_selection == 'scissors') {
            resultlabel.textContent='You lose! Paper loses to scissors!';
        }
    }

    // update score and round number
    if (resultlabel.textContent.includes('You win')) {
        player_score++;
        player_score_label.textContent=`Player score: ${player_score}`;
    } else if (resultlabel.textContent.includes('You lose')) {
        computer_score++;
        computer_score_label.textContent=`Computer score: ${computer_score}`;
    }

    round++;
    round_label.textContent = `Round ${round}`

}

rock_button.addEventListener('click',() => {playRound('rock')});
paper_button.addEventListener('click',() => playRound('paper'));
scissors_button.addEventListener('click', () => playRound('scissors'));