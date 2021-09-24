function shortestWords(str) {
    splitStr = str.split(" ");
    let maxWordLength = splitStr[0].length;
    splitStr.forEach(element => {
        if (element.length > maxWordLength)
            maxWordLength = element.length;
    });

    return splitStr.filter(word => word.length == maxWordLength).join(" ");

}

console.log(shortestWords("Hello world whatsss going with you guys"));
console.log(shortestWords("Laboris in eiusmod ex inrtdidgft ad dolore ea proident incididunt deserunt aute officia."));