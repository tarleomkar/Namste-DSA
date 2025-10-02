// Write a function that searaches for an element in an array and returns the index, if the element is not presenet then return -1

function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 34, 435, 45, 45, 67, 77];

let result = searchElement(arr, 67);
console.log(result) // 5
