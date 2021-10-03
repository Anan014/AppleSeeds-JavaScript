const storm = {
    superPower: "flying",
    printSuperPower

}


function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printSuperPower()