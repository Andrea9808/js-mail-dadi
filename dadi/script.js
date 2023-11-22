//Generare un numero random da 1 a 6, sia per il giocatore
//sia per il computer. Stabilire il vincitore, in base a chi fa il
//punteggio più alto.

//stabiliamo i numeri randomici del computer e l'umano
let humanPlayer = Math.floor(Math.random () *6) + 1;
console.log("Umano " + humanPlayer);


let computerPlayer = Math.floor(Math.random () *6) + 1;
console.log("Computer " + computerPlayer);

//stabilisco output
let output;



document.getElementById("human").innerHTML = "Umano: " + humanPlayer;
document.getElementById("computer").innerHTML = "Computer: " + computerPlayer;


//vittoria computer o umano, pareggio
if(humanPlayer > computerPlayer){

    output = "Hai vinto, umano !!"
    console.log(output);
}

else if(humanPlayer < computerPlayer){
    
    output = "Hai vinto, computer !!"
    console.log(output);
}

else{
   
    output = "Siete in pareggio !!"
    console.log(output);
}

document.getElementById("player").innerHTML = output;




