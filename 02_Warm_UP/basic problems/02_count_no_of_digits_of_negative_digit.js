function countNoDigitsofNegNums(n) {
if(n == 0) {
return 1;
}

// converting negative numbers to positive using Math.abs
n = Math.abs(n)
let count = 0;
while(n > 0) {
    n = Math.floor(n / 10);
    count++;
}
return count
}

let n = -345;
let result = countNoDigitsofNegNums(n);
console.log(result); // 3

// 🧠 Step-by-step Dry Run (for n = -345):
// Step 1:

// n = -345

// Check if (n == 0) → ❌ false
// So we skip that part.

// Step 2:

// Convert to positive:
// n = Math.abs(-345) → n = 345

// count = 0

// Step 3: Start while loop → while (n > 0)

// 1st iteration:

// n = 345

// n = Math.floor(345 / 10) → n = 34

// count = 1

// 2nd iteration:

// n = 34

// n = Math.floor(34 / 10) → n = 3

// count = 2

// 3rd iteration:

// n = 3

// n = Math.floor(3 / 10) → n = 0

// count = 3

// Now n = 0 → loop stops ✅

// Return count = 3.

// Output → 3

// 🔹 Why if (n == 0) { return 1; }?

// That’s to handle a special case — when the number itself is zero.

// 👉 Example:

// countNoDigitsofNegNums(0)


// If we skip that if, then the while (n > 0) loop won’t run even once,
// so count will stay 0, and the function would wrongly return 0.

// But 0 has 1 digit, so we fix it with:

// if (n == 0) {
//   return 1;
// }

// ✅ Final Output for -345

// Answer → 3 digits

// In short:

// That if is just to handle 0 properly.

// Rest of the code uses Math.abs to ignore negative sign and just count digits.