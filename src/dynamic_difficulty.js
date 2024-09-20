const crypto = require("crypto");

// Simplified hash function
function calculateHash(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
}

let difficulty = 1; // Start with low difficulty
const maxAttempts = 100000; // Max attempts per difficulty level
let blocksFound = 0;

function mineBlock() {
    for (let nonce = 0; nonce < maxAttempts; nonce++) {
        const data = `block-${blocksFound}-${nonce}`;
        const hash = calculateHash(data);

        // Check if the hash meets the difficulty requirement
        if (hash.startsWith("0".repeat(difficulty))) {
            console.log(`Block found! Nonce: ${nonce}, Hash: ${hash}`);
            blocksFound++;
            adjustDifficulty(true); // Increase difficulty
            return;
        }
    }
    console.log("No block found within max attempts. Adjusting difficulty...");
    adjustDifficulty(false); // Decrease difficulty
}

function adjustDifficulty(found) {
    if (found) {
        difficulty++; // Increase difficulty if a block was found
    } else {
        difficulty = Math.max(1, difficulty - 1); // Decrease difficulty, but not below 1
    }
    console.log(`New difficulty: ${difficulty}`);
}

// Run the mining process in a loop
setInterval(() => {
    mineBlock();
}, 1000); // Try mining a block every second
