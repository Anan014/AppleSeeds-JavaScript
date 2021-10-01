const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function comparFunction(arr1, arr2) {
    let i = 0,
        j = 0,
        flag = 0;

    while (i < arr1.length) {
        while (j < arr2.length) {
            if (arr1[i] == arr2[j]) {

                console.log(arr1[i]);
                flag++;
            }
            j++;
        }
        i++;
        j = 0;
    }
    if (flag == 0) {
        console.log(false);
    }
}

comparFunction(food, food1);
//done