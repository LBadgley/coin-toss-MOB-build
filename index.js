let image = document.getElementById('image');
const choiceForm = document.getElementById('choice-form');
const numberOfWins = document.getElementById('wins-count');
const numberOfLosses = document.getElementById('losses-count');

let wins = 0;
let losses = 0;

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

//get the user choice
    const userChoice = choiceForm.elements.side.value;
// coin flip reveal
    const randomNumber = Math.random(); 

    if(randomNumber <= .5) {
        // console.log('Heads');
        image.alt = 'heads!';
        image.src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/27747531_1751480234914508_2480748971091986686_o.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=6ac9f0311b7cd652eb6a82c7e38e1676&oe=5CBC5E72';
        if(userChoice === 'heads') {
            wins++;
        } else {
            losses++;
        }
    } else {
        // console.log('tails');
        image.alt = 'tails!';
        image.src = 'https://shedsimove.com/sites/default/files/images/shed%20simove%20coin%20clean%20back.jpg';
        if(userChoice === 'tails') {
            wins++;
        } else {
            losses++;
        }
    }
    numberOfWins.innerHTML = wins;
    numberOfLosses.innerHTML = losses;
});



