let start = document.querySelector('.start');
let end = document.querySelector('.end');
let heart = document.querySelector('.heart');
let restart = document.querySelector('.restart');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
const inputContainer = document.querySelector('.input-container');
const numberInput = document.querySelector('#number');
let life = 2;
let random = Math.floor(Math.random() * 101);

console.log(random);


const guessNumber = function () {
    if (life > 1) {
        if (random == numberInput.value) {
            message.innerText = `Congrats!`;
            numberInput.value = '';
        }
        else if (numberInput.value < random) {
            message.innerText = `This is too lower!\nPlease enter a high number.`;
            start.innerText = numberInput.value;
            numberInput.value = '';
            life--;
        }
        else if (numberInput.value > random) {
            message.innerText = `This is too high!\nPlease enter a lower number.`;
            end.innerText = numberInput.value;
            numberInput.value = '';
            life--;
        }
    }
}


window.onload = () => {
    numberInput.focus();
};

check.addEventListener('click', guessNumber);