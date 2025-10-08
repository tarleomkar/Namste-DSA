function reverseNumber(x) {
    x = Math.abs(x);
    let xCopy = x;
    let rev = 0;

    while(x > 0) {
    let rem = x % 10;
    rev = (10 * rev) + rem;
    x = Math.floor(x / 10);
    }

    return (xCopy == rev) ? -rev : rev;
}

let result = reverseNumber(1234);
console.log(result); // 4321

// Dry run
// Function: reverseNumber(1234)

// Initial values:

// x = 1234
// xCopy = 1234
// rev = 0

// 🔁 While Loop (runs while x > 0)
// ➤ Iteration 1:
// x = 1234
// rem = 1234 % 10 = 4
// rev = (10 * 0) + 4 = 4
// x = Math.floor(1234 / 10) = 123


// ✅ After first loop → rev = 4, x = 123

// ➤ Iteration 2:
// x = 123
// rem = 123 % 10 = 3
// rev = (10 * 4) + 3 = 43
// x = Math.floor(123 / 10) = 12


// ✅ After second loop → rev = 43, x = 12

// ➤ Iteration 3:
// x = 12
// rem = 12 % 10 = 2
// rev = (10 * 43) + 2 = 432
// x = Math.floor(12 / 10) = 1


// ✅ After third loop → rev = 432, x = 1

// ➤ Iteration 4:
// x = 1
// rem = 1 % 10 = 1
// rev = (10 * 432) + 1 = 4321
// x = Math.floor(1 / 10) = 0


// ✅ After fourth loop → rev = 4321, x = 0

// 🚪 Loop ends (x = 0)

// Now outside loop:

// xCopy = 1234
// rev = 4321


// Check condition:

// xCopy == rev ? -rev : rev


// → 1234 == 4321 ❌ false

// So return rev = 4321

// 🧾 Final Output:
// 4321 ✅