const arr = [1, 7, 3, 0, -5, 7, 3, 9]

// 1
console.log("1. Print with for loop all the number.");
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
console.log();

//2
function arrayLength(arr) {
    let arrlength = 0;
    let i = 0;
    while (arr[i] != undefined) {
        arrlength++;
        i++;
    }
    return i;
}
console.log("2. Create function “arrayLength” that return the array length (don’t use arr.length)");
console.log(arrayLength(arr));
console.log();

//3
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arrayLength(arr); i++)
        sum += arr[i];
    return sum;
}
console.log("3. Create function “arraySum” , the function return the sum of all elements in array.");
console.log(arraySum(arr));
console.log();

//4
function arrayMulti(arr) {
    let multiSum = 1;
    for (let i = 0; i < arrayLength(arr); i++)
        multiSum *= arr[i];
    return multiSum;
}
console.log("4. Create function \“arrayMulti\” , the function return the multiplication of all the elements in array.");
console.log(arrayMulti(arr));
console.log();