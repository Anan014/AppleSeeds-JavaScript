/*
--Delete the wrong answers--
1. Which of the following is/are strings?
a) 4
b) 4.0
c) '4' Currect
*/
let var1 = 4;
let var2 = 4.0;
let var3 = '4';
console.log("1. Which of the following is/are strings?");
console.log(var1, typeof(var1));
console.log(var2, typeof(var2));
console.log(var3, typeof(var3));
console.log();

/*
2. Which of the following is/are numbers?
a) 4 currect
b) 4.0 currec
c) '4'
d) -4 currec
*/
let var4 = 4;
let var5 = 4.0;
let var6 = '4';
let var7 = -4;
console.log("2. Which of the following is/are numbers?");
console.log(var4, typeof(var4));
console.log(var5, typeof(var5));
console.log(var6, typeof(var6));
console.log(var7, typeof(var7));
console.log();


/*
3. Which of the following is/are booleans?
a) true currect
b) false currect
c) "true"
*/
let var8 = true;
let var9 = false;
let var10 = "true";
console.log("3. Which of the following is/are booleans?");
console.log(var8, typeof(var8));
console.log(var9, typeof(var9));
console.log(var10, typeof(var10));
console.log();

/*
4. What is the result of 80 + 71.2?
a) 151.2
b) 151
c) 8071.2
*/
let var11 = 151.2;
let var12 = 151;
let var13 = 8071.2;
console.log("4. What is the result of 80 + 71.2?", 80 + 71.2);
console.log(var11, typeof(var11), "currect");
console.log(var12, typeof(var12));
console.log(var13, typeof(var13));
console.log();

/*
5. What is the result of "80" + 71.2?
a) 151.2
b) 151
c) "8071.2"
*/
let var14 = 151.2;
let var15 = 151;
let var16 = "8071.2";
console.log("5. What is the result of \"80\" + 71.2?", "80" + 71.2);
console.log(var14, typeof(var14));
console.log(var15, typeof(var15));
console.log(var16, typeof(var16), "currect");
console.log();

/*
6. Does 100 + 30 produce a number or a string?
a) number
b) string
*/
console.log("6. Does 100 + 30 produce a number or a string?", 100 + 30, typeof(100 + 30));
console.log("number currect");
console.log("string");
console.log();

/*
7. Does "100" + 30 produce a number or a string?
a)number
b)string
*/
console.log("7. Does \"100\" + 30 produce a number or a string?", "100" + "30", typeof("100" + "30"));
console.log("number");
console.log("string currect");
console.log();



//------Submit your answers under the question------//

//create three different ways to declare variables
console.log("create three different ways to declare variables");
let var17 = "varible 1";
const var18 = "varible 2";
var var19 = "varible 3";

console.log("let var17 = varible 1;", var17);
console.log("const var18 = varible 2;", var18);
console.log("var var19 = varible 3;", var19);
console.log();


//declare a variable and reassign a value to it
console.log("declare a variable and reassign a value to it");
let var20;
var20 = 1995;
console.log(var20);
console.log();


//create a variable and after that assign a string with its value being: He's got it!
console.log("create a variable and after that assign a string with its value being: He's got it!");
let var21;
var21 = "He's got it";
console.log(var21);
console.log();


//1. create a variable and assign a value on how much a restaurant bill is.
console.log("1. create a variable and assign a value on how much a restaurant bill is.");
let var22 = 100;


//2. create a variable and assign a value on how much tax they should pay.
console.log("2. create a variable and assign a value on how much tax they should pay.");
let var23 = 1.17;

//3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
console.log("3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.");
let var24 = var22 * var23;
console.log("Your total bill is ", var24, "$.");

// Round the number 50.6 to its nearest integer
console.log("Round the number 50.6 to its nearest integer");
console.log(Math.round(50.6));


//Create a variable that is undefined
console.log("Create a variable that is undefined");
let var25;
console.log(var25);