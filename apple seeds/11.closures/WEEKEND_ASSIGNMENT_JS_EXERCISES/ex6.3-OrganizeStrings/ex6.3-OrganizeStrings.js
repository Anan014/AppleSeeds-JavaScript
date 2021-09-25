function organizeStrings(str1, str2) {
    let mySet = new Set;
    let arr = [];
    str1.split("").forEach(element => { mySet.add(element); });
    str2.split("").forEach(element => { mySet.add(element); });

    return Array.from(mySet).sort().join("");
}

let a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(organizeStrings(a, b));
a = "abcdefghijklmnopqrstuvwxyz";
console.log(organizeStrings(a, a));