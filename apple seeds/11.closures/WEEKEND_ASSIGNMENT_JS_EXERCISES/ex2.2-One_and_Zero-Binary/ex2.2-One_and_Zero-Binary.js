const binary11 = [1, 0, 1, 1];
const binary1995 = [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1];
const binary15 = [1, 1, 1, 1];
const hexadecimal1995 = [7, "C", "B"];

function theConventor(arr, base) {
    let arrSplit = arr.toString().split(",").join("");
    return parseInt(arrSplit, base);
}

function oneAndZeroBinary(arr) {
    let sum = 0; //sum for the decimal number 
    // puts a location number for every cell in array and then reverse it 
    let counter = arr.map(function(val, i) {
        return i;
    }).reverse();

    //calculat bonary to deciaml and store it in cells
    let storeBin = arr.map(function(val, i) {
        return val * Math.pow(2, counter[i]);
    });

    //loop to count the final conversation from binary to decimal
    for (let i = 0; i < arr.length; i++) {
        sum += storeBin[i];
    }

    return sum;
}

console.log(theConventor(binary15, 2));
console.log(theConventor(hexadecimal1995, 16));
console.log(oneAndZeroBinary(binary11));