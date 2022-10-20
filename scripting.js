const generate_button = document.querySelector('#generate');
const computerlabel = document.querySelector('#computerlabel');
const resultlabel = document.querySelector('#resultlabel');

const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');

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
            resultlabel.textContent='You Lose! Rock loses to paper!';
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
}

rock_button.addEventListener('click',() => {playRound('rock')});
paper_button.addEventListener('click',() => playRound('paper'));
scissors_button.addEventListener('click', () => playRound('scissors'));
