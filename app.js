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
const userResult = document.getElementById('user');
console.log(userResult);
const computerResult = document.getElementById('computer');
console.log(computerResult);
const finalResult = document.getElementById('result');
console.log(finalResult);

// GENERATORE NUMERO PER UTENTE
const userGenerator = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(userGenerator);

// GENERATORE NUMERO PER COMPUTER
const computerGenerator = Math.floor(Math.random() * (6 - 1 + 1) +1);
console.log(computerGenerator);

// VARIABILI RISULTATI
const youLost = ('Hai perso!');
const youWon = ('Hai vinto!');
const pair = ('Pareggio...');

diceButton.addEventListener('click', function() {
    userResult.append(userGenerator);
    computerResult.append(computerGenerator);
    
    if (userGenerator > computerGenerator) {
        finalResult.append(youWon);
        finalResult.style.color = "lightgreen";
    } else if (userGenerator < computerGenerator) {
        finalResult.append(youLost);
        finalResult.style.color = "red";
    } else if (userGenerator == computerGenerator) {
        finalResult.append(pair);
        finalResult.style.color = "darkblue";
    }
})