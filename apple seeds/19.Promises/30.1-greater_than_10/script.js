const checkTen = (num) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num >= 10) {
                resolve("Greater than 10");
            } else {
                reject("Less than 10");
            }
        }, 1000);
    });

}

checkTen(5)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });