function summation(num) {
    let sum = 0;
    while (num > 0) {
        sum += num;
        num--;
    }
    return sum;
}

console.log(summation(2));
console.log(summation(8));