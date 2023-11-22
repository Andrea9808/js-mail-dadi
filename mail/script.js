//Chiedi all’utente la sua email 
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo



//chiedo all'utente qual'è la sua mail
const mailUser = prompt("Qual'è la tua mail?");
//console.log(mailUser);


// Dichiaro le mail
const mail = [
    "andrea@gmail.com",
    "carmelo@gmail.com",
    "francesco@gmail.com"
];
//console.log(mail);

// controllo se l'utente è dentro o fuori

for (let i = 0; i < mail.length; i++) {



    if (mailUser === mail[i]) {
        let correct;
        correct = "Sei dentro!"
        console.log(correct);
        

    } else if (mailUser !== mail[i]) {
        let error;
        error = "Sei fuori!"
        console.log(error);
    }

}







