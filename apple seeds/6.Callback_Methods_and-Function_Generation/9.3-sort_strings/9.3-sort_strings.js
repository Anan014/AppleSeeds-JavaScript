const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a
console.log("a");
const ascDes = foods.slice().sort();
const desAsc = foods.slice().reverse();
console.log(foods);
console.log(ascDes);
console.log(desAsc);

//b
console.log("b");
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
console.log(foodsWithUpperCase.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}));
console.log(foodsWithUpperCase.reverse(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}));

// function funsort(arr) {
//     return arr.reverse((a, b) => a.toLowerCase() - b.toLowerCase());
// }
// console.log("ho", (funsort(foodsWithUpperCase)));


//c
console.log("c");
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

function longestStringReduce(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}

console.log(longestStringReduce(words));