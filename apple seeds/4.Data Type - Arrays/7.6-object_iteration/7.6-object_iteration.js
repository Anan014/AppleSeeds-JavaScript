function swap(json) {
    let swaped = {};
    for (let key in json) {
        swaped[json[key]] = key;
    }
    return swaped;
}

const json = {
    Anan: 'Amer',
    Evgeni: 'Bershadsky',
    Itay: 'Turgeman'
}

console.log(json);
console.log(swap(json));