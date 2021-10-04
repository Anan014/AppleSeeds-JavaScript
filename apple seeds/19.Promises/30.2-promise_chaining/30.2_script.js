const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let strings = arr.map(element => {
                return (typeof element === 'string') ? element.toUpperCase() : reject("Error");
            });
            resolve(strings);
        }, 1000);
    });
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let strings = arr.map(element => {
                return (typeof element === 'string') ? element : reject("Error 2");
            });
            resolve(strings.sort());
        }, 1000);
    });
}

const array = ["cillum", "eu", "quis", "nulla", "anan"];

makeAllCaps(array)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("first", error);
    });

sortWords(array)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });