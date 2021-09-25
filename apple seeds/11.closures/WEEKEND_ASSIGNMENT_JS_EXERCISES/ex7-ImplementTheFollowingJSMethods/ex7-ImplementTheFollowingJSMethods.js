const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const array1 = [1, 4, 9, 16];

//filter
console.log("- - - Filter");

function callbackFilter(arg) {
    return arg.length > 6 ? true : false;
}

function filter(callbackFilter, arr) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callbackFilter(arr[i]) == true) filterArr.push(arr[i])
    }
    return filterArr;
}

console.log(filter(callbackFilter, words));

//ForEach
console.log("- - - ForEach");

function callbackforEach(arg) {
    return arg.length > 6 ? true : false;
}

function forEach(callbackforEach, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (callbackforEach(arr[i]) == true) console.log(arr[i]);
    }
}

forEach(callbackforEach, words);

//Map
console.log("- - - Map");

function callbackMapMethod(arg) {
    return arg * 2;
}

function MapMethod(callbackMapMethod, arr) {
    let MapMethodArr = [];
    for (let i = 0; i < arr.length; i++) {
        MapMethodArr.push(callbackMapMethod(arr[i]))
    }
    return MapMethodArr;
}

console.log(MapMethod(callbackMapMethod, array1));