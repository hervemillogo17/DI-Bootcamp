//Exercice1
//PART1
function infoAboutMe() {
console.log("Je me nomme MILLOGO Hervé j'ai 21 ans, j'aime la lecture et le sport")
}
infoAboutMe();

//PART2
//1
function infoAboutPerson(personName, personAge, personFavoriteColor){
//2
    console.log("Vous vous appelez " + personName + " Vous avez " + personAge + "ans, " + " Votre couleur préférée est " + personFavoriteColor);
}
//3
infoAboutPerson("David", 45, "bleu");
infoAboutPerson("Josh", 12, "jaune");



//Exercice2
//1
function calculateTip(){
//2
let montant = prompt("Quel est le montant de la facture?");
//3
let pourboire;
if (montant<50) {
pourboire = (montant*20)/100;
}
if (montant>=50 || montant<=200) {
    pourboire = (montant*15)/100;
}
if (montant>200) {
    pourboire = (montant*10)/100;
}

let facture ;
facture =pourboire+montant;
console.log("Le montant du pourboire est: " + pourboire + " La facture finale est: " + facture);
}
calculateTip();


//Exercice3
function isDivisible(){
    let list;
    for (let i = 0; i < 500; i++) {
        if (i%23==0) {
            list= i++;
        }
        console.log(list);
    }
}
isDivisible();


//Exercice4*****
//1
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
//2
let shoppingList = ["banana","orange","apple"];
//3
let i;
function myBill(){
if (i in stock) {
    console.log( prices[i]);
}
}
myBill();



//Exercice5
function changeEnough(itemPrice, amountOfChange){
    amountOfChange = 8.50;
    if ( amountOfChange >= itemPrice) {
        return true
    }
    else{
        return false;
    }
}
changeEnough(4.5, [25, 20, 5, 0])



//Exercice6
let nombreJourLouerVoiture;
function hotelCost(nombreNuit) {
    return "l'hotel a coute : " + 140 * nombreNuit + "$";
}

//second function
function planeRideCost(destination) {
    let londres = 183, paris = 220, otherDestination = 300;
    if (destination === "londres") {
        return "Les billets d'avion ont coute :" + londres + "$";
    }
    else if (destination === "paris") {
        return "Les billets d'avion ont coute :" + paris + "$";


    }
    else {
        return "Les billets d'avion ont coute :" + otherDestination + "$";

    }
}
//third function
function rentalCarCost(nombreJourLouerVoiture) {
    let coutLocation = 40 * nombreJourLouerVoiture;
    if (nombreJourLouerVoiture > 10) {
        let remise = (coutLocation * 5) / 100;
        return "La voiture a coute :" + remise + "$";

    }
    else {
        return "La voiture a coute :" + coutLocation + "$";

    }
}
//fourth function
function totalVacationCost() {
    do {

        nombreNuit = parseInt(prompt("Donnez le nombre de nuit que vous voules passer a l'hotel"));

    } while (!Number(nombreNuit));
    
    do {
        destination = prompt("Donnez votre destination");
    } while (Number(destination));

    do {
         nombreJourLouerVoiture = parseInt(prompt("Pendant combien de jours vous voulez louer une voiture"));
    } while (!Number(nombreJourLouerVoiture));
    console.log(hotelCost(nombreNuit) + ", " + planeRideCost(destination) + "," + rentalCarCost(nombreJourLouerVoiture));
}
totalVacationCost();
