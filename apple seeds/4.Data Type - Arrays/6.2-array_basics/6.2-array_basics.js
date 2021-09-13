const people = ["Greg", "Mary", "Devon", "James"];

//1. Using a loop, iterate through this array and console.log all of the people.
console.log("1.");
for (let i = 0; i < people.length; i++)
    console.log(people[i]);
console.log();


//2. Write the command to remove "Greg" from the array.
console.log("2.");
console.log(people.splice(0, 1));
console.log(people);
console.log();

//3. Write the command to remove "James" from the array.
console.log("3.");
console.log(people.splice(2, 1));
console.log(people);
console.log();

//4. Write the command to add "Matt" to the front of the array.
console.log("4.");
console.log(people.splice(0, 0, 'Matt'));
console.log(people);
console.log();

//5. Write the command to add your name to the end of the array.
console.log("5.");
console.log(people.splice(3, 0, 'Anan'));
console.log(people);
console.log();

//6. Using a loop, iterate through this array and after console.log-ing "Mary",exit from the loop.
console.log("6.");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary")
        break;
}
console.log(people);
console.log();

//7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("7.");
console.log(people.slice(2));
console.log();

//8. Write the command that gives the indexOf where "Mary" is located.
console.log("8.");
console.log(people);
console.log(people.indexOf("Mary"));
console.log();

//9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log("9.");
console.log(people);
console.log(people.indexOf("Foo"));
console.log();

/*
10. Redefine the people variable with the value you started with. Using the
splice command, remove "Devon" from the array and add "Elizabeth"
const people = ["Greg", "Mary", "Devon", "James"];
and "Artie". Your array should look like this when you are done ["Greg",
"Mary", "Elizabeth", "Artie", "James"].
*/
console.log("10.");
console.log(people.splice(0, 0, "Greg"));
console.log(people.splice(1, 1));
console.log(people.splice(3, 1));
console.log(people.splice(3, 0, "James"));
console.log(people.splice(2, 1));
console.log(people.splice(2, 0, "Elizabeth"));
console.log(people.splice(3, 0, "Artie"));
console.log(people);
console.log();

/*
11. Create a new variable called withBob and set it equal to the people
array concatenated with the string of "Bob".
*/
console.log("11.");
let withBob = people;
console.log(`People arr: `, people);
withBob.splice(5, 0, "Bob");
console.log(`Bob arr: `, withBob);
console.log();