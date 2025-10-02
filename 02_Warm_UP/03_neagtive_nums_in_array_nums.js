// Function that returns the negative numbers in an array

function negativeNums(arr) {
    let newNegativeArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
        newNegativeArr.push(arr[i]);
        }
    }
    return newNegativeArr;
}

let arr = [1, 34, 435, -45, -3, 67, -77];

let result = negativeNums(arr);
console.log(result) // [ -45, -3, -77 ]