const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1
console.log("Question 1");

function returnNames(objs) {
    let arr = [];
    objs.forEach(element => {
        arr.push({ name: element.name })
    });
    return arr;
}

console.log(returnNames(data));

//2
console.log("Question 2");

function bornBefore1990(obj) {
    return obj.filter(data => {
        return data.birthday.split("-")[2] <= 1990;
    });;
}

console.log(bornBefore1990(data));


//3
console.log("Question 3");

function foodCounter(obj) {
    let foodObj = {};
    obj.forEach(data => {
        data.favoriteFoods.meats.forEach(meat => {
            if (foodObj[meat] == null) {
                foodObj[meat] = 1;
            } else
                foodObj[meat]++;
        });
        data.favoriteFoods.fish.forEach(fish => {
            foodObj[fish] == null ? foodObj[fish] = 1 : foodObj[fish]++;
        });
    });
    return foodObj;
}

console.log(foodCounter(data));