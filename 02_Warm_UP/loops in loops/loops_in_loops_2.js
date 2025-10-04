for(let i = 0; i < 3; i++) {
    for(let j = 0; j < i; j++) {
        console.log(i, j)
    }
}

// Dry run:

// 1. i = 0

// Inner loop: j < 0 → false → nothing printed.

// 2. i = 1

// Inner loop: j = 0; j < 1 → true → prints (1, 0)

// Then j = 1; j < 1 → false → stops.

// 3. i = 2

// Inner loop:

// j = 0; j < 2 → true → prints (2, 0)

// j = 1; j < 2 → true → prints (2, 1)

// j = 2; j < 2 → false → stops.

// Final Output:
// 1 0
// 2 0
// 2 1