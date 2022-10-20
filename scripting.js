const generate_button = document.querySelector('#generate');
const textlabel = document.querySelector('#label');

function getComputerChoice() {
    // Math.floor returns the greatest integer <= its argument
    let randomInt=Math.floor(Math.random() * 3);
    textlabel.textContent=randomInt;
}

generate_button.addEventListener('click',getComputerChoice);