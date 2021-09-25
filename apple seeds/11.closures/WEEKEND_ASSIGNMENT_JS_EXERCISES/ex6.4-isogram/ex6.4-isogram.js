function isogram(str) {
    let mySet = new Set;
    str.toLowerCase().split("").forEach(element => {
        mySet.add(element);
    });
    console.log(mySet);
    return Array.from(mySet).length == str.length ? true : false;
}

console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));
console.log(isogram("moOse"));