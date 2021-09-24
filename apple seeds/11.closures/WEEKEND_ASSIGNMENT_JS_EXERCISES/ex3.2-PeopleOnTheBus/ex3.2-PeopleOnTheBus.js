const theBus = [
    [5, 0], //5
    [7, 2], //5+7=12 -2 ==10
    [10, 4], //10+10=20 -4 ==16
    [15, 11], //16+15=31 -11 ==20
    [0, 7] // =20+0=20 -0 ==20
]

function sleepingBus(arr) {
    let peopleInBus = 0;
    for (let i = 0; i < arr.length; i++) {
        peopleInBus += arr[i][0];
        peopleInBus -= arr[i][1];
    }
    return peopleInBus;
}

console.log('People still in the bus after the last bus station: ', sleepingBus(theBus), '!!!');