let numOfSiblings = prompt("How many siblings do you have?");

console.log("used ==");

if (numOfSiblings == 1)
    console.log("1 Sibling!");
else if (numOfSiblings > 1)
    console.log("More than 1 sibling.")
else
    console.log("No siblings");


console.log();
console.log("used ===");

if (numOfSiblings === 1)
    console.log("1 Sibling!");
else if (numOfSiblings > 1)
    console.log("More than 1 sibling.")
else
    console.log("No siblings");

console.log();
console.log("convert numSibling to a number");

numOfSiblings = 1;

if (numOfSiblings === 1)
    console.log("1 Sibling!");
else if (numOfSiblings > 1)
    console.log("More than 1 sibling.")
else
    console.log("No siblings");

/*
The strict equality operator (===) behaves identically to the abstract equality operator (==)
except no type conversion is done,
and the types must be the same to be considered equal.
*/