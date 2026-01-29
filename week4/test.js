//mark 78kj 175


var name1 = "Mark";
var w1 = 78;
var h1 = 175;

var name2 = "John";
var w2 = 95;
var h2 = 188;

h1 = h1 /100;
h2 = h2 / 100;

var bmi1 = w1 / (h1 ** 2);
console.log("MArk bmi: " , bmi1);
var bmi2 = w2 / (h2 **2);
console.log("John bmi: " , bmi2);

var markBMI = false;

if(bmi1 > bmi2){
    markBMI = true;
}

console.log(markBMI);