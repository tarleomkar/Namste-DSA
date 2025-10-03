// Write a function that returns second largest element in an array

function secondLargestEle(arr) {
    let firstLargest = -Infinity;
    let secondLarget = -Infinity;

    for(let i = 0; i < arr.length; i++) {
    if(arr[i] > firstLargest) {
        secondLarget = firstLargest;
        firstLargest = arr[i];
    }
    else if(arr[i] > secondLarget) {
        secondLarget = arr[i]
    }
    }
    return secondLarget;
}

let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondLargestEle(arr);
console.log(result); // 8

// Loop dry run 🔎

// i = 0 → arr[0] = 4

// 4 > -Infinity ✅

// so:

// secondLargest = -Infinity

// firstLargest = 4

// Now → firstLargest = 4, secondLargest = -Infinity

// i = 1 → arr[1] = 9

// 9 > 4 ✅

// so:

// secondLargest = 4

// firstLargest = 9

// Now → firstLargest = 9, secondLargest = 4

// i = 2 → arr[2] = 0

// 0 > 9 ❌

// 0 > 4 ❌ → no update

// (firstLargest = 9, secondLargest = 4)

// i = 3 → arr[3] = 2

// 2 > 9 ❌

// 2 > 4 ❌ → no update

// i = 4 → arr[4] = 8

// 8 > 9 ❌

// 8 > 4 ✅

// so: secondLargest = 8

// (firstLargest = 9, secondLargest = 8)

// i = 5 → arr[5] = 7

// 7 > 9 ❌

// 7 > 8 ❌ → no update

// i = 6 → arr[6] = 1

// 1 > 9 ❌

// 1 > 8 ❌ → no update

// End result

// firstLargest = 9

// secondLargest = 8

// So output = 8 ✅