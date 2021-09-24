function maskify(str) {
    let newStr = "";
    if (str.length > 4) {
        for (let i = 0; i < str.length - 4; i++) {
            newStr += "#";
        }

        newStr += str.slice((str.length - 4), str.length);
        return newStr;
    }
    return str;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));