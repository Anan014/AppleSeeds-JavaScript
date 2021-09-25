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


//4
console.log("Question 4");

function vowelCount(arr) {
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    let splitArr = arr.toLowerCase().split('');
    splitArr.forEach(element => {
        if (vowels.hasOwnProperty(element))
            vowels[element]++;
    });
    return vowels;
}

let arr4 = "Et ut incididdunt elit ullamco.";
console.log(vowelCount(arr4));


//5
console.log("Question 5");

function capitalize(str) {
    return str.toUpperCase();
}

let arr5 = "Dolore exercitation sit do anim fugiat exercitation deserunt nulla laborum amet."
console.log(capitalize(arr5));


//6
console.log("Question 6");

function shiftLetters(str) {
    charCode = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            charCode = str[i].charCodeAt() + 1;
            result += String.fromCharCode(charCode);
        } else
            result += ' ';
    }
    return result;
}

let arr6 = "Do commodo ut eu fugiat ullamco nisi nisi excepteur esse dolore magna qui enim cillum.";
console.log(shiftLetters(arr6));


//7
console.log("Question 7");

function swapCase(str) {
    return str.split(' ').map((element, i) => {
        return i % 2 == 0 ? element.toUpperCase() : element.toLowerCase();
    }).join(' ');
}

let arr7 = "Occaecat est eu occaecat sunt aliquip excepteur labore reprehenderit.";
console.log(swapCase(arr7));