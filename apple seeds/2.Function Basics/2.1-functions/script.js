function describeCountry(country, population, capitalCity) {
    let sentence = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return sentence;
}

console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Israel", 9, "Jerusalem"));
console.log(describeCountry("England", 56, "London"));