const arr = ["boo", "doooo", "hoo", "ro"];

function stringToNumbers(arr) {
    let numbersArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        numbersArr[i] = arr[i].length;
    }
    return numbersArr;
}

console.log(stringToNumbers(arr));