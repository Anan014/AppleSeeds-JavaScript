//1 ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
function isString(str, func) {
    if (typeof str === 'string' || str instanceof String)
        return func(str);
    else
        return console.log("Not a string dude !!!");
}

function checkString(str) {
    console.log(str);
}

isString("Anan", checkString);
isString(5, checkString);


//2 ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
function firstWordUpperCase(str, func) {
    const str1 = str.split(' ').map(word => word == str.split(' ')[0] ? word.toUpperCase() : word);
    return func(str1)
}

function dashWords(str) {
    console.log(str.join('-'));
}

firstWordUpperCase("Anan is ok thanks", dashWords);


//3 ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
function emailCreator(str) {
    const emailEnding = "@gmail.com";
    newEmail = str.join('').concat(emailEnding);
    console.log(newEmail);
}

firstWordUpperCase("julis", emailCreator);


//4 ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
function multiFunc(arr, func) {
    console.log(arr);
    return func(arr.map(x => x * 2));
}

function printIt(arr) {
    console.log(arr);
}

multiFunc([1, 2, 5, 8, 6, 4, 3, 28], printIt);