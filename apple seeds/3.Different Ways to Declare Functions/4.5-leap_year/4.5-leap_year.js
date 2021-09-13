function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                return "Leap Year";
            else
                return "Not a Leap Year";
        } else
            return "Leap Year";
    } else
        return "Not a Leap Year";
}

console.log(`2012 : ${leapYear(2012)}`);
console.log(`2100 : ${leapYear(2100)}`);
console.log(`2400 : ${leapYear(2400)}`);
console.log(`2004 : ${leapYear(2004)}`);