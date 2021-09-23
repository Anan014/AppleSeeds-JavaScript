const arr1 = [1, 1, 1, 2, 1, 1];
const arr2 = [0, 0, 0.55, 0, 0];

function findUniq(arr) {
    let num1 = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min)
            num1++;
    }
    if (num1 > 1)
        return max;
    else
        return min;
}

console.log(findUniq(arr1));
console.log(findUniq(arr2));