const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

//1
function getCandy(candyStore, id) {
    for (let i = 0; i < candyStore.length; i++)
        if (candyStore[i].id == id)
            return candyStore[i]; //how to return with a text
    return "No Such Thing!!";
}

//2
function getPrice(candyStore, id) {
    for (let i = 0; i < candyStore.length; i++)
        if (candyStore[i].id == id)
            return candyStore[i].price;
    return "No Such Thing!!!"

}

//3
function addCandy(candyStore, id, name, price) {
    const obj = {
        name: name,
        id: id,
        price: price
    }
    candyStore.push(obj);
}

//4
function buy(candyStore, id) {
    for (let i = 0; i < candyStore.candies.length; i++)
        if (candyStore.candies[i].id == id) {
            candyStore.candies[i].amount--;
            candyStore.cashRegister += candyStore.candies[i].price;
        }
    return candyStore;
}


//1
console.log(getCandy(candyStore.candies, 'as12f'));

//2
console.log('The price is: ', getPrice(candyStore.candies, 'as12f'), '$');

//3
addCandy(candyStore.candies, 'yxes6', 'Bazoka', 0.5);
addCandy(candyStore.candies, 'anan18', 'Kinder', 9);
console.log(candyStore);

//4
buy(candyStore, '5hd7y');
console.log(candyStore);