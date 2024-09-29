// 1. Log out how many moves there are in the island
const island = ['-', '-', '-', 'T', '-'];
console.log(`There are ${island.length} moves in the islands`);

// 2. For each move log the following out - If there is a treasure log out:
// Treasure found at move 3 :) If there is not a treasure log out: No treasure found :(
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        console.log(`Treasure found at move ${i + 1} :)`);
    } else {
        console.log(`No treasure found at move ${i + 1} :(`);
    }
}

// 3. Log out how many treasures there are in the island
let treasureCount = 0;
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        treasureCount++;
    }
}
console.log(`There was ${treasureCount} treasures in the island`);