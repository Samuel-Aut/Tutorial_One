const crypto = require('crypto');

// Function to calculate hash
function calculateHash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// Function to calculate hash power
function calculateHashPower(duration, numHashes) {
    const hashPower = numHashes / duration; // hashes per second
    return hashPower;
}

// Main function to measure hash power
function measureHashPower() {
    const startTime = Date.now();
    const numHashes = 100000; // Number of hashes to calculate
    let hash;

    // Calculate multiple hashes
    for (let i = 0; i < numHashes; i++) {
        hash = calculateHash(`data-${i}`);
    }

    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000; // Convert to seconds

    const hashPower = calculateHashPower(duration, numHashes);

    console.log(`Hash power: ${hashPower.toFixed(2)} hashes/sec`);

    // Estimate time to find a block in the current Bitcoin network
    const currentBitcoinDifficulty = 100000; // Lower example difficulty for testing
    const averageTimePerBlock = 600; // Average time to find a block (in seconds)
    const estimatedTimeToFindBlock = (currentBitcoinDifficulty / hashPower) * averageTimePerBlock;

    console.log(`Estimated time to find a block: ${estimatedTimeToFindBlock.toFixed(2)} seconds (${(estimatedTimeToFindBlock / 3600).toFixed(2)} hours)`);
}

measureHashPower();
