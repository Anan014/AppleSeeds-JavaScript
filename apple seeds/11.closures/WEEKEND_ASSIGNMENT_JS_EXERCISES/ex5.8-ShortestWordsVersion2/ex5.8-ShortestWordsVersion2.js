function shortestWords(str) {
    splitStr = str.split(" ");
    let maxWordLength = splitStr[0].length;
    let maxWord = "";
    splitStr.forEach(element => {
        if (element.length > maxWordLength)
            maxWordLength = element.length;
    });
    splitStr.forEach(element => {
        if (element.length == maxWordLength)
            console.log(element);
    });
}

shortestWords("Hello world whatsss going with you guys");
shortestWords("Laboris in eiusmod ex ad dolore ea proident incididunt deserunt aute officia.");