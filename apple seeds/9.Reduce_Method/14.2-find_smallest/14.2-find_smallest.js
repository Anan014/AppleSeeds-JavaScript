function findSmallest(a, b, c) {
    if (a > c && b > c) { //1) invalid condition 2)vscode debugger
        return c;
    } else if (b > a && c > a) { //1) invalid condition 2)vscode debugger
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2); //1) wrong name 2)vscode debugger