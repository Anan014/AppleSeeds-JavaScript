function fibonacci(signature, num) {
    let sum = 0;
    let arr = [];
    arr[0] = signature[0];
    arr[1] = signature[1];
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
const signature0 = [0, 1];
const signature1 = [1, 1];

console.log(fibonacci(signature0, 12));
console.log(fibonacci(signature1, 12));