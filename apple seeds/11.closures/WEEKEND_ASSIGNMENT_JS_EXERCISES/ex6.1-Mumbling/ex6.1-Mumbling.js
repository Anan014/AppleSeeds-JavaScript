function accum(str) {
    let newStr = str.split("");
    let finalStr = "";
    for (let i = 0; i < newStr.length; i++) {
        finalStr += newStr[i].toUpperCase();
        finalStr += newStr[i].repeat(i).toLowerCase();
        if (i < newStr.length - 1)
            finalStr += " ";
    }
    return finalStr.split(" ").join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));