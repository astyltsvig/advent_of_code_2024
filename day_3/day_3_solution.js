// Load input data from input.txt
// Split the input to arrays split by new line
// Parse all the values to int
const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8')

// We need to wash the input, so we get mul(int, int)

var regExp = /mul\(\d+,\d+\)/g;  
var cleanInput = input.match(regExp); 

console.log(cleanInput)

var result = 0
cleanInput.forEach(item => {
	var cleanString = item.replace('mul(', '').replace(')','')
	var arr = cleanString.split(',')
	console.log(arr)
	result += parseInt(arr[0]) * parseInt(arr[1])
})



console.log('Result of assignment for day 3 is: ' + result)

// Save the output to result.txt
fs.writeFileSync('./result.txt', result.toString())
