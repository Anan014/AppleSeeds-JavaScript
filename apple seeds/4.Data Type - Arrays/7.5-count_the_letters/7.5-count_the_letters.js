const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
    const obj = {};
    let tempLetter;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            tempLetter = arr[i][j].toLowerCase();
            if (tempLetter != ' ')
                if (obj[tempLetter] != undefined)
                    obj[tempLetter]++;
                else
                    obj[tempLetter] = 1;
        }
    }
    return obj;
}

//most occurrences
function mostOccurrences(obj) {
    let size = 0,
        key,
        arr = Object.values(obj),
        max = Math.max(...arr);
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    for (let i = 0; i < size; i++) {
        if (Object.values(obj)[i] == max) {
            let theLetter = `${Object.keys(obj)[i]} ${Object.values(obj)[i]}`;
            return theLetter;
        }
    }
}

console.log(countLetters(array));
console.log(mostOccurrences(countLetters(array)));