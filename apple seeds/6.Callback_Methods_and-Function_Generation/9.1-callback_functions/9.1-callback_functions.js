function isString(str, func) {
    if (typeof str === 'string' || str instanceof String)
        return func(str);
    else
        return console.log("Not a string dude !!!");
}

function checkString(str) {
    console.log(str);
}

isString("Anan", checkString);
isString(5, checkString);