function steps(num) {
    let i = 1,
        j = 1,
        shape = "",
        spaces = "";
    while (i <= num) {
        while (j <= i) {
            shape += "#";
            j++;
        }
        j = 1;
        while (j <= num - i) {
            shape += "+";
            j++;
        }
        console.log(shape);
        shape = "";
        i++;
        j = 1;
    }
}

steps(10);