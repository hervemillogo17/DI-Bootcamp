//Execice1

let x = 5;
let y = 2;
if (x > y) {
    console.log( x  + " is the biggest number");
}
else {
    console.log( y  + " is the biggest number");
}


//Exercice2

let newDog ="Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog =="Chihuahua") {
    console.log( "J'adore les chihuahuas, c'est ma race de chien préférée")
}
else{
    console.log( "Je m'en fous, je préfère les chats");
}



//Exercice3

let a = parseInt(prompt("Saissez une valeur"));
if (a % 2 == 0) {
    console.log(a + " est un nombre pair");
    
}
else{
    console.log(a + " est un nombre impair" );
}



//Exercice 4


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch (users) {

        case 1:
        console.log([2] + "est en ligne");
        
        break;
        case 2:
        console.log([2],[3] + "est en ligne");
        
        break;
        case 4:
        console.log([0],[1] + "et 2 autres sont en ligne");
        
        break;


    default:
        break;
}