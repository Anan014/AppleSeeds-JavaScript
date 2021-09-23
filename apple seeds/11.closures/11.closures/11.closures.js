//block 1
console.log("block 1");

var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9); //5
console.log(firstResult);
var result = firstResult(2); //error
console.log(result);

//block 2
console.log("block 2");
var a = 1;

function b2() {
    a = 10;
    return;

    function a() {}
}
b2();
console.log(a); //1

//block 3
console.log("block 3");
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 1000);
}