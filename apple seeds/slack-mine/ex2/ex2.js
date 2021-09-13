//כתוב פונקציה המקבלת מספר תלת ספרתי ובודקת אם המספר הימני ביותר הוא זוגי או אי זוגי

function isEven(num1) {
    let num = num1 % 100;
    if (num % 2 === 0)
        return "even";
    else
        return "odd";
}

console.log(isEven(130));
console.log(isEven(131));

function avg(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(avg(10, 5));

function fun(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(fun(5, 7, 23));

function fun2(num1, num2, num3, num4, num5, num6) {

    let max1 = Math.max(num1, num2, num3);
    let max2 = Math.max(num4, num5, num6);
    let max3 = Math.max(max2, max1);
    return max3;
}

console.log(fun2(5, 7, 100, 85, 2, 63));