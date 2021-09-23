let boolean = {
    check_boolian: function(bool) {
        if (bool == true)
            return "Yes"
        else
            return "No"
    }
}
console.log(boolean.check_boolian(8 > 10));
console.log(boolean.check_boolian(8 < 10));