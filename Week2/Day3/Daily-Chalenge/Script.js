let starts = "*******************************************************"
for(let i=0;i<6;i++){
    console.log(starts.slice(0,i+1));
} 

//second
for(let n=0;n<6;n++){
    var start=[];
    for(let m=0; m<n+1; m++){
        start.push("*");
    }
    console.log(start.join(""))
}