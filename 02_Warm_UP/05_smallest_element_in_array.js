// Write a function that returns largest element in an array

function smallestEle(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
        smallest = arr[i];
    }
    }
    return smallest;
}

let arr = [1, 34, 435, 45, 45, 67, 77];

let result = smallestEle(arr);
console.log(result); // 1

// other solution
console.log(Math.min(...arr))