//Part 2
//challenge #1 
const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins1=calcAverage(44,23,71);
const avgKoalas1=calcAverage(65,54,49);
const avgDolphins2=calcAverage(85,54,41);
const avgKoalas2=calcAverage(23,34,27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins!');
    }
}
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
//challenge #2
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

console.log(calcTip(100));
const bills=[125,555,44];
const tips = bills.map(calcTip);
const total = bills.map((bill, index) => bill + tips[index]);
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
//challenge #3
const mark={fullName: 'Mark Miller',
    mass:78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }};
const john={fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();
if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(2)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(2)})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(2)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI.toFixed(2)})!`);
}