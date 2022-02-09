// MAIL CHECK

// COLLEGO IL BOTTONE PER PRENDERE L'EMAIL DELL'UTENTE
const getEmail = document.getElementById('email-button');
console.log(getEmail);

// CREO UNA VARIABILE PER PRENDERE IL VALUE DELL'INPUT EMAIL
const emailInput = document.getElementById('email-box');
console.log(emailInput);

// CREO UNA VARIABILE PER SAPERE SE HO TROVATO UNA EMAIL VALIDA
let notAllowedEmail = true;
// LA VARIABILE HA VALORE TRUE QUANDO L'EMAIL INSERITA DALL'UTENTE NON È VALIDA
// ALTRIMENTI HA VALORE FALSO

// CREO ARRAY DI EMAIL AMMESSE
const allowedEmail = [
    'marco.corallo.1997@gmail.com',
    'ciccio@pasticcio.it',
    'ajeje@brazorf.it',
    'mario@rossi.it',
    'homer@simpson.com',
    'bart@simpson.it'
];
console.log(allowedEmail);

getEmail.addEventListener('click', function() {
    for (let i = 0; i < allowedEmail.length; i++) {
        if (emailInput.value == allowedEmail[i]) {
            notAllowedEmail = false;
        }
    }
    
    if(notAllowedEmail == true){
        alert('Email errata!');
        console.log('Email errata!');
    }
    else{
        alert('Email corretta, puoi entrare!');
        console.log('Email corretta, puoi entrare!');
    }
})

// DICE GAME

// COLLEGO IL BOTTONE PER LANCIARE IL DADO
const diceButton = document.getElementById('dice-button');
console.log(diceButton);

// COLLEGO I CONTENITORI PER I RISULTATI DEI DAI
const yourResult = document.getElementById('your-result');
console.log(yourResult);
const computerResult = document.getElementById('computer-result');
console.log(computerResult);

// GENERATORE NUMERO PER UTENTE
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(userNumber);

// GENERATORE NUMERO PER COMPUTER
const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(computerNumber);

diceButton.addEventListener('click', function() {
    yourResult.append(userNumber);
    computerResult.append(computerNumber);
})