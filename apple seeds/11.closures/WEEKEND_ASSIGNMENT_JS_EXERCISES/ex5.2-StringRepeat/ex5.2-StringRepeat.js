function repeatStr(num, str) {
    let repeatedStr = "";
    for (let i = 0; i < num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

console.log(repeatStr(6, "l"));
console.log(repeatStr(5, "Hello"));