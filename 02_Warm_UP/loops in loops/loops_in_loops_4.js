for(let i = 0; i < 3; i++) {
    for(let j = i; j > 0; j--) {
    console.log("i = ", i + " j = ", j)
}
}

// Outer loop (i loop):

// i goes from 0 → 1 → 2.

// Inner loop (j loop):

// Starts at j = i and runs while j > 0, decrementing each time.

// Dry Run:

// 1. i = 0

// Inner loop: j = 0; j > 0 → false → nothing printed.

// 2. i = 1

// Inner loop: j = 1; j > 0 → true → print → i = 1 j = 1

// Decrement j = 0; j > 0 → false → stop.

// 3. i = 2

// Inner loop:

// j = 2; j > 0 → true → print → i = 2 j = 2

// Decrement j = 1; j > 0 → true → print → i = 2 j = 1

// Decrement j = 0; j > 0 → false → stop.

// Final Output:
// i = 1 j = 1
// i = 2 j = 2
// i = 2 j = 1


// 👉 Notice how this is reverse counting for j.

// When i = 1, it prints just one pair.

// When i = 2, it prints two pairs, but j goes downward (2 → 1).