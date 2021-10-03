//1
console.log("Question 1");

console.log(this); //empty object

//2
console.log("Question 2");
const myObj = {
    name: "Timmy",
    greet: function() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//a) An arrow function does not have its own this.
//b) change arrow function to regualr function


//3
console.log("Question 3");
const myFuncDec = function() {
    console.log(this);
};

myFuncDec();

//4
console.log("Question 4");
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();

//5
console.log("Question 5");
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});