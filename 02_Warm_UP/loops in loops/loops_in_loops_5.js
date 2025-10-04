for(let i = 5; i > 0; i-- ) {
    for(let j = 0; j < i; j++) {
        console.log("i = ", i + " j = ", j)
}
}

// 🔍 Dry Run Step by Step:
// When i = 5

// Inner loop runs j = 0 to 4

// i = 5 j = 0
// i = 5 j = 1
// i = 5 j = 2
// i = 5 j = 3
// i = 5 j = 4

// When i = 4

// Inner loop runs j = 0 to 3

// i = 4 j = 0
// i = 4 j = 1
// i = 4 j = 2
// i = 4 j = 3

// When i = 3

// Inner loop runs j = 0 to 2

// i = 3 j = 0
// i = 3 j = 1
// i = 3 j = 2

// When i = 2

// Inner loop runs j = 0 to 1

// i = 2 j = 0
// i = 2 j = 1

// When i = 1

// Inner loop runs j = 0

// i = 1 j = 0

// 🧠 Total Iterations

// 5 + 4 + 3 + 2 + 1 = 15 times
// So the console prints 15 lines total.