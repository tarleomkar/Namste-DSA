function countNoDigits(n) {
    let count = 0
    while(n > 0) {
    n = Math.floor(n / 10);
    count++;
    }
    return count;
}

let n = 2343;
let result = countNoDigits(n);
console.log(result); // 4

// Note:
// Math.floor: 10.5 => 10
// Math.ceil: 10.5 => 11
// Dry run
// Iteration 1
// n = 2343
// 2343 > 0 (true)
// 2343 = 2343 / 10; => 234.5 using Math.floor returns => 234

// count = 0
// count++; => 1

// goes till 2/10 = 0.2
// 0 > 0 (fails)
// count = 4
