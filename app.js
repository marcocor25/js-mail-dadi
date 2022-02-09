// COLLEGO IL BOTTONE PER PRENDERE L'EMAIL DELL'UTENTE

const getEmail = document.getElementById('email-button');
console.log(getEmail);

// CREO UNA VARIABILE PER PRENDERE IL VALUE DELL'INPUT EMAIL

const email = document.getElementById('email-box');
console.log(email);

getEmail.addEventListener('click', function() {
    alert(email.value);
})