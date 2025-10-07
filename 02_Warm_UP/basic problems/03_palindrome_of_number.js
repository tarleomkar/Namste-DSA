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

// Dry run
// Step 1: Input
// x = 121


// Check if x < 0 → ❌ (121 is positive)
// So continue.

// Step 2: Initialize
// isCopy = 121
// rev = 0

// Step 3: While loop → while (x > 0)
// Iteration 1:
// x = 121
// rem = x % 10 = 1
// rev = (10 * 0) + 1 = 1
// x = Math.floor(121 / 10) = 12


// ✅ After iteration 1:

// rev = 1
// x = 12

// Iteration 2:
// x = 12
// rem = 12 % 10 = 2
// rev = (10 * 1) + 2 = 12
// x = Math.floor(12 / 10) = 1


// ✅ After iteration 2:

// rev = 12
// x = 1

// Iteration 3:
// x = 1
// rem = 1 % 10 = 1
// rev = (10 * 12) + 1 = 121
// x = Math.floor(1 / 10) = 0


// ✅ After iteration 3:

// rev = 121
// x = 0


// Loop ends (since x = 0).

// Step 4: Compare
// rev === isCopy
// 121 === 121 ✅ true

// ✅ Final Output:
// true

// TL;DR — Summary:
// Step	x	rem	rev	Description
// 1	121	1	1	Reverse starts building
// 2	12	2	12	Keep reversing digits
// 3	1	1	121	Reversed number complete
// 🔚	0	-	121	Compare 121 === 121 → ✅ True

// So bro, the logic is perfect.
// If you pass a palindrome like 121, it returns true.
// If you pass 123, it’ll return false.