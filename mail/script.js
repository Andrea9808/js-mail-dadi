//Chiedi all’utente la sua email 
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo


 // Stabilisco le costanti del bottone, dell'input mail e della lista di email
 const button = document.querySelector(".btn1");
 const mailUser = document.getElementById("mail");
 const mail = [
    "andrea@gmail.com", 
    "carmelo@gmail.com", 
    "francesco@gmail.com"];

 // Aggiungo un listener per l'evento di clic sul bottone
 button.addEventListener("click", function ()
  {
     //verifico la mail che inserisco
     let emailCheck = mailUser.value;

     //creo variabile per mail corretta
     let emailTrovata;

     // Controllo se l'email è nella lista
     for (let i = 0; i < mail.length; i++) {
         if (emailCheck === mail[i]){
             
            emailTrovata = mail[i];

         }
     }

     // output
     if (emailTrovata) {

         document.getElementById("output").innerHTML = "La tua mail è stata trovata";

     } else {

         document.getElementById("output").innerHTML = "Non è stata trovata nessuna mail";

     }
 });


   





   
    











