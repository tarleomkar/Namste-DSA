// Palindrome: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x) {
    // logic to handle negative numbers
    if (x < 0) return false;

    let isCopy = x;
    let rev = 0;

    while(x > 0) {
    let rem = x % 10;
    rev = (10 * rev) + rem;
    x = Math.floor(x / 10);
    }

    // if (isCopy == x) {
    // return true
    // } else {
    // return false
    // }

    // short code 
    return rev === isCopy;
}

let result = isPalindrome(121);
console.log(result); // true
