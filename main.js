// setting game name
let gameName = 'Guess The Word Game';
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('footer').innerHTML = `${gameName} </br> Game created by Eng.Youssef Gamal`;

// game options
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;
let numberOfHints = 2;

// Manage words
let wordToGuess = '';
const words = ['Create','Delete','Update','Master','Branch','Mainly','Yousef','School'];
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase(); // get random word from the array
let messageArea = document.querySelector('.message');
document.querySelector('.hint span').innerHTML = numberOfHints;


function generateInput() {
    const inputsContainer = document.querySelector('.inputs');
    // create try div
    for (let i = 1; i <= numberOfTries; i++) {
        let tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try-${i}</span>`;
        if (i !== 1) tryDiv.classList.add('disabled');
        // Create inputs
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute('maxlength', "1");
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus();

    const disabledInputs = document.querySelectorAll('.disabled input');
    disabledInputs.forEach((input) => input.disabled = true);

    inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });
        input.addEventListener('keydown', function (event) {
            // console.log(event);
            const currentIndex = Array.from(inputs).indexOf(event.target); // this or event.target

            // setting game name
            let gameName = 'Guess The Word Game';
            document.title = gameName;
            document.querySelector('h1').innerHTML = gameName;
            document.querySelector('footer').innerHTML = `${gameName} </br> Game created by Eng.Youssef Gamal`;

            // game options
            let numberOfTries = 6;
            let numberOfLetters = 6;
            let currentTry = 1;

            function generateInput() {
                const inputsContainer = document.querySelector('.inputs');
                // create try div
                for (let i = 1; i <= numberOfTries; i++) {
                    let tryDiv = document.createElement('div');
                    tryDiv.classList.add(`try-${i}`);
                    tryDiv.innerHTML = `<span>Try-${i}</span>`;
                    if (i !== 1) tryDiv.classList.add('disabled');
                    // Create inputs
                    for (let j = 1; j <= numberOfLetters; j++) {
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.id = `guess-${i}-letter-${j}`;
                        input.setAttribute('maxlength', "1");
                        tryDiv.appendChild(input);
                    }

                    inputsContainer.appendChild(tryDiv);
                }
                inputsContainer.children[0].children[1].focus();

                const disabledInputs = document.querySelectorAll('.disabled input');
                disabledInputs.forEach((input) => input.disabled = true);

                inputs = document.querySelectorAll('input');
                inputs.forEach((input, index) => {
                    input.addEventListener('input', function () {
                        this.value = this.value.toUpperCase();
                        const nextInput = inputs[index + 1];
                        if (nextInput) nextInput.focus();
                    });
                    input.addEventListener('keydown', function (event) {
                        // console.log(event);
                        const currentIndex = Array.from(inputs).indexOf(event.target); // this or event.target

                        if (event.key === 'ArrowRight') {
                            const nextInput = currentIndex + 1;
                            if (nextInput < inputs.legnth) inputs[nextInput].focus();
                        }

                        if (event.key === 'ArrowLeft') {
                            const pervInput = currentIndex - 1;
                            if (pervInput < inputs.legnth) inputs[pervInput].focus();
                        }

                    });
                })
            }
        });
    })
}
// Manage check button
const guessButton = document.querySelector('button.check');
guessButton.addEventListener('click',handleGuesses);
// Manage hint
const hintBtn = document.querySelector('.hint');
hintBtn.addEventListener('click',getHint);

console.log(wordToGuess);
function handleGuesses(){
    let successGuess = true;
    for(let i = 1;i <= numberOfLetters;i++){
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        const letter = inputField.value.toLowerCase();
        const actualLetter = wordToGuess[i - 1];
        // Game logic

        // solution 1
        // if(letter === actualLetter) {
        //     //letter found and in place
        //     inputField.classList.add('yes-in-place');
        // } else {
        //     for(let l in wordToGuess){
        //         if(letter === l) {
        //             // letter found but not in place
        //             inputField.classList.add('not-in-place');
        //         } else {
        //             // letter not found
        //             inputField.classList.add('wrong');
        //         }
        //     }
        // }

        // solution 2
            if(letter === actualLetter) {
                //letter found and in place
                inputField.classList.add('yes-in-place');
            } else if(wordToGuess.includes(letter) && letter !== '') {
                // letter found but not in place
                inputField.classList.add('not-in-place');
                successGuess = false;
            } else {
                // letter not found
                inputField.classList.add('wrong');
                successGuess = false;
            }
    }
    // Check if user win or lose
    if(successGuess) {
        messageArea.innerHTML = `You won the word is <span>${wordToGuess}</span>`;
        messageArea.style.color = 'green';
        // disable all inputs
        let allTries = document.querySelectorAll('.inputs > div');
        allTries.forEach((tryDiv) => tryDiv.classList.add('disabled'));
        // disable guess button
        guessButton.classList.add('disabled');
    } else {
        messageArea.innerHTML = `Try Again!`;
        messageArea.style.color = 'red';

        let allTries = document.querySelectorAll('.inputs > div');
        // disable the current div and its inputs
        
        
        allTries[currentTry - 1].classList.add('disabled');
        prevDivInputs = document.querySelectorAll(`.try-${currentTry} input`);
        prevDivInputs.forEach((input) => input.disabled = true);
        // remove disable from the next div and its inputs
        currentTry++;
        
        currentDivInputs = document.querySelectorAll(`.try-${currentTry} input`);
        currentDivInputs.forEach((input) => input.disabled = false);
        
        let el = document.querySelector(`.try-${currentTry}`);
        if(el){
            allTries[currentTry - 1].classList.remove('disabled');
            el.children[1].focus();
        } else {
            messageArea.innerHTML = `Game Over!`;
            guessButton.classList.add('disabled');
            guessButton.disabled = true;
        }
    }
    
}



function getHint(){
    if(numberOfHints > 0){
        numberOfHints--;
        document.querySelector('.hint span').innerHTML = numberOfHints;
    }
    if(numberOfHints === 0){
        hintBtn.disabled = true;
    }

    const enabledInputs = document.querySelectorAll('input:not([disabled])');
    const emptyEnabledInputs = Array.from(enabledInputs).filter((e) => e.value === '');
    
    if(emptyEnabledInputs.length > 0){
        const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
        const randomInput = emptyEnabledInputs[randomIndex];
        const indexToFill = Array.from(enabledInputs).indexOf(randomInput);
        // console.log(randomIndex);
        if(indexToFill !== -1) {
            randomInput.value = wordToGuess[indexToFill].toUpperCase();
        }
    }
}

window.addEventListener('load', generateInput);
