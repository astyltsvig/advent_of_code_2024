// Load input data from input.txt
const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8')

// Split the input columns to 2 arrays split by new line
const rows = input.split('\n')

// The rows is split by weird 3 empty spaces, so we need to split it again to 2 separate arrays
// And parse the value to int, so we can calucating the difference

const leftList = rows.map((row) => parseInt(row.split('   ')[0]))
const rightList = rows.map((row) => parseInt(row.split('   ')[1]))

// Now we need sort the leftList and rightList ascending, so we get the smallest value first
leftList.sort((a, b) => a - b)
rightList.sort((a, b) => a - b)

// Now we compare the indices of the leftList and rightList and calculating the difference
let difference = 0
for (let i = 0; i < leftList.length; i++) {
	let leftListItem = leftList[i]
	let rightListItem = rightList[i]
	difference += Math.abs(leftListItem - rightListItem)
}

console.log('Result of assignment for day 1 is: ' + difference)

// Save the output to result.txt
fs.writeFileSync('./result.txt', difference)
// Run the code with node day_1_solution.js
