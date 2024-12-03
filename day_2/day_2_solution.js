// Load input data from input.txt
// Split the input to arrays split by new line
// Parse all the values to int
const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8')
let rows = input.split('\n')
rows = rows.map((row) => row.split(' ').map((value) => parseInt(value)))

// We need implement 2 rulesets, so we can validate if the row passes the rulesets

// Rule 1: All the numbers in a row is either increasing or decreasing
function isIncreasingOrDecreasing(row) {
	let isIncreasing = true
	let isDecreasing = true

	for (let i = 0; i < row.length - 1; i++) {
		if (row[i] < row[i + 1]) {
			isDecreasing = false // Break decreasing trend
		} else if (row[i] > row[i + 1]) {
			isIncreasing = false // Break increasing trend
		} else {
			return false // Equal values break both rules
		}
	}
	return isIncreasing || isDecreasing
}

// Rule 2: Any two adjacent levels differ by at least one and at most three.
function maxAdjacentDifference(row) {
	for (let i = 0; i < row.length - 1; i++) {
		const difference = Math.abs(row[i] - row[i + 1])
		if (difference > 3) {
			return false
		}
	}
	return true
}

// We need to know how many of rows are safe by validating them to the rulesets
let safeRows = 0;
rows.forEach((row, index) => {
	if (isIncreasingOrDecreasing(row) && maxAdjacentDifference(row)) {
		console.log(`Row ${index + 1} is safe:`, row)
		safeRows++
	} else {
		console.log(`Row ${index + 1} is invalid:`, row)
	}
})

const result = safeRows

console.log('Result of assignment for day 2 is: ' + result)

// Save the output to result.txt
fs.writeFileSync('./result.txt', result.toString())
