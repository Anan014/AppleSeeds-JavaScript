const arr1 = [19, 5, 42, 2, 77];
const arr2 = [10, 343445353, 3453445, 3453545353453];

function sumOfLowestNumbers(arr) {
    let min = Math.min.apply(null, arr);
    let secondMin = Math.min.apply(null, arr.filter(n => n != min));
    return min + secondMin;
}
//let min = arr1.reduce((a, b) => Math.min(a, b));

console.log(sumOfLowestNumbers(arr1));
console.log(sumOfLowestNumbers(arr2));