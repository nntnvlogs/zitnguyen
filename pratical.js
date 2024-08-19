//#1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92; 
let johnHeight = 1.95;
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Mark has a higher BMI than John.", markHigherBMI);
//#2
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})!`);
}
//#3
const Dolphins_score=[96,108,89];
const Koalas_score=[88,91,110];
const sum_Dolphins=Dolphins_score.reduce((a,b)=>a+b);
const average_Dolphins=(sum_Dolphins/Dolphins_score.length);
const sum_Koalas=Koalas_score.reduce((a,b)=>a+b);
const average_Koalas=(sum_Koalas/Koalas_score.length);
let result=average_Dolphins>average_Koalas;
if(result)
{
    console.log('Dolphin win');
}
else{
    if
}


