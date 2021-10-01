const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25];

function sum(arr) {
    return arr.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue;
        }
    );
}

console.log("sum of all: ", sum(arr));

function findMax(arr) {
    return arr.reduce(
        (accumulator, currentValue) => {
            return Math.max(currentValue, accumulator);
        }
    );
}

console.log("Max value: ", findMax(arr));

function sumOfEven(arr) {
    return arr.reduce(
        (accumulator, currentValue) => {
            return (accumulator % 2 == 0 ? accumulator : 0) + (currentValue % 2 == 0 ? currentValue : 0);
        }
    );
}

console.log("Sum of even numbers: ", sumOfEven(arr));


function avg(arr) {
    return (arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) / arr.length);
}

console.log("average: ", avg(arr));