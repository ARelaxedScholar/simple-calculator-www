console.log("Connected");
let calculation = prompt("How many calculations do you want to do?");
const calculationCount = Number(calculation);
let successfulOps = 0;

if (isNaN(calculationCount)) {
	alert("You inputted an invalid number of calculations, refresh page to try again");
}

let sentinel = 0;
while (sentinel < calculationCount) {
	let firstNumber = prompt("Please enter the first number");
	firstNumber = parseFloat(firstNumber);
	while (isNaN(firstNumber)) {
		alert("The first number is invalid! Please ensure to pass in a number.");
		firstNumber = prompt("Please enter the first number again.");
		firstNumber = parseFloat(firstNumber);
	}
	operator = prompt('Please choose your operator: ("+", "-", "/", "*")');
	while (!['+', '-', '/', '*'].includes(operator)) {
		alert("Please ensure to choose a valid operator. Try again.");
		operator = prompt('Please choose your operator: ("+", "-", "/", "*")');
	}
	secondNumber = prompt("Please enter the second number");
	secondNumber = parseFloat(secondNumber);
	while (isNaN(secondNumber)) {
		alert("The second number is invalid! Please ensure to pass in a number.");
		secondNumber = prompt("Please enter the second number again.");
		secondNumber = parseFloat(secondNumber);
	}

	switch (operator) {
		case '/':
			if (secondNumber != 0) {
				alert(`${firstNumber}/${secondNumber}=${firstNumber/secondNumber}`);
				successfulOps++;
			} else {
				alert(`You cannot do division by 0`);
			}
			break;
		default:
			// All the others can't really fail.
			const codeString = `${firstNumber}${operator}${secondNumber}`;
			alert(`${firstNumber}${operator}${secondNumber}=${eval(codeString)}`);
			successfulOps++;
	}
	sentinel++;
	alert(`Successfully completed ${successfulOps} out of ${calculationCount}`);
}
