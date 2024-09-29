// 1. Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students
let grades = [85, 92, 78, 63, 95, 88, 72, 54];


// 2. Log out how many grades there are
console.log(`There are ${grades.length} grades in the class`);


// 3. Classify each grade into one of the following categories
function letterGrades(grade) {
    if (grade >= 90)
        return 'A';
    if (grade >= 80)
        return 'B';
    if (grade >= 70)
        return 'C';
    if (grade >= 60)
        return 'D';
    return 'F'
}
console.log("Grades:");
for (let i = 0; i < grades.length; i++) {
    console.log(`${grades[i]}: ${letterGrades(grades[i])}`);
}


// 4. Evaluate overall class performance
let total = 0
for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}

let average = total / grades.length

let performance;
if  (average >= 90) {
    performance = 'Excellent';
} else if (average >= 80) {
    performance = 'Good';
} else if (average >= 70) {
    performance = 'Satisfactory';
} else {
    performance = 'Needs Improvement';
}

console.log(`Overall Class Performance: ${performance}`);

// 6. Outputs
let highestGrade = Math.max(...grades);
let lowestGrade = Math.min(...grades);

console.log(`Highest Grade: ${highestGrade}, ${letterGrades(highestGrade)}`)
console.log(`Lowest Grade: ${lowestGrade}, ${letterGrades(lowestGrade)}`)
console.log(`Class Average: ${average.toFixed(2)}`);