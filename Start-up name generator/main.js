// 1. Inside the function there should be two arrays with startup words
const firstWords = ["Tech", "Meta", "Eco", "Neo", "Vivid", "Engine", "Quantum", "Venture", "Future", "Digital"];

const secondWords = ["Vision", "Solutions", "Systems", "Edge", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Next"];

//Create a randomizer for the first array
let randomIndex1 = Math.floor(Math.random() * firstWords.length);

let randomFirstWord = firstWords[randomIndex1]

console.log(`Random word from firstWords: ${randomFirstWord}`)

//Create a randomizer for the second array
let randomIndex2 = Math.floor(Math.random() * secondWords.length);

let randomSecondWords = secondWords[randomIndex2]

console.log(`Random word from secondWords: ${randomSecondWords}`)

//Now we combine it so it creates a random name for our startup company
let startUpCompanyName = `${randomFirstWord} ${randomSecondWords}`

console.log(`Startup company name should be: ${startUpCompanyName}`)