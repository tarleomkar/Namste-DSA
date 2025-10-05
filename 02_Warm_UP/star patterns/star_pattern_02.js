// *
// * *
// * * *
// * * * *

let n = 4

for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < i + 1; j++) {
        row = row + " *"
    }
    console.log(row);
}

// 💡 What’s happening
// 1️⃣ let n = 4

// Means we want 4 rows in the triangle.

// 2️⃣ Outer loop → for(let i = 0; i < n; i++)

// Controls rows.

// So i goes 0 → 1 → 2 → 3.

// 3️⃣ Inner loop → for(let j = 0; j < i + 1; j++)

// Controls how many stars appear in each row.

// Notice i + 1:

// Row 0 → 1 star

// Row 1 → 2 stars

// Row 2 → 3 stars

// Row 3 → 4 stars

// 4️⃣ row = row + " *"

// Keeps adding " *" to the row string.

// 5️⃣ console.log(row)

// Prints the full line of stars for that row.

// 🧾 Dry Run:
// i	j loop runs	row content	Output line
// 0	j = 0	" *"	*
// 1	j = 0,1	" * *"	* *
// 2	j = 0,1,2	" * * *"	* * *
// 3	j = 0,1,2,3	" * * * *"	* * * *