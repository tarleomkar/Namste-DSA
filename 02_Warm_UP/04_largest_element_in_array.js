// Write a function that returns largest element in an array

function largestEle() {
    let largest = -1;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    }
    return largest;
}

let arr = [1, 34, 435, 45, 45, 67, 77];

let result = largestEle(arr)
console.log(result) // 435