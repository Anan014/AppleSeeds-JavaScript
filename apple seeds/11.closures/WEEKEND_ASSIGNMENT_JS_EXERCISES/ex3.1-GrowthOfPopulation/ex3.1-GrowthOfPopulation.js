function nb_year(p0, percent, aug, p) {
    let yearsCounter = 0;
    while (p0 <= p) {
        p0 += aug + (p0 * percent / 100);
        yearsCounter++;
    }
    return yearsCounter;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));