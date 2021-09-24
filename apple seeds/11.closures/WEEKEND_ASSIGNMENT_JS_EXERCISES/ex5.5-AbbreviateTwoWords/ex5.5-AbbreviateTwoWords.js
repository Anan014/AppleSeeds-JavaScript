function abbreviateTwoWords(str) {
    let abbreviateStr = "";
    let newStr = str.split(" ");
    abbreviateStr += newStr[0][0].toUpperCase();
    abbreviateStr += ".";
    abbreviateStr += newStr[1][0].toUpperCase();
    return abbreviateStr;
}

console.log(abbreviateTwoWords("Sam Harris"));
console.log(abbreviateTwoWords("Patrick Feeney"));