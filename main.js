// setting game name
let gameName = 'Guess The Word Game';
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('footer').innerHTML = `${gameName} </br> Game created by Eng.Youssef Gamal`;

// game options
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;

function generateInput(){
    const inputsContainer = document.querySelector('.inputs');
    // create try div
    for(let i = 1;i <= numberOfTries;i++){
        let tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try-${i}</span>`;
        if(i !== 1) tryDiv.classList.add('disabled');
        // Create inputs
        for(let j = 1;j <= numberOfLetters;j++){
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute('maxlength',"1");
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus(); 
}

window.addEventListener('load',generateInput);
