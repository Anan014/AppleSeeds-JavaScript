function findNextSquare(num) {
    if (Number.isInteger(Math.sqrt(num)) == true) {

        return Math.pow(Math.sqrt(num) + 1, 2);
    } else return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));