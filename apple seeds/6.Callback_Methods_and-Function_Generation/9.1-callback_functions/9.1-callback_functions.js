const numbers = [1, -5, 666, 2, 400, 11];
const desAsc = numbers.slice().sort((a, b) => a - b);
const ascDes = numbers.slice().sort((a, b) => b - a);
console.log(desAsc);
console.log(ascDes);