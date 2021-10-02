function calcAverage(arr) {
    var sum = 0; //1) undefined
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log(sum);
}
calcAverage([85, 90, 92]);