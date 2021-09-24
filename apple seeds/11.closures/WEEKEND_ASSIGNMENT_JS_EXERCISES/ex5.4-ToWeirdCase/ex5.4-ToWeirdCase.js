function toWeirdCase(str) {
    let newStr = str.split('');
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2 == 0)
            newStr[i] = newStr[i].toUpperCase();
        else
            newStr[i] = newStr[i].toLowerCase();
    }
    return newStr.join('');
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));