# Tutorial_One
 COMP726

README
How to Run the Scripts
To run the scripts, follow these steps:

Install Node.js: Ensure you have Node.js installed on your computer. You can check if it's installed by running node -v in your command line.

Navigate to the Project Directory: Open your command line or terminal and navigate to the folder where the scripts are located. For example:

bash
Copy code
cd path/to/your/project/src
Install Dependencies: If you haven’t already, install the required dependencies by running:

Copy code
npm install
Run the Scripts: Execute each script using Node.js. You can run them individually like this:

Copy code
node simplified_proof_of_work.js
node dynamic_difficulty.js
node calculate_hashpower.js
1. simplified_proof_of_work.js
Purpose:
This script illustrates a simple proof-of-work algorithm.

Functionality:
It tries to find a valid nonce by hashing a mix of data and the nonce.
A valid hash must have a specific number of leading zeroes, which depends on the difficulty level.
The script runs with two different difficulty levels to demonstrate how difficulty impacts the ability to find a block.
Example Output:
yaml
Copy code
Running simplified proof of work with difficulty 2...
Nonce: 1, Hash: 9d5ed678fe57bcca610140957afab571
Nonce: 2, Hash: 7c6a180b36896a6ba0eed6ae3a8b0b9f
Nonce: 3, Hash: 9d5ed678fe57bcca610140957afab571
Nonce: 4, Hash: 4a44dc15364204a80fe80e9039455cc1
...
Nonce: 286, Hash: 00328ce57bbc14b33bd6695bc8eb32cdf2fb5f3a7d89ec14a42825e15d39df60
Block found! Nonce: 286, Hash: 00328ce57bbc14b33bd6695bc8eb32cdf2fb5f3a7d89ec14a42825e15d39df60

Running simplified proof of work with difficulty 4...
No block found within max attempts.
2. dynamic_difficulty.js
Purpose:
This script simulates a proof-of-work system that changes mining difficulty based on how fast blocks are found.

Functionality:
It mines blocks and tracks how quickly they are discovered.
If blocks are found more quickly than expected, the difficulty level increases.
If blocks are found more slowly, the difficulty decreases.
The script outputs the nonce and hash of each block found along with the current difficulty.
Example Output:
yaml
Copy code
Block found! Nonce: 24, Hash: 0eb425ad35184a83ee4ab20ef62be62686e78d29e68fd9c7fb486b87e7b0d3c2
New difficulty: 2
Block found! Nonce: 505, Hash: 00a963fe848582c679deea964604985e02341052f9964e9b9b070fdd256d2df2
New difficulty: 3
Block found! Nonce: 2245, Hash: 000b7f6254b3049691837a0692e33e81063ed2e7126f79a5530198e1b5f8c368
New difficulty: 4
No block found within max attempts. Adjusting difficulty...
New difficulty: 3
...
3. calculate_hashpower.js
Purpose:
This script estimates the hash power of your computer.

Functionality:
It measures how many hashes your computer can perform in a specific time frame.
This information is used to estimate how long it would take to find a block in the current Bitcoin network based on your computer's hash power.
Example Output:
yaml
Copy code
Hash power: 3500 hashes/sec
Estimated time to find a block: 172800 seconds (approximately 48 hours)