function toCamelCase(str) {
    let newStr;

    if (str.indexOf('-') > 0)
        newStr = str.split("-");
    else if (str.indexOf("_") > 0)
        newStr = str.split("_");

    for (let i = 1; i < newStr.length; i++) {
        let wordSplit = newStr[i].split('');
        wordSplit[0] = wordSplit[0].toUpperCase();
        newStr[i] = wordSplit.join('');
    }

    return newStr.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));