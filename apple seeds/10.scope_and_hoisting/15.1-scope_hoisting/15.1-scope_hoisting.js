//Block 1
console.log("Block 1");

function funcA() {
    console.log(a); //undefined
    console.log(foo()); //Wont go to the function
    var a = 1; //decalre a variable

    function foo() {
        return 2;
    }
}
funcA();

//Block 2
console.log("Block 2");
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function() {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test()); //undefined /wrong

//Block 3
console.log("Block 3");

function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); //undefined
console.log(typeof b); //undefined /wrong

//Block 4
console.log("Block 4");

function funcC() {
    console.log("1");
}
funcC(); //1 /wrong 2

function funcC() {
    console.log("2");
}
funcC(); //2

//Block 5
console.log("Block 5");

function funcD1() {
    d = 1;
}
funcD1();
console.log(d); //undefined /wrong 1

function funcD2() {
    var e = 1;
}
funcD2();
//console.log(e); //1

//Block 6
console.log("Block 6");

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();