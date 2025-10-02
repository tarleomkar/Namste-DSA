// Write function that returns the number of negative numbers in an array

function negativeNums(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
        count = count + 1;
    }
    }
    return count;
}

let arr = [1, 34, 435, -45, -3, 67, -77]; // 3

let result = negativeNums(arr);
console.log(result);
