//1
console.log("Question 1");

function doubleValues(arr) {
    return newArr = arr.map(x => x * 2);
}

const arr1 = [10, 23, 56, 21, 15];
console.log(doubleValues(arr1));

//2
console.log("Question 2");

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(element => { if (element % 2 == 0) newArr.push(element); });
    return newArr;
}
console.log(onlyEvenValues(arr1));

//3
console.log("Question 3");

function showFirstAndLast(arr) {
    let newArr = arr.filter(word => {
        return typeof word === 'string';
    });

    let finalArr = newArr.filter(word => {
        return word == newArr[0] || word == newArr[newArr.length - 1]
    });
    return finalArr;
}
const arr3 = [215, 158, "adeeb", 5, "itay", 54, "anan"];
console.log(showFirstAndLast(arr3));