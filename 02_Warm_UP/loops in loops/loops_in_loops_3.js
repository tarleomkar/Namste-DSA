for(let i = 0; i < 5; i++) {
    for(let j = 0; j <= i; j++) {
        console.log("i = ", i + " j = ", j)
    }
}

// Dry run
// Dry Run Step by Step:

// 1. i = 0

// j = 0 → print i = 0 j = 0

// 2. i = 1

// j = 0 → print i = 1 j = 0

// j = 1 → print i = 1 j = 1

// 3. i = 2

// j = 0 → print i = 2 j = 0

// j = 1 → print i = 2 j = 1

// j = 2 → print i = 2 j = 2

// 4. i = 3

// j = 0 → print i = 3 j = 0

// j = 1 → print i = 3 j = 1

// j = 2 → print i = 3 j = 2

// j = 3 → print i = 3 j = 3

// 5. i = 4

// j = 0 → print i = 4 j = 0

// j = 1 → print i = 4 j = 1

// j = 2 → print i = 4 j = 2

// j = 3 → print i = 4 j = 3

// j = 4 → print i = 4 j = 4

// Final Output (exact sequence):
// i = 0 j = 0
// i = 1 j = 0
// i = 1 j = 1
// i = 2 j = 0
// i = 2 j = 1
// i = 2 j = 2
// i = 3 j = 0
// i = 3 j = 1
// i = 3 j = 2
// i = 3 j = 3
// i = 4 j = 0
// i = 4 j = 1
// i = 4 j = 2
// i = 4 j = 3
// i = 4 j = 4
