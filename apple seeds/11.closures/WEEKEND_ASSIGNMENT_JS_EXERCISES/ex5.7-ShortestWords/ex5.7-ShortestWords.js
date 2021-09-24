function shortestWords(str) {
    splitStr = str.split(" ");
    minWordLength = splitStr[0].length;
    splitStr.forEach(element => {
        if (element.length < minWordLength)
            minWordLength = element.length;
    });
    return minWordLength;
}

console.log(shortestWords("Hello world whats going with you guys"));
console.log(shortestWords("Esse fugiat officia id officia duis nisi ex voluptate sit ipsum occaecat."));