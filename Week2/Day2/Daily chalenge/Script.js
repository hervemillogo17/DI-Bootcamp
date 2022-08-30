let sentence = "Le film n'est pas si mal, j'aime bien";
let wordNot = sentence.indexOf("bon");
let wordBad = sentence.indexOf("mal");
if (wordNot<wordBad) {
    console.log("Le film est bon ");
} else {
    console.log(sentence)
}