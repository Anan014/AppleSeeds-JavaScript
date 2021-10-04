const printsName = {
    name: "Anan",
    printTheName: function() {
        console.log(this.name);
    },
    printAfterSecond: function() {
        setTimeout(function() {
            console.log(this.name);
        }.bind(printsName), 1000);
    }
}

printsName.printTheName();
const printSec = printsName.printAfterSecond;
printSec();