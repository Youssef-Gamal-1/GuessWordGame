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

    const disabledInputs = document.querySelectorAll('.disabled input');
    disabledInputs.forEach((input) => input.disabled = true);

    inputs = document.querySelectorAll('input');
    inputs.forEach((input,index) => {
        input.addEventListener('input',function(){
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if(nextInput) nextInput.focus();
        });
        input.addEventListener('keydown',function(event){
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

    const disabledInputs = document.querySelectorAll('.disabled input');
    disabledInputs.forEach((input) => input.disabled = true);

    inputs = document.querySelectorAll('input');
    inputs.forEach((input,index) => {
        input.addEventListener('input',function(){
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if(nextInput) nextInput.focus();
        });
        input.addEventListener('keydown',function(event){
            // console.log(event);
            const currentIndex = Array.from(inputs).indexOf(event.target); // this or event.target
            
            if(event.key === 'ArrowRight'){
                const nextInput = currentIndex + 1;
                if(nextInput < inputs.legnth) inputs[nextInput].focus();
            }
            
            if(event.key === 'ArrowLeft'){
                const pervInput = currentIndex - 1;
                if(pervInput < inputs.legnth) inputs[pervInput].focus();
            }

        });
    })
}

window.addEventListener('load',generateInput);

        });
    })
}

window.addEventListener('load',generateInput);
