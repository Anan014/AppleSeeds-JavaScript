const checkTen = (num) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num >= 10) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });

}

checkTen(5)
    .then(() => {
        console.log("Greater than 10");
    })
    .catch(() => {
        console.log("Less than 10");
    });