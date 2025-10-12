// Print prime numbers up to n
let n = 50; // change this to whatever limit you want

for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i); // printed result
    }
}
