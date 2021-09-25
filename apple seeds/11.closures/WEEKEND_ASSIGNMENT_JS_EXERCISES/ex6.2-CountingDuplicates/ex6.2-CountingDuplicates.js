function countingDuplicates(str) {
    let mySet = new Set();
    let arr = [];
    str.toLowerCase().split("").forEach(element => {
        arr.indexOf(element) != -1 ? mySet.add(element) : arr.push(element)
    });

    return Array.from(mySet).length;
}

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));