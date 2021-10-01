const arr = ["boo", "doooo", "hoo", "ro"];

function loopWithWhile(arr) {
    let i = 0;
    while (i < arr.length) {
        arr[i] = arr[i].length;
        i++;
    }
    return arr;
}

console.log(loopWithWhile(arr));