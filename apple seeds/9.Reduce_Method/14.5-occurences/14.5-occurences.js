function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1; //1) counter wasnt going up 2)vscode debugger 
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");