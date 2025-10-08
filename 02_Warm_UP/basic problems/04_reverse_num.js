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
