function fibonacci(num) {
    let sum = 0;
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(fibonacci(12));