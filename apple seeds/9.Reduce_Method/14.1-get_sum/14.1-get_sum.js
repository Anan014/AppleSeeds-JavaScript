function getSum(arr1, arr2) {
    let sum = 0; //1)const cant be changed :2) vscode terminal typeError
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum //1) no return :2) manual eye tracking of basics
}
getSum([1, 2, 3], [5, 66, 23]); //1)wasn't seperated :2)vscode debugger via node.js