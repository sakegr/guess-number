let start = document.querySelector('.start');
let end = document.querySelector('.end');
let heart = document.querySelector('.heart');
let restart = document.querySelector('.restart');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let gameEnd = document.querySelector('.game-end');
const lets = document.querySelector('.lets');
const please = document.querySelector('.please');
const inputContainer = document.querySelector('.input-container');
const numberInput = document.querySelector('#number');
let life = 5;
let random = Math.floor(Math.random() * 101);

console.log(random);


const guessNumber = function () {
    if (life > 1) {
        if (numberInput.value > 0 && numberInput.value < 100) {
            if (random == numberInput.value) {
                message.innerText = `Congrats!`;
                numberInput.value = '';
            }
            else if (numberInput.value < random) {
                message.innerText = `This is too lower!\nPlease enter a high number.`;
                start.innerText = numberInput.value;
                numberInput.value = '';
                life--;
                heart.innerText = life;
            }
            else if (numberInput.value > random) {
                message.innerText = `This is too high!\nPlease enter a lower number.`;
                end.innerText = numberInput.value;
                numberInput.value = '';
                life--;
                heart.innerText = life;
            }
            
        }
        else {
            message.innerText = `Please enter a valid number!`
            numberInput.value = '';
        }
        
    }
     else if (life <= 1) {
        numberInput.value = '';
        numberInput.style.display = 'none';
        check.style.display = 'none';
        message.style.display = 'none';
        restart.style.display = 'block';
        gameEnd.innerText = `Sorry! GAME OVER!`;
     }
}


window.onload = () => {
    numberInput.focus();
};

check.addEventListener('click', guessNumber);