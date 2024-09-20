const crypto = require("crypto");

// Function to calculate SHA-256 hash
function calculateHash(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

// Function to perform simplified proof of work
function simplifiedProofOfWork(difficulty, maxAttempts = 5000) {
  const target = "0".repeat(difficulty);
  let nonce = 0;
  let blockFound = false;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const hash = calculateHash(nonce.toString());
    console.log(`Nonce: ${nonce}, Hash: ${hash}`); // Log for visibility
    if (hash.startsWith(target)) {
      console.log(`Block found! Nonce: ${nonce}, Hash: ${hash}`);
      blockFound = true;
      break;
    }
    nonce++;
  }

  if (!blockFound) {
    console.log("No block found within max attempts.");
  }
}

// Running the proof of work with adjusted difficulties
console.log("Running simplified proof of work with difficulty 1...");
simplifiedProofOfWork(1, 5000);

console.log("Running simplified proof of work with difficulty 2...");
simplifiedProofOfWork(2, 5000);
