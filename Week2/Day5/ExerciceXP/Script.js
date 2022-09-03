//Partie1

function  playTheGame(){
    var dialog = confirm("Voulez vous jouer?");
    if (dialog) {
        let Number = prompt("Entrez un nombre entier compris entre 0 et 10");
    if (isNaN) {
        console.log("Désolé, C'est pas un numéro, au revoir");
    }
    if (Number<0 || Number>10) {
        console.log("Désolé c'est pas un bon chiffre, au revoir")
    }
    else{
        let computerNumber = Math.floor(Math.random() * 11);
    }
}
 else {
        console.log("Pas de probleme, au revoir");
    }
}


//Parie2
function compareNumbers(userNumber,computerNumber){
    let userNumber = prompt("usernumber");
    let computerNumber = prompt("computerNumber");
    if(userNumber == computerNumber){
        console.log("WINNER...")
    }
    if(userNumber>compareNumbers){
        console.log("Votre numero est plus grand que celui de l'ordinateur, devinez à nouveau");
    }
    else{
        console.log("Votre numero est plus petit que celui de l'ordinateur, devinez à nouveau");
       let a = prompt("");
    }
}