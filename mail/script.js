//Chiedi all’utente la sua email 
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo




// stabilisco le costanti del bottone, dell'input mail e
const button = document.querySelector(".btn1");
const mailUser = document.getElementById("mail");
const mail = ["andrea@gmail.com","carmelo@gmail.com","francesco@gmail.com"]

// controllo se l'email è stata trovata o no
button.addEventListener("click",

function(){

    let emailCheck = mailUser.value;
   
    document.getElementById("output").innerHTML = "Non è stata trovata nessuna mail";

    for (let i = 0; i < mail.length; i++) {

       if(emailCheck === mail[i]){

        document.getElementById("output").innerHTML = "La tua mail è stata trovata";

       }

    }
})




   





   
    











