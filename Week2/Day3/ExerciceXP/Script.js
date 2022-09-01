//Exercice1
     //Partie1

let people = ["Greg", "Mary", "Devon", "James"];

//1
people.shift();
console.log(people);

//2
people.splice(2,1,"Jason");
console.log(people);

//3
people.push("Hervé");
console.log(people);

//4
console.log(people.indexOf("Mary"));

//5
console.log(people.slice(1,3));

//6
console.log(people.indexOf("Foo"));//il renvoit parce qu'il ne fait pas partie de la liste du tableau

//7
let last = "Hervé";//Le dernier element du Tableau indique la longueur du tableau


//Partie 2
//1
for (let i in people) {
    console.log(people[i]);
}

//2
for (let i in people) {
    console.log(people[i]);
}

for (let i in people) {
    if (i === 2) { 
        break;
      }
    console.log("jason");
  }


//Exercice2
//1
let colors = ["Bleu", "Blanc","Rouge", "Noir", "Orange"];

//2
let Suffixe = ["°1","°2", "°3", "°4","°5"];
for( let i in colors){
    console.log("Mon choix " + Suffixe[i] + " est " + colors[i]);
}


//Exercice3
//1
let number = prompt("Saisissez un numero");
console.log(typeof number);
while(number<10){
   number = prompt("Saisissez un nombre");
}

//Exercice4
//1
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
//2
console.log(building.numberOfFloors);

//3
console.log(building.numberOfAptByFloor.firstFloor + " et " + building.numberOfAptByFloor.thirdFloor);

//4
console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]);

//5
let som = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (som > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200; 
}
console.log("Le Loyer de Dan est " + building.numberOfRoomsAndRent.dan[1]);


//Exercice5
let famille = {
    freres : 4,
    soeurs : 3,
    cousins: 6,
}
for (let x in famille) {
    console.log(x)
    console.log(famille[x])
}



//Exercice6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let sentence = [];
  for (let i in details){
  sentence.push(i+""+details[i]);
}
console.log(sentence.join(""));

//Exercice7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let society = [];
for (i in names){
  society.push(names[i].slice(0,1));
}
 console.log(society.join(""));
  



