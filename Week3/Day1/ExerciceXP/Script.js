//Exercice1
let afficher = document.getElementById("container").innerHTML;
console.log(afficher);
document.getElementsByTagName("li")[1].innerHTML = "Richad";
document.getElementsByTagName("li")[0].innerHTML = "Hervé";
document.getElementsByTagName("li")[2].innerHTML = "Hervé";
document.getElementsByTagName("li")[3].remove();


//Exercice2

document.getElementsByTagName("li")[5].style.display = "none";

//Exercice3
document.body.firstElementChild.setAttribute("id","socialNetworkNavigation");
const u=document.body.firstElementChild.nextElementSibling;

const list=document.getElementsByTagName("li");
const first=document.createElement("li");
const element=document.createTextNode("Logout");
// first.appendChild(element);
 first.appendChild(element);
document.getElementById("socialNetworkNavigation").firstElementChild.appendChild(first);
        // document.getElementsByTagName("ul")[0].textContent=list[0].textContent;
// for(let i=0;i<list.length;i++){
    let i=4;
    while(i!=0){ 
    let x=document.getElementsByTagName("ul")[0];
     x=list[i].style.display='none';
     
       i--; 
    }
// }
        // document.getElementsByTagName("ul")[0].textContent=list[1].textContent;



//Exercise 4 : Users And Style
// Change the background color of the div to lightblue and increase its padding
let myDiv = document.getElementsByTagName('div');
myDiv = myDiv[0];
myDiv.style.backgroundColor = 'lightblue';
myDiv.style.padding = '2em';
//Don’t display the first name (John) and give a border to the second name (Pete)
let names = document.getElementsByTagName('li');
let john = names[0];
let pete = names[1];
john.style.display = 'none';
pete.style.border = '2px solid red';
//Change the font size of the whole HTML
document.body.style.fontSize = '30px';
//Check if the background color of the div is lightblue, if yes alert “Hello x and y” (x and y are the users : John and Pete)
if(myDiv.style.backgroundColor == 'lightblue'){
    alert('Hello ' + john.textContent + ' and ' + pete.textContent);
}

